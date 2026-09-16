import { STUDIO_CAREER_SHOOT_COPY } from "../../core/studioCareerShootCopy";
import type { ProjectShootLabel } from "../types.js";
import type { SceneDifficultySummary } from "../demo/createShootStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface SceneDifficultyPanelProps {
  readonly summaries: readonly SceneDifficultySummary[];
  readonly projectLabel?: ProjectShootLabel;
}

type DifficultyMetricLabels = {
  readonly conflictLoad: string;
  readonly emotionalLoad: string;
  readonly pacingPressure: string;
  readonly techniqueComplexity: string;
  readonly locationLogistics: string;
};

export function SceneDifficultyPanel({ summaries, projectLabel = "first film" }: SceneDifficultyPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SHOOT_COPY[language].difficulty;
  return (
    <section className="shoot-desk-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">{copy.eyebrow}</span><h3>{copy.heading}</h3></div>
        <p>{copy.intro(projectLabel)}</p>
      </div>
      <div className="scene-difficulty-grid">
        {summaries.map((summary) => (
          <article className="scene-difficulty-card" key={summary.scene.id}>
            <div className="scene-card-title"><span>{summary.functionName}</span><strong>{summary.scene.title}</strong></div>
            <DifficultyBars summary={summary} labels={copy} />
            <div className="difficulty-score"><span>{copy.score}</span><strong>{summary.difficulty.difficultyScore}</strong></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DifficultyBars({ summary, labels }: { readonly summary: SceneDifficultySummary; readonly labels: DifficultyMetricLabels }) {
  const metrics = [
    [labels.conflictLoad, summary.difficulty.conflictLoad],
    [labels.emotionalLoad, summary.difficulty.emotionalLoad],
    [labels.pacingPressure, summary.difficulty.pacingPressure],
    [labels.techniqueComplexity, summary.difficulty.techniqueComplexity],
    [labels.locationLogistics, summary.difficulty.locationLogistics]
  ] as const;
  return <dl className="difficulty-metrics">{metrics.map(([label, value]) => <div key={label}><dt>{label}</dt><dd><span style={{ width: `${value}%` }} /><b>{value}</b></dd></div>)}</dl>;
}
