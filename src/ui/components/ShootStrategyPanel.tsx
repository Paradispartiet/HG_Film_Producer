import { previewShootStrategy, SHOOT_STRATEGY_IDS, type ShootStrategyId } from "../../core/applyShootStrategy.js";
import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { SHOOT_STRATEGY_COPY } from "../../core/studioCareerShootStrategyCopy.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface ShootStrategyPanelProps {
  readonly selectedId: ShootStrategyId;
  readonly plannedCost: number;
  readonly onSelect: (id: ShootStrategyId) => void;
}

export function ShootStrategyPanel({ selectedId, plannedCost, onSelect }: ShootStrategyPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = SHOOT_STRATEGY_COPY[language];
  const locale = getFilmWorkIntlLocale(language);
  return (
    <section className="shoot-desk-section shoot-strategy-section">
      <div className="shoot-section-heading"><div><span className="eyebrow">{copy.response}</span><h3>{copy.heading}</h3></div><p>{copy.intro}</p></div>
      <div className="shoot-strategy-grid">
        {SHOOT_STRATEGY_IDS.map((id) => {
          const preview = previewShootStrategy(id, plannedCost);
          return (
            <label className={id === selectedId ? "shoot-strategy-card shoot-strategy-card--selected" : "shoot-strategy-card"} key={id}>
              <input checked={selectedId === id} name="shoot-strategy" onChange={() => onSelect(id)} type="radio" />
              <strong>{copy.choices[id].name}</strong>
              <p>{copy.choices[id].description}</p>
              <div className="shoot-strategy-tradeoffs">
                <span>{copy.quality}: {signed(preview.qualityChange)}</span>
                <span>{copy.cost}: {money(preview.costChange, locale)}</span>
                <span>{copy.schedule}: {copy.choices[id].timing}</span>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
}

function signed(value: number): string { return value > 0 ? `+${value}` : String(value); }
function money(value: number, locale: string): string {
  return `${value > 0 ? "+" : ""}${value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 })}`;
}
