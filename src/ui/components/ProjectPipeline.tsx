import { getStudioCareerPhaseStatus } from "../../core/studioCareerFlow";
import { STUDIO_CAREER_WORKSPACE_COPY } from "../../core/studioCareerWorkspaceCopy";
import { STUDIO_SETUP_COPY, STUDIO_SETUP_SCALE_IDS, type StudioSetupScaleId } from "../../core/studioSetupCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import type { PipelineStepSummary, ProjectDashboardSummary } from "../types.js";

interface ProjectPipelineProps {
  readonly project: ProjectDashboardSummary;
  readonly steps: readonly PipelineStepSummary[];
  readonly currentPhase?: number;
  readonly onNextAction?: (() => void) | undefined;
  readonly isProductionCase?: boolean;
  readonly isCareerComplete?: boolean;
  readonly isPastProject?: boolean;
  readonly nextProjectNumber?: number | undefined;
}

export function ProjectPipeline({ project, steps, currentPhase = 0, onNextAction, isProductionCase = false, isCareerComplete = false, isPastProject = false, nextProjectNumber }: ProjectPipelineProps) {
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
  const current = phases[currentPhase] ?? copy.phases.careerReview;
  const scaleLabel = getScaleLabel(language, project.scale);
  const activeActionLabel = currentPhase === 4 ? copy.actions.openRelease : currentPhase === 5 ? copy.actions.openCareerReview : copy.actions.continuePhase(current.label);
  const actionLabel = isCareerComplete ? copy.actions.openNextProject : activeActionLabel;
  const focused = Boolean(onNextAction) || isPastProject;
  const currentHeading = isCareerComplete ? (isPastProject ? copy.pipeline.pastProjectHeading : nextProjectNumber ? copy.pipeline.nextProjectHeading(nextProjectNumber) : current.label) : current.label;
  const currentDescription = isCareerComplete ? (isPastProject ? copy.pipeline.pastProjectDescription : copy.pipeline.nextProjectDescription) : current.description;

  return (
    <section className={focused ? "project-hero project-hero--focused" : "project-hero"}>
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
        <div className="current-phase" aria-live="polite">
          <div>
            <span>{copy.pipeline.whatToDoNow}</span>
            <strong>{currentHeading}</strong>
            <p>{currentDescription}</p>
          </div>
          {onNextAction && <button className="primary-button studio-career-primary-action" onClick={onNextAction} type="button">{actionLabel} <b aria-hidden="true">→</b></button>}
        </div>
        <ol className={focused ? "studio-career-phase-track" : "studio-career-phase-track studio-career-phase-track--demo"} aria-label={copy.pipeline.phaseProgress}>
          {phases.map((phase, index) => {
            const statusId = getStudioCareerPhaseStatus(index, currentPhase, isCareerComplete);
            const statusLabel = statusId === "complete" ? copy.status.complete : statusId === "in-progress" ? copy.status.inProgress : copy.status.locked;
            return (
              <li className={`studio-career-phase-step studio-career-phase-step--${statusId}`} aria-current={statusId === "in-progress" ? "step" : undefined} key={phase.label}>
                <span className="studio-career-phase-number">{String(index + 1).padStart(2, "0")}</span>
                <strong>{phase.label}</strong>
                <small>{statusLabel}</small>
              </li>
            );
          })}
        </ol>
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
