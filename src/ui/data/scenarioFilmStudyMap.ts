import {
  completeFilmStudyCoverage,
  getFilmHistoryEra,
  summarizeFilmStudyCoverage,
  type FilmStudyCoverageItem,
  type FilmStudyCoverageOverride,
  type FilmStudyCoverageStatus,
} from "../../core/filmStudyCoverage";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import {
  getProductionCaseVerification,
  type ProductionCaseVerificationRecord,
} from "./scenarioProductionVerificationRegistry";

export type FilmHistoryResearchStatus = "source_backed" | "research_pending";

export type FilmHistoryProfile = {
  readonly scenarioId: string;
  readonly period: string;
  readonly traditions: readonly string[];
  readonly before: string;
  readonly moment: string;
  readonly after: string;
  readonly historyQuestion: string;
  readonly technicalHighlights: readonly FilmStudyCoverageOverride[];
};

export type ScenarioFilmStudyMap = {
  readonly scenarioId: string;
  readonly title: string;
  readonly year: number;
  readonly broadEra: string;
  readonly historyStatus: FilmHistoryResearchStatus;
  readonly historyProfile: FilmHistoryProfile | undefined;
  readonly coverage: readonly FilmStudyCoverageItem[];
  readonly coverageSummary: ReturnType<typeof summarizeFilmStudyCoverage>;
  readonly verification: ProductionCaseVerificationRecord | undefined;
};

export type FilmHistoryChoice = {
  readonly id: string;
  readonly label: string;
  readonly quality: "match" | "partial" | "miss";
  readonly feedback: string;
};

