import { STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import type { SoundDecision } from "../../domain/post.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
import { DecisionCard } from "./PostDecisionCard.js";

export function SoundDecisionPanel({ options, selectedId, onSelect }: { readonly options: readonly SoundDecision[]; readonly selectedId: string; readonly onSelect: (id: string) => void }) {
  const copy = STUDIO_CAREER_POST_PRODUCTION_COPY[useFilmWorkLanguage()].sound;
  return <section className="post-decision-section"><div className="post-section-heading"><div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div><p>{copy.description}</p></div><div className="post-option-grid">{options.map((option) => <DecisionCard effects={[`${copy.immersion} ${signed(option.immersionEffect)}`, `${copy.clarity} ${signed(option.clarityEffect)}`]} key={option.id} onSelect={onSelect} option={option} selected={option.id === selectedId} />)}</div></section>;
}
function signed(value: number): string { return `${value >= 0 ? "+" : ""}${value}`; }
