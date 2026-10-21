import type { ProductionSchedule, ShootDayResult } from "../domain/shoot.js";

export type ShootBudgetRisk = "healthy" | "tight" | "over";

export interface ShootBudgetSnapshot {
  /** Actual costs from resolved shooting days, never estimated spend. */
  readonly spent: number;
  /** Shoot allocation minus actual incurred spend. May be negative. */
  readonly remaining: number;
  /** The cost of all still-unresolved days at their original plan. */
  readonly unfilmedPlannedCost: number;
  /** Amount left after paying the planned cost of unfilmed days. May be negative. */
  readonly reserveHeadroom: number;
  readonly risk: ShootBudgetRisk;
}

export interface ShootBudgetPosition {
  /** Planned shoot days plus the original contingency, not studio cash or total film P&L. */
  readonly shootingAllocation: number;
  readonly initialContingency: number;
  readonly actual: ShootBudgetSnapshot;
  /** Deterministic outcome only for a selected event and production response. */
  readonly projected: ShootBudgetSnapshot | null;
  readonly projectedDayCost: number | null;
}

/**
 * Display the SAME costs recorded by the shoot engine.
 * Future unplayed days are only assumed to match the original schedule.
 * No charges, random forecasts, saved fields or film scores are introduced.
 */
export function calculateShootBudgetPosition(
  schedule: ProductionSchedule,
  resolvedDays: readonly ShootDayResult[],
  nextDay?: ShootDayResult
): ShootBudgetPosition {
  const dayCosts = new Map(schedule.shootDays.map(day => [day.id, day.plannedCost]));
  const spent = new Map<string, number>();
  for (const day of resolvedDays) {
    if (!dayCosts.has(day.shootDayId) || spent.has(day.shootDayId)) {
      throw new Error("Budget position received an unknown or duplicate shoot day.");
    }
    spent.set(day.shootDayId, day.costSpent);
  }
  const allocation = schedule.plannedBudget + schedule.contingencyBudget;

  function snapshot(known: ReadonlyMap<string, number>): ShootBudgetSnapshot {
    const totalSpent = [...known.values()].reduce((sum, cost) => sum + cost, 0);
    const unfilmedPlannedCost = schedule.shootDays
      .filter(day => !known.has(day.id))
      .reduce((sum, day) => sum + day.plannedCost, 0);
    const reserveHeadroom = allocation - totalSpent - unfilmedPlannedCost;
    return {
      spent: totalSpent,
      remaining: allocation - totalSpent,
      unfilmedPlannedCost,
      reserveHeadroom,
      risk: reserveHeadroom < 0
        ? "over"
        : reserveHeadroom <= schedule.contingencyBudget * 0.35
          ? "tight"
          : "healthy"
    };
  }

  if (nextDay && (!dayCosts.has(nextDay.shootDayId) || spent.has(nextDay.shootDayId))) {
    throw new Error("Budget preview must use the next unplayed shoot day.");
  }
  const projected = nextDay
    ? snapshot(new Map([...spent, [nextDay.shootDayId, nextDay.costSpent]]))
    : null;
  return {
    shootingAllocation: allocation,
    initialContingency: schedule.contingencyBudget,
    actual: snapshot(spent),
    projected,
    projectedDayCost: nextDay?.costSpent ?? null
  };
}
