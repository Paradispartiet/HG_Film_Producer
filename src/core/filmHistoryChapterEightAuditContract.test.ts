import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-eight-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-eight-atlas-resolved.json", "utf8")) as {
  byDecision: Record<string, string[]>;
  recommendedNewProductionCases: string[];
};
const packageJson = readFileSync("package.json", "utf8");

test("Chapter 8 audit locks the reviewed French avant-garde Production Case matrix", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 405;/);
  assert.match(audit, /number: 8,/);
  assert.match(audit, /title: "French Impressionism, Surrealism and the avant-gardes"/);
  assert.match(audit, /period: "1918–1930"/);

  assert.match(audit, /USE_EXISTING: \["The Passion of Joan of Arc"\]/);
  assert.match(audit, /P0: \["Cœur fidèle", "Napoléon", "Un Chien Andalou"\]/);
  assert.match(audit, /P1: \["Entr'acte", "The Smiling Madame Beudet"\]/);
  assert.match(audit, /P2: \["Ballet mécanique", "Emak-Bakia", "L'Inhumaine", "L'Âge d'Or", "L'Étoile de mer", "La Coquille et le Clergyman", "La Roue", "Ménilmontant", "The Fall of the House of Usher"\]/);

  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["The Passion of Joan of Arc"]);
  assert.deepEqual(resolved.byDecision.P0, ["Cœur fidèle", "Napoléon", "Un Chien Andalou"]);
  assert.deepEqual(resolved.byDecision.P1, ["The Smiling Madame Beudet", "Entr'acte"]);
  assert.deepEqual(resolved.recommendedNewProductionCases, ["Cœur fidèle", "Napoléon", "Un Chien Andalou", "The Smiling Madame Beudet", "Entr'acte"]);

  assert.match(audit, /Photogénie is a contested critical concept, not a camera preset/);
  assert.match(audit, /Gender, authorship and unequal canon formation/);
  assert.match(audit, /Historical analysis does not turn dangerous or exploitative acts into player objectives/);
  assert.match(audit, /Modern runtimes, music and reconstructed versions must remain distinct from original production and exhibition states/);

  assert.match(packageJson, /"audit:film-history-ch8": "node scripts\/film-history-chapter-eight-atlas-audit\.mjs"/);
  assert.match(packageJson, /npm run audit:film-history-ch7 && npm run audit:film-history-ch8 && npm run typecheck/);
});
