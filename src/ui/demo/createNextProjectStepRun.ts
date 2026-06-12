import genresJson from "../../../data/film/genres.json";
import scriptTemplatesJson from "../../../data/film/script_templates.json";
import strategicGoalsJson from "../../../data/film/strategic_goals.json";
import { createFilmProject } from "../../core/createFilmProject.js";
import { selectNextStrategicGoal } from "../../core/selectNextStrategicGoal.js";
import type { CareerState, StrategicGoal } from "../../domain/career.js";
import type { FilmProject, FilmScale, Studio } from "../../domain/film.js";
import type { Genre } from "../../domain/knowledge.js";
import type { ScriptTemplate } from "../../domain/script.js";
import type { PipelineStepSummary, ProjectDashboardSummary } from "../types.js";
import { adaptFilmSeedData } from "./adaptFilmSeedData.js";
import type { CareerApplicationStepResult } from "./createCareerApplicationStepRun.js";
import type { ProjectSetupRun } from "./createProjectSetupRun.js";

const nextProjectData = adaptFilmSeedData<{
  readonly genres: readonly Genre[];
  readonly scriptTemplates: readonly ScriptTemplate[];
  readonly strategicGoals: readonly StrategicGoal[];
}>({
  genres: genresJson,
  scriptTemplates: scriptTemplatesJson,
  strategicGoals: strategicGoalsJson,
});

export interface NextProjectChoices {
  readonly projectTitle: string;
  readonly genreId: string;
  readonly scale: FilmScale;
  readonly scriptTemplateId: string;
  readonly strategicGoalId?: string;
}

export interface NextProjectOptions {
  readonly genres: readonly Genre[];
  readonly scriptTemplates: readonly ScriptTemplate[];
  readonly strategicGoals: readonly StrategicGoal[];
}

export interface NextProjectStepResult {
  readonly choices: NextProjectChoices;
  readonly carriedStudio: Studio;
  readonly carriedCareerState: CareerState;
  readonly newFilmProjectState: FilmProject;
  readonly project: ProjectDashboardSummary;
  readonly scriptTemplate: ScriptTemplate;
  readonly selectedStrategicGoal: StrategicGoal | null;
  readonly pipelineSteps: readonly PipelineStepSummary[];
}

export function getNextProjectOptions(): NextProjectOptions {
  return nextProjectData;
}

/** Carry the updated career forward and create film two without starting development. */
export function createNextProjectStepResult(
  run: ProjectSetupRun,
  careerApplicationResult: CareerApplicationStepResult,
  choices: NextProjectChoices,
): NextProjectStepResult {
  if (
    careerApplicationResult.completedFilmRecord.projectId !==
    run.filmProjectState.id
  ) {
    throw new Error(
      "The studio/career update does not belong to the completed film.",
    );
  }

  const title = choices.projectTitle.trim();
  if (!title) {
    throw new Error("Enter a title for the next project.");
  }

  const genre = requireItem(nextProjectData.genres, choices.genreId, "genre");
  const scriptTemplate = requireItem(
    nextProjectData.scriptTemplates,
    choices.scriptTemplateId,
    "script template",
  );
  const selectedStrategicGoal = choices.strategicGoalId
    ? requireItem(
        nextProjectData.strategicGoals,
        choices.strategicGoalId,
        "strategic goal",
      )
    : null;
  const strategicGoalSelection = selectedStrategicGoal
    ? selectNextStrategicGoal(
        careerApplicationResult.updatedCareerState,
        selectedStrategicGoal,
      )
    : null;
  const carriedCareerState =
    strategicGoalSelection?.careerState ??
    careerApplicationResult.updatedCareerState;
  const changedStrategicGoal =
    strategicGoalSelection && !strategicGoalSelection.alreadyActive
      ? selectedStrategicGoal
      : null;
  const newFilmProjectState = createFilmProject({
    id: createNextProjectId(
      title,
      carriedCareerState.completedFilms.length + 1,
    ),
    title,
    genreId: genre.id,
    scale: choices.scale,
  });

  return {
    choices,
    carriedStudio: carriedCareerState.studio,
    carriedCareerState,
    newFilmProjectState,
    project: {
      title: newFilmProjectState.title,
      genre: genre.name,
      scale: newFilmProjectState.scale,
      logline: `Template direction: ${scriptTemplate.defaultTheme}`,
    },
    scriptTemplate,
    selectedStrategicGoal: changedStrategicGoal,
    pipelineSteps: [
      {
        label: "Studio carried forward",
        detail: `${carriedCareerState.studio.name} · ${formatMoney(carriedCareerState.studio.money)} available`,
        score: 100,
      },
      {
        label: "Career continued",
        detail: `Year ${carriedCareerState.currentYear} · ${carriedCareerState.currentQuarter.toUpperCase()}`,
        score: 100,
      },
      {
        label: "Next film project created",
        detail: `${genre.name} · ${formatScale(newFilmProjectState.scale)}`,
        score: 100,
      },
      {
        label: "Script template selected",
        detail: scriptTemplate.title,
        score: 100,
      },
      {
        label: "Ready for development",
        detail: "Film 2 setup complete · development has not started",
        score: 10,
      },
    ],
  };
}

function requireItem<T extends { readonly id: string }>(
  items: readonly T[],
  id: string,
  label: string,
): T {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) {
    throw new Error(`Missing ${label}: ${id}`);
  }
  return item;
}

function createNextProjectId(title: string, filmNumber: number): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return `film_project_${filmNumber}_${slug || "untitled"}`;
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function formatScale(value: string): string {
  return value.replace("_", " ");
}
