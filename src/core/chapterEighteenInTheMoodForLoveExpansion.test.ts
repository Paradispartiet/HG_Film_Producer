import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenInTheMoodForLoveExpansionDefinitions } from "./chapterEighteenInTheMoodForLoveExpansion.js";

test("Chapter 18 materializes In the Mood for Love as a source-first transnational auteur production case", () => {
  assert.equal(chapterEighteenInTheMoodForLoveExpansionDefinitions.length, 1);
  const film = chapterEighteenInTheMoodForLoveExpansionDefinitions[0];
  assert.equal(film.id, "scenario_in_the_mood_for_love_2000");
  assert.equal(film.year, 2000);
  assert.equal(film.runtimeMins, 98);
  assert.deepEqual(film.directors, ["Wong Kar Wai"]);
  assert.equal(film.sourceId, "bfi_wong_in_the_mood_for_love_25");
  assert.ok(film.scenarioType.includes("transnational_auteur") && film.scenarioType.includes("dual_cinematography"));

  assert.ok(film.premise.includes("roughly 80%") && film.premise.includes("Mark Lee Ping-bin"));
  assert.ok(film.premise.includes("15-month") && film.premise.includes("Asian financial crisis"));
  assert.ok(film.premise.includes("Bangkok") && film.premise.includes("2046"));
  assert.ok(film.premise.includes("William Chang Suk Ping") && film.premise.includes("costume designer"));
  assert.ok(film.premise.includes("Shigeru Umebayashi") && film.premise.includes("Nat King Cole"));
  assert.ok(film.premise.includes("mono sound") && film.premise.includes("Cannes deadline"));
  assert.ok(film.premise.includes("98 minutes") && film.premise.includes("90 minutes"));
  assert.ok(film.premise.includes("35mm original camera negative"));
  assert.ok(film.premise.includes("Do not invent exact budget"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Doyle") && goal.includes("roughly 80%")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("15-month") && goal.includes("financing disruption")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Bangkok") && goal.includes("Hong Kong")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("William Chang") && goal.includes("three credits")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Umebayashi") && goal.includes("Nat King Cole")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("mono sound") && goal.includes("later release")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("98-minute") && goal.includes("90-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35mm original-camera-negative")));

  const handoff = film.phases.find((phase) => phase.id === "doyle_lee_handoff");
  assert.ok(handoff?.player_task.includes("roughly 80%") && handoff.player_task.includes("scene allocation"));
  const geography = film.phases.find((phase) => phase.id === "hong_kong_bangkok_geography");
  assert.ok(geography?.player_task.includes("Bangkok") && geography.player_task.includes("Angkor Wat"));
  const music = film.phases.find((phase) => phase.id === "music_camera_memory");
  assert.ok(music?.player_task.includes("Umebayashi") && music.player_task.includes("Nat King Cole"));
  const edit = film.phases.find((phase) => phase.id === "editorial_absence");
  assert.ok(edit?.player_task.includes("sex scene") && edit.player_task.includes("1970s"));
  const cannes = film.phases.find((phase) => phase.id === "cannes_deadline");
  assert.ok(cannes?.player_task.includes("mono") && cannes.player_task.includes("release-format"));
  const runtime = film.phases.find((phase) => phase.id === "runtime_variance");
  assert.ok(runtime?.player_task.includes("98 minutes") && runtime.player_task.includes("90-minute"));

  assert.ok(film.requiredChoicesSeed.camera.includes("doyle_to_lee_cinematography_handoff"));
  assert.ok(film.requiredChoicesSeed.editing.includes("late_cannes_deadline_cutting"));
  assert.ok(film.learningGoals.length >= 20);
  assert.ok(film.phases.length >= 12);
});
