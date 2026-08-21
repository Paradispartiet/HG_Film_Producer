import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenComeAndSeeExpansionDefinitions } from "./chapterSixteenComeAndSeeExpansion.js";

test("Chapter 16 materializes Come and See as a source-first witness-based chronological Belarus production", () => {
  assert.equal(chapterSixteenComeAndSeeExpansionDefinitions.length, 1);
  const film = chapterSixteenComeAndSeeExpansionDefinitions[0];
  assert.equal(film.id, "scenario_come_and_see_1985");
  assert.equal(film.year, 1985);
  assert.equal(film.runtimeMins, 142);
  assert.deepEqual(film.directors, ["Elem Klimov"]);
  assert.equal(film.sourceId, "janus_come_and_see_1985_press_notes");
  assert.ok(film.scenarioType.includes("mosfilm_belarusfilm") && film.scenarioType.includes("chronological") && film.scenarioType.includes("steadicam"));
  assert.ok(film.premise.includes("Ales Adamovich") && film.premise.includes("Khatyn") && film.premise.includes("Out of the Fire"));
  assert.ok(film.premise.includes("1977") && film.premise.includes("Goskino") && film.premise.includes("after 1982"));
  assert.ok(film.premise.includes("Mosfilm-Belarusfilm") && film.premise.includes("nine months in 1984") && film.premise.includes("Belorussian soil"));
  assert.ok(film.premise.includes("Alexei Kravchenko") && film.premise.includes("fourteen") && film.premise.includes("had not previously appeared in a film"));
  assert.ok(film.premise.includes("real bullets") && film.premise.includes("safety boundary") && film.premise.includes("never as a technique to imitate"));
  assert.ok(film.premise.includes("Alexei Rodionov") && film.premise.includes("naturalistic color") && film.premise.includes("Steadicam") && film.premise.includes("extreme close-ups"));
  assert.ok(film.premise.includes("Viktor Petrov") && film.premise.includes("Eleonora Semyonova") && film.premise.includes("Valeriya Belova"));
  assert.ok(film.premise.includes("Viktor Mors") && film.premise.includes("Oleg Yanchenko") && film.premise.includes("expressionistic sound design"));
  assert.ok(film.premise.includes("142 minutes") && film.premise.includes("143") && film.premise.includes("137"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("testimony") && goal.includes("fictional reconstruction")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("nine-month") && goal.includes("1984") && goal.includes("Belorussian")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("live ammunition") && goal.includes("never as a reproducible")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("137/142/143-minute") && goal.includes("transparently")));
  const cinematography = film.phases.find((phase) => phase.id === "cinematography");
  assert.ok(cinematography?.player_task.includes("Rodionov") && cinematography.player_task.includes("Steadicam") && cinematography.player_task.includes("unsupported camera, lens, stock and exposure"));
  const safety = film.phases.find((phase) => phase.id === "safety");
  assert.ok(safety?.player_task.includes("live ammunition") && safety.player_task.includes("reject it as a safe contemporary method"));
  const historicalSource = film.phases.find((phase) => phase.id === "historical_source");
  assert.ok(historicalSource?.player_task.includes("Khatyn") && historicalSource.player_task.includes("Out of the Fire") && historicalSource.player_task.includes("distinct evidence layers"));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_focal_length_exposure_or_stabilizer_hardware"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_console_or_post_hardware"));
  assert.ok(film.learningGoals.length >= 15);
  assert.ok(film.phases.length >= 10);
});