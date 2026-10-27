import type { FilmScale } from "../domain/film.js";
import type { StudioCareerBudgetPriorityId } from "../core/studioCareerBudgetPriority.js";
import type { StudioCareerEditingApproachId } from "../core/studioCareerEditingApproach.js";
import type { StudioCareerDramaturgyId } from "../core/studioCareerDramaturgy.js";

export type AppMode = "demo" | "setup";
export type StartingMoneyPreset =
  | "micro_studio"
  | "indie_studio"
  | "prestige_startup";

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

export interface PreProductionSelectionState {
  /** Missing on older v1 saves: reserve keeps the old calculations. */
  readonly budgetPriorityId?: StudioCareerBudgetPriorityId;
  readonly selectedLocationId: string;
  readonly selectedCrewIds: readonly string[];
  readonly selectedActorIds: readonly string[];
}

export interface ShootSelectionState {
  readonly selectedProductionEventId: string;
}

export interface PostProductionSelectionState {
  /** Optional to keep v1 saved careers from earlier game versions valid. */
  readonly editingApproachId?: StudioCareerEditingApproachId;
  /** Absent in older careers; original cut retains the old screening scores. */
  readonly dramaturgyDecisionId?: StudioCareerDramaturgyId;
  readonly editDecisionId: string;
  readonly soundDecisionId: string;
  readonly musicDecisionId: string;
  readonly colorDecisionId: string;
  readonly trailerStrategyId: string;
}

export interface ReleaseSelectionState {
  readonly releaseStrategyId: string;
  readonly festivalId: string;
}

export interface CareerApplicationDelta {
  readonly before: number;
  readonly after: number;
  readonly delta: number;
}

export interface NextProjectFormErrors {
  readonly projectTitle?: string;
  readonly genreId?: string;
  readonly scriptTemplateId?: string;
  readonly form?: string;
}

export type ProjectShootLabel = "first film" | `film ${number}`;
export type ProjectPostProductionLabel = ProjectShootLabel;
export type ProjectReleaseLabel = ProjectPostProductionLabel;
export type ProjectCareerLabel = ProjectReleaseLabel;
