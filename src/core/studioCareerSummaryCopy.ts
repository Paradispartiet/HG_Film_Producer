import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

type NextProjectHandoffStage =
  | "initial"
  | "development"
  | "preProduction"
  | "shoot"
  | "postProduction"
  | "release"
  | "career";

type NextProjectResultCopy = {
  readonly created: (projectNumber: number) => string;
  readonly nextStatus: string;
  readonly status: {
    readonly readyForDevelopment: string;
    readonly developmentActionCompleted: string;
    readonly preProductionLocked: string;
    readonly shootDayResolved: string;
    readonly postProductionLocked: string;
    readonly filmReleased: string;
    readonly studioUpdated: string;
  };
  readonly newProjectPackage: string;
  readonly genre: string;
  readonly scale: string;
  readonly scriptTemplate: string;
  readonly strategicGoal: string;
  readonly currentSlateUnchanged: string;
  readonly updatedStudio: string;
  readonly carriedStudio: string;
  readonly reputation: string;
  readonly prestige: string;
  readonly careerPeriod: (year: number, quarter: string, completedFilms: number) => string;
  readonly pipelineHeading: (projectNumber: number) => string;
  readonly newSlateOpened: string;
  readonly pipeline: {
    readonly studioCarriedForward: string;
    readonly moneyAvailable: (studioName: string, money: string) => string;
    readonly careerContinued: string;
    readonly careerPeriod: (year: number, quarter: string) => string;
    readonly nextFilmProjectCreated: string;
    readonly projectCreatedDetail: (genre: string, scale: string) => string;
    readonly scriptTemplateSelected: string;
    readonly readyForDevelopment: string;
    readonly setupComplete: (projectNumber: number) => string;
  };
  readonly handoff: {
    readonly label: (projectNumber: number, stage: NextProjectHandoffStage) => string;
    readonly nextStep: (projectNumber: number, stage: NextProjectHandoffStage) => string;
    readonly detail: (projectNumber: number, stage: NextProjectHandoffStage) => string;
  };
};

type StudioCareerSummaryCopy = {
  readonly summary: {
    readonly kicker: string;
    readonly heading: string;
    readonly editSetup: string;
    readonly strategicGoal: string;
    readonly project: string;
    readonly scriptTemplate: string;
    readonly development: {
      readonly label: string;
      readonly completed: string;
      readonly ready: string;
      readonly completedDetail: (pathLabel: string) => string;
      readonly readyDetail: string;
    };
    readonly preProduction: {
      readonly label: string;
      readonly locked: string;
      readonly open: string;
      readonly lockedDetail: (crewCount: number, actorCount: number) => string;
      readonly openDetail: string;
    };
    readonly shoot: {
      readonly label: string;
      readonly complete: string;
      readonly unlocked: string;
      readonly completedDetail: (dayCount: number, averageQuality: number) => string;
      readonly openDetail: string;
    };
    readonly postProduction: {
      readonly label: string;
      readonly complete: string;
      readonly open: string;
      readonly completedDetail: (quality: number) => string;
      readonly openDetail: string;
    };
    readonly release: {
      readonly label: string;
      readonly released: string;
      readonly open: string;
      readonly releasedDetail: (overall: number, careerApplied: boolean) => string;
      readonly openDetail: string;
    };
    readonly career: {
      readonly label: string;
      readonly updated: string;
      readonly reviewReady: string;
      readonly updatedDetail: (year: number) => string;
      readonly readyDetail: string;
    };
  };
  readonly nextProject: {
    readonly validation: {
      readonly projectTitle: string;
      readonly genre: string;
      readonly scriptTemplate: string;
    };
    readonly creator: {
      readonly completeKicker: (projectNumber: number) => string;
      readonly setupHeading: (projectNumber: number) => string;
      readonly intro: string;
    };
    readonly form: {
      readonly greenlight: (projectNumber: number) => string;
      readonly heading: string;
      readonly intro: string;
      readonly titleLabel: string;
      readonly titlePlaceholder: string;
      readonly carryHeading: string;
      readonly carryDetail: (previousFilmLabel: string, projectNumber: number) => string;
      readonly createFilm: (projectNumber: number) => string;
    };
    readonly result: NextProjectResultCopy;
  };
};

