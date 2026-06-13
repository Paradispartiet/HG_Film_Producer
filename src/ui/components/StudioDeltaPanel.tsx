import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { ProjectRunContext } from "../demo/createProjectRunContext";
import type { CareerApplicationDelta } from "../types";

interface StudioDeltaPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly result: CareerApplicationStepResult;
}

export function StudioDeltaPanel({ projectContext, result }: StudioDeltaPanelProps) {
  const metrics: readonly { readonly label: string; readonly value: CareerApplicationDelta; readonly money?: boolean }[] = [
    { label: "Money", value: { before: projectContext.studioState.money, after: result.updatedStudio.money, delta: result.moneyDelta }, money: true },
    { label: "Reputation", value: { before: projectContext.studioState.reputation, after: result.updatedStudio.reputation, delta: result.reputationDelta } },
    { label: "Prestige", value: { before: projectContext.studioState.prestige, after: result.updatedStudio.prestige, delta: result.prestigeDelta } }
  ];

  return (
    <section className="career-review-card career-delta-card">
      <div className="career-card-heading"><span className="section-label">Studio ledger</span><strong>Before / after</strong></div>
      <div className="studio-delta-grid">
        {metrics.map(({ label, value, money }) => (
          <div key={label}>
            <span>{label}</span>
            <div className="delta-values">
              <small>{formatValue(value.before, money)}</small>
              <i aria-hidden="true">→</i>
              <strong>{formatValue(value.after, money)}</strong>
            </div>
            <b className={value.delta >= 0 ? "delta-positive" : "delta-negative"}>{formatDelta(value.delta, money)}</b>
          </div>
        ))}
      </div>
      <p className="career-card-note">Release effects and any earned milestone rewards are included in the final totals.</p>
    </section>
  );
}

function formatValue(value: number, money = false): string {
  return money ? value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }) : value.toString();
}

function formatDelta(value: number, money = false): string {
  const formatted = formatValue(Math.abs(value), money);
  return `${value >= 0 ? "+" : "−"}${formatted}`;
}
