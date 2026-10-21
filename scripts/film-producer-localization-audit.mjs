#!/usr/bin/env node
// Read-only inventory of verified Production Case IDs and exact-statement
// presentation coverage. This is NOT a visual or semantic translation test.
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDirectory = path.join(root, "src", "ui", "data");
const read = (file) => readFileSync(path.join(root, file), "utf8");
const problems = [];

const languageSource = read("src/core/filmWorkLanguage.ts");
const languagesMatch = languageSource.match(/FILMWORK_LANGUAGES\s*=\s*(\[[^\]]+\])\s*as const/);
const languages = languagesMatch ? JSON.parse(languagesMatch[1]) : [];
if (JSON.stringify(languages) !== JSON.stringify(["en", "nb", "fr", "pt"])) {
  problems.push("language_contract_not_EN_NB_FR_PT");
}

const verificationFiles = readdirSync(dataDirectory)
  .filter((file) => file.startsWith("scenarioProductionVerification") && file.endsWith(".ts"))
  .filter((file) => !file.endsWith(".test.ts") && file !== "scenarioProductionVerificationRegistry.ts")
  .sort();

const verifiedOrigins = new Map();
for (const file of verificationFiles) {
  const source = read(path.join("src", "ui", "data", file));
  for (const match of source.matchAll(/\bscenarioId\s*:\s*"(scenario_[a-z0-9_]+)"/g)) {
    const origins = verifiedOrigins.get(match[1]) ?? new Set();
    origins.add(file);
    verifiedOrigins.set(match[1], origins);
  }
}
const verifiedIds = [...verifiedOrigins.keys()].sort();
const expectedMatch = read("scripts/production-case-rest-audit.mjs")
  .match(/const EXPECTED_VERIFIED_PRODUCTION_CASES = (\d+);/);
const expectedVerifiedCount = expectedMatch ? Number(expectedMatch[1]) : null;
if (expectedVerifiedCount === null || verifiedIds.length !== expectedVerifiedCount) {
  problems.push("verified_case_count_mismatch");
}
const duplicateOrigins = [...verifiedOrigins.entries()]
  .filter(([, origins]) => origins.size > 1)
  .map(([id, origins]) => ({ id, files: [...origins].sort() }));
if (duplicateOrigins.length > 0) problems.push("duplicate_verification_origins");

const presentationSource = read("src/core/productionCaseFilmStatementCopy.ts");
const mappedIds = new Set(
  [...presentationSource.matchAll(/scenarioId\s*===\s*"(scenario_[a-z0-9_]+)"/g)]
    .map((match) => match[1]),
);
const constantId = presentationSource.match(/const VERIFIED_SCENARIO_ID = "(scenario_[a-z0-9_]+)";/);
if (constantId && presentationSource.includes("scenarioId === VERIFIED_SCENARIO_ID")) {
  mappedIds.add(constantId[1]);
} else {
  problems.push("verified_scenario_constant_missing");
}
if (!presentationSource.includes("return briefType === \"seed_fallback\"") ||
    !presentationSource.includes("return original;")) {
  problems.push("canonical_fallback_contract_changed");
}

