/* ═══════════════════════════════════════════════
   Image Board Studio Tutorial — client.js
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll spy: highlight active nav link ──────────────────────
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('[data-section]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.dataset.section;
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, { rootMargin: '-15% 0px -70% 0px' });

  sections.forEach(s => observer.observe(s));


  // ── Copy button on code blocks ─────────────────────────────────
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code');
    pre.style.position = 'relative';
    pre.appendChild(btn);

    btn.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.innerText ?? '';
      try {
        await navigator.clipboard.writeText(code);
        btn.textContent = 'Copied!';
        btn.classList.add('copy-btn--success');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copy-btn--success');
        }, 1800);
      } catch {
        btn.textContent = 'Error';
      }
    });
  });


  // ── Smooth scroll for all anchor links ────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});
