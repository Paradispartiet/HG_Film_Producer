from __future__ import annotations

import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def replace_once(relative: str, old: str, new: str) -> None:
    path = ROOT / relative
    text = path.read_text(encoding="utf-8")
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"{relative}: expected exactly one occurrence, found {count}: {old[:120]!r}")
    path.write_text(text.replace(old, new, 1), encoding="utf-8")


def require(relative: str, needle: str) -> None:
    text = (ROOT / relative).read_text(encoding="utf-8")
    if needle not in text:
        raise RuntimeError(f"{relative}: missing required text {needle!r}")


# The new case files must already be present before any registry mutation.
require("src/core/chapterElevenJazzSingerExpansion.ts", 'id: "scenario_the_jazz_singer_1927"')
require("src/core/chapterElevenJazzSingerExpansion.test.ts", 'scenario_the_jazz_singer_1927')
require("src/ui/data/scenarioFilmStudySoundTransitionJazzSinger.ts", 'scenarioId: "scenario_the_jazz_singer_1927"')
require("src/ui/data/scenarioProductionVerificationJazzSinger.ts", 'scenarioId: "scenario_the_jazz_singer_1927"')

# Runtime scenario wiring: append Chapter 11 after the completed Chapter 10 expansions,
# before later modern-canon balancing expansions.
replace_once(
    "src/ui/data/filmScenarios.ts",
    'import { mergeChapterTenHaxanExpansion } from "../../core/chapterTenHaxanExpansion.js";\nimport { mergeEastAsianAuteurExpansion }',
    'import { mergeChapterTenHaxanExpansion } from "../../core/chapterTenHaxanExpansion.js";\nimport { mergeChapterElevenJazzSingerExpansion } from "../../core/chapterElevenJazzSingerExpansion.js";\nimport { mergeEastAsianAuteurExpansion }',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    'const chapterTenHaxanScenarios = mergeChapterTenHaxanExpansion(chapterTenRedHeroineScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenHaxanScenarios);',
    'const chapterTenHaxanScenarios = mergeChapterTenHaxanExpansion(chapterTenRedHeroineScenarios);\nconst chapterElevenJazzSingerScenarios = mergeChapterElevenJazzSingerExpansion(chapterTenHaxanScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterElevenJazzSingerScenarios);',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    '+manual_chapter_ten_haxan_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
    '+manual_chapter_ten_haxan_expansion_2026+manual_chapter_eleven_jazz_singer_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    'Chapter 10 silent-cinemas expansion plus Laborer\'s Love, A Throw of Dice, Growth of the Soil, Orochi, The Red Heroine, and Häxan, modern independent/Asian/prize-cinema expansion',
    'Chapter 10 silent-cinemas expansion plus Laborer\'s Love, A Throw of Dice, Growth of the Soil, Orochi, The Red Heroine, and Häxan, Chapter 11 The Jazz Singer sound-transition expansion, modern independent/Asian/prize-cinema expansion',
)

# Film Study source-backed registry.
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    'import { haxanFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasHaxan";\n',
    'import { haxanFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasHaxan";\nimport { jazzSingerFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionJazzSinger";\n',
)
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    '  [haxanFilmHistoryProfile.scenarioId]: haxanFilmHistoryProfile,\n  scenario_the_machinist_2004:',
    '  [haxanFilmHistoryProfile.scenarioId]: haxanFilmHistoryProfile,\n  [jazzSingerFilmHistoryProfile.scenarioId]: jazzSingerFilmHistoryProfile,\n  scenario_the_machinist_2004:',
)

# Production Verification registry.
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    'import { haxanProductionCaseVerification } from "./scenarioProductionVerificationHaxan";\n',
    'import { haxanProductionCaseVerification } from "./scenarioProductionVerificationHaxan";\nimport { jazzSingerProductionCaseVerification } from "./scenarioProductionVerificationJazzSinger";\n',
)
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    '  haxanProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
    '  haxanProductionCaseVerification,\n  jazzSingerProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
)

# Permanent global Production Case audit: 422 -> 423 and include this expansion in
# the same deterministic reconstruction order used by runtime.
replace_once(
    "scripts/production-case-rest-audit.mjs",
    'const EXPECTED_PLAYABLE_SCENARIOS = 422;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 422;',
    'const EXPECTED_PLAYABLE_SCENARIOS = 423;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 423;',
)
replace_once(
    "scripts/production-case-rest-audit.mjs",
    '  "chapterTenHaxanExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterTenHaxanExpansion.ts",\n  "chapterElevenJazzSingerExpansion.ts",\n  "modernCanonExpansion.ts",',
)

