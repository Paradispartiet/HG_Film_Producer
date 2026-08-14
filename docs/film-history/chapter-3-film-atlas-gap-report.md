# Film History Chapter 3 — Film Atlas Gap Report

## Scope

Chapter 3 is **From views to stories (1896–1912)**. It asks how filmmakers moved from single-view staging and attraction toward more systematic relationships among shots: point of view, analytical inserts, linked spaces, causal routes, represented memory and parallel action.

The executable audit is `scripts/film-history-chapter-three-atlas-audit.mjs` and is part of `npm run verify:v0.1`.

The chapter does **not** assume a clean evolutionary ladder in which primitive tableaux are replaced by a single mature form. Trick film, direct address, tableau staging and attraction continue while narrative organization becomes more systematic. It also rejects any claim that one filmmaker or one title simply “invented editing,” continuity, the close-up, POV or cross-cutting.

## Current audit baseline

- Canonical playable Film Atlas: **389 films**.
- Runtime source-verified Production Cases: **382**.
- The complete Atlas is reconstructed from the canonical seed plus every registered expansion in runtime order, including `chapterThreeNarrativeExpansion.ts`.
- Matching uses title, original title, aliases and year after normalization.
- Multiple matches are a hard failure.
- Canonical Chapter 3 cases with an expected scenario ID must resolve to that exact ID.

The baseline increased from 388 to 389 when *The Lonely Villa (1909)* was fully materialized as `scenario_the_lonely_villa_1909`. Chapter 3's P0 backlog is now empty.

## Existing Atlas cases reused by Chapter 3

| Film | Year | Chapter role | Atlas decision | Distinct chapter function |
| --- | ---: | --- | --- | --- |
| *Grandma's Reading Glass* | 1900 | Anchor Film | **USE_EXISTING** | Motivated magnified inserts, analytical shot relation and an early represented gaze; no single-inventor or anachronistic classical-POV claim. |
| *Fire!* | 1901 | Anchor Film | **USE_EXISTING** | Connected multi-shot action and constructed rescue space without calling Williamson the inventor of continuity. |
| *A Trip to the Moon* | 1902 | Anchor Film | **USE_EXISTING** | Multiple tableaux, theatrical staging, transformation effects and sustained fantasy construction; tableau remains a valid form. |
| *Life of an American Fireman* | 1903 | Comparative Film | **USE_EXISTING** | Original repeated rescue action plus the later cross-cut re-edit historiography. |
| *The Great Train Robbery* | 1903 | Anchor Film | **USE_EXISTING** | Causal multi-scene action across studio and locations, with the direct-address bandit shot still flexible in presentation. |
| *Rescued by Rover* | 1905 | Anchor Film | **USE_EXISTING** | Repeated routes, stable geography, causal order and replacement/re-shot version history. |
| *The Lonely Villa* | 1909 | Anchor Film | **USE_EXISTING** | Sustained parallel suspense among threatened family, burglars and the husband/police rescue, with telephone communication linking separated spaces. Griffith is treated as a consolidator, not inventor, of cross-cutting. |

## Materialized Chapter 3 P0 cases

### *Grandma's Reading Glass* (1900) — G. A. Smith

Canonical scenario: `scenario_grandmas_reading_glass_1900`.

The playable case preserves the documented newspaper → watch mechanism → canary → grandmother's eye → kitten sequence and makes look → magnified object → return the core production problem. Its Film Study profile covers all 17 areas and its runtime verification triangulates institutional, archival and scholarly evidence. It permanently rejects both a single-inventor myth and the assumption that its early represented gaze is identical to later classical subjective POV.

### *The Lonely Villa* (1909) — D. W. Griffith / Biograph

Canonical scenario: `scenario_the_lonely_villa_1909`.

The playable case is organized around three simultaneous action lines:

1. the threatened family inside the villa;
2. burglars forcing entry;
3. the husband moving from a disabled automobile toward police-assisted rescue.

The telephone acts as both story device and formal bridge between separated spaces; cutting the line is a dramatic and structural rupture. Library of Congress and AFI evidence anchors the 1909 Biograph production, Fort Lee and New York studio filming, Bitzer/Marvin camera work, paper-print survival and the de Lorde *Au Téléphone* adaptation. Tom Gunning and university-press scholarship provide the historiographic control: the film is an important consolidation of sustained parallel narrative, not proof that Griffith invented cross-cutting.

