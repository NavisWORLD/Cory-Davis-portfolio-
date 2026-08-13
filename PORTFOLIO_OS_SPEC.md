# PORTFOLIO OS // DESIGN SPECIFICATION

**Reference implementation:** `NavisWORLD/Cory-Davis-portfolio-`

Portfolio OS is a public-repository design pattern that treats a technical portfolio as a small operating environment rather than a single résumé page.

It is intentionally built from plain static HTML, CSS, JavaScript, Markdown, and GitHub repositories. No framework is required.

## 1. Core idea

A conventional portfolio asks a visitor to scroll through claims.

Portfolio OS gives the visitor multiple execution paths:

```text
                    ┌──────────────┐
                    │   README     │
                    │ boot console │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  HOME / OS   │
                    │ interactive  │
                    └───┬──┬──┬───┘
                        │  │  │
          ┌─────────────┘  │  └──────────────┐
          ▼                ▼                 ▼
   ┌────────────┐   ┌────────────┐   ┌──────────────┐
   │  PROJECTS  │   │   WORKS    │   │    RESUME    │
   │ engineering│   │ books/media│   │ recruiter CV │
   └─────┬──────┘   └─────┬──────┘   └──────────────┘
         │                │
         └────────┬───────┘
                  ▼
          ┌───────────────┐
          │ REPO UNIVERSE │
          │ source graph  │
          └───────┬───────┘
                  ▼
          ┌───────────────┐
          │ EVIDENCE /    │
          │ PROVENANCE    │
          └───────────────┘
```

The experience can be theatrical while the claims remain auditable.

## 2. Five-layer architecture

### Layer A — Boot surface

The GitHub README behaves like a textual boot console.

Purpose:

- communicate identity immediately;
- expose the strongest public links without JavaScript;
- remain readable in terminals, GitHub mobile, mirrors, and indexing systems;
- give the project a recognizable visual grammar using only text.

### Layer B — Interactive shell

`index.html` is the animated shell.

Current reference behavior:

- animated ASCII reactor;
- low-cost Canvas star/synapse field;
- keyboard navigation;
- command palette;
- subtle pointer parallax;
- scan-line texture;
- responsive mobile layout;
- reduced-motion fallback.

The animation is decoration. Navigation and content remain usable without it.

### Layer C — Human modes

Different visitors need different information density.

- `resume.html` — recruiter / hiring mode.
- `projects.html` — engineer / reviewer mode.
- `works.html` — book, creative computing, simulation, visual, and tool mode.
- `library.html` — teacher / builder / documentation mode.

No visitor is forced to understand the entire mythology of a large body of work before finding the relevant proof.

### Layer D — Repository universe

`universe.html` and `REPOSITORY_UNIVERSE.md` form a graph layer over a multi-repository body of work.

Principles:

1. Public repositories are discoverable from one root.
2. Private repositories are not silently exposed.
3. Flagship projects appear before ancestry/experimental branches.
4. Lineage is preserved instead of rewriting history around only the newest version.
5. A repository link is a coordinate, not a scientific conclusion.

### Layer E — Trust layer

The spectacle is separated from the evidence vocabulary.

Reference labels:

- **IMPLEMENTED** — inspectable code or artifact exists.
- **OBSERVED** — captured runtime evidence shows execution or state.
- **MEASURED** — a declared benchmark produced a metric.
- **NULL** — a declared success condition was not supported.
- **HYPOTHESIS** — falsifiable interpretation awaiting evidence.
- **METAPHOR / MODEL** — design language, not a literal physical or biological claim.

This is the most important layer. Without it, a theatrical portfolio can become misleading. With it, unusual design language and serious engineering review can coexist.

## 3. Interaction grammar

The reference site uses a tiny command vocabulary:

```text
⌘K / Ctrl+K  open command palette
R            open résumé
U            open repository universe
W            open works archive
G            open GitHub profile
Esc          close overlays / mobile navigation
```

A future implementation can add route commands such as:

```text
open cosmos
open cst
open music
open evidence
open book universe
```

The important rule is graceful degradation: links remain normal HTML anchors.

## 4. ASCII as interface, not decoration only

ASCII is used because it has several useful properties:

- survives GitHub Markdown;
- remains legible in plain text;
- creates visual identity without image dependencies;
- can describe architecture;
- can animate cheaply in a `<pre>` element;
- can be copied into docs, terminals, release notes, and social posts.

The reference home page cycles among multiple system diagrams rather than rendering random noise.

## 5. Accessibility and performance requirements

Portfolio OS must not require animation to understand the site.

Reference requirements:

- `prefers-reduced-motion` disables starfield and ASCII cycling;
- primary navigation uses semantic anchors;
- command palette is supplemental;
- contrast remains readable without glow effects;
- Canvas is `aria-hidden`;
- pages retain skip links;
- the site remains static-host compatible;
- no animation waits on a network API;
- mobile layouts collapse the terminal and repository graph safely.

## 6. Truthfulness rules

A portfolio may be aspirational. It may not silently convert aspiration into a shipped claim.

Recommended language:

- **implemented** for code that exists;
- **publication target** for a repository prepared to receive a build/manual;
- **lineage** for historical/alternate versions;
- **future production lane** for an intended extension;
- **research instrument** for tools built to test a claim;
- **visual system** for cinematic/realtime work that is not a released conventional film.

## 7. File map

```text
/
├── README.md                 boot console / source navigation
├── index.html                animated Portfolio OS home
├── projects.html             technical project explorer
├── works.html                books / simulations / visual / tools
├── universe.html             visual public-repository constellation
├── REPOSITORY_UNIVERSE.md    complete Markdown repository index
├── library.html              engineering and teaching library
├── resume.html               recruiter-safe résumé
├── EVIDENCE.md               claim / evidence discipline
├── PROVENANCE.md             lineage notes
├── PORTFOLIO_OS_SPEC.md      this design specification
├── styles.css                base design system
├── os.css                    Portfolio OS visual layer
├── app.js                    navigation / filters / palette / theme
└── os.js                     Canvas field / ASCII / shortcuts / parallax
```

## 8. Reuse pattern

To adapt Portfolio OS for another engineer or studio:

1. Keep the five-layer architecture.
2. Replace the identity and repositories.
3. Replace the evidence vocabulary only if the new vocabulary is at least as explicit.
4. Keep normal anchors beneath every interactive control.
5. Preserve reduced-motion behavior.
6. Maintain one recruiter-safe page even if the rest of the site becomes experimental.
7. Never expose private repositories merely to make the graph look larger.

## 9. Why this pattern exists

Large personal engineering programs are hard to represent with a conventional portfolio because they mix:

- production code;
- experiments;
- failed tests;
- papers;
- tools;
- manuals;
- creative systems;
- historical versions;
- and future directions.

Flattening all of that into six cards destroys lineage. Dumping every repository into one list destroys comprehension.

Portfolio OS uses **progressive disclosure**:

```text
identity → strongest work → chosen mode → repository graph → source → evidence
```

That is the design.

---

**Reference motto:**

> BUILD STRANGE // MEASURE HARD // LEAVE A MAP
