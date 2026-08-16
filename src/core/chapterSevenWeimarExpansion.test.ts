import assert from "node:assert/strict";
import test from "node:test";

import { chapterSevenWeimarExpansionDefinitions } from "./chapterSevenWeimarExpansion.js";

test("Chapter 7 materializes The Last Laugh as the canonical Kammerspielfilm/mobile-camera case", () => {
  assert.equal(chapterSevenWeimarExpansionDefinitions.length, 1);
  const film = chapterSevenWeimarExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_last_laugh_1924");
  assert.equal(film.title, "The Last Laugh");
  assert.equal(film.originalTitle, "Der letzte Mann");
  assert.equal(film.year, 1924);
  assert.equal(film.runtimeMins, 90);
  assert.equal(film.scenarioType, "kammerspielfilm_mobile_camera_production");
  assert.equal(film.sourceId, "manual_the_last_laugh_1924");
  assert.equal(film.sourceUrl, "https://www.filmportal.de/en/movie/der-letzte-mann_ea43d4a6d0975006e03053d50b37753d");
  assert.ok(film.requiredChoicesSeed.camera.includes("unchained_camera_subjectivity"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("single_intertitle_ironic_coda"));
  assert.ok(film.requiredChoicesSeed.sound.includes("later_scores_are_version_specific"));
  assert.ok(film.premise.includes("rather than falsely claiming"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("painted-set Expressionism of Caligari")));
  assert.ok(film.learningGoals.length >= 6);
  assert.ok(film.phases.length >= 9);
});
