// Dark Mode Toggle
const toggle = document.getElementById('dark-toggle');
const moonIcon = document.getElementById('dark-toggle');

// Toggle Dark Mode
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // Change moon to sun on toggle
  if (document.body.classList.contains('dark')) {
    moonIcon.innerHTML = '🌞'; // Sun icon
  } else {
    moonIcon.innerHTML = '🌙'; // Moon icon
  }
});

// Sticky Header & Color Change on Scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
