
function extractPythonCode(element) {
    const codeBlock = element.querySelector('pre code.language-python');
    if (!codeBlock) return null;

    // 1. Check for the Table (Line Numbering)
    const codeCells = codeBlock.querySelectorAll('.hljs-ln-code');
    if (codeCells.length > 0) {
        return Array.from(codeCells)
            .map(cell => cell.textContent)
            .join('\n')
            .trim();
    }

    // 2. Fallback for Standard (No Line Numbering)
    // We use innerText here because it respects CSS line breaks better
    // than textContent in a flat structure.
    let rawCode = codeBlock.innerText;

    // If innerText is being stubborn, use textContent and trim
    if (!rawCode || rawCode.trim() === "") {
        rawCode = codeBlock.textContent;
    }

    return rawCode.trim();
}

function renderPython(event) {
  console.log(event);
  const code = extractPythonCode(event.currentSlide);
  
	console.log(code);

  if (code) {
    // If there's an iframe we inject
    code_frame = event.currentSlide.querySelector('iframe.python_output');
    if (code_frame) {
      code_frame.src = code_frame.src || `../extras/python_code.html#${btoa(code)}`;
    }
  }  
}

document.addEventListener('ready', renderPython);
document.addEventListener('slidechanged', renderPython);
