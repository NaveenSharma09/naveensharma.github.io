// Header scroll effect
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header'); // Ensure your header has id="main-header"

  if (!header) return; // Exit if header is not found

  // Scroll event to toggle 'scrolled' class based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
