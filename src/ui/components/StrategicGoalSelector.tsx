import type { StrategicGoal } from "../../domain/career.js";

interface StrategicGoalSelectorProps {
  readonly goals: readonly StrategicGoal[];
  readonly value: string;
  readonly error?: string | undefined;
  readonly onChange: (goalId: string) => void;
}

export function StrategicGoalSelector({ goals, value, error, onChange }: StrategicGoalSelectorProps) {
  return (
    <fieldset className="setup-fieldset">
      <legend>Strategic goal</legend>
      <div className="choice-grid choice-grid--goals">
        {goals.map((goal) => (
          <label className={value === goal.id ? "choice-card choice-card--selected" : "choice-card"} key={goal.id}>
            <input
              checked={value === goal.id}
              name="strategic-goal"
              onChange={() => onChange(goal.id)}
              type="radio"
              value={goal.id}
            />
            <strong>{goal.title}</strong>
            <span>{goal.description}</span>
            <small>Target year {goal.targetYear}</small>
          </label>
        ))}
      </div>
      {error && <span className="field-error">{error}</span>}
    </fieldset>
  );
}
