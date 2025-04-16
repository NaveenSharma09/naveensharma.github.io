const toggleButton = document.getElementById('dark-toggle');
const body = document.body;
let isDarkMode = false;

// Check for dark mode preference in localStorage or default to light mode
if (localStorage.getItem('dark-mode') === 'true') {
  body.classList.add('dark');
  toggleButton.textContent = '🌞'; // Change to sun icon
  isDarkMode = true;
}

toggleButton.addEventListener('click', () => {
  if (isDarkMode) {
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'false');
    toggleButton.textContent = '🌙'; // Change to moon icon
    isDarkMode = false;
  } else {
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'true');
    toggleButton.textContent = '🌞'; // Change to sun icon
    isDarkMode = true;
  }
});

// Fix header color change on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#222';
  } else {
    header.style.backgroundColor = '#111';
  }
});
