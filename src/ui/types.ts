import type { FilmScale } from "../domain/film.js";

export type AppMode = "demo" | "setup";
export type StartingMoneyPreset = "micro_studio" | "indie_studio" | "prestige_startup";

export interface ProjectSetupChoices {
  readonly studioName: string;
  readonly startingMoneyPreset: StartingMoneyPreset;
  readonly strategicGoalId: string;
  readonly projectTitle: string;
  readonly genreId: string;
  readonly scale: FilmScale;
  readonly scriptTemplateId: string;
}

export interface StudioDashboardSummary {
  readonly name: string;
  readonly money: number;
  readonly reputation: number;
  readonly prestige: number;
  readonly currentYear: number;
  readonly currentQuarter: string;
}

export interface ProjectDashboardSummary {
  readonly title: string;
  readonly genre: string;
  readonly scale: string;
  readonly logline: string;
}

export interface PipelineStepSummary {
  readonly label: string;
  readonly detail: string;
  readonly score: number;
}

export interface DevelopmentPathOption {
  readonly id: "mentor" | "location" | "script";
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly consequence: string;
}
