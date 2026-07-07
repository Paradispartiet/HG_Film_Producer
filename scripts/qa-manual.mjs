#!/usr/bin/env node
import { spawn } from "node:child_process";
import { platform } from "node:os";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const args = new Set(process.argv.slice(2));
const mode = args.has("--preview") ? "preview" : "dev";
const port = process.env.QA_PORT ?? (mode === "preview" ? "4173" : "5173");
const host = process.env.QA_HOST ?? "127.0.0.1";
function readViteBasePath() {
  const configPath = join(process.cwd(), "vite.config.ts");
  if (!existsSync(configPath)) return "/";
  const config = readFileSync(configPath, "utf8");
  const match = config.match(/base:\s*["']([^"']+)["']/);
  return match?.[1] ?? "/";
}

const basePath = readViteBasePath();
const url = `http://${host}:${port}${basePath}`;
const shouldOpenBrowser = !args.has("--no-open") && process.env.QA_OPEN !== "0";

function printManualInstructions() {
  console.log(`\nHG Film Producer local manual browser QA`);
  console.log("========================================");
  console.log("This helper starts a local Vite server and prints the remaining browser gate checklist.");
  console.log("It does not install dependencies and does not close or mark any QA gate as complete.\n");
  console.log(`Server mode: ${mode}`);
  console.log(`Local URL:   ${url}`);
  console.log(`Vite base:   ${basePath}`);
  console.log("\nBefore closing the gate, run the full local verification separately:");
  console.log("  npm run verify:v0.1");
  console.log("\nDetailed checklist docs:");
  console.log("  docs/PLAYABLE_MODES_QA_STATUS.md");
  console.log("  docs/PRODUCTION_CASES_MANUAL_PLAYTEST.md");
  console.log("  docs/STUDIO_CAREER_MANUAL_PLAYTEST.md");
  console.log("\nProduction Cases browser gate checklist:");
  console.log("  1. Confirm the landing page recommends Production Cases first.");
  console.log("  2. Start Production Cases and complete the first case.");
  console.log("  3. Confirm the Case report appears only after completion.");
  console.log("  4. Test Play again, Next case/fallback, and the returning-player dashboard.");
  console.log("  5. Confirm there are no blocking console errors or blocking UX issues.");
  console.log("\nStudio Career experimental browser gate checklist:");
  console.log("  1. Confirm Studio Career is clearly labeled experimental.");
  console.log("  2. Start a new career and progress Film One through release and career review.");
  console.log("  3. Apply the career result, start Film Two, and confirm Film Two remains actionable.");
  console.log("  4. Confirm there is no long-scroll trap, no dead Continue/Open actions, and no blocking console errors.");
  console.log("\nPress Ctrl+C to stop the local server when manual QA is finished.\n");
}

function openBrowser(targetUrl) {
  const command = platform() === "darwin" ? "open" : platform() === "win32" ? "cmd" : "xdg-open";
  const commandArgs = platform() === "win32" ? ["/c", "start", "", targetUrl] : [targetUrl];
  const child = spawn(command, commandArgs, { stdio: "ignore", detached: true });
  child.on("error", () => {
    console.log(`Could not auto-open a browser. Open this URL manually: ${targetUrl}`);
  });
  child.unref();
}

printManualInstructions();

const npmCommand = platform() === "win32" ? "npm.cmd" : "npm";
const viteArgs = mode === "preview"
  ? ["run", "preview", "--", "--host", host, "--port", port]
  : ["run", "dev", "--", "--host", host, "--port", port];

const server = spawn(npmCommand, viteArgs, {
  stdio: "inherit",
  env: { ...process.env, BROWSER: "none" },
});

if (shouldOpenBrowser) {
  setTimeout(() => openBrowser(url), 2500);
}

function stopServer(signal) {
  if (!server.killed) {
    server.kill(signal);
  }
}

process.on("SIGINT", () => stopServer("SIGINT"));
process.on("SIGTERM", () => stopServer("SIGTERM"));

server.on("exit", (code, signal) => {
  if (signal) {
    process.exit(0);
  }
  process.exit(code ?? 0);
});
