import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenTwentyEightDaysLaterExpansionDefinitions } from "./chapterEighteenTwentyEightDaysLaterExpansion.js";

test("Chapter 18 materializes 28 Days Later as a source-first MiniDV, multi-camera London and digital-to-film post case", () => {
  assert.equal(chapterEighteenTwentyEightDaysLaterExpansionDefinitions.length, 1);
  const film = chapterEighteenTwentyEightDaysLaterExpansionDefinitions[0];
  assert.equal(film.id, "scenario_28_days_later_2002");
  assert.equal(film.year, 2002);
  assert.equal(film.runtimeMins, 113);
  assert.deepEqual(film.directors, ["Danny Boyle"]);

  assert.ok(film.scenarioType.includes("minidv") && film.scenarioType.includes("canon_xl1") && film.scenarioType.includes("filmout"));
  assert.ok(film.premise.includes("Andrew Macdonald") && film.premise.includes("Alex Garland"));
  assert.ok(film.premise.includes("Anthony Dod Mantle") && film.premise.includes("Chris Gill"));
  assert.ok(film.premise.includes("Mark Tildesley") && film.premise.includes("Glenn Freemantle"));
  assert.ok(film.premise.includes("as many as eight Canon XL1 cameras"));
  assert.ok(film.premise.includes("Frame Movie Mode") && film.premise.includes("Canon EC 6-40mm") && film.premise.includes("EJ 50-150mm"));
  assert.ok(film.premise.includes("125 D-1 tapes") && film.premise.includes("seven D-1 masters"));
  assert.ok(film.premise.includes("Linux Shake") && film.premise.includes("FilmTel") && film.premise.includes("2K"));
  assert.ok(film.premise.includes("Kodak Vision Color Intermediate 5242") && film.premise.includes("Fuji HiCon 3519D") && film.premise.includes("Vision 2383"));
  assert.ok(film.premise.includes("upconversion and 2K interpolation did not create original image detail"));
  assert.ok(film.premise.includes("microphones, recorders") && film.premise.includes("track counts"));

  assert.ok(film.requiredChoicesSeed.camera.includes("pal_canon_xl1_minidv"));
  assert.ok(film.requiredChoicesSeed.editing.includes("d1_conform"));
  assert.ok(film.requiredChoicesSeed.sound.includes("unknown_equipment_boundary"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("4x3") && goal.includes("Frame Movie Mode")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("eight Canon XL1")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("D-1 4:2:2") && goal.includes("MiniDV")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Arrilaser") && goal.includes("5242")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("sound") && goal.includes("equipment")));

  assert.ok(film.phases.find((phase) => phase.id === "minidv_format")?.player_task.includes("native 2K"));
  assert.ok(film.phases.find((phase) => phase.id === "eight_camera_plan")?.player_task.includes("traffic-controlled"));
  assert.ok(film.phases.find((phase) => phase.id === "d1_conform")?.player_task.includes("lost MiniDV chroma detail"));
  assert.ok(film.phases.find((phase) => phase.id === "arrilaser_filmout")?.player_task.includes("digital-to-film boundary"));
  assert.ok(film.phases.find((phase) => phase.id === "sound_unknowns")?.player_task.includes("channel counts"));

  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 30);
});
