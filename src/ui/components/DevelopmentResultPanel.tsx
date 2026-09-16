import { STUDIO_CAREER_DEVELOPMENT_COPY } from "../../core/studioCareerDevelopmentCopy.js";
import type { DevelopmentStepResult, HistoricalExample } from "../demo/createDevelopmentStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface DevelopmentResultPanelProps {
  readonly results: readonly DevelopmentStepResult[];
  readonly projectLabel?: string;
}

export function DevelopmentResultPanel({ results, projectLabel = "Film 1" }: DevelopmentResultPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DEVELOPMENT_COPY[language];

  return (
    <section className="panel development-result-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">{copy.panel.eyebrow(projectLabel)}</span><h2>{copy.result.actionsApplied(results.length)}</h2></div>
        <span className="status-pill status-pill--positive">{copy.panel.applied}</span>
      </div>
      {results.map((result) => <DevelopmentActionResult key={result.path} result={result} />)}
    </section>
  );
}

function DevelopmentActionResult({ result }: { readonly result: DevelopmentStepResult }) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DEVELOPMENT_COPY[language];

  return (
    <div className="development-result-body">
      <ResultLead label={copy.paths[result.path].title} value={result.path === "mentor" ? result.lessonTitle : result.path === "location" ? result.briefTitle : result.scriptTitle} />
      {result.path === "mentor" && (
        <>
          <ResultCopy label={copy.result.advice} value={result.advice} />
          <ResultCopy label={copy.result.suggestedAction} value={result.suggestedAction} />
          <div className="result-metric-grid">
            <ResultMetric label={copy.result.unlockedTechnique} value={result.unlockedTechnique ?? copy.result.noTechniqueUnlock} />
            <ResultMetric label={copy.result.projectTechniques} value={`${result.projectTechniqueCount}`} />
          </div>
          {result.historicalExample && <HistoricalExamplePanel example={result.historicalExample} />}
        </>
      )}
      {result.path === "location" && (
        <>
          <div className="result-metric-grid">
            <ResultMetric label={copy.result.topLocation} value={result.topLocation} />
            <ResultMetric label={copy.result.totalScore} value={`${result.totalScore} / 100`} />
            <ResultMetric label={copy.result.projectLocations} value={`${result.projectLocationCount}`} />
          </div>
          <ResultNotes notes={result.notes} />
        </>
      )}
      {result.path === "script" && (
        <>
          <div className="result-metric-grid">
            <ResultMetric label={copy.result.structure} value={result.structure} />
            <ResultMetric label={copy.result.sceneCount} value={`${result.sceneCount}`} />
            <ResultMetric label={copy.result.overallScore} value={`${result.overallScore} / 100`} />
          </div>
          <ResultNotes notes={result.notes} />
        </>
      )}
    </div>
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
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DEVELOPMENT_COPY[language].result;

  return (
    <div className="historical-example">
      <span className="section-label">{copy.whereThisComesFrom}</span>
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
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DEVELOPMENT_COPY[language].result;

  return (
    <div className="result-notes">
      <span className="section-label">{copy.developmentNotes}</span>
      <ul>{notes.map((note) => <li key={note}>{note}</li>)}</ul>
    </div>
  );
}
