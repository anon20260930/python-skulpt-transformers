
/**
 * Helper function to resolve purposesly convoluted paths with . and .. segments, 
 * to ensure that injected file IDs are consistent and can be accessed by Python code 
 * regardless of the directory structure of the files being injected.
 * 
 * This is useful for testing students more complex directory structures.
 * 
 * @param {string} basePath - The base path to resolve against.
 */
function normalizePath(basePath) {

    // Monkey-patch document.getElementById to normalize IDs by resolving . and .. segments

    const _originalGetElementById = document.getElementById.bind(document);
    document.getElementById = function (id) {
        // Normalize the id by resolving . and .. segments
        const parts = id.split('/');
        const resolved = [];
        for (const part of parts) {
            if (part === '.') {
                // skip — current directory, no-op
                continue;
            } else if (part === '..') {
                // pop the last segment if possible, otherwise keep the ..
                if (resolved.length > 0 && resolved[resolved.length - 1] !== '..') {
                    resolved.pop();
                } else {
                    resolved.push('..');
                }
            } else {
                resolved.push(part);
            }
        }

        // final pass to remove ../basePath/ patterns that may have resulted from the above logic
        const normalizedId = resolved.join('/').replace(new RegExp(`..\/${basePath}\/+`, 'g'), ''); // Remove any duplicate slashes
        return _originalGetElementById(normalizedId);
    };
}

/**
 * Injects data files into the DOM based on URL parameters. 
 * This allows Python code running in the browser to access 
 * these files via their injected IDs.
 * 
 * The URL should include:
 * - `data-files`: A comma or space-separated list of file paths to inject.
 * - `data-files-base-url` (optional): A base URL to fetch the files from. 
 *   If not provided, it defaults to a "data-files" directory relative 
 *   to the current page.
 * 
 * @returns null
 */
async function injectDataFiles() {

    const params = new URLSearchParams(window.location.search);

    // Extract assetPath to current window to ensure consistent fetch()
    // the defaultDataFilesPath must be a full url
    const defaultDataFilesPath = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/data-files';
    let filesPath = params.get('data-files-base-url') || defaultDataFilesPath;    
    filesPath = filesPath.startsWith('http') ? filesPath : `${defaultDataFilesPath}/${filesPath}`.replace(/\/+$/, ''); // Remove trailing slash if present

    // Extract the list of files to inject from the URL parameters
    const filesString = params.get('data-files');
    if (!filesString) return;
    const files = filesString.split(/[\s,]+/).filter(f => f.length > 0);

    // 1. Find the directory where main.py lives
    const mainPyFile = files.find(f => f.endsWith('main.py'));
    const mainPyDir = mainPyFile ? mainPyFile.substring(0, mainPyFile.lastIndexOf('/')) : '';

    normalizePath(mainPyDir);

    for (const filename of files) {
        // 2. Skip main.py itself
        if (filename.endsWith('main.py')) continue;

        // 3. Calculate the ID relative to main.py's directory
        let injectedId;
        if (!mainPyDir) {
            injectedId = filename;
        } else {
            const mainParts = mainPyDir.split('/');
            const fileParts = filename.split('/');
            const fileDir = fileParts.slice(0, -1);
            const fileName = fileParts[fileParts.length - 1];

            // Find how many leading directory components are shared
            let commonDepth = 0;
            while (
                commonDepth < mainParts.length &&
                commonDepth < fileDir.length &&
                mainParts[commonDepth] === fileDir[commonDepth]
            ) {
                commonDepth++;
            }

            // Steps up from main.py's dir to the common ancestor
            const stepsUp = mainParts.length - commonDepth;
            // Remaining path from the common ancestor down to the file
            const remainingPath = [...fileDir.slice(commonDepth), fileName].join('/');

            injectedId = '../'.repeat(stepsUp) + remainingPath;
        }

        console.log(`Injecting file: ${filename} with ID: ${injectedId}`);

        if (document.getElementById(injectedId)) continue;
        try {
            const response = await fetch(`${filesPath}/${filename}`);
            if (!response.ok) throw new Error(`Status ${response.status}`);
            const content = await response.text();
            const fileDiv = document.createElement('div');
            fileDiv.id = injectedId;
            fileDiv.textContent = content;
            fileDiv.style.display = 'none';
            document.body.appendChild(fileDiv);
        } catch (err) {
            console.error(`Error injecting file "${filename}":`, err);
        }
    }
}

export default injectDataFiles;