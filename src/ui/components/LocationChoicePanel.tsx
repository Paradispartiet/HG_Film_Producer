import { STUDIO_CAREER_DEVELOPMENT_COPY } from "../../core/studioCareerDevelopmentCopy";
import type { LocationScoutingBrief } from "../../domain/location.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface LocationChoicePanelProps {
  readonly briefs: readonly LocationScoutingBrief[];
  readonly selectedBriefId: string;
  readonly message: string;
  readonly onSelect: (briefId: string) => void;
  readonly onApply: () => void;
}

export function LocationChoicePanel({
  briefs,
  selectedBriefId,
  message,
  onSelect,
  onApply
}: LocationChoicePanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DEVELOPMENT_COPY[language].location;

  return (
    <div className="development-choice-panel">
      <div className="development-choice-heading">
        <div><span className="section-label">{copy.sectionLabel}</span><h3>{copy.heading}</h3></div>
        <p>{copy.intro}</p>
      </div>
      <div className="development-option-grid">
        {briefs.map((brief) => (
          <label className={selectedBriefId === brief.id ? "development-option development-option--selected" : "development-option"} key={brief.id}>
            <input checked={selectedBriefId === brief.id} name="location-brief" onChange={() => onSelect(brief.id)} type="radio" />
            <span className="option-kicker">{formatLabel(brief.genreId.replace("genre_", ""))}</span>
            <strong>{brief.title}</strong>
            <span>{brief.mood}</span>
            <small>{brief.needsHistoricalValue ? copy.historyLed : brief.needsAuthenticity ? copy.authenticityLed : copy.productionLed}</small>
          </label>
        ))}
      </div>
      <div className="development-actions">
        <span className={message ? "inline-message inline-message--error" : "inline-message"} aria-live="polite">
          {message || copy.actionHint}
        </span>
        <button className="primary-button" onClick={onApply} type="button">{copy.runScout}</button>
      </div>
    </div>
  );
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
