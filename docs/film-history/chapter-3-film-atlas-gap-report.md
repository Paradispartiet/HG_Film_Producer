# Film History Chapter 3 — Film Atlas Gap Report

## Scope

Chapter 3 is **From views to stories (1896–1912)**. It asks how filmmakers moved from single-view staging and attraction toward more systematic relationships among shots: point of view, analytical inserts, linked spaces, causal routes, represented memory and parallel action.

The executable audit is `scripts/film-history-chapter-three-atlas-audit.mjs` and is part of `npm run verify:v0.1`.

The chapter does **not** assume a clean evolutionary ladder in which primitive tableaux are replaced by a single mature form. Trick film, direct address, tableau staging and attraction continue while narrative organization becomes more systematic. It also rejects any claim that one filmmaker or one title simply “invented editing,” continuity, the close-up, POV or cross-cutting.

## Current audit baseline

- Canonical playable Film Atlas: **388 films**.
- Runtime source-verified Production Cases: **381**.
- The complete Atlas is reconstructed from the canonical seed plus every registered expansion in runtime order, including `chapterThreeNarrativeExpansion.ts`.
- Matching uses title, original title, aliases and year after normalization.
- Multiple matches are a hard failure.
- Canonical Chapter 3 cases with an expected scenario ID must resolve to that exact ID.

The baseline increased from 387 to 388 when *Grandma's Reading Glass (1900)* was fully materialized as `scenario_grandmas_reading_glass_1900`. The Chapter 3 queue therefore moved from four required new Production Cases to three.

## Existing Atlas cases reused by Chapter 3

| Film | Year | Chapter role | Atlas decision | Distinct chapter function |
| --- | ---: | --- | --- | --- |
| *Grandma's Reading Glass* | 1900 | Anchor Film | **USE_EXISTING** | Motivated magnified inserts, analytical shot relation and an early represented gaze. The case explicitly avoids both a single-inventor myth and the assumption that this construction is identical to later classical subjective POV. |
| *Fire!* | 1901 | Anchor Film | **USE_EXISTING** | Connected multi-shot action and constructed rescue space without calling Williamson the inventor of continuity. |
| *A Trip to the Moon* | 1902 | Anchor Film | **USE_EXISTING** | Multiple tableaux, theatrical staging, transformation effects and sustained fantasy construction; tableau is treated as a valid form, not failed classical continuity. |
| *Life of an American Fireman* | 1903 | Comparative Film | **USE_EXISTING** | Original repeated rescue action plus the historiographic problem of a later cross-cut re-edit once mistaken for Porter’s original. |
| *The Great Train Robbery* | 1903 | Anchor Film | **USE_EXISTING** | Causal multi-scene action across studio and locations, with the direct-address bandit shot still flexible in presentation. |
| *Rescued by Rover* | 1905 | Anchor Film | **USE_EXISTING** | Repeated routes, stable geography, causal order and replacement/re-shot version history as spatial continuity becomes more systematic. |

These six cases already cover major parts of the chapter. Chapter 3 therefore does **not** produce another film merely because it is famous or often appears in histories of editing.

## Materialized Chapter 3 case

### *Grandma's Reading Glass* (1900) — G. A. Smith

**Decision: USE_EXISTING — materialized from P0.**

Canonical scenario: `scenario_grandmas_reading_glass_1900`.

The playable case preserves the documented looking sequence:

1. newspaper
2. watch mechanism
3. canary
4. grandmother's eye
5. kitten/cat

A stable domestic base view alternates with circularly masked magnified inserts. The production problem is not merely “use close-ups”; it is to make each scale change intelligible through the boy's act of looking and the reading glass as an optical motivation.

The Film Study profile covers all 17 areas and the global Production Verification registry exposes the case at runtime. Source control combines BFI, Screen Archive South East, the Warwick catalogue description preserved in an apparatus record, specialist early-cinema biography, the National Science and Media Museum and modern scholarship including Elena Dagrada's work on early represented gaze.

