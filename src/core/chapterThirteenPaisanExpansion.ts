import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterThirteenPaisanExpansionDefinitions = [
  {
    id: "scenario_paisan_1946",
    title: "Paisan",
    originalTitle: "Paisà",
    aliases: ["Paisa"],
    year: 1946,
    titleType: "Feature",
    runtimeMins: 126,
    directors: ["Roberto Rossellini"],
    genres: ["Drama", "War"],
    premise: "Build Paisan as a six-episode postwar production whose structure follows the Allied advance from Sicily through Naples, Rome, Florence and the Apennine/Rimini region to the Po Valley while refusing to turn neorealism into a generic authenticity preset. Criterion and BFI document the six-part liberation geography, extensive location work and a cast mixing actors and nonprofessionals, Italians and Allied personnel. Criterion credits Roberto Rossellini as director and producer with Rod Geiger participating in production; Sergio Amidei on story with Federico Fellini, Geiger, Alfred Hayes, Klaus Mann, Marcello Pagliero and Rossellini collaborating; Otello Martelli as cinematographer; Eraldo Da Roma as editor; Ovidio Del Grande on sound; Renzo Rossellini on music; and Massimo Mida and Fellini as assistant directors. Colin MacCabe's Criterion production history records that the success of Rome Open City enabled a budget around ten times larger with American money involved, that Rossellini changed stories in response to locations and people encountered during production, that Carmela was an untrained fifteen-year-old found in a Neapolitan village and dubbed because her speech could not pass for Sicilian, and that the monastery episode used a southern monastery near Salerno while dubbing the friars into Romagnolo for a story set farther north. Preserve these contradictions as production evidence: location and nonprofessional casting are deliberately organized, dialect can be reconstructed in postproduction, and documentary-like immediacy coexists with fiction, scripting, dubbing, editing and music. The current case uses Criterion's 126-minute full original release presentation while explicitly preserving runtime/version variation in institutional records rather than pretending every surviving print is identical. Do not invent exact camera bodies, lenses, stocks, microphones, shooting dates, transport rigs or a single synchronized-sound method where the source set does not establish them.",
    sourceId: "criterion_paisan_1946",
    sourceUrl: "https://www.criterion.com/films/2415-paisan",
    scenarioType: "rossellini_postwar_episodic_location_multilingual_neorealist_liberation_production",
    requiredChoicesSeed: {
      screenplay: ["six_episode_liberation_geography", "location_discovery_can_reshape_story", "language_miscommunication_and_dialect_specificity"],
      camera: ["martelli_location_observation", "fiction_documentary_intermixture", "no_invented_lens_stock_or_camera_package"],
      editing: ["da_roma_six_episode_progression", "newsreel_fiction_transitions", "preserve_release_version_provenance"],
      sound: ["del_grande_multilingual_sound_world", "dialect_dubbing_as_constructed_realism", "renzo_rossellini_music_without_fake_sync_claims"],
      themes: ["film_history", "postwar_reconstruction", "italian_neorealism", "liberation", "location_production", "multilingual_cinema", "nonprofessional_performance", "dubbing", "episodic_structure", "allied_italian_encounter", "crafted_realism"],
    },
    learningGoals: [
      "Model the six episodes as a production journey from Sicily to the Po Valley rather than six interchangeable neorealist sketches.",
      "Treat the larger budget and American participation after Rome Open City as a changed production base, not evidence that material difficulty disappeared.",
      "Keep Rossellini, Rod Geiger, Amidei, Fellini, Hayes, Mann and Pagliero separately visible in the producing/story collaboration instead of collapsing the film into single-auteur improvisation.",
      "Preserve Otello Martelli cinematography, Eraldo Da Roma editing, Ovidio Del Grande sound and Renzo Rossellini music as distinct craft departments.",
      "Use actors and nonprofessionals as a mixed performance system; never equate nonprofessional status with automatic truth or absence of direction.",
      "Model Carmela's casting and later dubbing as evidence that Rossellini's realism could deliberately combine a real person, a mismatched regional identity and constructed postproduction speech.",
      "Model the monastery location near Salerno and Romagnolo dubbing as another case where filmed place, story place and soundtrack place are not identical.",
      "Allow discovered locations such as the Naples caves to reshape story planning while keeping that adaptation attributable to production decisions rather than romantic spontaneity.",
      "Treat multilingual misunderstanding among Italians, Americans, Germans and other Allied personnel as a screenplay, performance and sound problem, not merely a theme.",
      "Distinguish documentary-like imagery and real locations from documentary status: Paisan remains a scripted, edited and scored fiction production.",
      "Preserve the 126-minute full original release presentation separately from shorter or otherwise variant institutional runtimes and later restoration history.",
      "Keep Venice and later international canonization downstream from production, and never narrate foreign festival recognition as the creation of Italian neorealism itself.",
    ],
    phases: [
      { id: "pitch", label: "Map liberation as six local encounters", player_task: "Define a south-to-north episodic structure whose unity comes from liberation geography and cross-cultural encounter rather than one protagonist." },
      { id: "research", label: "Separate lived places from realist mythology", player_task: "Map Sicily, Naples, Rome, Florence, the monastery episode and the Po Valley while distinguishing story location, actual location and later historical interpretation." },
      { id: "screenplay", label: "Let locations revise the six stories", player_task: "Coordinate Amidei, Fellini and the wider story collaboration while allowing discoveries such as the Naples caves to alter planned material without pretending the film was unscripted." },
      { id: "casting", label: "Mix actors, nonprofessionals and Allied personnel", player_task: "Build episode-specific ensembles and direct differences in experience, language and performance without turning nonprofessional casting into an authenticity shortcut." },
      { id: "production_design", label: "Use existing environments without denying construction", player_task: "Organize found streets, caves, ruins, monastery space and Po landscapes while tracking substitutions between actual and story geography." },
      { id: "cinematography", label: "Photograph fiction inside postwar locations", player_task: "Use Martelli's black-and-white location system to hold people and damaged environments together without inventing camera, lens or stock specifications not established by sources." },
      { id: "editing", label: "Assemble six episodes into one national route", player_task: "Use Da Roma's editorial structure to preserve local difference while moving the film historically and geographically northward." },
      { id: "sound", label: "Construct multilingual realism", player_task: "Coordinate Del Grande, dialogue, dialect, dubbing, misunderstanding and Renzo Rossellini's music while preserving the gap between recorded reality and reconstructed soundtrack." },
      { id: "release", label: "Preserve version and circulation history", player_task: "Keep the full original release form, shorter surviving/institutional runtimes, restoration and festival reception as distinct evidence layers downstream from production." },
    ],
  },
] as const;

export function mergeChapterThirteenPaisanExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterThirteenPaisanExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_thirteen_paisan_verified",
      source: { list_id: "manual_chapter_thirteen_paisan_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
