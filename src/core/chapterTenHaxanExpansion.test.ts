import assert from "node:assert/strict";
import test from "node:test";

import { chapterTenHaxanExpansionDefinitions } from "./chapterTenHaxanExpansion.js";

test("Chapter 10 materializes Häxan as a research-lecture reenactment Production Case", () => {
  assert.equal(chapterTenHaxanExpansionDefinitions.length, 1);
  const haxan = chapterTenHaxanExpansionDefinitions[0];
  assert.equal(haxan.id, "scenario_haxan_1922");
  assert.equal(haxan.title, "Häxan");
  assert.equal(haxan.year, 1922);
  assert.equal(haxan.runtimeMins, 122);
  assert.equal(haxan.scenarioType, "swedish_danish_research_lecture_reenactment_trick_censorship_restoration_production");
  assert.ok(haxan.premise.includes("Swedish-financed, Danish-studio"));
  assert.ok(haxan.premise.includes("Johan Ankerstjerne"));
  assert.ok(haxan.premise.includes("Richard Louw"));
  assert.ok(haxan.premise.includes("Emil Reesen"));
  assert.ok(haxan.premise.includes("most expensive Scandinavian silent film"));
  assert.ok(haxan.premise.includes("2016 digital restoration"));
  assert.ok(haxan.premise.includes("tinting/toning"));
  assert.ok(haxan.requiredChoicesSeed.screenplay.includes("lecture_reenactment_evidence_boundaries"));
  assert.ok(haxan.requiredChoicesSeed.camera.includes("staged_reenactment_not_documentary_fact"));
  assert.ok(haxan.requiredChoicesSeed.editing.includes("restoration_version_control"));
  assert.ok(haxan.requiredChoicesSeed.sound.includes("later_accompaniment_is_exhibition"));
  assert.ok(haxan.learningGoals.some((goal) => goal.includes("documentary authority")));
  assert.ok(haxan.learningGoals.some((goal) => goal.includes("current medical consensus")));
  assert.ok(haxan.learningGoals.some((goal) => goal.includes("torture, sexualized imagery")));
  assert.ok(haxan.learningGoals.length >= 8);
  assert.ok(haxan.phases.length >= 9);
});
