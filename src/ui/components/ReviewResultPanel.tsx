import type { ReactNode } from "react";
import type { CriticProfile, ReviewResult } from "../../domain/release.js";

interface ReviewResultPanelProps {
  readonly reviews: readonly ReviewResult[];
  readonly critics: readonly CriticProfile[];
}

export function ReviewResultPanel({ reviews, critics }: ReviewResultPanelProps) {
  return (
    <ResultSection eyebrow="Critical response" title="Reviews">
      <div className="release-result-card-grid">
        {reviews.map((review) => {
          const critic = requireItem(critics, review.criticProfileId, "critic");
          return (
            <article className="release-result-card review-card" key={review.criticProfileId}>
              <div className="result-card-heading"><div><span>{formatLabel(critic.type)}</span><strong>{critic.name}</strong></div><b>{review.score}</b></div>
              <blockquote>“{review.pullQuote}”</blockquote>
              <div className={`sentiment sentiment--${review.sentiment}`}>{review.sentiment}</div>
              <dl className="release-delta-grid"><Metric label="Reputation" value={signed(review.reputationDelta)} /><Metric label="Prestige" value={signed(review.prestigeDelta)} /></dl>
            </article>
          );
        })}
      </div>
    </ResultSection>
  );
}

function ResultSection({ eyebrow, title, children }: { readonly eyebrow: string; readonly title: string; readonly children: ReactNode }) {
  return <section className="release-result-section"><div className="release-result-heading"><span className="eyebrow">{eyebrow}</span><h3>{title}</h3></div>{children}</section>;
}
function Metric({ label, value }: { readonly label: string; readonly value: string }) { return <div><dt>{label}</dt><dd>{value}</dd></div>; }
function signed(value: number): string { return value >= 0 ? `+${value}` : String(value); }
function formatLabel(value: string): string { return value.replaceAll("_", " "); }
function requireItem<T extends { readonly id: string }>(items: readonly T[], id: string, label: string): T { const item = items.find((candidate) => candidate.id === id); if (!item) throw new Error(`Missing ${label}: ${id}`); return item; }
