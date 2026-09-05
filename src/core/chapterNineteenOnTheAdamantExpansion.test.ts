import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenOnTheAdamantExpansionDefinitions, mergeChapterNineteenOnTheAdamantExpansion } from "./chapterNineteenOnTheAdamantExpansion.js";

test("On the Adamant source-first production case separates production year from Chapter 19 film year", () => {
  assert.equal(chapterNineteenOnTheAdamantExpansionDefinitions.length, 1);
  const film = chapterNineteenOnTheAdamantExpansionDefinitions[0];
  assert.equal(film.id, "scenario_on_the_adamant_2023");
  assert.equal(film.title, "On the Adamant");
  assert.equal(film.originalTitle, "Sur l'Adamant");
  assert.equal(film.year, 2023);
  assert.equal(film.productionYear, 2022);
  assert.notEqual(film.year, film.productionYear);
  assert.equal(film.runtimeMins, 109);
  assert.deepEqual(film.directors, ["Nicolas Philibert"]);
  assert.deepEqual(film.genres, ["Documentary"]);
  assert.match(film.scenarioType, /production_year_2022_film_year_2023/);
  assert.ok(film.premise.includes("productionYear 2022"));
  assert.ok(film.premise.includes("filmYear 2023"));
  assert.ok(film.premise.includes("1.85"));
  assert.ok(film.premise.includes("5.1"));
  assert.ok(film.premise.includes("May to November 2021"));
  assert.ok(film.premise.includes("more than one hundred hours"));
  assert.ok(film.premise.includes("refusing to invent an exact total shoot-day count"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("production_year_2022_film_year_2023"));
  assert.ok(film.requiredChoicesSeed.camera.includes("camera_package_unresolved"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 19);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("On the Adamant expansion merges idempotently by normalized title and 2023 Chapter 19 year", () => {
  const once = mergeChapterNineteenOnTheAdamantExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_on_the_adamant_2023");
  assert.equal(once[0]?.film.year, 2023);
  const twice = mergeChapterNineteenOnTheAdamantExpansion(once);
  assert.equal(twice.length, 1);
});
