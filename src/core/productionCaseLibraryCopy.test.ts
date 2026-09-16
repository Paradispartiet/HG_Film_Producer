import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  PRODUCTION_CASE_LIBRARY_COPY,
  PRODUCTION_CASE_LIBRARY_SORT_IDS,
  PRODUCTION_CASE_LIBRARY_STATUS_IDS,
  getProductionCaseLibraryStatusLabel,
} from "./productionCaseLibraryCopy.js";

test("Production Cases library copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(PRODUCTION_CASE_LIBRARY_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("Production Cases keeps canonical product naming and stable control ids", () => {
  assert.deepEqual(PRODUCTION_CASE_LIBRARY_STATUS_IDS, ["all", "not_started", "in_progress", "completed"]);
  assert.deepEqual(PRODUCTION_CASE_LIBRARY_SORT_IDS, ["default", "title_asc"]);
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(PRODUCTION_CASE_LIBRARY_COPY[language].productTitle, "Production Cases");
  }
});

test("localized status presentation is keyed by canonical learning states", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.ok(getProductionCaseLibraryStatusLabel(language, "not_started").trim());
    assert.ok(getProductionCaseLibraryStatusLabel(language, "in_progress").trim());
    assert.ok(getProductionCaseLibraryStatusLabel(language, "completed").trim());
  }
  assert.equal(getProductionCaseLibraryStatusLabel("en", "not_started"), "Not started");
  assert.equal(getProductionCaseLibraryStatusLabel("en", "in_progress"), "In progress");
  assert.equal(getProductionCaseLibraryStatusLabel("en", "completed"), "Completed");
});

test("English library chrome preserves the current visible wording", () => {
  const copy = PRODUCTION_CASE_LIBRARY_COPY.en;
  assert.equal(copy.eyebrow, "Film learning through concrete cases");
  assert.equal(copy.searchLabel, "Search");
  assert.equal(copy.searchPlaceholder, "Search film, year, or case");
  assert.equal(copy.learningStatusLabel, "Learning status");
  assert.equal(copy.resetFilters, "Reset filters");
  assert.equal(copy.backup.title, "Learning progress backup");
  assert.equal(copy.startHere.heading, "Study your first film case");
  assert.equal(copy.nextAction.label, "Next learning step");
});

test("dynamic library copy preserves canonical film data and counts", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = PRODUCTION_CASE_LIBRARY_COPY[language];
    assert.match(copy.resultSummary(4, 10), /4.*10/);
    assert.ok(copy.eraAria("1970s").includes("1970s"));
    assert.ok(copy.showAllCases(8, "1970s").includes("8"));
    assert.ok(copy.showAllCases(8, "1970s").includes("1970s"));
    assert.ok(copy.genresAria("Film X").includes("Film X"));
    assert.ok(copy.nextAction.continueTitle("Film X").includes("Film X"));
    assert.ok(copy.nextAction.startTitle("Film X").includes("Film X"));
    assert.match(copy.nextAction.phasesStudied(2, 6), /2.*6/);
    assert.ok(copy.statusBadge.aria("Completed").includes("Completed"));
    assert.match(copy.statusBadge.phasesStudied(2, 6), /2.*6/);
    assert.ok(copy.productionCaseDescription("Film X").includes("Film X"));
    assert.ok(copy.seedFallbackDescription("Canonical challenge").includes("Canonical challenge"));
  }
});
