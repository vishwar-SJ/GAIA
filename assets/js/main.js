/**
 * GAIA 2.0 - Core JavaScript
 * Handles navigation, mobile menu, scroll effects, and UI enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  // Navbar Scroll Background Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Animated Counter for Stats
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target'));
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          animateCounter(el, target, prefix, suffix);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(el => observer.observe(el));
  } else {
    statNumbers.forEach(el => {
      const target = el.getAttribute('data-target');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      el.textContent = `${prefix}${target}${suffix}`;
    });
  }

  function animateCounter(el, target, prefix, suffix) {
    let start = 0;
    const duration = 1600;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        el.textContent = `${prefix}${formatNumber(target)}${suffix}`;
      } else {
        el.textContent = `${prefix}${formatNumber(Math.floor(start))}${suffix}`;
      }
    }, stepTime);
  }

  function formatNumber(num) {
    return num.toLocaleString();
  }

  // Tab switching utility
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      const tabContainer = btn.closest('.tabs-wrapper') || document;
      
      tabContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      tabContainer.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = tabContainer.querySelector(`#${targetTab}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });
});
