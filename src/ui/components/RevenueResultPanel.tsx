import type { RevenueResult } from "../../domain/release.js";

export function RevenueResultPanel({ result }: { readonly result: RevenueResult }) {
  return (
    <section className="release-result-section">
      <div className="release-result-heading release-result-heading--split"><div><span className="eyebrow">Release P&amp;L</span><h3>Revenue result</h3></div><span className={result.breakEven ? "status-pill status-pill--positive" : "status-pill"}>{result.breakEven ? "Break-even" : "Below break-even"}</span></div>
      <dl className="release-finance-grid">
        <Metric label="Gross revenue" value={formatMoney(result.grossRevenue)} accent />
        <Metric label="Marketing spend" value={formatMoney(result.marketingSpend)} />
        <Metric label="Distribution cost" value={formatMoney(result.distributionCost)} />
        <Metric label="Net revenue" value={formatMoney(result.netRevenue)} accent={result.netRevenue >= 0} />
        <Metric label="ROI" value={`${(result.roi * 100).toFixed(0)}%`} />
      </dl>
      <Notes notes={result.notes} />
    </section>
  );
}
function Metric({ label, value, accent = false }: { readonly label: string; readonly value: string; readonly accent?: boolean }) { return <div className={accent ? "release-finance-metric release-finance-metric--accent" : "release-finance-metric"}><dt>{label}</dt><dd>{value}</dd></div>; }
function Notes({ notes }: { readonly notes: readonly string[] }) { return <ul className="release-note-list">{notes.map((note) => <li key={note}>{note}</li>)}</ul>; }
function formatMoney(value: number): string { return value.toLocaleString("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 }); }
