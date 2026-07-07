#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];

function fail(message) {
  failures.push(message);
}

function requireFile(path) {
  if (!existsSync(join(root, path))) {
    fail(`Missing required file: ${path}`);
  }
}

async function readJson(path) {
  try {
    return JSON.parse(await readFile(join(root, path), "utf8"));
  } catch (error) {
    fail(`Could not parse ${path}: ${error.message}`);
    return {};
  }
}

async function requireText(path, snippets) {
  requireFile(path);
  if (!existsSync(join(root, path))) return;
  const text = await readFile(join(root, path), "utf8");
  for (const snippet of snippets) {
    if (!text.includes(snippet)) {
      fail(`${path} is missing required text: ${snippet}`);
    }
  }
}

const packageJson = await readJson("package.json");
const dependencies = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
  ...packageJson.optionalDependencies,
};

for (const forbidden of ["playwright", "puppeteer", "jsdom", "@testing-library/react", "@testing-library/dom", "@testing-library/user-event"]) {
  if (Object.hasOwn(dependencies, forbidden)) {
    fail(`Forbidden browser/test dependency present: ${forbidden}`);
  }
}

const scripts = packageJson.scripts ?? {};
for (const scriptName of ["typecheck", "test", "build:ui", "verify:v0.1"]) {
  if (typeof scripts[scriptName] !== "string" || scripts[scriptName].trim().length === 0) {
    fail(`Missing package script: ${scriptName}`);
  }
}

if (scripts["verify:v0.1"] && !scripts["verify:v0.1"].includes("preflight:v0.1") && !scripts["verify:v0.1"].includes("preflight-v0.1.mjs")) {
  fail("verify:v0.1 must run the local v0.1 preflight script.");
}

for (const path of [
  "docs/PLAYABLE_MODES_QA_STATUS.md",
  "docs/PRODUCTION_CASES_MANUAL_PLAYTEST.md",
  "docs/STUDIO_CAREER_MANUAL_PLAYTEST.md",
  "docs/GAME_DIRECTION.md",
  "docs/GAME_DIRECTION_ALIGNMENT_AUDIT.md",
  "docs/STUDIO_CAREER_EXPERIMENTAL_STATUS.md",
  "docs/PRODUCTION_CASES_MVP_CHECKPOINT.md",
  "src/core/productionCaseFlowSmoke.test.ts",
  "src/core/studioCareerFlowSmoke.test.ts",
]) {
  requireFile(path);
}

await requireText("src/core/productionCaseFlowSmoke.test.ts", [
  "report and best result are gated",
  "getNextProductionCaseId",
  "isProductionCaseFirstSession",
  "getProductionCaseNextAction",
]);

await requireText("src/core/studioCareerFlowSmoke.test.ts", [
  "pipeline order advances",
  "career review only after release",
  "latest project actionable",
  "project-scoped release control names",
]);

await requireText("docs/PLAYABLE_MODES_QA_STATUS.md", [
  "npm run verify:v0.1",
  "This does not close the final browser readiness gate",
  "Browser-driven manual playthrough",
]);

if (failures.length > 0) {
  console.error("v0.1 preflight failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("v0.1 preflight source/documentation checks passed.");
