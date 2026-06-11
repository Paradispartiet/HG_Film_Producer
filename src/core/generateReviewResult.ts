import type { FilmProject, FilmResult } from "../domain/film.js";
import type { PostProductionEvaluation } from "../domain/post.js";
import type { CriticProfile, ReviewResult, ReviewSentiment } from "../domain/release.js";

/** Generate a deterministic critic response from craft, taste, and harshness. */
export function generateReviewResult(
  project: FilmProject,
  film: FilmResult,
  critic: CriticProfile,
  postProduction?: PostProductionEvaluation
): ReviewResult {
  if (film.projectId !== project.id || (postProduction && postProduction.projectId !== project.id)) {
    throw new Error(`Release inputs do not all belong to project "${project.id}".`);
  }

  const tasteMatch = critic.tasteTags.includes(genreTag(project.genreId)) ? 100 : 50;
  const postScore = postProduction?.lockedCutQuality ?? film.quality;
  const score = clamp(
    film.criticalAppeal * 0.45 + film.quality * 0.25 + postScore * 0.15
      + tasteMatch * 0.15 - critic.harshness * 0.22
  );
  const sentiment = sentimentFor(score);
  const reputationDelta = Math.round(((score - 50) / 18) * (critic.audienceInfluence / 60));
  const prestigeDelta = Math.round(((score - 50) / 20) * (critic.prestigeInfluence / 60));

  return {
    criticProfileId: critic.id,
    score,
    pullQuote: quoteFor(project.title, score, tasteMatch === 100),
    sentiment,
    reputationDelta,
    prestigeDelta
  };
}

function genreTag(genreId: string): string {
  return genreId.replace(/^genre_/, "");
}

function sentimentFor(score: number): ReviewSentiment {
  if (score >= 82) return "acclaim";
  if (score >= 65) return "positive";
  if (score >= 45) return "mixed";
  return "negative";
}

function quoteFor(title: string, score: number, tasteMatch: boolean): string {
  if (score >= 82) return `${title} is assured, resonant filmmaking with a clear artistic voice.`;
  if (score >= 65) return `${title} rewards attention with disciplined craft and emotional purpose.`;
  if (score >= 45) return `${title} has notable strengths, though its ambitions do not always cohere.`;
  return tasteMatch
    ? `${title} understands its form but struggles to turn intention into a convincing whole.`
    : `${title} offers limited entry points beyond its most committed audience.`;
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
