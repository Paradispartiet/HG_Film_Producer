import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { ProjectRunContext } from "../demo/createProjectRunContext";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun";

interface CompletedFilmPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly releaseResult: ReleaseStepResult;
  readonly result: CareerApplicationStepResult;
}

export function CompletedFilmPanel({ projectContext, releaseResult, result }: CompletedFilmPanelProps) {
  const film = result.completedFilmRecord;
  return (
    <section className="career-review-card completed-film-card">
      <div className="career-card-heading"><span className="section-label">Completed film summary</span><strong>{film.title}</strong></div>
      <div className="completed-film-meta"><span>{projectContext.project.genre}</span><span>{formatLabel(film.scale)}</span></div>
      <dl className="career-metric-grid">
        <Metric label="Quality" value={`${film.quality}/100`} />
        <Metric label="Audience appeal" value={`${film.audienceAppeal}/100`} />
        <Metric label="Critical appeal" value={`${film.criticalAppeal}/100`} />
        <Metric label="Gross revenue" value={formatMoney(film.grossRevenue)} />
        <Metric label="Net revenue" value={formatMoney(film.netRevenue)} />
        <Metric label="Awards won" value={`${film.awardsWon}`} />
      </dl>
      {releaseResult.awardsOutcome.wins.length > 0 && (
        <p className="career-card-note">Award wins recorded: {releaseResult.awardsOutcome.wins.map(String).join(", ")}</p>
      )}
    </section>
  );
}

function Metric({ label, value }: { readonly label: string; readonly value: string }) {
  return <div><dt>{label}</dt><dd>{value}</dd></div>;
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
