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

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
