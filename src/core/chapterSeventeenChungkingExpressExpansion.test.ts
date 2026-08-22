import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenChungkingExpressExpansionDefinitions } from "./chapterSeventeenChungkingExpressExpansion.js";

test("Chapter 17 materializes Chungking Express as a source-first Jet Tone rapid Hong Kong production", () => {
  assert.equal(chapterSeventeenChungkingExpressExpansionDefinitions.length, 1);
  const film = chapterSeventeenChungkingExpressExpansionDefinitions[0];
  assert.equal(film.id, "scenario_chungking_express_1994");
  assert.equal(film.year, 1994);
  assert.equal(film.runtimeMins, 102);
  assert.deepEqual(film.directors, ["Wong Kar Wai"]);
  assert.equal(film.sourceId, "bfi_chungking_express_1994");
  assert.ok(film.aliases.includes("Chung Hing sam lam"));
  assert.ok(film.scenarioType.includes("jet_tone") && film.scenarioType.includes("23_day") && film.scenarioType.includes("split_cinematography"));

  assert.ok(film.premise.includes("Jet Tone Films Limited") && film.premise.includes("23 days") && film.premise.includes("three months start to finish"));
  assert.ok(film.premise.includes("second story was written in one day") && film.premise.includes("third story later became Fallen Angels"));
  assert.ok(film.premise.includes("Andrew Lau Wai-keung") && film.premise.includes("Christopher Doyle") && film.premise.includes("reshoot"));
  assert.ok(film.premise.includes("busiest parts of Hong Kong") && film.premise.includes("crowd management") && film.premise.includes("crew welfare"));
  assert.ok(film.premise.includes("Doyle's own Central/Mid-Levels apartment") && film.premise.includes("damage to apartments below"));
  assert.ok(film.premise.includes("William Chang Suk Ping") && film.premise.includes("Hai Kit Wai") && film.premise.includes("Kong Chi Leung"));
  assert.ok(film.premise.includes("Frankie Chan") && film.premise.includes("California Dreamin'") && film.premise.includes("Dreams"));
  assert.ok(film.premise.includes("97/102/103") && film.premise.includes("102 as canonical gameplay runtime"));
  assert.ok(film.premise.includes("35mm original camera negative") && film.premise.includes("step-printing") && film.premise.includes("shutter angles"));
  assert.ok(film.premise.includes("made before 5.1") && film.premise.includes("5.1 remix") && film.premise.includes("1994 sound master"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("23-day shoot") && goal.includes("three-month")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Andrew Lau") && goal.includes("Christopher Doyle") && goal.includes("reshoots")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("busy Hong Kong streets") && goal.includes("traffic control")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("flooding damage") && goal.includes("uncontrolled water effects")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("97/102/103-minute") && goal.includes("102 minutes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("step-printing") && goal.includes("printer counts")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("predates 5.1") && goal.includes("5.1 remix")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Avoid inventing") && goal.includes("water-effects")));

  const script = film.phases.find((phase) => phase.id === "iterative_screenplay");
  assert.ok(script?.player_task.includes("unfinished-script") && script.player_task.includes("one-day") && script.player_task.includes("Fallen Angels"));
  const firstCamera = film.phases.find((phase) => phase.id === "first_segment_camera");
  assert.ok(firstCamera?.player_task.includes("Andrew Lau") && firstCamera.player_task.includes("lenses") && firstCamera.player_task.includes("shutter"));
  const handover = film.phases.find((phase) => phase.id === "doyle_handover");
  assert.ok(handover?.player_task.includes("Doyle") && handover.player_task.includes("reshoots") && handover.player_task.includes("Lau"));
  const locations = film.phases.find((phase) => phase.id === "public_location_work");
  assert.ok(locations?.player_task.includes("23-day") && locations.player_task.includes("traffic/crowd control") && locations.player_task.includes("crew welfare"));
  const apartment = film.phases.find((phase) => phase.id === "apartment_location");
  assert.ok(apartment?.player_task.includes("water damage") && apartment.player_task.includes("unsafe flooding"));
  const version = film.phases.find((phase) => phase.id === "format_version_restoration");
  assert.ok(version?.player_task.includes("97/102/103") && version.player_task.includes("35mm") && version.player_task.includes("4K/5.1"));

  assert.ok(film.requiredChoicesSeed.camera.includes("35mm_original_negative_without_invented_camera_lens_stock_shutter_exposure_or_step_print_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("1994_sound_not_2021_5_1_remix"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 10);
});
