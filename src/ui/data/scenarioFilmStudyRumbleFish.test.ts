import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createNewHollywoodBlockbusterFilmHistoryChoices,
  getNewHollywoodBlockbusterFilmHistoryProfile,
  resolveNewHollywoodBlockbusterFilmStudyMap,
} from "./scenarioFilmStudyNewHollywoodBlockbusterBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_rumble_fish_1983";

test("Rumble Fish resolves as its own source-backed production system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveNewHollywoodBlockbusterFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.ok((study?.coverageSummary.sourceVerified ?? 0) >= 13);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 4);
  assert.ok(new Set(study?.verification?.sources.map((source) => source.publisher)).size >= 4);
});

test("Rumble Fish choices compare three distinct New Hollywood production systems", () => {
  const profile = getNewHollywoodBlockbusterFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const choices = createNewHollywoodBlockbusterFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});
