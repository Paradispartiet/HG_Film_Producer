import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

interface OnSetDialogueViewCopy {
  readonly concern: string;
  readonly producerAction: string;
  readonly response: string;
  readonly takeaway: string;
  readonly missingNeed: string;
  readonly openNeed: (priority: string) => string;
  readonly status: Readonly<Record<"matched" | "partial" | "stopped", string>>;
  readonly previewStatus: Readonly<Record<"matched" | "partial" | "stopped", string>>;
}

/** Presentation-only labels for existing saved dialogue and resolver decisions. */
export const ON_SET_DIALOGUE_VIEW_COPY = {
  en: {
    concern: "1 · The challenge",
    producerAction: "2 · Your response",
    response: "3 · The team's reaction",
    takeaway: "What you learn",
    missingNeed: "Support the team still needed",
    openNeed: (priority) => `Still needs attention: ${priority}`,
    status: { matched: "Need addressed", partial: "Need still open", stopped: "Shoot interrupted" },
    previewStatus: { matched: "Would address the need", partial: "Would leave a need open", stopped: "Would stop the shoot" }
  },
  nb: {
    concern: "1 · Utfordringen",
    producerAction: "2 · Ditt svar",
    response: "3 · Teamets reaksjon",
    takeaway: "Dette lærer du",
    missingNeed: "Støtten filmteamet manglet",
    openNeed: (priority) => `Må følges opp: ${priority}`,
    status: { matched: "Behov ivaretatt", partial: "Behov står åpent", stopped: "Opptakene avbrutt" },
    previewStatus: { matched: "Behovet ville blitt ivaretatt", partial: "Behovet ville stått åpent", stopped: "Opptakene ville blitt stanset" }
  },
  fr: {
    concern: "1 · Le défi",
    producerAction: "2 · Votre réponse",
    response: "3 · Réaction de l'équipe",
    takeaway: "À retenir",
    missingNeed: "Soutien encore nécessaire pour l’équipe",
    openNeed: (priority) => `Besoin à suivre : ${priority}`,
    status: { matched: "Besoin pris en compte", partial: "Besoin non résolu", stopped: "Tournage interrompu" },
    previewStatus: { matched: "Le besoin serait pris en compte", partial: "Le besoin resterait ouvert", stopped: "Le tournage serait interrompu" }
  },
  pt: {
    concern: "1 · O desafio",
    producerAction: "2 · A tua resposta",
    response: "3 · Reação da equipa",
    takeaway: "O que aprendes",
    missingNeed: "Apoio de que a equipa ainda precisava",
    openNeed: (priority) => `Necessidade por resolver: ${priority}`,
    status: { matched: "Necessidade atendida", partial: "Necessidade pendente", stopped: "Rodagem interrompida" },
    previewStatus: { matched: "A necessidade seria atendida", partial: "A necessidade ficaria pendente", stopped: "A rodagem seria interrompida" }
  }
} as const satisfies Record<FilmWorkLanguage, OnSetDialogueViewCopy>;
