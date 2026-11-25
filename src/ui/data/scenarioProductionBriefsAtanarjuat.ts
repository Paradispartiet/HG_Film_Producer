import { chapterEighteenAtanarjuatExpansionDefinitions } from "../../core/chapterEighteenAtanarjuatExpansion.js";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";

// Use the existing verified identity and its source-first production definition.
export function getAtanarjuatProductionBrief(scenario: FilmScenarioSeed): ScenarioProductionBrief | undefined {
  const definition = chapterEighteenAtanarjuatExpansionDefinitions.find(item => item.id === scenario.id);
  if (!definition) return undefined;
  return {
    scenarioId: scenario.id,
    briefType: "production_case",
    title: "Atanarjuat: The Fast Runner production brief",
    logline: definition.premise,
    genreTargets: definition.genres,
    toneTargets: ["Inuit-led historical drama", "Community knowledge and oral storytelling", "Landscape and physical performance as dramatic space"],
    screenplayTargets: ["Distinguish oral accounts from the adapted fictional screenplay", "Respect the language and cultural expertise of contributing communities", "Plan an iterative review with appropriately authorized collaborators"],
    cinematographyTargets: ["Separate documented Digital Betacam acquisition from 35mm exhibition", "Plan authorized and safe location recording with local expertise", "Keep undocumented camera bodies and lens settings unclaimed"],
    editingTargets: ["Organize filmed performances into a coherent fiction feature", "Preserve language and cultural context during editorial review", "Distinguish editorial decisions from digital-to-film finishing"],
    soundTargets: ["Respect Inuktitut dialogue and appropriately credited musical contributions", "Plan dialogue review and translation with authorized language expertise", "Avoid inventing microphone, recording or mixing specifications"],
    learningGoals: definition.learningGoals,
    verificationStatus: "verified",
  };
}
