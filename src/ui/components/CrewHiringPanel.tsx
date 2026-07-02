import type { CrewCandidateGroup } from "../demo/createPreProductionStepRun.js";

interface CrewHiringPanelProps {
  readonly groups: readonly CrewCandidateGroup[];
  readonly selectedCrewIds: readonly string[];
  readonly onChange: (crewIds: readonly string[]) => void;
}

export function CrewHiringPanel({ groups, selectedCrewIds, onChange }: CrewHiringPanelProps) {
  function selectCandidate(group: CrewCandidateGroup, candidateId: string) {
    const groupIds = new Set(group.candidates.map((candidate) => candidate.id));
    onChange([...selectedCrewIds.filter((id) => !groupIds.has(id)), candidateId]);
  }

  return (
    <section className="production-office-section" aria-labelledby="crew-heading">
      <div className="production-office-heading">
        <div><span className="office-step">02 · Key crew</span><h3 id="crew-heading">Hire the department leads</h3></div>
        <p>Fill directing, cinematography and editing with one scored candidate each.</p>
      </div>
      <div className="crew-discipline-grid">
        {groups.map((group) => (
          <div className="crew-discipline" key={group.discipline}>
            <div className="discipline-title"><span>{group.label}</span><small>Required</small></div>
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
                      Worked together on {candidate.previousFilmsTogether} film{candidate.previousFilmsTogether === 1 ? "" : "s"}
                      {candidate.styleTags.includes("studio_regular") && " · Studio regular"}
                    </span>
                  )}
                  <p>{candidate.styleTags.slice(0, 3).map(formatLabel).join(" · ")}</p>
                  <dl className="candidate-stats">
                    <div><dt>Experience</dt><dd>{candidate.experience}</dd></div>
                    <div><dt>Reliability</dt><dd>{candidate.reliability}</dd></div>
                    <div><dt>Fee</dt><dd>{formatMoney(candidate.fee)}</dd></div>
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

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
