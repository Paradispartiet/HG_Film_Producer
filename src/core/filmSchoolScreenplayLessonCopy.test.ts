import assert from "node:assert/strict";
import test from "node:test";

import { SCREENPLAY_COURSE_LESSONS } from "./filmSchoolScreenplayCourse.js";
import { SCREENPLAY_LESSON_COPY } from "./filmSchoolScreenplayLessonCopy.js";

const canonicalIds = SCREENPLAY_COURSE_LESSONS.map((lesson) => lesson.id).sort();

test("screenplay pedagogical copy covers all four FilmWork languages and five canonical lessons", () => {
  assert.deepEqual(Object.keys(SCREENPLAY_LESSON_COPY).sort(), ["en", "fr", "nb", "pt"]);
  for (const copy of Object.values(SCREENPLAY_LESSON_COPY)) {
    assert.deepEqual(Object.keys(copy).sort(), canonicalIds);
  }
});

test("localized screenplay copy preserves checklist and quiz option cardinality", () => {
  for (const [language, copy] of Object.entries(SCREENPLAY_LESSON_COPY)) {
    for (const lesson of SCREENPLAY_COURSE_LESSONS) {
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

test("Norwegian screenplay copy remains identical to canonical lesson prose", () => {
  for (const lesson of SCREENPLAY_COURSE_LESSONS) {
    const copy = SCREENPLAY_LESSON_COPY.nb[lesson.id as keyof typeof SCREENPLAY_LESSON_COPY.nb];
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

test("English, French and Portuguese expose localized screenplay learning copy", () => {
  assert.equal(SCREENPLAY_LESSON_COPY.en.context_point_of_view.title, "Context, information and point of view");
  assert.equal(SCREENPLAY_LESSON_COPY.fr.objective_obstacle_stakes.title, "Objectif, obstacle et enjeu");
  assert.equal(SCREENPLAY_LESSON_COPY.pt.subtext_playable_action.title, "Subtexto e ação jogável");
  assert.notEqual(SCREENPLAY_LESSON_COPY.en.setup_payoff_sequence.title, SCREENPLAY_LESSON_COPY.nb.setup_payoff_sequence.title);
});
