import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenYoungMothersExpansionDefinitions, mergeChapterNineteenYoungMothersExpansion } from "./chapterNineteenYoungMothersExpansion.js";

test("Young Mothers source-first case locks the maternal-home long-take and natural-light evidence boundaries", () => {
  assert.equal(chapterNineteenYoungMothersExpansionDefinitions.length, 1);
  const film = chapterNineteenYoungMothersExpansionDefinitions[0];
  assert.equal(film.id, "scenario_young_mothers_2025");
  assert.equal(film.title, "Young Mothers");
  assert.equal(film.originalTitle, "Jeunes Mères");
  assert.ok(film.aliases.includes("Jeunes Meres"));
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 104);
  assert.deepEqual(film.directors, ["Jean-Pierre Dardenne", "Luc Dardenne"]);
  assert.match(film.premise, /Best Screenplay award/);
  assert.match(film.premise, /104-minute festival runtime/);
  assert.match(film.premise, /105-minute listing/);
  assert.match(film.premise, /maternal support home near Liège/);
  assert.match(film.premise, /long sequence shot as a core formal constraint/);
  assert.match(film.premise, /RED V-Raptor/);
  assert.match(film.premise, /Leitz Hugo full-frame lenses/);
  assert.match(film.premise, /38 shooting days/);
  assert.match(film.premise, /ten-day final grade/);
  assert.match(film.premise, /Do not infer total budget/);
  assert.ok(film.learningGoals.length >= 20);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Young Mothers expansion is idempotent across canonical and year-qualified title matching", () => {
  const once = mergeChapterNineteenYoungMothersExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_young_mothers_2025");
  const twice = mergeChapterNineteenYoungMothersExpansion(once);
  assert.equal(twice.length, 1);
});
