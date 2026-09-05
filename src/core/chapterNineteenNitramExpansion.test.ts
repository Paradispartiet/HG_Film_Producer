import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenNitramExpansionDefinitions, mergeChapterNineteenNitramExpansion } from "./chapterNineteenNitramExpansion.js";

test("Nitram source-first case locks chronology, lockdown production and camera-format boundaries", () => {
  assert.equal(chapterNineteenNitramExpansionDefinitions.length, 1);
  const film = chapterNineteenNitramExpansionDefinitions[0];
  assert.equal(film.id, "scenario_nitram_2021");
  assert.equal(film.title, "Nitram");
  assert.equal(film.year, 2021);
  assert.equal(film.productionYear, 2020);
  assert.notEqual(film.year, film.productionYear);
  assert.equal(film.runtimeMins, 110);
  assert.deepEqual(film.directors, ["Justin Kurzel"]);
  assert.match(film.scenarioType, /production_year_2020/);
  assert.match(film.scenarioType, /24_day/);
  assert.match(film.premise, /24-day schedule across four weeks/);
  assert.match(film.premise, /ARRI Alexa Mini S35/);
  assert.match(film.premise, /Panavision Ultra Speeds/);
  assert.match(film.premise, /Super-16/);
  assert.match(film.premise, /1\.55:1/);
  assert.match(film.premise, /1\.43:1/);
  assert.match(film.premise, /does not collapse those records/);
  assert.ok(film.requiredChoicesSeed.camera.includes("ratio_discrepancy_1_55_vs_1_43"));
  assert.ok(film.requiredChoicesSeed.schedule.includes("twenty_four_days_four_weeks"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 19);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Nitram expansion is idempotent across the single canonical title identity", () => {
  const once = mergeChapterNineteenNitramExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_nitram_2021");
  const twice = mergeChapterNineteenNitramExpansion(once);
  assert.equal(twice.length, 1);
});
