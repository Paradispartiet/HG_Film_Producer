import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import type { ModernCanonExpansionDefinition } from "./modernCanonExpansion.js";

export const scandinavianEuropeanExpansionDefinitions = [
  {
    id: "scenario_the_phantom_carriage_1921", title: "The Phantom Carriage", originalTitle: "Körkarlen", aliases: ["Korkarlen"], year: 1921,
    directors: ["Victor Sjöström"], genres: ["Drama", "Fantasy", "Horror"], tradition: "Swedish silent cinema, supernatural morality tale and layered flashback construction", tone: "Haunted, severe and compassionate",
    premise: "Stage a New Year's Eve encounter with death in which a violent drunk is forced to witness the damage he has caused before the final stroke of midnight.", screenplay: "Build nested recollections and repeated viewpoints around a single night so moral consequence emerges through structure rather than lecture.", image: "Use double exposure, nocturnal streets, spectral vehicles and expressive interiors to make the supernatural physically share the frame with ordinary life.", editing: "Clarify stories within stories through visual anchors and repeated actions while preserving the feeling of time folding back on itself.", sound: "Design a modern accompaniment around bells, wheels, wind, silence and restrained motifs without flattening the film's visual rhythm.", learning: "Study how silent-era effects, nested flashback and moral suspense can form one coherent production system."
  },
  {
    id: "scenario_ordet_1955", title: "Ordet", originalTitle: "Ordet", aliases: ["The Word"], year: 1955,
    directors: ["Carl Theodor Dreyer"], genres: ["Drama"], tradition: "Danish spiritual modernism, chamber drama and long-take performance cinema", tone: "Austere, intimate and transcendent",
    premise: "Hold a farming family inside conflicts of faith, reason and grief until an apparently impossible act forces every certainty to be tested.", screenplay: "Let belief systems collide through family relationships and practical events, reserving the central miracle for the end of a rigorously prepared dramatic line.", image: "Use restrained camera movement, sparse interiors, deep staging and patient faces so small shifts in conviction become visible.", editing: "Favor long internal scene development and exact transitions between rooms, arguments and waiting rather than explanatory montage.", sound: "Keep voices, footsteps, wind and domestic quiet exposed so faith and doubt are carried by performance and space.", learning: "Understand how duration, blocking and controlled performance can make metaphysical conflict concrete."
  },
  {
    id: "scenario_persona_1966", title: "Persona", originalTitle: "Persona", year: 1966,
    directors: ["Ingmar Bergman"], genres: ["Drama", "Thriller"], tradition: "Swedish psychological modernism, identity fracture and self-reflexive cinema", tone: "Intimate, unstable and confrontational",
    premise: "Confine a silent actor and a talkative nurse in close proximity until confession, projection and resentment make their identities increasingly difficult to separate.", screenplay: "Build power through speech and silence, allowing repeated stories and shifting interpretation to destabilize who controls the relationship.", image: "Use extreme close-ups, stark contrast, split faces and visible film material to turn portraiture into psychological conflict.", editing: "Interrupt continuity with repetitions, ruptures and mirrored passages while keeping the emotional contest legible.", sound: "Make silence an active refusal and expose breath, voice, room tone and abrupt sonic breaks as part of the identity struggle.", learning: "Study how face, silence and formal rupture can replace conventional plot as the main dramatic engine."
  },
  {
    id: "scenario_the_match_factory_girl_1990", title: "The Match Factory Girl", originalTitle: "Tulitikkutehtaan tyttö", aliases: ["Tulitikkutehtaan tytto"], year: 1990,
    directors: ["Aki Kaurismäki"], genres: ["Comedy", "Drama"], tradition: "Finnish deadpan minimalism, proletarian melodrama and compressed revenge narrative", tone: "Dry, lonely and darkly exact",
    premise: "Follow a factory worker whose repetitive labour, exploitative home and failed romance harden into a quiet plan of retaliation.", screenplay: "Strip dialogue and incident to essentials so each humiliation and decision lands through accumulation rather than explanation.", image: "Frame machines, modest rooms, bars and still bodies with clean frontal compositions that make social confinement visible.", editing: "Use abrupt ellipses and short scenes to move from routine to revenge without sentimental cushioning.", sound: "Let factory machinery, popular songs, sparse dialogue and long silences carry class, desire and emotional distance.", learning: "Examine how minimal dialogue, deadpan framing and ellipsis can produce both social critique and black comedy."
  },
  {
    id: "scenario_insomnia_1997", title: "Insomnia", originalTitle: "Insomnia", year: 1997,
    directors: ["Erik Skjoldbjærg"], genres: ["Crime", "Drama", "Mystery", "Thriller"], tradition: "Norwegian psychological crime cinema, Arctic-noir atmosphere and compromised-investigator narrative", tone: "Bleached, tense and morally disorienting",
    premise: "Trap a detective beneath the sleepless northern summer as a murder investigation and his own fatal mistake gradually become the same problem.", screenplay: "Make the investigator conceal evidence while pursuing the killer, turning procedure into a tightening contest of mutual knowledge.", image: "Use overexposed daylight, pale interiors, fog and obstructed sightlines to reverse the usual darkness of noir.", editing: "Alternate investigative progress with insomnia, memory gaps and concealment so certainty becomes increasingly unstable.", sound: "Use gulls, distant traffic, breathing, hotel quiet and persistent environmental presence to make daylight oppressive.", learning: "Study how location, light and compromised point of view can reinvent detective-film suspense."
  },
  {
    id: "scenario_the_celebration_1998", title: "The Celebration", originalTitle: "Festen", aliases: ["Festen"], year: 1998,
    directors: ["Thomas Vinterberg"], genres: ["Drama"], tradition: "Danish Dogme 95, family chamber drama and digital immediacy", tone: "Volatile, exposed and brutally intimate",
    premise: "Turn a patriarch's birthday dinner into a public reckoning when his son uses the formal speech to reveal a hidden history of abuse.", screenplay: "Escalate through repeated attempts to restore ceremony while testimony, denial and family alliances keep breaking the event open.", image: "Use handheld digital proximity, available light, crowded rooms and imperfect reframing to remain inside the social crisis.", editing: "Cut with the unstable movement of the gathering, preserving awkward pauses, interruptions and sudden changes of allegiance.", sound: "Keep live voices, clinking tables, songs, room spill and technical roughness as part of the confrontation.", learning: "Understand how production restrictions and ensemble pressure can create immediacy rather than merely low-budget appearance."
  },
  {
    id: "scenario_songs_from_the_second_floor_2000", title: "Songs from the Second Floor", originalTitle: "Sånger från andra våningen", aliases: ["Sanger fran andra vaningen"], year: 2000,
    directors: ["Roy Andersson"], genres: ["Comedy", "Drama"], tradition: "Swedish tableau cinema, absurdist social allegory and studio-built urban world", tone: "Bleak, static and mordantly comic",
    premise: "Arrange a citywide collapse as a sequence of deadpan tableaux where debt, work, faith and public ritual reveal a society unable to explain its own misery.", screenplay: "Link recurring figures and situations through thematic accumulation rather than a conventional central plot.", image: "Build deep, fixed tableaux with pale colour, choreographed background action and architecture that traps every character in a social display.", editing: "Cut between self-contained scenes at the point where absurdity becomes recognition, letting repetition create the larger argument.", sound: "Use footsteps, distant traffic, murmured speech, offscreen activity and recurring song to extend each tableau beyond the frame.", learning: "Study how fixed-camera staging, production design and episodic structure can build a complete social world."
  },
  {
    id: "scenario_the_man_without_a_past_2002", title: "The Man Without a Past", originalTitle: "Mies vailla menneisyyttä", aliases: ["Mies vailla menneisyytta"], year: 2002,
    directors: ["Aki Kaurismäki"], genres: ["Comedy", "Drama", "Romance"], tradition: "Finnish deadpan humanism, working-class fable and minimalist romance", tone: "Tender, laconic and quietly hopeful",
    premise: "Let an amnesiac rebuild a life among people at the economic margins, discovering identity through work, music and practical solidarity rather than recovered biography.", screenplay: "Use simple tasks, restrained romance and community encounters to make a new life more important than the mystery of the old one.", image: "Frame containers, docks, charity rooms and modest interiors with saturated colour and frontal calm.", editing: "Move through clean ellipses and understated scene endings so kindness and humour arrive without emphasis.", sound: "Use live music, radio, trains, harbour ambience and sparse dialogue as the social connective tissue of the new community.", learning: "Examine how minimalism and production design can turn economic precarity into a humane modern fable."
  },
  {
    id: "scenario_oslo_august_31st_2011", title: "Oslo, August 31st", originalTitle: "Oslo, 31. august", aliases: ["Oslo 31 August"], year: 2011,
    directors: ["Joachim Trier"], genres: ["Drama"], tradition: "Norwegian urban realism, one-day recovery drama and subjective city portrait", tone: "Lucid, fragile and quietly devastating",
    premise: "Follow a man on temporary leave from rehabilitation through one day in Oslo as work, friendship and memory expose the distance between possible return and private despair.", screenplay: "Organize the day through appointments and encounters that reveal competing futures without turning recovery into a simple test of will.", image: "Move between institutional edges, cafés, streets, parks and apartments so the city carries both belonging and exclusion.", editing: "Use precise ellipses, subjective fragments and passing urban lives to widen the protagonist's isolation beyond his immediate conversations.", sound: "Layer city ambience, remembered voices, café conversation, music and sudden quiet to make Oslo an active emotional field.", learning: "Study how a one-day structure and subjective city sound can hold addiction, class and memory without melodramatic simplification."
  },
  {
    id: "scenario_force_majeure_2014", title: "Force Majeure", originalTitle: "Turist", aliases: ["Tourist"], year: 2014,
    directors: ["Ruben Östlund"], genres: ["Comedy", "Drama"], tradition: "Swedish social discomfort cinema, family crisis and controlled observational satire", tone: "Clinical, awkward and darkly comic",
    premise: "Keep a family at an Alpine resort after the father's instinctive flight from an apparent avalanche exposes a gap between his self-image and his behaviour.", screenplay: "Repeat the disputed event through conversation, witnesses and performance so the marriage becomes a trial of masculinity and narrative control.", image: "Use geometric resort spaces, wide compositions, reflective surfaces and spectacular landscapes that refuse to validate the characters' emotions.", editing: "Hold uncomfortable durations and return to routine after conflict, allowing embarrassment to become the central tension.", sound: "Use controlled avalanche blasts, grooming machinery, hotel ambience, Vivaldi and silence as recurring pressure cues.", learning: "Understand how duration, framing and repeated social explanation can turn one action into sustained psychological comedy."
  },
  {
    id: "scenario_woman_at_war_2018", title: "Woman at War", originalTitle: "Kona fer í stríð", aliases: ["Kona fer i strid"], year: 2018,
    directors: ["Benedikt Erlingsson"], genres: ["Comedy", "Drama", "Thriller"], tradition: "Icelandic eco-political cinema, musical meta-comedy and landscape action", tone: "Defiant, playful and urgent",
    premise: "Follow a choir director secretly sabotaging heavy industry as an unexpected adoption decision forces ecological commitment and private longing into the same timetable.", screenplay: "Cross practical sabotage, public investigation and adoption bureaucracy while keeping every choice tied to the protagonist's competing responsibilities.", image: "Use Icelandic landscapes, industrial infrastructure and visible musicians to combine action geography with self-aware narration.", editing: "Move briskly between planning, pursuit, domestic cover and institutional consequence without losing the physical logic of each action.", sound: "Place the on-screen band and traditional singers inside scenes so score, commentary and comic interruption become one system.", learning: "Study how landscape action, political stakes and visible music can coexist in a precise tonal design."
  },
  {
    id: "scenario_another_round_2020", title: "Another Round", originalTitle: "Druk", aliases: ["Druk"], year: 2020,
    directors: ["Thomas Vinterberg"], genres: ["Comedy", "Drama"], tradition: "Danish ensemble tragicomedy, midlife experiment and performance-centred realism", tone: "Euphoric, rueful and increasingly unstable",
    premise: "Let four teachers test a theory of constant mild intoxication until renewed confidence, professional change and escalating dependence become impossible to separate.", screenplay: "Structure the experiment through agreed stages, group comparison and unequal consequences rather than treating alcohol as a single moral symbol.", image: "Stay close to classrooms, homes, bars and bodies while allowing moments of movement and release to break the routine.", editing: "Track rising levels, repeated tests and divergent outcomes with an ensemble rhythm that can pivot from comedy to loss.", sound: "Use breath, glass, classroom noise, celebration, music and final dance as changing measures of vitality and control.", learning: "Examine how an ensemble experiment can organize tone, performance and consequence across comedy and tragedy."
  },
  {
    id: "scenario_the_worst_person_in_the_world_2021", title: "The Worst Person in the World", originalTitle: "Verdens verste menneske", year: 2021,
    directors: ["Joachim Trier"], genres: ["Comedy", "Drama", "Romance"], tradition: "Norwegian contemporary romance, chaptered self-portrait and subjective urban cinema", tone: "Restless, intimate and bittersweet",
    premise: "Follow a young woman through changing studies, work and relationships as freedom, commitment and time repeatedly alter what she thinks a life should become.", screenplay: "Use chapters, temporal jumps and shifts in relationship perspective to preserve contradiction instead of forcing a single coming-of-age lesson.", image: "Move through Oslo streets, apartments, parties and suspended subjective moments with a visual system that can pass from realism into interior fantasy.", editing: "Combine brisk life transitions with held emotional encounters and formal departures such as frozen time and direct narration.", sound: "Use city texture, intimate dialogue, music, voice-over and sudden quiet to mark the difference between possibility and consequence.", learning: "Study how chapter structure and subjective form can hold romance, mortality and indecision within one coherent character portrait."
  },
  {
    id: "scenario_l_atalante_1934", title: "L'Atalante", originalTitle: "L'Atalante", year: 1934,
    directors: ["Jean Vigo"], genres: ["Drama", "Romance"], tradition: "French poetic realism, barge romance and lyrical location cinema", tone: "Earthy, tender and dreamlike",
    premise: "Keep newlyweds aboard a working barge where routine, jealousy and the attraction of Paris threaten a marriage before either partner understands its terms.", screenplay: "Balance domestic friction, labour and separation with comic side characters and lyrical departures rather than a conventional romantic plot machine.", image: "Use waterways, cramped cabins, docks, fog and underwater imagery to make desire inseparable from movement and material life.", editing: "Move between tactile routine and sudden poetic association, especially when distance makes the lovers imagine one another.", sound: "Layer engines, water, cats, songs, city noise and intimate quiet so the barge remains a living world.", learning: "Study how location, working routine and lyrical montage can transform a small romance into poetic realism."
  },
  {
    id: "scenario_rome_open_city_1945", title: "Rome, Open City", originalTitle: "Roma città aperta", aliases: ["Roma citta aperta"], year: 1945,
    directors: ["Roberto Rossellini"], genres: ["Drama", "War"], tradition: "Italian neorealism, resistance ensemble and postwar location filmmaking", tone: "Immediate, communal and tragic",
    premise: "Follow civilians, resistance members and a priest through occupied Rome as ordinary survival and organized defiance converge under violent repression.", screenplay: "Distribute risk across an ensemble so political struggle remains embedded in family, housing, food, faith and daily movement.", image: "Use streets, damaged interiors, available locations and direct physical staging to keep history close to lived space.", editing: "Move quickly between households, resistance activity and pursuit while allowing sudden violence to break the rhythm of ordinary life.", sound: "Use street voices, crowds, vehicles, church spaces, interrogation rooms and abrupt silence to preserve collective presence.", learning: "Understand how production scarcity, location reality and ensemble structure can create historical urgency."
  },
  {
    id: "scenario_cleo_from_5_to_7_1962", title: "Cléo from 5 to 7", originalTitle: "Cléo de 5 à 7", aliases: ["Cleo de 5 a 7", "Cleo from 5 to 7"], year: 1962,
    directors: ["Agnès Varda"], genres: ["Comedy", "Drama", "Music"], tradition: "French Left Bank cinema, real-time city journey and feminist self-observation", tone: "Lively, anxious and gradually open",
    premise: "Follow a singer across Paris while she waits for medical results, moving from performance and superstition toward an encounter with another person's uncertainty.", screenplay: "Use near-real-time chapters and changing companions to let public image fall away through movement rather than revelation alone.", image: "Combine mirrors, streets, cafés, taxis and direct city observation so Paris records the protagonist's changing relation to being seen.", editing: "Keep clock time legible while allowing documentary interruptions, a film-within-the-film and shifts in subjective attention.", sound: "Use street noise, radio, conversation, rehearsal and live song to move between public performance and private fear.", learning: "Study how real time, city geography and changing spectatorship can produce a feminist character transformation."
  },
  {
    id: "scenario_the_conformist_1970", title: "The Conformist", originalTitle: "Il conformista", aliases: ["Il conformista"], year: 1970,
    directors: ["Bernardo Bertolucci"], genres: ["Drama"], tradition: "Italian political modernism, fascist memory drama and expressive production design", tone: "Elegant, cold and psychologically divided",
    premise: "Follow a man seeking normality through fascist service as an assassination assignment exposes how sexuality, fear and political obedience shape his self-invention.", screenplay: "Intercut mission, marriage and childhood memory so political conformity emerges from active personal construction rather than simple ideology.", image: "Use monumental architecture, patterned light, colour, mirrors and choreographed bodies to make power and repression visible in every environment.", editing: "Move fluidly across time and memory while preserving the forward pressure of the assignment.", sound: "Combine dance music, official spaces, trains, footsteps and controlled quiet to contrast social performance with private panic.", learning: "Examine how cinematography and nonlinear memory can turn political psychology into visual form."
  },
  {
    id: "scenario_jeanne_dielman_1975", title: "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles", originalTitle: "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles", year: 1975,
    directors: ["Chantal Akerman"], genres: ["Drama"], tradition: "Belgian feminist modernism, durational domestic cinema and fixed-frame observation", tone: "Exact, controlled and progressively destabilized",
    premise: "Observe three days in a widow's domestic routine until tiny disruptions reveal how labour, money, sexuality and time hold her life together.", screenplay: "Treat cooking, cleaning, errands and appointments as the central event structure, allowing deviation from routine to become dramatic action.", image: "Use fixed frontal frames, consistent camera height and complete domestic tasks to make space and duration measurable.", editing: "Cut according to rooms, routines and completed actions so the viewer can feel each change in order and timing.", sound: "Expose taps, dishes, footsteps, doors, appliances and silence without score, making household work the film's acoustic structure.", learning: "Study how duration and repetition can make invisible labour, control and breakdown dramatically legible."
  },
  {
    id: "scenario_the_double_life_of_veronique_1991", title: "The Double Life of Véronique", originalTitle: "La double vie de Véronique", aliases: ["The Double Life of Veronique", "La double vie de Veronique"], year: 1991,
    directors: ["Krzysztof Kieślowski"], genres: ["Drama", "Fantasy", "Music", "Romance"], tradition: "Polish-French metaphysical cinema, doubled identity and sensory narrative", tone: "Mysterious, luminous and emotionally intuitive",
    premise: "Connect two women in Poland and France who never knowingly meet yet seem to share a life through music, bodily intuition and unexplained grief.", screenplay: "Build correspondence through motifs, parallel decisions and felt consequence rather than causal explanation.", image: "Use coloured filters, reflections, glass, optical distortion and intimate movement to make perception itself the linking mechanism.", editing: "Match gestures, music and visual motifs across countries while preserving the asymmetry between the two lives.", sound: "Let vocal performance, composition, breathing and recurring musical material carry knowledge that dialogue cannot name.", learning: "Understand how motif, colour, music and parallel structure can sustain a metaphysical narrative without solving it."
  },
  {
    id: "scenario_beau_travail_1999", title: "Beau Travail", originalTitle: "Beau travail", year: 1999,
    directors: ["Claire Denis"], genres: ["Drama", "War"], tradition: "French postcolonial modernism, military body cinema and fragmented memory", tone: "Sensual, disciplined and repressed",
    premise: "Let a former Foreign Legion officer remember the jealousy and disciplinary obsession that destroyed his command when a gifted young recruit entered the unit.", screenplay: "Use memory fragments, ritual and withheld motive to turn a simple rivalry into a study of desire, authority and self-expulsion.", image: "Choreograph training bodies, desert landscapes, uniforms, stone and sea so labour and attraction occupy the same visual field.", editing: "Assemble drills, glances, punishment and recollection through rhythmic association rather than conventional military exposition.", sound: "Combine operatic music, pop, commands, breath, scraping ground and environmental silence to reveal competing inner states.", learning: "Study how choreography, landscape and fragmented narration can express repressed desire and institutional power."
  },
  {
    id: "scenario_toni_erdmann_2016", title: "Toni Erdmann", originalTitle: "Toni Erdmann", year: 2016,
    directors: ["Maren Ade"], genres: ["Comedy", "Drama"], tradition: "German social comedy, corporate observation and extended performance embarrassment", tone: "Awkward, humane and unpredictable",
    premise: "Send an intrusive father and his invented alter ego into his consultant daughter's professional life until embarrassment exposes the emotional cost of her self-control.", screenplay: "Build long encounters where jokes become tests of identity, class and intimacy, refusing a clean separation between comic setup and emotional consequence.", image: "Observe offices, apartments, hotels and parties with unforced compositions that let performance and social space generate the comedy.", editing: "Hold scenes beyond conventional punchlines so discomfort can change meaning several times before the cut.", sound: "Use corporate ambience, amateur music, awkward pauses, party noise and unpolished singing as direct emotional pressure.", learning: "Examine how long-form performance and social observation can produce comedy without sacrificing emotional complexity."
  },
  {
    id: "scenario_aftersun_2022", title: "Aftersun", originalTitle: "Aftersun", year: 2022,
    directors: ["Charlotte Wells"], genres: ["Drama"], tradition: "British memory cinema, father-daughter holiday portrait and digital-image recollection", tone: "Tender, sunlit and increasingly haunted",
    premise: "Reconstruct a childhood holiday through a daughter's partial memories of her young father, allowing ordinary pleasure and signs of private despair to coexist.", screenplay: "Organize the trip through fragments, repeated gestures and adult hindsight without converting memory into a solved diagnosis.", image: "Mix observational holiday imagery, camcorder material, reflections, low light and remembered nightclub space to distinguish kinds of seeing.", editing: "Let gaps, repetitions and delayed context transform apparently casual moments as the film approaches adult understanding.", sound: "Use resort ambience, recorded voices, pop songs, silence and distorted club music to connect memory with emotional afterimage.", learning: "Study how image formats, ellipsis and sound memory can reveal what a child witnessed but could not understand."
  },
] as const satisfies readonly ModernCanonExpansionDefinition[];

