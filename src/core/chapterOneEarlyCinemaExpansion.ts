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
    sourceId: "manual_blacksmith_scene_1893",
    sourceUrl: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/",
    scenarioType: "documentary_production",
    requiredChoicesSeed: {
      screenplay: ["single_action_structure", "staged_work_performance", "period_form"],
      camera: ["fixed_kinetograph_viewpoint", "black_maria_space", "natural_light_control"],
      editing: ["single_continuous_take", "no_retroactive_continuity"],
      sound: ["silent_capture", "modern_accompaniment_separation"],
      themes: ["film_history", "production_system", "apparatus_and_performance"],
    },
    learningGoals: [
      "Connect the Black Maria's architecture and sunlight control to the image that could be photographed in 1893.",
      "Distinguish staged early-film performance from a claim that the camera simply captured untouched reality.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define the sub-minute production promise without importing later cinema grammar." },
      { id: "research", label: "Research", player_task: "Separate sourced 1893 production history from later first-film mythology." },
      { id: "screenplay", label: "Screenplay", player_task: "Build the staged work-pause-work action as one concise performance unit." },
      { id: "casting", label: "Casting", player_task: "Use a small ensemble whose actions remain readable in a fixed full-body frame." },
      { id: "production_design", label: "Production design", player_task: "Treat the Black Maria, forge action and props as one apparatus-dependent production environment." },
      { id: "cinematography", label: "Cinematography", player_task: "Choose fixed framing and controllable natural light appropriate to Kinetograph capture." },
      { id: "editing", label: "Editing", player_task: "Preserve a single continuous take rather than simulating later continuity systems." },
      { id: "sound", label: "Sound", player_task: "Keep original silent capture distinct from later or present-day accompaniment." },
      { id: "release", label: "Release", player_task: "Place the film in the 1893 Kinetoscope/public-demonstration context without a single-inventor claim." },
    ],
  },
  {
    id: "scenario_workers_leaving_lumiere_factory_1895",
    title: "Workers Leaving the Lumière Factory",
    originalTitle: "La Sortie de l'usine Lumière à Lyon",
    aliases: [
      "Workers Leaving the Lumiere Factory",
      "La Sortie de l'Usine Lumière à Lyon",
      "La Sortie des usines Lumière",
      "Sortie d'usine",
    ],
    year: 1895,
    directors: ["Louis Lumière"],
    genres: ["Documentary", "Short"],
    tradition: "Lumière actuality, portable location filmmaking and single-shot event framing",
    tone: "Observational, spatial and event-driven",
    premise: "Build a short actuality around a real factory-gate event, using portable apparatus, fixed framing, depth and precise start timing so a crowd's movement becomes the production structure.",
    screenplay: "Replace fictional scene construction with event design: decide which threshold to record, when the flow begins and how the short roll can contain a legible progression of workers, bicycles, animals and vehicles.",
    image: "Place the Cinématographe outside the factory gate and compose enough foreground, depth and lateral room for people and vehicles to organize the image through movement.",
    editing: "Treat each filmed version as a separate single-view production iteration; do not collapse surviving variants into one imaginary original or retrofit continuity montage onto the case.",
    sound: "Treat the photographed case as silent capture and keep later accompaniment separate from the 1895 production evidence.",
    learning: "Understand actuality as produced through apparatus, location, framing, timing and repeatability rather than as an automatic transparent record of reality.",
    sourceId: "manual_workers_leaving_lumiere_factory_1895",
    sourceUrl: "https://www.institut-lumiere.org/le-cinematographe-lumiere",
    scenarioType: "documentary_production",
    requiredChoicesSeed: {
      screenplay: ["event_structure", "factory_gate_timing", "actuality_without_fictional_plot"],
      camera: ["portable_cinematographe", "fixed_location_viewpoint", "depth_and_crowd_flow"],
      editing: ["single_view", "version_separation", "no_retroactive_continuity"],
      sound: ["silent_capture", "modern_accompaniment_separation"],
      themes: ["film_history", "actuality", "labor_and_modernity", "version_history"],
    },
    learningGoals: [
      "Connect the Cinématographe's portability and short roll to location choice, framing and event timing.",
      "Use multiple surviving versions to distinguish actuality from the idea of one untouched, transparent record.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define the everyday event and why its movement can sustain a complete short actuality." },
      { id: "research", label: "Research", player_task: "Separate sourced Lumière production and exhibition history from single-birthday cinema myths." },
      { id: "screenplay", label: "Screenplay", player_task: "Design event timing rather than fictional plot: gate, crowd flow, start point and end point." },
      { id: "casting", label: "Casting", player_task: "Treat the workers and passers-by as real-world participants whose density and movement must remain legible without inventing character roles." },
      { id: "production_design", label: "Production design", player_task: "Use the real factory gate, street and depth as the physical production environment rather than converting the actuality into a studio set." },
      { id: "cinematography", label: "Cinematography", player_task: "Place a fixed portable Cinématographe viewpoint that can contain bodies, bicycles and vehicles through the full short roll." },
      { id: "editing", label: "Editing", player_task: "Preserve each version as its own single-view iteration and do not fake later continuity construction." },
      { id: "sound", label: "Sound", player_task: "Keep 1895 silent capture distinct from later accompaniment or restoration sound." },
      { id: "release", label: "Release", player_task: "Place the view inside the 1895 demonstration and projection history without claiming one film single-handedly invented cinema." },
    ],
  },
  {
    id: "scenario_fire_1901",
    title: "Fire!",
    originalTitle: "Fire!",
    aliases: ["Fire"],
    year: 1901,
    directors: ["James Williamson"],
    genres: ["Drama", "Short"],
    tradition: "Brighton and Hove early multi-shot rescue drama",
    tone: "Urgent, spatial and action-driven",
    premise: "Build a five-view fire-rescue drama whose alarm, brigade mobilization, journey and rescue remain one connected action through matching movement and chronological scene order.",
    screenplay: "Organize the alarm, fire-station response, horse-drawn journey, interior danger and exterior rescue as successive tableaux, using audience knowledge of the fire to create suspense before the rescuers arrive.",
    image: "Use identifiable Hove Fire Station and Ivy Lodge, fixed readable viewpoints, smoke and fire staging, and local street geography so each shot contributes a distinct piece of the rescue space.",
    editing: "Match movement across separate locations and sequence five tableaux chronologically so the audience constructs one continuous rescue action without importing later classical continuity coverage.",
    sound: "Treat the photographed case as silent and keep later accompaniment separate from the 1901 production evidence.",
    learning: "Understand how Fire! constructs connected film space and suspense from several separately staged views before classical continuity grammar is standardized.",
    sourceId: "manual_fire_1901",
    sourceUrl: "https://www.screenonline.org.uk/film/id/520632/index.html",
    scenarioType: "character_drama_production",
    requiredChoicesSeed: {
      screenplay: ["alarm_response_rescue", "five_tableau_structure", "audience_information_advantage"],
      camera: ["fixed_multi_location_views", "hove_fire_station", "ivy_lodge_rescue_space"],
      editing: ["matching_action", "chronological_multi_shot_sequence", "connected_film_space"],
      sound: ["silent_capture", "later_accompaniment_separation"],
      themes: ["film_history", "emergency_action", "space_and_continuity", "early_british_cinema"],
    },
    learningGoals: [
      "Connect five separately staged views through matching movement and chronological action rather than treating them as unrelated tableaux.",
      "Distinguish Williamson's early connected-space experiment from later standardized continuity editing while recognizing its importance in narrative development.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define a compact rescue promise that can be understood across five separate views." },
      { id: "research", label: "Research", player_task: "Ground the case in Williamson, Hove Fire Station, Ivy Lodge and early British multi-shot production." },
      { id: "screenplay", label: "Screenplay", player_task: "Order alarm, mobilization, journey and rescue so audience information creates urgency." },
      { id: "casting", label: "Casting", player_task: "Assign policeman, firemen and occupants clear physical tasks that remain readable in fixed wide views." },
      { id: "production_design", label: "Production design", player_task: "Coordinate real Hove locations with staged smoke, fire, ladders, horses and rescue action." },
      { id: "cinematography", label: "Cinematography", player_task: "Choose fixed viewpoints and movement paths that make the transition between locations legible." },
      { id: "editing", label: "Editing", player_task: "Use matching action and chronological scene order to create connected film space without faking later coverage conventions." },
      { id: "sound", label: "Sound", player_task: "Keep the original silent production distinct from later live or recorded accompaniment." },
      { id: "release", label: "Release", player_task: "Place the film in 1901 British exhibition and narrative development without turning one technique into a universal single-inventor claim." },
    ],
  },
  {
    id: "scenario_the_great_train_robbery_1903",
    title: "The Great Train Robbery",
    originalTitle: "The Great Train Robbery",
    aliases: ["Great Train Robbery"],
    year: 1903,
    directors: ["Edwin S. Porter"],
    genres: ["Action", "Crime", "Western", "Short"],
    tradition: "Early American multi-scene crime and Western fiction",
    tone: "Kinetic, violent and spectacle-driven",
    premise: "Build a one-reel action story that coordinates a robbery, escape and pursuit across studio interiors, real railway locations, staged violence and photographic effects without pretending that 1903 production already used later continuity grammar.",
    screenplay: "Organize robbery, flight, alarm and pursuit as successive dramatic units and two lines of action, drawing on contemporary popular crime storytelling without claiming a single-film invention of narrative cinema.",
    image: "Combine Edison studio interiors with New Jersey railway and park locations, moving-train photography, double exposure and selected hand-applied color so production scale is visible in the image.",
    editing: "Link distinct scenes into a legible causal action progression while keeping Porter's pre-1908 temporal method historically specific; do not retrofit Griffith-style continuity cross-cutting or an inventor-of-editing myth.",
    sound: "Treat the photographed case as silent capture and keep later musical accompaniment separate from the 1903 production evidence.",
    learning: "Understand The Great Train Robbery as a convergence of location logistics, studio construction, action staging, effects and multi-scene temporal organization rather than the singular invention of narrative editing.",
    sourceId: "manual_the_great_train_robbery_1903",
    sourceUrl: "https://www.loc.gov/item/00694220/",
    scenarioType: "action_adventure_production",
    requiredChoicesSeed: {
      screenplay: ["robbery_escape_pursuit", "parallel_lines_of_action", "period_narrative_form"],
      camera: ["studio_location_hybrid", "moving_train_viewpoint", "double_exposure", "direct_address_bandit"],
      editing: ["multi_scene_progression", "successive_action_lines", "no_inventor_of_editing_myth"],
      sound: ["silent_capture", "modern_accompaniment_separation"],
      themes: ["film_history", "crime_and_western", "production_scale", "causal_action"],
    },
    learningGoals: [
      "Connect studio sets, railway locations, moving-camera work and effects to the practical expansion of one-reel action production.",
      "Distinguish Porter's historically important multi-scene organization from the false claim that one 1903 film invented narrative editing or later continuity grammar.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define a robbery-escape-pursuit action promise whose scale is achievable inside a 1903 one-reel production system." },
      { id: "research", label: "Research", player_task: "Separate sourced Edison/Porter production history from later first-narrative and inventor-of-editing myths." },
      { id: "screenplay", label: "Screenplay", player_task: "Build robbery, escape, alarm and pursuit as successive units with two readable lines of action." },
      { id: "casting", label: "Casting", player_task: "Assign bandits, passengers and posse roles so physical action remains readable across changing locations." },
      { id: "production_design", label: "Production design", player_task: "Coordinate studio train/office interiors, props and practical action with real railway and park environments." },
      { id: "cinematography", label: "Cinematography", player_task: "Plan fixed and moving-train viewpoints, exterior geography and photographic effects appropriate to the Edison production system." },
      { id: "editing", label: "Editing", player_task: "Sequence distinct scenes and action lines clearly without simulating later continuity conventions that the sources do not support." },
      { id: "sound", label: "Sound", player_task: "Keep original silent capture distinct from later accompaniment and modern sound design." },
      { id: "release", label: "Release", player_task: "Place the film in Edison's 1903 distribution and exhibition context while treating the direct-address bandit shot as a flexible attraction rather than a fixed modern ending rule." },
    ],
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
      genre_keys: definition.genres.map(toGenreKey),
      imdb_rating: 0,
      user_rating: 0,
    },
    scenario_type: definition.scenarioType,
    production_challenge: definition.premise,
    required_choices_seed: definition.requiredChoicesSeed,
    phases: definition.phases,
    learning_goals_seed: [definition.learning, ...definition.learningGoals],
    manual_enrichment_needed: [],
  };
}

function toGenreKey(genre: string): string {
  return genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
