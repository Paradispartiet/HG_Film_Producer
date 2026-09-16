import type { StrategicGoal } from "../../domain/career";
import { STUDIO_CAREER_REVIEW_COPY } from "../../core/studioCareerReviewCopy.js";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { ProjectRunContext } from "../demo/createProjectRunContext";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
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
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_REVIEW_COPY[language].result;
  const unlockedMilestones = result.milestoneResults.filter((milestone) => milestone.rewardsApplied);
  const projectNumber = projectLabel === "first film" ? 1 : projectLabel === "film 2" ? 2 : 3;

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
          <span className="eyebrow">{copy.studioUpdated}</span>
          <h3>{copy.yearClosed(projectNumber)}</h3>
          <p>{copy.ledgerDescription(result.completedFilmRecord.title)}</p>
        </div>
        <ul className="career-check-list">
          <li><span>✓</span> {copy.completedFilmRecorded(result.completedFilmRecord.title)}</li>
          <li><span>✓</span> {copy.careerYearEvaluated(result.careerYearEvaluation.overall)}</li>
          <li><span>✓</span> {copy.identity}: {formatTags(result.studioIdentityEvaluation.strongestTags, copy.formingIdentity)}</li>
          <li><span>✓</span> {copy.milestonesUnlocked}: {unlockedMilestones.length > 0 ? unlockedMilestones.map((item) => milestoneTitle(item.note)).join(", ") : copy.noneThisReview}</li>
        </ul>
        <div className="next-project-callout">
          <span>{copy.nextStep}</span>
          <strong>{copy.nextProject(projectNumber)}</strong>
          <p>{copy.nextProjectNote}</p>
        </div>
      </section>
    </div>
  );
}

function formatTags(tags: readonly string[], fallback: string): string {
  return tags.length > 0 ? tags.map((tag) => tag.replaceAll("_", " ")).join(", ") : fallback;
}

function milestoneTitle(note: string): string {
  const match = note.match(/Milestone "(.+)" achieved/);
  return match?.[1] ?? note;
}
