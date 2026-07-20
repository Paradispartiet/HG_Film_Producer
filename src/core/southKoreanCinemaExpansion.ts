import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import type { ModernCanonExpansionDefinition } from "./modernCanonExpansion.js";

export const southKoreanCinemaExpansionDefinitions = [
  {
    id: "scenario_peppermint_candy_1999",
    title: "Peppermint Candy",
    originalTitle: "Bakha satang",
    aliases: ["Bakhasatang"],
    year: 1999,
    directors: ["Lee Chang-dong"],
    genres: ["Drama"],
    tradition: "South Korean New Wave, historical memory cinema and reverse-chronology character tragedy",
    tone: "Devastating, reflective and historically charged",
    premise: "Trace one man's collapse backward through twenty years of private choices and national upheaval until lost possibility becomes visible beneath the damage.",
    screenplay: "Use reverse chronology so each earlier chapter revises the moral meaning of what the audience has already seen rather than merely explaining it.",
    image: "Return to railway tracks, gatherings, workplaces and public landscapes as recurring spaces whose meanings change across different historical periods.",
    editing: "Build the film from large backward temporal leaps, using repeated locations and emotional echoes to preserve orientation across the reversed structure.",
    sound: "Use trains, shouted speech, public noise, period music and sudden quiet as bridges between personal memory and national history.",
    learning: "Study how reverse chronology can transform character revelation into an investigation of historical pressure, responsibility and lost innocence.",
  },
  {
    id: "scenario_oasis_2002",
    title: "Oasis",
    originalTitle: "Oasiseu",
    aliases: ["Oasiseu"],
    year: 2002,
    directors: ["Lee Chang-dong"],
    genres: ["Drama", "Romance"],
    tradition: "South Korean social realism, disability representation and disruptive romantic drama",
    tone: "Uncomfortable, tender and socially confrontational",
    premise: "Follow an impulsive former prisoner and a woman with cerebral palsy as an unequal, difficult relationship exposes family neglect, social control and the limits of romantic convention.",
    screenplay: "Refuse idealized characterization and let intimacy develop through morally difficult behavior, changing trust and pressure from both families.",
    image: "Contrast constrained domestic and public observation with brief subjective transformations that visualize desire without claiming to erase disability.",
    editing: "Hold awkward encounters long enough for power, discomfort and tenderness to coexist, while clearly separating fantasy passages from material reality.",
    sound: "Use strained speech, household noise, traffic, music and abrupt shifts in acoustic perspective to keep communication physically present.",
    learning: "Examine how performance, viewpoint and subjective imagery can challenge social exclusion while demanding careful ethical attention from the filmmaker.",
  },
  {
    id: "scenario_the_host_2006",
    title: "The Host",
    originalTitle: "Gwoemul",
    aliases: ["Gwoemul"],
    year: 2006,
    directors: ["Bong Joon-ho"],
    genres: ["Action", "Drama", "Horror", "Sci-Fi"],
    tradition: "South Korean genre hybridity, family monster film and political blockbuster satire",
    tone: "Kinetic, grotesque and emotionally volatile",
    premise: "Send a dysfunctional family into a river-monster crisis where rescue, government failure, media panic and ordinary incompetence collide inside one popular genre machine.",
    screenplay: "Combine family melodrama, creature suspense, physical comedy and institutional satire without allowing any one tonal system to neutralize the others.",
    image: "Stage the creature in readable daylight, public river spaces, tunnels and improvised hideouts so spectacle remains connected to familiar urban geography.",
    editing: "Shift rapidly between pursuit, family conflict, bureaucratic obstruction and dark comedy while maintaining the practical rescue objective.",
    sound: "Use crowd panic, river ambience, creature movement, public announcements, weapons and family voices to balance blockbuster scale with human confusion.",
    learning: "Understand how genre hybridity can connect monster spectacle, family dynamics and political criticism within a commercially accessible production.",
  },
  {
    id: "scenario_the_wailing_2016",
    title: "The Wailing",
    originalTitle: "Goksung",
    aliases: ["Gokseong", "Goksung"],
    year: 2016,
    directors: ["Na Hong-jin"],
    genres: ["Drama", "Horror", "Mystery", "Thriller"],
    tradition: "South Korean occult horror, rural procedural and escalating epistemic uncertainty",
    tone: "Chaotic, ominous and spiritually disorienting",
    premise: "Follow an overwhelmed rural policeman investigating illness and violence as rumor, ritual, prejudice and conflicting supernatural explanations make every judgment dangerous.",
    screenplay: "Layer procedural clues, family urgency and mutually incompatible interpretations so the protagonist's need to act grows faster than his ability to know.",
    image: "Use wet roads, forests, cramped homes, crime scenes and ritual spaces to move between grounded rural observation and accumulating supernatural threat.",
    editing: "Crosscut investigation, domestic crisis and competing rituals to intensify uncertainty without collapsing the film into one clean explanatory system.",
    sound: "Build dread from rain, insects, chanting, percussion, animal noise, shouting and sudden silence, letting ritual sound compete with procedural evidence.",
    learning: "Study how horror can be organized around unreliable interpretation, cultural conflict and escalating action rather than a stable account of the supernatural.",
  },
] as const satisfies readonly ModernCanonExpansionDefinition[];

