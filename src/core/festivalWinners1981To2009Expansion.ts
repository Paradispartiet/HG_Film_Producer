import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import type { ModernCanonExpansionDefinition } from "./modernCanonExpansion.js";

export const festivalWinners1981To2009ExpansionDefinitions = [
  {
    id: "scenario_man_of_iron_1981",
    title: "Man of Iron",
    originalTitle: "Człowiek z żelaza",
    aliases: ["Czlowiek z zelaza"],
    year: 1981,
    directors: ["Andrzej Wajda"],
    genres: ["Drama", "History"],
    tradition: "Polish political cinema, worker-history drama and documentary-inflected opposition filmmaking",
    tone: "Urgent, investigative and politically charged",
    premise: "Follow a compromised journalist ordered to discredit a shipyard activist while interviews, archives and present-tense unrest expose the human cost of serving an authoritarian narrative.",
    screenplay: "Build the investigation through testimony, flashback and changing allegiance so the reporter's assignment gradually becomes a moral reckoning.",
    image: "Combine crowded public action, industrial locations, news-like observation and intimate interviews so political history remains physically immediate.",
    editing: "Interweave present investigation, remembered events and archival texture while keeping each revelation tied to the journalist's changing position.",
    sound: "Use demonstrations, shipyard noise, public speech, interviews and abrupt quiet to contrast collective action with private compromise.",
    learning: "Study how investigative structure, testimony and documentary texture can turn recent political history into active dramatic conflict.",
  },
  {
    id: "scenario_yol_1982",
    title: "Yol",
    originalTitle: "Yol",
    year: 1982,
    directors: ["Şerif Gören", "Yılmaz Güney"],
    genres: ["Drama"],
    tradition: "Turkish political cinema, prison-release road narrative and multi-protagonist social realism",
    tone: "Severe, compassionate and socially constricted",
    premise: "Follow several prisoners granted temporary leave as journeys toward family and home reveal how law, custom, poverty and political repression continue outside the prison walls.",
    screenplay: "Use parallel journeys with distinct family pressures so each return exposes a different form of confinement and compromised freedom.",
    image: "Place bodies against roads, winter landscapes, villages, trains and checkpoints, making travel itself a measure of social restriction.",
    editing: "Crosscut the separate journeys by emotional and political pressure rather than forcing them into one converging plot.",
    sound: "Use transport, weather, animals, public authority, family voices and silence to make each environment carry its own rules.",
    learning: "Examine how a road structure and multiple protagonists can map a national system through concrete personal consequences.",
  },
  {
    id: "scenario_the_ballad_of_narayama_1983",
    title: "The Ballad of Narayama",
    originalTitle: "Narayama bushikō",
    aliases: ["Narayama bushiko"],
    year: 1983,
    directors: ["Shōhei Imamura"],
    genres: ["Drama"],
    tradition: "Japanese rural naturalism, folk ritual drama and ecological social observation",
    tone: "Earthy, unsentimental and ritualistic",
    premise: "Observe a mountain village where survival customs require an ageing woman to prepare for abandonment on Narayama while family desire, scarcity and seasonal life continue around her.",
    screenplay: "Organize village conflicts around food, inheritance, sexuality, labour and ritual so the final journey grows from an entire social ecology.",
    image: "Use dense natural detail, crowded interiors, animals, weather and labouring bodies to place human custom inside a larger biological world.",
    editing: "Move between household drama, communal rule and animal activity, letting recurring seasonal rhythms accumulate toward the ritual ascent.",
    sound: "Layer work, insects, animals, weather, folk song and bodily effort so nature and community remain continuously present.",
    learning: "Study how environment, ritual and ensemble behavior can make a social system dramatically legible without modern explanatory framing.",
  },
  {
    id: "scenario_when_father_was_away_on_business_1985",
    title: "When Father Was Away on Business",
    originalTitle: "Otac na službenom putu",
    aliases: ["Otac na sluzbenom putu"],
    year: 1985,
    directors: ["Emir Kusturica"],
    genres: ["Drama"],
    tradition: "Yugoslav historical cinema, family tragicomedy and child-view political drama",
    tone: "Warm, unstable and quietly devastating",
    premise: "Let a young boy understand his father's political imprisonment only through family stories, adult evasions and everyday upheaval in postwar Yugoslavia.",
    screenplay: "Filter political repression through domestic misunderstandings, infidelity, humour and childhood observation rather than direct institutional exposition.",
    image: "Use family interiors, neighbourhood life, hospital rooms, celebrations and public spaces to keep history embedded in ordinary social texture.",
    editing: "Balance episodic family life with abrupt consequences, allowing comic and painful events to coexist without announcing tonal shifts.",
    sound: "Use songs, radio, family arguments, public gatherings and children's voices to let politics enter the home indirectly.",
    learning: "Understand how a child's limited viewpoint and family ensemble can dramatize political history through partial knowledge and daily consequence.",
  },
  {
    id: "scenario_pelle_the_conqueror_1987",
    title: "Pelle the Conqueror",
    originalTitle: "Pelle Erobreren",
    year: 1987,
    directors: ["Bille August"],
    genres: ["Drama"],
    tradition: "Nordic historical realism, migration drama and father-son coming-of-age epic",
    tone: "Harsh, humane and quietly hopeful",
    premise: "Follow a Swedish father and son arriving as impoverished labourers on a Danish farm where humiliation, solidarity and ambition shape the boy's first understanding of class and adulthood.",
    screenplay: "Build the coming-of-age arc through seasonal labour, shifting alliances, paternal weakness and the child's growing refusal to accept inherited limits.",
    image: "Use farm compounds, fields, worker quarters, coastlines and changing weather to make class hierarchy visible in space and labour.",
    editing: "Let seasons and work routines provide the large structure while intimate turning points steadily alter the father-son relationship.",
    sound: "Use wind, animals, tools, communal meals, commands and restrained music to preserve the material weight of farm life.",
    learning: "Study how historical production design, seasonal structure and a child-centred relationship can carry a large social narrative.",
  },
  {
    id: "scenario_central_station_1998",
    title: "Central Station",
    originalTitle: "Central do Brasil",
    aliases: ["Central do Brasil"],
    year: 1998,
    directors: ["Walter Salles"],
    genres: ["Drama"],
    tradition: "Brazilian road cinema, social realism and reluctant-caregiver melodrama",
    tone: "Wary, humane and gradually open",
    premise: "Send a cynical letter writer and an orphaned boy from a crowded Rio station into Brazil's interior, where a practical journey toward the boy's father changes their capacity for trust.",
    screenplay: "Build the relationship through bargaining, betrayal, necessity and small acts of care rather than immediate sentimentality.",
    image: "Contrast the compression of the station with buses, roads, pilgrimage spaces and open interior landscapes as the pair's relationship changes.",
    editing: "Use the road structure to alternate movement, temporary communities and intimate pauses while keeping the search objective clear.",
    sound: "Layer station crowds, buses, letters read aloud, religious gatherings, regional ambience and silence to connect private longing with public space.",
    learning: "Examine how a road movie can transform character through geography, practical dependence and encounters with wider social worlds.",
  },
  {
    id: "scenario_eternity_and_a_day_1998",
    title: "Eternity and a Day",
    originalTitle: "Mia aioniotita kai mia mera",
    aliases: ["Mia aioniótita kai mia méra"],
    year: 1998,
    directors: ["Theo Angelopoulos"],
    genres: ["Drama"],
    tradition: "Greek modernist cinema, memory journey and long-take historical meditation",
    tone: "Elegiac, suspended and searching",
    premise: "Follow a dying poet through one final day as a chance encounter with a refugee child opens passages between present streets, remembered love, language and unfinished responsibility.",
    screenplay: "Allow present action, memory and imagined history to coexist without conventional flashback signals, held together by the poet's final-day movement.",
    image: "Use extended tracking shots, weather, borders, coastlines and choreographed public space to make time and history visible inside the frame.",
    editing: "Favor long internal development within shots and sparse transitions that permit different times to meet in continuous cinematic space.",
    sound: "Use distant voices, sea, traffic, music, poetry and atmospheric silence to connect memory with the present journey.",
    learning: "Study how long takes, fluid temporal boundaries and landscape can turn a final-day narrative into a meditation on memory and history.",
  },
  {
    id: "scenario_head_on_2004",
    title: "Head-On",
    originalTitle: "Gegen die Wand",
    aliases: ["Gegen die Wand"],
    year: 2004,
    directors: ["Fatih Akin"],
    genres: ["Drama", "Romance"],
    tradition: "German-Turkish transnational cinema, volatile romance and punk-inflected identity drama",
    tone: "Furious, intimate and self-destructive",
    premise: "Bind two damaged German Turks in a marriage of convenience that becomes an unstable love story shaped by freedom, family expectation, addiction and violence.",
    screenplay: "Let the arrangement change through impulsive action and accumulating consequence, refusing to turn either protagonist into a simple victim or rescuer.",
    image: "Move between cramped apartments, clubs, streets, hospitals and Istanbul spaces with a direct physical attention to bodies and emotional damage.",
    editing: "Use sharp transitions, performance energy and musical interludes to move between reckless momentum, rupture and aftermath.",
    sound: "Combine punk, Turkish music, club noise, family voices and sudden silence to express divided belonging and volatile intimacy.",
    learning: "Understand how performance, music and abrupt consequence can sustain a transnational romance without smoothing its contradictions.",
  },
  {
    id: "scenario_vera_drake_2004",
    title: "Vera Drake",
    originalTitle: "Vera Drake",
    year: 2004,
    directors: ["Mike Leigh"],
    genres: ["Crime", "Drama"],
    tradition: "British social realism, ensemble family drama and morally complex historical procedure",
    tone: "Tender, restrained and crushing",
    premise: "Follow a generous working-class woman in 1950s London whose secret practice of helping women end pregnancies collides with police procedure and the fragile stability of her family.",
    screenplay: "Build a full domestic and social world before the investigation, so legal consequences fracture relationships the audience already understands in detail.",
    image: "Use compact homes, workplaces, police rooms and muted period interiors to make class difference and institutional pressure spatially concrete.",
    editing: "Allow ensemble routines and overlapping visits to accumulate patiently, then tighten around arrest, questioning and family disclosure.",
    sound: "Use household work, tea, footsteps, restrained conversation, police formality and silence to reveal how ordinary life changes under accusation.",
    learning: "Study how ensemble preparation, historical detail and procedural escalation can create moral complexity without didactic speeches.",
  },
  {
    id: "scenario_the_wrestler_2008",
    title: "The Wrestler",
    originalTitle: "The Wrestler",
    year: 2008,
    directors: ["Darren Aronofsky"],
    genres: ["Drama", "Sport"],
    tradition: "American independent realism, performance-body drama and late-career character study",
    tone: "Bruised, intimate and unsentimental",
    premise: "Follow an ageing professional wrestler trying to live beyond the ring as physical damage, insecure work and failed relationships make his public persona easier to sustain than ordinary life.",
    screenplay: "Build the character through repeated attempts at work, intimacy and family repair, letting each compromise reveal why performance remains his refuge.",
    image: "Stay close to the body through backstage corridors, gyms, supermarkets, clubs and modest homes, contrasting spectacle with exhausted routine.",
    editing: "Alternate preparation, performance and aftermath so the cost of each return to the ring remains visible rather than abstract.",
    sound: "Use crowd roar, entrance music, breathing, impacts, fluorescent workplaces and private quiet to separate persona from lived vulnerability.",
    learning: "Examine how embodied performance, close observation and repeated failure can build a character study around labour, identity and physical consequence.",
  },
  {
    id: "scenario_the_milk_of_sorrow_2009",
    title: "The Milk of Sorrow",
    originalTitle: "La teta asustada",
    aliases: ["La teta asustada"],
    year: 2009,
    directors: ["Claudia Llosa"],
    genres: ["Drama"],
    tradition: "Peruvian art cinema, inherited-trauma allegory and ritualized social realism",
    tone: "Intimate, uncanny and cautiously liberating",
    premise: "Follow a young woman carrying inherited fear from Peru's political violence as her mother's death, domestic work and private songs force her toward contact with the world outside.",
    screenplay: "Let trauma appear through behavior, family belief, bodily protection and unequal labour rather than explanatory diagnosis.",
    image: "Contrast enclosed rooms, wedding rituals, wealthy interiors and dry landscapes, using objects and bodily distance as recurring emotional signs.",
    editing: "Move patiently between mourning, work and ritual, allowing small acts of agency to alter the film's emotional direction.",
    sound: "Use improvised song, domestic ambience, ceremony, silence and withheld speech as the protagonist's most direct form of expression.",
    learning: "Study how song, ritual, allegory and restrained performance can dramatize inherited trauma while preserving cultural and personal specificity.",
  },
] as const satisfies readonly ModernCanonExpansionDefinition[];

const IDENTITY_GUARDED_IDS: ReadonlySet<string> = new Set(
  festivalWinners1981To2009ExpansionDefinitions.map((definition) => definition.id),
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

export function scenarioMatchesFestivalWinners1981To2009Definition(
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

export function getFestivalWinners1981To2009ExpansionDefinition(
  scenario: HistoricalFilmScenario,
): ModernCanonExpansionDefinition | undefined {
  return festivalWinners1981To2009ExpansionDefinitions.find((definition) => (
    scenarioMatchesFestivalWinners1981To2009Definition(scenario, definition)
  ));
}

export function mergeFestivalWinners1981To2009Expansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of festivalWinners1981To2009ExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesFestivalWinners1981To2009Definition(scenario, definition))) continue;
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
    status: "manual_festival_winner_1981_2009_case_needs_source_verification",
    source: {
      list_id: "manual_festival_winners_1981_2009_expansion_2026",
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
      themes: ["festival_winner_cinema", "international_film_history", "craft_consequence"],
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
  if (genres.some((genre) => ["Action", "Adventure", "War", "Western", "Sport"].includes(genre))) return "action_adventure_production";
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
