import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { STUDIO_CAREER_CARRYOVER_COPY } from "../../core/studioCareerCarryoverCopy.js";
import type { CareerState } from "../../domain/career.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface StudioCarryoverPanelProps {
  readonly careerState: CareerState;
  readonly sourceFilmLabel?: string;
}

export function StudioCarryoverPanel({
  careerState,
  sourceFilmLabel,
}: StudioCarryoverPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_CARRYOVER_COPY[language];
  const locale = getFilmWorkIntlLocale(language);
  const studio = careerState.studio;

  return (
    <section className="next-project-card carryover-card">
      <div className="compact-card-heading">
        <div>
          <span className="eyebrow">
            {sourceFilmLabel
              ? copy.afterSourceFilm(sourceFilmLabel)
              : copy.studioCarryover}
          </span>
          <h3>{studio.name}</h3>
        </div>
        <span className="carryover-period">
          {copy.period(careerState.currentYear, careerState.currentQuarter.toUpperCase())}
        </span>
      </div>
      <dl className="carryover-stats">
        <CarryoverStat label={copy.money} value={formatMoney(studio.money, locale)} />
        <CarryoverStat
          label={copy.reputation}
          value={`${studio.reputation} / 100`}
        />
        <CarryoverStat label={copy.prestige} value={`${studio.prestige} / 100`} />
        <CarryoverStat
          label={copy.completedFilms}
          value={`${careerState.completedFilms.length}`}
        />
      </dl>
      <div className="identity-row">
        <span>{copy.studioIdentity}</span>
        <div className="tag-list">
          {careerState.identityTags.length > 0 ? (
            careerState.identityTags.map((tag) => (
              <span key={tag}>{copy.identityTags[tag]}</span>
            ))
          ) : (
            <span className="tag-muted">{copy.stillForming}</span>
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

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
