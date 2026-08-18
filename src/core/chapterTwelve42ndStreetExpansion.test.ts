import assert from "node:assert/strict";
import test from "node:test";

import { chapterTwelve42ndStreetExpansionDefinitions } from "./chapterTwelve42ndStreetExpansion.js";

test("Chapter 12 materializes 42nd Street as a Warner backstage-musical Production Case", () => {
  assert.equal(chapterTwelve42ndStreetExpansionDefinitions.length, 1);
  const film = chapterTwelve42ndStreetExpansionDefinitions[0];
  assert.equal(film.id, "scenario_42nd_street_1933");
  assert.equal(film.year, 1933);
  assert.equal(film.runtimeMins, 89);
  assert.deepEqual(film.directors, ["Lloyd Bacon"]);
  assert.ok(film.premise.includes("Busby Berkeley"));
  assert.ok(film.premise.includes("28-day"));
  assert.ok(film.premise.includes("$340,000"));
  assert.ok(film.premise.includes("Western Electric"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Lloyd Bacon") && goal.includes("Busby Berkeley")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Nathan Levinson") && goal.includes("Academy")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_rig_or_lens_claims"));
  assert.ok(film.learningGoals.length >= 11);
  assert.ok(film.phases.length >= 9);
});
