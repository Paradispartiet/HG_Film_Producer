import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { FILM_STUDY_AREAS } from "./filmStudyCoverage.js";
import {
  FILM_STUDY_COPY,
  FILM_STUDY_ERAS,
  formatFilmStudyEra,
  getFilmStudyAreaLabel,
  getFilmStudyCoverageStatusLabel,
} from "./filmStudyCopy.js";

const COVERAGE_STATUSES = ["source_verified", "mapped", "research_pending", "not_central"] as const;

test("Film Study copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(FILM_STUDY_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language covers the exact 17 canonical Film Study area IDs", () => {
  const expectedAreaIds = FILM_STUDY_AREAS.map((area) => area.id).sort();
  assert.equal(expectedAreaIds.length, 17);

  for (const language of FILMWORK_LANGUAGES) {
    assert.deepEqual(Object.keys(FILM_STUDY_COPY[language].areaLabels).sort(), expectedAreaIds, language);
  }
});

test("English area labels remain identical to canonical Film Study labels", () => {
  for (const area of FILM_STUDY_AREAS) {
    assert.equal(getFilmStudyAreaLabel("en", area.id), area.label, area.id);
  }
});

test("coverage status presentation is complete and keyed by canonical status IDs", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.deepEqual(Object.keys(FILM_STUDY_COPY[language].coverageStatus).sort(), [...COVERAGE_STATUSES].sort(), language);
    for (const status of COVERAGE_STATUSES) {
      assert.ok(getFilmStudyCoverageStatusLabel(language, status).trim().length > 0, `${language}:${status}`);
    }
  }
});

test("known broad eras localize while unknown future eras fail closed", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.deepEqual(Object.keys(FILM_STUDY_COPY[language].eraLabels).sort(), [...FILM_STUDY_ERAS].sort(), language);
  }

  for (const era of FILM_STUDY_ERAS) {
    assert.equal(formatFilmStudyEra("en", era), era, era);
  }
  assert.equal(formatFilmStudyEra("nb", "Future era outside contract"), "Future era outside contract");
  assert.equal(formatFilmStudyEra("fr", "Future era outside contract"), "Future era outside contract");
  assert.equal(formatFilmStudyEra("pt", "Future era outside contract"), "Future era outside contract");
});

test("dynamic Film Study chrome preserves film titles, counts, and verification dates", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_STUDY_COPY[language];
    assert.ok(copy.intro("Film X", formatFilmStudyEra(language, "New Waves and modernist cinema")).includes("Film X"), `${language}:film-title`);
    assert.match(copy.sourceVerifiedAreas(7, 17), /7.*17/);
    assert.match(copy.auditPending(4, 17), /4.*17/);
    assert.match(copy.sourcesMeta(3, "2026-09-14"), /3/);
    assert.ok(copy.sourcesMeta(3, "2026-09-14").includes("2026-09-14"), `${language}:verified-date`);
  }
});

test("NB, FR, and PT localize representative Film Study chrome, area labels, and eras", () => {
  for (const language of ["nb", "fr", "pt"] as const) {
    assert.notEqual(FILM_STUDY_COPY[language].title, FILM_STUDY_COPY.en.title, `${language}:title`);
    assert.notEqual(FILM_STUDY_COPY[language].pendingTitle, FILM_STUDY_COPY.en.pendingTitle, `${language}:pending`);
    assert.notEqual(getFilmStudyAreaLabel(language, "cinematography"), getFilmStudyAreaLabel("en", "cinematography"), `${language}:area`);
    assert.notEqual(formatFilmStudyEra(language, "Silent-era cinema"), "Silent-era cinema", `${language}:era`);
  }
});
