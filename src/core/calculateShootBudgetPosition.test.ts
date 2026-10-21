import assert from "node:assert/strict";
import test from "node:test";
import type { ProductionSchedule, ShootDayResult } from "../domain/shoot.js";
import { calculateShootBudgetPosition } from "./calculateShootBudgetPosition.js";
import { SHOOT_BUDGET_MONITOR_COPY } from "./studioCareerShootBudgetCopy.js";

const schedule = {
  plannedBudget: 900, contingencyBudget: 100, totalPlannedDays: 3,
  shootDays: [
    { id: "day1", plannedCost: 300 },
    { id: "day2", plannedCost: 300 },
    { id: "day3", plannedCost: 300 }
  ]
} as unknown as ProductionSchedule;

function day(id: string, costSpent: number): ShootDayResult {
  return { shootDayId: id, costSpent } as ShootDayResult;
}

test("before filming, all planned day costs are protected and reserve is available", () => {
  const result = calculateShootBudgetPosition(schedule, []);
  assert.equal(result.shootingAllocation, 1000);
  assert.equal(result.actual.spent, 0);
  assert.equal(result.actual.remaining, 1000);
  assert.equal(result.actual.unfilmedPlannedCost, 900);
  assert.equal(result.actual.reserveHeadroom, 100);
  assert.equal(result.actual.risk, "healthy");
  assert.equal(result.projected, null);
});

test("the preview uses real resolved-day cost and exposes tight and over-budget risks", () => {
  const done = [day("day1", 330)];
  const current = calculateShootBudgetPosition(schedule, done);
  const extraTakes = calculateShootBudgetPosition(schedule, done, day("day2", 345));
  const costlyEvent = calculateShootBudgetPosition(schedule, done, day("day2", 400));
  assert.equal(current.actual.spent, 330);
  assert.equal(current.actual.remaining, 670);
  assert.equal(current.actual.reserveHeadroom, 70);
  assert.equal(current.actual.risk, "healthy");
  assert.equal(extraTakes.projectedDayCost, 345);
  assert.equal(extraTakes.projected?.reserveHeadroom, 25);
  assert.equal(extraTakes.projected?.risk, "tight");
  assert.equal(costlyEvent.projected?.reserveHeadroom, -30);
  assert.equal(costlyEvent.projected?.risk, "over");
  assert.deepEqual(done, [day("day1", 330)], "Preview never mutates recorded costs");
});

test("the actual ledger reflects finished costs and resets no saved film values", () => {
  const completed = calculateShootBudgetPosition(schedule, [day("day1", 350), day("day2", 340), day("day3", 320)]);
  assert.equal(completed.actual.spent, 1010);
  assert.equal(completed.actual.remaining, -10);
  assert.equal(completed.actual.unfilmedPlannedCost, 0);
  assert.equal(completed.actual.reserveHeadroom, -10);
  assert.equal(completed.actual.risk, "over");
  assert.throws(() => calculateShootBudgetPosition(schedule, [day("day1", 300), day("day1", 300)]), /duplicate/);
  assert.throws(() => calculateShootBudgetPosition(schedule, [], day("unknown", 50)), /next unplayed/);
});

test("every supported language explains the estimate and its risk levels", () => {
  for (const language of ["en", "nb", "fr", "pt"] as const) {
    const copy = SHOOT_BUDGET_MONITOR_COPY[language];
    assert.ok(copy.heading.length > 10);
    assert.ok(copy.intro.length > 20);
    assert.ok(copy.assumption.length > 20);
    for (const risk of ["healthy", "tight", "over"] as const) {
      assert.ok(copy.risk[risk].length > 3);
      assert.ok(copy.warning[risk].length > 20);
    }
  }
});
