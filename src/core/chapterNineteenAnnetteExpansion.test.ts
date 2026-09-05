import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenAnnetteExpansionDefinitions, mergeChapterNineteenAnnetteExpansion } from "./chapterNineteenAnnetteExpansion.js";

test("Annette source-first case locks chronology, live singing, camera and puppet boundaries", () => {
  assert.equal(chapterNineteenAnnetteExpansionDefinitions.length, 1);
  const film = chapterNineteenAnnetteExpansionDefinitions[0];
  assert.equal(film.id, "scenario_annette_2021");
  assert.equal(film.title, "Annette");
  assert.equal(film.year, 2021);
  assert.equal(film.runtimeMins, 140);
  assert.deepEqual(film.directors, ["Leos Carax"]);
  assert.match(film.scenarioType, /production_year_2020/);
  assert.match(film.scenarioType, /live_singing/);
  assert.match(film.premise, /production year 2020/);
  assert.match(film.premise, /Sony VENICE/);
  assert.match(film.premise, /X-OCN ST/);
  assert.match(film.premise, /16-week shoot/);
  assert.match(film.premise, /only one week in Los Angeles/);
  assert.match(film.premise, /Estelle Charlier/);
  assert.match(film.premise, /Romuald Collinet/);
  assert.match(film.premise, /erase puppeteers/);
  assert.ok(film.requiredChoicesSeed.performance.includes("live_singing_on_set"));
  assert.ok(film.requiredChoicesSeed.puppet.includes("limited_post_erasure"));
  assert.ok(film.learningGoals.length >= 27);
  assert.ok(film.phases.length >= 22);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Annette expansion is idempotent", () => {
  const once = mergeChapterNineteenAnnetteExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_annette_2021");
  const twice = mergeChapterNineteenAnnetteExpansion(once);
  assert.equal(twice.length, 1);
});
