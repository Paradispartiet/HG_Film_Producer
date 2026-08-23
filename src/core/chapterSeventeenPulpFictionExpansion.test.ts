import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenPulpFictionExpansionDefinitions } from "./chapterSeventeenPulpFictionExpansion.js";

test("Chapter 17 materializes Pulp Fiction as a source-first specialty production", () => {
  assert.equal(chapterSeventeenPulpFictionExpansionDefinitions.length, 1);
  const film = chapterSeventeenPulpFictionExpansionDefinitions[0];
  assert.equal(film.id, "scenario_pulp_fiction_1994");
  assert.equal(film.year, 1994);
  assert.equal(film.runtimeMins, 154);
  assert.deepEqual(film.directors, ["Quentin Tarantino"]);
  assert.equal(film.sourceId, "dfi_pulp_fiction_1994");
  assert.ok(film.scenarioType.includes("specialty") && film.scenarioType.includes("story_structure") && film.scenarioType.includes("editing"));

  assert.ok(film.premise.includes("Miramax") && film.premise.includes("Band Apart") && film.premise.includes("Jersey Films") && film.premise.includes("Lawrence Bender"));
  assert.ok(film.premise.includes("screenplay by Quentin Tarantino") && film.premise.includes("stories by Quentin Tarantino and Roger Avary"));
  assert.ok(film.premise.includes("well below $10 million") && film.premise.includes("$8.5 million") && film.premise.includes("$8 million final cost"));
  assert.ok(film.premise.includes("completion-bond") && film.premise.includes("Film Finance"));
  assert.ok(film.premise.includes("149/154/165") && film.premise.includes("154 minutes as canonical"));
  assert.ok(film.premise.includes("anamorphic") && film.premise.includes("Deluxe") && film.premise.includes("Dolby SR"));
  assert.ok(film.premise.includes("do not import 5245") && film.premise.includes("Reservoir Dogs"));
  assert.ok(film.premise.includes("Sally Menke") && film.premise.includes("David Wasco") && film.premise.includes("Sandy Reynolds-Wasco") && film.premise.includes("Betsy Heimann"));
  assert.ok(film.premise.includes("Ken King") && film.premise.includes("Rick Ash") && film.premise.includes("Dean A. Zupancic"));
  assert.ok(film.premise.includes("not real-world medical, weapons or stunt instructions"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("A Band Apart/Jersey/Miramax") && goal.includes("independent")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("screenplay") && goal.includes("story credit")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Reservoir Dogs") && goal.includes("Pulp Fiction")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("149/154/165-minute") && goal.includes("154 minutes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Sally Menke") && goal.includes("nonlinear")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("stunt coordination") || goal.includes("special effects")));

  const finance = film.phases.find((phase) => phase.id === "development_finance");
  assert.ok(finance?.player_task.includes("sub-$10m") && finance.player_task.includes("$8.5m-to-$8m"));
  const camera = film.phases.find((phase) => phase.id === "camera_format");
  assert.ok(camera?.player_task.includes("anamorphic") && camera.player_task.includes("Reservoir Dogs") && camera.player_task.includes("stocks"));
  const edit = film.phases.find((phase) => phase.id === "editing_chronology");
  assert.ok(edit?.player_task.includes("Sally Menke") && edit.player_task.includes("software") && edit.player_task.includes("cut counts"));
  const safety = film.phases.find((phase) => phase.id === "effects_stunts_safety");
  assert.ok(safety?.player_task.includes("armory") && safety.player_task.includes("medical"));
  const versions = film.phases.find((phase) => phase.id === "release_versions_legacy");
  assert.ok(versions?.player_task.includes("149/165") && versions.player_task.includes("154 minutes canonically"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_imported_reservoir_dogs_camera_lens_stock_exposure_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_sound_hardware_or_mix_recipe"));
  assert.equal(film.learningGoals.length, 17);
  assert.equal(film.phases.length, 10);
});
