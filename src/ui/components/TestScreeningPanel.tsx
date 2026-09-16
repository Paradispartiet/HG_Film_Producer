import { STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import type { TestScreeningResult } from "../../domain/post.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

export function TestScreeningPanel({ result }: { readonly result: TestScreeningResult }) {
  const copy = STUDIO_CAREER_POST_PRODUCTION_COPY[useFilmWorkLanguage()].screening;
  const metrics = [
    [copy.metrics.clarity, result.clarityScore], [copy.metrics.pacing, result.pacingScore], [copy.metrics.emotion, result.emotionScore],
    [copy.metrics.audienceHook, result.audienceHookScore], [copy.metrics.confusionRisk, result.confusionRisk]
  ] as const;
  return (
    <section className="post-result-section">
      <div className="post-section-heading"><div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div><p>{copy.description}</p></div>
      <div className="post-metric-grid">{metrics.map(([label, value]) => <div className="post-metric" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      <div className="screening-notes"><strong>{copy.recommendedChanges}</strong>{result.recommendedChanges.length ? <ul>{result.recommendedChanges.map((change) => <li key={change}>{change}</li>)}</ul> : <p>{copy.noRevision}</p>}</div>
    </section>
  );
}
