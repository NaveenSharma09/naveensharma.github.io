// Dark Mode Toggle
const toggle = document.getElementById('dark-toggle');
const toggleIcon = document.getElementById('toggle-icon');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Toggle moon/sun icon
  if (document.body.classList.contains('dark')) {
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
  } else {
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
  }
});

// Header color change on scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  }
