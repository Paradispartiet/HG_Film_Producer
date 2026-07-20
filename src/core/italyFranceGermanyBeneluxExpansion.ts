import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import type { ModernCanonExpansionDefinition } from "./modernCanonExpansion.js";

export const italyFranceGermanyBeneluxExpansionDefinitions = [
  {
    id: "scenario_bicycle_thieves_1948", title: "Bicycle Thieves", originalTitle: "Ladri di biciclette", aliases: ["The Bicycle Thief"], year: 1948,
    directors: ["Vittorio De Sica"], genres: ["Drama"], tradition: "Italian neorealism, postwar location filmmaking and working-class moral drama", tone: "Immediate, humane and materially pressured",
    premise: "Follow an unemployed father and his son through Rome after the bicycle required for his new job is stolen, turning one practical loss into a widening crisis of dignity.", screenplay: "Build the search as a chain of concrete encounters in which each failed lead increases economic and moral pressure without manufacturing a conventional villain.", image: "Use streets, markets, transport, crowds and ordinary faces so the city becomes both evidence and obstacle.", editing: "Keep the journey clear and cumulative, allowing pauses between searches to expose the changing bond between father and son.", sound: "Layer traffic, voices, markets, footsteps and restrained music so public life remains present around private desperation.", learning: "Study how location, non-glamorous performance and a simple objective can carry social history and moral consequence."
  },
  {
    id: "scenario_l_avventura_1960", title: "L'Avventura", originalTitle: "L'avventura", year: 1960,
    directors: ["Michelangelo Antonioni"], genres: ["Drama", "Mystery"], tradition: "Italian modernism, landscape alienation and narrative displacement", tone: "Cool, suspended and emotionally unstable",
    premise: "Begin with a woman's disappearance during a wealthy group's island trip, then let the search dissolve into a new relationship shaped by absence, boredom and uncertain desire.", screenplay: "Use the missing person as an initiating rupture rather than a mystery to solve, allowing attention to shift toward unstable intimacy and social emptiness.", image: "Compose bodies against rock, architecture and open space so landscape and framing reveal distance more clearly than dialogue.", editing: "Let scenes end without conventional payoff and use ellipsis to make emotional drift and unresolved absence part of the structure.", sound: "Keep wind, sea, footsteps, sparse dialogue and environmental quiet exposed so space continues the drama beyond speech.", learning: "Understand how a film can redirect narrative expectation from solution toward duration, space and changing attention."
  },
  {
    id: "scenario_the_leopard_1963", title: "The Leopard", originalTitle: "Il Gattopardo", aliases: ["Il gattopardo"], year: 1963,
    directors: ["Luchino Visconti"], genres: ["Drama", "History"], tradition: "Italian historical epic, aristocratic decline and widescreen mise-en-scène", tone: "Luxurious, elegiac and politically lucid",
    premise: "Follow a Sicilian prince through revolution and social transition as his family's survival requires accommodation with a new ruling class.", screenplay: "Connect national change to family strategy, marriage and the protagonist's awareness that adaptation will preserve status while ending his world.", image: "Use palaces, landscapes, uniforms, dust, costume and large ensemble blocking to make class transition visible in every space.", editing: "Balance campaign movement, domestic negotiation and the extended ball so historical change accumulates through contrast and duration.", sound: "Layer military movement, ceremony, dance music, conversation and silence to distinguish public transition from private recognition.", learning: "Study how production design, ensemble staging and duration can turn political history into lived social change."
  },
  {
    id: "scenario_the_gospel_according_to_st_matthew_1964", title: "The Gospel According to St. Matthew", originalTitle: "Il vangelo secondo Matteo", aliases: ["The Gospel According to Matthew"], year: 1964,
    directors: ["Pier Paolo Pasolini"], genres: ["Biography", "Drama", "History"], tradition: "Italian poetic realism, sacred adaptation and non-studio historical cinema", tone: "Austere, direct and spiritually charged",
    premise: "Stage the life and teachings of Jesus through stark landscapes, non-glamorous faces and a visual language that joins scripture to contemporary social urgency.", screenplay: "Follow the Gospel's episodic progression closely while using selection and performance to keep teaching, conflict and movement dramatically immediate.", image: "Use rough locations, frontal faces, handheld observation, long lenses and varied art-historical references instead of polished biblical spectacle.", editing: "Join sermons, journeys, miracles and confrontation through direct cuts and rhythmic contrast rather than seamless prestige continuity.", sound: "Combine spoken scripture, silence, natural ambience and music from different traditions to create sacred intensity without uniform period realism.", learning: "Examine how casting, location and audiovisual contrast can radically reframe a canonical text without abandoning its structure."
  },
  {
    id: "scenario_amarcord_1973", title: "Amarcord", originalTitle: "Amarcord", year: 1973,
    directors: ["Federico Fellini"], genres: ["Comedy", "Drama"], tradition: "Italian memory cinema, provincial ensemble comedy and studio-built recollection", tone: "Carnivalesque, nostalgic and grotesque",
    premise: "Reconstruct a year in a provincial town through adolescent desire, family conflict, public ritual and fascist spectacle as remembered rather than objectively recorded.", screenplay: "Organize recurring townspeople and seasonal episodes around emotional memory, allowing exaggeration and contradiction to replace linear autobiography.", image: "Use controlled studio streets, fog, costumes, crowds and theatrical scale to make recollection visibly artificial and sensuous.", editing: "Move by association, season and recurring figures so episodes accumulate into a communal portrait rather than a single plot.", sound: "Use narration, music, dialect, public announcements and exaggerated effects to make memory communal, comic and unstable.", learning: "Study how production design and episodic structure can turn personal memory into an invented social world."
  },
  {
    id: "scenario_cinema_paradiso_1988", title: "Cinema Paradiso", originalTitle: "Nuovo Cinema Paradiso", aliases: ["Nuovo cinema Paradiso"], year: 1988,
    directors: ["Giuseppe Tornatore"], genres: ["Drama", "Romance"], tradition: "Italian memory melodrama, cinema-about-cinema and provincial coming-of-age", tone: "Warm, nostalgic and bittersweet",
    premise: "Follow a boy's friendship with a projectionist and his departure from a Sicilian town, framing cinema as workplace, public ritual and memory rather than abstract enchantment.", screenplay: "Use the adult return to organize childhood, apprenticeship, first love and separation while keeping the projection booth and town audience central.", image: "Build the theatre, square, booth, film light and changing town as a material history of spectatorship.", editing: "Move across decades through remembered episodes and recurring places, reserving emotional release for images assembled from what was once censored.", sound: "Use projector noise, audience response, dialogue, town ambience and recurring score to connect craft, community and recollection.", learning: "Understand how a film can dramatize exhibition, projection labour and spectatorship as part of cinema history."
  },
  {
    id: "scenario_the_great_beauty_2013", title: "The Great Beauty", originalTitle: "La grande bellezza", year: 2013,
    directors: ["Paolo Sorrentino"], genres: ["Drama"], tradition: "Contemporary Italian baroque, urban social panorama and reflective spectacle", tone: "Dazzling, weary and elegiac",
    premise: "Follow an aging writer through Rome's parties, monuments and private encounters as social brilliance gives way to questions of wasted time and lost artistic purpose.", screenplay: "Build an episodic social circuit around recurring questions of beauty, memory and self-deception rather than a goal-driven plot.", image: "Use sweeping camera movement, monumental architecture, faces, nocturnal parties and abrupt shifts of scale to contrast spectacle with interior fatigue.", editing: "Collide energetic social montage with still reflective passages so excess and emptiness remain formally connected.", sound: "Layer dance music, sacred music, city ambience, conversation and silence to move between public performance and private reckoning.", learning: "Study how camera movement, montage and music can make a city both spectacle and psychological landscape."
  },
  {
    id: "scenario_the_400_blows_1959", title: "The 400 Blows", originalTitle: "Les quatre cents coups", aliases: ["Les 400 coups"], year: 1959,
    directors: ["François Truffaut"], genres: ["Crime", "Drama"], tradition: "French New Wave, autobiographical youth cinema and location freedom", tone: "Restless, observant and unsentimental",
    premise: "Follow a Paris schoolboy through family neglect, truancy, petty crime and institutional punishment while preserving his energy and point of view.", screenplay: "Build from repeated escapes and consequences rather than moral lesson, keeping adults partial and the child's behaviour emotionally legible.", image: "Use Paris streets, compact interiors, mobile camera work and direct attention to the young performer.", editing: "Move briskly through school, home and street life while allowing key moments of isolation and the final run to expand in duration.", sound: "Keep classrooms, streets, family argument, fairground noise and restrained music grounded in the child's lived world.", learning: "Study how location shooting, performance and episodic structure can create a modern youth perspective."
  },
  {
    id: "scenario_breathless_1960", title: "Breathless", originalTitle: "À bout de souffle", aliases: ["A bout de souffle"], year: 1960,
    directors: ["Jean-Luc Godard"], genres: ["Crime", "Drama", "Romance"], tradition: "French New Wave, low-budget genre revision and jump-cut modernism", tone: "Casual, volatile and self-conscious",
    premise: "Follow a petty criminal and an American student through Paris as borrowed gangster poses collide with intimacy, delay and an increasingly unavoidable police pursuit.", screenplay: "Keep the crime plot deliberately thin so conversation, performance and contradiction can challenge the protagonist's cinematic self-image.", image: "Use available locations, handheld movement, natural light and direct street observation rather than polished studio continuity.", editing: "Employ jump cuts, ellipsis and abrupt duration changes to expose construction while maintaining the basic pursuit.", sound: "Let street noise, improvised-feeling dialogue, music and uneven acoustic texture preserve immediacy.", learning: "Understand how production economy and editing rupture can transform a familiar genre into a new film language."
  },
  {
    id: "scenario_last_year_at_marienbad_1961", title: "Last Year at Marienbad", originalTitle: "L'année dernière à Marienbad", aliases: ["L'annee derniere a Marienbad"], year: 1961,
    directors: ["Alain Resnais"], genres: ["Drama", "Mystery"], tradition: "French Left Bank modernism, memory puzzle and architectural narration", tone: "Hypnotic, formal and uncertain",
    premise: "Place three figures in an ornate hotel where one man insists a woman promised to leave with him the previous year, while memory, persuasion and invention become impossible to separate.", screenplay: "Build through repeated claims, altered scenes and contradictory temporal markers rather than a recoverable objective chronology.", image: "Use symmetrical corridors, mirrors, gardens, statues and controlled bodies to turn architecture into a system of memory and power.", editing: "Repeat gestures, spaces and dialogue with variations so time appears reconstructed on each return.", sound: "Use insistent narration, organ music, footsteps and reverberant interiors to make language and space equally coercive.", learning: "Study how repetition, architecture and sound can create narrative uncertainty without relying on hidden-plot revelation."
  },
  {
    id: "scenario_au_hasard_balthazar_1966", title: "Au Hasard Balthazar", originalTitle: "Au hasard Balthazar", year: 1966,
    directors: ["Robert Bresson"], genres: ["Drama"], tradition: "French spiritual minimalism, model performance and elliptical moral cinema", tone: "Severe, compassionate and unsentimental",
    premise: "Follow a donkey passed among owners whose uses, cruelties and moments of care reveal a human community through material action rather than explanation.", screenplay: "Build an episodic chain of ownership and consequence, keeping emotional interpretation indirect and refusing conventional rescue structure.", image: "Frame hands, objects, doors, bodies and the animal's physical presence with controlled economy.", editing: "Use ellipsis and action fragments to connect events through cause and moral resonance rather than continuous dramatic display.", sound: "Let bells, hooves, machinery, voices and offscreen events carry actions the image withholds.", learning: "Understand how restricted performance, fragmentary framing and sound can create ethical force through restraint."
  },
  {
    id: "scenario_playtime_1967", title: "Playtime", originalTitle: "Playtime", year: 1967,
    directors: ["Jacques Tati"], genres: ["Comedy"], tradition: "French architectural comedy, large-format ensemble choreography and modern urban satire", tone: "Precise, playful and observational",
    premise: "Send tourists and office workers through a glass-and-steel Paris where design, technology and social routine generate comedy across the entire frame.", screenplay: "Organize movement through spaces and recurring figures rather than a dominant protagonist or dialogue-driven plot.", image: "Use deep widescreen compositions, reflective surfaces, repeated architecture and simultaneous background action.", editing: "Hold wide shots long enough for viewers to discover several comic events and let spatial transitions become the main narrative links.", sound: "Build jokes from footsteps, doors, machinery, voices and mismatched acoustic signals rather than verbal punch lines.", learning: "Study how production design, ensemble blocking and sound can create comedy without directing attention through close-up coverage."
  },
  {
    id: "scenario_la_haine_1995", title: "La Haine", originalTitle: "La haine", aliases: ["Hate"], year: 1995,
    directors: ["Mathieu Kassovitz"], genres: ["Crime", "Drama"], tradition: "French banlieue cinema, black-and-white urban pressure and compressed-time ensemble drama", tone: "Angry, kinetic and fatalistic",
    premise: "Follow three friends through the day after a riot as police violence, masculinity and social exclusion turn waiting into escalating risk.", screenplay: "Use a ticking time frame, repeated encounters and shifting group tension to connect structural pressure with personal choices.", image: "Move between estate architecture, trains, central Paris and close performance using stark black-and-white contrast.", editing: "Mark time explicitly and alternate drift, confrontation and sudden acceleration while preserving the group's changing balance.", sound: "Use hip-hop, street ambience, sirens, multilingual dialogue and abrupt silence as social geography.", learning: "Examine how time structure, location and ensemble performance can turn urban marginalization into immediate dramatic pressure."
  },
  {
    id: "scenario_portrait_of_a_lady_on_fire_2019", title: "Portrait of a Lady on Fire", originalTitle: "Portrait de la jeune fille en feu", year: 2019,
    directors: ["Céline Sciamma"], genres: ["Drama", "Romance"], tradition: "French period romance, female gaze and controlled chamber cinema", tone: "Intimate, lucid and smouldering",
    premise: "Follow a painter secretly observing a reluctant bride on an isolated coast until the act of looking becomes reciprocal love and a record of limited time.", screenplay: "Build intimacy through repeated walks, sittings, conversation and shared knowledge while keeping marriage and departure as fixed constraints.", image: "Use faces, hands, firelight, coastal landscape and composed interiors to make looking an active exchange.", editing: "Let observation become recognition through measured repetitions and visual callbacks, avoiding unnecessary coverage.", sound: "Restrict music, foreground breath, fabric, footsteps, sea and voices, and reserve musical release for decisive moments.", learning: "Study how framing, performance and selective sound can construct desire through mutual observation rather than spectacle."
  },
  {
    id: "scenario_aguirre_the_wrath_of_god_1972", title: "Aguirre, the Wrath of God", originalTitle: "Aguirre, der Zorn Gottes", year: 1972,
    directors: ["Werner Herzog"], genres: ["Adventure", "Biography", "Drama"], tradition: "New German Cinema, extreme-location historical production and descent narrative", tone: "Hallucinatory, perilous and obsessive",
    premise: "Follow a splinter expedition down the Amazon as one man's hunger for power turns logistical collapse into delusion and collective ruin.", screenplay: "Reduce the expedition to a tightening chain of mutiny, hunger, disappearance and fantasy while preserving the group's practical predicament.", image: "Use real river terrain, unstable rafts, mist, jungle and bodies under physical strain so production difficulty remains visible.", editing: "Move from collective movement toward isolation and circular obsession, allowing environment to erode conventional action rhythm.", sound: "Combine river, insects, voices, sparse electronic music and uncanny quiet to make landscape both real and metaphysical.", learning: "Study how extreme location, physical logistics and controlled myth can merge in historical filmmaking."
  },
  {
    id: "scenario_ali_fear_eats_the_soul_1974", title: "Ali: Fear Eats the Soul", originalTitle: "Angst essen Seele auf", aliases: ["Fear Eats the Soul"], year: 1974,
    directors: ["Rainer Werner Fassbinder"], genres: ["Drama", "Romance"], tradition: "New German Cinema, social melodrama and stylized everyday prejudice", tone: "Tender, exposed and socially severe",
    premise: "Follow an older German cleaner and a younger Moroccan worker whose marriage reveals racism, loneliness and conditional acceptance in ordinary social spaces.", screenplay: "Use the relationship to test neighbours, family, work and commercial dependence, allowing apparent acceptance to expose new forms of pressure.", image: "Frame doorways, stairwells, cafés and groups at a distance so social judgment becomes spatially visible.", editing: "Move directly between social tests and private recovery, keeping melodramatic clarity without sentimental escape.", sound: "Use sparse dialogue, jukebox music, room tone and exposed silences to make isolation audible.", learning: "Understand how stylized blocking and melodrama can reveal prejudice through ordinary transactions."
  },
  {
    id: "scenario_the_marriage_of_maria_braun_1979", title: "The Marriage of Maria Braun", originalTitle: "Die Ehe der Maria Braun", year: 1979,
    directors: ["Rainer Werner Fassbinder"], genres: ["Drama"], tradition: "New German Cinema, postwar melodrama and national allegory", tone: "Controlled, ambitious and corrosive",
    premise: "Follow a woman rebuilding her life and status in postwar West Germany while her absent marriage becomes both emotional promise and economic strategy.", screenplay: "Connect personal bargains, labour and romantic calculation to national reconstruction without reducing the protagonist to a symbol.", image: "Use period interiors, mirrors, clothing and precise blocking to track changing power and social mobility.", editing: "Move through years with confident ellipsis while using recurring relationships and broadcasts to bind private life to public history.", sound: "Layer radio commentary, popular music, business spaces and domestic quiet so national recovery remains continuously audible.", learning: "Study how melodrama, period design and sound can make economic history inseparable from character ambition."
  },
  {
    id: "scenario_wings_of_desire_1987", title: "Wings of Desire", originalTitle: "Der Himmel über Berlin", aliases: ["Der Himmel uber Berlin"], year: 1987,
    directors: ["Wim Wenders"], genres: ["Drama", "Fantasy", "Romance"], tradition: "West German poetic city cinema, divided-Berlin modernism and angelic point of view", tone: "Reflective, yearning and humane",
    premise: "Follow an angel listening to Berliners' thoughts who chooses mortality after becoming drawn to a lonely trapeze artist and the textures of embodied life.", screenplay: "Use observation, interior voices and gradual desire to move from detached witness toward a concrete irreversible choice.", image: "Contrast monochrome angelic perception with colour human experience while using Berlin ruins, libraries, streets and performance spaces.", editing: "Drift among citizens and memories before tightening around the angel's decision and encounter.", sound: "Layer inner monologue, city ambience, live music, silence and multilingual voices to make listening the film's central action.", learning: "Examine how colour, voice-over and urban observation can define competing states of existence."
  },
  {
    id: "scenario_run_lola_run_1998", title: "Run Lola Run", originalTitle: "Lola rennt", year: 1998,
    directors: ["Tom Tykwer"], genres: ["Action", "Crime", "Thriller"], tradition: "Post-reunification German kinetic cinema, recursive narrative and multimedia energy", tone: "Urgent, playful and propulsive",
    premise: "Give a young woman twenty minutes to find money and save her boyfriend, then replay the run with small changes that produce radically different outcomes.", screenplay: "Build three iterations around the same objective and locations, using variation to reveal contingency rather than simple repetition.", image: "Combine running camera work, bold colour, animation, still images and changing formats to keep time physically visible.", editing: "Cut to electronic rhythm, compress side-character futures and reset the narrative cleanly between iterations.", sound: "Use a driving electronic pulse, breath, traffic, phones and repeated dialogue as the clockwork of each run.", learning: "Study how repetition, editing and music can turn a simple deadline into a formal narrative experiment."
  },
  {
    id: "scenario_the_white_ribbon_2009", title: "The White Ribbon", originalTitle: "Das weiße Band", aliases: ["Das weisse Band"], year: 2009,
    directors: ["Michael Haneke"], genres: ["Drama", "Mystery"], tradition: "German-language historical austerity, village ensemble and origins-of-violence inquiry", tone: "Cold, controlled and ominous",
    premise: "Investigate unexplained acts of violence in a prewar village where authority, punishment and secrecy shape children and adults alike.", screenplay: "Distribute suspicion across families and institutions, using an uncertain retrospective narrator without resolving every event.", image: "Use severe black-and-white compositions, period spaces and controlled distance to expose hierarchy and withheld emotion.", editing: "Let incidents accumulate through measured ellipsis and return to routine, making uncertainty structural rather than sensational.", sound: "Keep voices, farm work, church, rooms and offscreen disturbance precise while avoiding manipulative scoring.", learning: "Understand how historical production design, ensemble structure and withheld information can investigate social violence."
  },
  {
    id: "scenario_phoenix_2014", title: "Phoenix", originalTitle: "Phoenix", year: 2014,
    directors: ["Christian Petzold"], genres: ["Drama", "History", "Romance"], tradition: "Berlin School melodrama, postwar identity drama and controlled genre revision", tone: "Restrained, haunted and suspenseful",
    premise: "Follow a concentration-camp survivor reconstructed after facial injury who returns to Berlin and encounters a husband who does not recognize her but recruits her to impersonate his presumed-dead wife.", screenplay: "Build the identity premise through practical rehearsal, withheld recognition and emotional asymmetry rather than overt thriller mechanics.", image: "Use postwar ruins, clubs, mirrors, doorways and controlled close observation to make identity spatial and performative.", editing: "Progress through rehearsals and tests with precise ellipsis, reserving revelation for one concentrated final performance.", sound: "Use footsteps, rooms, nightclub music, restrained dialogue and the concluding song as evidence and memory.", learning: "Study how melodrama, performance and delayed recognition can carry historical trauma without explanatory excess."
  },
  {
    id: "scenario_the_vanishing_1988", title: "The Vanishing", originalTitle: "Spoorloos", aliases: ["Spoorloos"], year: 1988,
    directors: ["George Sluizer"], genres: ["Crime", "Mystery", "Thriller"], tradition: "Dutch-French psychological thriller, procedural obsession and radical information control", tone: "Calm, exact and terrifying",
    premise: "Follow a man unable to abandon the search for his vanished partner while the perpetrator methodically tests whether curiosity can overcome self-preservation.", screenplay: "Reveal the abductor early and shift suspense from identity to process, motive and the protagonist's willingness to know.", image: "Use ordinary roads, service stations, homes and measured framing so horror remains embedded in normality.", editing: "Intercut victim, searcher and perpetrator across time with clarity, making repetition and preparation more disturbing than surprise.", sound: "Keep traffic, domestic routine, conversation and silence naturalistic so the central threat never needs exaggeration.", learning: "Study how suspense can intensify after the perpetrator is known by relocating uncertainty to process and choice."
  },
  {
    id: "scenario_character_1997", title: "Character", originalTitle: "Karakter", aliases: ["Karakter"], year: 1997,
    directors: ["Mike van Diem"], genres: ["Crime", "Drama", "Mystery"], tradition: "Dutch literary period drama, paternal conflict and expressionist urban design", tone: "Severe, atmospheric and driven",
    premise: "Trace a young man's rise through law and education under the shadow of a ruthless bailiff who may be both his enemy and father.", screenplay: "Build advancement through work, debt, humiliation and repeated confrontation while using the murder inquiry as a framing pressure.", image: "Use monumental offices, wet streets, staircases, period interiors and strong contrast to make ambition architectural.", editing: "Move through formative episodes with clear causal pressure while preserving uncertainty around the final confrontation.", sound: "Layer offices, streets, legal procedure, machinery and restrained score into a hard institutional world.", learning: "Examine how period design and recurring confrontation can turn a literary life story into a visual struggle over authority."
  },
  {
    id: "scenario_rosetta_1999", title: "Rosetta", originalTitle: "Rosetta", year: 1999,
    directors: ["Jean-Pierre Dardenne", "Luc Dardenne"], genres: ["Drama"], tradition: "Belgian social realism, handheld proximity and labour survival drama", tone: "Immediate, abrasive and unsentimental",
    premise: "Stay close to a teenage girl fighting for stable work while poverty, family instability and shame make every practical decision urgent.", screenplay: "Build from job searches, transport, hiding and betrayal, keeping survival needs visible in each action.", image: "Use handheld physical proximity, real locations and partial views that force the audience to move with the protagonist.", editing: "Cut around urgent actions and transitions without explanatory distance, making exhaustion cumulative.", sound: "Foreground breath, footsteps, traffic, machinery and work environments with minimal musical cushioning.", learning: "Study how camera proximity and procedural action can create social drama without commentary or sentimentality."
  },
  {
    id: "scenario_the_child_2005", title: "The Child", originalTitle: "L'Enfant", aliases: ["L'enfant"], year: 2005,
    directors: ["Jean-Pierre Dardenne", "Luc Dardenne"], genres: ["Crime", "Drama"], tradition: "Belgian social realism, moral action drama and handheld urban observation", tone: "Restless, direct and morally urgent",
    premise: "Follow a young petty criminal who sells his newborn child and then confronts the practical and emotional consequences of treating every relationship as a transaction.", screenplay: "Turn one impulsive act into a chain of attempts to reverse damage, making moral change visible through concrete tasks rather than confession.", image: "Use streets, riverbanks, small rooms and handheld pursuit to keep bodies inside economic and social pressure.", editing: "Maintain forward motion through actions and consequences while allowing brief pauses where responsibility becomes unavoidable.", sound: "Keep traffic, phones, footsteps, voices and city ambience exposed, with little protection from the surrounding world.", learning: "Understand how a moral arc can be built through physical action, transaction and consequence instead of explanatory dialogue."
  },
  {
    id: "scenario_the_broken_circle_breakdown_2012", title: "The Broken Circle Breakdown", originalTitle: "The Broken Circle Breakdown", year: 2012,
    directors: ["Felix van Groeningen"], genres: ["Drama", "Music", "Romance"], tradition: "Belgian nonlinear melodrama, bluegrass performance and grief narrative", tone: "Passionate, fragmented and devastating",
    premise: "Follow a musician couple whose love, performances and conflicting beliefs are reshaped by their child's illness and death.", screenplay: "Move nonlinearly among courtship, family life, illness and aftermath so memory and performance continually reframe the relationship.", image: "Contrast intimate domestic spaces, hospital rooms, tattoos, countryside and live stages to hold private grief beside public music.", editing: "Use temporal jumps and musical transitions to compare hope, rupture and remembered connection.", sound: "Make bluegrass performance, rehearsal, hospital quiet and argument central to emotional structure rather than decorative score.", learning: "Examine how nonlinear editing and live music can organize a melodrama around memory and incompatible grief."
  },
  {
    id: "scenario_the_brand_new_testament_2015", title: "The Brand New Testament", originalTitle: "Le Tout Nouveau Testament", year: 2015,
    directors: ["Jaco Van Dormael"], genres: ["Comedy", "Fantasy"], tradition: "Belgian-Luxembourgish surreal comedy, urban fable and episodic ensemble fantasy", tone: "Whimsical, irreverent and melancholy",
    premise: "Imagine God as a cruel bureaucrat in Brussels whose daughter escapes, reveals everyone's death date and gathers new apostles among ordinary lonely people.", screenplay: "Use the central fantasy rule to launch episodic portraits while building a family rebellion toward a transformed world.", image: "Mix domestic absurdity, Brussels locations, stylized colour and visual invention so the divine remains materially comic.", editing: "Move between apostles through chapter-like episodes and recurring countdown information while preserving the daughter's journey.", sound: "Use narration, everyday city sound, playful effects and music to shift between satire and tenderness.", learning: "Study how a clear fantasy rule and episodic ensemble can support social comedy without losing emotional continuity."
  },
  {
    id: "scenario_close_2022", title: "Close", originalTitle: "Close", year: 2022,
    directors: ["Lukas Dhont"], genres: ["Drama"], tradition: "Contemporary Belgian coming-of-age cinema, embodied intimacy and grief observation", tone: "Tender, exposed and restrained",
    premise: "Follow two inseparable boys whose friendship is altered by peer scrutiny, separation and a loss that one survivor cannot easily explain.", screenplay: "Build from ordinary closeness and social pressure, allowing avoidance and guilt to shape the second half without diagnostic speeches.", image: "Use faces, bodies in motion, school spaces, fields and changing physical distance to make relationship shifts visible.", editing: "Move from fluid shared activity to fractured routines and hesitant attempts at contact, using ellipsis to respect grief.", sound: "Foreground breath, classrooms, sports, fields, family rooms and selective music so emotion remains embodied.", learning: "Study how performance, physical distance and restrained ellipsis can portray friendship, shame and grief without overstatement."
  },
] as const satisfies readonly ModernCanonExpansionDefinition[];

