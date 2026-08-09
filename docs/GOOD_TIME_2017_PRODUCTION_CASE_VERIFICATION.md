# Good Time (2017) — Production Case verification

## Scenario lock

- Scenario ID: `scenario_good_time_2017`
- Seed position: `117`
- Runtime: `102`
- Directors: Benny Safdie, Josh Safdie
- Genres: Crime, Drama, Thriller
- Scenario type: `crime_thriller_production`
- Resolver: `independent_storytelling`
- Production family: `american_independent_genre_resourcefulness`

The seed remains unchanged. Good Time is materialized through its Film Study profile and Production Case verification.

## Production thesis

Good Time turns the Safdie brothers' pre-existing New York street-film practice into a tightly controlled crime-thriller engine. The film is not simply gritty realism and not simply neon pulp: its production system depends on the friction between real locations, unstable public space and nonprofessional presence on one side, and highly expressive 2-perf 35 mm photography, escalating screenplay logic, pressure-led cutting and electronic scoring on the other.

The verified system coordinates:

- Josh Safdie and Ronald Bronstein's character-backstory screenplay method, where each solution generates the next crisis;
- Robert Pattinson's deliberate attempt to disappear into the Safdies' New York world;
- Benny Safdie, Buddy Duress and an ensemble that connects professional acting to lived-in street presence;
- a 35-day February–March 2016 shoot in Queens, Crown Heights, the subway and Adventureland;
- Sean Price Williams's 2-perf 35 mm ARRI LT / Zeiss Super Speed package;
- KODAK VISION3 500T 5219 for much of the night work and 250D 5207 for daylight and selected naturalistic passages;
- handheld and telephoto street observation alongside increasingly expressionist framing;
- practical darkness, cool fluorescents, blacklight and saturated ARRI SkyPanel color;
- Ronald Bronstein and Benny Safdie cutting down material in service of pulp momentum and audience pressure;
- Evan Mangiamele's credited sound work and abrasive New York environments;
- Daniel Lopatin / Oneohtrix Point Never's electronic score and the Iggy Pop collaboration `The Pure and the Damned`.

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

Good Time is added to the existing `american_independent_genre_resourcefulness` group with an exact donor override:

1. `scenario_blood_simple_1984`
2. `scenario_reservoir_dogs_1992`
3. `scenario_el_mariachi_1992`

The new profile is explicitly excluded from the group's generic donor pool so existing Blood Simple, Metropolitan, Reservoir Dogs and El Mariachi donor behavior does not change.

## Verification sources

The case registers ten inspectable sources from ten distinct publishers:

1. A24 — official release, directing, writing and cast.
2. Festival de Cannes — Competition record and principal craft credits.
3. Kodak Motion Picture — Sean Price Williams on 2-perf 35 mm, camera, lenses, stocks, locations and lighting.
4. Filmmaker Magazine — Safdies on screenplay construction, pulp form and editing.
5. Film Independent — Pattinson's approach and location-production context.
6. Film at Lincoln Center — A24/Cannes context and filmmaker discussion.
7. British Film Institute — urban viewpoint, expressive lighting and crime-thriller form.
8. Film Comment — Safdies, Bronstein and Pattinson on the film's conceptual development and New York street theater.
9. Pitchfork — Daniel Lopatin on score construction and the Cannes Soundtrack Award.
10. The Criterion Collection — Cannes dossier connecting gutter realism, genre mechanics and Williams's expressionist cinematography.

## Scope control

This case does not modify:

- `film_scenarios_seed.json`;
- production-brief generation;
- workflow files;
- the playable scenario catalogue;
- global Film Study resolver ordering.

Only the existing independent-storytelling catalog, its already-wired verification batch, permanent count/audit and dedicated Good Time files are changed.
