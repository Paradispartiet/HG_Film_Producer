import type { FilmProjectId, GenreId } from "./ids.js";
import type {
  AudienceSegmentId,
  AwardId,
  CriticProfileId,
  FestivalId,
  ReleasePlanId,
  ReleaseStrategyId
} from "./ids.js";
import type { Studio } from "./film.js";
import type { FilmStat } from "./knowledge.js";

export type ReleaseChannel =
  | "festival"
  | "theatrical_limited"
  | "theatrical_wide"
  | "streaming"
  | "tv"
  | "educational"
  | "direct_digital";

export type FestivalTier = "local" | "national" | "international" | "prestige";

export type CriticProfileType =
  | "mainstream"
  | "arthouse"
  | "genre"
  | "industry"
  | "academic"
  | "local"
  | "streaming";

export type AudienceSegmentType =
  | "broad"
  | "arthouse"
  | "genre_fans"
  | "youth"
  | "local"
  | "streaming"
  | "festival"
  | "international";

export type AwardCategory =
  | "best_picture"
  | "directing"
  | "screenplay"
  | "acting"
  | "cinematography"
  | "editing"
  | "sound"
  | "music"
  | "production_design"
  | "audience_award"
  | "debut";

export type ReviewSentiment = "negative" | "mixed" | "positive" | "acclaim";

export interface ReleasePlan {
  readonly id: ReleasePlanId;
  readonly projectId: FilmProjectId;
  readonly strategyId: ReleaseStrategyId;
  readonly targetChannels: readonly ReleaseChannel[];
  readonly marketingBudget: number;
  readonly festivalSubmissionIds: readonly FestivalId[];
  readonly plannedTerritories: readonly string[];
  readonly notes: readonly string[];
}

export interface ReleaseStrategy {
  readonly id: ReleaseStrategyId;
  readonly title: string;
  readonly channel: ReleaseChannel;
  readonly description: string;
  readonly targetAudienceSegments: readonly AudienceSegmentType[];
  readonly costMultiplier: number;
  /** Relative potential reach, 0 .. 100. */
  readonly audienceReach: number;
  /** Relative access to critics, 0 .. 100. */
  readonly criticReach: number;
  /** Suitability for festival circulation, 0 .. 100. */
  readonly festivalFit: number;
  /** Financial uncertainty, 0 .. 100. */
  readonly revenueRisk: number;
  /** Potential to build long-term standing, 0 .. 100. */
  readonly prestigePotential: number;
  readonly statBiases: Readonly<Partial<Record<FilmStat, number>>>;
}

export interface ReleaseStrategyScore {
  readonly strategyId: ReleaseStrategyId;
  readonly totalScore: number;
  readonly audienceFit: number;
  readonly criticFit: number;
  readonly festivalFit: number;
  readonly revenueFit: number;
  readonly prestigeFit: number;
  readonly riskFit: number;
  readonly notes: readonly string[];
}

export interface Festival {
  readonly id: FestivalId;
  readonly name: string;
  readonly tier: FestivalTier;
  readonly city: string;
  readonly profileTags: readonly string[];
  readonly preferredGenres: readonly GenreId[];
  readonly prestige: number;
  readonly audienceReach: number;
  readonly submissionCost: number;
}

export interface FestivalSubmissionResult {
  readonly festivalId: FestivalId;
  readonly accepted: boolean;
  readonly selectionScore: number;
  readonly premiereValue: number;
  readonly prestigeGain: number;
  readonly cost: number;
  readonly notes: readonly string[];
}

export interface CriticProfile {
  readonly id: CriticProfileId;
  readonly name: string;
  readonly type: CriticProfileType;
  readonly tasteTags: readonly string[];
  readonly harshness: number;
  readonly audienceInfluence: number;
  readonly prestigeInfluence: number;
}

export interface ReviewResult {
  readonly criticProfileId: CriticProfileId;
  readonly score: number;
  readonly pullQuote: string;
  readonly sentiment: ReviewSentiment;
  readonly reputationDelta: number;
  readonly prestigeDelta: number;
}

export interface AudienceSegment {
  readonly id: AudienceSegmentId;
  readonly name: string;
  readonly type: AudienceSegmentType;
  readonly tasteTags: readonly string[];
  readonly priceSensitivity: number;
  readonly marketingSensitivity: number;
  readonly wordOfMouthPower: number;
}

export interface AudienceResult {
  readonly segmentId: AudienceSegmentId;
  readonly interestScore: number;
  readonly satisfactionScore: number;
  readonly wordOfMouth: number;
  readonly estimatedViewers: number;
  readonly notes: readonly string[];
}

export interface RevenueResult {
  readonly grossRevenue: number;
  readonly marketingSpend: number;
  readonly distributionCost: number;
  readonly netRevenue: number;
  readonly breakEven: boolean;
  readonly roi: number;
  readonly notes: readonly string[];
}

export interface Award {
  readonly id: AwardId;
  readonly title: string;
  readonly category: AwardCategory;
  readonly prestigeValue: number;
  readonly audienceValue: number;
  readonly requiredScore: number;
  readonly preferredTags: readonly string[];
}

export interface AwardsOutcome {
  readonly nominations: readonly AwardId[];
  readonly wins: readonly AwardId[];
  readonly prestigeGain: number;
  readonly audienceGain: number;
  readonly notes: readonly string[];
}

export interface ReleaseOutcomeEvaluation {
  readonly projectId: FilmProjectId;
  readonly strategyScore: number;
  readonly festivalScore: number;
  readonly reviewScore: number;
  readonly audienceScore: number;
  readonly revenueScore: number;
  readonly awardsScore: number;
  readonly grossRevenue: number;
  readonly netRevenue: number;
  readonly reputationDelta: number;
  readonly prestigeDelta: number;
  readonly overall: number;
  readonly notes: readonly string[];
}

export interface StudioReleaseApplicationResult {
  readonly studio: Studio;
  readonly outcome: ReleaseOutcomeEvaluation;
  readonly moneyDelta: number;
  readonly reputationDelta: number;
  readonly prestigeDelta: number;
  readonly note: string;
}
