import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import { DIRECTOR_BRIEF_FIELDS } from "../../core/directorBrief";
import { getFilmWorkIntlLocale, type FilmWorkLanguage } from "../../core/filmWorkLanguage";
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
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import type { FilmScenarioSeed } from "../data/filmScenarios";
import { FilmSchoolCourseNavigation, type FilmSchoolCourseId } from "./FilmSchoolCourseNavigation";

const courseCopy: Record<FilmWorkLanguage, Record<FilmSchoolGroundCourseId, { readonly title: string; readonly summary: string }>> = {
  nb: {
    screenplay: { title: "Manus og sceneanalyse", summary: "Kontekst, mål, konflikt, vendepunkt, undertekst og scenens funksjon." },
    performance: { title: "Skuespillerregi og blocking", summary: "Spillbar handling, lytting, bevegelse, blikk, prøve og justering." },
    camera: { title: "Bilde, kamera og optikk", summary: "Utsnitt, perspektiv, brennvidde, kamerabevegelse, fokus og shotplan." },
    lightingDesign: { title: "Lys, farge og produksjonsdesign", summary: "Lyskilder, kontrast, palett, materialer, rom og visuell kontinuitet." },
    editingSound: { title: "Klipp, lyd og ferdigstilling", summary: "Rytme, filmisk tid, lydperspektiv, miks, grading og levering." },
  },
  en: {
    screenplay: { title: "Screenplay and scene analysis", summary: "Context, objective, conflict, turning point, subtext and scene function." },
    performance: { title: "Performance direction and blocking", summary: "Playable action, listening, movement, eyelines, rehearsal and adjustment." },
    camera: { title: "Image, camera and optics", summary: "Framing, perspective, focal length, camera movement, focus and shot planning." },
    lightingDesign: { title: "Lighting, colour and production design", summary: "Sources, contrast, palette, materials, space and visual continuity." },
    editingSound: { title: "Editing, sound and finishing", summary: "Rhythm, cinematic time, sound perspective, mix, grading and delivery." },
  },
};

const norwegianDirectorBriefLabels: Record<(typeof DIRECTOR_BRIEF_FIELDS)[number]["id"], string> = {
  sceneTitle: "Scenetittel",
  sceneContext: "Scenekontekst",
  sceneObjective: "Scenemål",
  audienceEffect: "Publikumseffekt",
  conflictTurn: "Konflikt og vending",
  formalStrategy: "Formstrategi",
  blocking: "Blocking",
  performanceDirection: "Skuespillerregi",
  productionDesign: "Produksjonsdesign",
  shotPlan: "Shotplan",
  cameraMovementLenses: "Kamera, bevegelse og optikk",
  lightingPalette: "Lys og palett",
  editingRhythm: "Klipperytme",
  soundStrategy: "Lydstrategi",
  practicalConstraints: "Praktiske begrensninger",
  proofOfIntent: "Bevis på intensjon",
};

type FilmSchoolOverviewProps = {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly onOpenDirector: (scenario: FilmScenarioSeed) => void;
  readonly onSelectCourse: (courseId: FilmSchoolCourseId) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
};

