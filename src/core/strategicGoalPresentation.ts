import type { StrategicGoal } from "../domain/career.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { STUDIO_SETUP_COPY } from "./studioSetupCopy.js";

export type StrategicGoalPresentationInput = Pick<
  StrategicGoal,
  "id" | "type" | "title" | "description"
>;

export type StrategicGoalPresentation = Pick<StrategicGoal, "title" | "description">;

export function presentStrategicGoal(
  language: FilmWorkLanguage,
  goal: StrategicGoalPresentationInput,
): StrategicGoalPresentation {
  return STUDIO_SETUP_COPY[language].goal.presentation(goal);
}
