import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenPerfectDaysExpansionDefinitions = [
  {
    id: "scenario_perfect_days_2023",
    title: "Perfect Days",
    originalTitle: "Perfect Days",
    aliases: [],
    year: 2023,
    productionYear: 2023,
    principalPhotographyYear: 2022,
    titleType: "Movie",
    runtimeMins: 124,
    directors: ["Wim Wenders"],
    genres: ["Drama"],
    sourceId: "festival_cannes_perfect_days_2023",
    sourceUrl: "https://www.festival-cannes.com/en/f/perfect-days/",
    scenarioType: "award_priority_cannes_2023_best_actor_tokyo_october_2022_16_day_documentary_style_shoulder_camera_sony_venice_canon_k35_1_33_dcp_5_1",
    premise: "Build Perfect Days as a genuinely new Chapter 19 source-first Production Case only after exact-main branch/PR/seed checks and tree-wide run 34089452489 prove that no pre-existing canonical scenario, Film Study or Production Verification identity exists under the title or plausible scenario IDs. Festival de Cannes locks the film to the 2023 Competition, Japan, 123-minute catalogue duration, Wim Wenders direction, Wenders and Takuma Takasaki screenplay, Franz Lustig cinematography, Towako Kuwajima production design, Toni Froschhammer editing, Matthias Lempert/Rin Takada/Frank Kruse sound credits and Koji Yakusho's Best Actor award; the award establishes corrective selection priority and is not technical evidence. Filmportal records the physical shoot as sixteen days in Tokyo in October 2022, so principalPhotographyYear is 2022 while the institutional production year remains 2023. Wenders' direct production interviews independently describe sixteen days, little preparation, Franz Lustig shooting the feature from his shoulder without tripod, tracks, dolly or gimbal, and a documentary-like fiction method; Wenders also describes the rehearsal process evolving toward filming rehearsals and following Yakusho's behavior with minimal conventional rehearsal. Dazed records a full day spent with Lustig studying how light entered Hirayama's apartment and how to enhance it. Franz Lustig's official filmography identifies Sony VENICE and Canon K35 primes for Perfect Days; this is retained at family level and is not expanded into an unsupported VENICE-generation, sensor mode, Rialto configuration, focal-length set, codec or media claim. The Match Factory records 124 minutes, 1.33:1, DCP and 5.1 and supplies the producer, costume, hair/makeup, location, post-production, VFX and sound-design chain; Filmportal independently records DCP, 1:1.33, Dolby 5.1 and a 125-minute German catalogue duration. Haut et Court instead publishes 123 minutes and 1.85 together with a 4K flat theatrical DCP link. Preserve the 123/124/125-minute runtime provenance and 1.33-versus-1.85 technical-catalogue discrepancy rather than silently normalizing either; do not infer whether the distributor's 1.85 value describes active image, container or another delivery convention. Cannes identifies Master Mind Ltd, Spoon Inc and Wenders Images as production companies, while The Match Factory credits Koji Yanai as producer, Koji Yakusho as executive producer, Wenders and Takasaki as producers, Reiko Kunieda, Keiko Tominaga, Kota Yabana and Yasushi Okuwa as co-producers and Yusuke Kobayashi as line producer. The Match Factory also credits Daisuke Iga costumes, Katsuhiko Yuhmi hair/makeup, Ko Takahashi location management, Dominik Bollen post supervision, Kalle Max Hofmann VFX supervision, Frank Kruse sound design, Matthias Lempert dream sound/re-recording and Donata Wenders with Clémentine Decremps on the dream-image unit. Wenders' own account describes some cramped-car windshield point-of-view material being captured separately on an iPhone; retain this only as bounded second-unit testimony and do not infer device model, app, codec, stabilization or its exact shot count. Do not infer a total budget, exact financing shares, full permit ledger, exact daily schedule beyond the sourced sixteen-day October 2022 shoot, camera body count or exact VENICE version, Rialto use, sensor mode, codec/media, complete K35 focal-length inventory, filters/exposure, full lighting/grip package, production-sound recorder/microphone/wireless chain, editorial software/storage/proxy/conform, VFX shot census/techniques/vendor allocation, original DI resolution, color-management transforms, music-licensing workflow, insurance, or final mastering lineage beyond the explicitly sourced DCP/5.1 catalogue records.",
    requiredChoicesSeed: {
      award: ["cannes_2023_best_actor_koji_yakusho", "selection_obligation_not_technical_evidence"],
      reconciliation: ["perfect_days", "tree_wide_negative_reuse_run_34089452489", "new_identity_required"],
      chronology: ["film_year_2023", "production_year_2023", "principal_photography_october_2022", "sixteen_day_tokyo_shoot", "exact_daily_schedule_unresolved"],
      production: ["master_mind_ltd", "spoon_inc", "wenders_images", "koji_yanai_producer", "koji_yakusho_executive_producer", "wim_wenders_takuma_takasaki_producers", "reiko_kunieda_keiko_tominaga_kota_yabana_yasushi_okuwa_coproducers", "yusuke_kobayashi_line_producer"],
      finance: ["total_budget_unresolved", "financing_shares_unresolved", "recoupment_insurance_unresolved"],
      locations: ["tokyo", "the_tokyo_toilet_locations", "ko_takahashi_location_manager", "full_location_permit_ledger_unresolved"],
      screenplay: ["wim_wenders", "takuma_takasaki", "tokyo_toilet_short_documentary_origin", "fiction_feature_reframing", "three_week_writing_process_secondary_support"],
      camera: ["franz_lustig", "sony_venice_family", "canon_k35_primes", "shoulder_camera", "no_tripod_tracks_dolly_gimbal", "exact_venice_generation_sensor_codec_media_unresolved"],
      second_unit: ["bounded_iphone_windshield_pov_testimony", "device_model_app_codec_shot_count_unresolved"],
      lighting: ["apartment_daylight_study", "enhanced_existing_light", "full_lighting_grip_inventory_unresolved"],
      performance: ["koji_yakusho", "minimal_rehearsal", "filmed_rehearsal_method", "documentary_style_following", "interpreter_and_body_language_collaboration"],
      design: ["towako_kuwajima_production_design", "architect_designed_public_toilets", "hirayama_apartment", "full_build_dressing_inventory_unresolved"],
      costume_makeup: ["daisuke_iga_costume", "katsuhiko_yuhmi_hair_makeup", "full_continuity_sourcing_unresolved"],
      editing: ["toni_froschhammer", "clementine_decremps_dream_unit_editing", "three_month_edit_direct_testimony", "software_storage_proxy_conform_unresolved"],
      sound: ["matthias_lempert", "rin_takada", "frank_kruse", "5_1", "production_sound_hardware_and_mix_topology_unresolved"],
      effects: ["kalle_max_hofmann_vfx_supervisor", "dream_installation_unit", "vfx_shot_count_techniques_vendor_allocation_unresolved"],
      format: ["match_factory_124_minutes", "cannes_123_minutes", "filmportal_125_minutes", "1_33_match_factory_filmportal", "haut_et_court_1_85_discrepancy", "dcp", "5_1"],
      themes: ["film_history", "2023", "principal_photography_2022", "cannes_best_actor", "tokyo", "new_german_cinema_auteur", "documentary_method_in_fiction", "routine_and_attention", "chapter19"]
    },
    learningGoals: [
      "Explain why Perfect Days requires a new canonical identity only after title, plausible-ID, seed and tree-wide reuse checks are negative.",
      "Use Koji Yakusho's 2023 Cannes acting prize as a corrective selection obligation rather than technical evidence.",
      "Keep film and production year 2023 separate from the documented sixteen-day Tokyo shoot in October 2022.",
      "Treat sixteen days as the sourced production duration without inventing call-sheet dates or daily page counts.",
      "Identify Master Mind Ltd, Spoon Inc and Wenders Images as the Cannes-listed production companies.",
      "Preserve the sourced producer, executive-producer, co-producer and line-producer roles without inventing financing shares.",
      "Keep total budget, negative cost, recoupment, insurance and finance percentages unresolved.",
      "Trace the project from proposed Tokyo Toilet documentary shorts to a fiction feature without conflating the two production forms.",
      "Identify Wim Wenders and Takuma Takasaki as screenwriters while keeping draft chronology bounded.",
      "Identify Franz Lustig as cinematographer and lock Sony VENICE plus Canon K35 primes from his official filmography.",
      "Keep the exact VENICE generation, sensor mode, Rialto configuration, camera body count, codec and media unresolved.",
      "Model shoulder-mounted handheld production as a sourced workflow rather than a visual-style guess.",
      "Use Wenders' statement that the crew did not use tripod, tracks, dolly or gimbal as a bounded production-method claim.",
      "Explain how the sixteen-day schedule and trusted cinematographer enabled a rapid documentary-like fiction workflow.",
      "Use the apartment daylight study as evidence of location-specific lighting preparation without inventing a lamp list.",
      "Keep full lighting, grip, exposure, filtration and electrical-package details unresolved.",
      "Model the shift toward filming rehearsals as a performance-production decision, not a claim that every scene was unrehearsed.",
      "Explain how Wenders, Yakusho and Lustig used interpreter-supported body language in a largely Japanese-language production.",
      "Identify Towako Kuwajima as production designer and preserve the architect-designed toilet locations as real production spaces.",
      "Identify Daisuke Iga and Katsuhiko Yuhmi for costume and hair/makeup while keeping detailed continuity systems unresolved.",
      "Identify Toni Froschhammer as editor and keep editorial software, storage, proxies and conform architecture unresolved.",
      "Keep Donata Wenders and Clémentine Decremps' dream-image unit distinct from principal photography and main editorial authorship.",
      "Use the bounded iPhone windshield-POV testimony without inventing device model, app, codec, stabilization or shot count.",
      "Identify Matthias Lempert, Rin Takada and Frank Kruse across the sourced sound chain and preserve 5.1 catalogue evidence.",
      "Keep production recorder, microphones, wireless, ADR/Foley routing and final-mix topology unresolved.",
      "Acknowledge Kalle Max Hofmann as VFX supervisor without inferring a VFX shot census, technique list or vendor allocation.",
      "Preserve Cannes' 123-minute, Match Factory's 124-minute and Filmportal's 125-minute catalogue runtimes as provenance differences.",
      "Use 1.33:1 as the Match Factory/Filmportal catalogue framing while preserving Haut et Court's 1.85 technical entry as an unresolved discrepancy.",
      "Do not infer whether Haut et Court's 1.85 value refers to active image, DCP container or another delivery convention.",
      "Separate original production evidence from later home-video 4K mastering records.",
      "Treat documentary method as a fiction-production workflow, not as a documentary genre classification.",
      "Connect routine, location and repeated action to production design, performance and editorial repetition without overstating causal evidence.",
      "Complete all 17 Film Study areas with source-verified, mapped, research-pending or not-central status.",
      "Close the Cannes obligation only when one scenario, one Film Study, one PV record and the exact 608/608 global census agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes acting-prize obligation", player_task: "Use the award only to establish corrective priority." },
      { id: "reconciliation", label: "Prove structural absence", player_task: "Search Perfect Days and plausible IDs before authoring." },
      { id: "chronology", label: "Separate 2022 photography from 2023 metadata", player_task: "Keep the sixteen-day October shoot distinct from release-year records." },
      { id: "production_structure", label: "Map the Japan-Germany production network", player_task: "Separate company and producer roles without inventing finance shares." },
      { id: "development", label: "Reframe the Tokyo Toilet commission", player_task: "Trace documentary-short origins into the fiction feature." },
      { id: "screenplay", label: "Build Hirayama through routine", player_task: "Use Wenders/Takasaki authorship while keeping draft detail bounded." },
      { id: "camera", label: "Lock Sony VENICE and Canon K35", player_task: "Use family-level camera evidence without inventing generation or codec." },
      { id: "handheld_method", label: "Shoot from the shoulder", player_task: "Model the no-tripod/no-dolly documentary-like workflow." },
      { id: "lighting", label: "Study available apartment light", player_task: "Use location-specific daylight preparation without manufacturing a package list." },
      { id: "performance", label: "Capture first behavior", player_task: "Model filmed rehearsals and minimal conventional rehearsal carefully." },
      { id: "language", label: "Direct across language", player_task: "Use interpreter and body-language collaboration as sourced constraints." },
      { id: "locations", label: "Work inside Tokyo Toilet architecture", player_task: "Preserve real locations and unresolved permit detail." },
      { id: "production_design", label: "Coordinate architecture and Hirayama's home", player_task: "Use Towako Kuwajima's credited design without inventing build inventories." },
      { id: "costume_makeup", label: "Track routine and continuity", player_task: "Use credited departments while keeping sourcing detail open." },
      { id: "dream_unit", label: "Separate the parallel dream-image unit", player_task: "Keep Donata Wenders and Clémentine Decremps' work distinct from principal capture." },
      { id: "editing", label: "Shape repetition after a rapid shoot", player_task: "Use Toni Froschhammer's edit without inventing infrastructure." },
      { id: "sound", label: "Map the credited sound chain", player_task: "Use 5.1 and named sound roles while bounding hardware unknowns." },
      { id: "effects", label: "Keep VFX visible but bounded", player_task: "Credit the VFX supervisor without inventing shots or techniques." },
      { id: "format_provenance", label: "Preserve runtime and aspect discrepancies", player_task: "Keep 123/124/125 and 1.33/1.85 source records separate." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Expose source confidence and unresolved boundaries." },
      { id: "production_verification", label: "Close Perfect Days", player_task: "Require one unique scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenPerfectDaysExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenPerfectDaysExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_perfect_days_verified",
      source: { list_id: "manual_chapter_nineteen_perfect_days_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
