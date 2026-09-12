import type { FilmWorkLanguage } from "./filmWorkLanguage";

export type FilmSchoolCourseChrome = {
  readonly productBrand: string;
  readonly productMonogram: string;
  readonly navAria: string;
  readonly foundation: string;
  readonly module: string;
  readonly modules: string;
  readonly courseProgress: string;
  readonly terms: string;
  readonly filmExamples: string;
  readonly finalAssignment: string;
  readonly resetCourse: string;
  readonly resetConfirm: string;
  readonly coursePath: string;
  readonly stage: {
    readonly not_started: string;
    readonly seen: string;
    readonly understood: string;
    readonly used: string;
    readonly mastered: string;
  };
  readonly corePrinciple: string;
  readonly terminology: string;
  readonly termsYouNeed: string;
  readonly foundationLevel: string;
  readonly intermediateLevel: string;
  readonly advancedLevel: string;
  readonly directorUse: string;
  readonly seeInFilm: string;
  readonly openInAtlas: string;
  readonly missingFilmExample: string;
  readonly quiz: string;
  readonly correct: string;
  readonly notQuite: string;
  readonly useItYourself: string;
  readonly miniExercise: string;
  readonly notCompleted: string;
  readonly checkBeforeUsed: string;
  readonly exerciseUsed: string;
  readonly markExerciseUsed: string;
  readonly previousModule: string;
  readonly nextModule: string;
  readonly courseModuleNavAria: string;
  readonly selectReferenceFilm: string;
  readonly startFinalAssignment: string;
  readonly masterFirst: (remaining: number) => string;
};

