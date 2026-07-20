import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefFieldId } from "./directorBrief.js";
import { DIRECTOR_SHOT_FIELDS, type DirectorProject } from "./directorProject.js";
import {
  FILM_SCHOOL_GROUND_COURSE_ID,
  type FilmSchoolCapstoneAssignment,
} from "./filmSchoolGroundCourse.js";

export const FILM_SCHOOL_CAPSTONE_SUBMISSION_STORAGE_KEY = "hg_film_school_ground_course_capstone_submission_v1";
export const FILM_SCHOOL_CAPSTONE_MINIMUM_COMPLETE_SHOTS = 3;

export type FilmSchoolCapstoneValidation = {
  readonly assignmentMatchesProject: boolean;
  readonly sceneId: string | undefined;
  readonly sceneTitle: string;
  readonly completedBriefFields: number;
  readonly totalBriefFields: number;
  readonly missingBriefFieldIds: readonly DirectorBriefFieldId[];
  readonly shotCount: number;
  readonly completeShotCount: number;
  readonly minimumCompleteShots: number;
  readonly incompleteShotIds: readonly string[];
  readonly canSubmit: boolean;
};

export type FilmSchoolCapstoneSubmission = {
  readonly version: 1;
  readonly courseId: typeof FILM_SCHOOL_GROUND_COURSE_ID;
  readonly assignmentCreatedAt: string;
  readonly filmId: string;
  readonly filmTitle: string;
  readonly filmYear: number;
  readonly filmSlug: string;
  readonly sceneId: string;
  readonly sceneTitle: string;
  readonly briefFieldCount: number;
  readonly completeShotCount: number;
  readonly totalShotCount: number;
  readonly projectUpdatedAt: string;
  readonly submittedAt: string;
};

export function validateFilmSchoolCapstoneProject(
  project: DirectorProject | undefined,
  assignment: FilmSchoolCapstoneAssignment | undefined,
): FilmSchoolCapstoneValidation {
  const assignmentMatchesProject = Boolean(
    project
    && assignment
    && project.filmId === assignment.filmId
    && project.filmTitle === assignment.filmTitle
    && project.filmYear === assignment.filmYear,
  );
  const scene = project?.scenes.find((candidate) => candidate.id === project.activeSceneId) ?? project?.scenes[0];
  const missingBriefFieldIds = scene
    ? DIRECTOR_BRIEF_FIELDS.filter((field) => scene.brief[field.id].trim().length === 0).map((field) => field.id)
    : DIRECTOR_BRIEF_FIELDS.map((field) => field.id);
  const completeShots = scene?.shots.filter((shot) => DIRECTOR_SHOT_FIELDS.every((field) => shot[field].trim().length > 0)) ?? [];
  const incompleteShotIds = scene?.shots.filter((shot) => !DIRECTOR_SHOT_FIELDS.every((field) => shot[field].trim().length > 0)).map((shot) => shot.id) ?? [];
  const completedBriefFields = DIRECTOR_BRIEF_FIELDS.length - missingBriefFieldIds.length;
  const shotCount = scene?.shots.length ?? 0;
  const completeShotCount = completeShots.length;

  return {
    assignmentMatchesProject,
    sceneId: scene?.id,
    sceneTitle: scene?.brief.sceneTitle.trim() || "Untitled scene",
    completedBriefFields,
    totalBriefFields: DIRECTOR_BRIEF_FIELDS.length,
    missingBriefFieldIds,
    shotCount,
    completeShotCount,
    minimumCompleteShots: FILM_SCHOOL_CAPSTONE_MINIMUM_COMPLETE_SHOTS,
    incompleteShotIds,
    canSubmit: assignmentMatchesProject
      && Boolean(scene)
      && missingBriefFieldIds.length === 0
      && completeShotCount >= FILM_SCHOOL_CAPSTONE_MINIMUM_COMPLETE_SHOTS,
  };
}

export function createFilmSchoolCapstoneSubmission(
  project: DirectorProject,
  assignment: FilmSchoolCapstoneAssignment,
  now = new Date().toISOString(),
): FilmSchoolCapstoneSubmission | undefined {
  const validation = validateFilmSchoolCapstoneProject(project, assignment);
  if (!validation.canSubmit || !validation.sceneId) return undefined;

  return {
    version: 1,
    courseId: FILM_SCHOOL_GROUND_COURSE_ID,
    assignmentCreatedAt: assignment.createdAt,
    filmId: assignment.filmId,
    filmTitle: assignment.filmTitle,
    filmYear: assignment.filmYear,
    filmSlug: assignment.filmSlug,
    sceneId: validation.sceneId,
    sceneTitle: validation.sceneTitle,
    briefFieldCount: validation.completedBriefFields,
    completeShotCount: validation.completeShotCount,
    totalShotCount: validation.shotCount,
    projectUpdatedAt: project.updatedAt,
    submittedAt: now,
  };
}

export function coerceFilmSchoolCapstoneSubmission(value: unknown): FilmSchoolCapstoneSubmission | undefined {
  if (!isRecord(value)) return undefined;
  if (value.version !== 1 || value.courseId !== FILM_SCHOOL_GROUND_COURSE_ID) return undefined;
  const assignmentCreatedAt = stringValue(value.assignmentCreatedAt);
  const filmId = stringValue(value.filmId);
  const filmTitle = stringValue(value.filmTitle);
  const filmYear = numberValue(value.filmYear);
  const filmSlug = stringValue(value.filmSlug);
  const sceneId = stringValue(value.sceneId);
  const sceneTitle = stringValue(value.sceneTitle);
  const briefFieldCount = numberValue(value.briefFieldCount);
  const completeShotCount = numberValue(value.completeShotCount);
  const totalShotCount = numberValue(value.totalShotCount);
  const projectUpdatedAt = stringValue(value.projectUpdatedAt);
  const submittedAt = stringValue(value.submittedAt);

  if (!assignmentCreatedAt || !filmId || !filmTitle || filmYear === undefined || !filmSlug || !sceneId || !sceneTitle || !projectUpdatedAt || !submittedAt) return undefined;
  if (briefFieldCount !== DIRECTOR_BRIEF_FIELDS.length) return undefined;
  if (completeShotCount === undefined || completeShotCount < FILM_SCHOOL_CAPSTONE_MINIMUM_COMPLETE_SHOTS) return undefined;
  if (totalShotCount === undefined || totalShotCount < completeShotCount) return undefined;

  return {
    version: 1,
    courseId: FILM_SCHOOL_GROUND_COURSE_ID,
    assignmentCreatedAt,
    filmId,
    filmTitle,
    filmYear,
    filmSlug,
    sceneId,
    sceneTitle,
    briefFieldCount,
    completeShotCount,
    totalShotCount,
    projectUpdatedAt,
    submittedAt,
  };
}

export function isFilmSchoolCapstoneSubmissionForAssignment(
  submission: FilmSchoolCapstoneSubmission | undefined,
  assignment: FilmSchoolCapstoneAssignment | undefined,
): boolean {
  return Boolean(
    submission
    && assignment
    && submission.courseId === assignment.courseId
    && submission.assignmentCreatedAt === assignment.createdAt
    && submission.filmId === assignment.filmId
    && submission.filmSlug === assignment.filmSlug,
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stringValue(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function numberValue(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}
