import type { FilmProject, FilmScale } from "../domain/film.js";
import type {
  Location,
  LocationFitScore,
  LocationScoutingBrief
} from "../domain/location.js";

const DEFAULT_LOGISTICS_LIMIT: Record<FilmScale, number> = {
  micro: 35,
  indie: 50,
  mid_budget: 65,
  studio: 85,
  prestige: 75
};

const DEFAULT_BUDGET_SENSITIVITY: Record<FilmScale, number> = {
  micro: 100,
  indie: 75,
  mid_budget: 50,
  studio: 25,
  prestige: 35
};

/**
 * Score a location with seven readable 0 .. 100 components.
 *
 * Total weighting: genre 20%, tags 15%, authenticity 15%, logistics 15%,
 * cost 15%, history 10%, and visual value 10%. A brief can make authenticity
 * or history essential by reducing those component scores when they are weak.
 */
export function scoreLocationForProject(
  project: FilmProject,
  location: Location,
  brief?: LocationScoutingBrief
): LocationFitScore {
  const genreId = brief?.genreId ?? project.genreId;
  const genreBonus = location.genreBonuses.find((entry) => entry.genreId === genreId)?.bonus ?? 0;
  const genreFit = clamp(50 + genreBonus * 5);
  const tagFit = scoreTags(location.tags, brief?.desiredTags ?? []);
  const authenticity = scoreRequiredQuality(
    location.productionModifiers.authenticity,
    brief?.needsAuthenticity ?? false
  );
  const logisticsLimit = brief?.maxLogistics ?? DEFAULT_LOGISTICS_LIMIT[project.scale];
  const logisticsFit = scoreLogistics(location.productionModifiers.logistics, logisticsLimit);
  const budgetSensitivity = brief?.budgetSensitivity ?? DEFAULT_BUDGET_SENSITIVITY[project.scale];
  const costFit = scoreCost(location.productionModifiers.cost, budgetSensitivity);
  const historyValue = scoreRequiredQuality(
    location.productionModifiers.historicalValue,
    brief?.needsHistoricalValue ?? false
  );
  const visualValue = clamp(location.productionModifiers.visualValue);

  const totalScore = clamp(
    genreFit * 0.2 +
      tagFit * 0.15 +
      authenticity * 0.15 +
      logisticsFit * 0.15 +
      costFit * 0.15 +
      historyValue * 0.1 +
      visualValue * 0.1
  );

  return {
    locationId: location.id,
    totalScore,
    genreFit,
    tagFit,
    authenticity,
    logisticsFit,
    costFit,
    historyValue,
    visualValue,
    notes: buildNotes(location, brief, genreBonus, logisticsLimit)
  };
}

function scoreTags(locationTags: readonly string[], desiredTags: readonly string[]): number {
  if (desiredTags.length === 0) return 50;
  const normalized = new Set(locationTags.map(normalizeTag));
  const matches = desiredTags.filter((tag) => normalized.has(normalizeTag(tag))).length;
  return clamp((matches / desiredTags.length) * 100);
}

function scoreRequiredQuality(value: number, required: boolean): number {
  const quality = clamp(value);
  return required && quality < 60 ? clamp(quality - 20) : quality;
}

function scoreLogistics(logistics: number, preferredMaximum: number): number {
  const difficulty = clamp(logistics);
  const limit = clamp(preferredMaximum);
  return difficulty <= limit ? clamp(100 - difficulty * 0.5) : clamp(100 - difficulty - (difficulty - limit));
}

function scoreCost(multiplier: number, sensitivity: number): number {
  const extraCostPercent = Math.max(0, multiplier - 1) * 100;
  const savingPercent = Math.max(0, 1 - multiplier) * 50;
  return clamp(80 + savingPercent - extraCostPercent * (clamp(sensitivity) / 100));
}

function buildNotes(
  location: Location,
  brief: LocationScoutingBrief | undefined,
  genreBonus: number,
  logisticsLimit: number
): readonly string[] {
  const notes: string[] = [];
  notes.push(genreBonus > 0 ? `Genre bonus: +${genreBonus}.` : "No specific genre bonus.");

  if (brief && brief.desiredTags.length > 0) {
    const normalized = new Set(location.tags.map(normalizeTag));
    const matches = brief.desiredTags.filter((tag) => normalized.has(normalizeTag(tag)));
    notes.push(matches.length > 0 ? `Matching tags: ${matches.join(", ")}.` : "No desired tags matched.");
  }

  notes.push(
    location.productionModifiers.logistics <= logisticsLimit
      ? `Logistics are within the preferred maximum of ${logisticsLimit}.`
      : `Logistics exceed the preferred maximum of ${logisticsLimit}.`
  );
  notes.push(`Location cost multiplier: ${location.productionModifiers.cost.toFixed(2)}x.`);
  return notes;
}

function normalizeTag(value: string): string {
  return value.trim().toLowerCase().replace(/[\s-]+/g, "_");
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
