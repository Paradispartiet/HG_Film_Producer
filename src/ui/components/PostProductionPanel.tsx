import { useState } from "react";
import { STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import { STUDIO_CAREER_EDITING_APPROACH_IDS } from "../../core/studioCareerEditingApproach.js";
import { selectScreeningCraftAlternatives } from "../../core/studioCareerScreeningCraftRevision.js";
import { getStudioCareerEditingHandoff, STUDIO_CAREER_EDITING_HANDOFF_COPY } from "../../core/studioCareerEditingHandoff.js";
import { getStudioCareerFootageEvidence } from "../../core/studioCareerFootageEditing.js";
import {
  createPostProductionStepResult,
  getPostProductionOptions,
  type PostProductionChoices,
  type PostProductionStepResult
} from "../demo/createPostProductionStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
import type { ProjectPostProductionLabel } from "../types.js";
import { ColorDecisionPanel } from "./ColorDecisionPanel.js";
import { EditDecisionPanel } from "./EditDecisionPanel.js";
import { MusicDecisionPanel } from "./MusicDecisionPanel.js";
import { PostProductionResultPanel } from "./PostProductionResultPanel.js";
import { SoundDecisionPanel } from "./SoundDecisionPanel.js";
import { TrailerStrategyPanel } from "./TrailerStrategyPanel.js";
import { TestScreeningPanel } from "./TestScreeningPanel.js";
import { ScreeningRevisionPanel } from "./ScreeningRevisionPanel.js";
import { ScreeningCraftRevisionPanel } from "./ScreeningCraftRevisionPanel.js";

interface PostProductionPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly projectLabel?: ProjectPostProductionLabel;
  readonly preProductionResult: PreProductionStepResult;
  readonly shootResult: ShootStepResult;
  readonly developmentResults?: readonly DevelopmentStepResult[];
  readonly choices: PostProductionChoices;
  readonly result: PostProductionStepResult | null;
  readonly onChange: (choices: PostProductionChoices) => void;
  readonly onLock: (result: PostProductionStepResult) => void;
  readonly id?: string | undefined;
}

const choiceKeys = ["editDecisionId", "soundDecisionId", "musicDecisionId", "colorDecisionId", "trailerStrategyId"] as const;

