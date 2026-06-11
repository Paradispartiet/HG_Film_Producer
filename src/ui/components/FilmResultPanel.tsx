import type { DemoStudioRun } from "../demo/createDemoStudioRun";

interface FilmResultPanelProps {
  readonly result: DemoStudioRun["filmResult"];
}

export function FilmResultPanel({ result }: FilmResultPanelProps) {
  const scores = [
    ["Quality", result.quality],
    ["Audience appeal", result.audienceAppeal],
    ["Critical appeal", result.criticalAppeal]
  ] as const;

  return (
    <section className="panel result-panel">
      <div className="panel-heading"><div><span className="eyebrow">Locked picture</span><h2>Film result</h2></div></div>
      <div className="result-scores">
        {scores.map(([label, score]) => (
          <div className="result-score" key={label}>
            <div><span>{label}</span><strong>{score}</strong></div>
            <div className="score-track"><span style={{ width: `${score}%` }} /></div>
          </div>
        ))}
      </div>
      <div className="financial-pair">
        <div><span>Budget spent</span><strong>{formatMoney(result.budgetSpent)}</strong></div>
        <div><span>Revenue estimate</span><strong>{formatMoney(result.revenueEstimate)}</strong></div>
      </div>
    </section>
  );
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 });
}
