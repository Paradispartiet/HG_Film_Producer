from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected exactly one match, found {count}: {old!r}")
    p.write_text(text.replace(old, new, 1))

# Normalize one accidental hidden soft-hyphen in the new permanent theme key.
replace_once("src/core/chapterElevenNeighborsWifeExpansion.ts", '"sho­chiku_kamata"', '"shochiku_kamata"')

# Runtime Atlas wiring.
replace_once("src/ui/data/filmScenarios.ts", 'import { mergeChapterElevenApplauseExpansion } from "../../core/chapterElevenApplauseExpansion.js";\n', 'import { mergeChapterElevenApplauseExpansion } from "../../core/chapterElevenApplauseExpansion.js";\nimport { mergeChapterElevenNeighborsWifeExpansion } from "../../core/chapterElevenNeighborsWifeExpansion.js";\n')
replace_once("src/ui/data/filmScenarios.ts", "const modernCanonScenarios = mergeModernCanonExpansion(chapterElevenApplauseScenarios);", "const chapterElevenNeighborsWifeScenarios = mergeChapterElevenNeighborsWifeExpansion(chapterElevenApplauseScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterElevenNeighborsWifeScenarios);")
replace_once("src/ui/data/filmScenarios.ts", "+manual_chapter_eleven_applause_expansion_2026+manual_modern_indie_asian_prize_expansion_2026", "+manual_chapter_eleven_applause_expansion_2026+manual_chapter_eleven_neighbors_wife_expansion_2026+manual_modern_indie_asian_prize_expansion_2026")
replace_once("src/ui/data/filmScenarios.ts", "Chapter 11 The Jazz Singer, Blackmail, and Applause sound-transition expansions, modern independent/Asian/prize-cinema expansion", "Chapter 11 The Jazz Singer, Blackmail, Applause, and The Neighbor's Wife and Mine sound-transition expansions, modern independent/Asian/prize-cinema expansion")

# Film Study wiring.
replace_once("src/ui/data/scenarioFilmStudyMap.ts", 'import { applauseFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionApplause";\n', 'import { applauseFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionApplause";\nimport { neighborsWifeFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionNeighborsWife";\n')
replace_once("src/ui/data/scenarioFilmStudyMap.ts", "  [applauseFilmHistoryProfile.scenarioId]: applauseFilmHistoryProfile,\n", "  [applauseFilmHistoryProfile.scenarioId]: applauseFilmHistoryProfile,\n  [neighborsWifeFilmHistoryProfile.scenarioId]: neighborsWifeFilmHistoryProfile,\n")

# Production Verification wiring.
replace_once("src/ui/data/scenarioProductionVerificationRegistry.ts", 'import { applauseProductionCaseVerification } from "./scenarioProductionVerificationApplause";\n', 'import { applauseProductionCaseVerification } from "./scenarioProductionVerificationApplause";\nimport { neighborsWifeProductionCaseVerification } from "./scenarioProductionVerificationNeighborsWife";\n')
replace_once("src/ui/data/scenarioProductionVerificationRegistry.ts", "  applauseProductionCaseVerification,\n", "  applauseProductionCaseVerification,\n  neighborsWifeProductionCaseVerification,\n")

# Chapter 11 Atlas audit.
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 425;", "const EXPECTED_ATLAS_COUNT = 426;")
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", '  "chapterElevenApplauseExpansion.ts",\n', '  "chapterElevenApplauseExpansion.ts",\n  "chapterElevenNeighborsWifeExpansion.ts",\n')
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", '    title: "The Neighbor\'s Wife and Mine",\n    originalTitle: "Madamu to nyōbō",\n    year: 1931,\n    aliases: ["Madamu to Nyobo", "Madame and Wife", "マダムと女房"],\n    role: "anchor_film",\n    decisionIfMissing: "P0",\n', '    title: "The Neighbor\'s Wife and Mine",\n    originalTitle: "Madamu to nyōbō",\n    year: 1931,\n    aliases: ["Madamu to Nyobo", "Madame and Wife", "マダムと女房"],\n    role: "anchor_film",\n    decisionIfMissing: "P0",\n    expectedScenarioId: "scenario_the_neighbors_wife_and_mine_1931",\n')

# Global Production Case audit.
replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 425;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 425;", "const EXPECTED_PLAYABLE_SCENARIOS = 426;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 426;")
replace_once("scripts/production-case-rest-audit.mjs", '  "chapterElevenApplauseExpansion.ts",\n', '  "chapterElevenApplauseExpansion.ts",\n  "chapterElevenNeighborsWifeExpansion.ts",\n')

# Permanent Chapter 11 regression contract.
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", 'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "King Kong"];\nconst p0 = ["The Neighbor\'s Wife and Mine"];', 'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "The Neighbor\'s Wife and Mine", "King Kong"];\nconst p0: string[] = [];')
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 425;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 426;/);")
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", '  assert.match(audit, /expectedScenarioId: "scenario_applause_1929"/);\n', '  assert.match(audit, /expectedScenarioId: "scenario_applause_1929"/);\n  assert.match(audit, /expectedScenarioId: "scenario_the_neighbors_wife_and_mine_1931"/);\n')
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", "  assert.equal(resolved.atlas.expectedCount, 425);\n  assert.equal(resolved.atlas.actualCount, 425);", "  assert.equal(resolved.atlas.expectedCount, 426);\n  assert.equal(resolved.atlas.actualCount, 426);")
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", '  assert.equal(byTitle.get("Applause")?.scenarioId, "scenario_applause_1929");\n', '  assert.equal(byTitle.get("Applause")?.scenarioId, "scenario_applause_1929");\n  assert.equal(byTitle.get("The Neighbor\'s Wife and Mine")?.scenarioId, "scenario_the_neighbors_wife_and_mine_1931");\n')

print("The Neighbor's Wife and Mine materialization patches applied deterministically.")
