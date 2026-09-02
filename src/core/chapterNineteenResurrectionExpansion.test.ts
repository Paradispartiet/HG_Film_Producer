import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenResurrectionExpansionDefinitions, mergeChapterNineteenResurrectionExpansion } from "./chapterNineteenResurrectionExpansion.js";

test("Resurrection source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenResurrectionExpansionDefinitions.length, 1);
  const film = chapterNineteenResurrectionExpansionDefinitions[0];
  assert.equal(film.id, "scenario_resurrection_2025");
  assert.equal(film.title, "Resurrection");
  assert.equal(film.originalTitle, "Kuang Ye Shi Dai");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 156);
  assert.deepEqual(film.directors, ["Bi Gan"]);
  assert.match(film.scenarioType, /cannes_special_prize/);
  assert.match(film.scenarioType, /two_camera/);
  assert.match(film.scenarioType, /two_pauses/);
  assert.match(film.scenarioType, /post_cannes_vfx_completion_reedit/);
  assert.match(film.scenarioType, /m83_early_score/);
  assert.ok(film.premise.includes("155 minutes 41 seconds"));
  assert.ok(film.premise.includes("159 minutes 29 seconds"));
  assert.ok(film.premise.includes("Cannes lists Kuang Ye Shi Dai (Resurrection) at 160 minutes"));
  assert.ok(film.premise.includes("paused twice"));
  assert.ok(film.premise.includes("five films inside one production"));
  assert.ok(film.premise.includes("two cameras for different narrative functions"));
  assert.ok(film.premise.includes("about one month from preparation through shooting"));
  assert.ok(film.premise.includes("one complete take per night"));
  assert.ok(film.premise.includes("visual-effects-related material had not been completed in time"));
  assert.ok(film.premise.includes("rough-cut material to maintain momentum"));
  assert.ok(film.premise.includes("sent M83/Anthony Gonzalez a synopsis before the screenplay was complete"));
  assert.ok(film.premise.includes("does not establish a canonical camera-body"));
  assert.ok(film.learningGoals.length >= 50);
  assert.ok(film.phases.length >= 28);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.screenplay.includes("festival_release_version_provenance"));
  assert.ok(film.requiredChoicesSeed.camera.includes("two_camera_different_functions"));
  assert.ok(film.requiredChoicesSeed.editing.includes("post_cannes_vfx_completion_and_reedit"));
  assert.ok(film.requiredChoicesSeed.sound.includes("m83_pre_script_parallel_music"));
});

test("Resurrection expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenResurrectionExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_resurrection_2025");
  const twice = mergeChapterNineteenResurrectionExpansion(once);
  assert.equal(twice.length, 1);
});
