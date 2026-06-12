import type { EditDecision } from "../../domain/post.js";
import { DecisionCard, type DecisionCardProps } from "./PostDecisionCard.js";

interface EditDecisionPanelProps {
  readonly options: readonly EditDecision[];
  readonly selectedId: string;
  readonly onSelect: (id: string) => void;
}

export function EditDecisionPanel({ options, selectedId, onSelect }: EditDecisionPanelProps) {
  return <DecisionSection eyebrow="Editorial" title="Shape the cut" description="Choose the cut strategy that controls rhythm and story structure." options={options.map((option) => ({ option, effects: [`Pacing ${signed(option.pacingEffect)}`, `Structure ${signed(option.structureEffect)}`] }))} selectedId={selectedId} onSelect={onSelect} />;
}

function DecisionSection({ eyebrow, title, description, options, selectedId, onSelect }: { readonly eyebrow: string; readonly title: string; readonly description: string; readonly options: readonly DecisionCardProps[]; readonly selectedId: string; readonly onSelect: (id: string) => void }) {
  return <section className="post-decision-section"><div className="post-section-heading"><div><span className="eyebrow">{eyebrow}</span><h3>{title}</h3></div><p>{description}</p></div><div className="post-option-grid">{options.map((props) => <DecisionCard {...props} key={props.option.id} onSelect={onSelect} selected={props.option.id === selectedId} />)}</div></section>;
}

function signed(value: number): string { return `${value >= 0 ? "+" : ""}${value}`; }
