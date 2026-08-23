import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenThreeColoursRedExpansionDefinitions } from "./chapterSeventeenThreeColoursRedExpansion.js";

test("Chapter 17 materializes Three Colours Red as a source-first transnational production", () => {
  assert.equal(chapterSeventeenThreeColoursRedExpansionDefinitions.length, 1);
  const film = chapterSeventeenThreeColoursRedExpansionDefinitions[0];
  assert.equal(film.id, "scenario_three_colours_red_1994");
  assert.equal(film.year, 1994);
  assert.equal(film.runtimeMins, 99);
  assert.deepEqual(film.directors, ["Krzysztof Kieślowski"]);
  assert.equal(film.sourceId, "bfi_three_colours_red_1994");
  assert.ok(film.scenarioType.includes("transnational") && film.scenarioType.includes("geneva") && film.scenarioType.includes("chiaroscuro"));

  assert.ok(film.premise.includes("MK2 Productions") && film.premise.includes("France 3 Cinéma") && film.premise.includes("CAB Productions") && film.premise.includes("Tor"));
  assert.ok(film.premise.includes("Canal+") && film.premise.includes("Eurimages") && film.premise.includes("Télévision Suisse Romande") && film.premise.includes("Swiss Federal Office of Culture"));
  assert.ok(film.premise.includes("Kieślowski and Piesiewicz") && film.premise.includes("screenplay consultants") && film.premise.includes("Piotr Sobociński"));
  assert.ok(film.premise.includes("first three weeks") && film.premise.includes("judge's house") && film.premise.includes("Geneva"));
  assert.ok(film.premise.includes("opening crane shot") && film.premise.includes("chiaroscuro lighting"));
  assert.ok(film.premise.includes("David Campbell") && film.premise.includes("Riccardo Brunner") && film.premise.includes("do not prove that every moving shot"));
  assert.ok(film.premise.includes("95/96/99") && film.premise.includes("1993/1994") && film.premise.includes("99 minutes as canonical"));
  assert.ok(film.premise.includes("Later Criterion HD/4K restoration") && film.premise.includes("downstream"));
  assert.ok(film.premise.includes("Do not invent camera bodies") && film.premise.includes("lighting ratios") && film.premise.includes("surveillance methods"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Swiss-French-Polish") && goal.includes("co-production")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Kieślowski/Piesiewicz") && goal.includes("Holland/Zebrowski/Sobociński")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("first three weeks") && goal.includes("complete production calendar")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("chiaroscuro") && goal.includes("ratios")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("red-filter") && goal.includes("LUT")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("95/96/99-minute") && goal.includes("99 minutes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("eavesdropping") && goal.includes("surveillance instruction")));

  const finance = film.phases.find((phase) => phase.id === "co_production_package");
  assert.ok(finance?.player_task.includes("Eurimages") && finance.player_task.includes("TSR") && finance.player_task.includes("public support"));
  const blocking = film.phases.find((phase) => phase.id === "performance_and_blocking");
  assert.ok(blocking?.player_task.includes("standing/sitting") && blocking.player_task.includes("Trintignant"));
  const camera = film.phases.find((phase) => phase.id === "camera_movement");
  assert.ok(camera?.player_task.includes("opening crane") && camera.player_task.includes("camera body") && camera.player_task.includes("lens"));
  const sound = film.phases.find((phase) => phase.id === "sound_and_music");
  assert.ok(sound?.player_task.includes("Laureux") && sound.player_task.includes("Flageollet") && sound.player_task.includes("Preisner"));
  const versions = film.phases.find((phase) => phase.id === "release_versions_restoration");
  assert.ok(versions?.player_task.includes("95/96") && versions.player_task.includes("1993/1994") && versions.player_task.includes("downstream"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_filter_exposure_or_lab"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_sound_hardware_adr_foley_or_mix_recipe"));
  assert.equal(film.learningGoals.length, 17);
  assert.equal(film.phases.length, 10);
});
