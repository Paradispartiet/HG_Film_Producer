import type { EditDecision, PostDecisionApplicationResult, PostProductionPlan } from "../domain/post.js";

/** Apply a edit choice once and return a new plan. */
export function applyEditDecision(
  plan: PostProductionPlan,
  decision: EditDecision
): PostDecisionApplicationResult {
  const alreadyApplied = plan.editDecisionIds.includes(decision.id);
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
      status: "editing",
      editDecisionIds: [...plan.editDecisionIds, decision.id],
      notes: [...plan.notes, `Edit decision applied: ${decision.title}.`]
    },
    decisionId: decision.id,
    alreadyApplied: false,
    costDelta: decision.cost,
    statChanges: decision.statChanges,
    note: `Applied edit decision "${decision.title}" for ${decision.cost.toLocaleString("en-US")}.`
  };
}
