import type { StrategicGoalType } from "../domain/career.js";
import type { Genre } from "../domain/knowledge.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const STUDIO_SETUP_PRESET_IDS = ["micro_studio", "indie_studio", "prestige_startup"] as const;
export type StudioSetupPresetId = (typeof STUDIO_SETUP_PRESET_IDS)[number];

export const STUDIO_SETUP_SCALE_IDS = ["micro", "indie", "mid_budget", "studio", "prestige"] as const;
export type StudioSetupScaleId = (typeof STUDIO_SETUP_SCALE_IDS)[number];

type StrategicGoalPresentationInput = {
  readonly id: string;
  readonly type: StrategicGoalType;
  readonly title: string;
  readonly description: string;
};

type StrategicGoalPresentation = {
  readonly title: string;
  readonly description: string;
};

type StrategicGoalPresentationByType = Readonly<Record<StrategicGoalType, StrategicGoalPresentation>>;
type StrategicGoalPresentationById = Readonly<Partial<Record<string, StrategicGoalPresentation>>>;

type GenrePresentationInput = Pick<Genre, "id" | "name" | "summary">;
type GenrePresentation = Pick<Genre, "name" | "summary">;
type GenrePresentationById = Readonly<Record<string, GenrePresentation>>;

type StudioSetupCopy = {
  readonly panel: {
    readonly kicker: string;
    readonly heading: string;
    readonly intro: string;
    readonly mandateHeading: string;
    readonly mandateIntro: string;
    readonly readyHeading: string;
    readonly readyDetail: string;
    readonly createProject: string;
  };
  readonly validation: {
    readonly studioName: string;
    readonly strategicGoal: string;
    readonly projectTitle: string;
    readonly genre: string;
    readonly scriptTemplate: string;
  };
  readonly studio: {
    readonly heading: string;
    readonly intro: string;
    readonly nameLabel: string;
    readonly namePlaceholder: string;
    readonly startingPosition: string;
    readonly presets: Readonly<Record<StudioSetupPresetId, { readonly label: string; readonly description: string }>>;
    readonly presetMeta: (money: string, reputation: number, prestige: number) => string;
  };
  readonly goal: {
    readonly legend: string;
    readonly optionalLegend: string;
    readonly keepCurrent: string;
    readonly keepCurrentDescription: string;
    readonly noChange: string;
    readonly alreadyActive: string;
    readonly targetYear: (year: number) => string;
    readonly updateHint: string;
    readonly presentation: (goal: StrategicGoalPresentationInput) => StrategicGoalPresentation;
  };
  readonly project: {
    readonly heading: string;
    readonly intro: string;
    readonly titleLabel: string;
    readonly titlePlaceholder: string;
    readonly productionScale: string;
    readonly scales: Readonly<Record<StudioSetupScaleId, string>>;
  };
  readonly genre: {
    readonly legend: string;
    readonly presentation: (genre: GenrePresentationInput) => GenrePresentation;
  };
  readonly scriptTemplate: {
    readonly legend: string;
    readonly noDedicatedTemplate: string;
  };
};

const NB_STRATEGIC_GOALS = {
  survive_year: {
    title: "Overlev det første året",
    description: "Hold studioet solvent gjennom fire kvartaler og fullfør én film.",
  },
  make_profit: {
    title: "Gå med overskudd",
    description: "Fullfør en film med positiv nettoinntekt.",
  },
  build_reputation: {
    title: "Bygg studioets omdømme",
    description: "Styrk studioets omdømme gjennom en tydelig og gjenkjennelig filmrekke.",
  },
  launch_debut: {
    title: "Få en lønnsom debut",
    description: "Lanser studioets første film med positiv nettoinntekt.",
  },
  specialize_genre: {
    title: "Bli kjent for thrillere",
    description: "Fullfør en sammenhengende rekke spenningsdrevne sjangerfilmer.",
  },
  build_prestige: {
    title: "Bygg et arthouse-omdømme",
    description: "Utvikle kritisk særpregede filmer og sterke festivalrelasjoner.",
  },
  win_award: {
    title: "Vinn en festivalpris",
    description: "Før én film fra festivalutvelgelse til en konkurransepris.",
  },
  grow_audience: {
    title: "Bygg et kommersielt publikum",
    description: "Skap gjentakbar publikumstiltrekning på tvers av studioets filmrekke.",
  },
  discover_talent: {
    title: "Oppdag nye talenter",
    description: "Løft fram nye skuespillere eller fagfolk gjennom reelt kreativt ansvar.",
  },
  international_breakthrough: {
    title: "Sikre en internasjonal samproduksjon",
    description: "Bygg nok posisjon til å pakke en film med utenlandske kreative og finansielle partnere.",
  },
} as const satisfies StrategicGoalPresentationByType;

