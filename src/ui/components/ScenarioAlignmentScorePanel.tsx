import { assessScenarioAlignment } from "../data/scenarioAlignmentScore";
import { getScenarioAlignmentSummary } from "../data/scenarioAlignmentSummary";

interface ScenarioAlignmentScorePanelProps {
  readonly selectedTargetIds: readonly string[];
  readonly totalTargets: number;
}

export function ScenarioAlignmentScorePanel({ selectedTargetIds, totalTargets }: ScenarioAlignmentScorePanelProps) {
  const feedback = assessScenarioAlignment({ selectedTargetIds, totalTargets });
  const summary = getScenarioAlignmentSummary(feedback);

  return (
    <section className="scenario-alignment-panel" aria-labelledby="scenario-alignment-title">
      <div className="scenario-alignment-header">
        <div>
          <span className="eyebrow">Production intent</span>
          <h3 id="scenario-alignment-title">Compare the method</h3>
        </div>
      </div>
      <p>{summary}</p>
      <p className="scenario-alignment-meta">Use the film-specific explanations to understand why an approach fits, partly fits or should be reconsidered.</p>
    </section>
  );
}
