import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenDriveMyCarExpansionDefinitions } from "./chapterNineteenDriveMyCarExpansion.js";

test("Chapter 19 materializes Drive My Car as the auteur-festival rotation case", () => {
  assert.equal(chapterNineteenDriveMyCarExpansionDefinitions.length, 1);
  const film = chapterNineteenDriveMyCarExpansionDefinitions[0];
  assert.equal(film.id, "scenario_drive_my_car_2021");
  assert.equal(film.title, "Drive My Car");
  assert.equal(film.originalTitle, "Doraibu mai ka");
  assert.equal(film.year, 2021);
  assert.equal(film.runtimeMins, 179);
  assert.deepEqual(film.directors, ["Ryusuke Hamaguchi"]);

  assert.ok(film.scenarioType.includes("auteur_festival") && film.scenarioType.includes("multilingual_theatre"));
  assert.ok(film.scenarioType.includes("pandemic_shutdown") && film.scenarioType.includes("busan_to_hiroshima_relocation"));
  assert.ok(film.scenarioType.includes("red_saab_sync_sound") && film.scenarioType.includes("alexa_mini"));
  assert.ok(film.scenarioType.includes("long_form_editing") && film.scenarioType.includes("di_2021"));

  assert.ok(film.premise.includes("179 minutes") && film.premise.includes("Takamasa Oe"));
  assert.ok(film.premise.includes("C&I Entertainment") && film.premise.includes("Bitters End"));
  assert.ok(film.premise.includes("Kadoaki Izuta") && film.premise.includes("Miki Nomura"));
  assert.ok(film.premise.includes("40-day production") && film.premise.includes("ten Tokyo shooting days"));
  assert.ok(film.premise.includes("nearly half a year") && film.premise.includes("November restart"));
  assert.ok(film.premise.includes("Pusan/Busan") && film.premise.includes("Hiroshima"));
  assert.ok(film.premise.includes("ARRI ALEXA Mini") && film.premise.includes("Ultra Prime"));
  assert.ok(film.premise.includes("mainly single-camera") && film.premise.includes("Ryuichi Shimokawa"));
  assert.ok(film.premise.includes("no dedicated grip") && film.premise.includes("rigged the Saab"));
  assert.ok(film.premise.includes("single LUT") && film.premise.includes("Imagica Tokyo"));
  assert.ok(film.premise.includes("two ALEXA Minis") && film.premise.includes("90 percent of car scenes"));
  assert.ok(film.premise.includes("emotionally neutral script readings") && film.premise.includes("Korean Sign Language"));
  assert.ok(film.premise.includes("wind noise") && film.premise.includes("synchronized dialogue recording"));
  assert.ok(film.premise.includes("Azusa Yamazaki") && film.premise.includes("watched rushes"));
  assert.ok(film.premise.includes("exact budget") && film.premise.includes("sign-language consultation"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("murakami_adaptation"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("takamasa_oe_coscreenplay"));
  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_mini") && film.requiredChoicesSeed.camera.includes("ultra_primes"));
  assert.ok(film.requiredChoicesSeed.camera.includes("mainly_single_camera") && film.requiredChoicesSeed.camera.includes("single_lut"));
  assert.ok(film.requiredChoicesSeed.editing.includes("azusa_yamazaki") && film.requiredChoicesSeed.editing.includes("joint_rushes_review"));
  assert.ok(film.requiredChoicesSeed.sound.includes("sync_dialogue_in_car") && film.requiredChoicesSeed.sound.includes("closed_roof_saab"));
  assert.ok(film.requiredChoicesSeed.themes.includes("auteur_festival") && film.requiredChoicesSeed.themes.includes("balanced_rotation"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("second case") && goal.includes("auteur/festival lane")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("179-minute") && goal.includes("178-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("emotionally neutral line-reading") && goal.includes("performers' bodies")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("limited acting/technical rehearsal") && goal.includes("shooting day")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("skilled interpreters") && goal.includes("nuance")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("sign-language coaching") && goal.includes("unresolved")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("40-day shoot") && goal.includes("March 2020")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("coronavirus shutdown") && goal.includes("nearly half a year")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Pusan/Busan") && goal.includes("overseas-travel restrictions")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("relocating the story to Hiroshima") && goal.includes("visual redesign")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("all-real-location production") && goal.includes("production design")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ALEXA Mini") && goal.includes("Ultra Prime")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("mainly single-camera") && goal.includes("Ryuichi Shimokawa")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("two ALEXA Minis") && goal.includes("synchronized dialogue")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("no dedicated grip") && goal.includes("Saab-rigging")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("yellow convertible") && goal.includes("closed red Saab")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("roof reduced wind-noise risk") && goal.includes("later sound work")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("90 percent of car scenes") && goal.includes("whole film")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("single-LUT strategy") && goal.includes("color-space")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Imagica Tokyo") && goal.includes("Yumeto Kitayama")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Azusa Yamazaki") && goal.includes("principal photography")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("days watching rushes") && goal.includes("potential editorial resource")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register") && goal.includes("interpreter")));

  assert.ok(film.phases.find((phase) => phase.id === "multilingual_casting")?.player_task.includes("Korean Sign Language"));
  assert.ok(film.phases.find((phase) => phase.id === "pandemic_stop")?.player_task.includes("ten completed Tokyo days"));
  assert.ok(film.phases.find((phase) => phase.id === "busan_hiroshima")?.player_task.includes("overseas-travel restriction"));
  assert.ok(film.phases.find((phase) => phase.id === "saab_two_camera")?.player_task.includes("two-angle car coverage"));
  assert.ok(film.phases.find((phase) => phase.id === "sync_sound")?.player_task.includes("wind"));
  assert.ok(film.phases.find((phase) => phase.id === "rushes_review")?.player_task.includes("every take"));
  assert.ok(film.phases.find((phase) => phase.id === "di_finish")?.player_task.includes("Yumeto Kitayama"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("interpreter/sign-language"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
