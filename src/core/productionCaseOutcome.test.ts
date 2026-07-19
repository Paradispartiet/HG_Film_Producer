import assert from "node:assert/strict";
import test from "node:test";

import {
  applyProductionCaseOutcomeToReport,
  getProductionCaseConstrainedLibraryStatus,
  getProductionCaseOutcome,
} from "./productionCaseOutcome.js";
import type { ProductionCaseReport } from "./productionCaseProgress.js";

const completeMissions = Array.from({ length: 6 }, (_, index) => ({
  id: `phase-${index}`,
  choices: [
    { id: `case-choice-phase-${index}-match-1`, quality: "match" },
    { id: `case-choice-phase-${index}-match-2`, quality: "match" },
    { id: `case-choice-phase-${index}-partial`, quality: "partial" },
    { id: `case-choice-phase-${index}-miss`, quality: "miss" },
  ],
}));

function createProgress(choiceSuffix: "match-1" | "match-2" | "partial" | "miss") {
  return {
    completedMissionIds: completeMissions.map((mission) => mission.id),
    selectedChoicesByMissionId: Object.fromEntries(
      completeMissions.map((mission, index) => [
        mission.id,
        `case-choice-phase-${index}-${choiceSuffix}`,
      ]),
    ),
  };
}

const auteurReport: ProductionCaseReport = {
  completedCount: 6,
  totalMissions: 6,
  score: 12,
  maxScore: 12,
  resultTier: "auteur",
  matchedPhases: [],
  weakPhases: [],
  improvementHint: undefined,
  learningSummary: "Strong craft understanding.",
};

test("on-track and strained productions keep the full craft tier", () => {
  assert.deepEqual(
    getProductionCaseOutcome("auteur", "on_track"),
    {
      craftTier: "auteur",
      finalTier: "auteur",
      productionStatus: "on_track",
      tierCapped: false,
      label: "Production delivered",
      description: "The production stayed inside both budget and schedule, so the final result keeps the full craft tier.",
    },
  );

  const strained = getProductionCaseOutcome("auteur", "strained");
  assert.equal(strained.finalTier, "auteur");
  assert.equal(strained.tierCapped, false);
  assert.equal(strained.label, "Delivered under strain");
});

test("single-resource overruns cap an auteur craft result at producer", () => {
  const overBudget = getProductionCaseOutcome("auteur", "over_budget");
  const overSchedule = getProductionCaseOutcome("auteur", "over_schedule");

  assert.equal(overBudget.finalTier, "producer");
  assert.equal(overBudget.tierCapped, true);
  assert.match(overBudget.description, /caps the final producer result at Producer/);

  assert.equal(overSchedule.finalTier, "producer");
  assert.equal(overSchedule.tierCapped, true);
  assert.match(overSchedule.description, /exceeding the schedule/);
});

test("overextended production caps any stronger completed result at assistant", () => {
  const outcome = getProductionCaseOutcome("auteur", "overextended");

  assert.equal(outcome.finalTier, "assistant");
  assert.equal(outcome.tierCapped, true);
  assert.equal(outcome.label, "Production collapse · Assistant cap");
});

test("in-progress and already-lower results are not promoted or rewritten", () => {
  assert.equal(getProductionCaseOutcome("in_progress", "overextended").finalTier, "in_progress");
  assert.equal(getProductionCaseOutcome("not_started", "over_budget").finalTier, "not_started");
  assert.equal(getProductionCaseOutcome("assistant", "over_budget").finalTier, "assistant");
  assert.equal(getProductionCaseOutcome("producer", "over_schedule").finalTier, "producer");
});

test("constrained reports preserve craft evidence and apply the producer tier cap", () => {
  const constrained = applyProductionCaseOutcomeToReport(auteurReport, {
    startingBudget: 10,
    startingSchedule: 10,
    budgetRemaining: -1,
    scheduleRemaining: 2,
    creativeControl: 9,
    choicesMade: 6,
    status: "over_budget",
    label: "Over budget",
    description: "Creative commitments exceeded the available budget.",
  });

  assert.equal(constrained.report.score, 12);
  assert.equal(constrained.report.maxScore, 12);
  assert.equal(constrained.report.resultTier, "producer");
  assert.equal(constrained.report.learningSummary, auteurReport.learningSummary);
  assert.equal(constrained.outcome.craftTier, "auteur");
  assert.equal(constrained.outcome.finalTier, "producer");
});

test("library status uses the same constrained tier as the final report", () => {
  const creativePushStatus = getProductionCaseConstrainedLibraryStatus(
    completeMissions,
    createProgress("match-1"),
  );
  const mismatchStatus = getProductionCaseConstrainedLibraryStatus(
    completeMissions,
    createProgress("miss"),
  );

  assert.equal(creativePushStatus?.score?.score, 12);
  assert.equal(creativePushStatus?.tier, "producer");
  assert.equal(creativePushStatus?.label, "Producer");

  assert.equal(mismatchStatus?.score?.score, 0);
  assert.equal(mismatchStatus?.tier, "assistant");
  assert.equal(mismatchStatus?.label, "Assistant");
});