const NB_STRATEGIC_GOAL_OVERRIDES = {
  strategic_goal_local_oslo_studio: {
    title: "Bli et lokalt Oslo-studio",
    description: "Bygg en gjenkjennelig lokal stemme gjennom Oslo-fortellinger, team og opptakssteder.",
  },
  strategic_goal_improve_technical_craft: {
    title: "Forbedre det tekniske håndverket",
    description: "Hev produksjonskvaliteten gjennom opplæring, utstyr og sterke avdelingsledere.",
  },
} as const satisfies StrategicGoalPresentationById;

const FR_STRATEGIC_GOALS = {
  survive_year: {
    title: "Survivre à la première année",
    description: "Maintenez le studio solvable pendant quatre trimestres et terminez un film.",
  },
  make_profit: {
    title: "Dégager un bénéfice",
    description: "Terminez un film avec un résultat net positif.",
  },
  build_reputation: {
    title: "Bâtir la réputation du studio",
    description: "Renforcez la réputation du studio grâce à une série de films claire et reconnaissable.",
  },
  launch_debut: {
    title: "Réussir des débuts rentables",
    description: "Sortez le premier film du studio avec un résultat net positif.",
  },
  specialize_genre: {
    title: "Devenir une référence du thriller",
    description: "Réalisez une série cohérente de films de genre fondés sur le suspense.",
  },
  build_prestige: {
    title: "Bâtir une réputation art et essai",
    description: "Développez des films singuliers reconnus par la critique et des relations avec les festivals.",
  },
  win_award: {
    title: "Remporter un prix en festival",
    description: "Accompagnez un film de sa sélection en festival jusqu’à une récompense en compétition.",
  },
  grow_audience: {
    title: "Développer un public commercial",
    description: "Créez un attrait durable pour le public sur l’ensemble de la programmation du studio.",
  },
  discover_talent: {
    title: "Découvrir de nouveaux talents",
    description: "Lancez des acteurs ou techniciens émergents en leur confiant de vraies responsabilités créatives.",
  },
  international_breakthrough: {
    title: "Obtenir une coproduction internationale",
    description: "Acquérez assez de stature pour monter un film avec des partenaires créatifs et financiers étrangers.",
  },
} as const satisfies StrategicGoalPresentationByType;

const FR_STRATEGIC_GOAL_OVERRIDES = {
  strategic_goal_local_oslo_studio: {
    title: "Devenir un studio local d’Oslo",
    description: "Construisez une voix locale reconnaissable à travers les récits, équipes et lieux d’Oslo.",
  },
  strategic_goal_improve_technical_craft: {
    title: "Améliorer le savoir-faire technique",
    description: "Élevez la qualité de production grâce à la formation, au matériel et à de solides chefs de département.",
  },
} as const satisfies StrategicGoalPresentationById;

const PT_STRATEGIC_GOALS = {
  survive_year: {
    title: "Sobreviver ao primeiro ano",
    description: "Mantenha o estúdio solvente durante quatro trimestres e conclua um filme.",
  },
  make_profit: {
    title: "Gerar lucro",
    description: "Conclua um filme com receita líquida positiva.",
  },
  build_reputation: {
    title: "Construir a reputação do estúdio",
    description: "Reforce a reputação do estúdio através de uma linha de filmes clara e reconhecível.",
  },
  launch_debut: {
    title: "Fazer uma estreia lucrativa",
    description: "Lance o primeiro filme do estúdio com receita líquida positiva.",
  },
  specialize_genre: {
    title: "Tornar-se conhecido por thrillers",
    description: "Conclua uma sequência coerente de filmes de género orientados pelo suspense.",
  },
  build_prestige: {
    title: "Construir reputação de cinema de autor",
    description: "Desenvolva filmes distintivos para a crítica e relações sólidas com festivais.",
  },
  win_award: {
    title: "Ganhar um prémio de festival",
    description: "Leve um filme da seleção em festival até uma vitória competitiva.",
  },
  grow_audience: {
    title: "Construir uma audiência comercial",
    description: "Crie um apelo de público repetível em toda a carteira do estúdio.",
  },
  discover_talent: {
    title: "Descobrir novos talentos",
    description: "Lance atores ou profissionais emergentes através de responsabilidade criativa relevante.",
  },
  international_breakthrough: {
    title: "Garantir uma coprodução internacional",
    description: "Construa posição suficiente para estruturar um filme com parceiros criativos e financeiros estrangeiros.",
  },
} as const satisfies StrategicGoalPresentationByType;

