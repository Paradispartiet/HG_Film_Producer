import assert from "node:assert/strict";
import test from "node:test";

import { chapterThirteenUgetsuExpansionDefinitions } from "./chapterThirteenUgetsuExpansion.js";

test("Chapter 13 materializes Ugetsu as a Daiei postwar period-fantasy Production Case", () => {
  assert.equal(chapterThirteenUgetsuExpansionDefinitions.length, 1);
  const film = chapterThirteenUgetsuExpansionDefinitions[0];
  assert.equal(film.id, "scenario_ugetsu_1953");
  assert.equal(film.year, 1953);
  assert.equal(film.runtimeMins, 97);
  assert.deepEqual(film.directors, ["Kenji Mizoguchi"]);
  assert.ok(film.premise.includes("Daiei"));
  assert.ok(film.premise.includes("Masaichi Nagata"));
  assert.ok(film.premise.includes("Kazuo Miyagawa"));
  assert.ok(film.premise.includes("seventy percent"));
  assert.ok(film.premise.includes("Silver Lion"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Ueda") && goal.includes("Maupassant")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("crane") && goal.includes("Miyagawa")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_package"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
