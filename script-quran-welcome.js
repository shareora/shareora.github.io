const toggle = document.getElementById('modeToggle');
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('night-mode');
    localStorage.setItem('nightMode', document.body.classList.contains('night-mode'));
  });

  // Load previous setting
  window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('nightMode') === 'true') {
      document.body.classList.add('night-mode');
      toggle.checked = true;
    }
  });
