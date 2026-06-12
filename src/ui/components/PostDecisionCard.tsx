import type { PostDecision } from "../../domain/post.js";

export interface DecisionCardProps {
  readonly option: PostDecision;
  readonly effects: readonly string[];
  readonly selected?: boolean;
  readonly onSelect?: (id: string) => void;
}

export function DecisionCard({ option, effects, selected = false, onSelect }: DecisionCardProps) {
  return (
    <label className={selected ? "post-option-card post-option-card--selected" : "post-option-card"}>
      <input checked={selected} name={option.type} onChange={() => onSelect?.(option.id)} type="radio" />
      <span className="post-option-kicker">{option.type} decision</span>
      <strong>{option.title}</strong>
      <p>{option.description}</p>
      <dl className="post-option-details">
        <div><dt>Solves</dt><dd>{option.solves}</dd></div>
        <div><dt>Risk</dt><dd>{option.risk}/100</dd></div>
        <div><dt>Cost</dt><dd>{formatMoney(option.cost)}</dd></div>
      </dl>
      <div className="effect-chips">{effects.map((effect) => <span key={effect}>{effect}</span>)}</div>
    </label>
  );
}

export function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
