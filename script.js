// Dark Mode Toggle with Local Storage + Icon Switch
const toggle = document.getElementById('dark-toggle');

// Load saved mode
const isDark = localStorage.getItem('darkMode') === 'true';
if (isDark) {
  document.body.classList.add('dark');
  toggle.textContent = '🌞'; // Light mode icon
} else {
  toggle.textContent = '🌙'; // Dark mode icon
}

toggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark');

  // Update local storage
  localStorage.setItem('darkMode', isDarkMode);

  // Change icon
  toggle.textContent = isDarkMode ? '🌞' : '🌙';
});
