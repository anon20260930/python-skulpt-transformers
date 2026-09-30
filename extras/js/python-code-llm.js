const LLM_WORKER_PATH = './js/llm-worker.js';

// Prompt start is used to manipulate the initial output of the model.
// It's basically a hard injection of generated text to force it to comply.
const DEFAULT_PROMPT_START = "";
const DEFAULT_READY_TIMEOUT_MS = 180000;
const DEFAULT_GENERATION_TIMEOUT_MS = 180000;
const LLM_API_NAMESPACE = 'PythonCodeLLM';

// We use custom events to communicate LLM generation progress and status to the rest of the app.
const LLM_EVENTS = Object.freeze({
  loading: 'python-code-llm-loading',
  ready: 'python-code-llm-ready',
  start: 'python-code-llm-start',
  progress: 'python-code-llm-progress',
  end: 'python-code-llm-end',
  error: 'python-code-llm-error'
});
const LLM_PARENT_MESSAGE_SOURCE = 'python-code-llm';
const LLM_PARENT_MESSAGE_TYPE = 'python-code-llm-event';

const LLM_LOADING_EVENT = LLM_EVENTS.loading;
const LLM_READY_EVENT = LLM_EVENTS.ready;
const LLM_START_EVENT = LLM_EVENTS.start;
const LLM_PROGRESS_EVENT = LLM_EVENTS.progress;
const LLM_END_EVENT = LLM_EVENTS.end;
const LLM_ERROR_EVENT = LLM_EVENTS.error;

let llmPort = null;
let llmReady = false;
let llmErrorMessage = '';
let llmStatusMessage = 'Initializing LLM worker...';
let pendingLLMRequest = null;
let readyWaiters = [];
let lastLLMResponse = '';

function estimateTokenCount(text) {
  if (!text) return 0;
  return Math.max(1, Math.round(text.length / 4));
}

function emitLLMEvent(type, detail) {
  if (typeof window === 'undefined') return;

  const payload = detail || {};

  if (typeof window.dispatchEvent === 'function') {
    window.dispatchEvent(new CustomEvent(type, { detail: payload }));
  }

  if (window.parent && window.parent !== window && typeof window.parent.postMessage === 'function') {
    window.parent.postMessage(
      {
        source: LLM_PARENT_MESSAGE_SOURCE,
        messageType: LLM_PARENT_MESSAGE_TYPE,
        eventType: type,
        detail: payload
      },
      '*'
    );
  }
}

function resolveReadyWaiters() {
  if (readyWaiters.length === 0) return;
  readyWaiters.forEach(({ resolve, timerId }) => {
    clearTimeout(timerId);
    resolve();
  });
  readyWaiters = [];
}

function rejectReadyWaiters(message) {
  if (readyWaiters.length === 0) return;
  readyWaiters.forEach(({ reject, timerId }) => {
    clearTimeout(timerId);
    reject(new Error(message));
  });
  readyWaiters = [];
}

function clearPendingRequest() {
  if (!pendingLLMRequest) return;
  clearTimeout(pendingLLMRequest.timerId);
  pendingLLMRequest = null;
}

function initLLMWorker() {
  if (!('SharedWorker' in window)) {
    llmStatusMessage = 'SharedWorker is not supported in this browser.';
    llmErrorMessage = llmStatusMessage;
    return;
  }

  try {
    const sharedWorker = new SharedWorker(LLM_WORKER_PATH, { type: 'module' });
    llmPort = sharedWorker.port;
    llmPort.start();
    llmStatusMessage = 'Loading model...';

    llmPort.onmessage = (event) => {
      const payload = event.data || {};
      const type = payload.type;
      const text = payload.text || payload.data || '';
      const message = payload.message || payload.data || '';

      if (type === 'STATUS') {
        llmStatusMessage = message || 'Loading model...';
        emitLLMEvent(LLM_LOADING_EVENT, { status: llmStatusMessage || 'Loading model...' });
        return;
      }

      if (type === 'READY') {
        llmReady = true;
        llmErrorMessage = '';
        llmStatusMessage = 'READY';
        emitLLMEvent(LLM_READY_EVENT, { ready: true, status: llmStatusMessage });
        resolveReadyWaiters();
        return;
      }

      if (type === 'CHUNK') {
        if (!pendingLLMRequest) return;
        pendingLLMRequest.text += text;
        lastLLMResponse = pendingLLMRequest.text;
        emitLLMEvent(LLM_PROGRESS_EVENT, {
          text: pendingLLMRequest.text,
          estimatedTokens: estimateTokenCount(pendingLLMRequest.text)
        });
        return;
      }

      if (type === 'DONE') {
        if (!pendingLLMRequest) return;
        const finalText = pendingLLMRequest.text;
        const resolve = pendingLLMRequest.resolve;
        clearPendingRequest();
        emitLLMEvent(LLM_END_EVENT, {
          ok: true,
          text: finalText,
          estimatedTokens: estimateTokenCount(finalText)
        });
        resolve(finalText);
        return;
      }

      if (type === 'ERROR') {
        llmErrorMessage = message || 'Unknown LLM worker error';
        llmStatusMessage = 'ERROR';

        if (pendingLLMRequest) {
          const reject = pendingLLMRequest.reject;
          clearPendingRequest();
          emitLLMEvent(LLM_END_EVENT, {
            ok: false,
            error: llmErrorMessage
          });
          reject(new Error(llmErrorMessage));
        }

        rejectReadyWaiters(llmErrorMessage);
      }
    };

    window.addEventListener('beforeunload', () => {
      if (llmPort) {
        llmPort.postMessage({ type: 'DISCONNECT' });
      }
    });
  } catch (error) {
    llmStatusMessage = 'Failed to initialize LLM worker';
    llmErrorMessage = error?.message || String(error);
  }
}

