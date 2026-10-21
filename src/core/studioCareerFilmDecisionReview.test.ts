import assert from "node:assert/strict";
import { test } from "node:test";
import {
  selectNextProductionFocus,
  STUDIO_CAREER_FILM_DECISION_REVIEW_COPY
} from "./studioCareerFilmDecisionReview.js";

test("next film suggestion picks the lowest production score without changing the input", () => {
  const scores = { crew: 84, casting: 78, shoot: 66, cut: 88 };
  const previous = { ...scores };
  assert.equal(selectNextProductionFocus(scores), "shoot");
  assert.deepEqual(scores, previous);
  assert.equal(selectNextProductionFocus({ ...scores, crew: 40 }), "crew");
  assert.equal(selectNextProductionFocus({ ...scores, casting: 40 }), "casting");
  assert.equal(selectNextProductionFocus({ ...scores, cut: 40 }), "cut");
});

test("the next-film suggestion has a stable tie order", () => {
  assert.equal(selectNextProductionFocus({ crew: 70, casting: 70, shoot: 70, cut: 70 }), "crew");
  assert.equal(selectNextProductionFocus({ crew: 75, casting: 65, shoot: 65, cut: 65 }), "casting");
});

test("all four languages explain the existing production chain and label the advice as non-mechanical", () => {
  for (const language of ["en", "nb", "fr", "pt"] as const) {
    const copy = STUDIO_CAREER_FILM_DECISION_REVIEW_COPY[language];
    for (const value of [
      copy.heading, copy.intro, copy.developmentEffect, copy.peopleEffect,
      copy.setEffect, copy.finishingEffect, copy.nextFilm, copy.advisory,
      copy.focus.crew, copy.focus.casting, copy.focus.shoot, copy.focus.cut
    ]) {
      assert.ok(value.trim().length > 0, `Missing review copy in ${language}`);
    }
    assert.ok(copy.techniques(2).includes("2"));
    assert.ok(copy.locations(2).includes("2"));
  }
  assert.match(STUDIO_CAREER_FILM_DECISION_REVIEW_COPY.nb.heading, /ferdige filmen/);
  assert.match(STUDIO_CAREER_FILM_DECISION_REVIEW_COPY.en.advisory, /not an automatic upgrade/);
});
