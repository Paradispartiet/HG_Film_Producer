import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTenAThrowOfDiceExpansionDefinitions = [
  {
    id: "scenario_a_throw_of_dice_1929",
    title: "A Throw of Dice",
    originalTitle: "Prapancha Pash",
    aliases: ["Schicksalswürfel", "A Throw of the Dice"],
    year: 1929,
    titleType: "Feature",
    runtimeMins: 74,
    directors: ["Franz Osten"],
    genres: ["Drama"],
    premise: "Build A Throw of Dice as a 1929 transnational silent production made through Indian producer-star Himansu Rai and German director Franz Osten, with British, German and Indian company infrastructure rather than as a nationally pure film or a generic exotic epic. BFI records India, Germany and the United Kingdom as production countries, Rai as producer, W.A. Burton and Max Jungk as writers, and Seeta Devi, Charu Roy and Rai among the principal cast. filmportal.de documents UFA, British Instructional Films and Himansu Rai Film as production companies, India as the shooting location, Emil Schünemann as cinematographer and Promode Nath as production designer, with 35mm black-and-white silent exhibition. The player must coordinate location scale, performers, palace/landscape design, gambling suspense and intertitle-driven storytelling while keeping the Mahabharata-derived dice motif distinct from any claim that the film is a faithful or culturally exhaustive rendering of the epic. Preserve the film's transnational authorship: German technical participation does not erase Indian producer agency, performers or locations, and Indian subject matter does not turn the project into a single-nation production. Keep 1929 silent production and contemporary/reissue accompaniment separate: Willy Schmidt-Gentner is credited for cinema music, while the BFI's later Nitin Sawhney score belongs to restoration and modern presentation history, not an original synchronized soundtrack.",
    sourceId: "manual_a_throw_of_dice_1929",
    sourceUrl: "https://www.bfi.org.uk/film/9331d899-b4d1-5f45-9aa0-4a5736b697b4/schicksalswurfel",
    scenarioType: "indo_german_british_location_epic_coproduction",
    requiredChoicesSeed: {
      screenplay: ["mahabharata_dice_episode_adaptation", "burton_jungk_intertitle_drama", "adaptation_not_cultural_totality"],
      camera: ["schuenemann_india_location_scale", "landscape_palace_performance_balance", "transnational_craft_credit"],
      editing: ["gambling_escalation_and_reaction", "hunt_palace_dice_spatial_continuity", "silent_feature_version_control"],
      sound: ["silent_1929_production", "schmidt_gentner_cinema_music_context", "nitin_sawhney_restoration_score_not_original_soundtrack"],
      themes: ["film_history", "indian_silent_cinema", "transnational_coproduction", "himansu_rai", "franz_osten", "location_production", "restoration_history"],
    },
    learningGoals: [
      "Treat A Throw of Dice as a transnational production system involving Himansu Rai Film, British Instructional Films and UFA, rather than assigning ownership to one nation because of subject matter, director nationality or financing alone.",
      "Keep Himansu Rai's producer-star agency visible alongside Franz Osten's direction, Emil Schünemann's cinematography and Promode Nath's design so German technical collaboration does not become a substitute for the project's Indian production labor and performance.",
      "Use Indian locations, palace spaces, landscape, animals and crowd scale as coordinated production resources without reducing the images to timeless exotic spectacle or pretending that photographed settings are ethnographic neutrality.",
      "Adapt the Mahabharata-derived gambling episode as a film narrative source while avoiding the false claim that this commercial silent feature represents the epic, Indian culture or Indian cinema as a whole.",
      "Build gambling suspense through readable stakes, reaction, spatial continuity and intertitles instead of treating dice as a decorative motif detached from power, trust and manipulation in the story.",
      "Preserve sound/version history: the photographed work is silent; credited cinema music and later accompaniment are presentation layers, and Nitin Sawhney's BFI-commissioned modern score is not synchronized 1929 production sound.",
      "Use survival/restoration history to explain why this film and the Rai–Osten trilogy are unusually visible today while much Indian silent production is lost; preservation shapes canon formation and must not be mistaken for historical representativeness.",
    ],
    phases: [
      { id: "pitch", label: "Transnational stakes", player_task: "Define a royal gambling drama whose production identity is explicitly Indian–German–British rather than a one-nation prestige label." },
      { id: "research", label: "Companies, crew and adaptation", player_task: "Ground Himansu Rai, Franz Osten, UFA, British Instructional Films, Himansu Rai Film, Burton/Jungk, Schünemann, Promode Nath, India locations and the Mahabharata-derived dice episode in archival evidence." },
      { id: "screenplay", label: "Dice, power and adaptation", player_task: "Structure hunting, rivalry, courtship and the dice game so rising stakes are legible while the film remains an adaptation of one narrative episode rather than a claim to cultural totality." },
      { id: "casting", label: "Performance across scale", player_task: "Coordinate Seeta Devi, Charu Roy, Himansu Rai and the supporting ensemble through intimate reactions and large-scale court spectacle without turning Indian performers into decorative background for European direction." },
      { id: "production_design", label: "Promode Nath and palace geography", player_task: "Use architecture, interiors, costumes and landscape to make royal power and movement readable while crediting documented design labor and avoiding a generic Orientalist preset." },
      { id: "cinematography", label: "Schünemann on location", player_task: "Frame performers, landscape, animals and architecture for readable scale while keeping location photography attached to a named cinematography role and documented India production." },
      { id: "editing", label: "Escalate the gamble", player_task: "Maintain spatial and emotional continuity from hunting intrigue to palace confrontation and dice-game escalation without importing modern montage conventions as undocumented historical fact." },
      { id: "sound", label: "Silent film, changing accompaniment", player_task: "Separate silent photographed production, historical cinema-music practice and modern Nitin Sawhney restoration accompaniment; never score the latter as evidence of a 1929 synchronized soundtrack." },
      { id: "release", label: "Three-country circulation and archive afterlife", player_task: "Model German/UK/Indian production and circulation, surviving prints and BFI restoration as distinct historical layers that shaped the film's modern visibility." },
    ],
  },
] as const;

export function mergeChapterTenAThrowOfDiceExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTenAThrowOfDiceExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_ten_a_throw_of_dice_verified",
      source: {
        list_id: "manual_chapter_ten_a_throw_of_dice_expansion_2026",
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
