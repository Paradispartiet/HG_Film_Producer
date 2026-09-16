import type { FilmWorkLanguage } from "./filmWorkLanguage";

export const FILMWORK_PLATFORM_NAV_IDS = [
  "home",
  "producer",
  "atlas",
  "director",
  "school",
  "history",
  "research",
] as const;

export const FILMWORK_PLATFORM_GATEWAY_IDS = [
  "producer",
  "atlas",
  "director",
  "school",
  "history",
  "research",
] as const;

export type FilmWorkPlatformNavId = (typeof FILMWORK_PLATFORM_NAV_IDS)[number];
export type FilmWorkPlatformGatewayId = (typeof FILMWORK_PLATFORM_GATEWAY_IDS)[number];

export type FilmWorkPlatformGatewayStats = {
  readonly filmCount: number;
  readonly firstYear: number;
  readonly lastYear: number;
};

type FilmWorkPlatformGatewayCopy = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly action: string;
  readonly status: (stats: FilmWorkPlatformGatewayStats) => string;
};

export type FilmWorkPlatformCopy = {
  readonly suiteName: string;
  readonly navAria: string;
  readonly navLabels: Readonly<Record<FilmWorkPlatformNavId, string>>;
  readonly footerDetail: string;
  readonly noFilmsAvailable: string;
  readonly home: {
    readonly kicker: string;
    readonly titlePrefix: string;
    readonly titleEmphasis: string;
    readonly tagline: string;
    readonly summaryAria: string;
    readonly films: (count: number) => string;
    readonly craftStatements: (count: number) => string;
    readonly connectedEntrances: (count: number) => string;
    readonly entrancesAria: string;
    readonly gateways: Readonly<Record<FilmWorkPlatformGatewayId, FilmWorkPlatformGatewayCopy>>;
  };
  readonly producer: {
    readonly heroKicker: string;
    readonly intro: string;
    readonly whyTitle: string;
    readonly whyBody: string;
    readonly productionCases: {
      readonly kicker: string;
      readonly title: string;
      readonly description: string;
      readonly bullets: readonly [string, string, string];
      readonly action: string;
    };
    readonly studioCareer: {
      readonly kicker: string;
      readonly title: string;
      readonly description: string;
      readonly bullets: readonly [string, string, string];
      readonly continueAction: string;
      readonly startAction: string;
    };
  };
};

