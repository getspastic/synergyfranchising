// Smooth scroll on anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // adjust for fixed header if any
        behavior: 'smooth'
      });
    }
  });
});

// Mobile menu toggle (if you implement one)
const burger = document.querySelector('.nav-burger');
const navMenu = document.querySelector('.nav-menu');
if (burger && navMenu) {
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
  });
}

// Example: reveal-on-scroll for fade-in animations
const revealEls = document.querySelectorAll('.reveal');
const onScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', onScroll);
document.addEventListener('DOMContentLoaded', onScroll);
