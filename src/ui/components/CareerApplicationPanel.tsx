import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { ProjectSetupRun } from "../demo/createProjectSetupRun";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun";
import { CareerApplicationResultPanel } from "./CareerApplicationResultPanel";

interface CareerApplicationPanelProps {
  readonly run: ProjectSetupRun;
  readonly releaseResult: ReleaseStepResult | null;
  readonly result: CareerApplicationStepResult | null;
  readonly onApply: () => void;
}

export function CareerApplicationPanel({ run, releaseResult, result, onApply }: CareerApplicationPanelProps) {
  return (
    <section className="panel career-application-panel">
      <div className="career-application-heading">
        <div>
          <span className="eyebrow">Studio finance &amp; career review</span>
          <h2>Apply release to studio</h2>
          <p>Close the film year to post the release outcome, record the completed film, and evaluate the studio career.</p>
        </div>
        {!result && (
          <button className="primary-button" disabled={!releaseResult} onClick={onApply} type="button">Close film year</button>
        )}
      </div>

      {!releaseResult && (
        <p className="inline-validation" role="status">Release the film before applying its result to the studio.</p>
      )}
      {releaseResult && !result && (
        <div className="career-ready-strip">
          <span>Release result ready</span>
          <strong>{run.project.title} · outcome {releaseResult.releaseOutcomeEvaluation.overall}/100</strong>
          <p>This action updates in-memory studio and career state only. Persistence is not enabled yet.</p>
        </div>
      )}
      {releaseResult && result && <CareerApplicationResultPanel releaseResult={releaseResult} result={result} run={run} />}
    </section>
  );
}
