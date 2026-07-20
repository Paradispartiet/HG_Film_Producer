import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import {
  DIRECTOR_KNOWLEDGE_CATEGORIES,
  DIRECTOR_KNOWLEDGE_SOURCES,
  DIRECTOR_TERMS,
  DIRECTOR_WORKFLOW,
  getDirectorKnowledgeCategory,
  getDirectorTerm,
  getDirectorTermsForWorkflowStep,
  searchDirectorTerms,
  type DirectorKnowledgeCategoryId,
  type DirectorKnowledgePhase,
  type DirectorTerm,
} from "../../core/directorKnowledge";

const LEARNED_STORAGE_KEY = "hg_director_knowledge_learned_v1";

type DirectorKnowledgeDeskProps = {
  readonly visible: boolean;
};

type DeskMode = "workflow" | "terminology";

const phaseLabels: Record<DirectorKnowledgePhase, string> = {
  development: "Utvikling",
  preproduction: "Forproduksjon",
  production: "Opptak",
  postproduction: "Postproduksjon",
};

const levelLabels = {
  foundation: "Grunnbegrep",
  intermediate: "Videregående",
  advanced: "Avansert",
} as const;

export function DirectorKnowledgeDesk({ visible }: DirectorKnowledgeDeskProps) {
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
        <span>Regikunnskap</span>
        <strong>{DIRECTOR_TERMS.length}</strong>
        <small>fagbegreper</small>
      </button>

      {expanded ? (
        <aside aria-label="Film Director knowledge and terminology" className="director-knowledge-desk">
          <header className="director-knowledge-header">
            <div>
              <span className="filmverket-kicker">Film Director learning system</span>
              <h2>Regissørens arbeidsmåte og filmspråk</h2>
              <p>Engelsk bransjeterm, norsk forklaring, konkret regibruk og eksempel.</p>
            </div>
            <button aria-label="Close director knowledge" onClick={() => setExpanded(false)} type="button">×</button>
          </header>

          <section className="director-knowledge-stats">
            <div><strong>{DIRECTOR_WORKFLOW.length}</strong><span>arbeidsfaser</span></div>
            <div><strong>{DIRECTOR_TERMS.length}</strong><span>fagbegreper</span></div>
            <div><strong>{learnedIds.size}</strong><span>markert lært</span></div>
            <div><strong>{learnedPercent}%</strong><span>begrepsprogresjon</span></div>
          </section>

          <nav aria-label="Director knowledge sections" className="director-knowledge-tabs">
            <button className={mode === "workflow" ? "is-active" : ""} onClick={() => setMode("workflow")} type="button">Arbeidsflyt</button>
            <button className={mode === "terminology" ? "is-active" : ""} onClick={() => setMode("terminology")} type="button">Fagterminologi</button>
          </nav>

          {mode === "workflow" ? (
            <WorkflowView onOpenTerm={openTerm} />
          ) : (
            <TerminologyView
              category={category}
              filteredTerms={filteredTerms}
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

          <KnowledgeSources />
        </aside>
      ) : null}
    </>
  );
}

function WorkflowView({ onOpenTerm }: { readonly onOpenTerm: (termId: string) => void }) {
  const [activeStepId, setActiveStepId] = useState(DIRECTOR_WORKFLOW[0]?.id ?? "");
  const activeStep = DIRECTOR_WORKFLOW.find((step) => step.id === activeStepId) ?? DIRECTOR_WORKFLOW[0];

  if (!activeStep) return null;

  return (
    <div className="director-workflow-view">
      <div className="director-workflow-rail" aria-label="Director workflow steps">
        {DIRECTOR_WORKFLOW.map((step) => (
          <button
            className={step.id === activeStep.id ? "director-workflow-step is-active" : "director-workflow-step"}
            key={step.id}
            onClick={() => setActiveStepId(step.id)}
            type="button"
          >
            <span>{String(step.order).padStart(2, "0")}</span>
            <div><strong>{step.title}</strong><small>{phaseLabels[step.phase]}</small></div>
          </button>
        ))}
      </div>

      <article className="director-workflow-detail">
        <header>
          <span>{phaseLabels[activeStep.phase]} · trinn {activeStep.order}</span>
          <h3>{activeStep.title}</h3>
          <p>{activeStep.goal}</p>
        </header>
        <div className="director-workflow-columns">
          <section><h4>Regissøren gjør</h4><ol>{activeStep.actions.map((action) => <li key={action}>{action}</li>)}</ol></section>
          <section><h4>Arbeidsresultater</h4><ul>{activeStep.outputs.map((output) => <li key={output}>{output}</li>)}</ul></section>
          <section><h4>Samarbeider med</h4><ul>{activeStep.collaborators.map((collaborator) => <li key={collaborator}>{collaborator}</li>)}</ul></section>
        </div>
        <section className="director-workflow-terms">
          <h4>Begreper du må kunne i dette trinnet</h4>
          <div>
            {getDirectorTermsForWorkflowStep(activeStep).map((term) => (
              <button key={term.id} onClick={() => onOpenTerm(term.id)} type="button">
                <strong>{term.term}</strong><span>{term.norwegian}</span>
              </button>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

function TerminologyView({
  category,
  filteredTerms,
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
  function changeCategory(event: ChangeEvent<HTMLSelectElement>) {
    onCategoryChange(event.target.value as DirectorKnowledgeCategoryId | "all");
  }

  function changePhase(event: ChangeEvent<HTMLSelectElement>) {
    onPhaseChange(event.target.value as DirectorKnowledgePhase | "all");
  }

  return (
    <div className="director-terminology-view">
      <section className="director-term-filters">
        <label><span>Søk i begreper og forklaringer</span><input onChange={(event) => onQueryChange(event.target.value)} placeholder="Eksempel: blocking, nærbilde, lydperspektiv…" type="search" value={query} /></label>
        <label><span>Fagområde</span><select onChange={changeCategory} value={category}><option value="all">Alle fagområder</option>{DIRECTOR_KNOWLEDGE_CATEGORIES.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
        <label><span>Produksjonsfase</span><select onChange={changePhase} value={phase}><option value="all">Alle faser</option>{Object.entries(phaseLabels).map(([id, label]) => <option key={id} value={id}>{label}</option>)}</select></label>
        <button onClick={onReset} type="button">Nullstill</button>
      </section>

      <div className="director-term-browser">
        <section className="director-term-index">
          <header><strong>{filteredTerms.length}</strong><span>treff</span></header>
          <div>
            {filteredTerms.length === 0 ? <p className="director-term-no-results">Ingen begreper matcher filtrene.</p> : filteredTerms.map((term) => (
              <button
                className={selectedTerm?.id === term.id ? "director-term-index-item is-active" : "director-term-index-item"}
                key={term.id}
                onClick={() => onOpenTerm(term.id)}
                type="button"
              >
                <span>{learnedIds.has(term.id) ? "✓" : "·"}</span>
                <div><strong>{term.term}</strong><small>{term.norwegian}</small></div>
              </button>
            ))}
          </div>
        </section>

        {selectedTerm ? (
          <TermDetail learned={learnedIds.has(selectedTerm.id)} onToggleLearned={() => onToggleLearned(selectedTerm.id)} term={selectedTerm} />
        ) : (
          <section className="director-term-detail"><h3>Velg et fagbegrep</h3></section>
        )}
      </div>
    </div>
  );
}

function TermDetail({ learned, onToggleLearned, term }: {
  readonly learned: boolean;
  readonly onToggleLearned: () => void;
  readonly term: DirectorTerm;
}) {
  const category = getDirectorKnowledgeCategory(term.category);
  const sources = term.sourceIds
    .map((sourceId) => DIRECTOR_KNOWLEDGE_SOURCES.find((source) => source.id === sourceId))
    .filter((source): source is (typeof DIRECTOR_KNOWLEDGE_SOURCES)[number] => Boolean(source));

  return (
    <article className="director-term-detail">
      <header>
        <div><span>{category?.label} · {phaseLabels[term.phase]} · {levelLabels[term.level]}</span><h3>{term.term}</h3><p>{term.norwegian}</p></div>
        <button className={learned ? "is-learned" : ""} onClick={onToggleLearned} type="button">{learned ? "✓ Lært" : "Marker som lært"}</button>
      </header>
      <section><h4>Definisjon</h4><p>{term.definition}</p></section>
      <section><h4>Hvorfor regissøren trenger begrepet</h4><p>{term.directorUse}</p></section>
      <section className="director-term-example"><h4>Eksempel</h4><p>{term.example}</p></section>
      <section className="director-term-sources"><h4>Faglig grunnlag</h4>{sources.map((source) => <a href={source.url} key={source.id} rel="noreferrer" target="_blank"><strong>{source.organization}</strong><span>{source.label}</span></a>)}</section>
    </article>
  );
}

function KnowledgeSources() {
  return (
    <details className="director-knowledge-sources">
      <summary>Kilder og redaksjonell metode</summary>
      <p>Begrepene er skrevet for Filmverket og kontrollert mot profesjonelle fagorganisasjoner, produsent- og kameraressurser. De er forklaringer, ikke kopiert ordlyd.</p>
      <div>{DIRECTOR_KNOWLEDGE_SOURCES.map((source) => <a href={source.url} key={source.id} rel="noreferrer" target="_blank"><strong>{source.organization}</strong><span>{source.scope}</span></a>)}</div>
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
