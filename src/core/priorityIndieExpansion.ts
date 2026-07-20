import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import type { ModernCanonExpansionDefinition } from "./modernCanonExpansion.js";

export const priorityIndieExpansionDefinitions = [
  {
    id: "scenario_blood_simple_1984",
    title: "Blood Simple",
    originalTitle: "Blood Simple",
    year: 1984,
    directors: ["Joel Coen"],
    genres: ["Crime", "Drama", "Thriller"],
    tradition: "American independent neo-noir and regional crime filmmaking",
    tone: "Dry, tense and morally disorienting",
    premise: "Build a small-scale crime spiral where suspicion, incomplete information and failed cleanup turn ordinary Texas spaces into traps.",
    screenplay: "Let each character act on a different version of events so misunderstanding becomes the engine of violence.",
    image: "Use spare rooms, roads, bars and stark object details to make geography and evidence carry suspense.",
    editing: "Restrict information, delay confirmation and let parallel actions collide through precise ellipsis.",
    sound: "Make footsteps, insects, engines, telephones and sudden quiet sharpen the threat around unseen actions.",
    learning: "Study how a contained independent crime film can create scale through viewpoint, objects and controlled suspense.",
  },
  {
    id: "scenario_desert_hearts_1985",
    title: "Desert Hearts",
    originalTitle: "Desert Hearts",
    year: 1985,
    directors: ["Donna Deitch"],
    genres: ["Drama", "Romance"],
    tradition: "American independent queer romance and period character drama",
    tone: "Warm, intimate and emotionally direct",
    premise: "Build a 1950s Nevada romance where a reserved visitor and a confident local woman negotiate desire, social expectation and the possibility of change.",
    screenplay: "Let attraction grow through conversation, observation and choices that gradually challenge the protagonist's planned life.",
    image: "Use desert openness, domestic interiors and social gathering spaces to contrast freedom with convention.",
    editing: "Protect performance and hesitation, allowing emotional decisions to emerge through accumulated encounters.",
    sound: "Use voices, cars, casino and bar ambience, country music and desert quiet as distinct social worlds.",
    learning: "Understand how location, period detail and performance can make a queer romance historically specific without reducing it to repression.",
  },
  {
    id: "scenario_metropolitan_1990",
    title: "Metropolitan",
    originalTitle: "Metropolitan",
    year: 1990,
    directors: ["Whit Stillman"],
    genres: ["Comedy", "Drama", "Romance"],
    tradition: "American independent dialogue comedy and urban ensemble chamber film",
    tone: "Wry, articulate and quietly melancholy",
    premise: "Follow a young outsider through a winter social circle where conversation, class anxiety and romantic misreading become the action.",
    screenplay: "Build scenes around argument, self-description and social interpretation rather than external plot mechanics.",
    image: "Use apartments, taxis and formal gatherings as contained stages for shifting alliances and awkward observation.",
    editing: "Hold ensemble conversations long enough for status and attraction to change inside the scene.",
    sound: "Keep precise dialogue, room tone and restrained music central to the comedy of social performance.",
    learning: "Study how an inexpensive ensemble film can turn language, etiquette and recurring interiors into a complete dramatic system.",
  },
  {
    id: "scenario_chameleon_street_1990",
    title: "Chameleon Street",
    originalTitle: "Chameleon Street",
    year: 1990,
    directors: ["Wendell B. Harris Jr."],
    genres: ["Comedy", "Drama"],
    tradition: "Black American independent satire, identity performance and essayistic crime film",
    tone: "Playful, unsettling and intellectually slippery",
    premise: "Construct a shape-shifting identity story in which a gifted impersonator moves through professions and institutions while narrating his own reinvention.",
    screenplay: "Use episodic role changes, direct address and unreliable self-explanation to question authenticity and social permission.",
    image: "Let costumes, workplaces, documents and performance styles visibly rebuild the protagonist from episode to episode.",
    editing: "Move between confession, satire and procedural incident without stabilizing one authoritative account.",
    sound: "Use voice-over, role-specific speech and abrupt tonal shifts to make language itself part of the disguise.",
    learning: "Understand how performance, narration and institutional codes can turn biography into a formally unstable satire.",
  },
  {
    id: "scenario_poison_1991",
    title: "Poison",
    originalTitle: "Poison",
    year: 1991,
    directors: ["Todd Haynes"],
    genres: ["Drama", "Horror", "Romance"],
    tradition: "New Queer Cinema, experimental anthology and genre pastiche",
    tone: "Provocative, fragmented and feverishly stylized",
    premise: "Intercut three radically different stories whose documentary, horror and prison-romance forms echo around desire, stigma and social control.",
    screenplay: "Build thematic correspondence across separate narratives instead of forcing them into a single literal plot.",
    image: "Give each strand a distinct visual grammar so genre history becomes part of the film's argument.",
    editing: "Create meaning through collision, repetition and contrast among the three narrative systems.",
    sound: "Differentiate testimony, melodrama, institutional space and bodily threat while allowing motifs to migrate across strands.",
    learning: "Study how anthology structure and borrowed genres can produce analysis through juxtaposition rather than explanation.",
  },
  {
    id: "scenario_mississippi_masala_1991",
    title: "Mississippi Masala",
    originalTitle: "Mississippi Masala",
    year: 1991,
    directors: ["Mira Nair"],
    genres: ["Drama", "Romance"],
    tradition: "Diasporic independent cinema and interracial romantic drama",
    tone: "Vivid, affectionate and socially alert",
    premise: "Build a romance between two families and histories shaped by migration, race, business and memories of displacement.",
    screenplay: "Let the central relationship expose distinct family loyalties and unresolved histories without making either community a backdrop.",
    image: "Connect motel rooms, small businesses, cars, family gatherings and remembered landscapes through color and social texture.",
    editing: "Move between romance, family conflict and historical memory so private choices remain connected to larger displacement.",
    sound: "Use multilingual conversation, popular music, community ambience and remembered voices to hold several cultural worlds together.",
    learning: "Understand how a romance can organize migration history, race and family economy through concrete places and relationships.",
  },
  {
    id: "scenario_gas_food_lodging_1992",
    title: "Gas Food Lodging",
    originalTitle: "Gas Food Lodging",
    year: 1992,
    directors: ["Allison Anders"],
    genres: ["Drama", "Romance"],
    tradition: "American regional independent cinema and female-centered family drama",
    tone: "Tender, restless and sun-worn",
    premise: "Follow a mother and two daughters in a desert town where work, fantasy, sexuality and the desire to leave pull them in different directions.",
    screenplay: "Build parallel coming-of-age pressures across generations while keeping family bonds active inside separate storylines.",
    image: "Use motels, diners, trailers, roads and desert light as lived material rather than picturesque background.",
    editing: "Interweave the three women's trajectories so longing and disappointment echo without becoming identical.",
    sound: "Let radio, vehicles, workplace noise, music and open-air quiet define the town's emotional limits.",
    learning: "Study how regional place and multiple female viewpoints can shape an ensemble independent film.",
  },
  {
    id: "scenario_reservoir_dogs_1992",
    title: "Reservoir Dogs",
    originalTitle: "Reservoir Dogs",
    year: 1992,
    directors: ["Quentin Tarantino"],
    genres: ["Crime", "Thriller"],
    tradition: "American independent crime chamber film and nonlinear genre revision",
    tone: "Volatile, talkative and claustrophobic",
    premise: "Keep the heist largely offscreen and trap the surviving criminals in a warehouse where suspicion and injury unravel the group.",
    screenplay: "Use withheld chronology, conflicting accounts and extended dialogue to turn aftermath into the main event.",
    image: "Make one industrial room, entrances, bodies and a few charged objects carry changing power relations.",
    editing: "Reorder time around revelations and character histories while preserving the pressure of the present standoff.",
    sound: "Use conversational rhythm, radio music, distant street space and sudden violence to create sharp tonal collisions.",
    learning: "Understand how a limited-location crime film can replace spectacle with structure, performance and information control.",
  },
  {
    id: "scenario_el_mariachi_1992",
    title: "El Mariachi",
    originalTitle: "El Mariachi",
    year: 1992,
    directors: ["Robert Rodriguez"],
    genres: ["Action", "Crime", "Thriller"],
    tradition: "Microbudget independent action cinema and resource-driven genre filmmaking",
    tone: "Kinetic, playful and lean",
    premise: "Build a mistaken-identity action story around one musician, one killer and a town where every available location and prop must work hard.",
    screenplay: "Keep objectives, pursuit and visual misunderstandings clear enough that limited resources become momentum rather than limitation.",
    image: "Use energetic coverage, strong silhouettes, practical locations and repeated objects to make action readable.",
    editing: "Construct speed and scale from concise setups, inserts, reaction shots and economical repetition.",
    sound: "Let guitar, gunfire, engines and sharply defined effects enlarge the film beyond what is visible.",
    learning: "Study how planning, reuse and editorial construction can turn severe production limits into a coherent action style.",
  },
  {
    id: "scenario_the_watermelon_woman_1996",
    title: "The Watermelon Woman",
    originalTitle: "The Watermelon Woman",
    year: 1996,
    directors: ["Cheryl Dunye"],
    genres: ["Comedy", "Drama", "Romance"],
    tradition: "Black lesbian independent cinema, mock-documentary and archival intervention",
    tone: "Funny, searching and self-reflexive",
    premise: "Follow a filmmaker researching an erased Black actress while her documentary process reshapes work, romance and her understanding of film history.",
    screenplay: "Combine fictional investigation, direct address, interviews and personal life so research becomes both plot and critique.",
    image: "Move deliberately between video diary, staged archive, workplace observation and romantic scenes without hiding the construction.",
    editing: "Let gaps, discoveries and fabricated evidence expose how archives determine who can be remembered.",
    sound: "Use direct speech, interview texture, music and production-room noise to keep authorship visible.",
    learning: "Understand how a film can invent an archive in order to reveal a real absence in cultural memory.",
  },
  {
    id: "scenario_george_washington_2000",
    title: "George Washington",
    originalTitle: "George Washington",
    year: 2000,
    directors: ["David Gordon Green"],
    genres: ["Drama"],
    tradition: "American regional independent cinema and lyrical youth ensemble drama",
    tone: "Dreamlike, fragile and morally unsettled",
    premise: "Build a child-centered community portrait where an accident, secrecy and heroic fantasy alter a group of young friends.",
    screenplay: "Use fragments, multiple children and reflective narration to connect ordinary play with guilt and imagined responsibility.",
    image: "Treat small-town streets, rail yards, abandoned spaces and summer weather as a tactile emotional world.",
    editing: "Allow episodes, pauses and associative images to accumulate around the event rather than forcing a conventional mystery.",
    sound: "Layer children's voices, trains, insects, industrial ambience and music into a memory-like environment.",
    learning: "Study how regional location, non-centralized viewpoint and lyrical rhythm can carry moral consequence.",
  },
  {
    id: "scenario_ghost_world_2001",
    title: "Ghost World",
    originalTitle: "Ghost World",
    year: 2001,
    directors: ["Terry Zwigoff"],
    genres: ["Comedy", "Drama"],
    tradition: "American independent comic adaptation and deadpan suburban character comedy",
    tone: "Acerbic, awkward and unexpectedly sad",
    premise: "Follow two friends leaving school as irony, work, collecting and an unlikely friendship expose different paths into adulthood.",
    screenplay: "Build comedy from observation and social mismatch while allowing the protagonist's judgments to isolate her.",
    image: "Use saturated storefronts, diners, bedrooms, signage and collected objects to make suburbia feel designed and estranged.",
    editing: "Balance episodic encounters with a gradual emotional separation between the central relationships.",
    sound: "Use dry dialogue, commercial ambience, records and carefully placed music to distinguish sincerity from pose.",
    learning: "Understand how adaptation, production design and deadpan performance can turn cultural detail into character conflict.",
  },
  {
    id: "scenario_fish_tank_2009",
    title: "Fish Tank",
    originalTitle: "Fish Tank",
    year: 2009,
    directors: ["Andrea Arnold"],
    genres: ["Drama"],
    tradition: "British social realism and embodied coming-of-age cinema",
    tone: "Immediate, volatile and vulnerable",
    premise: "Stay close to a teenage girl whose dancing, family conflict and attraction to her mother's partner narrow into dangerous choices.",
    screenplay: "Let desire, anger and limited opportunity emerge through behavior and unstable relationships rather than explanation.",
    image: "Use close mobile observation, housing-estate geography and bodies in motion to keep experience physical.",
    editing: "Follow action with present-tense urgency while allowing sudden shifts from freedom to confinement.",
    sound: "Make music, breath, arguments, traffic and domestic noise part of the protagonist's emotional space.",
    learning: "Study how proximity, performance and social environment can create a coming-of-age film without romanticizing precarity.",
  },
  {
    id: "scenario_pariah_2011",
    title: "Pariah",
    originalTitle: "Pariah",
    year: 2011,
    directors: ["Dee Rees"],
    genres: ["Drama"],
    tradition: "Black queer independent coming-of-age cinema",
    tone: "Intimate, pressured and self-possessed",
    premise: "Follow a Brooklyn teenager balancing family expectation, friendship, desire and the language needed to define herself.",
    screenplay: "Build conflict from code-switching between home, school, nightlife and private writing rather than one disclosure scene.",
    image: "Use distinct color, light and spatial behavior across social worlds while keeping faces and gesture central.",
    editing: "Let small acts of concealment and expression accumulate toward a choice about authorship of one's own life.",
    sound: "Use poetry, music, household speech and club ambience as different forms of identity and belonging.",
    learning: "Understand how performance, space and voice can map the pressure between private identity and social role.",
  },
  {
    id: "scenario_the_rider_2017",
    title: "The Rider",
    originalTitle: "The Rider",
    year: 2017,
    directors: ["Chloé Zhao"],
    genres: ["Drama", "Western"],
    tradition: "Contemporary regional independent cinema and community-based western realism",
    tone: "Open, tender and physically grounded",
    premise: "Follow a young rider after injury as work, family, horses and community force him to reconsider the identity built around rodeo.",
    screenplay: "Shape the drama around recovery, repeated tasks and real social bonds rather than a conventional comeback arc.",
    image: "Observe bodies, animals, landscape and labor with enough duration for skill and vulnerability to remain visible together.",
    editing: "Let routines and encounters gradually redefine what progress means without manufacturing triumph.",
    sound: "Use wind, horses, trucks, work sounds and restrained music to keep the world materially present.",
    learning: "Study how community, landscape and bodily limitation can revise the western hero without abandoning the form.",
  },
  {
    id: "scenario_columbus_2017",
    title: "Columbus",
    originalTitle: "Columbus",
    year: 2017,
    directors: ["Kogonada"],
    genres: ["Drama"],
    tradition: "American architectural modernism and contemplative independent drama",
    tone: "Calm, precise and emotionally suspended",
    premise: "Bring together two people delayed by family obligations in a town where modernist buildings become a language for attention and choice.",
    screenplay: "Let conversation, walking and repeated meetings reveal competing responsibilities without forcing romance or resolution.",
    image: "Use architecture, negative space, reflections and balanced static compositions to connect emotional distance with built form.",
    editing: "Create rhythm from entrances, pauses, returns and spatial correspondences rather than plot acceleration.",
    sound: "Keep dialogue, footsteps, traffic, room tone and quiet environmental detail clear and unforced.",
    learning: "Understand how architecture and composition can organize a character drama without becoming decorative background.",
  },
  {
    id: "scenario_the_souvenir_2019",
    title: "The Souvenir",
    originalTitle: "The Souvenir",
    year: 2019,
    directors: ["Joanna Hogg"],
    genres: ["Drama", "Romance"],
    tradition: "British autobiographical art cinema and memory-based relationship drama",
    tone: "Reserved, intimate and painfully retrospective",
    premise: "Follow a film student inside an unequal relationship where artistic ambition, class, secrecy and memory alter how experience is understood.",
    screenplay: "Build the relationship through partial knowledge, recurring conversations and omissions that the protagonist cannot yet interpret.",
    image: "Use apartments, film-school spaces, mirrors, windows and carefully held tableaux as containers for remembered experience.",
    editing: "Let ellipses and temporal gaps reproduce the incomplete understanding of living through the relationship.",
    sound: "Keep subdued speech, domestic quiet, music and offscreen absence active in the film's retrospective tension.",
    learning: "Study how autobiography can be shaped through distance, omission and precise reconstruction rather than explanatory confession.",
  },
  {
    id: "scenario_sound_of_metal_2019",
    title: "Sound of Metal",
    originalTitle: "Sound of Metal",
    year: 2019,
    directors: ["Darius Marder"],
    genres: ["Drama", "Music"],
    tradition: "American independent sensory drama and subjective sound cinema",
    tone: "Immersive, anxious and searching",
    premise: "Follow a drummer confronting sudden hearing loss as treatment, community and identity challenge his drive to restore his former life.",
    screenplay: "Organize the story around practical choices and changing definitions of recovery rather than a simple medical obstacle.",
    image: "Keep performance, hands, faces, tools and routines observable while sound perspective carries the largest subjective shifts.",
    editing: "Alternate external continuity with sensory transitions that make adaptation and relapse felt rather than explained.",
    sound: "Build the film around changing hearing perspectives, vibration, muffling, silence and the contrast between noise and stillness.",
    learning: "Understand how sound design can carry viewpoint, character change and ethical meaning as strongly as image.",
  },
  {
    id: "scenario_never_rarely_sometimes_always_2020",
    title: "Never Rarely Sometimes Always",
    originalTitle: "Never Rarely Sometimes Always",
    year: 2020,
    directors: ["Eliza Hittman"],
    genres: ["Drama"],
    tradition: "American independent procedural realism and adolescent social drama",
    tone: "Restrained, intimate and quietly urgent",
    premise: "Follow two teenagers traveling for medical care while transport, money, paperwork and social exposure make every practical step dramatic.",
    screenplay: "Build tension from procedure, limited resources and guarded communication instead of melodramatic escalation.",
    image: "Stay close to faces, bodies, waiting rooms, transit spaces and ordinary obstacles without turning vulnerability into spectacle.",
    editing: "Preserve duration around forms, queues, travel and interview questions so institutional pressure remains concrete.",
    sound: "Use transit noise, clinical rooms, sparse conversation and pauses to emphasize what cannot safely be said.",
    learning: "Study how procedural detail and restrained performance can create urgency while protecting a character's interiority.",
  },
  {
    id: "scenario_red_rocket_2021",
    title: "Red Rocket",
    originalTitle: "Red Rocket",
    year: 2021,
    directors: ["Sean Baker"],
    genres: ["Comedy", "Drama"],
    tradition: "American regional independent cinema and abrasive social comedy",
    tone: "Restless, comic and morally corrosive",
    premise: "Follow a charismatic drifter returning to a Gulf Coast town and rebuilding his life through persuasion, opportunism and self-serving fantasy.",
    screenplay: "Let charm and repetition reveal an unreliable protagonist whose plans reorganize everyone else's risk.",
    image: "Use roadside businesses, houses, refineries, open lots and bright daylight to keep social environment inseparable from behavior.",
    editing: "Maintain comic forward motion while allowing recurring patterns to expose exploitation beneath the energy.",
    sound: "Use local ambience, television, traffic, conversation and strategically repeated pop music as part of the protagonist's self-myth.",
    learning: "Understand how location, casting energy and tonal instability can make a social comedy both seductive and critical.",
  },
] as const satisfies readonly ModernCanonExpansionDefinition[];