const sourceBackedFilmHistoryProfiles = {
  scenario_the_machinist_2004: {
    scenarioId: "scenario_the_machinist_2004",
    period: "Early-2000s transnational psychological thriller",
    traditions: ["Psychological thriller", "Industrial-location cinema", "35mm production"],
    before: "It draws on subjective thrillers that make perception, guilt and bodily experience unreliable.",
    moment: "A Barcelona-based production removes clear cultural markers and turns industrial locations, 35mm texture and mechanical sound into an unnamed nightmare world.",
    after: "The case shows how a modest transnational production can create a distinctive psychological space without relying on large-scale spectacle.",
    historyQuestion: "Which historical position best explains how The Machinist turns production limits into an aesthetic system?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "The production used Barcelona-area locations to construct a deliberately displaced industrial world." },
      { area: "directing", status: "source_verified", note: "Direction organizes mundane objects, bodily deterioration and an old-fashioned nightmare rhythm around subjective pressure." },
      { area: "production_design", status: "source_verified", note: "Industrial, transport and amusement locations form the film's hostile physical system." },
      { area: "camera_format", status: "source_verified", note: "Institutional production records confirm 35mm capture." },
      { area: "music", status: "mapped", note: "Music belongs inside the wider restrained sound system, but still needs its own source review." },
      { area: "effects_animation", status: "not_central", note: "The case is driven primarily by performance, location, image and sound rather than effects spectacle." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to this fiction case." },
    ],
  },
  scenario_the_lives_of_others_2006: {
    scenarioId: "scenario_the_lives_of_others_2006",
    period: "Post-reunification German historical cinema",
    traditions: ["Political surveillance drama", "Historical reconstruction", "Moral chamber drama"],
    before: "The film inherits the political thriller's interest in institutions, observation and compromised private life.",
    moment: "Made after German reunification, it reconstructs the analogue surveillance culture of the GDR through researched spaces, listening technology and restrained performance.",
    after: "It demonstrates how recent political history can be taught through procedure, sound, design and incremental moral change rather than exposition alone.",
    historyQuestion: "Which historical lens best connects the GDR subject to the film's listening-based craft?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The case is grounded in research into Stasi practice and GDR visual culture." },
      { area: "industry_and_production_context", status: "source_verified", note: "The low-budget production built historical credibility through research, locations, analogue equipment and controlled design." },
      { area: "directing", status: "source_verified", note: "Direction keeps moral transformation small, procedural and performance-led." },
      { area: "performance", status: "source_verified", note: "Restrained acting supports the conflict between institutional duty and private conscience." },
      { area: "production_design", status: "source_verified", note: "Muted interiors and period surveillance equipment make the political system tangible." },
      { area: "documentary_method", status: "mapped", note: "Historical research informs the fiction, although the film is not a documentary." },
      { area: "effects_animation", status: "not_central", note: "Effects are not central to the film's historical or dramatic method." },
    ],
  },
  scenario_lost_in_translation_2003: {
    scenarioId: "scenario_lost_in_translation_2003",
    period: "Early-2000s American independent and transnational location cinema",
    traditions: ["Independent auteur cinema", "City film", "Mood-led romantic drama"],
    before: "It follows city films and intimate independent dramas that let location, waiting and social dislocation carry narrative weight.",
    moment: "A small crew, 35mm photography, improvised material and on-the-run Tokyo production turn jet lag and cultural displacement into the film's form.",
    after: "The case became a durable example of how location, music and incomplete intimacy can organize a feature more strongly than conventional plot mechanics.",
    historyQuestion: "Which production history best explains why Tokyo feels like both a real city and a subjective dream?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "The film was made with a small mobile crew working rapidly in Tokyo locations." },
      { area: "directing", status: "source_verified", note: "Direction allows pauses, observation and improvisation to shape the emotional line." },
      { area: "performance", status: "source_verified", note: "Intimacy is carried through restrained behavior, glances and partially improvised encounters." },
      { area: "production_design", status: "source_verified", note: "The Park Hyatt and Tokyo locations operate as emotional architecture rather than neutral backgrounds." },
      { area: "camera_format", status: "source_verified", note: "Production reporting documents 35mm photography." },
      { area: "music", status: "source_verified", note: "Dream-pop references, karaoke and curated music are structural parts of the film's emotional world." },
      { area: "documentary_method", status: "mapped", note: "The mobile location practice borrows observational immediacy without becoming documentary." },
    ],
  },
  scenario_12_angry_men_1957: {
    scenarioId: "scenario_12_angry_men_1957",
    period: "Late-classical American chamber cinema adapted from television",
    traditions: ["Television-to-film adaptation", "Courtroom and jury drama", "One-room ensemble staging"],
    before: "The project grows from live television drama and the theatrical tradition of concentrating conflict in one room.",
    moment: "A lean 17-day production turns planned blocking, lens progression, faces and argument rhythm into cinematic escalation inside a single jury room.",
    after: "It remains a foundational teaching case for converting limited space into visual, editorial and performance development.",
    historyQuestion: "Which historical origin best explains the film's concentration on ensemble argument and planned camera progression?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "The feature developed from a television drama and was produced through a tightly planned 17-day shoot." },
      { area: "directing", status: "source_verified", note: "Sidney Lumet organizes power through blocking, rehearsal and a gradual change in camera distance." },
      { area: "performance", status: "source_verified", note: "The ensemble's shifting alliances and reactions carry the film's action." },
      { area: "production_design", status: "source_verified", note: "A single jury-room set is treated as an increasingly compressed dramatic machine." },
      { area: "lighting", status: "mapped", note: "The room's changing pressure is visible, but lighting still needs dedicated source review." },
      { area: "camera_format", status: "source_verified", note: "The documented lens progression moves from wider views toward telephoto compression and faces." },
      { area: "effects_animation", status: "not_central", note: "Effects are not central to the chamber-drama method." },
      { area: "documentary_method", status: "not_central", note: "The case is a staged dramatic adaptation rather than documentary practice." },
    ],
  },
  scenario_bicycle_thieves_1948: {
    scenarioId: "scenario_bicycle_thieves_1948",
    period: "Postwar Italian neorealism",
    traditions: ["Italian neorealism", "Location realism", "Nonprofessional performance"],
    before: "Neorealism turned away from polished studio illusion toward streets, ordinary labor and the consequences of war and poverty.",
    moment: "Rome locations, nonprofessional performers and a simple object-driven search make unemployment and family dignity concrete at human scale.",
    after: "The film became a central reference for social realism, location production and stories built around everyday material stakes.",
    historyQuestion: "Which movement best explains the union of postwar social pressure, street locations and nonprofessional casting?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The story and production are rooted in postwar Roman economic reality." },
      { area: "movement_and_tradition", status: "source_verified", note: "The film is a core Italian neorealist case." },
      { area: "directing", status: "source_verified", note: "De Sica uses restrained staging and visual rhymes rather than display-oriented virtuosity." },
      { area: "performance", status: "source_verified", note: "Nonprofessional performers are directed toward emotionally precise, socially grounded behavior." },
      { area: "production_design", status: "not_central", note: "Real streets and locations replace a heavily designed studio world." },
      { area: "documentary_method", status: "mapped", note: "The fiction borrows location observation and social detail from documentary practice." },
      { area: "effects_animation", status: "not_central", note: "Effects are not central to the neorealist method." },
    ],
  },
  scenario_vertigo_1958: {
    scenarioId: "scenario_vertigo_1958",
    period: "Late-classical Hollywood studio auteur cinema",
    traditions: ["Psychological thriller", "Studio-location hybrid", "VistaVision and optical-effects craft"],
    before: "The film builds on suspense cinema, subjective point of view and classical Hollywood's controlled studio craft.",
    moment: "VistaVision, location work, matte and model effects, color motifs, the zoom-dolly effect and Herrmann's score turn obsession into a complete audiovisual system.",
    after: "Its camera effects, color design and early structural revelation became major reference points for later subjective and obsession-driven cinema.",
    historyQuestion: "Which historical craft system best explains how Vertigo makes obsession visible and audible?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "The production combines major-studio planning, location photography, stage work and extensive postproduction effects." },
      { area: "directing", status: "source_verified", note: "Hitchcock coordinates storyboards, performance, camera, color and revelation around subjective fixation." },
      { area: "production_design", status: "source_verified", note: "Sets, locations, color motifs and controlled spaces shape the spiral of repetition." },
      { area: "lighting", status: "source_verified", note: "Diffusion and green light are documented parts of the film's subjective transformation effects." },
      { area: "camera_format", status: "source_verified", note: "The film uses VistaVision and the documented zoom-dolly vertigo effect." },
      { area: "music", status: "source_verified", note: "Bernard Herrmann's score is integral to the hypnotic and circular structure." },
      { area: "effects_animation", status: "source_verified", note: "Matte work, models, projection and optical methods build impossible subjective spaces." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to this controlled studio thriller." },
    ],
  },
  scenario_breathless_1960: {
    scenarioId: "scenario_breathless_1960",
    period: "French New Wave modernism",
    traditions: ["French New Wave", "Location filmmaking", "Continuity-breaking editing"],
    before: "Young critics and filmmakers challenged the polished continuity and industrial routines of established French cinema.",
    moment: "A small budget, Paris locations, handheld movement, dialogue written during production and jump cuts make process, interruption and cinephilia visible on screen.",
    after: "The film became a defining reference for low-budget freedom, self-conscious style and editing that exposes rather than hides the cut.",
    historyQuestion: "Which movement best explains the film's handheld streets, improvised production and visible jump cuts?",
    technicalHighlights: [
      { area: "movement_and_tradition", status: "source_verified", note: "The film is a defining French New Wave production." },
      { area: "industry_and_production_context", status: "source_verified", note: "A small-budget location shoot avoided normal studio equipment and routines." },
      { area: "directing", status: "source_verified", note: "Godard directs through daily invention, long takes, broken continuity and cinephile reference." },
      { area: "performance", status: "mapped", note: "Loose behavior and direct address support the modernist tone, but performance needs its own source review." },
      { area: "camera_format", status: "source_verified", note: "Handheld and improvised camera support are documented parts of the production method." },
      { area: "documentary_method", status: "mapped", note: "Street shooting and lightweight observation lend documentary immediacy to the fiction." },
      { area: "effects_animation", status: "not_central", note: "Effects are not central to the film's formal break." },
    ],
  },
  scenario_the_shining_1980: {
    scenarioId: "scenario_the_shining_1980",
    period: "Late-1970s and early-1980s prestige horror",
    traditions: ["Studio auteur horror", "Constructed-space cinema", "Steadicam movement"],
    before: "The film inherits gothic haunted-space traditions and the 1970s expansion of serious studio horror.",
    moment: "Purpose-built interiors, precise repetition, low Steadicam movement, symmetry and an accumulating sound-image system turn the Overlook into an impossible geography.",
    after: "It became a central reference for moving-camera horror, hostile architecture and dread created through spatial inconsistency rather than constant attack.",
    historyQuestion: "Which production development most clearly places The Shining in the history of modern horror craft?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "Long preproduction coordinated sets, lighting and moving-camera design." },
      { area: "directing", status: "source_verified", note: "Kubrick's exacting repetition and framing make routine itself threatening." },
      { area: "performance", status: "mapped", note: "Performance pressure is central, but the acting method still needs dedicated source review." },
      { area: "production_design", status: "source_verified", note: "Constructed interiors are designed around movement and deliberately unstable geography." },
      { area: "lighting", status: "source_verified", note: "Lighting was planned with the sets and camera system during preproduction." },
      { area: "camera_format", status: "source_verified", note: "Low Steadicam operation and repeated corridor movement are central documented techniques." },
      { area: "music", status: "mapped", note: "Music contributes to the warning-like structure, but needs separate source mapping." },
      { area: "effects_animation", status: "mapped", note: "The maze and impossible hotel rely more on built space and controlled geography than effects spectacle." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to this constructed horror system." },
    ],
  },
  scenario_one_flew_over_the_cuckoo_s_nest_1975: {
    scenarioId: "scenario_one_flew_over_the_cuckoo_s_nest_1975",
    period: "1970s New Hollywood institutional drama",
    traditions: ["New Hollywood", "Institutional realism", "Performance-led ensemble drama"],
    before: "The film follows postwar social-problem drama and the 1960s-70s challenge to institutional authority.",
    moment: "A real Oregon hospital, patient observation, ensemble immersion and location participation ground rebellion and control in lived institutional routines.",
    after: "It remains a major case for performance-led filmmaking in which production environment and ensemble behavior carry political meaning.",
    historyQuestion: "Which 1970s production approach best explains the film's sense of institutional realism?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The film belongs to a 1970s cycle questioning institutions and authority." },
      { area: "industry_and_production_context", status: "source_verified", note: "The production worked inside a real hospital with professional and patient participation." },
      { area: "directing", status: "source_verified", note: "Direction builds escalation from group behavior, observation and character collision." },
      { area: "performance", status: "source_verified", note: "Actors studied patients and institutional routines to support ensemble verisimilitude." },
      { area: "production_design", status: "source_verified", note: "Real wards and institutional spaces provide the controlling visual environment." },
      { area: "documentary_method", status: "mapped", note: "Observation and real-location immersion inform the fiction without turning it into documentary." },
      { area: "effects_animation", status: "not_central", note: "Effects are not central to the performance-led method." },
    ],
  },
  scenario_the_celebration_1998: {
    scenarioId: "scenario_the_celebration_1998",
    period: "Dogme 95 and the early digital feature transition",
    traditions: ["Dogme 95", "Chamber drama", "Consumer-digital filmmaking"],
    before: "Dogme 95 reacted against polished spectacle by imposing rules favoring location, available light, handheld camera, diegetic sound and performance.",
    moment: "A small Sony digital camera, grainy natural light, handheld proximity and cacophonous location sound turn a family ritual into unstable public exposure.",
    after: "The film became an early landmark for consumer-digital features and rule-based production methods that redirect attention toward actors and social conflict.",
    historyQuestion: "Which movement and technology together explain The Celebration's raw image and performance pressure?",
    technicalHighlights: [
      { area: "movement_and_tradition", status: "source_verified", note: "The film is Dogme 95's first certificate and follows the movement's production restrictions." },
      { area: "industry_and_production_context", status: "source_verified", note: "Consumer digital capture enabled a lighter, more reactive feature-production method." },
      { area: "directing", status: "source_verified", note: "Direction uses ritual, confrontation and camera proximity to keep the ensemble unstable." },
      { area: "performance", status: "source_verified", note: "The Dogme method gives actors and social discomfort priority over polish." },
      { area: "production_design", status: "source_verified", note: "Available locations and props replace constructed spectacle." },
      { area: "lighting", status: "source_verified", note: "The movement's restrictions reject added studio lighting." },
      { area: "camera_format", status: "source_verified", note: "The production used a palm-sized Sony PC7 consumer digital camera." },
      { area: "music", status: "source_verified", note: "Dogme's ban on non-diegetic music makes location sound and performed music historically meaningful." },
      { area: "effects_animation", status: "not_central", note: "The Dogme method rejects effects-led spectacle." },
      { area: "documentary_method", status: "mapped", note: "The handheld available-light method creates documentary immediacy inside staged fiction." },
    ],
  },
  scenario_waltz_with_bashir_2008: {
    scenarioId: "scenario_waltz_with_bashir_2008",
    period: "2000s hybrid animated documentary and memory cinema",
    traditions: ["Animated documentary", "Witness testimony", "Subjective war memory"],
    before: "Documentary testimony and animated nonfiction had already challenged the idea that factual cinema must rely only on indexical live-action images.",
    moment: "Recorded interviews, a scripted memory investigation, thousands of illustrations and a mixed Flash, classical and 3D workflow visualize memories that cannot be filmed directly.",
    after: "The film became a major reference for using animation to stage uncertain testimony, trauma and the limits of recollection.",
    historyQuestion: "Why is animation historically central to this documentary case rather than merely a visual style?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "The film investigates personal memory of the 1982 Lebanon War through later testimony." },
      { area: "directing", status: "source_verified", note: "Folman structures the film as a search through witnesses, dreams and incomplete memory." },
      { area: "performance", status: "source_verified", note: "Recorded testimony supplies voice, uncertainty and personal perspective." },
      { area: "production_design", status: "source_verified", note: "Illustration and art direction build a coherent but openly subjective memory world." },
      { area: "camera_format", status: "mapped", note: "Interview video and storyboard material feed the animation workflow rather than conventional final photography." },
      { area: "music", status: "source_verified", note: "Music and sound pressure guide transitions between testimony, dream and war memory." },
      { area: "effects_animation", status: "source_verified", note: "The film combines Flash cutout, classical animation and selective 3D movement." },
      { area: "documentary_method", status: "source_verified", note: "Witness interviews and investigative memory structure are the film's documentary foundation." },
    ],
  },
  scenario_mad_max_fury_road_2015: {
    scenarioId: "scenario_mad_max_fury_road_2015",
    period: "2010s global action cinema combining practical production and digital finishing",
    traditions: ["Australian action cinema", "Pursuit film", "Practical stunt spectacle"],
    before: "The film extends the visual storytelling, vehicle design and practical stunt tradition established by the earlier Mad Max films.",
    moment: "Storyboard-led development, real vehicles, multi-camera rigs, centered action and extensive stunt work produce rapid cutting that remains geographically legible.",
    after: "It became a leading contemporary model for combining physical action, editorial clarity, sound identity and digital cleanup without losing practical weight.",
    historyQuestion: "Which production tradition most directly explains Fury Road's combination of speed and visual clarity?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "The production coordinates large practical stunt, vehicle, camera and postproduction departments around storyboarded pursuit action." },
      { area: "directing", status: "source_verified", note: "George Miller designs action as visual storytelling with points of interest kept near frame center." },
      { area: "performance", status: "source_verified", note: "Drivers, stunt performers and actors share a highly physical action system." },
      { area: "production_design", status: "source_verified", note: "Vehicles, costumes and moving machinery carry worldbuilding and character identity." },
      { area: "camera_format", status: "source_verified", note: "Multiple cameras, crash cameras and moving vehicle rigs capture practical action from readable axes." },
      { area: "music", status: "mapped", note: "The score supports propulsion, but dedicated music-source mapping remains pending." },
      { area: "effects_animation", status: "source_verified", note: "Digital work supports reframing, grading, environment and safety cleanup around practical material." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to the pursuit-film design." },
    ],
  },
  scenario_district_9_2009: {
    scenarioId: "scenario_district_9_2009",
    period: "Post-apartheid South African science fiction in the digital VFX era",
    traditions: ["Mock-documentary science fiction", "Political allegory", "Integrated creature effects"],
    before: "The film draws on news reportage, documentary address, body-transformation cinema and science-fiction allegory.",
    moment: "Johannesburg locations, improvised bureaucratic performance, mixed media formats and digitally integrated aliens create a fictional world that initially behaves like current-affairs footage.",
    after: "It became an influential production case for combining regional political texture, low-cost documentary form and high-end creature effects.",
    historyQuestion: "Which historical and technical combination best explains District 9's immediate political world?",
    technicalHighlights: [
      { area: "historical_context", status: "source_verified", note: "Johannesburg's social and spatial context is central to the film's allegorical science-fiction world." },
      { area: "directing", status: "source_verified", note: "Blomkamp shifts between mock-documentary procedure and dramatic action while preserving a raw visual system." },
      { area: "performance", status: "source_verified", note: "Sharlto Copley's improvised bureaucratic dialogue supports the documentary immediacy." },
      { area: "production_design", status: "source_verified", note: "Weapons, vehicles, armour, prosthetics, environments and in-world graphics make the restricted zone materially specific." },
      { area: "camera_format", status: "source_verified", note: "Handheld photography, RED plates, mini-cameras and tracked VFX plates are combined across media modes." },
      { area: "effects_animation", status: "source_verified", note: "Digital aliens and the exo-suit are designed to fit the rough documentary photography." },
      { area: "documentary_method", status: "source_verified", note: "Mock interviews, news footage, corporate video and procedural observation structure the opening world." },
      { area: "music", status: "research_pending", note: "Music has not yet received dedicated source mapping." },
    ],
  },
  scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014: {
    scenarioId: "scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014",
    period: "2010s digital long-take illusion and meta-cinema",
    traditions: ["Backstage drama", "Digital long-take cinema", "Meta-performance film"],
    before: "The film draws on backstage ensemble drama and earlier experiments with long takes and concealed editing.",
    moment: "Camera choreography, rehearsal, blocking, hidden joins, time compression and an improvised percussion score produce the impression of one continuous nervous performance.",
    after: "It became a widely taught example of how digital cinematography and invisible editing can reshape theatrical space and subjective time.",
    historyQuestion: "Which technical history explains why Birdman's apparent single take is still fundamentally an editing achievement?",
    technicalHighlights: [
      { area: "directing", status: "source_verified", note: "Direction coordinates actor movement, camera choreography, transitions and shifting reality as one system." },
      { area: "performance", status: "source_verified", note: "Long passages and hidden joins require sustained ensemble continuity and rehearsal." },
      { area: "production_design", status: "source_verified", note: "Backstage corridors, stage space and practical transitions are designed around continuous movement." },
      { area: "lighting", status: "mapped", note: "Lighting continuity is essential to the moving-camera illusion, but requires dedicated source review." },
      { area: "camera_format", status: "source_verified", note: "Digital camera movement enables long choreographed passages and hidden transitions." },
      { area: "music", status: "source_verified", note: "Improvised drums function as metronome, internal pulse and visible performance." },
      { area: "effects_animation", status: "source_verified", note: "Invisible joins and selective effects sustain the false-continuous take and subjective ruptures." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to the backstage fiction." },
    ],
  },
  scenario_boyhood_2014: {
    scenarioId: "scenario_boyhood_2014",
    period: "2010s long-duration production experiment",
    traditions: ["Coming-of-age cinema", "Longitudinal production", "Naturalistic American independent film"],
    before: "Coming-of-age films normally simulate growth through casting, makeup, ellipsis or compressed production schedules.",
    moment: "Annual shooting across twelve years lets the actors, technology and ordinary environments change in real time while the screenplay and edit remain open to life.",
    after: "The film became a singular teaching case for duration as production method and for hiding major temporal transitions inside ordinary continuity.",
    historyQuestion: "What makes Boyhood historically different from a conventional coming-of-age production?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "The project sustained annual production and postproduction across twelve years." },
      { area: "directing", status: "source_verified", note: "Linklater repeatedly revises the project around accumulated performances and real-life observation." },
      { area: "performance", status: "source_verified", note: "The same actors age through the role, turning duration into performance material." },
      { area: "production_design", status: "mapped", note: "Ordinary homes, schools and objects register changing life stages without display-oriented period reconstruction." },
      { area: "camera_format", status: "source_verified", note: "Changing production technologies required continuity management across the twelve-year process." },
      { area: "music", status: "mapped", note: "Period music helps mark time, but dedicated source mapping remains pending." },
      { area: "effects_animation", status: "not_central", note: "The method avoids effects-based aging in favor of real duration." },
      { area: "documentary_method", status: "mapped", note: "Real elapsed time and life observation enter a scripted fiction process." },
    ],
  },
  scenario_ex_machina_2014: {
    scenarioId: "scenario_ex_machina_2014",
    period: "2010s contained science fiction and performance-preserving VFX",
    traditions: ["Science-fiction chamber drama", "Modernist architecture cinema", "Invisible character VFX"],
    before: "The film follows chamber science fiction in which controlled dialogue and enclosed space test human identity more than large-scale worldbuilding.",
    moment: "Norwegian modernist architecture, glass barriers, embedded practical light, long dialogue takes and selective body replacement keep Ava's performance present inside the effect.",
    after: "It became an important contemporary reference for small-scale science fiction that integrates location design, acting and sophisticated VFX without spectacle-first staging.",
    historyQuestion: "Which technical approach best explains why Ava reads as a performance rather than only a visual effect?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "Real Norwegian architecture and constructed underground sets combine into a contained production world." },
      { area: "directing", status: "mapped", note: "Direction emphasizes dialogue tests, shifting control and sustained performance, with more source work still needed." },
      { area: "performance", status: "source_verified", note: "The VFX workflow preserves Alicia Vikander's live performance and facial behavior." },
      { area: "production_design", status: "source_verified", note: "Juvet's architecture, glass and geometric barriers externalize isolation and surveillance." },
      { area: "lighting", status: "source_verified", note: "Thousands of embedded tungsten practicals create flexible actor-friendly light within the architecture." },
      { area: "camera_format", status: "source_verified", note: "Long takes and meticulous tracking make the effect withstand close scrutiny." },
      { area: "effects_animation", status: "source_verified", note: "CG body replacement and compositing reveal machinery while preserving the photographed performance." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to the chamber-drama design." },
    ],
  },
  scenario_it_s_a_wonderful_life_1946: {
    scenarioId: "scenario_it_s_a_wonderful_life_1946",
    period: "Immediate postwar classical Hollywood and independent studio production",
    traditions: ["Classical Hollywood", "Community melodrama", "Independent Liberty Films production"],
    before: "The film combines American small-town storytelling, social melodrama and the classical studio system's capacity to construct a complete community world.",
    moment: "Liberty Films builds Bedford Falls as a large physical set and engineers quieter artificial snow so summer production can create an emotionally coherent winter town.",
    after: "Its long cultural afterlife shows how a film's historical importance can grow through circulation, seasonal viewing and preservation beyond its first release.",
    historyQuestion: "Which production context best explains Bedford Falls as both social idea and physical filmmaking achievement?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "Capra's Liberty Films production created a large independent classical-Hollywood project." },
      { area: "directing", status: "source_verified", note: "Capra coordinates community ensemble, moral crisis and tonal movement across comedy, despair and fantasy." },
      { area: "performance", status: "mapped", note: "Ensemble and star performance are central but need dedicated source review." },
      { area: "production_design", status: "source_verified", note: "Bedford Falls was built as a multi-block town with dozens of structures and planted trees." },
      { area: "lighting", status: "mapped", note: "Classical lighting supports the shift between belonging and isolation, but remains to be mapped separately." },
      { area: "effects_animation", status: "source_verified", note: "Engineered artificial snow solved both visual and sound problems during summer production." },
      { area: "music", status: "mapped", note: "The score is credited and important, but needs dedicated source analysis." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to the constructed classical world." },
    ],
  },
  scenario_the_400_blows_1959: {
    scenarioId: "scenario_the_400_blows_1959",
    period: "French New Wave autobiographical youth cinema",
    traditions: ["French New Wave", "Autobiographical cinema", "Paris location filmmaking"],
    before: "The film emerges from cinephile criticism, low-budget independent production and a turn toward personal authorship in postwar French cinema.",
    moment: "A small crew, real Paris locations, autobiographical material and mobile observation treat childhood as lived passage rather than a conventional moral lesson.",
    after: "The final tracking run and freeze-frame became defining modernist gestures and Antoine Doinel became a long-term model for autobiographical character cinema.",
    historyQuestion: "Which historical development best explains the film's personal voice and location-based freedom?",
    technicalHighlights: [
      { area: "movement_and_tradition", status: "source_verified", note: "The film is a foundational French New Wave work." },
      { area: "industry_and_production_context", status: "source_verified", note: "It was made inexpensively with a very small crew and extensive real locations." },
      { area: "directing", status: "source_verified", note: "Truffaut turns autobiographical observation into a mobile first-person youth perspective." },
      { area: "performance", status: "mapped", note: "Jean-Pierre Léaud's youth performance is central but needs a dedicated source pass." },
      { area: "production_design", status: "not_central", note: "Paris streets, school, apartment and beach locations carry the world more than constructed design." },
      { area: "camera_format", status: "source_verified", note: "Location movement and the final tracking run are documented parts of the visual method." },
      { area: "documentary_method", status: "mapped", note: "Autobiographical observation and real locations lend documentary immediacy to the fiction." },
      { area: "effects_animation", status: "not_central", note: "Effects are not central to the New Wave method." },
    ],
  },
  scenario_the_road_warrior_1981: {
    scenarioId: "scenario_the_road_warrior_1981",
    period: "Early-1980s Australian action cinema",
    traditions: ["Australian genre cinema", "Pursuit film", "Practical stunt choreography"],
    before: "The film expands the stripped-down road action and physical stunt language established by the first Mad Max.",
    moment: "Broken Hill locations, an armada of practical vehicles, real high falls and rapid visual storytelling turn fuel scarcity into a complete action geography.",
    after: "Its convoy structure, costume-vehicle worldbuilding and cut-driven stunt clarity became a durable template for post-apocalyptic action cinema.",
    historyQuestion: "Which national production tradition and craft method best explain The Road Warrior's impact?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "Australian production records document the Broken Hill shoot, practical vehicle fleet and stunt operation." },
      { area: "directing", status: "source_verified", note: "Miller prioritizes visual storytelling, compressed dialogue and readable action axes." },
      { area: "performance", status: "source_verified", note: "Stunt performers physically embody the danger through real falls, jumps and crashes." },
      { area: "production_design", status: "source_verified", note: "Vehicles, costumes and the refinery convoy make resource scarcity visually legible." },
      { area: "camera_format", status: "mapped", note: "Action coverage and shot density are documented, while capture-format detail needs additional research." },
      { area: "music", status: "mapped", note: "The credited score supports mythic scale but needs its own source mapping." },
      { area: "effects_animation", status: "source_verified", note: "Practical crashes and retained real accidents create the film's physical effects system." },
      { area: "documentary_method", status: "not_central", note: "Documentary method is not central to the action design." },
    ],
  },
  scenario_victoria_2015: {
    scenarioId: "scenario_victoria_2015",
    period: "2010s digital real-time and one-take cinema",
    traditions: ["Single-take feature", "Improvised performance", "Berlin location cinema"],
    before: "Long-take cinema had explored duration and choreography, while digital cameras made feature-length mobile recording increasingly practical.",
    moment: "Ten days of rehearsal, a short scenario, improvised dialogue and one 138-minute Berlin take preserve actor connection, geographical movement and escalating risk without editorial relief.",
    after: "The film became a key comparison point for distinguishing a genuinely uninterrupted feature take from works that create continuity through hidden edits.",
    historyQuestion: "What historically distinguishes Victoria from other films marketed around the appearance of one continuous take?",
    technicalHighlights: [
      { area: "industry_and_production_context", status: "source_verified", note: "The production rehearsed across multiple Berlin locations and selected one complete take from three attempts." },
      { area: "directing", status: "source_verified", note: "Schipper directs through route planning, actor connection, improvisation and real-time escalation." },
      { area: "performance", status: "source_verified", note: "Actors sustain attraction, fear and consequence continuously without coverage-based reconstruction." },
      { area: "production_design", status: "source_verified", note: "Real clubs, streets, roofs, cars and interiors form a continuous Berlin night geography." },
      { area: "lighting", status: "mapped", note: "Location continuity is essential but needs dedicated lighting-source review." },
      { area: "camera_format", status: "source_verified", note: "A mobile digital camera records the full feature as one uninterrupted take." },
      { area: "effects_animation", status: "not_central", note: "The historical point is uninterrupted production rather than hidden effects or joins." },
      { area: "documentary_method", status: "mapped", note: "Real-time observation and improvisation create documentary immediacy inside a planned fiction route." },
    ],
  },
} as const satisfies Record<string, FilmHistoryProfile>;

