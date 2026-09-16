import { STUDIO_SHELL_COPY, formatStudioMoney } from "../../core/studioShellCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import type { StudioDashboardSummary } from "../types.js";

interface StudioHeaderProps {
  readonly studio: StudioDashboardSummary;
}

export function StudioHeader({ studio }: StudioHeaderProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_SHELL_COPY[language].header;

  return (
    <header className="studio-header">
      <div className="studio-title">
        <span className="eyebrow">{copy.kicker}</span>
        <div>
          <span className="brand-mark" aria-hidden="true">HG</span>
          <div>
            <h1>{studio.name}</h1>
            <p>{copy.studioType}</p>
          </div>
        </div>
      </div>
      <dl className="header-stats">
        <HeaderStat label={copy.availableCapital} value={formatStudioMoney(language, studio.money)} accent />
        <HeaderStat label={copy.reputation} value={`${studio.reputation}`} suffix="/ 100" />
        <HeaderStat label={copy.prestige} value={`${studio.prestige}`} suffix="/ 100" />
        <HeaderStat label={copy.currentPeriod} value={copy.year(studio.currentYear)} suffix={studio.currentQuarter} />
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