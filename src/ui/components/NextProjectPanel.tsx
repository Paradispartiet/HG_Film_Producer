import { useState } from "react";
import {
  createNextProjectStepResult,
  getNextProjectOptions,
  type NextProjectChoices,
  type NextProjectStepResult,
} from "../demo/createNextProjectStepRun.js";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun.js";
import type { ProjectSetupRun } from "../demo/createProjectSetupRun.js";
import type { NextProjectFormErrors } from "../types.js";
import { NextProjectResultPanel } from "./NextProjectResultPanel.js";
import { NextProjectSetupForm } from "./NextProjectSetupForm.js";
import { PreviousFilmLegacyPanel } from "./PreviousFilmLegacyPanel.js";
import { StudioCarryoverPanel } from "./StudioCarryoverPanel.js";

const options = getNextProjectOptions();
const initialChoices: NextProjectChoices = {
  projectTitle: "",
  genreId: "",
  scale: "indie",
  scriptTemplateId: "",
};

interface NextProjectPanelProps {
  readonly run: ProjectSetupRun;
  readonly careerApplicationResult: CareerApplicationStepResult | null;
}

export function NextProjectPanel({
  run,
  careerApplicationResult,
}: NextProjectPanelProps) {
  const [choices, setChoices] = useState<NextProjectChoices>(initialChoices);
  const [errors, setErrors] = useState<NextProjectFormErrors>({});
  const [result, setResult] = useState<NextProjectStepResult | null>(null);

  if (!careerApplicationResult) {
    return (
      <section className="panel next-project-panel next-project-panel--locked">
        <span className="eyebrow">Next slate locked</span>
        <h2>Start next project</h2>
        <p>
          Apply the released film to the studio and career before creating film
          2.
        </p>
      </section>
    );
  }

  function createNextProject() {
    if (!careerApplicationResult) return;
    const validationErrors = validateChoices(choices);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setResult(
        createNextProjectStepResult(run, careerApplicationResult, choices),
      );
      setErrors({});
    } catch (error) {
      setErrors({
        form:
          error instanceof Error
            ? error.message
            : "The next project could not be created.",
      });
    }
  }

  return (
    <section className="panel next-project-panel">
      <div className="next-project-intro">
        <div>
          <span className="eyebrow">Start next project</span>
          <h2>Greenlight the next slate</h2>
        </div>
        <p>
          The first film is complete. Carry its studio and career consequences
          into one clean second-project setup.
        </p>
      </div>
      <div className="next-project-carryover-grid">
        <StudioCarryoverPanel
          careerState={careerApplicationResult.updatedCareerState}
        />
        <PreviousFilmLegacyPanel result={careerApplicationResult} />
      </div>
      {result ? (
        <NextProjectResultPanel result={result} />
      ) : (
        <NextProjectSetupForm
          activeStrategicGoalIds={
            careerApplicationResult.updatedCareerState.activeStrategicGoalIds
          }
          choices={choices}
          errors={errors}
          onChange={(nextChoices) => {
            setChoices(nextChoices);
            setErrors({});
          }}
          onSubmit={createNextProject}
          options={options}
        />
      )}
    </section>
  );
}

function validateChoices(choices: NextProjectChoices): NextProjectFormErrors {
  return {
    ...(!choices.projectTitle.trim()
      ? { projectTitle: "Enter a title for the next project." }
      : {}),
    ...(!choices.genreId ? { genreId: "Select a genre." } : {}),
    ...(!choices.scriptTemplateId
      ? { scriptTemplateId: "Select a script template." }
      : {}),
  };
}
