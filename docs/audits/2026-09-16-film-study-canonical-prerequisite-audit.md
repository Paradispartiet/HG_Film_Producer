# Film Study Canonical Prerequisite Audit

## Status

Fail-closed prerequisite audit against exact baseline:

`d6ce0008292256930654bc2c2cafaed09b135259`

Decision:

- canonical Film Study families audited: **10 / 10**
- ordered cross-family prerequisite candidates audited: **90 / 90**
- admitted prerequisites: **0**
- rejected for insufficient evidence: **90**
- canonical progression edges authorized by this audit: **0**
- `European Religious / Moral Modernism` successor: **none authorized**

This audit does not assert that progression can never exist. It records only what the exact baseline currently supports. A rejected pair may be reopened if later canonical content explicitly demonstrates that the dependent family presupposes one or more named outcomes established by the candidate prerequisite family.

## Admission rule

For an ordered pair `A -> B` to be admitted as a canonical prerequisite, all of the following must be true:

1. `A` and `B` are distinct canonical `FilmStudyFamilyId` values.
2. At least one canonical learning outcome established by `A` is named as required evidence.
3. Canonical content for `B` substantively presupposes that outcome rather than merely discussing related material.
4. The dependency can be stated as an explicit pedagogical rationale independent of chronology, resolver precedence, import/declaration order, donor selection, profile lookup, scenario navigation, feedback-copy proximity or outcome overlap.
5. The relation is explicitly admitted to `FILM_STUDY_CURRICULUM_PREREQUISITES` only after this evidence exists.

Chronological succession, historical influence, shared vocabulary, increasingly complex subject matter and runtime nesting are not prerequisite evidence by themselves.

## Canonical outcomes audited

| Family | Established canonical outcome |
|---|---|
| `silent_foundations` | `distinguish_silent_production_systems` |
| `silent_studio_systems` | `analyze_early_studio_coordination` |
| `late_silent_early_sound` | `analyze_sound_transition_strategies` |
| `production_systems_1930s` | `analyze_integrated_1930s_production_systems` |
| `noir_realism_1940s` | `analyze_noir_realism_production_conditions` |
| `asian_postwar_1950s` | `analyze_asian_postwar_production_form` |
| `postwar_european_modernism` | `analyze_postwar_european_modernist_systems` |
| `czechoslovak_new_wave` | `analyze_czechoslovak_new_wave_conditions` |
| `european_political_feminist_modernism` | `analyze_political_feminist_production_form` |
| `european_religious_moral_modernism` | `analyze_moral_belief_institutions_production_form` |

The authoritative declarations are in `src/core/filmStudyCurriculum.ts`. The prerequisite constant remains empty on the audited baseline.

## Family evidence inspected

The audit inspected the canonical family-level Film Study implementations rather than inferring pedagogy from the top-level resolver chain:

- `src/ui/data/scenarioFilmStudySilentFoundationsBatch.ts`
- `src/ui/data/scenarioFilmStudySilentStudioSystemsBatch.ts`
- `src/ui/data/scenarioFilmStudyLateSilentEarlySoundBatch.ts`
- `src/ui/data/scenarioFilmStudy1930sProductionSystemsBatch.ts`
- `src/ui/data/scenarioFilmStudy1940sNoirRealismBatch.ts`
- `src/ui/data/scenarioFilmStudy1950sAsianPostwarBatch.ts`
- `src/ui/data/scenarioFilmStudyPostwarEuropeanModernismBatch.ts`
- `src/ui/data/scenarioFilmStudyCzechoslovakNewWaveBatch.ts`
- `src/ui/data/scenarioFilmStudyEuropeanPoliticalFeministModernismBatch.ts`
- `src/ui/data/scenarioFilmStudyEuropeanReligiousMoralCatalog.ts`

For the first eight families above, each family resolves its own source-backed profile group and generates comparison choices from its own family-local donor set. No dependent-family contract names another canonical family's learning outcome as required prior knowledge.

`European Political / Feminist Modernism` is the one runtime nesting exception: its resolver also recognizes the three `European Religious / Moral Modernism` profiles. That nesting is classification/profile reuse only. Religious/Moral profiles are selected from their own catalog and compared against their own Religious/Moral donor group. The implementation does not state that Political/Feminist must precede Religious/Moral, that Religious/Moral must precede Political/Feminist, or that either family requires the other's canonical outcome.

## 10 x 10 ordered-pair audit

