# Film Study Curriculum Authority Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a fail-closed Film Study curriculum authority for explicit learning outcomes and grounded family prerequisites, then make canonical family progression a mechanical projection of those prerequisites without admitting any production curriculum edge.

**Architecture:** Keep curriculum semantics in one new `src/core/filmStudyCurriculum.ts` module. A pure constructor validates raw outcome, family-curriculum, and prerequisite declarations into immutable canonical-shaped data; no prerequisite is inferred from overlap or order. `filmStudyFamilyProgression.ts` keeps its existing public adjacency API but derives its canonical edge constant from canonical curriculum prerequisites instead of owning independently authored progression data.

**Tech Stack:** TypeScript 5.5+, strict NodeNext core build, Node.js >=20 built-in test runner, existing `npm run build`, `npm test`, `npm run typecheck`, `npm run build:ui`, and `npm run verify:v0.1` scripts.

**Spec:** `docs/superpowers/specs/2026-09-16-film-study-curriculum-authority-design.md`

## Global Constraints

- Exact implementation baseline is `5c2da9ef5bdf5422497cda7e36bd9eeb4ecf89e2`; design/plan commits are documentation-only and must not be mistaken for curriculum evidence.
- Reuse `FilmStudyFamilyId` and `isFilmStudyFamilyId` from `src/core/filmStudyHistoryFamily.ts`; never introduce a second family taxonomy.
- Canonical production learning outcomes, family curricula, and prerequisites start empty unless a separate source-backed audit admits content.
- No `European Religious / Moral Modernism -> X` prerequisite or progression edge may be added in this implementation.
- No prerequisite may be inferred from chronology, resolver precedence, import/declaration order, source adjacency, profile lookup, donor selection, scenario navigation, formatter demand, feedback-copy proximity, or outcome overlap.
- Feedback copy may corroborate future curriculum evidence but is not itself sufficient curriculum authority.
- Invalid curriculum declarations fail closed; semantic defects are not silently repaired.
- Repeated IDs inside set-like `establishes` / `requiredOutcomeIds` fields may be normalized deterministically, but duplicate canonical prerequisite declarations for the same ordered family pair must fail.
- Do not add graph ranking, pathfinding, global ordering, chapter numbers, singular `next`, or cycle rejection.
- Existing resolver, scenario, profile, donor, navigation, feedback formatter, localization, and UI behavior must remain unchanged.
- No new runtime dependency is required.

---

## File structure

Create one focused curriculum module and its test:

```text
src/core/filmStudyCurriculum.ts
src/core/filmStudyCurriculum.test.ts
```

Modify only the existing progression mechanism/tests to consume the curriculum authority:

```text
src/core/filmStudyFamilyProgression.ts
src/core/filmStudyFamilyProgression.test.ts
```

Do not modify:

```text
src/core/filmStudyHistoryFamily.ts
src/core/filmStudyHistoryFeedbackCopy.ts
src/core/filmStudyHistoryFeedbackCopy.test.ts
src/ui/**
data/**
```

`filmStudyCurriculum.ts` owns declaration validation, immutable normalized curriculum data, and the empty canonical curriculum constants. `filmStudyFamilyProgression.ts` owns only adjacency mechanics plus mechanical projection from already-validated prerequisites.

---

### Task 1: Add immutable learning-outcome and family-curriculum authority

**Files:**
- Create: `src/core/filmStudyCurriculum.test.ts`
- Create: `src/core/filmStudyCurriculum.ts`

**Interfaces:**
- Consumes: `FilmStudyFamilyId` and `isFilmStudyFamilyId` from `./filmStudyHistoryFamily.js`.
- Produces:
  - `FilmStudyLearningOutcomeDeclaration`
  - `FilmStudyFamilyCurriculumDeclaration`
  - `FilmStudyCurriculumPrerequisiteDeclaration` (declared now; validated in Task 2)
  - `FilmStudyLearningOutcome`
  - `FilmStudyFamilyCurriculum`
  - `FilmStudyCurriculumPrerequisite`
  - `FilmStudyCurriculumInput`
  - `FilmStudyCurriculum`
  - `createFilmStudyCurriculum(input)`

The constructor accepts ordinary string IDs as declaration input so tests can create fixture outcomes without polluting production identity. Identity becomes canonical only by appearing in the validated outcome set returned by the constructor. This avoids inventing production outcome IDs merely to make a TypeScript union non-empty.

