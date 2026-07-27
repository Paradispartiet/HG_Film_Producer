import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theClassProductionCaseVerification = {
  scenarioId: "scenario_the_class_2008",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "The film's memoir adaptation, school-year workshop, nonprofessional ensemble, three-camera classroom system, Pierre Milon photography, Robin Campillo editing, detailed overlapping sound and Palme d'Or legacy are supported by four inspectable institutional and filmmaker sources.",
  sources: [
    {
      title: "Entre les murs (The Class)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/entre-les-murs/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cannes records the Palme d'Or, Laurent Cantet, the three credited screenwriters, Pierre Milon, Robin Campillo and the three principal sound credits."
    },
    {
      title: "Entre les murs (2008)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/637604a5-968b-5646-ad54-b7597d79cfa1/entre-les-murs",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "BFI identifies the French production, Bégaudeau source, Cantet-Campillo-Bégaudeau authorship and the ensemble's institutional and social context."
    },
    {
      title: "The Class",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/klassen-0",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI preserves the film record, production identity, principal cast and craft credits for the classroom feature."
    },
    {
      title: "Exclusive: Laurent Cantet Teaches The Class",
      publisher: "ComingSoon.net",
      url: "https://www.comingsoon.net/movies/features/51112-exclusive-laurent-cantet-teaches-the-class",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Cantet explains the long rehearsal process, character discovery, three-camera layout, rectangular classroom modification and crew corridor used to preserve live exchanges."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const walleProductionCaseVerification = {
  scenarioId: "scenario_walle_2008",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "The film's dialogue-light robot storytelling, ecological world construction, Ralph Eggleston design, photographed-camera simulation, Ben Burtt sound, Thomas Newman music and Academy recognition are supported by four inspectable studio, archive and institutional sources.",
  sources: [
    {
      title: "WALL-E",
      publisher: "Pixar Animation Studios",
      url: "https://www.pixar.com/wall-e",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Pixar's production archive documents Earth, WALL-E's truck, the Axiom, environmental storytelling, production design and Danielle Feinberg's lighting approach."
    },
    {
      title: "The Walt Disney Studios Rolls Out Slate Through 2012",
      publisher: "The Walt Disney Company",
      url: "https://thewaltdisneycompany.com/press-releases/the-walt-disney-studios-rolls-out-slate-of-10-new-animated-motion-pictures-through-2012/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "sound"],
      note: "Disney identifies Andrew Stanton, Jim Morris, Lindsey Collins, Ben Burtt, Thomas Newman, Peter Gabriel and the film's central abandoned-Earth premise."
    },
    {
      title: "WALL-E (2008)",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/33246-wall-e",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion preserves Stanton's influences, Ralph Eggleston's color scripts, sketchbooks, script notes, scene analysis and extensive production documentaries."
    },
    {
      title: "The 81st Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2009",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "The Academy records the animated-feature win and nominations for original screenplay, score, song, sound editing and sound mixing."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const aProphetProductionCaseVerification = {
  scenarioId: "scenario_a_prophet_2009",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "The film's multilingual prison apprenticeship, purpose-built Gennevilliers institution, Tahar Rahim and Niels Arestrup performance research, Stéphane Fontaine photography, Juliette Welfling editing, sound, music and awards history are supported by four inspectable sources.",
  sources: [
    {
      title: "A Prophet speaks to the press",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/2009/a-prophet-speaks-to-the-press/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Audiard and the cast discuss prison research, the full prison constructed in Gennevilliers, Tahar Rahim's character work and Arestrup's months of Corsican coaching."
    },
    {
      title: "A Prophet",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/profeten",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI records the French-Italian production, principal companies, writers, cast and the core camera, design, editing, sound and music departments."
    },
    {
      title: "Un prophète",
      publisher: "Académie des César",
      url: "https://www.academie-cinema.org/films/un-prophete-33378/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official César record documents nine awards across film, direction, acting, screenplay, cinematography, editing, design and sound."
    },
    {
      title: "Jacques Audiard — Director",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/108598/fmt/flv/rl/1/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Audiard explains the narrative use of Corsican and Arabic as languages that close groups, hide knowledge and structure Malik's changing access to power."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const alamarProductionCaseVerification = {
  scenarioId: "scenario_alamar_2009",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "The film's father-son fictional spine, real family relationships, Banco Chinchorro reef production, tiny crew, HDCAM observation, director-led photography and editing, environmental sound and documentary-fiction method are supported by four inspectable sources.",
  sources: [
    {
      title: "Alamar",
      publisher: "International Film Festival Rotterdam",
      url: "https://iffr.com/en/2010/films/alamar",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "IFFR records the Mexican production, 73-minute HDCAM format, Mantarraya and Xcalakarma, González-Rubio's multiple craft roles, sound designers, music and Tiger competition context."
    },
    {
      title: "Alamar",
      publisher: "UCLA Film & Television Archive",
      url: "https://cinema.ucla.edu/events/alamar-01-07-18",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "UCLA preserves the semi-documentary description, Banco Chinchorro setting, production companies, director-screenwriter-cinematographer-editor credits and 35 mm exhibition record."
    },
    {
      title: "A Conversation With Pedro Gonzalez-Rubio",
      publisher: "Hammer to Nail",
      url: "https://www.hammertonail.com/interviews/a-conversation-with-pedro-gonzalez-rubio-alamar/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "González-Rubio discusses the film as designed fiction whose camera placement and setups remain open to documentary immediacy and spontaneous events."
    },
    {
      title: "Pedro González-Rubio over Alamar",
      publisher: "Filmkrant",
      url: "https://filmkrant.nl/interview/pedro-gonzalez-rubio-over-alamar/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "The director interview connects the Tiger-winning film to simple storytelling, a coral-reef location, real relationships and an observational approach shaped by place."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const nextFour2008_2009VerificationRecords = [
  theClassProductionCaseVerification,
  walleProductionCaseVerification,
  aProphetProductionCaseVerification,
  alamarProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];
