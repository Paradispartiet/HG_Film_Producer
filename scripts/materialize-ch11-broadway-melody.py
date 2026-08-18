from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected exactly one match, found {count}: {old!r}")
    p.write_text(text.replace(old, new, 1))

# Runtime Atlas wiring.
replace_once("src/ui/data/filmScenarios.ts", 'import { mergeChapterElevenNeighborsWifeExpansion } from "../../core/chapterElevenNeighborsWifeExpansion.js";\n', 'import { mergeChapterElevenNeighborsWifeExpansion } from "../../core/chapterElevenNeighborsWifeExpansion.js";\nimport { mergeChapterElevenBroadwayMelodyExpansion } from "../../core/chapterElevenBroadwayMelodyExpansion.js";\n')
replace_once("src/ui/data/filmScenarios.ts", "const modernCanonScenarios = mergeModernCanonExpansion(chapterElevenNeighborsWifeScenarios);", "const chapterElevenBroadwayMelodyScenarios = mergeChapterElevenBroadwayMelodyExpansion(chapterElevenNeighborsWifeScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterElevenBroadwayMelodyScenarios);")
replace_once("src/ui/data/filmScenarios.ts", "+manual_chapter_eleven_neighbors_wife_expansion_2026+manual_modern_indie_asian_prize_expansion_2026", "+manual_chapter_eleven_neighbors_wife_expansion_2026+manual_chapter_eleven_broadway_melody_expansion_2026+manual_modern_indie_asian_prize_expansion_2026")
replace_once("src/ui/data/filmScenarios.ts", "Chapter 11 The Jazz Singer, Blackmail, Applause, and The Neighbor's Wife and Mine sound-transition expansions, modern independent/Asian/prize-cinema expansion", "Chapter 11 The Jazz Singer, Blackmail, Applause, The Neighbor's Wife and Mine, and The Broadway Melody sound-transition expansions, modern independent/Asian/prize-cinema expansion")

# Film Study wiring.
replace_once("src/ui/data/scenarioFilmStudyMap.ts", 'import { neighborsWifeFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionNeighborsWife";\n', 'import { neighborsWifeFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionNeighborsWife";\nimport { broadwayMelodyFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionBroadwayMelody";\n')
replace_once("src/ui/data/scenarioFilmStudyMap.ts", "  [neighborsWifeFilmHistoryProfile.scenarioId]: neighborsWifeFilmHistoryProfile,\n", "  [neighborsWifeFilmHistoryProfile.scenarioId]: neighborsWifeFilmHistoryProfile,\n  [broadwayMelodyFilmHistoryProfile.scenarioId]: broadwayMelodyFilmHistoryProfile,\n")

# Production Verification wiring.
replace_once("src/ui/data/scenarioProductionVerificationRegistry.ts", 'import { neighborsWifeProductionCaseVerification } from "./scenarioProductionVerificationNeighborsWife";\n', 'import { neighborsWifeProductionCaseVerification } from "./scenarioProductionVerificationNeighborsWife";\nimport { broadwayMelodyProductionCaseVerification } from "./scenarioProductionVerificationBroadwayMelody";\n')
replace_once("src/ui/data/scenarioProductionVerificationRegistry.ts", "  neighborsWifeProductionCaseVerification,\n", "  neighborsWifeProductionCaseVerification,\n  broadwayMelodyProductionCaseVerification,\n")

# Chapter 11 Atlas audit.
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 426;", "const EXPECTED_ATLAS_COUNT = 427;")
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", '  "chapterElevenNeighborsWifeExpansion.ts",\n', '  "chapterElevenNeighborsWifeExpansion.ts",\n  "chapterElevenBroadwayMelodyExpansion.ts",\n')
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", '    title: "The Broadway Melody",\n    originalTitle: "The Broadway Melody",\n    year: 1929,\n    aliases: ["Broadway Melody"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n', '    title: "The Broadway Melody",\n    originalTitle: "The Broadway Melody",\n    year: 1929,\n    aliases: ["Broadway Melody"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n    expectedScenarioId: "scenario_the_broadway_melody_1929",\n')

# Global Production Case audit.
replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 426;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 426;", "const EXPECTED_PLAYABLE_SCENARIOS = 427;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 427;")
replace_once("scripts/production-case-rest-audit.mjs", '  "chapterElevenNeighborsWifeExpansion.ts",\n', '  "chapterElevenNeighborsWifeExpansion.ts",\n  "chapterElevenBroadwayMelodyExpansion.ts",\n')

# Permanent Chapter 11 regression contract.
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", 'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "The Neighbor\'s Wife and Mine", "King Kong"];\nconst p0: string[] = [];\nconst p1 = ["The Broadway Melody", "Sous les toits de Paris", "Enthusiasm", "The Blue Angel"];', 'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "The Neighbor\'s Wife and Mine", "The Broadway Melody", "King Kong"];\nconst p0: string[] = [];\nconst p1 = ["Sous les toits de Paris", "Enthusiasm", "The Blue Angel"];')
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 426;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 427;/);")
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", '  assert.match(audit, /expectedScenarioId: "scenario_the_neighbors_wife_and_mine_1931"/);\n', '  assert.match(audit, /expectedScenarioId: "scenario_the_neighbors_wife_and_mine_1931"/);\n  assert.match(audit, /expectedScenarioId: "scenario_the_broadway_melody_1929"/);\n')
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", "  assert.equal(resolved.atlas.expectedCount, 426);\n  assert.equal(resolved.atlas.actualCount, 426);", "  assert.equal(resolved.atlas.expectedCount, 427);\n  assert.equal(resolved.atlas.actualCount, 427);")
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", '  assert.equal(byTitle.get("The Neighbor\'s Wife and Mine")?.scenarioId, "scenario_the_neighbors_wife_and_mine_1931");\n', '  assert.equal(byTitle.get("The Neighbor\'s Wife and Mine")?.scenarioId, "scenario_the_neighbors_wife_and_mine_1931");\n  assert.equal(byTitle.get("The Broadway Melody")?.scenarioId, "scenario_the_broadway_melody_1929");\n')

print("The Broadway Melody materialization patches applied deterministically.")
