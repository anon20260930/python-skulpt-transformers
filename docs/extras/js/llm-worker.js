// This worker is designed to handle LLM inference requests in a separate thread, 
// allowing the main UI thread to remain responsive.

// It uses transformers.js to load and run a causal language model (Qwen3-0.6B-ONNX) in the browser,
// leveraging WebGPU or WASM for computation. The worker manages multiple connected ports,
// queues requests, and streams generated text back to the main thread.

import { TextStreamer, AutoTokenizer, AutoModelForCausalLM } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1';

let tokenizer = null;
let model = null;
let modelLoadPromise = null;
let generationInProgress = false;
const connectedPorts = new Set();
const requestQueue = [];

const MODEL_CONFIG = { 
  modelName: "onnx-community/Qwen3-0.6B-ONNX", 
  dtype: "q4f16" 
};

function postToPort(port, payload) {
  try {
    port.postMessage(payload);
  } catch (error) {
    // Ignore transient port errors (e.g., page already closed).
  }
}

async function getOptimalDevice() {
  // 1. Mobile Device Guard
  const isMobile =
    navigator.userAgentData?.mobile ??
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    console.warn("Mobile device detected. Returning null.");
    return null;
  }

  // 2. WebGPU Availability Check
  if (!('gpu' in navigator)) return 'wasm';

  try {
    const adapter = await navigator.gpu.requestAdapter({
      powerPreference: 'high-performance'
    });
    
    if (!adapter) return 'wasm';

    // Check the specific limit causing your crash
    const maxBuffer = adapter.limits.maxStorageBufferBindingSize;
    console.log(`Device supports ${maxBuffer} bytes per buffer`);

    // A 500MB model usually requires buffers larger than 1024MB
    if (maxBuffer < 1024 * 1024 * 1024) {
      console.warn("Buffer limit too low for WebGPU inference. Falling back to WASM.");
      return null;
    }

    return 'webgpu';
  } catch (e) {
    return 'wasm';
  }
}

// Function reference that will be assigned during loadModel()
let runSingleGeneration = null;

async function loadModel() {

  // Helper to broadcast progress to all connected ports
  const reportProgress = (progress) => {
    if (progress && typeof progress === 'object') {
      if (progress.progress === undefined ) {
        progress.progress = 100;
      }
      const statusMessage = {
        type: 'STATUS', 
        message: `Selected device: ${device}.\nLoading model... ${Math.round(progress.progress)}% (${progress.status})`
      };
      for (const port of connectedPorts) {
        postToPort(port, statusMessage);
      }
    }
  };

  const progressCallback = (info) => {
    // Info contains { status, file, progress, ... }
    reportProgress(info);
  };
  
  const device = await getOptimalDevice();
  console.log(`Optimal device selected: ${device}`);
  
  if (!device) {
    // When no device is found, we mock the tokenizer and model with 
    // error-throwing functions to allow skulpt chat() function to 
    // work, and the error can then be handled by skulpt.

    console.error('No suitable device found for model inference');
    const modelError = new Error('Model initialization failed: No suitable device found for inference.');

    // Mock the Tokenizer and Model to prevent further usage and provide clear error messages
    tokenizer = {
      __isMock: true,
      encode: () => { throw modelError; },
      apply_chat_template: () => { throw modelError; }
    };

    model = {
      __isMock: true,
      generate: () => Promise.reject(modelError)
    };

    // Must report status 'done' to close any UI loading overlays.
    reportProgress({progress: 100, status: 'done'});
    console.warn("Model load failed, but worker is still responsive. Errors will be thrown on usage.");

    runSingleGeneration = runCloudGeneration;

    return;

  }

  // Attach the callback to both loading operations
  tokenizer = await AutoTokenizer.from_pretrained(MODEL_CONFIG.modelName);

  try {
    model = await AutoModelForCausalLM.from_pretrained(MODEL_CONFIG.modelName, {
      device: device,
      dtype: MODEL_CONFIG.dtype,
      progress_callback: progressCallback
    });
  } catch (e) {
    model = await AutoModelForCausalLM.from_pretrained(MODEL_CONFIG.modelName, {
      device: "wasm",
      dtype: MODEL_CONFIG.dtype,
      progress_callback: progressCallback
    });
  }

  // Local model succeeded: point to local execution
  runSingleGeneration = runLocalGeneration;
}

