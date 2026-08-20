import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenBladeRunnerExpansionDefinitions } from "./chapterSixteenBladeRunnerExpansion.js";

test("Chapter 16 materializes Blade Runner as a source-first future-noir studio Production Case", () => {
  assert.equal(chapterSixteenBladeRunnerExpansionDefinitions.length, 1);
  const film = chapterSixteenBladeRunnerExpansionDefinitions[0];
  assert.equal(film.id, "scenario_blade_runner_1982");
  assert.equal(film.year, 1982);
  assert.equal(film.runtimeMins, 117);
  assert.deepEqual(film.directors, ["Ridley Scott"]);
  assert.equal(film.sourceId, "afi_blade_runner_1982");
  assert.ok(film.scenarioType.includes("ladd_company") && film.scenarioType.includes("65mm_effects"));
  assert.ok(film.premise.includes("The Ladd Company") && film.premise.includes("Sir Run Run Shaw") && film.premise.includes("Warner Bros."));
  assert.ok(film.premise.includes("Philip K. Dick") && film.premise.includes("Hampton Fancher") && film.premise.includes("David Peoples"));
  assert.ok(film.premise.includes("The Burbank Studios") && film.premise.includes("Bradbury Building") && film.premise.includes("Ennis House"));
  assert.ok(film.premise.includes("Jordan Cronenweth") && film.premise.includes("Lawrence G. Paull") && film.premise.includes("Syd Mead"));
  assert.ok(film.premise.includes("backlight") && film.premise.includes("shafts of light") && film.premise.includes("neon"));
  assert.ok(film.premise.includes("Entertainment Effects Group") && film.premise.includes("65mm") && film.premise.includes("motion-control"));
  assert.ok(film.premise.includes("114, 117 and 124 minute versions") && film.premise.includes("1992 director's-cut") && film.premise.includes("2007 Final Cut"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("live-action photography") && goal.includes("65mm effects-element photography")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("$22 million") && goal.includes("$30 million") && goal.includes("uncontested fact")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("1992") && goal.includes("2007 Final Cut") && goal.includes("downstream")));
  const cinematography = film.phases.find((phase) => phase.id === "cinematography");
  assert.ok(cinematography?.player_task.includes("Cronenweth") && cinematography.player_task.includes("smoke") && cinematography.player_task.includes("unsupported"));
  const effects = film.phases.find((phase) => phase.id === "effects");
  assert.ok(effects?.player_task.includes("65mm") && effects.player_task.includes("motion-control") && effects.player_task.includes("interactive lighting"));
  const versions = film.phases.find((phase) => phase.id === "release_versions");
  assert.ok(versions?.player_task.includes("1992") && versions.player_task.includes("2007") && versions.player_task.includes("downstream"));
  assert.ok(film.requiredChoicesSeed.camera.includes("live_action_and_65mm_effects_photography_kept_distinct"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 15);
  assert.ok(film.phases.length >= 10);
});
