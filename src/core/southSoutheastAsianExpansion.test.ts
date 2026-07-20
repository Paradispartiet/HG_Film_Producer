import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { mergeEastAsianAuteurExpansion } from "./eastAsianAuteurExpansion.js";
import { mergeJapaneseAuteurExpansion } from "./japaneseAuteurExpansion.js";
import { createModernCanonBriefBlueprint } from "./modernCanonBriefBlueprint.js";
import { mergeModernCanonExpansion } from "./modernCanonExpansion.js";
import { mergePriorityIndieExpansion } from "./priorityIndieExpansion.js";
import { mergeSouthKoreanCinemaExpansion } from "./southKoreanCinemaExpansion.js";
import {
  mergeSouthSoutheastAsianExpansion,
  scenarioMatchesSouthSoutheastAsianDefinition,
  southSoutheastAsianExpansionDefinitions,
} from "./southSoutheastAsianExpansion.js";

function readSeedScenarios(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as {
    readonly scenarios: readonly HistoricalFilmScenario[];
  };
  return parsed.scenarios;
}

function readCatalogueBeforeSouthSoutheastAsianExpansion(): readonly HistoricalFilmScenario[] {
  const historical = mergeEarlyCinemaExpansion(readSeedScenarios());
  const modern = mergeModernCanonExpansion(historical);
  const priorityIndie = mergePriorityIndieExpansion(modern);
  const eastAsian = mergeEastAsianAuteurExpansion(priorityIndie);
  const japanese = mergeJapaneseAuteurExpansion(eastAsian);
  return mergeSouthKoreanCinemaExpansion(japanese);
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

const requestedFilms = [
  { title: "Syndromes and a Century", year: 2006 },
  { title: "Court", year: 2014 },
  { title: "The Lunchbox", year: 2013 },
  { title: "The Disciple", year: 2020 },
  { title: "Return to Seoul", year: 2022 },
  { title: "Marlina the Murderer in Four Acts", year: 2017 },
  { title: "Norte, the End of History", year: 2013 },
] as const;

test("South and Southeast Asian expansion contains exactly seven unique films", () => {
  assert.equal(southSoutheastAsianExpansionDefinitions.length, 7);
  const keys = southSoutheastAsianExpansionDefinitions.map((definition) => (
    `${definition.year}:${normalizeTitle(definition.title)}`
  ));
  assert.equal(new Set(keys).size, keys.length);
});

test("all seven films are new to the preceding 286-case catalogue", () => {
  const priorCatalogue = readCatalogueBeforeSouthSoutheastAsianExpansion();
  assert.equal(priorCatalogue.length, 286);

  const reusedDefinitions = southSoutheastAsianExpansionDefinitions.filter((definition) => (
    priorCatalogue.some((scenario) => scenarioMatchesSouthSoutheastAsianDefinition(scenario, definition))
  ));
  assert.deepEqual(reusedDefinitions.map((definition) => definition.title), []);
});

test("every expansion film resolves once and has a playable brief blueprint", () => {
  const scenarios = mergeSouthSoutheastAsianExpansion(readCatalogueBeforeSouthSoutheastAsianExpansion());

  for (const definition of southSoutheastAsianExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => (
      scenarioMatchesSouthSoutheastAsianDefinition(scenario, definition)
    ));
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

test("the complete requested seven-film block resolves exactly once", () => {
  const scenarios = mergeSouthSoutheastAsianExpansion(readCatalogueBeforeSouthSoutheastAsianExpansion());

  for (const requested of requestedFilms) {
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

test("generic English titles do not match unrelated same-year films", () => {
  const priorCatalogue = readCatalogueBeforeSouthSoutheastAsianExpansion();
  const baseScenario = priorCatalogue[0];
  assert.ok(baseScenario);

  const courtDefinition = southSoutheastAsianExpansionDefinitions.find((definition) => definition.title === "Court");
  const discipleDefinition = southSoutheastAsianExpansionDefinitions.find((definition) => definition.title === "The Disciple");
  const lunchboxDefinition = southSoutheastAsianExpansionDefinitions.find((definition) => definition.title === "The Lunchbox");
  assert.ok(courtDefinition);
  assert.ok(discipleDefinition);
  assert.ok(lunchboxDefinition);

  const unrelatedCourt: HistoricalFilmScenario = {
    ...baseScenario,
    id: "scenario_unrelated_court_2014",
    film: {
      ...baseScenario.film,
      title: "Court",
      original_title: "Court",
      year: 2014,
      directors: ["Unrelated Director"],
    },
  };
  const unrelatedDisciple: HistoricalFilmScenario = {
    ...baseScenario,
    id: "scenario_unrelated_disciple_2020",
    film: {
      ...baseScenario.film,
      title: "The Disciple",
      original_title: "The Disciple",
      year: 2020,
      directors: ["Unrelated Director"],
    },
  };
  const unrelatedLunchbox: HistoricalFilmScenario = {
    ...baseScenario,
    id: "scenario_unrelated_lunchbox_2013",
    film: {
      ...baseScenario.film,
      title: "The Lunchbox",
      original_title: "The Lunchbox",
      year: 2013,
      directors: ["Unrelated Director"],
    },
  };

  assert.equal(scenarioMatchesSouthSoutheastAsianDefinition(unrelatedCourt, courtDefinition), false);
  assert.equal(scenarioMatchesSouthSoutheastAsianDefinition(unrelatedDisciple, discipleDefinition), false);
  assert.equal(scenarioMatchesSouthSoutheastAsianDefinition(unrelatedLunchbox, lunchboxDefinition), false);
});

test("the merged catalogue contains 293 unique Production Cases", () => {
  const scenarios = mergeSouthSoutheastAsianExpansion(readCatalogueBeforeSouthSoutheastAsianExpansion());
  assert.equal(scenarios.length, 293);
  assert.equal(new Set(scenarios.map((scenario) => scenario.id)).size, scenarios.length);
});
