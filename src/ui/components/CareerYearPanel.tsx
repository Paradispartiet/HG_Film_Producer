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
        <Metric label="Cash health" value={`${result.careerYearEvaluation.cashHealth}/100`} />
        <Metric label="Reputation growth" value={formatSignedNumber(result.careerYearEvaluation.reputationGrowth)} />
        <Metric label="Prestige growth" value={formatSignedNumber(result.careerYearEvaluation.prestigeGrowth)} />
        <Metric label="Award momentum" value={`${result.careerYearEvaluation.awardMomentum}/100`} />
      </dl>
      {result.appliedStudioExpenses.length > 0 && (
        <ul className="career-note-list">
          {result.appliedStudioExpenses.map((expense) => (
            <li key={expense.id}>{expense.title}: {formatMoney(expense.amount)}</li>
          ))}
        </ul>
      )}
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

function formatSignedNumber(value: number): string {
  return value > 0 ? `+${value}` : `${value}`;
}
