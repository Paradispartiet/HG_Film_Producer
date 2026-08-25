import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenSpiderVerseExpansionDefinitions } from "./chapterEighteenSpiderVerseExpansion.js";

test("Chapter 18 materializes Spider-Verse as a source-first stylized-animation, compositing, editorial and Atmos case", () => {
  assert.equal(chapterEighteenSpiderVerseExpansionDefinitions.length, 1);
  const film = chapterEighteenSpiderVerseExpansionDefinitions[0];
  assert.equal(film.id, "scenario_spider_man_into_the_spider_verse_2018");
  assert.equal(film.year, 2018);
  assert.equal(film.runtimeMins, 117);
  assert.deepEqual(film.directors, ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"]);

  assert.ok(film.scenarioType.includes("cg_2d_hybrid") && film.scenarioType.includes("frame_modulation") && film.scenarioType.includes("atmos"));
  assert.ok(film.premise.includes("artist intention over photoreal accuracy") && film.premise.includes("changes to both technology and workflow"));
  assert.ok(film.premise.includes("converted to geometry and rigged") && film.premise.includes("assisted algorithmically"));
  assert.ok(film.premise.includes("modulation between twos and ones") && film.premise.includes("not a blanket claim"));
  assert.ok(film.premise.includes("motion blur") && film.premise.includes("geometry smears"));
  assert.ok(film.premise.includes("more than twenty-five compositor tools") && film.premise.includes("Hatcher and Thresher"));
  assert.ok(film.premise.includes("Nuke") && film.premise.includes("artist-controlled shot by shot"));
  assert.ok(film.premise.includes("more than 170 animators") && film.premise.includes("nine leads"));
  assert.ok(film.premise.includes("story development through boards, layout, animation and successive versions"));
  assert.ok(film.premise.includes("natively in Dolby Atmos") && film.premise.includes("Daniel Pemberton"));
  assert.ok(film.premise.includes("117-minute original theatrical version"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("miles_identity_arc"));
  assert.ok(film.requiredChoicesSeed.camera.includes("frame_modulation_ones_twos"));
  assert.ok(film.requiredChoicesSeed.editing.includes("story_reel_iteration"));
  assert.ok(film.requiredChoicesSeed.sound.includes("native_atmos_mix"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("3D CG") && goal.includes("2D")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("twos") && goal.includes("ones")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Hatcher") && goal.includes("Thresher")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("animation editorial") && goal.includes("story development")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("final mix") && goal.includes("Dolby Atmos")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Compare Spider-Verse with Spirited Away")));

  assert.ok(film.phases.find((phase) => phase.id === "frame_modulation")?.player_task.includes("ones, twos or mixed timing"));
  assert.ok(film.phases.find((phase) => phase.id === "compositor_toolset")?.player_task.includes("artist-facing tools"));
  assert.ok(film.phases.find((phase) => phase.id === "story_reel")?.player_task.includes("before expensive final animation"));
  assert.ok(film.phases.find((phase) => phase.id === "atmos_mix")?.player_task.includes("native Atmos"));
  assert.ok(film.phases.find((phase) => phase.id === "method_audit")?.player_task.includes("source hierarchy"));

  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 28);
});
