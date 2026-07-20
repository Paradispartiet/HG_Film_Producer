import type { ModernCanonExpansionDefinition } from "./modernCanonExpansion.js";

export type ModernCanonBriefBlueprint = {
  readonly toneTargets: readonly string[];
  readonly screenplayTargets: readonly string[];
  readonly cinematographyTargets: readonly string[];
  readonly editingTargets: readonly string[];
  readonly soundTargets: readonly string[];
  readonly learningGoals: readonly string[];
};

export function createModernCanonBriefBlueprint(
  definition: ModernCanonExpansionDefinition,
): ModernCanonBriefBlueprint {
  return {
    toneTargets: [
      definition.tone,
      definition.tradition,
      "Culturally and historically specific rather than reduced to a generic festival-film style",
    ],
    screenplayTargets: [
      definition.screenplay,
      "Make the structure serve this film's particular social, historical or formal problem.",
      "Keep the case focused on production decisions rather than plot recall or award trivia.",
    ],
    cinematographyTargets: [
      definition.image,
      "Treat location, bodies, design and camera position as one cultural and dramatic system.",
      "Do not imitate an auteur look without understanding what the framing allows the audience to know.",
    ],
    editingTargets: [
      definition.editing,
      "Use duration, ellipsis and information control in a way that belongs to this film's construction.",
      "Preserve the relationship between structure, viewpoint and the audience's ethical position.",
    ],
    soundTargets: [
      definition.sound,
      "Respect the film's specific relationship to voice, language, music, silence and environment.",
      "Use sound as evidence, space and dramatic structure rather than generic atmosphere.",
    ],
    learningGoals: [
      definition.learning,
      `Connect ${definition.tradition.toLowerCase()} to concrete decisions across departments.`,
      "Keep observable craft mapping separate from completed source verification.",
    ],
  };
}
