import type { ProjectShootLabel } from "../types.js";
import type { SceneDifficultySummary } from "../demo/createShootStepRun.js";

interface SceneDifficultyPanelProps {
  readonly summaries: readonly SceneDifficultySummary[];
  readonly projectLabel?: ProjectShootLabel;
}

export function SceneDifficultyPanel({ summaries, projectLabel = "first film" }: SceneDifficultyPanelProps) {
  return (
    <section className="shoot-desk-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">Scene pressure</span><h3>Difficulty cards</h3></div>
        <p>Starter scenes for the first playable shoot step of {projectLabel}.</p>
      </div>
      <div className="scene-difficulty-grid">
        {summaries.map((summary) => (
          <article className="scene-difficulty-card" key={summary.scene.id}>
            <div className="scene-card-title">
              <span>{summary.functionName}</span>
              <strong>{summary.scene.title}</strong>
            </div>
            <DifficultyBars summary={summary} />
            <div className="difficulty-score"><span>Difficulty score</span><strong>{summary.difficulty.difficultyScore}</strong></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DifficultyBars({ summary }: { readonly summary: SceneDifficultySummary }) {
  const metrics = [
    ["Conflict load", summary.difficulty.conflictLoad],
    ["Emotional load", summary.difficulty.emotionalLoad],
    ["Pacing pressure", summary.difficulty.pacingPressure],
    ["Technique complexity", summary.difficulty.techniqueComplexity],
    ["Location logistics", summary.difficulty.locationLogistics]
  ] as const;

  return (
    <dl className="difficulty-metrics">
      {metrics.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd><span style={{ width: `${value}%` }} /><b>{value}</b></dd>
        </div>
      ))}
    </dl>
  );
}
