import type { FilmScenarioSeed } from "./filmScenarios";

export type ScenarioProductionBrief = {
  readonly scenarioId: string;
  readonly title: string;
  readonly logline: string;
  readonly genreTargets: readonly string[];
  readonly toneTargets: readonly string[];
  readonly screenplayTargets: readonly string[];
  readonly cinematographyTargets: readonly string[];
  readonly editingTargets: readonly string[];
  readonly soundTargets: readonly string[];
  readonly learningGoals: readonly string[];
  readonly verificationStatus: "seeded" | "needs_research" | "verified";
};

const scenarioProductionBriefs: Record<string, ScenarioProductionBrief> = {
  scenario_the_machinist_2004: {
    scenarioId: "scenario_the_machinist_2004",
    title: "The Machinist production brief",
    logline: "Build a tense psychological mystery around isolation, guilt, and a body under pressure.",
    genreTargets: ["Psychological thriller", "Character study", "Mystery pressure"],
    toneTargets: ["Paranoid", "Sparse", "Uneasy"],
    screenplayTargets: ["Unreliable viewpoint", "Escalating inner conflict", "Clues that reframe behavior"],
    cinematographyTargets: ["Constrained spaces", "Stark compositions", "Observe physical strain"],
    editingTargets: ["Slow-burn reveals", "Disorienting transitions", "Tight cause and effect"],
    soundTargets: ["Industrial unease", "Quiet tension", "Stressful repetition"],
    learningGoals: ["Use style to externalize guilt", "Make limited settings feel threatening", "Control reveal rhythm"],
    verificationStatus: "needs_research"
  },
  scenario_the_lives_of_others_2006: {
    scenarioId: "scenario_the_lives_of_others_2006",
    title: "The Lives of Others production brief",
    logline: "Stage a surveillance drama where observation becomes moral conflict.",
    genreTargets: ["Political drama", "Surveillance thriller", "Moral character study"],
    toneTargets: ["Restrained", "Suspicious", "Humanist"],
    screenplayTargets: ["Observer versus subject", "Private choices under pressure", "Slow moral transformation"],
    cinematographyTargets: ["Rooms within rooms", "Watching and being watched", "Controlled framing"],
    editingTargets: ["Patient cross-cutting", "Procedural clarity", "Delayed emotional release"],
    soundTargets: ["Listening as drama", "Muted interiors", "Selective silence"],
    learningGoals: ["Turn observation into conflict", "Build tension through restraint", "Link space to power"],
    verificationStatus: "needs_research"
  },
  scenario_lost_in_translation_2003: {
    scenarioId: "scenario_lost_in_translation_2003",
    title: "Lost in Translation production brief",
    logline: "Create a quiet connection story about loneliness, drift, and temporary intimacy.",
    genreTargets: ["Romantic drama", "Comedy of dislocation", "Mood piece"],
    toneTargets: ["Melancholic", "Wry", "Intimate"],
    screenplayTargets: ["Small encounters", "Emotional subtext", "Open-ended connection"],
    cinematographyTargets: ["Hotel spaces", "City distance", "Faces in quiet moments"],
    editingTargets: ["Lingering beats", "Episodic rhythm", "Soft transitions"],
    soundTargets: ["Ambient city texture", "Quiet rooms", "Music-led mood"],
    learningGoals: ["Make loneliness playable", "Let subtext carry scenes", "Balance comedy and melancholy"],
    verificationStatus: "needs_research"
  },
  scenario_12_angry_men_1957: {
    scenarioId: "scenario_12_angry_men_1957",
    title: "12 Angry Men production brief",
    logline: "Drive a chamber drama through debate, shifting alliances, and mounting doubt.",
    genreTargets: ["Courtroom drama", "Chamber piece", "Ensemble conflict"],
    toneTargets: ["Heated", "Claustrophobic", "Reasoned"],
    screenplayTargets: ["Single-room escalation", "Argument as action", "Changing group dynamics"],
    cinematographyTargets: ["Pressure from room geography", "Faces and reactions", "Tighter framing over time"],
    editingTargets: ["Rhythmic debate", "Reaction beats", "Clear argument turns"],
    soundTargets: ["Voices in conflict", "Room tone", "Silence after key doubts"],
    learningGoals: ["Sustain tension without spectacle", "Use blocking as argument", "Track ensemble persuasion"],
    verificationStatus: "needs_research"
  },
  scenario_a_prophet_2009: {
    scenarioId: "scenario_a_prophet_2009",
    title: "A Prophet production brief",
    logline: "Follow a prison survival story where adaptation becomes power.",
    genreTargets: ["Crime drama", "Prison story", "Coming-of-power arc"],
    toneTargets: ["Gritty", "Tense", "Observational"],
    screenplayTargets: ["Survival choices", "Shifting loyalties", "Incremental transformation"],
    cinematographyTargets: ["Institutional spaces", "Close observation", "Physical threat in frames"],
    editingTargets: ["Procedural momentum", "Sharp consequence beats", "Measured escalation"],
    soundTargets: ["Hard surfaces", "Crowded tension", "Controlled quiet"],
    learningGoals: ["Build character through pressure", "Map power through spaces", "Show transformation step by step"],
    verificationStatus: "needs_research"
  }
};

export function getScenarioProductionBrief(scenarioId: string): ScenarioProductionBrief | undefined {
  return scenarioProductionBriefs[scenarioId];
}

export function getFallbackScenarioProductionBrief(scenario: FilmScenarioSeed): ScenarioProductionBrief {
  return {
    scenarioId: scenario.id,
    title: `${scenario.film.title} production brief`,
    logline: scenario.production_challenge,
    genreTargets: scenario.film.genres.length > 0 ? [...scenario.film.genres] : ["Drama"],
    toneTargets: ["Match the scenario challenge", "Keep choices readable"],
    screenplayTargets: ["Focus the central conflict", "Use the seeded learning goals"],
    cinematographyTargets: ["Choose spaces that support the conflict", "Frame the player task clearly"],
    editingTargets: ["Keep story turns legible", "Build rhythm around consequences"],
    soundTargets: ["Support tone without overexplaining", "Use silence and texture as pressure"],
    learningGoals: [...scenario.learning_goals_seed],
    verificationStatus: "seeded"
  };
}
