import assert from "node:assert/strict";
import test from "node:test";
import type { TestScreeningResult } from "../domain/post.js";
import {
  getScreeningRevisionFocus,
  STUDIO_CAREER_SCREENING_REVISION_COPY
} from "./studioCareerScreeningRevision.js";

function screening(clarity: number, pacing: number, emotion: number, hook: number): TestScreeningResult {
  return {
    projectId: "test",
    clarityScore: clarity,
    pacingScore: pacing,
    emotionScore: emotion,
    audienceHookScore: hook,
    confusionRisk: 20,
    recommendedChanges: [],
    notes: []
  };
}

test("revision focus comes from the current screening, not generic feedback", () => {
  assert.equal(getScreeningRevisionFocus(screening(20, 70, 80, 90)), "clarity");
  assert.equal(getScreeningRevisionFocus(screening(90, 20, 70, 80)), "pacing");
  assert.equal(getScreeningRevisionFocus(screening(90, 70, 20, 80)), "emotion");
  assert.equal(getScreeningRevisionFocus(screening(90, 70, 80, 20)), "audienceHook");
  assert.equal(getScreeningRevisionFocus(screening(70, 70, 70, 70)), "clarity");
});

test("film-craft revision feedback covers four languages and three actual cut choices", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_SCREENING_REVISION_COPY), ["en", "nb", "fr", "pt"]);
  for (const language of ["en", "nb", "fr", "pt"] as const) {
    const copy = STUDIO_CAREER_SCREENING_REVISION_COPY[language];
    assert.ok(copy.heading.length >= 12);
    assert.ok(copy.footnote.length > 25);
    for (const focus of ["clarity", "pacing", "emotion", "audienceHook"] as const) {
      assert.ok(copy.focus[focus].length > 30);
    }
    for (const approach of ["balanced", "story_first", "bold_cut"] as const) {
      assert.ok(copy.approachTechnique[approach].length > 30);
    }
  }
});
