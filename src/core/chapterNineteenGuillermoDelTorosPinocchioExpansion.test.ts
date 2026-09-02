import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenGuillermoDelTorosPinocchioExpansionDefinitions, mergeChapterNineteenGuillermoDelTorosPinocchioExpansion } from "./chapterNineteenGuillermoDelTorosPinocchioExpansion.js";

test("Guillermo del Toro's Pinocchio source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenGuillermoDelTorosPinocchioExpansionDefinitions.length, 1);
  const film = chapterNineteenGuillermoDelTorosPinocchioExpansionDefinitions[0];
  assert.equal(film.id, "scenario_guillermo_del_toros_pinocchio_2022");
  assert.equal(film.title, "Guillermo del Toro's Pinocchio");
  assert.equal(film.year, 2022);
  assert.equal(film.runtimeMins, 117);
  assert.deepEqual(film.directors, ["Guillermo del Toro", "Mark Gustafson"]);
  assert.equal(film.sourceId, "netflix_guillermo_del_toros_pinocchio_stop_motion_2022");
  assert.match(film.scenarioType, /oscar_best_animated_feature/);
  assert.match(film.scenarioType, /940_capture_days/);
  assert.match(film.scenarioType, /layered_lighting/);
  assert.match(film.scenarioType, /mono_to_atmos/);
  assert.ok(film.premise.includes("116 minutes 36 seconds"));
  assert.ok(film.premise.includes("940 capture days"));
  assert.ok(film.premise.includes("maximum of 41 animators across 60 sets"));
  assert.ok(film.premise.includes("32 Pinocchio puppets"));
  assert.ok(film.premise.includes("mechanical facial systems"));
  assert.ok(film.premise.includes("more than 100 articulated components/hinges"));
  assert.ok(film.premise.includes("Canon 5D Mark IV"));
  assert.ok(film.premise.includes("tungsten direct/key light with LED bounce/indirect light"));
  assert.ok(film.premise.includes("Avid project"));
  assert.ok(film.premise.includes("mono presentation"));
  assert.ok(film.premise.includes("does not establish a single audited final production budget"));
  assert.ok(film.learningGoals.length >= 60);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.screenplay.includes("940_capture_days"));
  assert.ok(film.requiredChoicesSeed.camera.includes("canon_5d_mark_iv"));
  assert.ok(film.requiredChoicesSeed.editing.includes("avid_storyboard_to_vfx_pipeline"));
  assert.ok(film.requiredChoicesSeed.sound.includes("mono_to_atmos_arc"));
});

test("Guillermo del Toro's Pinocchio expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenGuillermoDelTorosPinocchioExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_guillermo_del_toros_pinocchio_2022");
  const twice = mergeChapterNineteenGuillermoDelTorosPinocchioExpansion(once);
  assert.equal(twice.length, 1);
});
