import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";

interface CareerYearPanelProps { readonly result: CareerApplicationStepResult; }

export function CareerYearPanel({ result }: CareerYearPanelProps) {
  const year = result.updatedCareerState.years.find((entry) => entry.year === result.careerYearEvaluation.year);
  const income = year?.income.reduce((sum, entry) => sum + entry.amount, 0) ?? 0;
  const expenses = year?.expenses.reduce((sum, entry) => sum + entry.amount, 0) ?? 0;

  return (
    <section className="career-review-card career-year-card">
      <div className="career-card-heading">
        <span className="section-label">Career year</span>
        <strong>Year {result.careerYearEvaluation.year} review</strong>
      </div>
      <dl className="career-metric-grid">
        <Metric label="Next quarter" value={result.updatedCareerState.currentQuarter.toUpperCase()} />
        <Metric label="Income" value={formatMoney(income)} />
        <Metric label="Expenses" value={formatMoney(expenses)} />
        <Metric label="Completed films" value={`${result.careerYearEvaluation.filmsCompleted}`} />
        <Metric label="Career evaluation" value={`${result.careerYearEvaluation.overall}/100`} accent />
        <Metric label="Year profit" value={formatMoney(result.careerYearEvaluation.profit)} />
      </dl>
      <ul className="career-note-list">
        {[...(year?.notes ?? []), ...result.careerYearEvaluation.notes].map((note) => <li key={note}>{note}</li>)}
      </ul>
    </section>
  );
}

function Metric({ label, value, accent = false }: { readonly label: string; readonly value: string; readonly accent?: boolean }) {
  return <div><dt>{label}</dt><dd className={accent ? "metric-accent" : undefined}>{value}</dd></div>;
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
