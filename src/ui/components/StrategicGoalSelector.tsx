import type { StrategicGoal } from "../../domain/career.js";

interface StrategicGoalSelectorProps {
  readonly goals: readonly StrategicGoal[];
  readonly value: string;
  readonly error?: string | undefined;
  readonly allowNoChange?: boolean;
  readonly activeGoalIds?: readonly string[];
  readonly onChange: (goalId: string) => void;
}

export function StrategicGoalSelector({
  goals,
  value,
  error,
  allowNoChange = false,
  activeGoalIds = [],
  onChange,
}: StrategicGoalSelectorProps) {
  return (
    <fieldset className="setup-fieldset">
      <legend>
        {allowNoChange ? "Strategic goal update (optional)" : "Strategic goal"}
      </legend>
      <div className="choice-grid choice-grid--goals">
        {allowNoChange && (
          <label
            className={
              !value ? "choice-card choice-card--selected" : "choice-card"
            }
          >
            <input
              checked={!value}
              name="strategic-goal"
              onChange={() => onChange("")}
              type="radio"
              value=""
            />
            <strong>Keep current slate</strong>
            <span>
              Carry every active strategic goal forward without adding another.
            </span>
            <small>No change</small>
          </label>
        )}
        {goals.map((goal) => {
          const alreadyActive = activeGoalIds.includes(goal.id);
          return (
            <label
              className={
                value === goal.id
                  ? "choice-card choice-card--selected"
                  : "choice-card"
              }
              key={goal.id}
            >
              <input
                checked={value === goal.id}
                name="strategic-goal"
                onChange={() => onChange(goal.id)}
                type="radio"
                value={goal.id}
              />
              <strong>{goal.title}</strong>
              <span>{goal.description}</span>
              <small>
                {alreadyActive
                  ? "Already active"
                  : `Target year ${goal.targetYear}`}
              </small>
            </label>
          );
        })}
      </div>
      {allowNoChange && (
        <p className="field-hint">
          Selecting an active goal leaves the career unchanged; a new goal is
          added to the current slate.
        </p>
      )}
      {error && <span className="field-error">{error}</span>}
    </fieldset>
  );
}
