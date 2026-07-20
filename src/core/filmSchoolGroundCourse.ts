import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefFieldId } from "./directorBrief.js";
import { CAMERA_COURSE_LESSONS, CAMERA_COURSE_PROGRESS_STORAGE_KEY } from "./filmSchoolCameraCourse.js";
import { EDITING_SOUND_COURSE_LESSONS, EDITING_SOUND_COURSE_PROGRESS_STORAGE_KEY } from "./filmSchoolEditingSoundCourse.js";
import { LIGHTING_DESIGN_COURSE_LESSONS, LIGHTING_DESIGN_COURSE_PROGRESS_STORAGE_KEY } from "./filmSchoolLightingDesignCourse.js";
import { PERFORMANCE_COURSE_LESSONS, PERFORMANCE_COURSE_PROGRESS_STORAGE_KEY } from "./filmSchoolPerformanceCourse.js";
import { SCREENPLAY_COURSE_LESSONS, SCREENPLAY_COURSE_PROGRESS_STORAGE_KEY } from "./filmSchoolScreenplayCourse.js";

export const FILM_SCHOOL_GROUND_COURSE_ID = "director_ground_course_capstone";
export const FILM_SCHOOL_CAPSTONE_ASSIGNMENT_STORAGE_KEY = "hg_film_school_ground_course_capstone_assignment_v1";

export type FilmSchoolGroundCourseId = "screenplay" | "performance" | "camera" | "lightingDesign" | "editingSound";

export type FilmSchoolGroundCourseDescriptor = {
  readonly id: FilmSchoolGroundCourseId;
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly progressStorageKey: string;
  readonly lessonIds: readonly string[];
};

export type FilmSchoolCourseProgressSummary = {
  readonly courseId: FilmSchoolGroundCourseId;
  readonly completedMilestones: number;
  readonly totalMilestones: number;
  readonly masteredLessons: number;
  readonly totalLessons: number;
  readonly completionPercent: number;
  readonly mastered: boolean;
};

export type FilmSchoolGroundCourseSummary = {
  readonly courses: readonly FilmSchoolCourseProgressSummary[];
  readonly completedMilestones: number;
  readonly totalMilestones: number;
  readonly masteredCourses: number;
  readonly completionPercent: number;
  readonly mastered: boolean;
};

export type FilmSchoolCapstoneAssignment = {
  readonly version: 1;
  readonly courseId: typeof FILM_SCHOOL_GROUND_COURSE_ID;
  readonly filmId: string;
  readonly filmTitle: string;
  readonly filmYear: number;
  readonly filmSlug: string;
  readonly title: string;
  readonly prompt: string;
  readonly fieldIds: readonly DirectorBriefFieldId[];
  readonly createdAt: string;
};

export const FILM_SCHOOL_GROUND_COURSES: readonly FilmSchoolGroundCourseDescriptor[] = [
  {
    id: "screenplay",
    number: "01",
    title: "Manus og sceneanalyse",
    summary: "Kontekst, mål, konflikt, vendepunkt, undertekst og scenens funksjon.",
    progressStorageKey: SCREENPLAY_COURSE_PROGRESS_STORAGE_KEY,
    lessonIds: SCREENPLAY_COURSE_LESSONS.map((lesson) => lesson.id),
  },
  {
    id: "performance",
    number: "02",
    title: "Skuespillerregi og blocking",
    summary: "Spillbar handling, lytting, bevegelse, blikk, prøve og justering.",
    progressStorageKey: PERFORMANCE_COURSE_PROGRESS_STORAGE_KEY,
    lessonIds: PERFORMANCE_COURSE_LESSONS.map((lesson) => lesson.id),
  },
  {
    id: "camera",
    number: "03",
    title: "Bilde, kamera og optikk",
    summary: "Utsnitt, perspektiv, brennvidde, kamerabevegelse, fokus og shotplan.",
    progressStorageKey: CAMERA_COURSE_PROGRESS_STORAGE_KEY,
    lessonIds: CAMERA_COURSE_LESSONS.map((lesson) => lesson.id),
  },
  {
    id: "lightingDesign",
    number: "04",
    title: "Lys, farge og produksjonsdesign",
    summary: "Lyskilder, kontrast, palett, materialer, rom og visuell kontinuitet.",
    progressStorageKey: LIGHTING_DESIGN_COURSE_PROGRESS_STORAGE_KEY,
    lessonIds: LIGHTING_DESIGN_COURSE_LESSONS.map((lesson) => lesson.id),
  },
  {
    id: "editingSound",
    number: "05",
    title: "Klipp, lyd og ferdigstilling",
    summary: "Rytme, filmisk tid, lydperspektiv, miks, grading og levering.",
    progressStorageKey: EDITING_SOUND_COURSE_PROGRESS_STORAGE_KEY,
    lessonIds: EDITING_SOUND_COURSE_LESSONS.map((lesson) => lesson.id),
  },
];

