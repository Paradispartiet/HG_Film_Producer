import { useState } from "react";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import {
  createPostProductionStepResult,
  getPostProductionOptions,
  type PostProductionChoices,
  type PostProductionStepResult
} from "../demo/createPostProductionStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { ProjectSetupRun } from "../demo/createProjectSetupRun.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import { ColorDecisionPanel } from "./ColorDecisionPanel.js";
import { EditDecisionPanel } from "./EditDecisionPanel.js";
import { MusicDecisionPanel } from "./MusicDecisionPanel.js";
import { PostProductionResultPanel } from "./PostProductionResultPanel.js";
import { SoundDecisionPanel } from "./SoundDecisionPanel.js";
import { TrailerStrategyPanel } from "./TrailerStrategyPanel.js";

interface PostProductionPanelProps {
  readonly run: ProjectSetupRun;
  readonly developmentResult: DevelopmentStepResult;
  readonly preProductionResult: PreProductionStepResult;
  readonly shootResult: ShootStepResult;
  readonly choices: PostProductionChoices;
  readonly result: PostProductionStepResult | null;
  readonly onChange: (choices: PostProductionChoices) => void;
  readonly onLock: (result: PostProductionStepResult) => void;
}

export function PostProductionPanel({ run, developmentResult, preProductionResult, shootResult, choices, result, onChange, onLock }: PostProductionPanelProps) {
  const [message, setMessage] = useState("");
  const options = getPostProductionOptions();
  if (result) return <PostProductionResultPanel result={result} />;

  function select(key: keyof PostProductionChoices, value: string) {
    onChange({ ...choices, [key]: value });
    setMessage("");
  }
  function lockPostProduction() {
    const missing = missingChoice(choices);
    if (missing) {
      setMessage(`Choose one ${missing} option before locking post-production.`);
      return;
    }
    setMessage("");
    onLock(createPostProductionStepResult(run, developmentResult, preProductionResult, shootResult, choices));
  }

  return (
    <section className="panel post-production-panel">
      <div className="post-panel-heading"><div><span className="eyebrow">Start post-production</span><h2>Edit suite &amp; finishing desk</h2></div><p>Shape the locked cut, test it with an audience, and define the trailer promise.</p></div>
      <EditDecisionPanel onSelect={(id) => select("editDecisionId", id)} options={options.editDecisions} selectedId={choices.editDecisionId} />
      <SoundDecisionPanel onSelect={(id) => select("soundDecisionId", id)} options={options.soundDecisions} selectedId={choices.soundDecisionId} />
      <MusicDecisionPanel onSelect={(id) => select("musicDecisionId", id)} options={options.musicDecisions} selectedId={choices.musicDecisionId} />
      <ColorDecisionPanel onSelect={(id) => select("colorDecisionId", id)} options={options.colorDecisions} selectedId={choices.colorDecisionId} />
      <TrailerStrategyPanel onSelect={(id) => select("trailerStrategyId", id)} options={options.trailerStrategies} selectedId={choices.trailerStrategyId} />
      <div className="post-production-actions"><div><span className={message ? "inline-message inline-message--error" : "inline-message"} role="status">{message || `${selectedCount(choices)}/5 finishing choices selected`}</span><small>Locking runs the test screening, trailer cut and post-production evaluation.</small></div><button className="primary-button" onClick={lockPostProduction} type="button">Lock post-production</button></div>
    </section>
  );
}
function missingChoice(choices: PostProductionChoices): string | null {
  if (!choices.editDecisionId) return "edit";
  if (!choices.soundDecisionId) return "sound";
  if (!choices.musicDecisionId) return "music";
  if (!choices.colorDecisionId) return "color";
  if (!choices.trailerStrategyId) return "trailer";
  return null;
}
function selectedCount(choices: PostProductionChoices): number { return Object.values(choices).filter(Boolean).length; }
