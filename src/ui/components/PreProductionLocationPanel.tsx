import { STUDIO_CAREER_PRE_PRODUCTION_COPY } from "../../core/studioCareerPreProductionCopy";
import type { PreProductionLocationOption } from "../demo/createPreProductionStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface PreProductionLocationPanelProps {
  readonly options: readonly PreProductionLocationOption[];
  readonly selectedLocationId: string;
  readonly onSelect: (locationId: string) => void;
}

export function PreProductionLocationPanel({ options, selectedLocationId, onSelect }: PreProductionLocationPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_PRE_PRODUCTION_COPY[language].location;

  return (
    <section className="production-office-section" aria-labelledby="location-heading">
      <div className="production-office-heading">
        <div><span className="office-step">{copy.step}</span><h3 id="location-heading">{copy.heading}</h3></div>
        <p>{copy.intro}</p>
      </div>
      <div className="location-option-grid">
        {options.map((option) => (
          <label className={selectedLocationId === option.id ? "office-option office-option--selected" : "office-option"} key={option.id}>
            <input checked={selectedLocationId === option.id} name="pre-production-location" onChange={() => onSelect(option.id)} type="radio" />
            <div className="office-option-topline">
              <span>{option.city} · {option.type}</span>
              <strong>{option.totalScore}</strong>
            </div>
            <h4>{option.name}</h4>
            <p>{option.summary}</p>
            <div className="option-tags">
              {option.recommended && <span className="option-tag option-tag--accent">{copy.developmentPick}</span>}
              {option.notes.slice(0, 2).map((note) => <span className="option-tag" key={note}>{note}</span>)}
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}
