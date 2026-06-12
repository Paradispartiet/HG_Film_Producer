import { useMemo, useState } from "react";
import type { ProjectShootLabel } from "../types.js";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import {
  createShootStepResult,
  getShootPreparation,
  type ShootStepResult
} from "../demo/createShootStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import { ProductionEventPanel } from "./ProductionEventPanel.js";
import { SceneDifficultyPanel } from "./SceneDifficultyPanel.js";
import { ShootDayResultPanel } from "./ShootDayResultPanel.js";
import { ShootEvaluationPanel } from "./ShootEvaluationPanel.js";
import { ShootSchedulePanel } from "./ShootSchedulePanel.js";

interface ShootPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly projectLabel?: ProjectShootLabel;
  readonly developmentResult: DevelopmentStepResult;
  readonly preProductionResult: PreProductionStepResult;
  readonly selectedProductionEventId: string;
  readonly shootResult: ShootStepResult | null;
  readonly onSelectProductionEvent: (eventId: string) => void;
  readonly onResolveShootDay: (result: ShootStepResult) => void;
}

export function ShootPanel({
  projectContext,
  projectLabel = "first film",
  developmentResult,
  preProductionResult,
  selectedProductionEventId,
  shootResult,
  onSelectProductionEvent,
  onResolveShootDay
}: ShootPanelProps) {
  const [message, setMessage] = useState("");
  const preparation = useMemo(
    () => getShootPreparation(projectContext, developmentResult, preProductionResult),
    [projectContext, developmentResult, preProductionResult]
  );
  const isSecondProject = projectLabel === "film 2";

  function resolveDay() {
    if (!selectedProductionEventId) {
      setMessage(`Choose one production event before resolving the ${projectLabel} shoot day.`);
      return;
    }
    setMessage("");
    onResolveShootDay(createShootStepResult(preparation, { selectedProductionEventId }));
  }

  return (
    <section className={isSecondProject ? "panel shoot-panel shoot-panel--second-project" : "panel shoot-panel"}>
      <div className="shoot-panel-heading">
        <div>
          <span className="eyebrow">{isSecondProject ? "Start shoot for film 2" : "Start shoot"}</span>
          <h2>{isSecondProject ? "Film 2 on-set production desk" : "On-set production desk"}</h2>
        </div>
        <p>Schedule the first day, apply one event and resolve the first playable shoot result for {projectLabel}.</p>
      </div>
      <ShootSchedulePanel preparation={preparation} projectLabel={projectLabel} result={shootResult} />
      <SceneDifficultyPanel projectLabel={projectLabel} summaries={preparation.sceneDifficultySummaries} />
      {!shootResult && (
        <>
          <ProductionEventPanel
            inputName={`${projectContext.filmProjectState.id}-production-event`}
            onSelect={(eventId) => { onSelectProductionEvent(eventId); setMessage(""); }}
            options={preparation.availableProductionEvents}
            projectLabel={projectLabel}
            selectedProductionEventId={selectedProductionEventId}
          />
          <div className="shoot-actions">
            <div>
              <span className={message ? "inline-message inline-message--error" : "inline-message"} role="status">
                {message || (selectedProductionEventId ? "Production event selected. Ready to resolve." : "Select one production event to continue.")}
              </span>
              <small>This {projectLabel} step stops after one resolved shoot day.</small>
            </div>
            <button className="primary-button" onClick={resolveDay} type="button">Resolve {projectLabel} shoot day</button>
          </div>
        </>
      )}
      {shootResult && (
        <>
          <ShootDayResultPanel preparation={preparation} projectLabel={projectLabel} result={shootResult} />
          <ShootEvaluationPanel projectLabel={projectLabel} result={shootResult} />
        </>
      )}
    </section>
  );
}
