import type { ChangeEvent, FormEvent } from "react";
import type { FilmScale } from "../../domain/film.js";
import type {
  NextProjectChoices,
  NextProjectOptions,
} from "../demo/createNextProjectStepRun.js";
import type { NextProjectFormErrors } from "../types.js";
import { GenreSelector } from "./GenreSelector.js";
import { ScriptTemplateSelector } from "./ScriptTemplateSelector.js";
import { StrategicGoalSelector } from "./StrategicGoalSelector.js";

const scales: readonly { readonly id: FilmScale; readonly label: string }[] = [
  { id: "micro", label: "Micro" },
  { id: "indie", label: "Indie" },
  { id: "mid_budget", label: "Mid budget" },
  { id: "studio", label: "Studio" },
  { id: "prestige", label: "Prestige" },
];

interface NextProjectSetupFormProps {
  readonly projectNumber: number;
  readonly previousFilmLabel: string;
  readonly choices: NextProjectChoices;
  readonly options: NextProjectOptions;
  readonly activeStrategicGoalIds: readonly string[];
  readonly errors: NextProjectFormErrors;
  readonly onChange: (choices: NextProjectChoices) => void;
  readonly onSubmit: () => void;
}

export function NextProjectSetupForm({
  projectNumber,
  previousFilmLabel,
  choices,
  options,
  activeStrategicGoalIds,
  errors,
  onChange,
  onSubmit,
}: NextProjectSetupFormProps) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className="next-project-form" onSubmit={submit}>
      <div className="next-project-form-heading">
        <span className="slate-number">
          {String(projectNumber).padStart(2, "0")}
        </span>
        <div>
          <span className="eyebrow">Greenlight film {projectNumber}</span>
          <h3>Package the next project</h3>
          <p>Choose the new film. Development remains a separate next step.</p>
        </div>
      </div>
      <label className="text-field">
        <span>Next project title</span>
        <input
          aria-invalid={Boolean(errors.projectTitle)}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChange({ ...choices, projectTitle: event.target.value })
          }
          placeholder="e.g. Northern Exposure"
          type="text"
          value={choices.projectTitle}
        />
        {errors.projectTitle && (
          <small className="field-error">{errors.projectTitle}</small>
        )}
      </label>
      <GenreSelector
        genres={options.genres}
        value={choices.genreId}
        error={errors.genreId}
        onChange={(genreId) =>
          onChange({ ...choices, genreId, scriptTemplateId: "" })
        }
      />
      <fieldset className="setup-fieldset">
        <legend>Production scale</legend>
        <div className="scale-options">
          {scales.map((scale) => (
            <label
              className={
                choices.scale === scale.id
                  ? "scale-choice scale-choice--selected"
                  : "scale-choice"
              }
              key={scale.id}
            >
              <input
                checked={choices.scale === scale.id}
                name="next-project-scale"
                onChange={() => onChange({ ...choices, scale: scale.id })}
                type="radio"
              />
              <span>{scale.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <ScriptTemplateSelector
        templates={options.scriptTemplates}
        selectedGenreId={choices.genreId}
        value={choices.scriptTemplateId}
        error={errors.scriptTemplateId}
        onChange={(scriptTemplateId) =>
          onChange({ ...choices, scriptTemplateId })
        }
      />
      <StrategicGoalSelector
        activeGoalIds={activeStrategicGoalIds}
        allowNoChange
        goals={options.strategicGoals}
        value={choices.strategicGoalId ?? ""}
        onChange={(strategicGoalId) =>
          onChange(
            strategicGoalId
              ? { ...choices, strategicGoalId }
              : withoutStrategicGoal(choices),
          )
        }
      />
      {errors.form && (
        <p className="form-message form-message--error">{errors.form}</p>
      )}
      <div className="next-project-actions">
        <div>
          <strong>Carry the studio forward</strong>
          <span>
            {previousFilmLabel} stays recorded; film {projectNumber} begins at
            setup only.
          </span>
        </div>
        <button className="primary-button" type="submit">
          Create film {projectNumber}
        </button>
      </div>
    </form>
  );
}

function withoutStrategicGoal(choices: NextProjectChoices): NextProjectChoices {
  return {
    projectTitle: choices.projectTitle,
    genreId: choices.genreId,
    scale: choices.scale,
    scriptTemplateId: choices.scriptTemplateId,
  };
}
