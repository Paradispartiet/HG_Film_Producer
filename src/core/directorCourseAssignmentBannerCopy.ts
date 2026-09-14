import type { DirectorBriefFieldId } from "./directorBrief.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export type DirectorCourseAssignmentBannerCopy = {
  readonly assignmentAria: string;
  readonly capstoneAria: string;
  readonly dismissAssignment: string;
  readonly assignmentEyebrow: string;
  readonly capstoneEyebrow: string;
  readonly briefFieldsInActiveScene: string;
  readonly completeShotCards: string;
  readonly correctReferenceFilm: string;
  readonly yes: string;
  readonly no: string;
  readonly readyToSubmit: string;
  readonly projectChangedAfterSubmission: string;
  readonly goToSceneBrief: string;
  readonly goToShotPlan: string;
  readonly submitExam: string;
  readonly submitUpdatedVersion: string;
  readonly examSubmitted: string;
  readonly unknownTime: string;
  readonly submitted: (formattedDateTime: string, sceneTitle: string | undefined) => string;
  readonly fieldLabels: Readonly<Record<DirectorBriefFieldId, string>>;
};

type ValidationGuidanceInput = {
  readonly assignmentMatchesProject: boolean;
  readonly missingBriefFields: number;
  readonly missingShotCards: number;
};

