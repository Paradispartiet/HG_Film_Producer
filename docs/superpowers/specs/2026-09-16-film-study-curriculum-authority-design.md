# Film Study Curriculum Authority — Design

## Status

Design-only architecture specification.

- Exact baseline: `5c2da9ef5bdf5422497cda7e36bd9eeb4ecf89e2`
- Design branch: `design/film-study-curriculum-authority-20260916`
- Existing family-progression mechanism remains intact and initially empty.
- No Film Study formatter, resolver, donor, navigation, scenario, profile, or UI behavior changes in this design.
- This design does not assign `European Religious / Moral Modernism -> X`.

## Context

The repository now has two canonical primitives in `src/core`:

1. `FilmStudyFamilyId`, backed by the ten established Film Study history families.
2. `FilmStudyFamilyProgressionEdge`, backed by an explicit-only adjacency relation whose production edge set is currently empty.

The progression mechanism correctly prevents chronology, resolver precedence, import order, declaration order, donor selection, profile lookup, or navigation from silently becoming pedagogy. What is still missing is the semantic authority that could justify a future progression edge.

A bare edge such as:

```text
A -> B
```

is not enough. It says that B follows A but not what B actually requires from A. Without an explicit learning contract, edge admission can become circular: an edge is considered valid because it is declared in the progression file, while the progression file is considered authoritative because it contains the edge.

## Design decision

Introduce a separate Film Study curriculum authority in `src/core`.

The curriculum authority has three layers:

1. **Canonical learning outcomes** — specific knowledge or analytical capability that Film Study can establish.
2. **Family curriculum declarations** — which canonical learning outcomes a family establishes.
3. **Explicit prerequisites** — a declaration that one family is prerequisite to another because the dependent family requires named learning outcomes that the prerequisite family establishes.

No prerequisite may be inferred automatically from shared vocabulary, chronology, family proximity, resolver structure, feedback text, or overlap between `establishes` and `requires`-like concepts.

The curriculum authority is the only semantic source that may justify a canonical family-progression edge.

## Core model

Conceptually:

```ts
import type { FilmStudyFamilyId } from "./filmStudyHistoryFamily.js";

export type FilmStudyLearningOutcomeId = string & {
  readonly __brand: "FilmStudyLearningOutcomeId";
};

export type FilmStudyLearningOutcome = Readonly<{
  id: FilmStudyLearningOutcomeId;
  statement: string;
}>;

export type FilmStudyFamilyCurriculum = Readonly<{
  familyId: FilmStudyFamilyId;
  establishes: readonly FilmStudyLearningOutcomeId[];
}>;

export type FilmStudyCurriculumPrerequisite = Readonly<{
  prerequisiteFamilyId: FilmStudyFamilyId;
  dependentFamilyId: FilmStudyFamilyId;
  requiredOutcomeIds: readonly FilmStudyLearningOutcomeId[];
  rationale: string;
}>;
```

The exact TypeScript representation may use an enum-like registry or derived key type instead of a branded string if that better matches repository conventions. The invariant is more important than the syntax: learning-outcome identity must be canonical, stable, validated, and separate from display text.

## Why this is a hybrid model

Two simpler alternatives are deliberately rejected.

### Bare prerequisite edges

A relation containing only `from` and `to` is too weak to establish semantic authority. It can prevent accidental ordering inference, but it cannot prove what knowledge crosses the edge.

### Automatic competency matching

Automatically creating `A -> B` whenever A establishes an outcome that B appears to use is too strong. Shared knowledge does not imply pedagogical necessity. Automatic matching would recreate hidden inference under a new name.

The approved hybrid therefore requires both:

- explicit learning outcomes; and
- an explicit prerequisite declaration that names the specific outcomes used as justification.

## Learning-outcome admission contract

A learning outcome may become canonical only when all of the following are true:

1. **Specific** — it describes a concrete piece of knowledge, distinction, analytical relation, or production-system understanding rather than a broad topic label.
2. **Teachably testable** — repository content could in principle demonstrate whether the learner has acquired it. It need not require a quiz immediately, but it cannot be purely atmospheric or descriptive.
3. **Source-backed** — at least one canonical Film Study family has repository content that actually establishes the outcome. Family labels alone are insufficient.
4. **Non-chronological** — an outcome may involve historical sequence, but an era/date by itself is not a learning outcome.
5. **Non-duplicative** — an existing canonical outcome must be reused when the intended knowledge is materially the same.
6. **Stable identity** — the technical ID describes the enduring concept, not the current scenario, formatter slice, UI copy, or temporary implementation need.
7. **No hidden progression** — admitting an outcome creates no family-to-family edge by itself.

Evidence that may support an outcome includes canonical Film Study scenario/profile material, documented production-system analysis, family-specific historical analysis, and other established Film Study content. Feedback copy may corroborate scope, but feedback wording by itself must not be treated as sufficient proof that a learner was taught the outcome.