export function FilmSchoolOverview({ navigate, onOpenDirector, onSelectCourse, scenarios }: FilmSchoolOverviewProps) {
  const [language, setLanguage] = useFilmWorkLanguage();
  const isNorwegian = language === "nb";
  const [summary, setSummary] = useState<FilmSchoolGroundCourseSummary>(() => loadSummary());
  const [submission, setSubmission] = useState<FilmSchoolCapstoneSubmission | undefined>(() => loadSubmission());
  const [assignmentFilmId, setAssignmentFilmId] = useState(() => submission?.filmId ?? scenarios[0]?.id ?? "");
  const summaryByCourseId = useMemo(() => new Map(summary.courses.map((course) => [course.courseId, course])), [summary]);
  const navItems: readonly { readonly id: FilmverketSection; readonly label: string }[] = [
    { id: "home", label: isNorwegian ? "Forside" : "Front page" },
    { id: "producer", label: "Film Producer" },
    { id: "atlas", label: "Film Atlas" },
    { id: "director", label: "Film Director" },
    { id: "school", label: "Film School" },
    { id: "history", label: "Film History" },
    { id: "research", label: "Research" },
  ];

  useEffect(() => {
    document.title = isNorwegian ? "Regi grunnkurs · Film School · Filmverket" : "Directing foundations · Film School · FilmWork";
  }, [isNorwegian]);

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
        <button className="filmverket-brand" onClick={() => navigate({ section: "home" })} type="button"><span>{isNorwegian ? "FV" : "FW"}</span><strong>{isNorwegian ? "Filmverket" : "FilmWork"}</strong></button>
        <nav aria-label={isNorwegian ? "Filmverket-seksjoner" : "FilmWork sections"}>
          {navItems.map((item) => <button className={item.id === "school" ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"} key={item.id} onClick={() => navigateSection(item.id)} type="button">{item.label}</button>)}
          <button aria-label="Bruk norsk" aria-pressed={isNorwegian} className={isNorwegian ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"} onClick={() => setLanguage("nb")} type="button">NO</button>
          <button aria-label="Use English" aria-pressed={!isNorwegian} className={!isNorwegian ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"} onClick={() => setLanguage("en")} type="button">EN</button>
        </nav>
      </header>

      <main className="school-overview-page">
        <FilmSchoolCourseNavigation activeCourseId="overview" language={language} onSelectCourse={onSelectCourse} />

        <section className="school-overview-hero">
          <div>
            <span className="filmverket-kicker">Film School · {isNorwegian ? "Regi grunnkurs" : "Directing foundations"}</span>
            <h1>{isNorwegian ? <>Fra sceneanalyse til <em>ferdig filmisk plan</em></> : <>From scene analysis to a <em>complete cinematic plan</em></>}</h1>
            <p>{isNorwegian ? "Fem kapitler følger den samme scenen gjennom manus, skuespillerarbeid, kamera, lys og design, klipp, lyd og levering. Progresjonen nedenfor kommer direkte fra kursarbeidet ditt." : "Five chapters follow the same scene through screenplay, performance, camera, lighting and design, editing, sound and delivery. The progress below comes directly from your course work."}</p>
          </div>
          <aside>
            <span>{isNorwegian ? "Samlet progresjon" : "Overall progress"}</span>
            <strong>{summary.completionPercent}<small>%</small></strong>
            <div className="school-overview-progress" aria-label={isNorwegian ? `${summary.completionPercent}% fullført` : `${summary.completionPercent}% complete`}><span style={{ width: `${summary.completionPercent}%` }} /></div>
            <p>{isNorwegian ? `${summary.masteredCourses} av ${FILM_SCHOOL_GROUND_COURSES.length} kurs mestret · ${summary.completedMilestones} av ${summary.totalMilestones} milepæler` : `${summary.masteredCourses} of ${FILM_SCHOOL_GROUND_COURSES.length} courses mastered · ${summary.completedMilestones} of ${summary.totalMilestones} milestones`}</p>
            {submission ? <p className="school-overview-completion-line">{isNorwegian ? "Regieksamen levert" : "Directing exam submitted"} · {formatDate(submission.submittedAt, language)}</p> : null}
          </aside>
        </section>

        <section className="school-overview-course-grid" aria-label={isNorwegian ? "Regi grunnkurs" : "Directing foundations"}>
          {FILM_SCHOOL_GROUND_COURSES.map((course) => {
            const courseSummary = summaryByCourseId.get(course.id);
            const complete = courseSummary?.mastered ?? false;
            const display = courseCopy[language][course.id];
            return (
              <article className={complete ? "is-mastered" : ""} key={course.id}>
                <header><span>{course.number}</span><small>{complete ? (isNorwegian ? "Mestret" : "Mastered") : `${courseSummary?.completionPercent ?? 0}%`}</small></header>
                <h2>{display.title}</h2>
                <p>{display.summary}</p>
                <div className="school-overview-course-progress"><span style={{ width: `${courseSummary?.completionPercent ?? 0}%` }} /></div>
                <footer>
                  <span>{isNorwegian ? `${courseSummary?.masteredLessons ?? 0} av ${courseSummary?.totalLessons ?? 5} leksjoner mestret` : `${courseSummary?.masteredLessons ?? 0} of ${courseSummary?.totalLessons ?? 5} lessons mastered`}</span>
                  <button onClick={() => onSelectCourse(course.id as FilmSchoolGroundCourseId)} type="button">{complete ? (isNorwegian ? "Åpne kurset igjen →" : "Open course again →") : (isNorwegian ? "Fortsett kurset →" : "Continue course →")}</button>
                </footer>
              </article>
            );
          })}
        </section>

        <section className={submission ? "school-capstone is-unlocked is-completed" : summary.mastered ? "school-capstone is-unlocked" : "school-capstone"}>
          <div>
            <span className="filmverket-kicker">{isNorwegian ? "Avsluttende regieksamen" : "Final directing exam"}</span>
            <h2>{isNorwegian ? "Én scene. Ett sammenhengende regisystem." : "One scene. One coherent directing system."}</h2>
            <p>{isNorwegian ? "Eksamen bruker hele scenebrieffet i Film Director. Alle beslutninger skal bygge den samme dramatiske utviklingen og kunne vurderes i et tenkt ferdig resultat." : "The exam uses the complete scene brief in Film Director. Every decision must build the same dramatic progression and be assessable in an imagined finished result."}</p>
            <div className="school-capstone-fields">{DIRECTOR_BRIEF_FIELDS.map((field, index) => <span key={field.id}><b>{String(index + 1).padStart(2, "0")}</b>{isNorwegian ? norwegianDirectorBriefLabels[field.id] : field.label}</span>)}</div>
          </div>
          <aside>
            <strong>{submission ? (isNorwegian ? "Regi-grunnkurs fullført" : "Directing foundations completed") : summary.mastered ? (isNorwegian ? "Grunnkurset er fullført" : "Foundation course completed") : (isNorwegian ? "Eksamen er låst" : "Exam locked")}</strong>
            {submission ? (
              <section className="school-capstone-completion">
                <span>{isNorwegian ? "Levert" : "Submitted"} {formatDateTime(submission.submittedAt, language)}</span>
                <h3>{submission.sceneTitle}</h3>
                <p>{submission.filmYear} · {submission.filmTitle}</p>
                <small>{isNorwegian ? `${submission.briefFieldCount} regifelt · ${submission.completeShotCount} komplette shot cards` : `${submission.briefFieldCount} directing fields · ${submission.completeShotCount} complete shot cards`}</small>
                <button onClick={openSubmittedCapstone} type="button">{isNorwegian ? "Åpne levert regieksamen →" : "Open submitted directing exam →"}</button>
              </section>
            ) : <p>{summary.mastered ? (isNorwegian ? "Velg en film som faglig referanse og åpne den komplette oppgaven i Film Director." : "Choose a film as your craft reference and open the complete assignment in Film Director.") : (isNorwegian ? `Mestre ${FILM_SCHOOL_GROUND_COURSES.length - summary.masteredCourses} kurs til. Alle 75 milepæler må være gjennomført.` : `Master ${FILM_SCHOOL_GROUND_COURSES.length - summary.masteredCourses} more courses. All 75 milestones must be completed.`)}</p>}
            <label>
              <span>{submission ? (isNorwegian ? "Ny eller oppdatert eksamen" : "New or updated exam") : (isNorwegian ? "Velg referansefilm" : "Choose reference film")}</span>
              <select disabled={!summary.mastered} onChange={(event: ChangeEvent<HTMLSelectElement>) => setAssignmentFilmId(event.target.value)} value={assignmentFilmId}>
                {scenarios.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.film.year} · {scenario.film.title}</option>)}
              </select>
            </label>
            <button className="filmverket-primary-action" disabled={!summary.mastered || !assignmentFilmId} onClick={startCapstone} type="button">{submission ? (isNorwegian ? "Åpne ny eksamensoppgave →" : "Open a new exam assignment →") : (isNorwegian ? "Start regieksamen i Film Director →" : "Start directing exam in Film Director →")}</button>
          </aside>
        </section>
      </main>

      <footer className="filmverket-footer"><span>{isNorwegian ? "Filmverket" : "FilmWork"} · Film School</span><span>{isNorwegian ? "Manus → prestasjon → bilde → look → postproduksjon" : "Screenplay → performance → image → look → post-production"}</span></footer>
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

function formatDate(value: string, language: FilmWorkLanguage): string {
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? new Intl.DateTimeFormat(getFilmWorkIntlLocale(language), { dateStyle: "medium" }).format(new Date(timestamp)) : value;
}

function formatDateTime(value: string, language: FilmWorkLanguage): string {
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? new Intl.DateTimeFormat(getFilmWorkIntlLocale(language), { dateStyle: "medium", timeStyle: "short" }).format(new Date(timestamp)) : value;
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
