import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenDrommerExpansionDefinitions, mergeChapterNineteenDrommerExpansion } from "./chapterNineteenDrommerExpansion.js";

test("Drømmer source-first production case separates film year, award year and uncertainty", () => {
  assert.equal(chapterNineteenDrommerExpansionDefinitions.length, 1);
  const film = chapterNineteenDrommerExpansionDefinitions[0];
  assert.equal(film.id, "scenario_drommer_2024");
  assert.equal(film.title, "Drømmer");
  assert.equal(film.year, 2024);
  assert.equal(film.runtimeMins, 110);
  assert.deepEqual(film.directors, ["Dag Johan Haugerud"]);
  assert.ok(film.aliases.includes("Dreams (Sex Love)"));
  assert.match(film.scenarioType, /berlinale_2025_golden_bear/);
  assert.ok(film.premise.includes("4 October 2024"));
  assert.ok(film.premise.includes("NOK 6,350,000"));
  assert.ok(film.premise.includes("2025 prize establishes festival priority"));
  assert.ok(film.premise.includes("Cecilie Semec"));
  assert.ok(film.premise.includes("Jens Christian Fodstad"));
  assert.ok(film.premise.includes("refusing to invent an exact shooting calendar"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("film_year_2024_award_year_2025"));
  assert.ok(film.requiredChoicesSeed.camera.includes("camera_package_unresolved"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 18);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Drømmer expansion merges idempotently by normalized title and 2024 year", () => {
  const once = mergeChapterNineteenDrommerExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_drommer_2024");
  const twice = mergeChapterNineteenDrommerExpansion(once);
  assert.equal(twice.length, 1);
});
