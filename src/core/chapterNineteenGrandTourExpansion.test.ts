import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenGrandTourExpansionDefinitions, mergeChapterNineteenGrandTourExpansion } from "./chapterNineteenGrandTourExpansion.js";

test("Grand Tour source-first case locks split production method, 16mm provenance and evidence boundaries", () => {
  assert.equal(chapterNineteenGrandTourExpansionDefinitions.length, 1);
  const film = chapterNineteenGrandTourExpansionDefinitions[0];
  assert.equal(film.id, "scenario_grand_tour_2024");
  assert.equal(film.title, "Grand Tour");
  assert.equal(film.originalTitle, "Grand Tour");
  assert.ok(film.aliases.includes("Grand Tour (2024)"));
  assert.equal(film.year, 2024);
  assert.equal(film.runtimeMins, 129);
  assert.deepEqual(film.directors, ["Miguel Gomes"]);
  assert.match(film.premise, /2020 journey interrupted by COVID-19/);
  assert.match(film.premise, /remotely directed 2022 phase/);
  assert.match(film.premise, /two large Lisbon studios and three larger Rome studios/);
  assert.match(film.premise, /black-and-white 16mm/);
  assert.match(film.premise, /incandescent-filament studio lighting/);
  assert.match(film.premise, /DCP and 5\.1/);
  assert.match(film.premise, /Do not infer exact camera bodies/);
  assert.ok(film.learningGoals.length >= 20);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Grand Tour expansion is idempotent across canonical and year-qualified title matching", () => {
  const once = mergeChapterNineteenGrandTourExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_grand_tour_2024");
  const twice = mergeChapterNineteenGrandTourExpansion(once);
  assert.equal(twice.length, 1);
});