## Family curriculum admission contract

A family curriculum declaration may list an outcome in `establishes` only when the family's canonical content substantively teaches or requires the learner to reason with that outcome.

Rules:

- Reuse the existing `FilmStudyFamilyId`; never create a second family taxonomy.
- `establishes` is a set semantically. Declaration order has no pedagogical meaning.
- Duplicate outcome IDs normalize or fail validation deterministically.
- A family may validly establish zero canonical outcomes while its curriculum audit is incomplete.
- Adding an outcome to one family never automatically makes another family dependent on it.

## Prerequisite admission contract

A prerequisite declaration is canonical only when all of the following are true:

1. `prerequisiteFamilyId` and `dependentFamilyId` are valid canonical `FilmStudyFamilyId` values.
2. They are not the same family.
3. `requiredOutcomeIds` is non-empty.
4. Every required outcome is a canonical `FilmStudyLearningOutcomeId`.
5. Every required outcome named by the prerequisite is included in the prerequisite family's canonical `establishes` set.
6. The dependent family's canonical content genuinely presupposes those outcomes rather than merely discussing related material.
7. `rationale` states why the dependent family needs those outcomes; it must not merely restate the two family names or chronology.
8. The relation is explicitly declared as a prerequisite. It may not be synthesized from matching outcome sets.
9. Resolver precedence, import order, source adjacency, profile lookup, donor selection, scenario navigation, formatter demand, and chronological succession remain invalid evidence for prerequisite status.
10. A consumer needing a successor is not evidence for admitting the prerequisite.

A prerequisite may reference multiple required outcomes. Multiple prerequisite families may point to the same dependent family when separately justified. The design does not impose a global linear course order.

## Validation behavior

The curriculum module must fail closed.

Invalid canonical data must be rejected by tests or construction-time validation rather than repaired through inference. At minimum, validation must detect:

- unknown family IDs;
- unknown learning-outcome IDs;
- self-prerequisites;
- empty `requiredOutcomeIds`;
- prerequisite outcomes not established by the declared prerequisite family;
- duplicate canonical prerequisite declarations that would produce ambiguous maintenance state.

Deterministic normalization is acceptable for set-like fields such as repeated outcome IDs inside one declaration, but semantic defects must not be silently corrected.

Cycle handling is intentionally not a Phase-1 admission rule. A graph cycle may or may not be pedagogically invalid depending on future semantics. Do not add global acyclicity until the repository has an explicit reason to require it.

## Progression becomes a projection

The existing progression API remains the consumer-facing relation:

```ts
successorsOf(familyId): readonly FilmStudyFamilyId[]
```

However, canonical progression edges must no longer be independently authored once curriculum prerequisites are wired in.

Conceptually:

```ts
export const FILM_STUDY_FAMILY_PROGRESSION_EDGES =
  FILM_STUDY_CURRICULUM_PREREQUISITES.map((prerequisite) => ({
    from: prerequisite.prerequisiteFamilyId,
    to: prerequisite.dependentFamilyId,
  }));
```

The exact implementation should preserve the current immutable/deterministic progression behavior and deduplicate any repeated `{from,to}` projection caused by separately justified prerequisite records only if the prerequisite schema later permits such records. Prefer one canonical prerequisite record per ordered family pair with all required outcomes collected into that record.

This makes curriculum the single semantic authority and progression a mechanical projection.

## Initial canonical state

The new architecture does not manufacture content to populate itself.

Initial rules:

- Existing ten family identities remain unchanged.
- Existing progression remains semantically empty until source-backed prerequisite data is admitted.
- No `Religious/Moral -> X` edge is added by this design.
- No outcome is admitted solely because a feedback string mentions a concept.
- No prerequisite is admitted solely because two families form a plausible historical sequence.

A subsequent curriculum-audit change may admit learning outcomes, family `establishes` declarations, and prerequisites in source-backed batches. Each admitted prerequisite then projects to progression automatically.

## Semantic boundaries

The following concerns remain independent:

1. **Classification** — what family a scenario/result belongs to.
2. **Profile lookup** — what profile config represents that family.
3. **Donor selection** — which material can be reused.
4. **Scenario navigation** — what the UI presents next.
5. **Feedback formatting** — how a known result is expressed/localized.
6. **Curriculum outcomes** — what knowledge a family establishes.
7. **Curriculum prerequisites** — what prior knowledge a dependent family explicitly requires and from which prerequisite family.
8. **Progression projection** — the read-only family adjacency mechanically derived from prerequisites.

Only items 6 and 7 carry pedagogical authority. Item 8 carries no independent semantic authority.

## Proposed module boundary

Keep all new mechanism code in `src/core`.

Recommended files:

```text
src/core/filmStudyCurriculum.ts
src/core/filmStudyCurriculum.test.ts
```

Existing files reused without creating parallel identities:

