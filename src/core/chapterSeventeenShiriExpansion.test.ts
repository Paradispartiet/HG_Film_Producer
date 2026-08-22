import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenShiriExpansionDefinitions } from "./chapterSeventeenShiriExpansion.js";

test("Chapter 17 materializes Shiri as a source-first South Korean blockbuster production", () => {
  assert.equal(chapterSeventeenShiriExpansionDefinitions.length, 1);
  const film = chapterSeventeenShiriExpansionDefinitions[0];
  assert.equal(film.id, "scenario_shiri_1999");
  assert.equal(film.year, 1999);
  assert.equal(film.runtimeMins, 125);
  assert.deepEqual(film.directors, ["Kang Je-gyu"]);
  assert.equal(film.sourceId, "kofic_shiri_1999");
  assert.ok(film.scenarioType.includes("south_korean_blockbuster") && film.scenarioType.includes("practical_effects") && film.scenarioType.includes("distribution"));

  assert.ok(film.premise.includes("KangJeGyu Films") && film.premise.includes("Samsung") && film.premise.includes("Korea Technology Finance Corporation"));
  assert.ok(film.premise.includes("2.4 billion won") && film.premise.includes("3 billion won") && film.premise.includes("US$5 million"));
  assert.ok(film.premise.includes("roughly two years") && film.premise.includes("revised it repeatedly") && film.premise.includes("Beak Woon-hak") && film.premise.includes("Jeon Yun-su"));
  assert.ok(film.premise.includes("Kim Sung-bok") && film.premise.includes("Hwang Suh-shik") && film.premise.includes("catalogue variance"));
  assert.ok(film.premise.includes("Won Myung-jun") && film.premise.includes("Park Gok-ji") && film.premise.includes("Lee Dong-jun"));
  assert.ok(film.premise.includes("Lee Byung-ha") && film.premise.includes("Kim Seok-won") && film.premise.includes("Jung Do-ahn") && film.premise.includes("Cho Sung-bae") && film.premise.includes("Jung Doo-hong"));
  assert.ok(film.premise.includes("purpose-built aquarium set") && film.premise.includes("injuries") && film.premise.includes("not contemporary instructions"));
  assert.ok(film.premise.includes("120/125") && film.premise.includes("125 minutes as canonical"));
  assert.ok(film.premise.includes("Do not invent camera bodies") && film.premise.includes("explosive charges") && film.premise.includes("wire loads/heights"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("lone-inventor") && goal.includes("Korean cinema")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2.4-billion-won") && goal.includes("US$5-million")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Kim Sung-bok") && goal.includes("Hwang Suh-shik")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Jung Do-ahn") && goal.includes("Cho Sung-bae") && goal.includes("Jung Doo-hong")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("injury") && goal.includes("desirable practice")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("120/125-minute") && goal.includes("125-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("North/South") && goal.includes("intelligence")));

  const finance = film.phases.find((phase) => phase.id === "package_and_finance");
  assert.ok(finance?.player_task.includes("2.4bn/3bn won") && finance.player_task.includes("US$5m"));
  const camera = film.phases.find((phase) => phase.id === "camera_lighting_design");
  assert.ok(camera?.player_task.includes("Kim Sung-bok") && camera.player_task.includes("Hwang Suh-shik") && camera.player_task.includes("camera/lens/stock"));
  const practical = film.phases.find((phase) => phase.id === "practical_effects");
  assert.ok(practical?.player_task.includes("aquarium injuries") && practical.player_task.includes("weapon loads"));
  const vfx = film.phases.find((phase) => phase.id === "visual_effects_and_miniatures");
  assert.ok(vfx?.player_task.includes("Cho Sung-bae") && vfx.player_task.includes("software") && vfx.player_task.includes("miniature-scale"));
  const release = film.phases.find((phase) => phase.id === "international_and_version_history");
  assert.ok(release?.player_task.includes("120/125") && release.player_task.includes("downstream"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_exposure_or_lab"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_sound_hardware_mix_format"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 10);
});
