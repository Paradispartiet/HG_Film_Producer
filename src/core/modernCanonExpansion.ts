import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";

export type ModernCanonExpansionDefinition = {
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
};

export const modernCanonExpansionDefinitions = [
  {
    id: "scenario_sex_lies_and_videotape_1989", title: "sex, lies, and videotape", originalTitle: "sex, lies, and videotape", year: 1989,
    directors: ["Steven Soderbergh"], genres: ["Drama"], tradition: "American independent breakthrough and video-age chamber drama", tone: "Intimate, controlled and emotionally exposing",
    premise: "Build a contained relationship drama where confession, withholding and recorded testimony destabilize four interconnected lives.", screenplay: "Organize desire and deception through conversations whose power changes when private speech is recorded.", image: "Contrast composed domestic spaces with the direct, mediated intimacy of videotaped confession.", editing: "Let pauses, withheld information and shifts between live interaction and recorded material control disclosure.", sound: "Keep voices, room tone and the mechanical presence of recording central to intimacy and discomfort.", learning: "Understand how a small independent production can turn dialogue, technology and performance into its entire dramatic system."
  },
  {
    id: "scenario_paris_is_burning_1990", title: "Paris Is Burning", originalTitle: "Paris Is Burning", year: 1990,
    directors: ["Jennie Livingston"], genres: ["Documentary"], tradition: "Queer independent documentary and community portraiture", tone: "Vibrant, intimate and socially revealing",
    premise: "Construct a community documentary where ballroom performance, interviews and everyday life reveal identity, aspiration, kinship and exclusion.", screenplay: "Build thematic progression from testimony, terminology, competition and chosen-family structures rather than imposing a fictional arc.", image: "Move between observational ballroom footage, direct interviews and city environments while preserving the subjects' expressive control.", editing: "Interweave categories, performances and personal histories so explanation and lived experience illuminate one another.", sound: "Let voices define the film's knowledge while music, applause and room sound preserve the energy of the balls.", learning: "Study documentary authorship, access and community representation without reducing participants to examples."
  },
  {
    id: "scenario_slacker_1990", title: "Slacker", originalTitle: "Slacker", year: 1990,
    directors: ["Richard Linklater"], genres: ["Comedy", "Drama"], tradition: "American microbudget independent and episodic city cinema", tone: "Loose, conversational and intellectually restless",
    premise: "Make a city portrait that passes attention from one person to another instead of following a conventional protagonist.", screenplay: "Link brief encounters through geography, digression and handoffs rather than goal-driven plot.", image: "Use mobile location photography and readable Austin spaces to make wandering itself the organizing viewpoint.", editing: "Cut on encounters and departures so each marginal figure opens the door to the next scene.", sound: "Keep talk, street ambience and imperfect social proximity as the film's principal texture.", learning: "Understand how microbudget production and episodic structure can turn a local scene into a complete narrative form."
  },
  {
    id: "scenario_daughters_of_the_dust_1991", title: "Daughters of the Dust", originalTitle: "Daughters of the Dust", year: 1991,
    directors: ["Julie Dash"], genres: ["Drama", "History"], tradition: "Black American independent historical memory cinema", tone: "Lyrical, ancestral and sensorial",
    premise: "Build a multigenerational coastal drama where migration, memory and ancestral presence coexist inside one family gathering.", screenplay: "Use multiple voices, generations and temporal layers instead of forcing family history into a single explanatory viewpoint.", image: "Treat landscape, costume, bodies, food and natural elements as carriers of cultural memory and historical continuity.", editing: "Move associatively among present action, recollection and spiritual presence while preserving emotional orientation.", sound: "Layer distinct voices, music, wind, water and ritual sound into a shared memory field.", learning: "Connect independent historical filmmaking to cultural specificity, collective narration and embodied visual design."
  },
  {
    id: "scenario_barton_fink_1991", title: "Barton Fink", originalTitle: "Barton Fink", year: 1991,
    directors: ["Joel Coen"], genres: ["Comedy", "Drama", "Thriller"], tradition: "American studio satire, writer film and surreal chamber cinema", tone: "Claustrophobic, comic and nightmarishly unstable",
    premise: "Trap an idealistic playwright inside a decaying hotel and a studio assignment until creative ambition becomes psychological pressure.", screenplay: "Turn writer's block, class rhetoric and studio demands into escalating contradiction rather than a straightforward success narrative.", image: "Make wallpaper, corridors, heat and repeated hotel geometry express a world closing around the protagonist.", editing: "Let long conversational scenes fracture into ellipsis, nightmare logic and abrupt shifts of genre pressure.", sound: "Use room hum, distant activity, insects, plumbing and restrained music to make the hotel feel alive and hostile.", learning: "Study how production design and tonal instability can transform an industry satire into a subjective nightmare."
  },
  {
    id: "scenario_safe_1995", title: "Safe", originalTitle: "Safe", year: 1995,
    directors: ["Todd Haynes"], genres: ["Drama"], tradition: "American independent modernism and New Queer Cinema", tone: "Clinical, alienated and quietly frightening",
    premise: "Build a domestic illness drama where immaculate environments and social language make an unexplained bodily crisis more isolating.", screenplay: "Withhold diagnostic certainty and let institutions, self-help discourse and polite relationships compete to define the protagonist.", image: "Place the character small inside controlled interiors, suburban geometry and hygienic surfaces that appear increasingly unsafe.", editing: "Use repetition, distance and unemphatic transitions to let unease accumulate without conventional thriller escalation.", sound: "Make ventilation, traffic, household machinery and thin social conversation carry invisible threat.", learning: "Understand how framing, environment and ambiguity can turn social normality into a system of pressure."
  },
  {
    id: "scenario_secrets_and_lies_1996", title: "Secrets & Lies", originalTitle: "Secrets & Lies", aliases: ["Secrets and Lies"], year: 1996,
    directors: ["Mike Leigh"], genres: ["Comedy", "Drama"], tradition: "British social realism and performance-developed ensemble drama", tone: "Raw, compassionate and painfully comic",
    premise: "Stage a family reunion in which adoption, class, resentment and loneliness surface through ordinary conversation.", screenplay: "Build the dramatic structure from character histories, discoveries and confrontations that feel lived rather than mechanically plotted.", image: "Observe faces, domestic rooms and social gatherings with enough duration for power and embarrassment to shift inside the frame.", editing: "Protect performance rhythm and let long exchanges accumulate emotional reversals before cutting away.", sound: "Keep overlapping speech, breath, laughter, silence and domestic ambience central to family tension.", learning: "Study how rehearsal-led performance and social observation can generate complex ensemble dramaturgy."
  },
  {
    id: "scenario_cure_1997", title: "Cure", originalTitle: "Kyua", aliases: ["Kyua"], year: 1997,
    directors: ["Kiyoshi Kurosawa"], genres: ["Crime", "Horror", "Mystery", "Thriller"], tradition: "Japanese psychological horror and procedural uncertainty", tone: "Quiet, dislocated and existentially threatening",
    premise: "Construct a murder investigation where repeated crimes and unstable identity make explanation itself feel dangerous.", screenplay: "Use procedural inquiry to open larger questions about suggestion, memory and responsibility instead of closing the mystery cleanly.", image: "Hold figures inside deep, ordinary spaces and let offscreen areas, thresholds and duration produce dread.", editing: "Favor patient scene construction and unsettling ellipses over rapid shocks, preserving uncertainty between cause and effect.", sound: "Use water, flame, ventilation, distant traffic and abrupt quiet as recurring sensory triggers.", learning: "Understand how horror can emerge from duration, space and incomplete causality rather than visible spectacle."
  },
  {
    id: "scenario_platform_2000", title: "Platform", originalTitle: "Zhantai", aliases: ["Zhantai"], year: 2000,
    directors: ["Jia Zhangke"], genres: ["Drama", "History"], tradition: "Chinese independent cinema, Sixth Generation realism and social transition", tone: "Patient, communal and historically observant",
    premise: "Follow a provincial performance troupe across years of social and economic change without reducing history to exposition.", screenplay: "Let time, travel, work and changing relationships reveal transformation through accumulated everyday experience.", image: "Use long shots, real environments and spatial distance to place individual lives inside shifting public landscapes.", editing: "Employ large temporal ellipses and patient sequences so historical change is felt through what disappears and returns.", sound: "Use popular songs, announcements, performance music and ambient public space as markers of changing culture.", learning: "Study how duration, location and popular culture can make social history visible at human scale."
  },
  {
    id: "scenario_dancer_in_the_dark_2000", title: "Dancer in the Dark", originalTitle: "Dancer in the Dark", year: 2000,
    directors: ["Lars von Trier"], genres: ["Crime", "Drama", "Musical"], tradition: "European digital melodrama and anti-classical musical", tone: "Fragile, ecstatic and devastating",
    premise: "Build a tragic factory melodrama where a worker escapes unbearable reality through internally generated musical sequences.", screenplay: "Set practical sacrifice and legal catastrophe against fantasy numbers that express what ordinary dialogue cannot.", image: "Contrast unstable handheld realism with expanded multi-camera musical space and heightened rhythm.", editing: "Let realist scenes feel exposed and discontinuous while musical passages fragment movement into rhythmic viewpoints.", sound: "Transform factory machinery, trains and repeated work noise into the pulse of songs and imagined freedom.", learning: "Understand how radically different image and sound systems can embody reality and fantasy within one film."
  },
  {
    id: "scenario_the_sons_room_2001", title: "The Son's Room", originalTitle: "La stanza del figlio", aliases: ["The Sons Room", "La stanza del figlio"], year: 2001,
    directors: ["Nanni Moretti"], genres: ["Drama"], tradition: "Italian intimate family drama and restrained auteur realism", tone: "Domestic, grieving and quietly humane",
    premise: "Follow a family after sudden loss as routines, professional listening and private memory cease to function normally.", screenplay: "Structure grief through interrupted habits, divergent family responses and small encounters rather than a single cathartic cure.", image: "Keep homes, streets, consulting rooms and bodies grounded in ordinary scale while absence reshapes their meaning.", editing: "Use before-and-after contrast, repetition and measured ellipsis to show grief altering time.", sound: "Let domestic quiet, remembered music, conversation and withheld speech carry the family's changed emotional space.", learning: "Study how restrained performance and everyday routine can make bereavement dramatic without sensationalizing it."
  },
  {
    id: "scenario_tropical_malady_2004", title: "Tropical Malady", originalTitle: "Sud pralad", aliases: ["Sud pralad"], year: 2004,
    directors: ["Apichatpong Weerasethakul"], genres: ["Drama", "Fantasy", "Romance"], tradition: "Thai independent slow cinema, folklore and bifurcated narrative", tone: "Tender, mysterious and sensorial",
    premise: "Begin with an understated romance and transform it into a nocturnal forest encounter governed by folklore, desire and animal presence.", screenplay: "Use a major structural break to let the second half reimagine the emotional relation rather than continue it conventionally.", image: "Shift from everyday social spaces to dense darkness, limited visibility and attentive observation of the forest.", editing: "Allow pauses, blackness, repetition and discontinuity to make the two halves echo rather than explain one another.", sound: "Build the forest from insects, animals, breath, distant movement and silence until listening becomes orientation.", learning: "Understand how a film can change narrative system midway while preserving emotional and thematic continuity."
  },
  {
    id: "scenario_still_life_2006", title: "Still Life", originalTitle: "Sanxia haoren", aliases: ["Sanxia haoren"], year: 2006,
    directors: ["Jia Zhangke"], genres: ["Drama"], tradition: "Chinese digital realism and disappearing-landscape cinema", tone: "Observant, displaced and quietly surreal",
    premise: "Follow two searches through a city being dismantled and flooded, making physical transformation inseparable from broken relationships.", screenplay: "Use parallel journeys, work routines and incomplete encounters to connect personal absence with large-scale redevelopment.", image: "Record demolition, river geography, temporary labor and monumental infrastructure while allowing brief surreal ruptures.", editing: "Move patiently between parallel protagonists and let gaps in time mirror an unstable environment.", sound: "Layer demolition, boats, machinery, public announcements and popular music into the material history of the place.", learning: "Study how digital location filmmaking can preserve a disappearing landscape while remaining formally expressive."
  },
  {
    id: "scenario_secret_sunshine_2007", title: "Secret Sunshine", originalTitle: "Miryang", aliases: ["Miryang"], year: 2007,
    directors: ["Lee Chang-dong"], genres: ["Drama"], tradition: "South Korean social realism and moral-spiritual character drama", tone: "Intimate, volatile and spiritually unresolved",
    premise: "Follow a woman rebuilding life in a provincial city until grief, faith and forgiveness become impossible moral demands.", screenplay: "Let major reversals emerge from ordinary routines and relationships while refusing a simple redemptive arc.", image: "Observe the town, social gatherings and private breakdowns with grounded realism and close performance attention.", editing: "Give emotional turns full duration and allow belief, anger and exhaustion to contradict one another.", sound: "Use church music, public speech, everyday town ambience and sudden quiet to pressure inner experience.", learning: "Understand how performance-centered realism can hold grief, belief and moral contradiction without resolving them."
  },
  {
    id: "scenario_wendy_and_lucy_2008", title: "Wendy and Lucy", originalTitle: "Wendy and Lucy", year: 2008,
    directors: ["Kelly Reichardt"], genres: ["Drama"], tradition: "American minimalist independent realism and precarity cinema", tone: "Spare, compassionate and materially anxious",
    premise: "Build a survival drama from one stranded traveler, a missing dog and a chain of small economic obstacles.", screenplay: "Make modest practical setbacks accumulate until every choice reveals the narrowness of the protagonist's options.", image: "Use ordinary streets, parking lots, woods and restrained observation to keep material conditions visible.", editing: "Preserve waiting, walking and procedural effort while avoiding artificial escalation.", sound: "Let traffic, trains, footsteps, store ambience and quiet vocal behavior define the character's exposed world.", learning: "Study how minimal resources, precise locations and small stakes can reveal structural economic pressure."
  },
  {
    id: "scenario_poetry_2010", title: "Poetry", originalTitle: "Shi", aliases: ["Shi"], year: 2010,
    directors: ["Lee Chang-dong"], genres: ["Drama"], tradition: "South Korean social realism and lyrical moral drama", tone: "Gentle, searching and morally devastating",
    premise: "Follow an older woman studying poetry while memory loss and a concealed act of violence force attention into ethical conflict.", screenplay: "Interweave daily care, social negotiation, investigation and creative observation without turning poetry into escape.", image: "Attend to faces, river landscapes, domestic labor and small natural details through restrained realism.", editing: "Let moral information arrive gradually while repeated observation changes its meaning.", sound: "Use classroom speech, ordinary conversation, water, silence and the final poem as distinct modes of testimony.", learning: "Understand how attention to beauty can intensify rather than soften a film's confrontation with responsibility."
  },
  {
    id: "scenario_winter_sleep_2014", title: "Winter Sleep", originalTitle: "Kis Uykusu", aliases: ["Kış Uykusu", "Kis Uykusu"], year: 2014,
    directors: ["Nuri Bilge Ceylan"], genres: ["Drama"], tradition: "Turkish auteur chamber cinema and landscape modernism", tone: "Literary, wintry and morally abrasive",
    premise: "Confine an affluent former actor, his family and tenants inside a winter landscape where conversation exposes power and self-deception.", screenplay: "Build extended verbal confrontations in which each apparent moral position reveals another layer of vanity or dependency.", image: "Balance monumental Cappadocian exteriors with compressed interiors, firelight and faces held in social distance.", editing: "Allow long scenes to change direction through argument, silence and reaction rather than frequent cutting.", sound: "Use wind, fire, footsteps, room tone and measured dialogue to deepen enclosure and class tension.", learning: "Study how landscape, duration and extended dialogue can create epic scale without action spectacle."
  },
  {
    id: "scenario_burning_2018", title: "Burning", originalTitle: "Beoning", aliases: ["Beoning"], year: 2018,
    directors: ["Lee Chang-dong"], genres: ["Drama", "Mystery", "Thriller"], tradition: "South Korean literary adaptation, social mystery and ambiguity cinema", tone: "Suspended, sensual and quietly menacing",
    premise: "Build a triangular mystery from class difference, uncertain testimony and an absence that may or may not conceal violence.", screenplay: "Restrict information to an insecure viewpoint and let plausible explanations compete without final confirmation.", image: "Use peripheral action, dusk, glass, landscape and social spaces to make looking itself uncertain.", editing: "Stretch observation, delay causal links and let repetitions become suspicious only in retrospect.", sound: "Use ambient rural and urban space, jazz, phone calls and charged silence to preserve ambiguity.", learning: "Understand how adaptation, restricted viewpoint and social detail can sustain a mystery without solving it."
  },
  {
    id: "scenario_an_elephant_sitting_still_2018", title: "An Elephant Sitting Still", originalTitle: "Da xiang xi di er zuo", aliases: ["Da xiang xi di er zuo"], year: 2018,
    directors: ["Hu Bo"], genres: ["Drama"], tradition: "Chinese independent durational ensemble cinema", tone: "Bleak, immersive and emotionally compressed",
    premise: "Interweave four lives across one oppressive day as the idea of a distant motionless elephant becomes an imagined exit.", screenplay: "Connect separate crises through geography, coincidence and shared despair while keeping each perspective morally complicated.", image: "Stay close to moving bodies with shallow focus, obstructed space and long following shots that limit escape.", editing: "Build a continuous day from extended scenes and carefully timed intersections rather than rapid parallel montage.", sound: "Use traffic, corridors, footsteps, distant conflict and sparse music to sustain a heavy social atmosphere.", learning: "Study how duration, restricted visual space and ensemble structure can make systemic hopelessness physically felt."
  },
  {
    id: "scenario_happening_2021", title: "Happening", originalTitle: "L'evenement", aliases: ["L'événement", "L'evenement"], year: 2021,
    directors: ["Audrey Diwan"], genres: ["Drama", "History"], tradition: "French historical bodily realism and subjective adaptation", tone: "Immediate, controlled and increasingly desperate",
    premise: "Follow a student seeking an illegal abortion in 1960s France while time, law and social judgment close around her body.", screenplay: "Turn passing weeks, failed requests and practical risk into a tightening structure without shifting attention away from the protagonist.", image: "Keep a narrow subjective field, close physical observation and period environments that feel lived rather than displayed.", editing: "Use chapter-like time markers, ellipsis and escalating procedural detail to make delay dangerous.", sound: "Hold breath, bodily sound, institutional quiet and restrained ambience close to the protagonist's experience.", learning: "Understand how historical context can be expressed through embodied viewpoint and procedural suspense rather than exposition."
  },
  {
    id: "scenario_all_the_beauty_and_the_bloodshed_2022", title: "All the Beauty and the Bloodshed", originalTitle: "All the Beauty and the Bloodshed", year: 2022,
    directors: ["Laura Poitras"], genres: ["Biography", "Documentary", "History"], tradition: "Activist documentary, artist biography and archival political montage", tone: "Personal, investigative and confrontational",
    premise: "Connect an artist's life, communities and photographs to a contemporary campaign against institutional complicity.", screenplay: "Build a double structure in which biography and present-tense activism continually revise one another.", image: "Combine observational protest footage, photographs, archive, interviews and institutional spaces without flattening their different evidentiary roles.", editing: "Create argument through recurrence and juxtaposition while preserving chronology where accountability depends on it.", sound: "Let testimony, meeting audio, protest chants, silence and music move between private memory and public action.", learning: "Study how documentary montage can connect personal history, art and institutional power while keeping evidence inspectable."
  },
  {
    id: "scenario_dahomey_2024", title: "Dahomey", originalTitle: "Dahomey", year: 2024,
    directors: ["Mati Diop"], genres: ["Documentary"], tradition: "Postcolonial essay film, restitution documentary and speculative voice", tone: "Ceremonial, reflective and politically alert",
    premise: "Follow the return of royal treasures from France to Benin while objects, institutions and young citizens debate what restitution can mean.", screenplay: "Organize the journey through transport, installation, public discussion and a speculative object-voice rather than a single authoritative narrator.", image: "Observe crates, museums, streets, ceremonies and material surfaces with attention to how institutions frame cultural objects.", editing: "Set logistical process beside historical imagination and contemporary debate so no one layer closes the argument.", sound: "Combine institutional ambience, public voices, ceremonial sound and a transformed first-person voice for the displaced object.", learning: "Understand how documentary can make restitution a material process, a political debate and a problem of cinematic voice."
  },
  {
    id: "scenario_nickel_boys_2024", title: "Nickel Boys", originalTitle: "Nickel Boys", year: 2024,
    directors: ["RaMell Ross"], genres: ["Drama", "History"], tradition: "American historical adaptation and first-person experiential cinema", tone: "Immersive, fragmented and morally urgent",
    premise: "Adapt institutional abuse through two boys' lived viewpoints so history is encountered as partial perception rather than distant illustration.", screenplay: "Organize memory, friendship and historical aftermath through subjective fragments and delayed contextual understanding.", image: "Use first-person framing, exchanged viewpoints, tactile detail and archival material to place the spectator inside unstable experience.", editing: "Assemble perception, memory and later consequence through associative cuts that gradually clarify relationships and time.", sound: "Use offscreen voices, bodily proximity, institutional noise and environmental detail to extend the restricted image.", learning: "Study how radical point of view can reshape historical adaptation, ethics and audience identification."
  },
  {
    id: "scenario_taipei_story_1985", title: "Taipei Story", originalTitle: "Qing mei zhu ma", aliases: ["Qing mei zhu ma"], year: 1985,
    directors: ["Edward Yang"], genres: ["Drama"], tradition: "Taiwan New Cinema and urban modernism", tone: "Cool, intimate and socially dislocated",
    premise: "Follow a couple whose incompatible memories and ambitions reveal a rapidly changing Taipei.", screenplay: "Let work, family obligation, migration fantasies and failed communication erode the relationship through ordinary encounters.", image: "Use architecture, windows, traffic, offices and apartments to place private uncertainty inside urban transformation.", editing: "Favor ellipsis and restrained scene transitions so emotional and economic changes register indirectly.", sound: "Layer city traffic, television, phones, music and quiet interiors into the couple's fractured modern life.", learning: "Understand how Taiwan New Cinema connects urban space, social change and intimate alienation."
  },
  {
    id: "scenario_kagemusha_1980", title: "Kagemusha", originalTitle: "Kagemusha", year: 1980,
    directors: ["Akira Kurosawa"], genres: ["Drama", "History", "War"], tradition: "Japanese historical epic, color design and large-scale battlefield cinema", tone: "Ceremonial, tragic and visually monumental",
    premise: "Build a historical epic around a thief forced to impersonate a dead warlord while an entire political order depends on the performance.", screenplay: "Use impersonation, ritual and military strategy to turn identity into both private burden and public system.", image: "Coordinate widescreen formations, banners, armor, weather, landscape and bold color as readable political and emotional design.", editing: "Alternate ceremonial duration with sudden battlefield fragmentation while maintaining the hierarchy of forces.", sound: "Use hoofbeats, armor, wind, distant armies, silence and music to shift between ritual control and collapse.", learning: "Study how performance, color, landscape and mass choreography can organize a historical epic."
  },
  {
    id: "scenario_a_city_of_sadness_1989", title: "A City of Sadness", originalTitle: "Beiqing chengshi", aliases: ["Beiqing chengshi"], year: 1989,
    directors: ["Hou Hsiao-hsien"], genres: ["Drama", "History"], tradition: "Taiwan New Cinema, family chronicle and historical memory", tone: "Elliptical, mournful and historically layered",
    premise: "Trace political violence and regime change through one family whose experiences are partial, dispersed and often offscreen.", screenplay: "Let domestic events, letters, absence and multiple languages carry history without reducing it to a single hero's account.", image: "Use long takes, fixed viewpoints, doorways and deep domestic space to hold private life against public upheaval.", editing: "Employ ellipsis and temporal gaps so lost events and missing people become part of historical experience.", sound: "Use radio, multilingual dialogue, silence, music and offscreen violence to widen the frame beyond what can be shown.", learning: "Understand how national trauma can be represented through family space, ellipsis and incomplete witnessing."
  },
  {
    id: "scenario_farewell_my_concubine_1993", title: "Farewell My Concubine", originalTitle: "Ba wang bie ji", aliases: ["Ba wang bie ji"], year: 1993,
    directors: ["Chen Kaige"], genres: ["Drama", "History", "Music", "Romance"], tradition: "Chinese Fifth Generation historical epic and performance melodrama", tone: "Operatic, intimate and historically turbulent",
    premise: "Follow two opera performers across decades as role, desire, loyalty and political upheaval become inseparable.", screenplay: "Use a long historical arc while returning to performance roles and relationships as the film's emotional structure.", image: "Coordinate opera staging, costume, makeup, color, crowds and changing historical environments as one expressive system.", editing: "Move across decades through performance echoes, political ruptures and recurring gestures rather than exhaustive chronology.", sound: "Let opera singing, training, applause, public slogans and private speech chart changes in identity and power.", learning: "Study how performance tradition can organize character, historical scale and production design across decades."
  }
] as const satisfies readonly ModernCanonExpansionDefinition[];

export function normalizeModernCanonTitle(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function scenarioMatchesModernCanonDefinition(
  scenario: HistoricalFilmScenario,
  definition: ModernCanonExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;
  const scenarioTitles = [scenario.film.title, scenario.film.original_title].map(normalizeModernCanonTitle);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])].map(normalizeModernCanonTitle);
  return scenarioTitles.some((title) => definitionTitles.includes(title));
}

export function getModernCanonExpansionDefinition(
  scenario: HistoricalFilmScenario,
): ModernCanonExpansionDefinition | undefined {
  return modernCanonExpansionDefinitions.find((definition) => scenarioMatchesModernCanonDefinition(scenario, definition));
}

export function mergeModernCanonExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of modernCanonExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesModernCanonDefinition(scenario, definition))) continue;
    merged.push(createModernCanonScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createModernCanonScenario(
  definition: ModernCanonExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  const genreKeys = definition.genres.map(toGenreKey);
  return {
    id: definition.id,
    status: "manual_modern_canon_case_needs_source_verification",
    source: {
      list_id: "manual_modern_indie_asian_prize_expansion_2026",
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
      themes: ["independent_and_world_cinema", "production_method", "craft_consequence"],
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
