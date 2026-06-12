import type { SoundDecision } from "../../domain/post.js";
import { DecisionCard } from "./PostDecisionCard.js";

export function SoundDecisionPanel({ options, selectedId, onSelect }: { readonly options: readonly SoundDecision[]; readonly selectedId: string; readonly onSelect: (id: string) => void }) {
  return <section className="post-decision-section"><div className="post-section-heading"><div><span className="eyebrow">Sound</span><h3>Build the soundscape</h3></div><p>Balance immersion with story and dialogue clarity.</p></div><div className="post-option-grid">{options.map((option) => <DecisionCard effects={[`Immersion ${signed(option.immersionEffect)}`, `Clarity ${signed(option.clarityEffect)}`]} key={option.id} onSelect={onSelect} option={option} selected={option.id === selectedId} />)}</div></section>;
}
function signed(value: number): string { return `${value >= 0 ? "+" : ""}${value}`; }
