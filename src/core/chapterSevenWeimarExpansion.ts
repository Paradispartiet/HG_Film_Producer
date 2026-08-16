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
  {
    id: "scenario_pandoras_box_1929",
    title: "Pandora's Box",
    originalTitle: "Die Büchse der Pandora",
    aliases: ["Die Buchse der Pandora"],
    year: 1929,
    titleType: "Feature",
    runtimeMins: 133,
    directors: ["G. W. Pabst"],
    genres: ["Drama", "Romance"],
    premise: "Build Pandora's Box as a 1928/1929 Nero-Film production problem in performance-centered modernity, social observation and unstable sexual and economic power. Seymour Nebenzahl produces, G. W. Pabst directs, Ladislaus Vajda adapts Frank Wedekind's Erdgeist and Die Büchse der Pandora with additional documented writing participation, Günther Krampf photographs, and Andrej Andrejew and Bohumil Heš design a world that moves from bourgeois interiors and revue space through courtroom, Parisian gambling and London poverty. Center Louise Brooks's transatlantic casting as Lulu and the ensemble relationships around Dr. Schön, Alwa and Countess Geschwitz without turning desirability, queerness, coercion or exploitation into player scoring. Use Pabst's association with socially observant Neue Sachlichkeit as historical context and a counterweight to Expressionism, not as a rigid visual recipe for every shot. Preserve the difference between the 1929 German silent release, the documented American-version editing, later television/inspection versions and the 1997 reconstruction music.",
    sourceId: "manual_pandoras_box_1929",
    sourceUrl: "https://www.filmportal.de/en/movie/die-buchse-der-pandora_ea43d4a69b2c5006e03053d50b37753d",
    scenarioType: "performance_social_modernity_production",
    requiredChoicesSeed: {
      screenplay: ["wedekind_two_play_adaptation", "lulu_relationship_power_network", "berlin_paris_london_social_descent"],
      camera: ["brooks_performance_centered_framing", "social_space_observation", "ensemble_desire_and_power_blocking"],
      editing: ["relationship_causality_across_social_spaces", "courtroom_escape_exile_progression", "german_us_reconstruction_version_control"],
      sound: ["silent_1929_release", "willy_schmidt_gentner_music_context", "1997_peer_raben_reconstruction_not_original"],
      themes: ["film_history", "weimar_cinema", "nero_film", "new_objectivity_context", "transatlantic_stardom", "representation_ethics"],
    },
    learningGoals: [
      "Plan a late-Weimar feature around a network of desire, money, status and dependency in which social relationships drive production choices more strongly than distorted Expressionist spectacle.",
      "Use Louise Brooks's documented transatlantic casting and physically direct screen presence as performance evidence without converting a woman's attractiveness or sexual availability into a gameplay score.",
      "Coordinate Pabst's direction, Krampf's cinematography, Andrejew/Heš production design, costume and ensemble blocking so bourgeois rooms, backstage space, courtroom, gambling environments and London poverty register as changing social systems.",
      "Treat Countess Geschwitz as part of the film's historically important representation of same-sex desire while analyzing the period's narrative constraints rather than turning queer identity into exoticism or penalty.",
      "Position Pabst's socially observant realism and Neue Sachlichkeit reputation as a late-Weimar countercurrent to Expressionism while acknowledging that studio design, stylization and melodrama remain part of the film's construction.",
      "Preserve version history: the original 1929 35 mm silent release, the documented American-version editing, later television/inspection materials and the 1997 reconstruction with Peer Raben-related music are distinct historical layers.",
    ],
    phases: [
      { id: "pitch", label: "Performance and modernity pitch", player_task: "Define why Lulu's changing relations to lovers, family, money, performance and survival can carry a feature as social observation rather than as a spectacle of punishment." },
      { id: "research", label: "Nero-Film, Wedekind and version research", player_task: "Ground Nebenzahl, Pabst, the documented writers, Brooks, Krampf, Andrejew, Heš, Staaken production, Südfilm distribution and later version history in institutional evidence." },
      { id: "screenplay", label: "Adapt two Lulu plays", player_task: "Condense Wedekind's Erdgeist and Die Büchse der Pandora into a causal screen progression across marriage, death, trial, escape, blackmail and exile without reducing Lulu to a moral lesson." },
      { id: "casting", label: "Transatlantic Lulu and ensemble", player_task: "Build around Brooks's movement, gaze and behavioral directness while preserving Fritz Kortner, Franz Lederer, Alice Roberts and the ensemble as agents in a shifting network of power and dependency." },
      { id: "production_design", label: "Social worlds in transition", player_task: "Coordinate Andrejew and Heš across domestic, theatrical, legal, gambling and impoverished spaces so each environment changes what characters can see, hide, trade or control." },
      { id: "cinematography", label: "Observe bodies and relationships", player_task: "Use Krampf's photography to keep faces, gesture, entrances and spatial proximity legible, letting performance and social geometry carry tension without an Expressionist-distortion preset." },
      { id: "editing", label: "Causal descent and version control", player_task: "Maintain the relationship chain from Berlin to Paris and London while explicitly separating the German release history, American-version editing and later reconstruction or television assemblies." },
      { id: "sound", label: "Silent release, later music layers", player_task: "Keep the 1929 film silent, treat Willy Schmidt-Gentner's music credit as historical accompaniment context, and keep Peer Raben's 1997 reconstruction music outside claims about synchronized original production sound." },
      { id: "release", label: "Controversy, circulation and rediscovery", player_task: "Model Südfilm release, censorship, contested contemporary reception and later archival rediscovery as separate stages in the film's historical life rather than evidence that its modern canonical status was immediate." },
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
