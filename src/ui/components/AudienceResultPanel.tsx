import type { AudienceResult, AudienceSegment } from "../../domain/release.js";

interface AudienceResultPanelProps {
  readonly results: readonly AudienceResult[];
  readonly segments: readonly AudienceSegment[];
}

export function AudienceResultPanel({ results, segments }: AudienceResultPanelProps) {
  return (
    <section className="release-result-section">
      <div className="release-result-heading"><span className="eyebrow">Market response</span><h3>Audience results</h3></div>
      <div className="release-result-card-grid">
        {results.map((result) => {
          const segment = requireItem(segments, result.segmentId);
          return (
            <article className="release-result-card audience-card" key={result.segmentId}>
              <div className="result-card-heading"><div><span>{formatLabel(segment.type)}</span><strong>{segment.name}</strong></div><b>{result.satisfactionScore}</b></div>
              <dl className="audience-metrics">
                <Metric label="Interest" value={`${result.interestScore}/100`} />
                <Metric label="Satisfaction" value={`${result.satisfactionScore}/100`} />
                <Metric label="Word of mouth" value={`${result.wordOfMouth}/100`} />
                <Metric label="Viewers" value={result.estimatedViewers.toLocaleString("en-US")} />
              </dl>
              <ul className="release-compact-notes">{result.notes.map((note) => <li key={note}>{note}</li>)}</ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Metric({ label, value }: { readonly label: string; readonly value: string }) { return <div><dt>{label}</dt><dd>{value}</dd></div>; }
function formatLabel(value: string): string { return value.replaceAll("_", " "); }
function requireItem(items: readonly AudienceSegment[], id: string): AudienceSegment { const item = items.find((candidate) => candidate.id === id); if (!item) throw new Error(`Missing audience segment: ${id}`); return item; }
