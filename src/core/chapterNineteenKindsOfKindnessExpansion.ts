import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenKindsOfKindnessExpansionDefinitions = [
  {
    id: "scenario_kinds_of_kindness_2024",
    title: "Kinds of Kindness",
    originalTitle: "Kinds of Kindness",
    aliases: ["Kinds of Kindness (2024)"],
    year: 2024,
    productionYear: 2024,
    titleType: "Movie",
    runtimeMins: 165,
    directors: ["Yorgos Lanthimos"],
    genres: ["Drama", "Anthology"],
    sourceId: "festival_cannes_kinds_of_kindness_2024",
    sourceUrl: "https://www.festival-cannes.com/en/f/kinds-of-kindness/",
    scenarioType: "award_priority_cannes_2024_best_actor_35mm_anamorphic_new_orleans_location_triptych",
    premise: "Build Kinds of Kindness as one genuinely new Chapter 19 source-first Production Case only after exact-main branch/PR checks and tree-wide reuse checks prove no pre-existing canonical scenario, Film Study or Production Verification identity under the title or plausible scenario IDs. Festival de Cannes locks the 2024 Competition feature, Yorgos Lanthimos direction, 165-minute festival runtime, United States/United Kingdom country record, Jesse Plemons' Best Actor award, screenplay by Lanthimos and Efthimis Filippou, cinematography by Robbie Ryan BSC, production design by Anthony Gasparro, editing by Yorgos Mavropsaridis, music by Jerskin Fendrix and sound by Johnnie Burn. Searchlight's production notes independently document the Element Pictures production with Film4 and TSG Entertainment, producers Ed Guiney, Andrew Lowe, Lanthimos and Kasia Malipan, costume designer Jennifer Johnson, makeup department head Jessica Needham, hair department head Jennifer Serio, the evolution from one story into a three-part anthology, the decision to reuse the core actors in different roles, a location-first production in New Orleans standing in for an anonymous American city, and a deliberate move away from extensive studio builds and heavy lighting. The same production notes document a widescreen anamorphic reset with Ryan, black-and-white dream material, film capture, and Fendrix composing from the script and Lanthimos' black-and-white set photographs before seeing edited images, with piano and choir established as the score direction. Kodak's direct cinematographer interview supplies the bounded camera pipeline: predominantly single-camera ARRICAM ST 35mm anamorphic photography; Panavision Primo Anamorphic lenses with selected Panavision C-Series, Atlas Orion 21mm and Cooke 25mm anamorphic glass; a four-camera car-crash exception using ARRICAM ST/LT and ARRIFLEX 235; KODAK VISION3 50D 5203, 250D 5207 and 500T 5219 color negative plus EASTMAN DOUBLE-X 5222 for dream sequences; FotoKem Los Angeles processing and 4K scans; Greg Fisher at Company3 London for final color; later 35mm prints at Cinelab UK; natural daylight and practicals as the default lighting basis with a small 6K/9K HMI and Rosco DMG LED package; and Peter Zuccarini on underwater photography. Preserve the source conflict between Cannes' 165-minute runtime and the Searchlight production notes' 164-minute runtime rather than silently harmonizing it. Do not infer total budget, financing percentages, insurance, exact shooting dates, complete location/call-sheet inventory, focal-length use beyond the sourced lens examples, exposure/shutter/filtration, full lighting quantities and power distribution, production sound recorder/microphone/radio package, ADR/Foley topology, editorial software/storage/proxy/conform, complete score recording personnel and clearance ledger, VFX shot count, stunt safety paperwork, underwater housing/camera package, delivery codec, final sound format or theatrical aspect ratio where the locked sources do not establish them.",
    requiredChoicesSeed: {
      award: ["cannes_2024_best_actor_jesse_plemons", "competition_award_obligation_not_technical_evidence"],
      reconciliation: ["kinds_of_kindness", "kinds_of_kindness_2024", "canonical_identity_locked_by_definition", "new_identity_required_after_negative_reuse_check"],
      runtime: ["cannes_165_minutes_canonical_record", "searchlight_notes_164_minutes_source_discrepancy_preserved"],
      screenplay: ["yorgos_lanthimos", "efthimis_filippou", "one_story_evolved_to_triptych", "draft_chronology_beyond_notes_unresolved"],
      production: ["element_pictures", "film4", "tsg_entertainment", "ed_guiney", "andrew_lowe", "yorgos_lanthimos", "kasia_malipan"],
      finance: ["production_partners_source_verified", "total_budget_unresolved", "financing_percentages_unresolved", "insurance_recoupment_unresolved"],
      locations: ["new_orleans_location_first", "anonymous_american_city", "lake_house_anchor", "complete_location_ledger_unresolved"],
      directing: ["yorgos_lanthimos", "simpler_location_based_reset", "same_ensemble_across_three_stories", "spontaneous_location_response"],
      performance: ["jesse_plemons_three_roles", "emma_stone_three_roles", "willem_dafoe_three_roles", "margaret_qualley_multiple_roles", "subtle_hair_makeup_behavior_variation"],
      design: ["anthony_gasparro", "location_led_design", "lake_house_and_raymond_house", "full_props_construction_dressing_ledger_unresolved"],
      costume_makeup: ["jennifer_johnson", "jessica_needham", "jennifer_serio", "subtle_character_differentiation", "continuity_and_sourcing_records_unresolved"],
      camera: ["robbie_ryan_bsc_isc", "35mm", "arricam_st_main", "arricam_lt_and_arriflex_235_crash_exception", "peter_zuccarini_underwater"],
      lenses: ["panavision_primo_anamorphic", "panavision_c_series_anamorphic", "atlas_orion_21mm", "cooke_25mm_anamorphic", "complete_focal_length_map_unresolved"],
      stocks: ["kodak_vision3_50d_5203", "kodak_vision3_250d_5207", "kodak_vision3_500t_5219", "eastman_double_x_5222_dream_sequences"],
      lighting: ["natural_daylight_first", "location_practicals", "6k_9k_hmi_small_package", "rosco_dmg_sl1_switch", "rosco_dmg_dash", "full_power_distribution_unresolved"],
      editing: ["yorgos_mavropsaridis", "triptych_structure", "software_storage_proxy_conform_unresolved"],
      sound: ["johnnie_burn", "production_hardware_adr_foley_mix_topology_unresolved"],
      music: ["jerskin_fendrix", "script_and_black_white_set_photos_before_picture", "piano_and_choir_direction", "complete_recording_and_clearance_ledger_unresolved"],
      color_post: ["fotokem_los_angeles_processing", "4k_scans", "greg_fisher_company3_london", "cinelab_uk_35mm_prints"],
      effects_safety: ["four_camera_car_crash_exception", "underwater_unit", "vfx_and_stunt_safety_ledgers_unresolved"],
      themes: ["film_history", "2024", "cannes_best_actor", "yorgos_lanthimos", "robbie_ryan", "35mm", "anamorphic", "new_orleans", "triptych", "chapter19"]
    },
    learningGoals: [
      "Explain why Kinds of Kindness requires one new canonical identity only after title and plausible-ID reuse checks are negative.",
      "Use Jesse Plemons' Cannes Best Actor award as a corrective-selection obligation rather than technical production evidence.",
      "Preserve the 165-minute Cannes record and 164-minute Searchlight production-notes discrepancy explicitly.",
      "Explain how Lanthimos and Filippou developed the project from one story into a triptych anthology.",
      "Map the Element Pictures, Film4, TSG Entertainment and Searchlight production context without inventing finance percentages.",
      "Explain why New Orleans was used as an anonymous American city and why the lake house functioned as a location anchor.",
      "Distinguish location-first production design from the extensive build strategy of Poor Things without reducing design work to found locations.",
      "Explain the ensemble strategy in which the same actors recur as different characters with relatively subtle visual differentiation.",
      "Identify Anthony Gasparro, Jennifer Johnson, Jessica Needham and Jennifer Serio in their sourced design, costume, makeup and hair roles.",
      "Identify Robbie Ryan as cinematographer and separate the predominantly single-camera method from the four-camera car-crash exception.",
      "Map the sourced ARRICAM ST/LT and ARRIFLEX 235 use without extending the exception into a false all-production camera package.",
      "Explain why Panavision Primo Anamorphic was the main lens choice and keep C-Series, Atlas Orion 21mm and Cooke 25mm as bounded supplements.",
      "Map KODAK VISION3 50D, 250D and 500T to Ryan's sourced use cases and DOUBLE-X 5222 to dream sequences.",
      "Explain the natural-daylight/practicals-first lighting strategy and the bounded small HMI/Rosco DMG package.",
      "Identify Peter Zuccarini's underwater photography without inventing underwater camera or housing details.",
      "Describe FotoKem processing/4K scans, Greg Fisher's Company3 grade and Cinelab 35mm prints as distinct post-production stages.",
      "Identify Yorgos Mavropsaridis as editor while keeping software, storage, proxy and conform architecture unresolved.",
      "Identify Johnnie Burn for sound while keeping recorder, microphone, wireless, ADR, Foley and final-mix topology unresolved.",
      "Explain Jerskin Fendrix's pre-picture composing method from script and Lanthimos' black-and-white set photographs, including the piano-and-choir direction.",
      "Keep total budget, insurance, exact shooting dates, complete call sheets, full VFX inventory and stunt documentation unresolved unless directly sourced.",
      "Complete all 17 Film Study areas with explicit source confidence or unresolved boundaries.",
      "Close the Cannes obligation only when one scenario, one Film Study, one PV record and the exact global census agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes obligation", player_task: "Use Best Actor only as the corrective-selection gate." },
      { id: "reconciliation", label: "Prove structural absence", player_task: "Search title variants and plausible IDs before authoring." },
      { id: "runtime_provenance", label: "Preserve conflicting runtimes", player_task: "Keep Cannes 165 and Searchlight 164 as an explicit source discrepancy." },
      { id: "screenplay", label: "Build the triptych", player_task: "Track the one-story-to-anthology development without inventing draft dates." },
      { id: "production_structure", label: "Map the production partners", player_task: "Separate named companies/producers from unresolved finance percentages." },
      { id: "locations", label: "Make New Orleans anonymous", player_task: "Use the location-first rationale and lake-house anchor without inventing a full location list." },
      { id: "ensemble", label: "Reuse the acting company", player_task: "Track different characters across three stories with subtle differentiation." },
      { id: "production_design", label: "Design through locations", player_task: "Map Gasparro's sourced work while keeping the full build/prop ledger open." },
      { id: "costume_makeup", label: "Differentiate without gimmick", player_task: "Use credited departments and sourced subtle-change strategy." },
      { id: "camera_method", label: "Reset the camera language", player_task: "Use the predominantly single-camera 35mm anamorphic method." },
      { id: "camera_exception", label: "Bound the crash coverage", player_task: "Keep the four-camera crash setup as an exception, not the production norm." },
      { id: "lenses", label: "Choose anamorphic glass", player_task: "Map Primo, C-Series, Atlas and Cooke examples without inventing a shot-by-shot lens map." },
      { id: "stocks", label: "Allocate film stocks", player_task: "Use Ryan's sourced 50D/250D/500T/DOUBLE-X assignments." },
      { id: "lighting", label: "Work with available light", player_task: "Use daylight and practicals first, then the bounded small HMI/DMG package." },
      { id: "underwater", label: "Separate the underwater unit", player_task: "Credit Zuccarini while preserving unknown hardware details." },
      { id: "editing", label: "Shape three stories", player_task: "Credit Mavropsaridis and keep software/conform architecture unresolved." },
      { id: "sound", label: "Preserve sound boundaries", player_task: "Credit Burn without inventing production and post sound hardware." },
      { id: "score", label: "Compose before picture", player_task: "Model Fendrix's script/photo, piano-and-choir workflow without inventing recording personnel." },
      { id: "lab_color", label: "Trace the film pipeline", player_task: "Separate FotoKem processing/scans, Company3 grading and Cinelab prints." },
      { id: "safety_effects", label: "Bound stunt and effects evidence", player_task: "Keep crash, underwater, VFX and safety claims within sourced limits." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Expose source confidence and unresolved boundaries." },
      { id: "production_verification", label: "Close Kinds of Kindness", player_task: "Require one unique scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenKindsOfKindnessExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenKindsOfKindnessExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_kinds_of_kindness_verified",
      source: { list_id: "manual_chapter_nineteen_kinds_of_kindness_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
