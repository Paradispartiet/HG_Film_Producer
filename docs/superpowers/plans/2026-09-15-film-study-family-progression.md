# Film Study Family Progression Implementation Plan

> **For Paradispartiet:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Introduce one explicit-only canonical Film Study family-progression relation with an empty production edge set, while keeping formatter, resolver, donor, navigation, scenario, profile and UI behavior unchanged.

**Architecture:** Keep the mechanism in `src/core`. First promote the already-established localized Film Study history feedback families into one explicit core identity registry; the locked baseline has canonical family concepts and labels but no shared `FilmStudyFamilyId` type. Then build a pure adjacency relation over those IDs. Canonical production edges start empty. Tests may construct fixture relations to prove edge semantics, duplicate normalization and multi-successor support, but fixtures must never become canonical data.

**Tech Stack:** TypeScript (strict NodeNext core build), Node.js built-in test runner, existing `npm run build`, `npm test`, `npm run typecheck`, `npm run build:ui`, and `npm run verify:v0.1` scripts.

---

## Locked evidence and scope

Implementation starts from the approved design branch whose merge-base is exact production baseline:

```text
a5e962d634cec396d59a3145497a4641c5c4ec24
```

The approved design is:

```text
docs/superpowers/specs/2026-09-15-film-study-family-progression-design.md
```

Read-first inspection of that baseline establishes:

- `src/core/filmStudyHistoryFeedbackCopy.ts` contains ten currently localized Film Study history feedback family contracts, ending with `EUROPEAN_RELIGIOUS_MORAL_HISTORY_FEEDBACK`.
- `src/core/filmStudyHistoryFeedbackCopy.test.ts` already gives those ten contracts stable human family labels, but the labels are local test literals rather than one shared family identity source.
- `src/ui/data/scenarioFilmStudyMap.ts` exposes scenario/profile structures, not a family-ID type.
- `src/ui/data/scenarioFilmStudyEuropeanReligiousMoralCatalog.ts` indexes the three Religious/Moral profiles by `scenarioId`; it contains no successor/progression semantics.
- `src/ui/components/ScenarioFilmStudyPanel.tsx` composes many resolver families through runtime precedence. That order is classification/fallback structure and must not be imported into progression.
- root `tsconfig.json` excludes `src/ui`, so a core implementation can remain mechanically independent from UI/runtime resolver code.
- `npm test` builds core TypeScript and runs `node --test dist/core/*.test.js`.

### Important implementation interpretation

The design says progression must reuse canonical family identities rather than create a competing taxonomy. The exact baseline does **not** currently expose a shared `FilmStudyFamilyId` declaration. Therefore Phase 1 must first make the already-established feedback-family identities explicit in one core registry. This is a normalization of existing family names, not a new progression ordering and not a second resolver taxonomy.

Do **not** enumerate every `ScenarioFilmStudyPanel` resolver as a progression family. The first identity registry covers the ten already-established localized history-feedback families only. A future family joins this registry only in the same independently justified change that establishes it as a canonical feedback family.

Canonical IDs for the existing ten families should be technical, stable, non-display strings:

```text
silent_foundations
silent_studio_systems
late_silent_early_sound
production_systems_1930s
noir_realism_1940s
asian_postwar_1950s
postwar_european_modernism
czechoslovak_new_wave
european_political_feminist_modernism
european_religious_moral_modernism
```

Their labels remain the already-established labels in `filmStudyHistoryFeedbackCopy.test.ts`. Array/object declaration order is never progression semantics.

## Guardrails

Phase 1 may change only these implementation files in addition to the approved design docs:

```text
src/core/filmStudyHistoryFamily.ts
src/core/filmStudyHistoryFamily.test.ts
src/core/filmStudyHistoryFeedbackCopy.test.ts
src/core/filmStudyFamilyProgression.ts
src/core/filmStudyFamilyProgression.test.ts
```

Do not change:

```text
src/core/filmStudyHistoryFeedbackCopy.ts
src/ui/components/ScenarioFilmStudyPanel.tsx
src/ui/data/scenarioFilmStudyMap.ts
src/ui/data/scenarioFilmStudyEuropeanReligiousMoralCatalog.ts
src/ui/data/scenarioFilmStudyEuropeanPoliticalFeministModernismBatch.ts
src/ui/data/scenarioFilmStudyNewHollywoodBlockbusterBatch.ts
```

