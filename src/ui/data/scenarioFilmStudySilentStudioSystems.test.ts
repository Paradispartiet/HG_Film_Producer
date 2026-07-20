import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  createSilentStudioSystemsFilmHistoryChoices,
  getSilentStudioSystemsFilmHistoryProfile,
  resolveSilentStudioSystemsFilmStudyMap,
} from "./scenarioFilmStudySilentStudioSystemsBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const targetIds = [
  "scenario_the_general_1926",
  "scenario_the_phantom_carriage_1921",
  "scenario_metropolis_1927",
  "scenario_frankenstein_1931",
] as const;

test("silent and early studio systems expose complete source-backed study maps", () => {
  const scenarios = getClassicFilmScenarios();

  for (const scenarioId of targetIds) {
    const scenario = scenarios.find((candidate) => candidate.id === scenarioId);
    assert.ok(scenario, `Missing current-catalogue scenario ${scenarioId}`);

    const brief = resolveScenarioProductionBrief(scenario);
    const map = resolveSilentStudioSystemsFilmStudyMap(scenario, brief);
    assert.ok(map, `Missing film-study map for ${scenarioId}`);
    assert.equal(map.historyStatus, "source_backed");
    assert.equal(map.coverageSummary.total, 17);
    assert.ok(map.coverageSummary.sourceVerified >= 9);
    assert.equal(map.verification?.scenarioId, scenarioId);
    assert.ok((map.verification?.sources.length ?? 0) >= 5);

    const profile = getSilentStudioSystemsFilmHistoryProfile(scenarioId);
    assert.ok(profile);
    const choices = createSilentStudioSystemsFilmHistoryChoices(profile);
    assert.equal(choices.length, 3);
    assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  }
});

test("silent and early studio resolver ignores unrelated films", () => {
  const unrelated = getClassicFilmScenarios().find((scenario) => !targetIds.includes(scenario.id as typeof targetIds[number]));
  assert.ok(unrelated);
  assert.equal(resolveSilentStudioSystemsFilmStudyMap(unrelated, resolveScenarioProductionBrief(unrelated)), undefined);
});
