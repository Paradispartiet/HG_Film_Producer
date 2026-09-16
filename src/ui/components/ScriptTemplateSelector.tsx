import { STUDIO_SETUP_COPY } from "../../core/studioSetupCopy";
import type { ScriptTemplate } from "../../domain/script.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface ScriptTemplateSelectorProps {
  readonly templates: readonly ScriptTemplate[];
  readonly selectedGenreId: string;
  readonly value: string;
  readonly error?: string | undefined;
  readonly onChange: (templateId: string) => void;
}

export function ScriptTemplateSelector({ templates, selectedGenreId, value, error, onChange }: ScriptTemplateSelectorProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_SETUP_COPY[language].scriptTemplate;
  const matchingTemplates = templates.filter((template) => template.genreId === selectedGenreId);
  const visibleTemplates = matchingTemplates.length > 0 ? matchingTemplates : templates;

  return (
    <fieldset className="setup-fieldset">
      <legend>{copy.legend}</legend>
      <div className="choice-grid choice-grid--templates">
        {visibleTemplates.map((template) => (
          <label className={value === template.id ? "choice-card choice-card--selected" : "choice-card"} key={template.id}>
            <input
              checked={value === template.id}
              name="script-template"
              onChange={() => onChange(template.id)}
              type="radio"
              value={template.id}
            />
            <strong>{template.title}</strong>
            <span>{template.defaultTheme}</span>
          </label>
        ))}
      </div>
      {selectedGenreId && matchingTemplates.length === 0 && <p className="field-hint">{copy.noDedicatedTemplate}</p>}
      {error && <span className="field-error">{error}</span>}
    </fieldset>
  );
}
