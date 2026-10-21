import type { ShootDay, ShootDayResult } from "../domain/shoot.js";

/** Player response to an on-set event. Costs scale with the actual day budget. */
export const SHOOT_STRATEGY_IDS = ["steady", "extra_takes", "fast_setup"] as const;
export type ShootStrategyId = (typeof SHOOT_STRATEGY_IDS)[number];

export interface ShootStrategyPreview {
  readonly qualityChange: number;
  readonly costChange: number;
  /** Extra days for an extended shoot; fast setup can instead recover one existing delay. */
  readonly extraDays: number;
}

export interface ShootStrategySummary {
  readonly id: ShootStrategyId;
  readonly costDelta: number;
  readonly takeQualityDelta: number;
  readonly delayDaysDelta: number;
}

export function previewShootStrategy(id: ShootStrategyId, plannedCost: number): ShootStrategyPreview {
  const budget = Math.max(0, plannedCost);
  switch (id) {
    case "steady": return { qualityChange: 0, costChange: 0, extraDays: 0 };
    case "extra_takes": return { qualityChange: 10, costChange: Math.round(budget * 0.12), extraDays: 1 };
    case "fast_setup": return { qualityChange: -7, costChange: -Math.round(budget * 0.08), extraDays: 0 };
  }
}

/**
 * Apply a player's response AFTER the production event is resolved, so the
 * actual shoot score, cost, and schedule (and thus the final film) all change.
 * Existing shoot days without a strategy retain their original calculations.
 */
export function applyShootStrategy(
  day: ShootDay,
  base: ShootDayResult,
  strategyId: ShootStrategyId
): { readonly result: ShootDayResult; readonly summary: ShootStrategySummary } {
  const preview = previewShootStrategy(strategyId, day.plannedCost);
  // No new usable takes can come from a day whose scenes were interrupted.
  const adjustedQuality = base.completedSceneIds.length === 0
    ? base.takeQuality
    : clamp(base.takeQuality + preview.qualityChange, 0, 100);
  const adjustedCost = Math.max(0, base.costSpent + preview.costChange);
  const adjustedDelay = strategyId === "fast_setup"
    ? Math.max(0, base.scheduleDeltaDays - 1)
    : base.scheduleDeltaDays + preview.extraDays;
  const result: ShootDayResult = {
    ...base,
    takeQuality: adjustedQuality,
    costSpent: adjustedCost,
    scheduleDeltaDays: adjustedDelay,
    notes: base.notes.map((note) => note.startsWith("The day added ")
      ? adjustedDelay > 0
        ? `The day added ${adjustedDelay} day${adjustedDelay === 1 ? "" : "s"} to the schedule.`
        : "The day added no schedule delay."
      : note)
  };
  return {
    result,
    summary: {
      id: strategyId,
      costDelta: adjustedCost - base.costSpent,
      takeQualityDelta: adjustedQuality - base.takeQuality,
      delayDaysDelta: adjustedDelay - base.scheduleDeltaDays
    }
  };
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}