function statusRank(status: FilmStudyCoverageStatus): number {
  if (status === "source_verified") return 4;
  if (status === "mapped") return 3;
  if (status === "not_central") return 2;
  return 1;
}

function mergeCoverageOverrides(
  ...overrideSets: readonly (readonly FilmStudyCoverageOverride[])[]
): readonly FilmStudyCoverageOverride[] {
  const merged = new Map<string, FilmStudyCoverageOverride>();
  for (const overrides of overrideSets) {
    for (const override of overrides) {
      const existing = merged.get(override.area);
      if (!existing || statusRank(override.status) >= statusRank(existing.status)) {
        merged.set(override.area, override);
      }
    }
  }
  return [...merged.values()];
}

function briefCoverageOverrides(brief: ScenarioProductionBrief): readonly FilmStudyCoverageOverride[] {
  const overrides: FilmStudyCoverageOverride[] = [
    { area: "historical_context", status: "mapped", note: "Release year and broad era are mapped; film-specific historical interpretation still requires sources." },
    { area: "screenplay", status: "mapped", note: brief.screenplayTargets.join(" · ") },
    { area: "cinematography", status: "mapped", note: brief.cinematographyTargets.join(" · ") },
    { area: "editing", status: "mapped", note: brief.editingTargets.join(" · ") },
    { area: "sound_design", status: "mapped", note: brief.soundTargets.join(" · ") },
  ];

  const combinedSound = brief.soundTargets.join(" ");
  if (/music|score|song|rhythm/i.test(combinedSound)) {
    overrides.push({ area: "music", status: "mapped", note: "Music appears in the current sound brief but still needs a dedicated technical mapping." });
  }
  return overrides;
}

