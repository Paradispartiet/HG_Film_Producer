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
  {
    id: "scenario_the_lonely_villa_1909",
    title: "The Lonely Villa",
    originalTitle: "The Lonely Villa",
    aliases: ["Lonely Villa"],
    year: 1909,
    titleType: "Short",
    runtimeMins: 10,
    directors: ["D. W. Griffith"],
    genres: ["Drama", "Short"],
    premise: "Build a Biograph home-invasion rescue around three simultaneously intelligible action lines: the isolated family under attack, the burglars forcing entry, and the husband moving from a disabled automobile toward police-assisted rescue. Use the telephone to connect distant spaces and progressively intensify alternation as danger converges, while treating Griffith as a major consolidator of parallel editing rather than its inventor.",
    sourceId: "manual_the_lonely_villa_1909",
    sourceUrl: "https://www.loc.gov/item/2015600152/",
    scenarioType: "character_drama_production",
    requiredChoicesSeed: {
      screenplay: ["three_parallel_action_lines", "telephone_discovery_and_disconnection", "last_minute_rescue_convergence"],
      camera: ["family_interior_space", "burglar_entry_space", "husband_road_and_rescue_space", "biograph_period_readable_staging"],
      editing: ["sustained_parallel_alternation", "simultaneity_across_distant_spaces", "increasing_suspense_without_invention_claim"],
      sound: ["silent_capture", "telephone_action_without_recorded_dialogue", "later_accompaniment_separation"],
      themes: ["film_history", "parallel_editing", "telephone_and_modernity", "home_invasion", "narrative_convergence"],
    },
    learningGoals: [
      "Keep three distant action lines spatially distinct while editing them into one legible simultaneous rescue structure.",
      "Use the telephone as both a story device and a formal bridge between separated characters, including the dramatic effect of the line being cut.",
      "Understand The Lonely Villa as an important 1909 consolidation of sustained parallel editing within broader international experiments rather than as Griffith's invention of cross-cutting.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define a home-invasion rescue whose suspense depends on actions unfolding in separated spaces at the same time." },
      { id: "research", label: "Research", player_task: "Ground Biograph production, Fort Lee/New York filming, paper-print survival and the de Lorde telephone-play lineage before making formal claims." },
      { id: "screenplay", label: "Parallel action", player_task: "Track family danger, burglar pressure and the husband's delayed return as three lines that repeatedly separate and reconverge." },
      { id: "casting", label: "Performance", player_task: "Make fear, forced entry, telephone communication and rescue urgency readable through period silent performance without modern dialogue coverage." },
      { id: "production_design", label: "Separated spaces", player_task: "Differentiate the villa interior, thresholds, roadside/telephone stop and rescue route so every return cut has a clear spatial identity." },
      { id: "cinematography", label: "Cinematography", player_task: "Use stable readable Biograph-era setups for each action line rather than importing later shot-reverse-shot coverage as the organizing principle." },
      { id: "editing", label: "Parallel suspense", player_task: "Alternate among threat, family and rescue with increasing urgency while preserving simultaneity and refusing a Griffith-invented-cross-cutting myth." },
      { id: "sound", label: "Silent telephone", player_task: "Represent telephone communication through action and staging; do not invent synchronized voices or effects as original 1909 production sound." },
      { id: "release", label: "Biograph release", player_task: "Place the film in Biograph's 1909 one-reel production and contemporary suspense reception while distinguishing consolidation from invention." },
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
