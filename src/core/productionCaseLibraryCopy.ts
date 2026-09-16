import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const PRODUCTION_CASE_LIBRARY_STATUS_IDS = ["all", "not_started", "in_progress", "completed"] as const;
export type ProductionCaseLibraryStatusId = (typeof PRODUCTION_CASE_LIBRARY_STATUS_IDS)[number];
export type ProductionCaseLearningStatusId = Exclude<ProductionCaseLibraryStatusId, "all">;

export const PRODUCTION_CASE_LIBRARY_SORT_IDS = ["default", "title_asc"] as const;
export type ProductionCaseLibrarySortId = (typeof PRODUCTION_CASE_LIBRARY_SORT_IDS)[number];

type ProductionCaseLibraryCopy = {
  readonly eyebrow: string;
  readonly productTitle: "Production Cases";
  readonly intro: string;
  readonly searchLabel: string;
  readonly searchPlaceholder: string;
  readonly learningStatusLabel: string;
  readonly sortLabel: string;
  readonly resetFilters: string;
  readonly statusFilters: Readonly<Record<ProductionCaseLibraryStatusId, string>>;
  readonly sortOptions: Readonly<Record<ProductionCaseLibrarySortId, string>>;
  readonly backup: {
    readonly title: string;
    readonly description: string;
    readonly exportProgress: string;
    readonly importProgress: string;
    readonly pasteBackup: string;
    readonly importOverwriteWarning: string;
    readonly backupFound: string;
    readonly exportedLabel: string;
    readonly casesWithProgressLabel: string;
    readonly unreadable: string;
    readonly confirmImport: string;
    readonly progressExported: string;
    readonly progressReadyToCopy: string;
    readonly progressImported: string;
    readonly importFailed: string;
  };
  readonly noMatches: string;
  readonly resultSummary: (shown: number, total: number) => string;
  readonly eraAria: (era: string) => string;
  readonly caseCount: (count: number) => string;
  readonly yearLabel: string;
  readonly directorLabel: string;
  readonly genresAria: (filmTitle: string) => string;
  readonly reviewCase: string;
  readonly continueCase: string;
  readonly studyCase: string;
  readonly showAllCases: (count: number, era: string) => string;
  readonly startHere: {
    readonly aria: string;
    readonly label: string;
    readonly heading: string;
    readonly steps: readonly [string, string, string, string];
    readonly startFirstCase: string;
    readonly suggestedFirstCases: string;
  };
  readonly collectionSummary: {
    readonly aria: string;
    readonly casesStudied: string;
    readonly completed: string;
    readonly inProgress: string;
    readonly notStarted: string;
  };
  readonly nextAction: {
    readonly aria: string;
    readonly label: string;
    readonly reviewTitle: string;
    readonly reviewHint: string;
    readonly continueTitle: (filmTitle: string) => string;
    readonly startTitle: (filmTitle: string) => string;
    readonly phasesStudied: (completed: number, total: number) => string;
    readonly openFirstPhase: string;
    readonly openCase: string;
  };
  readonly statusBadge: {
    readonly aria: (statusLabel: string) => string;
    readonly label: string;
    readonly phasesStudied: (completed: number, total: number) => string;
  };
  readonly productionCaseDescription: (filmTitle: string) => string;
  readonly seedFallbackDescription: (canonicalChallenge: string) => string;
};

