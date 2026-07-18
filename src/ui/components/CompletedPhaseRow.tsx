import type { PipelineStepSummary } from "../types.js";

interface CompletedPhaseRowProps {
  readonly phaseLabel: string;
  readonly step: PipelineStepSummary;
  readonly expanded: boolean;
  readonly onToggle: () => void;
}

export function CompletedPhaseRow({ phaseLabel, step, expanded, onToggle }: CompletedPhaseRowProps) {
  return (
    <div className="completed-phase-row">
      <div className="completed-phase-row-text">
        <span className="eyebrow">{phaseLabel} · Complete</span>
        <strong>{step.label}</strong>
        {!expanded && <p>{step.detail}</p>}
      </div>
      <div className="completed-phase-row-actions">
        <b>{step.score}</b>
        <button className="secondary-button" onClick={onToggle} type="button">
          {expanded ? "Hide details" : "Show details"}
        </button>
      </div>
    </div>
  );
}
