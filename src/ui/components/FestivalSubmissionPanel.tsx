import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { STUDIO_CAREER_RELEASE_COPY } from "../../core/studioCareerReleaseCopy.js";
import type { Festival, FestivalSubmissionResult } from "../../domain/release.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface FestivalSubmissionPanelProps {
  readonly festivals: readonly Festival[];
  readonly selectedId: string;
  readonly result?: FestivalSubmissionResult;
  readonly disabled?: boolean;
  readonly inputName?: string;
  readonly onSelect: (festivalId: string) => void;
}

export function FestivalSubmissionPanel({ festivals, selectedId, result, disabled = false, inputName = "festival", onSelect }: FestivalSubmissionPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_RELEASE_COPY[language].festival;
  return (
    <section className="release-choice-section" aria-labelledby="festival-heading">
      <div className="release-section-heading">
        <div><span className="eyebrow">{copy.eyebrow}</span><h3 id="festival-heading">{copy.heading}</h3></div>
        <p>{copy.description}</p>
      </div>
      <div className="release-option-grid release-option-grid--festivals">
        {festivals.map((festival) => {
          const isResolved = result?.festivalId === festival.id;
          return (
            <label className={selectedId === festival.id ? "release-option-card release-option-card--selected release-option-card--festival" : "release-option-card release-option-card--festival"} key={festival.id}>
              <input checked={selectedId === festival.id} disabled={disabled} name={inputName} onChange={() => onSelect(festival.id)} type="radio" />
              <span className="release-card-kicker">{copy.tiers[festival.tier]} · {festival.city}</span>
              <strong>{festival.name}</strong>
              <div className="release-tags">{festival.profileTags.map((tag) => <span key={tag}>{formatLabel(tag)}</span>)}</div>
              <dl className="release-card-metrics release-card-metrics--festival">
                <Metric label={copy.prestige} value={`${festival.prestige}/100`} />
                <Metric label={copy.audience} value={`${festival.audienceReach}/100`} />
                <Metric label={copy.fee} value={formatMoney(language, festival.submissionCost)} />
              </dl>
              {isResolved && <span className={result.accepted ? "festival-result festival-result--accepted" : "festival-result"}>{result.accepted ? copy.selected : copy.notSelected} · {result.selectionScore}/100</span>}
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
function formatMoney(language: Parameters<typeof getFilmWorkIntlLocale>[0], value: number): string { return value.toLocaleString(getFilmWorkIntlLocale(language), { style: "currency", currency: "USD", maximumFractionDigits: 0 }); }
