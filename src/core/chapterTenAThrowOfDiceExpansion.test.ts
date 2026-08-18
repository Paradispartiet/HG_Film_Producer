import assert from "node:assert/strict";
import test from "node:test";

import { chapterTenAThrowOfDiceExpansionDefinitions } from "./chapterTenAThrowOfDiceExpansion.js";

test("Chapter 10 materializes A Throw of Dice as a transnational India-location Production Case", () => {
  assert.equal(chapterTenAThrowOfDiceExpansionDefinitions.length, 1);
  const dice = chapterTenAThrowOfDiceExpansionDefinitions[0];
  assert.equal(dice.id, "scenario_a_throw_of_dice_1929");
  assert.equal(dice.title, "A Throw of Dice");
  assert.equal(dice.originalTitle, "Prapancha Pash");
  assert.equal(dice.year, 1929);
  assert.equal(dice.runtimeMins, 74);
  assert.equal(dice.scenarioType, "indo_german_british_location_epic_coproduction");
  assert.ok(dice.premise.includes("Himansu Rai"));
  assert.ok(dice.premise.includes("Franz Osten"));
  assert.ok(dice.premise.includes("Emil Schünemann"));
  assert.ok(dice.premise.includes("Promode Nath"));
  assert.ok(dice.premise.includes("UFA"));
  assert.ok(dice.premise.includes("British Instructional Films"));
  assert.ok(dice.premise.includes("Nitin Sawhney"));
  assert.ok(dice.requiredChoicesSeed.screenplay.includes("adaptation_not_cultural_totality"));
  assert.ok(dice.requiredChoicesSeed.camera.includes("transnational_craft_credit"));
  assert.ok(dice.requiredChoicesSeed.sound.includes("nitin_sawhney_restoration_score_not_original_soundtrack"));
  assert.ok(dice.learningGoals.some((goal) => goal.includes("preservation shapes canon formation")));
  assert.ok(dice.learningGoals.length >= 7);
  assert.ok(dice.phases.length >= 9);
});