function normalizePriorityIndieTitle(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function scenarioMatchesPriorityIndieDefinition(
  scenario: HistoricalFilmScenario,
  definition: ModernCanonExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;
  const scenarioTitles = [scenario.film.title, scenario.film.original_title].map(normalizePriorityIndieTitle);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])].map(normalizePriorityIndieTitle);
  return scenarioTitles.some((title) => definitionTitles.includes(title));
}

export function getPriorityIndieExpansionDefinition(
  scenario: HistoricalFilmScenario,
): ModernCanonExpansionDefinition | undefined {
  return priorityIndieExpansionDefinitions.find((definition) => (
    scenarioMatchesPriorityIndieDefinition(scenario, definition)
  ));
}

export function mergePriorityIndieExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of priorityIndieExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesPriorityIndieDefinition(scenario, definition))) continue;
    merged.push(createPriorityIndieScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createPriorityIndieScenario(
  definition: ModernCanonExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  const genreKeys = definition.genres.map(toGenreKey);
  return {
    id: definition.id,
    status: "manual_priority_indie_case_needs_source_verification",
    source: {
      list_id: "manual_priority_indie_completion_2026",
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
      screenplay: ["film_specific_structure", "social_and_historical_context", "character_pressure"],
      camera: ["film_specific_image_system", "spatial_design", "performance_viewpoint"],
      editing: ["film_specific_editing_method", "duration_and_rhythm", "information_control"],
      sound: ["film_specific_sound_method", "voice_music_and_silence"],
      themes: ["american_independent_cinema", "production_method", "craft_consequence"],
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
