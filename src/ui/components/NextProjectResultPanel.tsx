import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { STUDIO_CAREER_SUMMARY_COPY } from "../../core/studioCareerSummaryCopy.js";
import { STUDIO_SETUP_COPY } from "../../core/studioSetupCopy.js";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { NextProjectStepResult } from "../demo/createNextProjectStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun.js";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

type HandoffStage = "initial" | "development" | "preProduction" | "shoot" | "postProduction" | "release" | "career";

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
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SUMMARY_COPY[language].nextProject.result;
  const setupCopy = STUDIO_SETUP_COPY[language];
  const locale = getFilmWorkIntlLocale(language);
  const scaleLabel = setupCopy.project.scales[result.choices.scale];
  const currentStudio = careerApplicationResult?.updatedStudio ?? result.carriedStudio;
  const currentCareerState = careerApplicationResult?.updatedCareerState ?? result.carriedCareerState;
  const stage: HandoffStage = careerApplicationResult
    ? "career"
    : releaseResult
      ? "release"
      : postProductionResult
        ? "postProduction"
        : shootResult
          ? "shoot"
          : preProductionResult
            ? "preProduction"
            : developmentResult
              ? "development"
              : "initial";
  const status = careerApplicationResult
    ? copy.status.studioUpdated
    : releaseResult
      ? copy.status.filmReleased
      : postProductionResult
        ? copy.status.postProductionLocked
        : shootResult
          ? copy.status.shootDayResolved
          : preProductionResult
            ? copy.status.preProductionLocked
            : developmentResult
              ? copy.status.developmentActionCompleted
              : copy.status.readyForDevelopment;

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
  const localizedBasePipeline = [
    {
      label: copy.pipeline.studioCarriedForward,
      detail: copy.pipeline.moneyAvailable(result.carriedStudio.name, formatMoney(result.carriedStudio.money, locale)),
    },
    {
      label: copy.pipeline.careerContinued,
      detail: copy.pipeline.careerPeriod(result.carriedCareerState.currentYear, result.carriedCareerState.currentQuarter.toUpperCase()),
    },
    {
      label: copy.pipeline.nextFilmProjectCreated,
      detail: copy.pipeline.projectCreatedDetail(result.project.genre, scaleLabel),
    },
    {
      label: copy.pipeline.scriptTemplateSelected,
      detail: result.scriptTemplate.title,
    },
    {
      label: copy.pipeline.readyForDevelopment,
      detail: copy.pipeline.setupComplete(projectNumber),
    },
  ] as const;

  return (
    <section className="next-project-result" aria-live="polite">
      <div className="next-project-result-hero">
        <div>
          <span className="eyebrow">{copy.created(projectNumber)}</span>
          <h3>{result.project.title}</h3>
          <p>{result.project.logline}</p>
        </div>
        <div className="ready-badge">
          <span>{copy.nextStatus}</span>
          <strong>{status}</strong>
        </div>
      </div>
      <div className="next-project-result-grid">
        <div className="project-package-card">
          <span>{copy.newProjectPackage}</span>
          <dl>
            <div>
              <dt>{copy.genre}</dt>
              <dd>{result.project.genre}</dd>
            </div>
            <div>
              <dt>{copy.scale}</dt>
              <dd>{scaleLabel}</dd>
            </div>
            <div>
              <dt>{copy.scriptTemplate}</dt>
              <dd>{result.scriptTemplate.title}</dd>
            </div>
            <div>
              <dt>{copy.strategicGoal}</dt>
              <dd>{result.selectedStrategicGoal?.title ?? copy.currentSlateUnchanged}</dd>
            </div>
          </dl>
        </div>
        <div className="carried-studio-card">
          <span>{careerApplicationResult ? copy.updatedStudio : copy.carriedStudio}</span>
          <strong>{result.carriedStudio.name}</strong>
          <p>
            {formatMoney(currentStudio.money, locale)} · {copy.reputation} {currentStudio.reputation} · {copy.prestige} {currentStudio.prestige}
          </p>
          <small>
            {copy.careerPeriod(
              currentCareerState.currentYear,
              currentCareerState.currentQuarter.toUpperCase(),
              currentCareerState.completedFilms.length,
            )}
          </small>
        </div>
      </div>
      <div className="next-pipeline">
        <div className="compact-card-heading">
          <div>
            <span className="eyebrow">{copy.pipelineHeading(projectNumber)}</span>
            <h3>{copy.newSlateOpened}</h3>
          </div>
        </div>
        <ol>
          {pipelineSteps.map((step, index) => {
            const localizedStep = index < result.pipelineSteps.length
              ? localizedBasePipeline[index] ?? step
              : step;
            return (
              <li
                className={index === pipelineSteps.length - 1 ? "next-pipeline-current" : ""}
                key={`${index}-${step.label}`}
              >
                <span>{index + 1}</span>
                <div>
                  <strong>{localizedStep.label}</strong>
                  <small>{localizedStep.detail}</small>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="development-handoff">
        <span>{copy.handoff.label(projectNumber, stage)}</span>
        <strong>{copy.handoff.nextStep(projectNumber, stage)}</strong>
        <p>{copy.handoff.detail(projectNumber, stage)}</p>
      </div>
    </section>
  );
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
