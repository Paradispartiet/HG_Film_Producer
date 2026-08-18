from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected exactly one match, found {count}: {old!r}")
    p.write_text(text.replace(old, new, 1))

# Runtime Atlas wiring.
replace_once("src/ui/data/filmScenarios.ts", 'import { mergeChapterElevenBroadwayMelodyExpansion } from "../../core/chapterElevenBroadwayMelodyExpansion.js";\n', 'import { mergeChapterElevenBroadwayMelodyExpansion } from "../../core/chapterElevenBroadwayMelodyExpansion.js";\nimport { mergeChapterElevenSousLesToitsExpansion } from "../../core/chapterElevenSousLesToitsExpansion.js";\n')
replace_once("src/ui/data/filmScenarios.ts", "const modernCanonScenarios = mergeModernCanonExpansion(chapterElevenBroadwayMelodyScenarios);", "const chapterElevenSousLesToitsScenarios = mergeChapterElevenSousLesToitsExpansion(chapterElevenBroadwayMelodyScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterElevenSousLesToitsScenarios);")
replace_once("src/ui/data/filmScenarios.ts", "+manual_chapter_eleven_broadway_melody_expansion_2026+manual_modern_indie_asian_prize_expansion_2026", "+manual_chapter_eleven_broadway_melody_expansion_2026+manual_chapter_eleven_sous_les_toits_expansion_2026+manual_modern_indie_asian_prize_expansion_2026")
replace_once("src/ui/data/filmScenarios.ts", "Chapter 11 The Jazz Singer, Blackmail, Applause, The Neighbor's Wife and Mine, and The Broadway Melody sound-transition expansions, modern independent/Asian/prize-cinema expansion", "Chapter 11 The Jazz Singer, Blackmail, Applause, The Neighbor's Wife and Mine, The Broadway Melody, and Sous les toits de Paris sound-transition expansions, modern independent/Asian/prize-cinema expansion")

# Film Study wiring.
replace_once("src/ui/data/scenarioFilmStudyMap.ts", 'import { broadwayMelodyFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionBroadwayMelody";\n', 'import { broadwayMelodyFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionBroadwayMelody";\nimport { sousLesToitsFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionSousLesToits";\n')
replace_once("src/ui/data/scenarioFilmStudyMap.ts", "  [broadwayMelodyFilmHistoryProfile.scenarioId]: broadwayMelodyFilmHistoryProfile,\n", "  [broadwayMelodyFilmHistoryProfile.scenarioId]: broadwayMelodyFilmHistoryProfile,\n  [sousLesToitsFilmHistoryProfile.scenarioId]: sousLesToitsFilmHistoryProfile,\n")

# Production Verification wiring.
replace_once("src/ui/data/scenarioProductionVerificationRegistry.ts", 'import { broadwayMelodyProductionCaseVerification } from "./scenarioProductionVerificationBroadwayMelody";\n', 'import { broadwayMelodyProductionCaseVerification } from "./scenarioProductionVerificationBroadwayMelody";\nimport { sousLesToitsProductionCaseVerification } from "./scenarioProductionVerificationSousLesToits";\n')
replace_once("src/ui/data/scenarioProductionVerificationRegistry.ts", "  broadwayMelodyProductionCaseVerification,\n", "  broadwayMelodyProductionCaseVerification,\n  sousLesToitsProductionCaseVerification,\n")

# Chapter 11 audit.
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 427;", "const EXPECTED_ATLAS_COUNT = 428;")
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", '  "chapterElevenBroadwayMelodyExpansion.ts",\n', '  "chapterElevenBroadwayMelodyExpansion.ts",\n  "chapterElevenSousLesToitsExpansion.ts",\n')
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", '    title: "Sous les toits de Paris",\n    originalTitle: "Sous les toits de Paris",\n    year: 1930,\n    aliases: ["Under the Roofs of Paris"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n', '    title: "Sous les toits de Paris",\n    originalTitle: "Sous les toits de Paris",\n    year: 1930,\n    aliases: ["Under the Roofs of Paris"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n    expectedScenarioId: "scenario_sous_les_toits_de_paris_1930",\n')

# Global Production Case audit.
replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 427;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 427;", "const EXPECTED_PLAYABLE_SCENARIOS = 428;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 428;")
replace_once("scripts/production-case-rest-audit.mjs", '  "chapterElevenBroadwayMelodyExpansion.ts",\n', '  "chapterElevenBroadwayMelodyExpansion.ts",\n  "chapterElevenSousLesToitsExpansion.ts",\n')

# Permanent Chapter 11 contract.
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", 'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "The Neighbor\'s Wife and Mine", "The Broadway Melody", "King Kong"];\nconst p0: string[] = [];\nconst p1 = ["Sous les toits de Paris", "Enthusiasm", "The Blue Angel"];', 'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "The Neighbor\'s Wife and Mine", "The Broadway Melody", "Sous les toits de Paris", "King Kong"];\nconst p0: string[] = [];\nconst p1 = ["Enthusiasm", "The Blue Angel"];')
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 427;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 428;/);")
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", '  assert.match(audit, /expectedScenarioId: "scenario_the_broadway_melody_1929"/);\n', '  assert.match(audit, /expectedScenarioId: "scenario_the_broadway_melody_1929"/);\n  assert.match(audit, /expectedScenarioId: "scenario_sous_les_toits_de_paris_1930"/);\n')
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", "  assert.equal(resolved.atlas.expectedCount, 427);\n  assert.equal(resolved.atlas.actualCount, 427);", "  assert.equal(resolved.atlas.expectedCount, 428);\n  assert.equal(resolved.atlas.actualCount, 428);")
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", '  assert.equal(byTitle.get("The Broadway Melody")?.scenarioId, "scenario_the_broadway_melody_1929");\n', '  assert.equal(byTitle.get("The Broadway Melody")?.scenarioId, "scenario_the_broadway_melody_1929");\n  assert.equal(byTitle.get("Sous les toits de Paris")?.scenarioId, "scenario_sous_les_toits_de_paris_1930");\n')

print("Sous les toits de Paris materialization patches applied deterministically.")
