import { useMemo, useState } from "react";
import type { ProjectShootLabel } from "../types.js";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import {
  getNextShootDay,
  getShootPreparation,
  resolveNextShootDay,
  type ShootDayStepResult,
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
  readonly shootDayResults: readonly ShootDayStepResult[];
  readonly shootResult: ShootStepResult | null;
  readonly onSelectProductionEvent: (eventId: string) => void;
  readonly onResolveShootDay: (result: ShootDayStepResult) => void;
  readonly id?: string | undefined;
}

export function ShootPanel({
  projectContext,
  projectLabel = "first film",
  developmentResult,
  preProductionResult,
  selectedProductionEventId,
  shootDayResults,
  shootResult,
  onSelectProductionEvent,
  onResolveShootDay,
  id
}: ShootPanelProps) {
  const [message, setMessage] = useState("");
  const preparation = useMemo(
    () => getShootPreparation(projectContext, developmentResult, preProductionResult),
    [projectContext, developmentResult, preProductionResult]
  );
  const numberedProject = projectLabel !== "first film";
  const displayLabel = projectLabel.replace("film", "Film");
  const totalDays = preparation.productionSchedule.shootDays.length;
  const currentDay = getNextShootDay(preparation, shootDayResults);

  function resolveDay() {
    if (!selectedProductionEventId) {
      setMessage(`Choose one production event before resolving day ${currentDay?.dayNumber ?? shootDayResults.length + 1} of the ${projectLabel} shoot.`);
      return;
    }
    setMessage("");
    onResolveShootDay(resolveNextShootDay(preparation, shootDayResults, { selectedProductionEventId }));
  }

  return (
    <section className={numberedProject ? "panel shoot-panel shoot-panel--later-project" : "panel shoot-panel"} id={id}>
      <div className="shoot-panel-heading">
        <div>
          <span className="eyebrow">{numberedProject ? `Start shoot for ${projectLabel}` : "Start shoot"}</span>
          <h2>{numberedProject ? `${displayLabel} shoot` : "On-set production desk"}</h2>
        </div>
        <p>Work through every scheduled shoot day, applying one event and resolving the result each day, for {projectLabel}.</p>
      </div>
      <ShootSchedulePanel currentDay={currentDay} preparation={preparation} projectLabel={projectLabel} resolvedDays={shootDayResults} />
      <SceneDifficultyPanel projectLabel={projectLabel} summaries={preparation.sceneDifficultySummaries} />
      {shootDayResults.map((dayResult, index) => (
        <ShootDayResultPanel dayNumber={index + 1} key={dayResult.updatedShootDay.id} preparation={preparation} projectLabel={projectLabel} result={dayResult} />
      ))}
      {currentDay && (
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
              <small>Day {currentDay.dayNumber} of {totalDays} for {projectLabel}.</small>
            </div>
            <button className="primary-button" onClick={resolveDay} type="button">Resolve day {currentDay.dayNumber}</button>
          </div>
        </>
      )}
      {shootResult && <ShootEvaluationPanel projectLabel={projectLabel} result={shootResult} />}
    </section>
  );
}
