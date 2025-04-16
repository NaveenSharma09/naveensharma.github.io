// Dark Mode Toggle
const toggle = document.getElementById('dark-toggle');
const body = document.body;
const toggleIcon = document.getElementById('toggle-icon'); // Update to use Font Awesome icon

function updateToggleIcon() {
  toggleIcon.classList.toggle('fa-moon', !body.classList.contains('dark'));
  toggleIcon.classList.toggle('fa-sun', body.classList.contains('dark'));
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  updateToggleIcon();
});

updateToggleIcon();

// Header scroll effect
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
