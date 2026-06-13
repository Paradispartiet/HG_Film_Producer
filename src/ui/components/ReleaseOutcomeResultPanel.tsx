import type { ReleaseOutcomeEvaluation, ReleaseStrategyScore } from "../../domain/release.js";
import type { ProjectReleaseLabel } from "../types.js";

interface ReleaseOutcomeResultPanelProps {
  readonly evaluation: ReleaseOutcomeEvaluation;
  readonly strategyScore: ReleaseStrategyScore;
  readonly projectLabel: ProjectReleaseLabel;
}

export function ReleaseOutcomeResultPanel({ evaluation, strategyScore, projectLabel }: ReleaseOutcomeResultPanelProps) {
  const scores = [
    ["Strategy", evaluation.strategyScore], ["Festival", evaluation.festivalScore], ["Reviews", evaluation.reviewScore],
    ["Audience", evaluation.audienceScore], ["Revenue", evaluation.revenueScore], ["Awards", evaluation.awardsScore]
  ] as const;
  return (
    <section className="release-outcome-panel">
      <div className="release-outcome-hero"><div><span className="eyebrow">Final release evaluation</span><h3>{formatProjectLabel(projectLabel)} released</h3><p>{getNextStepLabel(projectLabel)}</p></div><div className="release-overall"><span>Overall</span><strong>{evaluation.overall}</strong><small>/100</small></div></div>
      <div className="release-score-grid">{scores.map(([label, score]) => <div key={label}><span>{label}</span><strong>{score}</strong><div><i style={{ width: `${score}%` }} /></div></div>)}</div>
      <div className="release-impact-grid"><Impact label="Reputation delta" value={signed(evaluation.reputationDelta)} /><Impact label="Prestige delta" value={signed(evaluation.prestigeDelta)} /><Impact label="Audience fit" value={`${strategyScore.audienceFit}/100`} /><Impact label="Risk fit" value={`${strategyScore.riskFit}/100`} /></div>
      <ul className="release-note-list">{[...strategyScore.notes, ...evaluation.notes].map((note) => <li key={note}>{note}</li>)}</ul>
    </section>
  );
}
function Impact({ label, value }: { readonly label: string; readonly value: string }) { return <div><span>{label}</span><strong>{value}</strong></div>; }
function signed(value: number): string { return value >= 0 ? `+${value}` : String(value); }

function formatProjectLabel(projectLabel: ProjectReleaseLabel): string {
  return projectLabel.charAt(0).toUpperCase() + projectLabel.slice(1);
}

function getNextStepLabel(projectLabel: ProjectReleaseLabel): string {
  return projectLabel === "film 2"
    ? "Next step: apply film 2 to studio/career"
    : "The release is resolved. Apply this result to the studio and career to close the film year.";
}
