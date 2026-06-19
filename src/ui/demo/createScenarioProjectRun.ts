import type { FilmScenarioSeed } from "../data/filmScenarios";
import { createProjectSetupRun, projectSetupData, type ProjectSetupRun } from "./createProjectSetupRun";

const DEFAULT_GENRE_ID = "genre_drama";
const DEFAULT_SCRIPT_TEMPLATE_ID = "script_template_intimate_drama";
const DEFAULT_STRATEGIC_GOAL_ID = "strategic_goal_survive_year_one";

export function createScenarioProjectRun(scenario: FilmScenarioSeed): ProjectSetupRun {
  const genreId = getScenarioGenreId(scenario);
  const scriptTemplateId = getScenarioScriptTemplateId(scenario, genreId);
  const run = createProjectSetupRun({
    studioName: "HG Classics Studio",
    startingMoneyPreset: "indie_studio",
    strategicGoalId: DEFAULT_STRATEGIC_GOAL_ID,
    projectTitle: scenario.film.title,
    genreId,
    scale: "indie",
    scriptTemplateId
  });

  return {
    ...run,
    classicScenarioId: scenario.id,
    project: {
      ...run.project,
      logline: scenario.production_challenge || run.project.logline
    },
    pipelineSteps: scenario.production_challenge
      ? [
          ...run.pipelineSteps,
          {
            label: "Scenario challenge loaded",
            detail: scenario.production_challenge,
            score: 100
          }
        ]
      : run.pipelineSteps
  };
}

function getScenarioGenreId(scenario: FilmScenarioSeed): string {
  const matchingGenre = scenario.film.genre_keys
    .map((genreKey) => `genre_${genreKey}`)
    .find((genreId) => projectSetupData.genres.some((genre) => genre.id === genreId));

  return matchingGenre ?? DEFAULT_GENRE_ID;
}

function getScenarioScriptTemplateId(scenario: FilmScenarioSeed, genreId: string): string {
  if (projectSetupData.scriptTemplates.some((template) => template.id === scenario.scenario_type)) {
    return scenario.scenario_type;
  }

  return projectSetupData.scriptTemplates.find((template) => template.genreId === genreId)?.id ?? DEFAULT_SCRIPT_TEMPLATE_ID;
}
