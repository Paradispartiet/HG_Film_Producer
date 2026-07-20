# Production Case verification registry

## Purpose

Manual Production Case briefs are film-specific teaching material, but a case is not `verified` until its claims have inspectable evidence in the unified source registry.

The registry is exposed through:

- `src/ui/data/scenarioProductionVerificationRegistry.ts`

Research Control Room derives verified status from this registry rather than relying only on a provisional brief flag.

## Current status

- 92 source-backed Production Cases.
- Every verified case resolves to a playable scenario in the current catalogue.
- Catalogue size is read dynamically and is not duplicated in this document.
- Every case still receives the same complete 17-area audit structure, whether verified or pending.

A case-level `verified` label does **not** mean that every one of its 17 areas is source verified. The area-level audit remains more precise.

## Registry files

Source records are divided into reviewable batches:

- `src/ui/data/scenarioProductionVerification.ts`
- `src/ui/data/scenarioProductionVerificationMethodBatch.ts`
- `src/ui/data/scenarioProductionVerificationModernBatch.ts`
- `src/ui/data/scenarioProductionVerificationCrossEraBatch.ts`
- `src/ui/data/scenarioProductionVerificationTechnologyBatch.ts`
- `src/ui/data/scenarioProductionVerificationLandscapeBatch.ts`
- `src/ui/data/scenarioProductionVerificationConstructedWorldsBatch.ts`
- `src/ui/data/scenarioProductionVerificationMinimalistRoadBatch.ts`
- `src/ui/data/scenarioProductionVerificationEuropeanPressureBatch.ts`
- `src/ui/data/scenarioProductionVerificationIndependentStorytellingBatch.ts`
- `src/ui/data/scenarioProductionVerificationSilentFoundationsBatch.ts`
- `src/ui/data/scenarioProductionVerificationSilentStudioSystemsBatch.ts`
- `src/ui/data/scenarioProductionVerificationLateSilentEarlySoundBatch.ts`
- `src/ui/data/scenarioProductionVerification1930sProductionSystemsBatch.ts`
- `src/ui/data/scenarioProductionVerificationClassicalHollywoodBatch.ts`
- `src/ui/data/scenarioProductionVerification1940sNoirRealismBatch.ts`
- `src/ui/data/scenarioProductionVerification1950sAsianPostwarBatch.ts`
- `src/ui/data/scenarioProductionVerificationPostwarEuropeanModernismBatch.ts`
- `src/ui/data/scenarioProductionVerificationCzechoslovakNewWaveBatch.ts`
- `src/ui/data/scenarioProductionVerificationEuropeanPoliticalFeministModernismBatch.ts`
- `src/ui/data/scenarioProductionVerificationNewHollywoodBlockbusterBatch.ts`
- `src/ui/data/scenarioProductionVerification1960sScaleIndependentBatch.ts`

The complete audit schema is defined in:

- `src/core/filmStudyCoverage.ts`
- `docs/FILM_HISTORY_AND_CRAFT_MAPPING.md`

## Verified batches

### Pilot batch

- `scenario_the_machinist_2004`
- `scenario_the_lives_of_others_2006`
- `scenario_lost_in_translation_2003`
- `scenario_12_angry_men_1957`

### Historic craft batch

- `scenario_bicycle_thieves_1948`
- `scenario_vertigo_1958`
- `scenario_breathless_1960`
- `scenario_the_shining_1980`

### Production-method batch

- `scenario_one_flew_over_the_cuckoo_s_nest_1975`
- `scenario_the_celebration_1998`
- `scenario_waltz_with_bashir_2008`
- `scenario_mad_max_fury_road_2015`

### Modern craft batch

- `scenario_district_9_2009`
- `scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014`
- `scenario_boyhood_2014`
- `scenario_ex_machina_2014`

### Cross-era production batch

- `scenario_it_s_a_wonderful_life_1946`
- `scenario_the_400_blows_1959`
- `scenario_the_road_warrior_1981`
- `scenario_victoria_2015`

### Technology-history batch

