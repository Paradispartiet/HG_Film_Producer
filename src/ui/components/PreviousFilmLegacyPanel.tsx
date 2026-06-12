import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun.js";

interface PreviousFilmLegacyPanelProps {
  readonly result: CareerApplicationStepResult;
}

export function PreviousFilmLegacyPanel({
  result,
}: PreviousFilmLegacyPanelProps) {
  const film = result.completedFilmRecord;
  return (
    <section className="next-project-card legacy-card">
      <div className="compact-card-heading">
        <div>
          <span className="eyebrow">Film 1 legacy</span>
          <h3>{film.title}</h3>
        </div>
        <span className="recorded-badge">Recorded</span>
      </div>
      <dl className="legacy-metrics">
        <Metric label="Quality" value={`${film.quality}`} />
        <Metric label="Audience" value={`${film.audienceAppeal}`} />
        <Metric label="Critics" value={`${film.criticalAppeal}`} />
        <Metric label="Awards" value={`${film.awardsWon}`} />
        <Metric label="Gross" value={formatMoney(film.grossRevenue)} />
        <Metric label="Net" value={formatMoney(film.netRevenue)} />
      </dl>
      <div className="legacy-deltas">
        <span>
          Reputation <strong>{formatDelta(film.reputationDelta)}</strong>
        </span>
        <span>
          Prestige <strong>{formatDelta(film.prestigeDelta)}</strong>
        </span>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
}: {
  readonly label: string;
  readonly value: string;
}) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function formatDelta(value: number): string {
  return `${value >= 0 ? "+" : ""}${value}`;
}
