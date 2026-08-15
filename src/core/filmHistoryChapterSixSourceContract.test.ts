import assert from "node:assert/strict";
import test from "node:test";

import { filmHistoryChapterSix, filmHistoryChapterSixSources } from "./filmHistoryChapterSix.js";

test("Chapter 6 keeps the reviewed 37-source contract and closed production gap", () => {
  assert.equal(filmHistoryChapterSixSources.length, 37);
  assert.equal(filmHistoryChapterSix.sections.length, 15);
  assert.equal(filmHistoryChapterSix.filmReferences.filter((film) => film.atlasDecision === "use_existing_atlas_case").length, 6);
  assert.equal(filmHistoryChapterSix.filmReferences.filter((film) => film.atlasDecision === "P2").length, 12);
  assert.equal(filmHistoryChapterSix.filmReferences.some((film) => film.atlasDecision === "P0" || film.atlasDecision === "P1"), false);
  assert.equal(filmHistoryChapterSix.historicalObjects.length, 10);
  assert.ok(filmHistoryChapterSix.historicalObjects.every((item) => item.atlasDecision === "no_production_case"));
});