export const DIRECTOR_COURSE_ASSIGNMENT_BANNER_COPY: Record<FilmWorkLanguage, DirectorCourseAssignmentBannerCopy> = {
  en: {
    assignmentAria: "Film School director assignment",
    capstoneAria: "Film School final directing exam",
    dismissAssignment: "Dismiss course assignment",
    assignmentEyebrow: "Film School assignment",
    capstoneEyebrow: "Film School · Directing exam",
    briefFieldsInActiveScene: "director fields in active scene",
    completeShotCards: "complete shot cards",
    correctReferenceFilm: "correct reference film",
    yes: "Yes",
    no: "No",
    readyToSubmit: "The active scene meets the requirements and can be submitted.",
    projectChangedAfterSubmission: "The project has changed since submission. Submit again to register the latest version.",
    goToSceneBrief: "Go to scene brief",
    goToShotPlan: "Go to shot plan",
    submitExam: "Submit directing exam",
    submitUpdatedVersion: "Submit updated version",
    examSubmitted: "Directing exam submitted",
    unknownTime: "unknown time",
    submitted: (formattedDateTime, sceneTitle) => sceneTitle ? `Submitted ${formattedDateTime} · ${sceneTitle}` : `Submitted ${formattedDateTime}`,
    fieldLabels: {
      sceneTitle: "Scene title",
      sceneContext: "Scene context",
      sceneObjective: "Scene objective",
      audienceEffect: "Audience effect",
      conflictTurn: "Conflict and turn",
      formalStrategy: "Formal strategy",
      blocking: "Blocking",
      performanceDirection: "Performance direction",
      productionDesign: "Production design",
      shotPlan: "Shot plan",
      cameraMovementLenses: "Camera, movement, and lenses",
      lightingPalette: "Lighting and palette",
      editingRhythm: "Editing rhythm",
      soundStrategy: "Sound strategy",
      practicalConstraints: "Practical constraints",
      proofOfIntent: "Proof of intent",
    },
  },
  nb: {
    assignmentAria: "Film School-regioppgave",
    capstoneAria: "Film School avsluttende regieksamen",
    dismissAssignment: "Lukk kursoppgave",
    assignmentEyebrow: "Film School-oppgave",
    capstoneEyebrow: "Film School · Regieksamen",
    briefFieldsInActiveScene: "regifelt i aktiv scene",
    completeShotCards: "komplette shot cards",
    correctReferenceFilm: "riktig referansefilm",
    yes: "Ja",
    no: "Nei",
    readyToSubmit: "Aktiv scene oppfyller kravene og kan leveres.",
    projectChangedAfterSubmission: "Prosjektet er endret etter innleveringen. Lever på nytt for å registrere siste versjon.",
    goToSceneBrief: "Gå til scenebrieffet",
    goToShotPlan: "Gå til bildeplanen",
    submitExam: "Lever regieksamen",
    submitUpdatedVersion: "Lever oppdatert versjon",
    examSubmitted: "Regieksamen levert",
    unknownTime: "ukjent tidspunkt",
    submitted: (formattedDateTime, sceneTitle) => sceneTitle ? `Levert ${formattedDateTime} · ${sceneTitle}` : `Levert ${formattedDateTime}`,
    fieldLabels: {
      sceneTitle: "Scenetittel",
      sceneContext: "Scenekontekst",
      sceneObjective: "Scenemål",
      audienceEffect: "Effekt på publikum",
      conflictTurn: "Konflikt og vendepunkt",
      formalStrategy: "Formell strategi",
      blocking: "Blocking",
      performanceDirection: "Skuespillerregi",
      productionDesign: "Produksjonsdesign",
      shotPlan: "Bildeplan",
      cameraMovementLenses: "Kamera, bevegelse og optikk",
      lightingPalette: "Lys og palett",
      editingRhythm: "Klipperytme",
      soundStrategy: "Lydstrategi",
      practicalConstraints: "Praktiske begrensninger",
      proofOfIntent: "Dokumentasjon av intensjon",
    },
  },
  fr: {
    assignmentAria: "Exercice de réalisation Film School",
    capstoneAria: "Examen final de réalisation Film School",
    dismissAssignment: "Fermer l’exercice du cours",
    assignmentEyebrow: "Exercice Film School",
    capstoneEyebrow: "Film School · Examen de réalisation",
    briefFieldsInActiveScene: "champs de réalisation dans la scène active",
    completeShotCards: "fiches de plan complètes",
    correctReferenceFilm: "bon film de référence",
    yes: "Oui",
    no: "Non",
    readyToSubmit: "La scène active remplit les conditions et peut être remise.",
    projectChangedAfterSubmission: "Le projet a été modifié après la remise. Remettez-le pour enregistrer la dernière version.",
    goToSceneBrief: "Aller au brief de scène",
    goToShotPlan: "Aller à la liste de plans",
    submitExam: "Remettre l’examen de réalisation",
    submitUpdatedVersion: "Remettre la version mise à jour",
    examSubmitted: "Examen de réalisation remis",
    unknownTime: "heure inconnue",
    submitted: (formattedDateTime, sceneTitle) => sceneTitle ? `Remis ${formattedDateTime} · ${sceneTitle}` : `Remis ${formattedDateTime}`,
    fieldLabels: {
      sceneTitle: "Titre de la scène",
      sceneContext: "Contexte de la scène",
      sceneObjective: "Objectif de la scène",
      audienceEffect: "Effet sur le public",
      conflictTurn: "Conflit et bascule",
      formalStrategy: "Stratégie formelle",
      blocking: "Mise en place des acteurs",
      performanceDirection: "Direction d’acteurs",
      productionDesign: "Direction artistique",
      shotPlan: "Liste de plans",
      cameraMovementLenses: "Caméra, mouvements et optiques",
      lightingPalette: "Éclairage et palette",
      editingRhythm: "Rythme de montage",
      soundStrategy: "Stratégie sonore",
      practicalConstraints: "Contraintes pratiques",
      proofOfIntent: "Démonstration de l’intention",
    },
  },
  pt: {
    assignmentAria: "Exercício de realização da Film School",
    capstoneAria: "Exame final de realização da Film School",
    dismissAssignment: "Fechar exercício do curso",
    assignmentEyebrow: "Exercício da Film School",
    capstoneEyebrow: "Film School · Exame de realização",
    briefFieldsInActiveScene: "campos de realização na cena ativa",
    completeShotCards: "fichas de plano completas",
    correctReferenceFilm: "filme de referência correto",
    yes: "Sim",
    no: "Não",
    readyToSubmit: "A cena ativa cumpre os requisitos e pode ser entregue.",
    projectChangedAfterSubmission: "O projeto foi alterado após a entrega. Entregue novamente para registar a versão mais recente.",
    goToSceneBrief: "Ir para o brief da cena",
    goToShotPlan: "Ir para a lista de planos",
    submitExam: "Entregar exame de realização",
    submitUpdatedVersion: "Entregar versão atualizada",
    examSubmitted: "Exame de realização entregue",
    unknownTime: "hora desconhecida",
    submitted: (formattedDateTime, sceneTitle) => sceneTitle ? `Entregue ${formattedDateTime} · ${sceneTitle}` : `Entregue ${formattedDateTime}`,
    fieldLabels: {
      sceneTitle: "Título da cena",
      sceneContext: "Contexto da cena",
      sceneObjective: "Objetivo da cena",
      audienceEffect: "Efeito no público",
      conflictTurn: "Conflito e viragem",
      formalStrategy: "Estratégia formal",
      blocking: "Marcação e movimentação",
      performanceDirection: "Direção de atores",
      productionDesign: "Design de produção",
      shotPlan: "Lista de planos",
      cameraMovementLenses: "Câmara, movimento e objetivas",
      lightingPalette: "Iluminação e paleta",
      editingRhythm: "Ritmo de montagem",
      soundStrategy: "Estratégia sonora",
      practicalConstraints: "Limitações práticas",
      proofOfIntent: "Demonstração da intenção",
    },
  },
};

