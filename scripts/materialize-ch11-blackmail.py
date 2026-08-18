from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected exactly one match, found {count}: {old!r}")
    p.write_text(text.replace(old, new, 1))


# Runtime Atlas wiring.
replace_once(
    "src/ui/data/filmScenarios.ts",
    'import { mergeChapterElevenJazzSingerExpansion } from "../../core/chapterElevenJazzSingerExpansion.js";\n',
    'import { mergeChapterElevenJazzSingerExpansion } from "../../core/chapterElevenJazzSingerExpansion.js";\nimport { mergeChapterElevenBlackmailExpansion } from "../../core/chapterElevenBlackmailExpansion.js";\n',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    "const modernCanonScenarios = mergeModernCanonExpansion(chapterElevenJazzSingerScenarios);",
    "const chapterElevenBlackmailScenarios = mergeChapterElevenBlackmailExpansion(chapterElevenJazzSingerScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterElevenBlackmailScenarios);",
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    "+manual_chapter_eleven_jazz_singer_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eleven_jazz_singer_expansion_2026+manual_chapter_eleven_blackmail_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    "Chapter 11 The Jazz Singer sound-transition expansion, modern independent/Asian/prize-cinema expansion",
    "Chapter 11 The Jazz Singer and Blackmail sound-transition expansions, modern independent/Asian/prize-cinema expansion",
)

# Film Study wiring.
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    'import { jazzSingerFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionJazzSinger";\n',
    'import { jazzSingerFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionJazzSinger";\nimport { blackmailFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionBlackmail";\n',
)
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    "  [jazzSingerFilmHistoryProfile.scenarioId]: jazzSingerFilmHistoryProfile,\n",
    "  [jazzSingerFilmHistoryProfile.scenarioId]: jazzSingerFilmHistoryProfile,\n  [blackmailFilmHistoryProfile.scenarioId]: blackmailFilmHistoryProfile,\n",
)

# Production Verification wiring.
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    'import { jazzSingerProductionCaseVerification } from "./scenarioProductionVerificationJazzSinger";\n',
    'import { jazzSingerProductionCaseVerification } from "./scenarioProductionVerificationJazzSinger";\nimport { blackmailProductionCaseVerification } from "./scenarioProductionVerificationBlackmail";\n',
)
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    "  jazzSingerProductionCaseVerification,\n",
    "  jazzSingerProductionCaseVerification,\n  blackmailProductionCaseVerification,\n",
)

# Chapter 11 Atlas audit: monotonic 423 -> 424 and P0 -> USE_EXISTING resolution.
replace_once(
    "scripts/film-history-chapter-eleven-atlas-audit.mjs",
    "const EXPECTED_ATLAS_COUNT = 423;",
    "const EXPECTED_ATLAS_COUNT = 424;",
)
replace_once(
    "scripts/film-history-chapter-eleven-atlas-audit.mjs",
    '  "chapterElevenJazzSingerExpansion.ts",\n',
    '  "chapterElevenJazzSingerExpansion.ts",\n  "chapterElevenBlackmailExpansion.ts",\n',
)
replace_once(
    "scripts/film-history-chapter-eleven-atlas-audit.mjs",
    '    title: "Blackmail",\n    originalTitle: "Blackmail",\n    year: 1929,\n    aliases: [],\n    role: "anchor_film",\n    decisionIfMissing: "P0",\n',
    '    title: "Blackmail",\n    originalTitle: "Blackmail",\n    year: 1929,\n    aliases: [],\n    role: "anchor_film",\n    decisionIfMissing: "P0",\n    expectedScenarioId: "scenario_blackmail_1929",\n',
)

# Global Production Case audit.
replace_once(
    "scripts/production-case-rest-audit.mjs",
    "const EXPECTED_PLAYABLE_SCENARIOS = 423;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 423;",
    "const EXPECTED_PLAYABLE_SCENARIOS = 424;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 424;",
)
replace_once(
    "scripts/production-case-rest-audit.mjs",
    '  "chapterElevenJazzSingerExpansion.ts",\n',
    '  "chapterElevenJazzSingerExpansion.ts",\n  "chapterElevenBlackmailExpansion.ts",\n',
)

# Permanent Chapter 11 regression contract.
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    'const useExisting = ["M", "City Lights", "The Jazz Singer", "King Kong"];\nconst p0 = ["Blackmail", "Applause", "The Neighbor\'s Wife and Mine"];',
    'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "King Kong"];\nconst p0 = ["Applause", "The Neighbor\'s Wife and Mine"];',
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 423;/);",
    "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 424;/);",
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    '  assert.match(audit, /expectedScenarioId: "scenario_the_jazz_singer_1927"/);\n',
    '  assert.match(audit, /expectedScenarioId: "scenario_the_jazz_singer_1927"/);\n  assert.match(audit, /expectedScenarioId: "scenario_blackmail_1929"/);\n',
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    "  assert.equal(resolved.atlas.expectedCount, 423);\n  assert.equal(resolved.atlas.actualCount, 423);",
    "  assert.equal(resolved.atlas.expectedCount, 424);\n  assert.equal(resolved.atlas.actualCount, 424);",
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    '  assert.equal(byTitle.get("Blackmail")?.scenarioId, null);',
    '  assert.equal(byTitle.get("Blackmail")?.scenarioId, "scenario_blackmail_1929");',
)

print("Blackmail materialization patches applied deterministically.")
