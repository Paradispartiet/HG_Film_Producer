import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import type { ModernCanonExpansionDefinition } from "./modernCanonExpansion.js";

export const eastAsianAuteurExpansionDefinitions = [
  {
    id: "scenario_days_of_being_wild_1990",
    title: "Days of Being Wild",
    originalTitle: "A Fei zheng chuan",
    aliases: ["A Fei zheng zhuan"],
    year: 1990,
    directors: ["Wong Kar-wai"],
    genres: ["Crime", "Drama", "Romance"],
    tradition: "Hong Kong New Wave, urban memory cinema and modern romantic melodrama",
    tone: "Languid, intimate and emotionally unmoored",
    premise: "Follow a restless young man and the people pulled into his orbit as desire, abandonment and identity move through 1960s Hong Kong and beyond.",
    screenplay: "Build the drama from intersecting attachments, withheld histories and characters who enter one another's lives without resolving their own absences.",
    image: "Use interiors, mirrors, corridors, humid streets and repeated spatial motifs to make memory and emotional distance visible.",
    editing: "Let encounters echo across ellipses and shifting viewpoints so relationships feel remembered rather than simply narrated.",
    sound: "Use recurring music, clocks, footsteps, room tone and intimate voices to bind separate lives into one emotional atmosphere.",
    learning: "Study how mood, fragmented viewpoint and recurring spaces can organize an ensemble melodrama without conventional closure.",
  },
  {
    id: "scenario_raise_the_red_lantern_1991",
    title: "Raise the Red Lantern",
    originalTitle: "Da hong deng long gao gao gua",
    year: 1991,
    directors: ["Zhang Yimou"],
    genres: ["Drama", "History"],
    tradition: "Chinese Fifth Generation cinema, enclosed historical drama and ritualized visual design",
    tone: "Formal, oppressive and emotionally escalating",
    premise: "Confine a young woman inside a wealthy household where ritual, hierarchy and competition turn domestic space into a system of control.",
    screenplay: "Organize conflict through repeated household ceremonies, restricted information and shifting alliances among women living under the same authority.",
    image: "Use courtyards, symmetrical architecture, seasonal change, costume and red lantern light to map status and confinement.",
    editing: "Repeat rituals with changing consequences so small variations reveal the tightening structure of power.",
    sound: "Let commands, footsteps, ceremonial music, percussion and courtyard silence make authority audible before it becomes visible.",
    learning: "Understand how production design, repetition and spatial rules can carry political and psychological meaning in a historical chamber drama.",
  },
  {
    id: "scenario_vive_l_amour_1994",
    title: "Vive L'Amour",
    originalTitle: "Ai qing wan sui",
    aliases: ["Vive L’Amour"],
    year: 1994,
    directors: ["Tsai Ming-liang"],
    genres: ["Drama", "Romance"],
    tradition: "Taiwan New Cinema, urban alienation and minimalist slow cinema",
    tone: "Sparse, lonely and darkly comic",
    premise: "Bring three isolated people into the same vacant Taipei apartment while allowing their lives to overlap more physically than emotionally.",
    screenplay: "Build the film from routines, near encounters and unspoken desire rather than explanatory dialogue or a conventional romantic triangle.",
    image: "Hold bodies inside empty rooms, construction zones and anonymous urban spaces so architecture becomes the measure of isolation.",
    editing: "Use duration, repetition and delayed encounters to make absence and proximity equally dramatic.",
    sound: "Emphasize footsteps, doors, plumbing, traffic and long stretches without speech so the city is felt as an acoustic container.",
    learning: "Study how minimal dialogue, duration and empty architecture can transform everyday behavior into an urban emotional system.",
  },
  {
    id: "scenario_cyclo_1995",
    title: "Cyclo",
    originalTitle: "Xích lô",
    aliases: ["Xich lo"],
    year: 1995,
    directors: ["Trần Anh Hùng"],
    genres: ["Crime", "Drama"],
    tradition: "Vietnamese diasporic auteur cinema, urban crime melodrama and sensorial modernism",
    tone: "Feverish, violent and hypnotic",
    premise: "Follow a young cycle-rickshaw driver and his sister through debt, coercion and criminal networks in a city where labor and danger occupy the same streets.",
    screenplay: "Connect economic pressure, family vulnerability and criminal initiation through parallel experiences rather than a single heroic escape plot.",
    image: "Use saturated color, crowded streets, bodies, water, smoke and enclosed rooms to make urban pressure tactile.",
    editing: "Shift between observation, rupture and dreamlike intensity so violence emerges from the same environment as daily work.",
    sound: "Layer engines, bicycle movement, street commerce, music, breath and sudden silence into a dense subjective cityscape.",
    learning: "Understand how color, sound and bodily movement can carry social violence in an urban crime film without reducing place to background.",
  },
  {
    id: "scenario_happy_together_1997",
    title: "Happy Together",
    originalTitle: "Chun gwong cha sit",
    aliases: ["Chun gwong cha sit"],
    year: 1997,
    directors: ["Wong Kar-wai"],
    genres: ["Drama", "Romance"],
    tradition: "Hong Kong queer auteur cinema, diasporic romance and fragmented road melodrama",
    tone: "Volatile, tender and homesick",
    premise: "Follow two Hong Kong men in Argentina as repeated breakups, reconciliations and new friendships turn travel into emotional displacement.",
    screenplay: "Build the relationship through cycles of return, care, conflict and separation while allowing another connection to redefine the possibility of leaving.",
    image: "Move between black-and-white and color, cramped interiors, night streets and open landscapes to externalize changing emotional states.",
    editing: "Use repetition, voice-over, variable speed and abrupt temporal movement to make the relationship feel lived, recalled and unstable at once.",
    sound: "Use multilingual speech, recurring songs, city ambience and domestic quiet to contrast intimacy with geographic distance.",
    learning: "Study how format shifts, music and repeated relationship patterns can make exile and desire part of the film's production form.",
  },
  {
    id: "scenario_millennium_mambo_2001",
    title: "Millennium Mambo",
    originalTitle: "Qian xi man bo",
    aliases: ["Qianxi manbo"],
    year: 2001,
    directors: ["Hou Hsiao-hsien"],
    genres: ["Drama", "Romance"],
    tradition: "Taiwanese contemporary auteur cinema, nocturnal youth culture and memory narration",
    tone: "Drifting, melancholic and sensorial",
    premise: "Let a young woman look back on a destructive relationship and a floating nightlife world from a future that remains only partly defined.",
    screenplay: "Use retrospective voice-over, repeated departures and incomplete decisions to frame experience as memory before it has fully settled.",
    image: "Follow movement through clubs, apartments, corridors and blue-green night light so atmosphere becomes inseparable from character.",
    editing: "Let scenes unfold in long, gliding passages while narration and ellipsis create distance from the present-tense behavior.",
    sound: "Build the world from electronic music, club bass, street noise, soft speech and the separation between narrated memory and immediate space.",
    learning: "Understand how camera movement, nocturnal light and retrospective narration can turn youth culture into a study of time and self-recognition.",
  },
  {
    id: "scenario_infernal_affairs_2002",
    title: "Infernal Affairs",
    originalTitle: "Mou gaan dou",
    aliases: ["Wu jian dao", "Mou gaan dou"],
    year: 2002,
    directors: ["Andrew Lau", "Alan Mak"],
    genres: ["Crime", "Drama", "Thriller"],
    tradition: "Hong Kong crime cinema, dual-protagonist undercover thriller and precision genre construction",
    tone: "Tense, sleek and morally divided",
    premise: "Oppose a police officer inside a criminal organization and a criminal mole inside the police as each tries to expose the other without revealing himself.",
    screenplay: "Mirror the two protagonists through parallel duties, compromised loyalties and information traps that tighten around both identities.",
    image: "Use glass, rooftops, surveillance spaces, reflections and controlled urban geometry to visualize divided allegiance.",
    editing: "Crosscut parallel investigations and near discoveries with enough clarity that suspense comes from what each side knows at each moment.",
    sound: "Use phones, earpieces, coded signals, recordings and restrained music as active tools in the struggle over hidden identity.",
    learning: "Study how mirrored structure, information control and communication technology can drive a tightly engineered crime thriller.",
  },
  {
    id: "scenario_goodbye_dragon_inn_2003",
    title: "Goodbye, Dragon Inn",
    originalTitle: "Bu san",
    aliases: ["Bu san"],
    year: 2003,
    directors: ["Tsai Ming-liang"],
    genres: ["Comedy", "Drama"],
    tradition: "Taiwanese slow cinema, cinephile space and architectural elegy",
    tone: "Still, mournful and quietly comic",
    premise: "Spend the final screening night inside an old Taipei cinema where staff, spectators, ghosts and cruising bodies share a building that is about to close.",
    screenplay: "Construct the film from small movements, interrupted searches and spatial coexistence rather than plot-driven encounters.",
    image: "Use corridors, seats, stairways, leaking rooms and the glowing screen to make the theater itself the central character.",
    editing: "Hold shots beyond conventional action beats so duration reveals solitude, humor and the changing life of the building.",
    sound: "Let the film playing onscreen, rain, footsteps, chewing, doors and cavernous room tone connect visible and invisible occupants.",
    learning: "Understand how a single location, extreme duration and layered exhibition sound can turn filmgoing into both subject and dramatic method.",
  },
  {
    id: "scenario_a_touch_of_sin_2013",
    title: "A Touch of Sin",
    originalTitle: "Tian zhu ding",
    aliases: ["Tian zhu ding"],
    year: 2013,
    directors: ["Jia Zhangke"],
    genres: ["Action", "Drama"],
    tradition: "Chinese contemporary social cinema, episodic violence and genre-inflected realism",
    tone: "Angry, expansive and morally unsettled",
    premise: "Connect four stories across contemporary China in which labor, corruption, humiliation and isolation break into sudden violence.",
    screenplay: "Use separate protagonists and regions to build a national pattern while preserving the specific pressure behind each act.",
    image: "Place bodies, transport, workplaces and changing landscapes inside wide social geography while allowing genre imagery to erupt from realism.",
    editing: "Move between episodes through thematic and geographic links so accumulation matters more than a single causal plot.",
    sound: "Use machinery, transit, public spaces, animals, weapons and abrupt quiet to make violence feel embedded in everyday systems.",
    learning: "Study how episodic structure and genre rupture can connect individual violence to large-scale economic and social change.",
  },
  {
    id: "scenario_the_assassin_2015",
    title: "The Assassin",
    originalTitle: "Nie Yinniang",
    aliases: ["Nie yin niang"],
    year: 2015,
    directors: ["Hou Hsiao-hsien"],
    genres: ["Action", "Drama", "History"],
    tradition: "Taiwanese historical auteur cinema, wuxia revision and painterly duration",
    tone: "Precise, elusive and contemplative",
    premise: "Follow a trained assassin ordered to kill a provincial governor whose political and personal ties reopen the world she was removed from.",
    screenplay: "Keep political relationships and moral decisions legible through behavior, ritual and selective disclosure rather than explanatory plotting.",
    image: "Use layered interiors, landscape, fabric, smoke, distance and sudden movement to make observation more important than continuous combat coverage.",
    editing: "Let long preparations, offscreen events and brief action bursts create a rhythm of attention rather than escalation.",
    sound: "Use wind, birds, insects, fabric, footsteps, percussion and sparse dialogue to make the historical environment active around the protagonist.",
    learning: "Understand how a martial-arts film can shift emphasis from combat quantity to framing, duration, moral attention and historical space.",
  },
  {
    id: "scenario_long_days_journey_into_night_2018",
    title: "Long Day's Journey Into Night",
    originalTitle: "Di qiu zui hou de ye wan",
    aliases: ["Long Day’s Journey Into Night", "Diqiu zuihou de yewan"],
    year: 2018,
    directors: ["Bi Gan"],
    genres: ["Drama", "Mystery", "Romance"],
    tradition: "Chinese dream cinema, memory noir and immersive long-take modernism",
    tone: "Nocturnal, labyrinthine and hypnotic",
    premise: "Follow a man returning to Kaili in search of a lost woman until memory, investigation and dream merge into a new spatial reality.",
    screenplay: "Let objects, names, stories and places recur across uncertain time so the search becomes a structure for remembering rather than solving.",
    image: "Move from fragmented noir-like spaces into an extended continuous dream environment where camera movement remakes geography in real time.",
    editing: "Use the contrast between elliptical first-half construction and sustained second-half duration as the film's central formal event.",
    sound: "Layer rain, tunnels, rooms, voices, music and offscreen movement so sound guides the viewer through unstable memory and space.",
    learning: "Study how a film can use a major format and duration shift to transform memory narrative into embodied spatial experience.",
  },
] as const satisfies readonly ModernCanonExpansionDefinition[];