Do not add a canonical edge. In particular, do not add any variant of:

```text
european_religious_moral_modernism -> X
```

---

## Task 1: Materialize the existing feedback-family identity source

**Files:**

- Create: `src/core/filmStudyHistoryFamily.test.ts`
- Create: `src/core/filmStudyHistoryFamily.ts`
- Modify: `src/core/filmStudyHistoryFeedbackCopy.test.ts`

### Step 1: Write the failing identity contract test

Create `src/core/filmStudyHistoryFamily.test.ts` and import from the not-yet-existing `./filmStudyHistoryFamily.js` module.

The test must establish all ten current IDs and exact established labels. Prefer set/key assertions rather than treating object order as meaningful.

Representative shape:

```ts
import assert from "node:assert/strict";
import test from "node:test";

import {
  FILM_STUDY_HISTORY_FAMILIES,
  isFilmStudyFamilyId,
  type FilmStudyFamilyId,
} from "./filmStudyHistoryFamily.js";

const EXPECTED_IDS = [
  "silent_foundations",
  "silent_studio_systems",
  "late_silent_early_sound",
  "production_systems_1930s",
  "noir_realism_1940s",
  "asian_postwar_1950s",
  "postwar_european_modernism",
  "czechoslovak_new_wave",
  "european_political_feminist_modernism",
  "european_religious_moral_modernism",
] as const satisfies readonly FilmStudyFamilyId[];

test("Film Study history family registry contains exactly the established localized families", () => {
  assert.deepEqual(
    Object.keys(FILM_STUDY_HISTORY_FAMILIES).sort(),
    [...EXPECTED_IDS].sort(),
  );
});

test("Religious/Moral has a stable technical identity and established label", () => {
  assert.deepEqual(
    FILM_STUDY_HISTORY_FAMILIES.european_religious_moral_modernism,
    {
      id: "european_religious_moral_modernism",
      label: "European Religious / Moral Modernism",
    },
  );
});

test("family ID validation accepts registry IDs and rejects unrelated strings", () => {
  assert.equal(isFilmStudyFamilyId("european_religious_moral_modernism"), true);
  assert.equal(isFilmStudyFamilyId("scenario_viridiana_1961"), false);
});
```

### Step 2: Run the red test

```bash
npm run build && node --test dist/core/filmStudyHistoryFamily.test.js
```

Expected: **FAIL** because `filmStudyHistoryFamily` does not yet exist. Confirm the failure is specifically the missing module/contract, not an unrelated compile failure.

### Step 3: Implement the minimal identity registry

Create `src/core/filmStudyHistoryFamily.ts` with one object whose keys are the technical IDs and whose values carry the same ID plus existing display label.

Representative implementation:

```ts
export const FILM_STUDY_HISTORY_FAMILIES = {
  silent_foundations: {
    id: "silent_foundations",
    label: "Silent Foundations",
  },
  silent_studio_systems: {
    id: "silent_studio_systems",
    label: "Silent Studio Systems",
  },
  late_silent_early_sound: {
    id: "late_silent_early_sound",
    label: "Late Silent / Early Sound",
  },
  production_systems_1930s: {
    id: "production_systems_1930s",
    label: "1930s Production Systems",
  },
  noir_realism_1940s: {
    id: "noir_realism_1940s",
    label: "1940s Noir / Realism",
  },
  asian_postwar_1950s: {
    id: "asian_postwar_1950s",
    label: "1950s Asian Postwar",
  },
  postwar_european_modernism: {
    id: "postwar_european_modernism",
    label: "Postwar European Modernism",
  },
  czechoslovak_new_wave: {
    id: "czechoslovak_new_wave",
    label: "Czechoslovak New Wave",
  },
  european_political_feminist_modernism: {
    id: "european_political_feminist_modernism",
    label: "European Political / Feminist Modernism",
  },
  european_religious_moral_modernism: {
    id: "european_religious_moral_modernism",
    label: "European Religious / Moral Modernism",
  },
} as const;

export type FilmStudyFamilyId = keyof typeof FILM_STUDY_HISTORY_FAMILIES;

export function isFilmStudyFamilyId(value: string): value is FilmStudyFamilyId {
  return Object.prototype.hasOwnProperty.call(FILM_STUDY_HISTORY_FAMILIES, value);
}
```

