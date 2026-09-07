import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenKindsOfKindnessExpansionDefinitions, mergeChapterNineteenKindsOfKindnessExpansion } from "./chapterNineteenKindsOfKindnessExpansion.js";

test("Kinds of Kindness source-first case locks 35mm anamorphic, location production and evidence boundaries", () => {
  assert.equal(chapterNineteenKindsOfKindnessExpansionDefinitions.length, 1);
  const film = chapterNineteenKindsOfKindnessExpansionDefinitions[0];
  assert.equal(film.id, "scenario_kinds_of_kindness_2024");
  assert.equal(film.title, "Kinds of Kindness");
  assert.equal(film.originalTitle, "Kinds of Kindness");
  assert.ok(film.aliases.includes("Kinds of Kindness (2024)"));
  assert.equal(film.year, 2024);
  assert.equal(film.runtimeMins, 165);
  assert.deepEqual(film.directors, ["Yorgos Lanthimos"]);
  assert.match(film.premise, /165-minute festival runtime/);
  assert.match(film.premise, /164-minute runtime/);
  assert.match(film.premise, /location-first production in New Orleans/);
  assert.match(film.premise, /ARRICAM ST 35mm anamorphic/);
  assert.match(film.premise, /VISION3 50D 5203, 250D 5207 and 500T 5219/);
  assert.match(film.premise, /DOUBLE-X 5222/);
  assert.match(film.premise, /FotoKem Los Angeles processing and 4K scans/);
  assert.match(film.premise, /piano and choir/);
  assert.match(film.premise, /Do not infer total budget/);
  assert.ok(film.learningGoals.length >= 20);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Kinds of Kindness expansion is idempotent across canonical and year-qualified title matching", () => {
  const once = mergeChapterNineteenKindsOfKindnessExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_kinds_of_kindness_2024");
  const twice = mergeChapterNineteenKindsOfKindnessExpansion(once);
  assert.equal(twice.length, 1);
});
