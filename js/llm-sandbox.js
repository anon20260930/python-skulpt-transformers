

// === CONFIGURATION ===

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB0LPuzg2HUyBoCz_Ag1sY5V-txWEDR41g",
    authDomain: "llm-sandbox-fc1ab.firebaseapp.com",
    projectId: "llm-sandbox-fc1ab",
    storageBucket: "llm-sandbox-fc1ab.firebasestorage.app",
    messagingSenderId: "344524818220",
    appId: "1:344524818220:web:c4549cbecf152cf62c4e89",
    measurementId: "G-TEFD2GE6TZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  const FIREBASE_URL = 'https://llm-sandbox-fc1ab-default-rtdb.firebaseio.com/history'; // Adjust as needed
// =====================

import Dexie from 'https://cdn.jsdelivr.net/npm/dexie@4.0.11/dist/dexie.mjs';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

// 1. Database Init
const db = new Dexie("LLMHistoryDB");
db.version(1).stores({ entries: "++id, timestamp" });
window.db = db;

// Reset persisted history on each page load so refresh starts fresh.
db.entries.clear().catch((error) => {
  console.error("Failed to reset LLM history:", error);
});

// 2. UI Elements
const outputDiv = document.getElementById("output");
if (outputDiv) outputDiv.classList.add('line-numbers');
const submitBtn = document.getElementById("submit");
if (submitBtn) {
  submitBtn.disabled = true;
  submitBtn.textContent = "Model loading...";
}
const inputEl = document.getElementById("input");
const questionEl = document.getElementById("question");
const historyActionBtn = document.getElementById('show-history');
const pythonOutputDiv = document.getElementById("python-output");
const turtleDiv = document.getElementById('python-output-turtle');
const terminalEl = document.getElementById("python-output-text");

const urlParams = new URLSearchParams(window.location.search);
const questionFromUrl = urlParams.get("question");
const hashParams = new URLSearchParams(window.location.hash.slice(1));
const contextCode = hashParams.get('context_code');
const sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;


if (historyActionBtn) {
  historyActionBtn.textContent = contextCode ? 'Submit' : 'History';
  historyActionBtn.onclick = contextCode ? submitHistory : showHistoryModal;
}


async function submitHistory() {
  // Gather history data
  const data = await db.entries.toArray();
  if (!contextCode) {
    alert("No context code found.");
    return;
  }

  // 1. Save/overwrite history for this page session under contextCode/sessionId
  const firebaseSessionUrl = `${FIREBASE_URL}/${contextCode}/${sessionId}.json`;
  try {
    const firebaseResponse = await fetch(firebaseSessionUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: sessionId,
        updatedAt: Date.now(),
        history: data
      })
    });
    if (!firebaseResponse.ok) throw new Error('Firebase error');
  } catch (e) {
    alert("Failed to save history to Firebase: " + e);
    return;
  }

  // 2. Send grade and comment (the direct URL) to LTI tool
  const firebaseUrl = `${FIREBASE_URL}/${contextCode}.json`; // URL to view all sessions for this context
  try {
    await fetch('https://test.jmadar.workers.dev/update-grade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contextCode: contextCode,
        grade: 100,
        comment: firebaseUrl
      })
    });
    alert('Submission and grading complete!');
  } catch (e) {
    alert('Failed to send grade to LTI tool: ' + e);
  }

  showHistoryModal();
}

async function showHistoryModal() {
  const data = await db.entries.toArray();
  const initPrompt = [
    `The student is being asked: \n\n  "${questionFromUrl || 'the question'}" \n`,
    'Using a weak AI that generates python code from prompts only.',
    'Students cannot modify the generated code, but they can run it and see the output.  ',
    'The goal of the student is to learn how to write effective prompts to get the AI to produce correct python code that solves the problem.  ',
    'Evaluate the student\'s prompt history below.',
    'Comment on how well the student understands the underlying python vocabulary and concepts based on their prompts and the AI\'s responses.  ',
  ].join('\n');
  document.getElementById('history-json').textContent =
    initPrompt + '\n\n' + JSON.stringify(data, null, 2);
  document.getElementById('history-modal').style = 'display: block;';
}

if (questionEl && questionFromUrl) {
  const escapedQuestion = questionFromUrl
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  questionEl.innerHTML = `<strong>Question:</strong> ${escapedQuestion}`;
  if (inputEl) {
    inputEl.setAttribute(
      'data-placeholder',
      `Prompt the AI here to write python code to ${escapedQuestion}`
    );
  }
}

let streamedText = "";
let terminal, fitAddon;

// 3. Setup SharedWorker so model state is shared across pages/tabs.
const llmWorker = new SharedWorker('../extras/js/llm-worker.js', { type: 'module' });
const llmPort = llmWorker.port;
llmPort.start();

llmPort.onmessage = (e) => {
  const { type, text, message, data } = e.data;
  if (type === 'STATUS' || type === 'READY') {
    submitBtn.disabled = false;
    submitBtn.textContent = "Generate";
  } else if (type === 'CHUNK') {
    streamedText += text || data;
    outputDiv.innerHTML = marked.parse(streamedText);
    if (window.hljs) {
      // Target only <code> blocks that are children of <pre>
      document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
        hljs.lineNumbersBlock(el);
      });
    }
    
    if (window.Prism) {
      // Prism.highlightAllUnder(outputDiv);
    }
    
    outputDiv.scrollTop = outputDiv.scrollHeight;
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' });
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' });
  } else if (type === 'DONE') {
    finalizeGeneration();
  } else if (type === 'ERROR') {
    outputDiv.textContent = "Error: " + (message || data);
    submitBtn.disabled = false;
  }
};

