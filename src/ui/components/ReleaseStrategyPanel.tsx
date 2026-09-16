import { STUDIO_CAREER_RELEASE_COPY } from "../../core/studioCareerReleaseCopy.js";
import type { ReleaseStrategy } from "../../domain/release.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface ReleaseStrategyPanelProps {
  readonly strategies: readonly ReleaseStrategy[];
  readonly selectedId: string;
  readonly disabled?: boolean;
  readonly inputName?: string;
  readonly onSelect: (strategyId: string) => void;
}

export function ReleaseStrategyPanel({ strategies, selectedId, disabled = false, inputName = "release-strategy", onSelect }: ReleaseStrategyPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_RELEASE_COPY[language].strategy;
  return (
    <section className="release-choice-section" aria-labelledby="release-strategy-heading">
      <div className="release-section-heading">
        <div><span className="eyebrow">{copy.eyebrow}</span><h3 id="release-strategy-heading">{copy.heading}</h3></div>
        <p>{copy.description}</p>
      </div>
      <div className="release-option-grid release-option-grid--strategies">
        {strategies.map((strategy) => (
          <label className={selectedId === strategy.id ? "release-option-card release-option-card--selected" : "release-option-card"} key={strategy.id}>
            <input checked={selectedId === strategy.id} disabled={disabled} name={inputName} onChange={() => onSelect(strategy.id)} type="radio" />
            <span className="release-card-kicker">{copy.channels[strategy.channel]}</span>
            <strong>{strategy.title}</strong>
            <p>{strategy.description}</p>
            <div className="release-tags">{strategy.targetAudienceSegments.map((segment) => <span key={segment}>{copy.audienceSegments[segment]}</span>)}</div>
            <dl className="release-card-metrics">
              <Metric label={copy.reach} value={`${strategy.audienceReach}/100`} />
              <Metric label={copy.risk} value={`${strategy.revenueRisk}/100`} />
              <Metric label={copy.prestige} value={`${strategy.prestigePotential}/100`} />
              <Metric label={copy.cost} value={`${strategy.costMultiplier.toFixed(2)}×`} />
            </dl>
          </label>
        ))}
      </div>
    </section>
  );
}

function Metric({ label, value }: { readonly label: string; readonly value: string }) {
  return <div><dt>{label}</dt><dd>{value}</dd></div>;
}
