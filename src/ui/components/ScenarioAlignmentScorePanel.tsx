import { calculateScenarioAlignmentScore } from "../data/scenarioAlignmentScore";

interface ScenarioAlignmentScorePanelProps {
  readonly selectedTargetIds: readonly string[];
  readonly totalTargets: number;
}

export function ScenarioAlignmentScorePanel({ selectedTargetIds, totalTargets }: ScenarioAlignmentScorePanelProps) {
  const score = calculateScenarioAlignmentScore({ selectedTargetIds, totalTargets });

  return (
    <section className="scenario-alignment-panel" aria-labelledby="scenario-alignment-title">
      <div className="scenario-alignment-header">
        <div>
          <span className="eyebrow">Production intent</span>
          <h3 id="scenario-alignment-title">Classic alignment</h3>
        </div>
        <span className="scenario-alignment-badge">{score.tier}</span>
      </div>
      <div className="scenario-alignment-score">{score.percentage}%</div>
      <p>{score.label}</p>
      <p className="scenario-alignment-meta">{score.selectedCount} / {score.totalCount} targets selected</p>
    </section>
  );
}
