import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export type ChapterTwoExhibitionExpansionDefinition = {
  readonly id: string;
  readonly title: string;
  readonly originalTitle: string;
  readonly aliases?: readonly string[];
  readonly year: number;
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

export const chapterTwoExhibitionExpansionDefinitions = [
  {
    id: "scenario_the_corbett_fitzsimmons_fight_1897",
    title: "The Corbett–Fitzsimmons Fight",
    originalTitle: "The Corbett–Fitzsimmons Fight",
    aliases: [
      "The Corbett-Fitzsimmons Fight",
      "Corbett-Fitzsimmons Fight",
      "Corbett Fitzsimmons Fight",
      "Corbett and Fitzsimmons Fight",
    ],
    year: 1897,
    runtimeMins: 100,
    directors: ["Enoch J. Rector"],
    genres: ["Documentary", "Sport"],
    premise: "Build a complete prizefight recording as an event-cinema system: coordinate outdoor daylight capture, three adjacent wide-format cameras, proprietary 63mm exhibition, territorial distribution and live presentation without confusing Rector's Veriscope original with later facsimile reproductions.",
    sourceId: "manual_the_corbett_fitzsimmons_fight_1897",
    sourceUrl: "https://www.loc.gov/item/2023602024/",
    scenarioType: "documentary_production",
    requiredChoicesSeed: {
      screenplay: ["full_event_structure", "fourteen_round_duration", "introductions_and_intervals"],
      camera: ["three_adjacent_cameras", "wide_ring_coverage", "daylight_event_capture", "proprietary_63mm"],
      editing: ["camera_handoff_continuity", "preserve_event_duration", "separate_veriscope_original_from_lubin_facsimile"],
      sound: ["silent_capture", "live_expert_commentary_as_exhibition_layer"],
      themes: ["film_history", "event_cinema", "sports_media", "exhibition_control", "distribution_rights"],
    },
    learningGoals: [
      "Connect capture format, camera logistics and event duration to the special Veriscope projection system required to exhibit the film.",
      "Treat territorial rights, projector control, live commentary and ticket demand as part of the production-exhibition system rather than afterthoughts.",
      "Keep Rector and Stuart's original Veriscope production distinct from Sigmund Lubin's later facsimile reproduction.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define the value proposition: audiences pay to re-experience an entire championship event rather than a brief boxing novelty." },
      { id: "research", label: "Research", player_task: "Separate the 1897 Veriscope original, its rights structure and surviving fragments from later facsimile reproductions and conflicting credits." },
      { id: "screenplay", label: "Event structure", player_task: "Plan introductions, fourteen rounds and one-minute intervals as a complete recorded event without inventing fictional narrative beats." },
      { id: "casting", label: "Participants", player_task: "Treat Corbett, Fitzsimmons, referee and ringside figures as real event participants rather than cast characters." },
      { id: "production_design", label: "Arena and apparatus", player_task: "Coordinate ring dimensions, daylight, camera position and a capture system capable of recording the full fight." },
      { id: "cinematography", label: "Cinematography", player_task: "Use adjacent wide-format cameras and planned reel handoffs so the fight remains continuously legible from one privileged ringside viewpoint." },
      { id: "editing", label: "Assembly", player_task: "Preserve event chronology across camera changes and fragments; do not replace the original with Lubin's condensed reenactment." },
      { id: "sound", label: "Exhibition performance", player_task: "Keep original silent capture distinct from the documented live expert commentary delivered beside the projected film." },
      { id: "release", label: "Rights and exhibition", player_task: "Pair proprietary Veriscope projection with territorial exhibition agreements, local theatre deals and event-style ticket economics." },
    ],
  },
] as const satisfies readonly ChapterTwoExhibitionExpansionDefinition[];

export function mergeChapterTwoExhibitionExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;

  for (const definition of chapterTwoExhibitionExpansionDefinitions) {
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
      status: "manual_chapter_two_exhibition_verified",
      source: {
        list_id: "manual_chapter_two_exhibition_expansion_2026",
        position: nextPosition,
        imdb_id: definition.sourceId,
        url: definition.sourceUrl,
      },
      film: {
        title: definition.title,
        original_title: definition.originalTitle,
        year: definition.year,
        title_type: "Feature",
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
