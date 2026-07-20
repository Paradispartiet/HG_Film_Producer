import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { mergeEastAsianAuteurExpansion } from "./eastAsianAuteurExpansion.js";
import { mergeJapaneseAuteurExpansion } from "./japaneseAuteurExpansion.js";
import { createModernCanonBriefBlueprint } from "./modernCanonBriefBlueprint.js";
import { mergeModernCanonExpansion } from "./modernCanonExpansion.js";
import { mergePriorityIndieExpansion } from "./priorityIndieExpansion.js";
import {
  mergeSouthKoreanCinemaExpansion,
  scenarioMatchesSouthKoreanCinemaDefinition,
  southKoreanCinemaExpansionDefinitions,
} from "./southKoreanCinemaExpansion.js";

function readSeedScenarios(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as {
    readonly scenarios: readonly HistoricalFilmScenario[];
  };
  return parsed.scenarios;
}

function readCatalogueBeforeSouthKoreanExpansion(): readonly HistoricalFilmScenario[] {
  const historical = mergeEarlyCinemaExpansion(readSeedScenarios());
  const modern = mergeModernCanonExpansion(historical);
  const priorityIndie = mergePriorityIndieExpansion(modern);
  const eastAsian = mergeEastAsianAuteurExpansion(priorityIndie);
  return mergeJapaneseAuteurExpansion(eastAsian);
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

const requestedSouthKoreanFilms = [
  { title: "Peppermint Candy", year: 1999 },
  { title: "Oasis", year: 2002 },
  { title: "The Host", year: 2006 },
  { title: "Secret Sunshine", year: 2007 },
  { title: "Poetry", year: 2010 },
  { title: "The Wailing", year: 2016 },
  { title: "Burning", year: 2018 },
] as const;

test("South Korean cinema expansion contains exactly four unique missing films", () => {
  assert.equal(southKoreanCinemaExpansionDefinitions.length, 4);
  const keys = southKoreanCinemaExpansionDefinitions.map((definition) => (
    `${definition.year}:${normalizeTitle(definition.title)}`
  ));
  assert.equal(new Set(keys).size, keys.length);
});

test("all four South Korean films are new to the preceding 282-case catalogue", () => {
  const priorCatalogue = readCatalogueBeforeSouthKoreanExpansion();
  assert.equal(priorCatalogue.length, 282);

  const reusedDefinitions = southKoreanCinemaExpansionDefinitions.filter((definition) => (
    priorCatalogue.some((scenario) => scenarioMatchesSouthKoreanCinemaDefinition(scenario, definition))
  ));
  assert.deepEqual(reusedDefinitions.map((definition) => definition.title), []);
});

test("every South Korean expansion film resolves once and has a playable brief blueprint", () => {
  const scenarios = mergeSouthKoreanCinemaExpansion(readCatalogueBeforeSouthKoreanExpansion());

  for (const definition of southKoreanCinemaExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => (
      scenarioMatchesSouthKoreanCinemaDefinition(scenario, definition)
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

test("the complete requested South Korean block resolves exactly once", () => {
  const scenarios = mergeSouthKoreanCinemaExpansion(readCatalogueBeforeSouthKoreanExpansion());

  for (const requested of requestedSouthKoreanFilms) {
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

test("ambiguous English titles do not match unrelated same-year films", () => {
  const oasisDefinition = southKoreanCinemaExpansionDefinitions.find((definition) => definition.title === "Oasis");
  const hostDefinition = southKoreanCinemaExpansionDefinitions.find((definition) => definition.title === "The Host");
  assert.ok(oasisDefinition);
  assert.ok(hostDefinition);

  const unrelatedOasis: HistoricalFilmScenario = {
    ...readCatalogueBeforeSouthKoreanExpansion()[0],
    id: "scenario_unrelated_oasis_2002",
    film: {
      ...readCatalogueBeforeSouthKoreanExpansion()[0].film,
      title: "Oasis",
      original_title: "Oasis",
      year: 2002,
      directors: ["Unrelated Director"],
    },
  };
  const unrelatedHost: HistoricalFilmScenario = {
    ...readCatalogueBeforeSouthKoreanExpansion()[0],
    id: "scenario_unrelated_host_2006",
    film: {
      ...readCatalogueBeforeSouthKoreanExpansion()[0].film,
      title: "The Host",
      original_title: "The Host",
      year: 2006,
      directors: ["Unrelated Director"],
    },
  };

  assert.equal(scenarioMatchesSouthKoreanCinemaDefinition(unrelatedOasis, oasisDefinition), false);
  assert.equal(scenarioMatchesSouthKoreanCinemaDefinition(unrelatedHost, hostDefinition), false);
});

test("the merged catalogue contains 286 unique Production Cases", () => {
  const scenarios = mergeSouthKoreanCinemaExpansion(readCatalogueBeforeSouthKoreanExpansion());
  assert.equal(scenarios.length, 286);
  assert.equal(new Set(scenarios.map((scenario) => scenario.id)).size, scenarios.length);
});
