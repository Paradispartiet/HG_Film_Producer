import { useEffect, useMemo, useState } from "react";

import {
  DIRECTOR_APPLIED_LEARNING_GUIDES,
  getDirectorAppliedLearningGuideTerms,
  getDirectorAppliedLearningGuidesForKind,
  type DirectorAppliedLearningGuide,
  type DirectorAppliedLearningKind,
} from "../../core/directorAppliedLearning";
import { getDirectorKnowledgeCategory, type DirectorTerm } from "../../core/directorKnowledge";

const PRACTICE_STORAGE_KEY = "hg_director_applied_learning_complete_v1";

type DirectorPracticeCoachProps = {
  readonly visible: boolean;
};

const kindLabels: Record<DirectorAppliedLearningKind, string> = {
  brief: "Scenebrief",
  shot: "Shotkort",
};

export function DirectorPracticeCoach({ visible }: DirectorPracticeCoachProps) {
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
    setExpanded(false);
    window.setTimeout(() => {
      const selector = guide.kind === "brief" ? ".film-director-field" : ".director-shot-field";
      const candidates = [...document.querySelectorAll<HTMLElement>(selector)];
      const target = candidates.find((candidate) => {
        const label = guide.kind === "brief"
          ? candidate.querySelector("strong")?.textContent
          : candidate.querySelector(":scope > span")?.textContent;
        return label?.trim() === guide.fieldLabel;
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
        <span>Regiøvelser</span>
        <strong>{completedIds.size}/{DIRECTOR_APPLIED_LEARNING_GUIDES.length}</strong>
        <small>{completionPercent}% gjennomført</small>
      </button>

      {expanded ? (
        <aside aria-label="Applied Film Director exercises" className="director-practice-coach">
          <header className="director-practice-header">
            <div>
              <span className="filmverket-kicker">Fra fagbegrep til regibeslutning</span>
              <h2>Øv mens du bygger scenen</h2>
              <p>Hver oppgave er koblet til et felt som allerede finnes i Film Director.</p>
            </div>
            <button aria-label="Lukk regiøvelser" onClick={() => setExpanded(false)} type="button">×</button>
          </header>

          <section className="director-practice-progress">
            <div><strong>{completedIds.size}</strong><span>oppgaver gjennomført</span></div>
            <div><strong>{DIRECTOR_APPLIED_LEARNING_GUIDES.length - completedIds.size}</strong><span>oppgaver igjen</span></div>
            <div><strong>{completionPercent}%</strong><span>praktisk progresjon</span></div>
            <div className="director-practice-progress-bar" aria-label={`${completionPercent}% fullført`}><span style={{ width: `${completionPercent}%` }} /></div>
          </section>

          <nav aria-label="Typer regiøvelser" className="director-practice-tabs">
            {(Object.keys(kindLabels) as DirectorAppliedLearningKind[]).map((item) => (
              <button className={kind === item ? "is-active" : ""} key={item} onClick={() => chooseKind(item)} type="button">
                {kindLabels[item]}
                <small>{getDirectorAppliedLearningGuidesForKind(item).length}</small>
              </button>
            ))}
          </nav>

          <div className="director-practice-workspace">
            <section className="director-practice-index" aria-label={`${kindLabels[kind]} exercises`}>
              {guides.map((guide, index) => (
                <button
                  className={guide.id === selectedGuide?.id ? "director-practice-index-item is-active" : "director-practice-index-item"}
                  key={guide.id}
                  onClick={() => setSelectedGuideId(guide.id)}
                  type="button"
                >
                  <span>{completedIds.has(guide.id) ? "✓" : String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{guide.norwegianLabel}</strong><small>{guide.fieldLabel}</small></div>
                </button>
              ))}
            </section>

            {selectedGuide ? (
              <PracticeGuideDetail
                completed={completedIds.has(selectedGuide.id)}
                guide={selectedGuide}
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

function PracticeGuideDetail({ completed, guide, onFocusField, onToggleComplete }: {
  readonly completed: boolean;
  readonly guide: DirectorAppliedLearningGuide;
  readonly onFocusField: () => void;
  readonly onToggleComplete: () => void;
}) {
  const terms = getDirectorAppliedLearningGuideTerms(guide);

  return (
    <article className="director-practice-detail">
      <header>
        <div>
          <span>{kindLabels[guide.kind]} · {guide.fieldLabel}</span>
          <h3>{guide.norwegianLabel}</h3>
          <p>{guide.purpose}</p>
        </div>
        <div className="director-practice-actions">
          <button onClick={onFocusField} type="button">Gå til arbeidsfeltet</button>
          <button className={completed ? "is-complete" : ""} onClick={onToggleComplete} type="button">
            {completed ? "✓ Gjennomført" : "Marker gjennomført"}
          </button>
        </div>
      </header>

      <section className="director-practice-exercise">
        <span>Praktisk oppgave</span>
        <p>{guide.exercise}</p>
      </section>

      <section className="director-practice-checklist">
        <h4>Sjekk før du går videre</h4>
        <ul>{guide.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="director-practice-terms">
        <header><h4>Fagbegreper i denne beslutningen</h4><span>{terms.length}</span></header>
        <div>{terms.map((term) => <PracticeTerm key={term.id} term={term} />)}</div>
      </section>
    </article>
  );
}

function PracticeTerm({ term }: { readonly term: DirectorTerm }) {
  const category = getDirectorKnowledgeCategory(term.category);
  return (
    <details className="director-practice-term">
      <summary>
        <div><strong>{term.term}</strong><span>{term.norwegian}</span></div>
        <small>{category?.label}</small>
      </summary>
      <section><h5>Definisjon</h5><p>{term.definition}</p></section>
      <section><h5>I regiarbeidet</h5><p>{term.directorUse}</p></section>
      <section><h5>Eksempel</h5><p>{term.example}</p></section>
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
