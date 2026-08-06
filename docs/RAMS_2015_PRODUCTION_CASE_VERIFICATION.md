# Rams (2015) — Production Case verification

Verified on **2026-08-06**.

## Scope

This verification materializes the existing playable scenario `scenario_rams_2015`. It adds no film and does not change the imported scenario seed or the existing `character_comedy_production` brief.

## Production system

*Rams* (*Hrútar*) is modeled as an Icelandic rural tragicomedy built from:

- Grímur Hákonarson drawing on childhood summers working in the countryside and earlier documentary experience with farmers;
- approximately three years of screenplay development;
- research travel across Iceland, interviews with farmers, visits to sheep sheds and reading about sheep farming;
- a forty-year conflict between neighbouring brothers being expressed through property, routine, livestock and indirect communication rather than explanatory dialogue;
- scrapie and the authorities' compulsory culling order turning inherited sheep bloodlines into practical, economic and emotional stakes;
- Sigurður Sigurjónsson and Theodór Júlíusson being Hákonarson's first choices for Gummi and Kiddi;
- both actors spending time with farmers and refreshing the practical skills required to handle sheep credibly;
- several days of sheep-only rehearsal and a separate animal-audition process;
- the isolated Bárðardalur valley providing adjoining farms, sheep sheds, roads, winter interiors and mountain weather as one working production geography;
- cast and crew remaining in the remote valley for extended periods while roads and weather constrained movement;
- Netop Films leading an Icelandic-Danish-Norwegian-Polish co-production with Profile Pictures, Film Farms and Aeroplan Film;
- Sturla Brandth Grøvlen framing farmers, animals, buildings and weather through wide static compositions and restrained pans;
- ARRI Alexa XT capture, Hawk C-Series anamorphic lenses and a 2.39:1 frame creating a soft film-like rural western image;
- Bjarni Massi Sigurbjörnsson organizing farms, adjoining houses, sheds, vehicles and community rooms as the physical map of brotherhood and division;
- Kristján Loðmfjörð preserving chores, pauses, glances and indirect exchanges through patient editing;
- Huldar Freyr Arnarson and Björn Viktorsson making wind, sheep, engines, tools, doors and silence carry communication;
- Atli Örvarsson's restrained score entering selectively rather than replacing rural duration and practical sound;
- the Un Certain Regard Prize, Camerimage Silver Frog, Icelandic craft recognition and extensive international festival circulation.

The film is therefore not assigned through Icelandic nationality, black comedy or a sheep-farming premise alone. Its production logic joins field research, actor and animal preparation, working farms, weather exposure, a compulsory agricultural crisis and an audiovisual system that lets labour and silence transform a feud into physical interdependence.

## Complete 17-area audit

| Status | Count | Areas |
|---|---:|---|
| `source_verified` | 14 | historical context; movement and tradition; industry and production context; reception and legacy; screenplay; directing; performance; production design; cinematography; camera format; editing; sound design; music; documentary method |
| `mapped` | 2 | costume and makeup; lighting |
| `not_central` | 1 | effects and animation |

The classification is deliberately conservative. The inspected sources establish the research, rural knowledge, actor and sheep preparation, co-production structure, location conditions, principal departments, camera and lens package, editing tempo and environmental sound logic. Costume is credited without a documented department workflow, and a lighting designer is credited without a complete fixture or exposure account.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. Festival de Cannes
2. Danish Film Institute
3. European Film Academy
4. Oslo Pictures
5. Sturla Brandth Grøvlen
6. Los Angeles Times
7. The Moveable Fest
8. TheWrap
9. Cineuropa
10. Team Deakins

The source set covers development and field research, sheep rehearsals and animal casting, actor preparation, Bárðardalur production conditions, the four-country co-production, camera and lens format, principal craft credits, pacing and sound strategy and international reception.

## Comparative donors

The playable history choices use this exact order:

1. `scenario_the_rider_2017`
2. `scenario_still_walking_2008`
3. `scenario_land_of_mine_2015`

### The Rider

The closest comparison supplies practical animal work, rural labour, physical skill, regional locations and a realism that depends on bodies interacting credibly with horses and land. *Rams* replaces community-based nonprofessional western recovery with two professional actors, sheep-specific rehearsal and a valley-wide disease emergency, but likewise makes animal competence inseparable from identity and story.

### Still Walking

The second comparison supplies long family history carried through routine, rooms, meals, indirect speech and gestures rather than cathartic explanation. *Rams* moves that observational family logic from one domestic gathering into neighbouring farms and a forty-year silence, where work and property become the brothers' language.

### Land of Mine

The third comparison supplies a beautiful landscape reorganized as a procedural danger field and a crisis that changes one hostile relationship through repeated practical action. *Rams* uses agricultural disease control rather than historical mine clearance, but similarly binds moral movement to place, bodily risk, procedure and restrained suspense.

The donors are selected by production function, not geography or genre. `Mommy`, `Homesick` and `My Skinny Sister` retain their established donor sequences unchanged.

## Integration

The profile is exposed through the existing independent-storytelling resolver and assigned to `family_performance_grief_power`. The established Mommy catalog gains an isolated Rams profile and donor override. The verification record is appended through the existing family-performance verification aggregator.

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the global scenario catalogue;
- top-level verification-registry ordering;
- global Film Study resolver ordering;
- existing donor sequences.

## Permanent checks

The dedicated regression test requires:

- exact seed genres `Comedy` and `Drama` and `character_comedy_production` scenario type;
- all 17 coverage areas;
- exact `14 / 2 / 1` status distribution;
- ten sources from ten distinct publishers;
- assignment to `family_performance_grief_power`;
- exact donor order;
- one match, one partial match and one mismatch;
- Rams-specific rural research, sheep-rehearsal and production language;
- preservation of the exact `Mommy` and `My Skinny Sister` donor orders.

The global verification test raises the permanent verified-case count from 342 to 343 and gives *Rams* its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 342 | 343 |
| Remaining unverified Production Cases | 36 | 35 |
| Source-backed Film Study profiles | 342 | 343 |
| Remaining seed-origin cases | 31 | 30 |
| Remaining 2010s cases | 34 | 33 |
| Remaining drama cases | 31 | 30 |
| Remaining comedy cases | 9 | 8 |

The next unverified film is `scenario_room_2015`.
