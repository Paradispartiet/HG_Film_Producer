import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { mergeEastAsianAuteurExpansion } from "./eastAsianAuteurExpansion.js";
import { mergeEasternIberianBritishExpansion } from "./easternIberianBritishExpansion.js";
import { mergeFestivalWinners1981To2009Expansion } from "./festivalWinners1981To2009Expansion.js";
import { mergeFestivalWinners2010To2024Expansion } from "./festivalWinners2010To2024Expansion.js";
import {
  italyFranceGermanyBeneluxExpansionDefinitions,
  mergeItalyFranceGermanyBeneluxExpansion,
  normalizeItalyFranceGermanyBeneluxTitle,
  scenarioMatchesItalyFranceGermanyBeneluxDefinition,
} from "./italyFranceGermanyBeneluxExpansion.js";
import { mergeJapaneseAuteurExpansion } from "./japaneseAuteurExpansion.js";
import { createModernCanonBriefBlueprint } from "./modernCanonBriefBlueprint.js";
import { mergeModernCanonExpansion } from "./modernCanonExpansion.js";
import { mergePriorityIndieExpansion } from "./priorityIndieExpansion.js";
import { mergeScandinavianEuropeanExpansion } from "./scandinavianEuropeanExpansion.js";
import { mergeSouthKoreanCinemaExpansion } from "./southKoreanCinemaExpansion.js";
import { mergeSouthSoutheastAsianExpansion } from "./southSoutheastAsianExpansion.js";

function readSeedScenarios(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as {
    readonly scenarios: readonly HistoricalFilmScenario[];
  };
  return parsed.scenarios;
}

function readCatalogueBeforeItalyFranceGermanyBeneluxExpansion(): readonly HistoricalFilmScenario[] {
  const historical = mergeEarlyCinemaExpansion(readSeedScenarios());
  const modern = mergeModernCanonExpansion(historical);
  const priorityIndie = mergePriorityIndieExpansion(modern);
  const eastAsian = mergeEastAsianAuteurExpansion(priorityIndie);
  const japanese = mergeJapaneseAuteurExpansion(eastAsian);
  const southKorean = mergeSouthKoreanCinemaExpansion(japanese);
  const southSoutheastAsian = mergeSouthSoutheastAsianExpansion(southKorean);
  const earlyFestival = mergeFestivalWinners1981To2009Expansion(southSoutheastAsian);
  const recentFestival = mergeFestivalWinners2010To2024Expansion(earlyFestival);
  const scandinavianEuropean = mergeScandinavianEuropeanExpansion(recentFestival);
  return mergeEasternIberianBritishExpansion(scandinavianEuropean);
}

const requestedFilms = italyFranceGermanyBeneluxExpansionDefinitions.map((definition) => ({
  title: definition.title,
  year: definition.year,
}));

test("Italy, France, Germany, and Benelux expansion contains exactly 28 unique targets", () => {
  assert.equal(italyFranceGermanyBeneluxExpansionDefinitions.length, 28);
  const ids = italyFranceGermanyBeneluxExpansionDefinitions.map((definition) => definition.id);
  const keys = italyFranceGermanyBeneluxExpansionDefinitions.map((definition) => (
    `${definition.year}:${normalizeItalyFranceGermanyBeneluxTitle(definition.title)}`
  ));
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(keys).size, keys.length);
});

test("the expansion adds only genuinely missing films and preserves unique catalogue IDs", () => {
  const priorCatalogue = readCatalogueBeforeItalyFranceGermanyBeneluxExpansion();
  const missingDefinitions = italyFranceGermanyBeneluxExpansionDefinitions.filter((definition) => (
    !priorCatalogue.some((scenario) => (
      scenarioMatchesItalyFranceGermanyBeneluxDefinition(scenario, definition)
    ))
  ));
  const merged = mergeItalyFranceGermanyBeneluxExpansion(priorCatalogue);

  assert.equal(merged.length, priorCatalogue.length + missingDefinitions.length);
  assert.equal(new Set(merged.map((scenario) => scenario.id)).size, merged.length);
  assert.ok(missingDefinitions.length > 0);
  console.log(
    `[italy-france-germany-benelux-expansion] prior=${priorCatalogue.length} missing=${missingDefinitions.length} final=${merged.length}`,
  );
});

test("all 28 requested films resolve exactly once and have playable production blueprints", () => {
  const scenarios = mergeItalyFranceGermanyBeneluxExpansion(
    readCatalogueBeforeItalyFranceGermanyBeneluxExpansion(),
  );

  for (const definition of italyFranceGermanyBeneluxExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => (
      scenarioMatchesItalyFranceGermanyBeneluxDefinition(scenario, definition)
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

test("the complete requested regional block resolves exactly once by title and year", () => {
  const scenarios = mergeItalyFranceGermanyBeneluxExpansion(
    readCatalogueBeforeItalyFranceGermanyBeneluxExpansion(),
  );

  for (const requested of requestedFilms) {
    const requestedTitle = normalizeItalyFranceGermanyBeneluxTitle(requested.title);
    const matches = scenarios.filter((scenario) => (
      scenario.film.year === requested.year
      && [scenario.film.title, scenario.film.original_title]
        .map(normalizeItalyFranceGermanyBeneluxTitle)
        .includes(requestedTitle)
    ));
    assert.equal(matches.length, 1, `${requested.title} (${requested.year}) should resolve exactly once`);
  }
});

test("generic translated titles reject unrelated same-year films", () => {
  const priorCatalogue = readCatalogueBeforeItalyFranceGermanyBeneluxExpansion();
  const baseScenario = priorCatalogue[0];
  assert.ok(baseScenario);

  for (const title of ["Character", "Phoenix", "Close", "Playtime", "The Child", "The Vanishing"] as const) {
    const definition = italyFranceGermanyBeneluxExpansionDefinitions.find((item) => item.title === title);
    assert.ok(definition);

    const unrelated: HistoricalFilmScenario = {
      ...baseScenario,
      id: `scenario_unrelated_${normalizeItalyFranceGermanyBeneluxTitle(title).replace(/ /g, "_")}_${definition.year}`,
      film: {
        ...baseScenario.film,
        title,
        original_title: title,
        year: definition.year,
        directors: ["Unrelated Director"],
      },
    };

    assert.equal(
      scenarioMatchesItalyFranceGermanyBeneluxDefinition(unrelated, definition),
      false,
      `${title} should require the correct original title or director`,
    );
  }
});
