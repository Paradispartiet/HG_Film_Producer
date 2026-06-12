import type { TestScreeningResult } from "../../domain/post.js";

export function TestScreeningPanel({ result }: { readonly result: TestScreeningResult }) {
  const metrics = [
    ["Clarity", result.clarityScore], ["Pacing", result.pacingScore], ["Emotion", result.emotionScore],
    ["Audience hook", result.audienceHookScore], ["Confusion risk", result.confusionRisk]
  ] as const;
  return (
    <section className="post-result-section">
      <div className="post-section-heading"><div><span className="eyebrow">Test screening</span><h3>Audience room readout</h3></div><p>Deterministic feedback from the current cut and first shoot-day evidence.</p></div>
      <div className="post-metric-grid">{metrics.map(([label, value]) => <div className="post-metric" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      <div className="screening-notes"><strong>Recommended changes</strong>{result.recommendedChanges.length ? <ul>{result.recommendedChanges.map((change) => <li key={change}>{change}</li>)}</ul> : <p>No major revision priority was identified.</p>}</div>
    </section>
  );
}
