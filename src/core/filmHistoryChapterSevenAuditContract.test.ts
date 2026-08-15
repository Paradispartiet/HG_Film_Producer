import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-seven-atlas-audit.mjs", "utf8");
const packageJson = readFileSync("package.json", "utf8");

test("Chapter 7 audit locks the reviewed Weimar production-case matrix", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 403;/);
  assert.match(audit, /number: 7,/);
  assert.match(audit, /title: "Weimar cinema and Expressionism"/);
  assert.match(audit, /period: "1919–1929"/);

  assert.match(audit, /USE_EXISTING: \["Metropolis", "Nosferatu", "The Cabinet of Dr\. Caligari"\]/);
  assert.match(audit, /P0: \["The Last Laugh"\]/);
  assert.match(audit, /P1: \["Pandora's Box"\]/);
  assert.match(audit, /P2: \["Asphalt", "Diary of a Lost Girl", "Die Nibelungen", "Dr\. Mabuse, the Gambler", "Faust", "The Joyless Street", "Variety", "Warning Shadows"\]/);

  assert.match(audit, /Kammerspielfilm and the unchained-camera problem are explicit canonical Chapter 7 requirements/);
  assert.match(audit, /Weimar cinema cannot be reduced to Expressionist horror/);
  assert.match(audit, /Expressionism is a historical tendency, not one reproducible preset/);
  assert.match(audit, /Transatlantic circulation of Weimar labor and style/);

  assert.match(packageJson, /"audit:film-history-ch7": "node scripts\/film-history-chapter-seven-atlas-audit\.mjs"/);
  assert.match(packageJson, /npm run audit:film-history-ch6 && npm run audit:film-history-ch7 && npm run typecheck/);
});
