import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenBlairWitchProjectExpansionDefinitions } from "./chapterSeventeenBlairWitchProjectExpansion.js";

test("Chapter 17 materializes The Blair Witch Project as a source-first found-footage production case", () => {
  assert.equal(chapterSeventeenBlairWitchProjectExpansionDefinitions.length, 1);
  const film = chapterSeventeenBlairWitchProjectExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_blair_witch_project_1999");
  assert.equal(film.year, 1999);
  assert.equal(film.runtimeMins, 87);
  assert.deepEqual(film.directors, ["Daniel Myrick", "Eduardo Sanchez"]);
  assert.equal(film.sourceId, "filmmaker_blair_witch_1999");
  assert.ok(film.scenarioType.includes("found_footage") && film.scenarioType.includes("16mm") && film.scenarioType.includes("hi8"));

  assert.ok(film.premise.includes("eight days") && film.premise.includes("18 hours"));
  assert.ok(film.premise.includes("black-and-white 16mm") && film.premise.includes("Hi-8"));
  assert.ok(film.premise.includes("DAT") && film.premise.includes("actor-operated"));
  assert.ok(film.premise.includes("Neal Fredericks") && film.premise.includes("personally operated every first-person woods image"));
  assert.ok(film.premise.includes("second pseudo-documentary phase") && film.premise.includes("excluded from the finished feature"));
  assert.ok(film.premise.includes("Sundance") && film.premise.includes("Artisan"));
  assert.ok(film.premise.includes("Do not invent a definitive production budget"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("outline") && goal.includes("conventional") && goal.includes("shooting script")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("performers") && goal.includes("image and sound equipment")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("16mm") && goal.includes("Hi-8")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Neal Fredericks") && goal.includes("actor-operated")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("18 hours") && goal.includes("shooting ratio")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Sundance") && goal.includes("Artisan")));

  const outline = film.phases.find((phase) => phase.id === "development_and_outline");
  assert.ok(outline?.player_task.includes("mythology") && outline.player_task.includes("improvisation"));
  const training = film.phases.find((phase) => phase.id === "casting_and_equipment_training");
  assert.ok(training?.player_task.includes("film/video") && training.player_task.includes("field sound"));
  const capture = film.phases.find((phase) => phase.id === "dual_format_capture");
  assert.ok(capture?.player_task.includes("16mm") && capture.player_task.includes("Hi-8"));
  const sound = film.phases.find((phase) => phase.id === "field_sound_and_dat");
  assert.ok(sound?.player_task.includes("DAT") && sound.player_task.includes("microphone"));
  const discarded = film.phases.find((phase) => phase.id === "discarded_phase_two");
  assert.ok(discarded?.player_task.includes("excluded") && discarded.player_task.includes("87-minute"));
  const circulation = film.phases.find((phase) => phase.id === "festival_distribution_and_version");
  assert.ok(circulation?.player_task.includes("Sundance") && circulation.player_task.includes("Artisan"));

  assert.ok(film.requiredChoicesSeed.camera.includes("actor_operated_16mm_and_hi8_capture"));
  assert.ok(film.requiredChoicesSeed.editing.includes("eighteen_hour_phase_one_selection"));
  assert.ok(film.learningGoals.length >= 20);
  assert.ok(film.phases.length >= 11);
});
