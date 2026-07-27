# Blindness (2008) — Production Case verification

## Result

`scenario_blindness_2008` is materialized as a complete source-backed Production Case.

- Resolver: `independent_storytelling`
- Existing group: `subjective_enclosure_performance`
- Film-specific system: `transnational_white_blindness_sensory_collapse`
- Film Study coverage: 14 `source_verified`, 2 `mapped`, 1 `not_central`
- Verification: 10 inspectable HTTPS sources from 10 publishers
- Dedicated donors: *Safe*, *Sound of Metal*, *The Host*

## Production system

The case connects:

- José Saramago's nameless epidemic allegory and Don McKellar's adaptation
- Rhombus Media, O2 Filmes and Bee Vine Pictures in a Brazil-Canada-Japan production
- Fernando Meirelles's three-part progression from outbreak through quarantine to ruined-city journey
- blindfold workshops, sensory exercises and sight-restricting lenses for the performers
- São Paulo, a disused Guelph prison and Montevideo combined as one unidentified city
- Tulé Peak and Matthew Davies's institutional and urban design
- Renée April's progressively degraded costume system
- César Charlone's excessive-white, sea-of-milk image strategy
- Daniel Rezende's changing rhythm and spatial orientation
- precise practical detail sound and Uakti's material percussion
- the 2008 Cannes opening-film and Competition position
- the subsequent debate around blindness as social metaphor

## Sources

| Publisher | Evidence focus |
|---|---|
| Festival de Cannes | Opening-film status, Competition, countries and principal crafts |
| Danish Film Institute | Companies, producers, countries, Dolby and department credits |
| The Guardian | Meirelles interview on adaptation, allegory and visual method |
| Los Angeles Times | White-image tests, art-costume coordination and revised grade |
| Screen Daily | Rights history, international production and Guelph location work |
| Telefilm Canada | Canadian support and international production context |
| Library and Archives Canada | Preserved Canadian production and release record |
| Miramax | Official distributor catalog and ensemble premise |
| Filmfest Hamburg | Production companies, producers and principal craft credits |
| Cinémathèque québécoise | Canadian-linked repertory and exhibition record |

## Film Study coverage

### Source verified

- historical context
- movement and tradition
- industry and production context
- reception and legacy
- screenplay
- directing
- performance
- production design
- costume and makeup
- cinematography
- editing
- sound design
- music
- documentary method

### Mapped

- lighting
- camera format

The sources document the oppressive brightness and combined photochemical-digital image construction, but not a sufficiently complete lighting and camera-package account for every production unit.

### Not central

- effects and animation

Postproduction image treatment is important, but the production's defining system is built from restricted performance, physical environments, exposure, grading, editing and sound rather than effects spectacle.

## Dedicated donors

1. `scenario_safe_1995` — environmental illness, social exclusion and institutionalized bodily uncertainty
2. `scenario_sound_of_metal_2019` — sensory loss, performer training and sound-led subjectivity
3. `scenario_the_host_2006` — epidemic-scale genre, institutional failure and ensemble survival

The donor branch is film-only. Existing choices for *Eyes Wide Shut*, *Being John Malkovich*, *The Game*, *Safe*, *Sound of Metal* and *The Host* remain outside Blindness's white-blindness labels.

## Scope control

No scenario seed, production brief, workflow, global scenario catalog, global resolver ordering or existing donor choice is changed. The profile is added through the existing independent-storytelling catalog and the verification through the existing subjective-enclosure batch.

## Validation

The focused regression test requires:

- profile resolution for `scenario_blindness_2008`
- exactly 17 Film Study areas
- exact 14/2/1 coverage
- verified production lookup
- exactly 10 sources and 10 publishers
- exact donor IDs
- donor-choice isolation for six existing profiles

The canonical `npm run verify:v0.1` additionally validates strict TypeScript, the complete test suite, production-case audit, production UI build and Pages artifact.
