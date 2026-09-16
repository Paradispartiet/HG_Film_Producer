import { useState } from "react";
import { STUDIO_CAREER_DEVELOPMENT_COPY } from "../../core/studioCareerDevelopmentCopy";
import {
  createLocationDevelopmentResult,
  createMentorDevelopmentResult,
  createScriptDevelopmentResult,
  getLocationDevelopmentChoices,
  mentorDevelopmentChoices,
  type DevelopmentPath,
  type DevelopmentStepResult
} from "../demo/createDevelopmentStepRun.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import type { DevelopmentPathOption } from "../types.js";
import { LocationChoicePanel } from "./LocationChoicePanel.js";
import { MentorChoicePanel } from "./MentorChoicePanel.js";
import { ScriptChoicePanel } from "./ScriptChoicePanel.js";

interface DevelopmentPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly projectLabel?: string;
  readonly selectedPath: DevelopmentPath | null;
  readonly completedResults: readonly DevelopmentStepResult[];
  readonly onSelectPath: (path: DevelopmentPath) => void;
  readonly onApplyAction: (result: DevelopmentStepResult) => void;
  readonly onFinishDevelopment: () => void;
  readonly id?: string | undefined;
}

export function DevelopmentPanel({
  projectContext,
  projectLabel = "Film 1",
  selectedPath,
  completedResults,
  onSelectPath,
  onApplyAction,
  onFinishDevelopment,
  id
}: DevelopmentPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DEVELOPMENT_COPY[language];
  const paths: readonly DevelopmentPathOption[] = [
    { id: "mentor", number: "01", ...copy.paths.mentor },
    { id: "location", number: "02", ...copy.paths.location },
    { id: "script", number: "03", ...copy.paths.script },
  ];
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [selectedBriefId, setSelectedBriefId] = useState("");
  const [message, setMessage] = useState("");
  const locationChoices = getLocationDevelopmentChoices(projectContext);
  const completedPaths = new Set(completedResults.map((result) => result.path));
  const latestProjectState = completedResults.at(-1)?.projectState ?? projectContext.filmProjectState;
  const chainedContext: ProjectRunContext = { ...projectContext, filmProjectState: latestProjectState };

  function selectPath(path: DevelopmentPath) {
    if (completedPaths.has(path)) return;
    setMessage("");
    onSelectPath(path);
  }

  function applyMentorLesson() {
    if (!selectedLessonId) {
      setMessage(copy.mentor.required);
      return;
    }
    onApplyAction(createMentorDevelopmentResult(chainedContext, selectedLessonId));
    setSelectedLessonId("");
  }

  function applyLocationBrief() {
    if (!selectedBriefId) {
      setMessage(copy.location.required);
      return;
    }
    onApplyAction(createLocationDevelopmentResult(chainedContext, selectedBriefId));
    setSelectedBriefId("");
  }

  return (
    <section className="panel development-panel" id={id}>
      <div className="development-panel-heading">
        <div><span className="eyebrow">{copy.panel.eyebrow(projectLabel)}</span><h2>{copy.panel.heading(projectLabel)}</h2></div>
        <p>{copy.panel.intro}</p>
      </div>
      <div className="development-path-grid">
        {paths.map((path) => {
          const done = completedPaths.has(path.id);
          return (
            <button
              className={
                done
                  ? "development-path development-path--done"
                  : selectedPath === path.id
                    ? "development-path development-path--selected"
                    : "development-path"
              }
              disabled={done}
              key={path.id}
              onClick={() => selectPath(path.id)}
              type="button"
            >
              <span className="development-path-number">{done ? "✓" : path.number}</span>
              <strong>{path.title}</strong>
              <span>{done ? copy.panel.applied : path.description}</span>
              <small>{path.consequence}</small>
            </button>
          );
        })}
      </div>
      {!selectedPath && completedResults.length === 0 && (
        <p className="development-prompt">{copy.panel.prompt}</p>
      )}
      {selectedPath === "mentor" && (
        <MentorChoicePanel
          lessons={mentorDevelopmentChoices}
          message={message}
          onApply={applyMentorLesson}
          onSelect={(lessonId) => { setSelectedLessonId(lessonId); setMessage(""); }}
          selectedLessonId={selectedLessonId}
        />
      )}
      {selectedPath === "location" && (
        <LocationChoicePanel
          briefs={locationChoices}
          message={message}
          onApply={applyLocationBrief}
          onSelect={(briefId) => { setSelectedBriefId(briefId); setMessage(""); }}
          selectedBriefId={selectedBriefId}
        />
      )}
      {selectedPath === "script" && (
        <ScriptChoicePanel onApply={() => onApplyAction(createScriptDevelopmentResult(chainedContext))} run={chainedContext} />
      )}
      {completedResults.length > 0 && (
        <div className="development-actions">
          <span className="inline-message" role="status">{copy.progress(completedResults.length)}</span>
          <button className="primary-button" onClick={onFinishDevelopment} type="button">{copy.panel.finish}</button>
        </div>
      )}
    </section>
  );
}
