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

// ── SUBNAV ACTIVE ON SCROLL ──
document.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll('.sec-anchor');
  const navLinks = document.querySelectorAll('.subnav-row a[href^="#"]');
  if (!anchors.length || !navLinks.length) return;

  // Set first link active on load
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
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace('../', '').replace('./', ''))) {
      a.closest('li').classList.add('act');
    }
  });
});
