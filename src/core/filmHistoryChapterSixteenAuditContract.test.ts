import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-sixteen-atlas-audit.mjs", "utf8");
const packageJson = readFileSync("package.json", "utf8");

test("Chapter 16 audit locks the 1980s franchise-video-global-new-cinemas scope", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 448;/);
  assert.match(audit, /number: 16/);
  assert.match(audit, /id: "franchise-video-global-new-cinemas"/);
  assert.match(audit, /title: "Franchise consolidation, video and global new cinemas"/);
  assert.match(audit, /period: "1980–1989"/);
});

test("Chapter 16 keeps plural production systems and downstream media history explicit", () => {
  assert.match(audit, /Franchise, sequel and intellectual-property consolidation/);
  assert.match(audit, /Home video, cable and the expanding aftermarket/);
  assert.match(audit, /Broadcast finance and new British production institutions/);
  assert.match(audit, /American independent and specialty-distribution ecology/);
  assert.match(audit, /Mainland Chinese, Hong Kong and Taiwan transformations/);
  assert.match(audit, /African and transnational co-production circuits/);
  assert.match(audit, /Home video, cable and alternate cuts are downstream circulation layers/);
});

test("Chapter 16 audit is permanent in the v0.1 verification chain", () => {
  assert.match(packageJson, /"audit:film-history-ch16": "node scripts\\/film-history-chapter-sixteen-atlas-audit\\.mjs"/);
  assert.match(packageJson, /npm run audit:film-history-ch15 && npm run audit:film-history-ch16/);
});
