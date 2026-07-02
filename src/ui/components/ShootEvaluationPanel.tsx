import type { ProjectShootLabel } from "../types.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";

interface ShootEvaluationPanelProps {
  readonly result: ShootStepResult;
  readonly projectLabel?: ProjectShootLabel;
}

export function ShootEvaluationPanel({ result, projectLabel = "first film" }: ShootEvaluationPanelProps) {
  const evaluation = result.shootEvaluation;
  const numberedProject = projectLabel !== "first film";
  const displayLabel = projectLabel.replace("film", "Film");
  const metrics = [
    ["Completed days", `${evaluation.completedDays}`],
    ["Delayed days", `${evaluation.delayedDays}`],
    ["Total cost spent", formatMoney(evaluation.totalCostSpent)],
    ["Average take quality", `${evaluation.averageTakeQuality}`],
    ["Schedule health", `${evaluation.scheduleHealth}`],
    ["Budget health", `${evaluation.budgetHealth}`],
    ["Production morale", `${evaluation.productionMorale}`],
    ["Overall", `${evaluation.overall}`]
  ] as const;

  return (
    <section className="shoot-desk-section shoot-evaluation-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">Production evaluation</span><h3>{numberedProject ? `${displayLabel} shoot readout` : "Shoot readout"}</h3></div>
        <strong className="shoot-day-badge">Overall {evaluation.overall}</strong>
      </div>
      <div className="shoot-evaluation-grid">
        {metrics.map(([label, value]) => <EvaluationMetric key={label} label={label} value={value} />)}
      </div>
      <ul className="shoot-note-list">
        {evaluation.notes.map((note) => <li key={note}>{note}</li>)}
      </ul>
      <div className="next-step-strip"><span>Next step</span><strong>{numberedProject ? `Next step: post-production for ${projectLabel}` : "Post-production unlocks after every scheduled shoot day is resolved."}</strong></div>
    </section>
  );
}

function EvaluationMetric({ label, value }: { readonly label: string; readonly value: string }) {
  return (
    <div className="shoot-evaluation-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
