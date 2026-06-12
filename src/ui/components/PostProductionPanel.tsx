import { useState } from "react";
import {
  createPostProductionStepResult,
  getPostProductionOptions,
  type PostProductionChoices,
  type PostProductionStepResult
} from "../demo/createPostProductionStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
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
}

export function PostProductionPanel({
  projectContext,
  projectLabel = "first film",
  preProductionResult,
  shootResult,
  choices,
  result,
  onChange,
  onLock
}: PostProductionPanelProps) {
  const [message, setMessage] = useState("");
  const options = getPostProductionOptions();
  const isSecondFilm = projectLabel === "film 2";

  if (result) {
    return <PostProductionResultPanel projectLabel={projectLabel} result={result} />;
  }

  function select(key: keyof PostProductionChoices, value: string) {
    onChange({ ...choices, [key]: value });
    setMessage("");
  }

  function lockPostProduction() {
    const missing = missingChoices(choices);
    if (missing.length > 0) {
      setMessage(`Choose ${formatList(missing)} before locking post-production.`);
      return;
    }

    setMessage("");
    onLock(createPostProductionStepResult(projectContext, preProductionResult, shootResult, choices));
  }

  return (
    <section className={`panel post-production-panel${isSecondFilm ? " post-production-panel--second-project" : ""}`}>
      <div className="post-panel-heading">
        <div>
          <span className="eyebrow">{isSecondFilm ? "Start post-production for film 2" : "Start post-production"}</span>
          <h2>{isSecondFilm ? `Finish ${projectContext.project.title}` : "Edit suite & finishing desk"}</h2>
        </div>
        <p>Shape the locked cut, test it with an audience, and define the trailer promise.</p>
      </div>
      <EditDecisionPanel onSelect={(id) => select("editDecisionId", id)} options={options.editDecisions} selectedId={choices.editDecisionId} />
      <SoundDecisionPanel onSelect={(id) => select("soundDecisionId", id)} options={options.soundDecisions} selectedId={choices.soundDecisionId} />
      <MusicDecisionPanel onSelect={(id) => select("musicDecisionId", id)} options={options.musicDecisions} selectedId={choices.musicDecisionId} />
      <ColorDecisionPanel onSelect={(id) => select("colorDecisionId", id)} options={options.colorDecisions} selectedId={choices.colorDecisionId} />
      <TrailerStrategyPanel onSelect={(id) => select("trailerStrategyId", id)} options={options.trailerStrategies} selectedId={choices.trailerStrategyId} />
      <div className="post-production-actions">
        <div>
          <span className={message ? "inline-message inline-message--error" : "inline-message"} role="status">
            {message || `${selectedCount(choices)}/5 finishing choices selected`}
          </span>
          <small>Locking runs the test screening, trailer cut and post-production evaluation.</small>
        </div>
        <button className="primary-button" onClick={lockPostProduction} type="button">
          {isSecondFilm ? "Lock post-production for film 2" : "Lock post-production"}
        </button>
      </div>
    </section>
  );
}

const choiceLabels: ReadonlyArray<readonly [keyof PostProductionChoices, string]> = [
  ["editDecisionId", "an edit decision"],
  ["soundDecisionId", "a sound decision"],
  ["musicDecisionId", "a music decision"],
  ["colorDecisionId", "a color decision"],
  ["trailerStrategyId", "a trailer strategy"]
];

function missingChoices(choices: PostProductionChoices): readonly string[] {
  return choiceLabels
    .filter(([key]) => !choices[key])
    .map(([, label]) => label);
}

function formatList(items: readonly string[]): string {
  if (items.length <= 1) return items[0] ?? "all five finishing choices";
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

function selectedCount(choices: PostProductionChoices): number {
  return choiceLabels.filter(([key]) => Boolean(choices[key])).length;
}
