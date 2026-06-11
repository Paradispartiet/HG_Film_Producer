import type {
  CareerState,
  StrategicGoal,
  StrategicGoalSelectionResult
} from "../domain/career.js";

/** Activate a strategic goal once without resolving its progress yet. */
export function selectNextStrategicGoal(
  careerState: CareerState,
  goal: StrategicGoal
): StrategicGoalSelectionResult {
  const alreadyActive = careerState.activeStrategicGoalIds.includes(goal.id);
  if (alreadyActive) {
    return {
      careerState,
      goalId: goal.id,
      alreadyActive: true,
      note: `Strategic goal "${goal.title}" is already active.`
    };
  }

  return {
    careerState: {
      ...careerState,
      activeStrategicGoalIds: [...careerState.activeStrategicGoalIds, goal.id],
      notes: [...careerState.notes, `Selected strategic goal: ${goal.title}.`]
    },
    goalId: goal.id,
    alreadyActive: false,
    note: `Strategic goal "${goal.title}" selected.`
  };
}
