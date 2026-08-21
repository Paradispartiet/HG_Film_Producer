import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenABetterTomorrowExpansionDefinitions = [
  {
    id: "scenario_a_better_tomorrow_1986",
    title: "A Better Tomorrow",
    originalTitle: "Ying hung boon sik",
    year: 1986,
    titleType: "Movie",
    runtimeMins: 96,
    directors: ["John Woo"],
    genres: ["Action", "Crime", "Drama"],
    premise: "Build A Better Tomorrow as a Cinema City / Film Workshop Hong Kong production in which producer Tsui Hark gave John Woo a route back from a career low and Woo radically personalized a gangster-remake project into a performance-led action melodrama. Hong Kong Film Archive identifies John Woo as director, Tsui Hark as producer, Cinema City as production company, John Woo, Chan Hing-kai and Leung Suk-wah as screenwriters, Wong Wing-hang as cinematographer, Kam Ma as editor and Joseph Koo as composer; the archive's recent 4K programme lists a 96-minute restored version, while an earlier archive programme lists 95 minutes, so edition/runtime variance must remain visible rather than flattened. HKFA describes the project as a remake of Patrick Lung Kong's The Story of a Discharged Prisoner (1967), retaining the ex-gangster redemption premise while intensifying blood-brotherhood and tragic loyalty. Woo's own BFI/Sight and Sound accounts complicate a simple 'producer supplied finished remake script' story: he says the idea was shared with Hark, that he basically wrote the screenplay, changed an initial three-women concept into three men and projected his own feelings into the characters. Preserve these overlapping accounts as development evidence rather than forcing them into a single authorship anecdote. Woo also says that on A Better Tomorrow he concentrated intensely on Ti Lung, Chow Yun-fat and Leslie Cheung as actors rather than treating them as fighters, using staging, image and time to make performance carry the heroic register. His 2026 BFI interview describes his Hong Kong action practice as instinctive and music-driven, often worked out after arriving on set rather than from storyboards, with slow motion treated as part of performance and rhythmic design. That retrospective supports a process model but does not prove that every A Better Tomorrow set piece used the same focal lengths, frame rates, number of cameras or shooting days; those scene-specific details remain unset. HKFA identifies Mark as an original character in the remake and credits Yu Ka-on with the character's iconic styling, while noting the film's record-setting Hong Kong success and wider influence. Keep performance/image construction distinct from later audience imitation and from the retrospective label 'heroic bloodshed'. The reviewed institutional sources do not establish a complete camera body, lens package, film-stock emulsion, exposure recipe, lighting package, production-sound recorder, microphone, mix console, exact stunt rig, pyrotechnic charge design, squib specification, blank-ammunition procedure, laboratory recipe or scene-by-scene schedule. Do not invent any of them. The film's later record box office, sequels, international circulation, restorations and genre influence are downstream reception and industrial history, not evidence for undocumented production technique.",
    sourceId: "hkfa_a_better_tomorrow_1986",
    sourceUrl: "https://www.filmarchive.gov.hk/en/web/hkfa/2025/mtgseoul/pe-event-2025-mtgseoul-fs-film05.html",
    scenarioType: "cinema_city_film_workshop_remake_personalized_performance_led_hong_kong_action_melodrama",
    requiredChoicesSeed: {
      screenplay: ["lung_kong_1967_remake_lineage", "woo_hark_shared_development_with_woo_rewrite", "brotherhood_redemption_melodrama"],
      camera: ["wong_wing_hang_cinematography", "performance_led_slow_motion_and_action_rhythm", "no_invented_camera_body_lens_stock_focal_map_frame_rate_or_exposure_recipe"],
      editing: ["kam_ma_editorial_authorship", "action_melodrama_rhythm_and_temporal_emphasis", "no_invented_edit_room_or_scene_specific_cutting_recipe"],
      sound: ["joseph_koo_music_distinct_from_dialogue_effects_and_mix", "music_informs_woo_action_process_without_proving_exact_playback_for_each_scene", "no_invented_recorder_microphone_console_weapon_sound_or_mix_hardware"],
      themes: ["film_history", "1980s", "hong_kong_cinema", "cinema_city", "film_workshop", "john_woo", "tsui_hark", "patrick_lung_kong", "the_story_of_a_discharged_prisoner", "chow_yun_fat", "ti_lung", "leslie_cheung", "performance", "gangster_melodrama", "gunplay", "slow_motion", "brotherhood", "redemption", "remake", "producer_director_collaboration", "hong_kong_action", "heroic_bloodshed_label_downstream", "restoration", "runtime_variance"],
    },
    learningGoals: [
      "Model A Better Tomorrow as a Cinema City and Film Workshop production shaped by Tsui Hark's producing support and John Woo's return from a career low.",
      "Separate the 1967 Story of a Discharged Prisoner remake lineage from the specific 1986 screenplay and production decisions.",
      "Preserve the difference between HKFA's remake framing and Woo's own account of shared development followed by extensive personal rewriting.",
      "Treat Woo's shift from an early three-women concept to three men as documented development history rather than a claim that a finished earlier screenplay simply changed genders.",
      "Keep John Woo, Chan Hing-kai and Leung Suk-wah visible as the credited screenplay team while distinguishing credit from later recollection about who originated or rewrote which ideas.",
      "Treat Ti Lung, Chow Yun-fat and Leslie Cheung primarily as performance collaborators in Woo's production account, not as interchangeable action technicians.",
      "Use Woo's documented emphasis on performance, slow motion and musical rhythm to understand action staging without inventing a scene-by-scene technical recipe.",
      "Keep Woo's general Hong Kong practice of working without storyboards as retrospective process evidence rather than proof that every shot in A Better Tomorrow was wholly unplanned.",
      "Keep Wong Wing-hang's cinematography distinct from Kam Ma's editing, Joseph Koo's music and Yu Ka-on's character styling.",
      "Keep Mark's iconic styling as a designed production element and separate its creation from later audience imitation and merchandising-like cultural afterlife.",
      "Preserve HKFA's 95/96-minute programme variance as an edition/restoration issue instead of asserting one universally exact runtime for every surviving copy.",
      "Treat the later 'heroic bloodshed' label as a retrospective genre-historical category, not as a production department or a complete explanation of the film's methods.",
      "Keep Cinema City's industrial position and its partnership with Film Workshop distinct from Woo and Hark's personal friendship and creative collaboration.",
      "Keep later record box office, sequels, international circulation and restoration downstream from the 1986 production process.",
      "Avoid inventing unsupported camera bodies, lens packages, film stocks, exposure recipes, lighting packages, sound hardware, stunt rigs, pyrotechnic specifications, ammunition procedures, lab recipes or exact scene schedules.",
    ],
    phases: [
      { id: "development", label: "Rebuild a remake premise around personal authorship", player_task: "Trace the Lung Kong source, Hark/Woo development and Woo's documented rewrite without flattening conflicting recollections into one simplistic origin story." },
      { id: "producer_director", label: "Use producer support without erasing director authorship", player_task: "Model Tsui Hark's active support and suggestions alongside Woo's rewriting and directing, keeping friendship, producing authority and authorship distinct." },
      { id: "casting_performance", label: "Build heroic action from actors rather than fighters", player_task: "Center Ti Lung, Chow Yun-fat and Leslie Cheung's performance qualities as Woo explicitly describes, rather than treating action as stunt technique alone." },
      { id: "visual_identity", label: "Design character iconography without confusing it with reception", player_task: "Keep Yu Ka-on's documented Mark styling inside production design/styling while treating later fashion imitation as downstream cultural reception." },
      { id: "cinematography", label: "Photograph performance and action without inventing a camera package", player_task: "Anchor the image system in Wong Wing-hang's credited cinematography and Woo's performance/slow-motion priorities while leaving unsupported body, lens, stock, frame-rate and exposure specifics unset." },
      { id: "action_staging", label: "Build action rhythm through set observation, movement and performance", player_task: "Use Woo's retrospective Hong Kong process as a method boundary: music, movement and on-set adaptation may guide staging, but do not assign undocumented focal lengths, camera counts, stunt rigs or pyro methods to specific scenes." },
      { id: "editing", label: "Shape action and melodrama as one temporal system", player_task: "Keep Kam Ma's credited editorial authorship central to rhythm, reaction and slow-motion emphasis without inventing edit-room hardware or a universal cutting formula." },
      { id: "sound_music", label: "Separate score, effects, dialogue and final mix", player_task: "Keep Joseph Koo's music distinct from dialogue and action sound; Woo's use of music for inspiration does not establish undocumented playback, recording or mixing hardware." },
      { id: "versioning", label: "Preserve runtime and restoration variance", player_task: "Record HKFA's 95- and 96-minute programme records as edition evidence rather than silently choosing one as universal truth." },
      { id: "release_legacy", label: "Separate production from the hit and the genre it helped define", player_task: "Keep record box office, sequel demand, international influence, heroic-bloodshed naming and later restoration downstream from the production evidence." },
    ],
  },
] as const;

export function mergeChapterSixteenABetterTomorrowExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenABetterTomorrowExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_a_better_tomorrow_verified",
      source: { list_id: "manual_chapter_sixteen_a_better_tomorrow_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
