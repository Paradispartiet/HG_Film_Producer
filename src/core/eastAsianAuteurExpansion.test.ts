import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import {
  eastAsianAuteurExpansionDefinitions,
  mergeEastAsianAuteurExpansion,
  scenarioMatchesEastAsianAuteurDefinition,
} from "./eastAsianAuteurExpansion.js";
import { createModernCanonBriefBlueprint } from "./modernCanonBriefBlueprint.js";
import { mergeModernCanonExpansion } from "./modernCanonExpansion.js";
import { mergePriorityIndieExpansion } from "./priorityIndieExpansion.js";

function readSeedScenarios(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as {
    readonly scenarios: readonly HistoricalFilmScenario[];
  };
  return parsed.scenarios;
}

function readCatalogueBeforeEastAsianAuteurExpansion(): readonly HistoricalFilmScenario[] {
  return mergePriorityIndieExpansion(
    mergeModernCanonExpansion(
      mergeEarlyCinemaExpansion(readSeedScenarios()),
    ),
  );
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

const requestedTaiwanHongKongChinaFilms = [
  { title: "Taipei Story", year: 1985 },
  { title: "A City of Sadness", year: 1989 },
  { title: "Days of Being Wild", year: 1990 },
  { title: "Raise the Red Lantern", year: 1991 },
  { title: "Farewell My Concubine", year: 1993 },
  { title: "Vive L'Amour", year: 1994 },
  { title: "Cyclo", year: 1995 },
  { title: "Happy Together", year: 1997 },
  { title: "Platform", year: 2000 },
  { title: "Millennium Mambo", year: 2001 },
  { title: "Infernal Affairs", year: 2002 },
  { title: "Goodbye, Dragon Inn", year: 2003 },
  { title: "Still Life", year: 2006 },
  { title: "A Touch of Sin", year: 2013 },
  { title: "The Assassin", year: 2015 },
  { title: "An Elephant Sitting Still", year: 2018 },
  { title: "Long Day's Journey Into Night", year: 2018 },
] as const;

test("East Asian auteur expansion contains exactly 11 unique missing films", () => {
  assert.equal(eastAsianAuteurExpansionDefinitions.length, 11);
  const definitionKeys = eastAsianAuteurExpansionDefinitions.map((definition) => (
    `${definition.year}:${normalizeTitle(definition.title)}`
  ));
  assert.equal(new Set(definitionKeys).size, definitionKeys.length);
});

test("all 11 films are new to the 264-case catalogue", () => {
  const priorCatalogue = readCatalogueBeforeEastAsianAuteurExpansion();
  const reusedDefinitions = eastAsianAuteurExpansionDefinitions.filter((definition) => (
    priorCatalogue.some((scenario) => scenarioMatchesEastAsianAuteurDefinition(scenario, definition))
  ));
  assert.deepEqual(reusedDefinitions.map((definition) => definition.title), []);
});

test("every East Asian auteur film resolves once and has a playable brief blueprint", () => {
  const scenarios = mergeEastAsianAuteurExpansion(readCatalogueBeforeEastAsianAuteurExpansion());

  for (const definition of eastAsianAuteurExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => scenarioMatchesEastAsianAuteurDefinition(scenario, definition));
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

test("the requested Taiwan, Hong Kong and China block is complete exactly once", () => {
  const scenarios = mergeEastAsianAuteurExpansion(readCatalogueBeforeEastAsianAuteurExpansion());

  for (const requested of requestedTaiwanHongKongChinaFilms) {
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

test("the merged catalogue contains 275 unique Production Cases", () => {
  const scenarios = mergeEastAsianAuteurExpansion(readCatalogueBeforeEastAsianAuteurExpansion());
  assert.equal(scenarios.length, 275);
  assert.equal(new Set(scenarios.map((scenario) => scenario.id)).size, scenarios.length);
});
