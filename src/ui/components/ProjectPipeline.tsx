import { STUDIO_CAREER_WORKSPACE_COPY } from "../../core/studioCareerWorkspaceCopy";
import { STUDIO_SETUP_COPY, STUDIO_SETUP_SCALE_IDS, type StudioSetupScaleId } from "../../core/studioSetupCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import type { PipelineStepSummary, ProjectDashboardSummary } from "../types.js";

interface ProjectPipelineProps {
  readonly project: ProjectDashboardSummary;
  readonly steps: readonly PipelineStepSummary[];
  readonly currentPhase?: number;
  readonly onNextAction?: () => void;
  readonly isProductionCase?: boolean;
}

export function ProjectPipeline({ project, steps, currentPhase = 0, onNextAction, isProductionCase = false }: ProjectPipelineProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_WORKSPACE_COPY[language];
  const phases = [
    copy.phases.development,
    copy.phases.preProduction,
    copy.phases.shoot,
    copy.phases.postProduction,
    copy.phases.release,
    copy.phases.careerReview,
  ] as const;
  const latestStep = steps.at(-1);
  const current = phases[currentPhase] ?? copy.phases.release;
  const scaleLabel = getScaleLabel(language, project.scale);

  return (
    <section className="project-hero">
      <div className="project-poster" aria-hidden="true">
        <span>{copy.pipeline.posterPrefix}</span>
        <strong>{project.title}</strong>
        <i>{project.genre}</i>
      </div>
      <div className="project-hero-content">
        <div className="project-hero-topline">
          <span className="eyebrow">{isProductionCase ? copy.pipeline.productionCaseKicker : copy.pipeline.experimentalKicker}</span>
          <div className="project-meta"><span>{project.genre}</span><span>{scaleLabel}</span></div>
        </div>
        <h2>{project.title}</h2>
        <p>{project.logline}</p>
        <div className="current-phase">
          <div>
            <span>{copy.pipeline.whatToDoNow}</span>
            <strong>{current.label}</strong>
          </div>
          <p>{current.description}</p>
        </div>
        <div className="phase-card-grid">
          {phases.map((phase, index) => {
            const statusId = index < currentPhase ? "complete" : index === currentPhase ? "in-progress" : "locked";
            const statusLabel = statusId === "complete" ? copy.status.complete : statusId === "in-progress" ? copy.status.inProgress : copy.status.locked;
            const actionLabel = index === 4 ? copy.actions.openRelease : index === 5 ? copy.actions.openCareerReview : copy.actions.continuePhase(phase.label);
            return (
              <article className={`phase-card phase-card--${statusId}`} key={index}>
                <span className="phase-number">{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{phase.label}</strong><p>{phase.description}</p></div>
                <span className="phase-status">{statusLabel}</span>
                {index === currentPhase && (
                  <button onClick={onNextAction} type="button">{actionLabel} <b>→</b></button>
                )}
              </article>
            );
          })}
        </div>
        {latestStep && (
          <div className="project-update">
            <span>{isProductionCase ? copy.pipeline.latestProductionCaseUpdate : copy.pipeline.latestStudioCareerUpdate}</span>
            <strong>{latestStep.label}</strong>
            <p>{latestStep.detail}</p>
            <b>{latestStep.score}</b>
          </div>
        )}
      </div>
    </section>
  );
}

function getScaleLabel(language: keyof typeof STUDIO_SETUP_COPY, scale: string): string {
  if ((STUDIO_SETUP_SCALE_IDS as readonly string[]).includes(scale)) {
    return STUDIO_SETUP_COPY[language].project.scales[scale as StudioSetupScaleId];
  }
  return scale.replace("_", " ");
}
