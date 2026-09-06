import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenBrokerExpansionDefinitions = [
  {
    id: "scenario_broker_2022",
    title: "Broker",
    originalTitle: "Broker",
    aliases: ["Les Bonnes Étoiles", "Beurokeo", "브로커"],
    year: 2022,
    productionYear: 2022,
    principalPhotographyYear: 2021,
    titleType: "Movie",
    runtimeMins: 129,
    directors: ["Hirokazu Kore-eda"],
    genres: ["Drama"],
    sourceId: "festival_cannes_broker_2022",
    sourceUrl: "https://www.festival-cannes.com/en/f/broker/",
    scenarioType: "award_priority_cannes_2022_best_actor_2021_korea_april_june_location_road_movie_natural_light_write_edit_shoot_parallel_bounded_camera_post",
    premise: "Build Broker as a new Chapter 19 source-first Production Case only after branch, PR and tree-wide checks prove that no existing scenario, Film Study or Production Verification identity exists under Broker, Les Bonnes Étoiles, Beurokeo, 브로커 or Hirokazu Kore-eda. Festival de Cannes locks the film to the 2022 Competition, Best Actor award for Song Kang-ho, production year 2022, South Korea, 129 minutes, and Hirokazu Kore-eda as director, screenwriter and editor, with Hong Kyung-pyo as cinematographer and Choi Tae-young credited for sound. The official Cannes international press kit establishes the production chronology separately: production started April 14, 2021 and wrapped June 22, 2021. It also identifies CJ ENM as presenter, Zip Cinema as production company, Lee Eugene as producer, Song Dae-chan, Fukuma Miyuki and Yoon Hye-joon as co-producers, Hong Kyung-pyo as director of photography, Park Cheong-woo as gaffer, Lee Mok-won as production designer, Choi Se-yeon as costume designer, Kim Seo-young for makeup and hair, Jung Jae-il for music, Eun Hee-soo as production sound mixer and Choi Tae-young as sound supervisor. The same press kit states that Hong focused on natural light and waited for naturally occurring sunlight, driving rain and wind instead of manufacturing those conditions, while Lee's production design work used locations including Busan, Yeongdeok, Uljin and Wolmido to preserve lived-in realism. KOFIC separately reports that 98 percent of the film was location shooting and that the road-film journey from Busan along Korea's east coast and toward Incheon largely followed the production's actual location movement. Kore-eda states that his normal process of shooting, editing at night and rewriting for the next day continued on Broker; the ending changed in response to Song Kang-ho's performance. He also documents a two-day Ferris-wheel sequence shot with a single camera because only one camera operator fit inside the cabin, with Kore-eda monitoring remotely from the ground. Composer Jung Jae-il entered during the edit and even attended the dub, revising passages against rain and car sound. Treat all of these as direct production-method evidence. Do not infer the main camera model, lens family, body count, codec, bit depth, sensor mode, filtration, focal-length strategy, ISO/exposure settings, media/offload/checksum topology, complete lighting/grip package, sound-recorder/microphone/wireless package, ADR/Foley topology, editorial software/storage, color-management pipeline, VFX shot census/vendors/techniques, final negative cost, financing shares, insurance terms or DCP/audio mastering lineage where the locked sources do not establish them.",
    requiredChoicesSeed: {
      award: ["cannes_2022_best_actor_song_kang_ho", "selection_obligation_not_technical_evidence"],
      chronology: ["film_year_2022", "cannes_production_year_2022", "production_start_2021_04_14", "production_wrap_2021_06_22", "chronology_provenance_boundary"],
      production: ["cj_enm_presenter_financier_distributor", "zip_cinema_production", "lee_eugene_producer", "song_dae_chan_fukuma_miyuki_yoon_hye_joon_coproducers"],
      locations: ["south_korea_entire_production", "98_percent_location_shooting", "busan", "yeongdeok", "uljin", "wolmido_incheon", "road_movie_route_matches_location_movement"],
      camera: ["hong_kyung_pyo", "single_camera_ferris_wheel_scene", "camera_model_unresolved", "lens_package_unresolved", "recording_details_unresolved"],
      lighting: ["park_cheong_woo_gaffer", "natural_light_priority", "wait_for_sun_rain_wind", "full_lighting_package_unresolved"],
      design: ["lee_mok_won", "lived_in_location_realism", "location_specific_color_and_texture"],
      costume_makeup: ["choi_se_yeon_costume", "kim_seo_young_makeup_hair"],
      editing: ["kore_eda_editor", "shoot_edit_rewrite_parallel", "ending_rewritten_during_production", "editorial_infrastructure_unresolved"],
      sound: ["eun_hee_soo_production_sound_mixer", "choi_tae_young_sound_supervisor", "sound_hardware_unresolved"],
      music: ["jung_jae_il", "music_developed_during_edit", "composer_attended_dub", "rain_car_sound_interaction"],
      effects: ["vfx_scope_unresolved"],
      runtime: ["cannes_129_minutes", "kofic_129_minutes"],
      themes: ["film_history", "2022", "principal_photography_2021", "cannes_best_actor", "korean_production", "road_movie", "location_realism", "chapter19"]
    },
    learningGoals: [
      "Explain why Broker must be materialized only after English, French, romanized Korean, Korean-script and Kore-eda reuse checks are negative.",
      "Use the Cannes 2022 Best Actor award for Song Kang-ho as a corrective selection obligation rather than craft evidence.",
      "Preserve film/award year 2022 and Cannes production year 2022 separately from the April 14-June 22, 2021 production window.",
      "Identify Hirokazu Kore-eda as director, screenwriter and editor without collapsing those roles into one undifferentiated authorship claim.",
      "Identify Hong Kyung-pyo as director of photography and distinguish sourced visual-method evidence from unresolved equipment detail.",
      "Identify CJ ENM and Zip Cinema in their documented presentation/production/investment/distribution roles without inventing ownership percentages.",
      "Identify Lee Eugene as producer and Song Dae-chan, Fukuma Miyuki and Yoon Hye-joon as co-producers from the official press kit.",
      "Use April 14, 2021 as the sourced production start and June 22, 2021 as the sourced wrap date.",
      "Explain the significance of a 98-percent location-shooting model for a road film rather than treating locations as background trivia.",
      "Map Busan, Yeongdeok, Uljin and Wolmido/Incheon as directly documented production locations.",
      "Explain how the production's geographic movement largely followed the characters' road journey.",
      "Use the press kit's natural-light priority as a sourced cinematography principle.",
      "Explain that sunlight, driving rain and wind were sometimes awaited as natural conditions rather than manufactured artificially.",
      "Identify Park Cheong-woo as gaffer while keeping the complete lighting and grip package unresolved.",
      "Identify Lee Mok-won as production designer and connect his work to lived-in, location-specific realism without inventing set-build inventories.",
      "Identify Choi Se-yeon as costume designer and Kim Seo-young as makeup and hair designer without inventing material or continuity workflows.",
      "Explain Kore-eda's shoot-edit-rewrite-in-parallel process using his direct account.",
      "Explain how Song Kang-ho's performance prompted Kore-eda to revise the intended ending during production.",
      "Use the Ferris-wheel sequence as a bounded camera-method case: one camera, one operator in the cabin, remote monitoring, two shooting days.",
      "Do not generalize the Ferris-wheel single-camera constraint into an unsupported claim about the whole film's camera-body count.",
      "Identify Eun Hee-soo as production sound mixer and Choi Tae-young as sound supervisor.",
      "Keep recorder, microphone, wireless, ADR, Foley and mix-stage topology unresolved where the sources do not specify them.",
      "Identify Jung Jae-il as composer and explain that score development continued through editing and into the dub.",
      "Explain how Kore-eda and Jung evaluated music against rain and vehicle sound without inventing scoring-stage or orchestration details.",
      "Use 129 minutes as canonical runtime because Cannes and KOFIC agree.",
      "Keep camera model, lens family, codec, bit depth, sensor mode and filtration unresolved.",
      "Keep media/offload/checksum topology and data storage unresolved.",
      "Keep complete lighting/grip inventory and exposure strategy unresolved despite the documented natural-light philosophy.",
      "Keep editorial software, storage, proxy and conform topology unresolved despite Kore-eda's direct description of his workflow.",
      "Keep VFX shot count, vendors and techniques unresolved; do not infer absence of VFX merely from a realistic style.",
      "Keep final budget, financing percentages, recoupment, insurance and legal terms unresolved.",
      "Keep color-management and DCP/audio mastering lineage unresolved.",
      "Complete all 17 Film Study areas with explicit source-verified, mapped, research-pending or not-central status.",
      "Close the Cannes obligation only when one unique scenario, one Film Study, one PV record and an exact one-film corrective-queue reduction agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes Best Actor obligation", player_task: "Use Song Kang-ho's 2022 award only to establish corrective priority." },
      { id: "reconciliation", label: "Search every Broker identity", player_task: "Check English, French, romanized Korean, Korean script and Kore-eda before materializing." },
      { id: "chronology", label: "Separate 2021 production from 2022 film metadata", player_task: "Preserve the exact April 14-June 22, 2021 production window and 2022 institutional year." },
      { id: "production_structure", label: "Map CJ ENM and Zip Cinema", player_task: "Use documented company and producer roles without inventing partner shares." },
      { id: "road_route", label: "Build the production geography", player_task: "Map Busan, east-coast locations and Wolmido/Incheon to the road-film production movement." },
      { id: "location_ratio", label: "Lock 98-percent location shooting", player_task: "Use the KOFIC production-design record as a bounded location-production fact." },
      { id: "natural_light", label: "Work with real weather", player_task: "Use natural light and waited-for sun, rain and wind as direct visual-method evidence." },
      { id: "production_design", label: "Preserve lived-in realism", player_task: "Use Lee Mok-won's documented location-specific design method without inventing sets." },
      { id: "camera_boundary", label: "Stop before unsupported camera specs", player_task: "Keep camera body, lens, codec, sensor and filtration unresolved." },
      { id: "ferris_wheel", label: "Solve the Ferris-wheel constraint", player_task: "Use one camera, one operator, remote monitoring and two days only for this sourced sequence." },
      { id: "editing", label: "Write, shoot and edit in parallel", player_task: "Model Kore-eda's nightly editing and next-day rewriting process." },
      { id: "performance_revision", label: "Let performance change the ending", player_task: "Use Song Kang-ho's performance as the documented trigger for narrative revision." },
      { id: "sound", label: "Map production and supervising sound", player_task: "Use Eun Hee-soo and Choi Tae-young credits while bounding hardware and post topology." },
      { id: "music", label: "Bring score into the edit and dub", player_task: "Use Jung Jae-il's iterative collaboration against rain and car sound." },
      { id: "costume_makeup", label: "Map costume and makeup roles", player_task: "Preserve credited department heads without fabricating workflows." },
      { id: "vfx_boundary", label: "Keep effects evidence bounded", player_task: "Do not infer shot counts, vendors, techniques or absence of VFX." },
      { id: "finance_boundary", label: "Keep financing exactness unresolved", player_task: "Record CJ ENM's documented investment/distribution role without inventing budget or recoupment." },
      { id: "runtime", label: "Lock the 129-minute record", player_task: "Use the matching Cannes and KOFIC runtime." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Make evidence confidence and unresolved boundaries explicit." },
      { id: "production_verification", label: "Close Broker", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenBrokerExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenBrokerExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_broker_verified",
      source: { list_id: "manual_chapter_nineteen_broker_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
