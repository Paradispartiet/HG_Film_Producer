import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenFlowExpansionDefinitions, mergeChapterNineteenFlowExpansion } from "./chapterNineteenFlowExpansion.js";

test("Flow source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenFlowExpansionDefinitions.length, 1);
  const film = chapterNineteenFlowExpansionDefinitions[0];
  assert.equal(film.id, "scenario_flow_2024");
  assert.equal(film.title, "Flow");
  assert.equal(film.originalTitle, "Straume");
  assert.equal(film.year, 2024);
  assert.equal(film.runtimeMins, 85);
  assert.deepEqual(film.directors, ["Gints Zilbalodis"]);
  assert.equal(film.sourceId, "festival_cannes_flow_2024");
  assert.match(film.scenarioType, /independent_low_mid_budget/);
  assert.match(film.scenarioType, /blender_eevee/);
  assert.match(film.scenarioType, /no_motion_capture/);
  assert.ok(film.premise.includes("five-and-a-half-year"));
  assert.ok(film.premise.includes("€3.5 million"));
  assert.ok(film.premise.includes("0.5 to 10 seconds"));
  assert.ok(film.premise.includes("no render farm"));
  assert.ok(film.premise.includes("no compositing pass"));
  assert.ok(film.premise.includes("hand animated"));
  assert.ok(film.premise.includes("20 percent of the animation"));
  assert.ok(film.premise.includes("remain unresolved"));
  assert.ok(film.learningGoals.length >= 50);
  assert.ok(film.phases.length >= 32);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.phases.find((phase) => phase.id === "water_problem_split")?.player_task.includes("distinct technical problems"));
  assert.ok(film.phases.find((phase) => phase.id === "hand_animation")?.player_task.includes("without motion capture"));
  assert.ok(film.phases.find((phase) => phase.id === "anti_myth_audit")?.player_task.includes("specialist labor"));
  assert.ok(film.requiredChoicesSeed.camera.includes("blender_eevee"));
  assert.ok(film.requiredChoicesSeed.sound.includes("take_five_foley_and_mix"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("runtime_variance_84_85"));
});

test("Flow expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenFlowExpansion([]);
  assert.equal(once.length, 1);
  const twice = mergeChapterNineteenFlowExpansion(once);
  assert.equal(twice.length, 1);
  assert.equal(twice[0]?.id, "scenario_flow_2024");
});
