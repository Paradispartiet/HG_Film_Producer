import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import type { ModernCanonExpansionDefinition } from "./modernCanonExpansion.js";

export const festivalWinners2010To2024ExpansionDefinitions = [
  {
    id: "scenario_somewhere_2010",
    title: "Somewhere",
    originalTitle: "Somewhere",
    year: 2010,
    directors: ["Sofia Coppola"],
    genres: ["Drama"],
    tradition: "American independent cinema, celebrity alienation and minimalist father-daughter observation",
    tone: "Detached, quiet and gradually tender",
    premise: "Follow an idle film star through repetitive hotel life until time with his young daughter exposes the emptiness beneath comfort, access and professional identity.",
    screenplay: "Build the emotional change from routine, waiting and small shared activities rather than a conventional crisis-driven redemption plot.",
    image: "Use fixed frames, anonymous luxury spaces, long lenses and repeated movement to make privilege feel suspended and emotionally vacant.",
    editing: "Hold actions beyond their expected dramatic endpoint, letting repetition and duration reveal the character's inability to move forward.",
    sound: "Use engines, hotel ambience, distant music, television and quiet conversation to contrast public glamour with private stasis.",
    learning: "Study how duration, repetition and restrained performance can dramatize alienation without explanatory dialogue.",
  },
  {
    id: "scenario_pieta_2012",
    title: "Pietà",
    originalTitle: "Pieta",
    aliases: ["Pieta"],
    year: 2012,
    directors: ["Kim Ki-duk"],
    genres: ["Crime", "Drama"],
    tradition: "South Korean moral melodrama, revenge tragedy and industrial-district social allegory",
    tone: "Brutal, intimate and spiritually corrosive",
    premise: "Confront a violent debt collector with a woman claiming to be his abandoned mother, turning bodily cruelty and economic exploitation into an unstable search for attachment and punishment.",
    screenplay: "Let the apparent family reunion alter the protagonist's behavior while preserving uncertainty about motive, identity and the accumulating design of revenge.",
    image: "Use cramped workshops, steep alleys, machinery and damaged bodies to connect private violence directly to an exploitative economic environment.",
    editing: "Move from repetitive collection visits into increasingly intimate encounters, then reorganize earlier actions through delayed revelation.",
    sound: "Emphasize metal, tools, bodily impact, industrial work and abrupt silence so economic pressure remains physically audible.",
    learning: "Examine how melodrama, withheld identity and material environment can bind moral transformation to irreversible violence.",
  },
  {
    id: "scenario_blue_is_the_warmest_colour_2013",
    title: "Blue Is the Warmest Colour",
    originalTitle: "La Vie d'Adèle – Chapitres 1 & 2",
    aliases: ["La Vie d'Adele - Chapitres 1 & 2", "Blue Is the Warmest Color"],
    year: 2013,
    directors: ["Abdellatif Kechiche"],
    genres: ["Drama", "Romance"],
    tradition: "French coming-of-age realism, intimate performance cinema and long-form relationship drama",
    tone: "Immediate, sensual and emotionally exposed",
    premise: "Follow a young woman from first attraction through an intense relationship and its aftermath, keeping desire, class, work and self-definition grounded in everyday behavior.",
    screenplay: "Build the arc through meals, school, work, social groups and changing intimacy so the relationship develops inside a larger coming-of-age process.",
    image: "Stay close to faces, gestures and bodies with shallow focus and handheld observation, making performance the dominant visual event.",
    editing: "Use extended scenes and major temporal ellipses together, allowing emotional states to unfold fully while years pass without explanatory bridges.",
    sound: "Keep breathing, eating, conversation, classroom noise, parties and domestic ambience immediate rather than smoothing intimacy with continuous score.",
    learning: "Study how close performance coverage, duration and ellipsis can carry a large emotional arc through ordinary life.",
  },
  {
    id: "scenario_black_coal_thin_ice_2014",
    title: "Black Coal, Thin Ice",
    originalTitle: "Bai ri yan huo",
    aliases: ["Báirì yànhuǒ", "Black Coal Thin Ice"],
    year: 2014,
    directors: ["Diao Yinan"],
    genres: ["Crime", "Drama", "Mystery"],
    tradition: "Chinese neo-noir, post-industrial crime cinema and wintry investigative fatalism",
    tone: "Cold, oblique and darkly seductive",
    premise: "Follow a disgraced former detective into an unresolved murder case where dismembered bodies, a guarded laundry worker and his own damaged desire blur investigation with self-destruction.",
    screenplay: "Let clues emerge through awkward encounters, procedural gaps and compromised motives rather than a clean chain of deduction.",
    image: "Use snow, industrial night, colored practical light, skating spaces and wide urban isolation to turn winter geography into noir pressure.",
    editing: "Employ abrupt time jumps and withheld connective action so the investigation feels fractured by memory, failure and incomplete knowledge.",
    sound: "Use traffic, machinery, ice, clubs, footsteps and sparse music to make the environment both mundane and threatening.",
    learning: "Understand how noir can be rebuilt through industrial landscape, temporal gaps and a protagonist whose desire contaminates his investigation.",
  },
  {
    id: "scenario_from_afar_2015",
    title: "From Afar",
    originalTitle: "Desde allá",
    aliases: ["Desde alla"],
    year: 2015,
    directors: ["Lorenzo Vigas"],
    genres: ["Drama"],
    tradition: "Venezuelan art cinema, class-bound intimacy and psychologically withheld urban drama",
    tone: "Distant, tense and emotionally ambiguous",
    premise: "Follow a wealthy isolated man who pays young men for controlled encounters until his relationship with a volatile street youth unsettles the boundaries between desire, dependency and manipulation.",
    screenplay: "Reveal motivation through behavior, repetition and shifting power rather than backstory, keeping both intimacy and exploitation unresolved.",
    image: "Use shallow focus, obstructed views and Caracas locations to separate characters from their surroundings even when they occupy the same frame.",
    editing: "Withhold expected explanations and cut around decisive emotional information, forcing the audience to infer changing attachment from action.",
    sound: "Use traffic, interiors, distant voices and restrained dialogue to preserve urban proximity without emotional transparency.",
    learning: "Study how framing distance, behavioral storytelling and withheld psychology can sustain an ethically unstable relationship drama.",
  },
  {
    id: "scenario_synonyms_2019",
    title: "Synonyms",
    originalTitle: "Synonymes",
    aliases: ["Synonymes"],
    year: 2019,
    directors: ["Nadav Lapid"],
    genres: ["Comedy", "Drama"],
    tradition: "Israeli-French transnational cinema, identity satire and physically volatile modernism",
    tone: "Feverish, abrasive and absurdly comic",
    premise: "Follow a young Israeli in Paris trying to replace language, nationality and self through French synonyms, only to find that identity returns through body, memory and social power.",
    screenplay: "Build a fragmented sequence of tests, friendships, humiliations and performances rather than a stable assimilation narrative.",
    image: "Alternate restless handheld proximity with formal confrontations and urban movement, making the protagonist's body the site of ideological conflict.",
    editing: "Use abrupt tonal and narrative transitions so comedy, anger, fantasy and political discomfort repeatedly destabilize one another.",
    sound: "Make vocabulary drills, monologues, music, shouting and accent central to the struggle over who has the right to define the character.",
    learning: "Examine how language, performance and discontinuous form can turn national identity into active cinematic conflict.",
  },
  {
    id: "scenario_there_is_no_evil_2020",
    title: "There Is No Evil",
    originalTitle: "Sheytan vojud nadarad",
    aliases: ["Sheytan vojud nadarad"],
    year: 2020,
    directors: ["Mohammad Rasoulof"],
    genres: ["Drama"],
    tradition: "Iranian dissident cinema, anthology ethics and capital-punishment moral inquiry",
    tone: "Controlled, humane and morally devastating",
    premise: "Use four stories to examine how state execution enters ordinary life through obedience, refusal, military service, family secrecy and the long consequences of individual choice.",
    screenplay: "Give each episode a distinct protagonist and dramatic mechanism while allowing the ethical question of participation to deepen across the anthology.",
    image: "Move from urban routine to barracks, forest roads and rural isolation, making each environment define a different range of possible action.",
    editing: "Let each episode complete its own reversal before the next changes scale and perspective, building cumulative argument without a single continuous plot.",
    sound: "Use domestic routine, institutional commands, vehicles, nature and sudden quiet to show how violence hides inside normal systems.",
    learning: "Study how anthology structure can test one moral problem across different lives, spaces and degrees of personal freedom.",
  },
  {
    id: "scenario_bad_luck_banging_or_loony_porn_2021",
    title: "Bad Luck Banging or Loony Porn",
    originalTitle: "Babardeală cu bucluc sau porno balamuc",
    aliases: ["Babardeala cu bucluc sau porno balamuc"],
    year: 2021,
    directors: ["Radu Jude"],
    genres: ["Comedy", "Drama"],
    tradition: "Romanian New Wave satire, essay-film collage and pandemic-era public confrontation",
    tone: "Provocative, chaotic and analytically comic",
    premise: "Follow a teacher facing public judgment after a private video circulates, expanding her case into a broader confrontation with hypocrisy, nationalism, consumer culture and institutional power.",
    screenplay: "Use a triptych of street observation, associative glossary and parent meeting rather than a conventional escalating plot.",
    image: "Combine rough digital observation, masks, advertisements, traffic, screens and frontal confrontation so contemporary public space becomes evidence.",
    editing: "Break narrative continuity with alphabetic montage and competing endings, making interruption and argument part of the film's method.",
    sound: "Layer street noise, phones, public speech, insults, definitions and overlapping debate to create a dense field of social contradiction.",
    learning: "Understand how satire, essay structure and heterogeneous media can transform a local scandal into a systemic critique.",
  },
  {
    id: "scenario_alcarras_2022",
    title: "Alcarràs",
    originalTitle: "Alcarràs",
    aliases: ["Alcarras"],
    year: 2022,
    directors: ["Carla Simón"],
    genres: ["Drama"],
    tradition: "Catalan rural realism, ensemble family cinema and agricultural transition drama",
    tone: "Warm, pressured and quietly elegiac",
    premise: "Follow a farming family through what may be its final peach harvest as land ownership, solar development, generational conflict and economic uncertainty divide the household.",
    screenplay: "Distribute the story across children, parents and grandparents so no single viewpoint contains the full meaning of losing the farm.",
    image: "Use orchards, machinery, family interiors, summer light and collective labour to make agricultural life concrete before it disappears.",
    editing: "Build momentum from seasonal tasks, arguments and parallel family activities rather than a single protagonist's goal.",
    sound: "Use insects, tractors, irrigation, music, family overlap and harvest work to preserve the living texture of the place.",
    learning: "Study how ensemble structure, location and seasonal labour can dramatize economic change without reducing a community to a thesis.",
  },
  {
    id: "scenario_triangle_of_sadness_2022",
    title: "Triangle of Sadness",
    originalTitle: "Triangle of Sadness",
    year: 2022,
    directors: ["Ruben Östlund"],
    genres: ["Comedy", "Drama"],
    tradition: "European social satire, class inversion farce and controlled ensemble provocation",
    tone: "Acerbic, escalating and grotesquely comic",
    premise: "Move models, billionaires and service workers from fashion economies to a luxury yacht and then a survival hierarchy where money loses value and practical competence reorganizes power.",
    screenplay: "Use three large movements to shift the rules of status, allowing each setting to expose a different performance of class and exchange.",
    image: "Frame bodies, luxury interiors, dining rituals and group tableaux with formal clarity so social hierarchy remains readable even during chaos.",
    editing: "Escalate from awkward dialogue to prolonged physical catastrophe, then reset the ensemble under a new material order.",
    sound: "Use fashion commands, yacht machinery, dinner service, storm noise, bodily chaos and beach ambience to mark each class system acoustically.",
    learning: "Examine how chapter structure, ensemble blocking and extended comic escalation can repeatedly reverse visible power.",
  },
  {
    id: "scenario_the_room_next_door_2024",
    title: "The Room Next Door",
    originalTitle: "La habitación de al lado",
    aliases: ["La habitacion de al lado"],
    year: 2024,
    directors: ["Pedro Almodóvar"],
    genres: ["Drama"],
    tradition: "Spanish auteur melodrama, chamber friendship drama and end-of-life moral conversation",
    tone: "Composed, intimate and lucidly sorrowful",
    premise: "Bring two estranged friends together when one asks the other to remain nearby during a planned death, turning companionship, memory and ethical responsibility into the film's central action.",
    screenplay: "Build the drama from conversations, remembered lives, practical arrangements and the shifting burden of witnessing rather than suspense about the decision itself.",
    image: "Use controlled color, architecture, paired rooms and carefully arranged bodies to give friendship and separation a precise spatial form.",
    editing: "Move calmly between dialogue, recollection and waiting, preserving the protagonists' agency while allowing emotional pressure to accumulate.",
    sound: "Use measured speech, domestic quiet, landscape ambience and selective music to support attention rather than dictate grief.",
    learning: "Study how production design, chamber staging and sustained dialogue can make ethical companionship dramatically active.",
  },
] as const satisfies readonly ModernCanonExpansionDefinition[];

