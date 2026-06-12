import type { NextProjectStepResult } from "../demo/createNextProjectStepRun.js";

interface NextProjectResultPanelProps {
  readonly result: NextProjectStepResult;
}

export function NextProjectResultPanel({
  result,
}: NextProjectResultPanelProps) {
  return (
    <section className="next-project-result" aria-live="polite">
      <div className="next-project-result-hero">
        <div>
          <span className="eyebrow">Film 2 created</span>
          <h3>{result.project.title}</h3>
          <p>{result.project.logline}</p>
        </div>
        <div className="ready-badge">
          <span>Next status</span>
          <strong>Ready for development</strong>
        </div>
      </div>
      <div className="next-project-result-grid">
        <div className="project-package-card">
          <span>New project package</span>
          <dl>
            <div>
              <dt>Genre</dt>
              <dd>{result.project.genre}</dd>
            </div>
            <div>
              <dt>Scale</dt>
              <dd>{formatScale(result.project.scale)}</dd>
            </div>
            <div>
              <dt>Script template</dt>
              <dd>{result.scriptTemplate.title}</dd>
            </div>
            <div>
              <dt>Strategic goal</dt>
              <dd>
                {result.selectedStrategicGoal?.title ??
                  "Current slate unchanged"}
              </dd>
            </div>
          </dl>
        </div>
        <div className="carried-studio-card">
          <span>Carried studio</span>
          <strong>{result.carriedStudio.name}</strong>
          <p>
            {formatMoney(result.carriedStudio.money)} · Reputation{" "}
            {result.carriedStudio.reputation} · Prestige{" "}
            {result.carriedStudio.prestige}
          </p>
          <small>
            Year {result.carriedCareerState.currentYear} ·{" "}
            {result.carriedCareerState.currentQuarter.toUpperCase()} ·{" "}
            {result.carriedCareerState.completedFilms.length} completed film
          </small>
        </div>
      </div>
      <div className="next-pipeline">
        <div className="compact-card-heading">
          <div>
            <span className="eyebrow">Film 2 pipeline</span>
            <h3>New slate opened</h3>
          </div>
        </div>
        <ol>
          {result.pipelineSteps.map((step, index) => (
            <li
              className={
                index === result.pipelineSteps.length - 1
                  ? "next-pipeline-current"
                  : ""
              }
              key={step.label}
            >
              <span>{index + 1}</span>
              <div>
                <strong>{step.label}</strong>
                <small>{step.detail}</small>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="development-handoff">
        <span>Next implementation task</span>
        <strong>Reuse the development flow for project 2</strong>
        <p>
          Development has not run automatically, and the completed first-film
          pipeline remains separate.
        </p>
      </div>
    </section>
  );
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function formatScale(value: string): string {
  return value.replace("_", " ");
}
