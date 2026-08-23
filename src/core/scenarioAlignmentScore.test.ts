import test from "node:test";
import assert from "node:assert/strict";
import { assessScenarioAlignment } from "../ui/data/scenarioAlignmentScore.js";

test("assessScenarioAlignment handles empty target lists without exposing a score", () => {
  assert.deepEqual(assessScenarioAlignment({ selectedTargetIds: ["target-1"], totalTargets: 0 }), {
    selectedCount: 0,
    totalCount: 0,
    assessment: "reconsider"
  });
});

test("assessScenarioAlignment asks for reconsideration when no targets are selected", () => {
  assert.deepEqual(assessScenarioAlignment({ selectedTargetIds: [], totalTargets: 10 }), {
    selectedCount: 0,
    totalCount: 10,
    assessment: "reconsider"
  });
});

test("assessScenarioAlignment keeps sparse selections qualitative", () => {
  assert.equal(assessScenarioAlignment({ selectedTargetIds: ["a", "b", "c"], totalTargets: 10 }).assessment, "reconsider");
});

test("assessScenarioAlignment marks a meaningful subset as partial", () => {
  assert.equal(assessScenarioAlignment({ selectedTargetIds: ["a", "b", "c", "d"], totalTargets: 10 }).assessment, "partial");
});

test("assessScenarioAlignment marks broad method identification as clear", () => {
  assert.equal(assessScenarioAlignment({ selectedTargetIds: ["a", "b", "c", "d", "e", "f", "g"], totalTargets: 10 }).assessment, "clear");
});

test("assessScenarioAlignment caps selectedCount at the available target count", () => {
  assert.deepEqual(assessScenarioAlignment({ selectedTargetIds: ["a", "b", "c"], totalTargets: 2 }), {
    selectedCount: 2,
    totalCount: 2,
    assessment: "clear"
  });
});
