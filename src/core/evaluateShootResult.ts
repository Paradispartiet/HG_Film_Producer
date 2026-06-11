import type { FilmProject } from "../domain/film.js";
import type {
  ProductionSchedule,
  ShootDayResult,
  ShootResultEvaluation
} from "../domain/shoot.js";

/** Summarize schedule, budget, quality, and morale into an explainable shoot score. */
export function evaluateShootResult(
  project: FilmProject,
  schedule: ProductionSchedule,
  results: readonly ShootDayResult[]
): ShootResultEvaluation {
  if (schedule.projectId !== project.id) {
    throw new Error(`Production schedule does not belong to project "${project.id}".`);
  }

  const scheduleDayIds = new Set(schedule.shootDays.map((day) => day.id));
  for (const result of results) {
    if (!scheduleDayIds.has(result.shootDayId)) {
      throw new Error(`Shoot result "${result.shootDayId}" is not part of schedule "${schedule.id}".`);
    }
  }

  const completedDays = results.filter((result) => result.completedSceneIds.length > 0).length;
  const delayedDays = results.filter(
    (result) => result.scheduleDeltaDays > 0 || result.delayedSceneIds.length > 0
  ).length;
  const totalDelay = results.reduce((sum, result) => sum + result.scheduleDeltaDays, 0);
  const totalCostSpent = Math.round(results.reduce((sum, result) => sum + result.costSpent, 0));
  const averageTakeQuality = average(results.map((result) => result.takeQuality));
  const scheduleHealth = schedule.totalPlannedDays === 0
    ? 100
    : clampScore(100 - (totalDelay / schedule.totalPlannedDays) * 55 - delayedDays * 5);
  const budgetForResolvedDays = schedule.totalPlannedDays === 0
    ? 0
    : (schedule.plannedBudget / schedule.totalPlannedDays) * results.length
      + schedule.contingencyBudget;
  const budgetHealth = budgetForResolvedDays <= 0
    ? (totalCostSpent === 0 ? 100 : 0)
    : clampScore(100 - Math.max(0, (totalCostSpent - budgetForResolvedDays) / budgetForResolvedDays) * 100);
  const completionRate = results.length === 0 ? 0 : completedDays / results.length;
  const productionMorale = results.length === 0
    ? 0
    : clampScore(averageTakeQuality * 0.55 + scheduleHealth * 0.25 + completionRate * 20);
  const overall = results.length === 0
    ? 0
    : clampScore(
      averageTakeQuality * 0.35
        + scheduleHealth * 0.25
        + budgetHealth * 0.2
        + productionMorale * 0.2
    );

  const notes = [
    `${completedDays} of ${results.length} resolved shoot days completed scenes.`,
    delayedDays > 0
      ? `${delayedDays} resolved shoot day${delayedDays === 1 ? "" : "s"} carried delay pressure.`
      : "The resolved shoot days stayed on schedule.",
    totalCostSpent > budgetForResolvedDays
      ? "Resolved production costs exceeded the available day budget and contingency."
      : "Resolved production costs remain inside the available day budget and contingency."
  ];

  return {
    projectId: project.id,
    completedDays,
    delayedDays,
    totalCostSpent,
    averageTakeQuality,
    scheduleHealth,
    budgetHealth,
    productionMorale,
    overall,
    notes
  };
}

function average(values: readonly number[]): number {
  return values.length === 0 ? 0 : Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function clampScore(value: number): number {
  return Math.round(Math.min(100, Math.max(0, value)));
}
