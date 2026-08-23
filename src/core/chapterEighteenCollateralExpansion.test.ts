import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenCollateralExpansionDefinitions } from "./chapterEighteenCollateralExpansion.js";

test("Chapter 18 materializes Collateral as a source-first hybrid HD and 35mm production case", () => {
  assert.equal(chapterEighteenCollateralExpansionDefinitions.length, 1);
  const film = chapterEighteenCollateralExpansionDefinitions[0];
  assert.equal(film.id, "scenario_collateral_2004");
  assert.equal(film.year, 2004);
  assert.equal(film.runtimeMins, 120);
  assert.deepEqual(film.directors, ["Michael Mann"]);
  assert.equal(film.sourceId, "asc_collateral_2004");
  assert.ok(film.scenarioType.includes("hybrid_hd_35mm") && film.scenarioType.includes("viper_f900"));

  assert.ok(film.premise.includes("American Cinematographer") && film.premise.includes("Los Angeles night"));
  assert.ok(film.premise.includes("Viper") && film.premise.includes("F900") && film.premise.includes("F950"));
  assert.ok(film.premise.includes("FilmStream mode was not the final practical choice") && film.premise.includes("VideoStream mode"));
  assert.ok(film.premise.includes("prototype Sony SRW5000 decks") && film.premise.includes("tethered"));
  assert.ok(film.premise.includes("twelve-week shoot") && film.premise.includes("first three weeks"));
  assert.ok(film.premise.includes("about twenty percent") && film.premise.includes("35mm"));
  assert.ok(film.premise.includes("twelve cameras simultaneously") && film.premise.includes("eight film cameras"));
  assert.ok(film.premise.toLowerCase().includes("four functional taxis") && film.premise.includes("three sliced trailer rigs"));
  assert.ok(film.premise.includes("roughly thirty ELD panels") && film.premise.includes("Plexiglas"));
  assert.ok(film.premise.includes("waveform/IRE") && film.premise.includes("film-out"));
  assert.ok(film.premise.includes("13 October through late December 2003") && film.premise.includes("120-minute"));
  assert.ok(film.premise.includes("Do not invent a single exact percentage"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("hybrid digital/35mm")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("FilmStream") && goal.includes("VideoStream")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("about twenty percent") && goal.includes("80/20")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("twelve-camera") && goal.includes("eight film cameras")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("four functional taxis") && goal.includes("three trailer")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("thirty custom ELD panels")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("IRE/gain") && goal.includes("film-out")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("120-minute")));

  const mode = film.phases.find((phase) => phase.id === "viper_mode_boundary");
  assert.ok(mode?.player_task.includes("VideoStream") && mode.player_task.includes("FilmStream"));
  const hybrid = film.phases.find((phase) => phase.id === "hybrid_capture_map");
  assert.ok(hybrid?.player_task.includes("HD") && hybrid.player_task.includes("35mm"));
  const stunt = film.phases.find((phase) => phase.id === "multi_camera_stunt");
  assert.ok(stunt?.player_task.includes("eight film cameras") && stunt.player_task.includes("two Vipers") && stunt.player_task.includes("two F900s"));
  const taxi = film.phases.find((phase) => phase.id === "taxi_rig_build");
  assert.ok(taxi?.player_task.includes("four functioning taxis") && taxi.player_task.includes("three") && taxi.player_task.includes("sound"));
  const signal = film.phases.find((phase) => phase.id === "signal_noise");
  assert.ok(signal?.label.includes("film-out") && signal.player_task.includes("waveform") && signal.player_task.includes("noise"));
  const di = film.phases.find((phase) => phase.id === "di_filmout");
  assert.ok(di?.player_task.includes("Company 3") && di.player_task.includes("Laser Pacific") && di.player_task.includes("35mm"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_false_all_digital_claim"));
  assert.ok(film.requiredChoicesSeed.editing.includes("mixed_capture_matching"));
  assert.ok(film.requiredChoicesSeed.sound.includes("mobile_cab_wind_control"));
  assert.ok(film.learningGoals.length >= 28);
  assert.ok(film.phases.length >= 17);
});
