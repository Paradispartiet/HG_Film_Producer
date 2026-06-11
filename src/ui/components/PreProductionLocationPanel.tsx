import type { PreProductionLocationOption } from "../demo/createPreProductionStepRun.js";

interface PreProductionLocationPanelProps {
  readonly options: readonly PreProductionLocationOption[];
  readonly selectedLocationId: string;
  readonly onSelect: (locationId: string) => void;
}

export function PreProductionLocationPanel({ options, selectedLocationId, onSelect }: PreProductionLocationPanelProps) {
  return (
    <section className="production-office-section" aria-labelledby="location-heading">
      <div className="production-office-heading">
        <div><span className="office-step">01 · Location</span><h3 id="location-heading">Confirm the production base</h3></div>
        <p>Select one of the top locations ranked by the scouting engine.</p>
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
              {option.recommended && <span className="option-tag option-tag--accent">Development pick</span>}
              {option.notes.slice(0, 2).map((note) => <span className="option-tag" key={note}>{note}</span>)}
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}
