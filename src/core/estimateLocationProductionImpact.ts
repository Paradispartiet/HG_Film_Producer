import type { Location, LocationProductionImpact } from "../domain/location.js";

/**
 * Convert raw location modifiers into small gameplay bonuses. The source
 * ratings remain visible as logistics risk, while creative ratings become
 * 0 .. 20 bonuses so they can later be combined with other production systems.
 */
export function estimateLocationProductionImpact(location: Location): LocationProductionImpact {
  const { cost, logistics, authenticity, visualValue, historicalValue } =
    location.productionModifiers;

  return {
    locationId: location.id,
    budgetMultiplier: round(cost, 2),
    logisticsRisk: clamp(logistics),
    authenticityBonus: toBonus(authenticity),
    visualBonus: toBonus(visualValue),
    historyBonus: toBonus(historicalValue),
    note: `${location.name} has a ${formatRisk(logistics)} logistics risk and a ${cost.toFixed(2)}x location cost multiplier.`
  };
}

function toBonus(value: number): number {
  return Math.round(clamp(value) / 5);
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function formatRisk(logistics: number): string {
  if (logistics >= 70) return "high";
  if (logistics >= 40) return "moderate";
  return "low";
}
