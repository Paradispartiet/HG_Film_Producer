import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import {
  DIRECTOR_KNOWLEDGE_CATEGORIES,
  DIRECTOR_KNOWLEDGE_SOURCES,
  DIRECTOR_TERMS,
  DIRECTOR_WORKFLOW,
  getDirectorTerm,
  getDirectorTermsForWorkflowStep,
  searchDirectorTerms,
  type DirectorKnowledgeCategoryId,
  type DirectorKnowledgePhase,
  type DirectorTerm,
} from "../../core/directorKnowledge";
import { FILM_DIRECTOR_KNOWLEDGE_COPY } from "../../core/directorKnowledgeDeskCopy";
import {
  FILM_DIRECTOR_WORKFLOW_COPY,
  getDirectorWorkflowNarrative,
} from "../../core/directorKnowledgeWorkflowCopy";
import { getDirectorTermDisplay } from "../../core/directorDisplay";
import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

const LEARNED_STORAGE_KEY = "hg_director_knowledge_learned_v1";

type DirectorKnowledgeDeskProps = {
  readonly visible: boolean;
};

type DeskMode = "workflow" | "terminology";

export function DirectorKnowledgeDesk({ visible }: DirectorKnowledgeDeskProps) {
  const [language] = useFilmWorkLanguage();
  const copy = FILM_DIRECTOR_KNOWLEDGE_COPY[language];
  const [expanded, setExpanded] = useState(false);
  const [mode, setMode] = useState<DeskMode>("workflow");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DirectorKnowledgeCategoryId | "all">("all");
  const [phase, setPhase] = useState<DirectorKnowledgePhase | "all">("all");
  const [selectedTermId, setSelectedTermId] = useState(DIRECTOR_TERMS[0]?.id ?? "");
  const [learnedIds, setLearnedIds] = useState<ReadonlySet<string>>(() => loadLearnedTerms());

  const filteredTerms = useMemo(
    () => searchDirectorTerms(query, category, phase),
    [category, phase, query],
  );

  const selectedTerm = getDirectorTerm(selectedTermId) ?? filteredTerms[0] ?? DIRECTOR_TERMS[0];
  const learnedPercent = DIRECTOR_TERMS.length > 0
    ? Math.round((learnedIds.size / DIRECTOR_TERMS.length) * 100)
    : 0;

  useEffect(() => {
    try {
      window.localStorage.setItem(LEARNED_STORAGE_KEY, JSON.stringify([...learnedIds]));
    } catch {
      // Knowledge remains usable when local storage is unavailable.
    }
  }, [learnedIds]);

  useEffect(() => {
    if (!visible) setExpanded(false);
  }, [visible]);

  if (!visible) return null;

  function openTerm(termId: string) {
    setSelectedTermId(termId);
    setMode("terminology");
  }

  function toggleLearned(termId: string) {
    setLearnedIds((current) => {
      const next = new Set(current);
      if (next.has(termId)) next.delete(termId);
      else next.add(termId);
      return next;
    });
  }

  function resetFilters() {
    setQuery("");
    setCategory("all");
    setPhase("all");
  }

  return (
    <>
      <button
        aria-expanded={expanded}
        className="director-knowledge-launcher"
        onClick={() => setExpanded((current) => !current)}
        type="button"
      >
        <span>{copy.launcherTitle}</span>
        <strong>{DIRECTOR_TERMS.length}</strong>
        <small>{copy.launcherTerms}</small>
      </button>

      {expanded ? (
        <aside aria-label={copy.deskAria} className="director-knowledge-desk">
          <header className="director-knowledge-header">
            <div>
              <span className="filmverket-kicker">{copy.kicker}</span>
              <h2>{copy.title}</h2>
              <p>{copy.description}</p>
            </div>
            <button aria-label={copy.closeAria} onClick={() => setExpanded(false)} type="button">×</button>
          </header>

          <section className="director-knowledge-stats">
            <div><strong>{DIRECTOR_WORKFLOW.length}</strong><span>{copy.stats.workflowSteps}</span></div>
            <div><strong>{DIRECTOR_TERMS.length}</strong><span>{copy.stats.terms}</span></div>
            <div><strong>{learnedIds.size}</strong><span>{copy.stats.learned}</span></div>
            <div><strong>{learnedPercent}%</strong><span>{copy.stats.progress}</span></div>
          </section>

          <nav aria-label={copy.tabsAria} className="director-knowledge-tabs">
            <button className={mode === "workflow" ? "is-active" : ""} onClick={() => setMode("workflow")} type="button">{copy.workflowTab}</button>
            <button className={mode === "terminology" ? "is-active" : ""} onClick={() => setMode("terminology")} type="button">{copy.terminologyTab}</button>
          </nav>

          {mode === "workflow" ? (
            <WorkflowView language={language} onOpenTerm={openTerm} />
          ) : (
            <TerminologyView
              category={category}
              filteredTerms={filteredTerms}
              language={language}
              learnedIds={learnedIds}
              onCategoryChange={setCategory}
              onOpenTerm={openTerm}
              onPhaseChange={setPhase}
              onQueryChange={setQuery}
              onReset={resetFilters}
              onToggleLearned={toggleLearned}
              phase={phase}
              query={query}
              selectedTerm={selectedTerm}
            />
          )}

          <KnowledgeSources language={language} />
        </aside>
      ) : null}
    </>
  );
}

