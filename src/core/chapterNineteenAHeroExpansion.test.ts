import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenAHeroExpansionDefinitions, mergeChapterNineteenAHeroExpansion } from "./chapterNineteenAHeroExpansion.js";

test("A Hero source-first case locks the Cannes/Shiraz/rehearsal/camera-delivery contract", () => {
  assert.equal(chapterNineteenAHeroExpansionDefinitions.length, 1);
  const film = chapterNineteenAHeroExpansionDefinitions[0];
  assert.equal(film.id, "scenario_a_hero_2021");
  assert.equal(film.title, "A Hero");
  assert.equal(film.originalTitle, "Ghahreman");
  assert.equal(film.year, 2021);
  assert.equal(film.runtimeMins, 127);
  assert.deepEqual(film.directors, ["Asghar Farhadi"]);
  assert.match(film.scenarioType, /cannes_2021_grand_prix/);
  assert.match(film.premise, /Shiraz/);
  assert.match(film.premise, /ten-month rehearsal/);
  assert.match(film.premise, /ALEXA Mini LF/);
  assert.match(film.premise, /Signature Prime/);
  assert.match(film.premise, /2K 2.39:1/);
  assert.match(film.premise, /5.1/);
  assert.ok(film.requiredChoicesSeed.camera.includes("camera_settings_unresolved"));
  assert.ok(film.learningGoals.length >= 24);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("A Hero expansion is idempotent across A Hero/Ghahreman title-year aliases", () => {
  const once = mergeChapterNineteenAHeroExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_a_hero_2021");
  const twice = mergeChapterNineteenAHeroExpansion(once);
  assert.equal(twice.length, 1);
});
