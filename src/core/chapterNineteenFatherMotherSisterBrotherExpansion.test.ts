import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenFatherMotherSisterBrotherExpansionDefinitions, mergeChapterNineteenFatherMotherSisterBrotherExpansion } from "./chapterNineteenFatherMotherSisterBrotherExpansion.js";

test("Father Mother Sister Brother source-first case locks the multi-country triptych production contract", () => {
  assert.equal(chapterNineteenFatherMotherSisterBrotherExpansionDefinitions.length, 1);
  const film = chapterNineteenFatherMotherSisterBrotherExpansionDefinitions[0];
  assert.equal(film.id, "scenario_father_mother_sister_brother_2025");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 110);
  assert.deepEqual(film.directors, ["Jim Jarmusch"]);
  assert.match(film.scenarioType, /venice_2025_golden_lion/);
  assert.match(film.premise, /about ten shooting days/);
  assert.match(film.premise, /Frederick Elmes/);
  assert.match(film.premise, /Yorick Le Saux/);
  assert.match(film.premise, /1.85:1/);
  assert.match(film.premise, /DCP and 5.1/);
  assert.ok(film.requiredChoicesSeed.camera.includes("camera_package_unresolved"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Father Mother Sister Brother expansion is idempotent by title/year", () => {
  const once = mergeChapterNineteenFatherMotherSisterBrotherExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_father_mother_sister_brother_2025");
  const twice = mergeChapterNineteenFatherMotherSisterBrotherExpansion(once);
  assert.equal(twice.length, 1);
});
