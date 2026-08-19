import assert from "node:assert/strict";
import test from "node:test";

import { chapterThirteenLosOlvidadosExpansionDefinitions } from "./chapterThirteenLosOlvidadosExpansion.js";

test("Chapter 13 materializes Los olvidados as a Mexico City postwar social-realism/surrealism Production Case", () => {
  assert.equal(chapterThirteenLosOlvidadosExpansionDefinitions.length, 1);
  const film = chapterThirteenLosOlvidadosExpansionDefinitions[0];
  assert.equal(film.id, "scenario_los_olvidados_1950");
  assert.equal(film.year, 1950);
  assert.equal(film.runtimeMins, 80);
  assert.deepEqual(film.directors, ["Luis Buñuel"]);
  assert.ok(film.premise.includes("two years"));
  assert.ok(film.premise.includes("Estudios Tepeyac"));
  assert.ok(film.premise.includes("Gabriel Figueroa"));
  assert.ok(film.premise.includes("alternate ending"));
  assert.ok(film.premise.includes("monaural"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("location-studio hybridity")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("dream sequence") && goal.includes("surrealist")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("80, 81 and 88")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_package"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
