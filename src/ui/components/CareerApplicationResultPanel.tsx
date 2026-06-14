import type { StrategicGoal } from "../../domain/career";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { ProjectRunContext } from "../demo/createProjectRunContext";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun";
import type { ProjectCareerLabel } from "../types";
import { CareerYearPanel } from "./CareerYearPanel";
import { CompletedFilmPanel } from "./CompletedFilmPanel";
import { StrategicGoalProgressPanel } from "./StrategicGoalProgressPanel";
import { StudioDeltaPanel } from "./StudioDeltaPanel";

interface CareerApplicationResultPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly projectLabel: ProjectCareerLabel;
  readonly strategicGoal: StrategicGoal;
  readonly releaseResult: ReleaseStepResult;
  readonly result: CareerApplicationStepResult;
}

export function CareerApplicationResultPanel({
  projectContext,
  projectLabel,
  strategicGoal,
  releaseResult,
  result
}: CareerApplicationResultPanelProps) {
  const unlockedMilestones = result.milestoneResults.filter((milestone) => milestone.rewardsApplied);
  const projectNumber = projectLabel === "first film" ? 1 : projectLabel === "film 2" ? 2 : 3;
  const nextStep = projectNumber === 1 ? "Start next project" : `Start film ${projectNumber + 1}`;

  return (
    <div className="career-application-results">
      <StudioDeltaPanel result={result} />
      <div className="career-review-grid">
        <CompletedFilmPanel projectContext={projectContext} releaseResult={releaseResult} result={result} />
        <CareerYearPanel result={result} />
        <StrategicGoalProgressPanel goal={strategicGoal} result={result} />
      </div>
      <section className="career-final-summary">
        <div>
          <span className="eyebrow">Studio updated</span>
          <h3>{projectNumber === 1 ? "Film year closed" : `Film ${projectNumber} year closed`}</h3>
          <p>{result.completedFilmRecord.title} is now part of the studio ledger, filmography, career evaluation, and identity profile.</p>
        </div>
        <ul className="career-check-list">
          <li><span>✓</span> Completed film recorded: {result.completedFilmRecord.title}</li>
          <li><span>✓</span> Career year evaluated at {result.careerYearEvaluation.overall}/100</li>
          <li><span>✓</span> Identity: {formatTags(result.studioIdentityEvaluation.strongestTags)}</li>
          <li><span>✓</span> Milestones unlocked: {unlockedMilestones.length > 0 ? unlockedMilestones.map((item) => milestoneTitle(item.note)).join(", ") : "None this review"}</li>
        </ul>
        <div className="next-project-callout">
          <span>Next step</span>
          <strong>{nextStep}</strong>
          <p>{projectNumber === 3 ? "Film 4 is not created in this release." : "The next project is not created automatically in this step."}</p>
        </div>
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