export function PostProductionPanel({
  projectContext,
  projectLabel = "first film",
  preProductionResult,
  shootResult,
  developmentResults = [],
  choices,
  result,
  onChange,
  onLock,
  id
}: PostProductionPanelProps) {
  const [message, setMessage] = useState("");
  // A preview never commits a film; it is valid only for this exact cut and its source evidence.
  const [screeningPreview, setScreeningPreview] = useState<{
    readonly signature: string;
    readonly context: ProjectRunContext;
    readonly preProduction: PreProductionStepResult;
    readonly shoot: ShootStepResult;
    readonly result: PostProductionStepResult;
  } | null>(null);
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_POST_PRODUCTION_COPY[language];
  const options = getPostProductionOptions();
  const isLaterFilm = projectLabel !== "first film";
  const selectedEditingApproach = choices.editingApproachId ?? "balanced";
  const handoff = getStudioCareerEditingHandoff(language, shootResult.resolvedDays);
  const footage = getStudioCareerFootageEvidence(shootResult.resolvedDays);
  const handoffCopy = STUDIO_CAREER_EDITING_HANDOFF_COPY[language];
  const scriptAction = developmentResults.find((action) => action.path === "script");
  const scriptDraftScore = scriptAction?.path === "script" ? scriptAction.overallScore : undefined;
  const scriptCraftScores = scriptAction?.path === "script" ? scriptAction.scoreBreakdown : undefined;
  const choiceLabels: ReadonlyArray<readonly [keyof PostProductionChoices, string]> = [
    ["editDecisionId", copy.panel.choiceLabels.edit],
    ["soundDecisionId", copy.panel.choiceLabels.sound],
    ["musicDecisionId", copy.panel.choiceLabels.music],
    ["colorDecisionId", copy.panel.choiceLabels.color],
    ["trailerStrategyId", copy.panel.choiceLabels.trailer]
  ];

  const screeningSignature = JSON.stringify([
    projectContext.filmProjectState.id,
    ...choiceKeys.map((key) => choices[key]),
    selectedEditingApproach,
    scriptDraftScore,
    scriptCraftScores
  ]);
  const activePreview = screeningPreview?.signature === screeningSignature
    && screeningPreview.context === projectContext
    && screeningPreview.preProduction === preProductionResult
    && screeningPreview.shoot === shootResult
    ? screeningPreview.result
    : null;

  const screeningAlternatives = activePreview
    ? STUDIO_CAREER_EDITING_APPROACH_IDS
      .filter((approachId) => approachId !== selectedEditingApproach)
      .map((approachId) => ({
        id: approachId,
        result: createPostProductionStepResult(
          projectContext, preProductionResult, shootResult,
          { ...choices, editingApproachId: approachId }, scriptDraftScore, scriptCraftScores
        ).testScreeningResult
      }))
    : [];

  // Each option uses the exact same evaluation as the current cut and the
  // locked film. Never invent audience score deltas from generic descriptions.
  const craftAlternatives = activePreview ? {
    sound: selectScreeningCraftAlternatives(
      activePreview.testScreeningResult,
      options.soundDecisions.filter((option) => option.id !== choices.soundDecisionId).map((option) => ({
        id: option.id,
        costDelta: option.cost - (options.soundDecisions.find((candidate) => candidate.id === choices.soundDecisionId)?.cost ?? 0),
        result: createPostProductionStepResult(
          projectContext, preProductionResult, shootResult,
          { ...choices, soundDecisionId: option.id }, scriptDraftScore, scriptCraftScores
        ).testScreeningResult
      }))
    ),
    music: selectScreeningCraftAlternatives(
      activePreview.testScreeningResult,
      options.musicDecisions.filter((option) => option.id !== choices.musicDecisionId).map((option) => ({
        id: option.id,
        costDelta: option.cost - (options.musicDecisions.find((candidate) => candidate.id === choices.musicDecisionId)?.cost ?? 0),
        result: createPostProductionStepResult(
          projectContext, preProductionResult, shootResult,
          { ...choices, musicDecisionId: option.id }, scriptDraftScore, scriptCraftScores
        ).testScreeningResult
      }))
    )
  } : null;

  if (result) {
    // Old saved results must not claim the draft influenced a screening
    // that was calculated before this mechanic existed.
    const scoreUsed = scriptDraftScore !== undefined
      && result.testScreeningResult.notes.some((note) => note.startsWith("The completed script draft scored "));
    return <PostProductionResultPanel projectLabel={projectLabel} result={result} scriptDraftScore={scoreUsed ? scriptDraftScore : undefined} />;
  }

  function select(key: keyof PostProductionChoices, value: string) {
    onChange({ ...choices, [key]: value });
    setScreeningPreview(null);
    setMessage("");
  }

  function previewTestScreening() {
    const missing = choiceLabels.filter(([key]) => !choices[key]).map(([, label]) => label);
    if (missing.length > 0) {
      setMessage(copy.panel.missingChoices(missing));
      return;
    }

    const next = createPostProductionStepResult(
      projectContext, preProductionResult, shootResult, choices, scriptDraftScore, scriptCraftScores
    );
    setScreeningPreview({
      signature: screeningSignature, context: projectContext,
      preProduction: preProductionResult, shoot: shootResult, result: next
    });
    setMessage("");
  }

  function lockPostProduction() {
    const missing = choiceLabels.filter(([key]) => !choices[key]).map(([, label]) => label);
    if (missing.length > 0) {
      setMessage(copy.panel.missingChoices(missing));
      return;
    }

    setMessage("");
    onLock(activePreview ?? createPostProductionStepResult(
      projectContext, preProductionResult, shootResult, choices, scriptDraftScore, scriptCraftScores
    ));
  }

  return (
    <section className={`panel post-production-panel${isLaterFilm ? " post-production-panel--later-project" : ""}`} id={id}>
      <div className="post-panel-heading">
        <div>
          <span className="eyebrow">{copy.panel.startEyebrow(projectLabel)}</span>
          <h2>{copy.panel.heading(projectLabel, projectContext.project.title)}</h2>
        </div>
        <p>{copy.panel.description}</p>
      </div>
      <section className="editing-handoff" aria-label={handoffCopy.heading}>
        <h3>{handoffCopy.heading}</h3>
        <p>{handoffCopy.introduction}</p>
        <strong>{handoffCopy.averageTake(shootResult.shootEvaluation.averageTakeQuality)}</strong>
        {footage && (
          <div className="editing-footage-status" data-missing-scenes={footage.missingScenes}>
            <strong>{handoffCopy.footageHeading}</strong>
            <p>{handoffCopy.sceneCoverage(footage.completedScenes, footage.missingScenes)}</p>
            {footage.lowestQualityDay && (
              <small>{handoffCopy.lowestTake(footage.lowestQualityDay.dayNumber, footage.lowestQualityDay.takeQuality)}</small>
            )}
            <p>{footage.missingScenes > 0 ? handoffCopy.gapsAdvice : handoffCopy.completeAdvice}</p>
            {footage.missingScenes > 0 && selectedEditingApproach === "story_first" && (
              <small>{handoffCopy.storySupport}</small>
            )}
          </div>
        )}
        {handoff && (
          <details>
            <summary>{handoffCopy.dayLabel(handoff.dayNumber)}</summary>
            <p>{handoff.action}</p>
            <p><strong>{handoffCopy.crewResponse}: </strong>{handoff.teamResponse}</p>
          </details>
        )}
        <small>{handoffCopy.limits}</small>
      </section>
      <EditDecisionPanel onSelect={(id) => select("editDecisionId", id)} options={options.editDecisions} selectedId={choices.editDecisionId} />
      <section className="editing-tradeoff-section">
        <div className="post-section-heading">
          <div><span className="eyebrow">{copy.editingApproach.eyebrow}</span><h3>{copy.editingApproach.heading}</h3></div>
          <p>{copy.editingApproach.description}</p>
        </div>
        <div className="editing-tradeoff-grid" role="radiogroup" aria-label={copy.editingApproach.heading}>
          {STUDIO_CAREER_EDITING_APPROACH_IDS.map((approachId) => (
            <label className={selectedEditingApproach === approachId ? "editing-tradeoff-card editing-tradeoff-card--selected" : "editing-tradeoff-card"} key={approachId}>
              <input
                type="radio"
                name="studio-career-editing-approach"
                value={approachId}
                checked={selectedEditingApproach === approachId}
                onChange={() => select("editingApproachId", approachId)}
              />
              <span><strong>{copy.editingApproach.options[approachId].title}</strong><small>{copy.editingApproach.options[approachId].tradeoff}</small></span>
            </label>
          ))}
        </div>
      </section>
      <SoundDecisionPanel onSelect={(id) => select("soundDecisionId", id)} options={options.soundDecisions} selectedId={choices.soundDecisionId} />
      <MusicDecisionPanel onSelect={(id) => select("musicDecisionId", id)} options={options.musicDecisions} selectedId={choices.musicDecisionId} />
      <ColorDecisionPanel onSelect={(id) => select("colorDecisionId", id)} options={options.colorDecisions} selectedId={choices.colorDecisionId} />
      <TrailerStrategyPanel onSelect={(id) => select("trailerStrategyId", id)} options={options.trailerStrategies} selectedId={choices.trailerStrategyId} />
      {activePreview && (
        <section className="post-production-preview" aria-label={copy.panel.previewHeading}>
          <p className="post-production-preview-guidance">{copy.panel.previewDescription}</p>
          <TestScreeningPanel
            result={activePreview.testScreeningResult}
            scriptDraftScore={scriptDraftScore}
            editingApproachId={activePreview.editingApproachId}
          />
          <ScreeningRevisionPanel
            screening={activePreview.testScreeningResult}
            alternatives={screeningAlternatives}
            onChoose={(approachId) => select("editingApproachId", approachId)}
          />
          {craftAlternatives && (
            <ScreeningCraftRevisionPanel
              screening={activePreview.testScreeningResult}
              sound={craftAlternatives.sound}
              music={craftAlternatives.music}
              onChoose={(kind, id) => select(kind === "sound" ? "soundDecisionId" : "musicDecisionId", id)}
            />
          )}
        </section>
      )}
      <div className="post-production-actions">
        <div>
          <span className={message ? "inline-message inline-message--error" : "inline-message"} role="status">
            {message || copy.panel.selectedCount(selectedCount(choices))}
          </span>
          <small>{copy.panel.lockHint}</small>
        </div>
        <div className="post-production-action-buttons">
          <button className="secondary-button" onClick={previewTestScreening} type="button">
            {activePreview ? copy.panel.retestButton : copy.panel.previewButton}
          </button>
          <button className="primary-button" onClick={lockPostProduction} type="button">{copy.panel.lockButton(projectLabel)}</button>
        </div>
      </div>
    </section>
  );
}

function selectedCount(choices: PostProductionChoices): number {
  return choiceKeys.filter((key) => Boolean(choices[key])).length;
}
