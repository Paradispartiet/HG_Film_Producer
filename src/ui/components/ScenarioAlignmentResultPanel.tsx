import { calculateScenarioAlignmentScore } from "../data/scenarioAlignmentScore";
import { getScenarioAlignmentSummary } from "../data/scenarioAlignmentSummary";

interface ScenarioAlignmentResultPanelProps {
  readonly selectedTargetIds: readonly string[];
  readonly totalTargets: number;
}

export function ScenarioAlignmentResultPanel({ selectedTargetIds, totalTargets }: ScenarioAlignmentResultPanelProps) {
  const score = calculateScenarioAlignmentScore({ selectedTargetIds, totalTargets });
  const summary = getScenarioAlignmentSummary(score);

  return (
    <section className="scenario-alignment-result" aria-labelledby="scenario-alignment-result-title">
      <div className="scenario-alignment-result-header">
        <div>
          <span className="eyebrow">Release consequence</span>
          <h3 id="scenario-alignment-result-title">Classic scenario result</h3>
        </div>
        <span className="scenario-alignment-result-badge">{score.tier}</span>
      </div>
      <div className="scenario-alignment-result-score">{score.percentage}%</div>
      <p className="scenario-alignment-result-summary">{summary}</p>
      <p className="scenario-alignment-meta">{score.selectedCount} / {score.totalCount} targets selected</p>
    </section>
  );
}
