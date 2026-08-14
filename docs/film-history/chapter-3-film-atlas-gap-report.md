# Film History Chapter 3 — Film Atlas Gap Report

## Scope

Chapter 3 is **From views to stories (1896–1912)**. It asks how filmmakers moved from single-view staging and attraction toward more systematic relationships among shots and tableaux: point of view, analytical inserts, linked spaces, causal routes, represented memory and parallel action.

The executable audit is `scripts/film-history-chapter-three-atlas-audit.mjs` and is part of `npm run verify:v0.1`.

The chapter does **not** assume a clean evolutionary ladder in which primitive tableaux are replaced by one mature form. Trick film, direct address and tableau staging continue while narrative organization becomes more systematic. It also rejects claims that one filmmaker or title simply “invented editing,” continuity, the close-up, POV, the flashback or cross-cutting.

## Canonical completion baseline

- Canonical playable Film Atlas: **391 films**.
- Runtime source-verified Production Cases: **384**.
- Chapter 3 **P0 = 0**.
- Chapter 3 **P1 = 0**.
- Exact new Chapter 3 Production Cases remaining: **0**.
- The complete Atlas is reconstructed from the canonical seed plus every registered expansion in runtime order, including `chapterThreeNarrativeExpansion.ts`.
- Matching uses title, original title, aliases and year after normalization.
- Multiple matches are a hard failure.
- Every materialized Chapter 3 case with an expected scenario ID must resolve to that exact canonical ID.

The final four Chapter 3 additions were materialized sequentially as:

1. `scenario_grandmas_reading_glass_1900`
2. `scenario_the_lonely_villa_1909`
3. `scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900`
4. `scenario_histoire_d_un_crime_1901`

## Existing Atlas cases reused by Chapter 3

| Film | Year | Chapter role | Atlas decision | Distinct chapter function |
| --- | ---: | --- | --- | --- |
| *Grandma's Reading Glass* | 1900 | Anchor Film | **USE_EXISTING** | Motivated magnified inserts and analytical viewpoint; no single-inventor or anachronistic classical-POV claim. |
| *Attack on a China Mission – Bluejackets to the Rescue* | 1900 | Comparative Film | **USE_EXISTING** | Version history and artefact provenance; formal reconstruction is kept separate from surviving evidence, and racist/imperial representation remains explicit. |
| *Histoire d'un crime* | 1901 | Comparative Film | **USE_EXISTING** | Multi-tableau causal narration and represented memory inside the prison present; no universal “first flashback” claim. |
| *Fire!* | 1901 | Anchor Film | **USE_EXISTING** | Connected multi-shot action and constructed rescue space without an inventor-of-continuity myth. |
| *A Trip to the Moon* | 1902 | Anchor Film | **USE_EXISTING** | Multiple tableaux, theatrical staging, transformation effects and sustained fantasy construction. |
| *Life of an American Fireman* | 1903 | Comparative Film | **USE_EXISTING** | Original repeated rescue action plus the later cross-cut re-edit historiography. |
| *The Great Train Robbery* | 1903 | Anchor Film | **USE_EXISTING** | Causal multi-scene action while preserving the flexible direct-address bandit shot and rejecting an inventor-of-editing myth. |
| *Rescued by Rover* | 1905 | Anchor Film | **USE_EXISTING** | Repeated routes, stable geography, causal order and replacement/re-shot version history. |
| *The Lonely Villa* | 1909 | Anchor Film | **USE_EXISTING** | Sustained parallel suspense and narrative convergence; Griffith is treated as a major consolidator rather than inventor of cross-cutting. |

## Materialized Chapter 3 Production Cases

### *Grandma's Reading Glass* (1900) — G. A. Smith

Canonical scenario: `scenario_grandmas_reading_glass_1900`.

The case preserves the documented object sequence and makes look → magnified object → return the production problem. Its 17-area Film Study and runtime verification distinguish a strong early represented gaze from later standardized subjective POV grammar.

### *The Lonely Villa* (1909) — D. W. Griffith / Biograph

Canonical scenario: `scenario_the_lonely_villa_1909`.

The case coordinates threatened family, burglars and husband/rescuers as simultaneous action lines, with telephone communication linking separated spaces. It teaches sustained parallel narrative without claiming Griffith invented cross-cutting.