function verificationCoverageOverrides(
  verification: ProductionCaseVerificationRecord | undefined,
): readonly FilmStudyCoverageOverride[] {
  if (!verification) return [];
  const supports = new Set(verification.sources.flatMap((source) => source.supports));
  const overrides: FilmStudyCoverageOverride[] = [];
  if (supports.has("screenplay")) overrides.push({ area: "screenplay", status: "source_verified", note: "The screenplay mapping is supported by the case's source record." });
  if (supports.has("cinematography")) overrides.push({ area: "cinematography", status: "source_verified", note: "The cinematography mapping is supported by the case's source record." });
  if (supports.has("editing")) overrides.push({ area: "editing", status: "source_verified", note: "The editing mapping is supported by the case's source record." });
  if (supports.has("sound")) overrides.push({ area: "sound_design", status: "source_verified", note: "The sound mapping is supported by the case's source record." });
  return overrides;
}

function profileHistoryOverrides(profile: FilmHistoryProfile | undefined): readonly FilmStudyCoverageOverride[] {
  if (!profile) return [];
  return [
    { area: "historical_context", status: "source_verified", note: profile.period },
    { area: "movement_and_tradition", status: "source_verified", note: profile.traditions.join(" · ") },
    { area: "industry_and_production_context", status: "source_verified", note: profile.moment },
    { area: "reception_and_legacy", status: "source_verified", note: profile.after },
    ...profile.technicalHighlights,
  ];
}

