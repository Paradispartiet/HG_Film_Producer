# Film History Chapter 2 — Film Atlas Gap Report

## Scope

Chapter 2 is **Projection, programmes and audiences**. The book plan deliberately separates this from Chapter 1's origin-of-the-medium problem and Chapter 3's later development from views toward more systematic storytelling.

The chapter therefore asks a different question: **how did moving pictures become a repeatable public experience?** Its centre of gravity is projection, exhibitors, programme construction, music hall/vaudeville and fairground showmanship, event cinema, publicity, local commissioning, audience behaviour and the rise of dedicated storefront exhibition.

The period necessarily overlaps Chapter 1. Projection and programme culture began before 1905; the nickelodeon boom then changes the institution rapidly after 1905. The chapter should follow that exhibition history without stealing Chapter 3's main task of explaining the development of narrative form.

The executable audit is `scripts/film-history-chapter-two-atlas-audit.mjs` and is part of `npm run verify:v0.1`.

## Chapter thesis

> Cinema became a mass medium not only because films could be made, but because exhibitors assembled programmes, adapted presentation to particular venues and cultivated audiences whose demand reshaped production and distribution.

This avoids treating a modern standalone film screening as the default model for the 1890s. In early projected cinema, the **programme and performance situation** could be as important as the individual film.

## Atlas control

- Canonical playable Atlas at the audit baseline: **384 films**.
- The audit reconstructs the seed plus all canonical expansion modules in runtime order.
- Matching uses scenario ID where required and normalized title/original-title/alias + year otherwise.
- Ambiguous matches are a hard failure.
- The expected P0/P1/P2/USE_EXISTING title sets are permanently locked.

## Existing Atlas cases to reuse

| Film | Year | Chapter role | Atlas decision | Why it belongs here |
| --- | ---: | --- | --- | --- |
| *Workers Leaving the Lumière Factory* | 1895 | Anchor Film | **Use existing case** | Connect the Lumière production to projected programme history and the shift from individual viewing toward collective exhibition. |
| *A Trip to the Moon* | 1902 | Comparative Film | **Use existing case** | International circulation and programme value make an already-built attraction film useful for discussing distribution and exhibition demand. |
| *The Great Train Robbery* | 1903 | Comparative Film | **Use existing case** | The direct-address bandit shot's flexible placement is a concrete reminder that exhibitors retained presentation agency rather than merely playing a fixed modern text. |

## P0 — must be produced

### *The Corbett–Fitzsimmons Fight* (1897)

This is the chapter's strongest missing Anchor Film because production, apparatus, distribution and exhibition were designed as one system. Library of Congress records the full fight as roughly feature length for its period, shot in a proprietary format, requiring the special Veriscope projector, exhibited with live expert commentary and distributed through territorial arrangements. Its commercial success makes it unusually valuable for teaching that early cinema history is also a history of **tickets, rights, hardware control and event presentation**.

Primary institutional source:
- Library of Congress — `https://www.loc.gov/item/2023602024/`

## P1 — should be produced

### *Employees Leaving Brown's Atlas Works, Sheffield* (1901)

Mitchell & Kenyon's local-film practice makes audience targeting visible inside the production itself. The workers are deliberately marshalled past the camera; the larger Mitchell & Kenyon collection documents travelling exhibitors commissioning films so local people would later pay to see themselves, relatives and neighbours. This creates a distinct Production Case about **commissioning for a known local audience**, not merely another factory-gate actuality.

Primary institutional sources:
- BFI Player / BFI Replay — `https://player.bfi.org.uk/free/film/watch-employees-leaving-browns-atlas-works-sheffield-1901-1901-online`
- BFI Mitchell & Kenyon collection — `https://replay.bfi.org.uk/collection/430`

### *Uncle Josh at the Moving Picture Show* (1902)

This Edison/Porter comedy stages a spectator, projected images, a screen and the operator behind it. It is valuable not because its fictional audience should be mistaken for documentary evidence, but precisely because it lets the chapter distinguish **historical audience practice from comic constructions of the naïve spectator**. The Production Case can make the film-within-film, projection-space staging and spectator performance playable.

Primary institutional source:
- Library of Congress — `https://www.loc.gov/item/00694324/`

