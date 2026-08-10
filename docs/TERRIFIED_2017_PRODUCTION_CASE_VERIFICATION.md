# Terrified (2017) — Production Case verification

## Scenario lock

- Scenario ID: `scenario_terrified_2017`
- Seed position: `142`
- Runtime: `87`
- Director: Demián Rugna
- Genres: Horror
- Scenario type: `horror_production`
- Resolver: `independent_storytelling`
- Production family: `subjective_enclosure_performance`

The seed remains unchanged. Terrified is materialized through its Film Study profile and Production Case verification only.

## Production thesis

Terrified is not modeled as a generic haunted-house film. Its production system turns an ordinary Ciudad Jardín block into one connected supernatural geometry. Two adjacent homes and a house across the street had to function together through doors, windows, walls, plumbing and character movement, so separate hauntings could become one spatial problem without a stable explanatory rulebook.

The verified system coordinates:

- a story and screenplay developed years before the film could be financed and produced;
- an Argentine low-resource genre-production route supported by the Blood Window/Mórbido ecosystem;
- Fernando Díaz's production and Leticia Tapia's location work across a connected Ciudad Jardín block;
- Rugna relinquishing camera operation so he could concentrate on actors, drama and believable reactions;
- rehearsals and a deliberately serious performance register so physical effects remain credible;
- Mariano Suárez's RED Epic Dragon, rehoused Leica R lenses and 6K acquisition;
- three camera states that move from fixed observation toward controlled instability and handheld crisis;
- naturalistic nocturnal lighting built from existing sodium streetlight, LED strips, tungsten units and tubes rather than a large HMI package;
- Laura Aguerrebehere's adaptation of ordinary domestic locations under tight resource constraints;
- Marcos Berta's physical make-up and props, including the child body and window creature, with digital work used as reinforcement rather than a substitute for the photographed object;
- a reconstructed high-ceiling bathroom set, suspension mechanics and a multi-day shoot for the opening attack;
- Lionel Cornistein's editing plus selective VFX retouching and color work;
- Damián Montes Calabró's sound direction, Pablo Isola's sound postproduction and Rugna's deliberate use of offscreen ambient sound;
- a refusal to explain the impossible completely, allowing walls, sinks, darkness and neighboring rooms to remain more threatening than a closed supernatural mythology.

## Film Study coverage

All 17 Film Study areas are materialized:

| Area | Status |
|---|---|
| historical_context | source_verified |
| movement_and_tradition | source_verified |
| industry_and_production_context | source_verified |
| reception_and_legacy | source_verified |
| screenplay | source_verified |
| directing | source_verified |
| performance | source_verified |
| production_design | source_verified |
| costume_makeup | mapped |
| cinematography | source_verified |
| lighting | source_verified |
| camera_format | source_verified |
| editing | source_verified |
| sound_design | source_verified |
| music | mapped |
| effects_animation | source_verified |
| documentary_method | not_central |

Coverage summary: **14 source_verified / 2 mapped / 1 not_central**.

## Donor architecture

Terrified is routed through the existing `subjective_enclosure_performance` specialty path with an exact donor override:

1. `scenario_the_wailing_2016`
2. `scenario_cure_1997`
3. `scenario_barton_fink_1991`

The sequence is production-functional rather than title- or nationality-based. `The Wailing` supplies a local paranormal investigation where physical genre craft and competing explanations intensify uncertainty. `Cure` supplies ordinary rooms, offscreen/environmental sound and procedural causality that becomes less stable as evidence accumulates. `Barton Fink` supplies walls, plumbing, corridors and room sound as an architectural nightmare machine. Terrified shifts those functions into three connected suburban houses whose boundaries no longer keep realities apart.

The profile is inserted through the existing `scenarioFilmStudySubjectiveEnclosureBlindnessCatalog` specialty helper. It is therefore not added to the generic donor pool, and no pre-existing donor selection changes.

## Verification sources

The case registers ten inspectable sources from ten distinct publishers:

1. ADF – Autores de Fotografía Cinematográfica Argentina — Mariano Suárez's first-person technical account of locations, RED/Leica/6K capture, lighting, camera progression, practical effects, bathroom reconstruction and post workflow.
2. CineFreaks — Rugna on development, horror influences, story-led tension and the three-day bathroom sequence.
3. Perro Blanco — Rugna on incomplete explanation, everyday space, depth/defocus/chiaroscuro and offscreen ambient sound as scripted narrative choices.
4. NegroWhite — Rugna, Fernando Díaz and Marcos Berta on whole-block locations, rehearsals, physical effects, the child prop and CGI support.
5. New Zealand International Film Festival — 87-minute DCP and principal director, screenplay, music, producer, photography, editing, production-design and costume credits.
6. Shudder — international release and the ordinary suburban Buenos Aires street as the film's central nightmare space.
7. ScreenAnarchy — Mórbido world-premiere and international genre-circuit context.
8. INCAA — later national genre-program recognition.
9. Strasbourg European Fantastic Film Festival — Argentine production, principal craft credits and Aura Films world sales.
10. Box Office Mojo — independent theatrical-release cross-check.

## Scope control

This case does not modify:

- `film_scenarios_seed.json`;
- production-brief generation;
- workflow files;
- the playable scenario catalogue;
- global Film Study resolver ordering;
- the generic `independent_storytelling` profile pool;
- any pre-existing donor sequence.

Only the already-wired subjective-enclosure specialty helper, its existing verification batch, permanent verification count/audit and dedicated Terrified files are changed.

## Permanent checks

The dedicated regression test requires:

- exact seed position `142`, runtime `87`, director Demián Rugna, genre `Horror` and scenario type `horror_production`;
- all 17 Film Study areas;
- exact `14 / 2 / 1` status distribution;
- ten sources from ten distinct publishers;
- exact donor order `The Wailing → Cure → Barton Fink`;
- one match, one partial match and one mismatch choice;
- Terrified-specific `Ciudad Jardín`, `RED Epic Dragon`, `Leica R` and `6K` production language;
- preservation of the established Blindness, Room, Nerve and On Body and Soul donor sequences.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 360 | 361 |
| Remaining unverified Production Cases | 18 | 17 |
| Source-backed Film Study profiles | 360 | 361 |
| Remaining seed-origin cases | 16 | 15 |
| Remaining 2010s cases | 16 | 15 |
| Remaining horror cases | 3 | 2 |

The next unverified film is `scenario_the_big_sick_2017`.