- [ ] **Step 1: Write the failing outcome/family contract tests**

Create `src/core/filmStudyCurriculum.test.ts` with the first tests importing a not-yet-existing module:

```ts
import assert from "node:assert/strict";
import test from "node:test";

import { FILM_STUDY_HISTORY_FAMILIES } from "./filmStudyHistoryFamily.js";
import { createFilmStudyCurriculum } from "./filmStudyCurriculum.js";

const SILENT = FILM_STUDY_HISTORY_FAMILIES.silent_foundations.id;
const STUDIO = FILM_STUDY_HISTORY_FAMILIES.silent_studio_systems.id;

const OUTCOME = {
  id: "understand_silent_production_system",
  statement: "Explain how a silent-film production system coordinates craft decisions.",
} as const;

test("curriculum validates outcome identity separately from display statement", () => {
  const curriculum = createFilmStudyCurriculum({
    outcomes: [OUTCOME],
    familyCurricula: [{ familyId: SILENT, establishes: [OUTCOME.id] }],
    prerequisites: [],
  });

  assert.deepEqual(curriculum.outcomes, [OUTCOME]);
  assert.deepEqual(curriculum.familyCurricula, [
    { familyId: SILENT, establishes: [OUTCOME.id] },
  ]);
});

test("a declared family curriculum may establish zero outcomes", () => {
  const curriculum = createFilmStudyCurriculum({
    outcomes: [],
    familyCurricula: [{ familyId: STUDIO, establishes: [] }],
    prerequisites: [],
  });

  assert.deepEqual(curriculum.familyCurricula, [
    { familyId: STUDIO, establishes: [] },
  ]);
});

test("set-like establishes values are normalized deterministically", () => {
  const other = {
    id: "distinguish_studio_department_logic",
    statement: "Distinguish how studio departments coordinate production work.",
  } as const;
  const curriculum = createFilmStudyCurriculum({
    outcomes: [OUTCOME, other],
    familyCurricula: [
      { familyId: SILENT, establishes: [other.id, OUTCOME.id, OUTCOME.id] },
    ],
    prerequisites: [],
  });

  assert.deepEqual(curriculum.familyCurricula[0]?.establishes, [
    other.id,
    OUTCOME.id,
  ].sort());
});

test("curriculum results are immutable snapshots", () => {
  const curriculum = createFilmStudyCurriculum({
    outcomes: [OUTCOME],
    familyCurricula: [{ familyId: SILENT, establishes: [OUTCOME.id] }],
    prerequisites: [],
  });

  assert.throws(() => {
    (curriculum.outcomes as unknown as Array<typeof OUTCOME>).push(OUTCOME);
  }, TypeError);
  assert.throws(() => {
    (curriculum.familyCurricula[0]?.establishes as string[]).push("x");
  }, TypeError);
});
```

- [ ] **Step 2: Run the focused test and confirm the intended red failure**

Run:

```bash
npm run build && node --test dist/core/filmStudyCurriculum.test.js
```

Expected: **FAIL** because `./filmStudyCurriculum.js` / its exports do not exist. Confirm the failure is the missing curriculum contract rather than an unrelated baseline failure.

- [ ] **Step 3: Implement the minimal declaration and normalized result types**

Create `src/core/filmStudyCurriculum.ts` with these public shapes:

```ts
import {
  isFilmStudyFamilyId,
  type FilmStudyFamilyId,
} from "./filmStudyHistoryFamily.js";

export type FilmStudyLearningOutcomeDeclaration = Readonly<{
  id: string;
  statement: string;
}>;

export type FilmStudyFamilyCurriculumDeclaration = Readonly<{
  familyId: FilmStudyFamilyId;
  establishes: readonly string[];
}>;

export type FilmStudyCurriculumPrerequisiteDeclaration = Readonly<{
  prerequisiteFamilyId: FilmStudyFamilyId;
  dependentFamilyId: FilmStudyFamilyId;
  requiredOutcomeIds: readonly string[];
  rationale: string;
}>;

export type FilmStudyLearningOutcome = Readonly<{
  id: string;
  statement: string;
}>;

export type FilmStudyFamilyCurriculum = Readonly<{
  familyId: FilmStudyFamilyId;
  establishes: readonly string[];
}>;

export type FilmStudyCurriculumPrerequisite = Readonly<{
  prerequisiteFamilyId: FilmStudyFamilyId;
  dependentFamilyId: FilmStudyFamilyId;
  requiredOutcomeIds: readonly string[];
  rationale: string;
}>;

export type FilmStudyCurriculumInput = Readonly<{
  outcomes: readonly FilmStudyLearningOutcomeDeclaration[];
  familyCurricula: readonly FilmStudyFamilyCurriculumDeclaration[];
  prerequisites: readonly FilmStudyCurriculumPrerequisiteDeclaration[];
}>;

export type FilmStudyCurriculum = Readonly<{
  outcomes: readonly FilmStudyLearningOutcome[];
  familyCurricula: readonly FilmStudyFamilyCurriculum[];
  prerequisites: readonly FilmStudyCurriculumPrerequisite[];
}>;
```

