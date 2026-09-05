import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenNitramExpansionDefinitions = [
  {
    id: "scenario_nitram_2021",
    title: "Nitram",
    originalTitle: "Nitram",
    aliases: [],
    year: 2021,
    productionYear: 2020,
    titleType: "Movie",
    runtimeMins: 110,
    directors: ["Justin Kurzel"],
    genres: ["Drama", "Crime"],
    sourceId: "nitram_cannes_2021",
    sourceUrl: "https://cinemadedemain.festival-cannes.com/en/f/nitram/",
    scenarioType: "award_priority_cannes_2021_best_actor_production_year_2020_geelong_lockdown_24_day_location_shoot_alexa_mini_panavision_ultra_speeds_ratio_discrepancy_bounded",
    premise: "Build Nitram as the next unresolved Cannes-major-prizes source-first Production Case only after reuse reconciliation proves that no existing Atlas, Film Study or Production Verification identity exists. Festival de Cannes locks the film to the 2021 Competition cycle and Best Actor award for Caleb Landry Jones, with Justin Kurzel directing, Shaun Grant writing, Germain McMicking cinematography, Alice Babidge production design, Nick Fenton editing and Jed Kurzel credited in the sound/music layer. The contemporaneous production press kit separately records Year of Production 2020 and identifies Good Thing Productions, Stan, Wild Bunch International, the Melbourne International Film Festival Premiere Fund, Madman Entertainment and Nude Run in the production, presentation, sales, distribution and finance network. Australian Cinematographer's direct interview with McMicking locks a November 2020 shoot during the Melbourne lockdown, a production hub in Geelong, a 24-day schedule across four weeks, location work in and around Geelong and Winchelsea, and a camera strategy that had to remain nimble around performance. Kurzel and McMicking investigated Super-16, but Covid-era laboratory supply constraints made that path impractical; tests then led to an ARRI Alexa Mini S35 paired with vintage Panavision Ultra Speeds. The same source records period Hi8/Video8 camcorders for diegetic material, an intentionally mixed handheld-to-more-formal camera progression, selected dolly/crane work, practical and large-source lighting strategies at Helen's house, a show LUT built from location camera tests, Edel Rafferty grading and Soundfirm Melbourne post. The source set contains a format discrepancy that must remain visible: McMicking describes a 1.55:1 frame using the Alexa Mini sensor, while the contemporaneous press kit lists 1.43:1; this case does not collapse those records into an invented single acquisition/master ratio. Runtime listings also vary across institutional records, so the playable scenario uses Cannes' 110-minute listing without claiming it is the only circulating version. Do not infer exact budget, investor percentages, recoupment, complete union terms, full camera serial/package detail, complete lens focal set, filters, codec/media, all lighting plots, exact daily location schedule, complete production-sound chain, editorial hardware/storage, every VFX technique or shot count, HDR mastering transforms, or a definitive explanation for the 1.55:1 versus 1.43:1 discrepancy where the sources do not establish them.",
    requiredChoicesSeed: {
      screenplay: ["shaun_grant_screenplay", "film_year_2021_production_year_2020", "fact_inspired_fiction_boundary", "cannes_award_not_production_evidence"],
      schedule: ["november_2020_lockdown_shoot", "twenty_four_days_four_weeks", "geelong_production_hub", "nimble_performance_led_coverage"],
      camera: ["germain_mcmicking", "alexa_mini_s35", "vintage_panavision_ultra_speeds", "super16_plan_blocked_by_covid_lab_supply", "hi8_video8_diegetic_cameras", "ratio_discrepancy_1_55_vs_1_43"],
      locations: ["greater_geelong", "winchelsea", "location_shoot", "community_separation_during_lockdown"],
      lighting: ["helen_house_large_window_source", "practicals_and_litemat", "lighting_detail_bounded"],
      post: ["nick_fenton_edit", "soundfirm_melbourne", "edel_rafferty_grade", "show_lut_from_camera_tests", "hdr_from_projected_reference", "mastering_boundary"],
      themes: ["film_history", "2021", "production_2020", "cannes_best_actor", "australian_cinema", "covid_production", "geelong", "chapter19"]
    },
    learningGoals: [
      "Explain why Nitram must be materialized only after reuse reconciliation proves no existing Atlas/PV identity.",
      "Separate the Chapter 19/Cannes film year 2021 from the contemporaneous press kit's production year 2020.",
      "Use the 2021 Cannes Best Actor award as a selection obligation rather than as production evidence.",
      "Use Cannes' 110-minute listing for the playable case while acknowledging that other institutional sources list different runtimes.",
      "Identify Justin Kurzel as director and Shaun Grant as screenwriter.",
      "Identify Nick Batzias and Virginia Whitwell as the Screen Australia-listed producers while preserving the press kit's wider producer credit layer.",
      "Map Good Thing Productions, Stan, Wild Bunch International, MIFF Premiere Fund, Madman and Nude Run without inventing ownership or recoupment percentages.",
      "Lock November 2020 as the sourced shoot period without inventing exact calendar dates for every department.",
      "Lock the 24-day schedule across four weeks from Germain McMicking's direct production account.",
      "Explain why the Geelong production hub was a pandemic-era operational system, not just a location anecdote.",
      "Identify Geelong and Winchelsea as sourced production geography and avoid substituting Tasmania merely because the story refers to Port Arthur.",
      "Explain why Super-16 was seriously considered but abandoned when Covid-era laboratory chemical supply made processing impractical.",
      "Identify the ARRI Alexa Mini S35 as the sourced principal digital camera choice.",
      "Identify vintage Panavision Ultra Speeds as the sourced principal lens family without inventing a complete focal-length package.",
      "Explain how the smaller Alexa Mini package supported performance-responsive handheld operation.",
      "Identify period Hi8 and Video8 camcorders as sourced diegetic image sources rather than emulated post effects.",
      "Describe the sourced progression from more handheld/close camera work toward more formal dolly, crane and static compositions later in the film.",
      "Preserve the sourced 1.55:1 camera-frame statement and the press kit's 1.43:1 listing as a documented discrepancy rather than forcing one to overwrite the other.",
      "Avoid treating aspect ratio metadata as proof of codec, media, sensor crop beyond what McMicking directly describes, or final mastering lineage.",
      "Identify Alice Babidge as production and costume designer from the press kit and preserve process claims only where directly sourced.",
      "Use McMicking's account of Helen's house lighting to distinguish specific verified setups from an invented film-wide lighting recipe.",
      "Identify Nick Fenton as editor while leaving editing software, workstation, storage and conform topology unresolved.",
      "Identify Soundfirm Australia as the sourced post-production facility.",
      "Identify Edel Rafferty as colourist and the show LUT as built from pre-shoot camera tests at key locations.",
      "Preserve McMicking's statement that the projected version was the primary grading reference and HDR was derived from it without inventing display or transform specifications.",
      "Identify Steve Single, James Ashton, Dean Ryan and the credited sound-post/production-sound roles without inventing recorder, microphone, wireless or mix-routing details.",
      "Acknowledge credited VFX personnel without inventing a VFX shot census or methodology.",
      "Keep exact budget, financing shares, recoupment, insurance terms and complete legal/rights structure unresolved.",
      "Treat the production's Covid plan and safety roles as documented operational evidence without generalizing them into a universal 2020 protocol.",
      "Keep the historical atrocity and its dramatization boundary separate from technical production reconstruction; this is scripted fiction, not documentary reenactment evidence.",
      "Close the case only when one unique scenario, a complete 17-area Film Study, one PV record and the Cannes corrective audit all agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock Cannes Best Actor obligation", player_task: "Use the award to establish selection priority without treating it as technical evidence." },
      { id: "reconciliation", label: "Prove Nitram identity is absent", player_task: "Search Atlas, Film Study, PV, branch and PR history before materializing." },
      { id: "chronology", label: "Separate 2020 production from 2021 film year", player_task: "Preserve both source-backed dates rather than collapsing them." },
      { id: "covid_operations", label: "Build the lockdown production hub", player_task: "Use the Geelong hub and crew-separation system as a documented production constraint." },
      { id: "schedule", label: "Plan 24 days across four weeks", player_task: "Treat the short schedule as a real operational constraint." },
      { id: "locations", label: "Map Geelong and Winchelsea", player_task: "Use sourced Victorian production geography and avoid story-location substitution." },
      { id: "camera_tests", label: "Test film and digital options", player_task: "Model the Super-16 investigation and Covid processing constraint before selecting digital." },
      { id: "camera_package", label: "Choose Alexa Mini S35 and Ultra Speeds", player_task: "Use the sourced camera/lens family while leaving unsourced package details open." },
      { id: "aspect_boundary", label: "Preserve the ratio discrepancy", player_task: "Keep 1.55:1 and 1.43:1 as distinct source records until further evidence resolves them." },
      { id: "performance_camera", label: "Follow performance responsively", player_task: "Move between handheld intimacy and later formal observation without rigid coverage rules." },
      { id: "diegetic_video", label: "Source period camcorders", player_task: "Use working Hi8/Video8 cameras for in-story video material." },
      { id: "design", label: "Coordinate production and costume design", player_task: "Use Babidge's sourced dual credit and collaborate around blocking, practicals, texture and period detail." },
      { id: "lighting", label: "Light Helen's house from sourced methods", player_task: "Use verified large-source/practical strategies without inventing a film-wide plot." },
      { id: "editing", label: "Cut performance-led coverage", player_task: "Use Fenton's edit credit while leaving technical editorial infrastructure unresolved." },
      { id: "sound", label: "Map production and post sound", player_task: "Use credited personnel and Soundfirm without fabricating equipment topology." },
      { id: "grade", label: "Carry the test-built LUT into finishing", player_task: "Use Rafferty's sourced grade process and preserve the projected/HDR hierarchy." },
      { id: "finance_rights", label: "Map partners without invented shares", player_task: "Separate credited production, finance, sales and distribution entities from unknown economics." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Map source-verified facts and research-pending boundaries across the coverage contract." },
      { id: "production_verification", label: "Close the Cannes corrective case", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenNitramExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenNitramExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_nitram_verified",
      source: { list_id: "manual_chapter_nineteen_nitram_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
