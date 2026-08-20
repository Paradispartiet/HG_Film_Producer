import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenETExtraTerrestrialExpansionDefinitions } from "./chapterSixteenETExtraTerrestrialExpansion.js";

test("Chapter 16 materializes E.T. as a source-first suburban creature-effects Production Case", () => {
  assert.equal(chapterSixteenETExtraTerrestrialExpansionDefinitions.length, 1);
  const film = chapterSixteenETExtraTerrestrialExpansionDefinitions[0];
  assert.equal(film.id, "scenario_et_the_extra_terrestrial_1982");
  assert.equal(film.year, 1982);
  assert.equal(film.runtimeMins, 115);
  assert.deepEqual(film.directors, ["Steven Spielberg"]);
  assert.equal(film.sourceId, "afi_et_extra_terrestrial_1982");
  assert.ok(film.scenarioType.includes("universal_amblin") && film.scenarioType.includes("creature"));
  assert.ok(film.premise.includes("Universal Pictures") && film.premise.includes("Amblin' Entertainment"));
  assert.ok(film.premise.includes("Melissa Mathison") && film.premise.includes("Kathleen Kennedy") && film.premise.includes("Allen Daviau"));
  assert.ok(film.premise.includes("8 September 1981") && film.premise.includes("January–February 1982"));
  assert.ok(film.premise.includes("Northridge") && film.premise.includes("Tujunga") && film.premise.includes("Laird International Studios") && film.premise.includes("Crescent City"));
  assert.ok(film.premise.includes("Eastman 5247") && film.premise.includes("1.85") && film.premise.includes("1.66 hard matte") && film.premise.includes("no pushing") && film.premise.includes("no flashing"));
  assert.ok(film.premise.includes("Carlo Rambaldi") && film.premise.includes("Pat Bilon") && film.premise.includes("Tamara De Treaux") && film.premise.includes("Matthew De Meritt"));
  assert.ok(film.premise.includes("Dennis Muren") && film.premise.includes("Industrial Light & Magic") && film.premise.includes("Kenneth F. Smith"));
  assert.ok(film.premise.includes("Gene Cantamessa") && film.premise.includes("Ben Burtt") && film.premise.includes("Pat Welsh") && film.premise.includes("John Williams"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("mechanical creature") && goal.includes("embodied movement")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("roughly forty-five") && goal.includes("storyboarded")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("115/120-minute") && goal.includes("distribution/reception history")));
  const cinematography = film.phases.find((phase) => phase.id === "cinematography");
  assert.ok(cinematography?.player_task.includes("Eastman 5247") && cinematography.player_task.includes("1.85/1.66") && cinematography.player_task.includes("scene-specific"));
  const creature = film.phases.find((phase) => phase.id === "creature");
  assert.ok(creature?.player_task.includes("Rambaldi") && creature.player_task.includes("performer-based movement"));
  const effects = film.phases.find((phase) => phase.id === "effects");
  assert.ok(effects?.player_task.includes("roughly forty-five") && effects.player_task.includes("optical work"));
  assert.ok(film.requiredChoicesSeed.camera.includes("normal_processing_no_push_no_flash_source_verified"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_or_mix_console_hardware"));
  assert.ok(film.learningGoals.length >= 15);
  assert.ok(film.phases.length >= 10);
});