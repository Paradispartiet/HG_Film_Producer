import assert from "node:assert/strict";
import test from "node:test";

import { isDeveloperToolsEnabled } from "./developerToolsAccess.js";

test("developer tools stay hidden by default", () => {
  assert.equal(isDeveloperToolsEnabled(""), false);
  assert.equal(isDeveloperToolsEnabled("?mode=production"), false);
  assert.equal(isDeveloperToolsEnabled("?dev=0"), false);
});

test("developer tools require the explicit dev=1 query parameter", () => {
  assert.equal(isDeveloperToolsEnabled("?dev=1"), true);
  assert.equal(isDeveloperToolsEnabled("?mode=production&dev=1"), true);
});
