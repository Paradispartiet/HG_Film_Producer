import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const PRODUCTION_CASE_BRIEF_SECTION_KEYS = [
  "genreTargets",
  "toneTargets",
  "screenplayTargets",
  "cinematographyTargets",
  "editingTargets",
  "soundTargets",
  "learningGoals",
] as const;

export type ProductionCaseBriefSectionKey = (typeof PRODUCTION_CASE_BRIEF_SECTION_KEYS)[number];
export type ProductionCaseBriefType = "production_case" | "seed_fallback";
export type ProductionCaseVerificationDisplayStatus = "seeded" | "needs_research" | "verified";
export type ProductionCaseLearningDisplayStatus = "not_started" | "in_progress" | "completed";

export type ProductionCaseBriefCopy = {
  readonly productionBriefLabel: string;
  readonly header: {
    readonly importedSeedFallback: string;
    readonly sourceVerifiedFilmCase: string;
    readonly researchPendingFilmCase: string;
    readonly productionCaseIntro: (filmTitle: string) => string;
    readonly seedFallbackIntro: string;
    readonly verification: Record<ProductionCaseVerificationDisplayStatus, string>;
  };
  readonly sections: Record<ProductionCaseBriefSectionKey, string>;
  readonly flow: {
    readonly learningFlowAriaLabel: string;
    readonly learningProgress: string;
    readonly caseCompleteReportUnlocked: string;
    readonly phasesComplete: (completed: number, total: number) => string;
    readonly learningStatus: Record<ProductionCaseLearningDisplayStatus, string>;
    readonly resetCaseProgress: string;
    readonly guidanceAriaLabel: string;
    readonly noApproachChosen: string;
    readonly showDetails: string;
    readonly chooseExplanationAriaLabel: (missionTitle: string) => string;
    readonly choiceQuestion: string;
    readonly hideDetails: string;
    readonly learningReportAriaLabel: string;
    readonly learningReport: string;
    readonly phasesStudied: (completed: number, total: number) => string;
    readonly clearlyIdentified: (count: number) => string;
    readonly worthComparingAgain: (count: number) => string;
    readonly continuationActionsAriaLabel: string;
    readonly reviewThisCaseAgain: string;
    readonly continueToNextCase: string;
    readonly backToProductionCases: string;
    readonly understoodClearly: string;
    readonly noClearlyIdentified: string;
    readonly reviewAndCompare: string;
    readonly noSpecialReview: string;
    readonly sourcesAriaLabel: string;
    readonly sourceBasis: string;
    readonly verifiedAt: (date: string) => string;
    readonly nextLearningStepAriaLabel: string;
    readonly nextLearningStep: string;
    readonly goToPhase: string;
    readonly suggestedReviewAriaLabel: string;
    readonly suggestedReview: string;
    readonly reviewPhase: string;
  };
};

