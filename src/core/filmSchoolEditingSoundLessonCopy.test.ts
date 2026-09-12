import assert from "node:assert/strict";
import test from "node:test";

import { EDITING_SOUND_COURSE_LESSONS } from "./filmSchoolEditingSoundCourse.js";
import { EDITING_SOUND_LESSON_COPY } from "./filmSchoolEditingSoundLessonCopy.js";

const canonicalIds = EDITING_SOUND_COURSE_LESSONS.map((lesson) => lesson.id).sort();

test("editing and sound pedagogical copy covers all four FilmWork languages and five canonical lessons", () => {
  assert.deepEqual(Object.keys(EDITING_SOUND_LESSON_COPY).sort(), ["en", "fr", "nb", "pt"]);
  for (const copy of Object.values(EDITING_SOUND_LESSON_COPY)) {
    assert.deepEqual(Object.keys(copy).sort(), canonicalIds);
  }
});

test("localized editing and sound copy preserves checklist and quiz option cardinality", () => {
  for (const [language, copy] of Object.entries(EDITING_SOUND_LESSON_COPY)) {
    for (const lesson of EDITING_SOUND_COURSE_LESSONS) {
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

test("Norwegian editing and sound copy remains identical to canonical lesson prose", () => {
  for (const lesson of EDITING_SOUND_COURSE_LESSONS) {
    const copy = EDITING_SOUND_LESSON_COPY.nb[lesson.id as keyof typeof EDITING_SOUND_LESSON_COPY.nb];
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

test("English, French and Portuguese expose localized editing and sound learning copy", () => {
  assert.equal(EDITING_SOUND_LESSON_COPY.en.coverage_performance_rhythm.title, "Coverage, performance and editing rhythm");
  assert.equal(EDITING_SOUND_LESSON_COPY.fr.sound_space_perspective.title, "Perspective sonore, espace et subjectivité");
  assert.equal(EDITING_SOUND_LESSON_COPY.pt.lock_grade_delivery.title, "Bloqueio de imagem, correção de cor, master e entrega");
  assert.notEqual(EDITING_SOUND_LESSON_COPY.en.music_spotting_mix.title, EDITING_SOUND_LESSON_COPY.nb.music_spotting_mix.title);
});
