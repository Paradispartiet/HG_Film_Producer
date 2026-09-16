import { useMemo } from "react";
import { STUDIO_CAREER_SHOOT_COPY } from "../../core/studioCareerShootCopy";
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
import { useFilmWorkLanguage } from "../filmWorkLanguage";
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
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SHOOT_COPY[language];
  const preparation = useMemo(
    () => getShootPreparation(projectContext, developmentResult, preProductionResult),
    [projectContext, developmentResult, preProductionResult]
  );
  const numberedProject = projectLabel !== "first film";
  const totalDays = preparation.productionSchedule.shootDays.length;
  const currentDay = getNextShootDay(preparation, shootDayResults);

  function resolveDay() {
    if (!selectedProductionEventId) return;
    onResolveShootDay(resolveNextShootDay(preparation, shootDayResults, { selectedProductionEventId }));
  }

  return (
    <section className={numberedProject ? "panel shoot-panel shoot-panel--later-project" : "panel shoot-panel"} id={id}>
      <div className="shoot-panel-heading">
        <div>
          <span className="eyebrow">{copy.panel.eyebrow(projectLabel)}</span>
          <h2>{copy.panel.heading(projectLabel)}</h2>
        </div>
        <p>{copy.panel.intro(projectLabel)}</p>
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
            onSelect={onSelectProductionEvent}
            options={preparation.availableProductionEvents}
            projectLabel={projectLabel}
            selectedProductionEventId={selectedProductionEventId}
          />
          <div className="shoot-actions">
            <div>
              <span className="inline-message" role="status">
                {selectedProductionEventId ? copy.panel.eventSelected : copy.panel.selectEvent}
              </span>
              <small>{copy.panel.dayProgress(currentDay.dayNumber, totalDays, projectLabel)}</small>
            </div>
            <button className="primary-button" disabled={!selectedProductionEventId} onClick={resolveDay} type="button">{copy.panel.resolveDay(currentDay.dayNumber)}</button>
          </div>
        </>
      )}
      {shootResult && <ShootEvaluationPanel projectLabel={projectLabel} result={shootResult} />}
    </section>
  );
}
