import { STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import type { TestScreeningResult } from "../../domain/post.js";
import type { StudioCareerEditingApproachId } from "../../core/studioCareerEditingApproach.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

export function TestScreeningPanel({ result, scriptDraftScore, editingApproachId }: { readonly result: TestScreeningResult; readonly scriptDraftScore?: number | undefined; readonly editingApproachId?: StudioCareerEditingApproachId | undefined }) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_POST_PRODUCTION_COPY[language].screening;
  const metrics = [
    [copy.metrics.clarity, result.clarityScore], [copy.metrics.pacing, result.pacingScore], [copy.metrics.emotion, result.emotionScore],
    [copy.metrics.audienceHook, result.audienceHookScore], [copy.metrics.confusionRisk, result.confusionRisk]
  ] as const;
  return (
    <section className="post-result-section">
      <div className="post-section-heading"><div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div><p>{copy.description}</p></div>
      {scriptDraftScore !== undefined && Number.isFinite(scriptDraftScore) && (
        <p className="script-screening-evidence">{copy.scriptDraftEvidence(Math.round(scriptDraftScore))}</p>
      )}
      {editingApproachId && copy.editingEffect[editingApproachId] && (
        <p className="editing-tradeoff-evidence">{copy.editingEffect[editingApproachId]}</p>
      )}
      <div className="post-metric-grid">{metrics.map(([label, value]) => <div className="post-metric" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      <div className="screening-notes"><strong>{copy.recommendedChanges}</strong>{result.recommendedChanges.length ? <ul>{result.recommendedChanges.map((change) => <li key={change}>{change}</li>)}</ul> : <p>{copy.noRevision}</p>}</div>
    </section>
  );
}
