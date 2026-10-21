#!/usr/bin/env node
/**
 * Run the real six-phase Studio Career lifecycle in Node without importing
 * bundler-only TypeScript/JSON UI modules into the NodeNext core test build.
 *
 * Usage after npm ci:
 *   node scripts/studio-career-lifecycle-qa.mjs
 */
import assert from "node:assert/strict";
import { build } from "esbuild";

const source = "scripts/studio-career-lifecycle-journey.fixture.ts";
const result = await build({
  entryPoints: [source],
  platform: "node",
  format: "esm",
  bundle: true,
  write: false,
  logLevel: "warning",
});
assert.equal(result.outputFiles.length, 1, "Exactly one Studio Career lifecycle test bundle");
await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`);
