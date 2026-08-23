import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenBoysDontCryExpansionDefinitions } from "./chapterSeventeenBoysDontCryExpansion.js";

test("Chapter 17 materializes Boys Don't Cry as a source-first researched biographical independent production case", () => {
  assert.equal(chapterSeventeenBoysDontCryExpansionDefinitions.length, 1);
  const film = chapterSeventeenBoysDontCryExpansionDefinitions[0];
  assert.equal(film.id, "scenario_boys_dont_cry_1999");
  assert.equal(film.year, 1999);
  assert.equal(film.runtimeMins, 114);
  assert.deepEqual(film.directors, ["Kimberly Peirce"]);
  assert.equal(film.sourceId, "filmmaker_boys_dont_cry_1999");
  assert.ok(film.scenarioType.includes("biographical") && film.scenarioType.includes("test_screening"));

  assert.ok(film.premise.includes("five-and-a-half years") && film.premise.includes("three-year search"));
  assert.ok(film.premise.includes("four-week transformation") && film.premise.includes("storyboarding"));
  assert.ok(film.premise.includes("seven audience screenings") && film.premise.includes("one hundred people"));
  assert.ok(film.premise.includes("Jim Denault") && film.premise.includes("Lee Percy") && film.premise.includes("Tracy Granger"));
  assert.ok(film.premise.includes("114-minute") && film.premise.includes("118 minutes"));
  assert.ok(film.premise.includes("Dallas") && film.premise.includes("Greenville, Texas"));
  assert.ok(film.premise.includes("below two million dollars") && film.premise.includes("not permission to invent an exact final budget"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("historical life") && goal.includes("dramatically compressed")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("life-story rights") && goal.includes("public records")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three-year lead search")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("four-week") && goal.includes("preparation")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("storyboarding") && goal.includes("changed on set")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("seven audience screenings")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("114") && goal.includes("118")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Texas") && goal.includes("Nebraska")));

  const research = film.phases.find((phase) => phase.id === "research_and_historical_record");
  assert.ok(research?.player_task.includes("interviews") && research.player_task.includes("court transcripts"));
  const rights = film.phases.find((phase) => phase.id === "rights_and_legal_vetting");
  assert.ok(rights?.player_task.includes("life-story permissions") && rights.player_task.includes("public-domain records"));
  const casting = film.phases.find((phase) => phase.id === "casting_brandon");
  assert.ok(casting?.label.includes("three-year") && casting.player_task.includes("Hilary Swank"));
  const boards = film.phases.find((phase) => phase.id === "storyboards_and_visual_grammar");
  assert.ok(boards?.player_task.includes("storyboards") && boards.player_task.includes("revising"));
  const edit = film.phases.find((phase) => phase.id === "editing_and_audience_screenings");
  assert.ok(edit?.label.includes("seven audience screenings") && edit.player_task.includes("compress"));
  const runtime = film.phases.find((phase) => phase.id === "runtime_and_version_boundary");
  assert.ok(runtime?.player_task.includes("114-minute") && runtime.player_task.includes("118-minute"));

  assert.ok(film.requiredChoicesSeed.performance.includes("three_year_lead_search"));
  assert.ok(film.requiredChoicesSeed.editing.includes("seven_audience_screenings_inform_structure"));
  assert.ok(film.learningGoals.length >= 22);
  assert.ok(film.phases.length >= 12);
});
