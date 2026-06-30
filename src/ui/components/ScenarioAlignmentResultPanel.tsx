import { calculateScenarioAlignmentScore } from "../data/scenarioAlignmentScore";
import { getScenarioAlignmentSummary } from "../data/scenarioAlignmentSummary";

interface ScenarioAlignmentResultPanelProps {
  readonly selectedTargetIds: readonly string[];
  readonly totalTargets: number;
}

const resultMeaningByTier = {
  none: "You released the film, but did not lock onto the production case yet.",
  loose: "You found parts of the case, but the production logic is still broad.",
  focused: "You built a recognizable production direction.",
  strong: "You closely matched the production case’s craft direction."
} as const;

export function ScenarioAlignmentResultPanel({ selectedTargetIds, totalTargets }: ScenarioAlignmentResultPanelProps) {
  const score = calculateScenarioAlignmentScore({ selectedTargetIds, totalTargets });
  const summary = getScenarioAlignmentSummary(score);

  return (
    <section className="scenario-alignment-result" aria-labelledby="scenario-alignment-result-title">
      <div className="scenario-alignment-result-header">
        <div>
          <span className="eyebrow">Release consequence</span>
          <h3 id="scenario-alignment-result-title">Production case result</h3>
        </div>
        <div className="scenario-alignment-result-badges" aria-label={`Result tier: ${score.tier}. Result label: ${score.label}`}>
          <span className="scenario-alignment-result-badge">{score.tier}</span>
          <span className="scenario-alignment-result-label">{score.label}</span>
        </div>
      </div>
      <div className="scenario-alignment-result-score">{score.percentage}%</div>
      <p className="scenario-alignment-result-meaning"><strong>Result meaning:</strong> {resultMeaningByTier[score.tier]}</p>
      <p className="scenario-alignment-result-summary">{summary}</p>
      <p className="scenario-alignment-meta">{score.selectedCount} / {score.totalCount} targets selected</p>
    </section>
  );
}
