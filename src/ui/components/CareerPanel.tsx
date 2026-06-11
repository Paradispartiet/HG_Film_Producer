import type { DemoStudioRun } from "../demo/createDemoStudioRun";

interface CareerPanelProps {
  readonly career: DemoStudioRun["careerState"];
}

export function CareerPanel({ career }: CareerPanelProps) {
  return (
    <section className="panel career-panel">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">Long view</span>
          <h2>Studio career</h2>
        </div>
        <div className="score-badge" aria-label={`Career score ${career.evaluation.overall} out of 100`}>
          <strong>{career.evaluation.overall}</strong><span>/100</span>
        </div>
      </div>

      <div className="career-summary">
        <div>
          <span className="metric-label">Completed films</span>
          <strong className="large-number">{career.completedFilms.toString().padStart(2, "0")}</strong>
        </div>
        <div>
          <span className="metric-label">Year evaluation</span>
          <p>{career.evaluation.summary}</p>
        </div>
      </div>

      <div className="panel-section">
        <span className="section-label">Strategic goal</span>
        {career.goals.map((goal) => (
          <div className="goal" key={goal.title}>
            <span className="goal-indicator" aria-hidden="true" />
            <div><strong>{goal.title}</strong><p>{goal.description}</p></div>
          </div>
        ))}
      </div>

      <div className="panel-section">
        <span className="section-label">Studio identity</span>
        <div className="tags">
          {career.identityTags.map((tag) => <span className="tag" key={tag}>{tag.replace("_", " ")}</span>)}
        </div>
      </div>
    </section>
  );
}
