import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenKPopDemonHuntersExpansionDefinitions, mergeChapterNineteenKPopDemonHuntersExpansion } from "./chapterNineteenKPopDemonHuntersExpansion.js";

test("KPop Demon Hunters source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenKPopDemonHuntersExpansionDefinitions.length, 1);
  const film = chapterNineteenKPopDemonHuntersExpansionDefinitions[0];
  assert.equal(film.id, "scenario_kpop_demon_hunters_2025");
  assert.equal(film.title, "KPop Demon Hunters");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 100);
  assert.deepEqual(film.directors, ["Maggie Kang", "Chris Appelhans"]);
  assert.equal(film.sourceId, "sony_kpop_demon_hunters_spa_imageworks_2026");
  assert.match(film.scenarioType, /oscar_animated_feature_original_song/);
  assert.match(film.scenarioType, /unreal_engine_rough_layout/);
  assert.match(film.scenarioType, /chibi_face/);
  assert.match(film.scenarioType, /hand_keyed_animation_no_full_mocap/);
  assert.ok(film.premise.includes("99 minutes 37 seconds"));
  assert.ok(film.premise.includes("Chibi Face"));
  assert.ok(film.premise.includes("Motion-Blur Spheres"));
  assert.ok(film.premise.includes("hand-keyed animation"));
  assert.ok(film.premise.includes("Unreal Engine"));
  assert.ok(film.premise.includes("does not prove Unreal Engine was the final renderer"));
  assert.ok(film.premise.includes("200-300 drawings"));
  assert.ok(film.premise.includes("23 costume changes"));
  assert.ok(film.premise.includes("seven-page filmmakers' memo"));
  assert.ok(film.premise.includes("Avid Media Composer"));
  assert.ok(film.premise.includes("AAF handoff to Pro Tools"));
  assert.ok(film.premise.includes("six-week score window"));
  assert.ok(film.premise.includes("does not establish a complete production budget"));
  assert.ok(film.learningGoals.length >= 60);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("unreal_rough_layout_previs_only"));
  assert.ok(film.requiredChoicesSeed.editing.includes("storyboard_first_avid_media_composer"));
  assert.ok(film.requiredChoicesSeed.sound.includes("golden_seven_page_memo"));
});

test("KPop Demon Hunters expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenKPopDemonHuntersExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_kpop_demon_hunters_2025");
  const twice = mergeChapterNineteenKPopDemonHuntersExpansion(once);
  assert.equal(twice.length, 1);
});
