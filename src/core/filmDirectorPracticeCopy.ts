import type { DirectorAppliedLearningGuide, DirectorAppliedLearningKind } from "./directorAppliedLearning.js";
import type { DirectorBriefFieldId } from "./directorBrief.js";
import type { DirectorShotFieldId } from "./directorProject.js";
import { FILM_DIRECTOR_BRIEF_COPY } from "./filmDirectorBriefCopy.js";
import { FILM_DIRECTOR_SHOT_COPY } from "./filmDirectorShotCopy.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export type FilmDirectorPracticeCopy = {
  readonly launcherTitle: string;
  readonly completionPercent: (percent: number) => string;
  readonly deskAria: string;
  readonly kicker: string;
  readonly title: string;
  readonly description: string;
  readonly closeAria: string;
  readonly completedTasks: string;
  readonly remainingTasks: string;
  readonly practicalProgress: string;
  readonly progressAria: (percent: number) => string;
  readonly tabsAria: string;
  readonly kindLabels: Readonly<Record<DirectorAppliedLearningKind, string>>;
  readonly exercisesAria: (kindLabel: string) => string;
  readonly goToField: string;
  readonly completed: string;
  readonly markCompleted: string;
  readonly practicalTask: string;
  readonly checklistTitle: string;
  readonly termsTitle: string;
  readonly definition: string;
  readonly directorUse: string;
  readonly example: string;
};

export const FILM_DIRECTOR_PRACTICE_COPY: Record<FilmWorkLanguage, FilmDirectorPracticeCopy> = {
  en: {
    launcherTitle: "Directing exercises",
    completionPercent: (percent) => `${percent}% complete`,
    deskAria: "Applied Film Director exercises",
    kicker: "From film term to directing decision",
    title: "Practise while you build the scene",
    description: "Each exercise is connected to a field that already exists in Film Director.",
    closeAria: "Close directing exercises",
    completedTasks: "exercises completed",
    remainingTasks: "exercises remaining",
    practicalProgress: "practical progress",
    progressAria: (percent) => `${percent}% complete`,
    tabsAria: "Types of directing exercises",
    kindLabels: { brief: "Scene brief", shot: "Shot cards" },
    exercisesAria: (kindLabel) => `${kindLabel} exercises`,
    goToField: "Go to working field",
    completed: "✓ Completed",
    markCompleted: "Mark completed",
    practicalTask: "Practical exercise",
    checklistTitle: "Check before you continue",
    termsTitle: "Film terms in this decision",
    definition: "Definition",
    directorUse: "In directing practice",
    example: "Example",
  },
  nb: {
    launcherTitle: "Regiøvelser",
    completionPercent: (percent) => `${percent}% gjennomført`,
    deskAria: "Praktiske Film Director-øvelser",
    kicker: "Fra fagbegrep til regibeslutning",
    title: "Øv mens du bygger scenen",
    description: "Hver oppgave er koblet til et felt som allerede finnes i Film Director.",
    closeAria: "Lukk regiøvelser",
    completedTasks: "oppgaver gjennomført",
    remainingTasks: "oppgaver igjen",
    practicalProgress: "praktisk progresjon",
    progressAria: (percent) => `${percent}% fullført`,
    tabsAria: "Typer regiøvelser",
    kindLabels: { brief: "Scenebrief", shot: "Innstillingskort" },
    exercisesAria: (kindLabel) => `${kindLabel}-øvelser`,
    goToField: "Gå til arbeidsfeltet",
    completed: "✓ Gjennomført",
    markCompleted: "Marker gjennomført",
    practicalTask: "Praktisk oppgave",
    checklistTitle: "Sjekk før du går videre",
    termsTitle: "Fagbegreper i denne beslutningen",
    definition: "Definisjon",
    directorUse: "I regiarbeidet",
    example: "Eksempel",
  },
  fr: {
    launcherTitle: "Exercices de réalisation",
    completionPercent: (percent) => `${percent} % terminé`,
    deskAria: "Exercices pratiques Film Director",
    kicker: "Du terme métier à la décision de réalisation",
    title: "Pratiquez en construisant la scène",
    description: "Chaque exercice est relié à un champ déjà présent dans Film Director.",
    closeAria: "Fermer les exercices de réalisation",
    completedTasks: "exercices terminés",
    remainingTasks: "exercices restants",
    practicalProgress: "progression pratique",
    progressAria: (percent) => `${percent} % terminé`,
    tabsAria: "Types d’exercices de réalisation",
    kindLabels: { brief: "Brief de scène", shot: "Fiches de plan" },
    exercisesAria: (kindLabel) => `Exercices : ${kindLabel}`,
    goToField: "Aller au champ de travail",
    completed: "✓ Terminé",
    markCompleted: "Marquer comme terminé",
    practicalTask: "Exercice pratique",
    checklistTitle: "À vérifier avant de continuer",
    termsTitle: "Termes métier dans cette décision",
    definition: "Définition",
    directorUse: "Dans le travail de réalisation",
    example: "Exemple",
  },
  pt: {
    launcherTitle: "Exercícios de realização",
    completionPercent: (percent) => `${percent}% concluído`,
    deskAria: "Exercícios práticos do Film Director",
    kicker: "Do termo técnico à decisão de realização",
    title: "Pratique enquanto constrói a cena",
    description: "Cada exercício está ligado a um campo que já existe no Film Director.",
    closeAria: "Fechar exercícios de realização",
    completedTasks: "exercícios concluídos",
    remainingTasks: "exercícios restantes",
    practicalProgress: "progresso prático",
    progressAria: (percent) => `${percent}% concluído`,
    tabsAria: "Tipos de exercícios de realização",
    kindLabels: { brief: "Brief da cena", shot: "Cartões de plano" },
    exercisesAria: (kindLabel) => `Exercícios: ${kindLabel}`,
    goToField: "Ir para o campo de trabalho",
    completed: "✓ Concluído",
    markCompleted: "Marcar como concluído",
    practicalTask: "Exercício prático",
    checklistTitle: "Verifique antes de continuar",
    termsTitle: "Termos técnicos nesta decisão",
    definition: "Definição",
    directorUse: "No trabalho de realização",
    example: "Exemplo",
  },
};

export function getFilmDirectorPracticeFieldLabel(language: FilmWorkLanguage, guide: DirectorAppliedLearningGuide): string {
  if (guide.kind === "brief") {
    return FILM_DIRECTOR_BRIEF_COPY[language].fields[guide.fieldId as DirectorBriefFieldId].label;
  }
  return FILM_DIRECTOR_SHOT_COPY[language].fields[guide.fieldId as DirectorShotFieldId];
}
