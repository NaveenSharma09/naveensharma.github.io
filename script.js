window.addEventListener('scroll', function () {
  const header = document.getElementById('main-header');
  const hero = document.getElementById('hero');
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > heroHeight - 80) {
    header.classList.add('light-header');
  } else {
    header.classList.remove('light-header');
  }
});
