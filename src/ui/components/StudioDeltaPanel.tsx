import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { STUDIO_CAREER_REVIEW_COPY } from "../../core/studioCareerReviewCopy.js";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
import type { CareerApplicationDelta } from "../types";

interface StudioDeltaPanelProps {
  readonly result: CareerApplicationStepResult;
}

export function StudioDeltaPanel({ result }: StudioDeltaPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_REVIEW_COPY[language].studioDelta;
  const locale = getFilmWorkIntlLocale(language);
  const metrics: readonly { readonly label: string; readonly value: CareerApplicationDelta; readonly money?: boolean }[] = [
    { label: copy.money, value: { before: result.previousStudio.money, after: result.updatedStudio.money, delta: result.moneyDelta }, money: true },
    { label: copy.reputation, value: { before: result.previousStudio.reputation, after: result.updatedStudio.reputation, delta: result.reputationDelta } },
    { label: copy.prestige, value: { before: result.previousStudio.prestige, after: result.updatedStudio.prestige, delta: result.prestigeDelta } }
  ];

  return (
    <section className="career-review-card career-delta-card">
      <div className="career-card-heading"><span className="section-label">{copy.ledger}</span><strong>{copy.beforeAfter}</strong></div>
      <div className="studio-delta-grid">
        {metrics.map(({ label, value, money }) => (
          <div key={label}>
            <span>{label}</span>
            <div className="delta-values">
              <small>{formatValue(value.before, money, locale)}</small>
              <i aria-hidden="true">→</i>
              <strong>{formatValue(value.after, money, locale)}</strong>
            </div>
            <b className={value.delta >= 0 ? "delta-positive" : "delta-negative"}>{formatDelta(value.delta, money, locale)}</b>
          </div>
        ))}
      </div>
      <p className="career-card-note">{copy.note}</p>
    </section>
  );
}

function formatValue(value: number, money: boolean | undefined, locale: string): string {
  return money ? value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 }) : value.toString();
}

function formatDelta(value: number, money: boolean | undefined, locale: string): string {
  const formatted = formatValue(Math.abs(value), money, locale);
  return `${value >= 0 ? "+" : "−"}${formatted}`;
}
