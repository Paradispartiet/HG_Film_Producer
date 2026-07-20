import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";

export type FilmCraftDomain = "screenplay" | "cinematography" | "editing" | "sound";

export type FilmCraftTechnique = {
  readonly id: string;
  readonly domain: FilmCraftDomain;
  readonly name: string;
  readonly definition: string;
  readonly analyticalQuestion: string;
  readonly productionUse: string;
  readonly keywords: readonly string[];
};

export const filmCraftGlossary: readonly FilmCraftTechnique[] = [
  {
    id: "restricted-information",
    domain: "screenplay",
    name: "Restricted information",
    definition: "The film limits what the audience knows, when they know it, or whose knowledge can be trusted.",
    analyticalQuestion: "Which facts are withheld, delayed, contradicted, or tied to one point of view?",
    productionUse: "Use scene order, point of view, and selective revelation to create curiosity, doubt, or suspense.",
    keywords: ["withhold", "information", "uncertain", "unreliable", "reveal", "mystery", "doubt", "perspective"],
  },
  {
    id: "dramatic-pressure",
    domain: "screenplay",
    name: "Dramatic pressure",
    definition: "A character's available choices narrow as needs, rules, time, institutions, or other people apply force.",
    analyticalQuestion: "What makes the next choice harder than the previous one?",
    productionUse: "Escalate consequences and reduce easy exits so character decisions become visible action.",
    keywords: ["pressure", "escalate", "stakes", "consequence", "conflict", "threat", "choice", "rules"],
  },
  {
    id: "episodic-structure",
    domain: "screenplay",
    name: "Episodic structure",
    definition: "The story advances through a series of encounters, stages, or episodes rather than one continuous causal chain.",
    analyticalQuestion: "What accumulates across the episodes even when the plot appears to drift?",
    productionUse: "Give each episode a distinct encounter while preserving a clear emotional or thematic progression.",
    keywords: ["episodic", "journey", "encounters", "episodes", "drift", "accumulate", "travel"],
  },
  {
    id: "repetition-variation",
    domain: "screenplay",
    name: "Repetition with variation",
    definition: "A situation, action, location, or line returns with changed meaning or consequence.",
    analyticalQuestion: "What is repeated, and what precise difference makes the repetition dramatic?",
    productionUse: "Establish a readable pattern, then alter timing, performance, context, or result to reveal change.",
    keywords: ["repeat", "repetition", "routine", "variation", "pattern", "ritual", "reset"],
  },
  {
    id: "ensemble-pressure",
    domain: "screenplay",
    name: "Ensemble pressure",
    definition: "A group functions as a dramatic system in which alliances, reactions, roles, and social rules shape every decision.",
    analyticalQuestion: "How does the group redistribute power when one person speaks or acts?",
    productionUse: "Write and stage reactions, status changes, and competing objectives across the whole ensemble.",
    keywords: ["ensemble", "group", "community", "alliances", "reactions", "social", "family", "classroom"],
  },
  {
    id: "blocking",
    domain: "cinematography",
    name: "Blocking",
    definition: "The arrangement and movement of performers in relation to the camera, set, and one another.",
    analyticalQuestion: "Who controls the space, who is isolated, and how do positions change during the scene?",
    productionUse: "Direct bodies and camera positions so relationships and power are readable without explanation.",
    keywords: ["blocking", "positions", "movement", "bodies", "distance", "power", "ensemble", "staging"],
  },
  {
    id: "negative-space",
    domain: "cinematography",
    name: "Negative space",
    definition: "Empty or visually unoccupied areas of the frame become active parts of the composition.",
    analyticalQuestion: "What does the empty space make the audience expect, fear, or notice?",
    productionUse: "Reserve part of the frame for absence, threat, isolation, scale, or off-screen possibility.",
    keywords: ["negative space", "empty", "absence", "isolation", "distance", "off-screen", "frame"],
  },
  {
    id: "symmetry-control",
    domain: "cinematography",
    name: "Symmetry and visual control",
    definition: "Balanced, centered, or highly ordered compositions make the world feel designed, ritualized, stable, or trapped.",
    analyticalQuestion: "Does the order reassure the audience, or does it make the image feel controlled and unnatural?",
    productionUse: "Use axes, repeated shapes, centered bodies, and architectural lines to express control or stylization.",
    keywords: ["symmetry", "symmetrical", "controlled", "composed", "precise", "clean", "architecture", "lines"],
  },
  {
    id: "subjective-image",
    domain: "cinematography",
    name: "Subjective image",
    definition: "Visual form is shaped by a character's perception, memory, emotion, bodily state, or limited awareness.",
    analyticalQuestion: "Which visual choices belong to the world, and which belong to the character's experience of it?",
    productionUse: "Alter framing, focus, movement, exposure, texture, or continuity to externalize an inner state.",
    keywords: ["subjective", "perception", "memory", "inner", "dream", "unstable", "body", "point of view"],
  },
  {
    id: "location-as-pressure",
    domain: "cinematography",
    name: "Location as dramatic pressure",
    definition: "A place is organized and photographed so that it actively constrains, exposes, tempts, or transforms characters.",
    analyticalQuestion: "What can happen in this location that could not happen in a neutral space?",
    productionUse: "Choose and stage locations for rules, sightlines, boundaries, movement, texture, and social meaning.",
    keywords: ["space", "location", "landscape", "interior", "room", "city", "prison", "hotel", "world"],
  },
  {
    id: "observational-distance",
    domain: "cinematography",
    name: "Observational distance",
    definition: "The camera watches behavior with limited visual intervention, often allowing bodies and spaces to remain autonomous.",
    analyticalQuestion: "What does the film gain by observing instead of visually insisting?",
    productionUse: "Hold distance, reduce coverage, and let performance, duration, and spatial behavior carry meaning.",
    keywords: ["observe", "observational", "distance", "realism", "plain", "restrained", "stillness"],
  },
  {
    id: "montage-compression",
    domain: "editing",
    name: "Montage and compression",
    definition: "A sequence condenses time, development, process, or repeated action into selected fragments.",
    analyticalQuestion: "What information is omitted, and what pattern makes the fragments read as one development?",
    productionUse: "Select recurring visual or sonic anchors so compressed time remains clear and emotionally directed.",
    keywords: ["montage", "compress", "fragments", "process", "time", "accumulate", "archive"],
  },
  {
    id: "ellipsis",
    domain: "editing",
    name: "Ellipsis",
    definition: "The edit removes an expected event or interval and asks the audience to infer what happened between shots or scenes.",
    analyticalQuestion: "What does the film make the audience complete mentally?",
    productionUse: "Cut past routine or explanation when the missing interval produces clarity, surprise, speed, or ambiguity.",
    keywords: ["ellipsis", "omit", "missing", "delay", "skip", "withhold", "between scenes"],
  },
  {
    id: "cross-cutting",
    domain: "editing",
    name: "Cross-cutting",
    definition: "The edit alternates between separate actions, spaces, or perspectives to create comparison, simultaneity, or suspense.",
    analyticalQuestion: "What relationship is created by placing these actions beside one another?",
    productionUse: "Design matching beats, contrasts, deadlines, or information gaps across parallel strands.",
    keywords: ["cross-cut", "parallel", "watcher", "watched", "between", "simultaneous", "contrast"],
  },
  {
    id: "duration-tension",
    domain: "editing",
    name: "Duration as tension",
    definition: "A shot, pause, action, or scene is held long enough for anticipation, discomfort, observation, or uncertainty to grow.",
    analyticalQuestion: "Why does the film refuse to cut at the expected moment?",
    productionUse: "Preserve real-time behavior or silence when duration itself changes the audience's emotional state.",
    keywords: ["hold", "linger", "patient", "slow", "duration", "pause", "breathe", "waiting"],
  },
  {
    id: "rhythmic-escalation",
    domain: "editing",
    name: "Rhythmic escalation",
    definition: "Shot length, scene length, repetition, interruption, or cutting density changes to increase pressure.",
    analyticalQuestion: "Which measurable aspect of the rhythm changes as the sequence intensifies?",
    productionUse: "Plan the sequence's tempo as a progression rather than cutting every moment at the same intensity.",
    keywords: ["rhythm", "pace", "accelerate", "escalate", "quick", "sharp", "momentum", "interrupt"],
  },
  {
    id: "reaction-editing",
    domain: "editing",
    name: "Reaction editing",
    definition: "The edit gives dramatic weight to how characters receive, interpret, or resist an action or line.",
    analyticalQuestion: "Whose reaction defines the meaning of the event?",
    productionUse: "Capture and select reactions that reveal status, knowledge, emotional change, or group pressure.",
    keywords: ["reaction", "reactions", "faces", "after", "response", "group", "performance"],
  },
  {
    id: "offscreen-sound",
    domain: "sound",
    name: "Off-screen sound",
    definition: "Sound establishes actions, spaces, people, or threats that are not visible in the frame.",
    analyticalQuestion: "What world does the audience hear beyond the image?",
    productionUse: "Use unseen sound to expand space, direct attention, delay visual information, or create threat.",
    keywords: ["off-screen", "outside", "distance", "unseen", "space", "ambient", "world"],
  },
  {
    id: "silence-pressure",
    domain: "sound",
    name: "Silence as pressure",
    definition: "Reduced or absent sound makes attention, exposure, waiting, discomfort, or emotional distance more intense.",
    analyticalQuestion: "What becomes newly audible or emotionally exposed when the soundtrack withdraws?",
    productionUse: "Remove expected ambience, music, or dialogue so breath, room tone, gesture, or waiting becomes active.",
    keywords: ["silence", "quiet", "restrained", "exposed", "pause", "absence", "mute"],
  },
  {
    id: "sound-motif",
    domain: "sound",
    name: "Sound motif",
    definition: "A recurring sound, musical phrase, vocal pattern, or sonic texture gains meaning through repetition and change.",
    analyticalQuestion: "When does the sound return, and how has its meaning changed?",
    productionUse: "Repeat a distinctive cue at structurally meaningful points, then vary context, intensity, or source.",
    keywords: ["repeat", "repetition", "motif", "cue", "ritual", "music", "sound", "pattern"],
  },
  {
    id: "sound-perspective",
    domain: "sound",
    name: "Sound perspective",
    definition: "Volume, clarity, filtering, reverberation, and mix position suggest distance, location, attention, or subjectivity.",
    analyticalQuestion: "From whose physical or psychological position does the audience hear?",
    productionUse: "Change sonic distance and clarity to guide viewpoint, spatial understanding, or inner experience.",
    keywords: ["perspective", "distance", "subjective", "muffled", "room", "close", "interior", "listening"],
  },
  {
    id: "music-structure",
    domain: "sound",
    name: "Music as structure",
    definition: "Music organizes transitions, memory, tempo, contrast, historical period, or emotional development—not only mood.",
    analyticalQuestion: "What structural work does the music perform before its emotional effect is described?",
    productionUse: "Assign music a precise narrative function such as bridging time, changing register, marking recurrence, or creating counterpoint.",
    keywords: ["music", "score", "song", "period", "memory", "transition", "rhythm", "counterpoint"],
  },
];

const briefFields: readonly (keyof Pick<ScenarioProductionBrief, "screenplayTargets" | "cinematographyTargets" | "editingTargets" | "soundTargets" | "learningGoals" | "logline">)[] = [
  "screenplayTargets",
  "cinematographyTargets",
  "editingTargets",
  "soundTargets",
  "learningGoals",
  "logline",
];

export function getFilmCraftTechniques(brief: ScenarioProductionBrief, limit = 8): readonly FilmCraftTechnique[] {
  const searchableText = briefFields
    .flatMap((field) => {
      const value = brief[field];
      return Array.isArray(value) ? value : [value];
    })
    .join(" ")
    .toLocaleLowerCase();

  return filmCraftGlossary
    .map((technique) => ({
      technique,
      score: technique.keywords.reduce((total, keyword) => total + (searchableText.includes(keyword.toLocaleLowerCase()) ? 1 : 0), 0),
    }))
    .filter((candidate) => candidate.score > 0)
    .sort((left, right) => right.score - left.score || left.technique.name.localeCompare(right.technique.name))
    .slice(0, limit)
    .map((candidate) => candidate.technique);
}

export function getFilmCraftTechniqueById(id: string) {
  return filmCraftGlossary.find((technique) => technique.id === id);
}
