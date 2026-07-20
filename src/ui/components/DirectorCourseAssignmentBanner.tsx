import { useEffect, useState } from "react";

import {
  SCREENPLAY_DIRECTOR_ASSIGNMENT_STORAGE_KEY,
  getScreenplayDirectorAssignmentFieldLabels,
  type ScreenplayDirectorAssignment,
} from "../../core/filmSchoolScreenplayCourse";

type DirectorCourseAssignmentBannerProps = {
  readonly filmSlug: string | undefined;
  readonly visible: boolean;
};

export function DirectorCourseAssignmentBanner({ filmSlug, visible }: DirectorCourseAssignmentBannerProps) {
  const [assignment, setAssignment] = useState<ScreenplayDirectorAssignment | undefined>(() => loadAssignment());

  useEffect(() => {
    if (visible) setAssignment(loadAssignment());
  }, [filmSlug, visible]);

  if (!visible || !assignment || assignment.filmSlug !== filmSlug) return null;

  function dismiss() {
    try {
      window.localStorage.removeItem(SCREENPLAY_DIRECTOR_ASSIGNMENT_STORAGE_KEY);
    } catch {
      // Banner can still be dismissed for the current session.
    }
    setAssignment(undefined);
  }

  return (
    <aside className="director-course-assignment" aria-label="Film School director assignment">
      <header>
        <div><span>Film School-oppgave</span><strong>{assignment.title}</strong><small>{assignment.filmYear} · {assignment.filmTitle}</small></div>
        <button aria-label="Dismiss course assignment" onClick={dismiss} type="button">×</button>
      </header>
      <p>{assignment.prompt}</p>
      <div>{getScreenplayDirectorAssignmentFieldLabels().map((label, index) => <span key={label}><b>{String(index + 1).padStart(2, "0")}</b>{label}</span>)}</div>
      <button onClick={() => document.getElementById("director-active-scene")?.scrollIntoView({ behavior: "smooth", block: "start" })} type="button">Gå til scenebrieffet →</button>
    </aside>
  );
}

function loadAssignment(): ScreenplayDirectorAssignment | undefined {
  try {
    const value = JSON.parse(window.localStorage.getItem(SCREENPLAY_DIRECTOR_ASSIGNMENT_STORAGE_KEY) ?? "null") as unknown;
    if (!isRecord(value)) return undefined;
    if (value.version !== 1 || value.courseId !== "director_screenplay_scene_analysis") return undefined;
    if (typeof value.filmId !== "string" || typeof value.filmTitle !== "string" || typeof value.filmYear !== "number" || typeof value.filmSlug !== "string") return undefined;
    if (typeof value.title !== "string" || typeof value.prompt !== "string" || typeof value.createdAt !== "string" || !Array.isArray(value.fieldIds)) return undefined;
    return value as unknown as ScreenplayDirectorAssignment;
  } catch {
    return undefined;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
