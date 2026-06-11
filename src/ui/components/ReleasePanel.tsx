import type { DemoStudioRun } from "../demo/createDemoStudioRun";

interface ReleasePanelProps {
  readonly release: DemoStudioRun["releaseOutcome"];
}

export function ReleasePanel({ release }: ReleasePanelProps) {
  return (
    <section className="panel release-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">Market response</span><h2>Release report</h2></div>
        <span className={release.breakEven ? "status-pill status-pill--positive" : "status-pill"}>
          {release.breakEven ? "Break-even cleared" : "Below break-even"}
        </span>
      </div>
      <div className="release-grid">
        <ReleaseItem label="Strategy" value={release.strategy} />
        <ReleaseItem label="Festival result" value={`${release.festival} · ${release.festivalAccepted ? "Selected" : "Not selected"}`} />
        <ReleaseItem label="Review summary" value={`${release.reviewScore}/100 · “${release.reviewQuote}”`} wide />
        <ReleaseItem label="Audience summary" value={`${release.audienceScore}/100 satisfaction · ${release.estimatedViewers.toLocaleString("en-US")} viewers`} wide />
        <ReleaseItem label="Revenue result" value={`${formatMoney(release.grossRevenue)} gross · ${formatMoney(release.netRevenue)} net`} />
        <ReleaseItem label="Awards outcome" value={`${release.nominations} nominations · ${release.wins} wins`} />
      </div>
    </section>
  );
}

function ReleaseItem({ label, value, wide = false }: { readonly label: string; readonly value: string; readonly wide?: boolean }) {
  return <div className={wide ? "release-item release-item--wide" : "release-item"}><span>{label}</span><strong>{value}</strong></div>;
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 });
}