export const PRODUCTION_CASE_LIBRARY_COPY = {
  en: {
    eyebrow: "Film learning through concrete cases",
    productTitle: "Production Cases",
    intro: "Choose a film, study its screenplay, image, editing and sound choices, read the explanations, and continue when the method is clear. There are no points or ranks.",
    searchLabel: "Search",
    searchPlaceholder: "Search film, year, or case",
    learningStatusLabel: "Learning status",
    sortLabel: "Sort",
    resetFilters: "Reset filters",
    statusFilters: { all: "All", not_started: "Not started", in_progress: "In progress", completed: "Completed" },
    sortOptions: { default: "Default", title_asc: "Title A–Z" },
    backup: {
      title: "Learning progress backup",
      description: "Save or restore which cases and phases you have studied.",
      exportProgress: "Export progress",
      importProgress: "Import progress",
      pasteBackup: "Paste JSON backup",
      importOverwriteWarning: "Importing overwrites local learning progress.",
      backupFound: "Backup found",
      exportedLabel: "Exported",
      casesWithProgressLabel: "Cases with progress",
      unreadable: "Backup cannot be read",
      confirmImport: "Confirm import",
      progressExported: "Progress exported",
      progressReadyToCopy: "Progress ready to copy",
      progressImported: "Progress imported",
      importFailed: "Could not import progress",
    },
    noMatches: "No film cases match the search or filter",
    resultSummary: (shown, total) => `Showing ${shown} of ${total} film cases`,
    eraAria: (era) => `Film cases from the ${era}`,
    caseCount: (count) => `${count} ${count === 1 ? "case" : "cases"}`,
    yearLabel: "Year",
    directorLabel: "Director",
    genresAria: (filmTitle) => `Genres for ${filmTitle}`,
    reviewCase: "Review this case",
    continueCase: "Continue this case",
    studyCase: "Study this case",
    showAllCases: (count, era) => `Show all ${count} cases from the ${era}`,
    startHere: {
      aria: "Start learning with a film case",
      label: "Start here",
      heading: "Study your first film case",
      steps: [
        "Choose a film.",
        "Compare the possible filmmaking approaches.",
        "Read why the choice fits, partly fits, or does not fit this film.",
        "Finish the phases and read the learning report.",
      ],
      startFirstCase: "Start first case",
      suggestedFirstCases: "Suggested first cases",
    },
    collectionSummary: {
      aria: "Film case learning progress",
      casesStudied: "Cases studied",
      completed: "Completed",
      inProgress: "In progress",
      notStarted: "Not started",
    },
    nextAction: {
      aria: "Next learning step",
      label: "Next learning step",
      reviewTitle: "Choose any completed case to review",
      reviewHint: "There is no score to improve. Return when you want to compare the film choices again.",
      continueTitle: (filmTitle) => `Continue: ${filmTitle}`,
      startTitle: (filmTitle) => `Start: ${filmTitle}`,
      phasesStudied: (completed, total) => `${completed}/${total} phases studied.`,
      openFirstPhase: "Open the film and begin with its first craft phase.",
      openCase: "Open case",
    },
    statusBadge: {
      aria: (statusLabel) => `Learning status: ${statusLabel}`,
      label: "Learning status",
      phasesStudied: (completed, total) => `${completed}/${total} phases studied`,
    },
    productionCaseDescription: (filmTitle) => `Study how ${filmTitle} uses screenplay, image, editing and sound. The goal is understanding, not a score.`,
    seedFallbackDescription: (canonicalChallenge) => `${canonicalChallenge} This imported seed still needs film-specific case design.`,
  },
  nb: {
    eyebrow: "Filmlæring gjennom konkrete case",
    productTitle: "Production Cases",
    intro: "Velg en film, studer valgene i manus, bilde, klipp og lyd, les forklaringene og gå videre når metoden er tydelig. Det finnes ingen poeng eller rangeringer.",
    searchLabel: "Søk",
    searchPlaceholder: "Søk etter film, år eller case",
    learningStatusLabel: "Læringsstatus",
    sortLabel: "Sorter",
    resetFilters: "Nullstill filtre",
    statusFilters: { all: "Alle", not_started: "Ikke startet", in_progress: "Pågår", completed: "Fullført" },
    sortOptions: { default: "Standard", title_asc: "Tittel A–Z" },
    backup: {
      title: "Sikkerhetskopi av læringsfremdrift",
      description: "Lagre eller gjenopprett hvilke case og faser du har studert.",
      exportProgress: "Eksporter fremdrift",
      importProgress: "Importer fremdrift",
      pasteBackup: "Lim inn JSON-sikkerhetskopi",
      importOverwriteWarning: "Import overskriver lokal læringsfremdrift.",
      backupFound: "Sikkerhetskopi funnet",
      exportedLabel: "Eksportert",
      casesWithProgressLabel: "Case med fremdrift",
      unreadable: "Sikkerhetskopien kan ikke leses",
      confirmImport: "Bekreft import",
      progressExported: "Fremdrift eksportert",
      progressReadyToCopy: "Fremdrift klar til kopiering",
      progressImported: "Fremdrift importert",
      importFailed: "Kunne ikke importere fremdrift",
    },
    noMatches: "Ingen filmcase passer søket eller filteret",
    resultSummary: (shown, total) => `Viser ${shown} av ${total} filmcase`,
    eraAria: (era) => `Filmcase fra ${era}`,
    caseCount: (count) => `${count} ${count === 1 ? "case" : "case"}`,
    yearLabel: "År",
    directorLabel: "Regissør",
    genresAria: (filmTitle) => `Sjangre for ${filmTitle}`,
    reviewCase: "Se gjennom dette caset",
    continueCase: "Fortsett dette caset",
    studyCase: "Studer dette caset",
    showAllCases: (count, era) => `Vis alle ${count} case fra ${era}`,
    startHere: {
      aria: "Start læringen med et filmcase",
      label: "Start her",
      heading: "Studer ditt første filmcase",
      steps: [
        "Velg en film.",
        "Sammenlign mulige filmfaglige tilnærminger.",
        "Les hvorfor valget passer, passer delvis eller ikke passer denne filmen.",
        "Fullfør fasene og les læringsrapporten.",
      ],
      startFirstCase: "Start første case",
      suggestedFirstCases: "Foreslåtte første case",
    },
    collectionSummary: {
      aria: "Læringsfremdrift for filmcase",
      casesStudied: "Case studert",
      completed: "Fullført",
      inProgress: "Pågår",
      notStarted: "Ikke startet",
    },
    nextAction: {
      aria: "Neste læringssteg",
      label: "Neste læringssteg",
      reviewTitle: "Velg et fullført case du vil se gjennom",
      reviewHint: "Det finnes ingen poengsum å forbedre. Kom tilbake når du vil sammenligne filmvalgene på nytt.",
      continueTitle: (filmTitle) => `Fortsett: ${filmTitle}`,
      startTitle: (filmTitle) => `Start: ${filmTitle}`,
      phasesStudied: (completed, total) => `${completed}/${total} faser studert.`,
      openFirstPhase: "Åpne filmen og begynn med den første håndverksfasen.",
      openCase: "Åpne case",
    },
    statusBadge: {
      aria: (statusLabel) => `Læringsstatus: ${statusLabel}`,
      label: "Læringsstatus",
      phasesStudied: (completed, total) => `${completed}/${total} faser studert`,
    },
    productionCaseDescription: (filmTitle) => `Studer hvordan ${filmTitle} bruker manus, bilde, klipp og lyd. Målet er forståelse, ikke poeng.`,
    seedFallbackDescription: (canonicalChallenge) => `${canonicalChallenge} Dette importerte utgangspunktet trenger fortsatt filmspesifikk caseutforming.`,
  },
  fr: {
    eyebrow: "Apprentissage du cinéma à partir de cas concrets",
    productTitle: "Production Cases",
    intro: "Choisissez un film, étudiez ses choix de scénario, d’image, de montage et de son, lisez les explications et poursuivez lorsque la méthode est claire. Il n’y a ni points ni classement.",
    searchLabel: "Rechercher",
    searchPlaceholder: "Rechercher un film, une année ou un cas",
    learningStatusLabel: "Statut d’apprentissage",
    sortLabel: "Trier",
    resetFilters: "Réinitialiser les filtres",
    statusFilters: { all: "Tous", not_started: "Non commencé", in_progress: "En cours", completed: "Terminé" },
    sortOptions: { default: "Par défaut", title_asc: "Titre A–Z" },
    backup: {
      title: "Sauvegarde de la progression",
      description: "Enregistrez ou restaurez les cas et les phases que vous avez étudiés.",
      exportProgress: "Exporter la progression",
      importProgress: "Importer la progression",
      pasteBackup: "Collez la sauvegarde JSON",
      importOverwriteWarning: "L’importation remplace la progression locale.",
      backupFound: "Sauvegarde trouvée",
      exportedLabel: "Exportée",
      casesWithProgressLabel: "Cas avec progression",
      unreadable: "La sauvegarde ne peut pas être lue",
      confirmImport: "Confirmer l’importation",
      progressExported: "Progression exportée",
      progressReadyToCopy: "Progression prête à copier",
      progressImported: "Progression importée",
      importFailed: "Impossible d’importer la progression",
    },
    noMatches: "Aucun cas de film ne correspond à la recherche ou au filtre",
    resultSummary: (shown, total) => `${shown} cas de film affichés sur ${total}`,
    eraAria: (era) => `Cas de film des ${era}`,
    caseCount: (count) => `${count} ${count === 1 ? "cas" : "cas"}`,
    yearLabel: "Année",
    directorLabel: "Réalisation",
    genresAria: (filmTitle) => `Genres de ${filmTitle}`,
    reviewCase: "Revoir ce cas",
    continueCase: "Continuer ce cas",
    studyCase: "Étudier ce cas",
    showAllCases: (count, era) => `Afficher les ${count} cas des ${era}`,
    startHere: {
      aria: "Commencer l’apprentissage avec un cas de film",
      label: "Commencer ici",
      heading: "Étudiez votre premier cas de film",
      steps: [
        "Choisissez un film.",
        "Comparez les approches de réalisation possibles.",
        "Lisez pourquoi le choix convient, convient en partie ou ne convient pas à ce film.",
        "Terminez les phases et lisez le rapport d’apprentissage.",
      ],
      startFirstCase: "Commencer le premier cas",
      suggestedFirstCases: "Premiers cas suggérés",
    },
    collectionSummary: {
      aria: "Progression d’apprentissage des cas de film",
      casesStudied: "Cas étudiés",
      completed: "Terminés",
      inProgress: "En cours",
      notStarted: "Non commencés",
    },
    nextAction: {
      aria: "Prochaine étape d’apprentissage",
      label: "Prochaine étape d’apprentissage",
      reviewTitle: "Choisissez un cas terminé à revoir",
      reviewHint: "Il n’y a aucun score à améliorer. Revenez lorsque vous voudrez comparer de nouveau les choix du film.",
      continueTitle: (filmTitle) => `Continuer : ${filmTitle}`,
      startTitle: (filmTitle) => `Commencer : ${filmTitle}`,
      phasesStudied: (completed, total) => `${completed}/${total} phases étudiées.`,
      openFirstPhase: "Ouvrez le film et commencez par sa première phase de fabrication.",
      openCase: "Ouvrir le cas",
    },
    statusBadge: {
      aria: (statusLabel) => `Statut d’apprentissage : ${statusLabel}`,
      label: "Statut d’apprentissage",
      phasesStudied: (completed, total) => `${completed}/${total} phases étudiées`,
    },
    productionCaseDescription: (filmTitle) => `Étudiez comment ${filmTitle} utilise le scénario, l’image, le montage et le son. L’objectif est de comprendre, pas d’obtenir un score.`,
    seedFallbackDescription: (canonicalChallenge) => `${canonicalChallenge} Cette donnée importée nécessite encore une conception de cas propre au film.`,
  },
  pt: {
    eyebrow: "Aprendizagem de cinema através de casos concretos",
    productTitle: "Production Cases",
    intro: "Escolha um filme, estude as opções de argumento, imagem, montagem e som, leia as explicações e prossiga quando o método estiver claro. Não há pontos nem classificações.",
    searchLabel: "Pesquisar",
    searchPlaceholder: "Pesquisar filme, ano ou caso",
    learningStatusLabel: "Estado da aprendizagem",
    sortLabel: "Ordenar",
    resetFilters: "Repor filtros",
    statusFilters: { all: "Todos", not_started: "Não iniciado", in_progress: "Em curso", completed: "Concluído" },
    sortOptions: { default: "Predefinido", title_asc: "Título A–Z" },
    backup: {
      title: "Cópia de segurança do progresso",
      description: "Guarde ou restaure os casos e as fases que estudou.",
      exportProgress: "Exportar progresso",
      importProgress: "Importar progresso",
      pasteBackup: "Cole a cópia de segurança JSON",
      importOverwriteWarning: "A importação substitui o progresso de aprendizagem local.",
      backupFound: "Cópia de segurança encontrada",
      exportedLabel: "Exportada",
      casesWithProgressLabel: "Casos com progresso",
      unreadable: "Não foi possível ler a cópia de segurança",
      confirmImport: "Confirmar importação",
      progressExported: "Progresso exportado",
      progressReadyToCopy: "Progresso pronto a copiar",
      progressImported: "Progresso importado",
      importFailed: "Não foi possível importar o progresso",
    },
    noMatches: "Nenhum caso de filme corresponde à pesquisa ou ao filtro",
    resultSummary: (shown, total) => `A mostrar ${shown} de ${total} casos de filme`,
    eraAria: (era) => `Casos de filme dos ${era}`,
    caseCount: (count) => `${count} ${count === 1 ? "caso" : "casos"}`,
    yearLabel: "Ano",
    directorLabel: "Realização",
    genresAria: (filmTitle) => `Géneros de ${filmTitle}`,
    reviewCase: "Rever este caso",
    continueCase: "Continuar este caso",
    studyCase: "Estudar este caso",
    showAllCases: (count, era) => `Mostrar todos os ${count} casos dos ${era}`,
    startHere: {
      aria: "Começar a aprender com um caso de filme",
      label: "Começar aqui",
      heading: "Estude o seu primeiro caso de filme",
      steps: [
        "Escolha um filme.",
        "Compare as abordagens de realização possíveis.",
        "Leia por que motivo a opção se adequa, se adequa em parte ou não se adequa a este filme.",
        "Conclua as fases e leia o relatório de aprendizagem.",
      ],
      startFirstCase: "Começar o primeiro caso",
      suggestedFirstCases: "Primeiros casos sugeridos",
    },
    collectionSummary: {
      aria: "Progresso de aprendizagem dos casos de filme",
      casesStudied: "Casos estudados",
      completed: "Concluídos",
      inProgress: "Em curso",
      notStarted: "Não iniciados",
    },
    nextAction: {
      aria: "Próximo passo de aprendizagem",
      label: "Próximo passo de aprendizagem",
      reviewTitle: "Escolha um caso concluído para rever",
      reviewHint: "Não há nenhuma pontuação para melhorar. Volte quando quiser comparar novamente as opções do filme.",
      continueTitle: (filmTitle) => `Continuar: ${filmTitle}`,
      startTitle: (filmTitle) => `Começar: ${filmTitle}`,
      phasesStudied: (completed, total) => `${completed}/${total} fases estudadas.`,
      openFirstPhase: "Abra o filme e comece pela primeira fase de trabalho.",
      openCase: "Abrir caso",
    },
    statusBadge: {
      aria: (statusLabel) => `Estado da aprendizagem: ${statusLabel}`,
      label: "Estado da aprendizagem",
      phasesStudied: (completed, total) => `${completed}/${total} fases estudadas`,
    },
    productionCaseDescription: (filmTitle) => `Estude como ${filmTitle} utiliza argumento, imagem, montagem e som. O objetivo é compreender, não obter uma pontuação.`,
    seedFallbackDescription: (canonicalChallenge) => `${canonicalChallenge} Este registo importado ainda precisa de uma conceção de caso específica para o filme.`,
  },
} as const satisfies Record<FilmWorkLanguage, ProductionCaseLibraryCopy>;

export function getProductionCaseLibraryStatusLabel(language: FilmWorkLanguage, status: ProductionCaseLearningStatusId) {
  return PRODUCTION_CASE_LIBRARY_COPY[language].statusFilters[status];
}
