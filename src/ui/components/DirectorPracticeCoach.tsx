import { useEffect, useMemo, useState } from "react";

import {
  DIRECTOR_APPLIED_LEARNING_GUIDES,
  getDirectorAppliedLearningGuideTerms,
  getDirectorAppliedLearningGuidesForKind,
  type DirectorAppliedLearningGuide,
  type DirectorAppliedLearningKind,
} from "../../core/directorAppliedLearning";
import { FILM_DIRECTOR_KNOWLEDGE_COPY } from "../../core/directorKnowledgeDeskCopy";
import type { DirectorTerm } from "../../core/directorKnowledge";
import {
  FILM_DIRECTOR_PRACTICE_COPY,
  getFilmDirectorPracticeFieldLabel,
} from "../../core/filmDirectorPracticeCopy";
import { getFilmDirectorPracticeGuideTitle } from "../../core/filmDirectorPracticeGuideTitle";
import { getDirectorTermDisplay } from "../../core/directorDisplay";
import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

const PRACTICE_STORAGE_KEY = "hg_director_applied_learning_complete_v1";

type DirectorPracticeCoachProps = {
  readonly visible: boolean;
};

export function DirectorPracticeCoach({ visible }: DirectorPracticeCoachProps) {
  const [language] = useFilmWorkLanguage();
  const copy = FILM_DIRECTOR_PRACTICE_COPY[language];
  const [expanded, setExpanded] = useState(false);
  const [kind, setKind] = useState<DirectorAppliedLearningKind>("brief");
  const [selectedGuideId, setSelectedGuideId] = useState("brief:sceneObjective");
  const [completedIds, setCompletedIds] = useState<ReadonlySet<string>>(() => loadCompletedExercises());
  const guides = useMemo(() => getDirectorAppliedLearningGuidesForKind(kind), [kind]);
  const selectedGuide = DIRECTOR_APPLIED_LEARNING_GUIDES.find((guide) => guide.id === selectedGuideId)
    ?? guides[0];
  const completionPercent = DIRECTOR_APPLIED_LEARNING_GUIDES.length > 0
    ? Math.round((completedIds.size / DIRECTOR_APPLIED_LEARNING_GUIDES.length) * 100)
    : 0;

  useEffect(() => {
    try {
      window.localStorage.setItem(PRACTICE_STORAGE_KEY, JSON.stringify([...completedIds]));
    } catch {
      // Exercises remain usable without persistence.
    }
  }, [completedIds]);

  useEffect(() => {
    if (!visible) setExpanded(false);
  }, [visible]);

  if (!visible) return null;

  function chooseKind(nextKind: DirectorAppliedLearningKind) {
    const first = getDirectorAppliedLearningGuidesForKind(nextKind)[0];
    setKind(nextKind);
    if (first) setSelectedGuideId(first.id);
  }

  function toggleComplete(guideId: string) {
    setCompletedIds((current) => {
      const next = new Set(current);
      if (next.has(guideId)) next.delete(guideId);
      else next.add(guideId);
      return next;
    });
  }

  function focusWorkingField(guide: DirectorAppliedLearningGuide) {
    const expectedLabel = getFilmDirectorPracticeFieldLabel(language, guide);
    setExpanded(false);
    window.setTimeout(() => {
      const selector = guide.kind === "brief" ? ".film-director-field" : ".director-shot-field";
      const candidates = [...document.querySelectorAll<HTMLElement>(selector)];
      const target = candidates.find((candidate) => {
        const label = guide.kind === "brief"
          ? candidate.querySelector("strong")?.textContent
          : candidate.querySelector(":scope > span")?.textContent;
        return label?.trim() === expectedLabel;
      });

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        window.setTimeout(() => target.querySelector<HTMLElement>("input, textarea, select")?.focus(), 350);
        return;
      }

      document.getElementById(guide.kind === "shot" ? "director-shot-list" : "director-active-scene")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  }

  return (
    <>
      <button
        aria-expanded={expanded}
        className="director-practice-launcher"
        onClick={() => setExpanded((current) => !current)}
        type="button"
      >
        <span>{copy.launcherTitle}</span>
        <strong>{completedIds.size}/{DIRECTOR_APPLIED_LEARNING_GUIDES.length}</strong>
        <small>{copy.completionPercent(completionPercent)}</small>
      </button>

      {expanded ? (
        <aside aria-label={copy.deskAria} className="director-practice-coach">
          <header className="director-practice-header">
            <div>
              <span className="filmverket-kicker">{copy.kicker}</span>
              <h2>{copy.title}</h2>
              <p>{copy.description}</p>
            </div>
            <button aria-label={copy.closeAria} onClick={() => setExpanded(false)} type="button">×</button>
          </header>

          <section className="director-practice-progress">
            <div><strong>{completedIds.size}</strong><span>{copy.completedTasks}</span></div>
            <div><strong>{DIRECTOR_APPLIED_LEARNING_GUIDES.length - completedIds.size}</strong><span>{copy.remainingTasks}</span></div>
            <div><strong>{completionPercent}%</strong><span>{copy.practicalProgress}</span></div>
            <div className="director-practice-progress-bar" aria-label={copy.progressAria(completionPercent)}><span style={{ width: `${completionPercent}%` }} /></div>
          </section>

          <nav aria-label={copy.tabsAria} className="director-practice-tabs">
            {(Object.keys(copy.kindLabels) as DirectorAppliedLearningKind[]).map((item) => (
              <button className={kind === item ? "is-active" : ""} key={item} onClick={() => chooseKind(item)} type="button">
                {copy.kindLabels[item]}
                <small>{getDirectorAppliedLearningGuidesForKind(item).length}</small>
              </button>
            ))}
          </nav>

          <div className="director-practice-workspace">
            <section className="director-practice-index" aria-label={copy.exercisesAria(copy.kindLabels[kind])}>
              {guides.map((guide, index) => (
                <button
                  className={guide.id === selectedGuide?.id ? "director-practice-index-item is-active" : "director-practice-index-item"}
                  key={guide.id}
                  onClick={() => setSelectedGuideId(guide.id)}
                  type="button"
                >
                  <span>{completedIds.has(guide.id) ? "✓" : String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{getFilmDirectorPracticeGuideTitle(language, guide)}</strong><small>{getFilmDirectorPracticeFieldLabel(language, guide)}</small></div>
                </button>
              ))}
            </section>

            {selectedGuide ? (
              <PracticeGuideDetail
                completed={completedIds.has(selectedGuide.id)}
                guide={selectedGuide}
                language={language}
                onFocusField={() => focusWorkingField(selectedGuide)}
                onToggleComplete={() => toggleComplete(selectedGuide.id)}
              />
            ) : null}
          </div>
        </aside>
      ) : null}
    </>
  );
}

function PracticeGuideDetail({ completed, guide, language, onFocusField, onToggleComplete }: {
  readonly completed: boolean;
  readonly guide: DirectorAppliedLearningGuide;
  readonly language: FilmWorkLanguage;
  readonly onFocusField: () => void;
  readonly onToggleComplete: () => void;
}) {
  const copy = FILM_DIRECTOR_PRACTICE_COPY[language];
  const terms = getDirectorAppliedLearningGuideTerms(guide);

  return (
    <article className="director-practice-detail">
      <header>
        <div>
          <span>{copy.kindLabels[guide.kind]} · {getFilmDirectorPracticeFieldLabel(language, guide)}</span>
          <h3>{getFilmDirectorPracticeGuideTitle(language, guide)}</h3>
          <p>{guide.purpose}</p>
        </div>
        <div className="director-practice-actions">
          <button onClick={onFocusField} type="button">{copy.goToField}</button>
          <button className={completed ? "is-complete" : ""} onClick={onToggleComplete} type="button">
            {completed ? copy.completed : copy.markCompleted}
          </button>
        </div>
      </header>

      <section className="director-practice-exercise">
        <span>{copy.practicalTask}</span>
        <p>{guide.exercise}</p>
      </section>

      <section className="director-practice-checklist">
        <h4>{copy.checklistTitle}</h4>
        <ul>{guide.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="director-practice-terms">
        <header><h4>{copy.termsTitle}</h4><span>{terms.length}</span></header>
        <div>{terms.map((term) => <PracticeTerm key={term.id} language={language} term={term} />)}</div>
      </section>
    </article>
  );
}

function PracticeTerm({ language, term }: { readonly language: FilmWorkLanguage; readonly term: DirectorTerm }) {
  const practiceCopy = FILM_DIRECTOR_PRACTICE_COPY[language];
  const knowledgeCopy = FILM_DIRECTOR_KNOWLEDGE_COPY[language];
  const display = getDirectorTermDisplay(language, term);
  return (
    <details className="director-practice-term">
      <summary>
        <div><strong>{display.primaryTerm}</strong><span>{display.localizedTerm}</span></div>
        <small>{knowledgeCopy.categories[term.category]}</small>
      </summary>
      <section><h5>{practiceCopy.definition}</h5><p>{display.definition}</p></section>
      <section><h5>{practiceCopy.directorUse}</h5><p>{display.directorUse}</p></section>
      <section><h5>{practiceCopy.example}</h5><p>{display.example}</p></section>
    </details>
  );
}

function loadCompletedExercises(): ReadonlySet<string> {
  try {
    const stored = JSON.parse(window.localStorage.getItem(PRACTICE_STORAGE_KEY) ?? "[]") as unknown;
    if (!Array.isArray(stored)) return new Set();
    const validIds = new Set(DIRECTOR_APPLIED_LEARNING_GUIDES.map((guide) => guide.id));
    return new Set(stored.filter((value): value is string => typeof value === "string" && validIds.has(value)));
  } catch {
    return new Set();
  }
}