const IDENTITY_GUARDED_IDS: ReadonlySet<string> = new Set(
  festivalWinners2010To2024ExpansionDefinitions.map((definition) => definition.id),
);

function normalizeFestivalWinnerTitle(value: string): string {
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
  const scenarioDirectors = scenario.film.directors.map(normalizeFestivalWinnerTitle);
  return definition.directors
    .map(normalizeFestivalWinnerTitle)
    .some((director) => scenarioDirectors.includes(director));
}

export function scenarioMatchesFestivalWinners2010To2024Definition(
  scenario: HistoricalFilmScenario,
  definition: ModernCanonExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;

  const scenarioTitles = [scenario.film.title, scenario.film.original_title]
    .map(normalizeFestivalWinnerTitle);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])]
    .map(normalizeFestivalWinnerTitle);
  if (!scenarioTitles.some((title) => definitionTitles.includes(title))) return false;

  if (!IDENTITY_GUARDED_IDS.has(definition.id)) return true;

  const normalizedEnglishTitle = normalizeFestivalWinnerTitle(definition.title);
  const identityTitles = [definition.originalTitle, ...(definition.aliases ?? [])]
    .map(normalizeFestivalWinnerTitle)
    .filter((title) => title && title !== normalizedEnglishTitle);
  const originalTitleMatches = identityTitles.includes(
    normalizeFestivalWinnerTitle(scenario.film.original_title),
  );

  return originalTitleMatches || directorsOverlap(scenario, definition);
}

