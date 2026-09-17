import { presentStrategicGoal } from "../../core/strategicGoalPresentation.js";
import { STUDIO_CAREER_REVIEW_COPY } from "../../core/studioCareerReviewCopy.js";
import type { StrategicGoal } from "../../domain/career";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface StrategicGoalProgressPanelProps {
  readonly goal: StrategicGoal;
  readonly result: CareerApplicationStepResult;
}

export function StrategicGoalProgressPanel({ goal, result }: StrategicGoalProgressPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_REVIEW_COPY[language].goal;
  const presentation = presentStrategicGoal(language, goal);
  const helped = releaseHelpedGoal(goal, result);
  return (
    <section className="career-review-card strategic-progress-card">
      <div className="career-card-heading"><span className="section-label">{copy.label}</span><strong>{presentation.title}</strong></div>
      <p>{presentation.description}</p>
      <div className={helped ? "goal-impact goal-impact--positive" : "goal-impact"}>
        <span>{helped ? copy.releaseContributed : copy.noConfirmedProgress}</span>
        <strong>{helped ? copy.helpfulResult : copy.trackingPending}</strong>
      </div>
      <p className="career-card-note">{copy.note}</p>
    </section>
  );
}

function releaseHelpedGoal(goal: StrategicGoal, result: CareerApplicationStepResult): boolean {
  const film = result.completedFilmRecord;
  switch (goal.type) {
    case "survive_year":
      return result.updatedStudio.money > 0 && result.updatedCareerState.completedFilms.length > 0;
    case "make_profit":
    case "launch_debut":
      return film.netRevenue > 0;
    case "build_reputation":
      return result.reputationDelta > 0;
    case "build_prestige":
      return result.prestigeDelta > 0 || film.criticalAppeal >= 65;
    case "win_award":
      return film.awardsWon > 0;
    case "grow_audience":
      return film.audienceAppeal >= 65;
    case "specialize_genre":
      return true;
    case "discover_talent":
    case "international_breakthrough":
      return false;
  }
}
