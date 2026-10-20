import { presentFilmCaseContent } from "../../core/productionCaseFilmStatementCopy";
import { PRODUCTION_CASE_REFLECTION_COPY } from "../../core/productionCaseReflectionCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { useMemo } from "react";
import type { ScenarioProductionBrief } from "../data/scenarioProductionBriefs";
import {
  createScenarioTargetChecklist,
  type ScenarioTargetCategory,
} from "../data/scenarioTargetChecklist";

const categories: readonly ScenarioTargetCategory[] = [
  "genre",
  "tone",
  "screenplay",
  "cinematography",
  "editing",
  "sound",
  "learning",
];

interface ScenarioTargetChecklistPanelProps {
  readonly brief: ScenarioProductionBrief;
  readonly selectedTargetIds: readonly string[];
  readonly onChangeSelectedTargetIds: (targetIds: readonly string[]) => void;
}

export function ScenarioTargetChecklistPanel({
  brief,
  selectedTargetIds,
  onChangeSelectedTargetIds,
}: ScenarioTargetChecklistPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = PRODUCTION_CASE_REFLECTION_COPY[language].checklist;
  const checklist = useMemo(
    () => createScenarioTargetChecklist(brief),
    [brief],
  );

  function toggleTarget(targetId: string) {
    onChangeSelectedTargetIds(
      selectedTargetIds.includes(targetId)
        ? selectedTargetIds.filter((id) => id !== targetId)
        : [...selectedTargetIds, targetId],
    );
  }

  return (
    <section
      className="scenario-target-panel"
      aria-labelledby="scenario-target-title"
    >
      <div className="scenario-target-header">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h3 id="scenario-target-title">{copy.heading}</h3>
          <p>{copy.intro}</p>
        </div>
      </div>
      <div className="scenario-target-grid">
        {categories.map((category) => {
          const targets = checklist.filter(
            (target) => target.category === category,
          );
          if (targets.length === 0) return null;
          return (
            <section className="scenario-target-category" key={category}>
              <h4>{copy.categories[category]}</h4>
              <div className="scenario-target-list">
                {targets.map((target) => (
                  <label className="scenario-target-item" key={target.id}>
                    <input
                      checked={selectedTargetIds.includes(target.id)}
                      onChange={() => toggleTarget(target.id)}
                      type="checkbox"
                    />
                    <span>{presentFilmCaseContent(language, brief.briefType, brief.scenarioId, target.label)}</span>
                  </label>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
