# CLAUDE.md

Guidance for AI assistants (and humans) working in the **HG Film Producer** repository.

## What this project is

HG Film Producer is a **film-studio simulator** built as a professional, modular
TypeScript codebase. It combines management-sim depth (Football Manager–style
career, economy, staff), production simulation (The Movies–style studio, shoots,
stars), a screenwriting model, a film-history knowledge layer, and a connection
to the place-based History Go universe.

The project's guiding rule (see `README.md` and `README/IDE_BIBLE.md`): **full
ambition, modular structure, one game engine at a time.** Do not reduce it to a
small film quiz. Build breadth-first with clean, small, pure engine functions.

Much of the vision/design documentation is written in **Norwegian**
(`README/`, parts of `README.md`, some `docs/`). Code, identifiers, and inline
code comments are in **English**. Preserve that split — write code and code
comments in English; match the surrounding language when editing prose docs.

## Repository layout

```
src/
  index.ts            Node demo: one deterministic end-to-end studio run, logged to stdout
  domain/             Pure type definitions (interfaces, unions, branded IDs). No logic.
  core/               Pure engine functions (one function per file) + *.test.ts smoke tests
  data/filmData.ts    Loads data/film/*.json from disk into typed FilmData
  ui/                 Vite + React 19 app (the player-facing dashboard)
    App.tsx           Root component, view/mode routing
    main.tsx          React entry (mounts #root)
    components/       ~60 presentational panels (*.tsx)
    demo/             Builders that assemble deterministic runs from the core engines
    data/             UI-side scenario data + a few colocated *.test.ts files
    state/            careerRunState (localStorage-backed run persistence)
    types.ts          UI-only types (AppMode, form errors, etc.)
    styles.css        All styling (single stylesheet)
data/film/*.json      Seed data for the film world (~29 files: roles, actors, genres,
                      mentors, locations, production choices, release strategies, …)
data/film/scenarios/  Production Case scenario seeds + schema + IMDb import source
docs/                 Game direction, QA status, MVP checkpoints, manual playtest scripts
README/               Foundational design docs (Norwegian): IDE_BIBLE, SYSTEM_MAP,
                      DATA_MODEL, BUILD_ORDER
scripts/              preflight-v0.1.mjs, qa-manual.mjs (no-dependency Node scripts)
tools/importers/      import_imdb_list_to_scenarios.mjs
index.html            Vite HTML entry (dark theme, #root mount)
.github/workflows/    deploy.yml — builds and deploys UI to GitHub Pages on push to main
```

There are two distinct TypeScript surfaces with **separate tsconfigs**:

- **Engine/Node** (`tsconfig.json`): `src/**/*.ts` **excluding `src/ui`**.
  Module `NodeNext`, emits to `dist/`. This is what `build`, `test`, and
  `start` use.
- **UI** (`tsconfig.app.json`): `src/ui/**/*.ts(x)`. Module `ESNext`,
  `moduleResolution: Bundler`, `noEmit` (Vite bundles it).

## Architecture and conventions

The codebase is built on a **pure-functional core**. Follow these patterns:

- **`src/domain` = types only.** Interfaces, union types, and branded IDs. No
  runtime logic. All fields are `readonly`; collections are `readonly T[]`.
- **`src/core` = one pure function per file.** File name matches the exported
  function (e.g. `createStudio.ts` exports `createStudio`). Functions take state
  in and return new state — **never mutate inputs**. State is threaded
  immutably (see `src/index.ts` for the canonical full loop reassigning
  `careerState`, `project`, `postPlan`, etc.).
- **Branded IDs** (`src/domain/ids.ts`): IDs are nominal types
  (`Brand<string, "StudioId">`) with `asStudioId(...)` constructors. Use the
  `as*` helpers to construct IDs rather than passing raw strings; this keeps ID
  kinds from being interchangeable.
- **Strict TypeScript everywhere.** Both tsconfigs enable `strict`,
  `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`,
  `noImplicitOverride`, `forceConsistentCasingInFileNames`. Expect to handle
  `undefined` from array indexing and to be exact about optional properties.
- **ESM with explicit `.js` import specifiers.** Engine code (compiled with
  NodeNext) imports sibling modules with a `.js` extension even though the
  source is `.ts` (e.g. `import { createStudio } from "./createStudio.js"`).
  Keep this — omitting `.js` breaks the Node build. UI code (Bundler
  resolution) imports **without** extensions.
- **Data loading** (`src/data/filmData.ts`): reads `data/film/*.json` at call
  time via `loadFilmData()` and trusts the file shape (validation is a
  deliberately deferred later pass). The `FilmData` interface is the source of
  truth for which JSON files exist and their types. When adding a seed file,
  add both the JSON and its field in `FilmData` + `loadFilmData()`.
- **UI is presentational.** `src/ui/components/*` are pure panels driven by
  props. Deterministic runs are assembled in `src/ui/demo/*` from the core
  engines; `App.tsx` wires views/modes together. Run persistence lives in
  `src/ui/state/careerRunState.ts` (localStorage).

### App modes (what the player sees)

`App.tsx` routes between a few surfaces. Understanding these three is key:

- **Production Cases** (`view === "scenarios"`, `FilmScenarioLibrary`) — the
  **stable, primary playable MVP**. Choose a case → make choices → get a
  scored report → improve. Progress/best-results logic lives in
  `src/core/productionCaseProgress.ts`. This is the recommended first play path.
