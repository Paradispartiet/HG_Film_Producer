import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenCityOfGodExpansionDefinitions } from "./chapterEighteenCityOfGodExpansion.js";

test("Chapter 18 materializes City of God as a source-first mixed-gauge digital-convergence production case", () => {
  assert.equal(chapterEighteenCityOfGodExpansionDefinitions.length, 1);
  const film = chapterEighteenCityOfGodExpansionDefinitions[0];
  assert.equal(film.id, "scenario_city_of_god_2002");
  assert.equal(film.year, 2002);
  assert.equal(film.runtimeMins, 130);
  assert.deepEqual(film.directors, ["Fernando Meirelles", "Kátia Lund"]);
  assert.equal(film.sourceId, "bfi_city_of_god_meirelles_2024");
  assert.ok(film.scenarioType.includes("mixed_super16_35mm") && film.scenarioType.includes("digital_intermediate"));

  assert.ok(film.premise.includes("predominantly Super 16") && film.premise.includes("selected 35mm"));
  assert.ok(film.premise.includes("80% 16mm") && film.premise.includes("70% 16mm"));
  assert.ok(film.premise.includes("Aaton Super 16") && film.premise.includes("Arri II 35mm"));
  assert.ok(film.premise.includes("four-and-a-half to five months") && film.premise.includes("non-professional actors"));
  assert.ok(film.premise.includes("did not conventionally receive or read the script") && film.premise.includes("repeatable improvisation"));
  assert.ok(film.premise.includes("co-director credit") && film.premise.includes("casting, actor preparation and performance support"));
  assert.ok(film.premise.includes("Palace II") && film.premise.includes("practical laboratory"));
  assert.ok(film.premise.includes("abandoned its original plan to shoot the feature in the actual City of God") && film.premise.includes("community"));
  assert.ok(film.premise.includes("130 minutes") && film.premise.includes("135-minute"));
  assert.ok(film.premise.includes("Do not invent an exact settled 16/35 percentage"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("photochemical-acquisition") && goal.includes("digital post")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("80/20") && goal.includes("70/30")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Palace II") && goal.includes("production laboratory")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("four-and-a-half to five months") && goal.includes("workshops")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Kátia Lund") && goal.includes("formal co-director credit")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("130 minutes") && goal.includes("135-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("digital convergence") && goal.includes("digital capture")));

  const workshops = film.phases.find((phase) => phase.id === "actor_workshops");
  assert.ok(workshops?.player_task.includes("four-and-a-half to five months") && workshops.player_task.includes("repeatable"));
  const lab = film.phases.find((phase) => phase.id === "palace_ii_lab");
  assert.ok(lab?.player_task.includes("gauges") && lab.player_task.includes("telecine"));
  const location = film.phases.find((phase) => phase.id === "location_strategy");
  assert.ok(location?.player_task.includes("actual City of God") && location.player_task.includes("dangerous"));
  const mixedGauge = film.phases.find((phase) => phase.id === "mixed_gauge_capture");
  assert.ok(mixedGauge?.player_task.includes("Super 16") && mixedGauge.player_task.includes("80/20") && mixedGauge.player_task.includes("70/30"));
  const digitalPost = film.phases.find((phase) => phase.id === "digital_intermediate");
  assert.ok(digitalPost?.player_task.includes("Super 16") && digitalPost.player_task.includes("35mm") && digitalPost.player_task.includes("digital"));
  const credits = film.phases.find((phase) => phase.id === "credit_role_boundary");
  assert.ok(credits?.player_task.includes("Meirelles") && credits.player_task.includes("Lund") && credits.player_task.includes("workshops"));

  assert.ok(film.requiredChoicesSeed.camera.includes("predominantly_super16_selected_35mm"));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_false_digital_capture_claim"));
  assert.ok(film.requiredChoicesSeed.editing.includes("mixed_gauge_matching"));
  assert.ok(film.learningGoals.length >= 20);
  assert.ok(film.phases.length >= 14);
});
