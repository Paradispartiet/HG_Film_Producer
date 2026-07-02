import type { ReleaseStrategy } from "../../domain/release.js";

interface ReleaseStrategyPanelProps {
  readonly strategies: readonly ReleaseStrategy[];
  readonly selectedId: string;
  readonly disabled?: boolean;
  readonly inputName?: string;
  readonly onSelect: (strategyId: string) => void;
}

export function ReleaseStrategyPanel({ strategies, selectedId, disabled = false, inputName = "release-strategy", onSelect }: ReleaseStrategyPanelProps) {
  return (
    <section className="release-choice-section" aria-labelledby="release-strategy-heading">
      <div className="release-section-heading">
        <div><span className="eyebrow">Distribution route</span><h3 id="release-strategy-heading">Choose a release strategy</h3></div>
        <p>Balance reach, financial exposure, and the long-term prestige potential of the film.</p>
      </div>
      <div className="release-option-grid release-option-grid--strategies">
        {strategies.map((strategy) => (
          <label className={selectedId === strategy.id ? "release-option-card release-option-card--selected" : "release-option-card"} key={strategy.id}>
            <input checked={selectedId === strategy.id} disabled={disabled} name={inputName} onChange={() => onSelect(strategy.id)} type="radio" />
            <span className="release-card-kicker">{formatLabel(strategy.channel)}</span>
            <strong>{strategy.title}</strong>
            <p>{strategy.description}</p>
            <div className="release-tags">{strategy.targetAudienceSegments.map((segment) => <span key={segment}>{formatLabel(segment)}</span>)}</div>
            <dl className="release-card-metrics">
              <Metric label="Reach" value={`${strategy.audienceReach}/100`} />
              <Metric label="Risk" value={`${strategy.revenueRisk}/100`} />
              <Metric label="Prestige" value={`${strategy.prestigePotential}/100`} />
              <Metric label="Cost" value={`${strategy.costMultiplier.toFixed(2)}×`} />
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

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
