import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage";
import { STUDIO_CAREER_SHOOT_COPY } from "../../core/studioCareerShootCopy";
import type { ProjectShootLabel } from "../types.js";
import type { ProductionEventOption } from "../demo/createShootStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface ProductionEventPanelProps {
  readonly options: readonly ProductionEventOption[];
  readonly selectedProductionEventId: string;
  readonly inputName?: string;
  readonly projectLabel?: ProjectShootLabel;
  readonly onSelect: (eventId: string) => void;
}

export function ProductionEventPanel({ options, selectedProductionEventId, inputName = "production-event", projectLabel = "first film", onSelect }: ProductionEventPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SHOOT_COPY[language].event;
  const locale = getFilmWorkIntlLocale(language);
  return (
    <section className="shoot-desk-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div>
        <p>{copy.intro(projectLabel)}</p>
      </div>
      <div className="production-event-grid">
        {options.map(({ event }) => (
          <label className={event.id === selectedProductionEventId ? "production-event-card production-event-card--selected" : "production-event-card"} key={event.id}>
            <input checked={event.id === selectedProductionEventId} name={inputName} onChange={() => onSelect(event.id)} type="radio" />
            <span className="event-kicker">{copy.types[event.type]} · {copy.severities[event.severity]}</span>
            <strong>{event.title}</strong>
            <p>{event.description}</p>
            <dl className="event-consequences">
              <div><dt>{copy.costImpact}</dt><dd>{formatMoney(event.costImpact, locale)}</dd></div>
              <div><dt>{copy.delay}</dt><dd>{copy.delayDays(event.delayDays)}</dd></div>
              <div><dt>{copy.upside}</dt><dd>{event.possibleUpside ? copy.possible : copy.no}</dd></div>
            </dl>
          </label>
        ))}
      </div>
    </section>
  );
}

function formatMoney(value: number, locale: string): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 })}`;
}
