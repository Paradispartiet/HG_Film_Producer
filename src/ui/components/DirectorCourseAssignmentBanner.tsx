import { useEffect, useState } from "react";

import { DIRECTOR_BRIEF_FIELDS } from "../../core/directorBrief";
import { coerceDirectorProject, getDirectorProjectStorageKey, type DirectorProject } from "../../core/directorProject";
import {
  CAMERA_COURSE_ID,
  CAMERA_DIRECTOR_ASSIGNMENT_STORAGE_KEY,
  type CameraDirectorAssignment,
} from "../../core/filmSchoolCameraCourse";
import {
  FILM_SCHOOL_CAPSTONE_SUBMISSION_STORAGE_KEY,
  coerceFilmSchoolCapstoneSubmission,
  createFilmSchoolCapstoneSubmission,
  isFilmSchoolCapstoneSubmissionForAssignment,
  validateFilmSchoolCapstoneProject,
  type FilmSchoolCapstoneSubmission,
} from "../../core/filmSchoolCapstoneSubmission";
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

type CapstoneSnapshot = {
  readonly project: DirectorProject | undefined;
  readonly submission: FilmSchoolCapstoneSubmission | undefined;
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
  const [, setRevision] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;
    const refresh = () => {
      setAssignment(loadAssignment(filmSlug));
      setRevision((current) => current + 1);
    };
    refresh();
    const intervalId = window.setInterval(refresh, 800);
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", refresh);
    };
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

  if (activeAssignment.courseId === FILM_SCHOOL_GROUND_COURSE_ID) {
    const snapshot = loadCapstoneSnapshot(activeAssignment);
    const validation = validateFilmSchoolCapstoneProject(snapshot.project, activeAssignment);
    const submitted = isFilmSchoolCapstoneSubmissionForAssignment(snapshot.submission, activeAssignment);
    const projectChangedAfterSubmission = Boolean(submitted && snapshot.project && snapshot.submission && snapshot.project.updatedAt !== snapshot.submission.projectUpdatedAt);

    function submitCapstone() {
      if (!snapshot.project) return;
      const submission = createFilmSchoolCapstoneSubmission(snapshot.project, activeAssignment);
      if (!submission) return;
      try {
        window.localStorage.setItem(FILM_SCHOOL_CAPSTONE_SUBMISSION_STORAGE_KEY, JSON.stringify(submission));
      } catch {
        return;
      }
      setRevision((current) => current + 1);
    }

    const submissionLabel = submitted && !projectChangedAfterSubmission
      ? "Regieksamen levert"
      : submitted
        ? "Lever oppdatert versjon"
        : "Lever regieksamen";

    return (
      <aside className={submitted && !projectChangedAfterSubmission ? "director-course-assignment director-course-assignment--capstone is-submitted" : "director-course-assignment director-course-assignment--capstone"} aria-label="Film School final directing exam">
        <header>
          <div><span>Film School · Regieksamen</span><strong>{activeAssignment.title}</strong><small>{activeAssignment.filmYear} · {activeAssignment.filmTitle}</small></div>
          <button aria-label="Dismiss course assignment" onClick={dismiss} type="button">×</button>
        </header>
        <p>{submitted && !projectChangedAfterSubmission ? `Levert ${formatDateTime(snapshot.submission?.submittedAt)} · ${snapshot.submission?.sceneTitle}` : activeAssignment.prompt}</p>
        <section className="director-capstone-requirements" aria-live="polite">
          <div className={validation.completedBriefFields === validation.totalBriefFields ? "is-complete" : ""}><strong>{validation.completedBriefFields}/{validation.totalBriefFields}</strong><span>regifelt i aktiv scene</span></div>
          <div className={validation.completeShotCount >= validation.minimumCompleteShots ? "is-complete" : ""}><strong>{validation.completeShotCount}/{validation.minimumCompleteShots}</strong><span>komplette shot cards</span></div>
          <div className={validation.assignmentMatchesProject ? "is-complete" : ""}><strong>{validation.assignmentMatchesProject ? "Ja" : "Nei"}</strong><span>riktig referansefilm</span></div>
        </section>
        {!submitted || projectChangedAfterSubmission ? (
          <p className="director-capstone-guidance">{validation.canSubmit ? "Aktiv scene oppfyller kravene og kan leveres." : buildValidationGuidance(validation)}</p>
        ) : null}
        {projectChangedAfterSubmission ? <p className="director-capstone-warning">Prosjektet er endret etter innleveringen. Lever på nytt for å registrere siste versjon.</p> : null}
        <section className="director-capstone-actions">
          <button onClick={() => document.getElementById("director-active-scene")?.scrollIntoView({ behavior: "smooth", block: "start" })} type="button">Gå til scenebrieffet</button>
          <button onClick={() => document.getElementById("director-shot-list")?.scrollIntoView({ behavior: "smooth", block: "start" })} type="button">Gå til bildeplanen</button>
          <button className="is-primary" disabled={!validation.canSubmit || (submitted && !projectChangedAfterSubmission)} onClick={submitCapstone} type="button">{submissionLabel}</button>
        </section>
      </aside>
    );
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

function loadCapstoneSnapshot(assignment: FilmSchoolCapstoneAssignment): CapstoneSnapshot {
  let project: DirectorProject | undefined;
  let submission: FilmSchoolCapstoneSubmission | undefined;
  try {
    const rawProject = window.localStorage.getItem(getDirectorProjectStorageKey(assignment.filmId));
    if (rawProject) {
      project = coerceDirectorProject(JSON.parse(rawProject) as unknown, {
        filmId: assignment.filmId,
        filmTitle: assignment.filmTitle,
        filmYear: assignment.filmYear,
      }, "scene_capstone");
    }
    submission = coerceFilmSchoolCapstoneSubmission(JSON.parse(window.localStorage.getItem(FILM_SCHOOL_CAPSTONE_SUBMISSION_STORAGE_KEY) ?? "null") as unknown);
  } catch {
    // Missing or corrupt local data leaves the exam open but not submittable.
  }
  return { project, submission };
}

function buildValidationGuidance(validation: ReturnType<typeof validateFilmSchoolCapstoneProject>): string {
  const messages: string[] = [];
  if (!validation.assignmentMatchesProject) messages.push("Åpne filmen som ble valgt i Film School");
  if (validation.missingBriefFieldIds.length > 0) messages.push(`fyll ${validation.missingBriefFieldIds.length} åpne regifelt`);
  if (validation.completeShotCount < validation.minimumCompleteShots) messages.push(`fullfør ${validation.minimumCompleteShots - validation.completeShotCount} flere shot cards`);
  return messages.length > 0 ? `${capitalize(messages.join(", og "))}.` : "Aktiv scene kan ikke leveres ennå.";
}

function formatDateTime(value: string | undefined): string {
  if (!value) return "ukjent tidspunkt";
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(timestamp)) : value;
}

function capitalize(value: string): string {
  return value ? `${value[0]?.toLocaleUpperCase() ?? ""}${value.slice(1)}` : value;
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
