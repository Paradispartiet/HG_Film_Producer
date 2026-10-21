import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { SHOOT_BUDGET_MONITOR_COPY } from "../../core/studioCareerShootBudgetCopy.js";
import type { ShootBudgetPosition, ShootBudgetRisk } from "../../core/calculateShootBudgetPosition.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

export function ShootBudgetMonitor({ position }: { readonly position: ShootBudgetPosition }) {
  const [language] = useFilmWorkLanguage();
  const copy = SHOOT_BUDGET_MONITOR_COPY[language];
  const locale = getFilmWorkIntlLocale(language);
  const money = (amount: number) => amount.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const current = position.actual;
  const projected = position.projected;

  function indicator(risk: ShootBudgetRisk) {
    return <strong className={`shoot-budget-risk shoot-budget-risk--${risk}`}>{copy.risk[risk]}</strong>;
  }
  return (
    <section className="shoot-desk-section shoot-budget-monitor" aria-label={copy.heading}>
      <div className="shoot-section-heading">
        <div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div>
        {indicator(current.risk)}
      </div>
      <p className="shoot-budget-description">{copy.intro}</p>
      <div className="shoot-budget-metrics" data-spent={current.spent} data-remaining={current.remaining} data-headroom={current.reserveHeadroom} data-risk={current.risk}>
        <Metric label={copy.spent} value={money(current.spent)} />
        <Metric label={copy.remaining} value={money(current.remaining)} />
        <Metric label={copy.plannedToFinish} value={money(current.unfilmedPlannedCost)} />
        <Metric label={copy.reserveHeadroom} value={money(current.reserveHeadroom)} />
      </div>
      <p className="shoot-budget-allocation">{copy.allocation}: {money(position.shootingAllocation)} · {copy.warning[current.risk]}</p>
      <div className="shoot-budget-projection" data-forecast-cost={position.projectedDayCost ?? ""} data-forecast-headroom={projected?.reserveHeadroom ?? ""} data-forecast-risk={projected?.risk ?? ""}>
        <div className="shoot-budget-projection-heading">
          <strong>{copy.nextProjection}</strong>
          {projected && indicator(projected.risk)}
        </div>
        {projected ? (
          <>
            <div className="shoot-budget-metrics shoot-budget-metrics--projection">
              <Metric label={copy.projectedDayCost} value={money(position.projectedDayCost ?? 0)} />
              <Metric label={copy.projectedReserve} value={money(projected.reserveHeadroom)} />
            </div>
            <p>{copy.warning[projected.risk]}</p>
          </>
        ) : <p>{copy.unselected}</p>}
      </div>
      <small className="shoot-budget-assumption">{copy.assumption}</small>
    </section>
  );
}

function Metric({ label, value }: { readonly label: string; readonly value: string }) {
  return <div className="shoot-budget-metric"><span>{label}</span><strong>{value}</strong></div>;
}
