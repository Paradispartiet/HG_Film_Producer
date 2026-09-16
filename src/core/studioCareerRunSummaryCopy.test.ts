import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { STUDIO_CAREER_RUN_SUMMARY_COPY } from "./studioCareerRunSummaryCopy.js";

test("Studio Career run summary copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_RUN_SUMMARY_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("English run summary preserves current visible wording", () => {
  const copy = STUDIO_CAREER_RUN_SUMMARY_COPY.en;
  assert.equal(copy.panel.kicker, "Project summary");
  assert.equal(copy.panel.heading, "Project brief");
  assert.equal(copy.panel.editSetup, "Edit setup");
  assert.equal(copy.labels.strategicGoal, "Strategic goal");
  assert.equal(copy.labels.scriptTemplate, "Script template");
  assert.equal(copy.development.ready, "Ready for development");
  assert.equal(copy.preProduction.productionLocked, "Production locked");
  assert.equal(copy.shoot.shootComplete, "Shoot complete");
  assert.equal(copy.postProduction.editSuiteOpen, "Edit suite open");
  assert.equal(copy.release.filmReleased, "Film released");
  assert.equal(copy.career.reviewReady, "Review ready");
});

test("dynamic run summary copy preserves production values", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = STUDIO_CAREER_RUN_SUMMARY_COPY[language];
    assert.match(copy.preProduction.lockedDetail(42, 3), /42.*3/);
    assert.match(copy.shoot.completeDetail(5, 87), /5.*87/);
    assert.match(copy.postProduction.completeDetail(91), /91/);
    assert.match(copy.release.releasedDetail(74, false), /74/);
    assert.match(copy.career.updatedDetail(4), /4/);
  }
});

test("all run summary status labels are populated", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const labels = STUDIO_CAREER_RUN_SUMMARY_COPY[language].labels;
    for (const value of Object.values(labels)) assert.ok(value.trim(), language);
  }
});
