import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";

interface DevelopmentResultPanelProps {
  readonly result: DevelopmentStepResult;
}

export function DevelopmentResultPanel({ result }: DevelopmentResultPanelProps) {
  return (
    <section className="panel development-result-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">Development complete</span><h2>{result.pathLabel}</h2></div>
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

function ResultNotes({ notes }: { readonly notes: readonly string[] }) {
  return (
    <div className="result-notes">
      <span className="section-label">Development notes</span>
      <ul>{notes.map((note) => <li key={note}>{note}</li>)}</ul>
    </div>
  );
}
