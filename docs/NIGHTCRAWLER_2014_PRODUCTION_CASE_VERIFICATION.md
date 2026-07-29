# Nightcrawler (2014) — Production Case verification

Verified on **2026-07-29**.

## Scope

This verification materializes the existing playable scenario `scenario_nightcrawler_2014`. It adds no film and does not change the imported scenario seed or the existing production brief.

## Production system

*Nightcrawler* is modeled as a post-recession Los Angeles local-news crime-image market built from:

- Dan Gilroy's Weegee and real-nightcrawler field research;
- Lou Bloom's self-invented entrepreneurial and media performance;
- ratings-driven local television that turns violent footage into inventory;
- Jake Gyllenhaal's gaunt, nocturnal and coyote-like physical design;
- Robert Elswit's hybrid Arri Alexa XT night and Kodak 35 mm day image system;
- available-light location selection across dozens of rapidly changing Los Angeles sites;
- a real former television station, a single built apartment set, cars, cameras, scanners and editing equipment;
- John Gilroy's taut Avid-based footage, sales and escalation rhythm;
- police scanners, engines, sirens, television playback and newsroom dialogue as spatial propulsion;
- James Newton Howard's deliberately optimistic and heroic score from Lou's own point of view.

The film is therefore not assigned through Los Angeles, crime genre, media criticism or an immoral protagonist alone. Its production logic joins field research, local-news economics, performance, nocturnal mobility, hybrid capture, evidence editing and subjective music into one system.

## Complete 17-area audit

| Status | Count | Areas |
|---|---:|---|
| `source_verified` | 15 | historical context; movement and tradition; industry and production context; reception and legacy; screenplay; directing; performance; production design; cinematography; lighting; camera format; editing; sound design; music; documentary method |
| `mapped` | 2 | costume and makeup; effects and animation |
| `not_central` | 0 | — |

Costume, makeup, hair, visual-effects, stunt and digital-intermediate departments are credited, but the inspected sources do not isolate sufficiently detailed Nightcrawler-specific processes for those two areas. Field research is source-verified rather than merely mapped because Gilroy, Gyllenhaal and Elswit rode with real nightcrawler Howard Raishbrook, retained him as technical adviser and transferred observed scanner codes, jargon, capture and sales procedure into the fiction.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. American Society of Cinematographers
2. Directors Guild of America
3. Film Comment
4. RTÉ
5. American Film Institute
6. Post Magazine
7. Academy of Motion Picture Arts and Sciences
8. Film Independent
9. Los Angeles Times
10. The Guardian

The sources cover the production companies and credits, directorial debut, screenplay construction, nightcrawler research, performance transformation, hybrid Alexa and 35 mm capture, practical-light strategy, locations and sets, Avid editorial workflow, scanner-led sound system, point-of-view score and awards history.

## Comparative donors

The playable history choices use this exact order:

1. `scenario_taxi_driver_1976`
2. `scenario_dog_day_afternoon_1975`
3. `scenario_clockers_1995`

### Taxi Driver

The closest comparison supplies a subjective nocturnal antihero, expressionist urban observation, mobile work, self-narration and music that binds the audience to a morally unstable protagonist. *Nightcrawler* transforms that New Hollywood system through digital cameras, freelance footage and entrepreneurial language.

### Dog Day Afternoon

The second comparison supplies crime reorganized by live media, public spectatorship, institutions and feedback between event and representation. *Nightcrawler* privatizes that feedback loop into local-news purchasing and a freelancer who manipulates what the station can show.

### Clockers

The third comparison supplies researched urban crime production, real locations, procedural evidence images and a camera system that makes social geography materially specific. *Nightcrawler* redirects field research and urban procedure toward the market for violent footage.

The donors are selected by production logic, not by nationality, city, crime label or antihero status alone.

## Integration

The profile is exposed through the existing `crime/noir transformations` resolver. Nightcrawler receives an isolated profile lookup, donor priority and feedback branch before the previous resolver chain. All earlier profile fallbacks, donor sets and feedback branches remain in their existing order.

The source record is appended through the existing crime/noir verification aggregator. The already-global verification registry requires no new top-level import.

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the global scenario catalogue;
- top-level verification-registry ordering;
- global Film Study resolver ordering.

## Permanent checks

The dedicated regression test requires:

- exact seed genres `Crime`, `Drama`, `Thriller`;
- all 17 coverage areas;
- exact `15 / 2 / 0` status distribution;
- ten sources from ten distinct publishers;
- exact donor order;
- one match, one partial match and one mismatch;
- preservation of all previous crime/noir profiles.

The global verification test raises the permanent verified-case count from 331 to 332 and gives Nightcrawler its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 331 | 332 |
| Remaining unverified Production Cases | 47 | 46 |
| Source-backed Film Study profiles | 331 | 332 |
| Remaining seed-origin cases | 42 | 41 |
| Remaining 2010s cases | 45 | 44 |

The next unverified film is `scenario_45_years_2015`.
