import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import type { ModernCanonExpansionDefinition } from "./modernCanonExpansion.js";

export const japaneseAuteurExpansionDefinitions = [
  {
    id: "scenario_tampopo_1985",
    title: "Tampopo",
    originalTitle: "Tanpopo",
    year: 1985,
    directors: ["Jūzō Itami"],
    genres: ["Comedy", "Drama"],
    tradition: "Japanese food cinema, genre parody and episodic ensemble comedy",
    tone: "Playful, sensual and formally inventive",
    premise: "Follow a struggling ramen-shop owner and an improvised group of helpers while food stories, comic digressions and genre pastiche expand around the central quest.",
    screenplay: "Build a clear improvement narrative while allowing self-contained food episodes to interrupt, echo and enlarge the main story.",
    image: "Treat preparation, texture, gesture, steam, eating and restaurant space as dramatic action rather than decorative detail.",
    editing: "Move confidently between the central ramen story and short comic or sensual episodes without losing thematic continuity.",
    sound: "Use cooking, chopping, boiling, slurping, conversation and music to make food both material process and social performance.",
    learning: "Study how an episodic comedy can combine genre parody, sensory detail and a practical craft quest into one coherent film.",
  },
  {
    id: "scenario_black_rain_imamura_1989",
    title: "Black Rain",
    originalTitle: "Kuroi ame",
    aliases: ["Kuroi Ame", "Black Rain (Imamura)"],
    year: 1989,
    directors: ["Shōhei Imamura"],
    genres: ["Drama", "History", "War"],
    tradition: "Japanese postwar memory cinema, survivor drama and social-historical realism",
    tone: "Somber, intimate and socially observant",
    premise: "Follow a Hiroshima survivor and her relatives as illness, stigma and ordinary plans for the future remain shaped by the atomic bombing's continuing aftermath.",
    screenplay: "Connect personal routines, marriage negotiations and bodily uncertainty to historical violence without reducing the characters to symbols.",
    image: "Use monochrome landscapes, homes, faces, weather and damaged bodies to hold memory and everyday life inside the same visual world.",
    editing: "Move between remembered catastrophe and later domestic time so the past remains active without overwhelming every present-tense scene.",
    sound: "Contrast ordinary village ambience, domestic quiet and social conversation with the sensory rupture of remembered destruction.",
    learning: "Understand how historical trauma can be represented through daily life, social consequence and restrained formal continuity rather than spectacle alone.",
  },
  {
    id: "scenario_after_life_1998",
    title: "After Life",
    originalTitle: "Wandafuru raifu",
    aliases: ["Wonderful Life", "Wandafuru Raifu"],
    year: 1998,
    directors: ["Hirokazu Kore-eda"],
    genres: ["Drama", "Fantasy"],
    tradition: "Japanese humanist fantasy, documentary-inflected fiction and memory cinema",
    tone: "Gentle, reflective and quietly playful",
    premise: "Place the recently dead inside a modest institution where each person must choose one memory to reconstruct and carry into eternity.",
    screenplay: "Build drama from interviews, uncertainty and practical reconstruction as characters discover what a chosen memory reveals about an entire life.",
    image: "Keep the institutional world plain and observable while handmade memory scenes expose the artifice and emotional power of filmmaking.",
    editing: "Let testimony, hesitation, preparation and staged recollection gradually transform isolated memories into shared reflection.",
    sound: "Use voices, room tone, production activity and restrained music to distinguish remembered experience from its deliberate reconstruction.",
    learning: "Study how documentary behavior and visible filmmaking craft can support a fictional meditation on memory, choice and mortality.",
  },
  {
    id: "scenario_still_walking_2008",
    title: "Still Walking",
    originalTitle: "Aruitemo aruitemo",
    aliases: ["Aruitemo Aruitemo"],
    year: 2008,
    directors: ["Hirokazu Kore-eda"],
    genres: ["Drama"],
    tradition: "Japanese domestic family drama, humanist realism and everyday ritual cinema",
    tone: "Warm, restrained and quietly painful",
    premise: "Spend a summer day with a family gathering to remember a dead son while food, small talk, old resentments and ordinary gestures expose unresolved grief.",
    screenplay: "Build conflict through repeated family roles, indirect remarks and practical routines instead of a single explanatory confrontation.",
    image: "Use kitchens, corridors, dining spaces, stairs and seasonal exterior details to make the family home an active map of memory and hierarchy.",
    editing: "Protect the duration of meals, preparations and conversations so emotional shifts emerge inside ordinary continuity.",
    sound: "Let cooking, insects, footsteps, household movement and overlapping family speech carry history beneath polite conversation.",
    learning: "Understand how domestic space, food and performance detail can make a single family visit reveal decades of attachment and resentment.",
  },
  {
    id: "scenario_wheel_of_fortune_and_fantasy_2021",
    title: "Wheel of Fortune and Fantasy",
    originalTitle: "Gūzen to sōzō",
    aliases: ["Guzen to sozo", "Gûzen to sôzô"],
    year: 2021,
    directors: ["Ryusuke Hamaguchi"],
    genres: ["Drama", "Romance"],
    tradition: "Japanese contemporary dialogue cinema, triptych structure and performance-centered drama",
    tone: "Precise, surprising and emotionally open",
    premise: "Link three independent stories in which coincidence, role-play and extended conversation alter how people understand desire, regret and possible connection.",
    screenplay: "Give each episode its own reversal while using chance encounters and spoken reinterpretation as the shared structural principle.",
    image: "Frame bodies and faces clearly inside cars, offices, classrooms and homes so changing power remains readable throughout long conversations.",
    editing: "Preserve performance duration and conversational turns while using each episode's internal break to reopen what the scene appears to mean.",
    sound: "Keep speech, pauses, breath and modest room ambience central, allowing language itself to become the film's main field of action.",
    learning: "Study how a triptych can create unity through recurring dramatic principles rather than shared characters or one continuous plot.",
  },
  {
    id: "scenario_monster_kore_eda_2023",
    title: "Monster",
    originalTitle: "Kaibutsu",
    aliases: ["Kaibutsu", "Monster (Kore-eda)"],
    year: 2023,
    directors: ["Hirokazu Kore-eda"],
    genres: ["Drama", "Mystery"],
    tradition: "Japanese multiperspectival drama, childhood cinema and institutional misunderstanding",
    tone: "Tense, compassionate and gradually clarifying",
    premise: "Revisit a conflict involving a child, his mother, a teacher and a school from shifting viewpoints until accusation gives way to a more complex account of fear and intimacy.",
    screenplay: "Repeat key events from different perspectives so each section changes the moral meaning of information already seen.",
    image: "Use school spaces, homes, streets, weather and a hidden childhood refuge to distinguish institutional observation from private experience.",
    editing: "Control repetition and withheld context carefully so the structure produces recognition rather than merely concealing a twist.",
    sound: "Let classroom noise, domestic quiet, weather, distant movement and restrained music shift meaning as viewpoint changes.",
    learning: "Understand how repeated chronology and changing viewpoint can challenge premature judgment while preserving emotional clarity.",
  },
  {
    id: "scenario_evil_does_not_exist_2023",
    title: "Evil Does Not Exist",
    originalTitle: "Aku wa sonzai shinai",
    aliases: ["Aku wa Sonzai Shinai"],
    year: 2023,
    directors: ["Ryusuke Hamaguchi"],
    genres: ["Drama"],
    tradition: "Japanese ecological drama, rural observational cinema and moral ambiguity",
    tone: "Measured, unsettled and environmentally attentive",
    premise: "Follow a rural community confronting a proposed tourist development whose practical failures expose competing responsibilities toward land, labor and livelihood.",
    screenplay: "Build the conflict from meetings, tasks, incomplete expertise and shifting alliances rather than reducing the development dispute to heroes and villains.",
    image: "Observe water, trees, snow, roads, work and bodies in landscape so ecological knowledge remains concrete and spatial.",
    editing: "Let procedural detail and quiet duration accumulate before introducing ruptures that resist a simple moral resolution.",
    sound: "Use forest ambience, tools, water, vehicles, silence and recurring music to keep the nonhuman environment active in every decision.",
    learning: "Study how environmental drama can emerge from practical systems, duration and unresolved responsibility instead of explanatory messaging.",
  },
] as const satisfies readonly ModernCanonExpansionDefinition[];

