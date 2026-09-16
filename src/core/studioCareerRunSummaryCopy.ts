import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

type StudioCareerRunSummaryCopy = {
  readonly panel: {
    readonly kicker: string;
    readonly heading: string;
    readonly editSetup: string;
  };
  readonly labels: {
    readonly strategicGoal: string;
    readonly project: string;
    readonly scriptTemplate: string;
    readonly developmentStatus: string;
    readonly preProductionStatus: string;
    readonly shootStatus: string;
    readonly postProductionStatus: string;
    readonly releaseStatus: string;
    readonly careerStatus: string;
  };
  readonly development: {
    readonly actionCompleted: string;
    readonly ready: string;
    readonly appliedDetail: (pathLabel: string) => string;
    readonly readyDetail: string;
  };
  readonly preProduction: {
    readonly productionLocked: string;
    readonly productionOfficeOpen: string;
    readonly lockedDetail: (crewCount: number, actorCount: number) => string;
    readonly readyDetail: string;
  };
  readonly shoot: {
    readonly shootComplete: string;
    readonly startShootUnlocked: string;
    readonly completeDetail: (dayCount: number, averageQuality: number) => string;
    readonly readyDetail: string;
  };
  readonly postProduction: {
    readonly lockedCutComplete: string;
    readonly editSuiteOpen: string;
    readonly completeDetail: (quality: number) => string;
    readonly readyDetail: string;
  };
  readonly release: {
    readonly filmReleased: string;
    readonly distributionDeskOpen: string;
    readonly releasedDetail: (score: number, careerApplied: boolean) => string;
    readonly readyDetail: string;
  };
  readonly career: {
    readonly studioUpdated: string;
    readonly reviewReady: string;
    readonly updatedDetail: (year: number) => string;
    readonly readyDetail: string;
  };
};

