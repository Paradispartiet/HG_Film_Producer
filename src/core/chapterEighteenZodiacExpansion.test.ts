import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenZodiacExpansionDefinitions } from "./chapterEighteenZodiacExpansion.js";

test("Chapter 18 materializes Zodiac as a source-first tapeless digital-negative production case", () => {
  assert.equal(chapterEighteenZodiacExpansionDefinitions.length, 1);
  const film = chapterEighteenZodiacExpansionDefinitions[0];
  assert.equal(film.id, "scenario_zodiac_2007");
  assert.equal(film.year, 2007);
  assert.equal(film.runtimeMins, 158);
  assert.deepEqual(film.directors, ["David Fincher"]);
  assert.equal(film.sourceId, "asc_zodiac_2007");
  assert.ok(film.scenarioType.includes("viper_filmstream") && film.scenarioType.includes("digital_negative") && film.scenarioType.includes("custom_conform"));

  assert.ok(film.premise.includes("uncompressed-HD-to-drive") && film.premise.includes("4:4:4 1920x1080p"));
  assert.ok(film.premise.includes("approximately 18 million DPX files") && film.premise.includes("144 TB"));
  assert.ok(film.premise.includes("two pristine digital-negative clones") && film.premise.includes("off-site"));
  assert.ok(film.premise.includes("pixel-for-pixel verification") && film.premise.includes("bit-by-bit verification"));
  assert.ok(film.premise.includes("DVCPRO HD") && film.premise.includes("custom conform"));
  assert.ok(film.premise.includes("1920x1080 10-bit 4:4:4 DPX") && film.premise.includes("35mm"));
  assert.ok(film.premise.includes("Lowry/DTS") && film.premise.includes("dead pixels"));
  assert.ok(film.premise.includes("Stephen Shore") && film.premise.includes("William Eggleston"));
  assert.ok(film.premise.includes("Ren Klyce") && film.premise.includes("David Shire"));
  assert.ok(film.premise.includes("158-minute"));
  assert.ok(film.premise.includes("Do not invent 2K sensor capture"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("all-data workflow")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("4:4:4") && goal.includes("unlimited")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("144 TB") && goal.includes("18 million DPX")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("DVCPRO HD") && goal.includes("DPX")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Rock Paper Scissors") && goal.includes("laboratory-like")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("PIX") && goal.includes("remote")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Lowry/DTS") && goal.includes("dead pixels")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35mm") && goal.includes("photochemical")));

  const archive = film.phases.find((phase) => phase.id === "lto_negative");
  assert.ok(archive?.player_task.includes("LTO-3") && archive.player_task.includes("pixel-for-pixel") && archive.player_task.includes("off-site"));
  const proxy = film.phases.find((phase) => phase.id === "proxy_editorial");
  assert.ok(proxy?.player_task.includes("DVCPRO HD") && proxy.player_task.includes("DPX"));
  const conform = film.phases.find((phase) => phase.id === "custom_conform");
  assert.ok(conform?.player_task.includes("1920x1080 10-bit 4:4:4") && conform.player_task.includes("proxies"));
  const repair = film.phases.find((phase) => phase.id === "image_repair");
  assert.ok(repair?.player_task.includes("noise") && repair.player_task.includes("dead pixels") && repair.player_task.includes("ringing"));
  const filmout = film.phases.find((phase) => phase.id === "filmout");
  assert.ok(filmout?.player_task.includes("TDI") && filmout.player_task.includes("35mm") && filmout.player_task.includes("release-print"));

  assert.ok(film.requiredChoicesSeed.camera.includes("clean_444_capture"));
  assert.ok(film.requiredChoicesSeed.editing.includes("lto3_dual_digital_negative"));
  assert.ok(film.requiredChoicesSeed.editing.includes("custom_dpx_conform"));
  assert.ok(film.requiredChoicesSeed.sound.includes("period_typewriter_phone_vehicle_recording"));
  assert.ok(film.learningGoals.length >= 28);
  assert.ok(film.phases.length >= 18);
});