function waitForLLMReady(timeoutMs = DEFAULT_READY_TIMEOUT_MS) {
  if (llmReady) return Promise.resolve();

  if (!llmPort) {
    return Promise.reject(new Error(llmErrorMessage || 'LLM worker is not available'));
  }

  return new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
      reject(new Error('Timed out waiting for LLM model to become ready'));
    }, timeoutMs);

    readyWaiters.push({ resolve, reject, timerId });
  });
}

async function generateWithLLM(prompt, options = {}) {
  console.log("generateWithLLM called with prompt:", prompt, "and options:", options);
  
  const isString = typeof prompt === 'string' && prompt.trim() !== '';
  const isArray = Array.isArray(prompt) && prompt.length > 0;

  if (!isString && !isArray) {
    throw new Error('Prompt must be a non-empty string or a non-empty array');
  }
  
  if (pendingLLMRequest) {
    throw new Error('An LLM request is already in progress on this page');
  }

  const readyTimeoutMs = Number.isFinite(options.readyTimeoutMs)
    ? options.readyTimeoutMs
    : DEFAULT_READY_TIMEOUT_MS;
  const timeoutMs = Number.isFinite(options.timeoutMs)
    ? options.timeoutMs
    : DEFAULT_GENERATION_TIMEOUT_MS;
  const promptStart = typeof options.promptStart === 'string'
    ? options.promptStart
    : DEFAULT_PROMPT_START;
  const enabledThinking = typeof options.enabled_thinking === 'boolean'
    ? options.enabled_thinking
    : true;

  if (!llmReady) {
    emitLLMEvent(LLM_LOADING_EVENT, {
      status: llmStatusMessage || 'Loading model...'
    });
  }

  await waitForLLMReady(readyTimeoutMs);

  return new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
      const timeoutError = new Error('Timed out waiting for LLM generation to complete');
      clearPendingRequest();
      emitLLMEvent(LLM_END_EVENT, {
        ok: false,
        error: timeoutError.message
      });
      reject(timeoutError);
    }, timeoutMs);

    pendingLLMRequest = {
      text: '',
      resolve,
      reject,
      timerId
    };

    lastLLMResponse = '';

  // Prepare final payload and calculate estimation length
    let finalPrompt;
    let promptLength;

    if (Array.isArray(prompt)) {
      finalPrompt = prompt;
      // Turn the array into a JSON string to get a realistic character/token estimate
      promptLength = JSON.stringify(prompt).length;
    } else {
      finalPrompt = prompt.trim();
      promptLength = finalPrompt.length;
    }

    emitLLMEvent(LLM_START_EVENT, {
      promptLength: promptLength
    });
    
    llmPort.postMessage({ 
      prompt: finalPrompt, 
      promptStart: promptStart.trim(), 
      temperature: 0.7, 
      enable_thinking: enabledThinking 
    });
    
    // emitLLMEvent(LLM_START_EVENT, {
    //   promptLength: prompt.trim().length
    // });
    // llmPort.postMessage({ prompt: prompt.trim(), promptStart: promptStart.trim(), temperature: 0.7, enable_thinking: enabledThinking });
  });
}

function getLLMState() {
  return {
    ready: llmReady,
    status: llmStatusMessage,
    error: llmErrorMessage,
    inProgress: Boolean(pendingLLMRequest)
  };
}

window[LLM_API_NAMESPACE] = {
  generate: generateWithLLM,
  getState: getLLMState,
  getLastResponse: function() {
    return lastLLMResponse;
  },
  events: {
    loading: LLM_LOADING_EVENT,
    ready: LLM_READY_EVENT,
    start: LLM_START_EVENT,
    progress: LLM_PROGRESS_EVENT,
    end: LLM_END_EVENT
  }
};

initLLMWorker();