export const FILMWORK_PLATFORM_COPY: Readonly<Record<FilmWorkLanguage, FilmWorkPlatformCopy>> = {
  en: {
    suiteName: "FilmWork",
    navAria: "FilmWork sections",
    navLabels: {
      home: "Front page",
      producer: "Film Producer",
      atlas: "Film Atlas",
      director: "Film Director",
      school: "Film School",
      history: "Film History",
      research: "Research",
    },
    footerDetail: "Film Producer · Film Atlas · Film Director · Film School · Film History · Research Control",
    noFilmsAvailable: "No films are available yet.",
    home: {
      kicker: "A film game and film-science platform",
      titlePrefix: "Film",
      titleEmphasis: "Work",
      tagline: "Make film. Understand film.",
      summaryAria: "Platform content summary",
      films: (count) => `${count} films`,
      craftStatements: (count) => `${count} craft statements`,
      connectedEntrances: (count) => `${count} connected entrances`,
      entrancesAria: "FilmWork entrances",
      gateways: {
        producer: {
          eyebrow: "The game",
          title: "Film Producer",
          description: "Run productions, make pressured choices, complete Production Cases, and build an experimental studio career.",
          action: "Enter the studio",
          status: () => "Playable",
        },
        atlas: {
          eyebrow: "The knowledge platform",
          title: "Film Atlas",
          description: "Open a film and examine its screenplay, image, editing, sound, tone, learning goals, and historical position.",
          action: "Explore films",
          status: ({ filmCount }) => `${filmCount} films`,
        },
        director: {
          eyebrow: "Analysis into practice",
          title: "Film Director",
          description: "Study one film through a chosen craft lens and turn its construction principles into a director's brief.",
          action: "Open the lab",
          status: () => "Working foundation",
        },
        school: {
          eyebrow: "Structured learning",
          title: "Film School",
          description: "Follow film-science learning paths built from the same techniques and works used by the game and atlas.",
          action: "Browse courses",
          status: () => "6 core courses",
        },
        history: {
          eyebrow: "Cinema through time",
          title: "Film History",
          description: "Browse the catalogue chronologically and move from periods and decades into individual film construction.",
          action: "Open the timeline",
          status: ({ firstYear, lastYear }) => `${firstYear}–${lastYear}`,
        },
        research: {
          eyebrow: "Editorial control",
          title: "Research Control",
          description: "Separate verified film knowledge from provisional seeds and prioritize the next research work.",
          action: "Open control room",
          status: () => "Live queue",
        },
      },
    },
    producer: {
      heroKicker: "The playable production game",
      intro: "Make the project possible. Choose what the film becomes, assemble the production, survive the shoot, shape post-production, and face the release.",
      whyTitle: "Why “Producer”?",
      whyBody: "The game follows the whole film project—not only the artistic decisions made on set. Directing is a focused craft layer inside the wider production system.",
      productionCases: {
        kicker: "Recommended first",
        title: "Production Cases",
        description: "Reconstruct the production logic of known films through screenplay, cinematography, editing, sound, and reflection missions.",
        bullets: ["Stable MVP path", "Film-history examples", "Case report and learning recap"],
        action: "Start Production Cases",
      },
      studioCareer: {
        kicker: "Experimental branch",
        title: "Studio Career",
        description: "Create projects and carry a studio through development, pre-production, shooting, post-production, release, and career consequences.",
        bullets: ["Persistent studio state", "Multi-film pipeline", "Broader simulator foundation"],
        continueAction: "Continue career",
        startAction: "Start new career",
      },
    },
  },
  nb: {
    suiteName: "Filmverket",
    navAria: "Filmverket-seksjoner",
    navLabels: {
      home: "Forside",
      producer: "Film Producer",
      atlas: "Film Atlas",
      director: "Film Director",
      school: "Film School",
      history: "Film History",
      research: "Forskning",
    },
    footerDetail: "Film Producer · Film Atlas · Film Director · Film School · Film History · Forskningskontroll",
    noFilmsAvailable: "Ingen filmer er tilgjengelige ennå.",
    home: {
      kicker: "Et filmspill og en filmvitenskapelig plattform",
      titlePrefix: "Film",
      titleEmphasis: "verket",
      tagline: "Lag film. Forstå film.",
      summaryAria: "Oversikt over plattforminnhold",
      films: (count) => `${count} filmer`,
      craftStatements: (count) => `${count} håndverksutsagn`,
      connectedEntrances: (count) => `${count} sammenkoblede innganger`,
      entrancesAria: "Innganger til Filmverket",
      gateways: {
        producer: {
          eyebrow: "Spillet",
          title: "Film Producer",
          description: "Led produksjoner, ta valg under press, fullfør Production Cases og bygg en eksperimentell studiokarriere.",
          action: "Gå inn i studioet",
          status: () => "Spillbart",
        },
        atlas: {
          eyebrow: "Kunnskapsplattformen",
          title: "Film Atlas",
          description: "Åpne en film og undersøk manus, bilde, klipp, lyd, tone, læringsmål og historisk plassering.",
          action: "Utforsk filmer",
          status: ({ filmCount }) => `${filmCount} filmer`,
        },
        director: {
          eyebrow: "Fra analyse til praksis",
          title: "Film Director",
          description: "Studer én film gjennom et valgt håndverksperspektiv og gjør konstruksjonsprinsippene om til en regi-brief.",
          action: "Åpne laboratoriet",
          status: () => "Arbeidsgrunnlag",
        },
        school: {
          eyebrow: "Strukturert læring",
          title: "Film School",
          description: "Følg filmvitenskapelige læringsløp bygget av de samme teknikkene og verkene som brukes i spillet og atlaset.",
          action: "Se kurs",
          status: () => "6 kjernekurs",
        },
        history: {
          eyebrow: "Film gjennom tid",
          title: "Film History",
          description: "Bla kronologisk i katalogen og gå fra perioder og tiår til hvordan den enkelte filmen er konstruert.",
          action: "Åpne tidslinjen",
          status: ({ firstYear, lastYear }) => `${firstYear}–${lastYear}`,
        },
        research: {
          eyebrow: "Redaksjonell kontroll",
          title: "Forskningskontroll",
          description: "Skill verifisert filmkunnskap fra foreløpige kilder og prioriter det neste forskningsarbeidet.",
          action: "Åpne kontrollrommet",
          status: () => "Aktiv kø",
        },
      },
    },
    producer: {
      heroKicker: "Det spillbare produksjonsspillet",
      intro: "Gjør prosjektet mulig. Velg hva filmen skal bli, sett sammen produksjonen, kom deg gjennom opptakene, form etterarbeidet og møt lanseringen.",
      whyTitle: "Hvorfor «Producer»?",
      whyBody: "Spillet følger hele filmprosjektet, ikke bare de kunstneriske valgene på sett. Regi er et avgrenset håndverkslag innenfor det større produksjonssystemet.",
      productionCases: {
        kicker: "Anbefalt først",
        title: "Production Cases",
        description: "Rekonstruer produksjonslogikken i kjente filmer gjennom oppdrag om manus, foto, klipp, lyd og refleksjon.",
        bullets: ["Stabil MVP-løype", "Filmhistoriske eksempler", "Caserapport og læringsoppsummering"],
        action: "Start Production Cases",
      },
      studioCareer: {
        kicker: "Eksperimentell gren",
        title: "Studio Career",
        description: "Opprett prosjekter og før et studio gjennom utvikling, preproduksjon, opptak, etterarbeid, lansering og karrierekonsekvenser.",
        bullets: ["Vedvarende studiostatus", "Pipeline med flere filmer", "Bredere simulatorgrunnlag"],
        continueAction: "Fortsett karrieren",
        startAction: "Start ny karriere",
      },
    },
  },
  fr: {
    suiteName: "FilmWork",
    navAria: "Sections FilmWork",
    navLabels: {
      home: "Accueil",
      producer: "Film Producer",
      atlas: "Film Atlas",
      director: "Film Director",
      school: "Film School",
      history: "Film History",
      research: "Recherche",
    },
    footerDetail: "Film Producer · Film Atlas · Film Director · Film School · Film History · Contrôle de recherche",
    noFilmsAvailable: "Aucun film n’est encore disponible.",
    home: {
      kicker: "Un jeu de cinéma et une plateforme de science du cinéma",
      titlePrefix: "Film",
      titleEmphasis: "Work",
      tagline: "Faire du cinéma. Comprendre le cinéma.",
      summaryAria: "Résumé du contenu de la plateforme",
      films: (count) => `${count} films`,
      craftStatements: (count) => `${count} énoncés de pratique`,
      connectedEntrances: (count) => `${count} entrées connectées`,
      entrancesAria: "Entrées FilmWork",
      gateways: {
        producer: {
          eyebrow: "Le jeu",
          title: "Film Producer",
          description: "Pilotez des productions, prenez des décisions sous pression, terminez des Production Cases et construisez une carrière de studio expérimentale.",
          action: "Entrer dans le studio",
          status: () => "Jouable",
        },
        atlas: {
          eyebrow: "La plateforme de connaissances",
          title: "Film Atlas",
          description: "Ouvrez un film et étudiez son scénario, son image, son montage, son son, sa tonalité, ses objectifs d’apprentissage et sa place historique.",
          action: "Explorer les films",
          status: ({ filmCount }) => `${filmCount} films`,
        },
        director: {
          eyebrow: "De l’analyse à la pratique",
          title: "Film Director",
          description: "Étudiez un film selon un axe de métier choisi et transformez ses principes de construction en brief de réalisation.",
          action: "Ouvrir le laboratoire",
          status: () => "Base de travail",
        },
        school: {
          eyebrow: "Apprentissage structuré",
          title: "Film School",
          description: "Suivez des parcours de science du cinéma construits à partir des mêmes techniques et œuvres que le jeu et l’atlas.",
          action: "Parcourir les cours",
          status: () => "6 cours fondamentaux",
        },
        history: {
          eyebrow: "Le cinéma à travers le temps",
          title: "Film History",
          description: "Parcourez le catalogue chronologiquement et passez des périodes et décennies à la construction de chaque film.",
          action: "Ouvrir la chronologie",
          status: ({ firstYear, lastYear }) => `${firstYear}–${lastYear}`,
        },
        research: {
          eyebrow: "Contrôle éditorial",
          title: "Contrôle de recherche",
          description: "Distinguez les connaissances vérifiées des pistes provisoires et priorisez le prochain travail de recherche.",
          action: "Ouvrir la salle de contrôle",
          status: () => "File active",
        },
      },
    },
    producer: {
      heroKicker: "Le jeu de production jouable",
      intro: "Rendez le projet possible. Décidez de ce que le film devient, assemblez la production, traversez le tournage, façonnez la postproduction et affrontez la sortie.",
      whyTitle: "Pourquoi « Producer » ?",
      whyBody: "Le jeu suit l’ensemble du projet de film, pas seulement les décisions artistiques prises sur le plateau. La réalisation est une couche de métier ciblée au sein d’un système de production plus large.",
      productionCases: {
        kicker: "Recommandé en premier",
        title: "Production Cases",
        description: "Reconstituez la logique de production de films connus à travers des missions de scénario, image, montage, son et réflexion.",
        bullets: ["Parcours MVP stable", "Exemples d’histoire du cinéma", "Rapport de cas et synthèse d’apprentissage"],
        action: "Démarrer Production Cases",
      },
      studioCareer: {
        kicker: "Branche expérimentale",
        title: "Studio Career",
        description: "Créez des projets et conduisez un studio du développement à la préproduction, au tournage, à la postproduction, à la sortie et à leurs conséquences de carrière.",
        bullets: ["État du studio persistant", "Pipeline de plusieurs films", "Base de simulation plus large"],
        continueAction: "Continuer la carrière",
        startAction: "Commencer une nouvelle carrière",
      },
    },
  },
  pt: {
    suiteName: "FilmWork",
    navAria: "Secções FilmWork",
    navLabels: {
      home: "Início",
      producer: "Film Producer",
      atlas: "Film Atlas",
      director: "Film Director",
      school: "Film School",
      history: "Film History",
      research: "Investigação",
    },
    footerDetail: "Film Producer · Film Atlas · Film Director · Film School · Film History · Controlo de investigação",
    noFilmsAvailable: "Ainda não há filmes disponíveis.",
    home: {
      kicker: "Um jogo de cinema e uma plataforma de ciência do cinema",
      titlePrefix: "Film",
      titleEmphasis: "Work",
      tagline: "Fazer cinema. Compreender cinema.",
      summaryAria: "Resumo do conteúdo da plataforma",
      films: (count) => `${count} filmes`,
      craftStatements: (count) => `${count} enunciados de prática`,
      connectedEntrances: (count) => `${count} entradas interligadas`,
      entrancesAria: "Entradas FilmWork",
      gateways: {
        producer: {
          eyebrow: "O jogo",
          title: "Film Producer",
          description: "Conduza produções, tome decisões sob pressão, conclua Production Cases e construa uma carreira de estúdio experimental.",
          action: "Entrar no estúdio",
          status: () => "Jogável",
        },
        atlas: {
          eyebrow: "A plataforma de conhecimento",
          title: "Film Atlas",
          description: "Abra um filme e examine o argumento, a imagem, a montagem, o som, o tom, os objectivos de aprendizagem e a posição histórica.",
          action: "Explorar filmes",
          status: ({ filmCount }) => `${filmCount} filmes`,
        },
        director: {
          eyebrow: "Da análise à prática",
          title: "Film Director",
          description: "Estude um filme através de uma área de ofício escolhida e transforme os seus princípios de construção num briefing de realização.",
          action: "Abrir o laboratório",
          status: () => "Base de trabalho",
        },
        school: {
          eyebrow: "Aprendizagem estruturada",
          title: "Film School",
          description: "Siga percursos de ciência do cinema construídos a partir das mesmas técnicas e obras usadas pelo jogo e pelo atlas.",
          action: "Ver cursos",
          status: () => "6 cursos fundamentais",
        },
        history: {
          eyebrow: "Cinema através do tempo",
          title: "Film History",
          description: "Percorra o catálogo cronologicamente e passe de períodos e décadas para a construção de cada filme.",
          action: "Abrir a cronologia",
          status: ({ firstYear, lastYear }) => `${firstYear}–${lastYear}`,
        },
        research: {
          eyebrow: "Controlo editorial",
          title: "Controlo de investigação",
          description: "Separe conhecimento cinematográfico verificado de pistas provisórias e dê prioridade ao próximo trabalho de investigação.",
          action: "Abrir a sala de controlo",
          status: () => "Fila activa",
        },
      },
    },
    producer: {
      heroKicker: "O jogo de produção jogável",
      intro: "Torne o projecto possível. Decida no que o filme se transforma, reúna a produção, atravesse a rodagem, molde a pós-produção e enfrente o lançamento.",
      whyTitle: "Porquê «Producer»?",
      whyBody: "O jogo acompanha todo o projecto cinematográfico, não apenas as decisões artísticas tomadas no plateau. A realização é uma camada de ofício focada dentro do sistema de produção mais amplo.",
      productionCases: {
        kicker: "Recomendado primeiro",
        title: "Production Cases",
        description: "Reconstrua a lógica de produção de filmes conhecidos através de missões de argumento, cinematografia, montagem, som e reflexão.",
        bullets: ["Percurso MVP estável", "Exemplos de história do cinema", "Relatório de caso e síntese de aprendizagem"],
        action: "Iniciar Production Cases",
      },
      studioCareer: {
        kicker: "Ramo experimental",
        title: "Studio Career",
        description: "Crie projectos e conduza um estúdio pelo desenvolvimento, pré-produção, rodagem, pós-produção, lançamento e consequências para a carreira.",
        bullets: ["Estado de estúdio persistente", "Pipeline de vários filmes", "Base de simulação mais ampla"],
        continueAction: "Continuar carreira",
        startAction: "Iniciar nova carreira",
      },
    },
  },
};
