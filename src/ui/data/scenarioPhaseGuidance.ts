import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";

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
  return [
    {
      phase: "development",
      title: "Development focus",
      description:
        "Study the film-specific concept, tone and script decisions before the case moves into production.",
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
        "Prepare the visual plan, team choices and production approach around the film-specific production case.",
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
        "Use editing and sound to reconstruct the final shape of the production case.",
      targets: [...brief.editingTargets, ...brief.soundTargets],
    },
    {
      phase: "release",
      title: "Release and learning focus",
      description:
        "Read the result as a learning summary of the film-specific production choices practiced.",
      targets: [...brief.learningGoals],
    },
  ];
}
