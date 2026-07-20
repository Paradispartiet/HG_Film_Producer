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
  CAMERA_COURSE_LESSONS,
  CAMERA_DIRECTOR_ASSIGNMENT_FIELDS,
  coerceCameraCourseProgress,
  createBlankCameraCourseProgress,
  createCameraDirectorAssignment,
  getCameraCourseCompletionPercent,
  getCameraCourseLessonTerms,
  getCameraLessonMasteryStage,
  isCameraCourseMastered,
  isCameraCourseQuizAnswerCorrect,
} from "./filmSchoolCameraCourse.js";
import { mergeItalyFranceGermanyBeneluxExpansion } from "./italyFranceGermanyBeneluxExpansion.js";
import { mergeJapaneseAuteurExpansion } from "./japaneseAuteurExpansion.js";
import { mergeModernCanonExpansion } from "./modernCanonExpansion.js";
import { mergePriorityIndieExpansion } from "./priorityIndieExpansion.js";
import { mergeScandinavianEuropeanExpansion } from "./scandinavianEuropeanExpansion.js";
import { mergeSouthKoreanCinemaExpansion } from "./southKoreanCinemaExpansion.js";
import { mergeSouthSoutheastAsianExpansion } from "./southSoutheastAsianExpansion.js";

const fixedNow = "2026-07-20T15:00:00.000Z";

test("camera course has five complete and unique lessons", () => {
  assert.equal(CAMERA_COURSE_LESSONS.length, 5);
  assert.equal(new Set(CAMERA_COURSE_LESSONS.map((lesson) => lesson.id)).size, 5);
  assert.deepEqual(CAMERA_COURSE_LESSONS.map((lesson) => lesson.number), ["01", "02", "03", "04", "05"]);
  for (const lesson of CAMERA_COURSE_LESSONS) {
    assert.ok(lesson.title.length >= 8);
    assert.ok(lesson.summary.length >= 30);
    assert.ok(lesson.principle.length >= 60);
    assert.ok(lesson.termIds.length >= 4);
    assert.equal(lesson.checklist.length, 3);
    assert.equal(lesson.quiz.options.length, 4);
    assert.ok(lesson.quiz.correctIndex >= 0 && lesson.quiz.correctIndex < lesson.quiz.options.length);
  }
});

test("all camera course terminology links resolve", () => {
  for (const lesson of CAMERA_COURSE_LESSONS) {
    const terms = getCameraCourseLessonTerms(lesson);
    assert.equal(terms.length, lesson.termIds.length, `${lesson.id} has unresolved terminology`);
    assert.deepEqual(terms.map((term) => term.id), lesson.termIds);
  }
});

test("all five camera course film examples resolve exactly once in Film Atlas", () => {
  const scenarios = buildCurrentCatalogue();
  for (const lesson of CAMERA_COURSE_LESSONS) {
    const requestedTitle = normalizeTitle(lesson.film.title);
    const matches = scenarios.filter((scenario) => (
      scenario.film.year === lesson.film.year
      && [scenario.film.title, scenario.film.original_title].map(normalizeTitle).includes(requestedTitle)
    ));
    assert.equal(matches.length, 1, `${lesson.film.title} (${lesson.film.year}) should resolve exactly once`);
  }
});

test("camera quiz grading accepts only the configured answer", () => {
  for (const lesson of CAMERA_COURSE_LESSONS) {
    lesson.quiz.options.forEach((_, index) => {
      assert.equal(isCameraCourseQuizAnswerCorrect(lesson, index), index === lesson.quiz.correctIndex);
    });
    assert.equal(isCameraCourseQuizAnswerCorrect(lesson, -1), false);
    assert.equal(isCameraCourseQuizAnswerCorrect(lesson, 1.5), false);
  }
});

test("camera progress coercion removes unknown lesson IDs and preserves valid notes", () => {
  const validLesson = CAMERA_COURSE_LESSONS[2];
  assert.ok(validLesson);
  const progress = coerceCameraCourseProgress({
    activeLessonId: validLesson.id,
    seenLessonIds: [validLesson.id, validLesson.id, "missing"],
    understoodLessonIds: ["missing"],
    usedLessonIds: [validLesson.id],
    notesByLessonId: { [validLesson.id]: "A concrete camera plan.", missing: "discard" },
    updatedAt: fixedNow,
  }, fixedNow);
  assert.equal(progress.activeLessonId, validLesson.id);
  assert.deepEqual(progress.seenLessonIds, [validLesson.id]);
  assert.deepEqual(progress.understoodLessonIds, []);
  assert.deepEqual(progress.usedLessonIds, [validLesson.id]);
  assert.deepEqual(progress.notesByLessonId, { [validLesson.id]: "A concrete camera plan." });
});

test("camera mastery and completion require seen, understood, and used for every lesson", () => {
  const blank = createBlankCameraCourseProgress(fixedNow);
  assert.equal(getCameraCourseCompletionPercent(blank), 0);
  assert.equal(isCameraCourseMastered(blank), false);
  const lessonIds = CAMERA_COURSE_LESSONS.map((lesson) => lesson.id);
  const mastered = {
    ...blank,
    seenLessonIds: lessonIds,
    understoodLessonIds: lessonIds,
    usedLessonIds: lessonIds,
  };
  assert.equal(getCameraCourseCompletionPercent(mastered), 100);
  assert.equal(isCameraCourseMastered(mastered), true);
  for (const lessonId of lessonIds) assert.equal(getCameraLessonMasteryStage(mastered, lessonId), "mastered");
});

test("final camera assignment links to valid Director brief fields", () => {
  const validFieldIds = new Set(DIRECTOR_BRIEF_FIELDS.map((field) => field.id));
  assert.equal(CAMERA_DIRECTOR_ASSIGNMENT_FIELDS.length, 5);
  assert.equal(new Set(CAMERA_DIRECTOR_ASSIGNMENT_FIELDS).size, 5);
  for (const fieldId of CAMERA_DIRECTOR_ASSIGNMENT_FIELDS) assert.equal(validFieldIds.has(fieldId), true);

  const assignment = createCameraDirectorAssignment({
    id: "scenario_hunger_2008",
    title: "Hunger",
    year: 2008,
    slug: "hunger-2008",
  }, fixedNow);
  assert.equal(assignment.courseId, "director_camera_optics");
  assert.equal(assignment.filmSlug, "hunger-2008");
  assert.deepEqual(assignment.fieldIds, CAMERA_DIRECTOR_ASSIGNMENT_FIELDS);
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
