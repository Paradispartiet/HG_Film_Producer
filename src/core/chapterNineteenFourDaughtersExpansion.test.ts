import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenFourDaughtersExpansionDefinitions } from "./chapterNineteenFourDaughtersExpansion.js";

test("Chapter 19 materializes Four Daughters as the nonfiction-hybrid rotation case", () => {
  assert.equal(chapterNineteenFourDaughtersExpansionDefinitions.length, 1);
  const film = chapterNineteenFourDaughtersExpansionDefinitions[0];
  assert.equal(film.id, "scenario_four_daughters_2023");
  assert.equal(film.title, "Four Daughters");
  assert.equal(film.originalTitle, "Les Filles d'Olfa");
  assert.equal(film.year, 2023);
  assert.equal(film.runtimeMins, 107);
  assert.deepEqual(film.directors, ["Kaouther Ben Hania"]);

  assert.ok(film.scenarioType.includes("nonfiction_hybrid") && film.scenarioType.includes("documentary_fiction"));
  assert.ok(film.scenarioType.includes("reenactment_as_reflection") && film.scenarioType.includes("professional_actor_doubles"));
  assert.ok(film.scenarioType.includes("single_hotel_studio") && film.scenarioType.includes("majority_female_crew"));
  assert.ok(film.scenarioType.includes("collective_set_constitution") && film.scenarioType.includes("participant_agency"));

  assert.ok(film.premise.includes("107 minutes") && film.premise.includes("110-minute"));
  assert.ok(film.premise.includes("2016") && film.premise.includes("2017"));
  assert.ok(film.premise.includes("lockdown") && film.premise.includes("fake fiction"));
  assert.ok(film.premise.includes("Hend Sabri") && film.premise.includes("fictional double"));
  assert.ok(film.premise.includes("Majd Mastoura") && film.premise.includes("male roles"));
  assert.ok(film.premise.includes("key scenes without dialogue") && film.premise.includes("open to experimentation"));
  assert.ok(film.premise.includes("old, down-market hotel in Tunis") && film.premise.includes("studio"));
  assert.ok(film.premise.includes("one memory per day") && film.premise.includes("four weeks"));
  assert.ok(film.premise.includes("mostly female") && film.premise.includes("constitution"));
  assert.ok(film.premise.includes("offered the opportunity to participate in editing") && film.premise.includes("declined"));
  assert.ok(film.premise.includes("5.1") && film.premise.includes("France, Tunisia, Germany and Saudi Arabia"));
  assert.ok(film.premise.includes("camera bodies") && film.premise.includes("financing shares"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("open_key_scene_script"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("reenactment_as_reflection"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("2016_2017_observational_provenance"));
  assert.ok(film.requiredChoicesSeed.camera.includes("single_hotel_studio") && film.requiredChoicesSeed.camera.includes("camera_package_unknown"));
  assert.ok(film.requiredChoicesSeed.editing.includes("participant_edit_offer_declined") && film.requiredChoicesSeed.editing.includes("memory_provenance"));
  assert.ok(film.requiredChoicesSeed.sound.includes("5_1_delivery") && film.requiredChoicesSeed.sound.includes("final_mix_chain_unknown"));
  assert.ok(film.requiredChoicesSeed.themes.includes("nonfiction_hybrid") && film.requiredChoicesSeed.themes.includes("participant_agency"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("107-minute") && goal.includes("110-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2016 observational") && goal.includes("method test")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("lockdown") && goal.includes("fake fiction")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("professional actor doubles") && goal.includes("mirrors")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Hend Sabri") && goal.includes("interlocutor")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Majd Mastoura") && goal.includes("formal compression")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Brechtian") && goal.includes("inside/outside-scene")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("one-memory-per-day") && goal.includes("production pacing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("old Tunis hotel") && goal.includes("studio")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("majority-female crew") && goal.includes("safe-space")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("collectively written set constitution")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("actor's request to stop") && goal.includes("production information")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Eya's expressed wish") && goal.includes("participant agency")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2016/2017 observational footage") && goal.includes("provenance")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("roughly four-week principal shoot") && goal.includes("development history")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("5.1 presentation") && goal.includes("microphone")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("offered the opportunity to join the edit") && goal.includes("declined")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("France-Tunisia-Germany-Saudi Arabia") && goal.includes("international documentary")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register") && goal.includes("psychological-support")));

  assert.ok(film.phases.find((phase) => phase.id === "runtime_discrepancy")?.player_task.includes("107-minute"));
  assert.ok(film.phases.find((phase) => phase.id === "lockdown_reframe")?.player_task.includes("fake fiction"));
  assert.ok(film.phases.find((phase) => phase.id === "participant_directs_actor")?.player_task.includes("Olfa, Eya and Tayssir"));
  assert.ok(film.phases.find((phase) => phase.id === "single_hotel_studio")?.player_task.includes("one old hotel"));
  assert.ok(film.phases.find((phase) => phase.id === "set_constitution")?.player_task.includes("unwanted set behaviors"));
  assert.ok(film.phases.find((phase) => phase.id === "stop_scene")?.player_task.includes("stop and discuss"));
  assert.ok(film.phases.find((phase) => phase.id === "edit_offer")?.player_task.includes("participate in editing"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("legal review"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
