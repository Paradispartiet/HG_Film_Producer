import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterOneRescuedByRoverDefinitions = [
  {
    id: "scenario_rescued_by_rover_1905",
    title: "Rescued by Rover",
    originalTitle: "Rescued by Rover",
    aliases: [],
    year: 1905,
    directors: ["Lewin Fitzhamon"],
    genres: ["Drama", "Family", "Short"],
    tradition: "Hepworth/Fitzhamon route-based rescue fiction and early British continuity development",
    tone: "Direct, urgent and spatially legible",
    premise: "Build a child-rescue story around Rover's repeated journeys between home and hiding place so stable landmarks, animal performance and causal shot order make the route immediately readable.",
    screenplay: "Reduce the plot to a clear causal chain: child taken, Rover finds the hiding place, Rover returns for the father, both retrace the route, child rescued.",
    image: "Use fixed viewpoints, recognizable streets, crossing points and destination landmarks so repeated movement carries the geography without later coverage conventions.",
    editing: "Preserve repeated routes, consistent movement direction and causal shot order as a strong 1905 continuity-development example without claiming that one film invented continuity editing.",
    sound: "Treat the photographed production as silent and keep later accompaniment separate from the 1905 production evidence.",
    learning: "Understand Rescued by Rover as a production-system case in route geography, animal performance, repeated action and version history rather than a single-inventor continuity myth.",
    sourceId: "manual_rescued_by_rover_1905",
    sourceUrl: "https://www.screenonline.org.uk/film/id/514859/index.html",
    scenarioType: "character_drama_production",
    requiredChoicesSeed: {
      screenplay: ["child_abduction_rescue_chain", "rover_route_logic", "causal_clarity"],
      camera: ["fixed_route_viewpoints", "stable_landmarks", "consistent_movement_direction"],
      editing: ["repeated_routes", "causal_shot_order", "no_single_inventor_claim"],
      sound: ["silent_capture", "later_accompaniment_separation"],
      themes: ["film_history", "animal_performance", "spatial_continuity", "version_history"],
    },
    learningGoals: [
      "Use repeated routes and stable landmarks to make the rescue geography legible across separate shots.",
      "Preserve replacement-version history while distinguishing a major continuity-development example from a false invention claim.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define a simple rescue promise whose geography can carry the story." },
      { id: "research", label: "Research", player_task: "Ground Hepworth, Fitzhamon, Blair and replacement-version history in source evidence." },
      { id: "screenplay", label: "Screenplay", player_task: "Build the abduction, discovery, return journey and rescue as one clean causal chain." },
      { id: "casting", label: "Casting", player_task: "Treat Blair's route-finding performance as the action-bearing centre of the production." },
      { id: "production_design", label: "Production design", player_task: "Choose home, streets, crossing points and hiding place as stable route landmarks." },
      { id: "cinematography", label: "Cinematography", player_task: "Use fixed readable viewpoints and consistent movement paths across the repeated journey." },
      { id: "editing", label: "Editing", player_task: "Order route shots causally and preserve screen-direction clarity without retrofitting later coverage grammar." },
      { id: "sound", label: "Sound", player_task: "Keep the silent photographed production distinct from later accompaniment." },
      { id: "release", label: "Release", player_task: "Account for exceptional demand and replacement versions without collapsing them into one immutable original." },
    ],
  },
] as const;

export function mergeChapterOneRescuedByRoverExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterOneRescuedByRoverDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_one_early_cinema_verified",
      source: {
        list_id: "manual_chapter_one_early_cinema_expansion_2026",
        position: nextPosition,
        imdb_id: definition.sourceId,
        url: definition.sourceUrl,
      },
      film: {
        title: definition.title,
        original_title: definition.originalTitle,
        year: definition.year,
        title_type: "Short",
        runtime_mins: 0,
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
      learning_goals_seed: [definition.learning, ...definition.learningGoals],
      manual_enrichment_needed: [],
    });
    nextPosition += 1;
  }
  return merged;
}
