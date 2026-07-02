import { useState } from "react";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import {
  createPreProductionResult,
  getActorCandidates,
  getCrewCandidatesByDiscipline,
  getPreProductionLocationOptions,
  type PreProductionStepResult
} from "../demo/createPreProductionStepRun.js";
import { CastingPanel } from "./CastingPanel.js";
import { CrewHiringPanel } from "./CrewHiringPanel.js";
import { PreProductionLocationPanel } from "./PreProductionLocationPanel.js";

interface PreProductionPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly developmentResult: DevelopmentStepResult;
  readonly selectedLocationId: string;
  readonly selectedCrewIds: readonly string[];
  readonly selectedActorIds: readonly string[];
  readonly onSelectLocation: (locationId: string) => void;
  readonly onSelectCrew: (crewIds: readonly string[]) => void;
  readonly onSelectActors: (actorIds: readonly string[]) => void;
  readonly onLock: (result: PreProductionStepResult) => void;
  readonly projectLabel?: string;
  readonly id?: string | undefined;
}

export function PreProductionPanel({
  projectContext,
  developmentResult,
  selectedLocationId,
  selectedCrewIds,
  selectedActorIds,
  onSelectLocation,
  onSelectCrew,
  onSelectActors,
  onLock,
  projectLabel,
  id
}: PreProductionPanelProps) {
  const [message, setMessage] = useState("");
  const locationOptions = getPreProductionLocationOptions(projectContext, developmentResult);
  const crewGroups = getCrewCandidatesByDiscipline(developmentResult, projectContext.careerState);
  const actorCandidates = getActorCandidates(developmentResult, projectContext.careerState);
  const labelSuffix = projectLabel ? ` for ${projectLabel}` : "";

  function lockPreProduction() {
    const missingDiscipline = crewGroups.find((group) =>
      !group.candidates.some((candidate) => selectedCrewIds.includes(candidate.id))
    );
    if (!selectedLocationId) {
      setMessage("Choose or confirm one location before locking pre-production.");
      return;
    }
    if (missingDiscipline) {
      setMessage(`Hire one ${missingDiscipline.label.toLowerCase()} before locking pre-production.`);
      return;
    }
    if (selectedActorIds.length < 2) {
      setMessage("Cast at least two actors before locking pre-production.");
      return;
    }

    try {
      onLock(createPreProductionResult(projectContext, developmentResult, {
        locationId: selectedLocationId,
        crewMemberIds: selectedCrewIds,
        actorIds: selectedActorIds
      }));
      setMessage("");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Pre-production could not be locked.");
    }
  }

  return (
    <section className="panel pre-production-panel" id={id}>
      <div className="pre-production-heading">
        <div><span className="eyebrow">Start pre-production{labelSuffix}</span><h2>{projectContext.project.title} production office</h2></div>
        <p>Turn the development direction into a practical location, crew and casting plan.</p>
      </div>
      <PreProductionLocationPanel options={locationOptions} selectedLocationId={selectedLocationId} onSelect={(id) => { onSelectLocation(id); setMessage(""); }} />
      <CrewHiringPanel groups={crewGroups} selectedCrewIds={selectedCrewIds} onChange={(ids) => { onSelectCrew(ids); setMessage(""); }} />
      <CastingPanel candidates={actorCandidates} selectedActorIds={selectedActorIds} onChange={(ids) => { onSelectActors(ids); setMessage(""); }} />
      <div className="pre-production-actions">
        <div>
          <span className={message ? "inline-message inline-message--error" : "inline-message"} role="status">
            {message || `${selectedCrewIds.length}/3 key crew · ${selectedActorIds.length} cast selected`}
          </span>
          <small>Locking ends this playable pre-production step{labelSuffix}.</small>
        </div>
        <button className="primary-button" onClick={lockPreProduction} type="button">Lock pre-production{labelSuffix}</button>
      </div>
    </section>
  );
}