Legend:

- `—` = self-pair; not a valid prerequisite candidate.
- `R` = `REJECTED_NO_EVIDENCE`; current canonical content does not demonstrate that the column family presupposes the row family's established outcome.

Rows are candidate prerequisite families `A`. Columns are candidate dependent families `B`. Every off-diagonal cell therefore represents one distinct `A -> B` audit decision.

| A \ B | SF | SS | LS | 30 | 40 | 50 | PEM | CNW | PFM | RMM |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **SF** | — | R | R | R | R | R | R | R | R | R |
| **SS** | R | — | R | R | R | R | R | R | R | R |
| **LS** | R | R | — | R | R | R | R | R | R | R |
| **30** | R | R | R | — | R | R | R | R | R | R |
| **40** | R | R | R | R | — | R | R | R | R | R |
| **50** | R | R | R | R | R | — | R | R | R | R |
| **PEM** | R | R | R | R | R | R | — | R | R | R |
| **CNW** | R | R | R | R | R | R | R | — | R | R |
| **PFM** | R | R | R | R | R | R | R | R | — | R |
| **RMM** | R | R | R | R | R | R | R | R | R | — |

Abbreviations:

- `SF` = `silent_foundations`
- `SS` = `silent_studio_systems`
- `LS` = `late_silent_early_sound`
- `30` = `production_systems_1930s`
- `40` = `noir_realism_1940s`
- `50` = `asian_postwar_1950s`
- `PEM` = `postwar_european_modernism`
- `CNW` = `czechoslovak_new_wave`
- `PFM` = `european_political_feminist_modernism`
- `RMM` = `european_religious_moral_modernism`

## Why all 90 candidates remain rejected

### No dependent family declares prior-family knowledge

Each audited family teaches its own historical-production relation through source-backed profiles, a complete Film Study map and within-family comparison. None of the family contracts says, in substance, "to perform this analysis, the learner must already have acquired outcome X from family A."

Historical `before` context inside individual profiles may discuss earlier traditions. That establishes historical context, not a pedagogical prerequisite. A film being shaped by an earlier movement is not evidence that a learner must complete the earlier canonical family before studying the later film.

### Chronology cannot supply the missing relation

Several candidate pairs appear intuitively sequential, for example:

- `silent_foundations -> silent_studio_systems`
- `silent_studio_systems -> late_silent_early_sound`
- `late_silent_early_sound -> production_systems_1930s`
- `production_systems_1930s -> noir_realism_1940s`
- `noir_realism_1940s -> asian_postwar_1950s`

The audited content does not convert those dates into prerequisites. Every listed dependent family can be resolved, presented and compared from its own source-backed material without a declared requirement for the previous family's outcome.

### Shared analytical dimensions cannot supply the missing relation

Families repeatedly analyze performance, image, editing, sound, production organization, history and space. Shared dimensions are intentional Film Study vocabulary, not evidence that one family owns a competency another family requires. Outcome overlap or conceptual similarity therefore creates no edge.

### Resolver nesting cannot supply the missing relation

The Political/Feminist resolver's support for Religious/Moral profiles is an implementation/classification arrangement. Religious/Moral keeps its own profile catalog and family-local donors. No pedagogical dependency follows from the fact that one resolver function dispatches both groups.

### Historical influence cannot supply the missing relation

Some later profiles describe inherited, revised or rejected earlier traditions. That relationship belongs to film history. The curriculum prerequisite contract is stricter: the dependent learning task itself must presuppose a named canonical outcome from the prerequisite family. No inspected family currently makes that claim.

## Canonical consequence

This audit authorizes no change to:

- `FILM_STUDY_CURRICULUM_PREREQUISITES`
- `FILM_STUDY_FAMILY_PROGRESSION_EDGES`
- `successorsOf(...)`
- resolver precedence
- profile lookup
- donor selection
- scenario navigation
- feedback formatting
- UI behavior

The valid canonical state after this audit therefore remains:

```text
learning outcomes: 10
family curricula: 10
prerequisites: 0
progression edges: 0
Religious/Moral successors: 0
```

## Reopening rule

A future audit may change one `R` cell only when new or newly identified canonical evidence satisfies the admission contract. The proposed prerequisite must name the exact required outcome(s), identify the dependent family material that genuinely presupposes them, and provide a rationale that still holds after chronology, resolver structure, donor logic and navigation are removed from consideration.

Until then, the matrix remains fail-closed.