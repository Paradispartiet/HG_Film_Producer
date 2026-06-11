import type {
  FilmProjectId,
  KnowledgeEntryId,
  PostDecisionId,
  PostProductionPlanId,
  TrailerStrategyId
} from "./ids.js";

export type PostProductionStatus =
  | "planned"
  | "editing"
  | "sound"
  | "music"
  | "color"
  | "test_screening"
  | "trailer"
  | "locked";

export type PostDecisionType = "edit" | "sound" | "music" | "color";

export type TrailerStrategyType =
  | "prestige"
  | "audience_hook"
  | "genre_promise"
  | "mystery"
  | "character"
  | "spectacle"
  | "festival";

export type PostProductionStat =
  | "quality"
  | "pacing"
  | "structure"
  | "emotion"
  | "visualStyle"
  | "sound"
  | "audienceAppeal"
  | "criticalAppeal"
  | "clarity"
  | "immersion"
  | "identity"
  | "mood"
  | "genreClarity";

export type PostStatChanges = Readonly<Partial<Record<PostProductionStat, number>>>;

export interface PostProductionPlan {
  readonly id: PostProductionPlanId;
  readonly projectId: FilmProjectId;
  readonly status: PostProductionStatus;
  readonly editDecisionIds: readonly PostDecisionId[];
  readonly soundDecisionIds: readonly PostDecisionId[];
  readonly musicDecisionIds: readonly PostDecisionId[];
  readonly colorDecisionIds: readonly PostDecisionId[];
  readonly trailerStrategyId: TrailerStrategyId | null;
  readonly lockedCutQuality: number;
  readonly notes: readonly string[];
}

export interface PostDecision {
  readonly id: PostDecisionId;
  readonly type: PostDecisionType;
  readonly title: string;
  readonly description: string;
  readonly solves: string;
  readonly statChanges: PostStatChanges;
  /** Creative or commercial risk, 0 .. 100. */
  readonly risk: number;
  readonly cost: number;
  readonly knowledgeEntryId: KnowledgeEntryId | null;
}

export interface EditDecision extends PostDecision {
  readonly type: "edit";
  readonly pacingEffect: number;
  readonly structureEffect: number;
}

export interface SoundDecision extends PostDecision {
  readonly type: "sound";
  readonly immersionEffect: number;
  readonly clarityEffect: number;
}

export interface MusicDecision extends PostDecision {
  readonly type: "music";
  readonly emotionEffect: number;
  readonly identityEffect: number;
}

export interface ColorDecision extends PostDecision {
  readonly type: "color";
  readonly visualStyleEffect: number;
  readonly moodEffect: number;
}

export interface TrailerStrategy {
  readonly id: TrailerStrategyId;
  readonly title: string;
  readonly description: string;
  readonly strategyType: TrailerStrategyType;
  readonly targetAudience: string;
  readonly promisedExperience: string;
  readonly statChanges: PostStatChanges;
  /** Commercial or positioning risk, 0 .. 100. */
  readonly risk: number;
  readonly cost: number;
}

export interface PostDecisionApplicationResult {
  readonly plan: PostProductionPlan;
  readonly decisionId: PostDecisionId;
  readonly alreadyApplied: boolean;
  readonly costDelta: number;
  readonly statChanges: PostStatChanges;
  readonly note: string;
}

export interface TestScreeningResult {
  readonly projectId: FilmProjectId;
  readonly clarityScore: number;
  readonly pacingScore: number;
  readonly emotionScore: number;
  readonly audienceHookScore: number;
  readonly confusionRisk: number;
  readonly recommendedChanges: readonly string[];
  readonly notes: readonly string[];
}

export interface TrailerCutResult {
  readonly projectId: FilmProjectId;
  readonly strategyId: TrailerStrategyId;
  readonly audienceInterest: number;
  readonly criticInterest: number;
  readonly genreClarity: number;
  readonly spoilerRisk: number;
  readonly cost: number;
  readonly note: string;
}

export interface PostProductionEvaluation {
  readonly projectId: FilmProjectId;
  readonly editScore: number;
  readonly soundScore: number;
  readonly musicScore: number;
  readonly colorScore: number;
  readonly testScreeningScore: number;
  readonly trailerScore: number;
  readonly totalCost: number;
  readonly lockedCutQuality: number;
  readonly overall: number;
  readonly notes: readonly string[];
}
