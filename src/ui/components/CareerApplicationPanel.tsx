import type { StrategicGoal } from "../../domain/career";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { ProjectRunContext } from "../demo/createProjectRunContext";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun";
import type { ProjectCareerLabel } from "../types";
import { CareerApplicationResultPanel } from "./CareerApplicationResultPanel";

interface CareerApplicationPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly projectLabel: ProjectCareerLabel;
  readonly strategicGoal: StrategicGoal;
  readonly releaseResult: ReleaseStepResult | null;
  readonly result: CareerApplicationStepResult | null;
  readonly onApply: () => void;
}

export function CareerApplicationPanel({
  projectContext,
  projectLabel,
  strategicGoal,
  releaseResult,
  result,
  onApply
}: CareerApplicationPanelProps) {
  return (
    <section className="panel career-application-panel">
      <div className="career-application-heading">
        <div>
          <span className="eyebrow">Studio finance &amp; career review</span>
          <h2>Apply {projectLabel} to studio/career</h2>
          <p>Close the film year to post the release outcome, record the completed film, and evaluate the studio career.</p>
        </div>
        {!result && (
          <button className="primary-button" disabled={!releaseResult} onClick={onApply} type="button">
            Close {projectLabel} year
          </button>
        )}
      </div>

      {!releaseResult && (
        <p className="inline-validation" role="status">Release {projectLabel} before applying its result to the studio.</p>
      )}
      {releaseResult && !result && (
        <div className="career-ready-strip">
          <span>Release result ready</span>
          <strong>{projectContext.project.title} · outcome {releaseResult.releaseOutcomeEvaluation.overall}/100</strong>
          <p>This action updates in-memory studio and career state only. Persistence is not enabled yet.</p>
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
