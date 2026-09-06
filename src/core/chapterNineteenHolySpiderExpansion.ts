import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenHolySpiderExpansionDefinitions = [
  {
    id: "scenario_holy_spider_2022",
    title: "Holy Spider",
    originalTitle: "Holy Spider",
    aliases: ["Les Nuits de Mashhad", "Ankabut-e moqaddas", "عنکبوت مقدس"],
    year: 2022,
    productionYear: 2022,
    principalPhotographyYear: 2021,
    titleType: "Movie",
    runtimeMins: 117,
    directors: ["Ali Abbasi"],
    genres: ["Crime", "Drama", "Thriller"],
    sourceId: "festival_cannes_holy_spider_2022",
    sourceUrl: "https://www.festival-cannes.com/en/f/holy-spider/",
    scenarioType: "award_priority_cannes_2022_best_actress_2021_jordan_35_day_shoot_amman_for_mashhad_alexa_mini_lf_signature_prime_transnational_coproduction_runtime_versions_bounded",
    premise: "Build Holy Spider as a new Chapter 19 source-first Production Case only after tree-wide checks prove that no existing scenario, Film Study or Production Verification identity exists under Holy Spider, Les Nuits de Mashhad, Ankabut-e moqaddas, the Persian title or Ali Abbasi. Festival de Cannes locks the film to the 2022 Competition, Best Actress award for Zar Amir Ebrahimi, production year 2022, Denmark/Germany/Sweden/France, 117 minutes, Ali Abbasi direction, Ali Abbasi/Afshin Kamran Bahrami screenplay, Nadim Carlsen cinematography, Lina Nordqvist production design, Hayedeh Safiyari and Olivia Neergaard Holm editing, Martin Dirkov music and Rasmus Winther Jensen sound. Production chronology is separate: producer Sol Bondy states that the 35-day Jordan shoot wrapped in June 2021 after years of development, Covid delays, an abandoned Iran plan and a blocked Turkey attempt; Ali Abbasi independently describes Jordan as the eventual safe production base after Turkey. Preserve 2022 institutional production-year metadata separately from 2021 principal photography. Abbasi describes the logistical challenge of recreating Mashhad in Jordan, including obtaining period-correct Paykan cars from Iran through a complex shipping route; Cannes likewise states that filming ultimately took place in Amman. ARRI/AFC records Nadim Carlsen using ALEXA Mini LF and Signature Prime lenses, while the German Film Prize catalogue records ARRI Alexa, 4K and 2.39:1; treat these as complementary format evidence without inventing body count, codec, bit depth, sensor mode, filtration, exact focal-length set, exposure settings, data pipeline or full lighting package. Danish Film Institute documents Georg Hackenberg as sound engineer, Rasmus Winther Jensen as sound designer, Lajos Wienkamp Marques as dialogue editor, Gregor Bonse as re-recording mixer and Peter Hjorth as VFX supervisor; preserve those credits without inventing microphones, recorder, wireless, ADR/Foley topology, VFX shot counts, vendors or techniques. Producer evidence shows a financing plan that evolved from roughly €2.5–3m toward €3.8m available before the Jordan shoot; keep this as financing-history evidence rather than claiming a final negative cost. Cannes, DFI and Goodfellas disagree on public runtime metadata at 117, 118 and 115 minutes respectively; use Cannes 117 minutes for the canonical scenario while preserving the 115/117/118 discrepancy as catalogue/version provenance. Do not invent exact final budget, financing shares, insurance/security terms, complete schedule, camera-body inventory, lens package, grip/lighting inventory, production-sound hardware, editorial software/storage, color-management pipeline, VFX census or DCP/audio mastering lineage where the locked sources do not establish them.",
    requiredChoicesSeed: {
      award: ["cannes_2022_best_actress", "selection_obligation_not_technical_evidence"],
      chronology: ["film_year_2022", "cannes_production_year_2022", "principal_photography_2021", "jordan_35_day_shoot", "chronology_provenance_boundary"],
      locations: ["amman_jordan_for_mashhad", "iran_plan_abandoned", "turkey_plan_blocked", "period_paykan_logistics"],
      production: ["profile_pictures", "one_two_films", "nordisk_film_production", "why_not_productions", "goodfellas_wild_bunch", "financing_evolution_not_final_budget"],
      camera: ["nadim_carlsen", "alexa_mini_lf", "signature_prime", "4k_catalogue_record", "2_39_1_catalogue_record", "recording_details_unresolved"],
      design: ["lina_nordqvist", "amman_recreates_mashhad", "period_car_import", "location_adaptation"],
      editing: ["hayedeh_safiyari", "olivia_neergaard_holm", "editorial_infrastructure_unresolved"],
      sound: ["georg_hackenberg", "rasmus_winther_jensen", "lajos_wienkamp_marques", "gregor_bonse", "sound_hardware_unresolved"],
      effects: ["peter_hjorth_vfx_supervisor", "vfx_census_unresolved"],
      runtime: ["cannes_117_minutes", "dfi_118_minutes", "goodfellas_115_minutes", "runtime_version_boundary"],
      themes: ["film_history", "2022", "principal_photography_2021", "cannes_best_actress", "ali_abbasi", "jordan", "iranian_diaspora_production", "alexa_mini_lf", "chapter19"]
    },
    learningGoals: [
      "Explain why Holy Spider must be materialized only after English, French, Persian-transliteration, Persian-script and Ali Abbasi reuse checks are negative.",
      "Use the Cannes 2022 Best Actress award as a corrective selection obligation rather than technical evidence.",
      "Preserve film/award year 2022 and Cannes production year 2022 separately from documented 2021 principal photography.",
      "Identify Ali Abbasi as director and co-screenwriter with Afshin Kamran Bahrami.",
      "Identify Nadim Carlsen as cinematographer and separate his camera authorship from Abbasi's directing role.",
      "Use the sourced 35-day Jordan shoot as the production-duration statement without inventing exact daily dates.",
      "Preserve the June 2021 wrap evidence while keeping the exact first shooting date unresolved.",
      "Explain the production path from attempted Iran filming to Jordan, Turkey and finally Jordan again under political and Covid pressure.",
      "Identify Amman/Jordan as the sourced stand-in for Mashhad rather than claiming location photography in Iran.",
      "Explain how period-correct Paykan cars became a concrete logistics and production-design problem.",
      "Map Profile Pictures and One Two Films as principal production companies and Nordisk Film Production, Why Not Productions and Goodfellas/Wild Bunch as documented partners without inventing ownership shares.",
      "Treat the early €2.5–3m plan and later €3.8m available financing as financing-history evidence rather than a final budget.",
      "Identify ALEXA Mini LF as the directly documented ARRI camera system.",
      "Identify ARRI Signature Prime lenses as the directly documented lens family.",
      "Use the German Film Prize 4K and 2.39:1 record as catalogue/delivery evidence without inferring codec or sensor mode.",
      "Do not turn ALEXA Mini LF and Signature Prime evidence into an invented camera-body count or complete focal-length inventory.",
      "Keep filtration, ISO strategy, exposure indexes and lighting ratios unresolved where no direct source establishes them.",
      "Identify Lina Nordqvist as production designer and distinguish sourced Jordan-to-Mashhad adaptation from unsourced set-build detail.",
      "Explain that political access restrictions shaped art-department and location logistics, not merely the film's themes.",
      "Identify Hayedeh Safiyari and Olivia Neergaard Holm in the Cannes editing credits while preserving catalogue differences rather than forcing a single-credit simplification.",
      "Leave editorial software, proxy/storage and conform topology unresolved.",
      "Identify Martin Dirkov as composer without inventing recording studio, orchestration or mix workflow.",
      "Identify Georg Hackenberg as sound engineer and Rasmus Winther Jensen as sound designer from DFI records.",
      "Identify Lajos Wienkamp Marques as dialogue editor and Gregor Bonse as re-recording mixer without inventing microphones, recorder or ADR/Foley routing.",
      "Identify Peter Hjorth as VFX supervisor while leaving shot count, vendors and techniques unresolved.",
      "Use Cannes 117 minutes as the canonical runtime because it is the official competition record.",
      "Preserve DFI's 118-minute and Goodfellas' 115-minute public records as explicit runtime/catalogue discrepancies.",
      "Do not infer multiple finished masters solely from the 115/117/118-minute public metadata discrepancy.",
      "Distinguish the true-crime historical basis from documentary production; Holy Spider is scripted fiction.",
      "Explain how transnational European finance and a Jordanian service-production environment enabled a Persian-language film that could not shoot in Iran.",
      "Treat actor/crew security and post-film relocation needs as documented production-risk context without inventing confidential protocols.",
      "Keep exact final negative cost, financing percentages, recoupment, insurance and legal terms unresolved.",
      "Keep media/offload/checksum topology, complete grip/lighting package, color-management pipeline and mastering lineage unresolved.",
      "Complete all 17 Film Study areas with explicit source-verified, mapped, research-pending or not-central status.",
      "Close the Cannes obligation only when one unique scenario, one Film Study, one PV record and an exact one-film corrective-queue reduction agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the Cannes Best Actress obligation", player_task: "Use the 2022 award only to establish corrective priority." },
      { id: "reconciliation", label: "Search every Holy Spider identity", player_task: "Check English, French, Persian transliteration, Persian script and Ali Abbasi before materializing." },
      { id: "chronology", label: "Separate 2021 photography from 2022 production metadata", player_task: "Preserve both source-backed chronology layers." },
      { id: "access", label: "Map the failed Iran and Turkey paths", player_task: "Treat political access as a production constraint, not a decorative anecdote." },
      { id: "jordan", label: "Rebase production in Jordan", player_task: "Use Amman/Jordan as the sourced stand-in for Mashhad." },
      { id: "schedule", label: "Lock the 35-day shoot", player_task: "Use the producer's 35-day duration and June 2021 wrap without inventing exact daily dates." },
      { id: "period_logistics", label: "Solve the Paykan-car problem", player_task: "Build period accuracy around the documented import constraints." },
      { id: "production_design", label: "Turn Amman into Mashhad", player_task: "Use Lina Nordqvist's credit and sourced adaptation problem while bounding unsourced build detail." },
      { id: "main_camera", label: "Build the ALEXA Mini LF system", player_task: "Use the documented camera without inventing body count or recording format." },
      { id: "lenses", label: "Use Signature Primes", player_task: "Preserve the documented lens family without fabricating focal-length usage." },
      { id: "format", label: "Preserve 4K and 2.39:1 provenance", player_task: "Treat catalogue format records as bounded evidence." },
      { id: "camera_boundaries", label: "Stop at the evidence boundary", player_task: "Leave codec, bit depth, filtration, ISO and data topology unresolved." },
      { id: "editing", label: "Map the two-editor credit layer", player_task: "Use Cannes credits without inventing editorial infrastructure." },
      { id: "sound", label: "Map production and post sound roles", player_task: "Use DFI credits while leaving hardware and ADR/Foley topology unresolved." },
      { id: "music", label: "Place Martin Dirkov's score", player_task: "Use the composer credit without inventing scoring-session detail." },
      { id: "vfx", label: "Bound visual-effects evidence", player_task: "Use Peter Hjorth's supervisor credit but leave shot census and techniques unresolved." },
      { id: "finance", label: "Track financing evolution", player_task: "Preserve planned and later available funding without calling either the final budget." },
      { id: "security", label: "Model political production risk", player_task: "Recognize documented actor and crew risks without inventing confidential protocols." },
      { id: "runtime", label: "Resolve the runtime boundary", player_task: "Use 117 minutes canonically and preserve 115/118 as catalogue discrepancies." },
      { id: "film_study", label: "Complete all 17 Film Study areas", player_task: "Make evidence confidence and unresolved boundaries explicit." },
      { id: "production_verification", label: "Close Holy Spider", player_task: "Require one scenario/PV identity and an exact one-film Cannes queue reduction." }
    ]
  }
] as const;

export function mergeChapterNineteenHolySpiderExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenHolySpiderExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_holy_spider_verified",
      source: { list_id: "manual_chapter_nineteen_holy_spider_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
