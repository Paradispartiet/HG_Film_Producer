import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenEmiliaPerezExpansionDefinitions = [
  {
    id: "scenario_emilia_perez_2024",
    title: "Emilia Pérez",
    originalTitle: "Emilia Pérez",
    aliases: ["Emilia Perez"],
    year: 2024,
    productionYear: 2023,
    principalPhotographyYear: 2023,
    titleType: "Movie",
    runtimeMins: 130,
    directors: ["Jacques Audiard"],
    genres: ["Drama", "Musical"],
    sourceId: "festival_cannes_emilia_perez_2024",
    sourceUrl: "https://www.festival-cannes.com/en/f/emilia-perez/",
    scenarioType: "award_priority_cannes_2024_jury_prize_best_actress_ensemble_paris_studio_mexico_city_sony_venice_full_frame_8k_musical_choreography_vfx_hybrid",
    premise: "Build Emilia Pérez as a genuinely new Chapter 19 source-first Production Case only after exact-main branch/PR/seed checks and tree-wide run 34097267911 prove no pre-existing canonical scenario, Film Study or Production Verification identity under the accented title, ASCII title or plausible scenario IDs; the only Jacques Audiard hits belong to earlier films including Dheepan and A Prophet. Festival de Cannes locks the 2024 Competition film, 130-minute duration, Jacques Audiard direction and screenplay, Paul Guilhaume cinematography, Emmanuelle Duplay production design, Juliette Welfling editing, Camille and Clément Ducol music, Cyril Holtz/Erwan Kerzanet/Aymeric Devoldère sound, Jury Prize and ensemble Best Actress award. Pathé independently records 130 minutes, drama/musical, Spanish original language and production year 2023, so the Cannes 2024 production-year record and Pathé 2023 production-year record must remain separate provenance layers rather than being silently normalized. AFC/TSF reporting proves photography was underway in 2023 and documents Sony VENICE 1 and VENICE 2 bodies with a broad full-frame lens package; Paul Guilhaume describes an approximately three-year preparation process, four Mexico scouting trips, a final 55-day principal shoot split into 45 Paris studio days and 10 Mexico City days, full-frame 8K acquisition, frequent 2500 ISO studio work, extensive editorial reframing/pan-and-scan/digital zoom and varispeed, and focal lengths ranging from a 12mm Signature Prime for the Bangkok clinic top shot to very long lenses for choreography. ARRI's interview with gaffer Thomas Garreau independently describes the film as 95% shot at Bry Studios in Paris across all seven sound stages, about 20 sets, a rotating lighting/pre-rig team and up to 130 SkyPanels; preserve that percentage as source provenance alongside AFC's 45-plus-10-day schedule instead of forcing a false arithmetic reconciliation. Official press-kit credits lock Damien Jalet choreography, Virginie Montel artistic direction/costume creation, Julia Floch Carbonel and Simon Livet makeup, Jane Brizard and Emmanuel Janvier hair, Erwan Kerzanet production sound, Aymeric Devoldère sound editing, Cyril Holtz sound supervision/mix, Pierre-Marie Dru music supervision/executive music production, Cédric Fayolle special/VFX supervision, Eugénie Deplus post-production direction and the Why Not Productions/Page 114/Pathé/France 2 Cinéma production network. AFC identifies approximately 500 effects shots including set extensions, blue-screen and full-3D work, with Mikros/MPC effects and Arthur Paux grading. Do not infer total budget or negative cost, exact financing percentages, precise first/last shooting dates, a complete call-sheet schedule, exact body use by day, codec/media/data-management topology, full lens-to-scene map, complete lighting/grip inventory beyond sourced fixtures, production-sound hardware, editorial software/storage/proxy/conform, shot-by-shot VFX vendor allocation, original DI resolution, color transforms, music licensing/recording workflow, insurance, or final mastering/delivery lineage where the locked sources do not establish them.",
    requiredChoicesSeed: {
      award: ["cannes_2024_jury_prize", "cannes_2024_best_actress_ensemble", "selection_obligation_not_technical_evidence"],
      reconciliation: ["emilia_perez", "emilia_perez_ascii", "tree_wide_negative_reuse_run_34097267911", "new_identity_required"],
      chronology: ["film_year_2024", "pathe_production_year_2023", "cannes_production_year_2024_provenance", "principal_photography_2023", "exact_shoot_dates_unresolved"],
      production: ["why_not_productions", "page_114", "pathe_films", "france_2_cinema", "saint_laurent_productions", "pauline_lamy_executive_producer", "olivier_thery_lapiney_production_director", "jean_francois_voisin_production_management"],
      finance: ["named_broadcaster_and_public_support", "total_budget_unresolved", "financing_percentages_unresolved", "recoupment_insurance_unresolved"],
      locations: ["paris_bry_studios", "seven_sound_stages_arri_record", "mexico_city_location_unit", "45_paris_studio_days_10_mexico_city_days_afc_record", "arri_95_percent_bry_provenance", "exact_location_call_sheet_unresolved"],
      screenplay: ["jacques_audiard", "boris_razon_loose_adaptation", "long_preparation_and_reconceptualization", "full_draft_chronology_unresolved"],
      camera: ["paul_guilhaume", "sony_venice_1", "sony_venice_2", "full_frame_8k", "two_cameras_available", "multi_lens_package", "codec_media_sensor_mode_unresolved"],
      lenses: ["tribe_7_or_black_wing_t_tuned_source_provenance", "sigma_ff", "arri_signature_prime_12mm", "angenieux_optimo_ultra_12x_24_290", "very_long_lens_choreography", "complete_lens_scene_map_unresolved"],
      lighting: ["thomas_garreau_gaffer", "2500_iso_studio_strategy", "depence_previsualization", "up_to_130_skypanels", "full_fixture_grip_power_inventory_unresolved"],
      performance_choreography: ["damien_jalet", "camera_as_part_of_choreography", "sacha_naceri_steadicam", "three_weeks_preparation_opening_number", "rehearsal_schedule_beyond_sourced_examples_unresolved"],
      design: ["emmanuelle_duplay", "about_20_sets_arri_record", "bry_studio_mexico_reconstruction", "2000_square_meter_market_set_afc_record", "complete_build_prop_ledger_unresolved"],
      costume_makeup: ["virginie_montel", "julia_floch_carbonel", "simon_livet", "jane_brizard", "emmanuel_janvier", "full_continuity_sourcing_unresolved"],
      editing: ["juliette_welfling", "full_frame_8k_reframing", "pan_scan_digital_zoom", "varispeed", "software_storage_proxy_conform_unresolved"],
      sound: ["erwan_kerzanet", "aymeric_devoldere", "cyril_holtz", "production_sound_hardware_and_mix_topology_unresolved"],
      music: ["clement_ducol", "camille", "pierre_marie_dru", "damien_jalet_choreography_integration", "recording_licensing_mastering_workflow_unresolved"],
      effects: ["cedric_fayolle", "approximately_500_effects_shots", "set_extensions", "blue_screen", "full_3d", "mikros_mpc", "shot_by_shot_vendor_allocation_unresolved"],
      color_post: ["arthur_paux_grading", "mikros_technicolor_mpc_lab", "di_resolution_color_transforms_mastering_unresolved"],
      format: ["130_minutes", "full_frame_8k_acquisition", "final_aspect_ratio_unresolved", "final_sound_format_unresolved", "delivery_mastering_lineage_unresolved"],
      themes: ["film_history", "2024", "production_2023", "cannes_jury_prize", "ensemble_acting_prize", "french_musical", "studio_reconstruction", "mexico_city", "choreography", "vfx_hybrid", "chapter19"]
    },
    learningGoals: [
      "Explain why Emilia Pérez requires one new canonical identity only after accented/ASCII title and plausible-ID reuse checks are negative.",
      "Use the Cannes Jury Prize and ensemble acting prize as corrective-selection obligations rather than technical evidence.",
      "Preserve Cannes' 2024 production-year record and Pathé's 2023 production-year record as distinct provenance.",
      "Use 2023 as the documented principal-photography year without inventing exact first or final shoot dates.",
      "Map the 55-day AFC production account as 45 Paris studio days plus 10 Mexico City days.",
      "Preserve ARRI's 95%-Bry statement separately from the AFC day-count record rather than forcing a false reconciliation.",
      "Identify Why Not Productions and Page 114 with Pathé/France 2 and the wider associated production/support network without inventing finance percentages.",
      "Keep total budget, negative cost, recoupment and insurance unresolved.",
      "Identify Paul Guilhaume as cinematographer and lock Sony VENICE 1 plus VENICE 2 from TSF/AFC production reporting.",
      "Use full-frame 8K as sourced acquisition evidence without inventing codec, media or sensor mode.",
      "Treat the broad lens package as provenance-aware and avoid claiming every lens on every sequence.",
      "Explain how 2500 ISO sometimes reduced studio lighting load while keeping exposure and filtration details bounded.",
      "Use ARRI's Bry lighting account to model pre-rigging, set rotation and up to 130 SkyPanels without manufacturing a complete equipment list.",
      "Explain how Mexico scouting informed studio recreation rather than being discarded when production moved to Paris.",
      "Identify Emmanuelle Duplay and use the roughly 20-set / seven-stage Bry production as design evidence.",
      "Keep construction, dressing and prop inventories unresolved beyond specifically sourced examples.",
      "Identify Damien Jalet as choreographer and model camera movement as part of choreography where the press kit documents it.",
      "Use the three-week preparation for the opening number as a bounded rehearsal example, not a global rehearsal calendar.",
      "Identify Virginie Montel, Julia Floch Carbonel, Simon Livet, Jane Brizard and Emmanuel Janvier across costume, makeup and hair.",
      "Identify Juliette Welfling as editor and connect full-frame 8K to sourced reframing, pan-and-scan, digital zoom and varispeed choices.",
      "Keep editorial software, storage, proxies and conform architecture unresolved.",
      "Identify Erwan Kerzanet, Aymeric Devoldère and Cyril Holtz across production and post sound without inventing recorder, microphone or wireless models.",
      "Identify Clément Ducol, Camille and Pierre-Marie Dru across songs/music/music supervision while keeping recording and licensing workflow bounded.",
      "Use the sourced approximately 500 effects shots as a real VFX census while keeping shot-by-shot techniques and vendor allocation unresolved.",
      "Identify Cédric Fayolle and Mikros/MPC in the effects chain without treating every effect as the same technique.",
      "Identify Arthur Paux grading and Mikros Technicolor/MPC lab participation while keeping DI resolution and color transforms unresolved.",
      "Keep final aspect ratio, final sound format and delivery/mastering lineage unresolved unless a locked primary source establishes them.",
      "Complete all 17 Film Study areas with explicit confidence and unresolved boundaries.",
      "Close the Cannes obligation only when one scenario, one Film Study, one PV record and the exact 609/609 global census agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes obligations", player_task: "Use Jury Prize and ensemble acting prize only as selection gates." },
      { id: "reconciliation", label: "Prove structural absence", player_task: "Search accented/ASCII titles, plausible IDs and Audiard legacy cases before authoring." },
      { id: "chronology", label: "Separate production-year provenance", player_task: "Keep Pathé 2023 and Cannes 2024 records explicit while bounding photography to 2023." },
      { id: "production_structure", label: "Map producers and support", player_task: "Keep company/producer/support roles distinct from unsupported finance percentages." },
      { id: "development", label: "Track the Mexico-to-studio reconception", player_task: "Use scouting and preparation evidence to explain the production pivot." },
      { id: "camera", label: "Lock the VENICE full-frame system", player_task: "Use VENICE 1/2 and full-frame 8K without inventing codec or media." },
      { id: "optics", label: "Preserve lens provenance", player_task: "Map the broad lens package without creating a false scene-by-scene inventory." },
      { id: "lighting", label: "Build a scalable musical-lighting system", player_task: "Use 2500 ISO, previsualization, pre-rigging and SkyPanels as sourced constraints." },
      { id: "locations", label: "Split Paris studio and Mexico City units", player_task: "Keep 45+10 days explicit and ARRI's percentage as separate provenance." },
      { id: "production_design", label: "Reconstruct Mexico in Bry", player_task: "Use seven stages and roughly 20 sets without inventing a complete build ledger." },
      { id: "choreography", label: "Integrate camera and movement", player_task: "Use Damien Jalet and Steadicam collaboration as sourced workflow." },
      { id: "performance", label: "Prepare musical performance", player_task: "Use bounded rehearsal evidence and performer-specific adaptation." },
      { id: "costume_makeup", label: "Track visual continuity", player_task: "Use credited costume, makeup and hair departments while keeping detailed continuity records open." },
      { id: "editing", label: "Exploit full-frame 8K flexibility", player_task: "Model reframing and varispeed without inventing post infrastructure." },
      { id: "sound", label: "Map production through final sound roles", player_task: "Keep credited roles distinct and hardware claims bounded." },
      { id: "music", label: "Coordinate songs, score and choreography", player_task: "Map authorship and supervision without inventing licensing sessions." },
      { id: "effects", label: "Build hybrid physical/digital environments", player_task: "Use the approximately 500-shot effects census without inventing per-shot vendor allocation." },
      { id: "color_post", label: "Map grade and lab", player_task: "Use Arthur Paux and Mikros/MPC while keeping transform/mastering details open." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Expose source confidence and unresolved boundaries." },
      { id: "production_verification", label: "Close Emilia Pérez", player_task: "Require one unique scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenEmiliaPerezExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenEmiliaPerezExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_emilia_perez_verified",
      source: { list_id: "manual_chapter_nineteen_emilia_perez_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
