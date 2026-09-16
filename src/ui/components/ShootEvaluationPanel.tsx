import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage";
import { STUDIO_CAREER_SHOOT_COPY } from "../../core/studioCareerShootCopy";
import type { ProjectShootLabel } from "../types.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface ShootEvaluationPanelProps {
  readonly result: ShootStepResult;
  readonly projectLabel?: ProjectShootLabel;
}

export function ShootEvaluationPanel({ result, projectLabel = "first film" }: ShootEvaluationPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SHOOT_COPY[language].evaluation;
  const locale = getFilmWorkIntlLocale(language);
  const evaluation = result.shootEvaluation;
  const metrics = [
    [copy.completedDays, `${evaluation.completedDays}`],
    [copy.delayedDays, `${evaluation.delayedDays}`],
    [copy.totalCostSpent, formatMoney(evaluation.totalCostSpent, locale)],
    [copy.averageTakeQuality, `${evaluation.averageTakeQuality}`],
    [copy.scheduleHealth, `${evaluation.scheduleHealth}`],
    [copy.budgetHealth, `${evaluation.budgetHealth}`],
    [copy.productionMorale, `${evaluation.productionMorale}`],
    [copy.overallLabel, `${evaluation.overall}`]
  ] as const;

  return (
    <section className="shoot-desk-section shoot-evaluation-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading(projectLabel)}</h3></div>
        <strong className="shoot-day-badge">{copy.overall(evaluation.overall)}</strong>
      </div>
      <div className="shoot-evaluation-grid">{metrics.map(([label, value]) => <EvaluationMetric key={label} label={label} value={value} />)}</div>
      <ul className="shoot-note-list">{evaluation.notes.map((note) => <li key={note}>{note}</li>)}</ul>
      <div className="next-step-strip"><span>{copy.nextStep}</span><strong>{copy.nextMessage(projectLabel)}</strong></div>
    </section>
  );
}

function EvaluationMetric({ label, value }: { readonly label: string; readonly value: string }) {
  return <div className="shoot-evaluation-card"><span>{label}</span><strong>{value}</strong></div>;
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
