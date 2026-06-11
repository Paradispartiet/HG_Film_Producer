import type { FilmProject, FilmResult } from "../domain/film.js";
import type {
  AudienceResult,
  AudienceSegment,
  AudienceSegmentType,
  ReleaseChannel,
  ReleaseStrategy
} from "../domain/release.js";

const CHANNEL_AUDIENCES: Record<ReleaseChannel, readonly AudienceSegmentType[]> = {
  festival: ["festival", "arthouse", "international"],
  theatrical_limited: ["arthouse", "local", "festival"],
  theatrical_wide: ["broad", "genre_fans", "youth"],
  streaming: ["streaming", "youth", "broad", "international"],
  tv: ["broad", "local"],
  educational: ["arthouse", "local", "international"],
  direct_digital: ["streaming", "genre_fans", "youth"]
};

/** Estimate segment interest, satisfaction, word of mouth, and reach. */
export function generateAudienceResult(
  project: FilmProject,
  film: FilmResult,
  segment: AudienceSegment,
  strategy: ReleaseStrategy
): AudienceResult {
  if (film.projectId !== project.id) {
    throw new Error(`Film result does not belong to project "${project.id}".`);
  }

  const tasteMatch = segment.tasteTags.includes(genreTag(project.genreId)) ? 100 : 48;
  const targeted = strategy.targetAudienceSegments.includes(segment.type);
  const channelFit = CHANNEL_AUDIENCES[strategy.channel].includes(segment.type) ? 100 : 45;
  const marketingStrength = clamp(
    strategy.audienceReach * 0.6 + segment.marketingSensitivity * 0.4
      - segment.priceSensitivity * pricePressure(strategy.channel)
  );
  const interestScore = clamp(
    film.audienceAppeal * 0.38 + tasteMatch * 0.18 + channelFit * 0.16
      + marketingStrength * 0.18 + strategy.audienceReach * 0.1 + (targeted ? 8 : 0)
  );
  const expectation = clamp((interestScore + marketingStrength) / 2);
  const satisfactionScore = clamp(
    film.quality * 0.45 + film.audienceAppeal * 0.25 + tasteMatch * 0.25
      - Math.max(0, expectation - film.quality) * 0.25
  );
  const wordOfMouth = clamp(
    satisfactionScore * 0.65 + (satisfactionScore - expectation) * 0.2
      + segment.wordOfMouthPower * 0.15
  );
  const estimatedViewers = Math.max(0, Math.round(
    baseAudience(project.scale) * (strategy.audienceReach / 100) * (interestScore / 100)
      * (0.7 + wordOfMouth / 250) * (targeted ? 1.12 : 0.82)
  ));

  return {
    segmentId: segment.id,
    interestScore,
    satisfactionScore,
    wordOfMouth,
    estimatedViewers,
    notes: [
      targeted ? "The strategy explicitly targets this segment." : "This segment is reached indirectly.",
      tasteMatch === 100 ? "The project genre matches the segment's stated tastes." : "Genre fit is neutral."
    ]
  };
}

function genreTag(genreId: string): string {
  return genreId.replace(/^genre_/, "");
}

function pricePressure(channel: ReleaseChannel): number {
  return channel === "theatrical_wide" || channel === "theatrical_limited" ? 0.22 : 0.08;
}

function baseAudience(scale: FilmProject["scale"]): number {
  switch (scale) {
    case "micro": return 18_000;
    case "indie": return 85_000;
    case "mid_budget": return 350_000;
    case "studio": return 1_400_000;
    case "prestige": return 600_000;
  }
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
