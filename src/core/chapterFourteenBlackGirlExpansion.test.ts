import assert from "node:assert/strict";
import test from "node:test";

import { chapterFourteenBlackGirlExpansionDefinitions } from "./chapterFourteenBlackGirlExpansion.js";

test("Chapter 14 materializes Black Girl as a Senegalese post-independence Production Case", () => {
  assert.equal(chapterFourteenBlackGirlExpansionDefinitions.length, 1);
  const film = chapterFourteenBlackGirlExpansionDefinitions[0];
  assert.equal(film.id, "scenario_black_girl_1966");
  assert.equal(film.year, 1966);
  assert.equal(film.runtimeMins, 59);
  assert.deepEqual(film.directors, ["Ousmane Sembène"]);
  assert.ok(film.premise.includes("mégotage"));
  assert.ok(film.premise.includes("M’Bissine Thérèse Diop"));
  assert.ok(film.premise.includes("Toto Bissainthe"));
  assert.ok(film.premise.includes("59-minute"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Ministry of Cooperation") && goal.includes("rejection")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("voice") && goal.includes("Bissainthe")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_lighting_package"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
