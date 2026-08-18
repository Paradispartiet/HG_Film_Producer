from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def r(path, old, new):
    p = ROOT / path
    s = p.read_text(encoding="utf-8")
    if s.count(old) != 1:
        raise RuntimeError(f"match count for {path}: {s.count(old)}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

r("src/ui/data/filmScenarios.ts",
  'import { mergeChapterTenGrowthOfTheSoilExpansion } from "../../core/chapterTenGrowthOfTheSoilExpansion.js";\n',
  'import { mergeChapterTenGrowthOfTheSoilExpansion } from "../../core/chapterTenGrowthOfTheSoilExpansion.js";\nimport { mergeChapterTenOrochiExpansion } from "../../core/chapterTenOrochiExpansion.js";\n')
r("src/ui/data/filmScenarios.ts",
  'const chapterTenGrowthOfTheSoilScenarios = mergeChapterTenGrowthOfTheSoilExpansion(chapterTenAThrowOfDiceScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenGrowthOfTheSoilScenarios);',
  'const chapterTenGrowthOfTheSoilScenarios = mergeChapterTenGrowthOfTheSoilExpansion(chapterTenAThrowOfDiceScenarios);\nconst chapterTenOrochiScenarios = mergeChapterTenOrochiExpansion(chapterTenGrowthOfTheSoilScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenOrochiScenarios);')
r("src/ui/data/filmScenarios.ts",
  '+manual_chapter_ten_growth_of_the_soil_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_ten_growth_of_the_soil_expansion_2026+manual_chapter_ten_orochi_expansion_2026+manual_modern_indie_asian_prize_expansion_2026')
r("src/ui/data/filmScenarios.ts",
  "Chapter 10 silent-cinemas expansion plus Laborer's Love, A Throw of Dice, and Growth of the Soil, modern independent/Asian/prize-cinema expansion",
  "Chapter 10 silent-cinemas expansion plus Laborer's Love, A Throw of Dice, Growth of the Soil, and Orochi, modern independent/Asian/prize-cinema expansion")

r("src/ui/data/scenarioFilmStudyMap.ts",
  'import { growthOfTheSoilFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasGrowthOfTheSoil";\n',
  'import { growthOfTheSoilFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasGrowthOfTheSoil";\nimport { orochiFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasOrochi";\n')
r("src/ui/data/scenarioFilmStudyMap.ts",
  '  [growthOfTheSoilFilmHistoryProfile.scenarioId]: growthOfTheSoilFilmHistoryProfile,\n',
  '  [growthOfTheSoilFilmHistoryProfile.scenarioId]: growthOfTheSoilFilmHistoryProfile,\n  [orochiFilmHistoryProfile.scenarioId]: orochiFilmHistoryProfile,\n')

r("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { growthOfTheSoilProductionCaseVerification } from "./scenarioProductionVerificationGrowthOfTheSoil";\n',
  'import { growthOfTheSoilProductionCaseVerification } from "./scenarioProductionVerificationGrowthOfTheSoil";\nimport { orochiProductionCaseVerification } from "./scenarioProductionVerificationOrochi";\n')
r("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  growthOfTheSoilProductionCaseVerification,\n',
  '  growthOfTheSoilProductionCaseVerification,\n  orochiProductionCaseVerification,\n')
print("runtime wiring ready")
