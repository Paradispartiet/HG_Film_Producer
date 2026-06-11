import type { ActorCandidateOption } from "../demo/createPreProductionStepRun.js";

interface CastingPanelProps {
  readonly candidates: readonly ActorCandidateOption[];
  readonly selectedActorIds: readonly string[];
  readonly onChange: (actorIds: readonly string[]) => void;
}

export function CastingPanel({ candidates, selectedActorIds, onChange }: CastingPanelProps) {
  function toggleActor(actorId: string) {
    onChange(selectedActorIds.includes(actorId)
      ? selectedActorIds.filter((id) => id !== actorId)
      : [...selectedActorIds, actorId]);
  }

  return (
    <section className="production-office-section" aria-labelledby="casting-heading">
      <div className="production-office-heading">
        <div><span className="office-step">03 · Casting</span><h3 id="casting-heading">Build the principal cast</h3></div>
        <p>Select at least two actors. Chemistry is calculated when the production plan is locked.</p>
      </div>
      <div className="casting-grid">
        {candidates.map((candidate) => (
          <label className={selectedActorIds.includes(candidate.id) ? "candidate-card candidate-card--selected" : "candidate-card"} key={candidate.id}>
            <input checked={selectedActorIds.includes(candidate.id)} onChange={() => toggleActor(candidate.id)} type="checkbox" />
            <div className="candidate-card-title"><strong>{candidate.name}</strong><span>{candidate.score.totalScore}</span></div>
            <p>{candidate.actingStyle} · {candidate.chemistryTags.slice(0, 2).join(" · ")}</p>
            <dl className="candidate-stats">
              <div><dt>Star power</dt><dd>{candidate.starPower}</dd></div>
              <div><dt>Reliability</dt><dd>{candidate.reliability}</dd></div>
              <div><dt>Fee</dt><dd>{formatMoney(candidate.fee)}</dd></div>
            </dl>
          </label>
        ))}
      </div>
    </section>
  );
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
