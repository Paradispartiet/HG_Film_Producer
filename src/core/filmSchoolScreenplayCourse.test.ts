import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_BRIEF_FIELDS } from "./directorBrief.js";
import {
  SCREENPLAY_COURSE_LESSONS,
  SCREENPLAY_DIRECTOR_ASSIGNMENT_FIELDS,
  coerceScreenplayCourseProgress,
  countScreenplayCourseMilestones,
  createBlankScreenplayCourseProgress,
  createScreenplayDirectorAssignment,
  getScreenplayCourseCompletionPercent,
  getScreenplayCourseLessonTerms,
  getScreenplayLessonMasteryStage,
  isScreenplayCourseMastered,
  isScreenplayCourseQuizAnswerCorrect,
} from "./filmSchoolScreenplayCourse.js";

test("screenplay course contains five complete and unique lessons", () => {
  assert.equal(SCREENPLAY_COURSE_LESSONS.length, 5);
  assert.equal(new Set(SCREENPLAY_COURSE_LESSONS.map((lesson) => lesson.id)).size, 5);
  assert.equal(new Set(SCREENPLAY_COURSE_LESSONS.map((lesson) => `${lesson.film.year}:${lesson.film.title}`)).size, 5);

  for (const lesson of SCREENPLAY_COURSE_LESSONS) {
    assert.ok(lesson.title.length > 8);
    assert.ok(lesson.principle.length > 30);
    assert.ok(lesson.practicePrompt.length > 30);
    assert.ok(lesson.checklist.length >= 3);
    assert.ok(lesson.termIds.length >= 3);
    assert.equal(getScreenplayCourseLessonTerms(lesson).length, lesson.termIds.length);
    assert.equal(lesson.quiz.options.length, 4);
    assert.ok(lesson.quiz.correctIndex >= 0 && lesson.quiz.correctIndex < lesson.quiz.options.length);
    assert.equal(isScreenplayCourseQuizAnswerCorrect(lesson, lesson.quiz.correctIndex), true);
  }
});

test("progress is coerced to known lessons and calculates four learning stages", () => {
  const first = SCREENPLAY_COURSE_LESSONS[0];
  assert.ok(first);
  const progress = coerceScreenplayCourseProgress({
    activeLessonId: first.id,
    seenLessonIds: [first.id, first.id, "unknown"],
    understoodLessonIds: [first.id, "unknown"],
    usedLessonIds: [first.id],
    notesByLessonId: { [first.id]: "A concrete scene analysis", unknown: "remove" },
    updatedAt: "2026-07-20T12:00:00.000Z",
  });

  assert.deepEqual(progress.seenLessonIds, [first.id]);
  assert.deepEqual(progress.understoodLessonIds, [first.id]);
  assert.deepEqual(progress.usedLessonIds, [first.id]);
  assert.equal(progress.notesByLessonId[first.id], "A concrete scene analysis");
  assert.equal(progress.notesByLessonId.unknown, undefined);
  assert.equal(getScreenplayLessonMasteryStage(progress, first.id), "mastered");
  assert.equal(countScreenplayCourseMilestones(progress), 3);
  assert.equal(getScreenplayCourseCompletionPercent(progress), 20);
  assert.equal(isScreenplayCourseMastered(progress), false);
});

test("all course milestones produce full mastery", () => {
  const lessonIds = SCREENPLAY_COURSE_LESSONS.map((lesson) => lesson.id);
  const progress = {
    ...createBlankScreenplayCourseProgress(),
    seenLessonIds: lessonIds,
    understoodLessonIds: lessonIds,
    usedLessonIds: lessonIds,
  };
  assert.equal(countScreenplayCourseMilestones(progress), 15);
  assert.equal(getScreenplayCourseCompletionPercent(progress), 100);
  assert.equal(isScreenplayCourseMastered(progress), true);
});

test("director assignment uses valid brief fields and preserves film identity", () => {
  const validFields = new Set(DIRECTOR_BRIEF_FIELDS.map((field) => field.id));
  assert.equal(SCREENPLAY_DIRECTOR_ASSIGNMENT_FIELDS.length, 5);
  for (const fieldId of SCREENPLAY_DIRECTOR_ASSIGNMENT_FIELDS) assert.equal(validFields.has(fieldId), true);

  const assignment = createScreenplayDirectorAssignment(
    { id: "scenario_test", title: "Test Film", year: 1966, slug: "test-film-1966" },
    "2026-07-20T12:00:00.000Z",
  );
  assert.equal(assignment.filmId, "scenario_test");
  assert.equal(assignment.filmSlug, "test-film-1966");
  assert.deepEqual(assignment.fieldIds, SCREENPLAY_DIRECTOR_ASSIGNMENT_FIELDS);
  assert.ok(assignment.prompt.includes("synsvinkel"));
});
