document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const fullscreen = params.get('fullscreen');
  
  const right_sidebar = document.querySelector('.md-sidebar--secondary');
    
  const quizKey = Object.keys(localStorage).find(key => key.startsWith('quiz_progress'));
  const revealjs = document.querySelector('.mkdocs-revealjs-wrapper');

  // Check fullscreen mode
  
  if (fullscreen === 'true' || fullscreen === '1') {
    // Apply the CSS class defined in extra.css
    document.body.classList.add('fullscreen-mode');
    
    // Force the palette toggle to be visible if the theme tries to hide it
    const toggle = document.querySelector('.md-header__option');
    if (toggle) {      
      toggle.style.display = 'block';
    }
    
    if (quizKey) {
      // right_sidebar.style.display = 'block';
    }
       
    if (revealjs) {
      right_sidebar.style.display = 'none';
    }

    // Optional: Log to console to verify
    console.log("Fullscreen mode activated via URL parameter.");
  }

});

