import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage";
import { STUDIO_CAREER_PRE_PRODUCTION_COPY } from "../../core/studioCareerPreProductionCopy";
import type { CrewCandidateGroup } from "../demo/createPreProductionStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface CrewHiringPanelProps {
  readonly groups: readonly CrewCandidateGroup[];
  readonly selectedCrewIds: readonly string[];
  readonly onChange: (crewIds: readonly string[]) => void;
}

export function CrewHiringPanel({ groups, selectedCrewIds, onChange }: CrewHiringPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_PRE_PRODUCTION_COPY[language];
  const locale = getFilmWorkIntlLocale(language);

  function selectCandidate(group: CrewCandidateGroup, candidateId: string) {
    const groupIds = new Set(group.candidates.map((candidate) => candidate.id));
    onChange([...selectedCrewIds.filter((id) => !groupIds.has(id)), candidateId]);
  }

  return (
    <section className="production-office-section" aria-labelledby="crew-heading">
      <div className="production-office-heading">
        <div><span className="office-step">{copy.crew.step}</span><h3 id="crew-heading">{copy.crew.heading}</h3></div>
        <p>{copy.crew.intro}</p>
      </div>
      <div className="crew-discipline-grid">
        {groups.map((group) => (
          <div className="crew-discipline" key={group.discipline}>
            <div className="discipline-title"><span>{copy.crew.disciplines[group.discipline]}</span><small>{copy.crew.required}</small></div>
            <div className="candidate-stack">
              {group.candidates.map((candidate) => (
                <label className={selectedCrewIds.includes(candidate.id) ? "candidate-card candidate-card--selected" : "candidate-card"} key={candidate.id}>
                  <input
                    checked={selectedCrewIds.includes(candidate.id)}
                    name={`crew-${group.discipline}`}
                    onChange={() => selectCandidate(group, candidate.id)}
                    type="radio"
                  />
                  <div className="candidate-card-title"><strong>{candidate.name}</strong><span>{candidate.score.totalScore}</span></div>
                  {candidate.previousFilmsTogether > 0 && (
                    <span className="candidate-returning-badge">
                      {copy.returning.workedTogether(candidate.previousFilmsTogether)}
                      {candidate.styleTags.includes("studio_regular") && ` · ${copy.returning.studioRegular}`}
                    </span>
                  )}
                  <p>{candidate.styleTags.slice(0, 3).map(formatLabel).join(" · ")}</p>
                  <dl className="candidate-stats">
                    <div><dt>{copy.crew.experience}</dt><dd>{candidate.experience}</dd></div>
                    <div><dt>{copy.crew.reliability}</dt><dd>{candidate.reliability}</dd></div>
                    <div><dt>{copy.crew.fee}</dt><dd>{formatMoney(candidate.fee, locale)}</dd></div>
                  </dl>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
