# The Florida Project (2017) — Production Case verification

Verified: **2026-08-11**

Scenario: `scenario_the_florida_project_2017`

## Result

The Florida Project is materialized as a film-specific Production Case inside the existing `independent_storytelling` → `american_regional_identity_place_belonging` system.

The case contains:

- all 17 Film Study areas;
- 14 `source_verified` areas;
- 2 `mapped` areas;
- 1 `not_central` area;
- 12 inspectable HTTPS sources from 12 distinct publishers;
- exactly three dedicated comparison donors;
- no scenario-seed, production-brief, workflow, playable-catalogue or global resolver change.

## Locked seed

- position: **129**
- IMDb: `tt5649144`
- runtime: **111 min**
- director: **Sean Baker**
- genre: **Drama**
- scenario type: `character_drama_production`

The seed remains unchanged.

## Production system

The case does not model The Florida Project as a generic poverty drama or generic childhood film. Its production logic coordinates a specific post-recession motel ecosystem with a child-centred point of view.

The system combines:

- Sean Baker and Chris Bergoch's field research among Kissimmee motel residents, managers, workers, nearby businesses and social-service agencies;
- the week-to-week motel economy beside Walt Disney World's tourist geography;
- a thirty-five-day shoot in and around the operating Magic Castle Motel and Route 192;
- Brooklynn Prince and other young performers alongside first-time feature actor Bria Vinaite, local newcomers and Willem Dafoe;
- scripted scenes combined with controlled child improvisation and long-take performance space;
- Stephonik Youth's enhancement of existing candy-coloured roadside architecture rather than replacement of the real environment;
- Alexis Zabé's predominantly anamorphic 35 mm photography, with Alexa night exteriors and an iPhone ending passed through a film-based post workflow;
- daylight stocks and natural-looking Florida light used to hold saturated pastel colour without making the motel world purely fantastical;
- Sean Baker's chronological scene-by-scene fine-cut method, which preserves apparently incidental play and daily procedure instead of compressing them into plot information;
- sparse, strategically placed music, including `Celebration` and its later orchestral reprise;
- documentary-pressure research and location practice inside a fully scripted fiction.

The result is a production model where childhood freedom and adult precarity occupy the same physical motel landscape. Economic hardship is therefore carried by routine, location, casting, performance, colour, sound, editing and offscreen adult knowledge rather than explanatory issue-film dialogue.

## Existing family

The resolver family is `american_regional_identity_place_belonging` inside `independent_storytelling`.

This family is appropriate because the film's meaning cannot be separated from a highly specific American roadside geography: motel rooms, balconies, parking lots, gift shops, tourist facades, highways, abandoned structures and the looming Disney economy determine both children's play and adults' survival choices.

The film is served through the existing `scenarioFilmStudyAmericanRegionalGranTorinoCatalog.ts` specialty helper before the generic regional profile pool. It therefore receives a film-specific donor sequence without changing the family's established generic behavior.

## Dedicated donors

1. `scenario_george_washington_2000`
   - child ensemble and regional poverty;
   - lyrical, documentary-pressure observation;
   - landscape and marginal built environments as part of childhood perception.

2. `scenario_gas_food_lodging_1992`
   - working-class mother/daughter life;
   - roadside and motel-like economic geography;
   - regional colour, female family pressure and popular fantasy existing beside material scarcity.

3. `scenario_wendy_and_lucy_2008`
   - economic precarity rendered through ordinary procedures and functional locations;
   - small material setbacks becoming dramatic structure;
   - unsentimental observation rather than rescue narrative.

The existing Gran Torino donor sequence remains exactly:

- `scenario_the_straight_story_1999`
- `scenario_mississippi_masala_1991`
- `scenario_the_rider_2017`

A dedicated regression test locks that sequence.

## Coverage decision

### `source_verified`

- historical context
- movement and tradition
- industry and production context
- reception and legacy
- screenplay
- directing
- performance
- production design
- cinematography
- lighting
- camera format
- editing
- music
- documentary method

### `mapped`

- costume and makeup — clothing, tattoos, hair and repeated everyday looks are legible production choices, but the inspected source set does not provide a sufficiently detailed department-level process account;
- sound design — Baker documents preliminary sound work during editing and the final sound personnel are inspectable, but a complete production-sound/editorial/mix workflow is not documented strongly enough for `source_verified`.

### `not_central`

- effects and animation — invisible cleanup and the mixed-format film-out workflow exist, but effects spectacle or animation is not a central production system.

## Sources

1. Eastman Kodak Company — production, field research and 35 mm system: https://www.kodak.com/en/motion/blog-post/the-florida-project/
2. Filmmaker Magazine — union production, child performance, motel research and camera method: https://filmmakermagazine.com/103243-its-a-small-world/
3. Film Comment — Cannes interview on child viewpoint, motel economy and Magic Castle: https://www.filmcomment.com/interview-sean-baker-florida-project/
4. Directors Guild of America — filmmaker making-of discussion: https://www.dga.org/events/2017/november2017/floridaproject_qna_1017
5. Film at Lincoln Center — NYFF casting and production discussion: https://www.filmlinc.org/nyff2017/daily/watch-the-florida-project-team-on-the-casting-process-and-the-power-of-cinema/
6. postPerspective — Technicolor PostWorks colour and mixed-format workflow: https://postperspective.com/color-plays-big-role-director-sean-bakers-florida-project/
7. Post Magazine — Alexis Zabé on cinematography and colour structure: https://www.postmagazine.com/Publications/Post-Magazine/2018/May-1-2018/The-DP-Colorist-Relationship-I-The-Florida-Proje.aspx
8. RogerEbert.com — Baker on Disney contrast, music and chronological editing: https://www.rogerebert.com/interviews/when-you-wish-upon-a-star-sean-baker-on-the-florida-project
9. Academy of Motion Picture Arts and Sciences — Willem Dafoe nomination: https://www.oscars.org/oscars/ceremonies/2018
10. A24 — official film, cast, synopsis and awards record: https://a24films.com/films/the-florida-project
11. Slant Magazine — Baker on neorealism, first-time performers and child-eye perspective: https://www.slantmagazine.com/film/interview-sean-baker-on-making-the-florida-project/
12. Newcity Film — Baker's chronological fine-cut and preliminary sound-design process: https://www.newcityfilm.com/2017/10/18/childhoods-id-sean-baker-on-the-florida-project/

## Scope control

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`
- `src/ui/data/scenarioProductionBriefs.ts`
- workflow files
- playable scenario catalogue
- global Film Study resolver ordering
- the generic `independent_storytelling` profile pool
- any established donor sequence

## Audit effect

- verified Production Cases: **362 → 363**
- remaining cases: **16 → 15**
- source-backed Film Study profiles: **362 → 363**
- remaining seed-origin cases: **14 → 13**
- remaining 2010s cases: **14 → 13**
- remaining Drama cases: **15 → 14**

Next unverified Production Case after merge: `scenario_the_killing_of_a_sacred_deer_2017`.
