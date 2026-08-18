import assert from "node:assert/strict";
import test from "node:test";

import { chapterTenOrochiExpansionDefinitions } from "./chapterTenOrochiExpansion.js";

test("Chapter 10 materializes Orochi as an independent star-company chanbara Production Case", () => {
  assert.equal(chapterTenOrochiExpansionDefinitions.length, 1);
  const orochi = chapterTenOrochiExpansionDefinitions[0];
  assert.equal(orochi.id, "scenario_orochi_1925");
  assert.equal(orochi.title, "Orochi");
  assert.equal(orochi.originalTitle, "雄呂血");
  assert.equal(orochi.year, 1925);
  assert.equal(orochi.runtimeMins, 100);
  assert.equal(orochi.scenarioType, "japanese_independent_star_chanbara_benshi_restoration_production");
  assert.ok(orochi.premise.includes("Bantsuma Production"));
  assert.ok(orochi.premise.includes("Buntaro Futagawa"));
  assert.ok(orochi.premise.includes("Rokuhei Susukita"));
  assert.ok(orochi.premise.includes("Seizo Ishino"));
  assert.ok(orochi.premise.includes("Jinbei Kawamura"));
  assert.ok(orochi.premise.includes("Shunsui Matsuda's 1965 narration tradition"));
  assert.ok(orochi.premise.includes("4K restoration supervised by the National Film Archive of Japan"));
  assert.ok(orochi.requiredChoicesSeed.screenplay.includes("feudal_hypocrisy_not_samurai_nostalgia"));
  assert.ok(orochi.requiredChoicesSeed.camera.includes("mobile_camera_without_modern_action_preset"));
  assert.ok(orochi.requiredChoicesSeed.sound.includes("matsuda_1965_commentary_not_original_soundtrack"));
  assert.ok(orochi.requiredChoicesSeed.themes.includes("archive_survival"));
  assert.ok(orochi.learningGoals.some((goal) => goal.includes("74-, 80- and roughly 100-minute versions")));
  assert.ok(orochi.learningGoals.some((goal) => goal.includes("never rewarded simply for maximizing violence")));
  assert.ok(orochi.learningGoals.length >= 7);
  assert.ok(orochi.phases.length >= 9);
});
