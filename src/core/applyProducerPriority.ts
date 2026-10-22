import type { ProductionEvent, ShootDayResult } from "../domain/shoot.js";

/**
 * A producer supports the director's creative intentions; the player is not
 * choosing camera angles or directing performances. This choice represents
 * where production leadership puts its attention during the shoot.
 */
export const PRODUCER_PRIORITY_IDS = ["story_clarity", "performance_trust", "crew_coordination"] as const;
export type ProducerPriorityId = (typeof PRODUCER_PRIORITY_IDS)[number];
type EventContext = Pick<ProductionEvent, "type" | "possibleUpside">;

export interface ProducerPrioritySummary {
  readonly id: ProducerPriorityId;
  readonly recommendedId: ProducerPriorityId;
  readonly approachFits: boolean;
  readonly takeQualityDelta: number;
  readonly interrupted: boolean;
}

/** The most useful department support for a specific production obstacle. */
export function getRecommendedProducerPriority(event: EventContext): ProducerPriorityId {
  if (event.type === "conflict" || event.type === "performance") return "performance_trust";
  if (event.type === "inspiration" || (event.type === "location" && event.possibleUpside)) return "story_clarity";
  return "crew_coordination";
}

/** Deterministic, zero-cost creative contribution. A stopped shoot cannot gain finished takes. */
export function applyProducerPriority(
  base: ShootDayResult,
  event: EventContext,
  id: ProducerPriorityId,
  recommendationOverride?: ProducerPriorityId
): { readonly result: ShootDayResult; readonly summary: ProducerPrioritySummary } {
  if (!PRODUCER_PRIORITY_IDS.includes(id)) throw new Error(`Unknown producer priority: ${id}`);
  if (recommendationOverride && !PRODUCER_PRIORITY_IDS.includes(recommendationOverride)) throw new Error(`Unknown recommendation: ${recommendationOverride}`);
  const recommendedId = recommendationOverride ?? getRecommendedProducerPriority(event);
  const approachFits = id === recommendedId;
  const interrupted = base.completedSceneIds.length === 0;
  const takeQuality = interrupted ? base.takeQuality : Math.min(100, base.takeQuality + (approachFits ? 8 : 2));
  return {
    result: { ...base, takeQuality },
    summary: { id, recommendedId, approachFits, takeQualityDelta: takeQuality - base.takeQuality, interrupted }
  };
}
