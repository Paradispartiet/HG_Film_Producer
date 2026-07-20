import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { createModernCanonBriefBlueprint } from "./modernCanonBriefBlueprint.js";
import { mergeModernCanonExpansion } from "./modernCanonExpansion.js";
import {
  mergePriorityIndieExpansion,
  priorityIndieExpansionDefinitions,
  scenarioMatchesPriorityIndieDefinition,
} from "./priorityIndieExpansion.js";

function readSeedScenarios(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as {
    readonly scenarios: readonly HistoricalFilmScenario[];
  };
  return parsed.scenarios;
}

function readCatalogueBeforePriorityCompletion(): readonly HistoricalFilmScenario[] {
  return mergeModernCanonExpansion(mergeEarlyCinemaExpansion(readSeedScenarios()));
}

function normalizeTitle(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const originallyPrioritizedFilms = [
  { title: "Blood Simple", year: 1984 },
  { title: "Desert Hearts", year: 1985 },
  { title: "sex, lies, and videotape", year: 1989 },
  { title: "Slacker", year: 1990 },
  { title: "Metropolitan", year: 1990 },
  { title: "Chameleon Street", year: 1990 },
  { title: "Paris Is Burning", year: 1990 },
  { title: "Daughters of the Dust", year: 1991 },
  { title: "Poison", year: 1991 },
  { title: "Mississippi Masala", year: 1991 },
  { title: "Gas Food Lodging", year: 1992 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "El Mariachi", year: 1992 },
  { title: "Safe", year: 1995 },
  { title: "The Watermelon Woman", year: 1996 },
  { title: "George Washington", year: 2000 },
  { title: "Ghost World", year: 2001 },
  { title: "Wendy and Lucy", year: 2008 },
  { title: "Fish Tank", year: 2009 },
  { title: "Pariah", year: 2011 },
  { title: "The Rider", year: 2017 },
  { title: "Columbus", year: 2017 },
  { title: "The Souvenir", year: 2019 },
  { title: "Sound of Metal", year: 2019 },
  { title: "Never Rarely Sometimes Always", year: 2020 },
  { title: "Red Rocket", year: 2021 },
  { title: "Nickel Boys", year: 2024 },
] as const;

test("priority indie completion contains exactly 20 unique missing films", () => {
  assert.equal(priorityIndieExpansionDefinitions.length, 20);
  const definitionKeys = priorityIndieExpansionDefinitions.map((definition) => `${definition.year}:${normalizeTitle(definition.title)}`);
  assert.equal(new Set(definitionKeys).size, definitionKeys.length);
});

test("all 20 completion films are new to the 244-case catalogue", () => {
  const priorCatalogue = readCatalogueBeforePriorityCompletion();
  const reusedDefinitions = priorityIndieExpansionDefinitions.filter((definition) => (
    priorCatalogue.some((scenario) => scenarioMatchesPriorityIndieDefinition(scenario, definition))
  ));
  assert.deepEqual(reusedDefinitions.map((definition) => definition.title), []);
});

test("every completion film resolves once and has a playable brief blueprint", () => {
  const scenarios = mergePriorityIndieExpansion(readCatalogueBeforePriorityCompletion());

  for (const definition of priorityIndieExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => scenarioMatchesPriorityIndieDefinition(scenario, definition));
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

test("the originally prioritized 27-film list is now complete exactly once", () => {
  const scenarios = mergePriorityIndieExpansion(readCatalogueBeforePriorityCompletion());

  for (const requested of originallyPrioritizedFilms) {
    const requestedTitle = normalizeTitle(requested.title);
    const matches = scenarios.filter((scenario) => (
      scenario.film.year === requested.year
      && [scenario.film.title, scenario.film.original_title]
        .map(normalizeTitle)
        .includes(requestedTitle)
    ));
    assert.equal(matches.length, 1, `${requested.title} (${requested.year}) should resolve exactly once`);
  }
});

test("the merged catalogue contains 264 unique Production Cases", () => {
  const scenarios = mergePriorityIndieExpansion(readCatalogueBeforePriorityCompletion());
  assert.equal(scenarios.length, 264);
  assert.equal(new Set(scenarios.map((scenario) => scenario.id)).size, scenarios.length);
});
