#!/usr/bin/env node
/** Prevent accidental reintroduction of typed gameplay answers across Filmverket. */
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = "src/ui/components";
const components = readdirSync(root).filter((name) => name.endsWith(".tsx"));
const allowedInputTypes = new Set(["radio", "checkbox", "search", "file"]);
let totalInputs = 0;
let backupTextareas = 0;
for (const filename of components) {
  const source = readFileSync(join(root, filename), "utf8");
  assert.ok(!/contentEditable\s*=\s*\{?true/.test(source), `${filename}: editable content not allowed`);
  const textareas = [...source.matchAll(/<textarea\b[\s\S]*?\/>/g)];
  if (filename === "FilmScenarioLibrary.tsx") {
    assert.equal(textareas.length, 2, "Only the existing optional backup import and readonly export may use textareas");
    assert.ok(textareas.some(([tag]) => tag.includes("importJson")), "Expected optional JSON backup import");
    assert.ok(textareas.some(([tag]) => tag.includes("readOnly")), "Expected readonly backup export");
    backupTextareas += textareas.length;
  } else {
    assert.equal(textareas.length, 0, `${filename}: no typed answers or textareas in the game`);
  }

  const inputs = [...source.matchAll(/<input\b[\s\S]*?\/>/g)];
  for (const [tag] of inputs) {
    totalInputs += 1;
    const match = tag.match(/\btype\s*=\s*["']([^"']+)["']/);
    assert.ok(match, `${filename}: input must have explicit type`);
    assert.ok(allowedInputTypes.has(match[1]), `${filename}: unexpected free-text input: ${match[1]}`);
  }
}
assert.ok(components.length >= 70, "Unexpectedly incomplete component scan");
console.log(`Choice-only audit passed: ${components.length} components, ${totalInputs} permitted radio/checkbox/search controls, ${backupTextareas} backup-only textareas`);
