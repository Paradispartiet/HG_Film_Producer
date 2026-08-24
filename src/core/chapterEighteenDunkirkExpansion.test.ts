import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenDunkirkExpansionDefinitions } from "./chapterEighteenDunkirkExpansion.js";

test("Chapter 18 materializes Dunkirk as a source-first large-format photochemical, practical/VFX and temporal-sound production case", () => {
  assert.equal(chapterEighteenDunkirkExpansionDefinitions.length, 1);
  const film = chapterEighteenDunkirkExpansionDefinitions[0];
  assert.equal(film.id, "scenario_dunkirk_2017");
  assert.equal(film.year, 2017);
  assert.equal(film.runtimeMins, 106);
  assert.deepEqual(film.directors, ["Christopher Nolan"]);

  assert.ok(film.scenarioType.includes("imax_15perf") && film.scenarioType.includes("system65_5perf") && film.scenarioType.includes("photochemical"));
  assert.ok(film.premise.includes("land, sea and air") && film.premise.includes("different durations"));
  assert.ok(film.premise.includes("15-perf 65mm IMAX") && film.premise.includes("5-perf 65mm"));
  assert.ok(film.premise.includes("approximately 70 percent") && film.premise.includes("estimated 75 percent"));
  assert.ok(film.premise.includes("VISION3 250D") && film.premise.includes("VISION3 500T"));
  assert.ok(film.premise.includes("FotoKem") && film.premise.includes("Dan Muscarella"));
  assert.ok(film.premise.includes("429 VFX shots") && film.premise.includes("260-person team") && film.premise.includes("6.1K"));
  assert.ok(film.premise.includes("Aerostar") && film.premise.includes("Yak-52"));
  assert.ok(film.premise.includes("photogrammetry") && film.premise.includes("LiDAR") && film.premise.includes("crowd simulation"));
  assert.ok(film.premise.includes("near-silent assembly") && film.premise.includes("Richard King"));
  assert.ok(film.premise.includes("Stuka siren") && film.premise.includes("Shepard-tone logic"));
  assert.ok(film.premise.includes("'as much in camera as practical' is not 'no CGI'"));

  assert.ok(film.requiredChoicesSeed.camera.includes("imax_15perf_65mm"));
  assert.ok(film.requiredChoicesSeed.camera.includes("system65_5perf_dialogue"));
  assert.ok(film.requiredChoicesSeed.editing.includes("photochemical_finish"));
  assert.ok(film.requiredChoicesSeed.sound.includes("designed_stuka_siren"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("70-to-75-percent")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("429 documented VFX shots")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("DCP") && goal.includes("digital intermediate")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Stuka siren") && goal.includes("period recording")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Dunkirk with Son of Saul")));

  assert.ok(film.phases.find((phase) => phase.id === "format_test")?.player_task.includes("15-perf IMAX"));
  assert.ok(film.phases.find((phase) => phase.id === "large_format_review")?.player_task.includes("6.1K"));
  assert.ok(film.phases.find((phase) => phase.id === "vfx_plan")?.player_task.includes("LiDAR"));
  assert.ok(film.phases.find((phase) => phase.id === "stuka_design")?.player_task.includes("modern reconstruction"));
  assert.ok(film.phases.find((phase) => phase.id === "release_versions")?.player_task.includes("standard DCP"));

  assert.ok(film.learningGoals.length >= 35);
  assert.ok(film.phases.length >= 24);
});
