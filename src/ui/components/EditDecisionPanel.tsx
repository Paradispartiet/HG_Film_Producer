import { STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import type { EditDecision } from "../../domain/post.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
import { DecisionCard, type DecisionCardProps } from "./PostDecisionCard.js";

interface EditDecisionPanelProps {
  readonly options: readonly EditDecision[];
  readonly selectedId: string;
  readonly onSelect: (id: string) => void;
}

export function EditDecisionPanel({ options, selectedId, onSelect }: EditDecisionPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_POST_PRODUCTION_COPY[language].edit;
  return <DecisionSection eyebrow={copy.eyebrow} title={copy.heading} description={copy.description} options={options.map((option) => ({ option, effects: [`${copy.pacing} ${signed(option.pacingEffect)}`, `${copy.structure} ${signed(option.structureEffect)}`] }))} selectedId={selectedId} onSelect={onSelect} />;
}

function DecisionSection({ eyebrow, title, description, options, selectedId, onSelect }: { readonly eyebrow: string; readonly title: string; readonly description: string; readonly options: readonly DecisionCardProps[]; readonly selectedId: string; readonly onSelect: (id: string) => void }) {
  return <section className="post-decision-section"><div className="post-section-heading"><div><span className="eyebrow">{eyebrow}</span><h3>{title}</h3></div><p>{description}</p></div><div className="post-option-grid">{options.map((props) => <DecisionCard {...props} key={props.option.id} onSelect={onSelect} selected={props.option.id === selectedId} />)}</div></section>;
}

function signed(value: number): string { return `${value >= 0 ? "+" : ""}${value}`; }
