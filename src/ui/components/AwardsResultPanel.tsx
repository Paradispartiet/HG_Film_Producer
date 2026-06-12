import type { Award, AwardsOutcome } from "../../domain/release.js";

interface AwardsResultPanelProps { readonly result: AwardsOutcome; readonly awards: readonly Award[]; }

export function AwardsResultPanel({ result, awards }: AwardsResultPanelProps) {
  const nominationTitles = result.nominations.map((id) => awardTitle(awards, id));
  const winTitles = result.wins.map((id) => awardTitle(awards, id));
  return (
    <section className="release-result-section">
      <div className="release-result-heading"><span className="eyebrow">Awards circuit</span><h3>Awards outcome</h3></div>
      <div className="awards-summary-grid">
        <AwardColumn label="Nominations" titles={nominationTitles} />
        <AwardColumn label="Wins" titles={winTitles} />
        <dl className="awards-gains"><Metric label="Prestige gain" value={`+${result.prestigeGain}`} /><Metric label="Audience gain" value={`+${result.audienceGain}`} /></dl>
      </div>
      <ul className="release-note-list">{result.notes.map((note) => <li key={note}>{note}</li>)}</ul>
    </section>
  );
}
function AwardColumn({ label, titles }: { readonly label: string; readonly titles: readonly string[] }) { return <div className="award-column"><span>{label} · {titles.length}</span>{titles.length > 0 ? <ul>{titles.map((title) => <li key={title}>{title}</li>)}</ul> : <p>None this release.</p>}</div>; }
function Metric({ label, value }: { readonly label: string; readonly value: string }) { return <div><dt>{label}</dt><dd>{value}</dd></div>; }
function awardTitle(awards: readonly Award[], id: string): string { return awards.find((award) => award.id === id)?.title ?? id.replaceAll("_", " "); }
