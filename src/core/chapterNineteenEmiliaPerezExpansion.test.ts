import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenEmiliaPerezExpansionDefinitions, mergeChapterNineteenEmiliaPerezExpansion } from "./chapterNineteenEmiliaPerezExpansion.js";

test("Emilia Perez source-first case locks chronology, studio system, camera provenance and evidence boundaries", () => {
  assert.equal(chapterNineteenEmiliaPerezExpansionDefinitions.length, 1);
  const film = chapterNineteenEmiliaPerezExpansionDefinitions[0];
  assert.equal(film.id, "scenario_emilia_perez_2024");
  assert.equal(film.title, "Emilia Pérez");
  assert.equal(film.originalTitle, "Emilia Pérez");
  assert.ok(film.aliases.includes("Emilia Perez"));
  assert.equal(film.year, 2024);
  assert.equal(film.productionYear, 2023);
  assert.equal(film.principalPhotographyYear, 2023);
  assert.equal(film.runtimeMins, 130);
  assert.deepEqual(film.directors, ["Jacques Audiard"]);
  assert.match(film.premise, /45 Paris studio days and 10 Mexico City days/);
  assert.match(film.premise, /Sony VENICE 1 and VENICE 2/);
  assert.match(film.premise, /full-frame 8K/);
  assert.match(film.premise, /up to 130 SkyPanels/);
  assert.match(film.premise, /500 effects shots/);
  assert.match(film.premise, /2024 production-year record and Pathé 2023 production-year record/);
  assert.match(film.premise, /Do not infer total budget/);
  assert.ok(film.learningGoals.length >= 28);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Emilia Perez expansion is idempotent across accented and ASCII title matching", () => {
  const once = mergeChapterNineteenEmiliaPerezExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_emilia_perez_2024");
  const twice = mergeChapterNineteenEmiliaPerezExpansion(once);
  assert.equal(twice.length, 1);
});
