import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenTheLittleSisterExpansionDefinitions = [
  {
    id: "scenario_the_little_sister_2025",
    title: "The Little Sister",
    originalTitle: "La Petite Dernière",
    aliases: ["La Petite Derniere", "The Little Sister (2025)", "La Petite Dernière (2025)"],
    year: 2025,
    productionYear: 2025,
    titleType: "Movie",
    runtimeMins: 106,
    directors: ["Hafsia Herzi"],
    genres: ["Drama", "Coming-of-age"],
    sourceId: "festival_cannes_la_petite_derniere_2025",
    sourceUrl: "https://www.festival-cannes.com/en/f/la-petite-derniere/",
    scenarioType: "award_priority_cannes_2025_best_actress_multicamera_handheld_naturalist_coming_of_age",
    premise: "Build The Little Sister / La Petite Dernière as one genuinely new Chapter 19 source-first Production Case only after exact-main branch/PR checks and tree-wide English/French title and plausible-ID reuse checks prove no pre-existing canonical scenario, Film Study or Production Verification identity. Festival de Cannes locks the 2025 Competition feature, Award for Best Actress, Hafsia Herzi as director and screenwriter, France/Germany country record, 106-minute festival runtime, Nadia Melliti as Fatima, Ji-Min Park as Ji-Na and principal production/sound credits. The Cannes-hosted English press kit from June Films and Katuh Studio documents Herzi's field research, the difficult financing context without establishing total budget or percentages, a casting campaign lasting more than a year across several cities and professional/non-professional auditions, Nadia Melliti's first film role, a story spanning one year and a shoot split into a short winter phase and a spring phase, practically all-handheld cinematography, preference for natural light and limited heavy lighting, location color choices, dislike of ADR, and editor Géraldine Mangenot beginning work while shooting was still underway. Jérémie Attard's direct ARRI interview independently documents his involvement from casting callbacks, the absence of fixed shot lists or floor plans, three ALEXA Mini cameras used throughout the shoot for long multicamera takes, TSF offering RED V-Raptor or ALEXA Mini before comparative tests led to the Mini, natural room/location light reinforced through maximum pre-light, red reserved as a controlled design motif, a three-day February winter unit, approximately 150 winter stills used to build the shooting LUT with colorist Dirk Meier, and a Germany-based final grade kept close to that LUT. SNCF's interview with Herzi documents filming at Haussmann–Saint-Lazare and Chelles–Gournay stations and on the RER E. Preserve the source discrepancy between Cannes' 106-minute record and the Cannes-hosted English press kit's 107-minute listing rather than silently harmonising it. Do not infer total budget, financing percentages, insurance, complete shooting-day count, full location ledger, exact lens package or focal-length map, recording codec/resolution beyond what is directly sourced, sensor mode, shutter angle, ISO/exposure ledger, media/data-storage or backup architecture, complete production-sound hardware package, ADR/Foley/final-mix topology, editorial software/storage/proxy/conform, score-recording or music-clearance architecture, VFX shot count, stunt/safety paperwork, delivery codec, final sound format or mastering package.",
    requiredChoicesSeed: {
      award: ["cannes_2025_best_actress", "award_obligation_not_technical_evidence"],
      reconciliation: ["the_little_sister", "la_petite_derniere", "the_little_sister_2025", "canonical_identity_locked_by_definition"],
      runtime: ["cannes_106_minutes_canonical_record", "cannes_press_kit_107_minutes_source_discrepancy_preserved"],
      screenplay_research: ["hafsia_herzi", "fatima_daas_adaptation", "field_research", "lesbian_bar_research", "one_school_university_year_structure"],
      production: ["june_films", "katuh_studio", "france_germany_coproduction", "financing_context_source_bounded"],
      casting: ["audrey_gini", "more_than_one_year", "several_cities", "professional_and_nonprofessional_auditions", "nadia_melliti_first_film_role"],
      schedule: ["winter_then_spring_structure", "three_day_february_winter_unit", "complete_shoot_day_count_unresolved"],
      locations: ["haussmann_saint_lazare", "chelles_gournay", "rer_e", "nancy_regional_work", "complete_location_ledger_unresolved"],
      directing: ["no_fixed_shot_lists", "no_fixed_floor_plans", "long_takes", "multicamera_actor_led_flexibility", "overlapping_dialogue"],
      performance: ["nadia_melliti", "ji_min_park", "professional_nonprofessional_mix", "improvisation_and_rehearsal", "actor_presence_over_marks"],
      design: ["diene_berete", "black_red_night_locations", "red_reserved_for_encounter_sequences", "complete_props_dressing_ledger_unresolved"],
      costume_makeup: ["caroline_spieth_costume", "hanka_thot_makeup", "color_coordination_with_camera_design", "continuity_sourcing_records_unresolved"],
      camera: ["jeremie_attard", "three_alexa_mini", "multicamera_entire_shoot", "handheld", "long_continuous_takes"],
      lenses_format: ["lens_package_unresolved", "focal_length_tests_during_casting", "complete_focal_length_map_unresolved", "recording_codec_resolution_unresolved"],
      lighting: ["natural_room_location_light_base", "maximum_prelight", "limited_heavy_lighting", "multicamera_shadow_management", "natural_skin_tone_priority"],
      editing: ["geraldine_mangenot", "editor_started_during_shoot", "software_storage_proxy_conform_unresolved"],
      sound: ["guilhem_domercq", "remi_durel", "julie_tribout", "jean_paul_hurier", "adr_avoided_as_directing_preference", "hardware_mix_topology_unresolved"],
      music: ["amine_bouhafa", "score_pipeline_and_clearance_unresolved"],
      color_post: ["dirk_meier", "approximately_150_winter_stills", "shooting_lut", "germany_grade", "final_grade_close_to_lut"],
      themes: ["film_history", "2025", "cannes_best_actress", "hafsia_herzi", "coming_of_age", "multicamera", "handheld", "alexa_mini", "natural_light", "chapter19"]
    },
    learningGoals: [
      "Explain why The Little Sister requires one new canonical identity only after The Little Sister / La Petite Dernière title and plausible-ID reuse checks are negative.",
      "Use the Cannes Best Actress award as a corrective-selection obligation rather than technical production evidence.",
      "Preserve Cannes' 106-minute record and the Cannes-hosted press kit's 107-minute listing as an explicit source discrepancy.",
      "Trace Herzi's adaptation and field-research process without treating research settings as documentary genre evidence.",
      "Map June Films and Katuh Studio as the sourced production/coproduction structure without inventing total budget or financing percentages.",
      "Explain the more-than-one-year multi-city casting campaign and the professional/non-professional search that led to Nadia Melliti.",
      "Explain how the film's one-year dramatic structure was supported by separate winter and spring shooting phases.",
      "Keep the sourced three-day February winter unit distinct from the unresolved total shoot-day count.",
      "Explain Herzi's rejection of rigid previsualization, fixed shot lists and floor plans as an actor-led staging choice.",
      "Explain why three ALEXA Mini cameras were used simultaneously for long continuous takes instead of repeating performances for conventional coverage.",
      "Explain Attard's comparative Raptor/ALEXA Mini test and preserve the sourced reasons for choosing the Mini without inventing unsupported specifications.",
      "Treat practically all-handheld operation as a sourced production method rather than a generic style label.",
      "Map natural room/location light, maximum pre-light and limited heavy relighting to the multicamera continuity requirement.",
      "Explain the practical challenge of three handheld cameras and two boom operators sharing naturalistic spaces without inventing a complete lighting plot.",
      "Map red as a controlled visual motif coordinated across location, production design and costume rather than a universal palette claim.",
      "Identify Diéné Berete, Caroline Spieth and Hanka Thot in their sourced production-design, costume and makeup roles while preserving unresolved continuity detail.",
      "Explain why editor Géraldine Mangenot began editing while principal photography was still underway without inventing editorial software or storage architecture.",
      "Separate Herzi's stated dislike of ADR from the unresolved production recorder, microphone, radio, Foley and final-mix hardware chain.",
      "Identify Guilhem Domercq, Rémi Durel, Julie Tribout and Jean-Paul Hurier in their sourced sound roles while keeping topology bounded.",
      "Identify Amine Bouhafa as composer without inventing score-recording, orchestration or clearance details.",
      "Trace the winter-still/LUT/final-grade chain through approximately 150 stills, Dirk Meier and the Germany-based grade.",
      "Use the SNCF location record for Haussmann–Saint-Lazare, Chelles–Gournay and RER E without pretending it is a complete location ledger.",
      "Keep lens package, codec/resolution, data workflow, VFX, safety and mastering details unresolved unless directly sourced.",
      "Complete all 17 Film Study areas with explicit source confidence or unresolved boundaries.",
      "Close the Cannes 2020–2025 major-prizes corrective queue only when one scenario, one Film Study, one PV record and the exact global census agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes acting obligation", player_task: "Use Best Actress only as the corrective-selection gate." },
      { id: "reconciliation", label: "Prove structural absence", player_task: "Search English/French titles and plausible IDs before authoring." },
      { id: "runtime_provenance", label: "Preserve the runtime discrepancy", player_task: "Keep Cannes 106 and the official press kit's 107 as separate source records." },
      { id: "adaptation_research", label: "Ground the adaptation", player_task: "Separate novel adaptation, field research and fiction construction." },
      { id: "production_structure", label: "Map the France-Germany coproduction", player_task: "Credit June Films and Katuh Studio without inventing finance shares." },
      { id: "casting", label: "Search for Fatima", player_task: "Model the year-long, multi-city pro/non-pro casting process." },
      { id: "seasonal_schedule", label: "Shoot a year in two seasons", player_task: "Separate the winter unit from spring photography and unresolved total days." },
      { id: "locations", label: "Use lived transport and city spaces", player_task: "Map sourced station/RER locations without claiming a complete ledger." },
      { id: "staging", label: "Avoid rigid previsualization", player_task: "Keep blocking responsive to performers and locations." },
      { id: "multicamera", label: "Run three cameras", player_task: "Use simultaneous ALEXA Minis to preserve long performances rather than repeat coverage." },
      { id: "handheld", label: "Stay physically close", player_task: "Use the sourced handheld method without inventing stabilization hardware." },
      { id: "lighting", label: "Pre-light the real space", player_task: "Reinforce natural room/location light so three cameras can keep moving without resets." },
      { id: "visual_design", label: "Reserve red", player_task: "Coordinate color across locations, design and costume." },
      { id: "performance", label: "Protect first-time performers", player_task: "Balance rehearsal, improvisation and long-take continuity." },
      { id: "editing", label: "Cut while shooting", player_task: "Credit Mangenot's parallel editorial start while keeping infrastructure unresolved." },
      { id: "sound", label: "Preserve live performance sound", player_task: "Keep the anti-ADR preference distinct from unresolved hardware and final-mix architecture." },
      { id: "music", label: "Keep score evidence bounded", player_task: "Credit Bouhafa without inventing the music-production pipeline." },
      { id: "color", label: "Build the LUT from winter", player_task: "Trace the approximately 150 stills through Dirk Meier to the Germany grade." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Expose confidence and unresolved boundaries." },
      { id: "production_verification", label: "Close The Little Sister", player_task: "Require one unique scenario/PV identity and zero unresolved Cannes 2020–2025 major-prize films." }
    ]
  }
] as const;

export function mergeChapterNineteenTheLittleSisterExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenTheLittleSisterExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_the_little_sister_verified",
      source: { list_id: "manual_chapter_nineteen_the_little_sister_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
