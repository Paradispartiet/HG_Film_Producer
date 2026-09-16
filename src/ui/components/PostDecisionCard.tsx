import { formatStudioCareerPostProductionMoney, STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import type { PostDecision } from "../../domain/post.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

export interface DecisionCardProps {
  readonly option: PostDecision;
  readonly effects: readonly string[];
  readonly selected?: boolean;
  readonly onSelect?: (id: string) => void;
}

export function DecisionCard({ option, effects, selected = false, onSelect }: DecisionCardProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_POST_PRODUCTION_COPY[language].decisionCard;
  return (
    <label className={selected ? "post-option-card post-option-card--selected" : "post-option-card"}>
      <input checked={selected} name={option.type} onChange={() => onSelect?.(option.id)} type="radio" />
      <span className="post-option-kicker">{copy.types[option.type]} {copy.decision}</span>
      <strong>{option.title}</strong>
      <p>{option.description}</p>
      <dl className="post-option-details">
        <div><dt>{copy.solves}</dt><dd>{option.solves}</dd></div>
        <div><dt>{copy.risk}</dt><dd>{option.risk}/100</dd></div>
        <div><dt>{copy.cost}</dt><dd>{formatStudioCareerPostProductionMoney(option.cost, language)}</dd></div>
      </dl>
      <div className="effect-chips">{effects.map((effect) => <span key={effect}>{effect}</span>)}</div>
    </label>
  );
}