const canonicalStatementArrays = [];
for (const match of presentationSource.matchAll(
  /export const (CANONICAL_[A-Z0-9_]+_STATEMENTS) = \[([\s\S]*?)\] as const;/g,
)) {
  canonicalStatementArrays.push({
    name: match[1],
    count: match[2].split("\n").filter((line) => /^\s*"/.test(line)).length,
  });
}
// Explicit external module contract: each source key belongs to one Vertigo
// production-brief statement, with one presentation for every language.
const vertigoSource = read("src/core/productionCaseVertigoStatements.ts");
const vertigoMatch = vertigoSource.match(
  /export const VERTIGO_PRODUCTION_STATEMENT_ROWS = (\[[\s\S]*?\]) as const;/,
);
if (!vertigoMatch || !presentationSource.includes('import { presentVertigoProductionStatement }') ||
    !presentationSource.includes('scenarioId === "scenario_vertigo_1958"')) {
  problems.push("vertigo_external_statement_mapping_missing");
} else {
  try {
    const vertigoRows = JSON.parse(vertigoMatch[1]);
    const originals = vertigoRows.map((row) => row[0]);
    if (vertigoRows.length !== 22 || new Set(originals).size !== 22 ||
        vertigoRows.some((row) => row.length !== 4 || row.some((value) => typeof value !== "string" || !value.trim()))) {
      problems.push("vertigo_external_statement_contract_invalid");
    } else {
      canonicalStatementArrays.push({ name: "CANONICAL_VERTIGO_STATEMENTS", count: originals.length });
    }
  } catch {
    problems.push("vertigo_external_statement_data_not_json");
  }
}
// Explicit external module contract: each source key belongs to one Breathless
// production-brief statement, with one presentation for every language.
const breathlessSource = read("src/core/productionCaseBreathlessStatements.ts");
const breathlessMatch = breathlessSource.match(
  /export const BREATHLESS_PRODUCTION_STATEMENT_ROWS = (\[[\s\S]*?\]) as const;/,
);
if (!breathlessMatch || !presentationSource.includes('import { presentBreathlessProductionStatement }') ||
    !presentationSource.includes('scenarioId === "scenario_breathless_1960"')) {
  problems.push("breathless_external_statement_mapping_missing");
} else {
  try {
    const breathlessRows = JSON.parse(breathlessMatch[1]);
    const originals = breathlessRows.map((row) => row[0]);
    if (breathlessRows.length !== 22 || new Set(originals).size !== 22 ||
        breathlessRows.some((row) => row.length !== 4 || row.some((value) => typeof value !== "string" || !value.trim()))) {
      problems.push("breathless_external_statement_contract_invalid");
    } else {
      canonicalStatementArrays.push({ name: "CANONICAL_BREATHLESS_STATEMENTS", count: originals.length });
    }
  } catch {
    problems.push("breathless_external_statement_data_not_json");
  }
}
const fourHundredBlowsSource = read("src/core/productionCaseFourHundredBlowsStatements.ts");
const fourHundredBlowsMatch = fourHundredBlowsSource.match(
  /export const FOUR_HUNDRED_BLOWS_PRODUCTION_STATEMENT_ROWS = (\[[\s\S]*?\]) as const;/,
);
if (!fourHundredBlowsMatch || !presentationSource.includes('import { presentFourHundredBlowsProductionStatement }') ||
    !presentationSource.includes('scenarioId === "scenario_the_400_blows_1959"')) {
  problems.push("fourHundredBlows_external_statement_mapping_missing");
} else {
  try {
    const fourHundredBlowsRows = JSON.parse(fourHundredBlowsMatch[1]);
    const originals = fourHundredBlowsRows.map((row) => row[0]);
    if (fourHundredBlowsRows.length !== 22 || new Set(originals).size !== 22 ||
        fourHundredBlowsRows.some((row) => row.length !== 4 || row.some((value) => typeof value !== "string" || !value.trim()))) {
      problems.push("fourHundredBlows_external_statement_contract_invalid");
    } else {
      canonicalStatementArrays.push({ name: "CANONICAL_FOUR_HUNDRED_BLOWS_STATEMENTS", count: originals.length });
    }
  } catch {
    problems.push("fourHundredBlows_external_statement_data_not_json");
  }
}
// Film 9: source-locked The Shining brief, without modifying canonical source claims.
const shiningSource = read("src/core/productionCaseShiningStatements.ts");
const shiningMatch = shiningSource.match(
  /export const SHINING_PRODUCTION_STATEMENT_ROWS = (\[[\s\S]*?\]) as const;/,
);
if (!shiningMatch || !presentationSource.includes('import { presentShiningProductionStatement }') ||
    !presentationSource.includes('scenarioId === "scenario_the_shining_1980"')) {
  problems.push("shining_external_statement_mapping_missing");
} else {
  try {
    const rows = JSON.parse(shiningMatch[1]);
    const originals = rows.map((row) => row[0]);
    if (rows.length !== 22 || new Set(originals).size !== 22 ||
        rows.some((row) => row.length !== 4 || row.some((value) => typeof value !== "string" || !value.trim()))) {
      problems.push("shining_external_statement_contract_invalid");
    } else {
      canonicalStatementArrays.push({ name: "CANONICAL_SHINING_STATEMENTS", count: rows.length });
    }
  } catch {
    problems.push("shining_external_statement_data_not_json");
  }
}
// Film 10: exact-source One Flew Over the Cuckoo's Nest translations.
const cuckoosNestSource = read("src/core/productionCaseCuckoosNestStatements.ts");
const cuckoosNestMatch = cuckoosNestSource.match(
  /export const CUCKOOS_NEST_PRODUCTION_STATEMENT_ROWS = (\[[\s\S]*?\]) as const;/,
);
if (!cuckoosNestMatch || !presentationSource.includes('import { presentCuckoosNestProductionStatement }') ||
    !presentationSource.includes('scenarioId === "scenario_one_flew_over_the_cuckoo_s_nest_1975"')) {
  problems.push("cuckoos_nest_external_statement_mapping_missing");
} else {
  try {
    const rows = JSON.parse(cuckoosNestMatch[1]);
    const originals = rows.map((row) => row[0]);
    if (rows.length !== 22 || new Set(originals).size !== 22 ||
        rows.some((row) => row.length !== 4 || row.some((value) => typeof value !== "string" || !value.trim()))) {
      problems.push("cuckoos_nest_external_statement_contract_invalid");
    } else {
      canonicalStatementArrays.push({ name: "CANONICAL_CUCKOOS_NEST_STATEMENTS", count: rows.length });
    }
  } catch {
    problems.push("cuckoos_nest_external_statement_data_not_json");
  }
}
if (canonicalStatementArrays.length !== mappedIds.size ||
    canonicalStatementArrays.some((entry) => entry.count === 0)) {
  problems.push("canonical_statement_array_mapping_requires_review");
}
for (const id of mappedIds) {
  if (!verifiedOrigins.has(id)) problems.push("localized_id_not_source_verified:" + id);
}

const surfaceChecks = [
  {
    surface: "production_case_library_genres",
    path: "src/ui/components/FilmScenarioLibrary.tsx",
    match: /scenario\.film\.genres\.map\(\(genre\) => <span key=\{genre\}>\{genre\}<\/span>/,
    category: "raw_catalogue_taxonomy",
  },
  {
    surface: "film_atlas_genres",
    path: "src/ui/components/FilmAtlasExperience.tsx",
    match: /scenario\.film\.genres\.map\(\(item\) => <span key=\{item\}>\{item\}<\/span>/,
    category: "raw_catalogue_taxonomy",
  },
  {
    surface: "director_reference_brief",
    path: "src/ui/components/FilmDirectorExperience.tsx",
    match: /\{brief\.logline\}/,
    category: "case_text_bypasses_resolver",
  },
  {
    surface: "film_study_history_arc",
    path: "src/ui/components/ScenarioFilmStudyPanel.tsx",
    match: /text=\{historyProfile\.before\}/,
    category: "historical_text_bypasses_presentation",
  },
  {
    surface: "film_study_history_choice",
    path: "src/ui/components/ScenarioFilmStudyPanel.tsx",
    match: /\{choice\.label\}/,
    category: "history_task_bypasses_presentation",
  },
  {
    surface: "production_case_source_notes",
    path: "src/ui/components/ScenarioProductionBriefPanel.tsx",
    match: /\{source\.note\}/,
    category: "original_source_note_displayed",
  },
];
const visibleSurfaceHotspots = surfaceChecks.map(({ surface, path: file, match, category }) => ({
  surface, path: file, category, rawPathPresent: match.test(read(file)),
}));

const records = verifiedIds.map((id) => ({
  scenarioId: id,
  coverage: mappedIds.has(id) ? "exact_statement_presentation" : "canonical_fallback",
  languages: mappedIds.has(id) ? languages : ["en"],
  provenanceFiles: [...verifiedOrigins.get(id)].sort(),
}));
const localized = records.filter((entry) => entry.coverage === "exact_statement_presentation");
const pending = records.length - localized.length;
const report = {
  schemaVersion: "1.0",
  kind: "film_producer_source_localization_inventory",
  languages,
  coverageDefinition: "Exact film-specific authored statements routed through presentVerifiedFilmStatement; not whole-film or whole-journey localization.",
  counts: {
    verifiedProductionCases: records.length,
    exactStatementCases: localized.length,
    canonicalFallbackCases: pending,
    exactStatementCasePercent: records.length ? Number((100 * localized.length / records.length).toFixed(2)) : 0,
    exactCanonicalStrings: canonicalStatementArrays.reduce((total, item) => total + item.count, 0),
  },
  canonicalStatementArrays,
  visibleSurfaceHotspots,
  verificationOriginConflicts: duplicateOrigins,
  filmCases: records,
  gate: problems.length === 0 ? "inventory_complete_not_release_accepted" : "inventory_invalid",
  problems,
};

const writeArgument = process.argv.find((argument) => argument.startsWith("--write="));
if (writeArgument) {
  const target = path.resolve(root, writeArgument.slice("--write=".length));
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, JSON.stringify(report, null, 2) + "\n", "utf8");
}
if (process.argv.includes("--json")) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(JSON.stringify({
    counts: report.counts,
    exactStatementCaseIds: localized.map((entry) => entry.scenarioId),
    visibleSurfaceHotspots,
    gate: report.gate,
    problems,
  }, null, 2));
}
if (problems.length > 0) process.exitCode = 1;
