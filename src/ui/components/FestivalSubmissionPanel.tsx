import type { Festival, FestivalSubmissionResult } from "../../domain/release.js";

interface FestivalSubmissionPanelProps {
  readonly festivals: readonly Festival[];
  readonly selectedId: string;
  readonly result?: FestivalSubmissionResult;
  readonly disabled?: boolean;
  readonly inputName?: string;
  readonly onSelect: (festivalId: string) => void;
}

export function FestivalSubmissionPanel({ festivals, selectedId, result, disabled = false, inputName = "festival", onSelect }: FestivalSubmissionPanelProps) {
  return (
    <section className="release-choice-section" aria-labelledby="festival-heading">
      <div className="release-section-heading">
        <div><span className="eyebrow">Premiere circuit</span><h3 id="festival-heading">Choose one festival</h3></div>
        <p>Every release includes one deterministic submission. Prestige tiers demand stronger films.</p>
      </div>
      <div className="release-option-grid release-option-grid--festivals">
        {festivals.map((festival) => {
          const isResolved = result?.festivalId === festival.id;
          return (
            <label className={selectedId === festival.id ? "release-option-card release-option-card--selected release-option-card--festival" : "release-option-card release-option-card--festival"} key={festival.id}>
              <input checked={selectedId === festival.id} disabled={disabled} name={inputName} onChange={() => onSelect(festival.id)} type="radio" />
              <span className="release-card-kicker">{festival.tier} · {festival.city}</span>
              <strong>{festival.name}</strong>
              <div className="release-tags">{festival.profileTags.map((tag) => <span key={tag}>{formatLabel(tag)}</span>)}</div>
              <dl className="release-card-metrics release-card-metrics--festival">
                <Metric label="Prestige" value={`${festival.prestige}/100`} />
                <Metric label="Audience" value={`${festival.audienceReach}/100`} />
                <Metric label="Fee" value={formatMoney(festival.submissionCost)} />
              </dl>
              {isResolved && <span className={result.accepted ? "festival-result festival-result--accepted" : "festival-result"}>{result.accepted ? "Selected" : "Not selected"} · {result.selectionScore}/100</span>}
            </label>
          );
        })}
      </div>
    </section>
  );
}

function Metric({ label, value }: { readonly label: string; readonly value: string }) {
  return <div><dt>{label}</dt><dd>{value}</dd></div>;
}

function formatLabel(value: string): string { return value.replaceAll("_", " "); }
function formatMoney(value: number): string { return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }); }
