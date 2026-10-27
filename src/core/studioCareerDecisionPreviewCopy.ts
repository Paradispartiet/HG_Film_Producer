import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

/** Presentation-only labels for the result already calculated by resolveNextShootDay. */
type ShootDecisionPreviewCopy = {
  readonly heading: string;
  readonly intro: string;
  readonly event: string;
  readonly producerSupport: string;
  readonly shootResponse: string;
  readonly takeQuality: string;
  readonly completedScenes: string;
  readonly delayedScenes: string;
  readonly dayCost: string;
  readonly scheduleDelta: string;
  readonly days: (value: number) => string;
  readonly footnote: string;
};

export const SHOOT_DECISION_PREVIEW_COPY: Readonly<Record<FilmWorkLanguage, ShootDecisionPreviewCopy>> = {
  en: {
    heading: "Before you confirm",
    intro: "With these choices, today's shooting result would be:",
    event: "On-set situation",
    producerSupport: "Producer priority",
    shootResponse: "Shooting approach",
    takeQuality: "Take quality",
    completedScenes: "Scenes completed",
    delayedScenes: "Scenes delayed",
    dayCost: "Total day cost",
    scheduleDelta: "Schedule change",
    days: (value) => `${value > 0 ? "+" : ""}${value} day${Math.abs(value) === 1 ? "" : "s"}`,
    footnote: "Calculated from the selected event and responses. Change a choice to compare. Nothing is recorded until you confirm."
  },
  nb: {
    heading: "Før du bekrefter",
    intro: "Med disse valgene blir det beregnede resultatet for opptaksdagen:",
    event: "Hendelse på settet",
    producerSupport: "Produsentprioritet",
    shootResponse: "Opptaksstrategi",
    takeQuality: "Opptakskvalitet",
    completedScenes: "Fullførte scener",
    delayedScenes: "Forsinkede scener",
    dayCost: "Samlet dagskostnad",
    scheduleDelta: "Endring i opptaksplan",
    days: (value) => `${value > 0 ? "+" : ""}${value} dag${Math.abs(value) === 1 ? "" : "er"}`,
    footnote: "Beregnet fra valgt hendelse og tiltak. Bytt valg for å sammenligne. Ingenting registreres før du bekrefter."
  },
  fr: {
    heading: "Avant de confirmer",
    intro: "Avec ces choix, le résultat calculé de la journée serait :",
    event: "Situation sur le plateau",
    producerSupport: "Priorité de production",
    shootResponse: "Méthode de tournage",
    takeQuality: "Qualité des prises",
    completedScenes: "Scènes terminées",
    delayedScenes: "Scènes retardées",
    dayCost: "Coût total de la journée",
    scheduleDelta: "Écart de planning",
    days: (value) => `${value > 0 ? "+" : ""}${value} jour${Math.abs(value) === 1 ? "" : "s"}`,
    footnote: "Calculé à partir de l'événement et des réponses choisis. Modifiez un choix pour comparer. Rien n'est enregistré avant confirmation."
  },
  pt: {
    heading: "Antes de confirmar",
    intro: "Com estas escolhas, o resultado calculado do dia seria:",
    event: "Situação no plateau",
    producerSupport: "Prioridade da produção",
    shootResponse: "Estratégia de rodagem",
    takeQuality: "Qualidade das tomadas",
    completedScenes: "Cenas concluídas",
    delayedScenes: "Cenas adiadas",
    dayCost: "Custo total do dia",
    scheduleDelta: "Desvio do calendário",
    days: (value) => `${value > 0 ? "+" : ""}${value} dia${Math.abs(value) === 1 ? "" : "s"}`,
    footnote: "Calculado com o evento e as respostas escolhidos. Altere uma escolha para comparar. Nada fica registado até confirmar."
  }
};