const NEXT_PROJECT_RESULT_COPY = {
  en: {
    created: (projectNumber) => `Film ${projectNumber} created`,
    nextStatus: "Next status",
    status: {
      readyForDevelopment: "Ready for development",
      developmentActionCompleted: "Development action completed",
      preProductionLocked: "Pre-production locked",
      shootDayResolved: "Shoot day resolved",
      postProductionLocked: "Post-production locked",
      filmReleased: "Film released",
      studioUpdated: "Studio updated",
    },
    newProjectPackage: "New project package",
    genre: "Genre",
    scale: "Scale",
    scriptTemplate: "Script template",
    strategicGoal: "Strategic goal",
    currentSlateUnchanged: "Current slate unchanged",
    updatedStudio: "Updated studio",
    carriedStudio: "Carried studio",
    reputation: "Reputation",
    prestige: "Prestige",
    careerPeriod: (year, quarter, completedFilms) => `Year ${year} · ${quarter} · ${completedFilms} completed film${completedFilms === 1 ? "" : "s"}`,
    pipelineHeading: (projectNumber) => `Film ${projectNumber} pipeline`,
    newSlateOpened: "New slate opened",
    pipeline: {
      studioCarriedForward: "Studio carried forward",
      moneyAvailable: (studioName, money) => `${studioName} · ${money} available`,
      careerContinued: "Career continued",
      careerPeriod: (year, quarter) => `Year ${year} · ${quarter}`,
      nextFilmProjectCreated: "Next film project created",
      projectCreatedDetail: (genre, scale) => `${genre} · ${scale}`,
      scriptTemplateSelected: "Script template selected",
      readyForDevelopment: "Ready for development",
      setupComplete: (projectNumber) => `Film ${projectNumber} setup complete · development has not started`,
    },
    handoff: {
      label: (projectNumber, stage) => stage === "career" ? `Film ${projectNumber} applied` : stage === "release" ? `Film ${projectNumber} released` : stage === "postProduction" ? `Film ${projectNumber} cut locked` : stage === "shoot" ? `Film ${projectNumber} shoot complete` : stage === "preProduction" ? `Film ${projectNumber} handoff` : stage === "development" ? `Film ${projectNumber} development` : "Next action",
      nextStep: (projectNumber, stage) => stage === "career" ? `Next step: start film ${projectNumber + 1}` : stage === "release" ? `Next step: apply film ${projectNumber} to studio/career` : stage === "postProduction" ? `Next step: release film ${projectNumber}` : stage === "shoot" ? `Next step: post-production for film ${projectNumber}` : stage === "preProduction" ? `Start shoot for film ${projectNumber}` : stage === "development" ? `Start pre-production for film ${projectNumber}` : projectNumber === 2 ? "Reuse the development flow for project 2" : `Next step: develop film ${projectNumber}`,
      detail: (projectNumber, stage) => stage === "career" ? `Film ${projectNumber} is recorded in the studio ledger and career filmography. Film ${projectNumber + 1} can now be created from that updated career.` : stage === "release" ? `Film ${projectNumber} has completed the shared release flow. Applying it to the studio and career is the next step.` : stage === "postProduction" ? `Film ${projectNumber} has locked post-production through the shared finishing flow. Choose a release strategy and festival to resolve the release.` : stage === "shoot" ? `Film ${projectNumber} has resolved its shoot day through the shared shoot flow. Select all five finishing decisions and lock post-production.` : stage === "preProduction" ? `Film ${projectNumber} has locked its location, required crew and cast. Choose one production event and resolve the shoot day.` : stage === "development" ? `Film ${projectNumber} has completed one shared development action and is ready to use the shared pre-production office.` : projectNumber === 2 ? "Choose one development action for film 2. The completed first-film pipeline remains separate." : `Film ${projectNumber} has been created from the updated career. Choose one shared development action to continue.`,
    },
  },
  nb: {
    created: (projectNumber) => `Film ${projectNumber} opprettet`,
    nextStatus: "Neste status",
    status: {
      readyForDevelopment: "Klar for utvikling",
      developmentActionCompleted: "Utviklingshandling fullført",
      preProductionLocked: "Preproduksjon låst",
      shootDayResolved: "Opptaksdag fullført",
      postProductionLocked: "Postproduksjon låst",
      filmReleased: "Filmen er lansert",
      studioUpdated: "Studio oppdatert",
    },
    newProjectPackage: "Ny prosjektpakke",
    genre: "Sjanger",
    scale: "Skala",
    scriptTemplate: "Manusmal",
    strategicGoal: "Strategisk mål",
    currentSlateUnchanged: "Nåværende plan uendret",
    updatedStudio: "Oppdatert studio",
    carriedStudio: "Videreført studio",
    reputation: "Omdømme",
    prestige: "Prestisje",
    careerPeriod: (year, quarter, completedFilms) => `År ${year} · ${quarter} · ${completedFilms} fullført${completedFilms === 1 ? " film" : "e filmer"}`,
    pipelineHeading: (projectNumber) => `Pipeline for film ${projectNumber}`,
    newSlateOpened: "Ny plan åpnet",
    pipeline: {
      studioCarriedForward: "Studio videreført",
      moneyAvailable: (studioName, money) => `${studioName} · ${money} tilgjengelig`,
      careerContinued: "Karrieren videreført",
      careerPeriod: (year, quarter) => `År ${year} · ${quarter}`,
      nextFilmProjectCreated: "Neste filmprosjekt opprettet",
      projectCreatedDetail: (genre, scale) => `${genre} · ${scale}`,
      scriptTemplateSelected: "Manusmal valgt",
      readyForDevelopment: "Klar for utvikling",
      setupComplete: (projectNumber) => `Oppsett for film ${projectNumber} fullført · utviklingen er ikke startet`,
    },
    handoff: {
      label: (projectNumber, stage) => stage === "career" ? `Film ${projectNumber} anvendt` : stage === "release" ? `Film ${projectNumber} lansert` : stage === "postProduction" ? `Film ${projectNumber} klipp låst` : stage === "shoot" ? `Film ${projectNumber} opptak fullført` : stage === "preProduction" ? `Film ${projectNumber} overlevering` : stage === "development" ? `Film ${projectNumber} utvikling` : "Neste handling",
      nextStep: (projectNumber, stage) => stage === "career" ? `Neste steg: start film ${projectNumber + 1}` : stage === "release" ? `Neste steg: anvend film ${projectNumber} på studio/karriere` : stage === "postProduction" ? `Neste steg: lanser film ${projectNumber}` : stage === "shoot" ? `Neste steg: postproduksjon for film ${projectNumber}` : stage === "preProduction" ? `Start opptak for film ${projectNumber}` : stage === "development" ? `Start preproduksjon for film ${projectNumber}` : projectNumber === 2 ? "Bruk utviklingsflyten på nytt for prosjekt 2" : `Neste steg: utvikle film ${projectNumber}`,
      detail: (projectNumber, stage) => stage === "career" ? `Film ${projectNumber} er registrert i studioets oversikt og karrierefilmografien. Film ${projectNumber + 1} kan nå opprettes fra den oppdaterte karrieren.` : stage === "release" ? `Film ${projectNumber} har fullført den delte lanseringsflyten. Neste steg er å anvende resultatet på studio og karriere.` : stage === "postProduction" ? `Film ${projectNumber} har låst postproduksjonen gjennom den delte ferdigstillingsflyten. Velg lanseringsstrategi og festival for å fullføre lanseringen.` : stage === "shoot" ? `Film ${projectNumber} har fullført opptaksdagen gjennom den delte opptaksflyten. Velg alle fem ferdigstillingsbeslutningene og lås postproduksjonen.` : stage === "preProduction" ? `Film ${projectNumber} har låst location, nødvendig crew og cast. Velg én produksjonshendelse og gjennomfør opptaksdagen.` : stage === "development" ? `Film ${projectNumber} har fullført én delt utviklingshandling og er klar for det delte preproduksjonskontoret.` : projectNumber === 2 ? "Velg én utviklingshandling for film 2. Den fullførte pipelinen for den første filmen forblir separat." : `Film ${projectNumber} er opprettet fra den oppdaterte karrieren. Velg én delt utviklingshandling for å fortsette.`,
    },
  },
  fr: {
    created: (projectNumber) => `Film ${projectNumber} créé`,
    nextStatus: "Statut suivant",
    status: {
      readyForDevelopment: "Prêt pour le développement",
      developmentActionCompleted: "Action de développement terminée",
      preProductionLocked: "Préproduction verrouillée",
      shootDayResolved: "Journée de tournage résolue",
      postProductionLocked: "Postproduction verrouillée",
      filmReleased: "Film sorti",
      studioUpdated: "Studio mis à jour",
    },
    newProjectPackage: "Nouveau package de projet",
    genre: "Genre",
    scale: "Échelle",
    scriptTemplate: "Modèle de scénario",
    strategicGoal: "Objectif stratégique",
    currentSlateUnchanged: "Programmation actuelle inchangée",
    updatedStudio: "Studio mis à jour",
    carriedStudio: "Studio reconduit",
    reputation: "Réputation",
    prestige: "Prestige",
    careerPeriod: (year, quarter, completedFilms) => `Année ${year} · ${quarter} · ${completedFilms} film${completedFilms === 1 ? "" : "s"} terminé${completedFilms === 1 ? "" : "s"}`,
    pipelineHeading: (projectNumber) => `Pipeline du film ${projectNumber}`,
    newSlateOpened: "Nouvelle programmation ouverte",
    pipeline: {
      studioCarriedForward: "Studio reconduit",
      moneyAvailable: (studioName, money) => `${studioName} · ${money} disponibles`,
      careerContinued: "Carrière poursuivie",
      careerPeriod: (year, quarter) => `Année ${year} · ${quarter}`,
      nextFilmProjectCreated: "Projet du film suivant créé",
      projectCreatedDetail: (genre, scale) => `${genre} · ${scale}`,
      scriptTemplateSelected: "Modèle de scénario sélectionné",
      readyForDevelopment: "Prêt pour le développement",
      setupComplete: (projectNumber) => `Configuration du film ${projectNumber} terminée · développement pas encore commencé`,
    },
    handoff: {
      label: (projectNumber, stage) => stage === "career" ? `Film ${projectNumber} appliqué` : stage === "release" ? `Film ${projectNumber} sorti` : stage === "postProduction" ? `Montage du film ${projectNumber} verrouillé` : stage === "shoot" ? `Tournage du film ${projectNumber} terminé` : stage === "preProduction" ? `Transmission du film ${projectNumber}` : stage === "development" ? `Développement du film ${projectNumber}` : "Action suivante",
      nextStep: (projectNumber, stage) => stage === "career" ? `Étape suivante : lancer le film ${projectNumber + 1}` : stage === "release" ? `Étape suivante : appliquer le film ${projectNumber} au studio/à la carrière` : stage === "postProduction" ? `Étape suivante : sortir le film ${projectNumber}` : stage === "shoot" ? `Étape suivante : postproduction du film ${projectNumber}` : stage === "preProduction" ? `Démarrer le tournage du film ${projectNumber}` : stage === "development" ? `Démarrer la préproduction du film ${projectNumber}` : projectNumber === 2 ? "Réutiliser le flux de développement pour le projet 2" : `Étape suivante : développer le film ${projectNumber}`,
      detail: (projectNumber, stage) => stage === "career" ? `Le film ${projectNumber} est inscrit au registre du studio et dans la filmographie de carrière. Le film ${projectNumber + 1} peut maintenant être créé à partir de cette carrière mise à jour.` : stage === "release" ? `Le film ${projectNumber} a terminé le flux de sortie partagé. L’appliquer au studio et à la carrière constitue l’étape suivante.` : stage === "postProduction" ? `Le film ${projectNumber} a verrouillé sa postproduction via le flux de finition partagé. Choisissez une stratégie de sortie et un festival pour résoudre la sortie.` : stage === "shoot" ? `Le film ${projectNumber} a résolu sa journée de tournage via le flux partagé. Sélectionnez les cinq décisions de finition et verrouillez la postproduction.` : stage === "preProduction" ? `Le film ${projectNumber} a verrouillé son lieu, l’équipe requise et la distribution. Choisissez un événement de production et résolvez la journée de tournage.` : stage === "development" ? `Le film ${projectNumber} a terminé une action de développement partagée et peut passer au bureau de préproduction partagé.` : projectNumber === 2 ? "Choisissez une action de développement pour le film 2. Le pipeline terminé du premier film reste séparé." : `Le film ${projectNumber} a été créé à partir de la carrière mise à jour. Choisissez une action de développement partagée pour continuer.`,
    },
  },
  pt: {
    created: (projectNumber) => `Filme ${projectNumber} criado`,
    nextStatus: "Próximo estado",
    status: {
      readyForDevelopment: "Pronto para desenvolvimento",
      developmentActionCompleted: "Ação de desenvolvimento concluída",
      preProductionLocked: "Pré-produção fechada",
      shootDayResolved: "Dia de rodagem resolvido",
      postProductionLocked: "Pós-produção fechada",
      filmReleased: "Filme lançado",
      studioUpdated: "Estúdio atualizado",
    },
    newProjectPackage: "Novo pacote de projeto",
    genre: "Género",
    scale: "Escala",
    scriptTemplate: "Modelo de argumento",
    strategicGoal: "Objetivo estratégico",
    currentSlateUnchanged: "Carteira atual inalterada",
    updatedStudio: "Estúdio atualizado",
    carriedStudio: "Estúdio transitado",
    reputation: "Reputação",
    prestige: "Prestígio",
    careerPeriod: (year, quarter, completedFilms) => `Ano ${year} · ${quarter} · ${completedFilms} filme${completedFilms === 1 ? "" : "s"} concluído${completedFilms === 1 ? "" : "s"}`,
    pipelineHeading: (projectNumber) => `Pipeline do filme ${projectNumber}`,
    newSlateOpened: "Nova carteira aberta",
    pipeline: {
      studioCarriedForward: "Estúdio transitado",
      moneyAvailable: (studioName, money) => `${studioName} · ${money} disponíveis`,
      careerContinued: "Carreira continuada",
      careerPeriod: (year, quarter) => `Ano ${year} · ${quarter}`,
      nextFilmProjectCreated: "Projeto do filme seguinte criado",
      projectCreatedDetail: (genre, scale) => `${genre} · ${scale}`,
      scriptTemplateSelected: "Modelo de argumento selecionado",
      readyForDevelopment: "Pronto para desenvolvimento",
      setupComplete: (projectNumber) => `Configuração do filme ${projectNumber} concluída · desenvolvimento ainda não iniciado`,
    },
    handoff: {
      label: (projectNumber, stage) => stage === "career" ? `Filme ${projectNumber} aplicado` : stage === "release" ? `Filme ${projectNumber} lançado` : stage === "postProduction" ? `Montagem do filme ${projectNumber} fechada` : stage === "shoot" ? `Rodagem do filme ${projectNumber} concluída` : stage === "preProduction" ? `Passagem do filme ${projectNumber}` : stage === "development" ? `Desenvolvimento do filme ${projectNumber}` : "Próxima ação",
      nextStep: (projectNumber, stage) => stage === "career" ? `Próximo passo: iniciar o filme ${projectNumber + 1}` : stage === "release" ? `Próximo passo: aplicar o filme ${projectNumber} ao estúdio/carreira` : stage === "postProduction" ? `Próximo passo: lançar o filme ${projectNumber}` : stage === "shoot" ? `Próximo passo: pós-produção do filme ${projectNumber}` : stage === "preProduction" ? `Iniciar a rodagem do filme ${projectNumber}` : stage === "development" ? `Iniciar a pré-produção do filme ${projectNumber}` : projectNumber === 2 ? "Reutilizar o fluxo de desenvolvimento para o projeto 2" : `Próximo passo: desenvolver o filme ${projectNumber}`,
      detail: (projectNumber, stage) => stage === "career" ? `O filme ${projectNumber} está registado no livro do estúdio e na filmografia da carreira. O filme ${projectNumber + 1} pode agora ser criado a partir dessa carreira atualizada.` : stage === "release" ? `O filme ${projectNumber} concluiu o fluxo de lançamento partilhado. Aplicá-lo ao estúdio e à carreira é o passo seguinte.` : stage === "postProduction" ? `O filme ${projectNumber} fechou a pós-produção através do fluxo de finalização partilhado. Escolha uma estratégia de lançamento e um festival para resolver o lançamento.` : stage === "shoot" ? `O filme ${projectNumber} resolveu o dia de rodagem através do fluxo partilhado. Selecione as cinco decisões de finalização e feche a pós-produção.` : stage === "preProduction" ? `O filme ${projectNumber} fechou a localização, a equipa necessária e o elenco. Escolha um evento de produção e resolva o dia de rodagem.` : stage === "development" ? `O filme ${projectNumber} concluiu uma ação de desenvolvimento partilhada e está pronto para usar o escritório de pré-produção partilhado.` : projectNumber === 2 ? "Escolha uma ação de desenvolvimento para o filme 2. O pipeline concluído do primeiro filme permanece separado." : `O filme ${projectNumber} foi criado a partir da carreira atualizada. Escolha uma ação de desenvolvimento partilhada para continuar.`,
    },
  },
} as const satisfies Record<FilmWorkLanguage, NextProjectResultCopy>;

