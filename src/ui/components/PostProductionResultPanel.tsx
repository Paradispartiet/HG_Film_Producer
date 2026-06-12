import type { PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import { formatMoney } from "./PostDecisionCard.js";
import { TestScreeningPanel } from "./TestScreeningPanel.js";
import type { ProjectPostProductionLabel } from "../types.js";

interface PostProductionResultPanelProps {
  readonly result: PostProductionStepResult;
  readonly projectLabel?: ProjectPostProductionLabel;
}

export function PostProductionResultPanel({ result, projectLabel = "first film" }: PostProductionResultPanelProps) {
  const evaluation = result.postProductionEvaluation;
  const metrics = [
    ["Edit", `${evaluation.editScore}`], ["Sound", `${evaluation.soundScore}`], ["Music", `${evaluation.musicScore}`],
    ["Color", `${evaluation.colorScore}`], ["Test screening", `${evaluation.testScreeningScore}`], ["Trailer", `${evaluation.trailerScore}`],
    ["Locked cut", `${evaluation.lockedCutQuality}`], ["Overall", `${evaluation.overall}`]
  ] as const;
  const decisions = Object.values(result.appliedDecisions);
  const isSecondFilm = projectLabel === "film 2";
  return (
    <section className={`panel post-production-result-panel${isSecondFilm ? " post-production-result-panel--second-project" : ""}`}>
      <div className="post-panel-heading"><div><span className="eyebrow">{isSecondFilm ? "Film 2 post-production locked" : "Post-production locked"}</span><h2>{isSecondFilm ? "Film 2 finishing report" : "Finishing report"}</h2></div><div className="locked-cut-score"><span>Overall</span><strong>{evaluation.overall}</strong></div></div>
      <div className="applied-decision-grid">{decisions.map((decision) => <div key={decision.title}><span>{formatMoney(decision.cost)}</span><strong>{decision.title}</strong><p>{formatStats(decision.statChanges)}</p></div>)}</div>
      <TestScreeningPanel result={result.testScreeningResult} />
      <section className="post-result-section">
        <div className="post-section-heading"><div><span className="eyebrow">Final evaluation</span><h3>Locked-cut scorecard</h3></div><p>Total finishing cost {formatMoney(evaluation.totalCost)}</p></div>
        <div className="post-metric-grid post-metric-grid--wide">{metrics.map(([label, value]) => <div className="post-metric" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        <ul className="post-note-list">{evaluation.notes.map((note) => <li key={note}>{note}</li>)}<li>{result.trailerCutResult.note}</li></ul>
        <div className="next-step-strip"><span>Next step</span><strong>{isSecondFilm ? "Next step: release film 2" : "Release is next, but is not part of this playable step."}</strong></div>
      </section>
    </section>
  );
}
function formatStats(changes: Readonly<Partial<Record<string, number>>>): string {
  return Object.entries(changes).map(([stat, value]) => `${stat.replace(/([A-Z])/g, " $1")} ${value !== undefined && value >= 0 ? "+" : ""}${value}`).join(" · ");
}