Use local helpers rather than exporting extra API:

```ts
function freezeStrings(values: readonly string[]): readonly string[] {
  return Object.freeze([...new Set(values)].sort());
}

function assertNonEmpty(value: string, field: string): void {
  if (value.trim().length === 0) {
    throw new Error(`${field} must be non-empty`);
  }
}
```

In `createFilmStudyCurriculum`, for Task 1:

1. validate each outcome `id` and `statement` as non-empty;
2. reject duplicate outcome IDs;
3. validate every family ID at runtime with `isFilmStudyFamilyId(String(...))` even though normal callers are statically typed;
4. reject duplicate family-curriculum declarations for the same family;
5. reject any `establishes` ID not present in the declared outcome set;
6. freeze every nested object/array and the top-level result;
7. temporarily require `prerequisites.length === 0` with a private assertion message such as `prerequisite validation not initialized` only until Task 2 replaces that branch in the immediately following commit. Do not export canonical constants yet.

Representative normalization:

```ts
const normalizedOutcomes = Object.freeze(
  input.outcomes.map((outcome) =>
    Object.freeze({ id: outcome.id, statement: outcome.statement }),
  ),
);

const normalizedFamilyCurricula = Object.freeze(
  input.familyCurricula.map((family) =>
    Object.freeze({
      familyId: family.familyId,
      establishes: freezeStrings(family.establishes),
    }),
  ),
);
```

Do not create an implicit family curriculum for undeclared families: **absent** means not yet audited, while `{ familyId, establishes: [] }` is an explicit audited declaration with zero outcomes.

- [ ] **Step 4: Add fail-closed family/outcome validation tests before making Task 1 green**

Append:

```ts
test("duplicate outcome identities fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [OUTCOME, { ...OUTCOME, statement: "Different text" }],
      familyCurricula: [],
      prerequisites: [],
    }),
    /duplicate learning outcome/i,
  );
});

test("unknown established outcome identities fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [],
      familyCurricula: [{ familyId: SILENT, establishes: [OUTCOME.id] }],
      prerequisites: [],
    }),
    /unknown learning outcome/i,
  );
});

test("duplicate family curriculum declarations fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [],
      familyCurricula: [
        { familyId: SILENT, establishes: [] },
        { familyId: SILENT, establishes: [] },
      ],
      prerequisites: [],
    }),
    /duplicate family curriculum/i,
  );
});

test("unknown family identities fail closed at runtime", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [],
      familyCurricula: [
        { familyId: "not_a_family" as typeof SILENT, establishes: [] },
      ],
      prerequisites: [],
    }),
    /unknown Film Study family/i,
  );
});
```

- [ ] **Step 5: Run focused green verification**

Run:

```bash
npm run build
node --test dist/core/filmStudyCurriculum.test.js
```

Expected: all Task-1 curriculum tests **PASS**.

- [ ] **Step 6: Commit the outcome/family authority**

```bash
git add src/core/filmStudyCurriculum.ts src/core/filmStudyCurriculum.test.ts
git commit -m "feat: add Film Study curriculum authority"
```

---

### Task 2: Validate explicit grounded prerequisites without inference

**Files:**
- Modify: `src/core/filmStudyCurriculum.test.ts`
- Modify: `src/core/filmStudyCurriculum.ts`

**Interfaces:**
- Consumes: Task-1 declaration/result types and `createFilmStudyCurriculum(input)`.
- Produces: fully validated `FilmStudyCurriculum.prerequisites` with one record per ordered family pair; no automatic dependency construction.

- [ ] **Step 1: Write the failing valid-prerequisite and no-inference tests**

Append:

