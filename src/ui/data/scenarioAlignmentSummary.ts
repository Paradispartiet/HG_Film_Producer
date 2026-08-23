import type { ScenarioAlignmentFeedback } from "./scenarioAlignmentScore.js";

export function getScenarioAlignmentSummary(feedback: ScenarioAlignmentFeedback): string {
  switch (feedback.assessment) {
    case "reconsider":
      return "Compare the selected approaches with the documented film method and revisit the explanations that do not fit yet.";
    case "partial":
      return "Some selected approaches connect to the documented film method. Compare the remaining approaches to see where the film works differently.";
    case "clear":
      return "The selected approaches connect closely to the documented film method. Use the explanations to identify why those methods fit this film.";
    default: {
      const exhaustiveAssessment: never = feedback.assessment;
      return exhaustiveAssessment;
    }
  }
}