function ensureModelLoaded() {
  if (tokenizer && model) {
    return Promise.resolve();
  }

  if (!modelLoadPromise) {
    modelLoadPromise = loadModel().catch((error) => {
      // Allow retry after a failed load.
      modelLoadPromise = null;
      throw error;
    });    
  }

  return modelLoadPromise;
}

async function handleGenerateRequest(port, payload) {
  const { prompt, promptStart, temperature, enable_thinking } = payload || {};

  if (!prompt) {
    postToPort(port, { type: 'ERROR', message: 'Prompt is required' });
    return;
  }

  requestQueue.push({
    port,
    prompt,
    promptStart: promptStart || '',
    temperature: typeof temperature === 'number' ? temperature : 0.2,
    enable_thinking: enable_thinking !== undefined ? Boolean(enable_thinking) : true,
  });

  postToPort(port, { type: 'STATUS', message: `Queued (${requestQueue.length})` });
  void processQueue();
}

function removeQueuedRequestsForPort(port) {
  for (let i = requestQueue.length - 1; i >= 0; i -= 1) {
    if (requestQueue[i].port === port) {
      requestQueue.splice(i, 1);
    }
  }
}

async function processQueue() {
  if (generationInProgress) {
    return;
  }

  generationInProgress = true;

  try {
    while (requestQueue.length > 0) {
      const request = requestQueue.shift();
      if (!request) {
        continue;
      }

      if (!connectedPorts.has(request.port)) {
        continue;
      }

      await runSingleGeneration(request);
    }
  } finally {
    generationInProgress = false;
  }
}

async function runLocalGeneration(request) {
  const {
    port,
    prompt,
    promptStart,
    temperature = 0.7,
    enable_thinking = true,
  } = request;

  try {
    await ensureModelLoaded();
  } catch (error) {
    postToPort(port, { type: 'ERROR', message: error.message });
    return;
  }

  const streamer = new TextStreamer(tokenizer, {
    skip_prompt: true,
    callback_function: (text) => {
      if (connectedPorts.has(port)) {
        postToPort(port, { type: 'CHUNK', text });
      }
    },
  });

  try {
    let messages;

    if (Array.isArray(prompt)) {
      // If the array already uses { role, content }, use it directly:
      // messages = prompt;
      
      // If your array looks like [ { user: "..." }, { assistant: "..." } ],
      // we map it to standard { role, content } format that tokenizers expect:
      messages = prompt.map(msg => {
        if (msg.role && msg.content) return msg; // Already formatted
        
        const role = Object.keys(msg)[0];
        return {
          role: role,
          content: msg[role]
        };
      });
    } else {
      // Fallback for raw string prompts
      messages = [
        { role: "user", content: prompt }
      ];
    }

    const chatPrompt = tokenizer.apply_chat_template(messages, {
      tokenize: false,
      add_generation_prompt: true,
      enable_thinking
    });

    const { input_ids } = await tokenizer(chatPrompt + promptStart);

    await model.generate({
      input_ids,
      max_new_tokens: 4096,
      streamer: streamer,
      
      // --- REPETITION & SAMPLING CONTROLS ---
      repetition_penalty: 1.1, // 1.0 means no penalty. Try values between 1.1 and 1.2
      
      // Because your temperature is 0.0 (greedy search), top_p is ignored.
      // If repetition_penalty alone doesn't fix it, switch to contrastive search or sampling:
      temperature,             // Slightly above 0.0 allows the model to deviate if stuck in a loop
      top_p: 0.9,
      do_sample: true,         // Must be true to use temperature/top_p
    });
    postToPort(port, { type: 'DONE' });
  } catch (error) {
    postToPort(port, { type: 'ERROR', message: error.message });
  }
}

