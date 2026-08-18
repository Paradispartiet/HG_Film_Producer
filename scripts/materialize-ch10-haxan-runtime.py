from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text()
    if old not in text:
        raise SystemExit(f"missing expected text in {path}: {old[:120]!r}")
    if text.count(old) != 1:
        raise SystemExit(f"expected exactly one match in {path}, found {text.count(old)}")
    p.write_text(text.replace(old, new, 1))

# Runtime scenario chain.
replace_once(
    "src/ui/data/filmScenarios.ts",
    'import { mergeChapterTenRedHeroineExpansion } from "../../core/chapterTenRedHeroineExpansion.js";\n',
    'import { mergeChapterTenRedHeroineExpansion } from "../../core/chapterTenRedHeroineExpansion.js";\nimport { mergeChapterTenHaxanExpansion } from "../../core/chapterTenHaxanExpansion.js";\n',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    'const chapterTenRedHeroineScenarios = mergeChapterTenRedHeroineExpansion(chapterTenOrochiScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenRedHeroineScenarios);',
    'const chapterTenRedHeroineScenarios = mergeChapterTenRedHeroineExpansion(chapterTenOrochiScenarios);\nconst chapterTenHaxanScenarios = mergeChapterTenHaxanExpansion(chapterTenRedHeroineScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenHaxanScenarios);',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    '+manual_chapter_ten_red_heroine_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
    '+manual_chapter_ten_red_heroine_expansion_2026+manual_chapter_ten_haxan_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    "Chapter 10 silent-cinemas expansion plus Laborer's Love, A Throw of Dice, Growth of the Soil, Orochi, and The Red Heroine, modern independent/Asian/prize-cinema expansion",
    "Chapter 10 silent-cinemas expansion plus Laborer's Love, A Throw of Dice, Growth of the Soil, Orochi, The Red Heroine, and Häxan, modern independent/Asian/prize-cinema expansion",
)

# Film Study profile wiring.
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    'import { redHeroineFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasRedHeroine";\n',
    'import { redHeroineFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasRedHeroine";\nimport { haxanFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasHaxan";\n',
)
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    '  [redHeroineFilmHistoryProfile.scenarioId]: redHeroineFilmHistoryProfile,\n',
    '  [redHeroineFilmHistoryProfile.scenarioId]: redHeroineFilmHistoryProfile,\n  [haxanFilmHistoryProfile.scenarioId]: haxanFilmHistoryProfile,\n',
)

# Production Verification registry wiring.
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    'import { redHeroineProductionCaseVerification } from "./scenarioProductionVerificationRedHeroine";\n',
    'import { redHeroineProductionCaseVerification } from "./scenarioProductionVerificationRedHeroine";\nimport { haxanProductionCaseVerification } from "./scenarioProductionVerificationHaxan";\n',
)
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    '  redHeroineProductionCaseVerification,\n',
    '  redHeroineProductionCaseVerification,\n  haxanProductionCaseVerification,\n',
)

print("Materialized Häxan runtime wiring")
