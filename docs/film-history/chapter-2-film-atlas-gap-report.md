# Film History Chapter 2 — Film Atlas Gap Report

## Scope

Chapter 2 is **Projection, programmes and audiences**. It asks how moving pictures became a repeatable public experience through projection, exhibitors, programme construction, showmanship, event cinema, publicity, local commissioning and audience formation.

The executable audit is `scripts/film-history-chapter-two-atlas-audit.mjs` and is part of `npm run verify:v0.1`.

## Chapter thesis

> Cinema became a mass medium not only because films could be made, but because exhibitors assembled programmes, adapted presentation to particular venues and cultivated audiences whose demand reshaped production and distribution.

## Atlas control

- Canonical playable Atlas after the Chapter 2 P0 materialization: **385 films**.
- The audit reconstructs the seed plus all canonical expansion modules in runtime order, including `chapterTwoExhibitionExpansion.ts`.
- Ambiguous matches are a hard failure.
- The exact P0/P1/P2/USE_EXISTING title sets are permanently locked.
- `The Corbett–Fitzsimmons Fight (1897)` must resolve to `scenario_the_corbett_fitzsimmons_fight_1897`.

## Existing Atlas cases to reuse

| Film | Year | Chapter role | Atlas decision | Why it belongs here |
| --- | ---: | --- | --- | --- |
| *Workers Leaving the Lumière Factory* | 1895 | Anchor Film | **Use existing case** | Connect Lumière production to projected-programme history and collective exhibition. |
| *The Corbett–Fitzsimmons Fight* | 1897 | Anchor Film | **Use existing case** | Proprietary Veriscope capture/projection, full-event duration, live commentary, territorial rights and ticket economics make production and exhibition one system. |
| *A Trip to the Moon* | 1902 | Comparative Film | **Use existing case** | International circulation and programme value show the commercial afterlife of an exportable attraction film. |
| *The Great Train Robbery* | 1903 | Comparative Film | **Use existing case** | Flexible presentation of the bandit shot demonstrates exhibitor agency over the projected programme. |

## P0 — complete

The Chapter 2 P0 backlog is now **0**. *The Corbett–Fitzsimmons Fight* has been materialized as the chapter's event-cinema Anchor Film.

The case permanently preserves these safeguards:

- Rector/Stuart/Veriscope original production is distinct from Sigmund Lubin's later facsimile reproduction.
- William A. Brady is not credited as producer of the original merely because later catalog records conflate the histories; Library of Congress attribution controls the canonical case.
- The proprietary wide format and Veriscope projector are treated as both technical and business constraints.
- Live expert commentary belongs to exhibition performance, not synchronized production sound.

## P1 — exactly two Production Cases remain

### *Employees Leaving Brown's Atlas Works, Sheffield* (1901)

Mitchell & Kenyon's local-film practice makes audience targeting visible inside the production itself. The workers are deliberately marshalled past the camera; travelling exhibitors commissioned local films so the same communities would later pay to see themselves, relatives and neighbours. This is a distinct case about **commissioning for a known local audience**, not merely another factory-gate actuality.

### *Uncle Josh at the Moving Picture Show* (1902)

This Edison/Porter comedy stages a spectator, projected images, a screen and the operator behind it. Its value is precisely that it lets the chapter distinguish **historical audience practice from comic constructions of the naïve spectator**. The case can make the film-within-film, projection-space staging and spectator performance playable without using fiction as documentary proof of real audience panic.

**Important number: exactly 2 new Chapter 2 Production Cases remain.**

Production order:

1. **Employees Leaving Brown's Atlas Works, Sheffield (1901)**
2. **Uncle Josh at the Moving Picture Show (1902)**

## P2 — book reference only; do not automatically build Production Cases

- *May Irwin Kiss* (1896)
- *Sedgwick's Bioscope Showfront at Pendlebury Wakes* (1901)

These remain outside the Production Case queue. Their historical value is real, but the current audit finds insufficient marginal gameplay/production-system value to justify standalone Atlas cases.

## Historical objects and practices — explicitly not Production Cases

- Lumière Grand Café programme, 28 December 1895.
- Vitascope / Koster and Bial's Music Hall exhibition, 23 April 1896.
- Vitascope publicity and exhibitor advertising.
- Edison film catalogues and exhibitor-selected sequencing of short subjects.
- Music hall / vaudeville exhibition as a mixed bill.
- Fairground and travelling bioscope showfronts.
- Lecturer/live commentary and musical accompaniment where source-backed.
- Nickelodeon storefront exhibition and frequent low-cost screenings from the mid-1900s.

## Historiographic safeguards

1. Do not treat one famous screening as the universal birth of cinema.
2. Do not treat early films as fixed modern feature texts; exhibitors could select and sequence short subjects.
3. Do not infer real audience behaviour from comic spectator films such as *Uncle Josh*.
4. Do not make exhibition technology an Edison-only story.
5. Do not call local actualities transparent documentary records; local-film commissions could deliberately arrange crowd movement for later recognition.
6. Do not project the nickelodeon backward onto the entire 1895–1905 period.
7. Do not force programmes, projectors, posters, showfronts or theatre interiors into Film Atlas as fake film productions.
8. Do not collapse *The Corbett–Fitzsimmons Fight* into Lubin's later reproduction or use conflicting secondary catalogue credits to overwrite the better-supported original-production record.

## Exact recommendation after P0

The original Chapter 2 audit recommended **3** new Production Cases. One is complete.

The exact remaining recommendation is now **2 new Production Cases**:

- **P1 — *Employees Leaving Brown's Atlas Works, Sheffield* (1901)**
- **P1 — *Uncle Josh at the Moving Picture Show* (1902)**

P2 remains book-reference-only.
