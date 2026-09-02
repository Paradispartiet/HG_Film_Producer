import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenBarbieExpansionDefinitions, mergeChapterNineteenBarbieExpansion } from "./chapterNineteenBarbieExpansion.js";

test("Barbie source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenBarbieExpansionDefinitions.length, 1);
  const film = chapterNineteenBarbieExpansionDefinitions[0];
  assert.equal(film.id, "scenario_barbie_2023");
  assert.equal(film.title, "Barbie");
  assert.equal(film.year, 2023);
  assert.equal(film.runtimeMins, 114);
  assert.deepEqual(film.directors, ["Greta Gerwig"]);
  assert.match(film.scenarioType, /oscar_original_song/);
  assert.match(film.scenarioType, /system65_large_format/);
  assert.match(film.scenarioType, /23_percent_toy_scale/);
  assert.ok(film.premise.includes("113m54s"));
  assert.ok(film.premise.includes("114m01s"));
  assert.ok(film.premise.includes("Panavision System 65"));
  assert.ok(film.premise.includes("authentic artificiality"));
  assert.ok(film.premise.includes("23% scale reduction"));
  assert.ok(film.premise.includes("minimal CGI"));
  assert.ok(film.premise.includes("Nick Houy"));
  assert.ok(film.premise.includes("Mark Ronson and Andrew Wyatt"));
  assert.ok(film.premise.includes("What Was I Made For?"));
  assert.ok(film.premise.includes("does not establish a complete final budget"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 28);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("panavision_system65_spherical"));
  assert.ok(film.requiredChoicesSeed.editing.includes("tone_shift_architecture"));
  assert.ok(film.requiredChoicesSeed.sound.includes("song_score_separation"));
});

test("Barbie expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenBarbieExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_barbie_2023");
  const twice = mergeChapterNineteenBarbieExpansion(once);
  assert.equal(twice.length, 1);
});
