import type {
  ActingStyle,
  Actor,
  CastingFitScore,
  CastingResult
} from "../domain/crew.js";
import type { FilmProject } from "../domain/film.js";

const GENRE_STYLE_FIT: Readonly<Record<string, readonly ActingStyle[]>> = {
  genre_drama: ["naturalistic", "restrained", "intense"],
  genre_thriller: ["restrained", "intense", "physical"],
  genre_comedy: ["comedic", "improvisational", "star_persona"],
  genre_horror: ["intense", "physical", "naturalistic"],
  genre_documentary: ["naturalistic", "restrained", "improvisational"],
  genre_action: ["physical", "intense", "star_persona"],
  genre_romance: ["naturalistic", "restrained", "star_persona"],
  genre_science_fiction: ["theatrical", "physical", "restrained"],
  genre_period_drama: ["theatrical", "restrained", "naturalistic"],
  genre_social_realism: ["naturalistic", "restrained", "improvisational"]
};

/** Score an actor for the project's genre, tone, experience, dependability and cost. */
export function scoreActorForProject(project: FilmProject, actor: Actor): CastingFitScore {
  const genreFit = actor.genreStrengths.includes(project.genreId) ? 100 : 45;
  const preferredStyles = GENRE_STYLE_FIT[project.genreId] ?? [];
  const styleFit = preferredStyles.includes(actor.actingStyle) ? 100 : 55;
  const starPower = clamp(actor.starPower);
  const experience = clamp(actor.experience);
  const reliability = clamp(actor.reliability);
  const affordability = scoreAffordability(actor.fee, project.budget);
  const totalScore = clamp(
    genreFit * 0.25 +
      styleFit * 0.15 +
      starPower * 0.15 +
      experience * 0.15 +
      reliability * 0.15 +
      affordability * 0.15
  );

  return {
    actorId: actor.id,
    totalScore,
    genreFit,
    styleFit,
    starPower,
    experience,
    reliability,
    affordability,
    notes: [
      genreFit === 100 ? "Genre is a proven strength." : "The genre is outside the actor's listed strengths.",
      styleFit === 100 ? "Acting style supports the genre's usual tone." : "Acting style offers a less conventional genre fit.",
      affordability >= 70 ? "Fee is comfortable for this budget." : "Fee puts pressure on the production budget."
    ]
  };
}

/** Add an actor to a copied project, preserving the original project. */
export function castActor(
  project: FilmProject,
  actor: Actor,
  score: CastingFitScore = scoreActorForProject(project, actor)
): CastingResult {
  if (score.actorId !== actor.id) {
    throw new Error(`Casting score does not belong to actor "${actor.id}".`);
  }

  const alreadyCast = project.actorIds.includes(actor.id);
  const updatedProject = alreadyCast
    ? project
    : { ...project, actorIds: [...project.actorIds, actor.id] };

  return {
    project: updatedProject,
    actorId: actor.id,
    alreadyCast,
    score,
    note: alreadyCast
      ? `${actor.name} is already cast in ${project.title}.`
      : `${actor.name} joined the cast of ${project.title} with a fit score of ${score.totalScore}.`
  };
}

function scoreAffordability(fee: number, budget: number): number {
  if (budget <= 0) return fee <= 0 ? 100 : 0;
  return clamp(110 - (fee / budget) * 500);
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
