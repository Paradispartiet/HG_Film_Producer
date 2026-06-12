import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { ProjectSetupRun } from "../demo/createProjectSetupRun";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun";
import { CareerYearPanel } from "./CareerYearPanel";
import { CompletedFilmPanel } from "./CompletedFilmPanel";
import { StrategicGoalProgressPanel } from "./StrategicGoalProgressPanel";
import { StudioDeltaPanel } from "./StudioDeltaPanel";

interface CareerApplicationResultPanelProps {
  readonly run: ProjectSetupRun;
  readonly releaseResult: ReleaseStepResult;
  readonly result: CareerApplicationStepResult;
}

export function CareerApplicationResultPanel({ run, releaseResult, result }: CareerApplicationResultPanelProps) {
  const unlockedMilestones = result.milestoneResults.filter((milestone) => milestone.rewardsApplied);
  return (
    <div className="career-application-results">
      <StudioDeltaPanel run={run} result={result} />
      <div className="career-review-grid">
        <CompletedFilmPanel releaseResult={releaseResult} result={result} run={run} />
        <CareerYearPanel result={result} />
        <StrategicGoalProgressPanel goal={run.strategicGoal} result={result} />
      </div>
      <section className="career-final-summary">
        <div>
          <span className="eyebrow">Studio updated</span>
          <h3>Film year closed</h3>
          <p>The release is now part of the studio ledger, filmography, career evaluation, and identity profile.</p>
        </div>
        <ul className="career-check-list">
          <li><span>✓</span> Completed film recorded</li>
          <li><span>✓</span> Career year evaluated at {result.careerYearEvaluation.overall}/100</li>
          <li><span>✓</span> Identity: {formatTags(result.studioIdentityEvaluation.strongestTags)}</li>
          <li><span>✓</span> Milestones unlocked: {unlockedMilestones.length > 0 ? unlockedMilestones.map((item) => milestoneTitle(item.note)).join(", ") : "None this review"}</li>
        </ul>
        <div className="next-project-callout"><span>Next step</span><strong>Start next project</strong><p>No second project is created automatically in this PR.</p></div>
      </section>
    </div>
  );
}

function formatTags(tags: readonly string[]): string {
  return tags.length > 0 ? tags.map((tag) => tag.replaceAll("_", " ")).join(", ") : "forming";
}

function milestoneTitle(note: string): string {
  const match = note.match(/Milestone "(.+)" achieved/);
  return match?.[1] ?? note;
}
