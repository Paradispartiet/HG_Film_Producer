import assert from "node:assert/strict";
import test from "node:test";

import {
  getProductionCaseLearningHint,
  getProductionCaseLearningNextAction,
  getProductionCaseLearningReport,
  getProductionCaseLearningStatus,
} from "./productionCaseLearning.js";

const missions = [
  {
    id: "screenplay",
    phase: "screenplay",
    title: "Screenplay",
    choices: [
      { id: "screenplay-match", label: "Film-specific structure", quality: "match" },
      { id: "screenplay-partial", label: "Related structure", quality: "partial" },
      { id: "screenplay-miss", label: "Different structure", quality: "miss" },
    ],
  },
  {
    id: "image",
    phase: "cinematography",
    title: "Image",
    choices: [
      { id: "image-match", label: "Film-specific image", quality: "match" },
      { id: "image-partial", label: "Related image", quality: "partial" },
      { id: "image-miss", label: "Different image", quality: "miss" },
    ],
  },
] as const;

test("learning status tracks only not started, in progress, and completed", () => {
  assert.equal(getProductionCaseLearningStatus(missions, { completedMissionIds: [] }).status, "not_started");
  assert.equal(getProductionCaseLearningStatus(missions, {
    completedMissionIds: ["screenplay"],
    selectedChoicesByMissionId: { screenplay: "screenplay-match" },
  }).status, "in_progress");
  assert.equal(getProductionCaseLearningStatus(missions, {
    completedMissionIds: ["screenplay", "image"],
    selectedChoicesByMissionId: { screenplay: "screenplay-match", image: "image-partial" },
  }).status, "completed");
});

test("learning hints use qualities for explanation without calculating points", () => {
  assert.equal(getProductionCaseLearningHint(missions, { selectedChoicesByMissionId: {} })?.hintType, "choose");
  assert.equal(getProductionCaseLearningHint(missions, {
    selectedChoicesByMissionId: { screenplay: "screenplay-miss", image: "image-match" },
  })?.hintType, "revisit");
  assert.equal(getProductionCaseLearningHint(missions, {
    selectedChoicesByMissionId: { screenplay: "screenplay-partial", image: "image-match" },
  })?.hintType, "compare");
});

test("next action guides study rather than score improvement", () => {
  const choose = getProductionCaseLearningNextAction(missions, { completedMissionIds: [] });
  assert.equal(choose?.actionType, "choose");

  const complete = getProductionCaseLearningNextAction(missions, {
    completedMissionIds: [],
    selectedChoicesByMissionId: { screenplay: "screenplay-match", image: "image-match" },
  });
  assert.equal(complete?.actionType, "complete");

  const review = getProductionCaseLearningNextAction(missions, {
    completedMissionIds: ["screenplay", "image"],
    selectedChoicesByMissionId: { screenplay: "screenplay-partial", image: "image-match" },
  });
  assert.equal(review?.actionType, "review");
  assert.doesNotMatch(review?.description ?? "", /score|points|tier/i);
});

test("completed report groups understanding without score or rank fields", () => {
  const report = getProductionCaseLearningReport(missions, {
    completedMissionIds: ["screenplay", "image"],
    selectedChoicesByMissionId: { screenplay: "screenplay-match", image: "image-partial" },
  });

  assert.ok(report);
  assert.equal(report.clearPhases.length, 1);
  assert.equal(report.developingPhases.length, 1);
  assert.equal(report.revisitPhases.length, 0);
  assert.equal("score" in report, false);
  assert.equal("resultTier" in report, false);
});
