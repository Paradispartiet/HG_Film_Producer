import assert from "node:assert/strict";
import test from "node:test";
import { STUDIO_CAREER_REVIEW_COPY } from "./studioCareerReviewCopy.js";

const languages = ["en", "nb", "fr", "pt"] as const;

test("studio career review copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_REVIEW_COPY), languages);
});

test("career review chrome localizes active review panels", () => {
  assert.equal(STUDIO_CAREER_REVIEW_COPY.nb.panel.eyebrow, "Karrieregjennomgang");
  assert.equal(STUDIO_CAREER_REVIEW_COPY.fr.completedFilm.grossRevenue, "Recettes brutes");
  assert.equal(STUDIO_CAREER_REVIEW_COPY.pt.careerYear.awardMomentum, "Impulso de prémios");
  assert.equal(STUDIO_CAREER_REVIEW_COPY.pt.studioDelta.beforeAfter, "Antes / depois");
});

test("career review dynamic copy preserves project and year values", () => {
  assert.equal(STUDIO_CAREER_REVIEW_COPY.en.panel.closeYear("film 2"), "Close Film 2 year");
  assert.equal(STUDIO_CAREER_REVIEW_COPY.nb.panel.closeYear("film 3"), "Avslutt året for Film 3");
  assert.equal(STUDIO_CAREER_REVIEW_COPY.fr.result.yearClosed(3), "Année du film 3 clôturée");
  assert.equal(STUDIO_CAREER_REVIEW_COPY.pt.careerYear.reviewHeading(2028), "Revisão do ano 2028");
});

test("career review next-step and empty-state copy remain explicit", () => {
  assert.equal(STUDIO_CAREER_REVIEW_COPY.en.result.nextProject(1), "Start next project");
  assert.equal(STUDIO_CAREER_REVIEW_COPY.nb.result.nextProject(2), "Start Film 3");
  assert.equal(STUDIO_CAREER_REVIEW_COPY.fr.result.noneThisReview, "Aucun lors de cette évaluation");
  assert.equal(STUDIO_CAREER_REVIEW_COPY.pt.result.formingIdentity, "em formação");
});