window.addEventListener('beforeunload', () => {
  llmPort.postMessage({ type: 'DISCONNECT' });
});

// 4. Custom Marked Renderer for Run Button

marked.use({
  renderer: {
    code({ text, lang }) {      
      const escaped = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
      const normalizedLang = (lang || 'python').toLowerCase();
      const isPython = normalizedLang === 'python';
      const runBtn = isPython
            ? `<button class="run-btn" onclick="window.runCode(this)">&#9654; Run</button>`
            : '';
      return `<div class="code-block"><pre class="line-numbers"><code class="language-${normalizedLang}">${escaped}</code></pre>${runBtn}</div>`;
    }
  }
});

function getPromptText() {
  if (!inputEl) return '';
  // contenteditable often stores lines as block nodes; innerText preserves visual newlines.
  const raw = inputEl.innerText ?? inputEl.textContent ?? '';
  const prefix = "Only generate code, no comments, usage, or explanation";
  return prefix + '\n\n' + raw.replace(/\r\n?/g, '\n').trim();
}

// 5. Interaction Logic
submitBtn.addEventListener("click", () => {
  const prompt = getPromptText();
  if (!prompt) return;
  
  submitBtn.disabled = true;
  streamedText = "```python\n";
  // streamedText += "";
  outputDiv.innerHTML = "<em>Generating...</em>";
  terminalEl.style.height = 0;
  turtleDiv.innerHTML = '';
  
  llmPort.postMessage({ prompt, promptStart: streamedText, temperature: 0.2, enable_thinking: false });
});

async function finalizeGeneration() {
  submitBtn.disabled = false;
  await db.entries.add({ prompt: getPromptText(), response: streamedText, timestamp: Date.now() });
}


function hasTurtleImport(code) {
  return /(?:^|\n)\s*(?:import\s+turtle\b|from\s+turtle\s+import\b)/m.test(code);
}

function hasImageImport(code) {
  return /(?:^|\n)\s*(?:import\s+image\b|from\s+image\s+import\b)/m.test(code);
}

// 6. Python Execution Engine (Skulpt)
window.runCode = async function(btn) {
  // const code = btn.closest('.code-block').querySelector('code').textContent;

  const codeBlock = btn.closest('.code-block').querySelector('code');

  // Target only the cells that contain code, ignoring the line-number cells
  const codeCells = codeBlock.querySelectorAll('.hljs-ln-code');

  let code;
  if (codeCells.length > 0) {
    // Join the text of each code line with a newline character
    code = Array.from(codeCells)
      .map(cell => cell.textContent)
      .join('\n');
  } else {
    // Fallback if the line-numbers plugin didn't run or isn't used
    code = codeBlock.textContent;
  }
  
  pythonOutputDiv.style.display = 'block';
  
  if (terminal) terminal.dispose();

  initTerminal();
  
  terminal.clear();  
  terminal.writeln('--- Executing Python ---');
  updateTerminalHeight();
  
  function skulptRead(name) {
    if (!window.Sk || !Sk.builtinFiles || !Sk.builtinFiles.files[name]) {
      throw new Error(`File not found: '${name}'`);
    }
    return Sk.builtinFiles.files[name];
  }
  
  Sk.configure({
    output: (t) => {
      terminal.write(t);
      updateTerminalHeight();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' });
    },
    read: skulptRead,
    __future__: Sk.python3
  });

  if (hasTurtleImport(code)) {
    turtleDiv.innerHTML = '<div id="skulpt-turtle-target"></div>';  
    Sk.TurtleGraphics = { target: 'skulpt-turtle-target' };
  }

  if (hasImageImport(code)) {
    Sk.canvas = 'python-output-canvas';
  }
  
  try {
    await Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, code, true));
  } catch(e) {
    terminal.writeln("\nError: " + e.toString());
  }
  
  // Smooth scroll only at the very end after execution completes
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

function updateTerminalHeight() {
  if (!terminal) return;
  const rowCount = terminal.buffer.active.length + 3;
  const displayRows = Math.min(rowCount, 20);
  terminalEl.style.height = (displayRows * 21) + 'px';
  fitAddon.fit();
}

function initTerminal() {
  terminal = new Terminal({ theme: { background: '#1e1e1e' }, convertEol: true });
  fitAddon = new FitAddon.FitAddon();
  terminal.loadAddon(fitAddon);
  terminal.open(terminalEl);
  terminalEl.style.height = 0;
  fitAddon.fit();
}

// 7. History Modal Logic now handled by showHistoryModal()

document.getElementById('close-history').onclick = () => document.getElementById('history-modal').style = 'display: none;';
document.getElementById('clear-history').onclick = async () => {
  if(confirm('Clear?')) {
    await db.entries.clear(); document.getElementById('history-json').textContent = '[]';
  }
};

document.getElementById('copy-history').onclick = async () => {
  const historyText = document.getElementById('history-json').textContent;

  try {
    await navigator.clipboard.writeText(historyText);
  } catch (error) {
    const textArea = document.createElement('textarea');
    textArea.value = historyText;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
};

