import type { CareerQuarter, CareerState } from "../domain/career.js";
import { startCareerYear } from "./startCareerYear.js";

const NEXT_QUARTER: Readonly<Record<CareerQuarter, CareerQuarter>> = {
  q1: "q2",
  q2: "q3",
  q3: "q4",
  q4: "q1"
};

/** Advance one deterministic quarter, opening the next year after q4. */
export function advanceCareerQuarter(careerState: CareerState): CareerState {
  if (careerState.currentQuarter === "q4") {
    return startCareerYear(careerState, careerState.currentYear + 1);
  }

  return {
    ...careerState,
    currentQuarter: NEXT_QUARTER[careerState.currentQuarter],
    notes: [
      ...careerState.notes,
      `Advanced to ${NEXT_QUARTER[careerState.currentQuarter]} of year ${careerState.currentYear}.`
    ]
  };
}
