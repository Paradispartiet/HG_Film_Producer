import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenPoliceStoryExpansionDefinitions = [
  {
    id: "scenario_police_story_1985",
    title: "Police Story",
    originalTitle: "Ging chaat goo si",
    aliases: ["Police Story 1", "Ging Chaat Goo Si", "警察故事"],
    year: 1985,
    titleType: "Movie",
    runtimeMins: 101,
    directors: ["Jackie Chan"],
    genres: ["Action", "Comedy", "Crime", "Thriller"],
    premise: "Build Police Story as a 1985 Golden Harvest Hong Kong production in which Jackie Chan's combined roles as director, co-writer, star and action choreographer make stunt labor, urban space and action construction part of authorship rather than invisible spectacle. Hong Kong Film Archive identifies Golden Harvest as production company, Jackie Chan and Edward Tang as screenwriters, and Chan as director, actor and action choreographer; Criterion adds executive producer Raymond Chow, producer Leonard Ho, production coordinator Willie Chan, production manager Wong Jo-Yee, production designer Oliver Wong, cinematographer Cheung Yiu-Jo, editor Peter Cheung Yiu-Chung, composer Michael Lai, special-effects credit Ng Kwok-Wa and the Jackie Chan Stunt Team. Keep those production roles distinct instead of collapsing the film into a star biography. HKFA describes Police Story as a decisive move away from Chan's earlier period kung-fu studio productions toward a contemporary Hong Kong action film using the city itself as production infrastructure: a squatter settlement, roads/highways, vertical urban spaces and a multi-storey shopping mall become action environments. Treat location choice as an industrial-aesthetic transformation, not merely backdrop. Criterion's historical essay links the project to Chan's dissatisfaction with The Protector and describes the Chan/Tang writing arrangement as set-piece-led: Chan developed action situations while Tang supplied connective plot structure. Preserve this as a sourced collaboration model rather than a universal claim about Hong Kong screenwriting. The film's action system depends on the Jackie Chan Stunt Team and on choreography designed for readable bodies moving through large spaces, props, vehicles and architecture. HKFA repeatedly emphasizes meticulous planning and the film's large-scale car, bus, high-rise, glass and shopping-mall sequences. Chan later described the climactic mall pole slide as roughly 75 feet with no protection; retain that as firsthand historical evidence of the production's risk culture while explicitly refusing to turn it into a repeatable production method. Modern production simulation must use safety engineering, doubles/rigging/previsualization or other controlled equivalents rather than reproducing historical danger. Criterion records the film at 100 minutes and 2.35:1; HKFA's 2018 and later restored DCP records use 101 minutes. Use 101 minutes canonically because the Hong Kong institutional archive consistently catalogs that duration, while preserving 100/101 as catalog rounding/presentation provenance rather than inventing undocumented cuts. Keep HKFA's later 4K restored versions separate from original 1985 color production and from later dubbed/export soundtracks. Do not invent camera body, lens package, film-stock emulsion, number of cameras, lighting ratios, stunt-glass composition, exact rigging, pyrotechnic formulas, vehicle modifications, sound-recorder/microphone models, daily stunt schedule or injury mechanics beyond the cited historical record.",
    sourceId: "hkfa_police_story_1985",
    sourceUrl: "https://www.filmarchive.gov.hk/en/web/hkfa/pe-event-2018-1-1-3.html",
    scenarioType: "golden_harvest_hong_kong_urban_action_jackie_chan_stunt_team_location_scale_choreography_production",
    requiredChoicesSeed: {
      screenplay: ["jackie_chan_edward_tang_setpiece_connective_plot_collaboration", "modern_hong_kong_cop_action_shift", "do_not_generalize_one_workflow_to_all_hong_kong_cinema"],
      camera: ["cheung_yiu_jo_large_space_action_readability", "urban_location_architecture_and_body_geography", "no_invented_camera_lens_stock_or_multi_camera_package"],
      editing: ["peter_cheung_yiu_chung_action_geography_and_comic_timing", "setpiece_to_connective_plot_structure", "101_minute_canonical_preserve_100_catalog_variance"],
      sound: ["michael_lai_score_and_theme_system", "production_sound_not_technically_overclaimed", "no_invented_recorder_microphone_dub_or_mix_chain"],
      themes: ["film_history", "1980s", "hong_kong", "golden_harvest", "jackie_chan", "jackie_chan_stunt_team", "urban_action", "action_choreography", "stunt_labor", "location_production", "shopping_mall", "squatter_settlement", "vehicles", "production_design", "editing", "comic_action", "risk_culture", "modern_safety_boundary", "restoration_provenance"],
    },
    learningGoals: [
      "Model Police Story as a Golden Harvest production with distinct producer, production, design, camera, editing, music, special-effects and stunt-team labor rather than as Jackie Chan acting alone.",
      "Treat Chan's director/co-writer/star/action-choreographer combination as an unusual authorship structure whose results still depended on a large collaborative production system.",
      "Explain the shift from earlier sound-stage period kung-fu production toward contemporary Hong Kong streets, roads, squatter-settlement space and shopping-mall architecture.",
      "Use HKFA's account of meticulous large-space choreography to connect action design to location access, spatial planning and performer coordination.",
      "Preserve the Chan/Edward Tang set-piece-plus-connective-plot collaboration as film-specific sourced evidence rather than a general formula for Hong Kong screenwriting.",
      "Keep Cheung Yiu-Jo's cinematography authorship visible while refusing unsupported camera body, lens, stock, multi-camera and exposure details.",
      "Keep Peter Cheung Yiu-Chung's editing authorship visible in the maintenance of action geography, impact, reaction and comedy without inventing an undocumented cutting workflow.",
      "Keep Oliver Wong's production design and Ng Kwok-Wa's special-effects credit distinct from stunt choreography and from the found architecture of Hong Kong locations.",
      "Keep the Jackie Chan Stunt Team visible as organized specialist labor rather than treating dangerous physical performance as individual spontaneity.",
      "Treat Chan's firsthand account of the mall pole stunt's extreme exposure as historical risk evidence, not as a safe or repeatable production instruction; modern simulation must substitute controlled safety methods.",
      "Preserve Michael Lai's score/theme-song production layer separately from location sound and later dubbed/export soundtrack histories.",
      "Use 101 minutes canonically from repeated HKFA records while preserving Criterion's 100-minute catalog value as provenance rather than inventing an alternate cut.",
      "Keep later 4K restoration/DCP presentations and English-dubbed soundtrack options separate from the original 1985 production record.",
      "Use Police Story to represent Hong Kong's distinct commercial action-production system without collapsing it into Mainland Fifth Generation or Taiwan New Cinema histories.",
    ],
    phases: [
      { id: "pitch", label: "Build a contemporary Hong Kong action vehicle around place and movement", player_task: "Define a modern police story whose production identity comes from Hong Kong urban spaces and comic-action choreography rather than recycling an earlier period-kung-fu setting." },
      { id: "research", label: "Map production institutions, urban spaces and safe action equivalents", player_task: "Map Golden Harvest roles, stunt-team labor, roads, dense housing and mall architecture, while translating historical high-risk feats into modern controlled simulation rather than replication." },
      { id: "screenplay", label: "Connect designed set pieces through character and police plot", player_task: "Use the sourced Chan/Tang collaboration model to connect action situations with investigation, witness protection, comedy and escalation without treating props alone as a screenplay." },
      { id: "performance", label: "Coordinate acting, comedy and specialist action labor", player_task: "Stage Chan, Brigitte Lin, Maggie Cheung and the ensemble so comic reactions and character pressure remain legible around action, while stunt-team work stays separately credited." },
      { id: "design", label: "Turn found urban architecture into readable action space", player_task: "Coordinate Oliver Wong's design layer with streets, vehicles, commercial interiors and the multi-storey mall while keeping found location and constructed/altered elements conceptually distinct." },
      { id: "cinematography", label: "Photograph bodies clearly across large moving spaces", player_task: "Use Cheung Yiu-Jo's credited cinematography to preserve entrances, trajectories, obstacles and consequences across action geography without inventing camera bodies, lenses or an unsupported multi-camera scheme." },
      { id: "editing", label: "Preserve geography before accelerating impact", player_task: "Use Peter Cheung Yiu-Chung's editing layer to organize wide spatial information, movement, reaction and comic timing so escalation remains readable rather than becoming disconnected impact montage." },
      { id: "sound", label: "Separate score, effects and later soundtrack versions", player_task: "Keep Michael Lai's score/theme layer, production sound and later dubbed/export tracks as distinct histories while refusing undocumented recording or mixing hardware." },
      { id: "release", label: "Separate the 1985 Hong Kong production from later restoration and export versions", player_task: "Track original production, local/international circulation, later dubbed versions and HKFA 4K restorations as separate layers, preserving 100/101-minute catalog provenance without fabricating cuts." },
    ],
  },
] as const;

export function mergeChapterSixteenPoliceStoryExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenPoliceStoryExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_police_story_verified",
      source: { list_id: "manual_chapter_sixteen_police_story_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: { title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 },
      scenario_type: definition.scenarioType,
      production_challenge: definition.premise,
      required_choices_seed: definition.requiredChoicesSeed,
      phases: definition.phases,
      learning_goals_seed: definition.learningGoals,
      manual_enrichment_needed: [],
    });
    nextPosition += 1;
  }
  return merged;
}
