import type { ProjectRunContext } from "../demo/createProjectRunContext.js";

interface ScriptChoicePanelProps {
  readonly run: ProjectRunContext;
  readonly onApply: () => void;
}

export function ScriptChoicePanel({ run, onApply }: ScriptChoicePanelProps) {
  return (
    <div className="development-choice-panel">
      <div className="development-choice-heading">
        <div><span className="section-label">Writers’ table</span><h3>Shape a starter script</h3></div>
        <p>Create and evaluate the first three story beats from the template chosen during setup.</p>
      </div>
      <div className="script-starter-card">
        <div>
          <span>Selected template</span>
          <strong>{run.scriptTemplate.title}</strong>
          <p>{run.scriptTemplate.defaultTheme}</p>
        </div>
        <dl>
          <div><dt>Structure</dt><dd>{formatLabel(run.scriptTemplate.structure)}</dd></div>
          <div><dt>Starter scenes</dt><dd>{Math.min(3, run.scriptTemplate.recommendedSceneFunctions.length)}</dd></div>
          <div><dt>Evaluation</dt><dd>Engine scored</dd></div>
        </dl>
      </div>
      <div className="development-actions">
        <span className="inline-message">This creates a starter draft, not a full scene editor.</span>
        <button className="primary-button" onClick={onApply} type="button">Shape starter script</button>
      </div>
    </div>
  );
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
