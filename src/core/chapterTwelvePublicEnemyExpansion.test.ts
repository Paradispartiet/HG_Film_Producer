import assert from "node:assert/strict";
import test from "node:test";

import { chapterTwelvePublicEnemyExpansionDefinitions } from "./chapterTwelvePublicEnemyExpansion.js";

test("Chapter 12 materializes The Public Enemy as a Warner studio-and-gangster Production Case", () => {
  assert.equal(chapterTwelvePublicEnemyExpansionDefinitions.length, 1);
  const film = chapterTwelvePublicEnemyExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_public_enemy_1931");
  assert.equal(film.title, "The Public Enemy");
  assert.equal(film.year, 1931);
  assert.equal(film.runtimeMins, 83);
  assert.ok(film.premise.includes("Warner Bros."));
  assert.ok(film.premise.includes("Beer and Blood"));
  assert.ok(film.premise.includes("Production Code Administration"));
  assert.ok(film.premise.includes("1934"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("1931_pre_enforcement_code_boundary"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recording_system_claims"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("role-swap") && goal.includes("incorrect")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Dev Jennings") && goal.includes("Max Parker")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("PCA") && goal.includes("1934")));
  assert.ok(film.learningGoals.length >= 10);
  assert.ok(film.phases.length >= 9);
});