function normalizeEastAsianAuteurTitle(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function scenarioMatchesEastAsianAuteurDefinition(
  scenario: HistoricalFilmScenario,
  definition: ModernCanonExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;
  const scenarioTitles = [scenario.film.title, scenario.film.original_title].map(normalizeEastAsianAuteurTitle);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])].map(normalizeEastAsianAuteurTitle);
  return scenarioTitles.some((title) => definitionTitles.includes(title));
}

export function getEastAsianAuteurExpansionDefinition(
  scenario: HistoricalFilmScenario,
): ModernCanonExpansionDefinition | undefined {
  return eastAsianAuteurExpansionDefinitions.find((definition) => (
    scenarioMatchesEastAsianAuteurDefinition(scenario, definition)
  ));
}

export function mergeEastAsianAuteurExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of eastAsianAuteurExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesEastAsianAuteurDefinition(scenario, definition))) continue;
    merged.push(createEastAsianAuteurScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createEastAsianAuteurScenario(
  definition: ModernCanonExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  const genreKeys = definition.genres.map(toGenreKey);
  return {
    id: definition.id,
    status: "manual_east_asian_auteur_case_needs_source_verification",
    source: {
      list_id: "manual_east_asian_auteur_expansion_2026",
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
      themes: ["east_asian_auteur_cinema", "regional_film_history", "craft_consequence"],
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
