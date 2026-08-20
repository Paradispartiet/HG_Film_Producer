import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenDoTheRightThingExpansionDefinitions } from "./chapterSixteenDoTheRightThingExpansion.js";

test("Chapter 16 materializes Do the Right Thing as the final Black American location-production P0 Production Case", () => {
  assert.equal(chapterSixteenDoTheRightThingExpansionDefinitions.length, 1);
  const film = chapterSixteenDoTheRightThingExpansionDefinitions[0];
  assert.equal(film.id, "scenario_do_the_right_thing_1989");
  assert.equal(film.year, 1989);
  assert.equal(film.runtimeMins, 120);
  assert.deepEqual(film.directors, ["Spike Lee"]);
  assert.equal(film.sourceId, "afi_do_the_right_thing_1989");
  assert.ok(film.scenarioType.includes("forty_acres_universal_bed_stuy_block"));
  assert.ok(film.premise.includes("18 July to 14 September 1988"));
  assert.ok(film.premise.includes("Stuyvesant Avenue between Lexington and Quincy"));
  assert.ok(film.premise.includes("working pizzeria") && film.premise.includes("block party"));
  assert.ok(film.premise.includes("$6.2 million") && film.premise.includes("$6.5 million"));
  assert.ok(film.premise.includes("Fight the Power") && film.premise.includes("commissioned anthem"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("community-production infrastructure") && goal.includes("not a universal")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("historical set-security") && goal.includes("not as a repeatable method")));
  const researchPhase = film.phases.find((phase) => phase.id === "research");
  assert.ok(researchPhase?.player_task.includes("distinguish historical community engagement") && researchPhase.player_task.includes("can control a neighborhood by default"));
  const releasePhase = film.phases.find((phase) => phase.id === "release");
  assert.ok(releasePhase?.player_task.includes("1988 shoot") && releasePhase.player_task.includes("1989 Cannes/theatrical release") && releasePhase.player_task.includes("later canonization/restoration"));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_or_exposure_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_or_mix_chain"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