const AMBIGUOUS_ENGLISH_TITLE_IDS = new Set([
  "scenario_oasis_2002",
  "scenario_the_host_2006",
  "scenario_the_wailing_2016",
]);

function normalizeSouthKoreanCinemaTitle(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function directorsOverlap(
  scenario: HistoricalFilmScenario,
  definition: ModernCanonExpansionDefinition,
): boolean {
  const scenarioDirectors = scenario.film.directors.map(normalizeSouthKoreanCinemaTitle);
  return definition.directors
    .map(normalizeSouthKoreanCinemaTitle)
    .some((director) => scenarioDirectors.includes(director));
}

export function scenarioMatchesSouthKoreanCinemaDefinition(
  scenario: HistoricalFilmScenario,
  definition: ModernCanonExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;

  const scenarioTitles = [scenario.film.title, scenario.film.original_title]
    .map(normalizeSouthKoreanCinemaTitle);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])]
    .map(normalizeSouthKoreanCinemaTitle);
  if (!scenarioTitles.some((title) => definitionTitles.includes(title))) return false;

  if (!AMBIGUOUS_ENGLISH_TITLE_IDS.has(definition.id)) return true;

  const normalizedEnglishTitle = normalizeSouthKoreanCinemaTitle(definition.title);
  const identityTitles = [definition.originalTitle, ...(definition.aliases ?? [])]
    .map(normalizeSouthKoreanCinemaTitle)
    .filter((title) => title && title !== normalizedEnglishTitle);
  const originalTitleMatches = identityTitles.includes(
    normalizeSouthKoreanCinemaTitle(scenario.film.original_title),
  );

  return originalTitleMatches || directorsOverlap(scenario, definition);
}

export function getSouthKoreanCinemaExpansionDefinition(
  scenario: HistoricalFilmScenario,
): ModernCanonExpansionDefinition | undefined {
  return southKoreanCinemaExpansionDefinitions.find((definition) => (
    scenarioMatchesSouthKoreanCinemaDefinition(scenario, definition)
  ));
}

export function mergeSouthKoreanCinemaExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of southKoreanCinemaExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesSouthKoreanCinemaDefinition(scenario, definition))) continue;
    merged.push(createSouthKoreanCinemaScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createSouthKoreanCinemaScenario(
  definition: ModernCanonExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  const genreKeys = definition.genres.map(toGenreKey);
  return {
    id: definition.id,
    status: "manual_south_korean_cinema_case_needs_source_verification",
    source: {
      list_id: "manual_south_korean_cinema_expansion_2026",
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
      themes: ["south_korean_cinema", "regional_film_history", "craft_consequence"],
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
