import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { DIRECTOR_BRIEF_FIELDS } from "./directorBrief.js";
import "./directorKnowledgeExtensions.js";
import { mergeEarlyCinemaExpansion, type HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { mergeEastAsianAuteurExpansion } from "./eastAsianAuteurExpansion.js";
import { mergeEasternIberianBritishExpansion } from "./easternIberianBritishExpansion.js";
import { mergeFestivalWinners1981To2009Expansion } from "./festivalWinners1981To2009Expansion.js";
import { mergeFestivalWinners2010To2024Expansion } from "./festivalWinners2010To2024Expansion.js";
import {
  PERFORMANCE_COURSE_LESSONS,
  PERFORMANCE_DIRECTOR_ASSIGNMENT_FIELDS,
  coercePerformanceCourseProgress,
  createBlankPerformanceCourseProgress,
  createPerformanceDirectorAssignment,
  getPerformanceCourseCompletionPercent,
  getPerformanceCourseLessonTerms,
  getPerformanceLessonMasteryStage,
  isPerformanceCourseMastered,
  isPerformanceCourseQuizAnswerCorrect,
} from "./filmSchoolPerformanceCourse.js";
import { mergeItalyFranceGermanyBeneluxExpansion } from "./italyFranceGermanyBeneluxExpansion.js";
import { mergeJapaneseAuteurExpansion } from "./japaneseAuteurExpansion.js";
import { mergeModernCanonExpansion } from "./modernCanonExpansion.js";
import { mergePriorityIndieExpansion } from "./priorityIndieExpansion.js";
import { mergeScandinavianEuropeanExpansion } from "./scandinavianEuropeanExpansion.js";
import { mergeSouthKoreanCinemaExpansion } from "./southKoreanCinemaExpansion.js";
import { mergeSouthSoutheastAsianExpansion } from "./southSoutheastAsianExpansion.js";

const fixedNow = "2026-07-20T14:00:00.000Z";

test("performance course has five complete and unique lessons", () => {
  assert.equal(PERFORMANCE_COURSE_LESSONS.length, 5);
  assert.equal(new Set(PERFORMANCE_COURSE_LESSONS.map((lesson) => lesson.id)).size, 5);
  assert.deepEqual(PERFORMANCE_COURSE_LESSONS.map((lesson) => lesson.number), ["01", "02", "03", "04", "05"]);
  for (const lesson of PERFORMANCE_COURSE_LESSONS) {
    assert.ok(lesson.title.length >= 8);
    assert.ok(lesson.summary.length >= 30);
    assert.ok(lesson.principle.length >= 60);
    assert.ok(lesson.termIds.length >= 4);
    assert.equal(lesson.checklist.length, 3);
    assert.equal(lesson.quiz.options.length, 4);
    assert.ok(lesson.quiz.correctIndex >= 0 && lesson.quiz.correctIndex < lesson.quiz.options.length);
  }
});

test("all performance course terminology links resolve", () => {
  for (const lesson of PERFORMANCE_COURSE_LESSONS) {
    const terms = getPerformanceCourseLessonTerms(lesson);
    assert.equal(terms.length, lesson.termIds.length, `${lesson.id} has unresolved terminology`);
    assert.deepEqual(terms.map((term) => term.id), lesson.termIds);
  }
});

test("all five performance course film examples resolve exactly once in Film Atlas", () => {
  const scenarios = buildCurrentCatalogue();
  for (const lesson of PERFORMANCE_COURSE_LESSONS) {
    const requestedTitle = normalizeTitle(lesson.film.title);
    const matches = scenarios.filter((scenario) => (
      scenario.film.year === lesson.film.year
      && [scenario.film.title, scenario.film.original_title].map(normalizeTitle).includes(requestedTitle)
    ));
    assert.equal(matches.length, 1, `${lesson.film.title} (${lesson.film.year}) should resolve exactly once`);
  }
});

test("quiz grading accepts only the configured answer", () => {
  for (const lesson of PERFORMANCE_COURSE_LESSONS) {
    lesson.quiz.options.forEach((_, index) => {
      assert.equal(isPerformanceCourseQuizAnswerCorrect(lesson, index), index === lesson.quiz.correctIndex);
    });
    assert.equal(isPerformanceCourseQuizAnswerCorrect(lesson, -1), false);
    assert.equal(isPerformanceCourseQuizAnswerCorrect(lesson, 1.5), false);
  }
});

test("progress coercion removes unknown lesson IDs and preserves valid notes", () => {
  const validLesson = PERFORMANCE_COURSE_LESSONS[1];
  assert.ok(validLesson);
  const progress = coercePerformanceCourseProgress({
    activeLessonId: validLesson.id,
    seenLessonIds: [validLesson.id, validLesson.id, "missing"],
    understoodLessonIds: ["missing"],
    usedLessonIds: [validLesson.id],
    notesByLessonId: { [validLesson.id]: "A concrete rehearsal note.", missing: "discard" },
    updatedAt: fixedNow,
  }, fixedNow);
  assert.equal(progress.activeLessonId, validLesson.id);
  assert.deepEqual(progress.seenLessonIds, [validLesson.id]);
  assert.deepEqual(progress.understoodLessonIds, []);
  assert.deepEqual(progress.usedLessonIds, [validLesson.id]);
  assert.deepEqual(progress.notesByLessonId, { [validLesson.id]: "A concrete rehearsal note." });
});

test("mastery and completion require seen, understood, and used for every lesson", () => {
  const blank = createBlankPerformanceCourseProgress(fixedNow);
  assert.equal(getPerformanceCourseCompletionPercent(blank), 0);
  assert.equal(isPerformanceCourseMastered(blank), false);
  const lessonIds = PERFORMANCE_COURSE_LESSONS.map((lesson) => lesson.id);
  const mastered = {
    ...blank,
    seenLessonIds: lessonIds,
    understoodLessonIds: lessonIds,
    usedLessonIds: lessonIds,
  };
  assert.equal(getPerformanceCourseCompletionPercent(mastered), 100);
  assert.equal(isPerformanceCourseMastered(mastered), true);
  for (const lessonId of lessonIds) assert.equal(getPerformanceLessonMasteryStage(mastered, lessonId), "mastered");
});

test("final performance assignment links to valid Director brief fields", () => {
  const validFieldIds = new Set(DIRECTOR_BRIEF_FIELDS.map((field) => field.id));
  assert.equal(PERFORMANCE_DIRECTOR_ASSIGNMENT_FIELDS.length, 5);
  assert.equal(new Set(PERFORMANCE_DIRECTOR_ASSIGNMENT_FIELDS).size, 5);
  for (const fieldId of PERFORMANCE_DIRECTOR_ASSIGNMENT_FIELDS) assert.equal(validFieldIds.has(fieldId), true);

  const assignment = createPerformanceDirectorAssignment({
    id: "scenario_kes_1969",
    title: "Kes",
    year: 1969,
    slug: "kes-1969",
  }, fixedNow);
  assert.equal(assignment.courseId, "director_performance_blocking");
  assert.equal(assignment.filmSlug, "kes-1969");
  assert.deepEqual(assignment.fieldIds, PERFORMANCE_DIRECTOR_ASSIGNMENT_FIELDS);
  assert.equal(assignment.createdAt, fixedNow);
});

function buildCurrentCatalogue(): readonly HistoricalFilmScenario[] {
  const seedUrl = new URL("../../data/film/scenarios/film_scenarios_seed.json", import.meta.url);
  const parsed = JSON.parse(readFileSync(seedUrl, "utf8")) as { readonly scenarios: readonly HistoricalFilmScenario[] };
  const historical = mergeEarlyCinemaExpansion(parsed.scenarios);
  const modern = mergeModernCanonExpansion(historical);
  const priorityIndie = mergePriorityIndieExpansion(modern);
  const eastAsian = mergeEastAsianAuteurExpansion(priorityIndie);
  const japanese = mergeJapaneseAuteurExpansion(eastAsian);
  const southKorean = mergeSouthKoreanCinemaExpansion(japanese);
  const southSoutheastAsian = mergeSouthSoutheastAsianExpansion(southKorean);
  const earlyFestival = mergeFestivalWinners1981To2009Expansion(southSoutheastAsian);
  const recentFestival = mergeFestivalWinners2010To2024Expansion(earlyFestival);
  const scandinavianEuropean = mergeScandinavianEuropeanExpansion(recentFestival);
  const easternIberianBritish = mergeEasternIberianBritishExpansion(scandinavianEuropean);
  return mergeItalyFranceGermanyBeneluxExpansion(easternIberianBritish);
}

function normalizeTitle(value: string): string {
  return value.toLocaleLowerCase("en").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}