- `scenario_halloween_1978`
- `scenario_tangerine_2015`
- `scenario_the_lighthouse_2019`
- `scenario_the_favourite_2018`

This batch compares anamorphic low-budget suspense, smartphone feature production, reconstructed early photographic response and revisionist period staging.

### Landscape and regional-cinema batch

- `scenario_no_country_for_old_men_2007`
- `scenario_into_the_wild_2007`
- `scenario_winter_s_bone_2010`
- `scenario_beasts_of_the_southern_wild_2012`

This batch compares border geography, biographical road production, researched rural noir and collectively built regional magical realism.

### Constructed worlds and time systems batch

- `scenario_groundhog_day_1993`
- `scenario_the_truman_show_1998`
- `scenario_moon_2009`
- `scenario_midnight_in_paris_2011`

This batch compares repeated-day continuity, an artificial surveillance town, miniature-based contained science fiction and photochemical period separation across one city.

### Minimalist road cinema and designed estrangement batch

- `scenario_stranger_than_paradise_1984`
- `scenario_paris_texas_1984`
- `scenario_the_bothersome_man_2006`
- `scenario_nebraska_2013`

This batch compares fixed-shot independent minimalism, chronologically produced road cinema, immaculate Nordic dystopian design and digitally reconstructed Midwestern black-and-white realism.

### European social and moral pressure batch

- `scenario_dogtooth_2009`
- `scenario_the_hunt_2012`
- `scenario_the_measure_of_a_man_2015`
- `scenario_revanche_2008`

This batch compares enclosed family allegory, post-Dogme community drama, semi-documentary labour cinema and Austrian noir transformed through rural duration.

### American independent storytelling and media-form batch

- `scenario_mystery_train_1989`
- `scenario_smoke_1995`
- `scenario_the_man_who_wasn_t_there_2001`
- `scenario_american_splendor_2003`

This batch compares episodic parallel time, dialogue-led neighbourhood ensemble, planned photochemical monochrome and documentary-comics-animation biography.

### Silent cinema foundations batch

- `scenario_a_trip_to_the_moon_1902`
- `scenario_the_cabinet_of_dr_caligari_1920`
- `scenario_nosferatu_1922`
- `scenario_battleship_potemkin_1925`

This batch compares theatrical trick film, Expressionist studio design, location-based Weimar horror and Soviet collision montage.

### Silent and early studio systems batch

- `scenario_the_phantom_carriage_1921`
- `scenario_the_general_1926`
- `scenario_metropolis_1927`
- `scenario_frankenstein_1931`

This batch compares Swedish literary silent cinema, practical railway action comedy, UFA architectural science-fiction spectacle and Universal sound horror.

### Late silent and early sound transition batch

- `scenario_the_passion_of_joan_of_arc_1928`
- `scenario_man_with_a_movie_camera_1929`
- `scenario_m_1931`
- `scenario_city_lights_1931`

This batch compares close-up silent modernism, reflexive documentary montage, offscreen early-sound crime procedure and selective synchronized sound preserving pantomime.

### 1930s production systems batch

- `scenario_king_kong_1933`
- `scenario_modern_times_1936`
- `scenario_snow_white_and_the_seven_dwarfs_1937`
- `scenario_the_rules_of_the_game_1939`

This batch compares integrated creature effects, industrial sound satire, feature-animation pipeline production and deep-space French ensemble staging.

### Classical Hollywood 1939–1942 batch

- `scenario_stagecoach_1939`
- `scenario_the_wizard_of_oz_1939`
- `scenario_citizen_kane_1941`
- `scenario_casablanca_1942`

This batch compares prestige location western production, MGM Technicolor musical fantasy, RKO modernist biography and Warner Bros. wartime studio melodrama.

### 1940s noir and realism batch

- `scenario_double_indemnity_1944`
- `scenario_brief_encounter_1945`
- `scenario_rome_open_city_1945`
- `scenario_the_third_man_1949`

This batch compares Paramount studio noir, British restrained melodrama, Italian neorealism under material scarcity and British location noir in occupied Vienna.

### 1950s Asian postwar cinema batch

