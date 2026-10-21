import assert from "node:assert/strict";
import test from "node:test";
import { asShootDayId } from "../domain/ids.js";
import type { ShootDay, ShootDayResult } from "../domain/shoot.js";
import { applyShootStrategy, previewShootStrategy } from "./applyShootStrategy.js";

const day: ShootDay = {
  id: asShootDayId("test_day"), dayNumber: 1, sceneIds: [], locationId: null,
  plannedCost: 100_000, status: "planned", eventIds: [], notes: []
};
const base: ShootDayResult = {
  shootDayId: day.id, completedSceneIds: [ ] , delayedSceneIds: [],
  costSpent: 104_000, takeQuality: 78, scheduleDeltaDays: 1, notes: []
};
const completed: ShootDayResult = { ...base, completedSceneIds: ["scene_1" as never] };

test("all three shoot responses lead to distinct cost, take and time tradeoffs", () => {
  const steady = applyShootStrategy(day, completed, "steady");
  const takes = applyShootStrategy(day, completed, "extra_takes");
  const fast = applyShootStrategy(day, completed, "fast_setup");

  assert.deepEqual(steady.result, completed);
  assert.equal(takes.result.takeQuality, 88);
  assert.equal(takes.result.costSpent, 116_000);
  assert.equal(takes.result.scheduleDeltaDays, 2);
  assert.equal(takes.summary.costDelta, 12_000);
  assert.equal(takes.summary.delayDaysDelta, 1);
  assert.equal(fast.result.takeQuality, 71);
  assert.equal(fast.result.costSpent, 96_000);
  assert.equal(fast.result.scheduleDeltaDays, 0);
  assert.equal(fast.summary.delayDaysDelta, -1);
  assert.deepEqual(completed, { ...base, completedSceneIds: ["scene_1"] });
});

test("shoot responses respect score caps, zero cost, and nonnegative delays", () => {
  const alreadyExcellent = applyShootStrategy(day, { ...completed, takeQuality: 97, scheduleDeltaDays: 0 }, "extra_takes");
  assert.equal(alreadyExcellent.result.takeQuality, 100);
  assert.equal(alreadyExcellent.summary.takeQualityDelta, 3);

  const rushed = applyShootStrategy(day, { ...completed, costSpent: 4_000, scheduleDeltaDays: 0 }, "fast_setup");
  assert.equal(rushed.result.costSpent, 0);
  assert.equal(rushed.summary.costDelta, -4_000);
  assert.equal(rushed.result.scheduleDeltaDays, 0);
  assert.equal(rushed.summary.delayDaysDelta, 0);

  assert.equal(previewShootStrategy("extra_takes", 100_000).costChange, 12_000);
  assert.equal(previewShootStrategy("fast_setup", 100_000).costChange, -8_000);
});

test("interrupted scenes cannot gain take quality from extra takes", () => {
  const stopped = applyShootStrategy(day, base, "extra_takes");
  assert.equal(stopped.result.takeQuality, base.takeQuality);
  assert.equal(stopped.summary.takeQualityDelta, 0);
  assert.equal(stopped.result.costSpent, 116_000);
});