export const PRODUCTION_CASE_BRIEF_COPY: Record<FilmWorkLanguage, ProductionCaseBriefCopy> = {
  en: {
    productionBriefLabel: "production brief",
    header: {
      importedSeedFallback: "Imported seed fallback",
      sourceVerifiedFilmCase: "Source-verified film case",
      researchPendingFilmCase: "Film case · research pending",
      productionCaseIntro: (filmTitle) => `Study the filmmaking choices behind ${filmTitle}. Each phase connects a concrete method to what the finished film does.`,
      seedFallbackIntro: "This imported seed still needs film-specific case design; use the fallback targets as provisional craft guidance.",
      verification: { seeded: "seeded", needs_research: "needs research", verified: "verified" },
    },
    sections: {
      genreTargets: "Genre targets",
      toneTargets: "Tone",
      screenplayTargets: "Screenplay",
      cinematographyTargets: "Cinematography",
      editingTargets: "Editing",
      soundTargets: "Sound",
      learningGoals: "Learning goals",
    },
    flow: {
      learningFlowAriaLabel: "Film case learning flow",
      learningProgress: "Learning progress",
      caseCompleteReportUnlocked: "Case complete · learning report unlocked",
      phasesComplete: (completed, total) => `${completed}/${total} phases complete`,
      learningStatus: { not_started: "Not started", in_progress: "In progress", completed: "Completed" },
      resetCaseProgress: "Reset case progress",
      guidanceAriaLabel: "Film case guidance",
      noApproachChosen: "No approach chosen yet.",
      showDetails: "Show details",
      chooseExplanationAriaLabel: (missionTitle) => `Choose an explanation for ${missionTitle}`,
      choiceQuestion: "Which approach best explains the film?",
      hideDetails: "Hide details",
      learningReportAriaLabel: "Learning report",
      learningReport: "Learning report",
      phasesStudied: (completed, total) => `Phases studied: ${completed}/${total}`,
      clearlyIdentified: (count) => `Clearly identified: ${count}`,
      worthComparingAgain: (count) => `Worth comparing again: ${count}`,
      continuationActionsAriaLabel: "Case continuation actions",
      reviewThisCaseAgain: "Review this case again",
      continueToNextCase: "Continue to next case",
      backToProductionCases: "Back to Production Cases",
      understoodClearly: "Understood clearly",
      noClearlyIdentified: "No phase is marked as clearly identified yet. Review the explanations without penalty.",
      reviewAndCompare: "Review and compare",
      noSpecialReview: "No phase needs special review. Continue when you are ready.",
      sourcesAriaLabel: "Sources for this film case",
      sourceBasis: "Source basis",
      verifiedAt: (date) => `Verified ${date}`,
      nextLearningStepAriaLabel: "Next learning step",
      nextLearningStep: "Next learning step",
      goToPhase: "Go to phase",
      suggestedReviewAriaLabel: "Suggested review",
      suggestedReview: "Suggested review",
      reviewPhase: "Review phase",
    },
  },
  nb: {
    productionBriefLabel: "produksjonsbrief",
    header: {
      importedSeedFallback: "Importert seed-fallback",
      sourceVerifiedFilmCase: "Kildeverifisert filmcase",
      researchPendingFilmCase: "Filmcase · kildearbeid gjenstår",
      productionCaseIntro: (filmTitle) => `Studer filmgrepene bak ${filmTitle}. Hver fase kobler en konkret metode til det den ferdige filmen faktisk gjør.`,
      seedFallbackIntro: "Denne importerte seeden trenger fortsatt filmspesifikk caseutforming; bruk fallback-målene som foreløpig faglig veiledning.",
      verification: { seeded: "grunnutfylt", needs_research: "trenger kildearbeid", verified: "verifisert" },
    },
    sections: {
      genreTargets: "Sjangermål",
      toneTargets: "Tone",
      screenplayTargets: "Manus",
      cinematographyTargets: "Foto",
      editingTargets: "Klipp",
      soundTargets: "Lyd",
      learningGoals: "Læringsmål",
    },
    flow: {
      learningFlowAriaLabel: "Læringsflyt for filmcase",
      learningProgress: "Læringsprogresjon",
      caseCompleteReportUnlocked: "Case fullført · læringsrapport låst opp",
      phasesComplete: (completed, total) => `${completed}/${total} faser fullført`,
      learningStatus: { not_started: "Ikke startet", in_progress: "Pågår", completed: "Fullført" },
      resetCaseProgress: "Nullstill caseprogresjon",
      guidanceAriaLabel: "Veiledning for filmcase",
      noApproachChosen: "Ingen tilnærming er valgt ennå.",
      showDetails: "Vis detaljer",
      chooseExplanationAriaLabel: (missionTitle) => `Velg en forklaring for ${missionTitle}`,
      choiceQuestion: "Hvilken tilnærming forklarer filmen best?",
      hideDetails: "Skjul detaljer",
      learningReportAriaLabel: "Læringsrapport",
      learningReport: "Læringsrapport",
      phasesStudied: (completed, total) => `Faser studert: ${completed}/${total}`,
      clearlyIdentified: (count) => `Tydelig identifisert: ${count}`,
      worthComparingAgain: (count) => `Verdt å sammenligne igjen: ${count}`,
      continuationActionsAriaLabel: "Handlinger etter filmcaset",
      reviewThisCaseAgain: "Gå gjennom dette caset igjen",
      continueToNextCase: "Fortsett til neste case",
      backToProductionCases: "Tilbake til Production Cases",
      understoodClearly: "Forstått tydelig",
      noClearlyIdentified: "Ingen fase er markert som tydelig identifisert ennå. Gå gjennom forklaringene igjen uten straff.",
      reviewAndCompare: "Gå gjennom og sammenlign",
      noSpecialReview: "Ingen fase trenger særskilt gjennomgang. Fortsett når du er klar.",
      sourcesAriaLabel: "Kilder for dette filmcaset",
      sourceBasis: "Kildegrunnlag",
      verifiedAt: (date) => `Verifisert ${date}`,
      nextLearningStepAriaLabel: "Neste læringssteg",
      nextLearningStep: "Neste læringssteg",
      goToPhase: "Gå til fase",
      suggestedReviewAriaLabel: "Foreslått gjennomgang",
      suggestedReview: "Foreslått gjennomgang",
      reviewPhase: "Gå gjennom fasen",
    },
  },
  fr: {
    productionBriefLabel: "brief de production",
    header: {
      importedSeedFallback: "Solution de repli issue du seed importé",
      sourceVerifiedFilmCase: "Cas de film vérifié par les sources",
      researchPendingFilmCase: "Cas de film · recherche en attente",
      productionCaseIntro: (filmTitle) => `Étudiez les choix de fabrication derrière ${filmTitle}. Chaque phase relie une méthode concrète à ce que fait réellement le film terminé.`,
      seedFallbackIntro: "Ce seed importé nécessite encore une conception de cas propre au film ; utilisez les objectifs de repli comme indications provisoires de pratique.",
      verification: { seeded: "prérempli", needs_research: "recherche requise", verified: "vérifié" },
    },
    sections: {
      genreTargets: "Objectifs de genre",
      toneTargets: "Ton",
      screenplayTargets: "Scénario",
      cinematographyTargets: "Cinématographie",
      editingTargets: "Montage",
      soundTargets: "Son",
      learningGoals: "Objectifs d’apprentissage",
    },
    flow: {
      learningFlowAriaLabel: "Parcours d’apprentissage du cas de film",
      learningProgress: "Progression de l’apprentissage",
      caseCompleteReportUnlocked: "Cas terminé · rapport d’apprentissage débloqué",
      phasesComplete: (completed, total) => `${completed}/${total} phases terminées`,
      learningStatus: { not_started: "Non commencé", in_progress: "En cours", completed: "Terminé" },
      resetCaseProgress: "Réinitialiser la progression du cas",
      guidanceAriaLabel: "Guidage du cas de film",
      noApproachChosen: "Aucune approche choisie pour le moment.",
      showDetails: "Afficher les détails",
      chooseExplanationAriaLabel: (missionTitle) => `Choisir une explication pour ${missionTitle}`,
      choiceQuestion: "Quelle approche explique le mieux le film ?",
      hideDetails: "Masquer les détails",
      learningReportAriaLabel: "Rapport d’apprentissage",
      learningReport: "Rapport d’apprentissage",
      phasesStudied: (completed, total) => `Phases étudiées : ${completed}/${total}`,
      clearlyIdentified: (count) => `Clairement identifiées : ${count}`,
      worthComparingAgain: (count) => `À comparer de nouveau : ${count}`,
      continuationActionsAriaLabel: "Actions pour poursuivre le cas",
      reviewThisCaseAgain: "Revoir ce cas",
      continueToNextCase: "Passer au cas suivant",
      backToProductionCases: "Retour aux Production Cases",
      understoodClearly: "Clairement compris",
      noClearlyIdentified: "Aucune phase n’est encore marquée comme clairement identifiée. Revoyez les explications sans pénalité.",
      reviewAndCompare: "Revoir et comparer",
      noSpecialReview: "Aucune phase ne nécessite de révision particulière. Continuez lorsque vous êtes prêt.",
      sourcesAriaLabel: "Sources de ce cas de film",
      sourceBasis: "Base documentaire",
      verifiedAt: (date) => `Vérifié le ${date}`,
      nextLearningStepAriaLabel: "Prochaine étape d’apprentissage",
      nextLearningStep: "Prochaine étape d’apprentissage",
      goToPhase: "Aller à la phase",
      suggestedReviewAriaLabel: "Révision suggérée",
      suggestedReview: "Révision suggérée",
      reviewPhase: "Revoir la phase",
    },
  },
  pt: {
    productionBriefLabel: "brief de produção",
    header: {
      importedSeedFallback: "Fallback do seed importado",
      sourceVerifiedFilmCase: "Caso de filme verificado por fontes",
      researchPendingFilmCase: "Caso de filme · investigação pendente",
      productionCaseIntro: (filmTitle) => `Estude as escolhas de produção por detrás de ${filmTitle}. Cada fase liga um método concreto ao que o filme final efetivamente faz.`,
      seedFallbackIntro: "Este seed importado ainda precisa de desenho de caso específico para o filme; use os objetivos de fallback como orientação provisória de prática.",
      verification: { seeded: "pré-preenchido", needs_research: "requer investigação", verified: "verificado" },
    },
    sections: {
      genreTargets: "Objetivos de género",
      toneTargets: "Tom",
      screenplayTargets: "Argumento",
      cinematographyTargets: "Cinematografia",
      editingTargets: "Montagem",
      soundTargets: "Som",
      learningGoals: "Objetivos de aprendizagem",
    },
    flow: {
      learningFlowAriaLabel: "Percurso de aprendizagem do caso de filme",
      learningProgress: "Progresso da aprendizagem",
      caseCompleteReportUnlocked: "Caso concluído · relatório de aprendizagem desbloqueado",
      phasesComplete: (completed, total) => `${completed}/${total} fases concluídas`,
      learningStatus: { not_started: "Não iniciado", in_progress: "Em curso", completed: "Concluído" },
      resetCaseProgress: "Repor progresso do caso",
      guidanceAriaLabel: "Orientação do caso de filme",
      noApproachChosen: "Ainda não foi escolhida nenhuma abordagem.",
      showDetails: "Mostrar detalhes",
      chooseExplanationAriaLabel: (missionTitle) => `Escolher uma explicação para ${missionTitle}`,
      choiceQuestion: "Que abordagem explica melhor o filme?",
      hideDetails: "Ocultar detalhes",
      learningReportAriaLabel: "Relatório de aprendizagem",
      learningReport: "Relatório de aprendizagem",
      phasesStudied: (completed, total) => `Fases estudadas: ${completed}/${total}`,
      clearlyIdentified: (count) => `Claramente identificadas: ${count}`,
      worthComparingAgain: (count) => `Vale a pena comparar novamente: ${count}`,
      continuationActionsAriaLabel: "Ações para continuar o caso",
      reviewThisCaseAgain: "Rever este caso",
      continueToNextCase: "Continuar para o caso seguinte",
      backToProductionCases: "Voltar a Production Cases",
      understoodClearly: "Compreendido claramente",
      noClearlyIdentified: "Ainda nenhuma fase está marcada como claramente identificada. Reveja as explicações sem penalização.",
      reviewAndCompare: "Rever e comparar",
      noSpecialReview: "Nenhuma fase precisa de revisão especial. Continue quando estiver pronto.",
      sourcesAriaLabel: "Fontes deste caso de filme",
      sourceBasis: "Base de fontes",
      verifiedAt: (date) => `Verificado em ${date}`,
      nextLearningStepAriaLabel: "Próximo passo de aprendizagem",
      nextLearningStep: "Próximo passo de aprendizagem",
      goToPhase: "Ir para a fase",
      suggestedReviewAriaLabel: "Revisão sugerida",
      suggestedReview: "Revisão sugerida",
      reviewPhase: "Rever fase",
    },
  },
};

export function formatProductionCaseBriefTitle(language: FilmWorkLanguage, canonicalTitle: string): string {
  if (language === "en") return canonicalTitle;
  const match = canonicalTitle.match(/^(.*) production brief$/i);
  const filmTitle = match?.[1]?.trim();
  return filmTitle ? `${filmTitle} · ${PRODUCTION_CASE_BRIEF_COPY[language].productionBriefLabel}` : canonicalTitle;
}

export function getProductionCaseBriefIntro(
  language: FilmWorkLanguage,
  briefType: ProductionCaseBriefType,
  filmTitle: string,
): string {
  const copy = PRODUCTION_CASE_BRIEF_COPY[language].header;
  return briefType === "production_case" ? copy.productionCaseIntro(filmTitle) : copy.seedFallbackIntro;
}

export function getProductionCaseVerificationLabel(
  language: FilmWorkLanguage,
  status: ProductionCaseVerificationDisplayStatus,
): string {
  return PRODUCTION_CASE_BRIEF_COPY[language].header.verification[status];
}
