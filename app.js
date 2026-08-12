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
  if (nav && !nav.querySelector('a[href="library.html"]')) {
    const libraryLink = document.createElement('a');
    libraryLink.href = 'library.html';
    libraryLink.textContent = 'Library';
    const resumeLink = nav.querySelector('a[href="resume.html"]');
    nav.insertBefore(libraryLink, resumeLink || nav.querySelector('.hire-link') || null);
  }
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

  const addExternalLinkByHeading = (headingNeedle, href, label, marker) => {
    const heading = [...document.querySelectorAll('h2, h3')]
      .find((node) => node.textContent.toLowerCase().includes(headingNeedle.toLowerCase()));
    if (!heading) return;
    const card = heading.closest('.project-row, .card');
    if (!card) return;
    const actions = card.querySelector('.project-actions, .card-links');
    if (!actions || actions.querySelector(`[data-added-link="${marker}"]`)) return;
    const link = document.createElement('a');
    link.className = actions.classList.contains('project-actions') ? 'btn btn-ghost' : 'inline-link';
    link.dataset.addedLink = marker;
    link.href = href;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = label;
    actions.appendChild(link);
  };

  addExternalLinkByHeading(
    '12D Hebbian Transformer',
    'https://github.com/NavisWORLD/Cosmos/tree/career-os-portfolio-2/reference/dyn12_torch',
    'Trainable dyn12 reference + CI ↗',
    'dyn12-reference'
  );
  addExternalLinkByHeading(
    'Universe Simulation Engine',
    'https://github.com/NavisWORLD/Cosmos/tree/career-os-portfolio-2/reference/universe_engine',
    'Runnable C++/Python engine ↗',
    'universe-reference'
  );
  addExternalLinkByHeading(
    'Portable COSMOS Reference',
    'https://github.com/NavisWORLD/Cosmos/tree/career-os-portfolio-2/reference/dyn12_torch',
    'Trainable dyn12 module ↗',
    'dyn12-from-portable'
  );

  const isLibraryPage = location.pathname.endsWith('/library.html') || location.pathname.endsWith('library.html');
  if (isLibraryPage) {
    const heroActions = document.querySelector('.page-hero .hero-actions');
    const addHeroDownload = (href, text, marker) => {
      if (!heroActions || heroActions.querySelector(`[data-download="${marker}"]`)) return;
      const link = document.createElement('a');
      link.className = 'btn';
      link.dataset.download = marker;
      link.href = href;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.textContent = text;
      heroActions.appendChild(link);
    };
    addHeroDownload(
      'https://drive.google.com/drive/folders/16gJlHxHqDWAG4xsUKBKIxzY69v92Jv4S',
      'Download 00–24 Word library ↗',
      'word-library'
    );
    addHeroDownload(
      'https://drive.google.com/file/d/1-u_tfZ9nxgJZ3AfcaDN1CQS9AcnIg-xf/view',
      '114-page master book ↗',
      'master-book'
    );
    addHeroDownload(
      'https://drive.google.com/file/d/16Neusv03kjHmInoP1d6ufNODeTD_uc6y/view',
      'Universe Engine source ZIP ↗',
      'universe-zip'
    );
    addHeroDownload(
      'https://drive.google.com/file/d/1Pb7ByxaOfPGL2WBg3IRrlQsQKSg6Ah1X/view',
      'dyn12 PyTorch source ZIP ↗',
      'dyn12-zip'
    );
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
  if (palette && !palette.querySelector('a[href="library.html"]')) {
    const results = palette.querySelector('.command-results');
    if (results) {
      const item = document.createElement('a');
      item.className = 'command-item';
      item.dataset.commandItem = '';
      item.href = 'library.html';
      item.innerHTML = '<span>Open-source engineering library</span><span class="command-key">Library</span>';
      results.insertBefore(item, results.children[2] || null);
    }
  }
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
