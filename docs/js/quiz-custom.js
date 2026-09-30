document.addEventListener("DOMContentLoaded", function() {

    const quizCount = document.querySelectorAll('.quiz').length;
    const iframeCount = document.querySelectorAll('iframe.python_output').length;

    // Detect if we have both types, or multiple iframes
    const hasMultipleIframes = iframeCount > 1;
    const hasMixedElements = quizCount > 0 && iframeCount > 0;

    if (hasMixedElements) {
        console.warn(`[LTI Sync Monitor] Mixed content detected: ${quizCount} quiz item(s) and ${iframeCount} python iframe(s). 1:1 mapping recommended.`);
    } 
    
    if (hasMultipleIframes) {
        console.warn(`[LTI Sync Monitor] Multiple Python iframes detected: ${iframeCount}. This may cause sync collisions.`);
    }    

    console.log("Grade sync activated");

    let postQueue = Promise.resolve();

    // Helper to extract context_code safely
    const getContextCode = () => {
        const fragment = window.location.hash.slice(1);
        const params = new URLSearchParams(fragment);
        return params.get('context_code');
    };

    // Shared helper to add sync tasks to the queue
    const queueSync = (grade, comment) => {
        const contextCode = getContextCode();
        if (!contextCode) {
            console.warn("Cannot sync: No contextCode found in URL hash");
            return;
        }

        postQueue = postQueue.then(() => {
            return fetch('https://test.jmadar.workers.dev/update-grade', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contextCode: contextCode,
                    grade: grade,
                    comment: comment
                })
            })
            .then(res => {
                if (!res.ok) throw new Error(`Server returned ${res.status}`);
                console.log(`Grade synced successfully: ${grade}%`);
            })
            .catch(err => console.error("Grade sync failed:", err));
        });
    };

    const syncQuizData = () => {
        const currentPath = window.location.pathname;
        const quizKey = `quiz_progress_${currentPath}`;
        const rawData = localStorage.getItem(quizKey);
        
        if (!rawData) return;

        const parsedData = JSON.parse(rawData);
        const questions = Object.values(parsedData);
        const total = document.querySelectorAll('.quiz').length;
        
        if (total === 0) return;

        const correct = questions.filter(q => q && q.correct === true).length;
        const grade = Math.round((correct / total) * 100);

        if (!isNaN(grade)) {
            queueSync(grade, JSON.stringify(parsedData));
        }
    };

    // --- Updated Message Listener ---
    window.addEventListener('message', (event) => {
        
        // ignore unrelated messages
        if (!event.data || event.data.eventType !== 'python-code-grading') {
            return;
        }

        // avoid processing messages we already bubbled from this frame (prevent loops)
        if (event.data && event.data._bubbledFrom === window.location.href) {
            return;
        }

        console.log("Received python-code-grading message event:", event);

        const data = event.data;
        let grade = null;
        // Ensure we have expected keys (passed/total) or a score
        if (data && typeof data === 'object' && (data.passed !== undefined || data.score !== undefined)) {
            // Calculate percentage grade
            grade = data.score !== undefined 
                ? Math.round(data.score * 100) 
                : Math.round((data.passed / data.total) * 100);
            
            if (!isNaN(grade)) {
                queueSync(grade, JSON.stringify(data));
            }
        
            // Shape of data:
            // {            
            //     "code": "",
            //     "feedback": "",
            //     "total": 5,
            //     "passed": 2,
            //     "failed": 3,
            //     "eventType": "python-code-grading"
            // }

            // Only shows feedback overlay if there's actual feedback content to show, to avoid empty popups on simple grade updates
            if (data.feedback) {
                showTerminalOverlay(data.feedback);
            }
        }

        // Bubble up to parent frames if embedded in an iframe
        if (window !== window.parent) {
            try {
                // prepend score to data.feedback if feedback exists, to provide more context in the parent frame's message handler
                if (data.feedback) {
                    data.feedback = `[Score: ${grade}%] \n ${data.feedback}`;
                } else {
                    data.feedback = '*** code has errors ***';
                }
                const forward = Object.assign({}, data, { _bubbledFrom: window.location.href });
                // use specific origin instead of '*' when possible
                window.parent.postMessage(forward, '*');
            } catch (err) {
                console.warn('Failed to postMessage to parent:', err);
            }
        }
        
    }, true);

    // Event listener for quiz submission
    document.addEventListener('submit', (event) => {
        if (event.target && event.target.closest('.quiz')) {
            clearTimeout(timeout);
            timeout = setTimeout(syncQuizData, 200);
        }
    }, true);
    
    let timeout = null;
});

/**
 * Displays a terminal-style overlay with the provided content.
 * Clicking anywhere outside the overlay closes it.
 * @param {string} content - The text to display in the overlay.
 */

function showTerminalOverlay(content) {
    // Remove existing overlay if it exists
    const existingOverlay = document.getElementById('terminal-overlay');
    if (existingOverlay) {
        document.body.removeChild(existingOverlay);
    }

    const overlay = document.createElement('div');
    overlay.id = 'terminal-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '50%';
    overlay.style.left = '50%';
    overlay.style.transform = 'translate(-50%, -50%)';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.color = '#00FF00';
    overlay.style.padding = '20px';
    overlay.style.boxSizing = 'border-box';
    overlay.style.borderRadius = '5px';
    overlay.style.zIndex = '10000';
    overlay.style.maxWidth = '800px';
    overlay.style.width = '90%';
    overlay.style.height = '300px';
    overlay.style.fontFamily = 'monospace, "Courier New", Courier, monospace';
    overlay.style.fontSize = '16px';
    overlay.style.overflowY = 'auto';
    overlay.style.whiteSpace = 'pre-wrap';
    
    overlay.innerHTML = content;

    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.innerText = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '8px';
    closeBtn.style.right = '10px';
    closeBtn.style.fontSize = '30px';
    closeBtn.style.cursor = 'pointer';

    const closeOverlay = () => {
        if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
            // Remove the event listener when closed to clean up memory
            document.removeEventListener('click', handleOutsideClick);
        }
    };

    closeBtn.onclick = closeOverlay;

    // Logic to detect clicks outside the overlay
    const handleOutsideClick = (event) => {
        if (!overlay.contains(event.target)) {
            closeOverlay();
        }
    };

    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    // Wait a tiny fraction of a second before adding the click listener 
    // to prevent the trigger-click (that opened the overlay) from closing it instantly.
    setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
    }, 10);
}
