import type { SoundDecision, PostDecisionApplicationResult, PostProductionPlan } from "../domain/post.js";

/** Apply a sound choice once and return a new plan. */
export function applySoundDecision(
  plan: PostProductionPlan,
  decision: SoundDecision
): PostDecisionApplicationResult {
  const alreadyApplied = plan.soundDecisionIds.includes(decision.id);
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
      status: "sound",
      soundDecisionIds: [...plan.soundDecisionIds, decision.id],
      notes: [...plan.notes, `Sound decision applied: ${decision.title}.`]
    },
    decisionId: decision.id,
    alreadyApplied: false,
    costDelta: decision.cost,
    statChanges: decision.statChanges,
    note: `Applied sound decision "${decision.title}" for ${decision.cost.toLocaleString("en-US")}.`
  };
}
