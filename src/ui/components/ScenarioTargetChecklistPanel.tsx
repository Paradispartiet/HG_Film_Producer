import { useMemo } from "react";
import type { ScenarioProductionBrief } from "../data/scenarioProductionBriefs";
import {
  createScenarioTargetChecklist,
  getScenarioTargetCategoryLabel,
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
          <span className="eyebrow">Film-craft comparison</span>
          <h3 id="scenario-target-title">Production method checklist</h3>
          <p>
            Mark the film methods you want to compare while studying this case.
            These notes guide reflection and do not create a score or rank.
          </p>
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
              <h4>{getScenarioTargetCategoryLabel(category)}</h4>
              <div className="scenario-target-list">
                {targets.map((target) => (
                  <label className="scenario-target-item" key={target.id}>
                    <input
                      checked={selectedTargetIds.includes(target.id)}
                      onChange={() => toggleTarget(target.id)}
                      type="checkbox"
                    />
                    <span>{target.label}</span>
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
