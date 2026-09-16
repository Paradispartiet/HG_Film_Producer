import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { STUDIO_CAREER_REVIEW_COPY } from "../../core/studioCareerReviewCopy.js";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { ProjectRunContext } from "../demo/createProjectRunContext";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface CompletedFilmPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly releaseResult: ReleaseStepResult;
  readonly result: CareerApplicationStepResult;
}

export function CompletedFilmPanel({ projectContext, releaseResult, result }: CompletedFilmPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_REVIEW_COPY[language].completedFilm;
  const locale = getFilmWorkIntlLocale(language);
  const film = result.completedFilmRecord;
  return (
    <section className="career-review-card completed-film-card">
      <div className="career-card-heading"><span className="section-label">{copy.summary}</span><strong>{film.title}</strong></div>
      <div className="completed-film-meta"><span>{projectContext.project.genre}</span><span>{formatLabel(film.scale)}</span></div>
      <dl className="career-metric-grid">
        <Metric label={copy.quality} value={`${film.quality}/100`} />
        <Metric label={copy.audienceAppeal} value={`${film.audienceAppeal}/100`} />
        <Metric label={copy.criticalAppeal} value={`${film.criticalAppeal}/100`} />
        <Metric label={copy.grossRevenue} value={formatMoney(film.grossRevenue, locale)} />
        <Metric label={copy.netRevenue} value={formatMoney(film.netRevenue, locale)} />
        <Metric label={copy.awardsWon} value={`${film.awardsWon}`} />
      </dl>
      {releaseResult.awardsOutcome.wins.length > 0 && (
        <p className="career-card-note">{copy.awardWinsRecorded}: {releaseResult.awardsOutcome.wins.map(String).join(", ")}</p>
      )}
    </section>
  );
}

function Metric({ label, value }: { readonly label: string; readonly value: string }) {
  return <div><dt>{label}</dt><dd>{value}</dd></div>;
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
