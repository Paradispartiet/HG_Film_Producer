# Film History Chapter 4 – Film Atlas gap report

## Scope

**Chapter 4: Companies, patents and the feature transition (1905–1914)**

This audit separates film Production Cases from the industrial systems that made longer and more regular production possible. The chapter is about the reorganization of production, distribution and exhibition through film exchanges, rental, permanent theatres, patent/licensing systems, company consolidation, independent competition and the transition toward multi-reel features.

Canonical Atlas baseline for this audit: **391 playable films**.

## Decision matrix

### USE_EXISTING

1. **Rescued by Rover (1905)** → `scenario_rescued_by_rover_1905`
   - Reused as a comparative case for company-scale repeatability and replacement-negative history.
   - No duplicate Production Case should be created.

2. **The Lonely Villa (1909)** → `scenario_the_lonely_villa_1909`
   - Reused as a comparative case for Biograph-era studio/location workflow inside a rapidly consolidating company system.
   - No duplicate Production Case should be created.

### P0 – must be produced

1. **The Story of the Kelly Gang (1906)**
   - Required anchor for the feature-length transition.
   - Production value: exhibitor-producers, multi-reel scale, location production, touring circulation and the economics of sustaining an hour-long dramatic attraction.
   - Preservation value: surviving fragments must not be silently presented as a complete surviving original.
   - Planned canonical scenario ID: `scenario_the_story_of_the_kelly_gang_1906`.

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

1. **Feature length is not a single-inventor story.** *The Story of the Kelly Gang* is an essential early feature-length landmark, but Chapter 4 must describe a broader transition in length, production and circulation rather than claiming that one film invented the feature.
2. **Preservation status is part of the evidence.** Only fragments of *The Story of the Kelly Gang* survive; reconstructed/restored material must not be described as an intact original print.
3. **Patents are industrial history, not Edison hero/villain shorthand.** The chapter must distinguish litigation, licensing, the Association of Edison Licensees, the MPPC and the General Film Company rather than collapsing them into one vague “Trust”.
4. **Rental and exchanges matter structurally.** The transition from print sales toward exchange/rental systems changed programme supply and helped permanent theatres operate continuously.
5. **Feature transition changed risk.** Longer films concentrated cost and booking risk in one title and altered the relationship among producer, distributor and exhibitor.
6. **International pressure stays visible.** European and Australian feature-scale production influenced the American transition; Chapter 4 must not be written as an isolated U.S.-only evolution.
7. **Chapter 4 must not steal Chapter 5's audit.** `Quo Vadis?` and `Cabiria` remain P2/book-only here until the international-cinema chapter decides their Production Case priority.

## Source basis for the audit

- National Film and Sound Archive of Australia, **The Story of the Kelly Gang**: identifies the 1906 production as an over-hour Australian film, documents exhibitor-producer collaboration, touring success, restoration and fragmentary survival.  
  https://www.nfsa.gov.au/stories/articles/story-kelly-gang
- NFSA collection/professional records for **The Story of the Kelly Gang**: surviving fragment, original five-reel/approximately 4,000-foot scale, location work and presentation context.  
  https://pro.nfsa.gov.au/titles/RSKFBH59
- British Film Institute, **The Story of the Kelly Gang (1906)**.  
  https://www.bfi.org.uk/film/e8572cbd-21d7-593c-9ca5-7364ea3fc6e6/the-story-of-the-kelly-gang
- Library of Congress, **Fictional Films Dominate**: Edison litigation, Association of Edison Licensees and formation of the Motion Picture Patents Company in December 1908.  
  https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/fictional-films-dominate/
- Library of Congress, **American Silent Feature Film Database**: feature-era production-company context and preservation infrastructure.  
  https://www.loc.gov/programs/national-film-preservation-board/preservation-research/silent-film-database/
- Museum of Modern Art, **Modern Matinees: Iris Barry's History of Film**: *Queen Elizabeth* (1912) and the role of its success, alongside *Quo Vadis?*, in establishing the longer feature.  
  https://www.moma.org/calendar/events/5818
- British Film Institute / Sight and Sound, **The long take: Great footage**: Kelly as an early feature-length outlier, European multi-reel features, *Traffic in Souls* and the commercial uncertainty around longer films by 1914.  
  https://www.bfi.org.uk/sight-and-sound/features/long-take-great-footage

## Exact production queue

The Chapter 4 Atlas queue is intentionally explicit:

1. **P0 – The Story of the Kelly Gang (1906)**
2. **P1 – Queen Elizabeth (1912)**
3. **P1 – Traffic in Souls (1913)**

Do **not** auto-produce the P2 titles.

## Completion rule

Chapter 4 Atlas is not complete until:

- `The Story of the Kelly Gang` exists as a verified canonical Production Case;
- `Queen Elizabeth` exists as a verified canonical Production Case;
- `Traffic in Souls` exists as a verified canonical Production Case;
- the two existing cases resolve to their exact canonical scenario IDs;
- P2 remains explicitly book-only;
- historical objects remain `NO_PRODUCTION_CASE`;
- the permanent Chapter 4 audit passes inside `verify:v0.1`.

At this audit baseline the expected decision counts are:

- **USE_EXISTING: 2**
- **P0: 1**
- **P1: 2**
- **P2: 3**
- **NO_PRODUCTION_CASE historical objects/systems: 7**
