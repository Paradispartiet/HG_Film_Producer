import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_BRIEF_FIELDS } from "./directorBrief.js";
import {
  FILM_SCHOOL_CAPSTONE_FIELDS,
  FILM_SCHOOL_GROUND_COURSES,
  createFilmSchoolCapstoneAssignment,
  summarizeFilmSchoolCourse,
  summarizeFilmSchoolGroundCourse,
} from "./filmSchoolGroundCourse.js";

const fixedNow = "2026-07-20T17:00:00.000Z";

test("ground course contains five chapters and twenty-five lessons", () => {
  assert.equal(FILM_SCHOOL_GROUND_COURSES.length, 5);
  assert.equal(new Set(FILM_SCHOOL_GROUND_COURSES.map((course) => course.id)).size, 5);
  assert.deepEqual(FILM_SCHOOL_GROUND_COURSES.map((course) => course.number), ["01", "02", "03", "04", "05"]);
  assert.equal(FILM_SCHOOL_GROUND_COURSES.reduce((sum, course) => sum + course.lessonIds.length, 0), 25);
  for (const course of FILM_SCHOOL_GROUND_COURSES) {
    assert.equal(course.lessonIds.length, 5);
    assert.equal(new Set(course.lessonIds).size, 5);
    assert.ok(course.progressStorageKey.startsWith("hg_film_school_"));
  }
});

test("course summary counts only known unique milestones", () => {
  const course = FILM_SCHOOL_GROUND_COURSES[0];
  assert.ok(course);
  const first = course.lessonIds[0];
  const second = course.lessonIds[1];
  assert.ok(first && second);
  const summary = summarizeFilmSchoolCourse(course, {
    seenLessonIds: [first, first, second, "missing"],
    understoodLessonIds: [first, "missing"],
    usedLessonIds: [first],
  });
  assert.equal(summary.completedMilestones, 4);
  assert.equal(summary.totalMilestones, 15);
  assert.equal(summary.masteredLessons, 1);
  assert.equal(summary.completionPercent, 27);
  assert.equal(summary.mastered, false);
});

test("ground course unlocks only when all seventy-five milestones are complete", () => {
  const blank = summarizeFilmSchoolGroundCourse({});
  assert.equal(blank.completedMilestones, 0);
  assert.equal(blank.totalMilestones, 75);
  assert.equal(blank.masteredCourses, 0);
  assert.equal(blank.completionPercent, 0);
  assert.equal(blank.mastered, false);

  const completeProgress = Object.fromEntries(FILM_SCHOOL_GROUND_COURSES.map((course) => [course.id, {
    seenLessonIds: course.lessonIds,
    understoodLessonIds: course.lessonIds,
    usedLessonIds: course.lessonIds,
  }]));
  const complete = summarizeFilmSchoolGroundCourse(completeProgress);
  assert.equal(complete.completedMilestones, 75);
  assert.equal(complete.masteredCourses, 5);
  assert.equal(complete.completionPercent, 100);
  assert.equal(complete.mastered, true);
});

test("capstone assignment uses every Director brief field exactly once", () => {
  assert.equal(FILM_SCHOOL_CAPSTONE_FIELDS.length, DIRECTOR_BRIEF_FIELDS.length);
  assert.equal(new Set(FILM_SCHOOL_CAPSTONE_FIELDS).size, DIRECTOR_BRIEF_FIELDS.length);
  assert.deepEqual(FILM_SCHOOL_CAPSTONE_FIELDS, DIRECTOR_BRIEF_FIELDS.map((field) => field.id));

  const assignment = createFilmSchoolCapstoneAssignment({
    id: "scenario_test_1966",
    title: "Test Film",
    year: 1966,
    slug: "test-film-1966",
  }, fixedNow);
  assert.equal(assignment.courseId, "director_ground_course_capstone");
  assert.equal(assignment.filmSlug, "test-film-1966");
  assert.deepEqual(assignment.fieldIds, FILM_SCHOOL_CAPSTONE_FIELDS);
  assert.equal(assignment.createdAt, fixedNow);
});
