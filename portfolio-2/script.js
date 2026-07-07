(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Scroll progress + nav shadow */
  const progressBar = document.getElementById('progressBar');
  const nav = document.getElementById('nav');
  let ticking = false;
  function onScroll(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
    nav.classList.toggle('scrolled', scrollTop > 20);
  }
  window.addEventListener('scroll', () => {
    if (!ticking){ requestAnimationFrame(() => { onScroll(); ticking = false; }); ticking = true; }
  });
  onScroll();

  /* Fullscreen menu overlay */
  const menuBtn = document.getElementById('menuBtn');
  const menuIcon = document.getElementById('menuIcon');
  const menuOverlay = document.getElementById('menuOverlay');
  function closeMenu(){
    menuIcon.classList.remove('open');
    menuOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  menuBtn.addEventListener('click', () => {
    const isOpen = menuOverlay.classList.toggle('open');
    menuIcon.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  document.querySelectorAll('.menu-link').forEach(link => link.addEventListener('click', closeMenu));

  /* Smooth anchor scroll w/ nav offset */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      const top = target.getBoundingClientRect().top + window.scrollY - (nav.offsetHeight - 1);
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window && !reduceMotion){
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting){ entry.target.classList.add('in-view'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* Accordions (Projects + About) - single-open within each group */
  document.querySelectorAll('.accordion').forEach(group => {
    const items = group.querySelectorAll('.accordion-item');
    items.forEach(item => {
      const trigger = item.querySelector('.accordion-trigger');
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
  });

  /* Contact form (front-end demo only) */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const submitLabel = document.getElementById('submitLabel');
  if (contactForm){
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      submitLabel.textContent = 'Sending...';
      setTimeout(() => {
        submitLabel.textContent = 'Submit Inquiry';
        formNote.textContent = "Thanks — I'll get back to you soon.";
        contactForm.reset();
        setTimeout(() => { formNote.textContent = ''; }, 5000);
      }, 800);
    });
  }

  /* ================================================================
     PREMIUM INTERACTIONS & ANIMATIONS (added)
     ================================================================ */

  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---- 1. Custom gaming cursor + trailing effect ---- */
  if (isFinePointer && !reduceMotion){
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const TRAIL_COUNT = 4;
    const trails = [];
    for (let i = 0; i < TRAIL_COUNT; i++){
      const t = document.createElement('div');
      t.className = 'cursor-trail';
      t.style.opacity = (0.22 - i * 0.05).toFixed(2);
      t.style.width = t.style.height = (8 - i * 1.4) + 'px';
      document.body.appendChild(t);
      trails.push({ el: t, x: 0, y: 0 });
    }

    let mouseX = -100, mouseY = -100;
    let curX = -100, curY = -100;
    let started = false;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started){
        started = true;
        cursor.classList.add('is-active');
        curX = mouseX; curY = mouseY;
        trails.forEach(t => { t.x = mouseX; t.y = mouseY; });
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
    window.addEventListener('mouseenter', () => cursor.classList.add('is-active'));

    const interactiveSelector = 'a, button, .btn-pill, .icon-btn, .accordion-trigger, .badge, .edu-card, input, textarea, .menu-link, .nav-logo';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(interactiveSelector)) cursor.classList.add('is-hovering');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(interactiveSelector)) cursor.classList.remove('is-hovering');
    });

    function cursorLoop(){
      // Smooth lerp for the main pointer (fast, minimal lag)
      curX += (mouseX - curX) * 0.35;
      curY += (mouseY - curY) * 0.35;
      cursor.style.transform = `translate(${curX - 2}px, ${curY - 2}px)` +
        (cursor.classList.contains('is-hovering') ? ' scale(1.1)' : ' scale(1)');

      // Trail follows with progressively softer lerp for a short fading tail
      let prevX = mouseX, prevY = mouseY;
      trails.forEach((t, i) => {
        const speed = 0.32 - i * 0.05;
        t.x += (prevX - t.x) * speed;
        t.y += (prevY - t.y) * speed;
        t.el.style.transform = `translate(${t.x}px, ${t.y}px) translate(-50%,-50%)`;
        prevX = t.x; prevY = t.y;
      });

      requestAnimationFrame(cursorLoop);
    }
    requestAnimationFrame(cursorLoop);
  }

  /* ---- 5. Portrait image tilt on mouse position ---- */
  if (isFinePointer && !reduceMotion){
    const frame = document.querySelector('.portrait-frame');
    const img = frame ? frame.querySelector('img') : null;
    if (frame && img){
      const MAX_TILT = 5;
      frame.addEventListener('mousemove', e => {
        const rect = frame.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;   // 0..1
        const py = (e.clientY - rect.top) / rect.height;   // 0..1
        const tiltX = (py - 0.5) * -2 * MAX_TILT;
        const tiltY = (px - 0.5) * 2 * MAX_TILT;
        img.style.transform = `scale(1.03) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        frame.classList.add('tilting');
      });
      frame.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
        frame.classList.remove('tilting');
      });
    }
  }
})();