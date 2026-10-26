import { useMemo } from "react";
import type { ShootStrategyId } from "../../core/applyShootStrategy.js";
import type { ProducerPriorityId } from "../../core/applyProducerPriority.js";
import { PRODUCER_PRIORITY_COPY } from "../../core/studioCareerProducerPriorityCopy.js";
import { STUDIO_CAREER_SCRIPT_NOTE_COPY } from "../../core/studioCareerScriptNoteCopy.js";
import { STUDIO_CAREER_SCRIPT_HANDOFF_COPY } from "../../core/studioCareerScriptHandoffCopy.js";
import { calculateShootBudgetPosition } from "../../core/calculateShootBudgetPosition.js";
import { STUDIO_CAREER_SHOOT_COPY } from "../../core/studioCareerShootCopy";
import type { ProjectShootLabel } from "../types.js";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import {
  getNextShootDay,
  getShootPreparation,
  getScriptProducerNoteId,
  resolveNextShootDay,
  type ShootDayStepResult,
  type ShootStepResult
} from "../demo/createShootStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { ProductionEventPanel } from "./ProductionEventPanel.js";
import { ProducerPriorityPanel } from "./ProducerPriorityPanel.js";
import { OnSetDialoguePanel } from "./OnSetDialoguePanel.js";
import { SceneDifficultyPanel } from "./SceneDifficultyPanel.js";
import { ShootDayResultPanel } from "./ShootDayResultPanel.js";
import { ShootBudgetMonitor } from "./ShootBudgetMonitor.js";
import { ShootEvaluationPanel } from "./ShootEvaluationPanel.js";
import { ShootSchedulePanel } from "./ShootSchedulePanel.js";
import { ShootStrategyPanel } from "./ShootStrategyPanel.js";
import { ShootDecisionPreview } from "./ShootDecisionPreview.js";

interface ShootPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly projectLabel?: ProjectShootLabel;
  readonly developmentResult: DevelopmentStepResult;
  readonly developmentResults?: readonly DevelopmentStepResult[];
  readonly preProductionResult: PreProductionStepResult;
  readonly selectedProductionEventId: string;
  readonly selectedShootStrategyId?: ShootStrategyId;
  readonly selectedProducerPriorityId?: ProducerPriorityId;
  readonly shootDayResults: readonly ShootDayStepResult[];
  readonly shootResult: ShootStepResult | null;
  readonly onSelectProductionEvent: (eventId: string) => void;
  readonly onSelectShootStrategy: (id: ShootStrategyId) => void;
  readonly onSelectProducerPriority: (id: ProducerPriorityId) => void;
  readonly onResolveShootDay: (result: ShootDayStepResult) => void;
  readonly id?: string | undefined;
}

