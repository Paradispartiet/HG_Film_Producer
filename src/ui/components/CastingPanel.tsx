import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage";
import { STUDIO_CAREER_PRE_PRODUCTION_COPY } from "../../core/studioCareerPreProductionCopy";
import type { ActorCandidateOption } from "../demo/createPreProductionStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface CastingPanelProps {
  readonly candidates: readonly ActorCandidateOption[];
  readonly selectedActorIds: readonly string[];
  readonly onChange: (actorIds: readonly string[]) => void;
}

export function CastingPanel({ candidates, selectedActorIds, onChange }: CastingPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_PRE_PRODUCTION_COPY[language];
  const locale = getFilmWorkIntlLocale(language);

  function toggleActor(actorId: string) {
    onChange(selectedActorIds.includes(actorId)
      ? selectedActorIds.filter((id) => id !== actorId)
      : [...selectedActorIds, actorId]);
  }

  return (
    <section className="production-office-section" aria-labelledby="casting-heading">
      <div className="production-office-heading">
        <div><span className="office-step">{copy.casting.step}</span><h3 id="casting-heading">{copy.casting.heading}</h3></div>
        <p>{copy.casting.intro}</p>
      </div>
      <div className="casting-grid">
        {candidates.map((candidate) => (
          <label className={selectedActorIds.includes(candidate.id) ? "candidate-card candidate-card--selected" : "candidate-card"} key={candidate.id}>
            <input checked={selectedActorIds.includes(candidate.id)} onChange={() => toggleActor(candidate.id)} type="checkbox" />
            <div className="candidate-card-title"><strong>{candidate.name}</strong><span>{candidate.score.totalScore}</span></div>
            {candidate.previousFilmsTogether > 0 && (
              <span className="candidate-returning-badge">
                {copy.returning.workedTogether(candidate.previousFilmsTogether)}
                {candidate.chemistryTags.includes("studio_regular") && ` · ${copy.returning.studioRegular}`}
              </span>
            )}
            <p>{candidate.actingStyle} · {candidate.chemistryTags.slice(0, 2).join(" · ")}</p>
            <dl className="candidate-stats">
              <div><dt>{copy.casting.starPower}</dt><dd>{candidate.starPower}</dd></div>
              <div><dt>{copy.casting.reliability}</dt><dd>{candidate.reliability}</dd></div>
              <div><dt>{copy.casting.fee}</dt><dd>{formatMoney(candidate.fee, locale)}</dd></div>
            </dl>
          </label>
        ))}
      </div>
    </section>
  );
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
