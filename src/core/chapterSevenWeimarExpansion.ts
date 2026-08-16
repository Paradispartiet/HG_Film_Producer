import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSevenWeimarExpansionDefinitions = [
  {
    id: "scenario_the_last_laugh_1924",
    title: "The Last Laugh",
    originalTitle: "Der letzte Mann",
    aliases: ["The Last Man"],
    year: 1924,
    titleType: "Feature",
    runtimeMins: 90,
    directors: ["F. W. Murnau"],
    genres: ["Drama"],
    premise: "Build The Last Laugh as a 1924 UFA Kammerspielfilm production problem in social status, visual narration and mobile-camera subjectivity. Erich Pommer's production brings together F. W. Murnau, Carl Mayer, Emil Jannings, cinematographer Karl Freund and designers Robert Herlth and Walter Röhrig. The production minimizes intertitles and makes camera movement, distortion, performance, hotel architecture and costume carry information normally stated in text. Treat Freund's 'unchained camera' as an especially influential and systematically developed mobile-camera practice rather than falsely claiming that he or this film was the first ever to detach a camera from a tripod. Preserve the distinction between the 1924 silent original, surviving/reconstructed materials and later digitized editions with new musical arrangements.",
    sourceId: "manual_the_last_laugh_1924",
    sourceUrl: "https://www.filmportal.de/en/movie/der-letzte-mann_ea43d4a6d0975006e03053d50b37753d",
    scenarioType: "kammerspielfilm_mobile_camera_production",
    requiredChoicesSeed: {
      screenplay: ["carl_mayer_chamber_drama", "status_loss_without_exposition", "single_intertitle_ironic_coda"],
      camera: ["unchained_camera_subjectivity", "motivated_mobile_hotel_geography", "distortion_for_intoxication_and_humiliation"],
      editing: ["visual_causality_without_intertitles", "performance_camera_transition_matching", "ironic_coda_boundary"],
      sound: ["silent_1924_production", "giuseppe_becce_premiere_music_context", "later_scores_are_version_specific"],
      themes: ["film_history", "weimar_cinema", "kammerspielfilm", "ufa", "social_status", "mobile_camera"],
    },
    learningGoals: [
      "Plan a chamber-scale feature in which social status, humiliation and changing self-perception are communicated primarily through image, performance, costume and spatial relations rather than explanatory intertitles.",
      "Use mobile camera movement as motivated point of view and narrative information: the camera may travel with elevators, doors, bodies and intoxicated perception, but movement must clarify or transform the protagonist's experience rather than exist as decoration.",
      "Coordinate Karl Freund's documented camera experimentation with Murnau's direction, Mayer's visual screenplay, Jannings' performance and Herlth/Röhrig's hotel design instead of turning the film into a lone-cinematographer invention myth.",
      "Treat the doorman uniform as an industrially controlled costume/prop whose loss changes posture, blocking, social recognition and narrative stakes across departments.",
      "Distinguish Kammerspielfilm's concentrated everyday social pressure from the painted-set Expressionism of Caligari and from the monumental UFA spectacle of Metropolis.",
      "Preserve version history: the 1924 35 mm silent production, the deliberately exceptional intertitle before the imposed ironic coda, and later digitized editions or replacement musical arrangements are different historical layers.",
    ],
    phases: [
      { id: "pitch", label: "Status and subjectivity pitch", player_task: "Define why one hotel doorman's loss of uniform and rank can carry a feature through visual behavior, architecture and camera point of view rather than plot spectacle." },
      { id: "research", label: "UFA and camera research", player_task: "Ground Pommer, Murnau, Mayer, Freund, Jannings, Herlth, Röhrig, the UFA production, original silent format and later versions in institutional evidence." },
      { id: "screenplay", label: "Visual chamber drama", player_task: "Structure status loss, concealment, exposure and humiliation so the spectator can follow causality with almost no intertitles and can recognize the ironic coda as a deliberate tonal rupture." },
      { id: "casting", label: "Body, uniform and rank", player_task: "Direct the doorman's posture, gesture and interaction with family, neighbors, hotel staff and guests so social status remains readable before and after the uniform is removed." },
      { id: "production_design", label: "Hotel as social machine", player_task: "Coordinate lobby, revolving door, lift, washroom and tenement spaces so architecture expresses hierarchy and gives mobile camera movement meaningful routes." },
      { id: "cinematography", label: "Motivated unchained camera", player_task: "Plan Freund's mobile and subjective camera as part of a collaborative visual system, using movement and distortion to track experience without claiming the film invented camera mobility itself." },
      { id: "editing", label: "Image-led continuity", player_task: "Join camera motion, performance, costume and spatial transitions so the story remains legible without explanatory titles, while preserving the coda's intentional break in tone." },
      { id: "sound", label: "Silent production, version-aware music", player_task: "Keep the photographed production silent, recognize Giuseppe Becce's premiere-music context, and treat later recorded or digitized musical arrangements as presentation-specific evidence." },
      { id: "release", label: "UFA prestige and international circulation", player_task: "Model how a formally adventurous chamber drama could function as an internationally marketable UFA prestige film and help propel Murnau's transatlantic career without reducing that reception to one technique." },
    ],
  },
] as const;

export function mergeChapterSevenWeimarExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSevenWeimarExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seven_weimar_verified",
      source: {
        list_id: "manual_chapter_seven_weimar_expansion_2026",
        position: nextPosition,
        imdb_id: definition.sourceId,
        url: definition.sourceUrl,
      },
      film: {
        title: definition.title,
        original_title: definition.originalTitle,
        year: definition.year,
        title_type: definition.titleType,
        runtime_mins: definition.runtimeMins,
        directors: definition.directors,
        genres: definition.genres,
        genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")),
        imdb_rating: 0,
        user_rating: 0,
      },
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
