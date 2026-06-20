import { calculateScenarioAlignmentScore } from "../data/scenarioAlignmentScore";
import { createScenarioLearningRecap } from "../data/scenarioLearningRecap";
import type { ScenarioProductionBrief } from "../data/scenarioProductionBriefs";
import { createScenarioTargetChecklist } from "../data/scenarioTargetChecklist";

interface ScenarioLearningRecapPanelProps {
  readonly scenarioTitle: string;
  readonly brief: ScenarioProductionBrief;
  readonly selectedTargetIds: readonly string[];
}

export function ScenarioLearningRecapPanel({ scenarioTitle, brief, selectedTargetIds }: ScenarioLearningRecapPanelProps) {
  const checklist = createScenarioTargetChecklist(brief);
  const selectedTargetIdSet = new Set(selectedTargetIds);
  const selectedTargetLabels = checklist.filter((target) => selectedTargetIdSet.has(target.id)).map((target) => target.label);
  const unselectedTargetLabels = checklist.filter((target) => !selectedTargetIdSet.has(target.id)).map((target) => target.label);
  const alignmentScore = calculateScenarioAlignmentScore({ selectedTargetIds, totalTargets: checklist.length });
  const recap = createScenarioLearningRecap({
    scenarioTitle,
    verificationStatus: brief.verificationStatus,
    selectedTargetLabels,
    unselectedTargetLabels,
    alignmentTier: alignmentScore.tier
  });

  return (
    <section className="scenario-learning-recap" aria-labelledby="scenario-learning-recap-title">
      <div className="scenario-learning-header">
        <div>
          <span className="eyebrow">Scenario learning recap</span>
          <h3 id="scenario-learning-recap-title">{recap.title}</h3>
        </div>
        <span>{scenarioTitle}</span>
      </div>
      <p>{recap.intro}</p>
      <div className="scenario-learning-grid">
        <div className="scenario-learning-section">
          <h4>You practiced</h4>
          <ul className="scenario-learning-list">
            {recap.learned.map((item) => <li key={`learned-${item}`}>{item}</li>)}
          </ul>
        </div>
        <div className="scenario-learning-section">
          <h4>Next focus</h4>
          <ul className="scenario-learning-list">
            {recap.nextFocus.map((item) => <li key={`next-${item}`}>{item}</li>)}
          </ul>
        </div>
      </div>
      <p className="scenario-learning-note">{recap.verificationNote}</p>
    </section>
  );
}
