import type { ChangeEvent, FormEvent } from "react";
import { STUDIO_CAREER_SUMMARY_COPY } from "../../core/studioCareerSummaryCopy";
import { STUDIO_SETUP_COPY } from "../../core/studioSetupCopy";
import type { FilmScale } from "../../domain/film.js";
import type {
  NextProjectChoices,
  NextProjectOptions,
} from "../demo/createNextProjectStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import type { NextProjectFormErrors } from "../types.js";
import { GenreSelector } from "./GenreSelector.js";
import { ScriptTemplateSelector } from "./ScriptTemplateSelector.js";
import { StrategicGoalSelector } from "./StrategicGoalSelector.js";

const scales: readonly FilmScale[] = ["micro", "indie", "mid_budget", "studio", "prestige"];

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
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SUMMARY_COPY[language].nextProject.form;
  const setupCopy = STUDIO_SETUP_COPY[language];

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
          <span className="eyebrow">{copy.greenlight(projectNumber)}</span>
          <h3>{copy.heading}</h3>
          <p>{copy.intro}</p>
        </div>
      </div>
      <label className="text-field">
        <span>{copy.titleLabel}</span>
        <input
          aria-invalid={Boolean(errors.projectTitle)}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChange({ ...choices, projectTitle: event.target.value })
          }
          placeholder={copy.titlePlaceholder}
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
        <legend>{setupCopy.project.productionScale}</legend>
        <div className="scale-options">
          {scales.map((scale) => (
            <label
              className={
                choices.scale === scale
                  ? "scale-choice scale-choice--selected"
                  : "scale-choice"
              }
              key={scale}
            >
              <input
                checked={choices.scale === scale}
                name="next-project-scale"
                onChange={() => onChange({ ...choices, scale })}
                type="radio"
              />
              <span>{setupCopy.project.scales[scale]}</span>
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
          <strong>{copy.carryHeading}</strong>
          <span>{copy.carryDetail(previousFilmLabel, projectNumber)}</span>
        </div>
        <button className="primary-button" type="submit">
          {copy.createFilm(projectNumber)}
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
