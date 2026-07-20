import { useEffect, useState } from "react";

import { DIRECTOR_BRIEF_FIELDS } from "../../core/directorBrief";
import {
  CAMERA_COURSE_ID,
  CAMERA_DIRECTOR_ASSIGNMENT_STORAGE_KEY,
  type CameraDirectorAssignment,
} from "../../core/filmSchoolCameraCourse";
import {
  EDITING_SOUND_COURSE_ID,
  EDITING_SOUND_DIRECTOR_ASSIGNMENT_STORAGE_KEY,
  type EditingSoundDirectorAssignment,
} from "../../core/filmSchoolEditingSoundCourse";
import {
  FILM_SCHOOL_CAPSTONE_ASSIGNMENT_STORAGE_KEY,
  FILM_SCHOOL_GROUND_COURSE_ID,
  type FilmSchoolCapstoneAssignment,
} from "../../core/filmSchoolGroundCourse";
import {
  LIGHTING_DESIGN_COURSE_ID,
  LIGHTING_DESIGN_DIRECTOR_ASSIGNMENT_STORAGE_KEY,
  type LightingDesignDirectorAssignment,
} from "../../core/filmSchoolLightingDesignCourse";
import {
  PERFORMANCE_COURSE_ID,
  PERFORMANCE_DIRECTOR_ASSIGNMENT_STORAGE_KEY,
  type PerformanceDirectorAssignment,
} from "../../core/filmSchoolPerformanceCourse";
import {
  SCREENPLAY_COURSE_ID,
  SCREENPLAY_DIRECTOR_ASSIGNMENT_STORAGE_KEY,
  type ScreenplayDirectorAssignment,
} from "../../core/filmSchoolScreenplayCourse";

type CourseAssignment = ScreenplayDirectorAssignment | PerformanceDirectorAssignment | CameraDirectorAssignment | LightingDesignDirectorAssignment | EditingSoundDirectorAssignment | FilmSchoolCapstoneAssignment;
type LoadedCourseAssignment = CourseAssignment & { readonly storageKey: string };

type DirectorCourseAssignmentBannerProps = {
  readonly filmSlug: string | undefined;
  readonly visible: boolean;
};

const assignmentSources = [
  { storageKey: SCREENPLAY_DIRECTOR_ASSIGNMENT_STORAGE_KEY, courseId: SCREENPLAY_COURSE_ID },
  { storageKey: PERFORMANCE_DIRECTOR_ASSIGNMENT_STORAGE_KEY, courseId: PERFORMANCE_COURSE_ID },
  { storageKey: CAMERA_DIRECTOR_ASSIGNMENT_STORAGE_KEY, courseId: CAMERA_COURSE_ID },
  { storageKey: LIGHTING_DESIGN_DIRECTOR_ASSIGNMENT_STORAGE_KEY, courseId: LIGHTING_DESIGN_COURSE_ID },
  { storageKey: EDITING_SOUND_DIRECTOR_ASSIGNMENT_STORAGE_KEY, courseId: EDITING_SOUND_COURSE_ID },
  { storageKey: FILM_SCHOOL_CAPSTONE_ASSIGNMENT_STORAGE_KEY, courseId: FILM_SCHOOL_GROUND_COURSE_ID },
] as const;

export function DirectorCourseAssignmentBanner({ filmSlug, visible }: DirectorCourseAssignmentBannerProps) {
  const [assignment, setAssignment] = useState<LoadedCourseAssignment | undefined>(() => loadAssignment(filmSlug));

  useEffect(() => {
    if (visible) setAssignment(loadAssignment(filmSlug));
  }, [filmSlug, visible]);

  if (!visible || !assignment || assignment.filmSlug !== filmSlug) return null;
  const activeAssignment = assignment;

  function dismiss() {
    try {
      window.localStorage.removeItem(activeAssignment.storageKey);
    } catch {
      // Banner can still be dismissed for the current session.
    }
    setAssignment(undefined);
  }

  const fieldLabels = activeAssignment.fieldIds.map((fieldId) => (
    DIRECTOR_BRIEF_FIELDS.find((field) => field.id === fieldId)?.label ?? fieldId
  ));

  return (
    <aside className="director-course-assignment" aria-label="Film School director assignment">
      <header>
        <div><span>Film School-oppgave</span><strong>{activeAssignment.title}</strong><small>{activeAssignment.filmYear} · {activeAssignment.filmTitle}</small></div>
        <button aria-label="Dismiss course assignment" onClick={dismiss} type="button">×</button>
      </header>
      <p>{activeAssignment.prompt}</p>
      <div>{fieldLabels.map((label, index) => <span key={`${index}:${label}`}><b>{String(index + 1).padStart(2, "0")}</b>{label}</span>)}</div>
      <button onClick={() => document.getElementById("director-active-scene")?.scrollIntoView({ behavior: "smooth", block: "start" })} type="button">Gå til scenebrieffet →</button>
    </aside>
  );
}

function loadAssignment(filmSlug: string | undefined): LoadedCourseAssignment | undefined {
  const assignments: LoadedCourseAssignment[] = [];
  for (const source of assignmentSources) {
    try {
      const value = JSON.parse(window.localStorage.getItem(source.storageKey) ?? "null") as unknown;
      if (!isAssignment(value, source.courseId)) continue;
      if (filmSlug && value.filmSlug !== filmSlug) continue;
      assignments.push({ ...value, storageKey: source.storageKey } as LoadedCourseAssignment);
    } catch {
      // Ignore invalid or unavailable storage entries.
    }
  }
  return assignments.sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
}

function isAssignment(value: unknown, courseId: string): value is CourseAssignment {
  if (!isRecord(value)) return false;
  if (value.version !== 1 || value.courseId !== courseId) return false;
  if (typeof value.filmId !== "string" || typeof value.filmTitle !== "string" || typeof value.filmYear !== "number" || typeof value.filmSlug !== "string") return false;
  if (typeof value.title !== "string" || typeof value.prompt !== "string" || typeof value.createdAt !== "string" || !Array.isArray(value.fieldIds)) return false;
  return value.fieldIds.every((fieldId) => typeof fieldId === "string");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
