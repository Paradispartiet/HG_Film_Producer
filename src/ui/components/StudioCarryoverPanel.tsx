import type { CareerState } from "../../domain/career.js";

interface StudioCarryoverPanelProps {
  readonly careerState: CareerState;
}

export function StudioCarryoverPanel({
  careerState,
}: StudioCarryoverPanelProps) {
  const studio = careerState.studio;
  return (
    <section className="next-project-card carryover-card">
      <div className="compact-card-heading">
        <div>
          <span className="eyebrow">Studio carryover</span>
          <h3>{studio.name}</h3>
        </div>
        <span className="carryover-period">
          Year {careerState.currentYear} ·{" "}
          {careerState.currentQuarter.toUpperCase()}
        </span>
      </div>
      <dl className="carryover-stats">
        <CarryoverStat label="Money" value={formatMoney(studio.money)} />
        <CarryoverStat
          label="Reputation"
          value={`${studio.reputation} / 100`}
        />
        <CarryoverStat label="Prestige" value={`${studio.prestige} / 100`} />
        <CarryoverStat
          label="Completed films"
          value={`${careerState.completedFilms.length}`}
        />
      </dl>
      <div className="identity-row">
        <span>Studio identity</span>
        <div className="tag-list">
          {careerState.identityTags.length > 0 ? (
            careerState.identityTags.map((tag) => (
              <span key={tag}>{formatTag(tag)}</span>
            ))
          ) : (
            <span className="tag-muted">Still forming</span>
          )}
        </div>
      </div>
    </section>
  );
}

function CarryoverStat({
  label,
  value,
}: {
  readonly label: string;
  readonly value: string;
}) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function formatTag(value: string): string {
  return value.replaceAll("_", " ");
}
