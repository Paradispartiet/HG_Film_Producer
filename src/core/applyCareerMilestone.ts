import type {
  CareerMilestone,
  CareerMilestoneApplicationResult,
  CareerState,
  StudioIdentityTag
} from "../domain/career.js";

/** Apply a milestone once when all transparent threshold requirements are met. */
export function applyCareerMilestone(
  careerState: CareerState,
  milestone: CareerMilestone
): CareerMilestoneApplicationResult {
  if (careerState.achievedMilestoneIds.includes(milestone.id)) {
    return {
      careerState,
      milestoneId: milestone.id,
      alreadyAchieved: true,
      rewardsApplied: false,
      note: `Milestone "${milestone.title}" was already achieved.`
    };
  }

  const requirementsMet = careerState.studio.money >= milestone.requiredMoney
    && careerState.studio.reputation >= milestone.requiredReputation
    && careerState.studio.prestige >= milestone.requiredPrestige
    && careerState.completedFilms.length >= milestone.requiredCompletedFilms
    && milestone.requiredIdentityTags.every((tag) => careerState.identityTags.includes(tag));

  if (!requirementsMet) {
    return {
      careerState,
      milestoneId: milestone.id,
      alreadyAchieved: false,
      rewardsApplied: false,
      note: `Requirements for milestone "${milestone.title}" are not yet met.`
    };
  }

  const rewards = milestone.rewards;
  const studio = {
    ...careerState.studio,
    money: careerState.studio.money + (rewards.money ?? 0),
    reputation: Math.max(0, careerState.studio.reputation + (rewards.reputation ?? 0)),
    prestige: Math.max(0, careerState.studio.prestige + (rewards.prestige ?? 0))
  };
  const identityTags = uniqueTags([
    ...careerState.identityTags,
    ...(rewards.identityTags ?? [])
  ]);
  const updatedState: CareerState = {
    ...careerState,
    studio,
    achievedMilestoneIds: [...careerState.achievedMilestoneIds, milestone.id],
    identityTags,
    years: careerState.years.map((careerYear) => careerYear.year === careerState.currentYear
      ? {
          ...careerYear,
          endingMoney: studio.money,
          reputationEnd: studio.reputation,
          prestigeEnd: studio.prestige,
          notes: [...careerYear.notes, `Achieved milestone: ${milestone.title}.`]
        }
      : careerYear),
    notes: [...careerState.notes, `Achieved milestone: ${milestone.title}.`]
  };

  return {
    careerState: updatedState,
    milestoneId: milestone.id,
    alreadyAchieved: false,
    rewardsApplied: true,
    note: `Milestone "${milestone.title}" achieved and rewards applied.`
  };
}

function uniqueTags(tags: readonly StudioIdentityTag[]): readonly StudioIdentityTag[] {
  return [...new Set(tags)];
}
