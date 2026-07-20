import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { createEarlyCinemaBriefBlueprint } from "./earlyCinemaBriefBlueprint.js";
import {
  earlyCinemaExpansionDefinitions,
  mergeEarlyCinemaExpansion,
  scenarioMatchesEarlyCinemaDefinition,
  type HistoricalFilmScenario,
} from "./earlyCinemaExpansion.js";

const requestedTitlesByDecade = new Map<number, number>([
  [1900, 1],
  [1920, 7],
  [1930, 9],
  [1940, 10],
  [1950, 11],
  [1960, 15],
  [1970, 5],
]);

function readSeedScenarios(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as {
    readonly scenarios: readonly HistoricalFilmScenario[];
  };
  return parsed.scenarios;
}

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

test("the expansion reuses two existing films and appends 56 missing films", () => {
  const seedScenarios = readSeedScenarios();
  const reusedDefinitions = earlyCinemaExpansionDefinitions.filter((definition) => (
    seedScenarios.some((scenario) => scenarioMatchesEarlyCinemaDefinition(scenario, definition))
  ));
  assert.equal(reusedDefinitions.length, 2);
  assert.equal(earlyCinemaExpansionDefinitions.length - reusedDefinitions.length, 56);
});

test("every requested film resolves once and has a complete playable brief blueprint", () => {
  const scenarios = mergeEarlyCinemaExpansion(readSeedScenarios());

  for (const definition of earlyCinemaExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => scenarioMatchesEarlyCinemaDefinition(scenario, definition));
    assert.equal(matches.length, 1, `${definition.title} (${definition.year}) should resolve exactly once`);

    const blueprint = createEarlyCinemaBriefBlueprint(definition);
    assert.ok(blueprint.toneTargets.length >= 3);
    assert.ok(blueprint.screenplayTargets.length >= 3);
    assert.ok(blueprint.cinematographyTargets.length >= 3);
    assert.ok(blueprint.editingTargets.length >= 3);
    assert.ok(blueprint.soundTargets.length >= 3);
    assert.ok(blueprint.learningGoals.length >= 3);
  }
});

test("the merged catalogue contains 217 unique Production Cases", () => {
  const scenarios = mergeEarlyCinemaExpansion(readSeedScenarios());
  assert.equal(scenarios.length, 217);
  assert.equal(new Set(scenarios.map((scenario) => scenario.id)).size, scenarios.length);
});
