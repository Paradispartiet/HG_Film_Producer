import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenUncleBoonmeeExpansionDefinitions } from "./chapterEighteenUncleBoonmeeExpansion.js";

test("Chapter 18 materializes Uncle Boonmee as a source-first Super 16 memory-cinema, Primitive-project and location-sound case", () => {
  assert.equal(chapterEighteenUncleBoonmeeExpansionDefinitions.length, 1);
  const film = chapterEighteenUncleBoonmeeExpansionDefinitions[0];
  assert.equal(film.id, "scenario_uncle_boonmee_2010");
  assert.equal(film.year, 2010);
  assert.equal(film.runtimeMins, 113);
  assert.deepEqual(film.directors, ["Apichatpong Weerasethakul"]);
  assert.ok(film.scenarioType.includes("super16") && film.scenarioType.includes("primitive_project") && film.scenarioType.includes("location_sound"));
  assert.ok(film.premise.includes("United Kingdom/Thailand/France/Germany/Spain"));
  assert.ok(film.premise.includes("Sayombhu Mukdeeprom") && film.premise.includes("Yukontorn Mingmongkon") && film.premise.includes("Charin Pengpanich"));
  assert.ok(film.premise.includes("Primitive project") && film.premise.includes("A Letter to Uncle Boonmee"));
  assert.ok(film.premise.includes("shot on Super 16 rather than digital") && film.premise.includes("35 mm release format"));
  assert.ok(film.premise.includes("day-for-night") && film.premise.includes("blue treatment in post"));
  assert.ok(film.premise.includes("Akritchalerm Kalayanamitr") && film.premise.includes("Ratchaburi"));
  assert.ok(film.requiredChoicesSeed.camera.includes("multi_dp_credit_integrity"));
  assert.ok(film.requiredChoicesSeed.camera.includes("35mm_release_boundary"));
  assert.ok(film.requiredChoicesSeed.sound.includes("ratchaburi_jungle_library"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Super 16") && goal.includes("35 mm release")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("day-for-night") && goal.includes("grading values")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("roof welder") && goal.includes("singer")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("stereo microphone") && goal.includes("sample-rate")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("exact lenses") && goal.includes("scene-by-scene cinematographer")));
  assert.ok(film.phases.find((phase) => phase.id === "super16_capture")?.player_task.includes("principal photography"));
  assert.ok(film.phases.find((phase) => phase.id === "day_for_night")?.player_task.includes("blue post treatment"));
  assert.ok(film.phases.find((phase) => phase.id === "field_ambience")?.player_task.includes("stereo"));
  assert.ok(film.phases.find((phase) => phase.id === "historical_boundary")?.player_task.includes("clearly attributed"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("cinematographer-to-sequence"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
