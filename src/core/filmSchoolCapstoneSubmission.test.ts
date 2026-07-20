import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefDraft } from "./directorBrief.js";
import {
  DIRECTOR_SHOT_FIELDS,
  addDirectorShot,
  createBlankDirectorProject,
  updateDirectorSceneBrief,
  updateDirectorShot,
  type DirectorProject,
} from "./directorProject.js";
import {
  FILM_SCHOOL_CAPSTONE_MINIMUM_COMPLETE_SHOTS,
  coerceFilmSchoolCapstoneSubmission,
  createFilmSchoolCapstoneSubmission,
  isFilmSchoolCapstoneSubmissionForAssignment,
  validateFilmSchoolCapstoneProject,
} from "./filmSchoolCapstoneSubmission.js";
import { createFilmSchoolCapstoneAssignment } from "./filmSchoolGroundCourse.js";

const fixedNow = "2026-07-20T18:00:00.000Z";
const identity = { filmId: "scenario_test_1966", filmTitle: "Test Film", filmYear: 1966 } as const;
const assignment = createFilmSchoolCapstoneAssignment({ ...identity, id: identity.filmId, title: identity.filmTitle, year: identity.filmYear, slug: "test-film-1966" }, fixedNow);

test("capstone validation requires the matching film, all sixteen brief fields, and three complete shots", () => {
  const blank = createBlankDirectorProject(identity, "scene_1", fixedNow);
  const blankValidation = validateFilmSchoolCapstoneProject(blank, assignment);
  assert.equal(blankValidation.assignmentMatchesProject, true);
  assert.equal(blankValidation.completedBriefFields, 1);
  assert.equal(blankValidation.totalBriefFields, 16);
  assert.equal(blankValidation.completeShotCount, 0);
  assert.equal(blankValidation.canSubmit, false);

  const complete = createCompleteProject();
  const completeValidation = validateFilmSchoolCapstoneProject(complete, assignment);
  assert.equal(completeValidation.completedBriefFields, 16);
  assert.equal(completeValidation.missingBriefFieldIds.length, 0);
  assert.equal(completeValidation.completeShotCount, FILM_SCHOOL_CAPSTONE_MINIMUM_COMPLETE_SHOTS);
  assert.equal(completeValidation.incompleteShotIds.length, 0);
  assert.equal(completeValidation.canSubmit, true);
});

test("capstone validation does not count incomplete shot cards as completed coverage", () => {
  let project = createCompleteProject();
  project = addDirectorShot(project, project.activeSceneId, "shot_incomplete", fixedNow);
  const validation = validateFilmSchoolCapstoneProject(project, assignment);
  assert.equal(validation.shotCount, 4);
  assert.equal(validation.completeShotCount, 3);
  assert.deepEqual(validation.incompleteShotIds, ["shot_incomplete"]);
  assert.equal(validation.canSubmit, true);
});

test("capstone submission stores the delivered scene and project version", () => {
  const project = createCompleteProject();
  const submission = createFilmSchoolCapstoneSubmission(project, assignment, "2026-07-20T18:30:00.000Z");
  assert.ok(submission);
  assert.equal(submission.courseId, "director_ground_course_capstone");
  assert.equal(submission.assignmentCreatedAt, fixedNow);
  assert.equal(submission.filmSlug, "test-film-1966");
  assert.equal(submission.sceneId, project.activeSceneId);
  assert.equal(submission.briefFieldCount, 16);
  assert.equal(submission.completeShotCount, 3);
  assert.equal(submission.projectUpdatedAt, project.updatedAt);
  assert.equal(submission.submittedAt, "2026-07-20T18:30:00.000Z");
  assert.equal(isFilmSchoolCapstoneSubmissionForAssignment(submission, assignment), true);
});

test("submission coercion rejects partial or fabricated completion records", () => {
  const project = createCompleteProject();
  const submission = createFilmSchoolCapstoneSubmission(project, assignment, fixedNow);
  assert.ok(submission);
  assert.deepEqual(coerceFilmSchoolCapstoneSubmission(submission), submission);
  assert.equal(coerceFilmSchoolCapstoneSubmission({ ...submission, briefFieldCount: 15 }), undefined);
  assert.equal(coerceFilmSchoolCapstoneSubmission({ ...submission, completeShotCount: 2 }), undefined);
  assert.equal(coerceFilmSchoolCapstoneSubmission({ ...submission, totalShotCount: 1 }), undefined);
  assert.equal(coerceFilmSchoolCapstoneSubmission({ ...submission, courseId: "other" }), undefined);
});

function createCompleteProject(): DirectorProject {
  let project = createBlankDirectorProject(identity, "scene_1", fixedNow);
  const scene = project.scenes[0];
  assert.ok(scene);
  const brief: DirectorBriefDraft = { ...scene.brief };
  for (const field of DIRECTOR_BRIEF_FIELDS) brief[field.id] = `${field.label} decision`;
  project = updateDirectorSceneBrief(project, scene.id, brief, fixedNow);

  for (let index = 0; index < FILM_SCHOOL_CAPSTONE_MINIMUM_COMPLETE_SHOTS; index += 1) {
    const shotId = `shot_${index + 1}`;
    project = addDirectorShot(project, scene.id, shotId, fixedNow);
    for (const field of DIRECTOR_SHOT_FIELDS) {
      project = updateDirectorShot(project, scene.id, shotId, field, `${field} ${index + 1}`, fixedNow);
    }
  }
  return project;
}