const directorDisambiguatedDefinitionIds = new Set([
  "scenario_black_rain_imamura_1989",
  "scenario_after_life_1998",
  "scenario_monster_kore_eda_2023",
]);

function normalizeJapaneseAuteurValue(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function scenarioMatchesJapaneseAuteurDefinition(
  scenario: HistoricalFilmScenario,
  definition: ModernCanonExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;

  const scenarioTitles = [scenario.film.title, scenario.film.original_title].map(normalizeJapaneseAuteurValue);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])].map(normalizeJapaneseAuteurValue);
  if (!scenarioTitles.some((title) => definitionTitles.includes(title))) return false;

  if (!directorDisambiguatedDefinitionIds.has(definition.id)) return true;

  const scenarioDirectors = scenario.film.directors.map(normalizeJapaneseAuteurValue);
  const definitionDirectors = definition.directors.map(normalizeJapaneseAuteurValue);
  const directorMatches = scenarioDirectors.some((director) => definitionDirectors.includes(director));
  const originalTitleMatches = normalizeJapaneseAuteurValue(scenario.film.original_title) === normalizeJapaneseAuteurValue(definition.originalTitle);
  return directorMatches || originalTitleMatches;
}

export function getJapaneseAuteurExpansionDefinition(
  scenario: HistoricalFilmScenario,
): ModernCanonExpansionDefinition | undefined {
  return japaneseAuteurExpansionDefinitions.find((definition) => (
    scenarioMatchesJapaneseAuteurDefinition(scenario, definition)
  ));
}

export function mergeJapaneseAuteurExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of japaneseAuteurExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesJapaneseAuteurDefinition(scenario, definition))) continue;
    merged.push(createJapaneseAuteurScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createJapaneseAuteurScenario(
  definition: ModernCanonExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  const genreKeys = definition.genres.map(toGenreKey);
  return {
    id: definition.id,
    status: "manual_japanese_auteur_case_needs_source_verification",
    source: {
      list_id: "manual_japanese_auteur_expansion_2026",
      position,
      imdb_id: `manual_${definition.id.replace(/^scenario_/, "")}`,
      url: `https://www.imdb.com/find/?q=${encodeURIComponent(`${definition.title} ${definition.year}`)}`,
    },
    film: {
      title: definition.title,
      original_title: definition.originalTitle,
      year: definition.year,
      title_type: "Movie",
      runtime_mins: 0,
      directors: definition.directors,
      genres: definition.genres,
      genre_keys: genreKeys,
      imdb_rating: 0,
      user_rating: 0,
    },
    scenario_type: getScenarioType(definition.genres),
    production_challenge: definition.premise,
    required_choices_seed: {
      screenplay: ["film_specific_structure", "historical_and_social_context", "character_pressure"],
      camera: ["film_specific_image_system", "spatial_design", "performance_viewpoint"],
      editing: ["film_specific_editing_method", "duration_and_rhythm", "information_control"],
      sound: ["film_specific_sound_method", "voice_music_and_silence"],
      themes: ["japanese_auteur_cinema", "regional_film_history", "craft_consequence"],
    },
    phases: sharedProductionCasePhases,
    learning_goals_seed: [
      definition.learning,
      `Connect ${definition.tradition.toLowerCase()} to concrete production choices.`,
      "Distinguish provisional film mapping from completed source verification.",
    ],
    manual_enrichment_needed: [
      "source_backed_historical_profile",
      "department_level_craft_sources",
      "verified_camera_editing_and_sound_specifications",
      "festival_reception_and_legacy_review",
    ],
  };
}

function toGenreKey(genre: string): string {
  return genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

function getScenarioType(genres: readonly string[]): string {
  if (genres.includes("Documentary")) return "documentary_production";
  if (genres.includes("Animation")) return "animation_production";
  if (genres.some((genre) => ["Horror", "Crime", "Mystery", "Thriller"].includes(genre))) return "crime_thriller_production";
  if (genres.includes("Comedy")) return "character_comedy_production";
  if (genres.some((genre) => ["Action", "Adventure", "War", "Western"].includes(genre))) return "action_adventure_production";
  if (genres.some((genre) => ["Fantasy", "Sci-Fi"].includes(genre))) return "speculative_production";
  return "character_drama_production";
}

const sharedProductionCasePhases = [
  { id: "pitch", label: "Pitch", player_task: "Define the film's production promise, conflict and formal method." },
  { id: "research", label: "Research", player_task: "Separate sourced film history from provisional case mapping." },
  { id: "screenplay", label: "Screenplay", player_task: "Build the structure and scene logic specific to this film." },
  { id: "casting", label: "Casting", player_task: "Choose the performance system and ensemble energy." },
  { id: "production_design", label: "Production design", player_task: "Choose spaces, objects, costume and makeup as part of the film's historical system." },
  { id: "cinematography", label: "Cinematography", player_task: "Choose framing, movement, light and capture methods appropriate to the case." },
  { id: "editing", label: "Editing", player_task: "Choose rhythm, duration, temporal structure and information control." },
  { id: "sound", label: "Sound", player_task: "Choose dialogue, silence, music, ambience and effects appropriate to the film's method." },
  { id: "release", label: "Release", player_task: "Place the film historically without making unsupported claims of influence, awards or innovation." },
] as const;
