import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenSpiritedAwayExpansionDefinitions } from "./chapterEighteenSpiritedAwayExpansion.js";

test("Chapter 18 materializes Spirited Away as a source-first hand-drawn/digital-finishing animation case", () => {
  assert.equal(chapterEighteenSpiritedAwayExpansionDefinitions.length, 1);
  const film = chapterEighteenSpiritedAwayExpansionDefinitions[0];
  assert.equal(film.id, "scenario_spirited_away_2001");
  assert.equal(film.year, 2001);
  assert.equal(film.runtimeMins, 125);
  assert.deepEqual(film.directors, ["Hayao Miyazaki"]);
  assert.equal(film.sourceId, "ghibli_spirited_away_2001");
  assert.ok(film.scenarioType.includes("hand_drawn_2d") && film.scenarioType.includes("digital_paint"));

  assert.ok(film.premise.includes("1,415 shots") && film.premise.includes("1,200"));
  assert.ok(film.premise.includes("hand-drawn") && film.premise.includes("pencil-drawn"));
  assert.ok(film.premise.includes("wave patterns") && film.premise.includes("bubbling water"));
  assert.ok(film.premise.includes("scan") && film.premise.includes("digital paint"));
  assert.ok(film.premise.includes("10,000 frames") && film.premise.includes("ten days"));
  assert.ok(film.premise.includes("traditional cels") && film.premise.includes("Michiyo Yasuda"));
  assert.ok(film.premise.includes("Masashi Ando") && film.premise.includes("Yoji Takeshige"));
  assert.ok(film.premise.includes("orchestra recording") && film.premise.includes("DTS mastering"));
  assert.ok(film.premise.includes("75th Animated Feature Film"));
  assert.ok(film.premise.includes("Do not invent exact software versions"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("hand-drawn 2D") && goal.includes("3D-CG")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("1,415-shot")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Digital Betacam") === false && goal.includes("digital scan")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("fully digital production") && goal.includes("pencil-drawn")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Masashi Ando") && goal.includes("Kitaro Kosaka")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("May 28 orchestra")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("DTS mastering")));

  const storyboard = film.phases.find((phase) => phase.id === "storyboard_parallel_development");
  assert.ok(storyboard?.player_task.includes("storyboard-led") && storyboard.player_task.includes("screenplay"));
  const drawing = film.phases.find((phase) => phase.id === "hand_drawn_animation");
  assert.ok(drawing?.label.includes("pencil") && drawing.player_task.includes("hand-made"));
  const paint = film.phases.find((phase) => phase.id === "scan_cleanup_paint");
  assert.ok(paint?.player_task.includes("scan/cleanup/paint") && paint.player_task.includes("software versions"));
  const effects = film.phases.find((phase) => phase.id === "digital_compositing_effects");
  assert.ok(effects?.player_task.includes("water") && effects.player_task.includes("2D/pencil-drawn"));
  const sound = film.phases.find((phase) => phase.id === "sound_final_mix");
  assert.ok(sound?.player_task.includes("DTS mastering") && sound.player_task.includes("hardware"));

  assert.ok(film.requiredChoicesSeed.camera.includes("hand_drawn_pencil_animation_base"));
  assert.ok(film.requiredChoicesSeed.camera.includes("digital_scan_paint_composite_pipeline"));
  assert.ok(film.learningGoals.length >= 20);
  assert.ok(film.phases.length >= 12);
});
