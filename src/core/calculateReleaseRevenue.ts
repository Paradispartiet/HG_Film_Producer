import type { FilmProject } from "../domain/film.js";
import type {
  AudienceResult,
  ReleaseChannel,
  ReleasePlan,
  ReleaseStrategy,
  RevenueResult
} from "../domain/release.js";

const VIEWER_VALUE: Record<ReleaseChannel, number> = {
  festival: 8,
  theatrical_limited: 11,
  theatrical_wide: 12,
  streaming: 4.5,
  tv: 3.5,
  educational: 6,
  direct_digital: 7
};

const DISTRIBUTION_RATE: Record<ReleaseChannel, number> = {
  festival: 0.12,
  theatrical_limited: 0.28,
  theatrical_wide: 0.38,
  streaming: 0.16,
  tv: 0.14,
  educational: 0.1,
  direct_digital: 0.12
};

/** Convert deterministic audience estimates into a transparent project P&L. */
export function calculateReleaseRevenue(
  project: FilmProject,
  plan: ReleasePlan,
  strategy: ReleaseStrategy,
  audiences: readonly AudienceResult[]
): RevenueResult {
  if (plan.projectId !== project.id || plan.strategyId !== strategy.id) {
    throw new Error(`Release plan does not match project "${project.id}" and strategy "${strategy.id}".`);
  }

  const totalViewers = audiences.reduce((sum, result) => sum + result.estimatedViewers, 0);
  const grossRevenue = Math.round(totalViewers * VIEWER_VALUE[strategy.channel]);
  const marketingSpend = plan.marketingBudget;
  const distributionCost = Math.round(grossRevenue * DISTRIBUTION_RATE[strategy.channel]);
  const totalInvestment = project.budget + marketingSpend + distributionCost;
  const netRevenue = grossRevenue - totalInvestment;
  const roi = totalInvestment === 0 ? 0 : roundTwo(netRevenue / totalInvestment);

  return {
    grossRevenue,
    marketingSpend,
    distributionCost,
    netRevenue,
    breakEven: netRevenue >= 0,
    roi,
    notes: [
      `${totalViewers.toLocaleString("en-US")} estimated viewers at ${VIEWER_VALUE[strategy.channel].toFixed(2)} gross value per viewer.`,
      `Net revenue subtracts the production budget, marketing, and a ${Math.round(DISTRIBUTION_RATE[strategy.channel] * 100)}% distribution share.`
    ]
  };
}

function roundTwo(value: number): number {
  return Math.round(value * 100) / 100;
}
