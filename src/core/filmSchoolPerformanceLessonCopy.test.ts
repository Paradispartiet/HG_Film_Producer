import assert from "node:assert/strict";
import test from "node:test";

import { PERFORMANCE_COURSE_LESSONS } from "./filmSchoolPerformanceCourse.js";
import { PERFORMANCE_LESSON_COPY } from "./filmSchoolPerformanceLessonCopy.js";

const canonicalIds = PERFORMANCE_COURSE_LESSONS.map((lesson) => lesson.id).sort();

test("performance pedagogical copy covers all four FilmWork languages and five canonical lessons", () => {
  assert.deepEqual(Object.keys(PERFORMANCE_LESSON_COPY).sort(), ["en", "fr", "nb", "pt"]);
  for (const copy of Object.values(PERFORMANCE_LESSON_COPY)) {
    assert.deepEqual(Object.keys(copy).sort(), canonicalIds);
  }
});

test("localized performance copy preserves checklist and quiz option cardinality", () => {
  for (const [language, copy] of Object.entries(PERFORMANCE_LESSON_COPY)) {
    for (const lesson of PERFORMANCE_COURSE_LESSONS) {
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

test("Norwegian performance copy remains identical to canonical lesson prose", () => {
  for (const lesson of PERFORMANCE_COURSE_LESSONS) {
    const copy = PERFORMANCE_LESSON_COPY.nb[lesson.id as keyof typeof PERFORMANCE_LESSON_COPY.nb];
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

test("English, French and Portuguese expose localized performance learning copy", () => {
  assert.equal(PERFORMANCE_LESSON_COPY.en.circumstances_intention.title, "Given circumstances, objective and intention");
  assert.equal(PERFORMANCE_LESSON_COPY.fr.blocking_power_movement.title, "Mise en place, pouvoir et mouvement motivé");
  assert.equal(PERFORMANCE_LESSON_COPY.pt.rehearsal_adjustment_continuity.title, "Ensaio, ajuste e continuidade entre takes");
  assert.notEqual(PERFORMANCE_LESSON_COPY.en.eyeline_marks_camera.title, PERFORMANCE_LESSON_COPY.nb.eyeline_marks_camera.title);
});