## Exact new Production Case recommendation remaining

### P0

**Empty. 2/2 P0 cases are complete.**

### P1 — required comparative cases

1. **Attack on a China Mission – Bluejackets to the Rescue (1900) — James Williamson**
   - BFI records two versions: an initial single-camera-position version and a later expanded version with added opening scenes plus a reverse view of the rescue inserted into the action.
   - This makes version history itself part of the formal evidence: connected space was actively revised rather than appearing as one immutable “first.”
   - The case requires explicit contextualization of its racist/colonial representation of the Boxer Rebellion; formal innovation must not neutralize the ideology of the staged material.
   - **Decision: P1.**

2. **Histoire d’un crime (1901) — Ferdinand Zecca / Pathé**
   - La Cinémathèque française preserves the film in its early-French-cinema record, while Pathé institutional history supplies company context.
   - The crime, imprisonment, recollected/dreamed past and execution make narrative **time** the distinct gameplay contribution.
   - The book should describe it as an early and important experiment in represented memory/nonlinear organization, not assert an uncontested “first flashback” claim.
   - **Decision: P1.**

**Exact required new Chapter 3 Production Cases remaining: 2.**

P1:
- `Attack on a China Mission - Bluejackets to the Rescue (1900)`
- `Histoire d'un crime (1901)`

## P2 — book-reference-only films

- *Cendrillon* (1899) — useful Méliès multi-tableau comparison; *A Trip to the Moon* already carries the stronger playable Méliès case.
- *Stop Thief!* (1901) — useful three-shot chase comparison; existing cases already cover connected action and route continuity more deeply.
- *Mary Jane's Mishap* (1903) — useful G. A. Smith analytical-editing comparison; *Grandma's Reading Glass* carries the distinct viewpoint gameplay.
- *The Lonedale Operator* (1911) — valuable later Biograph comparison for denser parallel editing; *The Lonely Villa* now carries the playable Griffith/Biograph anchor.

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
3. Do not treat a later re-edit of *Life of an American Fireman* as Porter's original 1903 cross-cut structure.
4. Do not describe *The Great Train Robbery* as the invention of narrative editing or force its bandit shot into one fixed canonical position.
5. Do not describe *Rescued by Rover* as the invention of continuity; preserve its repeated-route strengths and replacement-version history.
6. Do not turn BFI's description of *Grandma's Reading Glass* into an uncontested “first POV shot” claim.
7. Do not equate the early represented gaze in *Grandma's Reading Glass* wholesale with later classical subjective POV grammar.
8. Preserve the two-version evidence for *Attack on a China Mission* rather than collapsing the later expanded construction into a timeless original.
9. Formal analysis of *Attack on a China Mission* must include its racist/colonial Boxer-Rebellion representation instead of treating ideology as irrelevant to film form.
10. Describe *Histoire d'un crime* as an early experiment in represented memory/nonlinear narrative rather than assert a universal first-flashback claim.
11. Do not credit Griffith with inventing cross-cutting. *The Lonely Villa* belongs inside a broader international development of multi-shot and parallel construction.
12. Do not make the chapter Britain/United States only: Pathé/Zecca and Méliès remain part of the argument.
13. Treat archival survival and version history as evidence constraints, not minor footnotes.

## Source control

The gap matrix and materialized P0 cases are grounded primarily in institutional/archive/scholarly sources including BFI, Screen Archive South East, Library of Congress, AFI, MoMA, Oxford Academic/Screen, University of California Press, University of Illinois Press, La Cinémathèque française and Fondation Jérôme Seydoux-Pathé.

Individual remaining Production Cases must still perform their own deeper source triangulation before materialization. The chapter audit decides **which films are worth producing**; it does not substitute for per-film Production Verification.

## Current Chapter 3 gap

At the 389-film baseline:

- **USE_EXISTING = 7**
- **P0 = 0**
- **P1 = 2**
- **P2 = 4**
- **Required new Production Cases = 2**

The next production order is therefore:

1. **P1 — Attack on a China Mission – Bluejackets to the Rescue (1900)**
2. **P1 — Histoire d'un crime (1901)**

After each materialization, this report and the executable audit must move that exact film from P1 to `USE_EXISTING`, increment the Atlas count only when the scenario really exists, increment runtime verification only when the case is globally registered, and preserve all prior Chapter 1–2 invariants.
