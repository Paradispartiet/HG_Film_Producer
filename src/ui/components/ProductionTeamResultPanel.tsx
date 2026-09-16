import { STUDIO_CAREER_PRE_PRODUCTION_COPY } from "../../core/studioCareerPreProductionCopy.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface ProductionTeamResultPanelProps {
  readonly result: PreProductionStepResult;
  readonly compact?: boolean;
  readonly projectLabel?: string;
  readonly nextStepLabel?: string;
}

export function ProductionTeamResultPanel({
  result,
  compact = false,
  projectLabel,
  nextStepLabel
}: ProductionTeamResultPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_PRE_PRODUCTION_COPY[language];
  const evaluation = result.teamEvaluation;

  return (
    <section className={compact ? "panel production-result-panel production-result-panel--compact" : "panel production-result-panel"}>
      <div className="panel-heading">
        <div><span className="eyebrow">{copy.result.lockedEyebrow(projectLabel)}</span><h2>{copy.result.report}</h2></div>
        <span className="status-pill status-pill--positive">{nextStepLabel ?? (compact ? copy.result.shootUnlocked : copy.result.ready)}</span>
      </div>
      <div className="production-result-body">
        <div className="production-result-lead">
          <div><span>{copy.result.selectedLocation}</span><strong>{result.location.name}</strong></div>
          <div className="result-score-badge"><span>{copy.result.locationFit}</span><strong>{result.location.score}</strong></div>
        </div>
        <div className="result-notes result-notes--compact">
          <span className="section-label">{copy.result.locationNotes(result.location.projectLocationCount)}</span>
          <ul>{result.location.notes.map((note) => <li key={note}>{note}</li>)}</ul>
        </div>

        {!compact && (
        <div className="locked-team-grid">
          <ResultRoster title={copy.result.keyCrew(result.crew.projectCrewCount)} items={result.crew.hired.map((crewMember) => ({
            id: crewMember.id,
            name: crewMember.name,
            detail: crewMember.discipline === "directing"
              ? copy.crew.disciplines.directing
              : crewMember.discipline === "cinematography"
                ? copy.crew.disciplines.cinematography
                : crewMember.discipline === "editing"
                  ? copy.crew.disciplines.editing
                  : crewMember.roleLabel,
            score: crewMember.fitScore
          }))} />
          <ResultRoster title={copy.result.cast(result.casting.projectActorCount)} items={result.casting.actors.map((actor) => ({
            id: actor.id,
            name: actor.name,
            detail: copy.result.actor,
            score: actor.fitScore
          }))} />
        </div>
        )}

        <div className="chemistry-strip">
          <div><span>{copy.result.castingChemistry}</span><strong>{result.casting.chemistryScore} / 100</strong></div>
          <p>{result.casting.sharedChemistryTags.length > 0
            ? `${copy.result.sharedTags}: ${result.casting.sharedChemistryTags.join(", ")}`
            : result.casting.chemistryNote}</p>
        </div>

        <div className="team-evaluation">
          <div className="team-evaluation-heading"><span className="section-label">{copy.result.evaluation}</span><strong>{copy.result.overall(evaluation.overall)}</strong></div>
          <div className="evaluation-metrics">
            <EvaluationMetric label={copy.result.crewScore} value={evaluation.crewScore} scoreAria={copy.result.scoreAria} />
            <EvaluationMetric label={copy.result.castScore} value={evaluation.castScore} scoreAria={copy.result.scoreAria} />
            <EvaluationMetric label={copy.result.chemistry} value={evaluation.chemistryScore} scoreAria={copy.result.scoreAria} />
            <EvaluationMetric label={copy.result.reliability} value={evaluation.reliabilityScore} scoreAria={copy.result.scoreAria} />
            <EvaluationMetric label={copy.result.budgetPressure} value={evaluation.budgetPressure} scoreAria={copy.result.scoreAria} inverse />
          </div>
          {!compact && (
          <div className="result-notes result-notes--compact">
            <ul>{evaluation.notes.map((note) => <li key={note}>{note}</li>)}</ul>
          </div>
          )}
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

function EvaluationMetric({ label, value, scoreAria, inverse = false }: {
  readonly label: string;
  readonly value: number;
  readonly scoreAria: (label: string, value: number) => string;
  readonly inverse?: boolean;
}) {
  const width = inverse ? 100 - value : value;
  return (
    <div className="evaluation-metric">
      <div><span>{label}</span><strong>{value}</strong></div>
      <div className="score-track" aria-label={scoreAria(label, value)}><span style={{ width: `${width}%` }} /></div>
    </div>
  );
}