const PT_STRATEGIC_GOAL_OVERRIDES = {
  strategic_goal_local_oslo_studio: {
    title: "Tornar-se um estúdio local de Oslo",
    description: "Construa uma voz local reconhecível através de histórias, equipas e locais de Oslo.",
  },
  strategic_goal_improve_technical_craft: {
    title: "Aperfeiçoar o ofício técnico",
    description: "Eleve a qualidade de produção através de formação, equipamento e chefias de departamento fortes.",
  },
} as const satisfies StrategicGoalPresentationById;

const NB_GENRES = {
  genre_drama: { name: "Drama", summary: "Karakter- og konfliktdrevne historier om mennesker under press." },
  genre_thriller: { name: "Thriller", summary: "Spenning, innsats og suspense som holder publikum på tå hev." },
  genre_comedy: { name: "Komedie", summary: "Timing, tone og karakterkjemi bygget rundt latter." },
  genre_horror: { name: "Skrekk", summary: "Uro og sjokk bygget opp gjennom forventning og lyd." },
  genre_documentary: { name: "Dokumentar", summary: "Virkelige mennesker og hendelser formet til en historie." },
  genre_action: { name: "Action", summary: "Bevegelse, store sekvenser og fysiske innsatser i stor skala." },
  genre_romance: { name: "Romantikk", summary: "Relasjoner, lengsel og kjemi mellom hovedrollene." },
  genre_science_fiction: { name: "Science fiction", summary: "Spekulative verdener som bruker fremtiden til å undersøke samtiden." },
  genre_period_drama: { name: "Historisk drama", summary: "Historier lagt til en gjenskapt fortid der design og sted betyr mye." },
  genre_social_realism: { name: "Sosialrealisme", summary: "Jordnære historier om vanlige liv og sosiale forhold." },
} as const satisfies GenrePresentationById;

const FR_GENRES = {
  genre_drama: { name: "Drame", summary: "Des récits guidés par les personnages et les conflits, mettant en scène des personnes sous pression." },
  genre_thriller: { name: "Thriller", summary: "Tension, enjeux et suspense qui maintiennent le public en haleine." },
  genre_comedy: { name: "Comédie", summary: "Rythme, ton et alchimie entre les personnages au service du rire." },
  genre_horror: { name: "Horreur", summary: "Angoisse et choc construits par l’anticipation et le son." },
  genre_documentary: { name: "Documentaire", summary: "Des sujets et événements réels façonnés en récit." },
  genre_action: { name: "Action", summary: "Mouvement, scènes spectaculaires et enjeux physiques à grande échelle." },
  genre_romance: { name: "Romance", summary: "Relations, désir et alchimie entre les rôles principaux." },
  genre_science_fiction: { name: "Science-fiction", summary: "Des mondes spéculatifs qui utilisent le futur pour interroger le présent." },
  genre_period_drama: { name: "Drame historique", summary: "Des récits situés dans un passé recréé où les décors et les lieux comptent." },
  genre_social_realism: { name: "Réalisme social", summary: "Des récits ancrés dans le quotidien, sur des vies ordinaires et les conditions sociales." },
} as const satisfies GenrePresentationById;

