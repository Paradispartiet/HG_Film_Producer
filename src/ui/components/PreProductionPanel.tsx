import { useState } from "react";
import { STUDIO_CAREER_PRE_PRODUCTION_COPY } from "../../core/studioCareerPreProductionCopy";
import { STUDIO_CAREER_BUDGET_PRIORITY_IDS, previewBudgetPriority, type StudioCareerBudgetPriorityId } from "../../core/studioCareerBudgetPriority.js";
import { formatStudioCareerPostProductionMoney } from "../../core/studioCareerPostProductionCopy.js";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import {
  createPreProductionResult,
  getActorCandidates,
  previewCastingChemistry,
  getCrewCandidatesByDiscipline,
  getPreProductionLocationOptions,
  type PreProductionStepResult
} from "../demo/createPreProductionStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { CastingPanel } from "./CastingPanel.js";
import { CrewHiringPanel } from "./CrewHiringPanel.js";
import { PreProductionLocationPanel } from "./PreProductionLocationPanel.js";

interface PreProductionPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly developmentResult: DevelopmentStepResult;
  readonly selectedLocationId: string;
  readonly selectedCrewIds: readonly string[];
  readonly selectedActorIds: readonly string[];
  readonly selectedBudgetPriorityId?: StudioCareerBudgetPriorityId;
  readonly onSelectBudgetPriority: (id: StudioCareerBudgetPriorityId) => void;
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
  selectedBudgetPriorityId = "reserve",
  onSelectBudgetPriority,
  onSelectLocation,
  onSelectCrew,
  onSelectActors,
  onLock,
  projectLabel,
  id
}: PreProductionPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_PRE_PRODUCTION_COPY[language];
  const [message, setMessage] = useState("");
  const locationOptions = getPreProductionLocationOptions(projectContext, developmentResult);
  const crewGroups = getCrewCandidatesByDiscipline(developmentResult, projectContext.careerState);
  const actorCandidates = getActorCandidates(developmentResult, projectContext.careerState);
  const chemistryPreview = previewCastingChemistry(selectedActorIds, projectContext.careerState);

  function lockPreProduction() {
    const missingDiscipline = crewGroups.find((group) =>
      !group.candidates.some((candidate) => selectedCrewIds.includes(candidate.id))
    );
    if (!selectedLocationId) {
      setMessage(copy.panel.missingLocation);
      return;
    }
    if (missingDiscipline) {
      setMessage(copy.panel.missingCrew[missingDiscipline.discipline]);
      return;
    }
    if (selectedActorIds.length < 2) {
      setMessage(copy.panel.missingCast);
      return;
    }

    try {
      onLock(createPreProductionResult(projectContext, developmentResult, {
        locationId: selectedLocationId,
        crewMemberIds: selectedCrewIds,
        actorIds: selectedActorIds,
        budgetPriorityId: selectedBudgetPriorityId
      }));
      setMessage("");
    } catch {
      setMessage(copy.panel.lockFailure);
    }
  }

  return (
    <section className="panel pre-production-panel" id={id}>
      <div className="pre-production-heading">
        <div><span className="eyebrow">{copy.panel.eyebrow(projectLabel)}</span><h2>{copy.panel.heading(projectContext.project.title)}</h2></div>
        <p>{copy.panel.intro}</p>
      </div>
      <PreProductionLocationPanel options={locationOptions} selectedLocationId={selectedLocationId} onSelect={(locationId) => { onSelectLocation(locationId); setMessage(""); }} />
      <CrewHiringPanel groups={crewGroups} selectedCrewIds={selectedCrewIds} onChange={(crewIds) => { onSelectCrew(crewIds); setMessage(""); }} />
      <CastingPanel candidates={actorCandidates} selectedActorIds={selectedActorIds} chemistryPreview={chemistryPreview} onChange={(actorIds) => { onSelectActors(actorIds); setMessage(""); }} />
      <section className="pre-budget-section">
        <div className="pre-budget-heading"><span className="section-label">{copy.budget.eyebrow}</span><h3>{copy.budget.heading}</h3><p>{copy.budget.intro}</p></div>
        <div className="pre-budget-grid" role="radiogroup" aria-label={copy.budget.heading}>
          {STUDIO_CAREER_BUDGET_PRIORITY_IDS.map((id) => (
            <label className={selectedBudgetPriorityId === id ? "pre-budget-card pre-budget-card--selected" : "pre-budget-card"} key={id}>
              <input type="radio" name="pre-production-budget-priority" value={id} checked={selectedBudgetPriorityId === id} onChange={() => { onSelectBudgetPriority(id); setMessage(""); }} />
              <span><strong>{copy.budget.options[id].title}</strong><small>{copy.budget.options[id].tradeoff}</small>
                <em>{copy.budget.expense(formatStudioCareerPostProductionMoney(previewBudgetPriority(projectContext.filmProjectState.budget, id), language))}</em>
              </span>
            </label>
          ))}
        </div>
      </section>
      <div className="pre-production-actions">
        <div>
          <span className={message ? "inline-message inline-message--error" : "inline-message"} role="status">
            {message || copy.panel.selectionSummary(selectedCrewIds.length, selectedActorIds.length)}
          </span>
          <small>{copy.panel.lockEnds(projectLabel)}</small>
        </div>
        <button className="primary-button" onClick={lockPreProduction} type="button">
          {projectLabel ? copy.panel.lockFor(projectLabel) : copy.panel.lock}
        </button>
      </div>
    </section>
  );
}
