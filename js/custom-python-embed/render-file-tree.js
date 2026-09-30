function renderFileTree(embed) {

    const fileDisplayAttr = embed.getAttribute('data-files-display');
    if (fileDisplayAttr && fileDisplayAttr.toLowerCase() === 'false') return;

    const fileListString = embed.getAttribute('data-files') || '';
    if (!fileListString) return;

    const defaultDataFilesPath = embed.__PYTHON_CODE_URL.replace(/\/?[^\/]*$/, '') + '/data-files';
    // Need to be careful with relative paths here - we want to allow both absolute URLs and relative 
    // paths based on the location of the current page
    let filesPath = embed.getAttribute('data-files-base-url');
    if (filesPath) {
        if (!filesPath.startsWith('http')) {
            filesPath = `${defaultDataFilesPath}/${filesPath}`.replace(/\/+$/, ''); // Remove trailing slash if present
        }
    } else {
        filesPath = defaultDataFilesPath;
    }    
    

    const files = fileListString.split(/[\s,]+/).filter(f => f.length > 0);
    if (embed.querySelector('.python-embed__file-tree')) return;

    const tree = {};
    files.forEach(path => {
        const parts = path.split('/');
        let current = tree;
        parts.forEach((part, index) => {
            if (!current[part]) {
                current[part] = (index === parts.length - 1) ? null : {};
            }
            current = current[part];
        });
    });

    const baseHref = '/'; 

    function buildHtml(node, currentPath = '') {
        let html = '<ul style="list-style: none; padding-left: 30px; margin: 0;">';
        const keys = Object.keys(node).sort((a, b) => (node[b] === null) - (node[a] === null));
        
        for (const key of keys) {
            const isFolder = node[key] !== null;
            const newPath = currentPath ? `${currentPath}/${key}` : key;
            const isMainPy = (key === 'main.py');
            
            html += `
                <li style="margin: 0; padding: 0; color: var(--md-default-fg-color);">
                    ${isFolder ? '📁' : (isMainPy ? '➔' : '📄')} 
                    ${isFolder 
                        ? `<span style="font-weight: 600; font-size: 16px;">${key}</span>` 
                        : isMainPy 
                            ? `<span style="font-weight: 900; font-size: 16px; color: var(--md-default-fg-color); text-decoration: none;">${key}</span>`
                            : `<button class="file-link" data-path="${newPath}" onmouseover="this.style.color='var(--md-primary-fg-color)'" onmouseout="this.style.color='var(--md-default-fg-color)'" style="background:none; border:none; cursor:pointer; color:var(--md-default-fg-color); text-decoration: underline; font-size:16px; font-weight:600; transition: color 0.2s;">${key}</button>`
                    }
                    ${isFolder ? buildHtml(node[key], newPath) : ''}
                </li>`;
        }
        html += '</ul>';
        return html;
    }

    const treeContainer = document.createElement('div');
    treeContainer.className = 'python-embed__file-tree';
    treeContainer.style.cssText = `
        margin-bottom: 12px; 
        border: 1px solid var(--md-default-fg-color--lightest); 
        padding: 10px; 
        border-radius: 6px; 
        background: var(--md-default-bg-color);
        color: var(--md-default-fg-color);
    `;
    treeContainer.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 6px; font-size: 16px; border-bottom: 1px solid var(--md-default-fg-color--lightest);">Available Files</div>
        ${buildHtml(tree)}
    `;

    let dialog = document.getElementById('file-viewer-dialog');
    if (!dialog) {
        dialog = document.createElement('dialog');
        dialog.id = 'file-viewer-dialog';
        dialog.style.cssText = `
            padding: 20px; 
            border-radius: 8px; 
            border: 1px solid var(--md-default-fg-color--lightest); 
            background: var(--md-default-bg-color);
            color: var(--md-default-fg-color);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2); 
            width: 80%; 
            max-width: 800px;
        `;
        dialog.innerHTML = `
            <div style="display:flex; justify-content: space-between; align-items:center; margin-bottom: 15px;">
                <h3 id="file-title" style="margin:0; color: var(--md-default-fg-color);">File Content</h3>
                <div>
                    <button id="popout-btn" style="cursor:pointer; color: var(--md-default-fg-color); border: 1px solid var(--md-default-fg-color--lightest); background: var(--md-default-bg-color); padding: 4px 8px; border-radius: 4px; margin-right: 10px;">↗ Pop-out</button>
                    <button id="close-dialog-btn" style="cursor:pointer; background: none; border: none; font-size: 18px; color: var(--md-default-fg-color);">✕</button>
                </div>
            </div>
            <pre id="file-content" style="background: var(--md-code-bg-color); color: var(--md-code-fg-color); padding: 15px; border-radius: 4px; overflow: auto; max-height: 500px; border: 1px solid var(--md-default-fg-color--lightest); font-family: monospace;"></pre>
        `;
        document.body.appendChild(dialog);

        document.getElementById('close-dialog-btn').onclick = () => dialog.close();
        dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    }

    treeContainer.addEventListener('click', async (e) => {
        if (e.target.classList.contains('file-link')) {
            const path = e.target.getAttribute('data-path');
            const url = `${filesPath}/${baseHref}${path}`;
            const titleEl = document.getElementById('file-title');
            const contentEl = document.getElementById('file-content');
            
            titleEl.textContent = path;
            contentEl.textContent = 'Loading...';
            dialog.showModal();
            
            try {
                const response = await fetch(url);
                const text = await response.text();
                contentEl.textContent = text;
                document.getElementById('popout-btn').onclick = () => window.open(url, '_blank');
            } catch (err) {
                contentEl.textContent = 'Error: Could not load file.';
            }
        }
    });

    embed.prepend(treeContainer);
}