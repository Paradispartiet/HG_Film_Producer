# Loveless (2017) — Production Case verification

## Scenario lock

- Scenario ID: `scenario_loveless_2017`
- Seed position: `125`
- Runtime: `127`
- Director: Andrey Zvyagintsev
- Genre: Drama
- Scenario type: `family_drama_production`
- Resolver: `independent_storytelling`
- Production family: `family_performance_grief_power`

The seed remains unchanged. Loveless is materialized through its Film Study profile and Production Case verification.

## Production thesis

Loveless is not treated as generic bleak realism. Its production system is a deliberately engineered collision between intimate marital breakdown and missing-child procedure: tightly phrased dialogue and actor movement, carefully selected unfamiliar faces, a purpose-built Moscow apartment, real peripheral landscape, digital anamorphic photography, controlled darkness, measured camera movement, environmental sound and a sparse score create an observational surface whose apparent naturalism depends on extensive preparation.

The verified system coordinates:

- Andrey Zvyagintsev and Oleg Negin's fusion of a marriage-breakdown project with a story shaped by Russia's Liza Alert volunteer-search movement;
- reference pressure from `Scenes from a Marriage`, `L'Avventura` and `Caché` without simple imitation;
- Maryana Spivak, Alexey Rozin and Matvey Novikov inside a performance method that normally holds closely to scripted text while admitting small rehearsal discoveries;
- Andrey Ponkratov's purpose-built Sleptsov apartment, designed around exact mise-en-scène and actor trajectories rather than an available real flat;
- deep stage axes and four roughly 10-by-70-metre photographic exterior backdrops for changing time and seasonal conditions;
- the Skhodnensky Kovsh landscape as a deliberate contrast between dense modern housing and unexpectedly wild terrain;
- Mikhail Krichman's digital anamorphic image system, with ALEXA XT/ALEXA Mini, Cooke Anamorphic/i and Vantage Hawk zoom lenses documented in production reporting;
- deliberately dark night work, torchlight, practical interiors and controlled stage/backdrop illumination;
- selective VFX compositing that joins a staged apartment view to exterior geography without making the film effects-led;
- Anna Mass's editing, Andrey Dergachev's environmental sound and Evgueni and Sacha Galperine's score as extensions of the same patient search pressure.

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
| music | source_verified |
| effects_animation | not_central |
| documentary_method | mapped |

Coverage summary: **14 source_verified / 2 mapped / 1 not_central**.

## Donor architecture

Loveless is added to the existing `family_performance_grief_power` group with an exact donor override:

1. `scenario_winter_sleep_2014`
2. `scenario_scenes_from_a_marriage_1973`
3. `scenario_the_sons_room_2001`

The sequence is intentional: `Winter Sleep` supplies contemporary social pressure and engineered family/class space, `Scenes from a Marriage` the core marital-disintegration lineage, and `The Son's Room` the family system reorganized by a child's absence and grief.

The new Loveless profile is explicitly excluded from the group's generic donor pool so existing donor behavior does not change.

## Verification sources

The case registers twelve inspectable sources from twelve distinct publishers:

1. Festival de Cannes — official Competition record, principal creative credits and Jury Prize.
2. Sony Pictures Entertainment — co-production, financing/support context, screenplay and Rodnyansky partnership.
3. Australian Production Design Guild — Ponkratov on the built apartment, stage geometry, Skhodnensky Kovsh, photographic backdrops, lighting constraints and VFX composite.
4. Cooke Optics — independent confirmation of Cooke Anamorphic/i use.
5. British Film Institute / Sight and Sound — image, sound, winter landscape, search structure and social expansion.
6. Film Comment — Cannes context and the relationship between Russian life and universal human condition.
7. The Criterion Collection — contemporary Cannes reception and the family-drama-to-social-critique frame.
8. European Film Academy — awards for Mikhail Krichman's cinematography and Evgueni/Sacha Galperine's music.
9. Academy of Motion Picture Arts and Sciences — Foreign Language Film nomination.
10. IONCINEMA — Zvyagintsev on family, film references, script fidelity, casting, landscapes and detailed scene preparation.
11. Izba Arts — Zvyagintsev on the merger of the Scenes from a Marriage idea and the Liza Alert search story.
12. VIDEO SALON.web — ALEXA, anamorphic/zoom lens and SkyPanel equipment reporting.

## Scope control

This case does not modify:

- `film_scenarios_seed.json`;
- production-brief generation;
- workflow files;
- the playable scenario catalogue;
- global Film Study resolver ordering.

Only the existing independent-storytelling catalog, its already-wired verification batch, permanent count/audit and dedicated Loveless files are changed.
