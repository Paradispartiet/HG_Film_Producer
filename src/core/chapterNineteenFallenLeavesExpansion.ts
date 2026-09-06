import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenFallenLeavesExpansionDefinitions = [
  {
    id: "scenario_fallen_leaves_2023",
    title: "Fallen Leaves",
    originalTitle: "Kuolleet lehdet",
    aliases: ["Les Feuilles mortes", "Fallende Blätter"],
    year: 2023,
    productionYear: 2023,
    principalPhotographyYear: 2022,
    titleType: "Movie",
    runtimeMins: 81,
    directors: ["Aki Kaurismäki"],
    genres: ["Drama", "Romance", "Comedy"],
    sourceId: "festival_cannes_kuolleet_lehdet_2023",
    sourceUrl: "https://www.festival-cannes.com/en/f/kuolleet-lehdet/",
    scenarioType: "award_priority_cannes_2023_jury_prize_2022_helsinki_35mm_arri_analog_ultra_prime_one_take_minimal_rehearsal_working_class_tragicomedy",
    premise: "Build Fallen Leaves / Kuolleet lehdet as a new Chapter 19 source-first Production Case only after branch, PR, filename-tree and assembled-film-scenario checks prove that no existing canonical scenario, Film Study or Production Verification identity exists under Fallen Leaves, Kuolleet lehdet or Les Feuilles mortes. Festival de Cannes locks the film to the 2023 Competition, Jury Prize, Finland, Cannes production year 2023 and 81 minutes, and credits Aki Kaurismäki for direction and screenplay, Timo Salminen for cinematography, Samu Heikkilä for editing, Ville Grönroos for production design and Pietu Korhonen for sound. Physical production chronology remains separate: Yle reported on June 10, 2022 that shooting would begin in the second half of August with Helsinki's Kallio district as its center, so principalPhotographyYear is 2022 while the institutional production-year field remains 2023. Cannes identifies Sputnik Oy and Oy Bufo Oy as producers with Pandora Film Production GmbH as secondary production; Bufo and The Match Factory credit Aki Kaurismäki/Sputnik, Misha Jaari and Mark Lwoff/Bufo, with Reinhard Brundig/Pandora as co-producer. The Match Factory records 81 minutes, 1.85:1, DCP and 35 mm exhibition formats, Dolby Digital 5.1, Timo Salminen cinematography, Olli Varja lighting, Ville Grönroos set design, Tiina Kaukanen costume design, Samu Heikkilä editing and Pietu Korhonen sound design. ARRI's 2023 Cannes equipment list identifies the production as ARRI Analog with Ultra Primes and ARRI Fresnels; this supports the analog/optics/lighting families without proving an exact camera body, stock, lab, magazine, filter or complete lamp inventory. Alma Pöysti's direct set account states that the film was shot on 35 mm, that Kaurismäki preferred one take and that almost the whole film was made in one and only take, with no conventional rehearsal cycle and a high-concentration crew method; Jussi Vatanen likewise describes long takes and Kaurismäki's insistence on preserving rhythm inside the frame. Finna/KAVI records Finnish Film Foundation production support of EUR 650,000 together with Yle, ZDF/ARTE, ARTE G.E.I.E., FFA and Film- und Medienstiftung NRW participation, but this must not be inflated into a total budget or financing-share model. Preserve the film's deliberate temporal ambiguity as an interpretive feature rather than production chronology: the finished world mixes contemporary 2022 war radio with older technologies and design cues, so no diegetic calendar is used to rewrite the documented 2022 shoot or 2023 production-year metadata. Do not infer an exact ARRI body, film stock/emulsion, processing lab, negative/DI path, camera body count, filtration, exposure index, full lighting package, sound-recorder/microphone/wireless chain, editorial software/storage/proxy/conform, VFX shot census/vendors/techniques, full budget/financing shares, insurance, permits, color-management transforms or DCP/audio mastering lineage beyond the explicitly sourced 35 mm/DCP/1.85:1/Dolby 5.1 exhibition record.",
    requiredChoicesSeed: {
      award: ["cannes_2023_jury_prize", "selection_obligation_not_technical_evidence"],
      reconciliation: ["fallen_leaves", "kuolleet_lehdet", "les_feuilles_mortes", "tree_and_assembled_scenario_negative_reuse"],
      chronology: ["film_year_2023", "cannes_production_year_2023", "principal_photography_2022", "shoot_start_second_half_august_2022", "chronology_provenance_boundary"],
      production: ["sputnik_oy", "bufo_oy", "pandora_film_secondary_production", "aki_kaurismaki_producer", "misha_jaari_mark_lwoff_producers", "reinhard_brundig_coproducer"],
      finance: ["finnish_film_foundation_650k_eur_support", "yle_zdf_arte_ffa_filmstiftung_participation", "total_budget_unresolved", "financing_shares_unresolved"],
      locations: ["helsinki", "kallio_shoot_center", "full_location_ledger_unresolved"],
      camera: ["timo_salminen", "35mm_capture", "arri_analog", "ultra_primes", "exact_camera_body_unresolved", "film_stock_lab_unresolved"],
      lighting: ["olli_varja", "arri_fresnels", "full_lighting_package_unresolved"],
      performance: ["alma_poysti", "jussi_vatanen", "one_take_preference", "almost_whole_film_single_take_method", "minimal_rehearsal", "first_moment_performance_priority"],
      design: ["ville_gronroos_set_design", "temporal_ambiguity_as_mise_en_scene", "full_build_and_dressing_inventory_unresolved"],
      costume_makeup: ["tiina_kaukanen_costume_design", "makeup_hair_full_chain_unresolved"],
      editing: ["samu_heikkila", "long_take_rhythm", "editorial_infrastructure_unresolved"],
      sound: ["pietu_korhonen", "dolby_digital_5_1_exhibition", "production_sound_hardware_unresolved", "final_mix_topology_unresolved"],
      format: ["81_minutes", "1_85_1", "35mm_and_dcp", "dolby_digital_5_1"],
      effects: ["vfx_scope_unresolved"],
      themes: ["film_history", "2023", "principal_photography_2022", "cannes_jury_prize", "finnish_cinema", "working_class_tragicomedy", "35mm", "one_take_method", "chapter19"]
    },
    learningGoals: [
      "Explain why Fallen Leaves must be materialized only after Fallen Leaves, Kuolleet lehdet and Les Feuilles mortes reuse checks are negative.",
      "Use the 2023 Cannes Jury Prize as a corrective selection obligation rather than technical evidence.",
      "Preserve film year 2023 and Cannes production year 2023 separately from physical shooting in 2022.",
      "Use Yle's June 2022 report to bound the planned shoot start to the second half of August 2022.",
      "Identify Helsinki and Kallio as the documented production center without inventing a complete location ledger.",
      "Identify Sputnik Oy and Bufo Oy as principal Finnish production companies and Pandora Film as the German secondary/co-production partner.",
      "Identify Aki Kaurismäki, Misha Jaari, Mark Lwoff and Reinhard Brundig in their sourced producer/co-producer roles.",
      "Use the Finnish Film Foundation EUR 650,000 support record as bounded finance evidence without inferring the total budget.",
      "Keep Yle, ZDF/ARTE, ARTE G.E.I.E., FFA and Filmstiftung participation separate from unsupported financing-share arithmetic.",
      "Identify Timo Salminen as cinematographer and Olli Varja as lighting lead from the locked production records.",
      "Use ARRI's Cannes list to support ARRI Analog, Ultra Primes and ARRI Fresnels without inventing an exact camera body.",
      "Use the direct actor account to confirm 35 mm capture independently of an inferred camera model.",
      "Keep film stock, emulsion, processing lab, magazine, filter and exact exposure details unresolved.",
      "Explain Kaurismäki's one-take preference as a production system rather than a stylistic slogan.",
      "Use Alma Pöysti's statement that almost the whole film was made in one and only take as bounded direct testimony.",
      "Explain how minimal rehearsal increases concentration across performance, focus, lighting, props and camera execution.",
      "Use Jussi Vatanen's description of long takes to connect performance rhythm with composition and edit economy.",
      "Identify Ville Grönroos as set designer/production-design lead without inventing construction or dressing inventories.",
      "Identify Tiina Kaukanen as costume designer while keeping full wardrobe sourcing and continuity systems unresolved.",
      "Treat the film's deliberately mixed-period objects and contemporary radio news as mise-en-scène evidence, not as production-date metadata.",
      "Identify Samu Heikkilä as editor and connect long-take rhythm to editorial consequences without inventing software or storage topology.",
      "Identify Pietu Korhonen as sound designer and preserve the sourced Dolby Digital 5.1 exhibition format.",
      "Keep production-sound recorder, microphone, wireless, ADR, Foley and final-mix routing unresolved.",
      "Preserve The Match Factory's 81-minute runtime and 1.85:1 aspect ratio as catalogue-level technical evidence.",
      "Distinguish 35 mm capture/exhibition evidence from the separate DCP exhibition format record.",
      "Do not infer a digital intermediate workflow merely because a DCP exists.",
      "Keep VFX shot count, vendors and techniques unresolved; a restrained visual style does not prove zero effects work.",
      "Keep exact camera body count unresolved even though the production method emphasizes concentrated single-camera-like staging.",
      "Keep complete lighting/grip inventory unresolved beyond the ARRI Fresnel family evidence.",
      "Keep total budget, financing shares, recoupment, insurance and permit details unresolved.",
      "Keep color-management, negative-conform, restoration and mastering lineage unresolved.",
      "Explain how the working-class tragicomedy continues Kaurismäki's earlier proletarian cycle as a historical mapping rather than a technical claim.",
      "Complete all 17 Film Study areas with source-verified, mapped, research-pending or not-central status.",
      "Close the Cannes obligation only when one unique scenario, one Film Study, one PV record and an exact one-film corrective-queue reduction agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes Jury Prize obligation", player_task: "Use the 2023 prize only to establish corrective priority." },
      { id: "reconciliation", label: "Search every Fallen Leaves identity", player_task: "Check English, Finnish and French titles before materializing." },
      { id: "chronology", label: "Separate 2022 shooting from 2023 production metadata", player_task: "Preserve the August 2022 physical-production evidence and Cannes 2023 record separately." },
      { id: "production_structure", label: "Map Sputnik, Bufo and Pandora", player_task: "Use sourced producer roles without inventing company shares." },
      { id: "finance_boundary", label: "Bound public support", player_task: "Use the EUR 650,000 Finnish Film Foundation record without turning it into total budget." },
      { id: "locations", label: "Center production in Helsinki", player_task: "Use Kallio as the documented shoot center while keeping the full location ledger open." },
      { id: "camera_format", label: "Lock 35 mm and ARRI Analog", player_task: "Use sourced capture families while leaving the exact body and stock unresolved." },
      { id: "optics", label: "Use Ultra Primes carefully", player_task: "Treat ARRI's Ultra Prime listing as a family-level fact, not a focal-length inventory." },
      { id: "lighting", label: "Bound the Fresnel evidence", player_task: "Use ARRI Fresnels and Olli Varja without inventing the full package." },
      { id: "performance", label: "Protect the first moment", player_task: "Model the one-take preference and minimal rehearsal as production constraints." },
      { id: "blocking", label: "Build rhythm inside the frame", player_task: "Coordinate actor timing and long-take staging before the camera rolls." },
      { id: "production_design", label: "Construct timeless Kaurismäki space", player_task: "Map mixed-period objects as design choices without rewriting chronology." },
      { id: "costume", label: "Map the credited wardrobe system", player_task: "Use Tiina Kaukanen's role and keep sourcing detail unresolved." },
      { id: "editing", label: "Edit around long-take economy", player_task: "Use Samu Heikkilä's credited edit without inventing infrastructure." },
      { id: "sound", label: "Lock the credited sound chain", player_task: "Use Pietu Korhonen and 5.1 exhibition evidence while bounding hardware unknowns." },
      { id: "exhibition_format", label: "Separate 35 mm and DCP deliverables", player_task: "Preserve 1.85:1 and Dolby 5.1 without inferring the mastering path." },
      { id: "temporal_design", label: "Keep diegetic time ambiguous", player_task: "Treat contemporary radio and retro technology as mise-en-scène, not production metadata." },
      { id: "effects_boundary", label: "Keep VFX evidence bounded", player_task: "Do not infer zero effects from visual restraint." },
      { id: "post_boundary", label: "Keep post-production unknowns explicit", player_task: "Do not invent DI, negative conform, grading transforms or mastering lineage." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Make evidence confidence and unresolved boundaries explicit." },
      { id: "production_verification", label: "Close Fallen Leaves", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenFallenLeavesExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenFallenLeavesExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_fallen_leaves_verified",
      source: { list_id: "manual_chapter_nineteen_fallen_leaves_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
