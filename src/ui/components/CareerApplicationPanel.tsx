import type { StrategicGoal } from "../../domain/career";
import { STUDIO_CAREER_REVIEW_COPY } from "../../core/studioCareerReviewCopy.js";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { ProjectRunContext } from "../demo/createProjectRunContext";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
import type { ProjectCareerLabel } from "../types";
import { CareerApplicationResultPanel } from "./CareerApplicationResultPanel";

interface CareerApplicationPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly projectLabel: ProjectCareerLabel;
  readonly strategicGoal: StrategicGoal;
  readonly releaseResult: ReleaseStepResult | null;
  readonly result: CareerApplicationStepResult | null;
  readonly onApply: () => void;
  readonly id?: string | undefined;
}

export function CareerApplicationPanel({
  projectContext,
  projectLabel,
  strategicGoal,
  releaseResult,
  result,
  onApply,
  id
}: CareerApplicationPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_REVIEW_COPY[language].panel;
  return (
    <section className="panel career-application-panel" id={id}>
      <div className="career-application-heading">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2>{copy.heading(projectLabel)}</h2>
          <p>{copy.description}</p>
        </div>
        {!result && (
          <button className="primary-button" disabled={!releaseResult} onClick={onApply} type="button">
            {copy.closeYear(projectLabel)}
          </button>
        )}
      </div>

      {!releaseResult && (
        <p className="inline-validation" role="status">{copy.releaseBeforeApply(projectLabel)}</p>
      )}
      {releaseResult && !result && (
        <div className="career-ready-strip">
          <span>{copy.releaseReady}</span>
          <strong>{copy.outcome(projectContext.project.title, releaseResult.releaseOutcomeEvaluation.overall)}</strong>
          <p>{copy.persistenceNotice}</p>
        </div>
      )}
      {releaseResult && result && (
        <CareerApplicationResultPanel
          projectContext={projectContext}
          projectLabel={projectLabel}
          releaseResult={releaseResult}
          result={result}
          strategicGoal={strategicGoal}
        />
      )}
    </section>
  );
}
