from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected exactly one match, found {count}: {old!r}")
    p.write_text(text.replace(old, new, 1))

# Runtime Atlas wiring.
replace_once("src/ui/data/filmScenarios.ts", 'import { mergeChapterElevenBlackmailExpansion } from "../../core/chapterElevenBlackmailExpansion.js";\n', 'import { mergeChapterElevenBlackmailExpansion } from "../../core/chapterElevenBlackmailExpansion.js";\nimport { mergeChapterElevenApplauseExpansion } from "../../core/chapterElevenApplauseExpansion.js";\n')
replace_once("src/ui/data/filmScenarios.ts", "const modernCanonScenarios = mergeModernCanonExpansion(chapterElevenBlackmailScenarios);", "const chapterElevenApplauseScenarios = mergeChapterElevenApplauseExpansion(chapterElevenBlackmailScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterElevenApplauseScenarios);")
replace_once("src/ui/data/filmScenarios.ts", "+manual_chapter_eleven_blackmail_expansion_2026+manual_modern_indie_asian_prize_expansion_2026", "+manual_chapter_eleven_blackmail_expansion_2026+manual_chapter_eleven_applause_expansion_2026+manual_modern_indie_asian_prize_expansion_2026")
replace_once("src/ui/data/filmScenarios.ts", "Chapter 11 The Jazz Singer and Blackmail sound-transition expansions, modern independent/Asian/prize-cinema expansion", "Chapter 11 The Jazz Singer, Blackmail, and Applause sound-transition expansions, modern independent/Asian/prize-cinema expansion")

# Film Study wiring.
replace_once("src/ui/data/scenarioFilmStudyMap.ts", 'import { blackmailFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionBlackmail";\n', 'import { blackmailFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionBlackmail";\nimport { applauseFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionApplause";\n')
replace_once("src/ui/data/scenarioFilmStudyMap.ts", "  [blackmailFilmHistoryProfile.scenarioId]: blackmailFilmHistoryProfile,\n", "  [blackmailFilmHistoryProfile.scenarioId]: blackmailFilmHistoryProfile,\n  [applauseFilmHistoryProfile.scenarioId]: applauseFilmHistoryProfile,\n")

# Production Verification wiring.
replace_once("src/ui/data/scenarioProductionVerificationRegistry.ts", 'import { blackmailProductionCaseVerification } from "./scenarioProductionVerificationBlackmail";\n', 'import { blackmailProductionCaseVerification } from "./scenarioProductionVerificationBlackmail";\nimport { applauseProductionCaseVerification } from "./scenarioProductionVerificationApplause";\n')
replace_once("src/ui/data/scenarioProductionVerificationRegistry.ts", "  blackmailProductionCaseVerification,\n", "  blackmailProductionCaseVerification,\n  applauseProductionCaseVerification,\n")

# Chapter 11 Atlas audit.
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 424;", "const EXPECTED_ATLAS_COUNT = 425;")
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", '  "chapterElevenBlackmailExpansion.ts",\n', '  "chapterElevenBlackmailExpansion.ts",\n  "chapterElevenApplauseExpansion.ts",\n')
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", '    title: "Applause",\n    originalTitle: "Applause",\n    year: 1929,\n    aliases: [],\n    role: "anchor_film",\n    decisionIfMissing: "P0",\n', '    title: "Applause",\n    originalTitle: "Applause",\n    year: 1929,\n    aliases: [],\n    role: "anchor_film",\n    decisionIfMissing: "P0",\n    expectedScenarioId: "scenario_applause_1929",\n')

# Global Production Case audit.
replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 424;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 424;", "const EXPECTED_PLAYABLE_SCENARIOS = 425;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 425;")
replace_once("scripts/production-case-rest-audit.mjs", '  "chapterElevenBlackmailExpansion.ts",\n', '  "chapterElevenBlackmailExpansion.ts",\n  "chapterElevenApplauseExpansion.ts",\n')

# Permanent Chapter 11 regression contract.
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", 'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "King Kong"];\nconst p0 = ["Applause", "The Neighbor\'s Wife and Mine"];', 'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "King Kong"];\nconst p0 = ["The Neighbor\'s Wife and Mine"];')
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 424;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 425;/);")
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", '  assert.match(audit, /expectedScenarioId: "scenario_blackmail_1929"/);\n', '  assert.match(audit, /expectedScenarioId: "scenario_blackmail_1929"/);\n  assert.match(audit, /expectedScenarioId: "scenario_applause_1929"/);\n')
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", "  assert.equal(resolved.atlas.expectedCount, 424);\n  assert.equal(resolved.atlas.actualCount, 424);", "  assert.equal(resolved.atlas.expectedCount, 425);\n  assert.equal(resolved.atlas.actualCount, 425);")
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", '  assert.equal(byTitle.get("Blackmail")?.scenarioId, "scenario_blackmail_1929");\n', '  assert.equal(byTitle.get("Blackmail")?.scenarioId, "scenario_blackmail_1929");\n  assert.equal(byTitle.get("Applause")?.scenarioId, "scenario_applause_1929");\n')

print("Applause materialization patches applied deterministically.")
