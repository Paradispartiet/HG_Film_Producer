# Film Study Competency Strength Audit

## Status

Fail-closed competency-strength audit against exact baseline:

`b48378dac28ba86e3bf212d6f75675488dea6fcc`

Decision:

- canonical Film Study families audited: **10 / 10**
- reusable competencies audited: **7 / 7**
- non-`establishes` family × competency cells audited: **18 / 18**
- admitted `reinforces` relations: **0**
- admitted `uses` relations: **0**
- rejected for insufficient explicit evidence: **18**
- canonical competency-strength evidence declarations authorized by this audit: **0**
- canonical prerequisites authorized by this audit: **0**
- canonical progression edges authorized by this audit: **0**

This audit does not claim that `reinforces` or `uses` can never be justified. It records only what the exact baseline currently supports. A rejected cell may be reopened when canonical family material explicitly supports one of those relation strengths and can supply the matching evidence required by `FILM_STUDY_COMPETENCY_STRENGTH_EVIDENCE`.

## Admission rule

A family × competency cell is a strength candidate only when the competency is not already in that family's `establishes` bucket. The existing validator forbids one competency from occupying more than one relation bucket in the same family.

For `reinforces` to be admitted, canonical material for the family must explicitly support deliberate deepening or strengthening of that named reusable competency rather than merely containing related craft vocabulary.

For `uses` to be admitted, canonical material for the family must explicitly support applying that named reusable competency as an input to the family's learning task without establishing or strengthening it there.

For either relation:

1. the family and competency must be canonical;
2. the competency must not already be `establishes` for that family;
3. the family-level material must support the exact relation semantically, not merely mention the same craft area;
4. the rationale must remain valid after chronology, historical influence, shared vocabulary, coverage-map overlap, resolver order, donor selection and scenario navigation are removed from consideration;
5. the relation may be materialized only together with matching explicit strength evidence accepted by `createFilmStudyCompetencyDepth(...)`.

Repeated analysis of performance, space, image, editing, sound, production organization or context is not by itself evidence of `reinforces` or `uses`.

## Canonical competency inventory

| Code | Competency |
|---|---|
| `PERF` | `analyze_performance_and_staging` |
| `SPACE` | `analyze_space_location_and_design` |
| `IMAGE` | `analyze_image_and_lighting` |
| `EDIT` | `analyze_editing_duration_and_narration` |
| `SOUND` | `analyze_sound_and_music` |
| `ORG` | `analyze_production_organization_labor_and_institutions` |
| `CTX` | `connect_context_to_production_form` |

The authoritative declarations and current family relation buckets are in `src/core/filmStudyCurriculum.ts`. On the audited baseline, `FILM_STUDY_COMPETENCY_STRENGTH_EVIDENCE`, every `reinforces` array and every `uses` array are empty.

## Family evidence inspected

Only six families have non-`establishes` cells. Their canonical family-level implementations were inspected directly:

- `src/ui/data/scenarioFilmStudySilentFoundationsBatch.ts`
- `src/ui/data/scenarioFilmStudySilentStudioSystemsBatch.ts`
- `src/ui/data/scenarioFilmStudyLateSilentEarlySoundBatch.ts`
- `src/ui/data/scenarioFilmStudy1930sProductionSystemsBatch.ts`
- `src/ui/data/scenarioFilmStudy1940sNoirRealismBatch.ts`
- `src/ui/data/scenarioFilmStudy1950sAsianPostwarBatch.ts`

The remaining four families already place all seven reusable competencies in `establishes`, so the validator leaves no legal strength cell to audit for them:

- `postwar_european_modernism`
- `czechoslovak_new_wave`
- `european_political_feminist_modernism`
- `european_religious_moral_modernism`

Across the six inspected batches, each resolver materializes source-backed profile coverage and builds comparisons from its own family-local donor set. The feedback describes differences among production systems and craft relations inside that family. None of the inspected family-level contracts says that the learner is applying an already-established reusable competency as an input, or deliberately strengthening one as prior competence.

The word `uses` can occur in ordinary prose describing what a production system does. That is not a curriculum `uses` declaration. Likewise, a later family discussing a craft dimension that an earlier family also discusses is not a `reinforces` declaration.

## 18-cell audit

Legend:

- `E` = already `establishes`; therefore not a strength candidate.
- `R` = `REJECTED_NO_EVIDENCE`; the competency is not established by this family, but current canonical family material supports neither an explicit `reinforces` relation nor an explicit `uses` relation.

| Family | PERF | SPACE | IMAGE | EDIT | SOUND | ORG | CTX |
|---|---:|---:|---:|---:|---:|---:|---:|
| `silent_foundations` | E | E | R | E | R | R | R |
| `silent_studio_systems` | E | E | E | R | E | E | R |
| `late_silent_early_sound` | E | R | E | E | E | R | R |
| `production_systems_1930s` | R | R | R | R | R | E | R |
| `noir_realism_1940s` | E | E | E | E | E | R | E |
| `asian_postwar_1950s` | E | E | R | E | R | E | E |
| `postwar_european_modernism` | E | E | E | E | E | E | E |
| `czechoslovak_new_wave` | E | E | E | E | E | E | E |
| `european_political_feminist_modernism` | E | E | E | E | E | E | E |
| `european_religious_moral_modernism` | E | E | E | E | E | E | E |

