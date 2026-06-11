import type { ChangeEvent } from "react";
import type { StartingStudioPreset } from "../demo/createProjectSetupRun.js";
import type { StartingMoneyPreset } from "../types.js";

interface StudioSetupFormProps {
  readonly studioName: string;
  readonly preset: StartingMoneyPreset;
  readonly presets: readonly StartingStudioPreset[];
  readonly studioNameError?: string | undefined;
  readonly onStudioNameChange: (value: string) => void;
  readonly onPresetChange: (value: StartingMoneyPreset) => void;
}

export function StudioSetupForm({
  studioName,
  preset,
  presets,
  studioNameError,
  onStudioNameChange,
  onPresetChange
}: StudioSetupFormProps) {
  return (
    <section className="setup-section">
      <div className="setup-section-heading"><span>01</span><div><h3>Build the studio</h3><p>Choose the banner and starting position for your career.</p></div></div>
      <label className="text-field">
        <span>Studio name</span>
        <input
          aria-invalid={Boolean(studioNameError)}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onStudioNameChange(event.target.value)}
          placeholder="e.g. Northline Pictures"
          type="text"
          value={studioName}
        />
        {studioNameError && <small className="field-error">{studioNameError}</small>}
      </label>
      <fieldset className="setup-fieldset">
        <legend>Starting position</legend>
        <div className="choice-grid choice-grid--presets">
          {presets.map((option) => (
            <label className={preset === option.id ? "choice-card choice-card--selected" : "choice-card"} key={option.id}>
              <input checked={preset === option.id} name="studio-preset" onChange={() => onPresetChange(option.id)} type="radio" />
              <strong>{option.label}</strong>
              <span>{option.description}</span>
              <small>{formatMoney(option.money)} · Rep {option.reputation} · Prestige {option.prestige}</small>
            </label>
          ))}
        </div>
      </fieldset>
    </section>
  );
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