export const STUDIO_CAREER_RUN_SUMMARY_COPY = {
  en: {
    panel: { kicker: "Project summary", heading: "Project brief", editSetup: "Edit setup" },
    labels: {
      strategicGoal: "Strategic goal",
      project: "Project",
      scriptTemplate: "Script template",
      developmentStatus: "Development status",
      preProductionStatus: "Pre-production status",
      shootStatus: "Shoot status",
      postProductionStatus: "Post-production status",
      releaseStatus: "Release status",
      careerStatus: "Career status",
    },
    development: {
      actionCompleted: "Action completed",
      ready: "Ready for development",
      appliedDetail: (pathLabel) => `${pathLabel} has been applied.`,
      readyDetail: "Choose one early development action.",
    },
    preProduction: {
      productionLocked: "Production locked",
      productionOfficeOpen: "Production office open",
      lockedDetail: (crewCount, actorCount) => `${crewCount} crew and ${actorCount} actors are attached.`,
      readyDetail: "Confirm a location, hire key crew and cast at least two actors.",
    },
    shoot: {
      shootComplete: "Shoot complete",
      startShootUnlocked: "Start shoot unlocked",
      completeDetail: (dayCount, averageQuality) => `${dayCount} shoot day${dayCount === 1 ? "" : "s"} resolved with ${averageQuality} average take quality.`,
      readyDetail: "Choose one production event and resolve each scheduled shoot day.",
    },
    postProduction: {
      lockedCutComplete: "Locked cut complete",
      editSuiteOpen: "Edit suite open",
      completeDetail: (quality) => `Locked cut quality ${quality}. Release is unlocked.`,
      readyDetail: "Choose edit, sound, music, color and trailer strategies.",
    },
    release: {
      filmReleased: "Film released",
      distributionDeskOpen: "Distribution desk open",
      releasedDetail: (score, careerApplied) => `Release outcome ${score}/100. ${careerApplied ? "Studio state is updated." : "Studio and career application comes next."}`,
      readyDetail: "Choose one release strategy and one festival.",
    },
    career: {
      studioUpdated: "Studio updated",
      reviewReady: "Review ready",
      updatedDetail: (year) => `Year ${year} evaluated. Next step: start next project.`,
      readyDetail: "Close the film year to apply the release result.",
    },
  },
  nb: {
    panel: { kicker: "Prosjektsammendrag", heading: "Prosjektoversikt", editSetup: "Rediger oppsett" },
    labels: {
      strategicGoal: "Strategisk mål",
      project: "Prosjekt",
      scriptTemplate: "Manusmal",
      developmentStatus: "Utviklingsstatus",
      preProductionStatus: "Forproduksjonsstatus",
      shootStatus: "Innspillingsstatus",
      postProductionStatus: "Etterarbeidsstatus",
      releaseStatus: "Lanseringsstatus",
      careerStatus: "Karrierestatus",
    },
    development: {
      actionCompleted: "Handling fullført",
      ready: "Klar for utvikling",
      appliedDetail: (pathLabel) => `${pathLabel} er brukt.`,
      readyDetail: "Velg én tidlig utviklingshandling.",
    },
    preProduction: {
      productionLocked: "Produksjon låst",
      productionOfficeOpen: "Produksjonskontoret er åpent",
      lockedDetail: (crewCount, actorCount) => `${crewCount} i crewet og ${actorCount} skuespillere er tilknyttet.`,
      readyDetail: "Bekreft et innspillingssted, ansett nøkkelcrew og cast minst to skuespillere.",
    },
    shoot: {
      shootComplete: "Innspilling fullført",
      startShootUnlocked: "Innspilling låst opp",
      completeDetail: (dayCount, averageQuality) => `${dayCount} innspillingsdag${dayCount === 1 ? "" : "er"} fullført med ${averageQuality} i gjennomsnittlig opptakskvalitet.`,
      readyDetail: "Velg én produksjonshendelse og gjennomfør hver planlagte innspillingsdag.",
    },
    postProduction: {
      lockedCutComplete: "Endelig klipp fullført",
      editSuiteOpen: "Klipperommet er åpent",
      completeDetail: (quality) => `Kvalitet på låst klipp ${quality}. Lansering er låst opp.`,
      readyDetail: "Velg strategier for klipp, lyd, musikk, farge og trailer.",
    },
    release: {
      filmReleased: "Filmen er lansert",
      distributionDeskOpen: "Distribusjonsbordet er åpent",
      releasedDetail: (score, careerApplied) => `Lanseringsresultat ${score}/100. ${careerApplied ? "Studiostatus er oppdatert." : "Studio- og karrieresteget kommer deretter."}`,
      readyDetail: "Velg én lanseringsstrategi og én festival.",
    },
    career: {
      studioUpdated: "Studioet er oppdatert",
      reviewReady: "Gjennomgang klar",
      updatedDetail: (year) => `År ${year} er evaluert. Neste steg: start neste prosjekt.`,
      readyDetail: "Avslutt filmåret for å bruke lanseringsresultatet.",
    },
  },
  fr: {
    panel: { kicker: "Résumé du projet", heading: "Fiche du projet", editSetup: "Modifier la configuration" },
    labels: {
      strategicGoal: "Objectif stratégique",
      project: "Projet",
      scriptTemplate: "Modèle de scénario",
      developmentStatus: "Statut du développement",
      preProductionStatus: "Statut de la préproduction",
      shootStatus: "Statut du tournage",
      postProductionStatus: "Statut de la postproduction",
      releaseStatus: "Statut de la sortie",
      careerStatus: "Statut de carrière",
    },
    development: {
      actionCompleted: "Action terminée",
      ready: "Prêt pour le développement",
      appliedDetail: (pathLabel) => `${pathLabel} a été appliqué.`,
      readyDetail: "Choisissez une première action de développement.",
    },
    preProduction: {
      productionLocked: "Production verrouillée",
      productionOfficeOpen: "Bureau de production ouvert",
      lockedDetail: (crewCount, actorCount) => `${crewCount} membres d’équipe et ${actorCount} interprètes sont engagés.`,
      readyDetail: "Confirmez un lieu, engagez les principaux membres de l’équipe et choisissez au moins deux interprètes.",
    },
    shoot: {
      shootComplete: "Tournage terminé",
      startShootUnlocked: "Tournage déverrouillé",
      completeDetail: (dayCount, averageQuality) => `${dayCount} jour${dayCount === 1 ? "" : "s"} de tournage terminé${dayCount === 1 ? "" : "s"} avec une qualité moyenne de prise de ${averageQuality}.`,
      readyDetail: "Choisissez un événement de production et résolvez chaque journée de tournage prévue.",
    },
    postProduction: {
      lockedCutComplete: "Montage verrouillé terminé",
      editSuiteOpen: "Salle de montage ouverte",
      completeDetail: (quality) => `Qualité du montage verrouillé : ${quality}. La sortie est déverrouillée.`,
      readyDetail: "Choisissez les stratégies de montage, de son, de musique, d’étalonnage et de bande-annonce.",
    },
    release: {
      filmReleased: "Film sorti",
      distributionDeskOpen: "Bureau de distribution ouvert",
      releasedDetail: (score, careerApplied) => `Résultat de sortie : ${score}/100. ${careerApplied ? "L’état du studio est mis à jour." : "L’application au studio et à la carrière vient ensuite."}`,
      readyDetail: "Choisissez une stratégie de sortie et un festival.",
    },
    career: {
      studioUpdated: "Studio mis à jour",
      reviewReady: "Bilan prêt",
      updatedDetail: (year) => `Année ${year} évaluée. Étape suivante : démarrer le prochain projet.`,
      readyDetail: "Clôturez l’année du film pour appliquer le résultat de sortie.",
    },
  },
  pt: {
    panel: { kicker: "Resumo do projeto", heading: "Síntese do projeto", editSetup: "Editar configuração" },
    labels: {
      strategicGoal: "Objetivo estratégico",
      project: "Projeto",
      scriptTemplate: "Modelo de argumento",
      developmentStatus: "Estado do desenvolvimento",
      preProductionStatus: "Estado da pré-produção",
      shootStatus: "Estado da rodagem",
      postProductionStatus: "Estado da pós-produção",
      releaseStatus: "Estado do lançamento",
      careerStatus: "Estado da carreira",
    },
    development: {
      actionCompleted: "Ação concluída",
      ready: "Pronto para desenvolvimento",
      appliedDetail: (pathLabel) => `${pathLabel} foi aplicado.`,
      readyDetail: "Escolha uma ação inicial de desenvolvimento.",
    },
    preProduction: {
      productionLocked: "Produção fechada",
      productionOfficeOpen: "Gabinete de produção aberto",
      lockedDetail: (crewCount, actorCount) => `${crewCount} elementos da equipa e ${actorCount} elementos do elenco estão associados.`,
      readyDetail: "Confirme uma localização, contrate elementos-chave da equipa e escolha pelo menos dois intérpretes.",
    },
    shoot: {
      shootComplete: "Rodagem concluída",
      startShootUnlocked: "Rodagem desbloqueada",
      completeDetail: (dayCount, averageQuality) => `${dayCount} dia${dayCount === 1 ? "" : "s"} de rodagem resolvido${dayCount === 1 ? "" : "s"} com qualidade média de take ${averageQuality}.`,
      readyDetail: "Escolha um evento de produção e resolva cada dia de rodagem agendado.",
    },
    postProduction: {
      lockedCutComplete: "Corte final concluído",
      editSuiteOpen: "Sala de montagem aberta",
      completeDetail: (quality) => `Qualidade do corte fechado ${quality}. O lançamento está desbloqueado.`,
      readyDetail: "Escolha estratégias de montagem, som, música, cor e trailer.",
    },
    release: {
      filmReleased: "Filme lançado",
      distributionDeskOpen: "Mesa de distribuição aberta",
      releasedDetail: (score, careerApplied) => `Resultado do lançamento ${score}/100. ${careerApplied ? "O estado do estúdio foi atualizado." : "A aplicação ao estúdio e à carreira vem a seguir."}`,
      readyDetail: "Escolha uma estratégia de lançamento e um festival.",
    },
    career: {
      studioUpdated: "Estúdio atualizado",
      reviewReady: "Revisão pronta",
      updatedDetail: (year) => `Ano ${year} avaliado. Próximo passo: iniciar o projeto seguinte.`,
      readyDetail: "Feche o ano do filme para aplicar o resultado do lançamento.",
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerRunSummaryCopy>;
