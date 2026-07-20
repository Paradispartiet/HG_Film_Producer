import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import type { ModernCanonExpansionDefinition } from "./modernCanonExpansion.js";

export const easternIberianBritishExpansionDefinitions = [
  {
    id: "scenario_ashes_and_diamonds_1958", title: "Ashes and Diamonds", originalTitle: "Popiół i diament", aliases: ["Popiol i diament"], year: 1958,
    directors: ["Andrzej Wajda"], genres: ["Drama", "War"], tradition: "Polish Film School, postwar political modernism and compressed historical tragedy", tone: "Charged, nocturnal and morally divided",
    premise: "Follow a young resistance fighter ordered to carry out an assassination on the final day of the Second World War while public celebration and private doubt close around him.", screenplay: "Compress political transition into one night and make each encounter test whether loyalty, survival or ordinary life can still guide the protagonist.", image: "Use ruined interiors, celebratory public spaces, deep shadows and symbolic objects to keep national history physically present in personal choices.", editing: "Move between mission procedure, social gathering and intimate hesitation while preserving the deadline of the assassination.", sound: "Layer speeches, music, fireworks, footsteps and sudden quiet so victory and violence occupy the same night.", learning: "Study how historical transition can be dramatized through a single conflicted assignment and a tightly controlled time frame."
  },
  {
    id: "scenario_daisies_1966", title: "Daisies", originalTitle: "Sedmikrásky", aliases: ["Sedmikrasky"], year: 1966,
    directors: ["Věra Chytilová"], genres: ["Comedy", "Drama"], tradition: "Czechoslovak New Wave, feminist absurdism and anarchic collage", tone: "Playful, abrasive and formally unruly",
    premise: "Let two young women decide that a spoiled world justifies their own escalating games of appetite, destruction and performance.", screenplay: "Build through repeated social provocations and variations rather than conventional character development or moral correction.", image: "Use colour shifts, graphic compositions, costume play, collage and deliberately artificial spaces to make rebellion visible in the film material.", editing: "Cut through jump cuts, fragmentation, repetition and visual jokes so disruption becomes the primary narrative rhythm.", sound: "Treat voices, music, mechanical noises and abrupt acoustic breaks as another layer of collage rather than stable realism.", learning: "Understand how editing, colour and performance can turn narrative refusal into a coherent political and comic form."
  },
  {
    id: "scenario_closely_watched_trains_1966", title: "Closely Watched Trains", originalTitle: "Ostře sledované vlaky", aliases: ["Ostre sledovane vlaky"], year: 1966,
    directors: ["Jiří Menzel"], genres: ["Comedy", "Drama", "War"], tradition: "Czechoslovak New Wave, literary adaptation and tragicomic wartime provincialism", tone: "Tender, awkward and quietly consequential",
    premise: "Place a sexually inexperienced railway apprentice inside a small station where comic routines and private embarrassment gradually meet the machinery of occupation and resistance.", screenplay: "Let everyday work, erotic anxiety and wartime danger coexist until a modest personal decision acquires irreversible political weight.", image: "Use station architecture, trains, uniforms, gestures and close observation of routine to keep history embedded in ordinary labour.", editing: "Balance relaxed comic episodes with the gradual tightening of risk, allowing the final action to emerge from accumulated character change.", sound: "Use whistles, wheels, telegraph equipment, station ambience and conversational pauses as both workplace texture and wartime pressure.", learning: "Study how comedy and ordinary routine can carry political history without losing tonal precision."
  },
  {
    id: "scenario_the_firemens_ball_1967", title: "The Firemen's Ball", originalTitle: "Hoří, má panenko", aliases: ["Hori ma panenko"], year: 1967,
    directors: ["Miloš Forman"], genres: ["Comedy", "Drama"], tradition: "Czechoslovak New Wave, institutional satire and ensemble social comedy", tone: "Chaotic, embarrassed and sharply observational",
    premise: "Turn a volunteer fire brigade's annual ball into a collapsing sequence of failed ceremony, petty theft, beauty-pageant confusion and public incompetence.", screenplay: "Escalate through practical attempts to preserve order, making every committee solution reveal a deeper institutional weakness.", image: "Crowd a provincial hall with bodies, tables, prizes and interrupted rituals so social disorder remains spatially readable.", editing: "Cut among simultaneous failures and reactions while protecting the ensemble geography and the accumulating comic embarrassment.", sound: "Use announcements, dance music, crowd murmur, applause and failed public address as the audible structure of institutional collapse.", learning: "Examine how ensemble staging and procedural repetition can make social satire concrete without explanatory speeches."
  },
  {
    id: "scenario_marketa_lazarova_1967", title: "Marketa Lazarová", originalTitle: "Marketa Lazarová", aliases: ["Marketa Lazarova"], year: 1967,
    directors: ["František Vláčil"], genres: ["Drama", "History"], tradition: "Czech historical modernism, medieval landscape epic and sensory narrative", tone: "Elemental, fragmented and severe",
    premise: "Immerse rival clans, religious power and a young woman's captivity in a medieval world governed by landscape, violence and unstable allegiance.", screenplay: "Organize the story through intersecting families, raids and spiritual conflict while allowing history to feel partially grasped rather than fully explained.", image: "Use snow, forests, mud, animals, layered widescreen compositions and tactile costume to make environment a governing force.", editing: "Join fragments, voices and abrupt temporal transitions so the audience experiences history as memory, ritual and immediate danger.", sound: "Layer wind, animals, chants, bells, breath and sparse music into a dense physical and spiritual environment.", learning: "Study how production design, landscape and fragmented narration can create historical experience beyond conventional exposition."
  },
  {
    id: "scenario_the_cremator_1969", title: "The Cremator", originalTitle: "Spalovač mrtvol", aliases: ["Spalovac mrtvol"], year: 1969,
    directors: ["Juraj Herz"], genres: ["Comedy", "Drama", "Horror"], tradition: "Czechoslovak dark modernism, grotesque psychological horror and political allegory", tone: "Elegant, macabre and increasingly deranged",
    premise: "Follow a self-satisfied crematorium worker whose rhetoric of purity and spiritual release makes him dangerously receptive to fascist advancement.", screenplay: "Let professional routine, family life and ideological seduction merge through the protagonist's own persuasive self-narration.", image: "Use wide-angle distortion, mirrors, repeated faces, ornate interiors and abrupt spatial shifts to make confidence feel pathological.", editing: "Create disorienting transitions through matched gestures, repeated dialogue and visual association so fantasy and action become difficult to separate.", sound: "Use cultured speech, ceremonial music, crematorium ambience and sudden tonal changes to turn politeness into threat.", learning: "Understand how subjective image and editing can expose the alliance between vanity, bureaucracy and political violence."
  },
  {
    id: "scenario_satantango_1994", title: "Sátántangó", originalTitle: "Sátántangó", aliases: ["Satantango"], year: 1994,
    directors: ["Béla Tarr"], genres: ["Drama"], tradition: "Hungarian slow cinema, long-take social collapse and circular literary adaptation", tone: "Bleak, hypnotic and darkly comic",
    premise: "Observe an impoverished rural community waiting to divide stolen money when the return of a supposedly dead manipulator reorganizes their hope and dependence.", screenplay: "Use repeated time, overlapping viewpoints and a tango-like forward-and-back structure rather than linear dramatic acceleration.", image: "Build extended black-and-white camera movements through rain, mud, interiors and collective movement so duration becomes material pressure.", editing: "Arrange long autonomous sequences and repeated events from altered perspectives, making chronology and social control visible through comparison.", sound: "Sustain wind, rain, footsteps, accordion music, bells and room ambience across long durations without using sound to hurry the image.", learning: "Study how extreme duration, camera movement and circular structure can become an exact system for social observation."
  },
  {
    id: "scenario_4_months_3_weeks_and_2_days_2007", title: "4 Months, 3 Weeks and 2 Days", originalTitle: "4 luni, 3 săptămâni și 2 zile", aliases: ["4 luni 3 saptamani si 2 zile"], year: 2007,
    directors: ["Cristian Mungiu"], genres: ["Drama"], tradition: "Romanian New Wave, procedural realism and late-socialist moral pressure", tone: "Immediate, restrained and relentlessly tense",
    premise: "Follow two students trying to arrange an illegal abortion in 1980s Romania as ordinary logistics expose coercion, scarcity and unequal risk.", screenplay: "Build tension from concrete tasks, withheld information and social obligations rather than thriller contrivance.", image: "Use long takes, available-looking light, cramped rooms and controlled distance so bodies remain inside institutional and interpersonal pressure.", editing: "Let scenes unfold in sustained real time, using ellipsis between procedures while refusing emotional shortcuts.", sound: "Keep traffic, corridors, hotel rooms, family dinner and offscreen activity present so the surrounding society never disappears.", learning: "Understand how procedural detail, duration and restricted viewpoint can create political tension through ordinary action."
  },
  {
    id: "scenario_landscape_in_the_mist_1988", title: "Landscape in the Mist", originalTitle: "Topio stin omichli", aliases: ["Topio stin omihli"], year: 1988,
    directors: ["Theo Angelopoulos"], genres: ["Drama"], tradition: "Greek modernism, mythic road cinema and choreographed long-take landscape", tone: "Melancholic, dreamlike and searching",
    premise: "Send two children across Greece in search of an absent father, allowing travel, performance and political memory to reshape the journey into modern myth.", screenplay: "Use episodic encounters and repeated departures while keeping the children's concrete desire as the emotional line through abstraction.", image: "Stage weather, roads, stations, industrial edges and collective movement in long composed takes where landscape carries history.", editing: "Connect large temporal and geographic ellipses through visual motifs and measured transitions rather than continuous travel explanation.", sound: "Use trains, rain, distant voices, music and open acoustic space to make absence and movement physically felt.", learning: "Study how a simple journey can support myth, national memory and long-take choreography without losing emotional clarity."
  },
  {
    id: "scenario_before_the_rain_1994", title: "Before the Rain", originalTitle: "Pred doždot", aliases: ["Pred dozdot"], year: 1994,
    directors: ["Milcho Manchevski"], genres: ["Drama", "War"], tradition: "Macedonian-British European co-production, circular war narrative and photographic modernism", tone: "Tense, lyrical and fatalistic",
    premise: "Link a monk, a photographer and divided communities across Macedonia and London as violence appears to move in circles rather than a straight line.", screenplay: "Build three connected sections whose chronology bends back on itself, using repeated objects and relationships to challenge simple causes.", image: "Contrast monastery, mountain villages, London streets and photographic images while keeping violence tied to place and viewpoint.", editing: "Use chapter transitions, echoes and temporal contradiction to create a circular structure that remains emotionally legible.", sound: "Layer prayer, city noise, rural ambience, gunfire and music so cultural distance and recurring conflict remain audible.", learning: "Examine how circular narrative and international production geography can complicate representations of war."
  },
  {
    id: "scenario_underground_1995", title: "Underground", originalTitle: "Podzemlje", aliases: ["Once Upon a Time There Was a Country"], year: 1995,
    directors: ["Emir Kusturica"], genres: ["Comedy", "Drama", "War"], tradition: "Balkan historical grotesque, carnivalesque epic and political black comedy", tone: "Frenetic, tragic and excessive",
    premise: "Follow friends, profiteers and an underground community across decades of Yugoslav history as deception turns war into a permanent social condition.", screenplay: "Use large temporal jumps, recurring betrayals and staged history while preserving the central machinery of manipulation.", image: "Fill cellars, celebrations, battle zones and theatrical spaces with mobile ensembles, animals, smoke and dense production design.", editing: "Drive rapidly between spectacle, farce and catastrophe while using recurring situations to expose historical repetition.", sound: "Make brass music, crowds, weapons, machinery and celebration collide so festivity and violence become inseparable.", learning: "Study how excess, ensemble staging and recurring spectacle can construct a contested historical epic."
  },
  {
    id: "scenario_no_mans_land_2001", title: "No Man's Land", originalTitle: "Ničija zemlja", aliases: ["Nicija zemlja"], year: 2001,
    directors: ["Danis Tanović"], genres: ["Comedy", "Drama", "War"], tradition: "Bosnian postwar black comedy, contained battlefield drama and institutional satire", tone: "Tense, absurd and bitterly controlled",
    premise: "Trap soldiers from opposing sides in one trench with an injured man lying on a mine while military command, media and international peacekeepers fail to resolve the situation.", screenplay: "Use the contained predicament to test shifting power, shared knowledge and institutional self-protection.", image: "Map the trench, surrounding fields and observation positions clearly so every movement changes the balance of danger.", editing: "Cross-cut the trench with command rooms, journalists and peacekeepers while keeping the mine's deadline central.", sound: "Use distant gunfire, radio communication, helicopters, argument and exposed silence to expand the war beyond the trench.", learning: "Understand how a single physical problem can organize black comedy, suspense and political critique."
  },
  {
    id: "scenario_quo_vadis_aida_2020", title: "Quo Vadis, Aida?", originalTitle: "Quo Vadis, Aida?", year: 2020,
    directors: ["Jasmila Žbanić"], genres: ["Drama", "History", "War"], tradition: "Bosnian historical reconstruction, civilian viewpoint and institutional failure drama", tone: "Urgent, contained and devastating",
    premise: "Follow a United Nations translator attempting to protect her family during the fall of Srebrenica while official language and military procedure close every route to safety.", screenplay: "Keep the historical catastrophe anchored to translation, access, queues, negotiations and rapidly narrowing choices.", image: "Use crowded compounds, gates, corridors and faces to make institutional space the central field of danger.", editing: "Move between public procedure and private attempts at rescue without allowing the audience knowledge unavailable to the protagonist to dissolve suspense.", sound: "Layer announcements, engines, crowd noise, radios, multilingual speech and sudden quiet so language itself becomes a survival tool.", learning: "Study how restricted civilian viewpoint and institutional procedure can shape ethical historical reconstruction."
  },
  {
    id: "scenario_viridiana_1961", title: "Viridiana", originalTitle: "Viridiana", year: 1961,
    directors: ["Luis Buñuel"], genres: ["Comedy", "Drama"], tradition: "Spanish-Mexican surrealist satire, anti-clerical melodrama and social grotesque", tone: "Austere, provocative and darkly comic",
    premise: "Follow a novice whose attempt at charity on a family estate produces exploitation, desire and a grotesque reversal of religious imagery.", screenplay: "Let moral intention collide with property, family history and social performance without offering a clean reformist solution.", image: "Use restrained black-and-white interiors, ritual objects, bodies and carefully staged tableaux to make satire emerge from composition.", editing: "Move plainly between devotional routine, domestic threat and social farce so shocking juxtapositions retain their force.", sound: "Use bells, prayer, classical music, popular music and room ambience to expose contradictions between sacred posture and material action.", learning: "Examine how controlled staging and symbolic reversal can turn melodrama into social and religious satire."
  },
  {
    id: "scenario_the_spirit_of_the_beehive_1973", title: "The Spirit of the Beehive", originalTitle: "El espíritu de la colmena", aliases: ["El espiritu de la colmena"], year: 1973,
    directors: ["Víctor Erice"], genres: ["Drama", "Fantasy"], tradition: "Spanish postwar memory cinema, childhood perception and poetic rural modernism", tone: "Hushed, mysterious and emotionally exact",
    premise: "Follow a child in 1940s rural Spain whose encounter with Frankenstein transforms local landscape, family silence and political absence into an imaginative mystery.", screenplay: "Let questions, games and partial understanding guide the story while adults remain emotionally and historically opaque.", image: "Use honey-coloured interiors, open plains, abandoned buildings, faces and thresholds to align the world with a child's watchful perception.", editing: "Connect daily routine, film memory and imagined presence through patient ellipses and visual association.", sound: "Use wind, train noise, classroom voices, domestic quiet and sparse music to make distance and secrecy tangible.", learning: "Study how childhood viewpoint, colour and environmental sound can carry historical memory without direct exposition."
  },
  {
    id: "scenario_cria_cuervos_1976", title: "Cría cuervos", originalTitle: "Cría cuervos", aliases: ["Cria cuervos"], year: 1976,
    directors: ["Carlos Saura"], genres: ["Drama"], tradition: "Spanish transition-era memory cinema, family allegory and subjective childhood drama", tone: "Intimate, haunted and quietly rebellious",
    premise: "Let a young girl interpret deaths, adult secrets and domestic authority through memory and fantasy inside a family shaped by the final years of dictatorship.", screenplay: "Move between present childhood, remembered scenes and imagined conversations without marking every boundary as objective fact.", image: "Use the family house, windows, corridors, photographs and repeated gestures to make private space hold political history.", editing: "Join memory, fantasy and present action through seamless transitions and recurring images rather than explanatory flashback cues.", sound: "Use household quiet, adult voices, remembered speech and recurring popular song as emotional and temporal anchors.", learning: "Understand how domestic space and subjective time can transform family drama into historical allegory."
  },
  {
    id: "scenario_all_about_my_mother_1999", title: "All About My Mother", originalTitle: "Todo sobre mi madre", year: 1999,
    directors: ["Pedro Almodóvar"], genres: ["Comedy", "Drama"], tradition: "Spanish melodrama, queer ensemble cinema and theatrical intertext", tone: "Vivid, compassionate and emotionally expansive",
    premise: "Follow a grieving mother from Madrid to Barcelona as she reconnects with theatre, friendship and people linked to her son's absent father.", screenplay: "Build an ensemble through entrances, disclosures and acts of care while allowing coincidence and performance to remain part of the melodramatic design.", image: "Use saturated colour, urban interiors, theatre spaces, costume and close performance framing to make emotion visibly constructed but never insincere.", editing: "Move confidently between grief, comedy and new relationships, using letters, performances and returns to organize the ensemble.", sound: "Layer dialogue, city ambience, theatre sound and music so public performance and private feeling continually reflect one another.", learning: "Study how colour, ensemble writing and theatrical reference can sustain a modern melodrama across tonal shifts."
  },
  {
    id: "scenario_tabu_2012", title: "Tabu", originalTitle: "Tabu", year: 2012,
    directors: ["Miguel Gomes"], genres: ["Drama", "Romance"], tradition: "Portuguese postcolonial memory cinema, silent-film play and divided narrative form", tone: "Wry, nostalgic and critically haunted",
    premise: "Move from contemporary Lisbon into a remembered colonial romance whose beautiful narration cannot erase the violence and privilege surrounding it.", screenplay: "Divide the film into contrasting sections and let retrospective voice reshape events rather than simply explain them.", image: "Use different black-and-white textures, landscape, domestic observation and silent-era visual play to distinguish present from constructed memory.", editing: "Shift from conversational contemporary rhythm to narrated image sequences where ellipsis and visual association dominate.", sound: "Separate voice-over, music and environmental effects from synchronized dialogue in the remembered section so memory feels both seductive and artificial.", learning: "Examine how a film can borrow silent-cinema form while critically staging colonial nostalgia and unreliable remembrance."
  },
  {
    id: "scenario_horse_money_2014", title: "Horse Money", originalTitle: "Cavalo Dinheiro", year: 2014,
    directors: ["Pedro Costa"], genres: ["Drama"], tradition: "Portuguese postcolonial digital cinema, Fontainhas memory and sculptural low-light portraiture", tone: "Nocturnal, monumental and haunted",
    premise: "Follow Ventura through hospital corridors, memories and encounters where personal trauma, revolution and displaced community occupy the same unstable present.", screenplay: "Build through testimony, repetition and apparition rather than causal plot, allowing historical time to gather around recurring bodies and spaces.", image: "Use deep shadow, hard directional light, static portraiture and monumental framing to transform institutional and abandoned spaces.", editing: "Connect encounters through memory logic, repeated phrases and spatial discontinuity while preserving the weight of each tableau.", sound: "Expose footsteps, voices, electrical hum, distant music and cavernous silence so unseen history remains present around the figures.", learning: "Study how digital low-light image, testimony and discontinuous space can create a collective historical portrait."
  },
  {
    id: "scenario_kes_1969", title: "Kes", originalTitle: "Kes", year: 1969,
    directors: ["Ken Loach"], genres: ["Drama"], tradition: "British social realism, regional working-class cinema and non-glamorized youth performance", tone: "Observant, tender and unsentimental",
    premise: "Follow a neglected Yorkshire schoolboy whose care for a kestrel provides discipline and possibility inside a world of family, school and labour pressure.", screenplay: "Build from daily routines and institutions, making the bond with the bird concrete rather than symbolic escape alone.", image: "Use regional locations, natural environments, classrooms, housing and close observation of training to ground every emotional change.", editing: "Let episodes accumulate around work, school and falconry while preserving abrupt social consequences.", sound: "Keep dialect, wind, fields, schoolrooms and household noise central so place and class remain audible.", learning: "Understand how location, regional speech and non-sentimental performance can shape social realism."
  },
  {
    id: "scenario_naked_1993", title: "Naked", originalTitle: "Naked", year: 1993,
    directors: ["Mike Leigh"], genres: ["Comedy", "Drama"], tradition: "British improvisation-based character cinema, urban nocturne and confrontational social drama", tone: "Volatile, bleakly funny and verbally aggressive",
    premise: "Follow an intelligent, destructive drifter through London encounters that turn wit, cruelty and vulnerability into unstable forms of control.", screenplay: "Build scenes from character collision, extended argument and shifting power rather than goal-driven plot.", image: "Use night streets, temporary interiors, institutional edges and close performance framing to keep the city inhospitable and exposed.", editing: "Hold conversations long enough for performance to reverse sympathy and dominance, then move abruptly into the next encounter.", sound: "Let dense speech, room tone, traffic and nocturnal ambience carry the film's aggression and isolation.", learning: "Study how performance development and sustained dialogue can generate dramatic structure without conventional plotting."
  },
  {
    id: "scenario_in_the_name_of_the_father_1993", title: "In the Name of the Father", originalTitle: "In the Name of the Father", year: 1993,
    directors: ["Jim Sheridan"], genres: ["Biography", "Drama"], tradition: "Irish-British political drama, wrongful-conviction narrative and family prison melodrama", tone: "Urgent, angry and emotionally direct",
    premise: "Follow Gerry Conlon from reckless youth through coerced confession, imprisonment and the long legal struggle to expose a miscarriage of justice.", screenplay: "Connect police procedure, courtroom evidence and the father-son relationship so institutional injustice remains personal without becoming only private tragedy.", image: "Contrast Belfast streets, interrogation rooms, prison spaces and court architecture while tracking the protagonist's changing physical and moral position.", editing: "Compress years through decisive legal and relational turning points while keeping the chain of evidence understandable.", sound: "Use interrogation pressure, prison ambience, courtroom language, public protest and period music to mark institutional and historical change.", learning: "Study how political history, legal procedure and family relationship can be integrated into one accessible dramatic structure."
  },
  {
    id: "scenario_hunger_2008", title: "Hunger", originalTitle: "Hunger", year: 2008,
    directors: ["Steve McQueen"], genres: ["Biography", "Drama"], tradition: "British-Irish prison modernism, bodily political cinema and austere historical reconstruction", tone: "Severe, tactile and confrontational",
    premise: "Reconstruct the Maze Prison protests and Bobby Sands's hunger strike through bodies, routines, institutional violence and one extended ethical argument.", screenplay: "Organize the film in distinct movements, shifting from collective prison conditions to concentrated dialogue and finally bodily decline.", image: "Use controlled compositions, material surfaces, repeated prison actions and unsparing physical detail without turning suffering into spectacle.", editing: "Alternate ritualized repetition with long uninterrupted duration, especially in the central conversation, then narrow time around physical deterioration.", sound: "Expose scraping, washing, breathing, corridors, voices and silence so bodily action and institutional space remain inseparable.", learning: "Examine how structure, duration and material detail can approach contested political history through embodied experience."
  },
  {
    id: "scenario_the_banshees_of_inisherin_2022", title: "The Banshees of Inisherin", originalTitle: "The Banshees of Inisherin", year: 2022,
    directors: ["Martin McDonagh"], genres: ["Comedy", "Drama"], tradition: "Irish tragicomedy, island chamber drama and friendship rupture as civil conflict", tone: "Dry, melancholy and increasingly macabre",
    premise: "Let one islander abruptly end a lifelong friendship, forcing the rejected friend, their neighbours and the community into an escalating contest of pride and injury.", screenplay: "Repeat visits, refusals and ultimatums so a simple break becomes a tightening chain of irreversible choices.", image: "Use cottages, roads, pub interiors, coastline and carefully separated figures to make emotional isolation visible inside expansive landscape.", editing: "Return to daily routes and conversations with altered stakes, allowing repetition to measure the friendship's collapse.", sound: "Use wind, sea, pub voices, fiddle music, bells and distant civil-war gunfire to connect private rupture with the island's wider atmosphere.", learning: "Study how repetition, landscape and black-comic escalation can turn a small relationship conflict into tragic structure."
  },
] as const satisfies readonly ModernCanonExpansionDefinition[];

