import { STUDIO_CAREER_APP_SHELL_COPY } from "../../core/studioCareerAppShellCopy";
import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import type { DemoStudioRun } from "../demo/createDemoStudioRun";

interface FilmResultPanelProps {
  readonly result: DemoStudioRun["filmResult"];
}

export function FilmResultPanel({ result }: FilmResultPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_APP_SHELL_COPY[language].demo.filmResult;
  const locale = language === "en" ? "en-US" : getFilmWorkIntlLocale(language);
  const scores = [
    [copy.quality, result.quality],
    [copy.audienceAppeal, result.audienceAppeal],
    [copy.criticalAppeal, result.criticalAppeal]
  ] as const;

  return (
    <section className="panel result-panel">
      <div className="panel-heading"><div><span className="eyebrow">{copy.eyebrow}</span><h2>{copy.heading}</h2></div></div>
      <div className="result-scores">
        {scores.map(([label, score]) => (
          <div className="result-score" key={label}>
            <div><span>{label}</span><strong>{score}</strong></div>
            <div className="score-track"><span style={{ width: `${score}%` }} /></div>
          </div>
        ))}
      </div>
      <div className="financial-pair">
        <div><span>{copy.budgetSpent}</span><strong>{formatMoney(result.budgetSpent, locale)}</strong></div>
        <div><span>{copy.revenueEstimate}</span><strong>{formatMoney(result.revenueEstimate, locale)}</strong></div>
      </div>
    </section>
  );
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 });
}
