import { STUDIO_CAREER_APP_SHELL_COPY } from "../../core/studioCareerAppShellCopy";
import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import type { DemoStudioRun } from "../demo/createDemoStudioRun";

interface ReleasePanelProps {
  readonly release: DemoStudioRun["releaseOutcome"];
}

export function ReleasePanel({ release }: ReleasePanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_APP_SHELL_COPY[language].demo.release;
  const locale = language === "en" ? "en-US" : getFilmWorkIntlLocale(language);
  const money = (value: number) => formatMoney(value, locale);
  return (
    <section className="panel release-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">{copy.eyebrow}</span><h2>{copy.heading}</h2></div>
        <span className={release.breakEven ? "status-pill status-pill--positive" : "status-pill"}>
          {release.breakEven ? copy.breakEvenCleared : copy.belowBreakEven}
        </span>
      </div>
      <div className="release-grid">
        <ReleaseItem label={copy.strategy} value={release.strategy} />
        <ReleaseItem label={copy.festivalResult} value={`${release.festival} · ${release.festivalAccepted ? copy.selected : copy.notSelected}`} />
        <ReleaseItem label={copy.reviewSummary} value={`${release.reviewScore}/100 · “${release.reviewQuote}”`} wide />
        <ReleaseItem label={copy.audienceSummary} value={copy.audienceValue(release.audienceScore, release.estimatedViewers.toLocaleString(locale))} wide />
        <ReleaseItem label={copy.revenueResult} value={copy.revenueValue(money(release.grossRevenue), money(release.netRevenue))} />
        <ReleaseItem label={copy.awardsOutcome} value={copy.awardsValue(release.nominations, release.wins)} />
      </div>
    </section>
  );
}

function ReleaseItem({ label, value, wide = false }: { readonly label: string; readonly value: string; readonly wide?: boolean }) {
  return <div className={wide ? "release-item release-item--wide" : "release-item"}><span>{label}</span><strong>{value}</strong></div>;
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 });
}
