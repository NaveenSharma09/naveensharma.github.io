
// Header scroll effect
const header = document.getElementById('main-header'); // Ensure your header has id="main-header"

// Add scroll event listener to change header style when scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Dark mode toggle (optional enhancement for small wins)
const darkToggle = document.getElementById('dark-toggle');

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}
