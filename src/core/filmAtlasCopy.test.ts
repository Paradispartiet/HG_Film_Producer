import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  FILM_ATLAS_COPY,
  FILM_ATLAS_SORT_IDS,
  FILM_ATLAS_TAB_IDS,
  FILM_ATLAS_VERIFICATION_IDS,
  getFilmAtlasVerificationLabel,
} from "./filmAtlasCopy.js";

test("Film Atlas copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(FILM_ATLAS_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("Film Atlas keeps canonical product naming and stable ids", () => {
  assert.deepEqual(FILM_ATLAS_TAB_IDS, ["analysis", "timeline"]);
  assert.deepEqual(FILM_ATLAS_SORT_IDS, ["catalogue", "year", "title"]);
  assert.deepEqual(FILM_ATLAS_VERIFICATION_IDS, ["verified", "seeded", "needs_research"]);
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(FILM_ATLAS_COPY[language].productTitle, "Film Atlas");
    assert.equal(FILM_ATLAS_COPY[language].actions.productionCases, "Production Cases");
  }
});

test("English Atlas chrome preserves the current visible wording", () => {
  const copy = FILM_ATLAS_COPY.en;
  assert.equal(copy.pageKicker, "Film construction, catalogue and chronology");
  assert.equal(copy.tabs.analysis, "Film analysis");
  assert.equal(copy.tabs.timeline, "Timeline");
  assert.equal(copy.controls.search, "Search");
  assert.equal(copy.controls.allGenres, "All genres");
  assert.equal(copy.analysis.learningKicker, "What this film can teach");
  assert.equal(copy.timeline.kicker, "Chronological catalogue");
});

test("verification labels are localized from canonical status ids", () => {
  for (const language of FILMWORK_LANGUAGES) {
    for (const status of FILM_ATLAS_VERIFICATION_IDS) {
      assert.ok(getFilmAtlasVerificationLabel(language, status).trim(), `${language}:${status}`);
    }
  }
  assert.equal(getFilmAtlasVerificationLabel("en", "verified"), "Research verified");
  assert.equal(getFilmAtlasVerificationLabel("en", "seeded"), "Seeded analysis");
  assert.equal(getFilmAtlasVerificationLabel("en", "needs_research"), "Research enrichment pending");
});

test("dynamic Atlas copy preserves canonical film data and counts", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_ATLAS_COPY[language];
    assert.ok(copy.notFound.description("film-x-1970").includes("film-x-1970"));
    assert.match(copy.resultsShown(4), /4/);
    assert.ok(copy.analysis.decadeCinema("1970s").includes("1970s"));
    assert.match(copy.analysis.cataloguePosition(4, 10), /4.*10/);
    assert.ok(copy.analysis.previousFilm("1970 · Film X").includes("1970 · Film X"));
    assert.ok(copy.analysis.nextFilm("1980 · Film Y").includes("1980 · Film Y"));
    assert.match(copy.timeline.filmCount(8), /8/);
  }
});
