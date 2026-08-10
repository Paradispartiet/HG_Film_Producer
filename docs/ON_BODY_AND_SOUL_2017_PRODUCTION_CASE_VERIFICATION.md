# On Body and Soul (2017) — Production Case verification

## Scenario lock

- Scenario ID: `scenario_on_body_and_soul_2017`
- Seed position: `116`
- Runtime: `116`
- Director: Ildikó Enyedi
- Genres: Drama / Fantasy / Mystery / Romance
- Scenario type: `character_drama_production`
- Resolver: `independent_storytelling`
- Production family: `subjective_enclosure_performance`

The seed remains unchanged. On Body and Soul is materialized through its Film Study profile and Production Case verification only.

## Production thesis

On Body and Soul is not treated as generic dream romance. Its production system makes the shared deer dream credible by refusing to detach fantasy from physical work and ordinary sensation. A functioning slaughterhouse, actual animal-processing routines, bodies under institutional discipline, unusually restrained performance, patient photography, equal-paced editing and precisely chosen sound make the fantastic feel like another register of the same material reality.

The verified system coordinates:

- a screenplay first drafted in 2006 and revived after the collapse and rebuilding of Hungarian film support;
- Enyedi's return to theatrical feature filmmaking after an eighteen-year gap;
- Inforg-M&M Film, Hungarian Film Fund support and a 2015 Budapest/Hajdúnánás shoot with later winter work;
- a real slaughterhouse whose actual killing and butchering were documented rather than restaged;
- non-professional Géza Morcsányi as Endre and Alexandra Borbély's carefully developed Mária;
- Máté Herbai's attention to tiny material events, changing light and the visual continuity between sterile work rooms and the winter forest;
- Imola Láng's practical visual design and Judit Sinkovics's costume work inside an environment that remains deliberately ordinary rather than fantasy-coded;
- Károly Szalai's pacing, including the refusal to accelerate or slow the film's most dramatic bodily actions;
- Péter Benjámin Lukács's transparent sound world, in which realistic wind, birds, city murmur, machinery and bodily detail carry exact dramaturgical functions;
- a shared-dream device whose deer imagery is produced as sensory continuity, not as an effects-led alternate universe.

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
| camera_format | mapped |
| editing | source_verified |
| sound_design | source_verified |
| music | mapped |
| effects_animation | not_central |
| documentary_method | source_verified |

Coverage summary: **13 source_verified / 3 mapped / 1 not_central**.

## Donor architecture

On Body and Soul is routed through the existing `subjective_enclosure_performance` specialty path with an exact donor override:

1. `scenario_anomalisa_2015`
2. `scenario_3_iron_2004`
3. `scenario_tropical_malady_2004`

The sequence is production-functional rather than genre-based. `Anomalisa` supplies the model of an ordinary institutional environment whose concrete craft makes private perception physically legible. `3-Iron` supplies near-silent bodily routine and intimacy that moves from real domestic matter toward impossible presence. `Tropical Malady` supplies the transition from observed romance to an animal/mythic register carried by landscape, performance and sound rather than a separate effects world.

The profile is inserted through the existing `scenarioFilmStudySubjectiveEnclosureBlindnessCatalog` specialty helper. It is therefore not added to the generic `profiles` donor pool, and no existing donor selection changes.

## Verification sources

The case registers twelve inspectable sources from twelve distinct publishers:

1. National Film Institute Hungary — first-draft date, interrupted development, Film Fund revival, shared-dream conception and return context.
2. Cineuropa — 2015 Budapest/Hajdúnánás production schedule, winter work, producers and funding.
3. Film Comment — body/soul conception, slaughterhouse ethics, casting, performance development, editing rhythm and visual detail.
4. The Upcoming — direct confirmation that the slaughterhouse work was real, not staged, with two-camera documentation and modified light bars.
5. MovieMaker Magazine — Herbai collaboration and the deliberately transparent, dramaturgically exact sound world.
6. Los Angeles Times — Enyedi's simplified/transparent formal aim and Herbai's patient work with changing light and tiny actions.
7. European Film Academy — principal craft credits and Alexandra Borbély's European Actress award.
8. Academy of Motion Picture Arts and Sciences — Foreign Language Film nomination.
9. American Society of Cinematographers — Máté Herbai's Spotlight Award nomination.
10. Camerimage — Golden Frog for Máté Herbai's cinematography.
11. New Zealand International Film Festival — 116-minute CinemaScope/DCP presentation and principal craft credits.
12. Berlin International Film Festival — official Golden Bear record.

## Scope control

This case does not modify:

- `film_scenarios_seed.json`;
- production-brief generation;
- workflow files;
- the playable scenario catalogue;
- global Film Study resolver ordering;
- the generic `independent_storytelling` profile pool;
- any pre-existing donor sequence.

Only the already-wired subjective-enclosure specialty helper, its existing verification batch, permanent verification count/audit and dedicated On Body and Soul files are changed.
