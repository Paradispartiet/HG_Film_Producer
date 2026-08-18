from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def r(path, old, new):
    p = ROOT / path
    s = p.read_text(encoding="utf-8")
    if s.count(old) != 1:
        raise RuntimeError(f"match count for {path}: {s.count(old)}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

r("src/ui/data/filmScenarios.ts",
  'import { mergeChapterTenOrochiExpansion } from "../../core/chapterTenOrochiExpansion.js";\n',
  'import { mergeChapterTenOrochiExpansion } from "../../core/chapterTenOrochiExpansion.js";\nimport { mergeChapterTenRedHeroineExpansion } from "../../core/chapterTenRedHeroineExpansion.js";\n')
r("src/ui/data/filmScenarios.ts",
  'const chapterTenOrochiScenarios = mergeChapterTenOrochiExpansion(chapterTenGrowthOfTheSoilScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenOrochiScenarios);',
  'const chapterTenOrochiScenarios = mergeChapterTenOrochiExpansion(chapterTenGrowthOfTheSoilScenarios);\nconst chapterTenRedHeroineScenarios = mergeChapterTenRedHeroineExpansion(chapterTenOrochiScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenRedHeroineScenarios);')
r("src/ui/data/filmScenarios.ts",
  '+manual_chapter_ten_orochi_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_ten_orochi_expansion_2026+manual_chapter_ten_red_heroine_expansion_2026+manual_modern_indie_asian_prize_expansion_2026')
r("src/ui/data/filmScenarios.ts",
  "Chapter 10 silent-cinemas expansion plus Laborer's Love, A Throw of Dice, Growth of the Soil, and Orochi, modern independent/Asian/prize-cinema expansion",
  "Chapter 10 silent-cinemas expansion plus Laborer's Love, A Throw of Dice, Growth of the Soil, Orochi, and The Red Heroine, modern independent/Asian/prize-cinema expansion")

r("src/ui/data/scenarioFilmStudyMap.ts",
  'import { orochiFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasOrochi";\n',
  'import { orochiFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasOrochi";\nimport { redHeroineFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasRedHeroine";\n')
r("src/ui/data/scenarioFilmStudyMap.ts",
  '  [orochiFilmHistoryProfile.scenarioId]: orochiFilmHistoryProfile,\n',
  '  [orochiFilmHistoryProfile.scenarioId]: orochiFilmHistoryProfile,\n  [redHeroineFilmHistoryProfile.scenarioId]: redHeroineFilmHistoryProfile,\n')

r("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { orochiProductionCaseVerification } from "./scenarioProductionVerificationOrochi";\n',
  'import { orochiProductionCaseVerification } from "./scenarioProductionVerificationOrochi";\nimport { redHeroineProductionCaseVerification } from "./scenarioProductionVerificationRedHeroine";\n')
r("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  orochiProductionCaseVerification,\n',
  '  orochiProductionCaseVerification,\n  redHeroineProductionCaseVerification,\n')
print("runtime wiring ready")
