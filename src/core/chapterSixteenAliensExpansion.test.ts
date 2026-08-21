import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenAliensExpansionDefinitions } from "./chapterSixteenAliensExpansion.js";

test("Chapter 16 materializes Aliens as a source-first British sequel, creature and miniature-effects production", () => {
  assert.equal(chapterSixteenAliensExpansionDefinitions.length, 1);
  const film = chapterSixteenAliensExpansionDefinitions[0];
  assert.equal(film.id, "scenario_aliens_1986");
  assert.equal(film.year, 1986);
  assert.equal(film.runtimeMins, 137);
  assert.deepEqual(film.directors, ["James Cameron"]);
  assert.equal(film.sourceId, "afi_aliens_1986");
  assert.ok(film.scenarioType.includes("brandywine_fox") && film.scenarioType.includes("pinewood_acton_lane") && film.scenarioType.includes("creature_miniature"));
  assert.ok(film.premise.includes("forty-two-page") && film.premise.includes("1983") && film.premise.includes("The Terminator"));
  assert.ok(film.premise.includes("Pinewood Studios") && film.premise.includes("Acton Lane Power Station") && film.premise.includes("30 September 1985") && film.premise.includes("5 October"));
  assert.ok(film.premise.includes("James Remar") && film.premise.includes("Michael Biehn") && film.premise.includes("casting, continuity and schedule"));
  assert.ok(film.premise.includes("Adrian Biddle") && film.premise.includes("Moviecam") && film.premise.includes("Cinefocus London") && film.premise.includes("Eastman Kodak") && film.premise.includes("Rank Film Laboratories"));
  assert.ok(film.premise.includes("Peter Lamont") && film.premise.includes("Ray Lovejoy") && film.premise.includes("James Horner"));
  assert.ok(film.premise.includes("Alec Gillis") && film.premise.includes("Shane Mahan") && film.premise.includes("John Rosengrant") && film.premise.includes("Tom Woodruff Jr."));
  assert.ok(film.premise.includes("Pat McClung") && film.premise.includes("Robert and Dennis Skotak"));
  assert.ok(film.premise.includes("Robert Skotak") && film.premise.includes("Stan Winston") && film.premise.includes("John Richardson") && film.premise.includes("Suzanne Benson"));
  assert.ok(film.premise.includes("in-camera") && film.premise.includes("wires") && film.premise.includes("mirrors") && film.premise.includes("optical"));
  assert.ok(film.premise.includes("March 1986") && film.premise.includes("injured two special-effects technicians") && film.premise.includes("production-safety history"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("30 September / 5 October 1985") && goal.includes("discrepancy")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Remar") && goal.includes("Biehn") && goal.includes("continuity")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Moviecam/Cinefocus") && goal.includes("lens series")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("creature-effects coordination") && goal.includes("miniature supervision") && goal.includes("visual-effects supervision")));
  const location = film.phases.find((phase) => phase.id === "british_base");
  assert.ok(location?.player_task.includes("stages") && location.player_task.includes("industrial location") && location.player_task.includes("start-date discrepancy"));
  const effects = film.phases.find((phase) => phase.id === "miniatures_vfx");
  assert.ok(effects?.player_task.includes("miniature") && effects.player_task.includes("VFX supervision") && effects.player_task.includes("one effects technique"));
  const camera = film.phases.find((phase) => phase.id === "cinematography");
  assert.ok(camera?.player_task.includes("Biddle") && camera.player_task.includes("Moviecam/Cinefocus") && camera.player_task.includes("unsupported"));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_moviecam_body_lens_series_focal_length_or_exposure_map"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_console_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 15);
  assert.ok(film.phases.length >= 10);
});
