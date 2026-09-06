import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenMonsterExpansionDefinitions = [
  {
    id: "scenario_monster_2023",
    title: "Monster",
    originalTitle: "Kaibutsu",
    aliases: ["怪物", "L'Innocence"],
    year: 2023,
    productionYear: 2023,
    principalPhotographyYear: 2022,
    titleType: "Movie",
    runtimeMins: 126,
    directors: ["Hirokazu Kore-eda"],
    genres: ["Drama", "Mystery"],
    sourceId: "festival_cannes_kaibutsu_2023",
    sourceUrl: "https://www.festival-cannes.com/en/f/kaibutsu/",
    scenarioType: "award_priority_cannes_2023_best_screenplay_2022_suwa_digital_multi_perspective_restricted_to_free_camera_child_performance_script_method",
    premise: "Build Monster / Kaibutsu / 怪物 / L'Innocence as a new Chapter 19 source-first Production Case only after branch, PR, recursive-tree and assembled-film-scenario checks prove that no existing canonical 2023 Monster identity exists and that the unrelated A Monster Calls scenario remains a distinct title. Festival de Cannes locks the film to the 2023 Competition, Best Screenplay for Yuji Sakamoto, Japan, Cannes production year 2023 and 126 minutes; the official press kit additionally records 2.39:1 and 7.1CH+5.1CH. Preserve physical chronology separately: the Cannes production notes say Sakamoto continued refining the screenplay until immediately before filming began in early 2022, while Kore-eda later described filming Monster before and after his 2022 Cannes trip for Broker; these sources are sufficient to lock principalPhotographyYear to 2022 without importing weaker secondary day-by-day dates into canonical data. The Suwa Area Film Commission identifies the Suwa region of Nagano Prefecture as the main shooting location and documents the former Johoku Elementary School, former Sezawa tunnel/railway-bridge area, Kamaguchi Water Gate, Tateishi Park, Kamisuwa Station and other local locations. The official Gaga site identifies Toho, Fuji Television Network, Gaga, AOI Pro. and Bun-Buku as presenting companies and AOI Pro. as production. Cannes credits Kore-eda as director/editor, Yuji Sakamoto as screenwriter, Ryuto Kondo as cinematographer, Eiji Oshita as lighting, Kazuhiko Tomita and Akihiko Okase for sound across the Cannes records, Keiko Mitsumatsu as production designer, and Ryuichi Sakamoto as composer. The Cannes production notes establish a development path beginning in 2019 with producers Genki Kawamura and Kenji Yamada, a roughly three-hour first screenplay draft repeatedly reduced and restored through the pandemic, almost no spontaneous on-set dialogue rewriting, and a deliberate change in Kore-eda's child-actor method: Soya Kurokawa and Hinata Hiiragi were given the screenplay in advance because that suited the complexity and rhythm of Sakamoto's dialogue better than Kore-eda's earlier line-by-line verbal method. Kore-eda directly states that Monster was shot digitally. Do not infer an exact camera body, sensor, codec, resolution, lens package, filtration, data-management topology or exposure system from that fact. Direct Kore-eda interviews with 1883, Moveable Fest and AnOther describe a visual grammar tied to the three-perspective screenplay: the first section is intentionally narrow and restricted to Saori's viewpoint; the first two sections minimize camera movement; the children's final section becomes broader, freer and more mobile. Treat this as a perspective-driven camera strategy, not as proof of specific stabilization hardware. The production notes also document Ryuichi Sakamoto's score process: Kore-eda listened to Sakamoto's piano music during shooting/editing, sent roughly edited footage, and the final soundtrack combines two newly composed pieces with earlier Sakamoto works. Preserve this bounded process without inventing recording studios, orchestration sessions or music-mixing lineage. Leave exact shoot dates/days, total budget and financing shares, exact camera/lens/lighting packages, media/offload/checksum/storage, production-sound hardware, editorial software/storage/proxy/conform, VFX shot census/vendors/techniques, color-management transforms, DI/mastering pipeline, insurance, permits and complete crew size unresolved unless a stronger primary or direct source is later added.",
    requiredChoicesSeed: {
      award: ["cannes_2023_best_screenplay", "yuji_sakamoto", "selection_obligation_not_technical_evidence"],
      reconciliation: ["monster_2023", "kaibutsu", "怪物", "l_innocence", "a_monster_calls_disambiguated", "tree_and_assembled_scenario_negative_reuse"],
      chronology: ["film_year_2023", "cannes_production_year_2023", "principal_photography_2022", "filming_began_early_2022", "exact_shoot_dates_unresolved"],
      development: ["project_development_from_2019", "genki_kawamura", "kenji_yamada", "three_hour_first_draft", "pandemic_delayed_screenplay", "minimal_on_set_script_revision"],
      companies: ["toho", "fuji_television_network", "gaga", "aoi_pro", "bun_buku", "aoi_pro_production"],
      locations: ["suwa_nagano_main_location", "former_johoku_elementary_school", "suwa_lake_geography", "former_sezawa_tunnel_railway_area", "full_location_ledger_unresolved"],
      camera: ["ryuto_kondo", "digital_capture", "exact_camera_body_unresolved", "lens_package_unresolved", "sensor_codec_data_unresolved"],
      visual_grammar: ["restricted_first_perspective", "minimal_movement_first_two_parts", "freer_mobile_children_section", "perspective_specific_camera_grammar"],
      lighting: ["eiji_oshita", "lighting_package_unresolved"],
      performance: ["sakura_ando", "eita_nagayama", "soya_kurokawa", "hinata_hiiragi", "children_read_script_in_advance", "actor_specific_direction_method"],
      production_design: ["keiko_mitsumatsu", "school_and_railcar_spaces", "full_build_dressing_inventory_unresolved"],
      editing: ["hirokazu_kore_eda_editor", "repeated_events_reframed_by_perspective", "editorial_infrastructure_unresolved"],
      sound: ["kazuhiko_tomita", "akihiko_okase", "7_1_and_5_1_presskit_format", "production_sound_hardware_unresolved"],
      music: ["ryuichi_sakamoto", "two_new_tracks_plus_earlier_works", "rough_edit_music_exchange", "recording_mix_lineage_unresolved"],
      format: ["126_minutes", "2_39_1", "7_1ch_plus_5_1ch"],
      effects: ["vfx_scope_unresolved"],
      themes: ["film_history", "2023", "principal_photography_2022", "cannes_best_screenplay", "japanese_cinema", "multi_perspective_structure", "children_and_institutions", "chapter19"]
    },
    learningGoals: [
      "Explain why Monster must be reconciled across Monster, Kaibutsu, 怪物 and L'Innocence before a new identity is created.",
      "Distinguish the 2023 Japanese Monster from the already-existing A Monster Calls scenario.",
      "Use the Cannes Best Screenplay award to establish corrective priority without treating it as technical evidence.",
      "Preserve film year 2023 and Cannes production year 2023 separately from principal photography in 2022.",
      "Use the Cannes press kit to bound filming as beginning in early 2022 while keeping exact shoot dates unresolved.",
      "Map the project's 2019 development start with producers Genki Kawamura and Kenji Yamada.",
      "Explain how a roughly three-hour first draft was iteratively reduced and restored during pandemic-delayed screenplay development.",
      "Explain why Kore-eda made almost no spontaneous dialogue revisions on set and sought Sakamoto's approval for changes.",
      "Identify Toho, Fuji Television Network, Gaga, AOI Pro. and Bun-Buku as the official presenting-company group without inventing equity shares.",
      "Identify AOI Pro. as the production company named by the official Japanese site.",
      "Use the Suwa Film Commission to identify the Suwa region as the main location without importing weaker secondary shooting dates.",
      "Connect the former Johoku Elementary School and lake geography to the screenplay's institutional and spatial system.",
      "Identify Ryuto Kondo as cinematographer and keep the exact camera body and lens package unresolved.",
      "Use Kore-eda's direct statement to lock digital capture without inventing sensor, codec, resolution or data topology.",
      "Explain how the first section restricts the camera to Saori's viewpoint.",
      "Explain how minimizing camera movement in the first two sections differs from the freer mobile camera of the children's section.",
      "Treat this perspective change as a narrative camera grammar rather than evidence for a specific gimbal, Steadicam or handheld package.",
      "Identify Eiji Oshita as lighting lead while keeping the lighting/grip package unresolved.",
      "Explain why Kurokawa and Hiiragi were given the screenplay in advance rather than directed with Kore-eda's earlier verbal-line method.",
      "Connect actor-specific preparation to the complexity and rhythm of Yuji Sakamoto's screenplay.",
      "Identify Keiko Mitsumatsu as production designer without inventing the full construction, prop or dressing inventory.",
      "Use the school and abandoned railcar spaces as documented production-design environments without overclaiming build methods.",
      "Identify Kore-eda as editor and map repeated events across three perspectives to editorial structure without inventing software or storage infrastructure.",
      "Identify Kazuhiko Tomita and Akihiko Okase in the sourced sound credits while keeping hardware and post-sound routing unresolved.",
      "Preserve the official press-kit's 7.1CH+5.1CH record without inferring the final mixing room or mastering chain.",
      "Identify Ryuichi Sakamoto as composer and explain the two-new-tracks-plus-earlier-works score construction.",
      "Explain how Kore-eda used rough-edited footage and temp use of Sakamoto's music as part of the composer collaboration.",
      "Preserve the official 126-minute runtime and 2.39:1 aspect ratio.",
      "Keep exact shoot-day count, camera/lens/lighting inventories, budget/financing shares and data management unresolved.",
      "Keep production-sound hardware, editorial infrastructure and color-management/DI/mastering lineage unresolved.",
      "Keep VFX shot count, vendors and techniques unresolved; visual naturalism does not prove zero effects work.",
      "Explain how the three-viewpoint screenplay and camera grammar jointly control what the audience is allowed to know.",
      "Explain how school/LGBT-support research informed Kore-eda's preparation without converting research activity into a documentary-method claim.",
      "Complete all 17 Film Study areas with explicit evidence confidence and unresolved boundaries.",
      "Close the Cannes obligation only when one unique scenario, one Film Study, one PV record and an exact one-film corrective-queue reduction agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes screenplay obligation", player_task: "Use the 2023 prize to establish corrective priority only." },
      { id: "reconciliation", label: "Disambiguate every Monster identity", player_task: "Search Monster, Kaibutsu, 怪物 and L'Innocence while excluding A Monster Calls." },
      { id: "chronology", label: "Separate 2022 filming from 2023 metadata", player_task: "Preserve the sourced chronology without inventing exact shoot dates." },
      { id: "development", label: "Trace the 2019-to-2022 screenplay path", player_task: "Map Kawamura, Yamada, Sakamoto and Kore-eda's development process." },
      { id: "screenplay", label: "Protect Sakamoto's structure", player_task: "Model the three-part screenplay and minimal on-set rewriting." },
      { id: "production_structure", label: "Map the Japanese company group", player_task: "Use Toho, Fuji, Gaga, AOI Pro. and Bun-Buku without inventing shares." },
      { id: "locations", label: "Build Suwa as the production geography", player_task: "Use the school, lake and railcar-area locations as sourced spatial anchors." },
      { id: "camera_format", label: "Lock digital capture carefully", player_task: "Use Kore-eda's digital statement while keeping exact body, lens and codec open." },
      { id: "camera_perspective", label: "Restrict the first viewpoints", player_task: "Keep early camera movement and field of knowledge deliberately narrow." },
      { id: "camera_release", label: "Free the children's viewpoint", player_task: "Let the camera broaden and move with the children in the final section." },
      { id: "lighting", label: "Map the credited lighting department", player_task: "Use Eiji Oshita while keeping the package unresolved." },
      { id: "performance", label: "Change the child-actor preparation method", player_task: "Give the two boys the script in advance because this screenplay requires it." },
      { id: "production_design", label: "Construct school and refuge spaces", player_task: "Use Keiko Mitsumatsu's credited design and sourced Suwa locations." },
      { id: "editing", label: "Reframe repeated events", player_task: "Use Kore-eda's edit to reveal different information in each perspective." },
      { id: "sound", label: "Bound the sound evidence", player_task: "Use credited sound personnel and 7.1/5.1 formats without inventing hardware." },
      { id: "music", label: "Build Sakamoto's final score", player_task: "Combine two new pieces with earlier works through the sourced rough-edit collaboration." },
      { id: "format", label: "Lock exhibition metadata", player_task: "Preserve 126 minutes and 2.39:1 from the official press kit." },
      { id: "effects_boundary", label: "Keep effects evidence bounded", player_task: "Do not infer VFX methods from the finished naturalism." },
      { id: "post_boundary", label: "Keep post infrastructure open", player_task: "Do not invent codec, conform, grade or mastering lineage." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Separate sourced craft from mapped interpretation and research-pending detail." },
      { id: "production_verification", label: "Close Monster", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenMonsterExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenMonsterExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_monster_verified",
      source: { list_id: "manual_chapter_nineteen_monster_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
