import { PRODUCER_PRIORITY_IDS, type ProducerPriorityId } from "../../core/applyProducerPriority.js";
import { PRODUCER_PRIORITY_COPY } from "../../core/studioCareerProducerPriorityCopy.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface ProducerPriorityPanelProps {
  readonly selectedId: ProducerPriorityId;
  readonly inputName: string;
  readonly onSelect: (id: ProducerPriorityId) => void;
}

/** Producer-level support choices, deliberately separate from Film Director shot craft. */
export function ProducerPriorityPanel({ selectedId, inputName, onSelect }: ProducerPriorityPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = PRODUCER_PRIORITY_COPY[language];
  return (
    <section className="shoot-desk-section producer-priority-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div>
        <p>{copy.intro}</p>
      </div>
      <div className="producer-priority-grid" role="radiogroup" aria-label={copy.heading}>
        {PRODUCER_PRIORITY_IDS.map((id) => (
          <label className={id === selectedId ? "producer-priority-card producer-priority-card--selected" : "producer-priority-card"} key={id}>
            <input checked={selectedId === id} name={inputName} onChange={() => onSelect(id)} type="radio" />
            <span><strong>{copy.options[id].title}</strong><small>{copy.options[id].description}</small></span>
          </label>
        ))}
      </div>
    </section>
  );
}
