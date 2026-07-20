import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { eastAsianAuteurExpansionDefinitions, mergeEastAsianAuteurExpansion } from "./eastAsianAuteurExpansion.js";
import {
  festivalWinners1981To2009ExpansionDefinitions,
  mergeFestivalWinners1981To2009Expansion,
} from "./festivalWinners1981To2009Expansion.js";
import {
  festivalWinners2010To2024ExpansionDefinitions,
  mergeFestivalWinners2010To2024Expansion,
  scenarioMatchesFestivalWinners2010To2024Definition,
} from "./festivalWinners2010To2024Expansion.js";
import { japaneseAuteurExpansionDefinitions, mergeJapaneseAuteurExpansion } from "./japaneseAuteurExpansion.js";
import { createModernCanonBriefBlueprint } from "./modernCanonBriefBlueprint.js";
import { modernCanonExpansionDefinitions, mergeModernCanonExpansion } from "./modernCanonExpansion.js";
import { priorityIndieExpansionDefinitions, mergePriorityIndieExpansion } from "./priorityIndieExpansion.js";
import { southKoreanCinemaExpansionDefinitions, mergeSouthKoreanCinemaExpansion } from "./southKoreanCinemaExpansion.js";
import { southSoutheastAsianExpansionDefinitions, mergeSouthSoutheastAsianExpansion } from "./southSoutheastAsianExpansion.js";

function readSeedScenarios(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as {
    readonly scenarios: readonly HistoricalFilmScenario[];
  };
  return parsed.scenarios;
}

function readCatalogueBeforeFestivalWinners2010To2024(): readonly HistoricalFilmScenario[] {
  const historical = mergeEarlyCinemaExpansion(readSeedScenarios());
  const modern = mergeModernCanonExpansion(historical);
  const priorityIndie = mergePriorityIndieExpansion(modern);
  const eastAsian = mergeEastAsianAuteurExpansion(priorityIndie);
  const japanese = mergeJapaneseAuteurExpansion(eastAsian);
  const southKorean = mergeSouthKoreanCinemaExpansion(japanese);
  const southSoutheastAsian = mergeSouthSoutheastAsianExpansion(southKorean);
  return mergeFestivalWinners1981To2009Expansion(southSoutheastAsian);
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
  { title: "Somewhere", year: 2010 },
  { title: "Pietà", year: 2012 },
  { title: "Blue Is the Warmest Colour", year: 2013 },
  { title: "Black Coal, Thin Ice", year: 2014 },
  { title: "From Afar", year: 2015 },
  { title: "Synonyms", year: 2019 },
  { title: "There Is No Evil", year: 2020 },
  { title: "Bad Luck Banging or Loony Porn", year: 2021 },
  { title: "Alcarràs", year: 2022 },
  { title: "Triangle of Sadness", year: 2022 },
  { title: "The Room Next Door", year: 2024 },
] as const;

test("2010-2024 festival winner expansion contains exactly eleven unique films", () => {
  assert.equal(festivalWinners2010To2024ExpansionDefinitions.length, 11);
  const keys = festivalWinners2010To2024ExpansionDefinitions.map((definition) => (
    `${definition.year}:${normalizeTitle(definition.title)}`
  ));
  assert.equal(new Set(keys).size, keys.length);
});

test("all eleven final festival winners are new to the preceding 304-case catalogue", () => {
  const priorCatalogue = readCatalogueBeforeFestivalWinners2010To2024();
  assert.equal(priorCatalogue.length, 304);

  const reusedDefinitions = festivalWinners2010To2024ExpansionDefinitions.filter((definition) => (
    priorCatalogue.some((scenario) => (
      scenarioMatchesFestivalWinners2010To2024Definition(scenario, definition)
    ))
  ));
  assert.deepEqual(reusedDefinitions.map((definition) => definition.title), []);
});

test("every final festival winner resolves once and has a playable brief blueprint", () => {
  const scenarios = mergeFestivalWinners2010To2024Expansion(
    readCatalogueBeforeFestivalWinners2010To2024(),
  );

  for (const definition of festivalWinners2010To2024ExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => (
      scenarioMatchesFestivalWinners2010To2024Definition(scenario, definition)
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

test("the complete requested 2010-2024 festival block resolves exactly once", () => {
  const scenarios = mergeFestivalWinners2010To2024Expansion(
    readCatalogueBeforeFestivalWinners2010To2024(),
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

test("generic final festival titles do not match unrelated same-year films", () => {
  const priorCatalogue = readCatalogueBeforeFestivalWinners2010To2024();
  const baseScenario = priorCatalogue[0];
  assert.ok(baseScenario);

  for (const title of ["Somewhere", "Synonyms", "Triangle of Sadness"] as const) {
    const definition = festivalWinners2010To2024ExpansionDefinitions.find((item) => item.title === title);
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
      scenarioMatchesFestivalWinners2010To2024Definition(unrelated, definition),
      false,
      `${title} should require the correct original title or director`,
    );
  }
});

test("the final merged catalogue contains 315 unique Production Cases", () => {
  const scenarios = mergeFestivalWinners2010To2024Expansion(
    readCatalogueBeforeFestivalWinners2010To2024(),
  );
  assert.equal(scenarios.length, 315);
  assert.equal(new Set(scenarios.map((scenario) => scenario.id)).size, scenarios.length);
});

test("the complete agreed correction contains all 98 films exactly once", () => {
  const correctionDefinitions = [
    ...modernCanonExpansionDefinitions,
    ...priorityIndieExpansionDefinitions,
    ...eastAsianAuteurExpansionDefinitions,
    ...japaneseAuteurExpansionDefinitions,
    ...southKoreanCinemaExpansionDefinitions,
    ...southSoutheastAsianExpansionDefinitions,
    ...festivalWinners1981To2009ExpansionDefinitions,
    ...festivalWinners2010To2024ExpansionDefinitions,
  ];
  assert.equal(correctionDefinitions.length, 98);
  assert.equal(new Set(correctionDefinitions.map((definition) => definition.id)).size, 98);

  const scenarios = mergeFestivalWinners2010To2024Expansion(
    readCatalogueBeforeFestivalWinners2010To2024(),
  );
  for (const definition of correctionDefinitions) {
    assert.equal(
      scenarios.filter((scenario) => scenario.id === definition.id).length,
      1,
      `${definition.title} (${definition.year}) should be present exactly once by canonical ID`,
    );
  }
});
