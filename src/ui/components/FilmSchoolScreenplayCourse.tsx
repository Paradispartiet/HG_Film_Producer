import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import {
  SCREENPLAY_COURSE_LESSONS,
  SCREENPLAY_COURSE_PROGRESS_STORAGE_KEY,
  SCREENPLAY_DIRECTOR_ASSIGNMENT_STORAGE_KEY,
  coerceScreenplayCourseProgress,
  createBlankScreenplayCourseProgress,
  createScreenplayDirectorAssignment,
  getScreenplayCourseCompletionPercent,
  getScreenplayCourseLessonTerms,
  getScreenplayLessonMasteryStage,
  isScreenplayCourseMastered,
  isScreenplayCourseQuizAnswerCorrect,
  type ScreenplayCourseLesson,
  type ScreenplayCourseMasteryStage,
  type ScreenplayCourseProgress,
} from "../../core/filmSchoolScreenplayCourse";
import { createFilmSlug, type FilmverketRoute, type FilmverketSection } from "../../core/filmverketRoutes";
import type { FilmScenarioSeed } from "../data/filmScenarios";
import { resolveScenarioProductionBrief } from "../data/scenarioProductionBriefs";

const navItems: readonly { readonly id: FilmverketSection; readonly label: string }[] = [
  { id: "home", label: "Front page" },
  { id: "producer", label: "Film Producer" },
  { id: "atlas", label: "Film Atlas" },
  { id: "director", label: "Film Director" },
  { id: "school", label: "Film School" },
  { id: "history", label: "Film History" },
  { id: "research", label: "Research" },
];

const stageLabels: Record<ScreenplayCourseMasteryStage, string> = {
  not_started: "Ikke startet",
  seen: "Sett",
  understood: "Forstått",
  used: "Brukt",
  mastered: "Mestret",
};

const futureCourses = [
  ["02", "Skuespillerregi og blocking", "Spillbar handling, prøver, rom, makt, bevegelse og presise justeringer."],
  ["03", "Bilde, kamera og optikk", "Utsnitt, komposisjon, perspektiv, brennvidde, bevegelse og fokus."],
  ["04", "Lys, farge og produksjonsdesign", "Lyskilder, kontrast, eksponering, palett, materialer og kontinuitet."],
  ["05", "Klipp, lyd og ferdigstilling", "Coverage, rytme, ellipser, lydperspektiv, miks, grading og levering."],
] as const;

type FilmSchoolScreenplayCourseProps = {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly onOpenAtlas: (scenario: FilmScenarioSeed) => void;
  readonly onOpenDirector: (scenario: FilmScenarioSeed) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
};

