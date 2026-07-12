/* ═══════════════════════════════
   ANAQI VENTURES — Shared JS
═══════════════════════════════ */

// ── MOBILE MENU ──
function toggleMob() { document.getElementById('mmenu').classList.toggle('open'); }
function toggleSub(id) { document.getElementById(id).classList.toggle('open'); }

// ── FAQ ACCORDION ──
function faq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  item.parentElement.querySelectorAll('.fi').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── SCROLL REVEAL — claude.com style fade-up ──
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px'
  });

  // Observe all .reveal and .reveal-group elements
  document.querySelectorAll('.reveal, .reveal-group').forEach(el => {
    observer.observe(el);
  });

  // Also observe elements added dynamically (components.js populates sections)
  const mutationObserver = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.in), .reveal-group:not(.in)').forEach(el => {
      observer.observe(el);
    });
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });
});

// ── SUBNAV ACTIVE ON SCROLL ──
document.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll('.sec-anchor');
  const navLinks = document.querySelectorAll('.subnav-row a[href^="#"]');
  if (!anchors.length || !navLinks.length) return;

  if (navLinks[0]) navLinks[0].classList.add('active');

  window.addEventListener('scroll', () => {
    let current = '';
    anchors.forEach(a => {
      if (a.getBoundingClientRect().top <= 130) current = a.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
});

// ── MARK CURRENT NAV ITEM ──
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('.nmenu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const filename = href.split('/').pop().split('#')[0];
    if (filename && path.endsWith(filename)) {
      a.closest('li')?.classList.add('act');
    }
  });
});
