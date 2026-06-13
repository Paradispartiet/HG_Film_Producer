import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { NextProjectStepResult } from "../demo/createNextProjectStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun.js";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun.js";

interface NextProjectResultPanelProps {
  readonly result: NextProjectStepResult;
  readonly developmentResult?: DevelopmentStepResult | null;
  readonly preProductionResult?: PreProductionStepResult | null;
  readonly shootResult?: ShootStepResult | null;
  readonly postProductionResult?: PostProductionStepResult | null;
  readonly releaseResult?: ReleaseStepResult | null;
  readonly careerApplicationResult?: CareerApplicationStepResult | null;
}

export function NextProjectResultPanel({
  result,
  developmentResult = null,
  preProductionResult = null,
  shootResult = null,
  postProductionResult = null,
  releaseResult = null,
  careerApplicationResult = null,
}: NextProjectResultPanelProps) {
  const developmentPipeline = developmentResult
    ? [...result.pipelineSteps, developmentResult.pipelineStep]
    : result.pipelineSteps;
  const preProductionPipeline = preProductionResult
    ? [...developmentPipeline, preProductionResult.pipelineStep]
    : developmentPipeline;
  const shootPipeline = shootResult
    ? [...preProductionPipeline, shootResult.pipelineStep]
    : preProductionPipeline;
  const postProductionPipeline = postProductionResult
    ? [...shootPipeline, postProductionResult.pipelineStep]
    : shootPipeline;
  const releasePipeline = releaseResult
    ? [...postProductionPipeline, releaseResult.pipelineStep]
    : postProductionPipeline;
  const pipelineSteps = careerApplicationResult
    ? [...releasePipeline, careerApplicationResult.pipelineStep]
    : releasePipeline;

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
          <strong>{careerApplicationResult ? "Studio updated" : releaseResult ? "Film released" : postProductionResult ? "Post-production locked" : shootResult ? "Shoot day resolved" : preProductionResult ? "Pre-production locked" : developmentResult ? "Development action completed" : "Ready for development"}</strong>
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
          <span>{careerApplicationResult ? "Updated studio" : "Carried studio"}</span>
          <strong>{result.carriedStudio.name}</strong>
          <p>
            {formatMoney(careerApplicationResult?.updatedStudio.money ?? result.carriedStudio.money)} · Reputation{" "}
            {careerApplicationResult?.updatedStudio.reputation ?? result.carriedStudio.reputation} · Prestige{" "}
            {careerApplicationResult?.updatedStudio.prestige ?? result.carriedStudio.prestige}
          </p>
          <small>
            Year {careerApplicationResult?.updatedCareerState.currentYear ?? result.carriedCareerState.currentYear} ·{" "}
            {(careerApplicationResult?.updatedCareerState.currentQuarter ?? result.carriedCareerState.currentQuarter).toUpperCase()} ·{" "}
            {careerApplicationResult?.updatedCareerState.completedFilms.length ?? result.carriedCareerState.completedFilms.length} completed films
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
        <span>{careerApplicationResult ? "Film 2 applied" : releaseResult ? "Film 2 released" : postProductionResult ? "Film 2 cut locked" : shootResult ? "Film 2 shoot complete" : preProductionResult ? "Film 2 handoff" : developmentResult ? "Film 2 development" : "Next action"}</span>
        <strong>{careerApplicationResult ? "Next step: start film 3" : releaseResult ? "Next step: apply film 2 to studio/career" : postProductionResult ? "Release film 2" : shootResult ? "Start post-production for film 2" : preProductionResult ? "Start shoot for film 2" : developmentResult ? "Start pre-production for film 2" : "Reuse the development flow for project 2"}</strong>
        <p>
          {careerApplicationResult
            ? "Film 2 is recorded in the studio ledger and career filmography. Film 3 is intentionally not started here."
            : releaseResult
            ? "The film 2 release is complete. Close the film 2 year to update the carried-forward studio and career."
            : postProductionResult
            ? "The film 2 cut is locked. Choose a release strategy and festival to resolve the release."
            : shootResult
              ? "The first shoot day is resolved. Select all five finishing decisions and lock post-production for film 2."
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