export function FilmSchoolScreenplayCourse({ navigate, onOpenAtlas, onOpenDirector, scenarios }: FilmSchoolScreenplayCourseProps) {
  const [progress, setProgress] = useState<ScreenplayCourseProgress>(() => loadProgress());
  const [quizAnswers, setQuizAnswers] = useState<Readonly<Record<string, number>>>({});
  const lessonExamples = useMemo(
    () => SCREENPLAY_COURSE_LESSONS.map((lesson, index) => resolveLessonScenario(scenarios, lesson, index)).filter((scenario): scenario is FilmScenarioSeed => Boolean(scenario)),
    [scenarios],
  );
  const [assignmentFilmId, setAssignmentFilmId] = useState(() => lessonExamples[0]?.id ?? scenarios[0]?.id ?? "");
  const activeLesson = SCREENPLAY_COURSE_LESSONS.find((lesson) => lesson.id === progress.activeLessonId) ?? SCREENPLAY_COURSE_LESSONS[0];
  const activeIndex = activeLesson ? SCREENPLAY_COURSE_LESSONS.findIndex((lesson) => lesson.id === activeLesson.id) : 0;
  const activeScenario = activeLesson ? resolveLessonScenario(scenarios, activeLesson, Math.max(0, activeIndex)) : undefined;
  const activeBrief = activeScenario ? resolveScenarioProductionBrief(activeScenario) : undefined;
  const completionPercent = getScreenplayCourseCompletionPercent(progress);
  const mastered = isScreenplayCourseMastered(progress);
  const masteredCount = SCREENPLAY_COURSE_LESSONS.filter((lesson) => getScreenplayLessonMasteryStage(progress, lesson.id) === "mastered").length;

  useEffect(() => {
    document.title = "Manus og sceneanalyse · Film School · Filmverket";
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(SCREENPLAY_COURSE_PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Course remains usable without local storage.
    }
  }, [progress]);

  useEffect(() => {
    if (!activeLesson) return;
    setProgress((current) => current.seenLessonIds.includes(activeLesson.id) ? current : {
      ...current,
      seenLessonIds: [...current.seenLessonIds, activeLesson.id],
      updatedAt: new Date().toISOString(),
    });
  }, [activeLesson]);

  if (!activeLesson) return null;

  function navigateSection(section: FilmverketSection) {
    navigate(routeForSection(section));
  }

  function selectLesson(lessonId: string) {
    setProgress((current) => ({ ...current, activeLessonId: lessonId, updatedAt: new Date().toISOString() }));
    window.setTimeout(() => document.getElementById("school-active-lesson")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }

  function answerQuiz(lesson: ScreenplayCourseLesson, answerIndex: number) {
    setQuizAnswers((current) => ({ ...current, [lesson.id]: answerIndex }));
    if (!isScreenplayCourseQuizAnswerCorrect(lesson, answerIndex)) return;
    setProgress((current) => current.understoodLessonIds.includes(lesson.id) ? current : {
      ...current,
      understoodLessonIds: [...current.understoodLessonIds, lesson.id],
      updatedAt: new Date().toISOString(),
    });
  }

  function updatePracticeNote(lessonId: string, note: string) {
    setProgress((current) => ({
      ...current,
      notesByLessonId: { ...current.notesByLessonId, [lessonId]: note },
      updatedAt: new Date().toISOString(),
    }));
  }

  function markPracticeUsed(lessonId: string) {
    const note = progress.notesByLessonId[lessonId]?.trim() ?? "";
    if (note.length < 20) return;
    setProgress((current) => current.usedLessonIds.includes(lessonId) ? current : {
      ...current,
      usedLessonIds: [...current.usedLessonIds, lessonId],
      updatedAt: new Date().toISOString(),
    });
  }

  function resetCourse() {
    if (!window.confirm("Nullstill all progresjon og alle notater i dette kurset?")) return;
    setProgress(createBlankScreenplayCourseProgress());
    setQuizAnswers({});
  }

  function startDirectorAssignment() {
    const scenario = lessonExamples.find((candidate) => candidate.id === assignmentFilmId) ?? scenarios.find((candidate) => candidate.id === assignmentFilmId);
    if (!scenario || !mastered) return;
    const filmSlug = createFilmSlug(scenario.film.title, scenario.film.year);
    const assignment = createScreenplayDirectorAssignment({
      id: scenario.id,
      title: scenario.film.title,
      year: scenario.film.year,
      slug: filmSlug,
    });
    try {
      window.localStorage.setItem(SCREENPLAY_DIRECTOR_ASSIGNMENT_STORAGE_KEY, JSON.stringify(assignment));
    } catch {
      // Navigation still works if storage is unavailable.
    }
    onOpenDirector(scenario);
  }

  const selectedAnswer = quizAnswers[activeLesson.id];
  const quizCorrect = selectedAnswer !== undefined && isScreenplayCourseQuizAnswerCorrect(activeLesson, selectedAnswer);
  const practiceNote = progress.notesByLessonId[activeLesson.id] ?? "";
  const stage = getScreenplayLessonMasteryStage(progress, activeLesson.id);
  const terms = getScreenplayCourseLessonTerms(activeLesson);

  return (
    <div className="filmverket-shell school-course-shell">
      <header className="filmverket-header">
        <button className="filmverket-brand" onClick={() => navigate({ section: "home" })} type="button"><span>FV</span><strong>Filmverket</strong></button>
        <nav aria-label="Filmverket sections">{navItems.map((item) => <button className={item.id === "school" ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"} key={item.id} onClick={() => navigateSection(item.id)} type="button">{item.label}</button>)}</nav>
      </header>

      <main className="film-school-course-page">
        <section className="school-course-hero">
          <div>
            <span className="filmverket-kicker">Film School · Regi grunnkurs · Kapittel 1</span>
            <h1>Manus og <em>sceneanalyse</em></h1>
            <p>Lær begrepet, se det brukt i en film, løs en kontrolloppgave og bruk det i ditt eget regiarbeid.</p>
          </div>
          <aside>
            <span>Kursprogresjon</span>
            <strong>{completionPercent}<small>%</small></strong>
            <div className="school-course-progress" aria-label={`${completionPercent}% complete`}><span style={{ width: `${completionPercent}%` }} /></div>
            <p>{masteredCount} av {SCREENPLAY_COURSE_LESSONS.length} leksjoner mestret</p>
          </aside>
        </section>

        <section className="school-course-summary">
          <div><strong>{SCREENPLAY_COURSE_LESSONS.length}</strong><span>leksjoner</span></div>
          <div><strong>{new Set(SCREENPLAY_COURSE_LESSONS.flatMap((lesson) => lesson.termIds)).size}</strong><span>fagbegreper</span></div>
          <div><strong>{SCREENPLAY_COURSE_LESSONS.length}</strong><span>filmeksempler</span></div>
          <div><strong>1</strong><span>avsluttende regioppgave</span></div>
          <button onClick={resetCourse} type="button">Nullstill kurs</button>
        </section>

        <section className="school-course-workspace">
          <aside className="school-lesson-rail">
            <header><span>Kursløp</span><strong>Sett → forstått → brukt → mestret</strong></header>
            <div>{SCREENPLAY_COURSE_LESSONS.map((lesson) => { const lessonStage = getScreenplayLessonMasteryStage(progress, lesson.id); return <button className={lesson.id === activeLesson.id ? "school-lesson-button is-active" : "school-lesson-button"} key={lesson.id} onClick={() => selectLesson(lesson.id)} type="button"><span>{lesson.number}</span><div><strong>{lesson.title}</strong><small className={`stage-${lessonStage}`}>{stageLabels[lessonStage]}</small></div></button>; })}</div>
          </aside>

          <article className="school-active-lesson" id="school-active-lesson">
            <header className="school-lesson-heading">
              <div><span>Leksjon {activeLesson.number} · {stageLabels[stage]}</span><h2>{activeLesson.title}</h2><p>{activeLesson.summary}</p></div>
              <strong>{stage === "mastered" ? "✓ Mestret" : stageLabels[stage]}</strong>
            </header>

            <section className="school-principle-card"><span className="filmverket-card-kicker">Kjerneprinsipp</span><p>{activeLesson.principle}</p></section>

            <section className="school-term-section">
              <header><span className="filmverket-card-kicker">Fagterminologi</span><h3>Begrepene du må kunne</h3></header>
              <div className="school-term-grid">{terms.map((term) => <article key={term.id}><header><div><strong>{term.term}</strong><span>{term.norwegian}</span></div><small>{term.level === "foundation" ? "Grunnbegrep" : term.level === "intermediate" ? "Videregående" : "Avansert"}</small></header><p>{term.definition}</p><details><summary>Regissørens bruk</summary><p>{term.directorUse}</p><em>{term.example}</em></details></article>)}</div>
            </section>

            <section className="school-film-example">
              <header><div><span className="filmverket-card-kicker">Se begrepene i en film</span><h3>{activeScenario ? `${activeScenario.film.year} · ${activeScenario.film.title}` : `${activeLesson.film.year} · ${activeLesson.film.title}`}</h3></div>{activeScenario ? <button onClick={() => onOpenAtlas(activeScenario)} type="button">Åpne i Film Atlas →</button> : null}</header>
              <p className="school-film-question">{activeLesson.film.analysisQuestion}</p>
              {activeBrief ? <ul>{activeBrief.screenplayTargets.slice(0, 3).map((target) => <li key={target}>{target}</li>)}</ul> : <p>Filmeksemplet finnes ikke i den aktive katalogen.</p>}
            </section>

            <section className="school-quiz-card">
              <header><span className="filmverket-card-kicker">Kontrollspørsmål</span><h3>{activeLesson.quiz.question}</h3></header>
              <div>{activeLesson.quiz.options.map((option, optionIndex) => { const selected = selectedAnswer === optionIndex; const correct = selected && isScreenplayCourseQuizAnswerCorrect(activeLesson, optionIndex); return <button className={selected ? correct ? "is-selected is-correct" : "is-selected is-wrong" : ""} key={option} onClick={() => answerQuiz(activeLesson, optionIndex)} type="button"><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>; })}</div>
              {selectedAnswer !== undefined ? <p className={quizCorrect ? "school-quiz-feedback is-correct" : "school-quiz-feedback is-wrong"}>{quizCorrect ? "Riktig. " : "Ikke helt. "}{activeLesson.quiz.explanation}</p> : null}
            </section>

            <section className="school-practice-card">
              <header><div><span className="filmverket-card-kicker">Bruk begrepene selv</span><h3>Miniøvelse</h3></div><span>{progress.usedLessonIds.includes(activeLesson.id) ? "✓ Brukt" : "Ikke gjennomført"}</span></header>
              <p>{activeLesson.practicePrompt}</p>
              <textarea onChange={(event) => updatePracticeNote(activeLesson.id, event.target.value)} placeholder="Skriv sceneanalysen din her …" rows={7} value={practiceNote} />
              <div className="school-practice-checklist"><strong>Sjekk før du markerer brukt</strong>{activeLesson.checklist.map((item) => <label key={item}><input readOnly type="checkbox" checked={progress.usedLessonIds.includes(activeLesson.id)} />{item}</label>)}</div>
              <button className="filmverket-primary-action" disabled={practiceNote.trim().length < 20 || progress.usedLessonIds.includes(activeLesson.id)} onClick={() => markPracticeUsed(activeLesson.id)} type="button">{progress.usedLessonIds.includes(activeLesson.id) ? "Øvelsen er brukt" : "Marker øvelsen som brukt"}</button>
            </section>

            <nav className="school-lesson-navigation" aria-label="Course lesson navigation">
              <button disabled={activeIndex <= 0} onClick={() => { const previous = SCREENPLAY_COURSE_LESSONS[activeIndex - 1]; if (previous) selectLesson(previous.id); }} type="button">← Forrige leksjon</button>
              <button disabled={activeIndex >= SCREENPLAY_COURSE_LESSONS.length - 1} onClick={() => { const next = SCREENPLAY_COURSE_LESSONS[activeIndex + 1]; if (next) selectLesson(next.id); }} type="button">Neste leksjon →</button>
            </nav>
          </article>
        </section>

        <section className={mastered ? "school-final-assignment is-unlocked" : "school-final-assignment"}>
          <div><span className="filmverket-kicker">Avsluttende oppgave</span><h2>Fra analyse til regibeslutning</h2><p>Planlegg én scene der synsvinkel, mål, hindring, vendepunkt, undertekst og publikumsinformasjon virker sammen. Oppgaven åpnes i Film Director med fem konkrete leveransefelt.</p></div>
          <aside>
            <label><span>Velg referansefilm</span><select disabled={!mastered} onChange={(event: ChangeEvent<HTMLSelectElement>) => setAssignmentFilmId(event.target.value)} value={assignmentFilmId}>{lessonExamples.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.film.year} · {scenario.film.title}</option>)}</select></label>
            <button className="filmverket-primary-action" disabled={!mastered || !assignmentFilmId} onClick={startDirectorAssignment} type="button">{mastered ? "Start avsluttende oppgave i Film Director →" : `Mestre ${SCREENPLAY_COURSE_LESSONS.length - masteredCount} leksjon${SCREENPLAY_COURSE_LESSONS.length - masteredCount === 1 ? "" : "er"} først`}</button>
          </aside>
        </section>

        <section className="school-course-roadmap">
          <header><span className="filmverket-kicker">Regi grunnkurs</span><h2>Neste kapitler</h2></header>
          <div>{futureCourses.map(([number, title, description]) => <article key={number}><span>{number}</span><div><strong>{title}</strong><p>{description}</p></div><small>Kommer senere</small></article>)}</div>
        </section>
      </main>

      <footer className="filmverket-footer"><span>Filmverket · Film School</span><span>Begrep → filmeksempel → quiz → praksis → Film Director</span></footer>
    </div>
  );
}

function resolveLessonScenario(scenarios: readonly FilmScenarioSeed[], lesson: ScreenplayCourseLesson, fallbackIndex: number): FilmScenarioSeed | undefined {
  const normalizedTitle = normalizeTitle(lesson.film.title);
  return scenarios.find((scenario) => scenario.film.year === lesson.film.year && [scenario.film.title, scenario.film.original_title].map(normalizeTitle).includes(normalizedTitle))
    ?? scenarios[fallbackIndex % Math.max(1, scenarios.length)];
}

function normalizeTitle(value: string): string {
  return value.toLocaleLowerCase("en").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}

function loadProgress(): ScreenplayCourseProgress {
  try {
    return coerceScreenplayCourseProgress(JSON.parse(window.localStorage.getItem(SCREENPLAY_COURSE_PROGRESS_STORAGE_KEY) ?? "null") as unknown);
  } catch {
    return createBlankScreenplayCourseProgress();
  }
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
