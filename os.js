(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Star / synapse field. Decorative only; disabled for reduced motion.
  const canvas = document.querySelector('[data-void-canvas]');
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = 1, stars = [];
    const makeStars = () => {
      const count = Math.min(150, Math.max(55, Math.floor((w * h) / 12500)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + .25,
        vx: (Math.random() - .5) * .07,
        vy: (Math.random() - .5) * .07,
        p: Math.random() * Math.PI * 2
      }));
    };
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = innerWidth; h = innerHeight;
      canvas.width = Math.floor(w * dpr); canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeStars();
    };
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      const time = t * .001;
      for (const s of stars) {
        s.x += s.vx; s.y += s.vy;
        if (s.x < -4) s.x = w + 4; if (s.x > w + 4) s.x = -4;
        if (s.y < -4) s.y = h + 4; if (s.y > h + 4) s.y = -4;
        const a = .16 + (Math.sin(time * .8 + s.p) + 1) * .12;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(121,255,199,${a})`; ctx.fill();
      }
      // Sparse synapse links near mouse-free geometric neighbors.
      for (let i = 0; i < stars.length; i += 5) {
        const a = stars[i], b = stars[(i + 7) % stars.length];
        const dx = a.x - b.x, dy = a.y - b.y, dist = Math.hypot(dx, dy);
        if (dist < 160) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(115,223,255,${(1 - dist / 160) * .055})`;
          ctx.lineWidth = .5; ctx.stroke();
        }
      }
      requestAnimationFrame(draw);
    };
    addEventListener('resize', resize, { passive: true });
    resize(); requestAnimationFrame(draw);
  }

  // ASCII reactor animation for the home console.
  const ascii = document.querySelector('[data-ascii-core]');
  if (ascii) {
    const frames = [
`                 .        *        .
          *             .
                 ╭──────────╮
        .       ╱  ╭────╮    ╲       *
               │ ╭┤ CST├╮   │
      *        │ │╰────╯│   │
               │ │ COSMOS│   │      .
          .    │ │  ∞   │   │
               │ ╰──────╯   │
        *       ╲    ║      ╱
                 ╰───╫─────╯
             ════════╬════════
        MEMORY   STATE   MUSIC   WORLD`,
`          .                *
                 ✦
             ╭────────────╮
        *   ╱ ╭────────╮   ╲
           │ ╱  dyn12   ╲   │
      .    ││  ╭────╮   │  │
           ││  │ CST│   │  │
           ││  ╰─╥──╯   │  │
       *   │ ╲   ║     ╱   │
           ╲  ╲ COSMOS╱   ╱
            ╰──╨────────╯
          ═════╬═══════════
       LOCAL  MEMORY  EVIDENCE  ∞`,
`       *             .             *
                ╭───────╮
             ╭──┤ COSMOS├──╮
        ╭────┤  ╰───╥───╯  ├────╮
        │MEM │      ║      │CNS │
        ╰─┬──╯   ╭──╨──╮   ╰──┬─╯
          │      │ CST │      │
       ╭──┴──╮   ╰──╥──╯   ╭──┴──╮
       │MUSIC│      ║      │SIM  │
       ╰──┬──╯   ╭──╨──╮   ╰──┬──╯
          ╰───────┤PROOF├───────╯
                  ╰─────╯
          BUILD → TEST → PRESERVE → SHARE`
    ];
    let frame = 0;
    ascii.textContent = frames[0];
    if (!reduceMotion) setInterval(() => { frame = (frame + 1) % frames.length; ascii.textContent = frames[frame]; }, 1400);
  }

  // Fake boot log that only reveals static portfolio facts.
  const bootLines = [...document.querySelectorAll('[data-boot-line]')];
  if (bootLines.length && !reduceMotion) {
    bootLines.forEach((line, i) => {
      line.style.opacity = '0';
      line.style.transform = 'translateY(4px)';
      setTimeout(() => {
        line.style.transition = 'opacity .25s ease, transform .25s ease';
        line.style.opacity = '1'; line.style.transform = 'none';
      }, 180 + i * 170);
    });
  }

  // Keyboard shortcuts: g = GitHub, r = resume, u = repo universe, w = works.
  document.addEventListener('keydown', (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey || /input|textarea/i.test(document.activeElement?.tagName || '')) return;
    const key = event.key.toLowerCase();
    if (key === 'r') location.href = 'resume.html';
    if (key === 'u') location.href = 'universe.html';
    if (key === 'w') location.href = 'works.html';
    if (key === 'g') window.open('https://github.com/NavisWORLD', '_blank', 'noopener,noreferrer');
  });

  // Gentle pointer parallax for the console; purely decorative.
  const terminal = document.querySelector('.os-terminal');
  if (terminal && !reduceMotion && matchMedia('(pointer:fine)').matches) {
    terminal.addEventListener('pointermove', (e) => {
      const r = terminal.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      terminal.style.transform = `perspective(900px) rotateY(${x * 2.2}deg) rotateX(${y * -2.2}deg)`;
    });
    terminal.addEventListener('pointerleave', () => { terminal.style.transform = ''; });
  }
})();
