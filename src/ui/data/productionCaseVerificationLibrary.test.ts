import assert from "node:assert/strict";
import test from "node:test";

import { getVerifiedProductionCaseTitles } from "./productionCaseVerificationLibrary.js";

test("library marker data exposes all source-verified cases", () => {
  const titles = getVerifiedProductionCaseTitles();

  assert.equal(titles.length, 12);
  assert.equal(new Set(titles).size, titles.length);
  assert.ok(titles.includes("Bicycle Thieves"));
  assert.ok(titles.includes("The Celebration"));
  assert.ok(titles.includes("Waltz with Bashir"));
  assert.ok(titles.includes("Mad Max: Fury Road"));
});
