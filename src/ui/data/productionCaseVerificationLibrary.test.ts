import assert from "node:assert/strict";
import test from "node:test";

import { getVerifiedProductionCaseTitles } from "./productionCaseVerificationLibrary.js";

test("library marker data exposes all source-verified cases", () => {
  const titles = getVerifiedProductionCaseTitles();

  assert.equal(titles.length, 20);
  assert.equal(new Set(titles).size, titles.length);
  assert.ok(titles.includes("Bicycle Thieves"));
  assert.ok(titles.includes("The Celebration"));
  assert.ok(titles.includes("Waltz with Bashir"));
  assert.ok(titles.includes("Mad Max: Fury Road"));
  assert.ok(titles.includes("District 9"));
  assert.ok(titles.includes("Birdman or (The Unexpected Virtue of Ignorance)"));
  assert.ok(titles.includes("Boyhood"));
  assert.ok(titles.includes("Ex Machina"));
  assert.ok(titles.includes("It's a Wonderful Life"));
  assert.ok(titles.includes("The 400 Blows"));
  assert.ok(titles.includes("The Road Warrior"));
  assert.ok(titles.includes("Victoria"));
});
