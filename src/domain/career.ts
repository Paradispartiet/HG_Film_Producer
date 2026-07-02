import type { FilmScale, Studio } from "./film.js";
import type {
  ActorId,
  CareerMilestoneId,
  CrewMemberId,
  FilmProjectId,
  GenreId,
  StrategicGoalId,
  StudioExpenseId,
  StudioId,
  StudioIncomeId
} from "./ids.js";

export type CareerQuarter = "q1" | "q2" | "q3" | "q4";

export type StudioIdentityTag =
  | "prestige"
  | "commercial"
  | "arthouse"
  | "genre"
  | "documentary"
  | "local"
  | "international"
  | "low_budget"
  | "talent_lab"
  | "technical_craft"
  | "political"
  | "youth";

export type StudioExpenseCategory =
  | "office"
  | "staff"
  | "equipment"
  | "development"
  | "marketing"
  | "festival"
  | "debt"
  | "training"
  | "scouting";

export type StrategicGoalType =
  | "survive_year"
  | "build_reputation"
  | "build_prestige"
  | "make_profit"
  | "launch_debut"
  | "win_award"
  | "grow_audience"
  | "specialize_genre"
  | "discover_talent"
  | "international_breakthrough";

export interface CareerState {
  readonly studio: Studio;
  readonly currentYear: number;
  readonly currentQuarter: CareerQuarter;
  readonly years: readonly CareerYear[];
  readonly completedFilms: readonly CompletedFilmRecord[];
  readonly activeStrategicGoalIds: readonly StrategicGoalId[];
  readonly achievedMilestoneIds: readonly CareerMilestoneId[];
  readonly identityTags: readonly StudioIdentityTag[];
  readonly crewRoster: Readonly<Record<CrewMemberId, CareerRosterEntry>>;
  readonly castRoster: Readonly<Record<ActorId, CareerRosterEntry>>;
  readonly notes: readonly string[];
}

export interface CareerRosterEntry {
  readonly filmsWorked: number;
  readonly lastFilmTitle: string;
}

export interface CareerYear {
  readonly year: number;
  readonly startingMoney: number;
  readonly endingMoney: number;
  readonly expenses: readonly StudioExpense[];
  readonly income: readonly StudioIncome[];
  readonly completedFilmIds: readonly FilmProjectId[];
  readonly reputationStart: number;
  readonly reputationEnd: number;
  readonly prestigeStart: number;
  readonly prestigeEnd: number;
  readonly notes: readonly string[];
}

export interface StudioExpense {
  readonly id: StudioExpenseId;
  readonly title: string;
  readonly category: StudioExpenseCategory;
  readonly amount: number;
  readonly recurring: boolean;
  readonly quarter: CareerQuarter;
  readonly note: string;
}

export interface StudioIncome {
  readonly id: StudioIncomeId;
  readonly title: string;
  readonly amount: number;
  readonly sourceProjectId: FilmProjectId | null;
  readonly quarter: CareerQuarter;
  readonly note: string;
}

export interface CompletedFilmRecord {
  readonly projectId: FilmProjectId;
  readonly title: string;
  readonly year: number;
  readonly genreId: GenreId;
  readonly scale: FilmScale;
  readonly quality: number;
  readonly audienceAppeal: number;
  readonly criticalAppeal: number;
  readonly grossRevenue: number;
  readonly netRevenue: number;
  readonly awardsWon: number;
  readonly reputationDelta: number;
  readonly prestigeDelta: number;
  readonly identityTags: readonly StudioIdentityTag[];
}

export interface StudioIdentityEvaluation {
  readonly studioId: StudioId;
  readonly identityTags: readonly StudioIdentityTag[];
  readonly strongestTags: readonly StudioIdentityTag[];
  readonly commercialScore: number;
  readonly prestigeScore: number;
  readonly craftScore: number;
  readonly audienceScore: number;
  readonly notes: readonly string[];
}

export interface CareerYearEvaluation {
  readonly year: number;
  readonly profit: number;
  readonly cashHealth: number;
  readonly reputationGrowth: number;
  readonly prestigeGrowth: number;
  readonly filmsCompleted: number;
  readonly awardMomentum: number;
  readonly overall: number;
  readonly notes: readonly string[];
}

export interface CareerMilestoneRewards {
  readonly money?: number;
  readonly reputation?: number;
  readonly prestige?: number;
  readonly identityTags?: readonly StudioIdentityTag[];
}

export interface CareerMilestone {
  readonly id: CareerMilestoneId;
  readonly title: string;
  readonly description: string;
  readonly requiredMoney: number;
  readonly requiredReputation: number;
  readonly requiredPrestige: number;
  readonly requiredCompletedFilms: number;
  readonly requiredIdentityTags: readonly StudioIdentityTag[];
  readonly rewards: CareerMilestoneRewards;
  readonly note: string;
}

export interface CareerMilestoneApplicationResult {
  readonly careerState: CareerState;
  readonly milestoneId: CareerMilestoneId;
  readonly alreadyAchieved: boolean;
  readonly rewardsApplied: boolean;
  readonly note: string;
}

export interface StrategicGoal {
  readonly id: StrategicGoalId;
  readonly title: string;
  readonly type: StrategicGoalType;
  readonly description: string;
  readonly targetYear: number;
  readonly requiredProgress: number;
  readonly rewardTags: readonly StudioIdentityTag[];
  readonly note: string;
}

export interface StrategicGoalSelectionResult {
  readonly careerState: CareerState;
  readonly goalId: StrategicGoalId;
  readonly alreadyActive: boolean;
  readonly note: string;
}