Do not add `previous`, `next`, rank, chapter number, sequence number or any array whose position could be interpreted as succession.

### Step 4: Bind the existing feedback-contract test labels to the registry

Modify only the label literals in `src/core/filmStudyHistoryFeedbackCopy.test.ts` so `FEEDBACK_CONTRACTS` reads its labels from `FILM_STUDY_HISTORY_FAMILIES`.

Example:

```ts
import { FILM_STUDY_HISTORY_FAMILIES } from "./filmStudyHistoryFamily.js";

const FEEDBACK_CONTRACTS = [
  [FILM_STUDY_HISTORY_FAMILIES.silent_foundations.label, SILENT_FOUNDATIONS_HISTORY_FEEDBACK],
  // ...same ten existing contract objects...
  [
    FILM_STUDY_HISTORY_FAMILIES.european_religious_moral_modernism.label,
    EUROPEAN_RELIGIOUS_MORAL_HISTORY_FEEDBACK,
  ],
] as const;
```

Do not change any canonical/en/nb/fr/pt feedback string and do not change `filmStudyHistoryFeedbackCopy.ts`.

### Step 5: Run focused green verification

```bash
npm run build
node --test \
  dist/core/filmStudyHistoryFamily.test.js \
  dist/core/filmStudyHistoryFeedbackCopy.test.js
```

Expected: both focused test files pass.

### Step 6: Commit

```bash
git add \
  src/core/filmStudyHistoryFamily.ts \
  src/core/filmStudyHistoryFamily.test.ts \
  src/core/filmStudyHistoryFeedbackCopy.test.ts
git commit -m "refactor: define Film Study history family identities"
```

---

## Task 2: Add the progression contract test, then the minimal relation

**Files:**

- Create: `src/core/filmStudyFamilyProgression.test.ts`
- Create: `src/core/filmStudyFamilyProgression.ts`

### Step 1: Write the failing progression tests first

The test module must use the identity source from Task 1 and import a not-yet-existing progression module.

Cover these semantics:

1. one explicit fixture edge is returned;
2. a family with no outgoing edge returns `[]`;
3. multiple explicit outgoing edges are supported;
4. duplicate identical edges normalize to one successor;
5. input declaration order cannot change the returned successor set;
6. returned results cannot mutate internal canonical state;
7. the **production** edge set is exactly empty;
8. production lookup for `european_religious_moral_modernism` is `[]`.

Representative test shape:

```ts
import assert from "node:assert/strict";
import test from "node:test";

import { FILM_STUDY_HISTORY_FAMILIES } from "./filmStudyHistoryFamily.js";
import {
  FILM_STUDY_FAMILY_PROGRESSION_EDGES,
  createFilmStudyFamilyProgression,
  successorsOf,
} from "./filmStudyFamilyProgression.js";

const SILENT = FILM_STUDY_HISTORY_FAMILIES.silent_foundations.id;
const STUDIO = FILM_STUDY_HISTORY_FAMILIES.silent_studio_systems.id;
const SOUND = FILM_STUDY_HISTORY_FAMILIES.late_silent_early_sound.id;
const RELIGIOUS = FILM_STUDY_HISTORY_FAMILIES.european_religious_moral_modernism.id;

test("explicit fixture edges are the only source of successors", () => {
  const progression = createFilmStudyFamilyProgression([
    { from: SILENT, to: STUDIO },
  ]);
  assert.deepEqual(progression.successorsOf(SILENT), [STUDIO]);
  assert.deepEqual(progression.successorsOf(STUDIO), []);
});

test("fixture relation supports multiple outgoing edges without semantic ordering", () => {
  const progression = createFilmStudyFamilyProgression([
    { from: SILENT, to: SOUND },
    { from: SILENT, to: STUDIO },
    { from: SILENT, to: STUDIO },
  ]);
  assert.deepEqual(progression.successorsOf(SILENT), [SOUND, STUDIO].sort());
});

test("canonical production progression starts empty and Religious/Moral has no successor", () => {
  assert.deepEqual(FILM_STUDY_FAMILY_PROGRESSION_EDGES, []);
  assert.deepEqual(successorsOf(RELIGIOUS), []);
});
```

