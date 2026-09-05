import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenToriAndLokitaExpansionDefinitions = [
  {
    id: "scenario_tori_and_lokita_2022",
    title: "Tori and Lokita",
    originalTitle: "Tori et Lokita",
    aliases: ["Tori & Lokita"],
    year: 2022,
    productionYear: 2022,
    principalPhotographyYear: 2021,
    titleType: "Movie",
    runtimeMins: 88,
    directors: ["Jean-Pierre Dardenne", "Luc Dardenne"],
    genres: ["Drama"],
    sourceId: "festival_cannes_tori_et_lokita_2022",
    sourceUrl: "https://www.festival-cannes.com/en/f/tori-et-lokita/",
    scenarioType: "award_priority_cannes_2022_75th_anniversary_2021_liege_wallonia_11_week_location_shoot_five_week_rehearsal_red_komodo_monstro_40mm_handheld_actor_height_natural_light_diegetic_sound_bounded",
    premise: "Build Tori and Lokita / Tori et Lokita as a new Chapter 19 source-first Production Case only after a tree-wide reuse audit proves that no existing scenario, Film Study or Production Verification identity exists under Tori and Lokita, Tori et Lokita, Tori & Lokita or the Dardenne names. Festival de Cannes locks the film to the 2022 Competition and 75th Anniversary Prize, credits Jean-Pierre and Luc Dardenne as directors and screenwriters, Benoit Dervaux as cinematographer, Igor Gabriel as production designer, Marie-Hélène Dozo and Valène Leroy in editing, Thomas Gauder and Jean-Pierre Duret in sound, lists Belgium/France, 88 minutes and year of production 2022. Production records separately place principal photography in 2021: Crew United and Scriptoclap give 19 July to 28 September 2021 in Liège and its surroundings / Wallonia, while Dervaux summarizes the production as an 11-week shoot with about one month of preparation. Preserve festival production-year metadata separately from shoot chronology. Les Films du Fleuve identifies Archipel35 and Savage Film as coproducers, Cinéart and Diaphana as distributors and Wild Bunch International as international sales; public-fund records document support including Screen.Brussels and VAF. Screen.Brussels records a €70,000 investment representing 1.19% of the project budget, while Scriptoclap reports a €5.95m budget; treat this as approximately €5.9–5.95m rather than inventing partner shares or recoupment structure. Benoit Dervaux's direct Belgian Society of Cinematographers interview establishes the Dardenne visual method for this film: a deliberately light technical device, handheld camera kept at the young actors' eye height, extensive rehearsal, a small RED Komodo with Zeiss 40mm T2.1 for the main lightweight system, and a RED Monstro at 2500 ISO with a 40mm Zeiss Master Prime for the darkest night work. Dervaux describes the lighting as basically natural, often reducing or switching off existing light instead of adding cinema light; warehouse work used restrained supplemental tools including Carpetlight and SkyPanel units raised on a roughly 55-metre crane, practical dimmable LED sources, selective LED tubes and substantial final grading. He also explains that the film's apparent spontaneity rests on repeated rehearsal and complicated long-take choreography. The Dardenne brothers independently describe roughly five weeks of rehearsal with the two first-time lead actors and an overwhelmingly diegetic sound concept in which added effects are location-derived and meant to feel organically part of the filmed space. Do not infer exact shooting-day count from the calendar window, complete camera-body inventory, sensor modes, codecs, bit depth, filtration, media/offload/checksum topology, full lens set beyond the sourced 40mm systems, complete grip/lighting inventory, exact exposure settings beyond the directly described night-scene values, production-sound recorder/microphone/wireless chain, editorial software/storage, color-management pipeline, VFX census, DCP/audio mastering lineage, financing percentages, recoupment, insurance, legal terms or department-by-department Covid protocol where the source set does not establish them.",
    requiredChoicesSeed: {
      award: ["cannes_2022_75th_anniversary_prize", "selection_obligation_not_technical_evidence"],
      chronology: ["film_year_2022", "cannes_production_year_2022", "principal_photography_2021", "july_19_to_september_28_window", "chronology_provenance_boundary"],
      rehearsal: ["first_time_lead_actors", "about_five_weeks_rehearsal", "daily_rehearsal", "blocking_before_spontaneity"],
      locations: ["liege_and_surroundings", "wallonia", "location_driven_realism"],
      production: ["les_films_du_fleuve", "archipel35", "savage_film", "approx_5_9m_budget_band", "partner_shares_unresolved"],
      camera: ["benoit_dervaux", "red_komodo", "zeiss_40mm_t2_1", "red_monstro_night", "zeiss_master_prime_40mm", "handheld_actor_eye_height"],
      lighting: ["basically_natural_light", "cut_existing_light", "warehouse_night_tests", "carpetlight_skypanel_crane", "practical_led_sources", "grading_support"],
      sound: ["jean_pierre_duret", "thomas_gauder", "valene_leroy", "diegetic_sound_principle", "location_derived_added_sound", "hardware_unresolved"],
      post: ["marie_helene_dozo", "valene_leroy_editing", "cedric_ettouati_post_supervision", "grading_active", "post_infrastructure_unresolved"],
      runtime: ["cannes_88_minutes", "screen_brussels_project_runtime_discrepancy", "runtime_version_boundary"],
      themes: ["film_history", "2022", "principal_photography_2021", "cannes_75th_anniversary_prize", "dardenne", "liege", "handheld_40mm", "rehearsal", "chapter19"]
    },
    learningGoals: [
      "Explain why Tori and Lokita must be materialized only after English, French, ampersand-title and Dardenne-name reuse checks are negative.",
      "Use the Cannes 2022 75th Anniversary Prize as a selection obligation rather than technical evidence.",
      "Preserve film/award year 2022 and Cannes production year 2022 separately from documented 2021 principal photography.",
      "Identify Jean-Pierre and Luc Dardenne as co-directors and co-screenwriters.",
      "Identify Benoit Dervaux as cinematographer and distinguish his combined camera/lighting role from the brothers' directing roles.",
      "Use 19 July to 28 September 2021 as the sourced production window without converting it into an unsupported exact shooting-day count.",
      "Use Dervaux's 11-week shoot account as a production-duration statement with its own provenance.",
      "Identify Liège and its surroundings / Wallonia as the principal sourced production geography.",
      "Explain that the two leads were first-time non-professional actors and that this materially shaped the rehearsal and camera method.",
      "Preserve the roughly one-month to five-week rehearsal evidence without forcing false precision across sources.",
      "Explain how repeated rehearsal and daily blocking produce apparent spontaneity rather than uncontrolled improvisation.",
      "Explain why the camera is kept at the young actors' eye height and physically participates in the mise-en-scène.",
      "Identify the lightweight RED Komodo with Zeiss 40mm T2.1 as the sourced principal technical discussion/system for the film.",
      "Identify RED Monstro at 2500 ISO with a 40mm Zeiss Master Prime as the sourced system for the darkest night work.",
      "Do not turn the two sourced camera configurations into an invented complete body/lens inventory.",
      "Explain the Dardenne rule of mainly one normal lens, little grip equipment and no spectacular camera effects as a historical production method.",
      "Identify handheld operation as central while keeping stabilization percentages and complete support hardware unresolved.",
      "Explain Dervaux's basically-natural-light strategy, including cutting undesirable public light rather than merely adding fixtures.",
      "Identify warehouse night work as the principal lighting challenge documented by the cinematographer.",
      "Identify Carpetlight and SkyPanel units on a roughly 55-metre crane as sourced supplemental night tools without treating them as the full package.",
      "Identify practical dimmable LED sources and selective LED tubes as sourced problem-solving tools.",
      "Preserve the directly described two-stop over/under exposure relationships only for the warehouse setup where Dervaux states them.",
      "Explain why long takes depend on actor/camera rhythm and repeated choreography rather than technical display.",
      "Identify Igor Gabriel as production designer and Dorothée Guiraud / Natali Tabareau-Vieuille in costume and makeup from producer records.",
      "Identify Marie-Hélène Dozo and Valène Leroy in the editing layer while leaving software, proxy, storage and conform topology unresolved.",
      "Identify Jean-Pierre Duret, Thomas Gauder and Valène Leroy in the sound layer without inventing recorder, microphone, wireless, ADR or Foley systems.",
      "Explain the Dardennes' diegetic-sound principle: added sounds can be introduced in post but are location-derived and intended to feel organic to the scene.",
      "Keep external-score assumptions bounded; the sourced method emphasizes diegetic and location-derived sound rather than conventional non-diegetic scoring.",
      "Map Les Films du Fleuve, Archipel35 and Savage Film as documented production partners without inventing ownership percentages.",
      "Use public-fund records for Screen.Brussels and VAF without turning support amounts into an unsourced complete financing plan.",
      "Treat €5.95m / approximately €5.9m as the sourced budget band while keeping exact final cost and partner economics unresolved.",
      "Use Cannes/Les Films du Fleuve's 88-minute runtime for play while preserving Screen.Brussels' earlier 110-minute project record as a development/catalogue discrepancy.",
      "Keep camera recording format, data management, full filtration, complete lighting package, post software, VFX census and mastering lineage unresolved where unsupported.",
      "Distinguish a documentary-like or reality-close camera style from documentary genre; Tori and Lokita is scripted fiction.",
      "Complete all 17 Film Study areas with explicit source-verified, mapped, research-pending or not-central status.",
      "Close the Cannes obligation only when one unique scenario, one Film Study, one PV record and an exact one-film corrective-queue reduction agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes 75th Anniversary obligation", player_task: "Use the 2022 prize only to establish selection priority." },
      { id: "reconciliation", label: "Search all title identities", player_task: "Check Tori and Lokita, Tori et Lokita and Tori & Lokita before materializing." },
      { id: "chronology", label: "Separate 2021 photography from 2022 festival metadata", player_task: "Preserve both source-backed chronology layers." },
      { id: "production_window", label: "Lock the Liège shoot window", player_task: "Use 19 July to 28 September 2021 without inventing an exact shooting-day total." },
      { id: "rehearsal", label: "Build the five-week rehearsal system", player_task: "Use repeated rehearsal to prepare two first-time lead actors and the camera choreography." },
      { id: "blocking", label: "Turn rehearsal into apparent spontaneity", player_task: "Preserve precise blocking while allowing performance rhythm to remain alive." },
      { id: "camera_height", label: "Stay at the children's eye height", player_task: "Make camera position serve Tori and Lokita rather than adult observer height." },
      { id: "main_camera", label: "Build the lightweight Komodo system", player_task: "Use the sourced RED Komodo and 40mm Zeiss T2.1 without inventing recording details." },
      { id: "night_camera", label: "Switch for extreme low light", player_task: "Use the sourced RED Monstro 2500 ISO / 40mm Master Prime configuration only where the night evidence supports it." },
      { id: "handheld", label: "Keep the camera inside the action", player_task: "Use handheld choreography and physical distance as part of mise-en-scène." },
      { id: "natural_light", label: "Subtract light before adding it", player_task: "Use natural/public light selectively and switch off sources that break the realism." },
      { id: "warehouse_night", label: "Solve the dark warehouse", player_task: "Use restrained crane-mounted and practical sources without making the lighting visibly cinematic." },
      { id: "skin_exposure", label: "Protect both young actors", player_task: "Use the sourced makeup/reflection and selective LED strategies without generalizing them beyond the documented setup." },
      { id: "long_take_rhythm", label: "Coordinate actor and camera rhythm", player_task: "Treat long takes as choreographed performance problems rather than virtuoso display." },
      { id: "production_design", label: "Map the physical world", player_task: "Use Igor Gabriel's design credit while keeping unsourced build/dressing details bounded." },
      { id: "editing", label: "Shape the momentum", player_task: "Use Dozo/Leroy credits while leaving editorial infrastructure unresolved." },
      { id: "sound", label: "Build an organic diegetic sound world", player_task: "Use location-derived sound and sourced credits without fabricating hardware or post routing." },
      { id: "grade", label: "Use grading as invisible support", player_task: "Preserve Dervaux's account of finishing work without inventing color-management topology." },
      { id: "finance", label: "Map the Belgian-French coproduction", player_task: "Record documented partners and public funds while keeping shares and recoupment unresolved." },
      { id: "runtime", label: "Resolve the runtime boundary", player_task: "Use the 88-minute finished-film record and retain the earlier 110-minute project listing as provenance, not as a second assumed master." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Make evidence confidence and unresolved boundaries explicit." },
      { id: "production_verification", label: "Close Tori and Lokita", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenToriAndLokitaExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenToriAndLokitaExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_tori_and_lokita_verified",
      source: { list_id: "manual_chapter_nineteen_tori_and_lokita_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
