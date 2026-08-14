import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export type ChapterOneEarlyCinemaExpansionDefinition = {
  readonly id: string;
  readonly title: string;
  readonly originalTitle: string;
  readonly aliases?: readonly string[];
  readonly year: number;
  readonly directors: readonly string[];
  readonly genres: readonly string[];
  readonly tradition: string;
  readonly tone: string;
  readonly premise: string;
  readonly screenplay: string;
  readonly image: string;
  readonly editing: string;
  readonly sound: string;
  readonly learning: string;
};

export const chapterOneEarlyCinemaExpansionDefinitions = [
  {
    id: "scenario_blacksmith_scene_1893",
    title: "Blacksmith Scene",
    originalTitle: "Blacksmith Scene",
    aliases: ["Blacksmithing Scene", "The Blacksmith Shop"],
    year: 1893,
    directors: ["William K. L. Dickson", "William Heise"],
    genres: ["Documentary", "Short"],
    tradition: "Kinetoscope-era staged actuality and Black Maria studio production",
    tone: "Direct, performative and apparatus-led",
    premise: "Build a sub-minute staged work scene whose performance, fixed framing, natural-light studio design and Kinetoscope capture make the production system itself legible.",
    screenplay: "Organize one compact action around work, a pause to share a drink and a return to work instead of importing later multi-scene narrative structure.",
    image: "Use a fixed Kinetograph viewpoint, concentrated full-body action and the Black Maria's controllable sunlight rather than later continuity coverage.",
    editing: "Preserve the action as one continuous take; do not retrofit later continuity editing onto the 1893 production method.",
    sound: "Treat the case as silent capture and distinguish any modern accompaniment from the original photographed production.",
    learning: "Understand Blacksmith Scene as a production-system case joining performers, Kinetograph, Kinetoscope, Black Maria architecture, natural light and single-take staging.",
  },
] as const satisfies readonly ChapterOneEarlyCinemaExpansionDefinition[];

export function scenarioMatchesChapterOneEarlyCinemaDefinition(
  scenario: HistoricalFilmScenario,
  definition: ChapterOneEarlyCinemaExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;
  const scenarioTitles = [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])].map(normalizeEarlyCinemaTitle);
  return scenarioTitles.some((title) => definitionTitles.includes(title));
}

export function mergeChapterOneEarlyCinemaExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterOneEarlyCinemaExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesChapterOneEarlyCinemaDefinition(scenario, definition))) continue;
    merged.push(createChapterOneEarlyCinemaScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createChapterOneEarlyCinemaScenario(
  definition: ChapterOneEarlyCinemaExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  return {
    id: definition.id,
    status: "manual_chapter_one_early_cinema_verified",
    source: {
      list_id: "manual_chapter_one_early_cinema_expansion_2026",
      position,
      imdb_id: "manual_blacksmith_scene_1893",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/",
    },
    film: {
      title: definition.title,
      original_title: definition.originalTitle,
      year: definition.year,
      title_type: "Short",
      runtime_mins: 0,
      directors: definition.directors,
      genres: definition.genres,
      genre_keys: definition.genres.map(toGenreKey),
      imdb_rating: 0,
      user_rating: 0,
    },
    scenario_type: "documentary_production",
    production_challenge: definition.premise,
    required_choices_seed: {
      screenplay: ["single_action_structure", "staged_work_performance", "period_form"],
      camera: ["fixed_kinetograph_viewpoint", "black_maria_space", "natural_light_control"],
      editing: ["single_continuous_take", "no_retroactive_continuity"],
      sound: ["silent_capture", "modern_accompaniment_separation"],
      themes: ["film_history", "production_system", "apparatus_and_performance"],
    },
    phases: sharedProductionCasePhases,
    learning_goals_seed: [
      definition.learning,
      "Connect the Black Maria's architecture and sunlight control to the image that could be photographed in 1893.",
      "Distinguish staged early-film performance from a claim that the camera simply captured untouched reality.",
    ],
    manual_enrichment_needed: [],
  };
}

function toGenreKey(genre: string): string {
  return genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

const sharedProductionCasePhases = [
  { id: "pitch", label: "Pitch", player_task: "Define the sub-minute production promise without importing later cinema grammar." },
  { id: "research", label: "Research", player_task: "Separate sourced 1893 production history from later first-film mythology." },
  { id: "screenplay", label: "Screenplay", player_task: "Build the staged work-pause-work action as one concise performance unit." },
  { id: "casting", label: "Casting", player_task: "Use a small ensemble whose actions remain readable in a fixed full-body frame." },
  { id: "production_design", label: "Production design", player_task: "Treat the Black Maria, forge action and props as one apparatus-dependent production environment." },
  { id: "cinematography", label: "Cinematography", player_task: "Choose fixed framing and controllable natural light appropriate to Kinetograph capture." },
  { id: "editing", label: "Editing", player_task: "Preserve a single continuous take rather than simulating later continuity systems." },
  { id: "sound", label: "Sound", player_task: "Keep original silent capture distinct from later or present-day accompaniment." },
  { id: "release", label: "Release", player_task: "Place the film in the 1893 Kinetoscope/public-demonstration context without a single-inventor claim." },
] as const;