const PT_GENRES = {
  genre_drama: { name: "Drama", summary: "Histórias movidas por personagens e conflitos sobre pessoas sob pressão." },
  genre_thriller: { name: "Suspense", summary: "Tensão, riscos e suspense que mantêm o público atento." },
  genre_comedy: { name: "Comédia", summary: "Ritmo, tom e química entre personagens construídos em torno do humor." },
  genre_horror: { name: "Terror", summary: "Medo e choque construídos pela antecipação e pelo som." },
  genre_documentary: { name: "Documentário", summary: "Pessoas e acontecimentos reais moldados numa história." },
  genre_action: { name: "Ação", summary: "Movimento, grandes sequências e riscos físicos em escala." },
  genre_romance: { name: "Romance", summary: "Relações, desejo e química entre os protagonistas." },
  genre_science_fiction: { name: "Ficção científica", summary: "Mundos especulativos que usam o futuro para examinar o presente." },
  genre_period_drama: { name: "Drama de época", summary: "Histórias situadas num passado recriado, onde o design e o lugar importam." },
  genre_social_realism: { name: "Realismo social", summary: "Histórias realistas sobre vidas comuns e condições sociais." },
} as const satisfies GenrePresentationById;

function preserveCanonicalGoalPresentation(goal: StrategicGoalPresentationInput): StrategicGoalPresentation {
  return { title: goal.title, description: goal.description };
}

function localizeGoalPresentation(
  byType: StrategicGoalPresentationByType,
  byId: StrategicGoalPresentationById,
): (goal: StrategicGoalPresentationInput) => StrategicGoalPresentation {
  return (goal) => byId[goal.id] ?? byType[goal.type];
}

function preserveCanonicalGenrePresentation(genre: GenrePresentationInput): GenrePresentation {
  return { name: genre.name, summary: genre.summary };
}

function localizeGenrePresentation(byId: GenrePresentationById): (genre: GenrePresentationInput) => GenrePresentation {
  return (genre) => byId[genre.id] ?? preserveCanonicalGenrePresentation(genre);
}

