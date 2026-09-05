import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenAhedsKneeExpansionDefinitions, mergeChapterNineteenAhedsKneeExpansion } from "./chapterNineteenAhedsKneeExpansion.js";

test("Ahed's Knee source-first case locks schedule, Arava and camera-method boundaries", () => {
  assert.equal(chapterNineteenAhedsKneeExpansionDefinitions.length, 1);
  const film = chapterNineteenAhedsKneeExpansionDefinitions[0];
  assert.equal(film.id, "scenario_aheds_knee_2021");
  assert.equal(film.title, "Ahed's Knee");
  assert.equal(film.originalTitle, "Ha’berech");
  assert.equal(film.year, 2021);
  assert.equal(film.runtimeMins, 109);
  assert.deepEqual(film.directors, ["Nadav Lapid"]);
  assert.match(film.scenarioType, /18_day_arava_shoot/);
  assert.match(film.premise, /18-day shoot/);
  assert.match(film.premise, /Arava desert/);
  assert.match(film.premise, /camera into another actor/);
  assert.match(film.premise, /Shai Goldman/);
  assert.match(film.premise, /Nili Feller/);
  assert.match(film.premise, /2\.39:1/);
  assert.match(film.premise, /Do not infer camera body/);
  assert.ok(film.requiredChoicesSeed.schedule.includes("eighteen_day_shoot"));
  assert.ok(film.requiredChoicesSeed.camera.includes("camera_package_unresolved"));
  assert.ok(film.learningGoals.length >= 27);
  assert.ok(film.phases.length >= 18);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Ahed's Knee expansion is idempotent across English and original-title identity", () => {
  const once = mergeChapterNineteenAhedsKneeExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_aheds_knee_2021");
  const twice = mergeChapterNineteenAhedsKneeExpansion(once);
  assert.equal(twice.length, 1);
});
