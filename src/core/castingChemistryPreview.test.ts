import assert from "node:assert/strict";
import { test } from "node:test";
import { asActorId } from "../domain/ids.js";
import type { Actor } from "../domain/crew.js";
import { calculateCastingChemistry } from "./calculateCastingChemistry.js";

const performer = (id: string, chemistryTags: readonly string[]) =>
  ({ id: asActorId(id), chemistryTags }) as Actor;

test("shared acting approaches create a stronger ensemble than mismatched approaches", () => {
  const compatible = calculateCastingChemistry([
    performer("liv", ["warm", "supportive", "listener"]),
    performer("erik", ["listener", "serious", "supportive"])
  ]);
  const uncertain = calculateCastingChemistry([
    performer("liv", ["warm", "supportive", "listener"]),
    performer("maya", ["explosive", "competitive", "instinctive"])
  ]);

  assert.equal(compatible.chemistryScore, 78);
  assert.deepEqual(compatible.sharedTags, ["listener", "supportive"]);
  assert.equal(compatible.tensionTags.length, 0);
  assert.equal(uncertain.chemistryScore, 38);
  assert.ok(compatible.chemistryScore > uncertain.chemistryScore);
});

test("live chemistry never invents a pairing with fewer than two unique actors", () => {
  const liv = performer("liv", ["listener", "supportive"]);
  assert.equal(calculateCastingChemistry([]).chemistryScore, 0);
  assert.equal(calculateCastingChemistry([liv]).chemistryScore, 50);
  assert.deepEqual(calculateCastingChemistry([liv, liv]), calculateCastingChemistry([liv]));
});

test("opposed acting approaches are visible as style tensions", () => {
  const result = calculateCastingChemistry([
    performer("improviser", ["improviser", "warm"]),
    performer("planner", ["planner", "detached"])
  ]);
  assert.equal(result.chemistryScore, 18);
  assert.deepEqual(result.tensionTags, ["improviser/planner", "warm/detached"]);
});
