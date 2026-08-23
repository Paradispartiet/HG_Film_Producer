import { assessScenarioAlignment } from "../data/scenarioAlignmentScore";
import { getScenarioAlignmentSummary } from "../data/scenarioAlignmentSummary";

interface ScenarioAlignmentResultPanelProps {
  readonly selectedTargetIds: readonly string[];
  readonly totalTargets: number;
}

export function ScenarioAlignmentResultPanel({ selectedTargetIds, totalTargets }: ScenarioAlignmentResultPanelProps) {
  const feedback = assessScenarioAlignment({ selectedTargetIds, totalTargets });
  const summary = getScenarioAlignmentSummary(feedback);

  return (
    <section className="scenario-alignment-result" aria-labelledby="scenario-alignment-result-title">
      <div className="scenario-alignment-result-header">
        <div>
          <span className="eyebrow">Release reflection</span>
          <h3 id="scenario-alignment-result-title">Production case reflection</h3>
        </div>
      </div>
      <p className="scenario-alignment-result-meaning"><strong>What to review:</strong> {summary}</p>
      <p className="scenario-alignment-result-summary">Use the explanations to compare your choices with the documented film method before continuing.</p>
    </section>
  );
}
