import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenThePotAuFeuExpansionDefinitions = [
  {
    id: "scenario_the_pot_au_feu_2023",
    title: "The Pot-au-Feu",
    originalTitle: "La Passion de Dodin Bouffant",
    aliases: ["The Taste of Things", "La passion de Dodin Bouffant"],
    year: 2023,
    productionYear: 2023,
    principalPhotographyYear: 2022,
    titleType: "Movie",
    runtimeMins: 134,
    directors: ["Trần Anh Hùng"],
    genres: ["Drama", "Romance", "Historical"],
    sourceId: "festival_cannes_la_passion_de_dodin_bouffant_2023",
    sourceUrl: "https://www.festival-cannes.com/en/f/la-passion-de-dodin-bouffant/",
    scenarioType: "award_priority_cannes_2023_best_director_2022_anjou_location_period_food_choreography_single_sony_venice_summilux_c_steadicam_sunlight_sound_materiality",
    premise: "Build The Pot-au-Feu as a new Chapter 19 source-first Production Case only after branch, PR and tree-wide structural checks prove that no existing scenario, Film Study or Production Verification identity exists under The Pot-au-Feu, La Passion de Dodin Bouffant, The Taste of Things or scenario_the_pot_au_feu_2023. Festival de Cannes locks the film to the 2023 Competition, Best Director award for Trần Anh Hùng, Cannes production year 2023, France and 134 minutes, with Hùng credited for direction and screenplay. Physical production chronology is separate: Région Pays de la Loire states that the production worked in the region from March 31 to May 18, 2022, that the film was shot entirely in Maine-et-Loire in spring 2022, chiefly at Château de Raguin with additional Château de Brissac work, and that the Region supported the production with EUR 200,000 alongside the CNC; its film-office record also documents 46 regional technicians, more than 50 extras and four regional supporting roles. Cannes and BFI identify Curiosa Films as the principal production company, with Gaumont, France 2 Cinéma and uMedia/Umedia in coproduction or secondary-production roles; BFI credits Olivier Delbosc as producer, Emilien Bignon as associate producer, Angeline Massoni as production manager, Jonathan Ricquebourg as director of photography, Mario Battistel as editor, Trần Nữ Yên Khê for artistic direction and costume design, Toma Baquéni for set design, François Waledisch, Paul Heymans and Thomas Gauder for sound, Pierre Gagnaire for gastronomic direction and Michel Nave as culinary adviser. American Cinematographer provides the key production-method evidence: the historic Château de Raguin main set was selected before Ricquebourg joined; its eastern-facing kitchen openings and spring sun shaped a lighting strategy that combined available sunlight with four 16K Dinos, four 9K Maxi Brutes, ARRI SkyPanel S360s, ceiling light boxes using DMG Lumiere Mix fixtures, bounced 9K HMIs and concealed Astera Titan Tubes. The long opening cooking passage was conceived through two weeks of restaurant observation at Pierre Gagnaire's Hôtel Balzac kitchen, then staged as actor choreography with the majority of the sequence on Steadicam and real food that gave the crew only minutes before dishes visibly deteriorated. ASC further establishes a 35mm Leitz Summilux-C for all cooking choreography and most of the film, an Angénieux Optimo 24-290mm for limited exterior work, and a Sony Venice as the production's sole camera, commonly rated at 500 ISO and sometimes 250 ISO for night exteriors, with a T4-to-T5.6-oriented approach. Direct actor/director interviews add that Binoche and Magimel performed the cooking themselves with Michel Nave coaching on set, while Hùng's sound philosophy ultimately rejected a conventional score because the material sounds of cooking, nature and silence were carrying the film's sensory structure; the locked source base therefore treats the film as deliberately score-light without asserting an unsupported musical-exception catalogue. Preserve the runtime provenance discrepancy: Cannes states 134 minutes while Gaumont markets 135 minutes; canonical runtime follows Cannes but the one-minute divergence remains explicit. Do not infer unsupported recording codec, bit depth, sensor mode beyond Sony Venice identification, media/offload/checksum topology, complete lens inventory beyond the sourced 35mm Summilux-C and limited 24-290mm zoom, complete lighting/grip inventory beyond the ASC examples, production-sound recorder/microphone/wireless chain, editorial software/storage/proxy/conform, full VFX census/vendors/techniques, exact final negative cost, full financing shares, recoupment, insurance, permits, color-management transforms or DCP/audio mastering lineage.",
    requiredChoicesSeed: {
      award: ["cannes_2023_best_director_tran_anh_hung", "selection_obligation_not_technical_evidence"],
      chronology: ["film_year_2023", "cannes_production_year_2023", "principal_photography_2022", "shoot_2022_03_31_to_2022_05_18", "chronology_provenance_boundary"],
      production: ["curiosa_films_principal_production", "gaumont_france2_cinema_umedia_coproduction", "olivier_delbosc_producer", "emilien_bignon_associate_producer", "angeline_massoni_production_manager", "regional_support_200k_eur"],
      locations: ["maine_et_loire_entire_shoot", "chateau_de_raguin_primary", "chateau_de_brissac_additional", "pays_de_la_loire_46_local_technicians", "more_than_50_local_extras"],
      camera: ["jonathan_ricquebourg_afc", "sony_venice_sole_camera", "35mm_leitz_summilux_c_primary", "angenieux_optimo_24_290_limited_exteriors", "codec_and_media_unresolved"],
      lighting: ["georges_harnack_gaffer", "spring_sun_and_east_facing_kitchen", "16k_dinos", "9k_maxi_brutes", "skypanel_s360", "dmg_mix_ceiling_boxes", "9k_hmi_ultrabounce", "astera_titan_tubes", "full_package_unresolved"],
      blocking: ["steadicam_majority_opening_cooking_sequence", "two_weeks_hotel_balzac_observation", "real_food_short_take_window", "actors_and_camera_choreographed_together"],
      design: ["tran_nu_yen_khe_artistic_direction", "toma_baqueni_set_design", "historic_chateau_location", "kitchen_space_reworked_for_circulation"],
      costume_makeup: ["tran_nu_yen_khe_costume_design", "noa_yehonatan_head_makeup", "sophie_asse_hair"],
      editing: ["mario_battistel", "long_take_and_choreography_continuity", "editorial_infrastructure_unresolved"],
      sound: ["francois_waledisch", "paul_heymans", "thomas_gauder", "material_sound_and_silence_priority", "sound_hardware_unresolved"],
      music: ["no_conventional_score", "material_sound_replaces_score_function", "musical_exception_catalogue_unresolved"],
      culinary: ["pierre_gagnaire_gastronomic_direction", "michel_nave_culinary_adviser", "binoche_magimel_perform_cooking", "real_food_continuity_constraint"],
      runtime: ["cannes_134_minutes_canonical", "gaumont_135_minutes_marketing_record", "runtime_discrepancy_preserved"],
      effects: ["vfx_scope_unresolved"],
      themes: ["film_history", "2023", "principal_photography_2022", "cannes_best_director", "french_production", "period_food_cinema", "choreography", "sound_materiality", "chapter19"]
    },
    learningGoals: [
      "Explain why The Pot-au-Feu must be materialized only after The Pot-au-Feu, La Passion de Dodin Bouffant and The Taste of Things reuse checks are negative.",
      "Use Trần Anh Hùng's 2023 Cannes Best Director award as a corrective selection obligation rather than evidence for any technical department.",
      "Preserve film/award year 2023 and Cannes production year 2023 separately from physical principal photography in spring 2022.",
      "Use March 31-May 18, 2022 as the regional film-office production window without collapsing it into the Cannes production-year field.",
      "Identify Maine-et-Loire as the complete regional production territory documented by Région Pays de la Loire.",
      "Identify Château de Raguin as the principal location and Château de Brissac as an additional location.",
      "Use the documented EUR 200,000 regional production support as bounded public-finance evidence without inferring the total budget.",
      "Use the documented 46 regional technicians, more than 50 extras and four regional supporting roles as workforce evidence without inferring total crew size.",
      "Identify Curiosa Films as principal production company and Gaumont, France 2 Cinéma and uMedia/Umedia as sourced coproduction or secondary-production partners.",
      "Identify Olivier Delbosc, Emilien Bignon and Angeline Massoni in their credited producer/associate-production/production-management roles.",
      "Identify Jonathan Ricquebourg, AFC as director of photography and Georges Harnack as gaffer from department-level evidence.",
      "Explain how Château de Raguin's eastern-facing kitchen openings and spring sun structured the daytime-light strategy.",
      "Identify the sourced 16K Dino, 9K Maxi Brute, SkyPanel S360, DMG Mix, 9K HMI/Ultrabounce and Astera Titan examples without pretending they are a complete lighting inventory.",
      "Explain why the opening cooking sequence required room-wide, stand-free lighting that protected actor and Steadicam movement.",
      "Use two weeks of observation in Pierre Gagnaire's Hôtel Balzac kitchen as direct prep evidence for redesigning the cooking coverage.",
      "Explain why the cooking action shifted from fragmented contemplative coverage toward continuous movement and choreography.",
      "Use real food as a production constraint: dishes had only a short visual window before their appearance changed.",
      "Identify Florian Berthellot's Steadicam role and the majority-Steadicam design of the opening cooking passage.",
      "Use the 35mm Leitz Summilux-C as the sourced cooking-sequence and majority-production prime without inventing a broader prime set.",
      "Use the Angénieux Optimo 24-290mm only as a sourced limited exterior exception.",
      "Identify the Sony Venice as the production's sole camera from ASC rather than inferring body count from style.",
      "Use 500 ISO as the common sourced rating and 250 ISO as a bounded night-exterior exception; do not invent EI or sensor-mode detail beyond that.",
      "Use the T4-to-T5.6-oriented night approach as sourced exposure practice while keeping full camera reports unresolved.",
      "Identify Trần Nữ Yên Khê for artistic direction and costume design and Toma Baquéni for set design.",
      "Explain Hùng's spatial priority: connected rooms and circulation were used to create a ballet-like movement system for actors and camera.",
      "Identify Mario Battistel as editor without inventing software, storage, proxy or conform details.",
      "Identify François Waledisch, Paul Heymans and Thomas Gauder in the credited sound chain without inventing recorder, microphone, wireless or stage-routing hardware.",
      "Explain why material sound and silence became a formal organizing principle rather than background texture.",
      "Preserve the no-conventional-score decision as a sourced directorial sound choice without adding unsupported musical exceptions.",
      "Identify Pierre Gagnaire as gastronomic director and Michel Nave as culinary adviser and on-set cooking coach.",
      "Explain that Binoche and Magimel performed the cooking actions themselves, with coaching, instead of assuming hand doubles for the principal food work.",
      "Use Cannes 134 minutes as canonical runtime while preserving Gaumont's 135-minute record as an explicit one-minute provenance discrepancy.",
      "Keep codec, bit depth, detailed sensor mode, media/offload/checksum and data-storage topology unresolved.",
      "Keep complete sound-hardware, ADR/Foley routing, editorial infrastructure and exact color-management transforms unresolved.",
      "Keep VFX shot count, vendors and techniques unresolved; period realism and practical food do not prove an absence of visual effects.",
      "Keep total budget, financing shares, recoupment, insurance, permit and mastering lineage unresolved beyond the sourced regional subsidy and partner roles.",
      "Complete all 17 Film Study areas with explicit source-verified, mapped, research-pending or not-central status.",
      "Close the Cannes obligation only when one unique scenario, one Film Study, one PV record and an exact one-film corrective-queue reduction agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes Best Director obligation", player_task: "Use the 2023 award only to establish corrective priority." },
      { id: "reconciliation", label: "Search every Dodin identity", player_task: "Check The Pot-au-Feu, La Passion de Dodin Bouffant and The Taste of Things before materializing." },
      { id: "chronology", label: "Separate 2022 shooting from 2023 institutional metadata", player_task: "Preserve the March 31-May 18, 2022 production window and Cannes 2023 record separately." },
      { id: "production_structure", label: "Map Curiosa and coproduction partners", player_task: "Use sourced company and producer roles without inventing shares." },
      { id: "regional_production", label: "Lock the Maine-et-Loire production base", player_task: "Use regional film-office evidence for locations, subsidy, crew and extras." },
      { id: "location_architecture", label: "Choose the château for movement", player_task: "Treat Château de Raguin as a spatial production system, not scenery trivia." },
      { id: "culinary_prep", label: "Observe the professional kitchen", player_task: "Use the two-week Hôtel Balzac observation to redesign cooking coverage." },
      { id: "food_choreography", label: "Stage real cooking as action", player_task: "Coordinate actors, real food and camera around irreversible cooking time." },
      { id: "steadicam", label: "Move through the kitchen", player_task: "Use Steadicam choreography while preserving physical urgency and precision." },
      { id: "camera", label: "Lock the Venice and 35mm core", player_task: "Use Sony Venice plus 35mm Summilux-C as sourced facts and bound the zoom exception." },
      { id: "lighting", label: "Build sunlight through the room", player_task: "Combine eastern exposure, available sun and sourced fixtures without inventing the full package." },
      { id: "night", label: "Model black and nocturnal color", player_task: "Use sourced 500/250 ISO and T4-T5.6 choices as bounded night evidence." },
      { id: "design_costume", label: "Coordinate period space and dress", player_task: "Map artistic direction, set design and costumes without fabricating material inventories." },
      { id: "editing", label: "Preserve choreographic continuity", player_task: "Use Mario Battistel's credited edit while keeping infrastructure unresolved." },
      { id: "sound", label: "Make sound the flavor of the image", player_task: "Use kitchen, nature and silence as sourced sound priorities and bound the hardware unknowns." },
      { id: "music_boundary", label: "Reject an unnecessary score", player_task: "Preserve the sourced no-conventional-score decision while keeping any exception catalogue unresolved." },
      { id: "runtime_boundary", label: "Preserve 134 versus 135 minutes", player_task: "Use Cannes canonically while recording the Gaumont divergence." },
      { id: "effects_boundary", label: "Keep effects evidence bounded", player_task: "Do not infer VFX absence from practical food and period realism." },
      { id: "finance_boundary", label: "Separate subsidy from total budget", player_task: "Use the EUR 200,000 regional support without inventing full financing or recoupment." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Make evidence confidence and unresolved boundaries explicit." },
      { id: "production_verification", label: "Close The Pot-au-Feu", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenThePotAuFeuExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenThePotAuFeuExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_the_pot_au_feu_verified",
      source: { list_id: "manual_chapter_nineteen_the_pot_au_feu_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
