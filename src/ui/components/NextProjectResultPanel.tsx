import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { NextProjectStepResult } from "../demo/createNextProjectStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun.js";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun.js";

interface NextProjectResultPanelProps {
  readonly result: NextProjectStepResult;
  readonly projectNumber?: number;
  readonly developmentResult?: DevelopmentStepResult | null;
  readonly preProductionResult?: PreProductionStepResult | null;
  readonly shootResult?: ShootStepResult | null;
  readonly postProductionResult?: PostProductionStepResult | null;
  readonly releaseResult?: ReleaseStepResult | null;
  readonly careerApplicationResult?: CareerApplicationStepResult | null;
}

export function NextProjectResultPanel({
  result,
  projectNumber = 2,
  developmentResult = null,
  preProductionResult = null,
  shootResult = null,
  postProductionResult = null,
  releaseResult = null,
  careerApplicationResult = null,
}: NextProjectResultPanelProps) {
  const projectLabel = `Film ${projectNumber}`;
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
          <span className="eyebrow">{projectLabel} created</span>
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
            <span className="eyebrow">{projectLabel} pipeline</span>
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
        <span>
          {careerApplicationResult
            ? `${projectLabel} applied`
            : releaseResult
              ? `${projectLabel} released`
              : postProductionResult
                ? `${projectLabel} cut locked`
                : shootResult
                  ? `${projectLabel} shoot complete`
                  : preProductionResult
                    ? `${projectLabel} handoff`
                    : developmentResult
                      ? `${projectLabel} development`
                      : "Next action"}
        </span>
        <strong>
          {projectNumber === 4
            ? preProductionResult
              ? "Next step: shoot film 4"
              : developmentResult
                ? "Start pre-production for film 4"
                : "Next step: develop film 4"
            : projectNumber === 3
            ? careerApplicationResult
              ? "Next step: start film 4"
              : releaseResult
              ? "Next step: apply film 3 to studio/career"
              : postProductionResult
              ? "Next step: release film 3"
              : shootResult
              ? "Next step: post-production for film 3"
              : preProductionResult
              ? "Start shoot for film 3"
              : developmentResult
              ? "Start pre-production for film 3"
              : "Next step: develop film 3"
            : careerApplicationResult
              ? "Next step: start film 3"
              : releaseResult
                ? "Next step: apply film 2 to studio/career"
                : postProductionResult
                  ? "Release film 2"
                  : shootResult
                    ? "Start post-production for film 2"
                    : preProductionResult
                      ? "Start shoot for film 2"
                      : developmentResult
                        ? "Start pre-production for film 2"
                        : "Reuse the development flow for project 2"}
        </strong>
        <p>
          {projectNumber === 4
            ? preProductionResult
              ? "Film 4 has locked its location, required crew and cast through the shared pre-production office. The shoot step is intentionally deferred to a later PR."
              : developmentResult
                ? "Film 4 has completed one shared development action and is ready to use the shared pre-production office."
                : "Film 4 has been created from the updated career after film 3. Choose one shared development action to continue."
            : projectNumber === 3
            ? careerApplicationResult
              ? "Film 3 is recorded in the studio ledger and career filmography. Film 4 can now be created from that updated career."
              : releaseResult
              ? "Film 3 has completed the shared release flow. Applying it to the studio and career is intentionally deferred to the next step."
              : postProductionResult
              ? "Film 3 has locked post-production through the shared finishing flow. Choose a release strategy and festival to resolve the release."
              : shootResult
              ? "Film 3 has resolved its first shoot day through the shared shoot flow. Select all five finishing decisions and lock post-production."
              : preProductionResult
              ? "Film 3 has locked its location, required crew and cast. Choose one production event and resolve the shoot day."
              : developmentResult
              ? "Film 3 has completed one shared development action and is ready to use the shared pre-production office."
              : "Film 3 has been created from the updated career after film 2. Choose one shared development action to continue."
            : careerApplicationResult
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
