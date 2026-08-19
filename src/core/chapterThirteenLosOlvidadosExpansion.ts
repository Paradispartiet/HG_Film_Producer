import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterThirteenLosOlvidadosExpansionDefinitions = [
  {
    id: "scenario_los_olvidados_1950",
    title: "Los olvidados",
    originalTitle: "Los olvidados",
    aliases: ["The Young and the Damned"],
    year: 1950,
    titleType: "Feature",
    runtimeMins: 80,
    directors: ["Luis Buñuel"],
    genres: ["Social Drama"],
    premise: "Build Los olvidados as a Mexican postwar production in which documentary research, studio craft, Mexico City location work and surrealist rupture coexist without collapsing into a generic neorealist label. UNESCO records that Luis Buñuel spent two years researching and writing the project and persuading producer Óscar Dancigers to permit its style and ideology; it also records Dancigers' fear of censorship and conservative rejection and the secretly filmed alternate ending that softened the tragedy. Filmoteca UNAM identifies the film as shot at Estudios Tepeyac and on Mexico City locations. Institutional credit records identify Ultramar Films, Buñuel directing, Luis Buñuel and Luis Alcoriza writing, Óscar Dancigers with Sergio Kogan and Jaime A. Menasce producing, Gabriel Figueroa as director of photography, Carlos Savage editing, Edward Fitzgerald handling scenography, Armando Meyer makeup, José B. Carles and Jesús González Gancy sound, and Rodolfo Halffter's music using themes by Gustavo Pittaluga; Instituto Cervantes also preserves Ignacio Romero as camera operator and Buñuel's uncredited editing participation. Treat the film's dream material and social observation as one production system: the slaughterhouse-like violence, urban margins, institutions, family spaces and the famous dream sequence do not turn the film into either pure documentary realism or free-floating surrealism. Preserve version history concretely: the tragic released ending and the secretly shot alternate ending represent different ideological and censorship-risk responses, not trivia. Canonically use the 80-minute form supported by Instituto Cervantes, Cannes Classics and the Film Foundation, while retaining 81- and 88-minute institutional listings as runtime provenance rather than forcing false uniformity. Keep black-and-white and monaural presentation source-bounded. Do not invent camera bodies, lenses, film stock, lighting ratios, microphone models, sound-post workflow, exact shooting dates, exact location-by-location scene assignments or claims that every child performer was nonprofessional unless directly established by a source.",
    sourceId: "unesco_los_olvidados_1950",
    sourceUrl: "https://www.unesco.org/en/memory-world/lac/original-negative-luis-bunuels-los-olvidados-1950",
    scenarioType: "mexico_city_postwar_social_drama_research_location_studio_surrealist_version_history",
    requiredChoicesSeed: {
      screenplay: ["bunuel_alcoriza_two_year_research_script", "social_observation_with_surrealist_rupture", "alternate_ending_censorship_risk"],
      camera: ["figueroa_black_and_white_urban_social_space", "tepeyac_and_mexico_city_location_studio_hybrid", "no_invented_camera_lens_stock_package"],
      editing: ["savage_with_bunuel_uncredited_editing", "released_tragic_vs_alternate_ending_version_history", "preserve_80_81_88_runtime_provenance"],
      sound: ["carles_gonzalez_gancy_monaural_sound", "halffter_pittaluga_music_structure", "no_invented_microphones_or_postworkflow"],
      themes: ["film_history", "postwar_mexico", "social_realism", "surrealism", "urban_modernity", "childhood", "poverty", "institutions", "location_production", "studio_production", "censorship", "version_history", "preservation"],
    },
    learningGoals: [
      "Model Los olvidados as a Mexican production system rather than importing Italian neorealism as a universal template for postwar social cinema.",
      "Use UNESCO's two-year research account to connect Buñuel and Alcoriza's screenplay development to observed urban conditions without treating the finished fiction as documentary evidence.",
      "Keep Óscar Dancigers, Sergio Kogan and Jaime A. Menasce's producing roles and Ultramar Films visible so author-centered discussion does not erase production infrastructure.",
      "Coordinate Estudios Tepeyac with Mexico City location work to teach location-studio hybridity instead of equating realism with an absence of controlled production.",
      "Keep Gabriel Figueroa's black-and-white cinematography and Ignacio Romero's camera-operation credit attributable without inventing lenses, stocks, camera bodies or lighting ratios.",
      "Treat Edward Fitzgerald's scenography and Armando Meyer's makeup as active craft layers even when the film seeks a harsh urban surface rather than spectacular studio polish.",
      "Keep Carlos Savage's editor credit distinct while preserving Instituto Cervantes' record of Buñuel's uncredited editing participation.",
      "Treat the dream sequence as a designed rupture inside the same social world: surrealist imagery complicates realism rather than cancelling it.",
      "Model the secretly filmed alternate ending as concrete censorship-risk and producer-risk management, while the tragic released ending remains the canonical narrative outcome.",
      "Preserve José B. Carles and Jesús González Gancy's monaural sound labor and Rodolfo Halffter/Gustavo Pittaluga music credits without inventing microphone or postproduction details.",
      "Keep institutional runtime variants of 80, 81 and 88 minutes as preservation/distribution provenance; use 80 minutes canonically because multiple institutional restoration and filmography records support it.",
      "Place the 1951 Cannes directing prize, Ariel recognition, UNESCO Memory of the World inscription and later 4K restoration downstream from production rather than using later prestige to explain how the film was made.",
    ],
    phases: [
      { id: "pitch", label: "Make postwar Mexico City the production problem", player_task: "Frame abandoned children, urban inequality and institutional failure as a Mexican production subject without promising either sentimental uplift or imported neorealist imitation." },
      { id: "research", label: "Turn long observation into a source-bounded fiction", player_task: "Use the documented two-year research period to build social detail while separating observed conditions from fictional plotting and symbolism." },
      { id: "screenplay", label: "Write realism with surrealist rupture", player_task: "Coordinate Buñuel and Alcoriza's social narrative, dream imagery and producer/censorship risk while preserving the alternate-ending branch as version history." },
      { id: "casting", label: "Build an ensemble across children and established actors", player_task: "Direct the young ensemble alongside performers such as Estela Inda and Miguel Inclán without falsely declaring every child performer nonprofessional." },
      { id: "production_design", label: "Connect Tepeyac craft to urban margins", player_task: "Use Fitzgerald's scenography and Tepeyac production alongside Mexico City locations so built space and observed space reinforce the same social world." },
      { id: "cinematography", label: "Photograph harsh social space without false naturalism", player_task: "Use Figueroa's black-and-white photography and Romero's camera operation to organize faces, streets, interiors and dream imagery without inventing a technical package." },
      { id: "editing", label: "Make narrative consequence a version decision", player_task: "Use Savage's editing and Buñuel's documented uncredited participation to preserve the tragic released structure while treating the alternate ending as a real but rejected branch." },
      { id: "sound", label: "Keep sound and music restrained but attributable", player_task: "Coordinate Carles and González Gancy's monaural sound with Halffter's score and Pittaluga themes without manufacturing microphone or mixing-stage specifics." },
      { id: "release", label: "Separate controversy, awards and preservation", player_task: "Track domestic resistance, Cannes recognition, Ariel awards, UNESCO registration and restoration as successive reception/preservation layers rather than production causes." },
    ],
  },
] as const;

export function mergeChapterThirteenLosOlvidadosExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterThirteenLosOlvidadosExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_thirteen_los_olvidados_verified",
      source: { list_id: "manual_chapter_thirteen_los_olvidados_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
