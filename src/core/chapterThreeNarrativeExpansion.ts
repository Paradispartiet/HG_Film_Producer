import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export type ChapterThreeNarrativeExpansionDefinition = {
  readonly id: string;
  readonly title: string;
  readonly originalTitle: string;
  readonly aliases?: readonly string[];
  readonly year: number;
  readonly titleType: string;
  readonly runtimeMins: number;
  readonly directors: readonly string[];
  readonly genres: readonly string[];
  readonly premise: string;
  readonly sourceId: string;
  readonly sourceUrl: string;
  readonly scenarioType: string;
  readonly requiredChoicesSeed: Readonly<Record<string, readonly string[]>>;
  readonly learningGoals: readonly string[];
  readonly phases: readonly {
    readonly id: string;
    readonly label: string;
    readonly player_task: string;
  }[];
};

export const chapterThreeNarrativeExpansionDefinitions = [
  {
    id: "scenario_grandmas_reading_glass_1900",
    title: "Grandma's Reading Glass",
    originalTitle: "Grandma's Reading Glass",
    aliases: ["Grandmas Reading Glass", "Grandmother's Reading Glass"],
    year: 1900,
    titleType: "Short",
    runtimeMins: 1,
    directors: ["G. A. Smith"],
    genres: ["Fiction", "Short"],
    premise: "Build a one-minute Brighton-era fiction around a boy borrowing his grandmother's magnifying glass: alternate a stable medium view with circularly masked magnified inserts of the newspaper, watch mechanism, canary, grandmother's eye and kitten so every close view is motivated by the boy's act of looking, without claiming that Smith single-handedly invented the close-up or point-of-view editing.",
    sourceId: "manual_grandmas_reading_glass_1900",
    sourceUrl: "https://replay.bfi.org.uk/video/419/bc4007f9-c8fa-5293-846a-de032dc142af",
    scenarioType: "character_drama_production",
    requiredChoicesSeed: {
      screenplay: ["looking_action_structure", "newspaper_watch_canary_eye_kitten_order", "return_to_base_view"],
      camera: ["stable_grandmother_and_boy_view", "magnified_insert_views", "circular_mask_as_optical_motivation"],
      editing: ["look_object_return_pattern", "analytical_inserts", "point_of_view_without_first_invention_claim"],
      sound: ["silent_capture", "later_accompaniment_separation"],
      themes: ["film_history", "viewpoint", "analytical_editing", "scale_change", "early_british_cinema"],
    },
    learningGoals: [
      "Motivate each scale change through the boy's use of the reading glass so the audience understands why a magnified insert belongs to the surrounding scene.",
      "Use the documented newspaper, watch mechanism, canary, grandmother's eye and kitten sequence as a production structure rather than replacing it with generic close-up coverage.",
      "Treat Grandma's Reading Glass as a strong early example of point-of-view and analytical shot relation without turning a complex international development into a single-inventor myth.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define the attraction as an ordinary domestic scene transformed by motivated magnification and changing viewpoint." },
      { id: "research", label: "Research", player_task: "Ground the 1900 Smith case, Warwick circulation and surviving shot order while separating demonstrable technique from later first-close-up or first-POV claims." },
      { id: "screenplay", label: "Looking structure", player_task: "Order newspaper, watch mechanism, canary, grandmother's eye and kitten so each new object grows naturally from the boy's play with the reading glass." },
      { id: "casting", label: "Performance", player_task: "Keep the boy's looking gestures and grandmother's reactions clear enough to motivate every inserted view without requiring intertitles or modern dialogue." },
      { id: "production_design", label: "Domestic viewing space", player_task: "Build a compact sewing-table environment whose newspaper, watch, birdcage and kitten can all be introduced from one readable base view." },
      { id: "cinematography", label: "Cinematography", player_task: "Contrast the stable medium view with abnormally enlarged circular inserts, making the mask feel like the reading glass rather than arbitrary decorative framing." },
      { id: "editing", label: "Analytical relation", player_task: "Alternate look, magnified object and return so the cuts create a legible viewpoint relation before later continuity conventions become standardized." },
      { id: "sound", label: "Silent production", player_task: "Keep the photographed 1900 production silent; do not invent synchronized watch ticks, bird calls or dialogue as original production sound." },
      { id: "release", label: "Warwick-era circulation", player_task: "Present the novelty of enlarged views as an early-film attraction while avoiding a promotional single-inventor history of film grammar." },
    ],
  },
] as const satisfies readonly ChapterThreeNarrativeExpansionDefinition[];

export function mergeChapterThreeNarrativeExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;

  for (const definition of chapterThreeNarrativeExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year &&
        [scenario.film.title, scenario.film.original_title]
          .map(normalizeEarlyCinemaTitle)
          .some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;

    merged.push({
      id: definition.id,
      status: "manual_chapter_three_narrative_verified",
      source: {
        list_id: "manual_chapter_three_narrative_expansion_2026",
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
