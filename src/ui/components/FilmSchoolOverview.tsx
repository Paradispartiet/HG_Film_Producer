import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import { DIRECTOR_BRIEF_FIELDS } from "../../core/directorBrief";
import {
  FILM_SCHOOL_CAPSTONE_SUBMISSION_STORAGE_KEY,
  coerceFilmSchoolCapstoneSubmission,
  type FilmSchoolCapstoneSubmission,
} from "../../core/filmSchoolCapstoneSubmission";
import {
  FILM_SCHOOL_CAPSTONE_ASSIGNMENT_STORAGE_KEY,
  FILM_SCHOOL_GROUND_COURSES,
  createFilmSchoolCapstoneAssignment,
  summarizeFilmSchoolGroundCourse,
  type FilmSchoolGroundCourseId,
  type FilmSchoolGroundCourseSummary,
} from "../../core/filmSchoolGroundCourse";
import { createFilmSlug, type FilmverketRoute, type FilmverketSection } from "../../core/filmverketRoutes";
import type { FilmScenarioSeed } from "../data/filmScenarios";
import { FilmSchoolCourseNavigation, type FilmSchoolCourseId } from "./FilmSchoolCourseNavigation";

const navItems: readonly { readonly id: FilmverketSection; readonly label: string }[] = [
  { id: "home", label: "Front page" },
  { id: "producer", label: "Film Producer" },
  { id: "atlas", label: "Film Atlas" },
  { id: "director", label: "Film Director" },
  { id: "school", label: "Film School" },
  { id: "history", label: "Film History" },
  { id: "research", label: "Research" },
];

type FilmSchoolOverviewProps = {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly onOpenDirector: (scenario: FilmScenarioSeed) => void;
  readonly onSelectCourse: (courseId: FilmSchoolCourseId) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
};

