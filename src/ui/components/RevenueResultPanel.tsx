import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { STUDIO_CAREER_RELEASE_COPY } from "../../core/studioCareerReleaseCopy.js";
import type { RevenueResult } from "../../domain/release.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

export function RevenueResultPanel({ result }: { readonly result: RevenueResult }) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_RELEASE_COPY[language].revenue;
  return (
    <section className="release-result-section">
      <div className="release-result-heading release-result-heading--split"><div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div><span className={result.breakEven ? "status-pill status-pill--positive" : "status-pill"}>{result.breakEven ? copy.breakEven : copy.belowBreakEven}</span></div>
      <dl className="release-finance-grid">
        <Metric label={copy.grossRevenue} value={formatMoney(language, result.grossRevenue)} accent />
        <Metric label={copy.marketingSpend} value={formatMoney(language, result.marketingSpend)} />
        <Metric label={copy.distributionCost} value={formatMoney(language, result.distributionCost)} />
        <Metric label={copy.netRevenue} value={formatMoney(language, result.netRevenue)} accent={result.netRevenue >= 0} />
        <Metric label={copy.roi} value={`${(result.roi * 100).toFixed(0)}%`} />
      </dl>
      <Notes notes={result.notes} />
    </section>
  );
}
function Metric({ label, value, accent = false }: { readonly label: string; readonly value: string; readonly accent?: boolean }) { return <div className={accent ? "release-finance-metric release-finance-metric--accent" : "release-finance-metric"}><dt>{label}</dt><dd>{value}</dd></div>; }
function Notes({ notes }: { readonly notes: readonly string[] }) { return <ul className="release-note-list">{notes.map((note) => <li key={note}>{note}</li>)}</ul>; }
function formatMoney(language: Parameters<typeof getFilmWorkIntlLocale>[0], value: number): string { return value.toLocaleString(getFilmWorkIntlLocale(language), { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 }); }
