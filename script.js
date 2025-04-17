// Header scroll effect
const header = document.getElementById('main-header'); // Ensure your header has id="main-header"

// Add scroll event listener to change header style when scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) { // If the page is scrolled down 10px or more
    header.classList.add('scrolled');
  } else { // Remove scrolled class when back at top
    header.classList.remove('scrolled');
  }
});

// Mobile hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Toggle mobile menu visibility
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
