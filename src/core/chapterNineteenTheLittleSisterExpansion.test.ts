import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenTheLittleSisterExpansionDefinitions, mergeChapterNineteenTheLittleSisterExpansion } from "./chapterNineteenTheLittleSisterExpansion.js";

test("The Little Sister source-first case locks the multicamera, casting, seasonal and runtime evidence boundaries", () => {
  assert.equal(chapterNineteenTheLittleSisterExpansionDefinitions.length, 1);
  const film = chapterNineteenTheLittleSisterExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_little_sister_2025");
  assert.equal(film.title, "The Little Sister");
  assert.equal(film.originalTitle, "La Petite Dernière");
  assert.ok(film.aliases.includes("La Petite Derniere"));
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 106);
  assert.deepEqual(film.directors, ["Hafsia Herzi"]);
  assert.match(film.premise, /Award for Best Actress/);
  assert.match(film.premise, /106-minute festival runtime/);
  assert.match(film.premise, /107-minute listing/);
  assert.match(film.premise, /more than a year/);
  assert.match(film.premise, /winter phase and a spring phase/);
  assert.match(film.premise, /three ALEXA Mini cameras/);
  assert.match(film.premise, /natural room\/location light/);
  assert.match(film.premise, /approximately 150 winter stills/);
  assert.match(film.premise, /Do not infer total budget/);
  assert.ok(film.learningGoals.length >= 20);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("The Little Sister expansion is idempotent across canonical and French title matching", () => {
  const once = mergeChapterNineteenTheLittleSisterExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_the_little_sister_2025");
  const twice = mergeChapterNineteenTheLittleSisterExpansion(once);
  assert.equal(twice.length, 1);
});
