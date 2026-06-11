import type { MusicDecision, PostDecisionApplicationResult, PostProductionPlan } from "../domain/post.js";

/** Apply a music choice once and return a new plan. */
export function applyMusicDecision(
  plan: PostProductionPlan,
  decision: MusicDecision
): PostDecisionApplicationResult {
  const alreadyApplied = plan.musicDecisionIds.includes(decision.id);
  if (alreadyApplied) {
    return {
      plan,
      decisionId: decision.id,
      alreadyApplied: true,
      costDelta: 0,
      statChanges: {},
      note: `"${decision.title}" is already part of the post-production plan.`
    };
  }

  return {
    plan: {
      ...plan,
      status: "music",
      musicDecisionIds: [...plan.musicDecisionIds, decision.id],
      notes: [...plan.notes, `Music decision applied: ${decision.title}.`]
    },
    decisionId: decision.id,
    alreadyApplied: false,
    costDelta: decision.cost,
    statChanges: decision.statChanges,
    note: `Applied music decision "${decision.title}" for ${decision.cost.toLocaleString("en-US")}.`
  };
}
