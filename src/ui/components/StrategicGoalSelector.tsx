import type { StrategicGoal } from "../../domain/career.js";
import { STUDIO_SETUP_COPY } from "../../core/studioSetupCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

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
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_SETUP_COPY[language].goal;

  return (
    <fieldset className="setup-fieldset">
      <legend>
        {allowNoChange ? copy.optionalLegend : copy.legend}
      </legend>
      <div className="choice-grid choice-grid--goals">
        {allowNoChange && (
          <label
            className={!value ? "choice-card choice-card--selected" : "choice-card"}
          >
            <input
              checked={!value}
              name="strategic-goal"
              onChange={() => onChange("")}
              type="radio"
              value=""
            />
            <strong>{copy.keepCurrent}</strong>
            <span>{copy.keepCurrentDescription}</span>
            <small>{copy.noChange}</small>
          </label>
        )}
        {goals.map((goal) => {
          const alreadyActive = activeGoalIds.includes(goal.id);
          return (
            <label
              className={value === goal.id ? "choice-card choice-card--selected" : "choice-card"}
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
              <small>{alreadyActive ? copy.alreadyActive : copy.targetYear(goal.targetYear)}</small>
            </label>
          );
        })}
      </div>
      {allowNoChange && <p className="field-hint">{copy.updateHint}</p>}
      {error && <span className="field-error">{error}</span>}
    </fieldset>
  );
}
