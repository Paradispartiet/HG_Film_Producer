import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { getRecommendedProducerPriority, type ProducerPriorityId, type ProducerPrioritySummary } from "./applyProducerPriority.js";
import { PRODUCER_PRIORITY_COPY } from "./studioCareerProducerPriorityCopy.js";
import type { ProductionEvent } from "../domain/shoot.js";

/** Only the last resolved day is consulted. Legacy saves without a dialogue remain valid. */
interface PreviousDay {
  readonly selectedEventId?: string;
  readonly producerPrioritySummary?: ProducerPrioritySummary;
}

/** Saved with the day so revisiting a report replays the actual decision context. */
export interface TeamContinuity {
  readonly previousEventId: string;
  readonly previousPriorityId: ProducerPriorityId;
  readonly previousNeedId: ProducerPriorityId;
  readonly previousWasMatched: boolean;
  readonly previousWasInterrupted: boolean;
  readonly shiftedPriority: boolean;
  readonly recommendedId: ProducerPriorityId;
}

/**
 * A neglected department can hold up a later *creative opportunity*, not a
 * safety, access or technical emergency. This changes which of the existing
 * producer supports fits today's shoot; it does not add scores or a new meter.
 */
export function getTeamContinuity(
  previous: PreviousDay | undefined,
  nextEvent: Pick<ProductionEvent, "type" | "possibleUpside">
): TeamContinuity | undefined {
  const prior = previous?.producerPrioritySummary;
  if (!previous?.selectedEventId || !prior) return undefined;
  const ordinaryNeed = getRecommendedProducerPriority(nextEvent);
  const openNeed = !prior.approachFits && !prior.interrupted;
  const flexibleOpportunity = nextEvent.possibleUpside
    && (nextEvent.type === "inspiration" || nextEvent.type === "location");
  const shiftedPriority = openNeed && flexibleOpportunity && prior.recommendedId !== ordinaryNeed;
  return {
    previousEventId: previous.selectedEventId,
    previousPriorityId: prior.id,
    previousNeedId: prior.recommendedId,
    previousWasMatched: prior.approachFits,
    previousWasInterrupted: prior.interrupted,
    shiftedPriority,
    recommendedId: shiftedPriority ? prior.recommendedId : ordinaryNeed
  };
}

interface ContinuityCopy {
  readonly heading: string;
  readonly matched: (chosen: string) => string;
  readonly partial: (chosen: string, needed: string) => string;
  readonly interrupted: string;
  readonly shifted: (needed: string) => string;
}

export const TEAM_CONTINUITY_COPY = {
  en: {
    heading: "What the team remembers",
    matched: (chosen) => `Yesterday you followed through on ${chosen.toLowerCase()}. The team can build on that cooperation today.`,
    partial: (chosen, needed) => `Yesterday you chose ${chosen.toLowerCase()}, but the team still needed ${needed.toLowerCase()}. That conversation is unfinished.`,
    interrupted: "Yesterday's shoot stopped. The earlier decision is remembered, but no usable footage or bonus carries over from an interrupted day.",
    shifted: (needed) => `Before using today's creative opportunity, address the outstanding need: ${needed.toLowerCase()}. This changes which existing producer response helps most.`
  },
  nb: {
    heading: "Dette husker filmteamet",
    matched: (chosen) => `I går fulgte du opp ${chosen.toLowerCase()}. Teamet kan bygge videre på samarbeidet i dag.`,
    partial: (chosen, needed) => `I går valgte du ${chosen.toLowerCase()}, men teamet trengte fortsatt ${needed.toLowerCase()}. Samtalen er ikke ferdig.`,
    interrupted: "Opptakene stoppet i går. Teamet husker beslutningen, men ingen opptak eller bonus overføres fra en stanset dag.",
    shifted: (needed) => `Før dagens kreative mulighet kan utnyttes, må du følge opp behovet for ${needed.toLowerCase()}. Det endrer hvilket eksisterende produsentvalg som hjelper mest.`
  },
  fr: {
    heading: "Ce dont l'équipe se souvient",
    matched: (chosen) => `Hier, vous avez soutenu ${chosen.toLowerCase()}. L'équipe peut poursuivre cette coopération aujourd'hui.`,
    partial: (chosen, needed) => `Hier, vous avez choisi ${chosen.toLowerCase()}, mais l'équipe avait encore besoin de ${needed.toLowerCase()}. L'échange reste ouvert.`,
    interrupted: "Le tournage s'est arrêté hier. La décision reste en mémoire, sans prises utilisables ni bonus reporté.",
    shifted: (needed) => `Avant de saisir l'occasion créative du jour, répondez au besoin non résolu : ${needed.toLowerCase()}. Cela change le soutien de production le plus utile.`
  },
  pt: {
    heading: "O que a equipa recorda",
    matched: (chosen) => `Ontem apoiaste ${chosen.toLowerCase()}. A equipa pode continuar essa colaboração hoje.`,
    partial: (chosen, needed) => `Ontem escolheste ${chosen.toLowerCase()}, mas a equipa ainda precisava de ${needed.toLowerCase()}. A conversa ficou em aberto.`,
    interrupted: "A rodagem parou ontem. A decisão é recordada, mas não há tomadas utilizáveis nem bónus transitado.",
    shifted: (needed) => `Antes de aproveitar a oportunidade criativa, responde à necessidade pendente: ${needed.toLowerCase()}. Isso altera o apoio de produção mais útil.`
  }
} satisfies Record<FilmWorkLanguage, ContinuityCopy>;

export function describeTeamContinuity(language: FilmWorkLanguage, continuity: TeamContinuity): {
  readonly heading: string; readonly summary: string; readonly followUp?: string;
} {
  const copy = TEAM_CONTINUITY_COPY[language];
  const labels = PRODUCER_PRIORITY_COPY[language].options;
  const summary = continuity.previousWasInterrupted ? copy.interrupted
    : continuity.previousWasMatched ? copy.matched(labels[continuity.previousPriorityId].title)
    : copy.partial(labels[continuity.previousPriorityId].title, labels[continuity.previousNeedId].title);
  return {
    heading: copy.heading,
    summary,
    ...(continuity.shiftedPriority ? { followUp: copy.shifted(labels[continuity.recommendedId].title) } : {})
  };
}
