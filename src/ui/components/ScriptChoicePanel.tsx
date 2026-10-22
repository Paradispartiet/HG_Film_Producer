import { useState } from "react";
import { SCRIPT_PRODUCER_NOTE_IDS, type ScriptProducerNoteId } from "../../core/applyScriptProducerNote.js";
import { STUDIO_CAREER_DEVELOPMENT_COPY } from "../../core/studioCareerDevelopmentCopy";
import { STUDIO_CAREER_SCRIPT_NOTE_COPY } from "../../core/studioCareerScriptNoteCopy.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import { createScriptDevelopmentResult } from "../demo/createDevelopmentStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface ScriptChoicePanelProps {
  readonly run: ProjectRunContext;
  readonly onApply: (noteId: ScriptProducerNoteId) => void;
}

export function ScriptChoicePanel({ run, onApply }: ScriptChoicePanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DEVELOPMENT_COPY[language].script;
  const notesCopy = STUDIO_CAREER_SCRIPT_NOTE_COPY[language];
  const [selectedNoteId, setSelectedNoteId] = useState<ScriptProducerNoteId>("character_depth");
  const preview = createScriptDevelopmentResult(run, selectedNoteId);
  const scores = preview.scoreBreakdown;

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
      <div className="development-choice-heading">
        <h3>{notesCopy.heading}</h3>
        <p>{notesCopy.intro}</p>
      </div>
      <div className="producer-priority-grid" role="radiogroup" aria-label={notesCopy.heading}>
        {SCRIPT_PRODUCER_NOTE_IDS.map((id) => (
          <label className={id === selectedNoteId ? "producer-priority-card producer-priority-card--selected" : "producer-priority-card"} key={id}>
            <input type="radio" name="script-producer-note" checked={selectedNoteId === id} onChange={() => setSelectedNoteId(id)} />
            <span><strong>{notesCopy.options[id].title}</strong><small>{notesCopy.options[id].tradeoff}</small></span>
          </label>
        ))}
      </div>
      {scores && (
        <div className="script-note-preview" role="status" aria-live="polite">
          <strong>{notesCopy.preview}</strong>
          <dl>
            <div><dt>{notesCopy.conflict}</dt><dd>{scores.conflict}/100</dd></div>
            <div><dt>{notesCopy.pacing}</dt><dd>{scores.pacing}/100</dd></div>
            <div><dt>{notesCopy.emotion}</dt><dd>{scores.emotion}/100</dd></div>
          </dl>
          <p>{notesCopy.options[selectedNoteId].lesson}</p>
          <small>{notesCopy.disclaimer}</small>
        </div>
      )}
      <div className="development-actions">
        <span className="inline-message">{copy.actionHint}</span>
        <button className="primary-button" onClick={() => onApply(selectedNoteId)} type="button">{copy.shapeScript}</button>
      </div>
    </div>
  );
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