const IDENTITY_GUARDED_IDS: ReadonlySet<string> = new Set(
  scandinavianEuropeanExpansionDefinitions.map((definition) => definition.id),
);

function normalizeScandinavianEuropeanTitle(value: string): string {
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
  const scenarioDirectors = scenario.film.directors.map(normalizeScandinavianEuropeanTitle);
  return definition.directors
    .map(normalizeScandinavianEuropeanTitle)
    .some((director) => scenarioDirectors.includes(director));
}

export function scenarioMatchesScandinavianEuropeanDefinition(
  scenario: HistoricalFilmScenario,
  definition: ModernCanonExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;

  const scenarioTitles = [scenario.film.title, scenario.film.original_title]
    .map(normalizeScandinavianEuropeanTitle);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])]
    .map(normalizeScandinavianEuropeanTitle);
  if (!scenarioTitles.some((title) => definitionTitles.includes(title))) return false;

  if (!IDENTITY_GUARDED_IDS.has(definition.id)) return true;

  const normalizedEnglishTitle = normalizeScandinavianEuropeanTitle(definition.title);
  const identityTitles = [definition.originalTitle, ...(definition.aliases ?? [])]
    .map(normalizeScandinavianEuropeanTitle)
    .filter((title) => title && title !== normalizedEnglishTitle);
  const originalTitleMatches = identityTitles.includes(
    normalizeScandinavianEuropeanTitle(scenario.film.original_title),
  );

  return originalTitleMatches || directorsOverlap(scenario, definition);
}

export function getScandinavianEuropeanExpansionDefinition(
  scenario: HistoricalFilmScenario,
): ModernCanonExpansionDefinition | undefined {
  return scandinavianEuropeanExpansionDefinitions.find((definition) => (
    scenarioMatchesScandinavianEuropeanDefinition(scenario, definition)
  ));
}

export function mergeScandinavianEuropeanExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of scandinavianEuropeanExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesScandinavianEuropeanDefinition(scenario, definition))) continue;
    merged.push(createScandinavianEuropeanScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createScandinavianEuropeanScenario(
  definition: ModernCanonExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  const genreKeys = definition.genres.map(toGenreKey);
  return {
    id: definition.id,
    status: "manual_scandinavian_european_case_needs_source_verification",
    source: {
      list_id: "manual_scandinavian_european_expansion_2026",
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
      themes: ["scandinavian_and_european_cinema", "regional_film_history", "craft_consequence"],
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