```ts
const SOUND = FILM_STUDY_HISTORY_FAMILIES.late_silent_early_sound.id;

const TRANSITION_OUTCOME = {
  id: "analyze_production_transition",
  statement: "Analyze how a production-system transition changes film form and craft decisions.",
} as const;

test("an explicit prerequisite is accepted when its required outcome is established by the prerequisite family", () => {
  const curriculum = createFilmStudyCurriculum({
    outcomes: [TRANSITION_OUTCOME],
    familyCurricula: [
      { familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] },
      { familyId: SOUND, establishes: [] },
    ],
    prerequisites: [{
      prerequisiteFamilyId: STUDIO,
      dependentFamilyId: SOUND,
      requiredOutcomeIds: [TRANSITION_OUTCOME.id],
      rationale: "The dependent analysis assumes the learner can already reason about production-system transition.",
    }],
  });

  assert.deepEqual(curriculum.prerequisites, [{
    prerequisiteFamilyId: STUDIO,
    dependentFamilyId: SOUND,
    requiredOutcomeIds: [TRANSITION_OUTCOME.id],
    rationale: "The dependent analysis assumes the learner can already reason about production-system transition.",
  }]);
});

test("overlapping learning outcomes never synthesize a prerequisite", () => {
  const curriculum = createFilmStudyCurriculum({
    outcomes: [TRANSITION_OUTCOME],
    familyCurricula: [
      { familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] },
      { familyId: SOUND, establishes: [TRANSITION_OUTCOME.id] },
    ],
    prerequisites: [],
  });

  assert.deepEqual(curriculum.prerequisites, []);
});
```

- [ ] **Step 2: Run the focused test and verify the new prerequisite test fails**

Run:

```bash
npm run build && node --test dist/core/filmStudyCurriculum.test.js
```

Expected: **FAIL** because Task 1 still rejects any non-empty prerequisite input.

- [ ] **Step 3: Replace the temporary prerequisite guard with full fail-closed validation**

Inside `createFilmStudyCurriculum`:

1. build `outcomeIds = new Set(normalizedOutcomes.map(({ id }) => id))`;
2. build `establishesByFamily = new Map(normalizedFamilyCurricula.map(...))`;
3. track ordered pair keys `${prerequisiteFamilyId}->${dependentFamilyId}`;
4. validate both family IDs at runtime;
5. reject self-prerequisites;
6. normalize `requiredOutcomeIds` with `freezeStrings` and reject an empty normalized set;
7. reject unknown required outcome IDs;
8. reject a required outcome not established by the prerequisite family;
9. require non-empty `rationale.trim()` but do **not** attempt semantic natural-language scoring;
10. reject duplicate declarations for the same ordered family pair;
11. freeze each normalized prerequisite and the prerequisites array.

Representative core:

```ts
const prerequisitePairKeys = new Set<string>();
const normalizedPrerequisites = Object.freeze(
  input.prerequisites.map((prerequisite) => {
    const from = String(prerequisite.prerequisiteFamilyId);
    const to = String(prerequisite.dependentFamilyId);
    if (!isFilmStudyFamilyId(from) || !isFilmStudyFamilyId(to)) {
      throw new Error("Unknown Film Study family in curriculum prerequisite");
    }
    if (from === to) {
      throw new Error(`Self prerequisite is not allowed: ${from}`);
    }

    const pairKey = `${from}->${to}`;
    if (prerequisitePairKeys.has(pairKey)) {
      throw new Error(`Duplicate curriculum prerequisite: ${pairKey}`);
    }
    prerequisitePairKeys.add(pairKey);

    const requiredOutcomeIds = freezeStrings(prerequisite.requiredOutcomeIds);
    if (requiredOutcomeIds.length === 0) {
      throw new Error(`Curriculum prerequisite ${pairKey} requires at least one learning outcome`);
    }

    const established = establishesByFamily.get(prerequisite.prerequisiteFamilyId) ?? new Set<string>();
    for (const outcomeId of requiredOutcomeIds) {
      if (!outcomeIds.has(outcomeId)) {
        throw new Error(`Unknown learning outcome in curriculum prerequisite: ${outcomeId}`);
      }
      if (!established.has(outcomeId)) {
        throw new Error(`Prerequisite family ${from} does not establish required outcome ${outcomeId}`);
      }
    }

    assertNonEmpty(prerequisite.rationale, `Curriculum prerequisite ${pairKey} rationale`);
    return Object.freeze({
      prerequisiteFamilyId: prerequisite.prerequisiteFamilyId,
      dependentFamilyId: prerequisite.dependentFamilyId,
      requiredOutcomeIds,
      rationale: prerequisite.rationale,
    });
  }),
);
```

