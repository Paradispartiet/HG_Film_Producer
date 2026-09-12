import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import { FILM_SCHOOL_COURSE_CHROME } from "../../core/filmSchoolCourseChrome";
import { FILM_SCHOOL_COURSE_SURFACE_COPY } from "../../core/filmSchoolCourseSurfaceCopy";
import {
  EDITING_SOUND_COURSE_LESSONS,
  EDITING_SOUND_COURSE_PROGRESS_STORAGE_KEY,
  EDITING_SOUND_DIRECTOR_ASSIGNMENT_STORAGE_KEY,
  coerceEditingSoundCourseProgress,
  createBlankEditingSoundCourseProgress,
  createEditingSoundDirectorAssignment,
  getEditingSoundCourseCompletionPercent,
  getEditingSoundCourseLessonTerms,
  getEditingSoundLessonMasteryStage,
  isEditingSoundCourseMastered,
  isEditingSoundCourseQuizAnswerCorrect,
  type EditingSoundCourseLesson,
  type EditingSoundCourseProgress,
} from "../../core/filmSchoolEditingSoundCourse";
import { createFilmSlug, type FilmverketRoute, type FilmverketSection } from "../../core/filmverketRoutes";
import type { FilmScenarioSeed } from "../data/filmScenarios";
import { resolveScenarioProductionBrief } from "../data/scenarioProductionBriefs";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
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

type FilmSchoolEditingSoundCourseProps = {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly onOpenAtlas: (scenario: FilmScenarioSeed) => void;
  readonly onOpenDirector: (scenario: FilmScenarioSeed) => void;
  readonly onSelectCourse: (courseId: FilmSchoolCourseId) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
};

