import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { mergeEastAsianAuteurExpansion } from "./eastAsianAuteurExpansion.js";
import {
  easternIberianBritishExpansionDefinitions,
  mergeEasternIberianBritishExpansion,
  normalizeEasternIberianBritishTitle,
  scenarioMatchesEasternIberianBritishDefinition,
} from "./easternIberianBritishExpansion.js";
import { mergeFestivalWinners1981To2009Expansion } from "./festivalWinners1981To2009Expansion.js";
import { mergeFestivalWinners2010To2024Expansion } from "./festivalWinners2010To2024Expansion.js";
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

function readCatalogueBeforeEasternIberianBritishExpansion(): readonly HistoricalFilmScenario[] {
  const historical = mergeEarlyCinemaExpansion(readSeedScenarios());
  const modern = mergeModernCanonExpansion(historical);
  const priorityIndie = mergePriorityIndieExpansion(modern);
  const eastAsian = mergeEastAsianAuteurExpansion(priorityIndie);
  const japanese = mergeJapaneseAuteurExpansion(eastAsian);
  const southKorean = mergeSouthKoreanCinemaExpansion(japanese);
  const southSoutheastAsian = mergeSouthSoutheastAsianExpansion(southKorean);
  const earlyFestival = mergeFestivalWinners1981To2009Expansion(southSoutheastAsian);
  const recentFestival = mergeFestivalWinners2010To2024Expansion(earlyFestival);
  return mergeScandinavianEuropeanExpansion(recentFestival);
}

const requestedFilms = [
  { title: "Ashes and Diamonds", year: 1958 },
  { title: "Daisies", year: 1966 },
  { title: "Closely Watched Trains", year: 1966 },
  { title: "The Firemen's Ball", year: 1967 },
  { title: "Marketa Lazarová", year: 1967 },
  { title: "The Cremator", year: 1969 },
  { title: "Sátántangó", year: 1994 },
  { title: "4 Months, 3 Weeks and 2 Days", year: 2007 },
  { title: "Landscape in the Mist", year: 1988 },
  { title: "Before the Rain", year: 1994 },
  { title: "Underground", year: 1995 },
  { title: "No Man's Land", year: 2001 },
  { title: "Quo Vadis, Aida?", year: 2020 },
  { title: "Viridiana", year: 1961 },
  { title: "The Spirit of the Beehive", year: 1973 },
  { title: "Cría cuervos", year: 1976 },
  { title: "All About My Mother", year: 1999 },
  { title: "Tabu", year: 2012 },
  { title: "Horse Money", year: 2014 },
  { title: "Kes", year: 1969 },
  { title: "Naked", year: 1993 },
  { title: "In the Name of the Father", year: 1993 },
  { title: "Hunger", year: 2008 },
  { title: "The Banshees of Inisherin", year: 2022 },
] as const;

test("Eastern, Iberian, and British-Irish expansion contains exactly 24 unique targets", () => {
  assert.equal(easternIberianBritishExpansionDefinitions.length, 24);
  const ids = easternIberianBritishExpansionDefinitions.map((definition) => definition.id);
  const keys = easternIberianBritishExpansionDefinitions.map((definition) => (
    `${definition.year}:${normalizeEasternIberianBritishTitle(definition.title)}`
  ));
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(keys).size, keys.length);
});

test("the expansion adds only genuinely missing films and preserves unique catalogue IDs", () => {
  const priorCatalogue = readCatalogueBeforeEasternIberianBritishExpansion();
  const missingDefinitions = easternIberianBritishExpansionDefinitions.filter((definition) => (
    !priorCatalogue.some((scenario) => (
      scenarioMatchesEasternIberianBritishDefinition(scenario, definition)
    ))
  ));
  const merged = mergeEasternIberianBritishExpansion(priorCatalogue);

  assert.equal(merged.length, priorCatalogue.length + missingDefinitions.length);
  assert.equal(new Set(merged.map((scenario) => scenario.id)).size, merged.length);
  assert.ok(missingDefinitions.length > 0);
  console.log(
    `[eastern-iberian-british-expansion] prior=${priorCatalogue.length} missing=${missingDefinitions.length} final=${merged.length}`,
  );
});

test("all 24 requested films resolve exactly once and have playable production blueprints", () => {
  const scenarios = mergeEasternIberianBritishExpansion(
    readCatalogueBeforeEasternIberianBritishExpansion(),
  );

  for (const definition of easternIberianBritishExpansionDefinitions) {
    const matches = scenarios.filter((scenario) => (
      scenarioMatchesEasternIberianBritishDefinition(scenario, definition)
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
  const scenarios = mergeEasternIberianBritishExpansion(
    readCatalogueBeforeEasternIberianBritishExpansion(),
  );

  for (const requested of requestedFilms) {
    const requestedTitle = normalizeEasternIberianBritishTitle(requested.title);
    const matches = scenarios.filter((scenario) => (
      scenario.film.year === requested.year
      && [scenario.film.title, scenario.film.original_title]
        .map(normalizeEasternIberianBritishTitle)
        .includes(requestedTitle)
    ));
    assert.equal(matches.length, 1, `${requested.title} (${requested.year}) should resolve exactly once`);
  }
});

test("generic translated titles reject unrelated same-year films", () => {
  const priorCatalogue = readCatalogueBeforeEasternIberianBritishExpansion();
  const baseScenario = priorCatalogue[0];
  assert.ok(baseScenario);

  for (const title of ["Daisies", "Underground", "Tabu", "Naked", "Hunger"] as const) {
    const definition = easternIberianBritishExpansionDefinitions.find((item) => item.title === title);
    assert.ok(definition);

    const unrelated: HistoricalFilmScenario = {
      ...baseScenario,
      id: `scenario_unrelated_${normalizeEasternIberianBritishTitle(title).replace(/ /g, "_")}_${definition.year}`,
      film: {
        ...baseScenario.film,
        title,
        original_title: title,
        year: definition.year,
        directors: ["Unrelated Director"],
      },
    };

    assert.equal(
      scenarioMatchesEasternIberianBritishDefinition(unrelated, definition),
      false,
      `${title} should require the correct original title or director`,
    );
  }
});
