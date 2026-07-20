import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { mergeEastAsianAuteurExpansion } from "./eastAsianAuteurExpansion.js";
import {
  festivalWinners1981To2009ExpansionDefinitions,
  mergeFestivalWinners1981To2009Expansion,
  scenarioMatchesFestivalWinners1981To2009Definition,
} from "./festivalWinners1981To2009Expansion.js";
import { mergeJapaneseAuteurExpansion } from "./japaneseAuteurExpansion.js";
import { createModernCanonBriefBlueprint } from "./modernCanonBriefBlueprint.js";
import { mergeModernCanonExpansion } from "./modernCanonExpansion.js";
import { mergePriorityIndieExpansion } from "./priorityIndieExpansion.js";
import { mergeSouthKoreanCinemaExpansion } from "./southKoreanCinemaExpansion.js";
import { mergeSouthSoutheastAsianExpansion } from "./southSoutheastAsianExpansion.js";

function readSeedScenarios(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as {
    readonly scenarios: readonly HistoricalFilmScenario[];
  };
  return parsed.scenarios;
}

function readCatalogueBeforeFestivalWinners1981To2009(): readonly HistoricalFilmScenario[] {
  const historical = mergeEarlyCinemaExpansion(readSeedScenarios());
  const modern = mergeModernCanonExpansion(historical);
  const priorityIndie = mergePriorityIndieExpansion(modern);
  const eastAsian = mergeEastAsianAuteurExpansion(priorityIndie);
  const japanese = mergeJapaneseAuteurExpansion(eastAsian);
  const southKorean = mergeSouthKoreanCinemaExpansion(japanese);
  return mergeSouthSoutheastAsianExpansion(southKorean);
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

const requestedFestivalWinners = [
  { title: "Man of Iron", year: 1981 },
  { title: "Yol", year: 1982 },
  { title: "The Ballad of Narayama", year: 1983 },
  { title: "When Father Was Away on Business", year: 1985 },
  { title: "Pelle the Conqueror", year: 1987 },
  { title: "Central Station", year: 1998 },
  { title: "Eternity and a Day", year: 1998 },
  { title: "Head-On", year: 2004 },
  { title: "Vera Drake", year: 2004 },
  { title: "The Wrestler", year: 2008 },
  { title: "The Milk of Sorrow", year: 2009 },
] as const;

test("1981-2009 festival winner expansion contains exactly eleven unique films", () => {
  assert.equal(festivalWinners1981To2009ExpansionDefinitions.length, 11);
  const keys = festivalWinners1981To2009ExpansionDefinitions.map((definition) => (
    `${definition.year}:${normalizeTitle(definition.title)}`
  ));
  assert.equal(new Set(keys).size, keys.length);
});

test("all eleven festival winners are new to the preceding 293-case catalogue", () => {
  const priorCatalogue = readCatalogueBeforeFestivalWinners1981To2009();
  assert.equal(priorCatalogue.length, 293);

  const reusedDefinitions = festivalWinners1981To2009ExpansionDefinitions.filter((definition) => (
    priorCatalogue.some((scenario) => (
      scenarioMatchesFestivalWinners1981To2009Definition(scenario, definition)
    ))
  ));
  assert.deepEqual(reusedDefinitions.map((definition) => definition.title), []);
});

test("every festival winner resolves once and has a playable brief blueprint", () => {
  const scenarios = mergeFestivalWinners1981To2009Expansion(
    readCatalogueBeforeFestivalWinners1981To2009(),
  );

  for (const definition of festivalWinners1981To2009ExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => (
      scenarioMatchesFestivalWinners1981To2009Definition(scenario, definition)
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

test("the complete requested 1981-2009 festival block resolves exactly once", () => {
  const scenarios = mergeFestivalWinners1981To2009Expansion(
    readCatalogueBeforeFestivalWinners1981To2009(),
  );

  for (const requested of requestedFestivalWinners) {
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

test("generic festival winner titles do not match unrelated same-year films", () => {
  const priorCatalogue = readCatalogueBeforeFestivalWinners1981To2009();
  const baseScenario = priorCatalogue[0];
  assert.ok(baseScenario);

  for (const title of ["Yol", "Central Station", "The Wrestler"] as const) {
    const definition = festivalWinners1981To2009ExpansionDefinitions.find((item) => item.title === title);
    assert.ok(definition);

    const unrelated: HistoricalFilmScenario = {
      ...baseScenario,
      id: `scenario_unrelated_${normalizeTitle(title).replace(/ /g, "_")}_${definition.year}`,
      film: {
        ...baseScenario.film,
        title,
        original_title: title,
        year: definition.year,
        directors: ["Unrelated Director"],
      },
    };

    assert.equal(
      scenarioMatchesFestivalWinners1981To2009Definition(unrelated, definition),
      false,
      `${title} should require the correct original title or director`,
    );
  }
});

test("the merged catalogue contains 304 unique Production Cases", () => {
  const scenarios = mergeFestivalWinners1981To2009Expansion(
    readCatalogueBeforeFestivalWinners1981To2009(),
  );
  assert.equal(scenarios.length, 304);
  assert.equal(new Set(scenarios.map((scenario) => scenario.id)).size, scenarios.length);
});
