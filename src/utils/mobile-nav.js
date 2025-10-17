// mobile-nav.js
// Handles hamburger toggle for mobile and hides nav on scroll (merge of scroll-contacto logic)
(function () {
  const nav = document.getElementById('main-nav') || document.querySelector('header nav');
  const hamburger = document.getElementById('mobile-hamburger');
  if (!nav || !hamburger) return; // nothing to do for pages without these elements

  // Toggle nav open/close
  const toggleNav = () => {
    nav.classList.toggle('nav-open');
    hamburger.classList.toggle('is-open');
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNav();
  });

  // Hide nav on scroll down, show on scroll up (only when nav is not open)
  let lastScrollY = window.scrollY || 0;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY || 0;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // scrolling down
      nav.classList.add('nav-hidden');
    } else {
      // scrolling up
      nav.classList.remove('nav-hidden');
    }
    lastScrollY = currentScrollY;
  });

  // Close nav if user taps outside on mobile
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('nav-open')) return;
    if (nav.contains(e.target) || hamburger.contains(e.target)) return;
    nav.classList.remove('nav-open');
    hamburger.classList.remove('is-open');
  });
})();
