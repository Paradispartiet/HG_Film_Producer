import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-nine-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-nine-atlas-resolved.json", "utf8")) as {
  byDecision: Record<string, string[]>;
  recommendedNewProductionCases: string[];
  historicalObjects: Array<{ label: string; atlasDecision: string }>;
  boundaryNotes: string[];
  safeguards: string[];
};
const packageJson = readFileSync("package.json", "utf8");

test("Chapter 9 audit locks the reviewed Soviet montage Production Case matrix", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 410;/);
  assert.match(audit, /number: 9,/);
  assert.match(audit, /title: "Revolution and Soviet Montage"/);
  assert.match(audit, /period: "1917–1930"/);

  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["Battleship Potemkin", "Man with a Movie Camera"]);
  assert.deepEqual(resolved.byDecision.P0, ["Mother", "The Fall of the Romanov Dynasty", "Earth"]);
  assert.deepEqual(resolved.byDecision.P1, ["October", "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks"]);
  assert.deepEqual(resolved.recommendedNewProductionCases, [
    "Mother",
    "The Fall of the Romanov Dynasty",
    "Earth",
    "October",
    "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks",
  ]);
  assert.deepEqual(resolved.byDecision.P2, [
    "Strike",
    "The General Line",
    "The End of St. Petersburg",
    "Storm over Asia",
    "By the Law",
    "Kino-Eye",
    "A Sixth Part of the World",
    "The Eleventh Year",
    "Zvenigora",
    "Arsenal",
    "The Great Road",
    "The New Babylon",
    "Bed and Sofa",
    "Fragment of an Empire",
  ]);

  assert.equal(resolved.historicalObjects.length, 10);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), [
    "Kuleshov workshop, VGIK and the Kuleshov effect",
    "Competing montage theories: collision, linkage, intervals and intellectual montage",
    "Nationalization, Narkompros, Goskino, Sovkino and Mezhrabpom production institutions",
    "Agit-trains, agit-trucks, newsreels and mobile exhibition",
    "Proletkult, theatre of attractions, constructivism and FEKS",
    "Kino-Pravda, kino-eye and collective documentary labor",
    "VUFKU and Ukrainian Soviet cinema",
    "State commissions, censorship and political recutting",
    "Import re-editing, film-stock scarcity and archival reuse",
    "Propaganda, collectivization, violence and historical hindsight",
  ]);
});

test("Chapter 9 audit permanently preserves theory, Ukrainian, archival and political safeguards", () => {
  assert.ok(resolved.safeguards.some((item) => item.includes("Kuleshov effect") && item.includes("not a universal viewer-response formula")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Eisenstein collision") && item.includes("Pudovkin linkage") && item.includes("Vertov")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Soviet does not mean Russian") && item.includes("VUFKU")));
  assert.ok(resolved.safeguards.some((item) => item.includes("never rewards falsifying evidence") && item.includes("political violence")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Esfir Shub") && item.includes("authorship")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Enthusiasm") && item.includes("sound-transition chapter")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Odessa Steps") && item.includes("not treated as neutral documentary footage")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Earth") && item.includes("Holodomor") && item.includes("not back-projected")));
});

test("Chapter 9 audit is permanent in the v0.1 verification chain", () => {
  assert.match(packageJson, /"audit:film-history-ch9": "node scripts\/film-history-chapter-nine-atlas-audit\.mjs"/);
  assert.match(packageJson, /npm run audit:film-history-ch8 && npm run audit:film-history-ch9 && npm run typecheck/);
});
