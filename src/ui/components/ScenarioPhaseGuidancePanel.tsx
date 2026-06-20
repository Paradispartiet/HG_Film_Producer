import { createScenarioPhaseGuidance, type ScenarioProductionPhase } from "../data/scenarioPhaseGuidance";
import type { ScenarioProductionBrief } from "../data/scenarioProductionBriefs";

interface ScenarioPhaseGuidancePanelProps {
  readonly brief: ScenarioProductionBrief;
  readonly currentPhase: number;
}

const phaseByPipelineStep: readonly ScenarioProductionPhase[] = [
  "development",
  "development",
  "pre_production",
  "shoot",
  "post_production",
  "release"
];

export function ScenarioPhaseGuidancePanel({ brief, currentPhase }: ScenarioPhaseGuidancePanelProps) {
  const guidance = createScenarioPhaseGuidance(brief);
  const activePhase = phaseByPipelineStep[currentPhase] ?? "release";

  return (
    <section className="scenario-phase-guidance" aria-labelledby="scenario-phase-guidance-title">
      <div className="scenario-phase-header">
        <div>
          <span className="eyebrow">Production roadmap</span>
          <h3 id="scenario-phase-guidance-title">Scenario phase guidance</h3>
        </div>
        <p>Use the classic brief as phase-by-phase production intent.</p>
      </div>
      <div className="scenario-phase-grid">
        {guidance.map((phase) => (
          <article
            className={phase.phase === activePhase ? "scenario-phase-card scenario-phase-card--active" : "scenario-phase-card"}
            key={phase.phase}
          >
            <h4>{phase.title}</h4>
            <p>{phase.description}</p>
            {phase.targets.length > 0 ? (
              <ul className="scenario-phase-targets">
                {phase.targets.map((target, index) => <li key={`${phase.phase}-${index}-${target}`}>{target}</li>)}
              </ul>
            ) : <p className="scenario-phase-empty">No specific targets for this phase yet.</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
