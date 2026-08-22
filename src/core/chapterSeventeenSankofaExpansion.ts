import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenSankofaExpansionDefinitions = [
  {
    id: "scenario_sankofa_1993",
    title: "Sankofa",
    originalTitle: "Sankofa",
    year: 1993,
    titleType: "Movie",
    runtimeMins: 124,
    directors: ["Haile Gerima"],
    genres: ["Drama", "History"],
    premise: "Build Sankofa as Haile Gerima's independently controlled 1993 diasporic historical feature whose production, financing, editing and later self-distribution form one unusually well documented Black independent system. UCLA Film & Television Archive credits Gerima as director, producer, writer and editor and Augustin E. Cubano as cinematographer; its L.A. Rebellion record gives 35mm, color and 124 minutes. BFI likewise records a 1993 USA/Germany/Ghana/Burkina Faso production at 124 minutes. A BFI programme expands the original production network to a Negod Gwad/Ngod Gward Productions record in co-production with the Ghana National Commission on Culture, DiProCi, NDR and WDR, in association with Channel Four, with Shirikiana Aina as co-producer, Ada Marie Babino as line producer, Charles Nuckolls as production manager, Kerry Marshall as production designer, Tracey White as costume designer and David J. White as composer. Preserve the source spelling/credit variation around Negod Gwad/Ngod Gward rather than silently normalizing institutional records. Contemporary Los Angeles Times reporting says Gerima and Aina financed the film through foundation grants, bartered plane tickets and lodging and credit-card purchases and completed it for less than $1 million. Treat 'less than $1 million' as a documented ceiling, not an exact budget, and do not invent funding shares, exchange rates, deferred salaries or debt structure. Gerima told the Los Angeles Times that the plantation material was originally intended for Louisiana, but after costs rose when the Black crew arrived he shifted that material to Jamaica; he then returned to Africa about a year later and completed the remaining production in roughly three weeks. Merawi Gerima independently remembers being on the Jamaica set for the final scene and recalls Shirikiana Aina fundraising in the United States to keep the underfunded production moving. Keep Jamaica and Ghana/Africa as distinct production phases and do not manufacture exact shoot dates, call sheets or a complete location list. Washington Post reporting documents Gerima's long research into slavery and maroon histories and records his account of Kofi Ghanaba entering such an absorbed performance state as Sankofa that Gerima largely had to let the camera capture the moment rather than mechanically stop and restart him. Use this as title-specific performance evidence only; do not generalize it into a claim that the film was wholly improvised or documentary. The image record supports 35mm color and Cubano's cinematography, but not a camera body, lens set, stock, exposure strategy, lighting package, laboratory route or color-timing recipe, so those remain unset. Original craft and later restoration must stay separate: contemporary and institutional sources support Gerima's original editing, Kerry Marshall's design, Tracey White's costumes, David J. White's music and sound credits that vary by catalogue between Marko A. Costanzo and Don White/re-recording. Preserve sound-credit variance instead of collapsing production sound, Foley and re-recording into one undocumented workflow. Runtime records also vary: a 1995 Los Angeles Times release listing gives 123 minutes, UCLA and BFI give 124, while BFI programme/IFFR/trigon-style institutional exhibition records give 125. Use 124 minutes as canonical gameplay runtime because two major institutional film archives converge there, while explicitly retaining 123/124/125 as catalogue/version variance. Distribution is a separate production-history layer. Contemporary Los Angeles Times reporting documents that U.S. distributors declined the film, after which Gerima and Aina used Mypheduh Films and community organizing to rent theaters, hold post-screening discussions and use revenue from the initial Washington run to strike additional prints and enter more cities. BFI/Sight and Sound later describes this circulation as closer to community organizing than conventional distribution. Teach that self-distribution system without confusing theatrical booking, grassroots promotion, later VHS circulation or the 2021 ARRAY/Netflix restoration/re-release with original 1992-93 manufacture. Do not invent unsupported camera, lens, stock, lighting, sound-hardware, stunt, intimacy, plantation-set safety, transport, budget-line, laboratory, ADR, mix, restoration or rights-clearance details.",
    sourceId: "ucla_sankofa_1993",
    sourceUrl: "https://cinema.ucla.edu/collections/la-rebellion/sankofa/",
    scenarioType: "black_independent_diasporic_multiterritory_low_budget_35mm_self_distribution",
    requiredChoicesSeed: {
      screenplay: ["gerima_long_term_slavery_research", "diasporic_sankofa_time_structure", "historical_research_not_documentary_transcription"],
      camera: ["cubano_35mm_color_record", "jamaica_and_ghana_phases_kept_distinct", "no_invented_camera_lens_stock_exposure_lighting_or_lab_recipe"],
      editing: ["gerima_editorial_authorship", "multi_phase_production_not_confused_with_final_structure", "restoration_not_original_editing"],
      sound: ["david_white_music_separate", "catalogue_sound_credit_variance_preserved", "no_invented_recorder_microphone_foley_adr_or_mix_layout"],
      themes: ["film_history", "1990s", "la_rebellion", "black_independent_cinema", "african_diaspora_cinema", "haile_gerima", "shirikiana_aina", "mypheduh_films", "negod_gwad", "ghana", "jamaica", "cape_coast", "slavery_history", "resistance", "35mm_color", "augustin_cubano", "kerry_marshall", "tracey_white", "david_j_white", "low_budget_finance", "foundation_grants", "barter", "community_distribution", "four_wall_distribution", "runtime_variance", "restoration_boundary"],
    },
    learningGoals: [
      "Model Sankofa as an independently controlled Black diasporic production whose writing, producing, directing and editing remained centered on Haile Gerima while Shirikiana Aina and a wider production network carried distinct producing responsibilities.",
      "Keep the Negod Gwad/Ngod Gward production-company spelling variation visible across sources instead of silently rewriting the historical record.",
      "Map the Ghana National Commission on Culture, DiProCi, NDR, WDR and Channel Four relationships as a transnational production network without inventing percentage ownership or finance shares.",
      "Treat the contemporary under-$1-million figure as a production-cost ceiling, not an exact budget, and preserve grants, barter and credit-card financing as separate documented mechanisms.",
      "Separate the Jamaica plantation-production phase from the later Ghana/Africa phase and retain Gerima's account that the second phase followed roughly a year later and was completed in about three weeks.",
      "Do not invent exact shoot dates, a complete location list, call sheets, per-country spend or logistics that the reviewed sources do not establish.",
      "Use Merawi Gerima's Jamaica-set memory and Shirikiana Aina's continuing fundraising as first-person evidence of the production's family/independent labor structure without turning memory into a complete production ledger.",
      "Use Gerima's account of Kofi Ghanaba's absorbed performance as title-specific directing evidence while refusing a blanket claim that Sankofa was wholly improvised.",
      "Keep Augustin E. Cubano's cinematography and the institutional 35mm/color record at the exact level supported by sources; leave body, lenses, stock, exposure, lighting and lab workflow unset.",
      "Keep Kerry Marshall's production design, Tracey White's costume design and David J. White's music as separate credited systems.",
      "Preserve catalogue sound-credit variation between Marko A. Costanzo and Don White/re-recording rather than inventing a unified production-sound/Foley/mix chain.",
      "Retain 123/124/125-minute institutional and contemporary release variation while using 124 minutes as the canonical gameplay runtime.",
      "Separate original production and editing from later preservation/restoration and streaming release layers.",
      "Treat Mypheduh Films self-distribution as a distinct industrial system created after distributors declined the film, not as proof about original shooting practice.",
      "Model the Washington theatrical run, community outreach, discussions and revenue-funded additional prints as evidence that distribution labor can become part of independent production history.",
      "Keep festival recognition and later canonization downstream from production evidence and never use awards to prove undocumented technique.",
      "Avoid inventing unsupported camera, lens, stock, lighting, sound-hardware, stunt, intimacy, safety, transport, budget-line, laboratory, ADR, mix, restoration or rights-clearance specifications.",
    ],
    phases: [
      { id: "research_and_screenplay", label: "Build a diasporic history from long-term research", player_task: "Track Gerima's slavery-history research and Sankofa time structure as screenplay evidence without presenting historical research as documentary transcription." },
      { id: "finance_and_package", label: "Assemble a sub-$1m transnational independent package", player_task: "Record grants, barter, credit-card purchases and named co-production partners while leaving exact budget totals, finance percentages and deferrals unset." },
      { id: "jamaica_production", label: "Shift plantation production from Louisiana to Jamaica", player_task: "Use Gerima's account of the cost-driven location change and Merawi Gerima's Jamaica-set memory without inventing exact dates, locations, rate cards or crew movements." },
      { id: "ghana_production", label: "Complete the later African production phase", player_task: "Keep the later Africa/Ghana phase separate and retain Gerima's roughly-one-year gap and about-three-week completion account without creating fictional call sheets." },
      { id: "performance_direction", label: "Direct performance without overclaiming improvisation", player_task: "Use Gerima's Kofi Ghanaba account as evidence for one unusually open performance moment while keeping the rest of the cast's rehearsal and performance process unset unless sourced." },
      { id: "camera_and_format", label: "Lock only the documented 35mm color image system", player_task: "Credit Augustin E. Cubano and 35mm color while refusing unsupported camera body, lens, stock, exposure, lighting and laboratory specifications." },
      { id: "design_costume_world", label: "Coordinate period world-building across departments", player_task: "Keep Kerry Marshall's production design and Tracey White's costume design distinct from location history and avoid inventing construction budgets, materials or aging processes." },
      { id: "sound_and_music", label: "Separate music from varied sound-credit records", player_task: "Credit David J. White's music, preserve Marko A. Costanzo/Don White catalogue variance and leave recorder, microphone, Foley, ADR and mix-layout details unset." },
      { id: "editing_and_version", label: "Protect Gerima's editorial authorship and runtime variance", player_task: "Credit Gerima as editor, preserve 123/124/125-minute records and keep later restoration versions from overwriting original editorial history." },
      { id: "grassroots_distribution", label: "Turn exhibition into an independent distribution system", player_task: "Model Mypheduh's theater rentals, community outreach, post-screening discussion and revenue-funded additional prints as distribution labor downstream from manufacture." },
    ],
  },
] as const;

export function mergeChapterSeventeenSankofaExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenSankofaExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_sankofa_verified",
      source: { list_id: "manual_chapter_seventeen_sankofa_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
