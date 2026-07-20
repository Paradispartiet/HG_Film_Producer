import assert from "node:assert/strict";
import test from "node:test";

import {
  earlyCinemaExpansionDefinitions,
  scenarioMatchesEarlyCinemaDefinition,
} from "../ui/data/earlyCinemaExpansion.js";
import {
  filmScenarioSeedData,
  getClassicFilmScenarios,
} from "../ui/data/filmScenarios.js";
import { resolveScenarioProductionBrief } from "../ui/data/scenarioProductionBriefs.js";

const requestedTitlesByDecade = new Map<number, number>([
  [1900, 1],
  [1920, 7],
  [1930, 9],
  [1940, 10],
  [1950, 11],
  [1960, 15],
  [1970, 5],
]);

test("the requested historical expansion contains exactly 58 unique films", () => {
  assert.equal(earlyCinemaExpansionDefinitions.length, 58);
  const definitionKeys = earlyCinemaExpansionDefinitions.map((definition) => `${definition.year}:${definition.title}`);
  assert.equal(new Set(definitionKeys).size, definitionKeys.length);

  const actualByDecade = new Map<number, number>();
  for (const definition of earlyCinemaExpansionDefinitions) {
    const decade = Math.floor(definition.year / 10) * 10;
    actualByDecade.set(decade, (actualByDecade.get(decade) ?? 0) + 1);
  }
  assert.deepEqual(actualByDecade, requestedTitlesByDecade);
});

test("every requested film resolves to one playable Production Case", () => {
  const scenarios = getClassicFilmScenarios();

  for (const definition of earlyCinemaExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => scenarioMatchesEarlyCinemaDefinition(scenario, definition));
    assert.equal(matches.length, 1, `${definition.title} (${definition.year}) should resolve exactly once`);

    const scenario = matches[0];
    assert.ok(scenario, `${definition.title} should exist in the merged catalogue`);
    const brief = resolveScenarioProductionBrief(scenario);
    assert.equal(brief.briefType, "production_case", `${definition.title} should be playable`);
    assert.equal(brief.verificationStatus, "needs_research", `${definition.title} should not be falsely source verified`);
    assert.ok(brief.screenplayTargets.length >= 3);
    assert.ok(brief.cinematographyTargets.length >= 3);
    assert.ok(brief.editingTargets.length >= 3);
    assert.ok(brief.soundTargets.length >= 3);
  }
});

test("the merged catalogue reports its real size and keeps unique scenario ids", () => {
  const scenarios = getClassicFilmScenarios();
  console.log(`Merged Production Case count: ${scenarios.length}`);
  assert.equal(filmScenarioSeedData.scenario_count, scenarios.length);
  assert.equal(new Set(scenarios.map((scenario) => scenario.id)).size, scenarios.length);
  assert.ok(scenarios.length >= 161);
});