## P2 — book reference only; do not automatically build Production Cases

### *May Irwin Kiss* (1896)

The film is historically useful for vaudeville celebrity, newspaper promotion and Vitascope popularity. Library of Congress identifies it as an 1896 Black Maria production and records its extraordinary popularity. But at roughly eighteen seconds, its production system overlaps heavily with existing Edison/Black Maria material. For this chapter the marginal Atlas value does not justify a standalone Production Case.

Primary institutional source:
- Library of Congress — `https://www.loc.gov/item/00694131/`

### *Sedgwick's Bioscope Showfront at Pendlebury Wakes* (1901)

This is exceptionally valuable evidence of a fairground cinematograph show, warm-up performance, audience solicitation, repeated daily screenings and Mitchell & Kenyon's relationship with travelling exhibitors. Its chapter function is primarily to document **the exhibition environment itself**. It should therefore remain a book reference/historical object unless a later gameplay review finds a genuinely distinct production simulation.

Primary institutional source:
- BFI Replay — `https://replay.bfi.org.uk/video/227/23391d66-35e9-512a-8271-311d28f601aa`

## Historical objects and practices — explicitly not Production Cases

The chapter also needs objects that should not be forced into the Film Producer scenario schema:

- Lumière Grand Café programme, 28 December 1895.
- Vitascope / Koster and Bial's Music Hall exhibition, 23 April 1896.
- Vitascope publicity poster and related exhibitor advertising.
- Edison film catalogues and exhibitor-selected sequencing of short subjects.
- Music hall / vaudeville exhibition as a mixed bill rather than a dedicated modern cinema show.
- Fairground and travelling bioscope showfronts.
- Lecturer/live commentary and musical accompaniment as performance layers where sources support them.
- Nickelodeon storefront exhibition and frequent low-cost screenings from the mid-1900s.

Library of Congress specifically documents that Vitascope and competing projectors entered vaudeville programmes, that exhibitors could select Edison films and sequence them as they wished, and that nickelodeons became a predominant exhibition venue after 1905.

Core institutional sources:
- `https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/shift-to-projectors-and-the-vitoscope/`
- `https://www.loc.gov/collections/variety-stage-sound-recordings-and-motion-pictures/articles-and-essays/content-and-historical-context/`

## Historiographic safeguards

1. **Do not treat one famous screening as the universal birth of cinema.** Chapter 1's multiple-origin safeguard remains in force.
2. **Do not treat early films as fixed modern feature texts.** Exhibitors could select, order and contextualize short subjects inside mixed programmes.
3. **Do not infer actual audience behaviour from comic spectator films.** *Uncle Josh* is evidence of a cultural joke about spectatorship, not proof that real audiences literally mistook projected trains for physical trains.
4. **Do not make exhibition technology an Edison-only story.** Vitascope competed with Lumière, Biograph, Eidoloscope/Kineopticon and other systems.
5. **Do not call local actualities transparent documentary records.** Mitchell & Kenyon/showman commissions could actively stage crowd movement to maximize later audience recognition.
6. **Do not project the nickelodeon backward onto the entire 1895–1905 period.** Vaudeville, music hall, fairground, town-hall and travelling exhibition systems precede and overlap dedicated storefront theatres.
7. **Do not force exhibition objects into Film Atlas.** Posters, programmes, projectors, showfronts and theatre interiors belong in the book's historical-object layer unless they genuinely represent a film production.

## Exact recommendation

The Chapter 2 audit recommends **exactly 3 new Production Cases**:

1. **P0 — *The Corbett–Fitzsimmons Fight* (1897)**
2. **P1 — *Employees Leaving Brown's Atlas Works, Sheffield* (1901)**
3. **P1 — *Uncle Josh at the Moving Picture Show* (1902)**

It does **not** recommend building *May Irwin Kiss* or *Sedgwick's Bioscope Showfront at Pendlebury Wakes* as standalone cases at this stage; those remain P2/book-reference material.

Production order after this audit is therefore:

**The Corbett–Fitzsimmons Fight → Employees Leaving Brown's Atlas Works, Sheffield → Uncle Josh at the Moving Picture Show.**
