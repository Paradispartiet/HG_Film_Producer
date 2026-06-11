import type { LocationScoutingBrief } from "../../domain/location.js";

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
  return (
    <div className="development-choice-panel">
      <div className="development-choice-heading">
        <div><span className="section-label">Scouting desk</span><h3>Set the location brief</h3></div>
        <p>The engine will score every available location and attach the strongest match.</p>
      </div>
      <div className="development-option-grid">
        {briefs.map((brief) => (
          <label className={selectedBriefId === brief.id ? "development-option development-option--selected" : "development-option"} key={brief.id}>
            <input checked={selectedBriefId === brief.id} name="location-brief" onChange={() => onSelect(brief.id)} type="radio" />
            <span className="option-kicker">{formatLabel(brief.genreId.replace("genre_", ""))}</span>
            <strong>{brief.title}</strong>
            <span>{brief.mood}</span>
            <small>{brief.needsHistoricalValue ? "History-led" : brief.needsAuthenticity ? "Authenticity-led" : "Production-led"}</small>
          </label>
        ))}
      </div>
      <div className="development-actions">
        <span className={message ? "inline-message inline-message--error" : "inline-message"} aria-live="polite">
          {message || "The top-scoring location will be attached to the project."}
        </span>
        <button className="primary-button" onClick={onApply} type="button">Run location scout</button>
      </div>
    </div>
  );
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