export function getFestivalWinners2010To2024ExpansionDefinition(
  scenario: HistoricalFilmScenario,
): ModernCanonExpansionDefinition | undefined {
  return festivalWinners2010To2024ExpansionDefinitions.find((definition) => (
    scenarioMatchesFestivalWinners2010To2024Definition(scenario, definition)
  ));
}

export function mergeFestivalWinners2010To2024Expansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of festivalWinners2010To2024ExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesFestivalWinners2010To2024Definition(scenario, definition))) continue;
    merged.push(createFestivalWinnerScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createFestivalWinnerScenario(
  definition: ModernCanonExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  const genreKeys = definition.genres.map(toGenreKey);
  return {
    id: definition.id,
    status: "manual_festival_winner_2010_2024_case_needs_source_verification",
    source: {
      list_id: "manual_festival_winner_2010_2024_expansion_2026",
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
      themes: ["major_festival_winner", "contemporary_world_cinema", "craft_consequence"],
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
  if (genres.includes("Comedy")) return "comedy_production";
  if (genres.includes("Romance")) return "romance_drama_production";
  return "drama_production";
}

const sharedProductionCasePhases = [
  { id: "development", label: "Development", player_task: "Define the production problem and the film-specific dramatic system." },
  { id: "preproduction", label: "Pre-production", player_task: "Translate the film's formal method into concrete department choices." },
  { id: "production", label: "Production", player_task: "Execute performance, image and sound choices under the case constraints." },
  { id: "postproduction", label: "Post-production", player_task: "Shape rhythm, information and consequence through editing and sound." },
] as const;
