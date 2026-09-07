import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenYoungMothersExpansionDefinitions = [
  {
    id: "scenario_young_mothers_2025",
    title: "Young Mothers",
    originalTitle: "Jeunes Mères",
    aliases: ["Jeunes Meres", "Young Mothers (2025)", "Jeunes Mères (2025)"],
    year: 2025,
    productionYear: 2025,
    titleType: "Movie",
    runtimeMins: 104,
    directors: ["Jean-Pierre Dardenne", "Luc Dardenne"],
    genres: ["Drama", "Social realism"],
    sourceId: "festival_cannes_jeunes_meres_2025",
    sourceUrl: "https://www.festival-cannes.com/en/f/jeunes-meres/",
    scenarioType: "award_priority_cannes_2025_best_screenplay_natural_light_handheld_maternal_home_ensemble",
    premise: "Build Young Mothers / Jeunes Mères as one genuinely new Chapter 19 source-first Production Case only after exact-main branch/PR checks and tree-wide title/ID reuse checks prove no pre-existing canonical scenario, Film Study or Production Verification identity. Festival de Cannes locks the 2025 Competition feature, Best Screenplay award, Jean-Pierre and Luc Dardenne as directors and screenwriters, Belgium/France country record, 104-minute festival runtime, Benoît Dervaux SBC cinematography, Igor Gabriel production design, Marie-Hélène Dozo editing and Thomas Gauder sound. The Cannes-hosted English press kit from Les Films du Fleuve, Archipel 35 and The Reunion documents the project growing from research around one young mother into five portraits after visits to a maternal support home near Liège; the brothers' working notes document location research, a 300-candidate casting process narrowed to 150 during the search, rehearsals used to discover shots and preserve spontaneity, the long sequence shot as a core formal constraint, the decision to film maternal-home scenes in the actual place rather than build a set, and the decision to add no other décor or cinema lighting there. The same press kit records shooting underway in late August 2024 and finished by October 2024, followed by editing, and identifies the production/coproduction and support chain without establishing a total budget or financing percentages. Benoît Dervaux's detailed interview with the Belgian Society of Cinematographers independently documents preparation beginning in 2024, filming in August/September, an initially planned 52-day infant-sensitive schedule that ultimately wrapped in 38 shooting days, a documentary-like natural-light strategy, handheld framing at the young actresses' eye level, a RED V-Raptor selected for weight/specification reasons instead of the heavier ARRI Alexa 35, Leitz Hugo full-frame lenses, 8K capture with framing calibrated so a 50mm approximated their familiar 40mm field of view in 1.85 on 35mm, a camera package a little over 6 kg supported by a compact industrial exoskeleton, window ND plexiglass from ND0.6 to ND1.5, DIT pre-grading and motorised variable ND to manage exposure/aperture shifts, a base LUT developed with Richard Deusy, and a ten-day final grade by Christophe Bousquet in Resolve at Mikros Paris. Preserve the source discrepancy between Cannes' 104-minute runtime and the Académie des César's 105-minute listing rather than silently harmonising it. Do not infer total budget, financing percentages, insurance, exact daily call-sheet chronology beyond sourced preparation/shoot windows, complete location inventory, RED recording codec, sensor mode beyond the sourced 8K/full-frame description, shutter angle, complete focal-length map, ISO values beyond the specifically sourced low-light example, exact media/data-storage and backup architecture, complete sound recorder/microphone/radio package, ADR/Foley topology beyond credited personnel, editorial software/storage/proxy/conform, music strategy where no score evidence is locked, VFX shot count, infant-safety paperwork beyond the sourced scheduling/logistical constraint, delivery codec, final sound format or mastering package.",
    requiredChoicesSeed: {
      award: ["cannes_2025_best_screenplay", "award_obligation_not_technical_evidence"],
      reconciliation: ["young_mothers", "jeunes_meres", "young_mothers_2025", "canonical_identity_locked_by_definition"],
      runtime: ["cannes_104_minutes_canonical_record", "cesar_105_minutes_source_discrepancy_preserved"],
      screenplay: ["jean_pierre_dardenne", "luc_dardenne", "research_one_mother_to_five_portraits", "working_notes_source_locked"],
      production: ["les_films_du_fleuve", "archipel_35", "the_reunion", "france_2_cinema", "production_support_chain_source_verified"],
      finance: ["eurimages_and_public_broadcaster_support_source_verified", "total_budget_unresolved", "financing_percentages_unresolved", "insurance_unresolved"],
      locations: ["liege_maternal_support_home", "actual_home_used_as_set", "nearby_house_for_residents_during_shoot", "complete_location_ledger_unresolved"],
      directing: ["long_sequence_shot_as_constraint", "rehearsal_to_find_shots", "documentary_like_lightness", "preserve_spontaneity"],
      performance: ["five_young_mothers_ensemble", "young_nonprofessional_or_early_career_actresses", "real_babies", "five_to_ten_takes_average_source_bounded"],
      design: ["igor_gabriel", "actual_location_not_built_set", "no_added_decor_in_maternal_home", "full_props_dressing_ledger_unresolved"],
      costume_makeup: ["dorothee_guiraud_costume", "natali_tabareau_vieuille_makeup", "continuity_and_sourcing_records_unresolved"],
      camera: ["benoit_dervaux_sbc", "red_v_raptor", "8k_full_frame", "handheld_at_actor_eye_level", "compact_industrial_exoskeleton"],
      lenses: ["leitz_hugo_full_frame", "50mm_calibrated_to_40mm_1_85_35mm_reference", "complete_focal_length_map_unresolved"],
      exposure: ["natural_light_no_cinema_lights_goal", "window_nd_06_to_15", "motorised_varind", "dit_pregrade", "t2_to_t5_6_aperture_shift_source_bounded"],
      editing: ["marie_helene_dozo", "editing_followed_2024_shoot", "software_storage_proxy_conform_unresolved"],
      sound: ["jean_pierre_duret", "valene_leroy", "thomas_gauder", "hardware_adr_mix_topology_unresolved"],
      color_post: ["base_lut_richard_deusy", "olivier_patron_dit_adjustments", "christophe_bousquet", "resolve", "mikros_paris", "ten_day_grade"],
      schedule_safety: ["planned_52_days_for_infant_constraints", "wrapped_38_shooting_days", "real_babies_strict_logistics", "formal_safety_paperwork_unresolved"],
      themes: ["film_history", "2025", "cannes_best_screenplay", "dardenne", "social_realism", "natural_light", "handheld", "red_v_raptor", "liege", "chapter19"]
    },
    learningGoals: [
      "Explain why Young Mothers requires one new canonical identity only after Young Mothers / Jeunes Mères title and plausible-ID reuse checks are negative.",
      "Use the Cannes Best Screenplay award as a corrective-selection obligation rather than technical production evidence.",
      "Preserve Cannes' 104-minute record and the Académie des César's 105-minute listing as an explicit source discrepancy.",
      "Trace the screenplay's development from research around one mother to a five-portrait ensemble without fictionalising the research chronology.",
      "Map Les Films du Fleuve, Archipel 35, The Reunion and the sourced coproduction/support chain without inventing financing percentages.",
      "Explain why the actual maternal support home near Liège became the principal set after alternative location scouting failed.",
      "Explain the logistical arrangement that allowed the working maternal home to function as a set while preserving its real social purpose.",
      "Explain the long sequence shot as the Dardennes' formal constraint and how rehearsals were used to discover staging and preserve spontaneity.",
      "Distinguish documentary-like production lightness from documentary genre classification.",
      "Map the five-young-mothers ensemble and the special production constraints created by young performers and real infants.",
      "Identify Igor Gabriel, Dorothée Guiraud and Natali Tabareau-Vieuille in their sourced design, costume and makeup roles while preserving unresolved detail.",
      "Explain Benoît Dervaux's choice of RED V-Raptor over Alexa 35 as a weight/specification decision for arm-held long takes.",
      "Explain the Leitz Hugo full-frame lens choice and preserve the sourced 50mm/40mm-in-1.85 reference without inventing a shot-by-shot lens map.",
      "Explain the 8K/full-frame capture choice as part of depth-of-field, low-light and noise-management strategy without inventing codec or media details.",
      "Map the no-added-cinema-light strategy, window ND plexiglass, DIT pre-grade and motorised variable-ND exposure workflow.",
      "Explain the sourced T2-to-T5.6 aperture-management example without treating those values as universal exposure settings.",
      "Explain how a compact industrial exoskeleton reduced arm load while preserving handheld organic framing.",
      "Separate the planned 52-day infant-sensitive schedule from the actual 38 shooting days.",
      "Identify Marie-Hélène Dozo as editor while keeping software, storage, proxy and conform architecture unresolved.",
      "Separate Jean-Pierre Duret, Valène Leroy and Thomas Gauder's sourced sound roles from unresolved recorder, microphone, wireless, ADR and final-mix architecture.",
      "Trace the LUT/DIT/final-grade chain through Richard Deusy, Olivier Patron, Christophe Bousquet, Resolve and Mikros Paris.",
      "Keep total budget, complete call sheets, codec/data architecture, VFX, formal infant-safety documentation and delivery/mastering details unresolved unless directly sourced.",
      "Complete all 17 Film Study areas with explicit source confidence or unresolved boundaries.",
      "Close the Cannes obligation only when one scenario, one Film Study, one PV record and the exact global census agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes screenplay obligation", player_task: "Use Best Screenplay only as the corrective-selection gate." },
      { id: "reconciliation", label: "Prove structural absence", player_task: "Search Young Mothers, Jeunes Mères and plausible IDs before authoring." },
      { id: "runtime_provenance", label: "Preserve the runtime discrepancy", player_task: "Keep Cannes 104 and César 105 as separate source records." },
      { id: "research_screenplay", label: "Move from one mother to five portraits", player_task: "Track the documented research and screenplay evolution." },
      { id: "production_structure", label: "Map the Belgian-French production chain", player_task: "Separate named producers/supporters from unresolved finance percentages." },
      { id: "location", label: "Use the real maternal home", player_task: "Explain why the actual Liège-area institution became the set." },
      { id: "social_operation", label: "Protect the functioning institution", player_task: "Model the nearby-house daily relocation arrangement without inventing logistics." },
      { id: "staging", label: "Find the long sequence shot", player_task: "Use rehearsal and location constraints to build the Dardenne staging method." },
      { id: "performance", label: "Protect spontaneity", player_task: "Balance rehearsed staging with young performers, first takes and real babies." },
      { id: "design", label: "Avoid building the maternal home", player_task: "Credit design work while preserving the decision not to add décor there." },
      { id: "camera_choice", label: "Choose the lighter camera", player_task: "Use RED V-Raptor for the sourced arm-held mobility requirement." },
      { id: "lens_format", label: "Calibrate the full-frame view", player_task: "Use Leitz Hugo and the bounded 50mm/40mm reference." },
      { id: "camera_support", label: "Carry the long takes", player_task: "Model the compact exoskeleton without turning it into stabilised/gimbal imagery." },
      { id: "natural_light", label: "Work without cinema lights", player_task: "Use available light, switch-off choices and exposure management as sourced." },
      { id: "window_control", label: "Control bright openings", player_task: "Deploy sourced ND plexiglass, variND and DIT pre-grade rather than invented fixtures." },
      { id: "focus_exposure", label: "Manage moving depth of field", player_task: "Keep the T2/T5.6 example bounded to the sourced workflow." },
      { id: "schedule_infants", label: "Plan around babies", player_task: "Separate the planned 52-day schedule from the 38-day actual shoot." },
      { id: "editing", label: "Shape five trajectories", player_task: "Credit Dozo while leaving editorial infrastructure unresolved." },
      { id: "sound", label: "Preserve the sound evidence boundary", player_task: "Map credited sound personnel without inventing hardware/topology." },
      { id: "color", label: "Trace LUT to final grade", player_task: "Separate base LUT, DIT adjustments and ten-day Resolve grade at Mikros." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Expose confidence and unresolved boundaries." },
      { id: "production_verification", label: "Close Young Mothers", player_task: "Require one unique scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenYoungMothersExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenYoungMothersExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_young_mothers_verified",
      source: { list_id: "manual_chapter_nineteen_young_mothers_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
