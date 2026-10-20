import { PRODUCTION_CASE_REFLECTION_COPY } from "../../core/productionCaseReflectionCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { assessScenarioAlignment } from "../data/scenarioAlignmentScore";

interface ScenarioAlignmentScorePanelProps {
  readonly selectedTargetIds: readonly string[];
  readonly totalTargets: number;
}

export function ScenarioAlignmentScorePanel({ selectedTargetIds, totalTargets }: ScenarioAlignmentScorePanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = PRODUCTION_CASE_REFLECTION_COPY[language].alignment;
  const feedback = assessScenarioAlignment({ selectedTargetIds, totalTargets });
  const summary = copy.summaries[feedback.assessment];

  return (
    <section className="scenario-alignment-panel" aria-labelledby="scenario-alignment-title">
      <div className="scenario-alignment-header">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h3 id="scenario-alignment-title">{copy.heading}</h3>
        </div>
      </div>
      <p>{summary}</p>
      <p className="scenario-alignment-meta">{copy.note}</p>
    </section>
  );
}
