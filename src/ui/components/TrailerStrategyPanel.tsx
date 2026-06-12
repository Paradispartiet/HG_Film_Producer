import type { TrailerStrategy } from "../../domain/post.js";
import { formatMoney } from "./PostDecisionCard.js";

export function TrailerStrategyPanel({ options, selectedId, onSelect }: { readonly options: readonly TrailerStrategy[]; readonly selectedId: string; readonly onSelect: (id: string) => void }) {
  return (
    <section className="post-decision-section">
      <div className="post-section-heading"><div><span className="eyebrow">Positioning</span><h3>Cut the trailer</h3></div><p>Choose the promise that will introduce this film to its first audience.</p></div>
      <div className="post-option-grid">
        {options.map((option) => (
          <label className={option.id === selectedId ? "post-option-card post-option-card--selected" : "post-option-card"} key={option.id}>
            <input checked={option.id === selectedId} name="trailer" onChange={() => onSelect(option.id)} type="radio" />
            <span className="post-option-kicker">{formatLabel(option.strategyType)}</span>
            <strong>{option.title}</strong>
            <p>{option.description}</p>
            <dl className="post-option-details">
              <div><dt>Audience</dt><dd>{option.targetAudience}</dd></div>
              <div><dt>Promise</dt><dd>{option.promisedExperience}</dd></div>
              <div><dt>Risk / cost</dt><dd>{option.risk}/100 · {formatMoney(option.cost)}</dd></div>
            </dl>
          </label>
        ))}
      </div>
    </section>
  );
}
function formatLabel(value: string): string { return value.replaceAll("_", " "); }
