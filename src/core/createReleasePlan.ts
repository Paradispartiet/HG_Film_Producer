import type { FilmProject, FilmScale } from "../domain/film.js";
import { asReleasePlanId } from "../domain/ids.js";
import type { ReleasePlan, ReleaseStrategy } from "../domain/release.js";

const BASE_MARKETING_BY_SCALE: Record<FilmScale, number> = {
  micro: 15_000,
  indie: 75_000,
  mid_budget: 450_000,
  studio: 2_500_000,
  prestige: 1_200_000
};

/** Build an immutable first-pass plan using the strategy's primary channel. */
export function createReleasePlan(project: FilmProject, strategy: ReleaseStrategy): ReleasePlan {
  const marketingBudget = Math.round(BASE_MARKETING_BY_SCALE[project.scale] * strategy.costMultiplier);

  return {
    id: asReleasePlanId(`release_plan_${project.id}_${strategy.id}`),
    projectId: project.id,
    strategyId: strategy.id,
    targetChannels: [strategy.channel],
    marketingBudget,
    festivalSubmissionIds: [],
    plannedTerritories: ["domestic"],
    notes: [
      `${strategy.title} starts on ${strategy.channel.replaceAll("_", " ")}.`,
      `Marketing uses a scale baseline adjusted by the strategy's ${strategy.costMultiplier.toFixed(2)}x cost multiplier.`
    ]
  };
}
