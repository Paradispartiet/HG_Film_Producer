import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenBanditQueenExpansionDefinitions } from "./chapterSeventeenBanditQueenExpansion.js";

test("Chapter 17 materializes Bandit Queen as a source-first contested living-biography production", () => {
  assert.equal(chapterSeventeenBanditQueenExpansionDefinitions.length, 1);
  const film = chapterSeventeenBanditQueenExpansionDefinitions[0];
  assert.equal(film.id, "scenario_bandit_queen_1994");
  assert.equal(film.year, 1994);
  assert.equal(film.runtimeMins, 119);
  assert.deepEqual(film.directors, ["Shekhar Kapur"]);
  assert.equal(film.sourceId, "bfi_bandit_queen_1994");
  assert.ok(film.scenarioType.includes("film_four") && film.scenarioType.includes("contested_subject_rights") && film.scenarioType.includes("35mm"));

  assert.ok(film.premise.includes("Film Four International") && film.premise.includes("Kaleidoscope") && film.premise.includes("Bobby Bedi") && film.premise.includes("Mala Sen"));
  assert.ok(film.premise.includes("Ashok Mehta") && film.premise.includes("Ketan Mehta") && film.premise.includes("catalogue variance"));
  assert.ok(film.premise.includes("Renu Saluja") && film.premise.includes("Nusrat Fateh Ali Khan") && film.premise.includes("Robert Taylor") && film.premise.includes("Tom Lewiston"));
  assert.ok(film.premise.includes("35mm") && film.premise.includes("119") && film.premise.includes("120"));
  assert.ok(film.premise.includes("$1.4-million") && film.premise.includes("not an audited"));
  assert.ok(film.premise.includes("Chambal ravines") && film.premise.includes("exact locations") && film.premise.includes("permits"));
  assert.ok(film.premise.includes("Seema Biswas") && film.premise.includes("body double") && film.premise.includes("performer negotiation"));
  assert.ok(film.premise.includes("Phoolan Devi") && film.premise.includes("adaptation agreement") && film.premise.includes("violated privacy"));
  assert.ok(film.premise.includes("rough or final edited version") && film.premise.includes("competing claims"));
  assert.ok(film.premise.includes("true story") && film.premise.includes("not claimed as an authentic version"));
  assert.ok(film.premise.includes("CBFC") && film.premise.includes("version/censorship history"));
  assert.ok(film.premise.includes("independent consent") && film.premise.includes("trauma-informed safeguards"));
  assert.ok(film.premise.includes("Do not invent camera bodies") && film.premise.includes("sexual-violence blocking"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("adaptation agreement") && goal.includes("privacy")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Phoolan Devi") && goal.includes("Seema Biswas") && goal.includes("different people")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("body-double") && goal.includes("performer testimony")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("present-day") && goal.includes("intimacy") && goal.includes("trauma-informed")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Ashok Mehta") && goal.includes("Ketan Mehta")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("$1.4-million") && goal.includes("not an audited budget")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("119/120-minute") && goal.includes("119 minutes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("true story") && goal.includes("non-authenticity disclaimer")));

  const rights = film.phases.find((phase) => phase.id === "rights_and_adaptation");
  assert.ok(rights?.player_task.includes("Mala Sen") && rights.player_task.includes("agreement") && rights.player_task.includes("privacy"));
  const sensitive = film.phases.find((phase) => phase.id === "sensitive_scene_consent");
  assert.ok(sensitive?.player_task.includes("Biswas") && sensitive.player_task.includes("Devi") && sensitive.player_task.includes("modern intimacy"));
  const location = film.phases.find((phase) => phase.id === "chambal_location_work");
  assert.ok(location?.player_task.includes("Kapur") && location.player_task.includes("permits") && location.player_task.includes("risky access"));
  const camera = film.phases.find((phase) => phase.id === "camera_and_light");
  assert.ok(camera?.player_task.includes("Ashok Mehta") && camera.player_task.includes("Ketan Mehta") && camera.player_task.includes("lens"));
  const legal = film.phases.find((phase) => phase.id === "certification_and_court");
  assert.ok(legal?.player_task.includes("CBFC") && legal.player_task.includes("injunction") && legal.player_task.includes("separate from what happened on set"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_filter_exposure_lighting_or_lab_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_adr_foley_or_mix_layout"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 10);
});
