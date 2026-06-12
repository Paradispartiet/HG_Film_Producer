import type { MusicDecision } from "../../domain/post.js";
import { DecisionCard } from "./PostDecisionCard.js";

export function MusicDecisionPanel({ options, selectedId, onSelect }: { readonly options: readonly MusicDecision[]; readonly selectedId: string; readonly onSelect: (id: string) => void }) {
  return <section className="post-decision-section"><div className="post-section-heading"><div><span className="eyebrow">Music</span><h3>Set the musical language</h3></div><p>Choose how the score carries emotion and gives the film an identity.</p></div><div className="post-option-grid">{options.map((option) => <DecisionCard effects={[`Emotion ${signed(option.emotionEffect)}`, `Identity ${signed(option.identityEffect)}`]} key={option.id} onSelect={onSelect} option={option} selected={option.id === selectedId} />)}</div></section>;
}
function signed(value: number): string { return `${value >= 0 ? "+" : ""}${value}`; }
