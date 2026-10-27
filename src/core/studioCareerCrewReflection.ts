import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { ProducerPrioritySummary } from "./applyProducerPriority.js";
import { PRODUCER_PRIORITY_COPY } from "./studioCareerProducerPriorityCopy.js";
import { ON_SET_DIALOGUE_VIEW_COPY } from "./studioCareerDialogueViewCopy.js";

/** Debrief from the *saved* producer outcome, not an extra score or guess. */
export function getUnmetProducerSupport(
  language: FilmWorkLanguage, summary: ProducerPrioritySummary | undefined
): { readonly id: ProducerPrioritySummary["recommendedId"]; readonly heading: string; readonly explanation: string } | undefined {
  if (!summary || summary.interrupted || summary.approachFits || summary.id === summary.recommendedId) return undefined;
  const needed = PRODUCER_PRIORITY_COPY[language].options[summary.recommendedId];
  return {
    id: summary.recommendedId,
    heading: `${ON_SET_DIALOGUE_VIEW_COPY[language].missingNeed}: ${needed.title}`,
    explanation: needed.description
  };
}
