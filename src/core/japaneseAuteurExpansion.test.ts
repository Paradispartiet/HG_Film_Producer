import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { mergeEastAsianAuteurExpansion } from "./eastAsianAuteurExpansion.js";
import {
  japaneseAuteurExpansionDefinitions,
  mergeJapaneseAuteurExpansion,
  scenarioMatchesJapaneseAuteurDefinition,
} from "./japaneseAuteurExpansion.js";
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

function readCatalogueBeforeJapaneseExpansion(): readonly HistoricalFilmScenario[] {
  const historical = mergeEarlyCinemaExpansion(readSeedScenarios());
  const modern = mergeModernCanonExpansion(historical);
  const priorityIndie = mergePriorityIndieExpansion(modern);
  return mergeEastAsianAuteurExpansion(priorityIndie);
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

const requestedJapaneseBlock = [
  { title: "Tampopo", year: 1985 },
  { title: "Black Rain", year: 1989 },
  { title: "Cure", year: 1997 },
  { title: "After Life", year: 1998 },
  { title: "Still Walking", year: 2008 },
  { title: "Wheel of Fortune and Fantasy", year: 2021 },
  { title: "Monster", year: 2023 },
  { title: "Evil Does Not Exist", year: 2023 },
] as const;

test("Japanese auteur expansion contains exactly seven unique missing films", () => {
  assert.equal(japaneseAuteurExpansionDefinitions.length, 7);
  const definitionKeys = japaneseAuteurExpansionDefinitions.map((definition) => `${definition.year}:${normalizeTitle(definition.title)}`);
  assert.equal(new Set(definitionKeys).size, definitionKeys.length);
});

test("all seven Japanese auteur films are new to the 275-case catalogue", () => {
  const priorCatalogue = readCatalogueBeforeJapaneseExpansion();
  const reusedDefinitions = japaneseAuteurExpansionDefinitions.filter((definition) => (
    priorCatalogue.some((scenario) => scenarioMatchesJapaneseAuteurDefinition(scenario, definition))
  ));
  assert.deepEqual(reusedDefinitions.map((definition) => definition.title), []);
});

test("every Japanese auteur film resolves once and has a playable brief blueprint", () => {
  const scenarios = mergeJapaneseAuteurExpansion(readCatalogueBeforeJapaneseExpansion());

  for (const definition of japaneseAuteurExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => scenarioMatchesJapaneseAuteurDefinition(scenario, definition));
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

test("the full requested Japanese block resolves exactly once", () => {
  const scenarios = mergeJapaneseAuteurExpansion(readCatalogueBeforeJapaneseExpansion());

  for (const requested of requestedJapaneseBlock) {
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

test("Black Rain is disambiguated from the Ridley Scott film released in the same year", () => {
  const definition = japaneseAuteurExpansionDefinitions.find((candidate) => candidate.id === "scenario_black_rain_imamura_1989");
  if (!definition) throw new Error("Black Rain definition should exist");

  const base = readSeedScenarios()[0];
  if (!base) throw new Error("Seed catalogue should not be empty");

  const ridleyScottFilm: HistoricalFilmScenario = {
    ...base,
    id: "scenario_black_rain_ridley_scott_1989",
    film: {
      ...base.film,
      title: "Black Rain",
      original_title: "Black Rain",
      year: 1989,
      directors: ["Ridley Scott"],
    },
  };
  const imamuraFilm: HistoricalFilmScenario = {
    ...ridleyScottFilm,
    id: definition.id,
    film: {
      ...ridleyScottFilm.film,
      original_title: "Kuroi ame",
      directors: ["Shōhei Imamura"],
    },
  };

  assert.equal(scenarioMatchesJapaneseAuteurDefinition(ridleyScottFilm, definition), false);
  assert.equal(scenarioMatchesJapaneseAuteurDefinition(imamuraFilm, definition), true);
});

test("the merged catalogue contains 282 unique Production Cases", () => {
  const scenarios = mergeJapaneseAuteurExpansion(readCatalogueBeforeJapaneseExpansion());
  assert.equal(scenarios.length, 282);
  assert.equal(new Set(scenarios.map((scenario) => scenario.id)).size, scenarios.length);
});
