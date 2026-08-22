import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenSankofaExpansionDefinitions } from "./chapterSeventeenSankofaExpansion.js";

test("Chapter 17 materializes Sankofa as a source-first Black independent diasporic production and self-distribution case", () => {
  assert.equal(chapterSeventeenSankofaExpansionDefinitions.length, 1);
  const film = chapterSeventeenSankofaExpansionDefinitions[0];
  assert.equal(film.id, "scenario_sankofa_1993");
  assert.equal(film.year, 1993);
  assert.equal(film.runtimeMins, 124);
  assert.deepEqual(film.directors, ["Haile Gerima"]);
  assert.equal(film.sourceId, "ucla_sankofa_1993");
  assert.ok(film.scenarioType.includes("black_independent") && film.scenarioType.includes("35mm") && film.scenarioType.includes("self_distribution"));

  assert.ok(film.premise.includes("Haile Gerima") && film.premise.includes("Shirikiana Aina") && film.premise.includes("Augustin E. Cubano"));
  assert.ok(film.premise.includes("Ghana National Commission on Culture") && film.premise.includes("DiProCi") && film.premise.includes("NDR") && film.premise.includes("WDR") && film.premise.includes("Channel Four"));
  assert.ok(film.premise.includes("less than $1 million") && film.premise.includes("foundation grants") && film.premise.includes("bartered plane tickets and lodging") && film.premise.includes("credit-card"));
  assert.ok(film.premise.includes("Louisiana") && film.premise.includes("Jamaica") && film.premise.includes("about a year later") && film.premise.includes("roughly three weeks"));
  assert.ok(film.premise.includes("Merawi Gerima") && film.premise.includes("final scene") && film.premise.includes("fundraising"));
  assert.ok(film.premise.includes("Kofi Ghanaba") && film.premise.includes("camera capture the moment") && film.premise.includes("wholly improvised"));
  assert.ok(film.premise.includes("35mm color") && film.premise.includes("camera body") && film.premise.includes("laboratory route"));
  assert.ok(film.premise.includes("Kerry Marshall") && film.premise.includes("Tracey White") && film.premise.includes("David J. White"));
  assert.ok(film.premise.includes("Marko A. Costanzo") && film.premise.includes("Don White") && film.premise.includes("sound-credit variance"));
  assert.ok(film.premise.includes("123") && film.premise.includes("124") && film.premise.includes("125") && film.premise.includes("catalogue/version variance"));
  assert.ok(film.premise.includes("Mypheduh Films") && film.premise.includes("community organizing") && film.premise.includes("additional prints"));
  assert.ok(film.premise.includes("2021 ARRAY/Netflix") && film.premise.includes("original 1992-93 manufacture"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("under-$1-million") && goal.includes("not an exact budget")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Jamaica") && goal.includes("Ghana/Africa") && goal.includes("three weeks")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Kofi Ghanaba") && goal.includes("wholly improvised")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35mm/color") && goal.includes("lenses") && goal.includes("lab workflow")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("123/124/125-minute") && goal.includes("124 minutes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Mypheduh Films") && goal.includes("distributors declined")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Washington theatrical run") && goal.includes("additional prints")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Avoid inventing") && goal.includes("rights-clearance")));

  const finance = film.phases.find((phase) => phase.id === "finance_and_package");
  assert.ok(finance?.player_task.includes("grants") && finance.player_task.includes("barter") && finance.player_task.includes("finance percentages"));
  const jamaica = film.phases.find((phase) => phase.id === "jamaica_production");
  assert.ok(jamaica?.player_task.includes("Louisiana") && jamaica.player_task.includes("Jamaica") && jamaica.player_task.includes("rate cards"));
  const ghana = film.phases.find((phase) => phase.id === "ghana_production");
  assert.ok(ghana?.player_task.includes("roughly-one-year") && ghana.player_task.includes("three-week") && ghana.player_task.includes("call sheets"));
  const camera = film.phases.find((phase) => phase.id === "camera_and_format");
  assert.ok(camera?.player_task.includes("Augustin E. Cubano") && camera.player_task.includes("35mm color") && camera.player_task.includes("lens"));
  const distribution = film.phases.find((phase) => phase.id === "grassroots_distribution");
  assert.ok(distribution?.player_task.includes("Mypheduh") && distribution.player_task.includes("theater rentals") && distribution.player_task.includes("additional prints"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_exposure_lighting_or_lab_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_foley_adr_or_mix_layout"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 10);
});
