import genresJson from "../../../data/film/genres.json";
import scriptTemplatesJson from "../../../data/film/script_templates.json";
import strategicGoalsJson from "../../../data/film/strategic_goals.json";

import { createCareerState } from "../../core/createCareerState.js";
import { createFilmProject } from "../../core/createFilmProject.js";
import { createStudio } from "../../core/createStudio.js";
import { selectNextStrategicGoal } from "../../core/selectNextStrategicGoal.js";
import type { StrategicGoal } from "../../domain/career.js";
import type { FilmProject, Studio } from "../../domain/film.js";
import type { Genre } from "../../domain/knowledge.js";
import type { ScriptTemplate } from "../../domain/script.js";
import type {
  PipelineStepSummary,
  ProjectDashboardSummary,
  ProjectSetupChoices,
  StartingMoneyPreset,
  StudioDashboardSummary
} from "../types.js";
import { adaptFilmSeedData } from "./adaptFilmSeedData";

export const projectSetupData = adaptFilmSeedData<{
  readonly genres: readonly Genre[];
  readonly scriptTemplates: readonly ScriptTemplate[];
  readonly strategicGoals: readonly StrategicGoal[];
}>({
  genres: genresJson,
  scriptTemplates: scriptTemplatesJson,
  strategicGoals: strategicGoalsJson
});

export interface StartingStudioPreset {
  readonly id: StartingMoneyPreset;
  readonly label: string;
  readonly description: string;
  readonly money: number;
  readonly reputation: number;
  readonly prestige: number;
}

export const startingStudioPresets: readonly StartingStudioPreset[] = [
  {
    id: "micro_studio",
    label: "Micro studio",
    description: "Lean capital and a ground-floor reputation.",
    money: 250_000,
    reputation: 4,
    prestige: 1
  },
  {
    id: "indie_studio",
    label: "Indie studio",
    description: "A balanced independent starting position.",
    money: 1_000_000,
    reputation: 10,
    prestige: 5
  },
  {
    id: "prestige_startup",
    label: "Prestige startup",
    description: "More backing and early industry credibility.",
    money: 3_000_000,
    reputation: 18,
    prestige: 15
  }
];

export interface ProjectSetupRun {
  readonly studio: StudioDashboardSummary;
  readonly studioState: Studio;
  readonly careerState: ReturnType<typeof createCareerState>;
  readonly filmProjectState: FilmProject;
  readonly project: ProjectDashboardSummary;
  readonly strategicGoal: StrategicGoal;
  readonly scriptTemplate: ScriptTemplate;
  readonly pipelineSteps: readonly PipelineStepSummary[];
}

/** Build the first playable setup state and stop before development begins. */
export function createProjectSetupRun(choices: ProjectSetupChoices): ProjectSetupRun {
  const preset = requireItem(startingStudioPresets, choices.startingMoneyPreset, "studio preset");
  const strategicGoal = requireItem(projectSetupData.strategicGoals, choices.strategicGoalId, "strategic goal");
  const genre = requireItem(projectSetupData.genres, choices.genreId, "genre");
  const scriptTemplate = requireItem(projectSetupData.scriptTemplates, choices.scriptTemplateId, "script template");

  const studioState = createStudio({
    name: choices.studioName.trim(),
    startingMoney: preset.money,
    startingReputation: preset.reputation,
    startingPrestige: preset.prestige
  });
  const initialCareerState = createCareerState(studioState, 1);
  const careerState = selectNextStrategicGoal(initialCareerState, strategicGoal).careerState;
  const filmProjectState = createFilmProject({
    title: choices.projectTitle.trim(),
    genreId: genre.id,
    scale: choices.scale
  });

  return {
    studio: {
      name: careerState.studio.name,
      money: careerState.studio.money,
      reputation: careerState.studio.reputation,
      prestige: careerState.studio.prestige,
      currentYear: careerState.currentYear,
      currentQuarter: careerState.currentQuarter.toUpperCase()
    },
    studioState,
    careerState,
    filmProjectState,
    project: {
      title: filmProjectState.title,
      genre: genre.name,
      scale: filmProjectState.scale,
      logline: `Template direction: ${scriptTemplate.defaultTheme}`
    },
    strategicGoal,
    scriptTemplate,
    pipelineSteps: [
      { label: "Studio created", detail: `${preset.label} · ${formatMoney(studioState.money)} available`, score: 100 },
      { label: "Career started", detail: `Year 1 · ${careerState.currentQuarter.toUpperCase()}`, score: 100 },
      { label: "Strategic goal selected", detail: strategicGoal.title, score: 100 },
      { label: "Film project created", detail: `${genre.name} · ${formatScale(filmProjectState.scale)}`, score: 100 },
      { label: "Script template selected", detail: scriptTemplate.title, score: 100 },
      { label: "Ready for development", detail: "Setup complete · development has not started", score: 10 }
    ]
  };
}

export function addDevelopmentPipelineStep(
  run: ProjectSetupRun,
  developmentStep: PipelineStepSummary
): readonly PipelineStepSummary[] {
  return [...run.pipelineSteps, developmentStep];
}

function requireItem<T extends { readonly id: string }>(
  items: readonly T[],
  id: string,
  label: string
): T {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) {
    throw new Error(`Missing ${label}: ${id}`);
  }
  return item;
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });
}

function formatScale(value: string): string {
  return value.replace("_", " ");
}
