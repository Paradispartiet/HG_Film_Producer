import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenToriAndLokitaExpansionDefinitions, mergeChapterNineteenToriAndLokitaExpansion } from "./chapterNineteenToriAndLokitaExpansion.js";

test("Tori and Lokita source-first case locks aliases, chronology, rehearsal, camera and sound boundaries", () => {
  assert.equal(chapterNineteenToriAndLokitaExpansionDefinitions.length, 1);
  const film = chapterNineteenToriAndLokitaExpansionDefinitions[0];
  assert.equal(film.id, "scenario_tori_and_lokita_2022");
  assert.equal(film.title, "Tori and Lokita");
  assert.equal(film.originalTitle, "Tori et Lokita");
  assert.ok(film.aliases.includes("Tori & Lokita"));
  assert.equal(film.year, 2022);
  assert.equal(film.productionYear, 2022);
  assert.equal(film.principalPhotographyYear, 2021);
  assert.equal(film.runtimeMins, 88);
  assert.deepEqual(film.directors, ["Jean-Pierre Dardenne", "Luc Dardenne"]);
  assert.match(film.premise, /19 July to 28 September 2021/);
  assert.match(film.premise, /11-week shoot/);
  assert.match(film.premise, /RED Komodo/);
  assert.match(film.premise, /RED Monstro at 2500 ISO/);
  assert.match(film.premise, /40mm Zeiss Master Prime/);
  assert.match(film.premise, /roughly five weeks of rehearsal/);
  assert.match(film.premise, /diegetic sound concept/);
  assert.ok(film.requiredChoicesSeed.camera.includes("handheld_actor_eye_height"));
  assert.ok(film.requiredChoicesSeed.runtime.includes("screen_brussels_project_runtime_discrepancy"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Tori and Lokita expansion is idempotent across canonical and alternate titles", () => {
  const once = mergeChapterNineteenToriAndLokitaExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_tori_and_lokita_2022");
  const twice = mergeChapterNineteenToriAndLokitaExpansion(once);
  assert.equal(twice.length, 1);
});