export function ShootPanel({
  projectContext,
  projectLabel = "first film",
  developmentResult,
  developmentResults = [],
  preProductionResult,
  selectedProductionEventId,
  selectedShootStrategyId = "steady",
  selectedProducerPriorityId = "crew_coordination",
  shootDayResults,
  shootResult,
  onSelectProductionEvent,
  onSelectShootStrategy,
  onSelectProducerPriority,
  onResolveShootDay,
  id
}: ShootPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SHOOT_COPY[language];
  const producerCopy = PRODUCER_PRIORITY_COPY[language];
  const scriptCopy = STUDIO_CAREER_SCRIPT_NOTE_COPY[language];
  const handoffCopy = STUDIO_CAREER_SCRIPT_HANDOFF_COPY[language];
  const noteId = getScriptProducerNoteId(developmentResults);
  const preparation = useMemo(
    () => getShootPreparation(projectContext, developmentResult, preProductionResult, noteId),
    [projectContext, developmentResult, preProductionResult, noteId]
  );
  const numberedProject = projectLabel !== "first film";
  const totalDays = preparation.productionSchedule.shootDays.length;
  const currentDay = getNextShootDay(preparation, shootDayResults);
  const latestDay = shootDayResults.at(-1);
  const earlierDays = shootDayResults.slice(0, -1);
  // Preview uses the very same deterministic resolver as the confirmation action.
  // It does not change save state or book any costs before the player confirms.
  const previewResolution = currentDay && selectedProductionEventId
    ? resolveNextShootDay(preparation, shootDayResults, { selectedProductionEventId, selectedShootStrategyId, selectedProducerPriorityId })
    : undefined;
  const previewDay = previewResolution?.shootDayResult;
  const budgetPosition = calculateShootBudgetPosition(
    preparation.productionSchedule,
    shootDayResults.map((day) => day.shootDayResult),
    previewDay
  );

  function resolveDay() {
    if (!selectedProductionEventId) return;
    onResolveShootDay(resolveNextShootDay(preparation, shootDayResults, { selectedProductionEventId, selectedShootStrategyId, selectedProducerPriorityId }));
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
      {preparation.scriptRevision && (
        <section className="shoot-desk-section script-to-shoot-handoff" role="status">
          <div className="shoot-section-heading">
            <div>
              <span className="eyebrow">{handoffCopy.heading}</span>
              <h3>{scriptCopy.options[preparation.scriptRevision.noteId].title}</h3>
            </div>
            <p>{handoffCopy.intro}</p>
          </div>
          <p>{scriptCopy.options[preparation.scriptRevision.noteId].tradeoff}</p>
          <strong>{handoffCopy.pressure(preparation.scriptRevision.baselineScenePressure, preparation.scriptRevision.revisedScenePressure)}</strong>
          <p>{handoffCopy.consequence}</p>
        </section>
      )}
      <ShootSchedulePanel currentDay={currentDay} preparation={preparation} projectLabel={projectLabel} resolvedDays={shootDayResults} />
      <SceneDifficultyPanel projectLabel={projectLabel} summaries={preparation.sceneDifficultySummaries} />
      {latestDay && (
        <ShootDayResultPanel dayNumber={shootDayResults.length} key={latestDay.updatedShootDay.id} preparation={preparation} projectLabel={projectLabel} result={latestDay} />
      )}
      {currentDay && (
        <>
          <ProductionEventPanel
            inputName={`${projectContext.filmProjectState.id}-production-event`}
            onSelect={onSelectProductionEvent}
            options={preparation.availableProductionEvents}
            projectLabel={projectLabel}
            selectedProductionEventId={selectedProductionEventId}
          />
          <ProducerPriorityPanel eventId={selectedProductionEventId} inputName={`${projectContext.filmProjectState.id}-producer-priority`} onSelect={onSelectProducerPriority} selectedId={selectedProducerPriorityId} />
          {previewResolution?.producerPrioritySummary && (
            <OnSetDialoguePanel
              practicalActionVersion={2}
              eventId={selectedProductionEventId}
              priority={selectedProducerPriorityId}
              summary={previewResolution.producerPrioritySummary}
              continuity={previewResolution.teamContinuity}
            />
          )}
          <ShootStrategyPanel budgetRisk={budgetPosition.projected?.risk ?? budgetPosition.actual.risk} onSelect={onSelectShootStrategy} plannedCost={currentDay.plannedCost} selectedId={selectedShootStrategyId} />
          {previewResolution && <ShootDecisionPreview result={previewResolution} />}
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
      <details className="shoot-budget-details">
        <summary>{producerCopy.budgetSummary}</summary>
        <ShootBudgetMonitor position={budgetPosition} />
      </details>
      {earlierDays.length > 0 && (
        <details className="shoot-prior-days">
          <summary>{copy.dayResult.priorDays(earlierDays.length)}</summary>
          {earlierDays.map((dayResult, index) => (
            <ShootDayResultPanel dayNumber={index + 1} key={dayResult.updatedShootDay.id} preparation={preparation} projectLabel={projectLabel} result={dayResult} />
          ))}
        </details>
      )}
      {shootResult && <ShootEvaluationPanel projectLabel={projectLabel} result={shootResult} />}
    </section>
  );
}
