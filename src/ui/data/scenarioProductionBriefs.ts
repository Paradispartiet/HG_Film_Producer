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
    logline: "Build a paranoid thriller where a worn-down worker cannot trust his body, memory, or surroundings.",
    genreTargets: ["Paranoid psychological thriller", "Body-under-pressure mystery", "Isolated character study"],
    toneTargets: ["Uneasy and restrained", "Physically depleted", "Threateningly quiet"],
    screenplayTargets: ["Make perception unreliable", "Let small clues contradict memory", "Tie guilt to deterioration"],
    cinematographyTargets: ["Use industrial spaces as pressure", "Frame isolation in hard lines", "Show the body as evidence"],
    editingTargets: ["Hold an uneasy rhythm", "Disrupt certainty with brief flashes", "Delay answers without losing clarity"],
    soundTargets: ["Use machinery as anxiety", "Let repetition become pressure", "Make silence feel exposed"],
    learningGoals: ["Externalize mental strain through craft", "Make limited spaces feel unsafe", "Control reveals without final certainty"],
    verificationStatus: "needs_research"
  },
  scenario_the_lives_of_others_2006: {
    scenarioId: "scenario_the_lives_of_others_2006",
    title: "The Lives of Others production brief",
    logline: "Stage a surveillance drama where watching and listening force a choice between duty and conscience.",
    genreTargets: ["Surveillance drama", "Political moral conflict", "Observer character study"],
    toneTargets: ["Controlled and quiet", "Institutionally pressured", "Morally tense"],
    screenplayTargets: ["Let listening become dramatic action", "Pressure private choices with rules", "Track conscience through small decisions"],
    cinematographyTargets: ["Frame rooms within systems", "Use distance to show power", "Keep compositions controlled"],
    editingTargets: ["Cross-cut watcher and watched", "Build tension through procedure", "Release emotion sparingly"],
    soundTargets: ["Make listening the hook", "Use muted interiors", "Let silence carry suspicion"],
    learningGoals: ["Turn observation into conflict", "Show moral change without speeches", "Use restraint to raise stakes"],
    verificationStatus: "needs_research"
  },
  scenario_lost_in_translation_2003: {
    scenarioId: "scenario_lost_in_translation_2003",
    title: "Lost in Translation production brief",
    logline: "Create a quiet city-and-hotel story where two displaced people find temporary intimacy in loneliness.",
    genreTargets: ["Romantic melancholy", "Alienation drama", "Mood-led comedy"],
    toneTargets: ["Wry and tender", "Culturally adrift", "Restrainedly intimate"],
    screenplayTargets: ["Favor mood over plot", "Build connection through pauses", "Keep intimacy temporary and open"],
    cinematographyTargets: ["Make the hotel emotional space", "Use the city as distance", "Hold faces in quiet moments"],
    editingTargets: ["Let scenes breathe", "Use a drifting episodic rhythm", "Cut gently between solitude and connection"],
    soundTargets: ["Layer ambient city noise", "Keep rooms quietly charged", "Use music as emotional texture"],
    learningGoals: ["Make alienation playable", "Create intimacy through restraint", "Let place carry emotion"],
    verificationStatus: "needs_research"
  },
  scenario_12_angry_men_1957: {
    scenarioId: "scenario_12_angry_men_1957",
    title: "12 Angry Men production brief",
    logline: "Drive a one-room chamber drama where argument, doubt, and group pressure become the action.",
    genreTargets: ["Chamber drama", "Jury-room conflict", "Ensemble debate"],
    toneTargets: ["Claustrophobic", "Combative", "Increasingly doubtful"],
    screenplayTargets: ["Build tension through argument", "Let doubt shift alliances", "Turn evidence into character conflict"],
    cinematographyTargets: ["Use one-room blocking", "Track power through positions", "Tighten faces as pressure rises"],
    editingTargets: ["Shape dialogue rhythm", "Cut on argument turns", "Hold reactions after challenges"],
    soundTargets: ["Make voices the engine", "Use room tone as heat", "Let silence follow key doubts"],
    learningGoals: ["Sustain drama without spectacle", "Use blocking as persuasion", "Escalate through performance"],
    verificationStatus: "needs_research"
  },
  scenario_a_prophet_2009: {
    scenarioId: "scenario_a_prophet_2009",
    title: "A Prophet production brief",
    logline: "Follow a prison crime story where survival, adaptation, and compromise reshape a vulnerable newcomer.",
    genreTargets: ["Prison crime drama", "Survival ascent story", "Institutional power drama"],
    toneTargets: ["Tense and controlled", "Pragmatic", "Morally compromised"],
    screenplayTargets: ["Make adaptation costly", "Map power through favors and threats", "Escalate choices step by step"],
    cinematographyTargets: ["Build the prison as a system", "Frame bodies under threat", "Use confined movement for pressure"],
    editingTargets: ["Control escalation", "Mark consequences clearly", "Balance routine with sudden danger"],
    soundTargets: ["Use hard institutional texture", "Let crowds signal danger", "Drop into quiet for calculation"],
    learningGoals: ["Build world rules through pressure", "Show power structures in action", "Track moral compromise clearly"],
    verificationStatus: "needs_research"
  },
  scenario_3_iron_2004: {
    scenarioId: "scenario_3_iron_2004",
    title: "3-Iron production brief",
    logline: "Shape a quiet crime-romance drama where borrowed spaces and small gestures create intimacy without conventional dialogue.",
    genreTargets: ["Quiet crime-romance drama", "Intimate outsider story", "Borrowed-space character study"],
    toneTargets: ["Silent and observant", "Tenderly uneasy", "Restrained and intimate"],
    screenplayTargets: ["Let silence carry intention", "Build connection through gestures", "Use empty rooms as story turns"],
    cinematographyTargets: ["Frame borrowed spaces carefully", "Observe bodies at a distance", "Let rooms reveal character"],
    editingTargets: ["Keep an observational rhythm", "Hold on quiet discoveries", "Let actions replace exposition"],
    soundTargets: ["Practice sound restraint", "Use room tone as intimacy", "Let silence stay active"],
    learningGoals: ["Create intimacy without dialogue", "Make spaces feel temporarily owned", "Tell emotion through gesture"],
    verificationStatus: "needs_research"
  },
  scenario_one_flew_over_the_cuckoos_nest_1975: {
    scenarioId: "scenario_one_flew_over_the_cuckoos_nest_1975",
    title: "One Flew Over the Cuckoo's Nest production brief",
    logline: "Stage an institutional drama where rebellion, control, and ensemble pressure escalate through character conflict.",
    genreTargets: ["Institutional drama", "Rebellion-versus-control story", "Ensemble character conflict"],
    toneTargets: ["Pressurized and human", "Defiant under restraint", "Performance-driven"],
    screenplayTargets: ["Set rules against rebellion", "Escalate through character conflict", "Let the ensemble create pressure"],
    cinematographyTargets: ["Use institutional space as pressure", "Frame control in interiors", "Track power through blocking"],
    editingTargets: ["Build performance-driven escalation", "Cut around group reactions", "Let confrontations gather force"],
    soundTargets: ["Let voices define power", "Use routine as pressure", "Hold silence after defiance"],
    learningGoals: ["Dramatize rebellion inside rules", "Use ensemble pressure clearly", "Escalate conflict through performance"],
    verificationStatus: "needs_research"
  },
  scenario_last_life_in_the_universe_2003: {
    scenarioId: "scenario_last_life_in_the_universe_2003",
    title: "Last Life in the Universe production brief",
    logline: "Build a melancholic crime-romance mood piece where loneliness, drift, and alienation matter more than plot mechanics.",
    genreTargets: ["Melancholic crime romance", "Loneliness drama", "Drifting character study"],
    toneTargets: ["Quietly alienated", "Melancholic and sparse", "Tender but distant"],
    screenplayTargets: ["Favor mood over plot", "Use sparse dialogue", "Let alienation shape choices"],
    cinematographyTargets: ["Hold quiet visual rhythm", "Frame distance between people", "Use spaces for emotional drift"],
    editingTargets: ["Let scenes linger", "Move with a drifting pace", "Cut gently between moods"],
    soundTargets: ["Keep dialogue spare", "Use quiet textures", "Let silence suggest loneliness"],
    learningGoals: ["Make loneliness playable", "Build romance through distance", "Let mood guide structure"],
    verificationStatus: "needs_research"
  },
  scenario_moonrise_kingdom_2012: {
    scenarioId: "scenario_moonrise_kingdom_2012",
    title: "Moonrise Kingdom production brief",
    logline: "Create a stylized coming-of-age adventure where childlike seriousness, ritual, and composed frames turn escape into a storybook quest.",
    genreTargets: ["Stylized coming-of-age adventure", "Ensemble comedy adventure", "Storybook escape romance"],
    toneTargets: ["Childlike and serious", "Playfully melancholic", "Precise and warm"],
    screenplayTargets: ["Treat young stakes seriously", "Build rituals into conflict", "Use ensemble timing for comedy"],
    cinematographyTargets: ["Compose symmetrical frames", "Build a map-like world", "Use objects as story clues"],
    editingTargets: ["Keep comedy timing crisp", "Move like a planned expedition", "Balance play with melancholy"],
    soundTargets: ["Use cues with playful precision", "Let objects and rituals sound clear", "Support wonder without clutter"],
    learningGoals: ["Build a world with maps and rituals", "Direct comedy through composition", "Balance innocence with melancholy"],
    verificationStatus: "needs_research"
  },
  scenario_true_romance_1993: {
    scenarioId: "scenario_true_romance_1993",
    title: "True Romance production brief",
    logline: "Drive a crime-romance thriller where lovers-on-the-run momentum, pop-culture voice, and sudden danger create violent tonal shifts.",
    genreTargets: ["Crime romance thriller", "Lovers-on-the-run story", "Pop-culture crime tale"],
    toneTargets: ["Fast and heightened", "Romantic under threat", "Violently unpredictable"],
    screenplayTargets: ["Give lovers active momentum", "Use heightened dialogue", "Let danger interrupt fantasy"],
    cinematographyTargets: ["Frame romance inside threat", "Use bold locations as pressure", "Make confrontations feel sudden"],
    editingTargets: ["Keep run-away energy", "Snap into danger quickly", "Shape sharp tonal shifts"],
    soundTargets: ["Let dialogue drive rhythm", "Use music for romantic charge", "Make violence arrive abruptly"],
    learningGoals: ["Blend romance with crime stakes", "Control violent tonal shifts", "Write voice-forward conflict"],
    verificationStatus: "needs_research"
  }
};

export function getScenarioProductionBrief(scenarioId: string): ScenarioProductionBrief | undefined {
  return scenarioProductionBriefs[scenarioId];
}

export function resolveScenarioProductionBrief(scenario: FilmScenarioSeed): ScenarioProductionBrief {
  return getScenarioProductionBrief(scenario.id) ?? getFallbackScenarioProductionBrief(scenario);
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
