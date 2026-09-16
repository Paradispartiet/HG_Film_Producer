import { STUDIO_CAREER_RELEASE_COPY } from "../../core/studioCareerReleaseCopy.js";
import type { ReleaseOutcomeEvaluation, ReleaseStrategyScore } from "../../domain/release.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
import type { ProjectReleaseLabel } from "../types.js";

interface ReleaseOutcomeResultPanelProps {
  readonly evaluation: ReleaseOutcomeEvaluation;
  readonly strategyScore: ReleaseStrategyScore;
  readonly projectLabel: ProjectReleaseLabel;
}

export function ReleaseOutcomeResultPanel({ evaluation, strategyScore, projectLabel }: ReleaseOutcomeResultPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_RELEASE_COPY[language].outcome;
  const scores = [
    [copy.scores.strategy, evaluation.strategyScore], [copy.scores.festival, evaluation.festivalScore], [copy.scores.reviews, evaluation.reviewScore],
    [copy.scores.audience, evaluation.audienceScore], [copy.scores.revenue, evaluation.revenueScore], [copy.scores.awards, evaluation.awardsScore]
  ] as const;
  return (
    <section className="release-outcome-panel">
      <div className="release-outcome-hero"><div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.releasedHeading(projectLabel)}</h3><p>{copy.nextStep(projectLabel)}</p></div><div className="release-overall"><span>{copy.overall}</span><strong>{evaluation.overall}</strong><small>/100</small></div></div>
      <div className="release-score-grid">{scores.map(([label, score]) => <div key={label}><span>{label}</span><strong>{score}</strong><div><i style={{ width: `${score}%` }} /></div></div>)}</div>
      <div className="release-impact-grid"><Impact label={copy.reputationDelta} value={signed(evaluation.reputationDelta)} /><Impact label={copy.prestigeDelta} value={signed(evaluation.prestigeDelta)} /><Impact label={copy.audienceFit} value={`${strategyScore.audienceFit}/100`} /><Impact label={copy.riskFit} value={`${strategyScore.riskFit}/100`} /></div>
      <ul className="release-note-list">{[...strategyScore.notes, ...evaluation.notes].map((note) => <li key={note}>{note}</li>)}</ul>
    </section>
  );
}
function Impact({ label, value }: { readonly label: string; readonly value: string }) { return <div><span>{label}</span><strong>{value}</strong></div>; }
function signed(value: number): string { return value >= 0 ? `+${value}` : String(value); }