const IDENTITY_GUARDED_IDS: ReadonlySet<string> = new Set(
  easternIberianBritishExpansionDefinitions.map((definition) => definition.id),
);

export function normalizeEasternIberianBritishTitle(value: string): string {
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
  const scenarioDirectors = scenario.film.directors.map(normalizeEasternIberianBritishTitle);
  return definition.directors
    .map(normalizeEasternIberianBritishTitle)
    .some((director) => scenarioDirectors.includes(director));
}

export function scenarioMatchesEasternIberianBritishDefinition(
  scenario: HistoricalFilmScenario,
  definition: ModernCanonExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;

  const scenarioTitles = [scenario.film.title, scenario.film.original_title]
    .map(normalizeEasternIberianBritishTitle);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])]
    .map(normalizeEasternIberianBritishTitle);
  if (!scenarioTitles.some((title) => definitionTitles.includes(title))) return false;
  if (!IDENTITY_GUARDED_IDS.has(definition.id)) return true;

  const normalizedEnglishTitle = normalizeEasternIberianBritishTitle(definition.title);
  const identityTitles = [definition.originalTitle, ...(definition.aliases ?? [])]
    .map(normalizeEasternIberianBritishTitle)
    .filter((title) => title && title !== normalizedEnglishTitle);
  const originalTitleMatches = identityTitles.includes(
    normalizeEasternIberianBritishTitle(scenario.film.original_title),
  );

  return originalTitleMatches || directorsOverlap(scenario, definition);
}

export function getEasternIberianBritishExpansionDefinition(
  scenario: HistoricalFilmScenario,
): ModernCanonExpansionDefinition | undefined {
  return easternIberianBritishExpansionDefinitions.find((definition) => (
    scenarioMatchesEasternIberianBritishDefinition(scenario, definition)
  ));
}

export function mergeEasternIberianBritishExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of easternIberianBritishExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesEasternIberianBritishDefinition(scenario, definition))) continue;
    merged.push(createEasternIberianBritishScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createEasternIberianBritishScenario(
  definition: ModernCanonExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  const genreKeys = definition.genres.map(toGenreKey);
  return {
    id: definition.id,
    status: "manual_eastern_iberian_british_case_needs_source_verification",
    source: {
      list_id: "manual_eastern_iberian_british_expansion_2026",
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
      themes: ["european_cinema", "regional_film_history", "craft_consequence"],
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
      "national_and_european_film_context_review",
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