```text
src/core/filmStudyHistoryFamily.ts
src/core/filmStudyFamilyProgression.ts
src/core/filmStudyFamilyProgression.test.ts
```

No UI module should own or define canonical curriculum semantics.

## Contract tests

Implementation must prove at least:

1. canonical outcome identity is validated independently of display text;
2. family curricula reuse canonical `FilmStudyFamilyId` values;
3. a family may establish zero outcomes;
4. an explicitly declared prerequisite with valid required outcomes is accepted;
5. unknown outcome IDs are rejected;
6. a prerequisite is rejected when its required outcome is not established by its prerequisite family;
7. self-prerequisites are rejected;
8. empty required-outcome sets are rejected;
9. merely overlapping outcome sets never create a prerequisite;
10. declaration/import/order changes never create a prerequisite;
11. canonical progression edges equal the projection of canonical prerequisites;
12. if canonical prerequisites are empty, progression is empty;
13. `European Religious / Moral Modernism` still has no successor unless a source-backed prerequisite is explicitly admitted;
14. curriculum lookup/projection does not alter classification, profile lookup, donor selection, scenario navigation, feedback formatting, or UI behavior.

Tests may use fixture outcomes and fixture prerequisite relations to prove mechanics. Fixture data must never be exported as canonical production curriculum.

## Rollout

### Phase 1 — curriculum mechanism

Introduce outcome identity, family curriculum declarations, prerequisite declarations, validation, and tests. Canonical outcomes/curricula/prerequisites may remain empty where source-backed audit has not yet been completed.

### Phase 2 — source-backed curriculum audit

Audit each canonical Film Study family and admit learning outcomes only where repository content establishes them. Bind each family to its source-backed `establishes` set.

This phase is content work, not graph inference.

### Phase 3 — prerequisite admission

For each candidate prerequisite, prove that the dependent family presupposes specific canonical outcomes established by the prerequisite family. Admit only those relations with an explicit rationale.

### Phase 4 — progression projection

Replace independent canonical progression-edge authorship with a mechanical projection from the prerequisite data while preserving the existing public progression API.

### Phase 5 — consumers

Only consumers that genuinely require pedagogical progression may use the progression API. Existing resolver/navigation/formatter code remains unchanged unless a separate approved change requires integration.

## Non-goals

This design does not:

- populate a full Film Study curriculum from family labels;
- infer prerequisites from chronology;
- infer prerequisites from overlapping outcomes;
- choose a next family after Religious/Moral;
- change Film Study resolver precedence;
- change scenario navigation;
- change donor selection;
- change profiles;
- change feedback copy or localization;
- change formatter behavior;
- introduce a global rank, chapter number, or total order;
- add graph traversal/pathfinding;
- require every family to have a predecessor or successor;
- require every family to establish an outcome before the source-backed audit is complete.

## Risks and controls

- **Risk: curriculum becomes a renamed progression table.** Control: every prerequisite must name required outcomes that the prerequisite family establishes.
- **Risk: outcome overlap silently recreates inferred edges.** Control: no automatic matching; prerequisites are explicit-only.
- **Risk: feedback copy becomes accidental curriculum authority.** Control: feedback may corroborate scope but cannot alone admit an outcome.
- **Risk: duplicate family taxonomy.** Control: reuse `FilmStudyFamilyId` from `filmStudyHistoryFamily.ts`.
- **Risk: progression and curriculum drift apart.** Control: progression becomes a projection, not separately authored canonical data.
- **Risk: premature content invention.** Control: mechanism can remain empty; outcomes/prerequisites require source-backed audit.
- **Risk: future graph sophistication expands scope.** Control: no ranking, traversal, cycle policy, or scheduling in Phase 1.

## Acceptance criteria

The design is satisfied when the implementation can demonstrate all of the following:

- one canonical Film Study learning-outcome identity source exists;
- family curricula reuse the existing canonical family identities;
- prerequisites explicitly name the outcomes that justify them;
- prerequisites cannot be inferred from chronology, order, overlap, navigation, resolver structure, donor logic, formatter demand, or UI needs;
- invalid prerequisite data fails closed;
- canonical progression is mechanically derivable from canonical prerequisites and has no separate semantic authority;
- an empty curriculum/prerequisite state remains valid while audits are incomplete;
- no successor for Religious/Moral is created without independently source-backed prerequisite evidence;
- existing runtime behavior outside curriculum/progression remains unchanged.

## Consequence for the blocked Religious/Moral successor question

The correct state remains unchanged: no successor is authorized yet.

The new curriculum authority supplies the missing admission path. A future `Religious/Moral -> X` edge becomes legitimate only if a source-backed curriculum audit establishes concrete learning outcomes for Religious/Moral, the dependent family X demonstrably presupposes one or more of those outcomes, and an explicit prerequisite declaration records that relationship and rationale.

Until all of those conditions are satisfied, the progression projection must continue to return no such edge.
