import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_BRIEF_FIELDS } from "./directorBrief.js";
import {
  DIRECTOR_APPLIED_LEARNING_GUIDES,
  getDirectorAppliedLearningContextsForTerm,
  getDirectorAppliedLearningGuideTerms,
  getDirectorAppliedLearningGuidesForKind,
  validateDirectorAppliedLearningCoverage,
} from "./directorAppliedLearning.js";
import { DIRECTOR_SHOT_FIELDS } from "./directorProject.js";

test("covers every scene-brief and shot-card decision with an applied learning guide", () => {
  assert.deepEqual(validateDirectorAppliedLearningCoverage(), []);
  assert.equal(getDirectorAppliedLearningGuidesForKind("brief").length, DIRECTOR_BRIEF_FIELDS.length);
  assert.equal(getDirectorAppliedLearningGuidesForKind("shot").length, DIRECTOR_SHOT_FIELDS.length);
  assert.equal(DIRECTOR_APPLIED_LEARNING_GUIDES.length, DIRECTOR_BRIEF_FIELDS.length + DIRECTOR_SHOT_FIELDS.length);
});

test("gives every applied guide a practical exercise, checklist and resolved terminology", () => {
  for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
    assert.ok(guide.purpose.length > 40, `${guide.id} needs a substantial purpose`);
    assert.ok(guide.exercise.length > 40, `${guide.id} needs a substantial exercise`);
    assert.ok(guide.checklist.length >= 2, `${guide.id} needs at least two checklist items`);
    assert.ok(guide.termIds.length >= 2, `${guide.id} needs at least two terms`);
    assert.equal(getDirectorAppliedLearningGuideTerms(guide).length, guide.termIds.length, `${guide.id} contains unresolved terms`);
  }
});

test("connects important film terms back to the Director decisions where they are used", () => {
  assert.ok(getDirectorAppliedLearningContextsForTerm("blocking").some((guide) => guide.id === "brief:blocking"));
  assert.ok(getDirectorAppliedLearningContextsForTerm("blocking").some((guide) => guide.id === "shot:subjectAction"));
  assert.ok(getDirectorAppliedLearningContextsForTerm("focal_length").some((guide) => guide.id === "brief:cameraMovementLenses"));
  assert.ok(getDirectorAppliedLearningContextsForTerm("focal_length").some((guide) => guide.id === "shot:lens"));
  assert.ok(getDirectorAppliedLearningContextsForTerm("sound_perspective").some((guide) => guide.id === "brief:soundStrategy"));
});
