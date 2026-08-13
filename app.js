(() => {
  const root = document.documentElement;
  const themeKey = 'cory-portfolio-theme';
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;

  // Load the richer Portfolio OS visual layer where it adds value. The ASCII
  // interface is loaded independently for every page near the end of this file.
  const osPage = ['home', 'works', 'universe', 'publications', 'timeline', 'proof', 'offerings']
    .includes(document.body?.dataset?.page || '');
  if (osPage && !document.querySelector('link[href="os.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'os.css';
    document.head.appendChild(link);
  }
  if (osPage && !document.querySelector('script[src="os.js"]')) {
    const script = document.createElement('script');
    script.src = 'os.js';
    script.defer = true;
    document.head.appendChild(script);
  }

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
  const insertNavLink = (href, label, beforeHref = 'resume.html') => {
    if (!nav || nav.querySelector(`a[href="${href}"]`)) return;
    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;
    const before = nav.querySelector(`a[href="${beforeHref}"]`) || nav.querySelector('.hire-link') || null;
    nav.insertBefore(link, before);
  };

  // Core portfolio routes.
  insertNavLink('library.html', 'Library');
  insertNavLink('universe.html', 'Repo Universe', 'library.html');
  insertNavLink('works.html', 'Works', 'universe.html');

  // Canonical public-record routes added in the 2026-08 portfolio consolidation.
  insertNavLink('publications.html', 'Publications', 'resume.html');
  insertNavLink('timeline.html', 'Timeline', 'resume.html');
  insertNavLink('proof.html', 'Proof', 'resume.html');
  insertNavLink('offerings.html', 'What I Offer', 'resume.html');

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

  // Final public-repository sync. The underlying HTML is intentionally preserved;
  // this additive layer keeps the visible Portfolio OS aligned with the live 25-repo
  // public constellation and injects the newest project without deleting older DOM.
  const syncFinalRepositoryState = () => {
    const page = document.body?.dataset?.page || '';
    const lanternRepo = 'https://github.com/NavisWORLD/Death-on-a-sub-';
    const replaceText = (el, from, to) => {
      if (el && el.textContent.includes(from)) el.textContent = el.textContent.replace(from, to);
    };

    if (page === 'home') {
      replaceText(document.querySelector('.os-home .hero-actions a[href="universe.html"]'), '24 PUBLIC REPOS', '25 PUBLIC REPOS');
      [...document.querySelectorAll('.signal-strip .signal strong')]
        .forEach((el) => replaceText(el, '24 PUBLIC', '25 PUBLIC'));
      replaceText(document.querySelector('.portal[href="universe.html"] h3'), '24-Repo Universe', '25-Repo Universe');

      const flagshipSection = [...document.querySelectorAll('main section')]
        .find((section) => section.querySelector('.section-head h2')?.textContent.includes('Eight doors'));
      if (flagshipSection) {
        replaceText(flagshipSection.querySelector('.section-head h2'), 'Eight doors', 'Nine doors');
        const cards = flagshipSection.querySelector('.cards');
        if (cards && !cards.querySelector('[data-final-repo="lantern"]')) {
          const card = document.createElement('article');
          card.className = 'card reveal';
          card.dataset.finalRepo = 'lantern';
          card.innerHTML = `<div class="card-kicker"><span class="badge implemented">Local-first memorial continuity</span><span>Family / provenance</span></div><h3>HEARTLIGHT // The Lantern Archive</h3><p>A family-controlled memorial-continuity toolkit for consented stories, media, values, family teaching, provenance, and optional heartbeat-derived rhythm signatures. Explicitly not resurrection, soul recovery, exact identity recreation, or deceptive impersonation.</p><div class="card-links"><a class="inline-link" href="${lanternRepo}" target="_blank" rel="noreferrer">Repository ↗</a><a class="inline-link" href="publications/LANTERN_ARCHIVE_PRODUCT_BRIEF.md">Product brief →</a></div>`;
          cards.appendChild(card);
        }
      }
    }

    if (page === 'projects') {
      const list = document.querySelector('.project-list');
      if (list && !list.querySelector('[data-final-repo="lantern"]')) {
        const row = document.createElement('article');
        row.className = 'project-row reveal';
        row.dataset.project = 'ai creative evidence research';
        row.dataset.finalRepo = 'lantern';
        row.innerHTML = `<div class="project-meta"><span class="badge implemented">Implemented / experimental</span><br><br>Memorial continuity · Family governance</div><div><h2>HEARTLIGHT // The Lantern Archive</h2><p>A local-first memorial-continuity toolkit with family evidence import, SHA-256 provenance, append-only family teaching, grounded memorial-profile construction, heartbeat-derived rhythm signatures, HIP event contracts, optional Azure/IBM storage mirrors, cross-language SDK surfaces, deployment material, tests/CI, and explicit no-resurrection/no-impersonation rules.</p><div class="tag-row"><span class="tag">Python</span><span class="tag">Heartbeat DSP</span><span class="tag">Azure</span><span class="tag">IBM COS</span><span class="tag">Provenance</span><span class="tag">Ethics</span></div></div><div class="project-actions"><a class="btn" href="${lanternRepo}" target="_blank" rel="noreferrer">Repository ↗</a><a class="btn btn-ghost" href="publications/LANTERN_ARCHIVE_PRODUCT_BRIEF.md">Product brief →</a></div>`;
        const ctaSection = list.querySelector(':scope > .cta');
        if (ctaSection) list.insertBefore(row, ctaSection); else list.appendChild(row);
      }
    }

    if (page === 'works') {
      const booksSection = [...document.querySelectorAll('main section')]
        .find((section) => section.querySelector('.eyebrow')?.textContent.includes('Books & manuals'));
      const cards = booksSection?.querySelector('.cards');
      if (cards && !cards.querySelector('[data-final-repo="lantern"]')) {
        const card = document.createElement('article');
        card.className = 'card reveal';
        card.dataset.finalRepo = 'lantern';
        card.innerHTML = `<div class="card-kicker"><span class="badge implemented">Family / ethics / engineering</span><span>Lantern Archive</span></div><h3>HEARTLIGHT // The Lantern Archive manuals</h3><p>A product-shaped memorial-continuity system with family, teacher/facilitator, science, ethics/safety, architecture, enterprise, protocol, SDK, provenance, and local-first operation documentation.</p><div class="card-links"><a class="inline-link" href="publications/LANTERN_ARCHIVE_PRODUCT_BRIEF.md">Portfolio brief →</a><a class="inline-link" href="${lanternRepo}" target="_blank" rel="noreferrer">Repository ↗</a></div>`;
        cards.appendChild(card);
      }
    }

    if (page === 'universe') {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.content = meta.content.replace('24 public', '25 public');
      replaceText(document.querySelector('.page-hero .boot-label'), '24 PUBLIC NODES', '25 PUBLIC NODES');
      replaceText(document.querySelector('.page-hero .hero-actions a[href="REPOSITORY_UNIVERSE.md"]'), '24-repo', '25-repo');
      replaceText(document.querySelector('.constellation-core span'), '24 PUBLIC REPOS', '25 PUBLIC REPOS');

      const flagship = [...document.querySelectorAll('main section')]
        .find((section) => section.querySelector('.section-head h2')?.textContent.includes('Eight fast doors'));
      if (flagship) {
        replaceText(flagship.querySelector('.section-head h2'), 'Eight fast doors', 'Nine fast doors');
        const p = flagship.querySelector('.section-head > p');
        if (p) p.textContent = 'The visual orbit remains compact for layout stability; HEARTLIGHT, COSMOS Media, and the Lantern Archive join the flagship grid and ASCII constellation.';
        const grid = flagship.querySelector('.repo-grid');
        if (grid && !grid.querySelector('[data-final-repo="lantern"]')) {
          const tile = document.createElement('a');
          tile.className = 'repo-tile reveal';
          tile.dataset.finalRepo = 'lantern';
          tile.href = lanternRepo;
          tile.target = '_blank';
          tile.rel = 'noreferrer';
          tile.innerHTML = `<span class="repo-index">09</span><h3>HEARTLIGHT // Lantern Archive</h3><p>Local-first memorial continuity: family evidence, teaching, provenance, heartbeat rhythm signatures, Azure/IBM mirrors, SDKs, and explicit no-resurrection/no-impersonation boundaries.</p><span class="repo-go">OPEN ↗</span>`;
          grid.appendChild(tile);
        }
      }

      const creativeSection = [...document.querySelectorAll('main section')]
        .find((section) => section.querySelector('h2')?.textContent.includes('Creative systems become public infrastructure'));
      const repoList = creativeSection?.querySelector('.repo-list');
      if (repoList && !repoList.querySelector('[data-final-repo="lantern"]')) {
        const link = document.createElement('a');
        link.dataset.finalRepo = 'lantern';
        link.href = lanternRepo;
        link.target = '_blank';
        link.rel = 'noreferrer';
        link.innerHTML = '<strong>Death-on-a-sub- / HEARTLIGHT // The Lantern Archive</strong><span>local memorial continuity · family teaching · heartbeat rhythm · provenance · Azure/IBM mirrors</span><b>↗</b>';
        repoList.appendChild(link);
      }
    }
  };
  syncFinalRepositoryState();

  const isLibraryPage = location.pathname.endsWith('/library.html') || location.pathname.endsWith('library.html');
  if (isLibraryPage) {
    const heroActions = document.querySelector('.page-hero .hero-actions');
    const addHeroDownload = (href, text, marker) => {
      if (!heroActions || heroActions.querySelector(`[data-download="${marker}"]`)) return;
      const link = document.createElement('a');
      link.className = 'btn';
      link.dataset.download = marker;
      link.href = href;
      link.target = href.startsWith('http') ? '_blank' : '';
      if (link.target) link.rel = 'noreferrer';
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
    addHeroDownload('publications.html', 'Publication + hash archive →', 'publication-archive');
    addHeroDownload('proof.html', 'Proof ledger →', 'proof-ledger');
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
  const addCommand = (href, label, key) => {
    const results = palette?.querySelector('.command-results');
    if (!results || results.querySelector(`a[href="${href}"]`)) return;
    const item = document.createElement('a');
    item.className = 'command-item';
    item.dataset.commandItem = '';
    item.href = href;
    item.innerHTML = `<span>${label}</span><span class="command-key">${key}</span>`;
    results.appendChild(item);
  };
  addCommand('works.html', 'Books, worlds, visual systems, tools', 'WORKS');
  addCommand('universe.html', 'Repository universe', 'REPOS');
  addCommand('library.html', 'Open-source engineering library', 'LIBRARY');
  addCommand('publications.html', 'Publications, manuals, source hashes', 'PUBS');
  addCommand('timeline.html', 'Career + research + public artifact timeline', 'TIME');
  addCommand('proof.html', 'Proof ledger, hashes, DOI, evidence', 'PROOF');
  addCommand('offerings.html', 'What Cory can build / hiring map', 'OFFER');
  addCommand('https://github.com/NavisWORLD/Death-on-a-sub-', 'HEARTLIGHT // The Lantern Archive', 'REPO');

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

  // Full Portfolio ASCII interface. This is intentionally loaded for EVERY page
  // that uses app.js. The existing DOM remains the source of truth; ascii-ui.js
  // decorates nodes in place and can be toggled off with A or the ASCII control.
  const loadAsciiInterface = () => {
    if (!document.querySelector('link[data-ascii-ui]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'ascii-ui.css?v=20260813-final';
      link.dataset.asciiUi = 'true';
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[data-ascii-ui]')) {
      const script = document.createElement('script');
      script.src = 'ascii-ui.js?v=20260813-final';
      script.dataset.asciiUi = 'true';
      script.defer = true;
      document.body.appendChild(script);
    }
  };
  loadAsciiInterface();
})();