Do not validate cycles and do not inspect source ordering or family chronology.

- [ ] **Step 4: Add the complete failure-contract tests**

Append explicit tests:

```ts
test("self prerequisites fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [TRANSITION_OUTCOME],
      familyCurricula: [{ familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] }],
      prerequisites: [{
        prerequisiteFamilyId: STUDIO,
        dependentFamilyId: STUDIO,
        requiredOutcomeIds: [TRANSITION_OUTCOME.id],
        rationale: "fixture",
      }],
    }),
    /self prerequisite/i,
  );
});

test("empty required outcome sets fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [],
      familyCurricula: [{ familyId: STUDIO, establishes: [] }],
      prerequisites: [{
        prerequisiteFamilyId: STUDIO,
        dependentFamilyId: SOUND,
        requiredOutcomeIds: [],
        rationale: "fixture",
      }],
    }),
    /at least one learning outcome/i,
  );
});

test("unknown required outcomes fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [],
      familyCurricula: [{ familyId: STUDIO, establishes: [] }],
      prerequisites: [{
        prerequisiteFamilyId: STUDIO,
        dependentFamilyId: SOUND,
        requiredOutcomeIds: [TRANSITION_OUTCOME.id],
        rationale: "fixture",
      }],
    }),
    /unknown learning outcome/i,
  );
});

test("required outcomes not established by the prerequisite family fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [TRANSITION_OUTCOME],
      familyCurricula: [
        { familyId: STUDIO, establishes: [] },
        { familyId: SOUND, establishes: [TRANSITION_OUTCOME.id] },
      ],
      prerequisites: [{
        prerequisiteFamilyId: STUDIO,
        dependentFamilyId: SOUND,
        requiredOutcomeIds: [TRANSITION_OUTCOME.id],
        rationale: "fixture",
      }],
    }),
    /does not establish required outcome/i,
  );
});

test("duplicate ordered family-pair prerequisites fail closed", () => {
  const prerequisite = {
    prerequisiteFamilyId: STUDIO,
    dependentFamilyId: SOUND,
    requiredOutcomeIds: [TRANSITION_OUTCOME.id],
    rationale: "fixture",
  } as const;

  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [TRANSITION_OUTCOME],
      familyCurricula: [{ familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] }],
      prerequisites: [prerequisite, prerequisite],
    }),
    /duplicate curriculum prerequisite/i,
  );
});

test("blank prerequisite rationale fails closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [TRANSITION_OUTCOME],
      familyCurricula: [{ familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] }],
      prerequisites: [{
        prerequisiteFamilyId: STUDIO,
        dependentFamilyId: SOUND,
        requiredOutcomeIds: [TRANSITION_OUTCOME.id],
        rationale: "   ",
      }],
    }),
    /rationale must be non-empty/i,
  );
});
```

Also add a deterministic normalization test with duplicate `requiredOutcomeIds` and verify the returned array is unique and lexical. This proves repeated set members are normalized while duplicate semantic prerequisite records still fail.

- [ ] **Step 5: Run focused green verification**

```bash
npm run build
node --test dist/core/filmStudyCurriculum.test.js
```

Expected: all curriculum constructor/admission tests **PASS**.

- [ ] **Step 6: Commit prerequisite validation**

```bash
git add src/core/filmStudyCurriculum.ts src/core/filmStudyCurriculum.test.ts
git commit -m "feat: validate Film Study curriculum prerequisites"
```

---

### Task 3: Add empty canonical curriculum data without inventing content

**Files:**
- Modify: `src/core/filmStudyCurriculum.test.ts`
- Modify: `src/core/filmStudyCurriculum.ts`

**Interfaces:**
- Consumes: `createFilmStudyCurriculum` from Tasks 1–2.
- Produces:
  - `FILM_STUDY_LEARNING_OUTCOMES`
  - `FILM_STUDY_FAMILY_CURRICULA`
  - `FILM_STUDY_CURRICULUM_PREREQUISITES`
  - `FILM_STUDY_CURRICULUM`

- [ ] **Step 1: Write the failing canonical-empty-state test**

Extend imports and add:

