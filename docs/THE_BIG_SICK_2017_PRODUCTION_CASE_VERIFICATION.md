# The Big Sick (2017) — Production Case verification

## Scenario lock

- Scenario ID: `scenario_the_big_sick_2017`
- Seed position: `115`
- IMDb: `tt5462602`
- Runtime: `120`
- Director: Michael Showalter
- Genres: Comedy / Drama / Romance
- Scenario type: `romantic_comedy_drama_production`
- Resolver: `independent_storytelling`
- Production family: `family_performance_grief_power`

The imported seed remains unchanged. The Big Sick is materialized through its Film Study profile, specialty donor routing, Production Case verification and permanent regression controls.

## Production thesis

The Big Sick is not modeled as a generic romantic comedy with an illness twist. Its production system depends on the unusual fact that the central romance temporarily removes Emily from active participation and transfers emotional pressure into Kumail's stand-up life, his Pakistani-American family, arranged-marriage expectations, Emily's parents and the hospital environment.

The verified system coordinates:

- Kumail Nanjiani and Emily V. Gordon transforming their own relationship and Gordon's medically induced coma into a screenplay over roughly three years and hundreds of drafts;
- Judd Apatow and Barry Mendel repeatedly pushing the writers away from literal recollection toward a filmable comic-dramatic structure;
- Michael Showalter joining the screenplay process before production and directing through a deliberately naturalistic human-observer camera;
- Kumail playing a version of himself while Zoe Kazan plays the fictionalized Emily, avoiding a direct reenactment by Gordon;
- real comedian friends and a stand-up environment that keep Kumail's professional identity materially connected to the romance;
- Pakistani-American family dinners and marriage expectations treated as active family-performance scenes rather than explanatory cultural inserts;
- New York standing in for most of Chicago, with only a small amount of Chicago exterior work and a real Long Island hospital carrying the medical section;
- Brian Burgoyne's warm, intimate and sympathetic photography;
- Robert Nassau's independent New York assembly followed by collaborative Los Angeles producer editing and months of refinement;
- an intimate, clean sound strategy designed to preserve speech in small rooms;
- Michael Andrews using Emily's illness as a genuine musical structural break while rejecting forced South Asian musical signifiers;
- a warm final grade that protects comic-romantic humanity through hospital and family conflict rather than switching into a colder medical-drama look.

The result is a romantic dramedy in which autobiography, stand-up comedy, Pakistani-American family life, medical crisis, two parental systems and postproduction rhythm remain one coordinated production problem.

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
| lighting | mapped |
| camera_format | mapped |
| editing | source_verified |
| sound_design | source_verified |
| music | source_verified |
| effects_animation | not_central |
| documentary_method | source_verified |

Coverage summary: **13 source_verified / 3 mapped / 1 not_central**.

The mapped classifications are conservative. Costume/makeup, lighting and digital acquisition are identifiable, but the inspected source set does not provide department-level workflows strong enough to elevate those fields. Effects and animation are not central to the film's production identity.

## Donor architecture

The Big Sick is routed through the existing `family_performance_grief_power` specialty path via `scenarioFilmStudyFamilyPerformanceTheSavagesCatalog` and receives an exact donor override:

1. `scenario_the_savages_2007`
2. `scenario_mississippi_masala_1991`
3. `scenario_before_sunrise_1995`

### The Savages

The closest donor supplies a family-care dramedy model in which hospital and institutional realities reorganize adult relationships, while dry humour, ensemble performance and care logistics prevent medical crisis from becoming generic melodrama.

### Mississippi Masala

The second donor supplies diasporic romance in which South Asian family history, authority, community expectations and the cost of choosing a partner are inseparable from everyday intimacy. The Big Sick moves that pressure into a Pakistani-American Muslim family and the contemporary American stand-up world.

### Before Sunrise

The third donor supplies dialogue-led romantic chemistry and the principle that performance rhythm, conversation and small behavioural exchanges can carry romantic stakes without spectacle. The Big Sick uses that chemistry as the necessary first-act foundation before the coma removes Emily from active dialogue.

The Big Sick does not enter the generic `independent_storytelling` donor pool. Existing donor sequences remain unchanged; a dedicated regression test explicitly preserves The Savages' established `Secrets & Lies → The Son's Room → Still Walking` sequence.

## Verification sources

The case registers ten inspectable HTTPS sources from ten distinct publishers:

1. Writers Guild of America East — Gordon/Nanjiani on the screenplay's SXSW/Apatow origin, three-year development, hundreds of drafts and movement from memory toward fiction.
2. National Board of Review — writers and Zoe Kazan on autobiographical distance, Barry Mendel/Apatow development and preserving emotional truth while restructuring events.
3. Filmmaker Magazine — Showalter on script development, naturalistic camera philosophy, New York/Chicago geography, the real Long Island hospital, editing and postproduction.
4. postPerspective — Showalter on Robert Nassau's edit workflow, the Los Angeles producer cut, intimate clean sound, Michael Andrews, dailies and warm DI.
5. ICG Magazine — Brian Burgoyne and the Guild camera crew.
6. Kinetophone — Michael Andrews on the score's sickness transition, Kumail's suspended middle act, Emily's parents and rejection of forced cultural instrumentation.
7. Academy of Motion Picture Arts and Sciences — official 2018 Original Screenplay nomination for Gordon and Nanjiani.
8. Museum of Modern Art — 120-minute Amazon Studios presentation, authorship and contemporary reception context.
9. TheWrap — contemporary Sundance acquisition and core production team.
10. Lionsgate — official theatrical synopsis and principal writer/director/producer framing.

## Scope control

This case does not modify:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the playable scenario catalogue;
- global Film Study resolver ordering;
- the generic `independent_storytelling` profile pool;
- any pre-existing donor sequence.

Only the already-global family-performance specialty helper and verification batch, dedicated Big Sick files, permanent verification count and rest audit are changed.

## Permanent checks

The dedicated regression test requires:

- exact seed position 115;
- runtime 120 minutes;
- director Michael Showalter;
- exact genres Comedy / Drama / Romance;
- exact `romantic_comedy_drama_production` seed type;
- all 17 Film Study areas;
- exact `13 / 3 / 1` coverage distribution;
- verified Production Case status;
- ten sources from ten distinct publishers;
- `family_performance_grief_power` routing;
- exact donors `The Savages → Mississippi Masala → Before Sunrise`;
- one match, one partial match and one mismatch choice;
- preservation of The Savages' existing donor sequence.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 361 | 362 |
| Remaining unverified Production Cases | 17 | 16 |
| Source-backed Film Study profiles | 361 | 362 |
| Remaining seed-origin cases | 15 | 14 |
| Remaining 2010s cases | 15 | 14 |
| Remaining Drama cases | 16 | 15 |
| Remaining Comedy cases | 4 | 3 |
| Remaining Romance cases | 3 | 2 |

The next unverified Production Case is `scenario_the_florida_project_2017`.
