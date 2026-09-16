import type { ChangeEvent } from "react";
import { STUDIO_SETUP_COPY, STUDIO_SETUP_SCALE_IDS } from "../../core/studioSetupCopy";
import type { FilmScale } from "../../domain/film.js";
import type { Genre } from "../../domain/knowledge.js";
import type { ScriptTemplate } from "../../domain/script.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { GenreSelector } from "./GenreSelector.js";
import { ScriptTemplateSelector } from "./ScriptTemplateSelector.js";

interface ProjectSetupFormProps {
  readonly title: string;
  readonly genreId: string;
  readonly scale: FilmScale;
  readonly scriptTemplateId: string;
  readonly genres: readonly Genre[];
  readonly templates: readonly ScriptTemplate[];
  readonly errors: Readonly<Partial<Record<"projectTitle" | "genreId" | "scriptTemplateId", string | undefined>>>;
  readonly onTitleChange: (value: string) => void;
  readonly onGenreChange: (value: string) => void;
  readonly onScaleChange: (value: FilmScale) => void;
  readonly onScriptTemplateChange: (value: string) => void;
}

export function ProjectSetupForm(props: ProjectSetupFormProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_SETUP_COPY[language].project;

  return (
    <section className="setup-section">
      <div className="setup-section-heading"><span>03</span><div><h3>{copy.heading}</h3><p>{copy.intro}</p></div></div>
      <label className="text-field">
        <span>{copy.titleLabel}</span>
        <input
          aria-invalid={Boolean(props.errors.projectTitle)}
          onChange={(event: ChangeEvent<HTMLInputElement>) => props.onTitleChange(event.target.value)}
          placeholder={copy.titlePlaceholder}
          type="text"
          value={props.title}
        />
        {props.errors.projectTitle && <small className="field-error">{props.errors.projectTitle}</small>}
      </label>
      <GenreSelector genres={props.genres} value={props.genreId} error={props.errors.genreId} onChange={props.onGenreChange} />
      <fieldset className="setup-fieldset">
        <legend>{copy.productionScale}</legend>
        <div className="scale-options">
          {STUDIO_SETUP_SCALE_IDS.map((scaleId) => (
            <label className={props.scale === scaleId ? "scale-choice scale-choice--selected" : "scale-choice"} key={scaleId}>
              <input checked={props.scale === scaleId} name="scale" onChange={() => props.onScaleChange(scaleId)} type="radio" />
              <span>{copy.scales[scaleId]}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <ScriptTemplateSelector
        templates={props.templates}
        selectedGenreId={props.genreId}
        value={props.scriptTemplateId}
        error={props.errors.scriptTemplateId}
        onChange={props.onScriptTemplateChange}
      />
    </section>
  );
}
