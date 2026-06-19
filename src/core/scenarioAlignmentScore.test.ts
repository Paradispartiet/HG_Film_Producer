import test from "node:test";
import assert from "node:assert/strict";
import { calculateScenarioAlignmentScore } from "../ui/data/scenarioAlignmentScore.js";

test("calculateScenarioAlignmentScore handles empty target lists", () => {
  assert.deepEqual(calculateScenarioAlignmentScore({ selectedTargetIds: ["target-1"], totalTargets: 0 }), {
    selectedCount: 1,
    totalCount: 0,
    percentage: 0,
    tier: "none",
    label: "No classic alignment yet"
  });
});

test("calculateScenarioAlignmentScore handles no selected targets", () => {
  assert.deepEqual(calculateScenarioAlignmentScore({ selectedTargetIds: [], totalTargets: 10 }), {
    selectedCount: 0,
    totalCount: 10,
    percentage: 0,
    tier: "none",
    label: "No classic alignment yet"
  });
});

test("calculateScenarioAlignmentScore marks loose alignment below 35 percent", () => {
  assert.equal(calculateScenarioAlignmentScore({ selectedTargetIds: ["a", "b", "c"], totalTargets: 10 }).tier, "loose");
});

test("calculateScenarioAlignmentScore marks focused alignment from 35 to 69 percent", () => {
  assert.equal(calculateScenarioAlignmentScore({ selectedTargetIds: ["a", "b", "c", "d"], totalTargets: 10 }).tier, "focused");
});

test("calculateScenarioAlignmentScore marks strong alignment at 70 percent and above", () => {
  assert.equal(calculateScenarioAlignmentScore({ selectedTargetIds: ["a", "b", "c", "d", "e", "f", "g"], totalTargets: 10 }).tier, "strong");
});
