import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";

interface ProductionTeamResultPanelProps {
  readonly result: PreProductionStepResult;
}

export function ProductionTeamResultPanel({ result }: ProductionTeamResultPanelProps) {
  const evaluation = result.teamEvaluation;

  return (
    <section className="panel production-result-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">Pre-production locked</span><h2>Production team report</h2></div>
        <span className="status-pill status-pill--positive">Ready</span>
      </div>
      <div className="production-result-body">
        <div className="production-result-lead">
          <div><span>Selected location</span><strong>{result.location.name}</strong></div>
          <div className="result-score-badge"><span>Location fit</span><strong>{result.location.score}</strong></div>
        </div>
        <div className="result-notes result-notes--compact">
          <span className="section-label">Location notes · {result.location.projectLocationCount} attached</span>
          <ul>{result.location.notes.map((note) => <li key={note}>{note}</li>)}</ul>
        </div>

        <div className="locked-team-grid">
          <ResultRoster title={`Key crew · ${result.crew.projectCrewCount}`} items={result.crew.hired.map((crewMember) => ({
            id: crewMember.id,
            name: crewMember.name,
            detail: crewMember.roleLabel,
            score: crewMember.fitScore
          }))} />
          <ResultRoster title={`Cast · ${result.casting.projectActorCount}`} items={result.casting.actors.map((actor) => ({
            id: actor.id,
            name: actor.name,
            detail: "Actor",
            score: actor.fitScore
          }))} />
        </div>

        <div className="chemistry-strip">
          <div><span>Casting chemistry</span><strong>{result.casting.chemistryScore} / 100</strong></div>
          <p>{result.casting.sharedChemistryTags.length > 0
            ? `Shared tags: ${result.casting.sharedChemistryTags.join(", ")}`
            : result.casting.chemistryNote}</p>
        </div>

        <div className="team-evaluation">
          <div className="team-evaluation-heading"><span className="section-label">Production team evaluation</span><strong>{evaluation.overall} overall</strong></div>
          <div className="evaluation-metrics">
            <EvaluationMetric label="Crew score" value={evaluation.crewScore} />
            <EvaluationMetric label="Cast score" value={evaluation.castScore} />
            <EvaluationMetric label="Chemistry" value={evaluation.chemistryScore} />
            <EvaluationMetric label="Reliability" value={evaluation.reliabilityScore} />
            <EvaluationMetric label="Budget pressure" value={evaluation.budgetPressure} inverse />
          </div>
          <div className="result-notes result-notes--compact">
            <ul>{evaluation.notes.map((note) => <li key={note}>{note}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

interface RosterItem {
  readonly id: string;
  readonly name: string;
  readonly detail: string;
  readonly score: number;
}

function ResultRoster({ title, items }: { readonly title: string; readonly items: readonly RosterItem[] }) {
  return (
    <div className="result-roster">
      <span className="section-label">{title}</span>
      <ul>{items.map((item) => (
        <li key={item.id}>
          <div><strong>{item.name}</strong><span>{item.detail}</span></div>
          <b>{item.score}</b>
        </li>
      ))}</ul>
    </div>
  );
}

function EvaluationMetric({ label, value, inverse = false }: {
  readonly label: string;
  readonly value: number;
  readonly inverse?: boolean;
}) {
  const width = inverse ? 100 - value : value;
  return (
    <div className="evaluation-metric">
      <div><span>{label}</span><strong>{value}</strong></div>
      <div className="score-track" aria-label={`${label} ${value} out of 100`}><span style={{ width: `${width}%` }} /></div>
    </div>
  );
}
