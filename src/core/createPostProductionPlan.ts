import type { FilmProject } from "../domain/film.js";
import { asPostProductionPlanId } from "../domain/ids.js";
import type { PostProductionPlan } from "../domain/post.js";

/** Open an empty, deterministic post-production plan without changing the project. */
export function createPostProductionPlan(project: FilmProject): PostProductionPlan {
  return {
    id: asPostProductionPlanId(`post_plan_${project.id}`),
    projectId: project.id,
    status: "planned",
    editDecisionIds: [],
    soundDecisionIds: [],
    musicDecisionIds: [],
    colorDecisionIds: [],
    trailerStrategyId: null,
    lockedCutQuality: 0,
    notes: [`Post-production plan opened for "${project.title}".`]
  };
}
