import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenPrincessMononokeExpansionDefinitions } from "./chapterSeventeenPrincessMononokeExpansion.js";

test("Chapter 17 materializes Princess Mononoke as a source-first hybrid animation transition", () => {
  assert.equal(chapterSeventeenPrincessMononokeExpansionDefinitions.length, 1);
  const film = chapterSeventeenPrincessMononokeExpansionDefinitions[0];
  assert.equal(film.id, "scenario_princess_mononoke_1997");
  assert.equal(film.year, 1997);
  assert.equal(film.runtimeMins, 133);
  assert.deepEqual(film.directors, ["Hayao Miyazaki"]);
  assert.equal(film.sourceId, "ghibli_princess_mononoke_1997");
  assert.ok(film.scenarioType.includes("hand_drawn") && film.scenarioType.includes("digital_paint") && film.scenarioType.includes("compositing"));

  assert.ok(film.premise.includes("predominantly hand-drawn") && film.premise.includes("limited digital paint") && film.premise.includes("hybrid transitional workflow"));
  assert.ok(film.premise.includes("storyboard") && film.premise.includes("more than 130 minutes") && film.premise.includes("immediately revised"));
  assert.ok(film.premise.includes("Kazuhiro Wakabayashi") && film.premise.includes("voice sessions") && film.premise.includes("February into May"));
  assert.ok(film.premise.includes("part of the animation finishing was changed to digital paint") && film.premise.includes("Silicon Graphics"));
  assert.ok(film.premise.includes("digital-paint, CG and photography departments") && film.premise.includes("final compositing remained"));
  assert.ok(film.premise.includes("NEXT production") && film.premise.includes("full-scale computerization"));
  assert.ok(film.premise.includes("Takeshi Seyama") && film.premise.includes("Atsushi Okui"));
  assert.ok(film.premise.includes("133 minutes") && film.premise.includes("Miramax") && film.premise.includes("Neil Gaiman"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("hybrid transitional") && goal.includes("fully digital")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("storyboard") && goal.includes("exceeded 130 minutes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("part of finishing shifted to digital paint")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Silicon Graphics") && goal.includes("software")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("digital-paint, CG and photography departments")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("next production") && goal.includes("full-scale computerization")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Miramax") && goal.includes("Neil Gaiman")));

  const storyboard = film.phases.find((phase) => phase.id === "storyboard_and_schedule");
  assert.ok(storyboard?.player_task.includes("over-130-minute storyboard") && storyboard.player_task.includes("revision"));
  const paint = film.phases.find((phase) => phase.id === "colour_and_finishing");
  assert.ok(paint?.player_task.includes("partial digital-paint change") && paint.player_task.includes("whole feature"));
  const cg = film.phases.find((phase) => phase.id === "cg_and_infrastructure");
  assert.ok(cg?.player_task.includes("Silicon Graphics") && cg.player_task.includes("software"));
  const photo = film.phases.find((phase) => phase.id === "photography_and_compositing");
  assert.ok(photo?.player_task.includes("Atsushi Okui") && photo.player_task.includes("compositing"));
  const sound = film.phases.find((phase) => phase.id === "japanese_voice_recording");
  assert.ok(sound?.player_task.includes("Wakabayashi") && sound.player_task.includes("English"));
  const release = film.phases.find((phase) => phase.id === "release_and_localization");
  assert.ok(release?.player_task.includes("12 July 1997") && release.player_task.includes("Miramax/Gaiman"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_stand_lens_scan_resolution_or_lab"));
  assert.ok(film.requiredChoicesSeed.sound.includes("original_japanese_sound_separate_from_miramax_dub"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 10);
});
