const PYTHON_CODE_URL = window.SITE_URL ? `${window.SITE_URL}extras/python_code.html` : 'https://env3d-lessons.github.io/python-thinkcspy-lectures/extras/python_code.html'

async function renderPythonEmbeds(root = document) {
    const embeds = root.querySelectorAll('.python-embed');
    const themedViews = document.__pythonEmbedThemedViews || [];
    document.__pythonEmbedThemedViews = themedViews;

    // Use the index loop to give each individual code block a unique localStorage key identity
    embeds.forEach((embed, index) => {
        // Add the python code URL as a property on the embed for easy access
        // Only include that URL, not the full path, to avoid issues with relative paths in the file tree
        embed.__PYTHON_CODE_URL = PYTHON_CODE_URL;
        renderFileTree(embed);
        renderCodeEditor(embed, index, themedViews);
    });

    if (!root.__pythonEmbedThemeObserver) {
        const updateEditorThemes = () => {
            themedViews.forEach(({ view, themeCompartment, getThemeExtension }) => {
                view.dispatch({
                    effects: themeCompartment.reconfigure(getThemeExtension())
                });
            });
        };

        const observer = new MutationObserver(() => {
            updateEditorThemes();
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['data-md-color-scheme']
        });

        if (window.matchMedia) {
            const media = window.matchMedia('(prefers-color-scheme: dark)');
            if (media.addEventListener) {
                media.addEventListener('change', updateEditorThemes);
            } else if (media.addListener) {
                media.addListener(updateEditorThemes);
            }
        }

        root.__pythonEmbedThemeObserver = observer;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderPythonEmbeds();
});