function WorkflowView({ language, onOpenTerm }: { readonly language: FilmWorkLanguage; readonly onOpenTerm: (termId: string) => void }) {
  const [activeStepId, setActiveStepId] = useState(DIRECTOR_WORKFLOW[0]?.id ?? "");
  const activeStep = DIRECTOR_WORKFLOW.find((step) => step.id === activeStepId) ?? DIRECTOR_WORKFLOW[0];
  const workflowCopy = FILM_DIRECTOR_WORKFLOW_COPY[language];
  const knowledgeCopy = FILM_DIRECTOR_KNOWLEDGE_COPY[language];

  if (!activeStep) return null;

  const activeNarrative = getDirectorWorkflowNarrative(language, activeStep);

  return (
    <div className="director-workflow-view">
      <div className="director-workflow-rail" aria-label={workflowCopy.railAria}>
        {DIRECTOR_WORKFLOW.map((step) => {
          const narrative = getDirectorWorkflowNarrative(language, step);
          return (
            <button
              className={step.id === activeStep.id ? "director-workflow-step is-active" : "director-workflow-step"}
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              type="button"
            >
              <span>{String(step.order).padStart(2, "0")}</span>
              <div><strong>{narrative.title}</strong><small>{knowledgeCopy.phases[step.phase]}</small></div>
            </button>
          );
        })}
      </div>

      <article className="director-workflow-detail">
        <header>
          <span>{knowledgeCopy.phases[activeStep.phase]} · {workflowCopy.stepLabel} {activeStep.order}</span>
          <h3>{activeNarrative.title}</h3>
          <p>{activeNarrative.goal}</p>
        </header>
        <div className="director-workflow-columns">
          <section><h4>{workflowCopy.directorDoes}</h4><ol>{activeNarrative.actions.map((action) => <li key={action}>{action}</li>)}</ol></section>
          <section><h4>{workflowCopy.outputs}</h4><ul>{activeNarrative.outputs.map((output) => <li key={output}>{output}</li>)}</ul></section>
          <section><h4>{workflowCopy.collaborators}</h4><ul>{activeNarrative.collaborators.map((collaborator) => <li key={collaborator}>{collaborator}</li>)}</ul></section>
        </div>
        <section className="director-workflow-terms">
          <h4>{workflowCopy.terms}</h4>
          <div>
            {getDirectorTermsForWorkflowStep(activeStep).map((term) => {
              const display = getDirectorTermDisplay(language, term);
              return (
                <button key={term.id} onClick={() => onOpenTerm(term.id)} type="button">
                  <strong>{display.primaryTerm}</strong><span>{display.localizedTerm}</span>
                </button>
              );
            })}
          </div>
        </section>
      </article>
    </div>
  );
}

