import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenGoodfellasExpansionDefinitions } from "./chapterSeventeenGoodfellasExpansion.js";

test("Chapter 17 materializes Goodfellas as a source-first studio-auteur boundary production case", () => {
  assert.equal(chapterSeventeenGoodfellasExpansionDefinitions.length, 1);
  const film = chapterSeventeenGoodfellasExpansionDefinitions[0];
  assert.equal(film.id, "scenario_goodfellas_1990");
  assert.equal(film.year, 1990);
  assert.equal(film.runtimeMins, 146);
  assert.deepEqual(film.directors, ["Martin Scorsese"]);
  assert.equal(film.sourceId, "afi_goodfellas_1990");
  assert.ok(film.scenarioType.includes("studio_auteur") && film.scenarioType.includes("camera_choreography"));

  assert.ok(film.premise.includes("Nicholas Pileggi") && film.premise.includes("Wiseguy"));
  assert.ok(film.premise.includes("Irwin Winkler") && film.premise.includes("Warner Bros."));
  assert.ok(film.premise.includes("Michael Ballhaus") && film.premise.includes("Thelma Schoonmaker"));
  assert.ok(film.premise.includes("three-minute") && film.premise.includes("Larry McConkey") && film.premise.includes("Joe Reidy"));
  assert.ok(film.premise.includes("about twelve takes") && film.premise.includes("dolly/zoom"));
  assert.ok(film.premise.includes("Arriflex") && film.premise.includes("Dolby Stereo SR"));
  assert.ok(film.premise.includes("146 minutes") && film.premise.includes("145 minutes"));
  assert.ok(film.premise.includes("Do not invent an exact final budget"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("studio-auteur boundary case")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Wiseguy") && goal.includes("screenplay adaptation")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("temporary Copacabana wall")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("approximately three-minute") && goal.includes("Steadicam")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("twelve Copacabana takes") && goal.includes("approximate")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("diner dolly/zoom")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Arriflex") && goal.includes("bounded")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("146-minute") && goal.includes("145-minute")));

  const adaptation = film.phases.find((phase) => phase.id === "source_book_and_adaptation");
  assert.ok(adaptation?.player_task.includes("nonfiction source record") && adaptation.player_task.includes("screenplay"));
  const copa = film.phases.find((phase) => phase.id === "copacabana_steadicam");
  assert.ok(copa?.label.includes("three-minute") && copa.player_task.includes("Larry McConkey") && copa.player_task.includes("12 takes or so"));
  const diner = film.phases.find((phase) => phase.id === "diner_dolly_zoom");
  assert.ok(diner?.label.includes("dolly/zoom") && diner.player_task.includes("Ballhaus"));
  const edit = film.phases.find((phase) => phase.id === "editing_and_temporal_density");
  assert.ok(edit?.player_task.includes("Thelma Schoonmaker") && edit.player_task.includes("ratings"));
  const music = film.phases.find((phase) => phase.id === "music_as_historical_structure");
  assert.ok(music?.player_task.includes("song selection") && music.player_task.includes("licensing"));
  const runtime = film.phases.find((phase) => phase.id === "runtime_and_preservation_boundary");
  assert.ok(runtime?.player_task.includes("146 minutes") && runtime.player_task.includes("145 minutes"));

  assert.ok(film.requiredChoicesSeed.camera.includes("copacabana_three_minute_steadicam_choreography"));
  assert.ok(film.requiredChoicesSeed.editing.includes("schoonmaker_authored_temporal_system"));
  assert.ok(film.learningGoals.length >= 23);
  assert.ok(film.phases.length >= 13);
});
