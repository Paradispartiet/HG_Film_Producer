import type { ProjectShootLabel } from "../types.js";
import type { ProductionEventOption } from "../demo/createShootStepRun.js";

interface ProductionEventPanelProps {
  readonly options: readonly ProductionEventOption[];
  readonly selectedProductionEventId: string;
  readonly inputName?: string;
  readonly projectLabel?: ProjectShootLabel;
  readonly onSelect: (eventId: string) => void;
}

export function ProductionEventPanel({ options, selectedProductionEventId, inputName = "production-event", projectLabel = "first film", onSelect }: ProductionEventPanelProps) {
  return (
    <section className="shoot-desk-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">On-set variable</span><h3>Choose one production event</h3></div>
        <p>Apply a deterministic event before resolving the {projectLabel} shoot day.</p>
      </div>
      <div className="production-event-grid">
        {options.map(({ event }) => (
          <label className={event.id === selectedProductionEventId ? "production-event-card production-event-card--selected" : "production-event-card"} key={event.id}>
            <input checked={event.id === selectedProductionEventId} name={inputName} onChange={() => onSelect(event.id)} type="radio" />
            <span className="event-kicker">{formatLabel(event.type)} · {event.severity}</span>
            <strong>{event.title}</strong>
            <p>{event.description}</p>
            <dl className="event-consequences">
              <div><dt>Cost impact</dt><dd>{formatMoney(event.costImpact)}</dd></div>
              <div><dt>Delay</dt><dd>{event.delayDays} day{event.delayDays === 1 ? "" : "s"}</dd></div>
              <div><dt>Upside</dt><dd>{event.possibleUpside ? "Possible" : "No"}</dd></div>
            </dl>
          </label>
        ))}
      </div>
    </section>
  );
}

function formatMoney(value: number): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}`;
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
