import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { STUDIO_CAREER_WORKSPACE_COPY } from "./studioCareerWorkspaceCopy.js";

test("Studio Career workspace copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_WORKSPACE_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("English workspace chrome preserves current visible wording", () => {
  const copy = STUDIO_CAREER_WORKSPACE_COPY.en;
  assert.equal(copy.pipeline.posterPrefix, "A HG production");
  assert.equal(copy.pipeline.productionCaseKicker, "Production Case · active film");
  assert.equal(copy.pipeline.experimentalKicker, "Experimental Studio Career · active film");
  assert.equal(copy.pipeline.whatToDoNow, "What to do now");
  assert.equal(copy.status.complete, "Complete");
  assert.equal(copy.status.inProgress, "In progress");
  assert.equal(copy.status.locked, "Locked");
  assert.equal(copy.actions.openRelease, "Open release step");
  assert.equal(copy.actions.openCareerReview, "Open career review");
  assert.equal(copy.completed.showDetails, "Show details");
  assert.equal(copy.completed.hideDetails, "Hide details");
  assert.equal(copy.workspace.completeSummary(2), "Film 2 · Complete summary");
});

test("all six phase labels and descriptions are localized", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const phases = STUDIO_CAREER_WORKSPACE_COPY[language].phases;
    for (const phase of [phases.development, phases.preProduction, phases.shoot, phases.postProduction, phases.release, phases.careerReview]) {
      assert.ok(phase.label.trim(), language);
      assert.ok(phase.description.trim(), language);
    }
  }
});

test("dynamic continuation copy preserves the localized phase label", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = STUDIO_CAREER_WORKSPACE_COPY[language];
    const label = copy.phases.development.label;
    assert.match(copy.actions.continuePhase(label), new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("Production Case naming remains canonical in workspace chrome", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = STUDIO_CAREER_WORKSPACE_COPY[language];
    assert.match(copy.pipeline.productionCaseKicker, /^Production Case\b/, language);
    assert.match(copy.pipeline.latestProductionCaseUpdate, /Production Case/, language);
  }
});
