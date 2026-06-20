import type { ScenarioAlignmentScore } from "./scenarioAlignmentScore.js";

export function getScenarioAlignmentSummary(score: ScenarioAlignmentScore): string {
  switch (score.tier) {
    case "none":
      return "The production did not commit to the classic scenario targets.";
    case "loose":
      return "The film borrows from the classic brief, but the direction is still broad.";
    case "focused":
      return "The production has a clear relationship to the classic scenario brief.";
    case "strong":
      return "The production strongly follows the classic scenario’s craft direction.";
    default: {
      const exhaustiveTier: never = score.tier;
      return exhaustiveTier;
    }
  }
}
