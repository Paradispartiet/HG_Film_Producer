import type { FilmProject } from "./film.js";
import type { GenreId, LocationId, LocationScoutingBriefId } from "./ids.js";

/** A genre-specific adjustment supplied by a location. */
export interface LocationGenreBonus {
  readonly genreId: GenreId;
  /** Tunable bonus points, normally in the range 0 .. 10. */
  readonly bonus: number;
}

/** Production qualities used by scouting and impact estimates. */
export interface LocationProductionModifiers {
  /** Cost multiplier for production work at the location (1 = neutral). */
  readonly cost: number;
  /** Logistical difficulty, 0 (trivial) .. 100 (very hard). */
  readonly logistics: number;
  /** How real and specific the place feels on screen, 0 .. 100. */
  readonly authenticity: number;
  /** Strength of the location's visual identity, 0 .. 100. */
  readonly visualValue: number;
  /** Value supplied by visible history or cultural context, 0 .. 100. */
  readonly historicalValue: number;
}

/** A physical filming place with both story value and production consequences. */
export interface Location {
  readonly id: LocationId;
  readonly name: string;
  readonly city: string;
  readonly type: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly genreBonuses: readonly LocationGenreBonus[];
  readonly productionModifiers: LocationProductionModifiers;
  /** Optional link into a History Go place. */
  readonly hgPlaceId: string | null;
}

/** Creative and practical requirements supplied to a location scout. */
export interface LocationScoutingBrief {
  readonly id: LocationScoutingBriefId;
  readonly title: string;
  readonly genreId: GenreId;
  readonly desiredTags: readonly string[];
  readonly mood: string;
  /** Maximum preferred logistical difficulty, 0 .. 100. */
  readonly maxLogistics: number;
  /** How strongly high location costs should be penalized, 0 .. 100. */
  readonly budgetSensitivity: number;
  readonly needsAuthenticity: boolean;
  readonly needsHistoricalValue: boolean;
}

/** Explainable component scores for one location, each clamped to 0 .. 100. */
export interface LocationFitScore {
  readonly locationId: LocationId;
  readonly totalScore: number;
  readonly genreFit: number;
  readonly tagFit: number;
  readonly authenticity: number;
  readonly logisticsFit: number;
  readonly costFit: number;
  readonly historyValue: number;
  readonly visualValue: number;
  readonly notes: readonly string[];
}

export interface LocationScoutingResult {
  readonly briefId: LocationScoutingBriefId | null;
  readonly rankedLocations: readonly LocationFitScore[];
}

/** Compact estimate of the production consequences of selecting a location. */
export interface LocationProductionImpact {
  readonly locationId: LocationId;
  readonly budgetMultiplier: number;
  readonly logisticsRisk: number;
  readonly authenticityBonus: number;
  readonly visualBonus: number;
  readonly historyBonus: number;
  readonly note: string;
}

export interface LocationSelectionResult {
  readonly project: FilmProject;
  readonly locationId: LocationId;
  readonly alreadyAttached: boolean;
  readonly impact: LocationProductionImpact;
}
