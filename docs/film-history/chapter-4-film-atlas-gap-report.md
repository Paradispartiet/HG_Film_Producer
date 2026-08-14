# Film History Chapter 4 – Film Atlas gap report

## Scope

**Chapter 4: Companies, patents and the feature transition (1905–1914)**

This audit separates film Production Cases from the industrial systems that made longer and more regular production possible. The chapter is about the reorganization of production, distribution and exhibition through film exchanges, rental, permanent theatres, patent/licensing systems, company consolidation, independent competition and the transition toward multi-reel features.

Canonical Atlas baseline after the Kelly materialization: **392 playable films**.

## Decision matrix

### USE_EXISTING

1. **Rescued by Rover (1905)** → `scenario_rescued_by_rover_1905`
   - Reused as a comparative case for company-scale repeatability and replacement-negative history.

2. **The Lonely Villa (1909)** → `scenario_the_lonely_villa_1909`
   - Reused as a comparative case for Biograph-era studio/location workflow inside a rapidly consolidating company system.

3. **The Story of the Kelly Gang (1906)** → `scenario_the_story_of_the_kelly_gang_1906`
   - Materialized as the Chapter 4 feature-transition anchor.
   - Covers producer-exhibitor organization, multi-reel scale, location production, touring circulation and lecturer/live-effects exhibition while keeping photographed production silent.
   - Surviving fragments and later reconstruction/restoration remain explicitly distinct from the lost complete 1906 original.

### P0 – must be produced

**None.** The Chapter 4 P0 backlog is now closed.

### P1 – should be produced

1. **Queen Elizabeth (1912)** / *Les Amours de la reine Élisabeth*
   - Comparative case for prestige performance, imported multi-reel features and the distribution entrepreneurship that helped make longer films commercially viable in the United States.
   - Planned canonical scenario ID: `scenario_queen_elizabeth_1912`.

2. **Traffic in Souls (1913)**
   - Comparative case for early American feature economics, independent production and sustained feature booking around a contemporary sensational subject rather than a prestige literary adaptation.
   - Planned canonical scenario ID: `scenario_traffic_in_souls_1913`.

### P2 – book-only for Chapter 4

1. **L'Assassinat du duc de Guise (1908)**
   - Useful for Film d'Art, prestige culture and longer programmes, but does not need an additional Production Case for Chapter 4.

2. **Quo Vadis? (1913)**
   - Important evidence for imported European epic scale and the commercial pressure behind feature exhibition.
   - Keep book-only here because its strongest Production Case function belongs to the Chapter 5 international-cinema audit.

3. **Cabiria (1914)**
   - Important terminal comparison for spectacle, feature scale and international circulation at the Chapter 4/5 boundary.
   - Keep book-only here until Chapter 5 performs its own full Atlas audit.

## Historical objects and industry systems – NO_PRODUCTION_CASE

These are required chapter evidence but **must not** be converted into fake film Production Cases:

- **Film exchanges and print rental** – the shift from print sales toward rental distribution.
- **Nickelodeons and purpose-built theatres** – permanent venues and recurring programme demand.
- **Edison patent litigation and license agreements** – legal control over production and equipment before the patent pool.
- **Motion Picture Patents Company (MPPC)** – the 1908 patent/licensing pool tying producers, exchanges, theatres and film-stock supply together.
- **General Film Company** – consolidation of licensed exchanges and distribution power.
- **Independent producers and distributors** – the competing sector that challenged licensed-company control.
- **Multi-reel and feature booking practices** – longer films changed pricing, programme structure, touring, booking and risk.

## Historiographic safeguards

1. **Feature length is not a single-inventor story.** *The Story of the Kelly Gang* is an essential early feature-length landmark, but Chapter 4 describes a broader international transition in length, production and circulation rather than claiming that one film invented the feature.
2. **Preservation status is part of the evidence.** Only fragments of *The Story of the Kelly Gang* survive; reconstructed/restored material is not described as an intact original print.
3. **Patents are industrial history, not Edison hero/villain shorthand.** The chapter distinguishes litigation, licensing, the Association of Edison Licensees, the MPPC and the General Film Company rather than collapsing them into one vague “Trust”.
4. **Rental and exchanges matter structurally.** The transition from print sales toward exchange/rental systems changed programme supply and helped permanent theatres operate continuously.
5. **Feature transition changed risk.** Longer films concentrated cost and booking risk in one title and altered the relationship among producer, distributor and exhibitor.
6. **International pressure stays visible.** European and Australian feature-scale production influenced the American transition; Chapter 4 must not be written as an isolated U.S.-only evolution.
7. **Chapter 4 must not steal Chapter 5's audit.** `Quo Vadis?` and `Cabiria` remain P2/book-only here until the international-cinema chapter decides their Production Case priority.

## Source basis for the audit

- National Film and Sound Archive of Australia, **The Story of the Kelly Gang** – over-hour 1906 production, touring success, reconstruction and fragmentary survival.  
  https://www.nfsa.gov.au/stories/articles/story-kelly-gang
- NFSA Pro, **The Story of the Kelly Gang [1906] – Pordenone restoration** – roughly 4,000 feet/five reels, Heidelberg location work, lecturer/live-effects exhibition and incomplete surviving material.  
  https://pro.nfsa.gov.au/titles/RSKFBH59
- UNESCO Memory of the World, **The Story of the Kelly Gang (1906)** – Charles Tait, over-hour feature-scale production and surviving heritage material.  
  https://www.unesco.org/en/memory-world/story-kelly-gang-1906
- British Film Institute, **The Story of the Kelly Gang (1906)** – independent institutional identity/director cross-check.  
  https://www.bfi.org.uk/film/e8572cbd-21d7-593c-9ca5-7364ea3fc6e6/the-story-of-the-kelly-gang
- Library of Congress, **Fictional Films Dominate** – Edison litigation, licensing and formation of the Motion Picture Patents Company.  
  https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/fictional-films-dominate/
- Museum of Modern Art, **Modern Matinees: Iris Barry's History of Film** – *Queen Elizabeth* and the emergence of commercially viable longer features.  
  https://www.moma.org/calendar/events/5818
- British Film Institute / Sight and Sound, **The long take: Great footage** – feature-length transition context including *Traffic in Souls*.  
  https://www.bfi.org.uk/sight-and-sound/features/long-take-great-footage

## Exact production queue

The remaining Chapter 4 Atlas queue is intentionally explicit:

1. **P1 – Queen Elizabeth (1912)**
2. **P1 – Traffic in Souls (1913)**

Do **not** auto-produce the P2 titles.

## Completion rule

Chapter 4 Atlas is not complete until:

- `The Story of the Kelly Gang` remains a verified canonical Production Case at its exact scenario ID;
- `Queen Elizabeth` exists as a verified canonical Production Case;
- `Traffic in Souls` exists as a verified canonical Production Case;
- the two reused earlier cases continue to resolve to their exact canonical scenario IDs;
- P2 remains explicitly book-only;
- historical objects remain `NO_PRODUCTION_CASE`;
- the permanent Chapter 4 audit passes inside `verify:v0.1`.

After Kelly, the expected decision counts are:

- **USE_EXISTING: 3**
- **P0: 0**
- **P1: 2**
- **P2: 3**
- **NO_PRODUCTION_CASE historical objects/systems: 7**
