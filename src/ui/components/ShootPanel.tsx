import { useMemo, useState } from "react";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import {
  createShootStepResult,
  getShootPreparation,
  type ShootStepResult
} from "../demo/createShootStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { ProjectSetupRun } from "../demo/createProjectSetupRun.js";
import { ProductionEventPanel } from "./ProductionEventPanel.js";
import { SceneDifficultyPanel } from "./SceneDifficultyPanel.js";
import { ShootDayResultPanel } from "./ShootDayResultPanel.js";
import { ShootEvaluationPanel } from "./ShootEvaluationPanel.js";
import { ShootSchedulePanel } from "./ShootSchedulePanel.js";

interface ShootPanelProps {
  readonly run: ProjectSetupRun;
  readonly developmentResult: DevelopmentStepResult;
  readonly preProductionResult: PreProductionStepResult;
  readonly selectedProductionEventId: string;
  readonly shootResult: ShootStepResult | null;
  readonly onSelectProductionEvent: (eventId: string) => void;
  readonly onResolveShootDay: (result: ShootStepResult) => void;
}

export function ShootPanel({
  run,
  developmentResult,
  preProductionResult,
  selectedProductionEventId,
  shootResult,
  onSelectProductionEvent,
  onResolveShootDay
}: ShootPanelProps) {
  const [message, setMessage] = useState("");
  const preparation = useMemo(
    () => getShootPreparation(run, developmentResult, preProductionResult),
    [run, developmentResult, preProductionResult]
  );

  function resolveDay() {
    if (!selectedProductionEventId) {
      setMessage("Choose one production event before resolving the first shoot day.");
      return;
    }
    setMessage("");
    onResolveShootDay(createShootStepResult(preparation, { selectedProductionEventId }));
  }

  return (
    <section className="panel shoot-panel">
      <div className="shoot-panel-heading">
        <div>
          <span className="eyebrow">Start shoot</span>
          <h2>On-set production desk</h2>
        </div>
        <p>Schedule the first day, apply one event and resolve the first playable shoot result.</p>
      </div>
      <ShootSchedulePanel preparation={preparation} result={shootResult} />
      <SceneDifficultyPanel summaries={preparation.sceneDifficultySummaries} />
      {!shootResult && (
        <>
          <ProductionEventPanel
            onSelect={(eventId) => { onSelectProductionEvent(eventId); setMessage(""); }}
            options={preparation.availableProductionEvents}
            selectedProductionEventId={selectedProductionEventId}
          />
          <div className="shoot-actions">
            <div>
              <span className={message ? "inline-message inline-message--error" : "inline-message"} role="status">
                {message || (selectedProductionEventId ? "Production event selected. Ready to resolve." : "Select one production event to continue.")}
              </span>
              <small>This step stops after one resolved shoot day.</small>
            </div>
            <button className="primary-button" onClick={resolveDay} type="button">Resolve shoot day</button>
          </div>
        </>
      )}
      {shootResult && (
        <>
          <ShootDayResultPanel preparation={preparation} result={shootResult} />
          <ShootEvaluationPanel result={shootResult} />
        </>
      )}
    </section>
  );
}
