import assert from "node:assert/strict";
import test from "node:test";

import { applyProducerPriority, getRecommendedProducerPriority, PRODUCER_PRIORITY_IDS } from "./applyProducerPriority.js";
import type { ShootDayResult } from "../domain/shoot.js";

const base: ShootDayResult = {
  shootDayId: "day_1" as ShootDayResult["shootDayId"],
  completedSceneIds: ["scene_1" as ShootDayResult["completedSceneIds"][number]],
  delayedSceneIds: [],
  costSpent: 1000,
  takeQuality: 70,
  scheduleDeltaDays: 1,
  notes: ["Existing event consequence"]
};

test("all producer priorities are playable and film-craft feedback follows the obstacle", () => {
  assert.equal(PRODUCER_PRIORITY_IDS.length, 3);
  const conflict = { type: "conflict", possibleUpside: false } as const;
  const fitting = applyProducerPriority(base, conflict, "performance_trust");
  const partial = applyProducerPriority(base, conflict, "story_clarity");
  assert.equal(getRecommendedProducerPriority(conflict), "performance_trust");
  assert.equal(fitting.result.takeQuality, 78);
  assert.equal(partial.result.takeQuality, 72);
  assert.equal(fitting.summary.approachFits, true);
  assert.equal(partial.summary.recommendedId, "performance_trust");
  assert.equal(fitting.result.costSpent, base.costSpent);
  assert.equal(fitting.result.scheduleDeltaDays, base.scheduleDeltaDays);
  assert.deepEqual(base.notes, ["Existing event consequence"]);
});

test("producing cannot turn halted shooting into usable takes", () => {
  const halted = { ...base, completedSceneIds: [], delayedSceneIds: base.completedSceneIds };
  const resolved = applyProducerPriority(halted, { type: "safety", possibleUpside: false }, "crew_coordination");
  assert.equal(resolved.result.takeQuality, halted.takeQuality);
  assert.equal(resolved.summary.takeQualityDelta, 0);
  assert.equal(resolved.summary.interrupted, true);
  assert.deepEqual(resolved.result.completedSceneIds, []);
});

test("quality stays within 100 and event types imply differing support priorities", () => {
  assert.equal(getRecommendedProducerPriority({ type: "inspiration", possibleUpside: true }), "story_clarity");
  assert.equal(getRecommendedProducerPriority({ type: "location", possibleUpside: false }), "crew_coordination");
  assert.equal(getRecommendedProducerPriority({ type: "location", possibleUpside: true }), "story_clarity");
  const resolved = applyProducerPriority({ ...base, takeQuality: 98 }, { type: "technical", possibleUpside: false }, "crew_coordination");
  assert.equal(resolved.result.takeQuality, 100);
  assert.equal(resolved.summary.takeQualityDelta, 2);
});
