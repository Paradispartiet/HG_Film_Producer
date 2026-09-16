import { formatStudioCareerPostProductionMoney, STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import type { TrailerStrategy } from "../../domain/post.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

export function TrailerStrategyPanel({ options, selectedId, onSelect }: { readonly options: readonly TrailerStrategy[]; readonly selectedId: string; readonly onSelect: (id: string) => void }) {
  const language = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_POST_PRODUCTION_COPY[language].trailer;
  return (
    <section className="post-decision-section">
      <div className="post-section-heading"><div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div><p>{copy.description}</p></div>
      <div className="post-option-grid">
        {options.map((option) => (
          <label className={option.id === selectedId ? "post-option-card post-option-card--selected" : "post-option-card"} key={option.id}>
            <input checked={option.id === selectedId} name="trailer" onChange={() => onSelect(option.id)} type="radio" />
            <span className="post-option-kicker">{copy.strategyTypes[option.strategyType]}</span>
            <strong>{option.title}</strong>
            <p>{option.description}</p>
            <dl className="post-option-details">
              <div><dt>{copy.audience}</dt><dd>{option.targetAudience}</dd></div>
              <div><dt>{copy.promise}</dt><dd>{option.promisedExperience}</dd></div>
              <div><dt>{copy.riskCost}</dt><dd>{option.risk}/100 · {formatStudioCareerPostProductionMoney(option.cost, language)}</dd></div>
            </dl>
          </label>
        ))}
      </div>
    </section>
  );
}
