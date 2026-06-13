import { useState } from "react";
import {
  createNextProjectStepResult,
  getNextProjectOptions,
  type NextProjectChoices,
  type NextProjectStepResult,
} from "../demo/createNextProjectStepRun.js";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun.js";
import { CareerApplicationPanel } from "./CareerApplicationPanel.js";
import type { ProjectSetupRun } from "../demo/createProjectSetupRun.js";
import type { DevelopmentPath, DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import { createProjectRunContext } from "../demo/createProjectRunContext.js";
import type { NextProjectFormErrors, PreProductionSelectionState } from "../types.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import { NextProjectResultPanel } from "./NextProjectResultPanel.js";
import { DevelopmentPanel } from "./DevelopmentPanel.js";
import { DevelopmentResultPanel } from "./DevelopmentResultPanel.js";
import { NextProjectSetupForm } from "./NextProjectSetupForm.js";
import { PreviousFilmLegacyPanel } from "./PreviousFilmLegacyPanel.js";
import { PreProductionPanel } from "./PreProductionPanel.js";
import { ProductionTeamResultPanel } from "./ProductionTeamResultPanel.js";
import { ShootPanel } from "./ShootPanel.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import { StudioCarryoverPanel } from "./StudioCarryoverPanel.js";
import { PostProductionPanel } from "./PostProductionPanel.js";
import type { PostProductionChoices, PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import type { ReleaseStepChoices, ReleaseStepResult } from "../demo/createReleaseStepRun.js";
import { ReleaseStepPanel } from "./ReleaseStepPanel.js";

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
  readonly result: NextProjectStepResult | null;
  readonly selectedDevelopmentPath: DevelopmentPath | null;
  readonly developmentResult: DevelopmentStepResult | null;
  readonly preProductionSelections: PreProductionSelectionState;
  readonly preProductionResult: PreProductionStepResult | null;
  readonly selectedProductionEventId: string;
  readonly shootResult: ShootStepResult | null;
  readonly postProductionChoices: PostProductionChoices;
  readonly postProductionResult: PostProductionStepResult | null;
  readonly releaseChoices: ReleaseStepChoices;
  readonly releaseResult: ReleaseStepResult | null;
  readonly secondProjectCareerApplicationResult: CareerApplicationStepResult | null;
  readonly thirdProjectResult: NextProjectStepResult | null;
  readonly selectedThirdDevelopmentPath: DevelopmentPath | null;
  readonly thirdProjectDevelopmentResult: DevelopmentStepResult | null;
  readonly onCreate: (result: NextProjectStepResult) => void;
  readonly onCreateThirdProject: (result: NextProjectStepResult) => void;
  readonly onSelectThirdProjectDevelopmentPath: (path: DevelopmentPath) => void;
  readonly onCompleteThirdProjectDevelopment: (result: DevelopmentStepResult) => void;
  readonly onSelectDevelopmentPath: (path: DevelopmentPath) => void;
  readonly onCompleteDevelopment: (result: DevelopmentStepResult) => void;
  readonly onChangePreProductionSelections: (selections: PreProductionSelectionState) => void;
  readonly onLockPreProduction: (result: PreProductionStepResult) => void;
  readonly onSelectProductionEvent: (eventId: string) => void;
  readonly onResolveShootDay: (result: ShootStepResult) => void;
  readonly onChangePostProductionChoices: (choices: PostProductionChoices) => void;
  readonly onLockPostProduction: (result: PostProductionStepResult) => void;
  readonly onChangeReleaseChoices: (choices: ReleaseStepChoices) => void;
  readonly onRelease: (result: ReleaseStepResult) => void;
  readonly onApplyCareerResult: () => void;
}

export function NextProjectPanel({
  run,
  careerApplicationResult,
  result,
  selectedDevelopmentPath,
  developmentResult,
  preProductionSelections,
  preProductionResult,
  selectedProductionEventId,
  shootResult,
  postProductionChoices,
  postProductionResult,
  releaseChoices,
  releaseResult,
  secondProjectCareerApplicationResult,
  thirdProjectResult,
  selectedThirdDevelopmentPath,
  thirdProjectDevelopmentResult,
  onCreate,
  onCreateThirdProject,
  onSelectThirdProjectDevelopmentPath,
  onCompleteThirdProjectDevelopment,
  onSelectDevelopmentPath,
  onCompleteDevelopment,
  onChangePreProductionSelections,
  onLockPreProduction,
  onSelectProductionEvent,
  onResolveShootDay,
  onChangePostProductionChoices,
  onLockPostProduction,
  onChangeReleaseChoices,
  onRelease,
  onApplyCareerResult,
}: NextProjectPanelProps) {
  const [choices, setChoices] = useState<NextProjectChoices>(initialChoices);
  const [errors, setErrors] = useState<NextProjectFormErrors>({});

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
      onCreate(
        createNextProjectStepResult(
          createProjectRunContext(run),
          careerApplicationResult,
          choices,
        ),
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
        <>
          <NextProjectResultPanel careerApplicationResult={secondProjectCareerApplicationResult} developmentResult={developmentResult} postProductionResult={postProductionResult} preProductionResult={preProductionResult} releaseResult={releaseResult} result={result} shootResult={shootResult} />
          {developmentResult ? (
            <>
              <DevelopmentResultPanel projectLabel="Film 2" result={developmentResult} />
              {preProductionResult ? (
                <>
                  <ProductionTeamResultPanel
                    nextStepLabel={postProductionResult ? "Post-production locked" : shootResult ? "Shoot day resolved" : "Shoot is next"}
                    projectLabel="Film 2"
                    result={preProductionResult}
                  />
                  <ShootPanel
                    developmentResult={developmentResult}
                    onResolveShootDay={onResolveShootDay}
                    onSelectProductionEvent={onSelectProductionEvent}
                    preProductionResult={preProductionResult}
                    projectContext={createProjectRunContext(result)}
                    projectLabel="film 2"
                    selectedProductionEventId={selectedProductionEventId}
                    shootResult={shootResult}
                  />
                  {shootResult && (
                    <PostProductionPanel
                      choices={postProductionChoices}
                      onChange={onChangePostProductionChoices}
                      onLock={onLockPostProduction}
                      preProductionResult={preProductionResult}
                      projectContext={createProjectRunContext(result)}
                      projectLabel="film 2"
                      result={postProductionResult}
                      shootResult={shootResult}
                    />
                  )}
                  {shootResult && postProductionResult && (
                    <ReleaseStepPanel
                      choices={releaseChoices}
                      developmentResult={developmentResult}
                      onChange={onChangeReleaseChoices}
                      onRelease={onRelease}
                      postProductionResult={postProductionResult}
                      preProductionResult={preProductionResult}
                      projectContext={createProjectRunContext(result)}
                      projectLabel="film 2"
                      result={releaseResult}
                      shootResult={shootResult}
                    />
                  )}
                  {postProductionResult && (
                    <CareerApplicationPanel
                      onApply={onApplyCareerResult}
                      projectContext={createProjectRunContext(result)}
                      projectLabel="film 2"
                      releaseResult={releaseResult}
                      result={secondProjectCareerApplicationResult}
                      strategicGoal={result.selectedStrategicGoal ?? run.strategicGoal}
                    />
                  )}
                </>
              ) : (
                <PreProductionPanel
                  developmentResult={developmentResult}
                  onLock={onLockPreProduction}
                  onSelectActors={(selectedActorIds) => onChangePreProductionSelections({ ...preProductionSelections, selectedActorIds })}
                  onSelectCrew={(selectedCrewIds) => onChangePreProductionSelections({ ...preProductionSelections, selectedCrewIds })}
                  onSelectLocation={(selectedLocationId) => onChangePreProductionSelections({ ...preProductionSelections, selectedLocationId })}
                  projectContext={createProjectRunContext(result)}
                  projectLabel="film 2"
                  selectedActorIds={preProductionSelections.selectedActorIds}
                  selectedCrewIds={preProductionSelections.selectedCrewIds}
                  selectedLocationId={preProductionSelections.selectedLocationId}
                />
              )}
            </>
          ) : (
            <DevelopmentPanel
              onComplete={onCompleteDevelopment}
              onSelectPath={onSelectDevelopmentPath}
              projectContext={createProjectRunContext(result)}
              projectLabel="Film 2"
              selectedPath={selectedDevelopmentPath}
            />
          )}
        </>
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
          previousFilmLabel="Film 1"
          projectNumber={2}
        />
      )}
      {result && secondProjectCareerApplicationResult && (
        <ThirdProjectSetup
          careerApplicationResult={secondProjectCareerApplicationResult}
          onCreate={onCreateThirdProject}
          onCompleteDevelopment={onCompleteThirdProjectDevelopment}
          onSelectDevelopmentPath={onSelectThirdProjectDevelopmentPath}
          developmentResult={thirdProjectDevelopmentResult}
          result={thirdProjectResult}
          selectedDevelopmentPath={selectedThirdDevelopmentPath}
          sourceProject={result}
        />
      )}
    </section>
  );
}

