import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenASeparationExpansionDefinitions } from "./chapterEighteenASeparationExpansion.js";

test("Chapter 18 materializes A Separation as a source-first 35mm rehearsal, handheld, information-control production case", () => {
  assert.equal(chapterEighteenASeparationExpansionDefinitions.length, 1);
  const film = chapterEighteenASeparationExpansionDefinitions[0];

  assert.equal(film.id, "scenario_a_separation_2011");
  assert.equal(film.year, 2011);
  assert.equal(film.runtimeMins, 123);
  assert.deepEqual(film.directors, ["Asghar Farhadi"]);
  assert.equal(film.sourceId, "sony_classics_a_separation_presskit_2011");
  assert.ok(film.scenarioType.includes("35mm") && film.scenarioType.includes("handheld") && film.scenarioType.includes("rehearsal"));

  assert.ok(film.premise.includes("very detailed screenplay") && film.premise.includes("variations would be minimal"));
  assert.ok(film.premise.includes("last-minute changes") && film.premise.includes("final take"));
  assert.ok(film.premise.includes("two disused schools") && film.premise.includes("judge's office and court"));
  assert.ok(film.premise.includes("entirely handheld except for three still shots"));
  assert.ok(film.premise.includes("narrator or third eye"));
  assert.ok(film.premise.includes("35mm") && film.premise.includes("do not invent a camera body"));
  assert.ok(film.premise.includes("editing as the stage where the amount and timing of information"));
  assert.ok(film.premise.includes("recalled editing A Separation while Farhadi was still shooting"));
  assert.ok(film.premise.includes("no music during the film itself") && film.premise.includes("closing credits"));
  assert.ok(film.premise.includes("123 minutes") && film.premise.includes("122"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("rehearsal") && goal.includes("detailed screenplay")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("minimal") && goal.includes("shooting")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("last-minute") && goal.includes("final take")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35mm") && goal.includes("camera body")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("handheld") && goal.includes("three still shots")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Safiyari") && goal.includes("shooting")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("no music") && goal.includes("closing credits")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("123 minutes") && goal.includes("122-minute")));

  const court = film.phases.find((phase) => phase.id === "court_rebuild");
  assert.ok(court?.player_task.includes("two disused schools"));
  const format = film.phases.find((phase) => phase.id === "format_boundary");
  assert.ok(format?.player_task.includes("35mm") && format.player_task.includes("camera") && format.player_task.includes("lens") && format.player_task.includes("stock"));
  const handheld = film.phases.find((phase) => phase.id === "handheld_rule");
  assert.ok(handheld?.player_task.includes("three still"));
  const information = film.phases.find((phase) => phase.id === "information_timing");
  assert.ok(information?.player_task.includes("amount and timing of information"));
  const music = film.phases.find((phase) => phase.id === "music_restraint");
  assert.ok(music?.player_task.includes("closing credits"));
  const runtime = film.phases.find((phase) => phase.id === "runtime_boundary");
  assert.ok(runtime?.player_task.includes("123") && runtime.player_task.includes("122"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_stock_lens"));
  assert.ok(film.requiredChoicesSeed.editing.includes("no_invented_software"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_music_until_end_credits"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 19);
});
