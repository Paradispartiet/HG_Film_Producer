import { STUDIO_CAREER_RELEASE_COPY } from "../../core/studioCareerReleaseCopy.js";
import type { Award, AwardsOutcome } from "../../domain/release.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface AwardsResultPanelProps { readonly result: AwardsOutcome; readonly awards: readonly Award[]; }

export function AwardsResultPanel({ result, awards }: AwardsResultPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_RELEASE_COPY[language].awards;
  const nominationTitles = result.nominations.map((id) => awardTitle(awards, id));
  const winTitles = result.wins.map((id) => awardTitle(awards, id));
  return (
    <section className="release-result-section">
      <div className="release-result-heading"><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div>
      <div className="awards-summary-grid">
        <AwardColumn emptyLabel={copy.none} label={copy.nominations} titles={nominationTitles} />
        <AwardColumn emptyLabel={copy.none} label={copy.wins} titles={winTitles} />
        <dl className="awards-gains"><Metric label={copy.prestigeGain} value={`+${result.prestigeGain}`} /><Metric label={copy.audienceGain} value={`+${result.audienceGain}`} /></dl>
      </div>
      <ul className="release-note-list">{result.notes.map((note) => <li key={note}>{note}</li>)}</ul>
    </section>
  );
}
function AwardColumn({ label, titles, emptyLabel }: { readonly label: string; readonly titles: readonly string[]; readonly emptyLabel: string }) { return <div className="award-column"><span>{label} · {titles.length}</span>{titles.length > 0 ? <ul>{titles.map((title) => <li key={title}>{title}</li>)}</ul> : <p>{emptyLabel}</p>}</div>; }
function Metric({ label, value }: { readonly label: string; readonly value: string }) { return <div><dt>{label}</dt><dd>{value}</dd></div>; }
function awardTitle(awards: readonly Award[], id: string): string { return awards.find((award) => award.id === id)?.title ?? id.replaceAll("_", " "); }
