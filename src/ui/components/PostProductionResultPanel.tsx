import { formatStudioCareerPostProductionMoney, formatStudioCareerPostProductionStats, STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import type { PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
import type { ProjectPostProductionLabel } from "../types.js";
import { TestScreeningPanel } from "./TestScreeningPanel.js";

interface PostProductionResultPanelProps {
  readonly result: PostProductionStepResult;
  readonly projectLabel?: ProjectPostProductionLabel;
}

export function PostProductionResultPanel({ result, projectLabel = "first film" }: PostProductionResultPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_POST_PRODUCTION_COPY[language].result;
  const evaluation = result.postProductionEvaluation;
  const metrics = [
    [copy.metrics.edit, `${evaluation.editScore}`], [copy.metrics.sound, `${evaluation.soundScore}`], [copy.metrics.music, `${evaluation.musicScore}`],
    [copy.metrics.color, `${evaluation.colorScore}`], [copy.metrics.screening, `${evaluation.testScreeningScore}`], [copy.metrics.trailer, `${evaluation.trailerScore}`],
    [copy.metrics.lockedCut, `${evaluation.lockedCutQuality}`], [copy.metrics.overall, `${evaluation.overall}`]
  ] as const;
  const decisions = Object.values(result.appliedDecisions);
  const isLaterFilm = projectLabel !== "first film";
  return (
    <section className={`panel post-production-result-panel${isLaterFilm ? " post-production-result-panel--later-project" : ""}`}>
      <div className="post-panel-heading"><div><span className="eyebrow">{copy.lockedEyebrow(projectLabel)}</span><h2>{copy.heading(projectLabel)}</h2></div><div className="locked-cut-score"><span>{copy.overall}</span><strong>{evaluation.overall}</strong></div></div>
      <div className="applied-decision-grid">{decisions.map((decision) => <div key={decision.title}><span>{formatStudioCareerPostProductionMoney(decision.cost, language)}</span><strong>{decision.title}</strong><p>{formatStudioCareerPostProductionStats(decision.statChanges, language)}</p></div>)}</div>
      <TestScreeningPanel result={result.testScreeningResult} />
      <section className="post-result-section">
        <div className="post-section-heading"><div><span className="eyebrow">{copy.finalEyebrow}</span><h3>{copy.scorecardHeading}</h3></div><p>{copy.totalCost(formatStudioCareerPostProductionMoney(evaluation.totalCost, language))}</p></div>
        <div className="post-metric-grid post-metric-grid--wide">{metrics.map(([label, value]) => <div className="post-metric" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        <ul className="post-note-list">{evaluation.notes.map((note) => <li key={note}>{note}</li>)}<li>{result.trailerCutResult.note}</li></ul>
        <div className="next-step-strip"><span>{copy.nextStep}</span><strong>{copy.nextMessage(projectLabel)}</strong></div>
      </section>
    </section>
  );
}
