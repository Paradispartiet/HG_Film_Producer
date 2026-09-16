import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const STUDIO_SETUP_PRESET_IDS = ["micro_studio", "indie_studio", "prestige_startup"] as const;
export type StudioSetupPresetId = (typeof STUDIO_SETUP_PRESET_IDS)[number];

export const STUDIO_SETUP_SCALE_IDS = ["micro", "indie", "mid_budget", "studio", "prestige"] as const;
export type StudioSetupScaleId = (typeof STUDIO_SETUP_SCALE_IDS)[number];

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
  };
  readonly scriptTemplate: {
    readonly legend: string;
    readonly noDedicatedTemplate: string;
  };
};

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
    },
    project: {
      heading: "Package the first film",
      intro: "Define the project that will enter development.",
      titleLabel: "Project title",
      titlePlaceholder: "e.g. The Last Screening",
      productionScale: "Production scale",
      scales: { micro: "Micro", indie: "Indie", mid_budget: "Mid budget", studio: "Studio", prestige: "Prestige" },
    },
    genre: { legend: "Genre" },
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
    },
    project: {
      heading: "Pakk den første filmen",
      intro: "Definer prosjektet som skal inn i utvikling.",
      titleLabel: "Prosjekttittel",
      titlePlaceholder: "f.eks. Den siste visningen",
      productionScale: "Produksjonsskala",
      scales: { micro: "Mikro", indie: "Indie", mid_budget: "Mellombudsjett", studio: "Studio", prestige: "Prestisje" },
    },
    genre: { legend: "Sjanger" },
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
    },
    project: {
      heading: "Monter le premier film",
      intro: "Définissez le projet qui entrera en développement.",
      titleLabel: "Titre du projet",
      titlePlaceholder: "p. ex. La Dernière Séance",
      productionScale: "Échelle de production",
      scales: { micro: "Micro", indie: "Indépendant", mid_budget: "Budget moyen", studio: "Studio", prestige: "Prestige" },
    },
    genre: { legend: "Genre" },
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
    },
    project: {
      heading: "Estruturar o primeiro filme",
      intro: "Defina o projeto que entrará em desenvolvimento.",
      titleLabel: "Título do projeto",
      titlePlaceholder: "por ex., A Última Sessão",
      productionScale: "Escala de produção",
      scales: { micro: "Micro", indie: "Independente", mid_budget: "Orçamento médio", studio: "Estúdio", prestige: "Prestígio" },
    },
    genre: { legend: "Género" },
    scriptTemplate: {
      legend: "Modelo de argumento",
      noDedicatedTemplate: "Ainda não existe um modelo dedicado para este género. Escolha qualquer estrutura disponível.",
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioSetupCopy>;