export function buildDirectorCourseAssignmentValidationGuidance(language: FilmWorkLanguage, input: ValidationGuidanceInput): string {
  const messages: string[] = [];
  if (!input.assignmentMatchesProject) messages.push(validationPart(language, "film", 0));
  if (input.missingBriefFields > 0) messages.push(validationPart(language, "brief", input.missingBriefFields));
  if (input.missingShotCards > 0) messages.push(validationPart(language, "shots", input.missingShotCards));
  if (messages.length === 0) return cannotSubmitYet(language);
  return `${capitalize(messages.join(joiner(language)))}.`;
}

function validationPart(language: FilmWorkLanguage, part: "film" | "brief" | "shots", count: number): string {
  switch (language) {
    case "nb":
      if (part === "film") return "åpne filmen som ble valgt i Film School";
      if (part === "brief") return `fyll ${count} ${count === 1 ? "åpent regifelt" : "åpne regifelt"}`;
      return `fullfør ${count} ${count === 1 ? "shot card" : "shot cards"}`;
    case "fr":
      if (part === "film") return "ouvrez le film sélectionné dans Film School";
      if (part === "brief") return `renseignez ${count} ${count === 1 ? "champ de réalisation encore vide" : "champs de réalisation encore vides"}`;
      return `complétez ${count} ${count === 1 ? "fiche de plan supplémentaire" : "fiches de plan supplémentaires"}`;
    case "pt":
      if (part === "film") return "abra o filme selecionado na Film School";
      if (part === "brief") return `preencha ${count} ${count === 1 ? "campo de realização em falta" : "campos de realização em falta"}`;
      return `complete mais ${count} ${count === 1 ? "ficha de plano" : "fichas de plano"}`;
    case "en":
      if (part === "film") return "open the film selected in Film School";
      if (part === "brief") return `fill in ${count} open director ${count === 1 ? "field" : "fields"}`;
      return `complete ${count} more shot ${count === 1 ? "card" : "cards"}`;
  }
}

function joiner(language: FilmWorkLanguage): string {
  switch (language) {
    case "fr": return ", puis ";
    case "pt": return ", e ";
    case "nb": return ", og ";
    case "en": return ", and ";
  }
}

function cannotSubmitYet(language: FilmWorkLanguage): string {
  switch (language) {
    case "nb": return "Aktiv scene kan ikke leveres ennå.";
    case "fr": return "La scène active ne peut pas encore être remise.";
    case "pt": return "A cena ativa ainda não pode ser entregue.";
    case "en": return "The active scene cannot be submitted yet.";
  }
}

function capitalize(value: string): string {
  return value ? `${value[0]?.toLocaleUpperCase() ?? ""}${value.slice(1)}` : value;
}