```ts
import {
  FILM_STUDY_CURRICULUM,
  FILM_STUDY_CURRICULUM_PREREQUISITES,
  FILM_STUDY_FAMILY_CURRICULA,
  FILM_STUDY_LEARNING_OUTCOMES,
  createFilmStudyCurriculum,
} from "./filmStudyCurriculum.js";

const RELIGIOUS = FILM_STUDY_HISTORY_FAMILIES.european_religious_moral_modernism.id;

test("canonical curriculum starts empty until source-backed audit admits content", () => {
  assert.deepEqual(FILM_STUDY_LEARNING_OUTCOMES, []);
  assert.deepEqual(FILM_STUDY_FAMILY_CURRICULA, []);
  assert.deepEqual(FILM_STUDY_CURRICULUM_PREREQUISITES, []);
  assert.deepEqual(FILM_STUDY_CURRICULUM, {
    outcomes: [],
    familyCurricula: [],
    prerequisites: [],
  });
  assert.equal(
    FILM_STUDY_CURRICULUM_PREREQUISITES.some(
      ({ prerequisiteFamilyId }) => prerequisiteFamilyId === RELIGIOUS,
    ),
    false,
  );
});
```

- [ ] **Step 2: Run focused red verification**

```bash
npm run build && node --test dist/core/filmStudyCurriculum.test.js
```

Expected: **FAIL** because the canonical exports do not yet exist.

- [ ] **Step 3: Materialize only empty canonical data and validate it through the same constructor**

At the end of `filmStudyCurriculum.ts` add:

```ts
export const FILM_STUDY_LEARNING_OUTCOMES:
  readonly FilmStudyLearningOutcomeDeclaration[] = Object.freeze([]);

export const FILM_STUDY_FAMILY_CURRICULA:
  readonly FilmStudyFamilyCurriculumDeclaration[] = Object.freeze([]);

export const FILM_STUDY_CURRICULUM_PREREQUISITES:
  readonly FilmStudyCurriculumPrerequisiteDeclaration[] = Object.freeze([]);

export const FILM_STUDY_CURRICULUM = createFilmStudyCurriculum({
  outcomes: FILM_STUDY_LEARNING_OUTCOMES,
  familyCurricula: FILM_STUDY_FAMILY_CURRICULA,
  prerequisites: FILM_STUDY_CURRICULUM_PREREQUISITES,
});
```

Do not add placeholder outcomes, family declarations, or candidate prerequisites. The empty constants are intentional canonical state, not incomplete scaffolding.

- [ ] **Step 4: Run focused green verification**

```bash
npm run build
node --test dist/core/filmStudyCurriculum.test.js
```

Expected: **PASS**.

- [ ] **Step 5: Commit the canonical empty state**

```bash
git add src/core/filmStudyCurriculum.ts src/core/filmStudyCurriculum.test.ts
git commit -m "feat: define empty canonical Film Study curriculum"
```

---

### Task 4: Make family progression a mechanical prerequisite projection

**Files:**
- Modify: `src/core/filmStudyFamilyProgression.test.ts`
- Modify: `src/core/filmStudyFamilyProgression.ts`

**Interfaces:**
- Consumes: `FilmStudyCurriculumPrerequisite` and `FILM_STUDY_CURRICULUM.prerequisites` from `./filmStudyCurriculum.js`.
- Produces:
  - existing `FilmStudyFamilyProgressionEdge`
  - existing `FilmStudyFamilyProgression`
  - existing `createFilmStudyFamilyProgression(edges)`
  - new `projectFilmStudyFamilyProgressionEdges(prerequisites)`
  - existing `FILM_STUDY_FAMILY_PROGRESSION_EDGES`, now derived from curriculum
  - existing `successorsOf(familyId)` unchanged for consumers

- [ ] **Step 1: Write the failing projection contract tests**

Modify the progression test imports:

```ts
import type { FilmStudyCurriculumPrerequisite } from "./filmStudyCurriculum.js";
import { FILM_STUDY_CURRICULUM } from "./filmStudyCurriculum.js";
import {
  FILM_STUDY_FAMILY_PROGRESSION_EDGES,
  createFilmStudyFamilyProgression,
  projectFilmStudyFamilyProgressionEdges,
  successorsOf,
} from "./filmStudyFamilyProgression.js";
```

Add fixture IDs already available in the test and:

