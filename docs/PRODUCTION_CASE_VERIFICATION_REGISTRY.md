# Production Case verification registry

## Purpose

The manual Production Case briefs are film-specific teaching material, but `verificationStatus` must not be changed from `needs_research` to `verified` without inspectable evidence.

The source-backed registry is exposed through:

- `src/ui/data/scenarioProductionVerificationRegistry.ts`

Source records are divided into reviewable batch files:

- `src/ui/data/scenarioProductionVerification.ts`
- `src/ui/data/scenarioProductionVerificationMethodBatch.ts`
- `src/ui/data/scenarioProductionVerificationModernBatch.ts`
- `src/ui/data/scenarioProductionVerificationCrossEraBatch.ts`
- `src/ui/data/scenarioProductionVerificationTechnologyBatch.ts`
- `src/ui/data/scenarioProductionVerificationLandscapeBatch.ts`
- `src/ui/data/scenarioProductionVerificationConstructedWorldsBatch.ts`

The unified registry currently covers thirty-two cases.

The same thirty-two cases also have source-backed film-history profiles in:

- `src/ui/data/scenarioFilmStudyMap.ts`
- `src/ui/data/scenarioFilmStudyTechnologyBatch.ts`
- `src/ui/data/scenarioFilmStudyLandscapeBatch.ts`
- `src/ui/data/scenarioFilmStudyConstructedWorldsBatch.ts`

The complete 17-area audit is defined in:

- `src/core/filmStudyCoverage.ts`
- `docs/FILM_HISTORY_AND_CRAFT_MAPPING.md`

All 161 cases receive the same audit structure, but this does **not** mean that all 161 are verified. The remaining 129 must show their missing film-history and craft research as `research_pending` instead of displaying generic claims as facts.

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

This batch compares four distinct historical production systems:

- anamorphic low-budget suspense and the formation of modern slasher grammar;
- smartphone capture as a credible feature-production system;
- reconstruction of early photographic response through stock, optics, filtration and aspect ratio;
- revisionist period staging through 35mm, natural light and extreme wide-angle lenses.

### Landscape and regional-cinema batch

- `scenario_no_country_for_old_men_2007`
- `scenario_into_the_wild_2007`
- `scenario_winter_s_bone_2010`
- `scenario_beasts_of_the_southern_wild_2012`

This batch compares four ways location and regional knowledge become production method:

- neo-western pursuit built through border geography, acoustic detail and restrained score;
- biographical road cinema assembled across actual locations, seasons and nonlinear memory;
- rural noir grounded in Ozarks research, local casting, real properties and digital independent production;
- collective 16mm magical realism built with South Louisiana communities, nonprofessional performers and documentary-influenced observation.

### Constructed worlds and time systems batch

- `scenario_groundhog_day_1993`
- `scenario_the_truman_show_1998`
- `scenario_moon_2009`
- `scenario_midnight_in_paris_2011`

This batch compares four ways an abstract premise becomes a physical production system:

- time-loop comedy built through repeated geography, performance variation, editorial compression and recurring music;
- media satire built through a master-planned town, commercial lighting, surveillance framing and an in-world broadcast soundtrack;
- contained science fiction built from a constraint-shaped screenplay, one principal actor, studio design, miniatures and restrained digital compositing;
- time-travel city fantasy built through Paris locations, period research, frame-specific redressing, film stocks, lenses, lighting and color separation.

## Verification rule

A registry record must:

1. refer to a playable Production Case scenario;
2. contain at least two independent HTTPS sources;
3. use sources from at least two publishers;
4. prefer filmmaker and department-head interviews, film institutes, archival production histories, preservation records and established trade publications;
5. state which film-history and craft areas each source supports;
6. explain briefly how the source supports the brief;
7. record the verification date;
8. pass the registry tests before merge.

A plot synopsis or review alone is not enough to verify production choices. It may support context or reception, but production claims should be grounded in production reporting, filmmaker testimony, documented craft analysis or institutional records.

Claims that a film was the first to use a method, changed film history or strongly influenced later cinema require especially strong evidence. Popularity or repetition of the claim is not enough.

## Two separate status layers

### Case verification

- `seeded`: imported fallback content, not a manual Production Case.
- `needs_research`: manual brief without completed source review.
- `verified`: source review completed and recorded in the unified registry.

### Area coverage

- `source_verified`: a specific history or craft area is supported by inspectable evidence.
- `mapped`: the area is represented in the current brief but still needs dedicated source review.
- `research_pending`: film-specific research has not been completed.
- `not_central`: the area was considered but is not a central learning focus for this case.

A case-level `verified` label does not automatically mean every one of the 17 areas is fully researched. The area audit must remain more precise than the case-level label.

The registry is intentionally separate from the large brief file. This keeps evidence reviewable, prevents source metadata from bloating mission content and allows verification to proceed film by film. Batch files also keep each evidence review small enough to inspect directly.

## Player-facing status

The Production Cases library and case view must distinguish verified material from pending research. Inside a case, the player can inspect:

- the historical placement;
- the before / historical moment / afterlife explanation;
- the full history-and-craft coverage audit;
- the sources supporting the case.

Evidence is available as part of learning and is not locked behind completion.

Verification supports learning; it does not support a score or ranking. A verified case gives the player stronger explanations and inspectable evidence, not more points or a higher tier.

## Next step

Thirty-two cases now have source-backed Production Case verification and source-backed film-history profiles. Continue researching the remaining 129 in coherent historical batches:

- make every historical and technical alternative plausible and educational;
- ensure feedback explains the concrete distinction between choices;
- connect historical context, screenplay, directing, performance, image, design, editing and sound;
- expose useful evidence directly in the case;
- replace `research_pending` only when the relevant area has been researched;
- avoid claims of innovation or influence that the sources do not establish.

Do not add generic budget, schedule, resource or prestige mechanics to this set. Production conditions belong in a case only when they are documented facts that explain the film's actual method.

Do not mark the full catalogue verified based on a generic filmography source, release metadata or the internal consistency of the brief alone.
