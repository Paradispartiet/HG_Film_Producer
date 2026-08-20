import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterFifteenBattleChilePartOneExpansionDefinitions = [
  {
    id: "scenario_the_battle_of_chile_part_i_1975",
    title: "The Battle of Chile: Part I",
    originalTitle: "La batalla de Chile: La insurrección de la burguesía",
    aliases: ["The Battle of Chile", "The Battle of Chile, Part I", "La batalla de Chile", "La insurreccion de la burguesia"],
    year: 1975,
    titleType: "Feature Documentary",
    runtimeMins: 96,
    directors: ["Patricio Guzmán"],
    genres: ["Documentary", "Political Documentary", "Chilean Cinema", "Observational Cinema"],
    premise: "Build The Battle of Chile: Part I as a 1975 Chilean-Cuban political-documentary production case whose decisive production history begins during Chile's 1973 constitutional crisis rather than at its release date. Patricio Guzmán's own production account identifies a five-person field unit: Guzmán as writer-director, Jorge Müller Silva as cameraman, Bernardo Menz as sound engineer, Federico Elton as production manager and José Bartolomé as assistant director, with Pedro Chaskel joining later as editor. Guzmán documents the portable package unusually precisely: one Éclair 16 mm camera, three batteries, two magazines/chassis, a tripod, a Nagra-4 recorder, a Sennheiser microphone and a Citroën 2CV. Chris Marker supplied 44,000 feet of black-and-white film stock—about eighteen hours—and 134 sound reels when Chilean shortages made continued filming difficult. Treat this material support as transnational production solidarity, not as proof that Marker authored the filmed events. The crew filmed meetings, parliamentary conflict, street interviews, demonstrations, economic confrontation and the escalating opposition to Salvador Allende's Unidad Popular government as events unfolded in 1973. Preserve the danger and asymmetry of that fieldwork without romanticizing risk: Müller was later detained-disappeared by the Pinochet security apparatus in November 1974; Elton was detained after the coup; Guzmán was imprisoned for two weeks in Santiago's National Stadium before exile. Keep original field production separate from post-production: Memoria Chilena and Guzmán document that the footage and surviving team left Chile and that the long editing process was completed in Cuba with ICAIC support. Guzmán describes one year of filming and six years of editing across the trilogy; Part I emerged in 1975, while later parts continued through 1979. Model Part I's political analysis as an editorial construction from synchronized field evidence, interviews, meetings and chronology rather than as transparent actuality. Preserve Jorge Müller's camera authorship and Bernardo Menz's sound labor alongside Guzmán's directing and Chaskel's montage. Harvard, UCLA and IDFA list Part I at 96 minutes; some catalog records list 97, so use 96 minutes canonically while retaining the 96/97-minute variance as catalog provenance. Keep the 2023 Icarus restoration separate from original 1973 16 mm capture and 1975 completion. Do not invent film-stock manufacturer/emulsion, lens package, aperture/lighting ratios, the exact Sennheiser model, laboratory chemistry, exact daily shooting chronology or claims that handheld proximity eliminated editorial or political authorship.",
    sourceId: "patricio_guzman_battle_chile_part_i_1975",
    sourceUrl: "https://www.patricio-guzman.com/en/la-batalla-de-chile-i-ii-iii",
    scenarioType: "chilean_coup_era_collective_16mm_political_documentary_transnational_icaic_postproduction",
    requiredChoicesSeed: {
      screenplay: ["guzman_documentary_argument_from_unfolding_1973_events", "part_one_bourgeois_opposition_focus", "field_evidence_and_later_editorial_analysis"],
      camera: ["jorge_muller_eclair_16mm_field_camera", "three_batteries_two_magazines_tripod", "no_invented_lens_stock_emulsion_or_lighting_package"],
      editing: ["pedro_chaskel_cuba_icaic_postproduction", "chronology_interviews_meetings_demonstrations_argument", "preserve_96_97_runtime_provenance"],
      sound: ["bernardo_menz_nagra4_sennheiser_field_sound", "134_sound_reels_marker_support", "no_invented_sennheiser_model_or_signal_chain"],
      themes: ["film_history", "chile", "allende", "unidad_popular", "1973_coup", "political_documentary", "collective_labor", "16mm", "portable_sound", "chris_marker", "icaic", "exile", "censorship", "state_violence", "documentary_ethics", "transnational_postproduction"],
    },
    learningGoals: [
      "Model The Battle of Chile: Part I as a production that began in Chile's 1973 political crisis and was completed through exile and Cuban post-production, not as a documentary simply 'made in 1975'.",
      "Keep Guzmán, Jorge Müller Silva, Bernardo Menz, Federico Elton, José Bartolomé and Pedro Chaskel visible as a small but differentiated production team.",
      "Use Guzmán's documented Éclair 16 mm, Nagra-4, Sennheiser, batteries, magazines, tripod and Citroën 2CV only to the level actually sourced, refusing invented lens, stock-emulsion and lighting details.",
      "Explain Chris Marker's 44,000 feet of black-and-white stock and 134 sound reels as material solidarity that enabled production without converting support into authorship of the recorded events.",
      "Treat field interviews, demonstrations, meetings, parliamentary confrontation and economic conflict as filmed evidence selected and structured by a production team rather than transparent access to history.",
      "Keep Jorge Müller's camera decisions central to the documentary method and distinguish his field authorship from Guzmán's directing and Chaskel's later editorial argument.",
      "Keep Bernardo Menz's synchronous location-sound labor visible and avoid reducing political documentary to images plus later voice-over.",
      "Explain how portable 16 mm camera and Nagra sound made rapid street and meeting coverage possible without claiming that technology itself produced political truth.",
      "Separate the danger faced by the crew from aesthetic romanticization: Guzmán was detained, Elton was detained, and Müller was later detained-disappeared by the dictatorship.",
      "Model ICAIC's Cuban contribution as post-production infrastructure and political solidarity after the coup, distinct from the Chilean field shoot.",
      "Treat Pedro Chaskel's editing as the system that converts many hours of contingent field material into chronology, comparison and political analysis across the trilogy.",
      "Preserve Part I's 96/97-minute institutional runtime variance as catalog provenance rather than inventing undocumented editorial versions.",
      "Keep the 2023 Icarus restoration and DCP circulation separate from original 16 mm capture and 1975 completion.",
      "Distinguish the trilogy's total seven-year process from Part I's own 1975 completion so later Parts II and III do not leak backwards into the first film's production date.",
    ],
    phases: [
      { id: "pitch", label: "Film a political process before its outcome is known", player_task: "Define a documentary project capable of following Chile's constitutional and social conflict without pretending the team already knows the coup will determine the ending." },
      { id: "research", label: "Map institutions, factions and public conflict", player_task: "Track Unidad Popular, opposition parties, parliament, unions, business groups, demonstrations and media conflict so field coverage can distinguish actors rather than flatten politics into street spectacle." },
      { id: "screenplay", label: "Build an evolving documentary argument", player_task: "Use Guzmán's questions, event selection and later structuring to turn unfolding events into analysis while keeping the difference between contemporaneous field decisions and post-coup hindsight explicit." },
      { id: "performance", label: "Interview people as political participants", player_task: "Treat politicians, workers, middle-class opponents and people in the street as situated speakers whose statements are recorded under changing conditions, not as scripted characters or neutral data points." },
      { id: "design", label: "Let institutions and streets remain material locations", player_task: "Use congress, factories, meeting rooms, demonstrations and Santiago streets as real political environments while acknowledging access, crowd movement and crew positioning as production constraints." },
      { id: "cinematography", label: "Work with a finite portable 16 mm package", player_task: "Coordinate Müller's Éclair camera, batteries, two magazines and tripod around fast-changing events while rationing finite black-and-white stock and refusing invented lens or exposure recipes." },
      { id: "editing", label: "Turn contingent footage into historical analysis", player_task: "Use Chaskel's long Cuban editing process to order interviews, debates, demonstrations and confrontations into Part I's argument without erasing the contingency of original filming." },
      { id: "sound", label: "Capture synchronized political speech under field pressure", player_task: "Coordinate Menz's Nagra-4 and sourced Sennheiser microphone with interviews, meetings and street events while refusing an undocumented model number or signal chain." },
      { id: "release", label: "Separate field shoot, exile, ICAIC post-production and later restoration", player_task: "Track 1973 filming, post-coup displacement, 1975 Part I completion, later trilogy editing and 2023 restoration as distinct production, circulation and preservation layers." },
    ],
  },
] as const;

export function mergeChapterFifteenBattleChilePartOneExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterFifteenBattleChilePartOneExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_fifteen_battle_chile_part_one_verified",
      source: { list_id: "manual_chapter_fifteen_battle_chile_part_one_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
