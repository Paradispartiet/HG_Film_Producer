# FilmWork app visual system — October 2026

## Goal

Make the entire FilmWork suite behave like a coherent mobile-first application,
not six unrelated densely typeset web pages. No gameplay, data, content, or save
migration is part of this design-only change.

## Shared app shell

- One FilmWork header with the current section and an always-available language
  picker; the legacy per-section website headers are visually removed.
- Five direct destinations: Home, Producer, Director, School, Atlas.
- History and Research Control stay accessible under **More**.
- Fixed bottom navigation on phones (through 820px), with safe-area clearance
  and at least 48px-high touch targets; desktop keeps a compact horizontal nav.
- The Producer's separate active gameplay screen retains its own navigation
  but receives the same readable typographic baseline and touch sizes.

## Reading hierarchy

- 16px body baseline, at least 15px for readable copy, 13px for secondary
  captions, 14px for commands, and at least 48px input targets.
- Remove oversized marketing-style hero banners, tiny uppercase data labels,
  superfluous card indices, and duplicate footers.
- Replace oversized launch tiles with scannable app destinations.
- Give the active action visual priority; preserve focus outlines and
  `prefers-reduced-motion`.

## Scope and verification

Shared shell mounts in `LandingScreen`; components and their game logic are
unchanged. `filmWorkApp.css` loads last as an intentional override while the
legacy styles are gradually consolidated. The browser regression checks
navigation on 320px screens, language continuity, accessibility-sized tap
targets, and History reachability in all four languages. Other screen-reader
and manual visual reviews remain separate tasks.
