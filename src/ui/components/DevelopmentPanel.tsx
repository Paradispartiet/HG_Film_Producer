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
  readonly onSelectPath: (path: DevelopmentPath) => void;
  readonly onComplete: (result: DevelopmentStepResult) => void;
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
  onSelectPath,
  onComplete
}: DevelopmentPanelProps) {
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [selectedBriefId, setSelectedBriefId] = useState("");
  const [message, setMessage] = useState("");
  const locationChoices = getLocationDevelopmentChoices(projectContext);

  function selectPath(path: DevelopmentPath) {
    setMessage("");
    onSelectPath(path);
  }

  function applyMentorLesson() {
    if (!selectedLessonId) {
      setMessage("Choose a mentor lesson before applying this path.");
      return;
    }
    onComplete(createMentorDevelopmentResult(projectContext, selectedLessonId));
  }

  function applyLocationBrief() {
    if (!selectedBriefId) {
      setMessage("Choose a scouting brief before running the location scout.");
      return;
    }
    onComplete(createLocationDevelopmentResult(projectContext, selectedBriefId));
  }

  return (
    <section className="panel development-panel">
      <div className="development-panel-heading">
        <div><span className="eyebrow">{projectLabel} development</span><h2>Develop {projectLabel.toLowerCase()}</h2></div>
        <p>Your producer’s desk has room for one action. The choice will be applied through the simulation engine.</p>
      </div>
      <div className="development-path-grid">
        {paths.map((path) => (
          <button
            className={selectedPath === path.id ? "development-path development-path--selected" : "development-path"}
            key={path.id}
            onClick={() => selectPath(path.id)}
            type="button"
          >
            <span className="development-path-number">{path.number}</span>
            <strong>{path.title}</strong>
            <span>{path.description}</span>
            <small>{path.consequence}</small>
          </button>
        ))}
      </div>
      {!selectedPath && <p className="development-prompt">Select a development path to open its working brief.</p>}
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
      {selectedPath === "script" && <ScriptChoicePanel run={projectContext} onApply={() => onComplete(createScriptDevelopmentResult(projectContext))} />}
    </section>
  );
}
