import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theGreatBeautyProductionCaseVerification = {
  scenarioId: "scenario_the_great_beauty_2013",
  status: "verified",
  verifiedAt: "2026-07-29",
  summary: "Festival, producer, institute, filmmaker, cinematographer, equipment and awards records support The Great Beauty as an Italian-French baroque Rome production system built from a novel-like episodic screenplay, Toni Servillo's ageing-writer performance, palaces and terraces as social theatre, rapid multi-camera widescreen photography, environment-wide lighting, dense-to-reflective editing, detailed city sound, sacred and dance music and selective visible artifice.",
  sources: [
    {
      title: "La Grande Bellezza (The Great Beauty)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/la-grande-bellezza/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official competition record confirms the 2013 Italy-France feature, 142-minute duration and the principal screenplay, cinematography, production-design, editing, music and cast credits."
    },
    {
      title: "The Great Beauty",
      publisher: "Indigo Film",
      url: "https://www.indigofilm.it/en/production/the-great-beauty/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The producer's official page documents the French-Italian co-production, partners, complete principal departments, DCP and 35 mm presentation and the film's international awards and distribution history."
    },
    {
      title: "The Great Beauty",
      publisher: "Unifrance",
      url: "https://en.unifrance.org/movie/35404/the-great-beauty",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "The French industry record confirms the co-production and records the 142-minute CinemaScope presentation, colour, Dolby SRD sound and French production and distribution participation."
    },
    {
      title: "The Great Beauty",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/28604-the-great-beauty",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion supplies complete credits, the 2.35:1 and 5.1 presentation and director, actor and screenwriter interviews supporting the relationship among Jep, Rome, episodic writing, performance and the finished image-sound system."
    },
    {
      title: "Interview: Paolo Sorrentino",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-paolo-sorrentino/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Sorrentino discusses adulthood, memory, spectacle, fragmented contemporary movement, humour beside ugliness and his preference for dissipating set pieces rather than closing each episode conventionally."
    },
    {
      title: "The Misery of Some People: Paolo Sorrentino on The Great Beauty",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/84363-paolo-sorrentino-on-the-greaty-beauty/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Sorrentino explains that observational notes about Roman worlds preceded Jep, and describes the film as closer to a novel whose deviations, secondary stories and introspection are not subordinate to one goal-driven plot."
    },
    {
      title: "La luce necessaria: una conversazione con Luca Bigazzi",
      publisher: "Anec Lazio",
      url: "https://www.aneclazio.com/news-cinema/news/la-luce-necessaria-una-conversazione-con-luca-bigazzi/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Bigazzi documents ten shooting weeks, 35 to 40 setups per day, frequent three-camera coverage, 360-degree environment lighting, hidden integrated sources, Pro-Mist filtration, a 300-extra opening party and a first assembly shortened by about 45 minutes."
    },
    {
      title: "Ultra Prime Lenses",
      publisher: "ARRI",
      url: "https://www.arri.com/en/cine-lenses/arri-zeiss-fujinon-lenses/legacy/ultra-prime-lenses",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "ARRI associates cinematographer Luca Bigazzi and The Great Beauty with the Ultra Prime lens family and preserves his statement that the lenses render light and colour in accordance with his own perception."
    },
    {
      title: "The Great Beauty",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/the-great-beauty/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Academy records the European Film, Director, Actor and Editor awards, principal departments and Sorrentino's statement that the project probes Rome's contradictions, beauties, observed scenes and intellectual dangers."
    },
    {
      title: "2014 Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/embed/2014",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The official ceremony record confirms The Great Beauty as Italy's winner for Foreign Language Film, establishing the film's immediate international reception and historical circulation."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const theGreatBeautyVerificationRecords = [
  theGreatBeautyProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];
