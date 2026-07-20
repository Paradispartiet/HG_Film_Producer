import type { EarlyCinemaExpansionDefinition } from "./earlyCinemaExpansion.js";

export type EarlyCinemaBriefBlueprint = {
  readonly toneTargets: readonly string[];
  readonly screenplayTargets: readonly string[];
  readonly cinematographyTargets: readonly string[];
  readonly editingTargets: readonly string[];
  readonly soundTargets: readonly string[];
  readonly learningGoals: readonly string[];
};

export function createEarlyCinemaBriefBlueprint(
  definition: EarlyCinemaExpansionDefinition,
): EarlyCinemaBriefBlueprint {
  return {
    toneTargets: [
      definition.tone,
      definition.tradition,
      "Historically specific rather than generically retro",
    ],
    screenplayTargets: [
      definition.screenplay,
      "Make the dramatic structure serve the film's documented or mapped historical form.",
      "Keep the case focused on production decisions rather than plot trivia.",
    ],
    cinematographyTargets: [
      definition.image,
      "Treat space, design, performance and camera as one visual system.",
      "Do not imitate an old look without understanding how it was constructed.",
    ],
    editingTargets: [
      definition.editing,
      "Use rhythm and information control in a way that belongs to this film's form.",
      "Preserve the relationship between shot construction and audience understanding.",
    ],
    soundTargets: [
      definition.sound,
      "Respect the film's historical relationship to speech, music, silence and effects.",
      "Use sound as structure rather than generic atmosphere.",
    ],
    learningGoals: [
      definition.learning,
      `Connect ${definition.tradition.toLowerCase()} to concrete decisions across departments.`,
      "Keep source-verified history separate from provisional craft mapping.",
    ],
  };
}
