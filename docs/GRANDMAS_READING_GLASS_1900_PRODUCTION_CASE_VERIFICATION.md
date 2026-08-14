# Grandma's Reading Glass (1900) — Production Case verification

Verification date: **2026-08-14**

Canonical scenario: `scenario_grandmas_reading_glass_1900`

## Why this film is a Production Case

*Grandma's Reading Glass* fills a distinct Chapter 3 gap that the existing early-cinema cases did not isolate: **how a character's act of looking can motivate a change of shot scale and create a legible relation between a wider scene and inserted details**.

The case is not built around the slogan “the first close-up” or “the first POV shot.” Its value is the documented construction itself.

A stable domestic view of a boy and his grandmother alternates with circularly masked magnified inserts as the boy uses the reading glass. The preserved sequence is:

1. newspaper
2. watch mechanism
3. canary
4. grandmother's eye
5. kitten/cat

The player therefore has to build a **look → magnified object → return** system rather than use generic modern close-up coverage.

## Canonical scenario contract

- **Year:** 1900
- **Title type:** Short
- **Runtime model:** 1 minute
- **Maker:** G. A. Smith
- **Genres:** Fiction / Short
- **Scenario type:** `character_drama_production`
- **Expansion:** `manual_chapter_three_narrative_expansion_2026`
- **Manual enrichment remaining:** none

The scenario's required choices lock:

- the documented object order
- a stable grandmother-and-boy base view
- magnified insert views
- circular masking as optical motivation
- a look/object/return editing pattern
- separation of original silent production from later accompaniment
- historiographic restraint around “first” claims

## Film Study coverage

The source-backed Film Study profile is registered in `scenarioFilmStudySilentFoundationsBatch.ts` and resolves through the normal runtime Film Study path.

The dedicated test requires:

- **17/17 Film Study areas**
- at least **9 source-verified areas**
- a runtime `verified` Production Verification record
- at least seven source records and broad publisher diversity
- exact presence of newspaper, watch, canary, grandmother's eye and kitten/cat
- circular-mask/viewpoint evidence
- explicit anti-single-inventor language
- explicit distinction between this early represented gaze and later classical subjective POV grammar

## Production Verification sources

The runtime verification record triangulates the case with multiple kinds of evidence rather than relying on one catalogue entry.

### British Film Institute — exact film

BFI identifies the film as a 1900 silent G. A. Smith fiction of roughly one minute and describes its perspective play through the boy's magnifying glass. This anchors film identity, duration and the key visual relation.

### BFI National Archive — *Inventing Film Language*

The collection places the film among a broader field of Victorian experiments with close-ups, editing, continuity and effects. This is important because the case must remain developmental rather than become a single-inventor story.

### Screen Archive South East

The regional archive independently credits George Albert Smith and describes the full sequence of newspaper, watch mechanism, canary, grandmother's eye and cat, tied to the boy's use of the magnifying glass.

### Warwick Trading Company catalogue description

A period Warwick catalogue description, preserved in the documentation of an Alfred Darling cinematographic camera associated with Smith, supplies a historical commercial description of the circularly masked views and their sequence. It is used as period evidence, not as the sole authority for formal interpretation.

### *Who's Who of Victorian Cinema* — George Albert Smith

The specialist early-cinema biography establishes Smith's Brighton production context and documents the importance of interpolated close views and relations between subjective and objective viewpoints in his work around 1900.

### Elena Dagrada / University of Bologna Research Archive

Dagrada's scholarship is used for a crucial historical distinction: early represented-gaze inserts should not simply be treated as already identical to later classical character-subjective POV. This makes the case more precise rather than less important.

### BFI — *Aunt Selina*

BFI's discussion of Smith's related Brighton work supplies further context for Warwick-era production and for the history of “invented the close-up” claims, while emphasizing the concrete expressive function of closer views.

### National Science and Media Museum — George Albert Smith

The museum biography independently confirms Smith's role as filmmaker and technical experimenter. It supports maker context rather than being used to prove the exact shot sequence.

## Historiographic safeguards

The Production Case must not state or imply that:

- G. A. Smith single-handedly invented the close-up;
- *Grandma's Reading Glass* single-handedly invented POV editing;
- the film represents the single birth of editing;
- its circular magnified inserts function exactly like every later classical subjective POV shot;
- a modern synchronized soundtrack is part of the original 1900 production.

Instead, the case teaches a demonstrable historical achievement: **a series of radical scale changes becomes intelligible because the film repeatedly connects a character's looking action, an optical prop and an enlarged insert back to a stable surrounding scene**.

## Runtime integration

The case is complete only because all of these layers are wired together:

- `src/core/chapterThreeNarrativeExpansion.ts`
- `src/ui/data/filmScenarios.ts`
- `src/ui/data/scenarioFilmStudySilentFoundationsGrandmasReadingGlass.ts`
- `src/ui/data/scenarioFilmStudySilentFoundationsBatch.ts`
- `src/ui/data/scenarioProductionVerificationGrandmasReadingGlass.ts`
- `src/ui/data/scenarioProductionVerificationRegistry.ts`
- `src/ui/data/scenarioFilmStudyGrandmasReadingGlass.test.ts`
- global Production Verification count test
- full Production Case rest audit
- Film History Chapter 1–3 Atlas audits

A profile file by itself is not considered completion.

## Count transition

Before this case:

- playable Film Atlas: **387**
- runtime source-verified Production Cases: **380**
- Chapter 3 P0: **2**
- Chapter 3 P1: **2**

After this case:

- playable Film Atlas: **388**
- runtime source-verified Production Cases: **381**
- Chapter 3 P0: **1**
- Chapter 3 P1: **2**

Exact Chapter 3 Production Cases still required:

1. **The Lonely Villa (1909)** — P0
2. **Attack on a China Mission – Bluejackets to the Rescue (1900)** — P1
3. **Histoire d'un crime (1901)** — P1

The P2/book-only set remains unchanged: *Cendrillon*, *Stop Thief!*, *Mary Jane's Mishap* and *The Lonedale Operator*.