export const STUDIO_CAREER_SUMMARY_COPY = {
  en: {
    summary: {
      kicker: "Project summary",
      heading: "Project brief",
      editSetup: "Edit setup",
      strategicGoal: "Strategic goal",
      project: "Project",
      scriptTemplate: "Script template",
      development: {
        label: "Development status",
        completed: "Action completed",
        ready: "Ready for development",
        completedDetail: (pathLabel) => `${pathLabel} has been applied.`,
        readyDetail: "Choose one early development action.",
      },
      preProduction: {
        label: "Pre-production status",
        locked: "Production locked",
        open: "Production office open",
        lockedDetail: (crewCount, actorCount) => `${crewCount} crew and ${actorCount} actors are attached.`,
        openDetail: "Confirm a location, hire key crew and cast at least two actors.",
      },
      shoot: {
        label: "Shoot status",
        complete: "Shoot complete",
        unlocked: "Start shoot unlocked",
        completedDetail: (dayCount, averageQuality) => `${dayCount} shoot day${dayCount === 1 ? "" : "s"} resolved with ${averageQuality} average take quality.`,
        openDetail: "Choose one production event and resolve each scheduled shoot day.",
      },
      postProduction: {
        label: "Post-production status",
        complete: "Locked cut complete",
        open: "Edit suite open",
        completedDetail: (quality) => `Locked cut quality ${quality}. Release is unlocked.`,
        openDetail: "Choose edit, sound, music, color and trailer strategies.",
      },
      release: {
        label: "Release status",
        released: "Film released",
        open: "Distribution desk open",
        releasedDetail: (overall, careerApplied) => `Release outcome ${overall}/100. ${careerApplied ? "Studio state is updated." : "Studio and career application comes next."}`,
        openDetail: "Choose one release strategy and one festival.",
      },
      career: {
        label: "Career status",
        updated: "Studio updated",
        reviewReady: "Review ready",
        updatedDetail: (year) => `Year ${year} evaluated. Next step: start next project.`,
        readyDetail: "Close the film year to apply the release result.",
      },
    },
    nextProject: {
      validation: {
        projectTitle: "Enter a title for the next project.",
        genre: "Select a genre.",
        scriptTemplate: "Select a script template.",
      },
      creator: {
        completeKicker: (projectNumber) => `Film ${projectNumber} complete`,
        setupHeading: (projectNumber) => `Film ${projectNumber} setup`,
        intro: "The previous film is complete. Set up the next film from the updated studio and career state, then continue the experimental pipeline.",
      },
      form: {
        greenlight: (projectNumber) => `Greenlight film ${projectNumber}`,
        heading: "Package the next project",
        intro: "Choose the new film. Development remains a separate next step.",
        titleLabel: "Next project title",
        titlePlaceholder: "e.g. Northern Exposure",
        carryHeading: "Carry the studio forward",
        carryDetail: (previousFilmLabel, projectNumber) => `${previousFilmLabel} stays recorded; film ${projectNumber} begins at setup only.`,
        createFilm: (projectNumber) => `Create film ${projectNumber}`,
      },
      result: NEXT_PROJECT_RESULT_COPY.en,
    },
  },
  nb: {
    summary: {
      kicker: "Prosjektsammendrag",
      heading: "Prosjektbrief",
      editSetup: "Rediger oppsett",
      strategicGoal: "Strategisk mål",
      project: "Prosjekt",
      scriptTemplate: "Manusmal",
      development: {
        label: "Utviklingsstatus",
        completed: "Handling fullført",
        ready: "Klar for utvikling",
        completedDetail: (pathLabel) => `${pathLabel} er gjennomført.`,
        readyDetail: "Velg én tidlig utviklingshandling.",
      },
      preProduction: {
        label: "Status for preproduksjon",
        locked: "Produksjonen er låst",
        open: "Produksjonskontoret er åpent",
        lockedDetail: (crewCount, actorCount) => `${crewCount} i crew og ${actorCount} skuespillere er tilknyttet.`,
        openDetail: "Bekreft en location, hyr nøkkelcrew og cast minst to skuespillere.",
      },
      shoot: {
        label: "Opptaksstatus",
        complete: "Opptak fullført",
        unlocked: "Opptaksstart låst opp",
        completedDetail: (dayCount, averageQuality) => `${dayCount} opptaksdag${dayCount === 1 ? "" : "er"} fullført med ${averageQuality} i gjennomsnittlig take-kvalitet.`,
        openDetail: "Velg én produksjonshendelse og gjennomfør hver planlagte opptaksdag.",
      },
      postProduction: {
        label: "Status for postproduksjon",
        complete: "Låst klipp fullført",
        open: "Klipperommet er åpent",
        completedDetail: (quality) => `Kvalitet på låst klipp: ${quality}. Lansering er låst opp.`,
        openDetail: "Velg strategier for klipp, lyd, musikk, farge og trailer.",
      },
      release: {
        label: "Lanseringsstatus",
        released: "Filmen er lansert",
        open: "Distribusjonsbordet er åpent",
        releasedDetail: (overall, careerApplied) => `Lanseringsresultat ${overall}/100. ${careerApplied ? "Studiostatusen er oppdatert." : "Oppdatering av studio og karriere er neste steg."}`,
        openDetail: "Velg én lanseringsstrategi og én festival.",
      },
      career: {
        label: "Karrierestatus",
        updated: "Studio oppdatert",
        reviewReady: "Evaluering klar",
        updatedDetail: (year) => `År ${year} er evaluert. Neste steg: start neste prosjekt.`,
        readyDetail: "Avslutt filmåret for å anvende lanseringsresultatet.",
      },
    },
    nextProject: {
      validation: {
        projectTitle: "Skriv inn en tittel for neste prosjekt.",
        genre: "Velg en sjanger.",
        scriptTemplate: "Velg en manusmal.",
      },
      creator: {
        completeKicker: (projectNumber) => `Film ${projectNumber} fullført`,
        setupHeading: (projectNumber) => `Oppsett for film ${projectNumber}`,
        intro: "Forrige film er fullført. Sett opp neste film fra den oppdaterte studio- og karrierestatusen, og fortsett deretter den eksperimentelle pipelinen.",
      },
      form: {
        greenlight: (projectNumber) => `Gi grønt lys til film ${projectNumber}`,
        heading: "Pakk neste prosjekt",
        intro: "Velg den nye filmen. Utvikling er fortsatt et eget neste steg.",
        titleLabel: "Tittel på neste prosjekt",
        titlePlaceholder: "f.eks. Nordlys",
        carryHeading: "Viderefør studioet",
        carryDetail: (previousFilmLabel, projectNumber) => `${previousFilmLabel} forblir registrert; film ${projectNumber} starter bare i oppsettet.`,
        createFilm: (projectNumber) => `Opprett film ${projectNumber}`,
      },
      result: NEXT_PROJECT_RESULT_COPY.nb,
    },
  },
  fr: {
    summary: {
      kicker: "Résumé du projet",
      heading: "Brief du projet",
      editSetup: "Modifier la configuration",
      strategicGoal: "Objectif stratégique",
      project: "Projet",
      scriptTemplate: "Modèle de scénario",
      development: {
        label: "État du développement",
        completed: "Action terminée",
        ready: "Prêt pour le développement",
        completedDetail: (pathLabel) => `${pathLabel} a été appliqué.`,
        readyDetail: "Choisissez une action de développement initiale.",
      },
      preProduction: {
        label: "État de la préproduction",
        locked: "Production verrouillée",
        open: "Bureau de production ouvert",
        lockedDetail: (crewCount, actorCount) => `${crewCount} membres de l’équipe et ${actorCount} interprètes sont attachés au projet.`,
        openDetail: "Confirmez un lieu, recrutez l’équipe clé et distribuez au moins deux rôles.",
      },
      shoot: {
        label: "État du tournage",
        complete: "Tournage terminé",
        unlocked: "Démarrage du tournage débloqué",
        completedDetail: (dayCount, averageQuality) => `${dayCount} jour${dayCount === 1 ? "" : "s"} de tournage résolu${dayCount === 1 ? "" : "s"} avec une qualité moyenne des prises de ${averageQuality}.`,
        openDetail: "Choisissez un événement de production et résolvez chaque journée de tournage planifiée.",
      },
      postProduction: {
        label: "État de la postproduction",
        complete: "Montage verrouillé terminé",
        open: "Salle de montage ouverte",
        completedDetail: (quality) => `Qualité du montage verrouillé : ${quality}. La sortie est débloquée.`,
        openDetail: "Choisissez les stratégies de montage, son, musique, étalonnage et bande-annonce.",
      },
      release: {
        label: "État de la sortie",
        released: "Film sorti",
        open: "Distribution ouverte",
        releasedDetail: (overall, careerApplied) => `Résultat de sortie ${overall}/100. ${careerApplied ? "L’état du studio est mis à jour." : "La mise à jour du studio et de la carrière vient ensuite."}`,
        openDetail: "Choisissez une stratégie de sortie et un festival.",
      },
      career: {
        label: "État de la carrière",
        updated: "Studio mis à jour",
        reviewReady: "Bilan prêt",
        updatedDetail: (year) => `Année ${year} évaluée. Étape suivante : lancer le projet suivant.`,
        readyDetail: "Clôturez l’année du film pour appliquer le résultat de sortie.",
      },
    },
    nextProject: {
      validation: {
        projectTitle: "Saisissez un titre pour le projet suivant.",
        genre: "Sélectionnez un genre.",
        scriptTemplate: "Sélectionnez un modèle de scénario.",
      },
      creator: {
        completeKicker: (projectNumber) => `Film ${projectNumber} terminé`,
        setupHeading: (projectNumber) => `Configuration du film ${projectNumber}`,
        intro: "Le film précédent est terminé. Configurez le suivant à partir de l’état actualisé du studio et de la carrière, puis poursuivez le pipeline expérimental.",
      },
      form: {
        greenlight: (projectNumber) => `Feu vert pour le film ${projectNumber}`,
        heading: "Monter le projet suivant",
        intro: "Choisissez le nouveau film. Le développement reste une étape distincte.",
        titleLabel: "Titre du projet suivant",
        titlePlaceholder: "p. ex. Exposition nordique",
        carryHeading: "Faire avancer le studio",
        carryDetail: (previousFilmLabel, projectNumber) => `${previousFilmLabel} reste enregistré ; le film ${projectNumber} commence uniquement à la configuration.`,
        createFilm: (projectNumber) => `Créer le film ${projectNumber}`,
      },
      result: NEXT_PROJECT_RESULT_COPY.fr,
    },
  },
  pt: {
    summary: {
      kicker: "Resumo do projeto",
      heading: "Briefing do projeto",
      editSetup: "Editar configuração",
      strategicGoal: "Objetivo estratégico",
      project: "Projeto",
      scriptTemplate: "Modelo de argumento",
      development: {
        label: "Estado do desenvolvimento",
        completed: "Ação concluída",
        ready: "Pronto para desenvolvimento",
        completedDetail: (pathLabel) => `${pathLabel} foi aplicado.`,
        readyDetail: "Escolha uma ação inicial de desenvolvimento.",
      },
      preProduction: {
        label: "Estado da pré-produção",
        locked: "Produção fechada",
        open: "Escritório de produção aberto",
        lockedDetail: (crewCount, actorCount) => `${crewCount} elementos da equipa e ${actorCount} intérpretes estão associados ao projeto.`,
        openDetail: "Confirme uma localização, contrate a equipa principal e escolha pelo menos dois intérpretes.",
      },
      shoot: {
        label: "Estado da rodagem",
        complete: "Rodagem concluída",
        unlocked: "Início da rodagem desbloqueado",
        completedDetail: (dayCount, averageQuality) => `${dayCount} dia${dayCount === 1 ? "" : "s"} de rodagem resolvido${dayCount === 1 ? "" : "s"} com qualidade média das tomadas de ${averageQuality}.`,
        openDetail: "Escolha um evento de produção e resolva cada dia de rodagem agendado.",
      },
      postProduction: {
        label: "Estado da pós-produção",
        complete: "Montagem final concluída",
        open: "Sala de montagem aberta",
        completedDetail: (quality) => `Qualidade da montagem final: ${quality}. O lançamento está desbloqueado.`,
        openDetail: "Escolha estratégias de montagem, som, música, cor e trailer.",
      },
      release: {
        label: "Estado do lançamento",
        released: "Filme lançado",
        open: "Distribuição aberta",
        releasedDetail: (overall, careerApplied) => `Resultado do lançamento ${overall}/100. ${careerApplied ? "O estado do estúdio foi atualizado." : "A atualização do estúdio e da carreira vem a seguir."}`,
        openDetail: "Escolha uma estratégia de lançamento e um festival.",
      },
      career: {
        label: "Estado da carreira",
        updated: "Estúdio atualizado",
        reviewReady: "Revisão pronta",
        updatedDetail: (year) => `Ano ${year} avaliado. Próximo passo: iniciar o projeto seguinte.`,
        readyDetail: "Feche o ano do filme para aplicar o resultado do lançamento.",
      },
    },
    nextProject: {
      validation: {
        projectTitle: "Introduza um título para o projeto seguinte.",
        genre: "Selecione um género.",
        scriptTemplate: "Selecione um modelo de argumento.",
      },
      creator: {
        completeKicker: (projectNumber) => `Filme ${projectNumber} concluído`,
        setupHeading: (projectNumber) => `Configuração do filme ${projectNumber}`,
        intro: "O filme anterior está concluído. Configure o seguinte a partir do estado atualizado do estúdio e da carreira e continue depois o pipeline experimental.",
      },
      form: {
        greenlight: (projectNumber) => `Dar luz verde ao filme ${projectNumber}`,
        heading: "Estruturar o projeto seguinte",
        intro: "Escolha o novo filme. O desenvolvimento continua a ser um passo seguinte separado.",
        titleLabel: "Título do projeto seguinte",
        titlePlaceholder: "por ex., Exposição do Norte",
        carryHeading: "Levar o estúdio adiante",
        carryDetail: (previousFilmLabel, projectNumber) => `${previousFilmLabel} permanece registado; o filme ${projectNumber} começa apenas na configuração.`,
        createFilm: (projectNumber) => `Criar filme ${projectNumber}`,
      },
      result: NEXT_PROJECT_RESULT_COPY.pt,
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerSummaryCopy>;
