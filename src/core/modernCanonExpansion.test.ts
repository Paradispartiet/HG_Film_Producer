import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { createModernCanonBriefBlueprint } from "./modernCanonBriefBlueprint.js";
import {
  modernCanonExpansionDefinitions,
  mergeModernCanonExpansion,
  scenarioMatchesModernCanonDefinition,
} from "./modernCanonExpansion.js";

const requestedTitlesByDecade = new Map<number, number>([
  [1980, 4],
  [1990, 8],
  [2000, 7],
  [2010, 4],
  [2020, 4],
]);

function readSeedScenarios(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as {
    readonly scenarios: readonly HistoricalFilmScenario[];
  };
  return parsed.scenarios;
}

function readHistoricalCatalogue(): readonly HistoricalFilmScenario[] {
  return mergeEarlyCinemaExpansion(readSeedScenarios());
}

test("the first modern canon expansion contains exactly 27 unique films", () => {
  assert.equal(modernCanonExpansionDefinitions.length, 27);
  const definitionKeys = modernCanonExpansionDefinitions.map((definition) => `${definition.year}:${definition.title}`);
  assert.equal(new Set(definitionKeys).size, definitionKeys.length);

  const actualByDecade = new Map<number, number>();
  for (const definition of modernCanonExpansionDefinitions) {
    const decade = Math.floor(definition.year / 10) * 10;
    actualByDecade.set(decade, (actualByDecade.get(decade) ?? 0) + 1);
  }
  assert.deepEqual(actualByDecade, requestedTitlesByDecade);
});

test("all 27 requested films are new to the 217-case catalogue", () => {
  const historicalCatalogue = readHistoricalCatalogue();
  const reusedDefinitions = modernCanonExpansionDefinitions.filter((definition) => (
    historicalCatalogue.some((scenario) => scenarioMatchesModernCanonDefinition(scenario, definition))
  ));
  assert.deepEqual(reusedDefinitions.map((definition) => definition.title), []);
});

test("every requested film resolves once and has a complete playable brief blueprint", () => {
  const scenarios = mergeModernCanonExpansion(readHistoricalCatalogue());

  for (const definition of modernCanonExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => scenarioMatchesModernCanonDefinition(scenario, definition));
    assert.equal(matches.length, 1, `${definition.title} (${definition.year}) should resolve exactly once`);

    const blueprint = createModernCanonBriefBlueprint(definition);
    assert.ok(blueprint.toneTargets.length >= 3);
    assert.ok(blueprint.screenplayTargets.length >= 3);
    assert.ok(blueprint.cinematographyTargets.length >= 3);
    assert.ok(blueprint.editingTargets.length >= 3);
    assert.ok(blueprint.soundTargets.length >= 3);
    assert.ok(blueprint.learningGoals.length >= 3);
  }
});

test("the merged catalogue contains 244 unique Production Cases", () => {
  const scenarios = mergeModernCanonExpansion(readHistoricalCatalogue());
  assert.equal(scenarios.length, 244);
  assert.equal(new Set(scenarios.map((scenario) => scenario.id)).size, scenarios.length);
});