export function FilmSchoolEditingSoundCourse({
  navigate,
  onOpenAtlas,
  onOpenDirector,
  onSelectCourse,
  scenarios,
}: FilmSchoolEditingSoundCourseProps) {
  const [language] = useFilmWorkLanguage();
  const chrome = FILM_SCHOOL_COURSE_CHROME[language];
  const surface = FILM_SCHOOL_COURSE_SURFACE_COPY[language].editingSound;
  const stageLabels = chrome.stage;
  const [progress, setProgress] = useState<EditingSoundCourseProgress>(() => loadProgress());
  const [quizAnswers, setQuizAnswers] = useState<Readonly<Record<string, number>>>({});
  const lessonExamples = useMemo(
    () => EDITING_SOUND_COURSE_LESSONS.map((lesson, index) => resolveLessonScenario(scenarios, lesson, index)).filter((scenario): scenario is FilmScenarioSeed => Boolean(scenario)),
    [scenarios],
  );
  const [assignmentFilmId, setAssignmentFilmId] = useState(() => lessonExamples[0]?.id ?? scenarios[0]?.id ?? "");
  const activeLesson = EDITING_SOUND_COURSE_LESSONS.find((lesson) => lesson.id === progress.activeLessonId) ?? EDITING_SOUND_COURSE_LESSONS[0];
  const activeIndex = activeLesson ? EDITING_SOUND_COURSE_LESSONS.findIndex((lesson) => lesson.id === activeLesson.id) : 0;
  const activeScenario = activeLesson ? resolveLessonScenario(scenarios, activeLesson, Math.max(0, activeIndex)) : undefined;
  const activeBrief = activeScenario ? resolveScenarioProductionBrief(activeScenario) : undefined;
  const completionPercent = getEditingSoundCourseCompletionPercent(progress);
  const mastered = isEditingSoundCourseMastered(progress);
  const masteredCount = EDITING_SOUND_COURSE_LESSONS.filter((lesson) => getEditingSoundLessonMasteryStage(progress, lesson.id) === "mastered").length;
  const exampleInsights = activeBrief
    ? [...activeBrief.editingTargets.slice(0, 2), ...activeBrief.soundTargets.slice(0, 2)]
    : [];

  useEffect(() => {
    document.title = `Film School · ${chrome.productBrand}`;
  }, [chrome.productBrand]);

  useEffect(() => {
    try {
      window.localStorage.setItem(EDITING_SOUND_COURSE_PROGRESS_STORAGE_KEY, JSON.stringify(progress));
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
    window.setTimeout(() => document.getElementById("school-active-editing-sound-lesson")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }

  function answerQuiz(lesson: EditingSoundCourseLesson, answerIndex: number) {
    setQuizAnswers((current) => ({ ...current, [lesson.id]: answerIndex }));
    if (!isEditingSoundCourseQuizAnswerCorrect(lesson, answerIndex)) return;
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
    if (!window.confirm(chrome.resetConfirm)) return;
    setProgress(createBlankEditingSoundCourseProgress());
    setQuizAnswers({});
  }

  function startDirectorAssignment() {
    const scenario = lessonExamples.find((candidate) => candidate.id === assignmentFilmId) ?? scenarios.find((candidate) => candidate.id === assignmentFilmId);
    if (!scenario || !mastered) return;
    const filmSlug = createFilmSlug(scenario.film.title, scenario.film.year);
    const assignment = createEditingSoundDirectorAssignment({
      id: scenario.id,
      title: scenario.film.title,
      year: scenario.film.year,
      slug: filmSlug,
    });
    try {
      window.localStorage.setItem(EDITING_SOUND_DIRECTOR_ASSIGNMENT_STORAGE_KEY, JSON.stringify(assignment));
    } catch {
      // Navigation still works if storage is unavailable.
    }
    onOpenDirector(scenario);
  }

  const selectedAnswer = quizAnswers[activeLesson.id];
  const quizCorrect = selectedAnswer !== undefined && isEditingSoundCourseQuizAnswerCorrect(activeLesson, selectedAnswer);
  const practiceNote = progress.notesByLessonId[activeLesson.id] ?? "";
  const stage = getEditingSoundLessonMasteryStage(progress, activeLesson.id);
  const terms = getEditingSoundCourseLessonTerms(activeLesson);
  const remainingModules = EDITING_SOUND_COURSE_LESSONS.length - masteredCount;

  return (
    <div className="filmverket-shell school-course-shell school-editing-sound-course-shell">
      <header className="filmverket-header">
        <button className="filmverket-brand" onClick={() => navigate({ section: "home" })} type="button"><span>{chrome.productMonogram}</span><strong>{chrome.productBrand}</strong></button>
        <nav aria-label={chrome.navAria}>{navItems.map((item) => <button className={item.id === "school" ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"} key={item.id} onClick={() => navigateSection(item.id)} type="button">{item.label}</button>)}</nav>
      </header>

      <main className="film-school-course-page">
        <FilmSchoolCourseNavigation activeCourseId="editingSound" language={language} onSelectCourse={onSelectCourse} />

        <section className="school-course-hero school-course-hero--editing-sound">
          <div>
            <span className="filmverket-kicker">Film School · {chrome.foundation} · 5/5</span>
            <h1>{surface.titleLead} <em>{surface.titleEmphasis}</em></h1>
            <p>{surface.heroIntro}</p>
          </div>
          <aside>
            <span>{chrome.courseProgress}</span>
            <strong>{completionPercent}<small>%</small></strong>
            <div className="school-course-progress" aria-label={`${completionPercent}% complete`}><span style={{ width: `${completionPercent}%` }} /></div>
            <p>{masteredCount} / {EDITING_SOUND_COURSE_LESSONS.length} {chrome.modules}</p>
          </aside>
        </section>

        <section className="school-course-summary">
          <div><strong>{EDITING_SOUND_COURSE_LESSONS.length}</strong><span>{chrome.modules}</span></div>
          <div><strong>{new Set(EDITING_SOUND_COURSE_LESSONS.flatMap((lesson) => lesson.termIds)).size}</strong><span>{chrome.terms}</span></div>
          <div><strong>{EDITING_SOUND_COURSE_LESSONS.length}</strong><span>{chrome.filmExamples}</span></div>
          <div><strong>1</strong><span>{chrome.finalAssignment}</span></div>
          <button onClick={resetCourse} type="button">{chrome.resetCourse}</button>
        </section>

        <section className="school-course-workspace">
          <aside className="school-lesson-rail">
            <header><span>{chrome.coursePath}</span><strong>{stageLabels.seen} → {stageLabels.understood} → {stageLabels.used} → {stageLabels.mastered}</strong></header>
            <div>{EDITING_SOUND_COURSE_LESSONS.map((lesson) => { const lessonStage = getEditingSoundLessonMasteryStage(progress, lesson.id); return <button className={lesson.id === activeLesson.id ? "school-lesson-button is-active" : "school-lesson-button"} key={lesson.id} onClick={() => selectLesson(lesson.id)} type="button"><span>{lesson.number}</span><div><strong>{lesson.title}</strong><small className={`stage-${lessonStage}`}>{stageLabels[lessonStage]}</small></div></button>; })}</div>
          </aside>

          <article className="school-active-lesson" id="school-active-editing-sound-lesson">
            <header className="school-lesson-heading">
              <div><span>{chrome.module} {activeLesson.number} · {stageLabels[stage]}</span><h2>{activeLesson.title}</h2><p>{activeLesson.summary}</p></div>
              <strong>{stage === "mastered" ? `✓ ${stageLabels.mastered}` : stageLabels[stage]}</strong>
            </header>

            <section className="school-principle-card"><span className="filmverket-card-kicker">{chrome.corePrinciple}</span><p>{activeLesson.principle}</p></section>

            <section className="school-term-section">
              <header><span className="filmverket-card-kicker">{chrome.terminology}</span><h3>{chrome.termsYouNeed}</h3></header>
              <div className="school-term-grid">{terms.map((term) => <article key={term.id}><header><div><strong>{term.term}</strong><span>{term.norwegian}</span></div><small>{term.level === "foundation" ? chrome.foundationLevel : term.level === "intermediate" ? chrome.intermediateLevel : chrome.advancedLevel}</small></header><p>{term.definition}</p><details><summary>{chrome.directorUse}</summary><p>{term.directorUse}</p><em>{term.example}</em></details></article>)}</div>
            </section>

            <section className="school-film-example">
              <header><div><span className="filmverket-card-kicker">{chrome.seeInFilm}</span><h3>{activeScenario ? `${activeScenario.film.year} · ${activeScenario.film.title}` : `${activeLesson.film.year} · ${activeLesson.film.title}`}</h3></div>{activeScenario ? <button onClick={() => onOpenAtlas(activeScenario)} type="button">{chrome.openInAtlas}</button> : null}</header>
              <p className="school-film-question">{activeLesson.film.analysisQuestion}</p>
              {exampleInsights.length > 0 ? <ul>{exampleInsights.map((target) => <li key={target}>{target}</li>)}</ul> : <p>{chrome.missingFilmExample}</p>}
            </section>

            <section className="school-quiz-card">
              <header><span className="filmverket-card-kicker">{chrome.quiz}</span><h3>{activeLesson.quiz.question}</h3></header>
              <div>{activeLesson.quiz.options.map((option, optionIndex) => { const selected = selectedAnswer === optionIndex; const correct = selected && isEditingSoundCourseQuizAnswerCorrect(activeLesson, optionIndex); return <button className={selected ? correct ? "is-selected is-correct" : "is-selected is-wrong" : ""} key={option} onClick={() => answerQuiz(activeLesson, optionIndex)} type="button"><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>; })}</div>
              {selectedAnswer !== undefined ? <p className={quizCorrect ? "school-quiz-feedback is-correct" : "school-quiz-feedback is-wrong"}>{quizCorrect ? chrome.correct : chrome.notQuite}{activeLesson.quiz.explanation}</p> : null}
            </section>

            <section className="school-practice-card">
              <header><div><span className="filmverket-card-kicker">{chrome.useItYourself}</span><h3>{chrome.miniExercise}</h3></div><span>{progress.usedLessonIds.includes(activeLesson.id) ? `✓ ${stageLabels.used}` : chrome.notCompleted}</span></header>
              <p>{activeLesson.practicePrompt}</p>
              <textarea onChange={(event) => updatePracticeNote(activeLesson.id, event.target.value)} placeholder={surface.practicePlaceholder} rows={7} value={practiceNote} />
              <div className="school-practice-checklist"><strong>{chrome.checkBeforeUsed}</strong>{activeLesson.checklist.map((item) => <label key={item}><input readOnly type="checkbox" checked={progress.usedLessonIds.includes(activeLesson.id)} />{item}</label>)}</div>
              <button className="filmverket-primary-action" disabled={practiceNote.trim().length < 20 || progress.usedLessonIds.includes(activeLesson.id)} onClick={() => markPracticeUsed(activeLesson.id)} type="button">{progress.usedLessonIds.includes(activeLesson.id) ? chrome.exerciseUsed : chrome.markExerciseUsed}</button>
            </section>

            <nav className="school-lesson-navigation" aria-label={chrome.courseModuleNavAria}>
              <button disabled={activeIndex <= 0} onClick={() => { const previous = EDITING_SOUND_COURSE_LESSONS[activeIndex - 1]; if (previous) selectLesson(previous.id); }} type="button">{chrome.previousModule}</button>
              <button disabled={activeIndex >= EDITING_SOUND_COURSE_LESSONS.length - 1} onClick={() => { const next = EDITING_SOUND_COURSE_LESSONS[activeIndex + 1]; if (next) selectLesson(next.id); }} type="button">{chrome.nextModule}</button>
            </nav>
          </article>
        </section>

        <section className={mastered ? "school-final-assignment is-unlocked" : "school-final-assignment"}>
          <div><span className="filmverket-kicker">{chrome.finalAssignment}</span><h2>{surface.finalTitle}</h2><p>{surface.finalDescription}</p></div>
          <aside>
            <label><span>{chrome.selectReferenceFilm}</span><select disabled={!mastered} onChange={(event: ChangeEvent<HTMLSelectElement>) => setAssignmentFilmId(event.target.value)} value={assignmentFilmId}>{lessonExamples.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.film.year} · {scenario.film.title}</option>)}</select></label>
            <button className="filmverket-primary-action" disabled={!mastered || !assignmentFilmId} onClick={startDirectorAssignment} type="button">{mastered ? chrome.startFinalAssignment : chrome.masterFirst(remainingModules)}</button>
          </aside>
        </section>

        <section className="school-course-roadmap school-course-roadmap--complete">
          <header><span className="filmverket-kicker">{chrome.foundation}</span><h2>{surface.roadmapTitle}</h2></header>
          <div><article><span>✓</span><div><strong>{surface.completionTitle}</strong><p>{surface.completionDescription}</p></div><small>{surface.completionSmall}</small></article></div>
        </section>
      </main>

      <footer className="filmverket-footer"><span>{chrome.productBrand} · Film School</span><span>{surface.footerFlow}</span></footer>
    </div>
  );
}

function resolveLessonScenario(scenarios: readonly FilmScenarioSeed[], lesson: EditingSoundCourseLesson, fallbackIndex: number): FilmScenarioSeed | undefined {
  const normalizedTitle = normalizeTitle(lesson.film.title);
  return scenarios.find((scenario) => scenario.film.year === lesson.film.year && [scenario.film.title, scenario.film.original_title].map(normalizeTitle).includes(normalizedTitle))
    ?? scenarios[fallbackIndex % Math.max(1, scenarios.length)];
}

function normalizeTitle(value: string): string {
  return value.toLocaleLowerCase("en").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}

function loadProgress(): EditingSoundCourseProgress {
  try {
    return coerceEditingSoundCourseProgress(JSON.parse(window.localStorage.getItem(EDITING_SOUND_COURSE_PROGRESS_STORAGE_KEY) ?? "null") as unknown);
  } catch {
    return createBlankEditingSoundCourseProgress();
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