export function FilmSchoolOverview({ navigate, onOpenDirector, onSelectCourse, scenarios }: FilmSchoolOverviewProps) {
  const [summary, setSummary] = useState<FilmSchoolGroundCourseSummary>(() => loadSummary());
  const [submission, setSubmission] = useState<FilmSchoolCapstoneSubmission | undefined>(() => loadSubmission());
  const [assignmentFilmId, setAssignmentFilmId] = useState(() => submission?.filmId ?? scenarios[0]?.id ?? "");
  const summaryByCourseId = useMemo(() => new Map(summary.courses.map((course) => [course.courseId, course])), [summary]);

  useEffect(() => {
    document.title = "Regi grunnkurs · Film School · Filmverket";
  }, []);

  useEffect(() => {
    const refresh = () => {
      const nextSubmission = loadSubmission();
      setSummary(loadSummary());
      setSubmission(nextSubmission);
      if (nextSubmission) setAssignmentFilmId((current) => current || nextSubmission.filmId);
    };
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  function navigateSection(section: FilmverketSection) {
    navigate(routeForSection(section));
  }

  function startCapstone() {
    if (!summary.mastered) return;
    const scenario = scenarios.find((candidate) => candidate.id === assignmentFilmId);
    if (!scenario) return;
    const assignment = createFilmSchoolCapstoneAssignment({
      id: scenario.id,
      title: scenario.film.title,
      year: scenario.film.year,
      slug: createFilmSlug(scenario.film.title, scenario.film.year),
    });
    try {
      window.localStorage.setItem(FILM_SCHOOL_CAPSTONE_ASSIGNMENT_STORAGE_KEY, JSON.stringify(assignment));
    } catch {
      // The Director can still be opened when local storage is unavailable.
    }
    onOpenDirector(scenario);
  }

  function openSubmittedCapstone() {
    if (!submission) return;
    const scenario = scenarios.find((candidate) => candidate.id === submission.filmId);
    if (scenario) onOpenDirector(scenario);
  }

  return (
    <div className="filmverket-shell school-overview-shell">
      <header className="filmverket-header">
        <button className="filmverket-brand" onClick={() => navigate({ section: "home" })} type="button"><span>FV</span><strong>Filmverket</strong></button>
        <nav aria-label="Filmverket sections">{navItems.map((item) => <button className={item.id === "school" ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"} key={item.id} onClick={() => navigateSection(item.id)} type="button">{item.label}</button>)}</nav>
      </header>

      <main className="school-overview-page">
        <FilmSchoolCourseNavigation activeCourseId="overview" onSelectCourse={onSelectCourse} />

        <section className="school-overview-hero">
          <div>
            <span className="filmverket-kicker">Film School · Regi grunnkurs</span>
            <h1>Fra sceneanalyse til <em>ferdig filmisk plan</em></h1>
            <p>Fem kapitler følger den samme scenen gjennom manus, skuespillerarbeid, kamera, lys og design, klipp, lyd og levering. Progresjonen nedenfor kommer direkte fra kursarbeidet ditt.</p>
          </div>
          <aside>
            <span>Samlet progresjon</span>
            <strong>{summary.completionPercent}<small>%</small></strong>
            <div className="school-overview-progress" aria-label={`${summary.completionPercent}% complete`}><span style={{ width: `${summary.completionPercent}%` }} /></div>
            <p>{summary.masteredCourses} av {FILM_SCHOOL_GROUND_COURSES.length} kurs mestret · {summary.completedMilestones} av {summary.totalMilestones} milepæler</p>
            {submission ? <p className="school-overview-completion-line">Regieksamen levert · {formatDate(submission.submittedAt)}</p> : null}
          </aside>
        </section>

        <section className="school-overview-course-grid" aria-label="Regi grunnkurs">
          {FILM_SCHOOL_GROUND_COURSES.map((course) => {
            const courseSummary = summaryByCourseId.get(course.id);
            const complete = courseSummary?.mastered ?? false;
            return (
              <article className={complete ? "is-mastered" : ""} key={course.id}>
                <header><span>{course.number}</span><small>{complete ? "Mestret" : `${courseSummary?.completionPercent ?? 0}%`}</small></header>
                <h2>{course.title}</h2>
                <p>{course.summary}</p>
                <div className="school-overview-course-progress"><span style={{ width: `${courseSummary?.completionPercent ?? 0}%` }} /></div>
                <footer>
                  <span>{courseSummary?.masteredLessons ?? 0} av {courseSummary?.totalLessons ?? 5} leksjoner mestret</span>
                  <button onClick={() => onSelectCourse(course.id as FilmSchoolGroundCourseId)} type="button">{complete ? "Åpne kurset igjen →" : "Fortsett kurset →"}</button>
                </footer>
              </article>
            );
          })}
        </section>

        <section className={submission ? "school-capstone is-unlocked is-completed" : summary.mastered ? "school-capstone is-unlocked" : "school-capstone"}>
          <div>
            <span className="filmverket-kicker">Avsluttende regieksamen</span>
            <h2>Én scene. Ett sammenhengende regisystem.</h2>
            <p>Eksamen bruker hele scenebrieffet i Film Director. Alle beslutninger skal bygge den samme dramatiske utviklingen og kunne vurderes i et tenkt ferdig resultat.</p>
            <div className="school-capstone-fields">{DIRECTOR_BRIEF_FIELDS.map((field, index) => <span key={field.id}><b>{String(index + 1).padStart(2, "0")}</b>{field.label}</span>)}</div>
          </div>
          <aside>
            <strong>{submission ? "Regi-grunnkurs fullført" : summary.mastered ? "Grunnkurset er fullført" : "Eksamen er låst"}</strong>
            {submission ? (
              <section className="school-capstone-completion">
                <span>Levert {formatDateTime(submission.submittedAt)}</span>
                <h3>{submission.sceneTitle}</h3>
                <p>{submission.filmYear} · {submission.filmTitle}</p>
                <small>{submission.briefFieldCount} regifelt · {submission.completeShotCount} komplette shot cards</small>
                <button onClick={openSubmittedCapstone} type="button">Åpne levert regieksamen →</button>
              </section>
            ) : <p>{summary.mastered ? "Velg en film som faglig referanse og åpne den komplette oppgaven i Film Director." : `Mestre ${FILM_SCHOOL_GROUND_COURSES.length - summary.masteredCourses} kurs til. Alle 75 milepæler må være gjennomført.`}</p>}
            <label>
              <span>{submission ? "Ny eller oppdatert eksamen" : "Velg referansefilm"}</span>
              <select disabled={!summary.mastered} onChange={(event: ChangeEvent<HTMLSelectElement>) => setAssignmentFilmId(event.target.value)} value={assignmentFilmId}>
                {scenarios.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.film.year} · {scenario.film.title}</option>)}
              </select>
            </label>
            <button className="filmverket-primary-action" disabled={!summary.mastered || !assignmentFilmId} onClick={startCapstone} type="button">{submission ? "Åpne ny eksamensoppgave →" : "Start regieksamen i Film Director →"}</button>
          </aside>
        </section>
      </main>

      <footer className="filmverket-footer"><span>Filmverket · Film School</span><span>Manus → prestasjon → bilde → look → postproduksjon</span></footer>
    </div>
  );
}

function loadSummary(): FilmSchoolGroundCourseSummary {
  const values: Partial<Record<FilmSchoolGroundCourseId, unknown>> = {};
  for (const course of FILM_SCHOOL_GROUND_COURSES) {
    try {
      values[course.id] = JSON.parse(window.localStorage.getItem(course.progressStorageKey) ?? "null") as unknown;
    } catch {
      values[course.id] = undefined;
    }
  }
  return summarizeFilmSchoolGroundCourse(values);
}

function loadSubmission(): FilmSchoolCapstoneSubmission | undefined {
  try {
    return coerceFilmSchoolCapstoneSubmission(JSON.parse(window.localStorage.getItem(FILM_SCHOOL_CAPSTONE_SUBMISSION_STORAGE_KEY) ?? "null") as unknown);
  } catch {
    return undefined;
  }
}

function formatDate(value: string): string {
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(timestamp)) : value;
}

function formatDateTime(value: string): string {
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(timestamp)) : value;
}

function routeForSection(section: FilmverketSection): FilmverketRoute {
  switch (section) {
    case "home": return { section: "home" };
    case "producer": return { section: "producer" };
    case "atlas": return { section: "atlas" };
    case "director": return { section: "director" };
    case "school": return { section: "school" };
    case "history": return { section: "history" };
    case "research": return { section: "research" };
  }
}