const IDENTITY_GUARDED_IDS: ReadonlySet<string> = new Set(
  italyFranceGermanyBeneluxExpansionDefinitions.map((definition) => definition.id),
);

export function normalizeItalyFranceGermanyBeneluxTitle(value: string): string {
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
  const scenarioDirectors = scenario.film.directors.map(normalizeItalyFranceGermanyBeneluxTitle);
  return definition.directors
    .map(normalizeItalyFranceGermanyBeneluxTitle)
    .some((director) => scenarioDirectors.includes(director));
}

export function scenarioMatchesItalyFranceGermanyBeneluxDefinition(
  scenario: HistoricalFilmScenario,
  definition: ModernCanonExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;

  const scenarioTitles = [scenario.film.title, scenario.film.original_title]
    .map(normalizeItalyFranceGermanyBeneluxTitle);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])]
    .map(normalizeItalyFranceGermanyBeneluxTitle);
  if (!scenarioTitles.some((title) => definitionTitles.includes(title))) return false;

  if (!IDENTITY_GUARDED_IDS.has(definition.id)) return true;

  const normalizedEnglishTitle = normalizeItalyFranceGermanyBeneluxTitle(definition.title);
  const identityTitles = [definition.originalTitle, ...(definition.aliases ?? [])]
    .map(normalizeItalyFranceGermanyBeneluxTitle)
    .filter((title) => title && title !== normalizedEnglishTitle);
  const originalTitleMatches = identityTitles.includes(
    normalizeItalyFranceGermanyBeneluxTitle(scenario.film.original_title),
  );

  return originalTitleMatches || directorsOverlap(scenario, definition);
}

