import assert from "node:assert/strict";
import test from "node:test";

import { CAMERA_COURSE_LESSONS } from "./filmSchoolCameraCourse.js";
import { CAMERA_LESSON_COPY } from "./filmSchoolCameraLessonCopy.js";

const canonicalIds = CAMERA_COURSE_LESSONS.map((lesson) => lesson.id).sort();

test("camera pedagogical copy covers all four FilmWork languages and five canonical lessons", () => {
  assert.deepEqual(Object.keys(CAMERA_LESSON_COPY).sort(), ["en", "fr", "nb", "pt"]);
  for (const copy of Object.values(CAMERA_LESSON_COPY)) {
    assert.deepEqual(Object.keys(copy).sort(), canonicalIds);
  }
});

test("localized camera copy preserves checklist and quiz option cardinality", () => {
  for (const [language, copy] of Object.entries(CAMERA_LESSON_COPY)) {
    for (const lesson of CAMERA_COURSE_LESSONS) {
      const localized = copy[lesson.id as keyof typeof copy];
      assert.ok(localized, `${language}:${lesson.id}`);
      assert.equal(localized.checklist.length, lesson.checklist.length, `${language}:${lesson.id}:checklist`);
      assert.equal(localized.quiz.options.length, lesson.quiz.options.length, `${language}:${lesson.id}:quiz-options`);
      assert.ok(localized.title.length > 0);
      assert.ok(localized.summary.length > 0);
      assert.ok(localized.principle.length > 0);
      assert.ok(localized.filmAnalysisQuestion.length > 0);
      assert.ok(localized.practicePrompt.length > 0);
      assert.ok(localized.quiz.question.length > 0);
      assert.ok(localized.quiz.explanation.length > 0);
    }
  }
});

test("Norwegian camera copy remains identical to canonical lesson prose", () => {
  for (const lesson of CAMERA_COURSE_LESSONS) {
    const copy = CAMERA_LESSON_COPY.nb[lesson.id as keyof typeof CAMERA_LESSON_COPY.nb];
    assert.equal(copy.title, lesson.title);
    assert.equal(copy.summary, lesson.summary);
    assert.equal(copy.principle, lesson.principle);
    assert.equal(copy.filmAnalysisQuestion, lesson.film.analysisQuestion);
    assert.equal(copy.practicePrompt, lesson.practicePrompt);
    assert.deepEqual(copy.checklist, lesson.checklist);
    assert.equal(copy.quiz.question, lesson.quiz.question);
    assert.deepEqual(copy.quiz.options, lesson.quiz.options);
    assert.equal(copy.quiz.explanation, lesson.quiz.explanation);
  }
});

test("English, French and Portuguese expose localized camera learning copy", () => {
  assert.equal(CAMERA_LESSON_COPY.en.shot_size_composition.title, "Shot size, composition and dramatic function");
  assert.equal(CAMERA_LESSON_COPY.fr.lenses_depth.title, "Focale, choix d’objectif et profondeur de champ");
  assert.equal(CAMERA_LESSON_COPY.pt.focus_attention.title, "Foco, atenção e plano de filmagem");
  assert.notEqual(CAMERA_LESSON_COPY.en.camera_movement.title, CAMERA_LESSON_COPY.nb.camera_movement.title);
});
