import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenPerfectDaysExpansionDefinitions, mergeChapterNineteenPerfectDaysExpansion } from "./chapterNineteenPerfectDaysExpansion.js";

test("Perfect Days source-first case locks chronology, camera method, format provenance and evidence boundaries", () => {
  assert.equal(chapterNineteenPerfectDaysExpansionDefinitions.length, 1);
  const film = chapterNineteenPerfectDaysExpansionDefinitions[0];
  assert.equal(film.id, "scenario_perfect_days_2023");
  assert.equal(film.title, "Perfect Days");
  assert.equal(film.originalTitle, "Perfect Days");
  assert.equal(film.year, 2023);
  assert.equal(film.productionYear, 2023);
  assert.equal(film.principalPhotographyYear, 2022);
  assert.equal(film.runtimeMins, 124);
  assert.deepEqual(film.directors, ["Wim Wenders"]);
  assert.match(film.premise, /sixteen-day/i);
  assert.match(film.premise, /17 days/i);
  assert.match(film.premise, /16-versus-17-day discrepancy/i);
  assert.match(film.premise, /October 2022/i);
  assert.match(film.premise, /Sony VENICE/);
  assert.match(film.premise, /Canon K35/);
  assert.match(film.premise, /shoulder/i);
  assert.match(film.premise, /123\/124\/125-minute/);
  assert.match(film.premise, /1\.33-versus-1\.85/);
  assert.match(film.premise, /exact VENICE version/);
  assert.ok(film.learningGoals.length >= 34);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Perfect Days expansion is idempotent across canonical title matching", () => {
  const once = mergeChapterNineteenPerfectDaysExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_perfect_days_2023");
  const twice = mergeChapterNineteenPerfectDaysExpansion(once);
  assert.equal(twice.length, 1);
});