The exact assertion for multiple successors must use the implementation's documented **technical normalization order** (lexical ID order) only to make output deterministic. The sort order is not pedagogical meaning.

### Step 2: Run the red test

```bash
npm run build && node --test dist/core/filmStudyFamilyProgression.test.js
```

Expected: **FAIL** because the progression module does not yet exist.

### Step 3: Implement the minimal pure relation

Create `src/core/filmStudyFamilyProgression.ts`.

Required public surface:

```ts
import type { FilmStudyFamilyId } from "./filmStudyHistoryFamily.js";

export type FilmStudyFamilyProgressionEdge = Readonly<{
  from: FilmStudyFamilyId;
  to: FilmStudyFamilyId;
}>;

export type FilmStudyFamilyProgression = Readonly<{
  successorsOf(familyId: FilmStudyFamilyId): readonly FilmStudyFamilyId[];
}>;

export function createFilmStudyFamilyProgression(
  edges: readonly FilmStudyFamilyProgressionEdge[],
): FilmStudyFamilyProgression;

export const FILM_STUDY_FAMILY_PROGRESSION_EDGES:
  readonly FilmStudyFamilyProgressionEdge[] = [];

export function successorsOf(
  familyId: FilmStudyFamilyId,
): readonly FilmStudyFamilyId[];
```

Implementation rules:

- build adjacency exclusively from `edges`;
- deduplicate identical `{from,to}` edges;
- normalize returned successor IDs lexically for deterministic technical output;
- never infer edges from family registry ordering;
- return a new/frozen readonly result so a caller cannot mutate stored state;
- no graph traversal, ranking, cycle semantics, pathfinding, `previous`, or singular `next` API;
- canonical production relation is constructed from the empty exported edge array.

Representative core:

```ts
export function createFilmStudyFamilyProgression(
  edges: readonly FilmStudyFamilyProgressionEdge[],
): FilmStudyFamilyProgression {
  const byFrom = new Map<FilmStudyFamilyId, Set<FilmStudyFamilyId>>();

  for (const edge of edges) {
    const targets = byFrom.get(edge.from) ?? new Set<FilmStudyFamilyId>();
    targets.add(edge.to);
    byFrom.set(edge.from, targets);
  }

  return Object.freeze({
    successorsOf(familyId: FilmStudyFamilyId): readonly FilmStudyFamilyId[] {
      return Object.freeze([...(byFrom.get(familyId) ?? [])].sort());
    },
  });
}

export const FILM_STUDY_FAMILY_PROGRESSION_EDGES = Object.freeze(
  [] as FilmStudyFamilyProgressionEdge[],
);

const canonicalProgression = createFilmStudyFamilyProgression(
  FILM_STUDY_FAMILY_PROGRESSION_EDGES,
);

export function successorsOf(
  familyId: FilmStudyFamilyId,
): readonly FilmStudyFamilyId[] {
  return canonicalProgression.successorsOf(familyId);
}
```

Keep implementation minimal; adjust TypeScript syntax only as required by strict settings.

### Step 4: Run focused green verification

```bash
npm run build && node --test dist/core/filmStudyFamilyProgression.test.js
```

Expected: progression contract passes.

### Step 5: Re-run the existing formatter contract beside it

```bash
node --test \
  dist/core/filmStudyHistoryFamily.test.js \
  dist/core/filmStudyFamilyProgression.test.js \
  dist/core/filmStudyHistoryFeedbackCopy.test.js
```

Expected: all focused tests pass; the formatter contract remains byte-for-byte unchanged in its runtime source.

### Step 6: Commit

```bash
git add \
  src/core/filmStudyFamilyProgression.ts \
  src/core/filmStudyFamilyProgression.test.ts
git commit -m "feat: add canonical Film Study family progression"
```

---

## Task 3: Prove Phase 1 is consumer-neutral

**Files:** no new files expected.

### Step 1: Audit changed paths against the exact baseline

```bash
git diff --name-only a5e962d634cec396d59a3145497a4641c5c4ec24...HEAD
```

