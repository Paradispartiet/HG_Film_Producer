import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenRaidersLostArkExpansionDefinitions } from "./chapterSixteenRaidersLostArkExpansion.js";

test("Chapter 16 materializes Raiders of the Lost Ark as the first franchise-era P0 Production Case", () => {
  assert.equal(chapterSixteenRaidersLostArkExpansionDefinitions.length, 1);
  const film = chapterSixteenRaidersLostArkExpansionDefinitions[0];
  assert.equal(film.id, "scenario_raiders_of_the_lost_ark_1981");
  assert.equal(film.year, 1981);
  assert.equal(film.runtimeMins, 115);
  assert.deepEqual(film.directors, ["Steven Spielberg"]);
  assert.equal(film.sourceId, "afi_raiders_of_the_lost_ark_1981");
  assert.ok(film.scenarioType.includes("lucasfilm_paramount_franchise_adventure"));
  assert.ok(film.premise.includes("73-day"));
  assert.ok(film.premise.includes("Michael D. Moore"));
  assert.ok(film.premise.includes("Douglas Slocombe"));
  assert.ok(film.premise.includes("Industrial Light & Magic") || film.premise.includes("ILM"));
  assert.ok(film.premise.includes("Dolby Stereo"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Lucasfilm-Paramount")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("second-unit") || goal.includes("second unit")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_or_exposure_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("original_dolby_stereo_not_later_atmos"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
