import type { ScenarioAlignmentAssessment } from "./scenarioAlignmentScore";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";

export type ScenarioLearningRecap = {
  readonly title: string;
  readonly intro: string;
  readonly learned: readonly string[];
  readonly nextFocus: readonly string[];
  readonly verificationNote: string;
};

export function createScenarioLearningRecap(args: {
  readonly scenarioTitle: string;
  readonly verificationStatus: ScenarioProductionBrief["verificationStatus"];
  readonly selectedTargetLabels: readonly string[];
  readonly unselectedTargetLabels: readonly string[];
  readonly alignmentAssessment: ScenarioAlignmentAssessment;
}): ScenarioLearningRecap {
  const learned = args.selectedTargetLabels.length > 0
    ? args.selectedTargetLabels.slice(0, 6)
    : args.unselectedTargetLabels.slice(0, 3).map((label) => `Compare method: ${label}`);

  const nextFocus = args.unselectedTargetLabels.length > 0
    ? args.unselectedTargetLabels.slice(0, 4)
    : ["Revisit one phase and compare why the documented method works for this film."];

  return {
    title: "What this case explored",
    intro: introByAssessment[args.alignmentAssessment],
    learned,
    nextFocus,
    verificationNote: verificationNoteByStatus[args.verificationStatus]
  };
}

const introByAssessment: Record<ScenarioAlignmentAssessment, string> = {
  reconsider: "The report highlights production methods worth comparing again with the film-specific explanations.",
  partial: "The report separates methods you identified from methods worth comparing again.",
  clear: "The report gathers the methods you identified and the film-specific explanations that support them."
};

const verificationNoteByStatus: Record<ScenarioProductionBrief["verificationStatus"], string> = {
  needs_research: "This is a seeded learning recap. Film-specific historical claims still need research.",
  seeded: "This recap is generated from seeded scenario data.",
  verified: "This recap is based on verified scenario brief data."
};
