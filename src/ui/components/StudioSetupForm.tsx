import type { ChangeEvent } from "react";
import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage";
import { STUDIO_SETUP_COPY } from "../../core/studioSetupCopy";
import type { StartingStudioPreset } from "../demo/createProjectSetupRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
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
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_SETUP_COPY[language].studio;
  const locale = getFilmWorkIntlLocale(language);

  return (
    <section className="setup-section">
      <div className="setup-section-heading"><span>01</span><div><h3>{copy.heading}</h3><p>{copy.intro}</p></div></div>
      <label className="text-field">
        <span>{copy.nameLabel}</span>
        <input
          aria-invalid={Boolean(studioNameError)}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onStudioNameChange(event.target.value)}
          placeholder={copy.namePlaceholder}
          type="text"
          value={studioName}
        />
        {studioNameError && <small className="field-error">{studioNameError}</small>}
      </label>
      <fieldset className="setup-fieldset">
        <legend>{copy.startingPosition}</legend>
        <div className="choice-grid choice-grid--presets">
          {presets.map((option) => {
            const presetCopy = copy.presets[option.id];
            return (
              <label className={preset === option.id ? "choice-card choice-card--selected" : "choice-card"} key={option.id}>
                <input checked={preset === option.id} name="studio-preset" onChange={() => onPresetChange(option.id)} type="radio" />
                <strong>{presetCopy.label}</strong>
                <span>{presetCopy.description}</span>
                <small>{copy.presetMeta(formatMoney(option.money, locale), option.reputation, option.prestige)}</small>
              </label>
            );
          })}
        </div>
      </fieldset>
    </section>
  );
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
