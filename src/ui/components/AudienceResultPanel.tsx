import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { STUDIO_CAREER_RELEASE_COPY } from "../../core/studioCareerReleaseCopy.js";
import type { AudienceResult, AudienceSegment } from "../../domain/release.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface AudienceResultPanelProps {
  readonly results: readonly AudienceResult[];
  readonly segments: readonly AudienceSegment[];
}

export function AudienceResultPanel({ results, segments }: AudienceResultPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_RELEASE_COPY[language].audience;
  return (
    <section className="release-result-section">
      <div className="release-result-heading"><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div>
      <div className="release-result-card-grid">
        {results.map((result) => {
          const segment = requireItem(segments, result.segmentId);
          return (
            <article className="release-result-card audience-card" key={result.segmentId}>
              <div className="result-card-heading"><div><span>{copy.segmentTypes[segment.type]}</span><strong>{segment.name}</strong></div><b>{result.satisfactionScore}</b></div>
              <dl className="audience-metrics">
                <Metric label={copy.interest} value={`${result.interestScore}/100`} />
                <Metric label={copy.satisfaction} value={`${result.satisfactionScore}/100`} />
                <Metric label={copy.wordOfMouth} value={`${result.wordOfMouth}/100`} />
                <Metric label={copy.viewers} value={result.estimatedViewers.toLocaleString(getFilmWorkIntlLocale(language))} />
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
function requireItem(items: readonly AudienceSegment[], id: string): AudienceSegment { const item = items.find((candidate) => candidate.id === id); if (!item) throw new Error(`Missing audience segment: ${id}`); return item; }
