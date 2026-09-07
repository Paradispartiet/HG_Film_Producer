import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenAboutDryGrassesExpansionDefinitions = [
  {
    id: "scenario_about_dry_grasses_2023",
    title: "About Dry Grasses",
    originalTitle: "Kuru Otlar Üstüne",
    aliases: ["Kuru Otlar Ustune"],
    year: 2023,
    productionYear: 2023,
    principalPhotographyYear: 2021,
    titleType: "Movie",
    runtimeMins: 197,
    directors: ["Nuri Bilge Ceylan"],
    genres: ["Drama"],
    sourceId: "festival_cannes_kuru_otlar_ustune_2023",
    sourceUrl: "https://www.festival-cannes.com/en/f/kuru-otlar-ustune/",
    scenarioType: "award_priority_cannes_2023_best_actress_eastern_anatolia_pandemic_winter_sony_venice_cooke_anamorphic_long_form_dialogue_location_composite",
    premise: "Build About Dry Grasses / Kuru Otlar Üstüne as a genuinely new Chapter 19 source-first Production Case only after exact-main branch/PR/history checks and run 34087825995 prove no pre-existing canonical scenario, Film Study or Production Verification identity under the English or Turkish titles or plausible scenario IDs. Festival de Cannes locks the 2023 Competition film, 197-minute runtime, Turkey-France-Germany production identity, principal credits and Merve Dizdar's Best Actress award; the prize establishes corrective selection priority and is not technical evidence. Nuri Bilge Ceylan's official technical record locks 4K Sony VENICE capture, Cooke Anamorphic SF 2X lenses, 24 fps, colour and a 2.39 CinemaScope screening ratio. Unifrance independently records 3h17, colour, CinemaScope and 5.1, while Komplizen Film catalogues 1:2.35; preserve that 2.39-versus-2.35 catalogue discrepancy rather than silently normalizing it. Physical production chronology remains separate from the 2023 institutional production year: the Erzurum provincial government documents filming already underway in Karayazı on 6 February 2021, while later accounts describe a March start, so principalPhotographyYear is 2021 but the exact first shooting day and complete date range remain unresolved. Cannes press-conference reporting records extensive location searching and the use of different villages around Karayazı for individual scenes that were assembled in editing to read as one place. Actor testimony records severe winter conditions, pandemic-era accommodation in a student dormitory and a long preparation period; Deniz Celiloğlu states that he received the script about seven months before shooting. Ceylan's Cineuropa interview says the story grew from co-writer Akın Aksu's real teaching diary, that the three writers worked for almost a year, that the screenplay was unusually long, and that Ceylan shot the full script before substantially reducing it in editing. The official credits lock Cevahir Şahin and Kürşat Üresin as cinematographers, winter/summer focus-puller and makeup/hair splits, Meral Aktan production design, Gülşah Yüksel costume, Oğuz Atabaş and Ceylan editing, Fatih Aydoğdu production sound, Clément Laforce sound editing, Jean-Pierre Laforce dialogue editing/re-recording mix, Pascal Chauvin Foley, Cinephase Paris mixing/Foley, Mojo FX and Dupp Film visual-effects work, Can Film Gothenburg grading and additional grading/image delivery at The Post Republic Hamburg. TRT reports that camera, sound, lighting and editing used TRT personnel and equipment support. The official credit chain also identifies NBC Film, Memento Production and Komplizen Film with Second Land, Film i Väst, Arte France Cinéma, Bayerischer Rundfunk, TRT Sinema and Playtime among co-production partners. Do not infer a total budget, exact negative cost, detailed finance shares beyond explicitly published country percentages, precise shoot start/end dates, a complete village-by-scene ledger, camera body count, codec/media, focal-length inventory, exposure/filtration, full lighting/grip inventory, sound-recorder/microphone/wireless models, editorial software/storage/proxy topology, VFX shot census or vendor allocation, color-management transforms, insurance/permits or final mastering lineage beyond the sourced 4K/Scope/5.1/DCP exhibition record.",
    requiredChoicesSeed: {
      award: ["cannes_2023_best_actress_merve_dizdar", "selection_obligation_not_technical_evidence"],
      reconciliation: ["about_dry_grasses", "kuru_otlar_ustune", "tree_wide_negative_reuse_run_34087825995", "new_identity_required"],
      chronology: ["film_year_2023", "production_year_2023", "principal_photography_2021", "filming_underway_2021_02_06", "exact_shoot_start_and_end_unresolved"],
      production: ["nbc_film", "memento_production", "komplizen_film", "second_land", "film_i_vast", "arte_france_cinema", "br", "trt_sinema", "playtime"],
      finance: ["transnational_coproduction", "unifrance_country_percentages_bounded", "named_public_support", "total_budget_unresolved", "negative_cost_unresolved"],
      locations: ["erzurum", "karayazi", "multiple_villages_composited_as_one_place", "full_location_scene_ledger_unresolved"],
      screenplay: ["akin_aksu_teaching_diary_source", "akin_aksu_ebru_ceylan_nuri_bilge_ceylan_writers", "almost_one_year_writing", "full_script_shot_then_reduced_in_edit"],
      camera: ["cevahir_sahin", "kursat_uresin", "sony_venice_4k", "cooke_anamorphic_sf_2x", "24fps", "camera_body_count_codec_media_unresolved"],
      lighting: ["trt_personnel_equipment_support", "v_isik_equipment_credit", "full_lighting_grip_inventory_unresolved"],
      performance: ["deniz_celiloglu_seven_month_script_preparation", "pandemic_winter_constraints", "long_dialogue_performance", "full_rehearsal_calendar_unresolved"],
      design: ["meral_aktan_production_design", "remote_school_village_geography", "metalsac_dudullu_studio_credit", "build_dressing_inventory_unresolved"],
      costume_makeup: ["gulsah_yuksel_costume", "winter_summer_makeup_hair_splits", "full_continuity_inventory_unresolved"],
      editing: ["oguz_atabas", "nuri_bilge_ceylan", "full_script_shot_then_cut", "multi_village_spatial_composite", "software_storage_proxy_unresolved"],
      sound: ["fatih_aydogdu", "clement_laforce", "jean_pierre_laforce", "pascal_chauvin", "cinephase_paris", "5_1", "production_sound_hardware_unresolved"],
      effects: ["mojo_fx", "dupp_film", "serkan_semiz", "melisa_bodur", "vfx_shot_count_and_vendor_allocation_unresolved"],
      color_post: ["can_film_gothenburg", "emil_eriksson", "the_post_republic_hamburg", "gregor_pfuller", "color_management_and_mastering_lineage_unresolved"],
      format: ["197_minutes", "4k", "24fps", "2_39_cinemascope_official_director_record", "2_35_komplizen_catalogue_discrepancy", "dcp", "5_1"],
      themes: ["film_history", "2023", "principal_photography_2021", "cannes_best_actress", "turkish_cinema", "eastern_anatolia", "pandemic_production", "long_form_dialogue", "chapter19"]
    },
    learningGoals: [
      "Explain why About Dry Grasses requires a new canonical identity only after English/Turkish title and scenario-ID reuse checks are negative.",
      "Use the 2023 Cannes Best Actress award as a corrective selection obligation rather than craft evidence.",
      "Keep Cannes/Unifrance production year 2023 separate from physical photography underway in 2021.",
      "Preserve the February-versus-March shoot-start source discrepancy instead of inventing an exact first day.",
      "Map Karayazı and the surrounding villages as the documented production geography without inventing a full location ledger.",
      "Explain how scenes filmed in different villages were edited to read as a single spatial world.",
      "Identify NBC Film, Memento Production and Komplizen Film as the principal production companies and preserve the wider co-production network.",
      "Use published co-production percentages only as bounded country-share metadata, not as a total-budget model.",
      "Keep total budget, negative cost, recoupment, insurance and exact financing shares unresolved.",
      "Identify Cevahir Şahin and Kürşat Üresin as cinematographers.",
      "Lock 4K Sony VENICE, Cooke Anamorphic SF 2X, 24 fps and the official 2.39 CinemaScope record.",
      "Preserve Komplizen Film's 2.35 catalogue ratio as a provenance discrepancy rather than silently overwriting it.",
      "Keep camera body count, codec, media, focal-length inventory, filters and exposure settings unresolved.",
      "Use the winter/summer focus-puller split as evidence of production-unit continuity without inventing a complete schedule.",
      "Use TRT reporting to document camera, sound, lighting and editing personnel/equipment support without expanding it into an unsupported equipment list.",
      "Explain how Akın Aksu's teaching diary became source material for the screenplay.",
      "Map the nearly year-long three-writer process without inventing draft dates or revision counts.",
      "Use the seven-month actor script-preparation testimony as bounded performance-process evidence.",
      "Connect harsh winter and pandemic accommodation constraints to production planning without turning anecdote into a complete safety ledger.",
      "Identify Meral Aktan as production designer and keep construction/dressing inventories unresolved.",
      "Identify Gülşah Yüksel as costume designer and preserve winter/summer makeup-hair role splits.",
      "Explain why shooting the full oversized screenplay made editorial reduction a major production-system decision.",
      "Identify Oğuz Atabaş and Nuri Bilge Ceylan as editors without inventing editorial software, storage or proxy architecture.",
      "Map Fatih Aydoğdu, Clément Laforce, Jean-Pierre Laforce, Pascal Chauvin and Cinephase Paris across production and post sound.",
      "Keep recorder, microphone, wireless, ADR routing and exact mix topology unresolved beyond credited roles and 5.1 delivery.",
      "Acknowledge Mojo FX and Dupp Film as VFX contributors while keeping shot count, techniques and vendor allocation unresolved.",
      "Map Can Film Gothenburg and The Post Republic Hamburg as sourced grading/image-delivery facilities without inventing color transforms.",
      "Separate sourced 4K/Scope/5.1/DCP exhibition metadata from unsupported mastering lineage claims.",
      "Complete all 17 Film Study areas with source-verified, mapped, research-pending or not-central status.",
      "Close the Cannes obligation only when one scenario, one Film Study, one PV record and the exact 607/607 global census agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes performance-prize obligation", player_task: "Use Merve Dizdar's 2023 prize only to establish corrective priority." },
      { id: "reconciliation", label: "Prove structural absence", player_task: "Search About Dry Grasses, Kuru Otlar Üstüne and plausible IDs before authoring." },
      { id: "chronology", label: "Separate 2021 photography from 2023 production metadata", player_task: "Keep the exact shoot start unresolved where sources disagree." },
      { id: "production_structure", label: "Map the transnational production network", player_task: "Separate principal producers, co-producers and supporting partners." },
      { id: "finance_boundary", label: "Bound the finance evidence", player_task: "Use only explicit country shares and named supports; keep total budget open." },
      { id: "locations", label: "Build the Karayazı production geography", player_task: "Use multiple villages without inventing a scene-by-scene ledger." },
      { id: "screenplay", label: "Trace diary to screenplay", player_task: "Model the three-writer process and oversized script from sourced testimony." },
      { id: "camera", label: "Lock the Sony VENICE system", player_task: "Use 4K VENICE and Cooke Anamorphic SF 2X without inventing body count or focal lengths." },
      { id: "format", label: "Preserve format provenance", player_task: "Use 24 fps and official 2.39 while retaining the 2.35 catalogue discrepancy." },
      { id: "lighting", label: "Bound lighting support", player_task: "Use TRT/V-Işık credits without manufacturing a lamp or grip inventory." },
      { id: "performance", label: "Prepare long-form dialogue", player_task: "Use seven-month script preparation and winter constraints without inventing a rehearsal calendar." },
      { id: "production_design", label: "Build remote institutional space", player_task: "Use Meral Aktan and sourced locations/studio while keeping build detail open." },
      { id: "costume_makeup", label: "Track seasonal continuity", player_task: "Use costume and winter/summer makeup-hair credits as bounded evidence." },
      { id: "editing", label: "Reduce the full-shot screenplay", player_task: "Treat long-form reduction and multi-village spatial assembly as editorial systems." },
      { id: "sound", label: "Map production through final mix", player_task: "Keep credited sound roles distinct and hardware claims bounded." },
      { id: "effects", label: "Keep VFX visible but bounded", player_task: "Credit Mojo FX/Dupp Film without inventing a shot census." },
      { id: "color_post", label: "Map grading and image delivery", player_task: "Use Can Film and The Post Republic without inventing transform/mastering lineage." },
      { id: "pandemic_constraints", label: "Model remote pandemic logistics", player_task: "Use dorm accommodation and harsh winter as documented constraints, not a complete safety dossier." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Make evidence confidence and unresolved boundaries explicit." },
      { id: "production_verification", label: "Close About Dry Grasses", player_task: "Require one unique scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenAboutDryGrassesExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenAboutDryGrassesExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_about_dry_grasses_verified",
      source: { list_id: "manual_chapter_nineteen_about_dry_grasses_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
