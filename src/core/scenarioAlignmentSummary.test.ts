import test from "node:test";
import assert from "node:assert/strict";
import { getScenarioAlignmentSummary } from "../ui/data/scenarioAlignmentSummary.js";
import type { ScenarioAlignmentScore } from "../ui/data/scenarioAlignmentScore.js";

function score(tier: ScenarioAlignmentScore["tier"]): ScenarioAlignmentScore {
  return { selectedCount: 0, totalCount: 0, percentage: 0, tier, label: tier };
}

test("getScenarioAlignmentSummary describes no scenario target commitment", () => {
  assert.equal(getScenarioAlignmentSummary(score("none")), "The production did not commit to the classic scenario targets.");
});

test("getScenarioAlignmentSummary describes loose scenario alignment", () => {
  assert.equal(getScenarioAlignmentSummary(score("loose")), "The film borrows from the classic brief, but the direction is still broad.");
});

test("getScenarioAlignmentSummary describes focused scenario alignment", () => {
  assert.equal(getScenarioAlignmentSummary(score("focused")), "The production has a clear relationship to the classic scenario brief.");
});

test("getScenarioAlignmentSummary describes strong scenario alignment", () => {
  assert.equal(getScenarioAlignmentSummary(score("strong")), "The production strongly follows the classic scenario’s craft direction.");
});
