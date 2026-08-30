import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenCollectiveExpansionDefinitions } from "./chapterNineteenCollectiveExpansion.js";

test("Chapter 19 materializes Collective as the nonfiction-hybrid rotation case", () => {
  assert.equal(chapterNineteenCollectiveExpansionDefinitions.length, 1);
  const film = chapterNineteenCollectiveExpansionDefinitions[0];
  assert.equal(film.id, "scenario_collective_2020");
  assert.equal(film.title, "Collective");
  assert.equal(film.originalTitle, "Colectiv");
  assert.equal(film.year, 2020);
  assert.equal(film.runtimeMins, 109);
  assert.deepEqual(film.directors, ["Alexander Nanau"]);

  assert.ok(film.scenarioType.includes("nonfiction_hybrid") && film.scenarioType.includes("observational_documentary"));
  assert.ok(film.scenarioType.includes("investigative_journalism") && film.scenarioType.includes("whistleblower_access"));
  assert.ok(film.scenarioType.includes("four_copy_data_security") && film.scenarioType.includes("14_month_shoot"));
  assert.ok(film.scenarioType.includes("18_month_edit") && film.scenarioType.includes("multi_editor_structure"));

  assert.ok(film.premise.includes("109-minute") && film.premise.includes("Romania/Luxembourg"));
  assert.ok(film.premise.includes("no interviews") && film.premise.includes("no voice-over"));
  assert.ok(film.premise.includes("14 months") && film.premise.includes("18 months"));
  assert.ok(film.premise.includes("60 people") && film.premise.includes("several European countries"));
  assert.ok(film.premise.includes("does not intervene") && film.premise.includes("reenact"));
  assert.ok(film.premise.includes("one camera") && film.premise.includes("single sound collaborator"));
  assert.ok(film.premise.includes("Mihai Grecea") && film.premise.includes("camera-mounted boom"));
  assert.ok(film.premise.includes("four separate destinations") && film.premise.includes("outside the country"));
  assert.ok(film.premise.includes("pre-existing Colectiv-club fire footage") && film.premise.includes("victims' community"));
  assert.ok(film.premise.includes("George Cragg") && film.premise.includes("Dana Bunescu"));
  assert.ok(film.premise.includes("exact budget") && film.premise.includes("archive-rights chain"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("observational_no_interviews"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("archive_fire_footage"));
  assert.ok(film.requiredChoicesSeed.camera.includes("small_field_presence") && film.requiredChoicesSeed.camera.includes("camera_package_unknown"));
  assert.ok(film.requiredChoicesSeed.editing.includes("george_cragg_structure_pass") && film.requiredChoicesSeed.editing.includes("dana_bunescu_final_structure"));
  assert.ok(film.requiredChoicesSeed.sound.includes("mihai_grecea_sound_collaboration") && film.requiredChoicesSeed.sound.includes("body_mics_after_trust"));
  assert.ok(film.requiredChoicesSeed.themes.includes("nonfiction_hybrid") && film.requiredChoicesSeed.themes.includes("balanced_rotation"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("third balanced-rotation case") && goal.includes("nonfiction/hybrid lane")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2019 festival origin") && goal.includes("2020 Chapter 19")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("no-interviews/no-voice-over") && goal.includes("mediated")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("observational documentary is not neutral surveillance")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("newsroom access") && goal.includes("whistleblowers")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("small field presence") && goal.includes("one camera")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("60 people") && goal.includes("co-production")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("14-month shooting period") && goal.includes("every day")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("18-month edit") && goal.includes("story structure")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("change the film's central point of view") && goal.includes("health minister")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("pre-existing Colectiv-club fire footage") && goal.includes("provenance")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Mihai Grecea") && goal.includes("survivor/filmmaker")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("camera-mounted boom") && goal.includes("body microphones")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("four-copy nightly backup") && goal.includes("surveillance")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Geographic dispersal") || goal.includes("geographic dispersal")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("four copies") && goal.includes("security")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Romanian Film Centre") && goal.includes("Film Fund Luxembourg")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("George Cragg") && goal.includes("story arcs")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Dana Bunescu") && goal.includes("ballast")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three credited editors") && goal.includes("simultaneous")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("pandemic-era movement") && goal.includes("HBO Europe")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register") && goal.includes("source-protection")));

  assert.ok(film.phases.find((phase) => phase.id === "method_lock")?.player_task.includes("no interviews"));
  assert.ok(film.phases.find((phase) => phase.id === "small_field_unit")?.player_task.includes("Nanau operating camera"));
  assert.ok(film.phases.find((phase) => phase.id === "archive_provenance")?.player_task.includes("pre-existing"));
  assert.ok(film.phases.find((phase) => phase.id === "body_mic_trust")?.player_task.includes("comfortable"));
  assert.ok(film.phases.find((phase) => phase.id === "four_copy_backup")?.player_task.includes("four-copy"));
  assert.ok(film.phases.find((phase) => phase.id === "cragg_structure")?.player_task.includes("story arcs"));
  assert.ok(film.phases.find((phase) => phase.id === "bunescu_consolidation")?.player_task.includes("ballast"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("archive rights"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
