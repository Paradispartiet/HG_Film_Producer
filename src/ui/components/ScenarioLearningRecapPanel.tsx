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
  const matchedTargetCount = selectedTargetLabels.length;
  const missingTargetCount = unselectedTargetLabels.length;
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
          <span className="eyebrow">Post-case learning</span>
          <h3 id="scenario-learning-recap-title">Case report</h3>
        </div>
        <span>{scenarioTitle}</span>
      </div>
      <p className="scenario-learning-intro"><strong>{recap.title}.</strong> {recap.intro}</p>
      <div className="scenario-learning-counts" aria-label="Production target counts">
        <span><strong>Matched targets:</strong> {matchedTargetCount}</span>
        <span><strong>Missing targets:</strong> {missingTargetCount}</span>
      </div>
      <div className="scenario-learning-grid">
        <div className="scenario-learning-section">
          <h4>What you matched</h4>
          {matchedTargetCount > 0 ? (
            <ul className="scenario-learning-list">
              {recap.learned.map((item) => <li key={`learned-${item}`}>{item}</li>)}
            </ul>
          ) : (
            <p className="scenario-learning-empty">You did not match a production target yet.</p>
          )}
        </div>
        <div className="scenario-learning-section">
          <h4>Improve next</h4>
          {missingTargetCount > 0 ? (
            <ul className="scenario-learning-list">
              {recap.nextFocus.map((item) => <li key={`next-${item}`}>{item}</li>)}
            </ul>
          ) : (
            <p className="scenario-learning-empty">All available targets matched.</p>
          )}
        </div>
      </div>
      <p className="scenario-learning-replay">Replay the case and focus on the missing craft targets to improve your best result.</p>
      <p className="scenario-learning-note">{recap.verificationNote}</p>
    </section>
  );
}
