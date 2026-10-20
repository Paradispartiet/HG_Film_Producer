import { presentSeedFallbackText } from "../../core/productionCaseSeedPresentation";
import { PRODUCTION_CASE_REFLECTION_COPY } from "../../core/productionCaseReflectionCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { createScenarioPhaseGuidance, type ScenarioProductionPhase } from "../data/scenarioPhaseGuidance";
import type { ScenarioProductionBrief } from "../data/scenarioProductionBriefs";

interface ScenarioPhaseGuidancePanelProps {
  readonly brief: ScenarioProductionBrief;
  readonly currentPhase: number;
}

const phaseByPipelineStep: readonly ScenarioProductionPhase[] = [
  "development",
  "pre_production",
  "shoot",
  "post_production",
  "release"
];

export function ScenarioPhaseGuidancePanel({ brief, currentPhase }: ScenarioPhaseGuidancePanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = PRODUCTION_CASE_REFLECTION_COPY[language].phases;
  const guidance = createScenarioPhaseGuidance(brief);
  const isProductionCase = brief.briefType === "production_case";
  const activePhase = phaseByPipelineStep[currentPhase] ?? "release";

  return (
    <section className="scenario-phase-guidance" aria-labelledby="scenario-phase-guidance-title">
      <div className="scenario-phase-header">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h3 id="scenario-phase-guidance-title">{copy.heading}</h3>
        </div>
        <p>{copy.intro}</p>
      </div>
      <div className="scenario-phase-grid">
        {guidance.map((phase) => (
          <article
            className={phase.phase === activePhase ? "scenario-phase-card scenario-phase-card--active" : "scenario-phase-card"}
            key={phase.phase}
          >
            <h4>{(isProductionCase ? copy.caseTitles : copy.seedTitles)[phase.phase]}</h4>
            <p>{isProductionCase
              ? (phase.phase === "shoot" ? copy.caseShootDescription : phase.description)
              : copy.seedDescriptions[phase.phase]}</p>
            {phase.targets.length > 0 ? (
              <ul className="scenario-phase-targets">
                {phase.targets.map((target, index) => <li key={`${phase.phase}-${index}-${target}`}>{presentSeedFallbackText(language, brief.briefType, target)}</li>)}
              </ul>
            ) : <p className="scenario-phase-empty">{copy.noTargets}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
