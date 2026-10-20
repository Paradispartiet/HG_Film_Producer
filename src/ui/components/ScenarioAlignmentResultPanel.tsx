import { PRODUCTION_CASE_REFLECTION_COPY } from "../../core/productionCaseReflectionCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { assessScenarioAlignment } from "../data/scenarioAlignmentScore";

interface ScenarioAlignmentResultPanelProps {
  readonly selectedTargetIds: readonly string[];
  readonly totalTargets: number;
}

export function ScenarioAlignmentResultPanel({ selectedTargetIds, totalTargets }: ScenarioAlignmentResultPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = PRODUCTION_CASE_REFLECTION_COPY[language];
  const feedback = assessScenarioAlignment({ selectedTargetIds, totalTargets });
  const summary = copy.alignment.summaries[feedback.assessment];

  return (
    <section className="scenario-alignment-result" aria-labelledby="scenario-alignment-result-title">
      <div className="scenario-alignment-result-header">
        <div>
          <span className="eyebrow">{copy.result.eyebrow}</span>
          <h3 id="scenario-alignment-result-title">{copy.result.heading}</h3>
        </div>
      </div>
      <p className="scenario-alignment-result-meaning"><strong>{copy.result.whatToReview}</strong> {summary}</p>
      <p className="scenario-alignment-result-summary">{copy.result.note}</p>
    </section>
  );
}