async function runCloudGeneration(request) {
  const { port, prompt, promptStart, temperature = 0.7, enable_thinking = true } = request;

  // 1. Normalize prompt input to standard OpenAI messages format [{ role, content }]
  let messages = [];

  if (Array.isArray(prompt)) {
    messages = prompt.map((msg) => {
      if (msg.role && msg.content) return msg;
      const role = Object.keys(msg)[0];
      return { role: role, content: msg[role] };
    });
  } else {
    messages = [{ role: 'user', content: prompt }];
  }

  // If promptStart was specified (e.g. prefilling assistant response), append or merge it
  if (promptStart) {
    messages.push({ role: 'assistant', content: promptStart });
  }

  try {
    // 2. Request streaming completion from DashScope compatible endpoint
    // Note: DashScope's OpenAI-compatible endpoint accepts enable_thinking at root or extra_body
    const response = await fetch("https://ai-proxy.jmadar.workers.dev/", {
      method: "POST",
      body: JSON.stringify({
        model: "qwen3-8b", 
        messages: messages,
        temperature: temperature,
        stream: true,
        enable_thinking: enable_thinking
      }),
    });

    console.log(`Cloud API response status: ${response.status}`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Cloud API error (${response.status}): ${errorText}`);
    }

    // 3. Process SSE (Server-Sent Events) stream line-by-line
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    // Track state to inject raw <think> tags into the stream
    let hasStartedThinking = false;
    let hasEndedThinking = false;

    const emitText = (text) => {
      if (text && connectedPorts.has(port)) {
        postToPort(port, { type: 'CHUNK', text });
      }
    };

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith(":")) continue;

        if (trimmed === "data: [DONE]") {
          break;
        }

        if (trimmed.startsWith("data: ")) {
          try {
            const jsonStr = trimmed.slice(6);
            const parsed = JSON.parse(jsonStr);
            const delta = parsed.choices[0]?.delta || {};

            // A. Check for Reasoning Content (DashScope specific field)
            const reasoningChunk = delta.reasoning_content;

            if (reasoningChunk) {
              if (!hasStartedThinking) {
                emitText("<think>\n");
                hasStartedThinking = true;
              }
              emitText(reasoningChunk);
            }

            // B. Check for Standard Answer Content
            const contentChunk = delta.content;
            if (contentChunk) {
              // If we were thinking earlier, close the think block before streaming main output
              if (hasStartedThinking && !hasEndedThinking) {
                emitText("\n</think>\n\n");
                hasEndedThinking = true;
              }
              emitText(contentChunk);
            }

          } catch (err) {
            // Ignore malformed JSON or partial chunks
          }
        }
      }
    }

    // Edge case: If generation ends while still in thinking phase without standard content
    if (hasStartedThinking && !hasEndedThinking) {
      emitText("\n</think>\n\n");
    }

    postToPort(port, { type: 'DONE' });

  } catch (error) {
    postToPort(port, { type: 'ERROR', message: error.message });
  }
}

self.onconnect = (event) => {
  const port = event.ports[0];
  connectedPorts.add(port);
  port.start();

  if (tokenizer && model) {
    postToPort(port, { type: 'READY' });
  } else {
    postToPort(port, { type: 'STATUS', message: 'Loading model...' });
    ensureModelLoaded()
      .then(() => {
        console.log("Model loaded successfully");
        postToPort(port, { type: 'READY' });
      })
      .catch((error) => {
        postToPort(port, { type: 'ERROR', message: error.message });
      });
  }

  port.onmessage = (messageEvent) => {
    const data = messageEvent.data || {};

    if (data.type === 'DISCONNECT') {
      connectedPorts.delete(port);
      removeQueuedRequestsForPort(port);
      return;
    }

    handleGenerateRequest(port, data);
  };
};