```ts
test("progression edges are a mechanical projection of explicit prerequisites", () => {
  const prerequisites: readonly FilmStudyCurriculumPrerequisite[] = [{
    prerequisiteFamilyId: SILENT,
    dependentFamilyId: STUDIO,
    requiredOutcomeIds: ["fixture_outcome"],
    rationale: "fixture only",
  }];

  assert.deepEqual(projectFilmStudyFamilyProgressionEdges(prerequisites), [
    { from: SILENT, to: STUDIO },
  ]);
});

test("projection deduplicates ordered family pairs deterministically", () => {
  const prerequisites: readonly FilmStudyCurriculumPrerequisite[] = [
    {
      prerequisiteFamilyId: SILENT,
      dependentFamilyId: SOUND,
      requiredOutcomeIds: ["a"],
      rationale: "fixture one",
    },
    {
      prerequisiteFamilyId: SILENT,
      dependentFamilyId: STUDIO,
      requiredOutcomeIds: ["b"],
      rationale: "fixture two",
    },
    {
      prerequisiteFamilyId: SILENT,
      dependentFamilyId: STUDIO,
      requiredOutcomeIds: ["c"],
      rationale: "fixture duplicate pair",
    },
  ];

  assert.deepEqual(projectFilmStudyFamilyProgressionEdges(prerequisites), [
    { from: SILENT, to: SOUND },
    { from: SILENT, to: STUDIO },
  ].sort((a, b) => `${a.from}:${a.to}`.localeCompare(`${b.from}:${b.to}`)));
});

test("canonical progression edges equal the canonical curriculum prerequisite projection", () => {
  assert.deepEqual(
    FILM_STUDY_FAMILY_PROGRESSION_EDGES,
    projectFilmStudyFamilyProgressionEdges(FILM_STUDY_CURRICULUM.prerequisites),
  );
});
```

Keep the existing tests that production progression is exactly empty and Religious/Moral has no successor.

The duplicate-pair fixture is intentionally allowed at the *projection helper* boundary even though `createFilmStudyCurriculum` rejects duplicate canonical prerequisite pairs. This keeps projection technically deterministic for arbitrary already-shaped input without weakening canonical admission.

- [ ] **Step 2: Run the focused progression test and verify it fails for the missing projection helper**

```bash
npm run build && node --test dist/core/filmStudyFamilyProgression.test.js
```

Expected: **FAIL** because `projectFilmStudyFamilyProgressionEdges` does not exist.

- [ ] **Step 3: Implement deterministic projection and remove independent canonical edge authorship**

Modify `filmStudyFamilyProgression.ts` imports:

```ts
import {
  FILM_STUDY_CURRICULUM,
  type FilmStudyCurriculumPrerequisite,
} from "./filmStudyCurriculum.js";
import type { FilmStudyFamilyId } from "./filmStudyHistoryFamily.js";
```

Add:

```ts
export function projectFilmStudyFamilyProgressionEdges(
  prerequisites: readonly FilmStudyCurriculumPrerequisite[],
): readonly FilmStudyFamilyProgressionEdge[] {
  const byPair = new Map<string, FilmStudyFamilyProgressionEdge>();

  for (const prerequisite of prerequisites) {
    const edge = Object.freeze({
      from: prerequisite.prerequisiteFamilyId,
      to: prerequisite.dependentFamilyId,
    });
    byPair.set(`${edge.from}:${edge.to}`, edge);
  }

  return Object.freeze(
    [...byPair.entries()]
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([, edge]) => edge),
  );
}
```

Replace the independently authored empty constant:

```ts
export const FILM_STUDY_FAMILY_PROGRESSION_EDGES:
  readonly FilmStudyFamilyProgressionEdge[] =
  projectFilmStudyFamilyProgressionEdges(FILM_STUDY_CURRICULUM.prerequisites);
```

Leave `createFilmStudyFamilyProgression` and `successorsOf` semantics unchanged. Do not import any UI/runtime file.

- [ ] **Step 4: Run curriculum + progression focused tests**

```bash
npm run build
node --test \
  dist/core/filmStudyCurriculum.test.js \
  dist/core/filmStudyFamilyProgression.test.js
```

Expected: both files **PASS**, canonical edge set still `[]`, Religious/Moral successor still `[]`.

- [ ] **Step 5: Commit the projection integration**

```bash
git add \
  src/core/filmStudyFamilyProgression.ts \
  src/core/filmStudyFamilyProgression.test.ts
git commit -m "refactor: derive Film Study progression from curriculum"
```