- **Studio Career** (`mode === "setup"`, career dashboard) — an
  **experimental** full idea→career loop. Not the main MVP yet. Flow logic in
  `src/core/studioCareerFlow.ts`.
- **Demo inspection / Dev dashboard** (`mode === "demo"`) — read-only
  inspection of one deterministic engine run.

## Development workflow

Requires **Node >= 20**. Dependencies: React 19 + Vite (runtime is
intentionally tiny; see the forbidden-dependency check below).

```bash
npm install          # install deps

npm run dev          # Vite dev server (the React UI)
npm run build:ui     # typecheck UI + production Vite build → dist/ (Pages artifact)
npm run preview      # preview the built UI

npm run build        # tsc → compiles engine (src, minus ui) to dist/
npm start            # node dist/index.js — runs the full engine demo (build first)

npm run typecheck    # tsc --noEmit (engine) AND tsc -p tsconfig.app.json (UI)
npm test             # build engine, then run node --test on dist/core/*.test.js
```

### Verification gate — run before finishing engine/docs work

```bash
npm run verify:v0.1
```

This composes: `preflight:v0.1` (source/doc structural checks) →
`typecheck` → `test` → `build:ui`. **Run it after non-trivial changes** to the
engine, data, docs, or UI build. It is the closest thing to CI for local work.

The `preflight-v0.1.mjs` script enforces project invariants and **will fail the
gate** if violated. Notably it:

- **Forbids adding these dependencies:** `playwright`, `puppeteer`, `jsdom`,
  `@testing-library/*`. Keep the toolchain dependency-light; do not add
  browser/DOM test frameworks.
- Requires the package scripts `typecheck`, `test`, `build:ui`, `verify:v0.1`
  to exist, and that `verify:v0.1` invokes the preflight.
- Requires specific docs and smoke tests to exist and to contain specific
  marker strings (e.g. `src/core/productionCaseFlowSmoke.test.ts` must contain
  `"report and best result are gated"`, `getNextProductionCaseId`, etc.). If
  you rename tests or edit those docs, keep the referenced markers intact or
  update `preflight-v0.1.mjs` to match.

`verify:v0.1` **does not** close the manual browser QA gate. Human,
browser-driven playthroughs are tracked separately in
`docs/PLAYABLE_MODES_QA_STATUS.md` and the manual playtest scripts. The
convenience launcher for that pass:

```bash
npm run qa:manual            # start dev server + print the browser QA checklist
npm run qa:manual:preview    # same, against the production preview build
```

### Testing conventions

- Tests are **Node's built-in test runner** (`node:test` + `node:assert/strict`),
  named `*.test.ts`, colocated next to the code they cover.
- Engine tests run **compiled** (`npm test` builds first, then runs
  `dist/core/*.test.js`). Write them to import compiled siblings with `.js`
  specifiers, like the rest of the engine.
- They are **no-dependency smoke/flow tests** by design — assert engine and
  gating invariants, not DOM behavior. Do not introduce a DOM/UI test framework
  (the preflight forbids it).

## Build & deployment

- The UI deploys to **GitHub Pages** via `.github/workflows/deploy.yml` on push
  to `main` (or manual dispatch). It runs `npm run build:ui` and publishes
  `dist/`.
- `vite.config.ts` sets `base: "/HG_Film_Producer/"`. The deploy workflow
  **verifies** the built `dist/index.html` no longer references the dev
  entrypoint (`/src/ui/main.tsx`) and **does** reference the prefixed asset path
  (`/HG_Film_Producer/assets/`). If you change the base path, repo name, or
  entry wiring, update those grep checks in the workflow accordingly.

## Key documentation

- `README.md` — project overview, current status, verification commands.
- `README/IDE_BIBLE.md` — vision and philosophy.
- `README/SYSTEM_MAP.md` — the game's systems.
- `README/DATA_MODEL.md` — first data model.
- `README/BUILD_ORDER.md` — the phased build plan (Fase 0–11) the engine follows.
- `docs/GAME_DIRECTION.md` + `docs/GAME_DIRECTION_ALIGNMENT_AUDIT.md` — direction.
- `docs/PLAYABLE_MODES_QA_STATUS.md` — single consolidated readiness/QA picture.
- `docs/PRODUCTION_CASES_MVP_CHECKPOINT.md`,
  `docs/STUDIO_CAREER_EXPERIMENTAL_STATUS.md` — per-mode status.
- `docs/*_MANUAL_PLAYTEST.md` — browser playtest scripts.

## Working guidelines for AI assistants

- **Match existing patterns.** New engine logic → a single pure function in its
  own `src/core/*.ts` file, immutable state in/out, branded IDs, `.js` imports.
  New types → `src/domain`. New UI → a presentational component in
  `src/ui/components`, data assembled in `src/ui/demo` or `src/ui/data`.
- **Keep the dependency footprint minimal.** Do not add libraries casually, and
  never add the preflight-forbidden ones.
- **Run `npm run verify:v0.1` before finishing** any engine, data, docs, or
  build change, and report the result honestly. If you touched only UI runtime,
  at minimum run `npm run typecheck` and `npm run build:ui`.
- **Preserve preflight markers.** If a rename or doc edit removes a string the
  preflight greps for, either keep the string or update the preflight in the
  same change.
- **Respect the two tsconfig surfaces** — don't import UI code from the engine
  or vice versa, and keep import-extension style correct per surface.
- Vision docs are Norwegian, code is English. Don't "translate" design docs
  unless asked.
```
