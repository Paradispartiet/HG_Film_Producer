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
  readonly alignmentTier: "none" | "loose" | "focused" | "strong";
}): ScenarioLearningRecap {
  const learned = args.selectedTargetLabels.length > 0
    ? args.selectedTargetLabels.slice(0, 6)
    : args.unselectedTargetLabels.slice(0, 3).map((label) => `Recognize target: ${label}`);

  const nextFocus = args.unselectedTargetLabels.length > 0
    ? args.unselectedTargetLabels.slice(0, 4)
    : ["Try the same scenario with a different production scale."];

  return {
    title: "What this scenario trained",
    intro: introByAlignmentTier[args.alignmentTier],
    learned,
    nextFocus,
    verificationNote: verificationNoteByStatus[args.verificationStatus]
  };
}

const introByAlignmentTier: Record<"none" | "loose" | "focused" | "strong", string> = {
  none: "This run stayed broad, so the learning recap focuses on what the scenario was asking for.",
  loose: "This run touched the classic brief, but left several craft targets open.",
  focused: "This run built a clear production direction around the classic brief.",
  strong: "This run strongly committed to the classic scenario’s craft direction."
};

const verificationNoteByStatus: Record<ScenarioProductionBrief["verificationStatus"], string> = {
  needs_research: "This is a seeded learning recap. Film-specific historical claims still need research.",
  seeded: "This recap is generated from seeded scenario data.",
  verified: "This recap is based on verified scenario brief data."
};
