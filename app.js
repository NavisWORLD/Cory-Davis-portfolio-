(() => {
  const root = document.documentElement;
  const themeKey = 'cory-portfolio-theme';
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem(themeKey, theme);
    document.querySelectorAll('[data-theme-label]').forEach((el) => {
      el.textContent = theme === 'light' ? 'Dark mode' : 'Light mode';
    });
  };

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.classList.add('theme-toggle');
  });
  document.querySelectorAll('[data-command-open]').forEach((button) => {
    button.classList.add('command-trigger');
  });

  const nav = document.querySelector('.nav');
  if (nav && !nav.querySelector('[data-menu-toggle]')) {
    const menuButton = document.createElement('button');
    menuButton.type = 'button';
    menuButton.className = 'menu-toggle';
    menuButton.dataset.menuToggle = '';
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Toggle navigation');
    menuButton.textContent = 'Menu';
    const hireLink = nav.querySelector('.hire-link');
    nav.insertBefore(menuButton, hireLink || nav.firstChild);
  }

  if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'light' ? 'dark' : 'light';
      setTheme(next);
    });
  });

  document.querySelectorAll('[data-menu-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      nav?.classList.toggle('open');
      button.setAttribute('aria-expanded', nav?.classList.contains('open') ? 'true' : 'false');
    });
  });
  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => {
      nav?.classList.remove('open');
      nav?.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded', 'false');
    });
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      nav?.classList.remove('open');
      nav?.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded', 'false');
    }
  });

  const revealItems = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((el) => el.classList.add('visible'));
  } else {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealItems.forEach((el) => reveal.observe(el));
  }

  const filters = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-project]')];
  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filters.forEach((b) => b.classList.toggle('active', b === button));
      projects.forEach((project) => {
        const tags = (project.dataset.project || '').split(' ');
        project.hidden = filter !== 'all' && !tags.includes(filter);
      });
    });
  });

  const palette = document.querySelector('[data-command-palette]');
  const paletteInput = document.querySelector('[data-command-input]');
  const commandItems = [...document.querySelectorAll('[data-command-item]')];

  const openPalette = () => {
    if (!palette) return;
    palette.classList.add('open');
    palette.setAttribute('aria-hidden', 'false');
    setTimeout(() => paletteInput?.focus(), 10);
  };
  const closePalette = () => {
    if (!palette) return;
    palette.classList.remove('open');
    palette.setAttribute('aria-hidden', 'true');
    if (paletteInput) {
      paletteInput.value = '';
      commandItems.forEach((item) => { item.hidden = false; });
    }
  };

  document.querySelectorAll('[data-command-open]').forEach((button) => {
    button.addEventListener('click', openPalette);
  });
  palette?.addEventListener('click', (event) => {
    if (event.target === palette) closePalette();
  });
  paletteInput?.addEventListener('input', () => {
    const query = paletteInput.value.trim().toLowerCase();
    commandItems.forEach((item) => {
      item.hidden = Boolean(query && !item.textContent.toLowerCase().includes(query));
    });
  });
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      palette?.classList.contains('open') ? closePalette() : openPalette();
    }
    if (event.key === 'Escape') {
      closePalette();
      nav?.classList.remove('open');
      nav?.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('[data-copy-email]').forEach((button) => {
    button.addEventListener('click', async () => {
      const email = 'pheras.king@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const original = button.textContent;
        button.textContent = 'Email copied';
        setTimeout(() => { button.textContent = original; }, 1800);
      } catch {
        window.location.href = `mailto:${email}`;
      }
    });
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
