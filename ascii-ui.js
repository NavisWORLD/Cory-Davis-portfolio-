(() => {
  const root = document.documentElement;
  const body = document.body;
  if (!body || body.dataset.asciiRendererReady === 'true') return;
  body.dataset.asciiRendererReady = 'true';

  const STORAGE_KEY = 'cory-portfolio-ascii-mode';
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const initialEnabled = localStorage.getItem(STORAGE_KEY) !== 'off';

  const pageName = (() => {
    const path = location.pathname.toLowerCase();
    if (path.endsWith('projects.html')) return 'PROJECTS';
    if (path.endsWith('works.html')) return 'WORKS';
    if (path.endsWith('universe.html')) return 'REPOSITORY_UNIVERSE';
    if (path.endsWith('library.html')) return 'OPEN_LIBRARY';
    if (path.endsWith('resume.html')) return 'RESUME';
    return 'HOME';
  })();

  const ascii = {
    HOME: String.raw`
   ██████╗ ██████╗ ██████╗ ██╗   ██╗    ██████╗  █████╗ ██╗   ██╗██╗███████╗
  ██╔════╝██╔═══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔══██╗██║   ██║██║██╔════╝
  ██║     ██║   ██║██████╔╝ ╚████╔╝     ██║  ██║███████║██║   ██║██║███████╗
  ██║     ██║   ██║██╔══██╗  ╚██╔╝      ██║  ██║██╔══██║╚██╗ ██╔╝██║╚════██║
  ╚██████╗╚██████╔╝██║  ██║   ██║       ██████╔╝██║  ██║ ╚████╔╝ ██║███████║
   ╚═════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚══════╝`,
    PROJECTS: String.raw`
  ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
  ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
  ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
  ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
  ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
  ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝`,
    WORKS: String.raw`
  ██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗███████╗
  ██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝██╔════╝
  ██║ █╗ ██║██║   ██║██████╔╝█████╔╝ ███████╗
  ██║███╗██║██║   ██║██╔══██╗██╔═██╗ ╚════██║
  ╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗███████║
   ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝`,
    REPOSITORY_UNIVERSE: String.raw`
  ██████╗ ███████╗██████╗  ██████╗     ██╗   ██╗███╗   ██╗██╗██╗   ██╗███████╗██████╗ ███████╗███████╗
  ██╔══██╗██╔════╝██╔══██╗██╔═══██╗    ██║   ██║████╗  ██║██║██║   ██║██╔════╝██╔══██╗██╔════╝██╔════╝
  ██████╔╝█████╗  ██████╔╝██║   ██║    ██║   ██║██╔██╗ ██║██║██║   ██║█████╗  ██████╔╝███████╗█████╗
  ██╔══██╗██╔══╝  ██╔═══╝ ██║   ██║    ██║   ██║██║╚██╗██║██║╚██╗ ██╔╝██╔══╝  ██╔══██╗╚════██║██╔══╝
  ██║  ██║███████╗██║     ╚██████╔╝    ╚██████╔╝██║ ╚████║██║ ╚████╔╝ ███████╗██║  ██║███████║███████╗
  ╚═╝  ╚═╝╚══════╝╚═╝      ╚═════╝      ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝`,
    OPEN_LIBRARY: String.raw`
  ██╗     ██╗██████╗ ██████╗  █████╗ ██████╗ ██╗   ██╗
  ██║     ██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝
  ██║     ██║██████╔╝██████╔╝███████║██████╔╝ ╚████╔╝
  ██║     ██║██╔══██╗██╔══██╗██╔══██║██╔══██╗  ╚██╔╝
  ███████╗██║██████╔╝██║  ██║██║  ██║██║  ██║   ██║
  ╚══════╝╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝`,
    RESUME: String.raw`
  ██████╗ ███████╗███████╗██╗   ██╗███╗   ███╗███████╗
  ██╔══██╗██╔════╝██╔════╝██║   ██║████╗ ████║██╔════╝
  ██████╔╝█████╗  ███████╗██║   ██║██╔████╔██║█████╗
  ██╔══██╗██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝
  ██║  ██║███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗
  ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝`
  };

  const make = (tag, className, text = '') => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  };

  const cleanLabel = (value, fallback = 'NODE') => {
    const text = String(value || fallback)
      .replace(/\s+/g, ' ')
      .replace(/[\[\]<>]/g, '')
      .trim()
      .toUpperCase();
    return (text || fallback).slice(0, 36);
  };

  const findLabel = (el) => {
    const heading = el.querySelector(':scope > h1, :scope > h2, :scope > h3, h2, h3');
    if (heading) return cleanLabel(heading.textContent);
    const kicker = el.querySelector('.card-kicker, .portal-code, .repo-index, .eyebrow, .when');
    if (kicker) return cleanLabel(kicker.textContent);
    if (el.classList.contains('resume-sidebar')) return 'IDENTITY_BUFFER';
    if (el.classList.contains('evidence-panel')) return 'EVIDENCE_BUS';
    if (el.classList.contains('cta')) return 'NEXT_ACTION';
    if (el.classList.contains('manifesto')) return 'OPERATING_PHILOSOPHY';
    if (el.classList.contains('os-terminal')) return 'COSMOS_TERMINAL';
    if (el.classList.contains('repo-list')) return 'REPOSITORY_TREE';
    return 'NODE';
  };

  const frameTargets = () => [...document.querySelectorAll([
    '.card',
    '.portal',
    '.capability',
    '.project-row',
    '.repo-tile',
    '.evidence-panel',
    '.cta',
    '.manifesto',
    '.hero-panel',
    '.os-terminal',
    '.resume-sidebar',
    '.resume-section',
    '.repo-list'
  ].join(','))];

  const ensureFrame = (el) => {
    if (el.dataset.asciiFramed === 'true') return;
    el.dataset.asciiFramed = 'true';
    el.classList.add('ascii-box');

    const top = make('pre', 'ascii-frame-top');
    top.setAttribute('aria-hidden', 'true');
    const label = make('span', 'ascii-box-label', findLabel(el));
    label.setAttribute('aria-hidden', 'true');
    const bottom = make('pre', 'ascii-frame-bottom');
    bottom.setAttribute('aria-hidden', 'true');

    el.prepend(label);
    el.prepend(top);
    el.append(bottom);
  };

  const renderFrame = (el) => {
    const top = el.querySelector(':scope > .ascii-frame-top');
    const bottom = el.querySelector(':scope > .ascii-frame-bottom');
    if (!top || !bottom) return;

    // The frame itself uses ~.78rem monospace; ~7.4px/character is a robust
    // cross-platform approximation. The line is decoration, not layout.
    const chars = Math.max(14, Math.min(170, Math.floor(el.getBoundingClientRect().width / 7.4) - 2));
    const label = cleanLabel(el.querySelector(':scope > .ascii-box-label')?.textContent || 'NODE');
    const prefix = `┌─[${label}]`;
    const topFill = '─'.repeat(Math.max(1, chars - prefix.length));
    top.textContent = `${prefix}${topFill}┐`;
    bottom.textContent = `└${'─'.repeat(chars)}┘`;
  };

  const addPageBanner = () => {
    if (document.querySelector('.ascii-page-banner')) return;
    const header = document.querySelector('.site-header');
    const banner = make('pre', 'ascii-page-banner');
    banner.setAttribute('aria-label', `Cory Davis Portfolio OS — ${pageName}`);
    banner.textContent = `${ascii[pageName] || ascii.HOME}\n\n╔═[ PORTFOLIO_OS // ${pageName} // PUBLIC SOURCE INTERFACE ]${'═'.repeat(Math.max(2, 72 - pageName.length))}╗\n║  BUILD STRANGE // MEASURE HARD // LEAVE A MAP                                         ║\n╚════════════════════════════════════════════════════════════════════════════════════════╝`;
    header?.insertAdjacentElement('afterend', banner);
  };

  const addSectionRules = () => {
    [...document.querySelectorAll('main > section')].forEach((section, index) => {
      if (section.dataset.asciiRule === 'true') return;
      section.dataset.asciiRule = 'true';
      const title = cleanLabel(
        section.querySelector('.eyebrow')?.textContent ||
        section.querySelector('h1, h2')?.textContent ||
        `SECTION_${String(index + 1).padStart(2, '0')}`
      );
      const rule = make('pre', 'ascii-section-rule');
      rule.setAttribute('aria-hidden', 'true');
      rule.textContent = `├─[ ${String(index + 1).padStart(2, '0')} :: ${title} ]${'─'.repeat(Math.max(8, 78 - title.length))}┤`;
      section.before(rule);
    });
  };

  const addConstellationMap = () => {
    const constellation = document.querySelector('.constellation');
    if (!constellation || constellation.querySelector('.ascii-constellation-map')) return;
    const map = make('pre', 'ascii-constellation-map');
    map.setAttribute('aria-hidden', 'true');
    map.textContent = String.raw`
                                      [ CORY.DAVIS ]
                                            │
                 ┌──────────────────────────┼──────────────────────────┐
                 │                          │                          │
             [ COSMOS ]                  [ CST ]                  [ DYN12 ]
                 │                          │                          │
      ┌──────────┼──────────┐         ┌─────┴─────┐           ┌────────┴────────┐
      │          │          │         │           │           │                 │
   [MEMORY]    [CNS]     [SENSORY]  [A-LMI]   [THEORY]    [TRANSFORMER]     [PROOF]
      │                     │                                      │
      └──────────┬──────────┘                                      │
                 │                                                 │
           [ LOCAL RUNTIME ]                                       │
                 │                                                 │
                 └───────────────────────┬─────────────────────────┘
                                         │
                              [ PUBLIC ENGINEERING ]
                                         │
                       ┌─────────────────┴────────────────┐
                       │                                  │
                [ ALIEN CONDUCTOR ]               [ REALITY BRIDGE ]
                       │                                  │
                  [ MUSIC / AI ]                  [ SIM / VISUALS ]
                       └─────────────────┬────────────────┘
                                         │
                              [ LIBRARIES / MANUALS ]`;
    constellation.prepend(map);
  };

  const addStatusLine = () => {
    if (document.querySelector('.ascii-status-line')) return;
    const line = make('div', 'ascii-status-line', `FULL_RENDER // ${pageName} // A=TOGGLE`);
    line.setAttribute('aria-hidden', 'true');
    body.append(line);
  };

  const updateToggle = () => {
    const button = document.querySelector('[data-ascii-toggle]');
    if (!button) return;
    const on = body.classList.contains('ascii-ui-enabled');
    button.textContent = `ASCII:${on ? 'ON' : 'OFF'}`;
    button.setAttribute('aria-pressed', String(on));
    button.title = on ? 'Show original visual layer' : 'Restore full ASCII interface';
  };

  const applyMode = (enabled, persist = true) => {
    body.classList.toggle('ascii-ui-enabled', enabled);
    body.classList.toggle('ascii-ui-disabled', !enabled);
    if (persist) localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off');
    updateToggle();
    if (enabled) requestAnimationFrame(renderAllFrames);
  };

  const addToggle = () => {
    const nav = document.querySelector('.nav');
    if (!nav || nav.querySelector('[data-ascii-toggle]')) return;
    const button = make('button', 'ascii-mode-toggle', 'ASCII:ON');
    button.type = 'button';
    button.dataset.asciiToggle = '';
    button.setAttribute('aria-pressed', 'true');
    button.addEventListener('click', () => {
      applyMode(!body.classList.contains('ascii-ui-enabled'));
    });
    const commandButton = nav.querySelector('[data-command-open]');
    nav.insertBefore(button, commandButton || nav.querySelector('.hire-link') || null);
  };

  const renderAllFrames = () => frameTargets().forEach(renderFrame);

  const decorate = () => {
    addPageBanner();
    addSectionRules();
    frameTargets().forEach(ensureFrame);
    addConstellationMap();
    addToggle();
    addStatusLine();
    applyMode(initialEnabled, false);
    renderAllFrames();
  };

  decorate();

  let resizeTimer = 0;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderAllFrames, 100);
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (/input|textarea|select/i.test(document.activeElement?.tagName || '')) return;
    if (event.key.toLowerCase() === 'a') {
      applyMode(!body.classList.contains('ascii-ui-enabled'));
    }
  });

  // App.js may add page-specific links synchronously. A short observer catches
  // any later UI insertions without replacing or destroying the original nodes.
  const observer = new MutationObserver(() => {
    frameTargets().forEach(ensureFrame);
    renderAllFrames();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(() => observer.disconnect(), reduceMotion ? 1200 : 3000);
})();
