import assert from "node:assert/strict";
import test from "node:test";

import { chapterTwelveScarfaceExpansionDefinitions } from "./chapterTwelveScarfaceExpansion.js";

test("Chapter 12 materializes Scarface as an independent gangster/censorship Production Case", () => {
  assert.equal(chapterTwelveScarfaceExpansionDefinitions.length, 1);
  const film = chapterTwelveScarfaceExpansionDefinitions[0];
  assert.equal(film.id, "scenario_scarface_1932");
  assert.equal(film.year, 1932);
  assert.equal(film.runtimeMins, 95);
  assert.deepEqual(film.directors, ["Howard Hawks", "Richard Rosson"]);
  assert.ok(film.premise.includes("Caddo"));
  assert.ok(film.premise.includes("United Artists"));
  assert.ok(film.premise.includes("Versions A/B/C"));
  assert.ok(film.premise.includes("1934 PCA"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Lewis Milestone") && goal.includes("alternate-version")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("90/95/99")));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("pre_1934_code_negotiation"));
  assert.ok(film.learningGoals.length >= 11);
  assert.ok(film.phases.length >= 9);
});
