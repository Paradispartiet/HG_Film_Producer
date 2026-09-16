import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

type PhaseCopy = {
  readonly label: string;
  readonly description: string;
};

type StudioCareerWorkspaceCopy = {
  readonly pipeline: {
    readonly posterPrefix: string;
    readonly productionCaseKicker: string;
    readonly experimentalKicker: string;
    readonly whatToDoNow: string;
    readonly latestProductionCaseUpdate: string;
    readonly latestStudioCareerUpdate: string;
  };
  readonly phases: {
    readonly development: PhaseCopy;
    readonly preProduction: PhaseCopy;
    readonly shoot: PhaseCopy;
    readonly postProduction: PhaseCopy;
    readonly release: PhaseCopy;
    readonly careerReview: PhaseCopy;
  };
  readonly status: {
    readonly complete: string;
    readonly inProgress: string;
    readonly locked: string;
  };
  readonly actions: {
    readonly openRelease: string;
    readonly openCareerReview: string;
    readonly continuePhase: (phaseLabel: string) => string;
  };
  readonly completed: {
    readonly completeSuffix: string;
    readonly showDetails: string;
    readonly hideDetails: string;
  };
  readonly workspace: {
    readonly completeSummary: (filmNumber: number) => string;
  };
};

export const STUDIO_CAREER_WORKSPACE_COPY = {
  en: {
    pipeline: {
      posterPrefix: "A HG production",
      productionCaseKicker: "Production Case · active film",
      experimentalKicker: "Experimental Studio Career · active film",
      whatToDoNow: "What to do now",
      latestProductionCaseUpdate: "Latest Production Case update",
      latestStudioCareerUpdate: "Latest Studio Career update",
    },
    phases: {
      development: { label: "Development", description: "Shape the concept, choose a path, and develop the screenplay." },
      preProduction: { label: "Pre-production", description: "Build the team, cast the film, and lock locations." },
      shoot: { label: "Shoot", description: "Put the production plan to work on set." },
      postProduction: { label: "Post-production", description: "Find the final cut, sound, music, and look." },
      release: { label: "Release", description: "Take the finished film to audiences and festivals." },
      careerReview: { label: "Career review", description: "Close the film year, post the result, and update the studio career." },
    },
    status: { complete: "Complete", inProgress: "In progress", locked: "Locked" },
    actions: {
      openRelease: "Open release step",
      openCareerReview: "Open career review",
      continuePhase: (phaseLabel) => `Continue ${phaseLabel}`,
    },
    completed: { completeSuffix: "Complete", showDetails: "Show details", hideDetails: "Hide details" },
    workspace: { completeSummary: (filmNumber) => `Film ${filmNumber} · Complete summary` },
  },
  nb: {
    pipeline: {
      posterPrefix: "En HG-produksjon",
      productionCaseKicker: "Production Case · aktiv film",
      experimentalKicker: "Eksperimentell studiokarriere · aktiv film",
      whatToDoNow: "Hva gjør du nå",
      latestProductionCaseUpdate: "Siste Production Case-oppdatering",
      latestStudioCareerUpdate: "Siste oppdatering fra studiokarrieren",
    },
    phases: {
      development: { label: "Utvikling", description: "Form konseptet, velg en retning og utvikle manuset." },
      preProduction: { label: "Forproduksjon", description: "Bygg teamet, cast filmen og lås innspillingsstedene." },
      shoot: { label: "Innspilling", description: "Sett produksjonsplanen ut i livet på sett." },
      postProduction: { label: "Etterarbeid", description: "Finn endelig klipp, lyd, musikk og visuelt uttrykk." },
      release: { label: "Lansering", description: "Ta den ferdige filmen ut til publikum og festivaler." },
      careerReview: { label: "Karrieregjennomgang", description: "Avslutt filmåret, registrer resultatet og oppdater studiokarrieren." },
    },
    status: { complete: "Fullført", inProgress: "Pågår", locked: "Låst" },
    actions: {
      openRelease: "Åpne lanseringssteget",
      openCareerReview: "Åpne karrieregjennomgangen",
      continuePhase: (phaseLabel) => `Fortsett ${phaseLabel}`,
    },
    completed: { completeSuffix: "Fullført", showDetails: "Vis detaljer", hideDetails: "Skjul detaljer" },
    workspace: { completeSummary: (filmNumber) => `Film ${filmNumber} · Fullført sammendrag` },
  },
  fr: {
    pipeline: {
      posterPrefix: "Une production HG",
      productionCaseKicker: "Production Case · film actif",
      experimentalKicker: "Carrière Studio expérimentale · film actif",
      whatToDoNow: "Que faire maintenant",
      latestProductionCaseUpdate: "Dernière mise à jour Production Case",
      latestStudioCareerUpdate: "Dernière mise à jour de la carrière Studio",
    },
    phases: {
      development: { label: "Développement", description: "Façonnez le concept, choisissez une voie et développez le scénario." },
      preProduction: { label: "Préproduction", description: "Constituez l’équipe, choisissez les interprètes et verrouillez les lieux." },
      shoot: { label: "Tournage", description: "Mettez le plan de production en œuvre sur le plateau." },
      postProduction: { label: "Postproduction", description: "Trouvez le montage final, le son, la musique et l’apparence du film." },
      release: { label: "Sortie", description: "Présentez le film terminé au public et aux festivals." },
      careerReview: { label: "Bilan de carrière", description: "Clôturez l’année du film, enregistrez le résultat et mettez à jour la carrière du studio." },
    },
    status: { complete: "Terminé", inProgress: "En cours", locked: "Verrouillé" },
    actions: {
      openRelease: "Ouvrir l’étape de sortie",
      openCareerReview: "Ouvrir le bilan de carrière",
      continuePhase: (phaseLabel) => `Continuer ${phaseLabel}`,
    },
    completed: { completeSuffix: "Terminé", showDetails: "Afficher les détails", hideDetails: "Masquer les détails" },
    workspace: { completeSummary: (filmNumber) => `Film ${filmNumber} · Résumé terminé` },
  },
  pt: {
    pipeline: {
      posterPrefix: "Uma produção HG",
      productionCaseKicker: "Production Case · filme ativo",
      experimentalKicker: "Carreira de estúdio experimental · filme ativo",
      whatToDoNow: "O que fazer agora",
      latestProductionCaseUpdate: "Última atualização de Production Case",
      latestStudioCareerUpdate: "Última atualização da carreira de estúdio",
    },
    phases: {
      development: { label: "Desenvolvimento", description: "Molde o conceito, escolha um caminho e desenvolva o argumento." },
      preProduction: { label: "Pré-produção", description: "Monte a equipa, escolha o elenco e feche as localizações." },
      shoot: { label: "Rodagem", description: "Ponha o plano de produção em prática no plateau." },
      postProduction: { label: "Pós-produção", description: "Encontre a montagem final, o som, a música e o aspeto do filme." },
      release: { label: "Lançamento", description: "Leve o filme terminado ao público e aos festivais." },
      careerReview: { label: "Revisão de carreira", description: "Feche o ano do filme, registe o resultado e atualize a carreira do estúdio." },
    },
    status: { complete: "Concluído", inProgress: "Em curso", locked: "Bloqueado" },
    actions: {
      openRelease: "Abrir etapa de lançamento",
      openCareerReview: "Abrir revisão de carreira",
      continuePhase: (phaseLabel) => `Continuar ${phaseLabel}`,
    },
    completed: { completeSuffix: "Concluído", showDetails: "Mostrar detalhes", hideDetails: "Ocultar detalhes" },
    workspace: { completeSummary: (filmNumber) => `Filme ${filmNumber} · Resumo concluído` },
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerWorkspaceCopy>;