export function getSourceBackedFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return sourceBackedFilmHistoryProfiles[
    scenarioId as keyof typeof sourceBackedFilmHistoryProfiles
  ];
}

export function getSourceBackedFilmHistoryIds(): readonly string[] {
  return Object.keys(sourceBackedFilmHistoryProfiles);
}

export function resolveScenarioFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap {
  const historyProfile = getSourceBackedFilmHistoryProfile(scenario.id);
  const verification = getProductionCaseVerification(scenario.id);
  const coverage = completeFilmStudyCoverage(mergeCoverageOverrides(
    briefCoverageOverrides(brief),
    verificationCoverageOverrides(verification),
    profileHistoryOverrides(historyProfile),
  ));

  return {
    scenarioId: scenario.id,
    title: scenario.film.title,
    year: scenario.film.year,
    broadEra: getFilmHistoryEra(scenario.film.year),
    historyStatus: historyProfile ? "source_backed" : "research_pending",
    historyProfile,
    coverage,
    coverageSummary: summarizeFilmStudyCoverage(coverage),
    verification,
  };
}

function hashString(value: string): number {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

export function createFilmHistoryChoices(profile: FilmHistoryProfile): readonly FilmHistoryChoice[] {
  const donors = Object.values(sourceBackedFilmHistoryProfiles)
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
  const start = hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + Math.max(1, Math.floor(donors.length / 2))) % donors.length];

  const choices: FilmHistoryChoice[] = [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: "This connects the film's historical position directly to its documented production method.",
    },
  ];
  if (near) {
    choices.push({
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial",
      feedback: "This is a real film-historical explanation, but it belongs to a different case and production tradition.",
    });
  }
  if (far) {
    choices.push({
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss",
      feedback: "This places the film inside the wrong historical and technical system.",
    });
  }
  return choices;
}