Expected implementation-scope paths, in addition to the approved spec/plan docs:

```text
src/core/filmStudyHistoryFamily.ts
src/core/filmStudyHistoryFamily.test.ts
src/core/filmStudyHistoryFeedbackCopy.test.ts
src/core/filmStudyFamilyProgression.ts
src/core/filmStudyFamilyProgression.test.ts
```

Fail closed if any `src/ui/**`, scenario/profile/catalog data, `filmStudyHistoryFeedbackCopy.ts`, navigation, donor or resolver file changed.

### Step 2: Prove no runtime consumer imports the progression mechanism yet

```bash
git grep -n "filmStudyFamilyProgression" -- src \
  ':!src/core/filmStudyFamilyProgression.ts' \
  ':!src/core/filmStudyFamilyProgression.test.ts'
```

Expected: no matches.

### Step 3: Prove the canonical edge set contains no edge

Use both the unit contract and source diff. Do not accept a placeholder, TODO edge, commented candidate, or `Religious/Moral → X` record as harmless scaffolding.

```bash
npm run build && node --test dist/core/filmStudyFamilyProgression.test.js
```

Expected: production edge-set test passes with exact empty state.

---

## Task 4: Full repository verification before PR

### Step 1: Typecheck both core and UI graphs

```bash
npm run typecheck
```

Expected: exit 0.

### Step 2: Run the complete core test suite

```bash
npm test
```

Expected: exit 0, zero failing core tests.

### Step 3: Build the UI

```bash
npm run build:ui
```

Expected: exit 0.

### Step 4: Run the repository's full v0.1 verification chain

```bash
npm run verify:v0.1
```

Expected: exit 0 across preflight, production cases, Film History Chapters 1–19, typecheck, unit tests, representation audit, festival/award audits, and UI build.

Do not claim completion from targeted tests alone.

### Step 5: Final diff audit

```bash
git status --short
git diff --stat a5e962d634cec396d59a3145497a4641c5c4ec24...HEAD
git diff --name-only a5e962d634cec396d59a3145497a4641c5c4ec24...HEAD
```

Expected:

- working tree clean;
- only approved docs plus the five core files listed above;
- no generated `dist/` content committed;
- no UI/runtime resolver changes;
- no canonical progression edge.

---

## Task 5: PR gate

Create the implementation branch from the approved design/plan head, not from a moving default branch:

```bash
git switch design/film-study-family-progression-20260915
git pull --ff-only
git switch -c agent/film-study-family-progression-20260915
```

Before opening the PR, verify the merge-base remains the locked production baseline through the design-doc commits:

```bash
git merge-base a5e962d634cec396d59a3145497a4641c5c4ec24 HEAD
```

The implementation PR description must state explicitly:

- Phase 1 mechanism only;
- canonical production edge count = `0`;
- Religious/Moral successor = none;
- no formatter behavior change;
- no resolver/navigation/profile/donor/scenario/UI changes;
- progression output ordering is technical lexical normalization, not semantic progression;
- future edge additions require independent evidence and a separate change.

Do not merge until exact-head `verify:v0.1`/required CI is green. After merge, verify the post-merge main run before treating the mechanism as deployed.

## Acceptance checklist

- [ ] One explicit core `FilmStudyFamilyId` source exists for the ten established localized feedback families.
- [ ] Existing formatter test labels consume that source; feedback runtime strings remain unchanged.
- [ ] One pure progression API exists in `src/core`.
- [ ] Production canonical edge set is exactly empty.
- [ ] `successorsOf(european_religious_moral_modernism)` returns `[]`.
- [ ] Fixture tests prove explicit edges, zero edges, multiple successors, duplicate normalization and order independence.
- [ ] No progression edge is inferred from resolver, import, declaration, donor, profile, navigation or formatter ordering.
- [ ] No UI/runtime consumer imports the progression API in Phase 1.
- [ ] `npm run typecheck` passes.
- [ ] `npm test` passes.
- [ ] `npm run build:ui` passes.
- [ ] `npm run verify:v0.1` passes on exact implementation head.
- [ ] Final diff contains only approved docs plus the five scoped core files.
- [ ] Formatter write-port remains closed for `Religious/Moral → X`.