The case is permanently protected against two simplifications:

- Smith is not presented as the single inventor of the close-up, POV or editing.
- the film's 1900 gaze construction is not treated as automatically identical to later classical character-subjective POV grammar.

## Exact new Production Case recommendation remaining

### P0 — required anchor

1. **The Lonely Villa (1909) — D. W. Griffith / Biograph**
   - The Library of Congress preserves the film and its production metadata; the rescue plot links the threatened family, the absent husband and the approaching rescuers.
   - It supplies the missing later-period bridge between the 1900–1905 foundations already in Atlas and the increasingly systematic parallel narrative organization of the Biograph period.
   - The case must explicitly say Griffith did **not** invent cross-cutting. It is an anchor for consolidation and intensification, not an invention myth.
   - **Decision: P0.**

### P1 — required comparative cases

1. **Attack on a China Mission – Bluejackets to the Rescue (1900) — James Williamson**
   - BFI records two versions: an initial single-camera-position version and a later expanded version with added opening scenes plus a reverse view of the rescue inserted into the action.
   - This makes version history itself part of the formal evidence: connected space was actively revised rather than appearing as one immutable “first.”
   - The case requires explicit contextualization of its racist/colonial representation of the Boxer Rebellion; formal innovation must not neutralize the ideology of the staged material.
   - **Decision: P1.**

2. **Histoire d’un crime (1901) — Ferdinand Zecca / Pathé**
   - La Cinémathèque française preserves the film in its early-French-cinema record, while Pathé institutional history supplies company context.
   - The crime, imprisonment, recollected/dreamed past and execution make narrative **time** the distinct gameplay contribution. The film is useful because Chapter 3 must not become only a history of spatial continuity and chases.
   - The book should describe it as an early and important experiment in represented memory/nonlinear organization, not assert an uncontested “first flashback” claim.
   - **Decision: P1.**

**Exact required new Chapter 3 Production Cases remaining: 3.**

P0:
- `The Lonely Villa (1909)`

P1:
- `Attack on a China Mission - Bluejackets to the Rescue (1900)`
- `Histoire d'un crime (1901)`

## P2 — book-reference-only films

These films remain important to the chapter but do not currently justify another Production Case.

### *Cendrillon* (1899) — Georges Méliès
La Cinémathèque française identifies the 1899 *Cendrillon* as one of Méliès’s early multiple-tableau films. It gives the book an early sustained staged-fantasy comparison, but the Atlas already has the more substantial *A Trip to the Moon* case for Méliès production, tricks and tableau construction.

### *Stop Thief!* (1901) — James Williamson
BFI describes its clear three-shot structure as evidence of increasingly complex storytelling and an early chase. That makes it a strong book example, but *Fire!*, *The Great Train Robbery* and *Rescued by Rover* already provide richer playable cases for linked action, chase logic and route continuity.

### *Mary Jane’s Mishap* (1903) — G. A. Smith
Screen Archive South East preserves the 1903 film and its production/cast record. Its movement between broader staging and closer views is useful for showing analytical editing becoming less dependent on explicit point-of-view masking, but *Grandma's Reading Glass* now supplies the distinct playable viewpoint case.

### *The Lonedale Operator* (1911) — D. W. Griffith / Biograph
MoMA describes the film as a 97-shot suspense construction using parallel editing. It is an excellent end-of-period comparison for the increasing density and confidence of narrative organization. Once *The Lonely Villa* is materialized as the Biograph P0 anchor, however, a second Griffith rescue/suspense Production Case would add less new gameplay value than book-level comparison.

P2 remains outside the Production Case queue unless a later explicit value/source audit changes the decision.

## Historical objects and practices — not Production Cases

- **Magic-lantern and theatrical tableau traditions** — contextual antecedents, not films to fabricate into Film Atlas.
- **Film catalogues, synopses and shot descriptions** — evidence for intended action/order and sales framing.
- **Paper-print copyright deposits** — essential evidence for reconstructing original American film structures.
- **Intertitles, lecturers and other narrative framing** — story information could still exist outside photographed dramatic action.
- **Remakes, replacement negatives and re-edited versions** — version history must remain visible when surviving forms differ.
- **Editing conventions themselves** — POV inserts, analytical cutting, scene linkage and parallel editing are methods learned through films, not standalone fake productions.

