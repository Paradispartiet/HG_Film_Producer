import type { ProductionCaseProgressEntry } from "./productionCaseProgress.js";

export type ProductionCaseLearningChoice = {
  readonly id: string;
  readonly label: string;
  readonly quality: string;
};

export type ProductionCaseLearningMission = {
  readonly id: string;
  readonly phase: string;
  readonly title: string;
  readonly choices: readonly ProductionCaseLearningChoice[];
};

export type ProductionCaseLearningStatus = "not_started" | "in_progress" | "completed";

export type ProductionCaseLearningStatusSummary = {
  readonly status: ProductionCaseLearningStatus;
  readonly label: string;
  readonly completedCount: number;
  readonly missionCount: number;
  readonly selectedCount: number;
};

export type ProductionCaseLearningHintType = "choose" | "revisit" | "compare";

export type ProductionCaseLearningHint = {
  readonly missionId: string;
  readonly phase: string;
  readonly title: string;
  readonly hintType: ProductionCaseLearningHintType;
  readonly label: string;
  readonly description: string;
};

export type ProductionCaseLearningPhase = {
  readonly missionId: string;
  readonly phase: string;
  readonly title: string;
  readonly selectedChoiceLabel: string;
};

export type ProductionCaseLearningReport = {
  readonly completedCount: number;
  readonly totalMissions: number;
  readonly clearPhases: readonly ProductionCaseLearningPhase[];
  readonly developingPhases: readonly ProductionCaseLearningPhase[];
  readonly revisitPhases: readonly ProductionCaseLearningPhase[];
  readonly learningSummary: string;
};

export type ProductionCaseLearningNextAction = {
  readonly missionId: string;
  readonly phase: string;
  readonly title: string;
  readonly actionType: "choose" | "complete" | "review";
  readonly label: string;
  readonly description: string;
};

function getSelectedChoice(
  mission: ProductionCaseLearningMission,
  progress: Pick<ProductionCaseProgressEntry, "selectedChoicesByMissionId">,
): ProductionCaseLearningChoice | undefined {
  const selectedChoiceId = progress.selectedChoicesByMissionId?.[mission.id];
  return mission.choices.find((choice) => choice.id === selectedChoiceId);
}

export function getProductionCaseLearningStatus(
  missions: readonly ProductionCaseLearningMission[],
  progress: Pick<ProductionCaseProgressEntry, "completedMissionIds" | "selectedChoicesByMissionId">,
): ProductionCaseLearningStatusSummary {
  const completedCount = missions.filter((mission) => progress.completedMissionIds.includes(mission.id)).length;
  const selectedCount = missions.filter((mission) => Boolean(getSelectedChoice(mission, progress))).length;
  const status: ProductionCaseLearningStatus = completedCount === missions.length && missions.length > 0
    ? "completed"
    : completedCount === 0 && selectedCount === 0
      ? "not_started"
      : "in_progress";

  return {
    status,
    label: status === "completed" ? "Completed" : status === "in_progress" ? "In progress" : "Not started",
    completedCount,
    missionCount: missions.length,
    selectedCount,
  };
}

export function getProductionCaseLearningHint(
  missions: readonly ProductionCaseLearningMission[],
  progress: Pick<ProductionCaseProgressEntry, "selectedChoicesByMissionId">,
): ProductionCaseLearningHint | undefined {
  const missing = missions.find((mission) => !getSelectedChoice(mission, progress));
  if (missing) {
    return {
      missionId: missing.id,
      phase: missing.phase,
      title: missing.title,
      hintType: "choose",
      label: "Choose an approach",
      description: "Read the film-specific targets and choose the approach that best explains how this part of the film works.",
    };
  }

  const missed = missions.find((mission) => getSelectedChoice(mission, progress)?.quality === "miss");
  if (missed) {
    return {
      missionId: missed.id,
      phase: missed.phase,
      title: missed.title,
      hintType: "revisit",
      label: "Revisit this phase",
      description: "Compare your choice with the film-specific targets and the explanation before choosing again.",
    };
  }

  const partial = missions.find((mission) => getSelectedChoice(mission, progress)?.quality === "partial");
  if (partial) {
    return {
      missionId: partial.id,
      phase: partial.phase,
      title: partial.title,
      hintType: "compare",
      label: "Compare the alternatives",
      description: "Your choice identifies part of the method. Compare it with the closest alternative to see what is more precise for this film.",
    };
  }

  return undefined;
}

export function getProductionCaseLearningNextAction(
  missions: readonly ProductionCaseLearningMission[],
  progress: Pick<ProductionCaseProgressEntry, "completedMissionIds" | "selectedChoicesByMissionId">,
): ProductionCaseLearningNextAction | undefined {
  const missionWithoutChoice = missions.find((mission) => !getSelectedChoice(mission, progress));
  if (missionWithoutChoice) {
    return {
      missionId: missionWithoutChoice.id,
      phase: missionWithoutChoice.phase,
      title: missionWithoutChoice.title,
      actionType: "choose",
      label: "Choose an approach",
      description: "Study the targets and choose the explanation that best fits the film.",
    };
  }

  const incompleteMission = missions.find((mission) => !progress.completedMissionIds.includes(mission.id));
  if (incompleteMission) {
    return {
      missionId: incompleteMission.id,
      phase: incompleteMission.phase,
      title: incompleteMission.title,
      actionType: "complete",
      label: "Complete the phase",
      description: "Read the feedback and learning focus, then mark the phase complete.",
    };
  }

  const hint = getProductionCaseLearningHint(missions, progress);
  if (!hint) return undefined;
  return {
    missionId: hint.missionId,
    phase: hint.phase,
    title: hint.title,
    actionType: "review",
    label: hint.label,
    description: hint.description,
  };
}

export function getProductionCaseLearningReport(
  missions: readonly ProductionCaseLearningMission[],
  progress: Pick<ProductionCaseProgressEntry, "completedMissionIds" | "selectedChoicesByMissionId">,
): ProductionCaseLearningReport | undefined {
  if (missions.length === 0) return undefined;
  const status = getProductionCaseLearningStatus(missions, progress);
  if (status.status !== "completed") return undefined;

  const clearPhases: ProductionCaseLearningPhase[] = [];
  const developingPhases: ProductionCaseLearningPhase[] = [];
  const revisitPhases: ProductionCaseLearningPhase[] = [];

  for (const mission of missions) {
    const selectedChoice = getSelectedChoice(mission, progress);
    if (!selectedChoice) continue;
    const phase = {
      missionId: mission.id,
      phase: mission.phase,
      title: mission.title,
      selectedChoiceLabel: selectedChoice.label,
    };
    if (selectedChoice.quality === "match") clearPhases.push(phase);
    else if (selectedChoice.quality === "partial") developingPhases.push(phase);
    else revisitPhases.push(phase);
  }

  const learningSummary = revisitPhases.length > 0
    ? "You completed the case. Some phases are worth revisiting so the film's method becomes clearer."
    : developingPhases.length > 0
      ? "You completed the case and identified the main methods. Compare the partly fitting choices to sharpen the distinctions."
      : "You completed the case and identified the film-specific method clearly across every phase.";

  return {
    completedCount: status.completedCount,
    totalMissions: status.missionCount,
    clearPhases,
    developingPhases,
    revisitPhases,
    learningSummary,
  };
}
