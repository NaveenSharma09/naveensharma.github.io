// Dark Mode Toggle
const toggle = document.getElementById('dark-toggle');
const body = document.body;
const toggleIcon = document.getElementById('toggle-icon'); // Update to use Font Awesome icon

// Function to update the toggle icon based on the dark mode state
function updateToggleIcon() {
  toggleIcon.classList.toggle('fa-moon', !body.classList.contains('dark'));
  toggleIcon.classList.toggle('fa-sun', body.classList.contains('dark'));
}

// Add event listener to toggle dark mode on click
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  updateToggleIcon();
});

// Initial icon update
updateToggleIcon();

// Header scroll effect
const header = document.getElementById('main-header');

// Add scroll event listener to change header style when scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
