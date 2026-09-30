let codeMirrorLoader = null;

function isDarkMode() {
    const scheme = document.body?.getAttribute('data-md-color-scheme')
        || document.documentElement?.getAttribute('data-md-color-scheme');

    if (scheme) {
        return scheme === 'slate';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function loadCodeMirror() {
    if (codeMirrorLoader) return codeMirrorLoader;

    codeMirrorLoader = Promise.all([
        import('https://esm.sh/codemirror@6.0.2'),
        import('https://esm.sh/@codemirror/lang-python@6.2.1'),
        import('https://esm.sh/@codemirror/language@^6.0.0'),
        import('https://esm.sh/@codemirror/view@^6.0.0'),
        import('https://esm.sh/@codemirror/commands@^6.0.0'),
        import('https://esm.sh/@codemirror/state@^6.0.0'),
        import('https://esm.sh/@codemirror/theme-one-dark@^6.0.0'),
        import('https://esm.sh/@codemirror/state@^6.0.0')
    ]).then(([cm, langPython, language, view, commands, state, oneDarkTheme]) => ({
        EditorView: cm.EditorView,
        basicSetup: cm.basicSetup,
        indentUnit: language.indentUnit,
        keymap: view.keymap,
        indentLess: commands.indentLess,
        python: langPython.python,
        Compartment: state.Compartment,
        oneDark: oneDarkTheme.oneDark
    }));

    return codeMirrorLoader;
}

function runCodeInFrame(embed, frame, code, unittestCode = '') {
    const fileList = embed.getAttribute('data-files') || '';
    const fileQuery = fileList.split(/[\s,]+/).filter(f => f.length > 0).join(',');
    const filesBaseURL = embed.getAttribute('data-files-base-url') || '';

    // construct queryString based on both fileQuery and filesBaseURL    
    let queryString = '?';
    if (fileQuery) {
        queryString += `data-files=${encodeURIComponent(fileQuery)}&`;
    }
    if (filesBaseURL) {
        queryString += `data-files-base-url=${encodeURIComponent(filesBaseURL)}&`;
    }
    queryString = queryString.replace(/&$/, ''); // Remove trailing '&' if present

    const combined = code + (unittestCode ? '\n\n' + unittestCode : '');
    const encoded = btoa(unescape(encodeURIComponent(`${combined}\n# refresh:${Date.now()}`)));

    frame.src = `${embed.__PYTHON_CODE_URL}${queryString}#${encoded}`;
}

async function renderCodeEditor(embed, index, themedViews = []) {

    const source = embed.querySelector('script') || embed.querySelector('.md-code__content');
    const sourceContainer = embed.querySelector('script') || embed.querySelector('.language-python') || embed.querySelector('.md-code__content');
    let frame = embed.querySelector('iframe');

    if (!frame) {
        frame = document.createElement('iframe');
        frame.width = '100%';
        frame.height = '300';
        embed.appendChild(frame);
    }

    if (!source || !frame) return;

    const fullInitial = source.textContent || '';
    let unittestCode = '';
    let initialCode = fullInitial;

    const importIdx = fullInitial.indexOf('import unittest');
    if (importIdx !== -1) {
        unittestCode = fullInitial.slice(importIdx).trim();
        initialCode = fullInitial.slice(0, importIdx).trim();
    } else {
        initialCode = fullInitial.trim();
    }

    if (!initialCode && !unittestCode) return;

    embed.__unittestCode = unittestCode;

    const hasEditableAttribute = embed.hasAttribute('editable') || embed.hasAttribute('data-editable');
    if (!hasEditableAttribute) {
        console.log('Embedding Python code:', initialCode);
        runCodeInFrame(embed, frame, initialCode, unittestCode);
        return;
    }

    const editableValue = (embed.getAttribute('editable') || embed.getAttribute('data-editable') || '')
        .trim()
        .toLowerCase();

    const isEditable = editableValue === '' || editableValue === 'true' || editableValue === '1' || editableValue === 'yes';
    if (!isEditable) {
        console.log('Embedding Python code:', initialCode);
        runCodeInFrame(embed, frame, initialCode, unittestCode);
        return;
    }

    sourceContainer.style.display = 'none';

    let modules;
    try {
        modules = await loadCodeMirror();
    } catch (error) {
        console.warn('CodeMirror failed to load for editable python embed.', error);
        sourceContainer.style.display = 'block';
        runCodeInFrame(embed, frame, initialCode, unittestCode);
        return;
    }

    const { EditorView, basicSetup, indentUnit, keymap, indentLess, python, Compartment, oneDark } = modules;

    const baseTheme = EditorView.theme({
        '&': { border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px' },
        '.cm-content': { minHeight: '80px', fontFamily: 'monospace' },
        '.cm-activeLine': { backgroundColor: 'rgba(127, 127, 127, 0.08)' },
        '.cm-activeLineGutter': { backgroundColor: 'transparent' },
        '@media (prefers-color-scheme: dark)': {
            '.cm-activeLine': { backgroundColor: 'rgba(255, 255, 255, 0.04)' }
        }
    });

    const lightTheme = EditorView.theme({
        '&': { backgroundColor: '#ffffff', color: '#111827' },
        '.cm-gutters': { backgroundColor: '#f8fafc', color: '#64748b', borderRight: '1px solid #e2e8f0' },
        '.cm-cursor, .cm-dropCursor': { borderLeftColor: '#111827' },
        '&.cm-focused': { outline: '2px solid rgba(20, 184, 166, 0.4)' }
    });

    const themeCompartment = new Compartment();

    function getThemeExtension() {
        return isDarkMode() ? oneDark : lightTheme;
    }

    const pageStorageScope = encodeURIComponent(window.location.href);
    const storageKey = `py_embed_hist_${pageStorageScope}_${index}`;

    let savedHistory = null;
    try {
        const raw = localStorage.getItem(storageKey);
        if (raw) savedHistory = JSON.parse(raw);
    } catch (e) {
        console.error('Failed to parse localStorage history', e);
    }

    embed.__codeHistory = savedHistory || [initialCode];

    const codeToRender = embed.__codeHistory[embed.__codeHistory.length - 1];

    let mount = embed.querySelector('.python-embed__codemirror');
    if (!mount) {
        mount = document.createElement('div');
        mount.className = 'python-embed__codemirror';
        mount.style.marginBottom = '8px';
        embed.insertBefore(mount, frame);
    }

    let view = mount.__cmView;
    if (!view) {
        view = new EditorView({
            doc: codeToRender,
            extensions: [
                basicSetup,
                baseTheme,
                themeCompartment.of(getThemeExtension()),
                indentUnit.of('    '),
                keymap.of([
                    {
                        key: 'Tab',
                        preventDefault: true,
                        run: (editorView) => {
                            const indent = editorView.state.facet(indentUnit) || '    ';
                            editorView.dispatch(editorView.state.replaceSelection(indent));
                            return true;
                        }
                    },
                    {
                        key: 'Shift-Tab',
                        preventDefault: true,
                        run: (editorView) => {
                            indentLess(editorView);
                            return true;
                        }
                    }
                ]),
                python(),
                EditorView.lineWrapping
            ],
            parent: mount
        });
        mount.__cmView = view;
        themedViews.push({ view, themeCompartment, getThemeExtension });
    }

    let controlsRow = embed.querySelector('.python-embed__controls-row');
    if (!controlsRow) {
        controlsRow = document.createElement('div');
        controlsRow.className = 'python-embed__controls-row';
        controlsRow.style.display = 'flex';
        controlsRow.style.alignItems = 'center';
        controlsRow.style.justifyContent = 'space-between';
        controlsRow.style.gap = '10px';
        controlsRow.style.marginBottom = '8px';
        embed.insertBefore(controlsRow, frame);
    }

    let historyControls = embed.querySelector('.python-embed__history-controls');
    if (!historyControls) {
        historyControls = document.createElement('div');
        historyControls.className = 'python-embed__history-controls';
        historyControls.style.display = embed.__codeHistory.length > 1 ? 'flex' : 'none';
        historyControls.style.alignItems = 'center';
        historyControls.style.gap = '10px';
        historyControls.style.flex = '1';
        historyControls.style.justifyContent = 'flex-end';

        const historyMaxIdx = embed.__codeHistory.length - 1;
        historyControls.innerHTML = `
          <input type="range" class="python-embed__slider" min="0" max="${historyMaxIdx}" value="${historyMaxIdx}" title="Version history slider" aria-label="Version history slider" style="flex-grow: 1; min-width: 140px;">
          <span class="python-embed__version-label" style="font-size: 13px; font-family: monospace; min-width: 45px;">V${embed.__codeHistory.length}/${embed.__codeHistory.length}</span>
        `;

        const resetBtn = document.createElement('button');
        resetBtn.type = 'button';
        resetBtn.className = 'python-embed__reset-history';
        resetBtn.textContent = 'Reset';
        resetBtn.title = 'Reset history to original source';
        resetBtn.style.fontSize = '13px';
        resetBtn.style.padding = '4px 8px';
        resetBtn.style.marginLeft = '8px';
        historyControls.appendChild(resetBtn);
    }

    const slider = historyControls.querySelector('.python-embed__slider');
    const versionLabel = historyControls.querySelector('.python-embed__version-label');
    const resetBtnEl = historyControls.querySelector('.python-embed__reset-history');

    if (resetBtnEl) {
        resetBtnEl.onclick = () => {
            embed.__codeHistory = [initialCode];
            try {
                localStorage.setItem(storageKey, JSON.stringify(embed.__codeHistory));
            } catch (e) {
                console.error('Failed to persist reset history', e);
            }

            const maxIdx = embed.__codeHistory.length - 1;
            slider.max = maxIdx;
            slider.value = maxIdx;
            versionLabel.textContent = `V${embed.__codeHistory.length}/${embed.__codeHistory.length}`;

            view.dispatch({
                changes: { from: 0, to: view.state.doc.length, insert: initialCode }
            });

            if (embed.__codeHistory.length <= 1) {
                historyControls.style.display = 'none';
            }
        };
    }

    slider.oninput = (e) => {
        const idx = parseInt(e.target.value, 10);
        const historicalCode = embed.__codeHistory[idx];

        view.dispatch({
            changes: { from: 0, to: view.state.doc.length, insert: historicalCode }
        });

        versionLabel.textContent = `V${idx + 1}/${embed.__codeHistory.length}`;
    };

    let runButton = embed.querySelector('.python-embed__run');
    if (!runButton) {
        runButton = document.createElement('button');
        runButton.type = 'button';
        runButton.className = 'python-embed__run';
        runButton.textContent = 'Run';
    }

    if (runButton.parentElement !== controlsRow) {
        controlsRow.appendChild(runButton);
    }

    if (historyControls.parentElement !== controlsRow) {
        controlsRow.appendChild(historyControls);
    }

    runButton.onclick = () => {
        const currentCode = view.state.doc.toString();
        if (!currentCode.trim()) return;

        runCodeInFrame(embed, frame, currentCode, embed.__unittestCode);

        const history = embed.__codeHistory;
        if (history[history.length - 1] !== currentCode) {
            history.push(currentCode);
            localStorage.setItem(storageKey, JSON.stringify(history));

            const maxIdx = history.length - 1;
            slider.max = maxIdx;
            slider.value = maxIdx;
            versionLabel.textContent = `V${history.length}/${history.length}`;

            if (history.length > 1) {
                historyControls.style.display = 'flex';
            }
        }
    };
}