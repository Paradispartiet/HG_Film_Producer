import type { DemoStudioRun } from "../demo/createDemoStudioRun";

interface StudioHeaderProps {
  readonly studio: DemoStudioRun["studio"];
}

export function StudioHeader({ studio }: StudioHeaderProps) {
  return (
    <header className="studio-header">
      <div className="studio-title">
        <span className="eyebrow">Studio command</span>
        <div>
          <span className="brand-mark" aria-hidden="true">HG</span>
          <div>
            <h1>{studio.name}</h1>
            <p>Independent motion picture studio</p>
          </div>
        </div>
      </div>
      <dl className="header-stats">
        <HeaderStat label="Available capital" value={formatMoney(studio.money)} accent />
        <HeaderStat label="Reputation" value={`${studio.reputation}`} suffix="/ 100" />
        <HeaderStat label="Prestige" value={`${studio.prestige}`} suffix="/ 100" />
        <HeaderStat label="Current period" value={`Year ${studio.currentYear}`} suffix={studio.currentQuarter} />
      </dl>
    </header>
  );
}

function HeaderStat({ label, value, suffix, accent = false }: {
  readonly label: string;
  readonly value: string;
  readonly suffix?: string;
  readonly accent?: boolean;
}) {
  return (
    <div className={accent ? "header-stat header-stat--accent" : "header-stat"}>
      <dt>{label}</dt>
      <dd>{value} {suffix && <small>{suffix}</small>}</dd>
    </div>
  );
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