export const FILM_SCHOOL_CAPSTONE_FIELDS: readonly DirectorBriefFieldId[] = DIRECTOR_BRIEF_FIELDS.map((field) => field.id);

export function summarizeFilmSchoolCourse(
  descriptor: FilmSchoolGroundCourseDescriptor,
  value: unknown,
): FilmSchoolCourseProgressSummary {
  const progress = isRecord(value) ? value : {};
  const validIds = new Set(descriptor.lessonIds);
  const seen = validIdSet(progress.seenLessonIds, validIds);
  const understood = validIdSet(progress.understoodLessonIds, validIds);
  const used = validIdSet(progress.usedLessonIds, validIds);
  const masteredLessons = descriptor.lessonIds.filter((lessonId) => seen.has(lessonId) && understood.has(lessonId) && used.has(lessonId)).length;
  const completedMilestones = seen.size + understood.size + used.size;
  const totalMilestones = descriptor.lessonIds.length * 3;

  return {
    courseId: descriptor.id,
    completedMilestones,
    totalMilestones,
    masteredLessons,
    totalLessons: descriptor.lessonIds.length,
    completionPercent: totalMilestones === 0 ? 0 : Math.round((completedMilestones / totalMilestones) * 100),
    mastered: masteredLessons === descriptor.lessonIds.length && descriptor.lessonIds.length > 0,
  };
}

export function summarizeFilmSchoolGroundCourse(
  progressByCourseId: Readonly<Partial<Record<FilmSchoolGroundCourseId, unknown>>>,
): FilmSchoolGroundCourseSummary {
  const courses = FILM_SCHOOL_GROUND_COURSES.map((descriptor) => summarizeFilmSchoolCourse(descriptor, progressByCourseId[descriptor.id]));
  const completedMilestones = courses.reduce((sum, course) => sum + course.completedMilestones, 0);
  const totalMilestones = courses.reduce((sum, course) => sum + course.totalMilestones, 0);
  const masteredCourses = courses.filter((course) => course.mastered).length;

  return {
    courses,
    completedMilestones,
    totalMilestones,
    masteredCourses,
    completionPercent: totalMilestones === 0 ? 0 : Math.round((completedMilestones / totalMilestones) * 100),
    mastered: masteredCourses === FILM_SCHOOL_GROUND_COURSES.length,
  };
}

export function createFilmSchoolCapstoneAssignment(
  film: { readonly id: string; readonly title: string; readonly year: number; readonly slug: string },
  now = new Date().toISOString(),
): FilmSchoolCapstoneAssignment {
  return {
    version: 1,
    courseId: FILM_SCHOOL_GROUND_COURSE_ID,
    filmId: film.id,
    filmTitle: film.title,
    filmYear: film.year,
    filmSlug: film.slug,
    title: "Avsluttende regieksamen",
    prompt: "Utvikle én komplett scene fra dramatisk analyse til ferdig leveringsplan. Alle 16 feltene må henge sammen som ett regisystem: manus, skuespiller, blocking, design, kamera, lys, klipp, lyd, praktisk gjennomføring og observerbart bevis på intensjonen.",
    fieldIds: FILM_SCHOOL_CAPSTONE_FIELDS,
    createdAt: now,
  };
}

function validIdSet(value: unknown, validIds: ReadonlySet<string>): ReadonlySet<string> {
  if (!Array.isArray(value)) return new Set<string>();
  return new Set(value.filter((lessonId): lessonId is string => typeof lessonId === "string" && validIds.has(lessonId)));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
