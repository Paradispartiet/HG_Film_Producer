import type { ChangeEvent } from "react";
import type { FilmScale } from "../../domain/film.js";
import type { Genre } from "../../domain/knowledge.js";
import type { ScriptTemplate } from "../../domain/script.js";
import { GenreSelector } from "./GenreSelector.js";
import { ScriptTemplateSelector } from "./ScriptTemplateSelector.js";

const scales: readonly { readonly id: FilmScale; readonly label: string }[] = [
  { id: "micro", label: "Micro" },
  { id: "indie", label: "Indie" },
  { id: "mid_budget", label: "Mid budget" },
  { id: "studio", label: "Studio" },
  { id: "prestige", label: "Prestige" }
];

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
  return (
    <section className="setup-section">
      <div className="setup-section-heading"><span>03</span><div><h3>Package the first film</h3><p>Define the project that will enter development.</p></div></div>
      <label className="text-field">
        <span>Project title</span>
        <input
          aria-invalid={Boolean(props.errors.projectTitle)}
          onChange={(event: ChangeEvent<HTMLInputElement>) => props.onTitleChange(event.target.value)}
          placeholder="e.g. The Last Screening"
          type="text"
          value={props.title}
        />
        {props.errors.projectTitle && <small className="field-error">{props.errors.projectTitle}</small>}
      </label>
      <GenreSelector genres={props.genres} value={props.genreId} error={props.errors.genreId} onChange={props.onGenreChange} />
      <fieldset className="setup-fieldset">
        <legend>Production scale</legend>
        <div className="scale-options">
          {scales.map((scale) => (
            <label className={props.scale === scale.id ? "scale-choice scale-choice--selected" : "scale-choice"} key={scale.id}>
              <input checked={props.scale === scale.id} name="scale" onChange={() => props.onScaleChange(scale.id)} type="radio" />
              <span>{scale.label}</span>
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
