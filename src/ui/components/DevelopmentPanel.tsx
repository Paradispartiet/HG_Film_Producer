import { useState } from "react";
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

const paths: readonly DevelopmentPathOption[] = [
  { id: "mentor", number: "01", title: "Ask a mentor", description: "Apply one focused lesson to the project.", consequence: "Craft guidance or a technique unlock" },
  { id: "location", number: "02", title: "Scout locations", description: "Rank real production options against a brief.", consequence: "One top location attached" },
  { id: "script", number: "03", title: "Shape the script", description: "Build and evaluate three starter scenes.", consequence: "A scored starter draft" }
];

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
      setMessage("Choose a mentor lesson before applying this path.");
      return;
    }
    onApplyAction(createMentorDevelopmentResult(chainedContext, selectedLessonId));
    setSelectedLessonId("");
  }

  function applyLocationBrief() {
    if (!selectedBriefId) {
      setMessage("Choose a scouting brief before running the location scout.");
      return;
    }
    onApplyAction(createLocationDevelopmentResult(chainedContext, selectedBriefId));
    setSelectedBriefId("");
  }

  return (
    <section className="panel development-panel" id={id}>
      <div className="development-panel-heading">
        <div><span className="eyebrow">{projectLabel} development</span><h2>Develop {projectLabel.toLowerCase()}</h2></div>
        <p>Your producer’s desk can take on any combination of these actions. Finish development when you’re ready to move on.</p>
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
              <span>{done ? "Applied" : path.description}</span>
              <small>{path.consequence}</small>
            </button>
          );
        })}
      </div>
      {!selectedPath && completedResults.length === 0 && (
        <p className="development-prompt">Select a development path to open its working brief.</p>
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
          <span className="inline-message" role="status">
            {completedResults.length} of 3 development action{completedResults.length === 1 ? "" : "s"} applied.
          </span>
          <button className="primary-button" onClick={onFinishDevelopment} type="button">Finish development</button>
        </div>
      )}
    </section>
  );
}
