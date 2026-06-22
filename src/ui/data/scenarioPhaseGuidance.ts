import {
  createProductionCaseMissions,
  type ProductionCaseMission,
  type ScenarioProductionBrief,
} from "./scenarioProductionBriefs";

export type ScenarioProductionPhase =
  | "development"
  | "pre_production"
  | "shoot"
  | "post_production"
  | "release";

export type ScenarioPhaseGuidance = {
  readonly phase: ScenarioProductionPhase;
  readonly title: string;
  readonly description: string;
  readonly targets: readonly string[];
};

export function createScenarioPhaseGuidance(
  brief: ScenarioProductionBrief,
): readonly ScenarioPhaseGuidance[] {
  if (brief.briefType === "production_case") {
    return createProductionCasePhaseGuidance(brief);
  }

  return [
    {
      phase: "development",
      title: "Development focus",
      description:
        "Study the seeded concept, tone and script decisions before the scenario moves into production.",
      targets: [
        ...brief.genreTargets,
        ...brief.toneTargets,
        ...brief.screenplayTargets,
      ],
    },
    {
      phase: "pre_production",
      title: "Pre-production focus",
      description:
        "Prepare the visual plan, team choices and production approach around the generic production challenge.",
      targets: [...brief.toneTargets, ...brief.cinematographyTargets],
    },
    {
      phase: "shoot",
      title: "Shoot focus",
      description:
        "Use the shooting phase to commit to image, space, rhythm and sound intent.",
      targets: [...brief.cinematographyTargets, ...brief.soundTargets],
    },
    {
      phase: "post_production",
      title: "Post-production focus",
      description:
        "Use editing and sound to shape the final production challenge clearly.",
      targets: [...brief.editingTargets, ...brief.soundTargets],
    },
    {
      phase: "release",
      title: "Release and learning focus",
      description:
        "Read the result as a learning summary of the provisional production choices practiced.",
      targets: [...brief.learningGoals],
    },
  ];
}

function createProductionCasePhaseGuidance(
  brief: ScenarioProductionBrief,
): readonly ScenarioPhaseGuidance[] {
  const missions = createProductionCaseMissions(brief);

  return [
    {
      phase: "development",
      title: "Case orientation + manusvalg",
      description: joinMissionPrompts(
        missions,
        "case_orientation",
        "screenplay",
      ),
      targets: getMissionTargets(missions, "case_orientation", "screenplay"),
    },
    {
      phase: "pre_production",
      title: "Visuelt system",
      description: getMissionPrompt(missions, "cinematography"),
      targets: getMissionTargets(missions, "cinematography"),
    },
    {
      phase: "shoot",
      title: "Bilde og lyd på opptak",
      description:
        "Identifiser produksjonsvalgene bak scenene mens foto og lyd bindes til filmens konkrete uttrykk.",
      targets: getMissionTargets(missions, "cinematography", "sound"),
    },
    {
      phase: "post_production",
      title: "Klipperytme + lydverden",
      description: joinMissionPrompts(missions, "editing", "sound"),
      targets: getMissionTargets(missions, "editing", "sound"),
    },
    {
      phase: "release",
      title: "Hva filmen lærer deg",
      description: getMissionPrompt(missions, "reflection"),
      targets: getMissionTargets(missions, "reflection"),
    },
  ];
}

function getMissionPrompt(
  missions: readonly ProductionCaseMission[],
  phase: ProductionCaseMission["phase"],
): string {
  return (
    missions.find((mission) => mission.phase === phase)?.prompt ??
    "Forstå hvordan denne filmen løser fasen."
  );
}

function joinMissionPrompts(
  missions: readonly ProductionCaseMission[],
  ...phases: readonly ProductionCaseMission["phase"][]
): string {
  return phases.map((phase) => getMissionPrompt(missions, phase)).join(" ");
}

function getMissionTargets(
  missions: readonly ProductionCaseMission[],
  ...phases: readonly ProductionCaseMission["phase"][]
): readonly string[] {
  return phases.flatMap(
    (phase) =>
      missions.find((mission) => mission.phase === phase)?.targets ?? [],
  );
}