There are **18** `R` cells: 4 + 2 + 3 + 6 + 1 + 2 across the first six families.

## Family decisions

### `silent_foundations`

Open cells: `IMAGE`, `SOUND`, `ORG`, `CTX`.

The batch teaches a documented silent-cinema production system through relations among design, location, effects, staging and editing. Coverage also surfaces screenplay, cinematography, editing and sound-design fields, but presence in a generic coverage map does not assign curriculum strength. No family-level statement says that image/lighting, sound/music, production organization or context-to-form is being used as prior competence or reinforced as an already-established competence.

Decision: **4 × `REJECTED_NO_EVIDENCE`**.

### `silent_studio_systems`

Open cells: `EDIT`, `CTX`.

The family compares early-cinema production systems by how body, studio, effects, architecture and sound relate, with source-backed profile coverage and family-local donors. It does not frame editing/duration/narration or context-to-production-form as previously acquired competencies being applied or strengthened.

Decision: **2 × `REJECTED_NO_EVIDENCE`**.

### `late_silent_early_sound`

Open cells: `SPACE`, `ORG`, `CTX`.

The family explicitly organizes its own transition-era analysis around image, editing, performance and sound. Spatial design, production organization/institutions and context-to-form are not assigned a curriculum strength relation. Historical transition language describes the subject matter; it does not establish that the learner uses or reinforces one of those missing reusable competencies.

Decision: **3 × `REJECTED_NO_EVIDENCE`**.

### `production_systems_1930s`

Open cells: `PERF`, `SPACE`, `IMAGE`, `EDIT`, `SOUND`, `CTX`.

The canonical competency mapping establishes only production organization/labor/institutions for this family. The batch feedback describes a production system that organizes performance, design, image, sound and industrial labor, but description of what the production system coordinates is not evidence that the curriculum relation for those other competencies is `reinforces` or `uses`. Editing/context likewise lack an explicit strength declaration.

Decision: **6 × `REJECTED_NO_EVIDENCE`**.

### `noir_realism_1940s`

Open cell: `ORG`.

The family already establishes the other six reusable competencies. Its batch connects postwar context, production conditions and formal system, but it does not explicitly assign production organization/labor/institutions as prior competence that is applied or deliberately strengthened.

Decision: **1 × `REJECTED_NO_EVIDENCE`**.

### `asian_postwar_1950s`

Open cells: `IMAGE`, `SOUND`.

The family establishes editing, performance, production organization, space and context-to-form. Its batch describes postwar context, production organization and formal systems, including family-local differences in performance, space, duration, action and realism. It does not explicitly state that image/lighting or sound/music are prior reusable competencies being used or reinforced.

Decision: **2 × `REJECTED_NO_EVIDENCE`**.

## Why recurrence is insufficient

### Shared coverage fields are not relation strength

The family batches populate broad Film Study coverage such as cinematography, editing and sound design. Those coverage fields ensure analytical breadth; they do not state whether the curriculum relation is `establishes`, `reinforces` or `uses`.

### Historical sequence is not relation strength

A later family can revisit a craft dimension that appears in an earlier family without relying on the earlier family pedagogically. Chronology cannot convert that recurrence into `reinforces` or `uses`.

### Production-system prose is not learner-state prose

Statements such as a system "uses" a different relation among body, studio, effects, architecture and sound describe the historical production system. The strength contract describes what the learner is expected to establish, reinforce or use. Those are different claims.

### Repetition alone cannot distinguish `reinforces` from `uses`

Even if the same competency appears substantively in more than one family, recurrence does not tell us whether the later family strengthens it, merely applies it, or independently establishes it. The canonical relation therefore remains fail-closed until the family material supports one interpretation explicitly.

## Canonical consequence

This audit authorizes no change to:

- `FILM_STUDY_FAMILY_COMPETENCIES`
- `FILM_STUDY_COMPETENCY_STRENGTH_EVIDENCE`
- `FILM_STUDY_CURRICULUM_PREREQUISITES`
- `FILM_STUDY_FAMILY_PROGRESSION_EDGES`
- resolver precedence
- profile lookup
- donor selection
- scenario navigation
- feedback formatting
- UI behavior

The valid canonical state after this audit remains:

```text
learning outcomes: 10
reusable competencies: 7
family competency mappings: 10
approved strength evidence declarations: 0
reinforces relations: 0
uses relations: 0
prerequisites: 0
progression edges: 0
```

## Reopening rule

A future `R` cell may change only when newly identified or newly authored canonical family material satisfies the admission rule and supports one exact relation. The change must name the family, competency and relation (`reinforces` or `uses`), provide a non-empty rationale, and be materialized together with matching `FILM_STUDY_COMPETENCY_STRENGTH_EVIDENCE` so the runtime validator can fail closed.

Until then, all 18 open cells remain rejected.