import { useState } from "react";
import { STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import {
  createPostProductionStepResult,
  getPostProductionOptions,
  type PostProductionChoices,
  type PostProductionStepResult
} from "../demo/createPostProductionStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
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

interface PostProductionPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly projectLabel?: ProjectPostProductionLabel;
  readonly preProductionResult: PreProductionStepResult;
  readonly shootResult: ShootStepResult;
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
  choices,
  result,
  onChange,
  onLock,
  id
}: PostProductionPanelProps) {
  const [message, setMessage] = useState("");
  const language = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_POST_PRODUCTION_COPY[language];
  const options = getPostProductionOptions();
  const isLaterFilm = projectLabel !== "first film";
  const choiceLabels: ReadonlyArray<readonly [keyof PostProductionChoices, string]> = [
    ["editDecisionId", copy.panel.choiceLabels.edit],
    ["soundDecisionId", copy.panel.choiceLabels.sound],
    ["musicDecisionId", copy.panel.choiceLabels.music],
    ["colorDecisionId", copy.panel.choiceLabels.color],
    ["trailerStrategyId", copy.panel.choiceLabels.trailer]
  ];

  if (result) {
    return <PostProductionResultPanel projectLabel={projectLabel} result={result} />;
  }

  function select(key: keyof PostProductionChoices, value: string) {
    onChange({ ...choices, [key]: value });
    setMessage("");
  }

  function lockPostProduction() {
    const missing = choiceLabels.filter(([key]) => !choices[key]).map(([, label]) => label);
    if (missing.length > 0) {
      setMessage(copy.panel.missingChoices(missing));
      return;
    }

    setMessage("");
    onLock(createPostProductionStepResult(projectContext, preProductionResult, shootResult, choices));
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
      <EditDecisionPanel onSelect={(id) => select("editDecisionId", id)} options={options.editDecisions} selectedId={choices.editDecisionId} />
      <SoundDecisionPanel onSelect={(id) => select("soundDecisionId", id)} options={options.soundDecisions} selectedId={choices.soundDecisionId} />
      <MusicDecisionPanel onSelect={(id) => select("musicDecisionId", id)} options={options.musicDecisions} selectedId={choices.musicDecisionId} />
      <ColorDecisionPanel onSelect={(id) => select("colorDecisionId", id)} options={options.colorDecisions} selectedId={choices.colorDecisionId} />
      <TrailerStrategyPanel onSelect={(id) => select("trailerStrategyId", id)} options={options.trailerStrategies} selectedId={choices.trailerStrategyId} />
      <div className="post-production-actions">
        <div>
          <span className={message ? "inline-message inline-message--error" : "inline-message"} role="status">
            {message || copy.panel.selectedCount(selectedCount(choices))}
          </span>
          <small>{copy.panel.lockHint}</small>
        </div>
        <button className="primary-button" onClick={lockPostProduction} type="button">{copy.panel.lockButton(projectLabel)}</button>
      </div>
    </section>
  );
}

function selectedCount(choices: PostProductionChoices): number {
  return choiceKeys.filter((key) => Boolean(choices[key])).length;
}
