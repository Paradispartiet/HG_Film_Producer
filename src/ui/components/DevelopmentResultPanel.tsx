import type { DevelopmentStepResult, HistoricalExample } from "../demo/createDevelopmentStepRun.js";

interface DevelopmentResultPanelProps {
  readonly result: DevelopmentStepResult;
  readonly projectLabel?: string;
}

export function DevelopmentResultPanel({ result, projectLabel = "Film 1" }: DevelopmentResultPanelProps) {
  return (
    <section className="panel development-result-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">{projectLabel} development</span><h2>{result.pathLabel}</h2></div>
        <span className="status-pill status-pill--positive">Applied</span>
      </div>
      {result.path === "mentor" && (
        <div className="development-result-body">
          <ResultLead label="Lesson" value={result.lessonTitle} />
          <ResultCopy label="Advice" value={result.advice} />
          <ResultCopy label="Suggested action" value={result.suggestedAction} />
          <div className="result-metric-grid">
            <ResultMetric label="Unlocked technique" value={result.unlockedTechnique ?? "No technique unlock"} />
            <ResultMetric label="Project techniques" value={`${result.projectTechniqueCount}`} />
          </div>
          {result.historicalExample && <HistoricalExamplePanel example={result.historicalExample} />}
        </div>
      )}
      {result.path === "location" && (
        <div className="development-result-body">
          <ResultLead label="Selected brief" value={result.briefTitle} />
          <div className="result-metric-grid">
            <ResultMetric label="Top location" value={result.topLocation} />
            <ResultMetric label="Total score" value={`${result.totalScore} / 100`} />
            <ResultMetric label="Project locations" value={`${result.projectLocationCount}`} />
          </div>
          <ResultNotes notes={result.notes} />
        </div>
      )}
      {result.path === "script" && (
        <div className="development-result-body">
          <ResultLead label="Script" value={result.scriptTitle} />
          <div className="result-metric-grid">
            <ResultMetric label="Structure" value={result.structure} />
            <ResultMetric label="Scene count" value={`${result.sceneCount}`} />
            <ResultMetric label="Overall score" value={`${result.overallScore} / 100`} />
          </div>
          <ResultNotes notes={result.notes} />
        </div>
      )}
    </section>
  );
}

function ResultLead({ label, value }: { readonly label: string; readonly value: string }) {
  return <div className="result-lead"><span>{label}</span><strong>{value}</strong></div>;
}

function ResultCopy({ label, value }: { readonly label: string; readonly value: string }) {
  return <div className="result-copy"><span>{label}</span><p>{value}</p></div>;
}

function ResultMetric({ label, value }: { readonly label: string; readonly value: string }) {
  return <div className="result-metric"><span>{label}</span><strong>{value}</strong></div>;
}

function HistoricalExamplePanel({ example }: { readonly example: HistoricalExample }) {
  return (
    <div className="historical-example">
      <span className="section-label">Where this comes from</span>
      <strong>{example.knowledgeTitle}</strong>
      <p>{example.explanation}</p>
      <p className="historical-example-used">{example.usedInGameplay}</p>
      <div className="historical-example-film">
        <strong>{example.filmTitle} ({example.filmYear})</strong>
        <span>{example.filmDirector}{example.movementName ? ` · ${example.movementName}` : ""}</span>
        <p>{example.filmSummary}</p>
      </div>
    </div>
  );
}

function ResultNotes({ notes }: { readonly notes: readonly string[] }) {
  return (
    <div className="result-notes">
      <span className="section-label">Development notes</span>
      <ul>{notes.map((note) => <li key={note}>{note}</li>)}</ul>
    </div>
  );
}