### *Attack on a China Mission – Bluejackets to the Rescue* (1900) — James Williamson

Canonical scenario: `scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900`.

The case makes **provenance before form claim** the central rule. Surviving copies, catalogue descriptions and later reconstruction are kept distinguishable, so a modernized reconstructed order cannot silently become the certain 1900 original. The film's racist and imperial Boxer-Rebellion framing is part of the formal and production analysis, not a detachable footnote.

### *Histoire d'un crime* (1901) — Ferdinand Zecca / Pathé

Canonical scenario: `scenario_histoire_d_un_crime_1901`.

The final Chapter 3 case makes **narrative time** playable. Crime, arrest, prison, represented recollection and execution form a causal multi-tableau structure. In the prison sequence, past experience is presented in a distinct scenic plane while present confinement remains visible, so the player must make retrospective time legible without importing later standardized flashback grammar.

Its Film Study covers all 17 areas; the runtime Production Verification uses five source publishers and places Zecca's formal work inside Pathé's emerging organized fiction-production and genre system. The permanent safeguard is explicit: describe this as an important early represented-memory construction, **not** as an uncontested invention of “the first flashback.”

## P0 and P1 completion

### P0

**Empty. All required Chapter 3 anchor cases are complete.**

### P1

**Empty. Both required comparative gaps are complete:**

- *Attack on a China Mission – Bluejackets to the Rescue* (1900)
- *Histoire d'un crime* (1901)

**Exact required new Chapter 3 Production Cases remaining: 0.**

## P2 — book-reference-only films

- *Cendrillon* (1899) — useful Méliès multi-tableau comparison; *A Trip to the Moon* already carries the stronger playable Méliès case.
- *Stop Thief!* (1901) — useful chase comparison; existing cases cover connected action and route continuity more deeply.
- *Mary Jane's Mishap* (1903) — useful G. A. Smith analytical-editing comparison; *Grandma's Reading Glass* carries the distinct viewpoint gameplay.
- *The Lonedale Operator* (1911) — valuable later Biograph comparison; *The Lonely Villa* carries the playable Griffith/Biograph anchor.

P2 remains outside the Production Case queue unless a later explicit value/source audit changes the decision.

## Historical objects and practices — not Production Cases

- Magic-lantern and theatrical tableau traditions.
- Film catalogues, synopses and shot descriptions.
- Paper-print copyright deposits.
- Intertitles, lecturers and other narrative framing.
- Remakes, replacement negatives and re-edited versions.
- Editing conventions themselves, including POV inserts, analytical cutting, represented memory, scene linkage and parallel editing.

These are evidence, practices or historical objects; they must not be fabricated into film Production Cases.

## Permanent historiographic safeguards

1. Do not claim that one film or filmmaker invented editing, continuity, the close-up, POV, flashback or cross-cutting.
2. Do not narrate tableau staging and attraction as defective forms waiting to become classical continuity.
3. Do not treat a later re-edit of *Life of an American Fireman* as Porter's original 1903 structure.
4. Do not describe *The Great Train Robbery* as the invention of narrative editing or force its bandit shot into one fixed canonical position.
5. Preserve *Rescued by Rover* replacement-version history rather than using it as an invention myth.
6. Do not turn *Grandma's Reading Glass* into an uncontested “first POV shot” claim or equate its represented gaze wholesale with later classical subjective POV.
7. For *Attack on a China Mission*, distinguish surviving evidence, catalogue description and reconstruction before formal claims; keep its racist/imperial representation explicit.
8. For *Histoire d'un crime*, distinguish early scenic represented memory from later standardized flashback grammar and reject a universal first-flashback claim.
9. Do not credit Griffith with inventing cross-cutting; *The Lonely Villa* belongs inside broader international development.
10. Treat archival survival, copies, reconstructions and version history as evidence constraints, not minor footnotes.
11. Keep French/Pathé/Méliès production inside the argument rather than reducing Chapter 3 to Britain and the United States.

## Final Chapter 3 Atlas state

At the **391-film / 384-verified** baseline:

- **USE_EXISTING = 9**
- **P0 = 0**
- **P1 = 0**
- **P2 = 4**
- **Required new Production Cases = 0**

Chapter 3's Film Atlas queue is therefore closed. Any future Atlas growth must preserve this zero-backlog state unless a new explicit chapter audit intentionally changes the matrix.