export const STUDIO_SETUP_COPY = {
  en: {
    panel: {
      kicker: "New studio slate",
      heading: "Create your first project",
      intro: "Set the studio mandate and package one film. This run stops before development.",
      mandateHeading: "Set the mandate",
      mandateIntro: "Choose the ambition that will guide early decisions.",
      readyHeading: "Ready when you are",
      readyDetail: "Creates an engine-backed career and project state.",
      createProject: "Create project",
    },
    validation: {
      studioName: "Enter a studio name.",
      strategicGoal: "Select a strategic goal.",
      projectTitle: "Enter a project title.",
      genre: "Select a genre.",
      scriptTemplate: "Select a script template.",
    },
    studio: {
      heading: "Build the studio",
      intro: "Choose the banner and starting position for your career.",
      nameLabel: "Studio name",
      namePlaceholder: "e.g. Northline Pictures",
      startingPosition: "Starting position",
      presets: {
        micro_studio: { label: "Micro studio", description: "Lean capital and a ground-floor reputation." },
        indie_studio: { label: "Indie studio", description: "A balanced independent starting position." },
        prestige_startup: { label: "Prestige startup", description: "More backing and early industry credibility." },
      },
      presetMeta: (money, reputation, prestige) => `${money} · Rep ${reputation} · Prestige ${prestige}`,
    },
    goal: {
      legend: "Strategic goal",
      optionalLegend: "Strategic goal update (optional)",
      keepCurrent: "Keep current slate",
      keepCurrentDescription: "Carry every active strategic goal forward without adding another.",
      noChange: "No change",
      alreadyActive: "Already active",
      targetYear: (year) => `Target year ${year}`,
      updateHint: "Selecting an active goal leaves the career unchanged; a new goal is added to the current slate.",
      presentation: preserveCanonicalGoalPresentation,
    },
    project: {
      heading: "Package the first film",
      intro: "Define the project that will enter development.",
      titleLabel: "Project title",
      titlePlaceholder: "e.g. The Last Screening",
      productionScale: "Production scale",
      scales: { micro: "Micro", indie: "Indie", mid_budget: "Mid budget", studio: "Studio", prestige: "Prestige" },
    },
    genre: { legend: "Genre", presentation: preserveCanonicalGenrePresentation },
    scriptTemplate: {
      legend: "Script template",
      noDedicatedTemplate: "No dedicated template exists for this genre yet. Choose any available structure.",
    },
  },
  nb: {
    panel: {
      kicker: "Ny studioplan",
      heading: "Lag ditt første prosjekt",
      intro: "Fastsett studioets mandat og pakk én film. Denne runden stopper før utviklingsfasen.",
      mandateHeading: "Fastsett mandatet",
      mandateIntro: "Velg ambisjonen som skal styre de første beslutningene.",
      readyHeading: "Klar når du er",
      readyDetail: "Oppretter en karriere- og prosjektstatus støttet av motoren.",
      createProject: "Opprett prosjekt",
    },
    validation: {
      studioName: "Skriv inn et studionavn.",
      strategicGoal: "Velg et strategisk mål.",
      projectTitle: "Skriv inn en prosjekttittel.",
      genre: "Velg en sjanger.",
      scriptTemplate: "Velg en manusmal.",
    },
    studio: {
      heading: "Bygg studioet",
      intro: "Velg profil og startposisjon for karrieren.",
      nameLabel: "Studionavn",
      namePlaceholder: "f.eks. Northline Pictures",
      startingPosition: "Startposisjon",
      presets: {
        micro_studio: { label: "Mikrostudio", description: "Begrenset kapital og et omdømme som bygges fra bunnen." },
        indie_studio: { label: "Indiestudio", description: "En balansert, uavhengig startposisjon." },
        prestige_startup: { label: "Prestisjeoppstart", description: "Mer finansiering og tidlig troverdighet i bransjen." },
      },
      presetMeta: (money, reputation, prestige) => `${money} · Omdømme ${reputation} · Prestisje ${prestige}`,
    },
    goal: {
      legend: "Strategisk mål",
      optionalLegend: "Oppdater strategisk mål (valgfritt)",
      keepCurrent: "Behold nåværende plan",
      keepCurrentDescription: "Viderefør alle aktive strategiske mål uten å legge til et nytt.",
      noChange: "Ingen endring",
      alreadyActive: "Allerede aktivt",
      targetYear: (year) => `Målår ${year}`,
      updateHint: "Velger du et aktivt mål, forblir karrieren uendret; et nytt mål legges til den nåværende planen.",
      presentation: localizeGoalPresentation(NB_STRATEGIC_GOALS, NB_STRATEGIC_GOAL_OVERRIDES),
    },
    project: {
      heading: "Pakk den første filmen",
      intro: "Definer prosjektet som skal inn i utvikling.",
      titleLabel: "Prosjekttittel",
      titlePlaceholder: "f.eks. Den siste visningen",
      productionScale: "Produksjonsskala",
      scales: { micro: "Mikro", indie: "Indie", mid_budget: "Mellombudsjett", studio: "Studio", prestige: "Prestisje" },
    },
    genre: { legend: "Sjanger", presentation: localizeGenrePresentation(NB_GENRES) },
    scriptTemplate: {
      legend: "Manusmal",
      noDedicatedTemplate: "Det finnes ingen egen mal for denne sjangeren ennå. Velg en av de tilgjengelige strukturene.",
    },
  },
  fr: {
    panel: {
      kicker: "Nouvelle programmation du studio",
      heading: "Créez votre premier projet",
      intro: "Définissez le mandat du studio et montez un film. Cette partie s’arrête avant le développement.",
      mandateHeading: "Définir le mandat",
      mandateIntro: "Choisissez l’ambition qui guidera les premières décisions.",
      readyHeading: "Prêt quand vous l’êtes",
      readyDetail: "Crée un état de carrière et de projet piloté par le moteur.",
      createProject: "Créer le projet",
    },
    validation: {
      studioName: "Saisissez un nom de studio.",
      strategicGoal: "Sélectionnez un objectif stratégique.",
      projectTitle: "Saisissez un titre de projet.",
      genre: "Sélectionnez un genre.",
      scriptTemplate: "Sélectionnez un modèle de scénario.",
    },
    studio: {
      heading: "Construire le studio",
      intro: "Choisissez l’identité et la position de départ de votre carrière.",
      nameLabel: "Nom du studio",
      namePlaceholder: "p. ex. Northline Pictures",
      startingPosition: "Position de départ",
      presets: {
        micro_studio: { label: "Micro-studio", description: "Capital limité et réputation à construire depuis la base." },
        indie_studio: { label: "Studio indépendant", description: "Une position de départ indépendante et équilibrée." },
        prestige_startup: { label: "Lancement prestige", description: "Davantage de soutien et une crédibilité précoce dans le secteur." },
      },
      presetMeta: (money, reputation, prestige) => `${money} · Réputation ${reputation} · Prestige ${prestige}`,
    },
    goal: {
      legend: "Objectif stratégique",
      optionalLegend: "Mise à jour de l’objectif stratégique (facultatif)",
      keepCurrent: "Conserver la programmation actuelle",
      keepCurrentDescription: "Conservez tous les objectifs stratégiques actifs sans en ajouter un autre.",
      noChange: "Aucun changement",
      alreadyActive: "Déjà actif",
      targetYear: (year) => `Année cible ${year}`,
      updateHint: "Sélectionner un objectif déjà actif ne modifie pas la carrière ; un nouvel objectif s’ajoute à la programmation actuelle.",
      presentation: localizeGoalPresentation(FR_STRATEGIC_GOALS, FR_STRATEGIC_GOAL_OVERRIDES),
    },
    project: {
      heading: "Monter le premier film",
      intro: "Définissez le projet qui entrera en développement.",
      titleLabel: "Titre du projet",
      titlePlaceholder: "p. ex. La Dernière Séance",
      productionScale: "Échelle de production",
      scales: { micro: "Micro", indie: "Indépendant", mid_budget: "Budget moyen", studio: "Studio", prestige: "Prestige" },
    },
    genre: { legend: "Genre", presentation: localizeGenrePresentation(FR_GENRES) },
    scriptTemplate: {
      legend: "Modèle de scénario",
      noDedicatedTemplate: "Il n’existe pas encore de modèle dédié à ce genre. Choisissez une structure disponible.",
    },
  },
  pt: {
    panel: {
      kicker: "Nova carteira do estúdio",
      heading: "Crie o seu primeiro projeto",
      intro: "Defina o mandato do estúdio e estruture um filme. Esta sessão termina antes do desenvolvimento.",
      mandateHeading: "Definir o mandato",
      mandateIntro: "Escolha a ambição que orientará as primeiras decisões.",
      readyHeading: "Pronto quando estiver",
      readyDetail: "Cria um estado de carreira e projeto suportado pelo motor.",
      createProject: "Criar projeto",
    },
    validation: {
      studioName: "Introduza um nome para o estúdio.",
      strategicGoal: "Selecione um objetivo estratégico.",
      projectTitle: "Introduza um título para o projeto.",
      genre: "Selecione um género.",
      scriptTemplate: "Selecione um modelo de argumento.",
    },
    studio: {
      heading: "Construir o estúdio",
      intro: "Escolha a identidade e a posição inicial da sua carreira.",
      nameLabel: "Nome do estúdio",
      namePlaceholder: "por ex., Northline Pictures",
      startingPosition: "Posição inicial",
      presets: {
        micro_studio: { label: "Microestúdio", description: "Capital reduzido e uma reputação a construir desde o início." },
        indie_studio: { label: "Estúdio independente", description: "Uma posição inicial independente e equilibrada." },
        prestige_startup: { label: "Arranque de prestígio", description: "Mais apoio e credibilidade inicial na indústria." },
      },
      presetMeta: (money, reputation, prestige) => `${money} · Reputação ${reputation} · Prestígio ${prestige}`,
    },
    goal: {
      legend: "Objetivo estratégico",
      optionalLegend: "Atualização do objetivo estratégico (opcional)",
      keepCurrent: "Manter a carteira atual",
      keepCurrentDescription: "Mantenha todos os objetivos estratégicos ativos sem acrescentar outro.",
      noChange: "Sem alteração",
      alreadyActive: "Já ativo",
      targetYear: (year) => `Ano-alvo ${year}`,
      updateHint: "Selecionar um objetivo já ativo mantém a carreira inalterada; um novo objetivo é acrescentado à carteira atual.",
      presentation: localizeGoalPresentation(PT_STRATEGIC_GOALS, PT_STRATEGIC_GOAL_OVERRIDES),
    },
    project: {
      heading: "Estruturar o primeiro filme",
      intro: "Defina o projeto que entrará em desenvolvimento.",
      titleLabel: "Título do projeto",
      titlePlaceholder: "por ex., A Última Sessão",
      productionScale: "Escala de produção",
      scales: { micro: "Micro", indie: "Independente", mid_budget: "Orçamento médio", studio: "Estúdio", prestige: "Prestígio" },
    },
    genre: { legend: "Género", presentation: localizeGenrePresentation(PT_GENRES) },
    scriptTemplate: {
      legend: "Modelo de argumento",
      noDedicatedTemplate: "Ainda não existe um modelo dedicado para este género. Escolha qualquer estrutura disponível.",
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioSetupCopy>;
