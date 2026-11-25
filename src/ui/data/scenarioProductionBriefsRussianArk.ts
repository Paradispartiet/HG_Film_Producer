import { chapterEighteenRussianArkExpansionDefinitions } from "../../core/chapterEighteenRussianArkExpansion.js";
import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";

// Bind the existing verified film to the playable library without adding a catalogue identity.
export function getRussianArkProductionBrief(scenario: FilmScenarioSeed): ScenarioProductionBrief | undefined {
  const definition = chapterEighteenRussianArkExpansionDefinitions.find(item => item.id === scenario.id);
  if (!definition) return undefined;
  return {
    scenarioId: scenario.id,
    briefType: "production_case",
    title: "Russian Ark production brief",
    logline: definition.premise,
    genreTargets: definition.genres,
    toneTargets: ["Continuous historical tableau", "Museum-scale spatial choreography", "Time and memory through moving mise-en-scène"],
    screenplayTargets: ["Plan an ordered route through the historical rooms", "Coordinate performers, transitions and timed dramatic cues", "Distinguish fictional tableaux from historical evidence"],
    cinematographyTargets: ["Plan continuous digital HD recording with adequate capacity", "Rehearse safe short camera paths with crew support", "Prepare light, focus and contingency cues for each room"],
    editingTargets: ["Preserve the uninterrupted acquisition time", "Distinguish digital reframing and cleanup from picture cutting", "Plan colour correction and VFX without inventing an equipment specification"],
    soundTargets: ["Coordinate live musical performance with the moving camera", "Plan dialogue, music and environmental sound as separate production tasks", "Do not infer undocumented recording or mixing equipment"],
    learningGoals: definition.learningGoals,
    verificationStatus: "verified",
  };
}