function TerminologyView({
  category,
  filteredTerms,
  language,
  learnedIds,
  onCategoryChange,
  onOpenTerm,
  onPhaseChange,
  onQueryChange,
  onReset,
  onToggleLearned,
  phase,
  query,
  selectedTerm,
}: {
  readonly category: DirectorKnowledgeCategoryId | "all";
  readonly filteredTerms: readonly DirectorTerm[];
  readonly language: FilmWorkLanguage;
  readonly learnedIds: ReadonlySet<string>;
  readonly onCategoryChange: (category: DirectorKnowledgeCategoryId | "all") => void;
  readonly onOpenTerm: (termId: string) => void;
  readonly onPhaseChange: (phase: DirectorKnowledgePhase | "all") => void;
  readonly onQueryChange: (query: string) => void;
  readonly onReset: () => void;
  readonly onToggleLearned: (termId: string) => void;
  readonly phase: DirectorKnowledgePhase | "all";
  readonly query: string;
  readonly selectedTerm: DirectorTerm | undefined;
}) {
  const copy = FILM_DIRECTOR_KNOWLEDGE_COPY[language];

  function changeCategory(event: ChangeEvent<HTMLSelectElement>) {
    onCategoryChange(event.target.value as DirectorKnowledgeCategoryId | "all");
  }

  function changePhase(event: ChangeEvent<HTMLSelectElement>) {
    onPhaseChange(event.target.value as DirectorKnowledgePhase | "all");
  }

  return (
    <div className="director-terminology-view">
      <section className="director-term-filters">
        <label><span>{copy.searchLabel}</span><input onChange={(event: ChangeEvent<HTMLInputElement>) => onQueryChange(event.target.value)} placeholder={copy.searchPlaceholder} type="search" value={query} /></label>
        <label><span>{copy.categoryLabel}</span><select onChange={changeCategory} value={category}><option value="all">{copy.allCategories}</option>{DIRECTOR_KNOWLEDGE_CATEGORIES.map((item) => <option key={item.id} value={item.id}>{copy.categories[item.id]}</option>)}</select></label>
        <label><span>{copy.phaseLabel}</span><select onChange={changePhase} value={phase}><option value="all">{copy.allPhases}</option>{Object.entries(copy.phases).map(([id, label]) => <option key={id} value={id}>{label}</option>)}</select></label>
        <button onClick={onReset} type="button">{copy.reset}</button>
      </section>

      <div className="director-term-browser">
        <section className="director-term-index">
          <header><strong>{filteredTerms.length}</strong><span>{copy.results}</span></header>
          <div>
            {filteredTerms.length === 0 ? <p className="director-term-no-results">{copy.noResults}</p> : filteredTerms.map((term) => {
              const display = getDirectorTermDisplay(language, term);
              return (
                <button
                  className={selectedTerm?.id === term.id ? "director-term-index-item is-active" : "director-term-index-item"}
                  key={term.id}
                  onClick={() => onOpenTerm(term.id)}
                  type="button"
                >
                  <span>{learnedIds.has(term.id) ? "✓" : "·"}</span>
                  <div><strong>{display.primaryTerm}</strong><small>{display.localizedTerm}</small></div>
                </button>
              );
            })}
          </div>
        </section>

        {selectedTerm ? (
          <TermDetail language={language} learned={learnedIds.has(selectedTerm.id)} onToggleLearned={() => onToggleLearned(selectedTerm.id)} term={selectedTerm} />
        ) : (
          <section className="director-term-detail"><h3>{copy.selectTerm}</h3></section>
        )}
      </div>
    </div>
  );
}

function TermDetail({ language, learned, onToggleLearned, term }: {
  readonly language: FilmWorkLanguage;
  readonly learned: boolean;
  readonly onToggleLearned: () => void;
  readonly term: DirectorTerm;
}) {
  const copy = FILM_DIRECTOR_KNOWLEDGE_COPY[language];
  const display = getDirectorTermDisplay(language, term);
  const sources = term.sourceIds
    .map((sourceId) => DIRECTOR_KNOWLEDGE_SOURCES.find((source) => source.id === sourceId))
    .filter((source): source is (typeof DIRECTOR_KNOWLEDGE_SOURCES)[number] => Boolean(source));

  return (
    <article className="director-term-detail">
      <header>
        <div><span>{copy.categories[term.category]} · {copy.phases[term.phase]} · {copy.levels[term.level]}</span><h3>{display.primaryTerm}</h3><p>{display.localizedTerm}</p></div>
        <button className={learned ? "is-learned" : ""} onClick={onToggleLearned} type="button">{learned ? copy.learned : copy.markLearned}</button>
      </header>
      <section><h4>{copy.definition}</h4><p>{display.definition}</p></section>
      <section><h4>{copy.directorUse}</h4><p>{display.directorUse}</p></section>
      <section className="director-term-example"><h4>{copy.example}</h4><p>{display.example}</p></section>
      <section className="director-term-sources"><h4>{copy.evidence}</h4>{sources.map((source) => <a href={source.url} key={source.id} rel="noreferrer" target="_blank"><strong>{source.organization}</strong><span>{source.label}</span></a>)}</section>
    </article>
  );
}

function KnowledgeSources({ language }: { readonly language: FilmWorkLanguage }) {
  const copy = FILM_DIRECTOR_KNOWLEDGE_COPY[language];
  return (
    <details className="director-knowledge-sources">
      <summary>{copy.sourcesSummary}</summary>
      <p>{copy.sourcesDescription}</p>
      <div>{DIRECTOR_KNOWLEDGE_SOURCES.map((source) => <a href={source.url} key={source.id} rel="noreferrer" target="_blank"><strong>{source.organization}</strong><span>{copy.sourceScopes[source.id]}</span></a>)}</div>
    </details>
  );
}

function loadLearnedTerms(): ReadonlySet<string> {
  try {
    const stored = JSON.parse(window.localStorage.getItem(LEARNED_STORAGE_KEY) ?? "[]") as unknown;
    if (!Array.isArray(stored)) return new Set();
    const validIds = new Set(DIRECTOR_TERMS.map((term) => term.id));
    return new Set(stored.filter((value): value is string => typeof value === "string" && validIds.has(value)));
  } catch {
    return new Set();
  }
}