- `scenario_rashomon_1950`
- `scenario_tokyo_story_1953`
- `scenario_seven_samurai_1954`
- `scenario_pather_panchali_1955`

This batch compares Daiei subjective period modernism, Shochiku domestic minimalism, Toho location action and Bengali location humanism.

### Postwar European modernism and New Waves batch

- `scenario_ordet_1955`
- `scenario_ashes_and_diamonds_1958`
- `scenario_persona_1966`
- `scenario_daisies_1966`

This batch compares Danish spiritual long-take chamber cinema, Polish Film School historical tragedy, Swedish psychological self-reflexivity and Czechoslovak feminist collage.

### Czechoslovak New Wave production systems batch

- `scenario_closely_watched_trains_1966`
- `scenario_the_firemens_ball_1967`
- `scenario_marketa_lazarova_1967`
- `scenario_the_cremator_1969`

This batch compares literary wartime tragicomedy, nonprofessional institutional satire, researched medieval historical modernism and grotesque political horror.

### European political and feminist modernism batch

- `scenario_cleo_from_5_to_7_1962`
- `scenario_the_conformist_1970`
- `scenario_jeanne_dielman_1975`
- `scenario_beau_travail_1999`

This batch compares French Left Bank real-time city cinema, Italian fascist memory design, Belgian durational domestic labour and French postcolonial military body cinema.

### New Hollywood and blockbuster transition batch

- `scenario_bonnie_and_clyde_1967`
- `scenario_the_godfather_1972`
- `scenario_jaws_1975`
- `scenario_star_wars_1977`

This batch compares European-influenced outlaw revision, prestige family crime production, open-water suspense and coordinated effects, editing, sound and music worldbuilding.

### 1960s scale and independent production systems batch

- `scenario_psycho_1960`
- `scenario_lawrence_of_arabia_1962`
- `scenario_2001_a_space_odyssey_1968`
- `scenario_night_of_the_living_dead_1968`

This batch compares economical black-and-white studio suspense, international 70mm location epic, engineered analogue effects modernism and regional collective low-budget horror.

## Verification rule

A registry record must:

1. refer to a playable Production Case scenario;
2. contain at least two independent HTTPS sources;
3. use sources from at least two publishers;
4. prefer filmmaker and department-head interviews, film institutes, archives, preservation records and established trade publications;
5. state which history and craft areas each source supports;
6. explain how each source supports the case;
7. record the verification date;
8. pass the registry and current-catalogue tests before merge.

A plot synopsis or review alone is not enough to verify production choices. It may support context or reception, but production claims require production reporting, filmmaker testimony, documented craft analysis or institutional records.

Claims that a film was the first to use a method, changed film history or strongly influenced later cinema require especially strong evidence. Repetition of a claim is not verification.

## Two status layers

### Case verification

- `seeded`: imported fallback content, not a completed manual Production Case.
- `needs_research`: manual brief without completed source review.
- `verified`: source review completed and recorded in the registry.

### Area coverage

- `source_verified`: the specific area is supported by inspectable evidence.
- `mapped`: the area is represented but still needs dedicated source review.
- `research_pending`: film-specific research is not complete.
- `not_central`: the area was considered but is not a central learning focus.

The registry is intentionally separate from the large brief files. This keeps evidence reviewable, prevents source metadata from bloating mission content and allows verification to proceed film by film.

## Player-facing status

Inside a verified case, the player can inspect:

- historical placement;
- before / historical moment / afterlife explanation;
- the complete 17-area audit;
- the sources supporting the case.

Evidence is part of learning and is never locked behind completion. Verification does not create points, ranks or certification.

## Next step

Continue researching the unverified catalogue in coherent historical groups:

- make every historical and technical alternative plausible and educational;
- explain concrete differences between comparison choices;
- connect context, screenplay, directing, performance, image, design, editing and sound;
- expose useful evidence directly in the case;
- replace `research_pending` only when the relevant area has been researched;
- avoid unsupported claims of innovation or influence.

Do not add generic budget, schedule, resource or prestige mechanics. Production conditions belong in a case only when they are documented facts that explain the film's actual method.
