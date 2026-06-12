import type { StrategicGoal } from "../../domain/career";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";

interface StrategicGoalProgressPanelProps {
  readonly goal: StrategicGoal;
  readonly result: CareerApplicationStepResult;
}

export function StrategicGoalProgressPanel({ goal, result }: StrategicGoalProgressPanelProps) {
  const helped = releaseHelpedGoal(goal, result);
  return (
    <section className="career-review-card strategic-progress-card">
      <div className="career-card-heading"><span className="section-label">Strategic goal</span><strong>{goal.title}</strong></div>
      <p>{goal.description}</p>
      <div className={helped ? "goal-impact goal-impact--positive" : "goal-impact"}>
        <span>{helped ? "Release contributed" : "No confirmed progress yet"}</span>
        <strong>{helped ? "Helpful result" : "Tracking pending"}</strong>
      </div>
      <p className="career-card-note">Full strategic-goal progress tracking starts next PR. This review keeps the selected goal visible without inventing a progress percentage.</p>
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
