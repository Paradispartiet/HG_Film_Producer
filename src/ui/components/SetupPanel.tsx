import { useState, type FormEvent } from "react";
import type { FilmScale } from "../../domain/film.js";
import {
  createProjectSetupRun,
  projectSetupData,
  startingStudioPresets,
  type ProjectSetupRun
} from "../demo/createProjectSetupRun.js";
import type { ProjectSetupChoices, StartingMoneyPreset } from "../types.js";
import { ProjectSetupForm } from "./ProjectSetupForm.js";
import { StrategicGoalSelector } from "./StrategicGoalSelector.js";
import { StudioSetupForm } from "./StudioSetupForm.js";

interface SetupErrors {
  readonly studioName?: string | undefined;
  readonly strategicGoalId?: string | undefined;
  readonly projectTitle?: string | undefined;
  readonly genreId?: string | undefined;
  readonly scriptTemplateId?: string | undefined;
}

interface SetupPanelProps {
  readonly onCreate: (run: ProjectSetupRun) => void;
}

const initialChoices: ProjectSetupChoices = {
  studioName: "",
  startingMoneyPreset: "indie_studio",
  strategicGoalId: "",
  projectTitle: "",
  genreId: "",
  scale: "indie",
  scriptTemplateId: ""
};

export function SetupPanel({ onCreate }: SetupPanelProps) {
  const [choices, setChoices] = useState<ProjectSetupChoices>(initialChoices);
  const [errors, setErrors] = useState<SetupErrors>({});

  function updateChoice<Key extends keyof ProjectSetupChoices>(key: Key, value: ProjectSetupChoices[Key]) {
    setChoices((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function selectGenre(genreId: string) {
    const matchingTemplate = projectSetupData.scriptTemplates.find((template) => template.genreId === genreId);
    setChoices((current) => ({
      ...current,
      genreId,
      scriptTemplateId: matchingTemplate?.id ?? ""
    }));
    setErrors((current) => ({ ...current, genreId: undefined, scriptTemplateId: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateChoices(choices);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    onCreate(createProjectSetupRun(choices));
  }

  return (
    <section className="panel setup-panel">
      <div className="setup-panel-intro">
        <div><span className="eyebrow">New studio slate</span><h2>Create your first project</h2></div>
        <p>Set the studio mandate and package one film. This run stops before development.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <StudioSetupForm
          studioName={choices.studioName}
          preset={choices.startingMoneyPreset}
          presets={startingStudioPresets}
          studioNameError={errors.studioName}
          onStudioNameChange={(value) => updateChoice("studioName", value)}
          onPresetChange={(value: StartingMoneyPreset) => updateChoice("startingMoneyPreset", value)}
        />
        <section className="setup-section">
          <div className="setup-section-heading"><span>02</span><div><h3>Set the mandate</h3><p>Choose the ambition that will guide early decisions.</p></div></div>
          <StrategicGoalSelector
            goals={projectSetupData.strategicGoals}
            value={choices.strategicGoalId}
            error={errors.strategicGoalId}
            onChange={(value) => updateChoice("strategicGoalId", value)}
          />
        </section>
        <ProjectSetupForm
          title={choices.projectTitle}
          genreId={choices.genreId}
          scale={choices.scale}
          scriptTemplateId={choices.scriptTemplateId}
          genres={projectSetupData.genres}
          templates={projectSetupData.scriptTemplates}
          errors={errors}
          onTitleChange={(value) => updateChoice("projectTitle", value)}
          onGenreChange={selectGenre}
          onScaleChange={(value: FilmScale) => updateChoice("scale", value)}
          onScriptTemplateChange={(value) => updateChoice("scriptTemplateId", value)}
        />
        <div className="setup-actions">
          <div><strong>Ready when you are</strong><span>Creates an engine-backed career and project state.</span></div>
          <button className="primary-button" type="submit">Create project</button>
        </div>
      </form>
    </section>
  );
}

function validateChoices(choices: ProjectSetupChoices): SetupErrors {
  return {
    ...(choices.studioName.trim() ? {} : { studioName: "Enter a studio name." }),
    ...(choices.strategicGoalId ? {} : { strategicGoalId: "Select a strategic goal." }),
    ...(choices.projectTitle.trim() ? {} : { projectTitle: "Enter a project title." }),
    ...(choices.genreId ? {} : { genreId: "Select a genre." }),
    ...(choices.scriptTemplateId ? {} : { scriptTemplateId: "Select a script template." })
  };
}
