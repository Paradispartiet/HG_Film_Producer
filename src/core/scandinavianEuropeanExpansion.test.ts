import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { mergeEastAsianAuteurExpansion } from "./eastAsianAuteurExpansion.js";
import { mergeFestivalWinners1981To2009Expansion } from "./festivalWinners1981To2009Expansion.js";
import { mergeFestivalWinners2010To2024Expansion } from "./festivalWinners2010To2024Expansion.js";
import { mergeJapaneseAuteurExpansion } from "./japaneseAuteurExpansion.js";
import { createModernCanonBriefBlueprint } from "./modernCanonBriefBlueprint.js";
import { mergeModernCanonExpansion } from "./modernCanonExpansion.js";
import { mergePriorityIndieExpansion } from "./priorityIndieExpansion.js";
import {
  mergeScandinavianEuropeanExpansion,
  scandinavianEuropeanExpansionDefinitions,
  scenarioMatchesScandinavianEuropeanDefinition,
} from "./scandinavianEuropeanExpansion.js";
import { mergeSouthKoreanCinemaExpansion } from "./southKoreanCinemaExpansion.js";
import { mergeSouthSoutheastAsianExpansion } from "./southSoutheastAsianExpansion.js";

function readSeedScenarios(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as {
    readonly scenarios: readonly HistoricalFilmScenario[];
  };
  return parsed.scenarios;
}

function readCatalogueBeforeScandinavianEuropeanExpansion(): readonly HistoricalFilmScenario[] {
  const historical = mergeEarlyCinemaExpansion(readSeedScenarios());
  const modern = mergeModernCanonExpansion(historical);
  const priorityIndie = mergePriorityIndieExpansion(modern);
  const eastAsian = mergeEastAsianAuteurExpansion(priorityIndie);
  const japanese = mergeJapaneseAuteurExpansion(eastAsian);
  const southKorean = mergeSouthKoreanCinemaExpansion(japanese);
  const southSoutheastAsian = mergeSouthSoutheastAsianExpansion(southKorean);
  const earlyFestivalWinners = mergeFestivalWinners1981To2009Expansion(southSoutheastAsian);
  return mergeFestivalWinners2010To2024Expansion(earlyFestivalWinners);
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
  { title: "The Phantom Carriage", year: 1921 },
  { title: "Ordet", year: 1955 },
  { title: "Persona", year: 1966 },
  { title: "The Match Factory Girl", year: 1990 },
  { title: "Insomnia", year: 1997 },
  { title: "The Celebration", year: 1998 },
  { title: "Songs from the Second Floor", year: 2000 },
  { title: "The Man Without a Past", year: 2002 },
  { title: "Oslo, August 31st", year: 2011 },
  { title: "Force Majeure", year: 2014 },
  { title: "Woman at War", year: 2018 },
  { title: "Another Round", year: 2020 },
  { title: "The Worst Person in the World", year: 2021 },
  { title: "L'Atalante", year: 1934 },
  { title: "Rome, Open City", year: 1945 },
  { title: "Cléo from 5 to 7", year: 1962 },
  { title: "The Conformist", year: 1970 },
  { title: "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles", year: 1975 },
  { title: "The Double Life of Véronique", year: 1991 },
  { title: "Beau Travail", year: 1999 },
  { title: "Toni Erdmann", year: 2016 },
  { title: "Aftersun", year: 2022 },
] as const;

const priorCatalogue = readCatalogueBeforeScandinavianEuropeanExpansion();
const missingDefinitions = scandinavianEuropeanExpansionDefinitions.filter((definition) => (
  !priorCatalogue.some((scenario) => scenarioMatchesScandinavianEuropeanDefinition(scenario, definition))
));
const mergedCatalogue = mergeScandinavianEuropeanExpansion(priorCatalogue);

test("Scandinavian and European round contains exactly twenty-two unique target films", () => {
  assert.equal(scandinavianEuropeanExpansionDefinitions.length, 22);
  const ids = scandinavianEuropeanExpansionDefinitions.map((definition) => definition.id);
  const keys = scandinavianEuropeanExpansionDefinitions.map((definition) => (
    `${definition.year}:${normalizeTitle(definition.title)}`
  ));
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(keys).size, keys.length);
});

test("every Scandinavian and European target resolves exactly once with a playable brief", () => {
  for (const definition of scandinavianEuropeanExpansionDefinitions) {
    const matches = mergedCatalogue.filter((scenario) => (
      scenarioMatchesScandinavianEuropeanDefinition(scenario, definition)
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

test("the complete requested Scandinavian and European block resolves exactly once", () => {
  for (const requested of requestedFilms) {
    const requestedTitle = normalizeTitle(requested.title);
    const matches = mergedCatalogue.filter((scenario) => (
      scenario.film.year === requested.year
      && [scenario.film.title, scenario.film.original_title]
        .map(normalizeTitle)
        .includes(requestedTitle)
    ));
    assert.equal(matches.length, 1, `${requested.title} (${requested.year}) should resolve exactly once`);
  }
});

test("generic translated titles do not absorb unrelated same-year films", () => {
  const baseScenario = priorCatalogue[0];
  assert.ok(baseScenario);

  for (const title of ["Persona", "Insomnia", "Another Round", "Aftersun"] as const) {
    const definition = scandinavianEuropeanExpansionDefinitions.find((item) => item.title === title);
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
      scenarioMatchesScandinavianEuropeanDefinition(unrelated, definition),
      false,
      `${title} should require the correct original title or director`,
    );
  }
});

test(`Scandinavian and European round adds ${missingDefinitions.length} cases and produces ${mergedCatalogue.length} unique Production Cases`, () => {
  assert.equal(priorCatalogue.length, 315);
  assert.equal(mergedCatalogue.length, priorCatalogue.length + missingDefinitions.length);
  assert.equal(new Set(mergedCatalogue.map((scenario) => scenario.id)).size, mergedCatalogue.length);
  assert.ok(missingDefinitions.length > 0, "the round should add at least one genuinely missing film");
});
