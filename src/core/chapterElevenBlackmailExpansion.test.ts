import assert from "node:assert/strict";
import test from "node:test";

import { chapterElevenBlackmailExpansionDefinitions } from "./chapterElevenBlackmailExpansion.js";

test("Chapter 11 materializes Blackmail as a dual silent/sound Production Case", () => {
  assert.equal(chapterElevenBlackmailExpansionDefinitions.length, 1);
  const blackmail = chapterElevenBlackmailExpansionDefinitions[0];
  assert.equal(blackmail.id, "scenario_blackmail_1929");
  assert.equal(blackmail.title, "Blackmail");
  assert.equal(blackmail.year, 1929);
  assert.equal(blackmail.runtimeMins, 82);
  assert.equal(blackmail.scenarioType, "bip_dual_silent_sound_elstree_live_dubbing_psychological_sound_version_control_production");
  assert.ok(blackmail.premise.includes("silent and sound versions"));
  assert.ok(blackmail.premise.includes("British International Pictures"));
  assert.ok(blackmail.premise.includes("Elstree"));
  assert.ok(blackmail.premise.includes("Joan Barry"));
  assert.ok(blackmail.premise.includes("psychologically selective"));
  assert.ok(blackmail.requiredChoicesSeed.screenplay.includes("dual_version_structure"));
  assert.ok(blackmail.requiredChoicesSeed.editing.includes("silent_sound_version_divergence"));
  assert.ok(blackmail.requiredChoicesSeed.sound.includes("joan_barry_live_dubbing"));
  assert.ok(blackmail.learningGoals.some((goal) => goal.includes("two historically distinct")));
  assert.ok(blackmail.learningGoals.some((goal) => goal.includes("live dubbing")));
  assert.ok(blackmail.learningGoals.some((goal) => goal.includes("unsupported")));
  assert.ok(blackmail.learningGoals.length >= 9);
  assert.ok(blackmail.phases.length >= 9);
});
