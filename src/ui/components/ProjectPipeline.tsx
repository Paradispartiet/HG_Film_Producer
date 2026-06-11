import type { DemoStudioRun } from "../demo/createDemoStudioRun";

interface ProjectPipelineProps {
  readonly project: DemoStudioRun["filmProject"];
  readonly steps: DemoStudioRun["pipelineSteps"];
}

export function ProjectPipeline({ project, steps }: ProjectPipelineProps) {
  return (
    <section className="panel pipeline-panel">
      <div className="panel-heading project-heading">
        <div>
          <span className="eyebrow">Active production</span>
          <h2>{project.title}</h2>
          <p>{project.logline}</p>
        </div>
        <div className="project-meta">
          <span>{project.genre}</span><span>{project.scale.replace("_", " ")}</span>
        </div>
      </div>
      <ol className="pipeline-list">
        {steps.map((step, index) => (
          <li key={step.label}>
            <div className="pipeline-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="pipeline-copy"><strong>{step.label}</strong><span>{step.detail}</span></div>
            <div className="pipeline-score">
              <span>{step.score}</span>
              <div className="score-track" aria-label={`${step.label} score ${step.score} out of 100`}>
                <span style={{ width: `${step.score}%` }} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