function ThirdProjectSetup({
  careerApplicationResult,
  onCreate,
  onCompleteDevelopment,
  onSelectDevelopmentPath,
  developmentResult,
  result,
  selectedDevelopmentPath,
  sourceProject,
}: {
  readonly careerApplicationResult: CareerApplicationStepResult;
  readonly onCreate: (result: NextProjectStepResult) => void;
  readonly onCompleteDevelopment: (result: DevelopmentStepResult) => void;
  readonly onSelectDevelopmentPath: (path: DevelopmentPath) => void;
  readonly developmentResult: DevelopmentStepResult | null;
  readonly result: NextProjectStepResult | null;
  readonly selectedDevelopmentPath: DevelopmentPath | null;
  readonly sourceProject: NextProjectStepResult;
}) {
  const [choices, setChoices] = useState<NextProjectChoices>(initialChoices);
  const [errors, setErrors] = useState<NextProjectFormErrors>({});

  function createThirdProject() {
    const validationErrors = validateChoices(choices);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      onCreate(
        createNextProjectStepResult(
          createProjectRunContext(sourceProject),
          careerApplicationResult,
          choices,
        ),
      );
      setErrors({});
    } catch (error) {
      setErrors({
        form:
          error instanceof Error
            ? error.message
            : "Film 3 could not be created.",
      });
    }
  }

  return (
    <section className="third-project-setup">
      <div className="next-project-intro">
        <div>
          <span className="eyebrow">Film 2 complete</span>
          <h2>Film 3 setup</h2>
        </div>
        <p>
          Start film 3 from the studio and career state updated by film 2.
        </p>
      </div>
      <div className="next-project-carryover-grid">
        <StudioCarryoverPanel
          careerState={careerApplicationResult.updatedCareerState}
          sourceFilmLabel="film 2"
        />
        <PreviousFilmLegacyPanel
          filmLabel="Film 2"
          result={careerApplicationResult}
        />
      </div>
      {result ? (
        <>
          <NextProjectResultPanel
            developmentResult={developmentResult}
            projectNumber={3}
            result={result}
          />
          {developmentResult ? (
            <DevelopmentResultPanel
              projectLabel="Film 3"
              result={developmentResult}
            />
          ) : (
            <DevelopmentPanel
              onComplete={onCompleteDevelopment}
              onSelectPath={onSelectDevelopmentPath}
              projectContext={createProjectRunContext(result)}
              projectLabel="Film 3"
              selectedPath={selectedDevelopmentPath}
            />
          )}
        </>
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
          onSubmit={createThirdProject}
          options={options}
          previousFilmLabel="Film 2"
          projectNumber={3}
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