## Historiographic safeguards

1. Do not claim that one film or filmmaker invented editing, continuity, the close-up, POV or cross-cutting.
2. Do not narrate tableau staging and attraction as defective forms waiting to become classical continuity.
3. Do not treat a later re-edit of *Life of an American Fireman* as Porter’s original 1903 cross-cut structure.
4. Do not describe *The Great Train Robbery* as the invention of narrative editing or force its bandit shot into one fixed canonical position.
5. Do not describe *Rescued by Rover* as the invention of continuity; preserve its repeated-route strengths and replacement-version history.
6. Do not turn BFI’s description of *Grandma's Reading Glass* into an uncontested “first POV shot” claim. Its value is the demonstrable look/object/return relation.
7. Do not equate the early represented gaze in *Grandma's Reading Glass* wholesale with later classical subjective POV grammar.
8. Preserve the two-version evidence for *Attack on a China Mission* rather than collapsing the later expanded construction into a timeless original.
9. Formal analysis of *Attack on a China Mission* must include its racist/colonial Boxer-Rebellion representation instead of treating ideology as irrelevant to film form.
10. Describe *Histoire d’un crime* as an early experiment in represented memory/nonlinear narrative rather than assert a universal first-flashback claim.
11. Do not credit Griffith with inventing cross-cutting. *The Lonely Villa* and *The Lonedale Operator* belong inside a broader international development of multi-shot and parallel construction.
12. Do not make the chapter Britain/United States only: Pathé/Zecca and Méliès remain part of the argument, while Chapter 5 will broaden prewar international industry further.
13. Treat archival survival and version history as evidence constraints, not minor footnotes.

## Source control for the gap decision

The gap matrix and materialized Grandma case are grounded primarily in institutional/archive/scholarly sources:

- British Film Institute, *Grandma's Reading Glass* — exact film and perspective/POV description.
- British Film Institute, *Inventing Film Language* — broader developmental context.
- Screen Archive South East, *Grandma's Reading Glass* — Smith credit and complete object sequence.
- Elena Dagrada / University of Bologna Research Archive — early represented gaze and the distinction from later classical subjective POV.
- British Film Institute, *Attack on a China Mission – Bluejackets to the Rescue* — version-history evidence.
- British Film Institute, *Stop Thief!* — three-shot chase comparison.
- Screen Archive South East, *Mary Jane’s Mishap; or, Don’t Fool with the Paraffin* — Smith comparison.
- La Cinémathèque française — Méliès and early French silent-film material including *Histoire d’un crime*.
- Fondation Jérôme Seydoux-Pathé — Pathé institutional history.
- Library of Congress, *The Lonely Villa* — preserved film/metadata.
- Museum of Modern Art, *The Lonedale Operator* — later parallel-editing comparison.
- Library of Congress, *The Great Train Robbery* — canonical Porter comparison.

Individual remaining Production Cases must still perform their own deeper source triangulation before materialization. The chapter audit decides **which films are worth producing**; it does not substitute for per-film Production Verification.

## Current Chapter 3 gap

At the 388-film baseline:

- **USE_EXISTING = 6**
- **P0 = 1**
- **P1 = 2**
- **P2 = 4**
- **Required new Production Cases = 3**

The next production order is therefore:

1. **P0 — The Lonely Villa (1909)**
2. **P1 — Attack on a China Mission – Bluejackets to the Rescue (1900)**
3. **P1 — Histoire d’un crime (1901)**

After each materialization, this report and the executable audit must move that exact film from P0/P1 to `USE_EXISTING`, increment the Atlas count only when the scenario really exists, increment runtime verification only when the case is globally registered, and preserve all prior Chapter 1–2 invariants.
