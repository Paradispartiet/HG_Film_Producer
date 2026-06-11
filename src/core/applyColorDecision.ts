import type { ColorDecision, PostDecisionApplicationResult, PostProductionPlan } from "../domain/post.js";

/** Apply a color choice once and return a new plan. */
export function applyColorDecision(
  plan: PostProductionPlan,
  decision: ColorDecision
): PostDecisionApplicationResult {
  const alreadyApplied = plan.colorDecisionIds.includes(decision.id);
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
      status: "color",
      colorDecisionIds: [...plan.colorDecisionIds, decision.id],
      notes: [...plan.notes, `Color decision applied: ${decision.title}.`]
    },
    decisionId: decision.id,
    alreadyApplied: false,
    costDelta: decision.cost,
    statChanges: decision.statChanges,
    note: `Applied color decision "${decision.title}" for ${decision.cost.toLocaleString("en-US")}.`
  };
}
