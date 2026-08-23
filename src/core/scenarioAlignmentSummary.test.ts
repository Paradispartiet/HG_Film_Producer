import test from "node:test";
import assert from "node:assert/strict";
import { getScenarioAlignmentSummary } from "../ui/data/scenarioAlignmentSummary.js";
import type { ScenarioAlignmentAssessment, ScenarioAlignmentFeedback } from "../ui/data/scenarioAlignmentScore.js";

function feedback(assessment: ScenarioAlignmentAssessment): ScenarioAlignmentFeedback {
  return { selectedCount: 0, totalCount: 0, assessment };
}

test("getScenarioAlignmentSummary guides reconsideration without score language", () => {
  assert.equal(
    getScenarioAlignmentSummary(feedback("reconsider")),
    "Compare the selected approaches with the documented film method and revisit the explanations that do not fit yet."
  );
});

test("getScenarioAlignmentSummary describes a partial method connection", () => {
  assert.equal(
    getScenarioAlignmentSummary(feedback("partial")),
    "Some selected approaches connect to the documented film method. Compare the remaining approaches to see where the film works differently."
  );
});

test("getScenarioAlignmentSummary describes a clear method connection", () => {
  assert.equal(
    getScenarioAlignmentSummary(feedback("clear")),
    "The selected approaches connect closely to the documented film method. Use the explanations to identify why those methods fit this film."
  );
});
