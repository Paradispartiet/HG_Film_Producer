import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { STUDIO_CAREER_REVIEW_COPY } from "../../core/studioCareerReviewCopy.js";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface CareerYearPanelProps { readonly result: CareerApplicationStepResult; }

export function CareerYearPanel({ result }: CareerYearPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_REVIEW_COPY[language].careerYear;
  const locale = getFilmWorkIntlLocale(language);
  const year = result.updatedCareerState.years.find((entry) => entry.year === result.careerYearEvaluation.year);
  const income = year?.income.reduce((sum, entry) => sum + entry.amount, 0) ?? 0;
  const expenses = year?.expenses.reduce((sum, entry) => sum + entry.amount, 0) ?? 0;

  return (
    <section className="career-review-card career-year-card">
      <div className="career-card-heading">
        <span className="section-label">{copy.label}</span>
        <strong>{copy.reviewHeading(result.careerYearEvaluation.year)}</strong>
      </div>
      <dl className="career-metric-grid">
        <Metric label={copy.nextQuarter} value={result.updatedCareerState.currentQuarter.toUpperCase()} />
        <Metric label={copy.income} value={formatMoney(income, locale)} />
        <Metric label={copy.expenses} value={formatMoney(expenses, locale)} />
        <Metric label={copy.completedFilms} value={`${result.careerYearEvaluation.filmsCompleted}`} />
        <Metric label={copy.careerEvaluation} value={`${result.careerYearEvaluation.overall}/100`} accent />
        <Metric label={copy.yearProfit} value={formatMoney(result.careerYearEvaluation.profit, locale)} />
        <Metric label={copy.cashHealth} value={`${result.careerYearEvaluation.cashHealth}/100`} />
        <Metric label={copy.reputationGrowth} value={formatSignedNumber(result.careerYearEvaluation.reputationGrowth)} />
        <Metric label={copy.prestigeGrowth} value={formatSignedNumber(result.careerYearEvaluation.prestigeGrowth)} />
        <Metric label={copy.awardMomentum} value={`${result.careerYearEvaluation.awardMomentum}/100`} />
      </dl>
      {result.appliedStudioExpenses.length > 0 && (
        <ul className="career-note-list">
          {result.appliedStudioExpenses.map((expense) => (
            <li key={expense.id}>{expense.title}: {formatMoney(expense.amount, locale)}</li>
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

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatSignedNumber(value: number): string {
  return value > 0 ? `+${value}` : `${value}`;
}
