import type {
  CareerState,
  StudioIdentityEvaluation,
  StudioIdentityTag
} from "../domain/career.js";

/** Build an explainable studio profile from filmography performance and explicit film tags. */
export function evaluateStudioIdentity(careerState: CareerState): StudioIdentityEvaluation {
  const films = careerState.completedFilms;
  const commercialScore = scoreAverage(films.map((film) =>
    film.audienceAppeal * 0.6 + revenueScore(film.netRevenue) * 0.4));
  const prestigeScore = scoreAverage(films.map((film) =>
    film.criticalAppeal * 0.55 + Math.min(100, film.awardsWon * 20) * 0.3
      + Math.min(100, Math.max(0, film.prestigeDelta) * 10) * 0.15));
  const craftScore = scoreAverage(films.map((film) => film.quality));
  const audienceScore = scoreAverage(films.map((film) => film.audienceAppeal));
  const tagScores = new Map<StudioIdentityTag, number>();

  for (const tag of careerState.identityTags) addScore(tagScores, tag, 20);
  for (const film of films) {
    for (const tag of film.identityTags) addScore(tagScores, tag, 25);
    const genreId = String(film.genreId);
    if (genreId.includes("documentary")) addScore(tagScores, "documentary", 25);
    if (["thriller", "horror", "action", "science_fiction"].some((genre) => genreId.includes(genre))) {
      addScore(tagScores, "genre", 20);
    }
    if (film.scale === "micro" || film.scale === "indie") addScore(tagScores, "low_budget", 15);
    if (film.audienceAppeal >= 65 || film.netRevenue > 0) addScore(tagScores, "commercial", 15);
    if (film.criticalAppeal >= 65) addScore(tagScores, "arthouse", 15);
    if (film.quality >= 70) addScore(tagScores, "technical_craft", 15);
    if (film.awardsWon > 0 || film.prestigeDelta >= 5) addScore(tagScores, "prestige", 20);
  }

  const rankedTags = [...tagScores.entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .map(([tag]) => tag);
  const strongestTags = rankedTags.slice(0, 3);
  const identityTags = [...new Set([...careerState.identityTags, ...rankedTags])];

  return {
    studioId: careerState.studio.id,
    identityTags,
    strongestTags,
    commercialScore,
    prestigeScore,
    craftScore,
    audienceScore,
    notes: films.length === 0
      ? ["No completed films yet; identity is based only on declared career tags."]
      : [
          "Commercial identity combines audience appeal and profitable release performance.",
          "Prestige identity combines critical appeal, awards, and prestige growth.",
          "The three strongest tags use genre, scale, explicit film tags, and simple performance thresholds."
        ]
  };
}

function addScore(scores: Map<StudioIdentityTag, number>, tag: StudioIdentityTag, amount: number): void {
  scores.set(tag, (scores.get(tag) ?? 0) + amount);
}

function revenueScore(netRevenue: number): number {
  return clamp(50 + netRevenue / 20_000);
}

function scoreAverage(values: readonly number[]): number {
  if (values.length === 0) return 0;
  return clamp(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