export function getItalyFranceGermanyBeneluxExpansionDefinition(
  scenario: HistoricalFilmScenario,
): ModernCanonExpansionDefinition | undefined {
  return italyFranceGermanyBeneluxExpansionDefinitions.find((definition) => (
    scenarioMatchesItalyFranceGermanyBeneluxDefinition(scenario, definition)
  ));
}

export function mergeItalyFranceGermanyBeneluxExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of italyFranceGermanyBeneluxExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesItalyFranceGermanyBeneluxDefinition(scenario, definition))) continue;
    merged.push(createItalyFranceGermanyBeneluxScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createItalyFranceGermanyBeneluxScenario(
  definition: ModernCanonExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  const genreKeys = definition.genres.map(toGenreKey);
  return {
    id: definition.id,
    status: "manual_italy_france_germany_benelux_case_needs_source_verification",
    source: {
      list_id: "manual_italy_france_germany_benelux_expansion_2026",
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
      themes: ["european_cinema", "national_film_history", "craft_consequence"],
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
  if (genres.some((genre) => ["Action", "Adventure", "War", "Western"].includes(genre))) return "action_adventure_production";
  return "drama_production";
}

const sharedProductionCasePhases = [
  { id: "development", label: "Development", player_task: "Define the production problem and the film-specific dramatic system." },
  { id: "preproduction", label: "Pre-production", player_task: "Translate the film's formal method into concrete department choices." },
  { id: "production", label: "Production", player_task: "Execute performance, image and sound choices under the case constraints." },
  { id: "postproduction", label: "Post-production", player_task: "Shape rhythm, information and consequence through editing and sound." },
] as const;