---

### Task 5: Verify isolation, full regression safety, and exact scope

**Files:**
- No intended source changes. Fix only defects exposed by verification and keep fixes within the four approved core files unless a new design review explicitly expands scope.

**Interfaces:**
- Consumes: completed curriculum/progression implementation.
- Produces: evidence that curriculum authority is isolated, empty-valid, and non-disruptive to the rest of Film Producer.

- [ ] **Step 1: Run all core tests**

```bash
npm test
```

Expected: **PASS**. This runs `npm run build` and all `dist/core/*.test.js` tests according to the repository package contract.

- [ ] **Step 2: Run full typecheck including UI**

```bash
npm run typecheck
```

Expected: **PASS**. This proves the new core import direction does not create a TypeScript/UI boundary problem.

- [ ] **Step 3: Build the UI**

```bash
npm run build:ui
```

Expected: **PASS** with no UI code changes.

- [ ] **Step 4: Run the repository-wide v0.1 verification chain**

```bash
npm run verify:v0.1
```

Expected: **PASS**, including production-case audits, Film History chapter audits, typecheck, `npm test`, representation/festival/Cannes audits, and UI build.

- [ ] **Step 5: Verify the exact diff is constrained to approved implementation files plus approved docs**

From the implementation branch compare against exact baseline `5c2da9ef5bdf5422497cda7e36bd9eeb4ecf89e2`:

```bash
git diff --name-status 5c2da9ef5bdf5422497cda7e36bd9eeb4ecf89e2...HEAD
```

Expected implementation-source paths are only:

```text
src/core/filmStudyCurriculum.ts
src/core/filmStudyCurriculum.test.ts
src/core/filmStudyFamilyProgression.ts
src/core/filmStudyFamilyProgression.test.ts
```

The design/plan docs may also appear if the implementation branch includes those approved commits. There must be no `src/ui/**`, `data/**`, formatter-copy, scenario, profile, donor, or navigation change.

- [ ] **Step 6: Verify canonical production state remains empty and no Religious/Moral edge slipped in**

Run:

```bash
npm run build
node --test \
  dist/core/filmStudyCurriculum.test.js \
  dist/core/filmStudyFamilyProgression.test.js
```

Then inspect the source constants to confirm:

```text
FILM_STUDY_LEARNING_OUTCOMES = []
FILM_STUDY_FAMILY_CURRICULA = []
FILM_STUDY_CURRICULUM_PREREQUISITES = []
FILM_STUDY_FAMILY_PROGRESSION_EDGES = projection([]) = []
```

Expected: no production edge, specifically no `european_religious_moral_modernism -> X`.

- [ ] **Step 7: Commit only if verification required a legitimate in-scope repair**

If no repair was necessary, make no empty verification commit. If an in-scope repair was necessary:

```bash
git add \
  src/core/filmStudyCurriculum.ts \
  src/core/filmStudyCurriculum.test.ts \
  src/core/filmStudyFamilyProgression.ts \
  src/core/filmStudyFamilyProgression.test.ts
git commit -m "test: tighten Film Study curriculum contracts"
```

Re-run Steps 1–6 after any repair.

---

## Post-implementation boundary

This plan ends after the mechanism and empty canonical projection are green. It deliberately does **not** perform the source-backed curriculum audit from Phase 2 of the spec.

The next separate work item must inspect each canonical Film Study family and admit learning outcomes from actual repository content. Only after that audit may a separate prerequisite-admission change consider family-to-family dependencies. A candidate dependency is not admitted merely because it is historically natural or useful to a formatter.

## Self-review result

- **Spec coverage:** outcome identity, family `establishes`, explicit prerequisites, fail-closed validation, no overlap inference, empty canonical state, progression projection, Religious/Moral guard, and runtime isolation are each assigned to a task.
- **Scope:** one subsystem is implemented: curriculum authority plus its required progression projection. Source-backed curriculum population remains a separate future content/audit phase.
- **Type consistency:** declaration input uses ordinary string outcome IDs; validated result preserves those IDs as canonical within that curriculum instance. Family identity always uses the existing `FilmStudyFamilyId`. `FilmStudyCurriculumPrerequisite` is the exact type consumed by the projection helper.
- **No placeholders:** the plan contains explicit test cases, interfaces, implementation logic, commands, expected failures/passes, and commit boundaries. No production curriculum content is fabricated.
