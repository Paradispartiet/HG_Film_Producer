import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenDecisionToLeaveExpansionDefinitions } from "./chapterNineteenDecisionToLeaveExpansion.js";

test("Chapter 19 materializes Decision to Leave as the regional-global rotation case", () => {
  assert.equal(chapterNineteenDecisionToLeaveExpansionDefinitions.length, 1);
  const film = chapterNineteenDecisionToLeaveExpansionDefinitions[0];
  assert.equal(film.id, "scenario_decision_to_leave_2022");
  assert.equal(film.title, "Decision to Leave");
  assert.equal(film.originalTitle, "Heojil Kyolshim");
  assert.equal(film.year, 2022);
  assert.equal(film.runtimeMins, 138);
  assert.deepEqual(film.directors, ["Park Chan-wook"]);

  assert.ok(film.scenarioType.includes("regional_global") && film.scenarioType.includes("south_korean_industry"));
  assert.ok(film.scenarioType.includes("moho_film") && film.scenarioType.includes("cj_enm"));
  assert.ok(film.scenarioType.includes("two_month_storyboard") && film.scenarioType.includes("76_day_shoot"));
  assert.ok(film.scenarioType.includes("alexa_mini") && film.scenarioType.includes("cooke_anamorphic"));
  assert.ok(film.scenarioType.includes("three_beach_finale") && film.scenarioType.includes("tide_window"));
  assert.ok(film.scenarioType.includes("580_vfx_shots") && film.scenarioType.includes("4th_creative_party"));
  assert.ok(film.scenarioType.includes("dolby_atmos") && film.scenarioType.includes("5_1"));

  assert.ok(film.premise.includes("138 minutes") && film.premise.includes("Republic of Korea"));
  assert.ok(film.premise.includes("Moho Film") && film.premise.includes("CJ ENM"));
  assert.ok(film.premise.includes("Korean and Chinese") && film.premise.includes("2.39:1"));
  assert.ok(film.premise.includes("4K") && film.premise.includes("Dolby Atmos"));
  assert.ok(film.premise.includes("The Mist") && film.premise.includes("Martin Beck"));
  assert.ok(film.premise.includes("August to November 2020") && film.premise.includes("two full months"));
  assert.ok(film.premise.includes("ARRI ALEXA Mini") && film.premise.includes("Cooke anamorphic"));
  assert.ok(film.premise.includes("T4.0") && film.premise.includes("76-day shoot"));
  assert.ok(film.premise.includes("Busan Cinema Studios") && film.premise.includes("three Korean beaches"));
  assert.ok(film.premise.includes("two roughly ten-minute windows") && film.premise.includes("floating platform"));
  assert.ok(film.premise.includes("negative fill") && film.premise.includes("ARRI SkyPanel 360"));
  assert.ok(film.premise.includes("BodyCam") && film.premise.includes("three days"));
  assert.ok(film.premise.includes("computer monitor") && film.premise.includes("dead person's point of view"));
  assert.ok(film.premise.includes("Ryu Seong-hie") && film.premise.includes("mountain/sea system"));
  assert.ok(film.premise.includes("Jin Young Park") && film.premise.includes("60 percent"));
  assert.ok(film.premise.includes("580 VFX shots") && film.premise.includes("six months"));
  assert.ok(film.premise.includes("palm callus") && film.premise.includes("lie-detector graph"));
  assert.ok(film.premise.includes("Kim Sang-bum") && film.premise.includes("Jung Gun"));
  assert.ok(film.premise.includes("Exact budget") && film.premise.includes("distribution economics"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("the_mist_song_genesis"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("martin_beck_detective_reference"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("bilingual_korean_chinese_dialogue"));
  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_mini") && film.requiredChoicesSeed.camera.includes("cooke_anamorphic"));
  assert.ok(film.requiredChoicesSeed.camera.includes("three_beach_finale") && film.requiredChoicesSeed.camera.includes("tide_window"));
  assert.ok(film.requiredChoicesSeed.camera.includes("bodycam_rooftop_chase") && film.requiredChoicesSeed.camera.includes("object_pov"));
  assert.ok(film.requiredChoicesSeed.editing.includes("kim_sang_bum_edit") && film.requiredChoicesSeed.editing.includes("editorial_software_unknown"));
  assert.ok(film.requiredChoicesSeed.sound.includes("dolby_atmos") && film.requiredChoicesSeed.sound.includes("final_mix_chain_unknown"));
  assert.ok(film.requiredChoicesSeed.themes.includes("regional_global") && film.requiredChoicesSeed.themes.includes("south_korean_cinema"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("regional/global rotation case")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("The Mist") && goal.includes("Martin Beck")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("two months") && goal.includes("storyboarding")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ARRI ALEXA Mini")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Cooke anamorphic")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("76-day shoot") && goal.includes("March 2021")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three real Korean beaches")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("two roughly ten-minute tide windows")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("floating platform")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("negative fill") && goal.includes("butterflies")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("SkyPanel 360") && goal.includes("Astera Titan Tube")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three-day rooftop chase") && goal.includes("BodyCam")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("computer-monitor POV") && goal.includes("dead-person POV")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Ryu Seong-hie") && goal.includes("mountain/sea")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Jin Young Park") && goal.includes("DI")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("580 VFX shots") && goal.includes("six months")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("palm-callus") && goal.includes("digital mise-en-scène")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Kim Sang-bum") && goal.includes("software")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Kim Suk-won") && goal.includes("Jung Gun")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Dolby Atmos") && goal.includes("5.1")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register") && goal.includes("permits")));

  assert.ok(film.phases.find((phase) => phase.id === "storyboard_two_months")?.player_task.includes("two months"));
  assert.ok(film.phases.find((phase) => phase.id === "camera_package")?.player_task.includes("ALEXA Mini"));
  assert.ok(film.phases.find((phase) => phase.id === "three_beach_finale")?.player_task.includes("three real Korean beaches"));
  assert.ok(film.phases.find((phase) => phase.id === "tide_window")?.player_task.includes("two short natural windows"));
  assert.ok(film.phases.find((phase) => phase.id === "crane_float")?.player_task.includes("floating platform"));
  assert.ok(film.phases.find((phase) => phase.id === "rooftop_chase")?.player_task.includes("BodyCam"));
  assert.ok(film.phases.find((phase) => phase.id === "vfx_schedule")?.player_task.includes("580 shots"));
  assert.ok(film.phases.find((phase) => phase.id === "sound_finish")?.player_task.includes("Dolby Atmos"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("VFX database"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
