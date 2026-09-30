/*
This script implements an overlay UI component to display LLM generation 
status and output in real-time. It listens for custom postMessage events 
from the LLM worker and updates the overlay accordingly.

Simply include this script in your HTML, and it will automatically create 
and manage the overlay. The overlay will show when LLM generation starts, 
update with new text as it arrives, and automatically hide shortly after 
generation ends.

<script src="python-code-llm-overlay.js"></script>
*/

(function () {
  if (window.__pythonCodeLlmOverlayInitialized) {
    return;
  }
  window.__pythonCodeLlmOverlayInitialized = true;

  var OVERLAY_ID = 'llm-overlay';
  var TITLE_ID = 'llm-overlay-title';
  var BODY_ID = 'llm-overlay-body';
  var CLOSE_ID = 'llm-overlay-close';
  var STYLE_ID = 'python-code-llm-overlay-style';

  var autoCloseTimer = null;

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) {
      return;
    }

    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = [
      '.llm-overlay-backdrop {',
      '  position: fixed;',
      '  inset: 0;',
      '  background-color: rgba(0, 0, 0, 0) !important;',
      '  display: none;',
      '  align-items: center;',
      '  justify-content: center;',
      '  z-index: 9999;',
      '  padding: 16px;',
      '  box-sizing: border-box;',
      '}',
      '.llm-overlay-window {',
      '  width: min(760px, 100%);',
      '  max-height: min(30vh, 220px);',
      '  background: rgba(12, 12, 12, 0.68) !important;',
      '  border: 1px solid rgba(255, 255, 255, 0.20);',
      '  border-radius: 10px;',
      '  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);',
      '  backdrop-filter: none !important;',
      '  overflow: hidden;',
      '  display: flex;',
      '  flex-direction: column;',
      '}',
      '.llm-overlay-header {',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: space-between;',
      '  background: rgba(255, 255, 255, 0.04);',
      '  border-bottom: 1px solid rgba(255, 255, 255, 0.12);',
      '  padding: 4px 8px;',
      '  font-weight: 600;',
      '  color: rgba(255, 255, 255, 0.92);',
      '}',
      '#' + TITLE_ID + ' {',
      '  margin: 0;',
      '  font-size: 12px;',
      '  letter-spacing: 0.02em;',
      '  text-transform: lowercase;',
      '  opacity: 0.85;',
      '  animation: llm-title-blink 1s steps(2, start) infinite;',
      '}',
      '@keyframes llm-title-blink {',
      '  50% {',
      '    opacity: 0.35;',
      '  }',
      '}',
      '.llm-overlay-close {',
      '  border: 0;',
      '  background: rgba(255, 255, 255, 0.14);',
      '  color: rgba(255, 255, 255, 0.9);',
      '  border-radius: 6px;',
      '  width: 22px;',
      '  height: 22px;',
      '  cursor: pointer;',
      '  font-size: 15px;',
      '  line-height: 1;',
      '  padding: 0;',
      '}',
      '.llm-overlay-close:hover {',
      '  background: rgba(255, 255, 255, 0.25);',
      '}',
      '.llm-overlay-body {',
      '  background: transparent;',
      '  color: rgba(168, 174, 182, 0.95);',
      '  padding: 10px 12px;',
      '  overflow-y: auto;',
      '  overflow-x: hidden;',
      '  white-space: pre-wrap;',
      '  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
      '  font-size: 13px;',
      '  line-height: 1.45;',
      '  max-height: calc(1.45em * 3 + 20px);',
      '}'
    ].join('\n');

    document.head.appendChild(style);
  }

  function injectMarkup() {
    if (document.getElementById(OVERLAY_ID)) {
      return document.getElementById(OVERLAY_ID);
    }

    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    overlay.className = 'llm-overlay-backdrop';
    overlay.setAttribute('aria-hidden', 'true');

    overlay.innerHTML = [
      '<div class="llm-overlay-window" role="dialog" aria-modal="true" aria-labelledby="' + TITLE_ID + '">',
      '  <div class="llm-overlay-header">',
      '    <span id="' + TITLE_ID + '">generating...</span>',
      '    <button id="' + CLOSE_ID + '" class="llm-overlay-close" type="button" aria-label="Close">&times;</button>',
      '  </div>',
      '  <div id="' + BODY_ID + '" class="llm-overlay-body"></div>',
      '</div>'
    ].join('');

    document.body.appendChild(overlay);
    return overlay;
  }

  function clearAutoClose() {
    if (autoCloseTimer) {
      clearTimeout(autoCloseTimer);
      autoCloseTimer = null;
    }
  }

  function setup() {
    injectStyles();
    var overlay = injectMarkup();
    var title = document.getElementById(TITLE_ID);
    var body = document.getElementById(BODY_ID);
    var close = document.getElementById(CLOSE_ID);

    function showOverlay() {
      clearAutoClose();
      overlay.style.display = 'flex';
      overlay.setAttribute('aria-hidden', 'false');
    }

    function hideOverlay() {
      clearAutoClose();
      overlay.style.display = 'none';
      overlay.setAttribute('aria-hidden', 'true');
    }

    function scheduleAutoClose(delayMs) {
      clearAutoClose();
      autoCloseTimer = setTimeout(function () {
        hideOverlay();
      }, delayMs || 10);
    }

    function setOverlayText(text) {
      body.textContent = text;
      body.scrollTop = body.scrollHeight;
    }

    close.addEventListener('click', hideOverlay);
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        hideOverlay();
      }
    });

    window.addEventListener('message', function (event) {
      var data = event.data;

      if (!data || typeof data !== 'object') {
        return;
      }

      if (data.source === 'python-code-llm' && data.messageType === 'python-code-llm-event') {
        var detail = data.detail || {};
        var eventType = data.eventType;

        if (eventType === 'python-code-llm-loading') {
          title.textContent = 'loading model...';
          setOverlayText(detail.status || 'Loading model...');
          // show overlay if loading
          // hide overlay if loading is complete (detect string done in detail.status)
          if (detail.status && /done/i.test(detail.status)) {
            scheduleAutoClose(200);
          } else {
            showOverlay();
          }
          return;
        }

        if (eventType === 'python-code-llm-start') {
          title.textContent = 'generating...';
          setOverlayText('Thinking...');
          showOverlay();
          return;
        }

        if (typeof detail.text === 'string') {
          title.textContent = 'generating...';
          setOverlayText(detail.text);
          showOverlay();
        }

        if (eventType === 'python-code-llm-end') {
          scheduleAutoClose(10);
        }

        if (eventType === 'python-code-llm-error') {
          title.textContent = 'error';
          setOverlayText(detail.error || 'An error occurred during generation.');
          showOverlay();
        }        
      }
    });
  }

  if (document.body) {
    setup();
  } else {
    window.addEventListener('DOMContentLoaded', setup, { once: true });
  }
})();
