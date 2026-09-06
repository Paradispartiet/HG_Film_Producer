import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenFallenLeavesExpansionDefinitions, mergeChapterNineteenFallenLeavesExpansion } from "./chapterNineteenFallenLeavesExpansion.js";

test("Fallen Leaves source-first case locks aliases, chronology, 35mm method and evidence boundaries", () => {
  assert.equal(chapterNineteenFallenLeavesExpansionDefinitions.length, 1);
  const film = chapterNineteenFallenLeavesExpansionDefinitions[0];
  assert.equal(film.id, "scenario_fallen_leaves_2023");
  assert.equal(film.title, "Fallen Leaves");
  assert.equal(film.originalTitle, "Kuolleet lehdet");
  assert.ok(film.aliases.includes("Les Feuilles mortes"));
  assert.equal(film.year, 2023);
  assert.equal(film.productionYear, 2023);
  assert.equal(film.principalPhotographyYear, 2022);
  assert.equal(film.runtimeMins, 81);
  assert.deepEqual(film.directors, ["Aki Kaurismäki"]);
  assert.match(film.premise, /second half of August/);
  assert.match(film.premise, /35 mm/);
  assert.match(film.premise, /ARRI Analog/);
  assert.match(film.premise, /Ultra Primes/);
  assert.match(film.premise, /one and only take/);
  assert.match(film.premise, /EUR 650,000/);
  assert.match(film.premise, /Do not infer an exact ARRI body/);
  assert.ok(film.learningGoals.length >= 34);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Fallen Leaves expansion is idempotent across canonical and alternate titles", () => {
  const once = mergeChapterNineteenFallenLeavesExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_fallen_leaves_2023");
  const twice = mergeChapterNineteenFallenLeavesExpansion(once);
  assert.equal(twice.length, 1);
});
