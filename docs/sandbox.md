---
hide:
  - toc
---

# Browser-based LLM Sandbox

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/xterm@5.3.0/css/xterm.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">

<link rel="stylesheet" href="../stylesheets/sandbox.css">

<div id="sandbox-container">
    <div id="question"></div>
    <div id="input" contenteditable="true" data-placeholder="Prompt the AI here to write python code"></div>
    
    <div id="controls">
        <button id="submit" class="md-button md-button--primary" disabled>Model loading...</button>
        <button id="show-history" class="md-button">Submit</button>
    </div>

    <div id="panes">
        <div id="output"></div>			
        <div id="python-output">
            <div id="python-output-text"></div>
            <div id="python-output-canvas"></div>            
            <div id="python-output-turtle"></div>			
        </div>

    </div>
</div>

<!-- Modals -->
<div id="history-modal" style='display: none'>
    <div id="history-modal-card">
        <h3>Session History</h3>
        <pre id="history-json"></pre>
        <div style="margin-top:10px; display:flex; gap:10px; justify-content: flex-end;">
            <button id="copy-history">Copy</button>
            <button id="clear-history">Clear</button>
            <button id="close-history">Close</button>
        </div>
    </div>
</div>

<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js"></script>
<script src="https://cdn.jsdelivr.net/npm/xterm@5.3.0/lib/xterm.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/xterm-addon-fit@0.8.0/lib/xterm-addon-fit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-core.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-python.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script>

<!-- Core Highlight.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

<!-- Line Numbers Plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js"></script>

<script type="module" src='../js/llm-sandbox.js'></script>
