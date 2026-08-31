import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenAllWeImagineAsLightExpansionDefinitions, mergeChapterNineteenAllWeImagineAsLightExpansion } from "./chapterNineteenAllWeImagineAsLightExpansion.js";

test("All We Imagine as Light source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenAllWeImagineAsLightExpansionDefinitions.length, 1);
  const film = chapterNineteenAllWeImagineAsLightExpansionDefinitions[0];
  assert.equal(film.id, "scenario_all_we_imagine_as_light_2024");
  assert.equal(film.title, "All We Imagine as Light");
  assert.equal(film.year, 2024);
  assert.equal(film.runtimeMins, 114);
  assert.deepEqual(film.directors, ["Payal Kapadia"]);
  assert.equal(film.sourceId, "festival_cannes_all_we_imagine_as_light_2024");
  assert.equal(film.sourceUrl, "https://www.festival-cannes.com/en/f/all-we-imagine-as-light/");
  assert.match(film.scenarioType, /regional_global/);
  assert.match(film.scenarioType, /arri_alexa_mini/);
  assert.match(film.scenarioType, /cooke_s4_i/);
  assert.match(film.scenarioType, /canon_c70/);
  assert.match(film.scenarioType, /eurimages/);
  assert.ok(film.premise.includes("two-block shoot"));
  assert.ok(film.premise.includes("June and July 2023"));
  assert.ok(film.premise.includes("Ratnagiri work in November"));
  assert.ok(film.premise.includes("basic rough cut"));
  assert.ok(film.premise.includes("ARRI Alexa Mini"));
  assert.ok(film.premise.includes("Cooke S4/i"));
  assert.ok(film.premise.includes("Canon EOS C70"));
  assert.ok(film.premise.includes("Prime Focus in Mumbai"));
  assert.ok(film.premise.includes("Lionel Kopp and Laurens Orij"));
  assert.ok(film.premise.includes("Hoël Sainléger"));
  assert.ok(film.premise.includes("remain unresolved"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 28);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.phases.find((phase) => phase.id === "finance_boundary")?.player_task.includes("support, co-production, sales and distribution"));
  assert.ok(film.phases.find((phase) => phase.id === "rough_cut_break")?.player_task.includes("seasonal break"));
  assert.ok(film.phases.find((phase) => phase.id === "digital_texture")?.player_task.includes("capture is digital"));
  assert.ok(film.requiredChoicesSeed.camera.includes("arri_alexa_mini"));
  assert.ok(film.requiredChoicesSeed.camera.includes("canon_c70"));
  assert.ok(film.requiredChoicesSeed.editing.includes("rough_cut_between_shoot_blocks"));
  assert.ok(film.requiredChoicesSeed.sound.includes("mumbai_rain_trains_traffic"));
});

test("All We Imagine as Light expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenAllWeImagineAsLightExpansion([]);
  assert.equal(once.length, 1);
  const twice = mergeChapterNineteenAllWeImagineAsLightExpansion(once);
  assert.equal(twice.length, 1);
  assert.equal(twice[0]?.id, "scenario_all_we_imagine_as_light_2024");
});
