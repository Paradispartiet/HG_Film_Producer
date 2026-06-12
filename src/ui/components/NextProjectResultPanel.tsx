import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { NextProjectStepResult } from "../demo/createNextProjectStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";

interface NextProjectResultPanelProps {
  readonly result: NextProjectStepResult;
  readonly developmentResult?: DevelopmentStepResult | null;
  readonly preProductionResult?: PreProductionStepResult | null;
  readonly shootResult?: ShootStepResult | null;
}

export function NextProjectResultPanel({
  result,
  developmentResult = null,
  preProductionResult = null,
  shootResult = null,
}: NextProjectResultPanelProps) {
  const developmentPipeline = developmentResult
    ? [...result.pipelineSteps, developmentResult.pipelineStep]
    : result.pipelineSteps;
  const preProductionPipeline = preProductionResult
    ? [...developmentPipeline, preProductionResult.pipelineStep]
    : developmentPipeline;
  const pipelineSteps = shootResult
    ? [...preProductionPipeline, shootResult.pipelineStep]
    : preProductionPipeline;

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
          <strong>{shootResult ? "Shoot day resolved" : preProductionResult ? "Pre-production locked" : developmentResult ? "Development action completed" : "Ready for development"}</strong>
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
          {pipelineSteps.map((step, index) => (
            <li
              className={
                index === pipelineSteps.length - 1
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
        <span>{shootResult ? "Film 2 shoot complete" : preProductionResult ? "Film 2 handoff" : developmentResult ? "Film 2 development" : "Next action"}</span>
        <strong>{shootResult ? "Next step: post-production for film 2" : preProductionResult ? "Start shoot for film 2" : developmentResult ? "Start pre-production for film 2" : "Reuse the development flow for project 2"}</strong>
        <p>
          {shootResult
            ? "The first shoot day is resolved. Film 2 post-production is intentionally not implemented in this PR."
            : preProductionResult
              ? "The location, crew and cast are locked. Choose one production event and resolve the film 2 shoot day."
            : developmentResult
              ? "The second film has completed one development action and is ready to reuse the shared pre-production office."
              : "Choose one development action for film 2. The completed first-film pipeline remains separate."}
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