export const FILM_SCHOOL_COURSE_CHROME: Record<FilmWorkLanguage, FilmSchoolCourseChrome> = {
  en: {
    productBrand: "FilmWork", productMonogram: "FW", navAria: "FilmWork sections", foundation: "Directing foundations", module: "Module", modules: "modules", courseProgress: "Course progress", terms: "technical terms", filmExamples: "film examples", finalAssignment: "final directing assignment", resetCourse: "Reset course", resetConfirm: "Reset all progress and notes in this course?", coursePath: "Course path",
    stage: { not_started: "Not started", seen: "Seen", understood: "Understood", used: "Used", mastered: "Mastered" },
    corePrinciple: "Core principle", terminology: "Technical terminology", termsYouNeed: "Terms you need to know", foundationLevel: "Foundation", intermediateLevel: "Intermediate", advancedLevel: "Advanced", directorUse: "Director use", seeInFilm: "See the terms in a film", openInAtlas: "Open in Film Atlas →", missingFilmExample: "The film example is not available in the active catalogue.", quiz: "Check question", correct: "Correct. ", notQuite: "Not quite. ", useItYourself: "Use the terms yourself", miniExercise: "Mini exercise", notCompleted: "Not completed", checkBeforeUsed: "Check before marking used", exerciseUsed: "Exercise used", markExerciseUsed: "Mark exercise as used", previousModule: "← Previous module", nextModule: "Next module →", courseModuleNavAria: "Course module navigation", selectReferenceFilm: "Choose reference film", startFinalAssignment: "Start final assignment in Film Director →", masterFirst: (remaining) => `Master ${remaining} module${remaining === 1 ? "" : "s"} first`,
  },
  nb: {
    productBrand: "Filmverket", productMonogram: "FV", navAria: "Filmverket-seksjoner", foundation: "Regi grunnkurs", module: "Modul", modules: "moduler", courseProgress: "Kursprogresjon", terms: "fagbegreper", filmExamples: "filmeksempler", finalAssignment: "avsluttende regioppgave", resetCourse: "Nullstill kurs", resetConfirm: "Nullstill all progresjon og alle notater i dette kurset?", coursePath: "Kursløp",
    stage: { not_started: "Ikke startet", seen: "Sett", understood: "Forstått", used: "Brukt", mastered: "Mestret" },
    corePrinciple: "Kjerneprinsipp", terminology: "Fagterminologi", termsYouNeed: "Begrepene du må kunne", foundationLevel: "Grunnbegrep", intermediateLevel: "Videregående", advancedLevel: "Avansert", directorUse: "Regissørens bruk", seeInFilm: "Se begrepene i en film", openInAtlas: "Åpne i Film Atlas →", missingFilmExample: "Filmeksemplet finnes ikke i den aktive katalogen.", quiz: "Kontrollspørsmål", correct: "Riktig. ", notQuite: "Ikke helt. ", useItYourself: "Bruk begrepene selv", miniExercise: "Miniøvelse", notCompleted: "Ikke gjennomført", checkBeforeUsed: "Sjekk før du markerer brukt", exerciseUsed: "Øvelsen er brukt", markExerciseUsed: "Marker øvelsen som brukt", previousModule: "← Forrige modul", nextModule: "Neste modul →", courseModuleNavAria: "Navigasjon mellom kursmoduler", selectReferenceFilm: "Velg referansefilm", startFinalAssignment: "Start avsluttende oppgave i Film Director →", masterFirst: (remaining) => `Mestre ${remaining} modul${remaining === 1 ? "" : "er"} først`,
  },
  fr: {
    productBrand: "FilmWork", productMonogram: "FW", navAria: "Sections FilmWork", foundation: "Fondamentaux de la réalisation", module: "Module", modules: "modules", courseProgress: "Progression du cours", terms: "termes techniques", filmExamples: "exemples de films", finalAssignment: "exercice final de réalisation", resetCourse: "Réinitialiser le cours", resetConfirm: "Réinitialiser toute la progression et toutes les notes de ce cours ?", coursePath: "Parcours du cours",
    stage: { not_started: "Non commencé", seen: "Vu", understood: "Compris", used: "Utilisé", mastered: "Maîtrisé" },
    corePrinciple: "Principe clé", terminology: "Terminologie technique", termsYouNeed: "Termes à connaître", foundationLevel: "Fondamental", intermediateLevel: "Intermédiaire", advancedLevel: "Avancé", directorUse: "Usage en réalisation", seeInFilm: "Voir les termes dans un film", openInAtlas: "Ouvrir dans Film Atlas →", missingFilmExample: "L’exemple de film n’est pas disponible dans le catalogue actif.", quiz: "Question de contrôle", correct: "Correct. ", notQuite: "Pas tout à fait. ", useItYourself: "Utilisez les termes vous-même", miniExercise: "Mini-exercice", notCompleted: "Non terminé", checkBeforeUsed: "Vérifiez avant de marquer comme utilisé", exerciseUsed: "Exercice utilisé", markExerciseUsed: "Marquer l’exercice comme utilisé", previousModule: "← Module précédent", nextModule: "Module suivant →", courseModuleNavAria: "Navigation entre les modules du cours", selectReferenceFilm: "Choisir un film de référence", startFinalAssignment: "Commencer l’exercice final dans Film Director →", masterFirst: (remaining) => `Maîtrisez d’abord ${remaining} module${remaining === 1 ? "" : "s"}`,
  },
  pt: {
    productBrand: "FilmWork", productMonogram: "FW", navAria: "Secções do FilmWork", foundation: "Fundamentos de realização", module: "Módulo", modules: "módulos", courseProgress: "Progresso do curso", terms: "termos técnicos", filmExamples: "exemplos de filmes", finalAssignment: "exercício final de realização", resetCourse: "Repor curso", resetConfirm: "Repor todo o progresso e todas as notas deste curso?", coursePath: "Percurso do curso",
    stage: { not_started: "Não iniciado", seen: "Visto", understood: "Compreendido", used: "Usado", mastered: "Dominado" },
    corePrinciple: "Princípio central", terminology: "Terminologia técnica", termsYouNeed: "Termos que precisa de conhecer", foundationLevel: "Fundamental", intermediateLevel: "Intermédio", advancedLevel: "Avançado", directorUse: "Uso na realização", seeInFilm: "Ver os termos num filme", openInAtlas: "Abrir no Film Atlas →", missingFilmExample: "O exemplo de filme não está disponível no catálogo ativo.", quiz: "Pergunta de controlo", correct: "Certo. ", notQuite: "Ainda não. ", useItYourself: "Use os termos", miniExercise: "Mini-exercício", notCompleted: "Não concluído", checkBeforeUsed: "Verifique antes de marcar como usado", exerciseUsed: "Exercício usado", markExerciseUsed: "Marcar exercício como usado", previousModule: "← Módulo anterior", nextModule: "Módulo seguinte →", courseModuleNavAria: "Navegação entre módulos do curso", selectReferenceFilm: "Escolher filme de referência", startFinalAssignment: "Iniciar exercício final no Film Director →", masterFirst: (remaining) => `Domine primeiro ${remaining} módulo${remaining === 1 ? "" : "s"}`,
  },
};
