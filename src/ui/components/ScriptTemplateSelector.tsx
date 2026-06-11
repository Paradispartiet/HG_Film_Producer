import type { ScriptTemplate } from "../../domain/script.js";

interface ScriptTemplateSelectorProps {
  readonly templates: readonly ScriptTemplate[];
  readonly selectedGenreId: string;
  readonly value: string;
  readonly error?: string | undefined;
  readonly onChange: (templateId: string) => void;
}

export function ScriptTemplateSelector({ templates, selectedGenreId, value, error, onChange }: ScriptTemplateSelectorProps) {
  const matchingTemplates = templates.filter((template) => template.genreId === selectedGenreId);
  const visibleTemplates = matchingTemplates.length > 0 ? matchingTemplates : templates;

  return (
    <fieldset className="setup-fieldset">
      <legend>Script template</legend>
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
      {selectedGenreId && matchingTemplates.length === 0 && (
        <p className="field-hint">No dedicated template exists for this genre yet. Choose any available structure.</p>
      )}
      {error && <span className="field-error">{error}</span>}
    </fieldset>
  );
}