# Chapter 11 audit: add the new expansion, require the exact scenario id, and move
# the Atlas baseline monotonically to 423. Classification becomes USE_EXISTING
# automatically because the canonical candidate now resolves exactly once.
replace_once(
    "scripts/film-history-chapter-eleven-atlas-audit.mjs",
    'const EXPECTED_ATLAS_COUNT = 422;',
    'const EXPECTED_ATLAS_COUNT = 423;',
)
replace_once(
    "scripts/film-history-chapter-eleven-atlas-audit.mjs",
    '  "chapterTenHaxanExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterTenHaxanExpansion.ts",\n  "chapterElevenJazzSingerExpansion.ts",\n  "modernCanonExpansion.ts",',
)
replace_once(
    "scripts/film-history-chapter-eleven-atlas-audit.mjs",
    '    decisionIfMissing: "P0",\n    chapterFunction: "Warner Bros.\' Vitaphone part-talkie makes sound-on-disc synchronization, theatre wiring, music-and-dialogue bursts, industrial adoption and blackface/Jewish-performance ethics unavoidable production questions.",',
    '    decisionIfMissing: "P0",\n    expectedScenarioId: "scenario_the_jazz_singer_1927",\n    chapterFunction: "Warner Bros.\' Vitaphone part-talkie makes sound-on-disc synchronization, theatre wiring, music-and-dialogue bursts, industrial adoption and blackface/Jewish-performance ethics unavoidable production questions.",',
)

# Permanent Chapter 11 contract: lock 423, Jazz Singer's canonical id, and the
# remaining exact case queue. Historical objects and safeguards stay unchanged.
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    'const useExisting = ["M", "City Lights", "King Kong"];\nconst p0 = ["The Jazz Singer", "Blackmail", "Applause", "The Neighbor\'s Wife and Mine"];',
    'const useExisting = ["M", "City Lights", "The Jazz Singer", "King Kong"];\nconst p0 = ["Blackmail", "Applause", "The Neighbor\'s Wife and Mine"];',
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 422;/);',
    '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 423;/);\n  assert.match(audit, /expectedScenarioId: "scenario_the_jazz_singer_1927"/);',
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    '  assert.equal(resolved.atlas.expectedCount, 422);\n  assert.equal(resolved.atlas.actualCount, 422);',
    '  assert.equal(resolved.atlas.expectedCount, 423);\n  assert.equal(resolved.atlas.actualCount, 423);',
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    '  assert.equal(byTitle.get("The Jazz Singer")?.scenarioId, null);',
    '  assert.equal(byTitle.get("The Jazz Singer")?.scenarioId, "scenario_the_jazz_singer_1927");',
)

# Generate the canonical resolved report from the patched permanent audit.
subprocess.run(["node", "scripts/film-history-chapter-eleven-atlas-audit.mjs"], cwd=ROOT, check=True)

resolved = json.loads((ROOT / "docs/film-history-chapter-eleven-atlas-resolved.json").read_text(encoding="utf-8"))
if resolved["atlas"]["expectedCount"] != 423 or resolved["atlas"]["actualCount"] != 423:
    raise RuntimeError(f"Chapter 11 Atlas did not resolve to 423/423: {resolved['atlas']}")
if resolved["byDecision"]["USE_EXISTING"] != ["M", "City Lights", "The Jazz Singer", "King Kong"]:
    raise RuntimeError(f"Unexpected USE_EXISTING: {resolved['byDecision']['USE_EXISTING']}")
if resolved["byDecision"]["P0"] != ["Blackmail", "Applause", "The Neighbor's Wife and Mine"]:
    raise RuntimeError(f"Unexpected P0: {resolved['byDecision']['P0']}")
if resolved["byDecision"]["P1"] != ["The Broadway Melody", "Sous les toits de Paris", "Enthusiasm", "The Blue Angel"]:
    raise RuntimeError(f"Unexpected P1: {resolved['byDecision']['P1']}")
by_title = {item["title"]: item for item in resolved["candidates"]}
if by_title["The Jazz Singer"]["scenarioId"] != "scenario_the_jazz_singer_1927":
    raise RuntimeError("The Jazz Singer did not resolve to canonical scenario id")

# The full repository verification is the commit gate, not a partial local test.
subprocess.run(["npm", "run", "verify:v0.1"], cwd=ROOT, check=True)

# Remove one-shot machinery before the successful permanent commit.
workflow = ROOT / ".github" / "workflows" / "ch11-jazz-singer-materialize.yml"
materializer = ROOT / "scripts" / "materialize-ch11-jazz-singer.py"
if workflow.exists():
    workflow.unlink()
if materializer.exists():
    materializer.unlink()

subprocess.run(["git", "config", "user.name", "github-actions[bot]"], cwd=ROOT, check=True)
subprocess.run(["git", "config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com"], cwd=ROOT, check=True)
subprocess.run(["git", "add", "-A"], cwd=ROOT, check=True)
status = subprocess.run(["git", "status", "--porcelain"], cwd=ROOT, check=True, capture_output=True, text=True).stdout
if not status.strip():
    raise RuntimeError("Materializer produced no permanent changes")
subprocess.run(["git", "commit", "-m", "Materialize The Jazz Singer Chapter 11 Production Case"], cwd=ROOT, check=True)
subprocess.run(["git", "push", "origin", "HEAD:agent/ch11-jazz-singer-production-case"], cwd=ROOT, check=True)
