import { STUDIO_CAREER_DEVELOPMENT_COPY } from "../../core/studioCareerDevelopmentCopy";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface ScriptChoicePanelProps {
  readonly run: ProjectRunContext;
  readonly onApply: () => void;
}

export function ScriptChoicePanel({ run, onApply }: ScriptChoicePanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DEVELOPMENT_COPY[language].script;

  return (
    <div className="development-choice-panel">
      <div className="development-choice-heading">
        <div><span className="section-label">{copy.sectionLabel}</span><h3>{copy.heading}</h3></div>
        <p>{copy.intro}</p>
      </div>
      <div className="script-starter-card">
        <div>
          <span>{copy.selectedTemplate}</span>
          <strong>{run.scriptTemplate.title}</strong>
          <p>{run.scriptTemplate.defaultTheme}</p>
        </div>
        <dl>
          <div><dt>{copy.structure}</dt><dd>{formatLabel(run.scriptTemplate.structure)}</dd></div>
          <div><dt>{copy.starterScenes}</dt><dd>{Math.min(3, run.scriptTemplate.recommendedSceneFunctions.length)}</dd></div>
          <div><dt>{copy.evaluation}</dt><dd>{copy.engineScored}</dd></div>
        </dl>
      </div>
      <div className="development-actions">
        <span className="inline-message">{copy.actionHint}</span>
        <button className="primary-button" onClick={onApply} type="button">{copy.shapeScript}</button>
      </div>
    </div>
  );
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
