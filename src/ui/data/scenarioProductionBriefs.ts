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
  },
  scenario_waltz_with_bashir_2008: {
    scenarioId: "scenario_waltz_with_bashir_2008",
    title: "Waltz with Bashir production brief",
    logline: "Shape an animated documentary memory journey where trauma returns through fragments, witnesses, and subjective reconstruction.",
    genreTargets: ["Animated documentary", "Memory journey", "Trauma investigation"],
    toneTargets: ["Haunted and reflective", "Fragmented but focused", "Dreamlike under pressure"],
    screenplayTargets: ["Let memory fragments guide structure", "Use witnesses as perspective shifts", "Keep reconstruction subjective"],
    cinematographyTargets: ["Build a dreamlike visual language", "Make memory feel unstable", "Frame testimony as inner landscape"],
    editingTargets: ["Transition between memory fragments", "Let association drive movement", "Balance drift with discovery"],
    soundTargets: ["Use music as emotional pressure", "Let voices carry uncertainty", "Make silence expose trauma"],
    learningGoals: ["Use stylization to explore memory", "Turn testimony into structure", "Make documentary form playable"],
    verificationStatus: "needs_research"
  },
  scenario_into_the_wild_2007: {
    scenarioId: "scenario_into_the_wild_2007",
    title: "Into the Wild production brief",
    logline: "Follow a biographical road adventure where idealism, escape, and consequence turn travel into inner transformation.",
    genreTargets: ["Biographical road drama", "Adventure character study", "Escape-and-consequence journey"],
    toneTargets: ["Idealistic and searching", "Free but isolated", "Reflective and bittersweet"],
    screenplayTargets: ["Build an episodic journey structure", "Let freedom clash with isolation", "Track idealism toward consequence"],
    cinematographyTargets: ["Use landscape as inner state", "Frame travel as transformation", "Make distance feel emotional"],
    editingTargets: ["Keep a reflective rhythm", "Let episodes accumulate meaning", "Balance movement with stillness"],
    soundTargets: ["Use music as reflection", "Let nature carry solitude", "Keep quiet moments open"],
    learningGoals: ["Let place and travel carry transformation", "Make escape reveal character", "Use landscape as emotional pressure"],
    verificationStatus: "needs_research"
  },
  scenario_ex_machina_2014: {
    scenarioId: "scenario_ex_machina_2014",
    title: "Ex Machina production brief",
    logline: "Stage a contained sci-fi psychological thriller where dialogue, control, and ambiguity make every exchange feel like a test.",
    genreTargets: ["Contained sci-fi thriller", "Psychological chamber drama", "Control-and-manipulation story"],
    toneTargets: ["Controlled and uneasy", "Ambiguous under the surface", "Intimate but threatening"],
    screenplayTargets: ["Make dialogue feel like a test", "Withhold information carefully", "Let manipulation shift power"],
    cinematographyTargets: ["Use clean controlled spaces", "Frame glass and distance as pressure", "Make symmetry feel trapped"],
    editingTargets: ["Build slow tension", "Delay certainty between scenes", "Cut around withheld information"],
    soundTargets: ["Keep sound sparse", "Suggest machine unease", "Let quiet rooms feel monitored"],
    learningGoals: ["Stage science fiction as chamber drama", "Create suspense through dialogue", "Use controlled space as conflict"],
    verificationStatus: "needs_research"
  },
  scenario_winter_s_bone_2010: {
    scenarioId: "scenario_winter_s_bone_2010",
    title: "Winter's Bone production brief",
    logline: "Build a rural mystery drama where survival, family pressure, and community silence turn every boundary into suspense.",
    genreTargets: ["Rural mystery drama", "Survival family story", "Community-boundary investigation"],
    toneTargets: ["Harsh and restrained", "Quietly threatening", "Grounded in silence"],
    screenplayTargets: ["Investigate through community boundaries", "Let family pressure drive choices", "Make silence block answers"],
    cinematographyTargets: ["Use harsh landscape as pressure", "Favor lived-in realism", "Frame survival in everyday spaces"],
    editingTargets: ["Keep pacing restrained", "Let encounters reveal risk", "Hold tension after refusals"],
    soundTargets: ["Keep threats quiet in dialogue", "Use ambient sound as pressure", "Let silence signal danger"],
    learningGoals: ["Use social worldbuilding to create suspense", "Make restraint feel dangerous", "Turn community rules into stakes"],
    verificationStatus: "needs_research"
  },

  scenario_district_9_2009: {
    scenarioId: "scenario_district_9_2009",
    title: "District 9 production brief",
    logline: "Build a sci-fi action thriller where social pressure, body change, and institutional force collide in restricted zones.",
    genreTargets: ["Sci-fi action thriller", "Social-pressure survival story", "Institutional alienation drama"],
    toneTargets: ["Immediate and unstable", "Chaotic but readable", "Physically escalating"],
    screenplayTargets: ["Make bureaucracy part of the worldbuilding", "Turn transformation into escalation", "Push alienation through institutional force"],
    cinematographyTargets: ["Use documentary-style immediacy", "Frame restricted zones as pressure", "Keep action legible inside chaos"],
    editingTargets: ["Cut media fragments into world rules", "Escalate from procedure to panic", "Keep action geography readable"],
    soundTargets: ["Layer crowd and media pressure", "Make body change unsettling", "Use alarms and orders as threat"],
    learningGoals: ["Science fiction can make social conflict physical and immediate"],
    verificationStatus: "needs_research"
  },
  scenario_it_s_a_wonderful_life_1946: {
    scenarioId: "scenario_it_s_a_wonderful_life_1946",
    title: "It's a Wonderful Life production brief",
    logline: "Shape a fantasy-inflected community drama where moral crisis reveals one person's value through relationships.",
    genreTargets: ["Fantasy-inflected community drama", "Moral crisis story", "Ensemble small-town drama"],
    toneTargets: ["Warm but pressured", "Despairing then communal", "Emotionally generous"],
    screenplayTargets: ["Reveal value through relationships", "Turn the community into the emotional stakes", "Make ordinary choices feel moral"],
    cinematographyTargets: ["Make the town a dramatic universe", "Frame belonging through groups", "Contrast isolation with community"],
    editingTargets: ["Keep a warm ensemble rhythm", "Let crisis beats accumulate", "Move clearly between despair and support"],
    soundTargets: ["Let voices create belonging", "Use quiet to expose despair", "Make community sound restorative"],
    learningGoals: ["Fantasy can reframe everyday life as moral drama"],
    verificationStatus: "needs_research"
  },
  scenario_no_country_for_old_men_2007: {
    scenarioId: "scenario_no_country_for_old_men_2007",
    title: "No Country for Old Men production brief",
    logline: "Build a sparse crime thriller where pursuit, silence, and moral exhaustion make fate feel unavoidable.",
    genreTargets: ["Sparse crime thriller", "Pursuit suspense story", "Moral exhaustion drama"],
    toneTargets: ["Bleak and restrained", "Inevitable", "Quietly threatening"],
    screenplayTargets: ["Let pursuit define structure", "Withhold explanations for pressure", "Use minimal dialogue as tension"],
    cinematographyTargets: ["Make landscape feel dangerous", "Frame absence as threat", "Hold distance around violence"],
    editingTargets: ["Control suspense with restraint", "Delay releases of information", "Let silence stretch before action"],
    soundTargets: ["Let silence create threat", "Keep footsteps and objects precise", "Use absence of sound as pressure"],
    learningGoals: ["Suspense can come from restraint, silence and inevitability"],
    verificationStatus: "needs_research"
  },
  scenario_beasts_of_the_southern_wild_2012: {
    scenarioId: "scenario_beasts_of_the_southern_wild_2012",
    title: "Beasts of the Southern Wild production brief",
    logline: "Create a mythic coming-of-age survival drama where a child's perspective turns place, community, and catastrophe into legend.",
    genreTargets: ["Mythic coming-of-age drama", "Survival community story", "Heightened realism fable"],
    toneTargets: ["Raw and wondrous", "Energetic and intimate", "Defiant under catastrophe"],
    screenplayTargets: ["Scale events through a child perspective", "Tie community to survival", "Let catastrophe feel personal and mythic"],
    cinematographyTargets: ["Use tactile worldbuilding", "Keep a rough visual energy", "Make landscape feel alive"],
    editingTargets: ["Move with rough momentum", "Balance wonder with danger", "Let memory and sensation guide rhythm"],
    soundTargets: ["Layer weather and community texture", "Make the world feel handmade", "Let music lift mythic moments"],
    learningGoals: ["Place can become myth through perspective"],
    verificationStatus: "needs_research"
  },
  scenario_moon_2009: {
    scenarioId: "scenario_moon_2009",
    title: "Moon production brief",
    logline: "Stage a contained sci-fi mystery drama where isolation, routine, and doubt turn identity into the central question.",
    genreTargets: ["Contained sci-fi mystery", "Isolation identity drama", "Minimal-cast chamber story"],
    toneTargets: ["Lonely and controlled", "Quietly doubtful", "Restrained and uncanny"],
    screenplayTargets: ["Use routine to make doubt visible", "Let repetition expose identity questions", "Build a slow reveal structure"],
    cinematographyTargets: ["Control space tightly", "Frame isolation inside routine", "Make work areas feel repetitive"],
    editingTargets: ["Pace reveals patiently", "Repeat patterns with small changes", "Keep the mystery contained"],
    soundTargets: ["Use restrained machine ambience", "Let quiet rooms feel isolated", "Make repeated sounds signal routine"],
    learningGoals: ["Science fiction can use confinement to explore selfhood"],
    verificationStatus: "needs_research"
  },
  scenario_midnight_in_paris_2011: {
    scenarioId: "scenario_midnight_in_paris_2011",
    title: "Midnight in Paris production brief",
    logline: "Create a romantic fantasy comedy where nostalgia, city enchantment, and a whimsical time-shift premise reveal present longing.",
    genreTargets: ["Romantic fantasy comedy", "Whimsical time-shift story", "City dream-space romance"],
    toneTargets: ["Light and wistful", "Whimsical but clear", "Romantic with comic ease"],
    screenplayTargets: ["Let nostalgia become the central conflict", "Make the premise simple to play", "Contrast longing with present life"],
    cinematographyTargets: ["Use the city as dream space", "Make streets feel enchanted", "Frame wonder through movement"],
    editingTargets: ["Keep a light comic rhythm", "Let time shifts feel graceful", "Balance fantasy with conversation"],
    soundTargets: ["Use music as period mood", "Let city ambience feel inviting", "Keep fantasy cues light"],
    learningGoals: ["Externalize longing through fantasy", "Make nostalgia playable", "Use place as romantic imagination"],
    verificationStatus: "needs_research"
  },
  scenario_the_big_lebowski_1998: {
    scenarioId: "scenario_the_big_lebowski_1998",
    title: "The Big Lebowski production brief",
    logline: "Build a comic crime mystery where mistaken identity turns an absurd investigation into a relaxed character maze.",
    genreTargets: ["Comic crime mystery", "Absurd investigation", "Mistaken-identity comedy"],
    toneTargets: ["Deadpan and odd", "Relaxed under pressure", "Playfully escalating"],
    screenplayTargets: ["Let absurd detours drive the mystery", "Set relaxed characters against crime structure", "Use social rituals as comic turns"],
    cinematographyTargets: ["Use Los Angeles as a comic maze", "Frame hangouts as investigation spaces", "Make ordinary rooms feel strange"],
    editingTargets: ["Build rhythm from detours", "Hold reactions for deadpan comedy", "Escalate through odd encounters"],
    soundTargets: ["Let dialogue carry dry humor", "Use room texture for social awkwardness", "Keep crime beats lightly off-balance"],
    learningGoals: ["Crime structure can carry absurd comedy"],
    verificationStatus: "needs_research"
  },
  scenario_leaving_las_vegas_1995: {
    scenarioId: "scenario_leaving_las_vegas_1995",
    title: "Leaving Las Vegas production brief",
    logline: "Shape an intimate tragic romance where self-destruction and fragile connection meet without a rescue fantasy.",
    genreTargets: ["Intimate tragic romance", "Two-character drama", "Self-destruction character study"],
    toneTargets: ["Emotionally honest", "Fragile and nocturnal", "Tender without rescue"],
    screenplayTargets: ["Build romance around acceptance", "Keep connection fragile", "Let honesty matter more than solutions"],
    cinematographyTargets: ["Use nightlife as emotional atmosphere", "Frame city drift as loneliness", "Hold restrained intimacy between two people"],
    editingTargets: ["Let quiet encounters breathe", "Drift between closeness and distance", "Avoid easy recovery beats"],
    soundTargets: ["Use music as loneliness", "Let nightlife sound feel adrift", "Keep intimate silences exposed"],
    learningGoals: ["Romance can be built around acceptance, not solution"],
    verificationStatus: "needs_research"
  },
  scenario_gran_torino_2008: {
    scenarioId: "scenario_gran_torino_2008",
    title: "Gran Torino production brief",
    logline: "Stage a character drama where isolation, neighbor conflict, and a changing community pressure moral change.",
    genreTargets: ["Character drama", "Neighbor-conflict story", "Moral-change drama"],
    toneTargets: ["Guarded and confrontational", "Grounded in community tension", "Controlled toward choice"],
    screenplayTargets: ["Use reluctant connection as pressure", "Set old values against change", "Show moral change through community conflict"],
    cinematographyTargets: ["Use domestic space as boundary", "Frame streets as contested ground", "Mark distance between neighbors"],
    editingTargets: ["Build toward moral choice", "Let confrontations play through performance", "Control rhythm around boundary shifts"],
    soundTargets: ["Make neighborhood sound present", "Let silence follow confrontation", "Keep dialogue pressure direct"],
    learningGoals: ["Character change can be shown through community pressure"],
    verificationStatus: "needs_research"
  },
  scenario_mesrine_public_enemy_no_1_2008: {
    scenarioId: "scenario_mesrine_public_enemy_no_1_2008",
    title: "Mesrine: Public Enemy No. 1 production brief",
    logline: "Drive a biographical crime-action thriller where notoriety, pursuit, and public image become story pressure.",
    genreTargets: ["Biographical crime thriller", "Action pursuit story", "Notoriety-driven drama"],
    toneTargets: ["Urgent and consequential", "Publicly exposed", "Escalating under pressure"],
    screenplayTargets: ["Turn reputation into story pressure", "Use pursuit as structure", "Let criminal pressure escalate choices"],
    cinematographyTargets: ["Frame public identity as threat", "Use institutions as pressure", "Keep action grounded in consequence"],
    editingTargets: ["Build action rhythm with fallout", "Escalate through chase structure", "Cut between pressure and reaction"],
    soundTargets: ["Layer media and public noise", "Use pursuit sounds as tension", "Let consequences land after action"],
    learningGoals: ["Crime biography can turn reputation into story engine"],
    verificationStatus: "needs_research"
  },
  scenario_mesrine_killer_instinct_2008: {
    scenarioId: "scenario_mesrine_killer_instinct_2008",
    title: "Mesrine: Killer Instinct production brief",
    logline: "Shape a biographical crime origin story where violence, ambition, and identity push survival choices into moral descent.",
    genreTargets: ["Biographical crime origin story", "Criminal-rise drama", "Violent survival thriller"],
    toneTargets: ["Hard-edged and volatile", "Ambitious under threat", "Morally descending"],
    screenplayTargets: ["Connect formation to system pressure", "Escalate from choice to criminal life", "Tie survival to identity"],
    cinematographyTargets: ["Build period crime-world texture", "Frame physical danger closely", "Show systems around personal choices"],
    editingTargets: ["Use sharp escalation", "Keep momentum through danger", "Track descent step by step"],
    soundTargets: ["Make danger feel physical", "Use crime-world texture sparingly", "Let quiet choices precede escalation"],
    learningGoals: ["Origin stories can connect character formation to system pressure"],
    verificationStatus: "needs_research"
  },
  scenario_the_bothersome_man_2006: {
    scenarioId: "scenario_the_bothersome_man_2006",
    title: "The Bothersome Man production brief",
    logline: "Build an absurd social satire where a pleasant world makes conformity feel like existential captivity.",
    genreTargets: ["Absurd speculative satire", "Conformity drama", "Trapped-normality mystery"],
    toneTargets: ["Pleasant but wrong", "Dryly comic", "Existentially uneasy"],
    screenplayTargets: ["Make conformity the pressure", "Reveal mystery through small disruptions", "Let alienation grow under politeness"],
    cinematographyTargets: ["Use controlled clean spaces", "Let design feel emotionally wrong", "Frame normality as a trap"],
    editingTargets: ["Keep a dry comic rhythm", "Hold discomfort after disruptions", "Let repetition expose unease"],
    soundTargets: ["Use uncomfortable silence", "Keep surfaces calmly polished", "Let small sounds disturb order"],
    learningGoals: ["Speculative worlds can critique normal life through design and tone"],
    verificationStatus: "needs_research"
  },
  scenario_buffalo_66_1998: {
    scenarioId: "scenario_buffalo_66_1998",
    title: "Buffalo '66 production brief",
    logline: "Shape an offbeat romantic tragicomedy where defensive performance hides loneliness and emotional damage.",
    genreTargets: ["Offbeat romantic tragicomedy", "Loneliness character study", "Awkward intimacy drama"],
    toneTargets: ["Defensive and wounded", "Awkwardly funny", "Suddenly vulnerable"],
    screenplayTargets: ["Make performance reveal damage", "Use awkward pauses as character action", "Let intimacy grow through contradiction"],
    cinematographyTargets: ["Use stylized framing", "Make memory feel subjective", "Frame closeness as uncomfortable"],
    editingTargets: ["Hold discomfort before release", "Let pauses create tension", "Cut sharply into vulnerability"],
    soundTargets: ["Use music as emotional rupture", "Let silence expose defenses", "Shift sound with memory and feeling"],
    learningGoals: ["Romance can grow from contradiction and awkward performance"],
    verificationStatus: "needs_research"
  },
  scenario_dogville_2003: {
    scenarioId: "scenario_dogville_2003",
    title: "Dogville production brief",
    logline: "Stage a theatrical moral crime drama where community pressure turns a social experiment into exploitation.",
    genreTargets: ["Theatrical moral crime drama", "Community pressure story", "Social experiment drama"],
    toneTargets: ["Severe and analytical", "Morally escalating", "Exposed and judgmental"],
    screenplayTargets: ["Repeat situations to shift power", "Make staging expose the community's rules", "Escalate exploitation through consent"],
    cinematographyTargets: ["Use stripped-down staging", "Make space function as judgment", "Frame bodies inside social rules"],
    editingTargets: ["Build chapter-like escalation", "Track power shifts clearly", "Let repetition become accusation"],
    soundTargets: ["Use voice as judgment", "Let empty space speak", "Keep community pressure audible"],
    learningGoals: ["Stripped-down staging can expose social rules and moral violence"],
    verificationStatus: "needs_research"
  },
  scenario_down_by_law_1986: {
    scenarioId: "scenario_down_by_law_1986",
    title: "Down by Law production brief",
    logline: "Create a deadpan prison and escape comedy drama where mismatched outsiders drift into reluctant friendship.",
    genreTargets: ["Deadpan prison comedy drama", "Escape story", "Mismatched outsider friendship"],
    toneTargets: ["Dry and spare", "Slowly comic", "Detached but tender"],
    screenplayTargets: ["Keep plot minimal", "Build rhythm from character friction", "Let friendship arrive reluctantly"],
    cinematographyTargets: ["Use black-and-white spareness", "Frame outsiders in empty space", "Keep the world visually restrained"],
    editingTargets: ["Hold slow comic timing", "Let pauses do story work", "Make small shifts feel dramatic"],
    soundTargets: ["Use music as mood and drift", "Let voices define rhythm", "Keep silence relaxed and strange"],
    learningGoals: ["Deadpan rhythm can make small character shifts feel dramatic"],
    verificationStatus: "needs_research"
  },
  scenario_american_splendor_2003: {
    scenarioId: "scenario_american_splendor_2003",
    title: "American Splendor production brief",
    logline: "Build a biographical comic drama where ordinary frustration becomes story through self-reflexive form.",
    genreTargets: ["Biographical comic drama", "Everyday-life character study", "Self-reflexive biography"],
    toneTargets: ["Dry and observant", "Plainspoken and frustrated", "Funny without polish"],
    screenplayTargets: ["Turn ordinary frustration into story material", "Mix biography with self-commentary", "Let everyday routines reveal character"],
    cinematographyTargets: ["Mix realism with performance", "Use comic-book framing lightly", "Frame ordinary spaces as expressive"],
    editingTargets: ["Cut between forms clearly", "Use dry humor through observation", "Let routine create rhythm"],
    soundTargets: ["Use voiceover texture", "Keep interview-like directness", "Let ordinary noise ground the humor"],
    learningGoals: ["Biography can use form-mixing to show ordinary experience"],
    verificationStatus: "needs_research"
  },
  scenario_mystery_train_1989: {
    scenarioId: "scenario_mystery_train_1989",
    title: "Mystery Train production brief",
    logline: "Build a deadpan ensemble comedy-crime drama where lonely travellers cross through one shared city night.",
    genreTargets: ["Deadpan ensemble comedy", "Crime-tinged city drama", "Intersecting traveller stories"],
    toneTargets: ["Lonely and offbeat", "Dryly comic", "Slow and atmospheric"],
    screenplayTargets: ["Connect separate stories through shared place", "Let rituals reveal lonely travellers", "Use pop memory as mood"],
    cinematographyTargets: ["Make the hotel a narrative junction", "Treat city spaces as memory", "Frame encounters with distance"],
    editingTargets: ["Hold pauses for deadpan timing", "Let stories echo through rhythm", "Keep intersections clear and quiet"],
    soundTargets: ["Use music as identity", "Let voices shape atmosphere", "Make city sound feel nocturnal"],
    learningGoals: ["Separate stories can be joined through place, rhythm and mood"],
    verificationStatus: "needs_research"
  },
  scenario_dheepan_2015: {
    scenarioId: "scenario_dheepan_2015",
    title: "Dheepan production brief",
    logline: "Shape an immigrant crime-social drama where a false family seeks belonging as private trauma meets public violence.",
    genreTargets: ["Immigrant social drama", "Crime-pressure thriller", "False-family survival story"],
    toneTargets: ["Restrained and fragile", "Grounded in realism", "Suddenly threatening"],
    screenplayTargets: ["Build belonging through survival", "Let private trauma meet public violence", "Make family roles practical and tense"],
    cinematographyTargets: ["Use housing space as pressure", "Frame community distance clearly", "Keep danger close to routine"],
    editingTargets: ["Let realism tighten into thriller", "Hold quiet before sudden threat", "Track stakes through environment"],
    soundTargets: ["Use social noise as pressure", "Make distance audible", "Let danger enter through sound"],
    learningGoals: ["Social realism can become thriller through environment and stakes"],
    verificationStatus: "needs_research"
  },
  scenario_the_pianist_2002: {
    scenarioId: "scenario_the_pianist_2002",
    title: "The Pianist production brief",
    logline: "Create a historical survival drama where isolation, hiding, and music make endurance experiential.",
    genreTargets: ["Historical survival drama", "Music-focused character study", "Isolation under threat"],
    toneTargets: ["Restrained and grave", "Isolated and watchful", "Cumulatively pressured"],
    screenplayTargets: ["Build survival through absence", "Make hiding active drama", "Tie endurance to artistic identity"],
    cinematographyTargets: ["Use rooms as danger and refuge", "Frame observation under threat", "Make city space unstable"],
    editingTargets: ["Keep pacing restrained", "Let pressure accumulate", "Hold survival moments without rush"],
    soundTargets: ["Make silence part of survival", "Use music as emotional structure", "Let absence shape tension"],
    learningGoals: ["Historical drama can use restraint to make survival experiential"],
    verificationStatus: "needs_research"
  },
  scenario_crash_2004: {
    scenarioId: "scenario_crash_2004",
    title: "Crash production brief",
    logline: "Build an ensemble social crime drama where intersecting lives turn prejudice, fear, and coincidence into collision.",
    genreTargets: ["Ensemble social crime drama", "Intersecting-lives structure", "Moral collision story"],
    toneTargets: ["Tense and confrontational", "Urban and volatile", "Morally pressured"],
    screenplayTargets: ["Intersect lives through consequence", "Turn fear into sudden action", "Expose prejudice through confrontation"],
    cinematographyTargets: ["Use the city as a network", "Frame encounters as pressure points", "Keep collisions visually direct"],
    editingTargets: ["Cross-cut social tension", "Use coincidence as structure", "Build impact through collision"],
    soundTargets: ["Let dialogue confront and expose", "Use city noise as pressure", "Hold silence after impact"],
    learningGoals: ["Ensemble structure can turn social tension into dramatic collision"],
    verificationStatus: "needs_research"
  },
  scenario_groundhog_day_1993: {
    scenarioId: "scenario_groundhog_day_1993",
    title: "Groundhog Day production brief",
    logline: "Design a fantasy romantic comedy where a repeating day turns comic routine into self-knowledge and moral change.",
    genreTargets: ["Fantasy romantic comedy", "Repetition-premise comedy", "Moral-change character story"],
    toneTargets: ["Playful and structured", "Comic under pressure", "Warmly transformational"],
    screenplayTargets: ["Use repetition as character pressure", "Turn routine into transformation", "Let fantasy rules drive growth"],
    cinematographyTargets: ["Make the town a game board", "Repeat spaces with variation", "Frame routine as a reset"],
    editingTargets: ["Build rhythm from variation", "Pay off repeated setups", "Keep resets clear and comic"],
    soundTargets: ["Use cues as ritual", "Make reset sounds readable", "Let repetition become payoff"],
    learningGoals: ["Fantasy rules can drive comedy, structure and character growth"],
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
