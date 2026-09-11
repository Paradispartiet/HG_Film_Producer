import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const EXPECTED_BASELINE_SHA = "cf7f7aad73ab56e304772e6bb2f3801737699aba";
const EXPECTED_CORE = 614;
const EXPECTED_CHAPTER_18 = 539;
const REQUIRED_AXES = [
  "technology_and_format",
  "production_economics_and_organization",
  "institutions_and_industry_systems",
  "geography_and_transnational_production",
  "aesthetics_and_form",
  "genre_and_popular_cinema",
  "labor_crew_and_union_history",
  "distribution_exhibition_and_audience_behavior",
  "production_scale_studio_midbudget_microbudget_independent",
  "regulation_power_finance_and_coproduction",
  "preservation_restoration_and_material_survival",
  "accessibility_sustainability_and_environmental_production",
];

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const coreDirectory = path.join(root, "src", "core");
const dataDirectory = path.join(root, "src", "ui", "data");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const filmScenariosPath = path.join(dataDirectory, "filmScenarios.ts");
const contractPath = path.join(root, "data", "film", "film_history_representation_coverage_v1.json");

function fail(message) {
  throw new Error(`[film-history-representation-coverage-v1] ${message}`);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function readJson(filePath) {
  return JSON.parse(readText(filePath));
}

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function parseQuotedStrings(value) {
  const output = [];
  const pattern = /"((?:\\.|[^"\\])*)"/g;
  for (const match of value.matchAll(pattern)) output.push(JSON.parse(`"${match[1]}"`));
  return output;
}

function findMatchingBracket(source, startIndex, openCharacter, closeCharacter) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let index = startIndex; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === quote) quote = null;
      continue;
    }
    if (character === '"' || character === "'" || character === "`") {
      quote = character;
      continue;
    }
    if (character === openCharacter) depth += 1;
    if (character === closeCharacter && --depth === 0) return index;
  }
  fail(`unclosed ${openCharacter} beginning at ${startIndex}`);
}

function extractTopLevelObjects(arraySource) {
  const objects = [];
  let index = 0;
  while (index < arraySource.length) {
    if (arraySource[index] !== "{") {
      index += 1;
      continue;
    }
    const end = findMatchingBracket(arraySource, index, "{", "}");
    objects.push(arraySource.slice(index, end + 1));
    index = end + 1;
  }
  return objects;
}

function stringField(source, field, required = true) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`));
  if (!match) {
    if (!required) return undefined;
    fail(`missing ${field}: ${source.slice(0, 160)}`);
  }
  return JSON.parse(`"${match[1]}"`);
}

function numberField(source, field) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*(\\d+)`));
  if (!match) fail(`missing ${field}: ${source.slice(0, 160)}`);
  return Number(match[1]);
}

function stringArrayField(source, field) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*\\[([^\\]]*)\\]`));
  return match ? parseQuotedStrings(match[1]) : [];
}

function parseExpansion(fileName) {
  const source = readText(path.join(coreDirectory, fileName));
  const declaration = source.match(/export const\s+\w+Definitions\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) fail(`could not locate definitions array in ${fileName}`);
  const start = source.indexOf("[", declaration.index);
  const end = findMatchingBracket(source, start, "[", "]");
  return extractTopLevelObjects(source.slice(start + 1, end)).map((objectSource) => ({
    id: stringField(objectSource, "id"),
    title: stringField(objectSource, "title"),
    originalTitle: stringField(objectSource, "originalTitle", false) ?? stringField(objectSource, "title"),
    aliases: stringArrayField(objectSource, "aliases"),
    year: numberField(objectSource, "year"),
    origin: fileName,
  }));
}

function expansionFilesFromRuntime() {
  const source = readText(filmScenariosPath);
  const importMap = new Map();
  for (const match of source.matchAll(/import\s+\{\s*(merge\w+Expansion)\s*\}\s+from\s+"\.\.\/\.\.\/core\/([^"]+)\.js";/g)) {
    importMap.set(match[1], `${match[2]}.ts`);
  }
  const ordered = [];
  for (const match of source.matchAll(/=\s*(merge\w+Expansion)\([^;]+\);/g)) {
    const fileName = importMap.get(match[1]);
    if (!fileName) fail(`could not map runtime merge function ${match[1]} to a core expansion file`);
    ordered.push(fileName);
  }
  assert(ordered.length > 0, "no runtime expansion order found in filmScenarios.ts");
  return ordered;
}

function scenarioTitles(item) {
  return [item.title, item.originalTitle].filter(Boolean).map(normalize);
}

function matchesDefinition(scenario, definition) {
  if (scenario.id === definition.id) return true;
  if (scenario.year !== definition.year) return false;
  const accepted = new Set(
    [definition.title, definition.originalTitle, ...definition.aliases].filter(Boolean).map(normalize),
  );
  return scenarioTitles(scenario).some((title) => accepted.has(title));
}

function buildAtlas() {
  const seed = readJson(seedPath);
  assert(Array.isArray(seed.scenarios), "film_scenarios_seed.json must expose scenarios[]");
  const scenarios = seed.scenarios.map((scenario) => ({
    id: scenario.id,
    title: scenario.film.title,
    originalTitle: scenario.film.original_title,
    year: scenario.film.year,
    origin: "film_scenarios_seed.json",
  }));
  const expansionStats = [];
  for (const fileName of expansionFilesFromRuntime()) {
    let appended = 0;
    let matchedExisting = 0;
    const definitions = parseExpansion(fileName);
    for (const definition of definitions) {
      if (scenarios.some((scenario) => matchesDefinition(scenario, definition))) {
        matchedExisting += 1;
        continue;
      }
      scenarios.push(definition);
      appended += 1;
    }
    expansionStats.push({ fileName, definitions: definitions.length, appended, matchedExisting });
  }
  return { scenarios, expansionStats };
}

function buildVerifiedScenarioIds() {
  const ids = new Set();
  for (const fileName of readdirSync(dataDirectory)) {
    if (!fileName.startsWith("scenarioProductionVerification") || !fileName.endsWith(".ts")) continue;
    const source = readText(path.join(dataDirectory, fileName));
    for (const match of source.matchAll(/scenarioId\s*:\s*"([^"]+)"/g)) ids.add(match[1]);
  }
  return ids;
}

function sortedDifference(left, right) {
  return [...left].filter((value) => !right.has(value)).sort();
}

function validateContract(contract) {
  assert(contract.schema === "hg_film_producer_film_history_representation_coverage_v1", "schema mismatch");
  assert(contract.version === "1.0.0", "version mismatch");
  assert(contract.status === "REPRESENTATIONALLY_AUDITED", "representation coverage contract must be deliberately closed after all P0 gaps and exact scenario reviews are complete");
  assert(contract.baseline?.source_main_sha === EXPECTED_BASELINE_SHA, "baseline source_main_sha changed without a deliberate audit reset");
  assert(contract.baseline?.expected_production_verified_core_scenarios === EXPECTED_CORE, "614-scenario audited core invariant changed");
  assert(contract.baseline?.closed_chapter_18_atlas_count === EXPECTED_CHAPTER_18, "closed Chapter 18 baseline changed");
  assert(contract.baseline?.core_selection_frozen_during_audit === true, "core must remain frozen while this audit is open");
  assert(contract.baseline?.chapter_19_frozen_observation_baseline === "2020-2025", "Chapter 19 frozen observation baseline changed");

  const scale = contract.coverage_scale ?? {};
  assert(scale["0"]?.label === "uncovered", "coverage status 0 must mean uncovered");
  assert(scale["1"]?.label === "weak", "coverage status 1 must mean weak");
  assert(scale["2"]?.label === "covered", "coverage status 2 must mean covered");
  assert(scale["3"]?.label === "triangulated", "coverage status 3 must mean triangulated");

  const axes = contract.audit_axes ?? [];
  const axisSet = new Set(axes);
  assert(axisSet.size === axes.length, "audit axes contain duplicates");
  for (const axis of REQUIRED_AXES) assert(axisSet.has(axis), `required audit axis missing: ${axis}`);

  const developmentSet = new Set();
  for (const development of contract.development_matrix ?? []) {
    assert(typeof development.development_id === "string" && development.development_id.length > 0, "development row lacks development_id");
    assert(!developmentSet.has(development.development_id), `duplicate development_id: ${development.development_id}`);
    developmentSet.add(development.development_id);
    assert([0, 1, 2, 3].includes(development.declared_status), `invalid declared_status for ${development.development_id}`);
    assert(["P0", "P1", "P2"].includes(development.priority), `invalid priority for ${development.development_id}`);
    assert(Array.isArray(development.axis_ids) && development.axis_ids.length > 0, `development ${development.development_id} has no audit axes`);
    for (const axis of development.axis_ids) assert(axisSet.has(axis), `development ${development.development_id} uses unknown axis ${axis}`);
    assert(typeof development.required_evidence === "string" && development.required_evidence.length >= 40, `development ${development.development_id} lacks a concrete evidence requirement`);
  }
  assert(developmentSet.size >= 30, "development matrix is too narrow for the cross-period representation audit");
  assert((contract.development_matrix ?? []).filter((item) => item.chapter === 19).length >= 13, "Chapter 19 development matrix is too narrow");

  const gate = contract.candidate_admission_gate ?? {};
  assert(gate.default === "REJECT_NEW_IDENTITY", "new scenario identities must be rejected by default");
  for (const reason of [
    "closes_status_0_to_at_least_2",
    "raises_status_1_to_at_least_2",
    "raises_status_2_to_3_where_current_coverage_is_geographically_economically_or_institutionally_skewed",
  ]) {
    assert((gate.allowed_reasons ?? []).includes(reason), `missing allowed admission reason: ${reason}`);
  }
  for (const requirement of [
    "exact_historical_development_id",
    "current_coverage_status_with_evidence",
    "search_for_existing_613_scenarios_that_can_close_gap",
    "proof_that_in_place_enrichment_is_insufficient",
    "production_verification_source_set",
    "explicit_axis_contribution",
    "distinctiveness_against_existing_cases",
    "no_award_or_festival_status_as_primary_rationale",
  ]) {
    assert((gate.required_before_new_identity ?? []).includes(requirement), `missing new-identity prerequisite: ${requirement}`);
  }
  for (const rejection of [
    "important_movie_only",
    "festival_or_award_winner_only",
    "critical_consensus_only",
    "nationality_token_only",
  ]) {
    assert((gate.hard_reject_reasons ?? []).includes(rejection), `missing hard rejection reason: ${rejection}`);
  }

  assert(contract.closure_contract?.selection_may_be_called_representationally_audited === true, "closed representation audit must explicitly permit the representationally-audited claim");
  for (const requirement of [
    "review_every_one_of_the_614_exact_production_verified_atlas_scenario_ids",
    "map_each_relevant_scenario_only_to_evidence_supported_historical_development_ids",
    "leave_uncertain_historical_function_mappings_unmapped",
    "recompute_all_development_statuses_from_exact_scenario_evidence",
  ]) {
    assert((contract.closure_contract?.required_to_close ?? []).includes(requirement), `closure contract missing: ${requirement}`);
  }

  return { axisSet, developmentSet };
}

const contract = readJson(contractPath);
const { developmentSet } = validateContract(contract);
const atlas = buildAtlas();
const atlasIds = new Set(atlas.scenarios.map((scenario) => scenario.id));
const verifiedIds = buildVerifiedScenarioIds();

assert(atlas.scenarios.length === EXPECTED_CORE, `expected ${EXPECTED_CORE} runtime Atlas scenarios, found ${atlas.scenarios.length}`);
assert(atlasIds.size === EXPECTED_CORE, `expected ${EXPECTED_CORE} unique runtime Atlas IDs, found ${atlasIds.size}`);
assert(verifiedIds.size === EXPECTED_CORE, `expected ${EXPECTED_CORE} unique Production Verification IDs, found ${verifiedIds.size}`);

const missingProductionVerification = sortedDifference(atlasIds, verifiedIds);
const orphanProductionVerification = sortedDifference(verifiedIds, atlasIds);
assert(missingProductionVerification.length === 0, `Atlas IDs missing Production Verification: ${missingProductionVerification.join(", ")}`);
assert(orphanProductionVerification.length === 0, `Production Verification IDs absent from Atlas: ${orphanProductionVerification.join(", ")}`);

const reviewByScenarioId = new Map();
for (const review of contract.scenario_reviews ?? []) {
  assert(typeof review.scenario_id === "string" && review.scenario_id.length > 0, "scenario review lacks scenario_id");
  assert(atlasIds.has(review.scenario_id), `scenario review references non-core Atlas ID: ${review.scenario_id}`);
  assert(verifiedIds.has(review.scenario_id), `scenario review references non-verified ID: ${review.scenario_id}`);
  assert(!reviewByScenarioId.has(review.scenario_id), `duplicate scenario review: ${review.scenario_id}`);
  assert(["MAPPED", "REVIEWED_NO_MAPPING"].includes(review.review_state), `invalid review_state for ${review.scenario_id}`);
  assert(typeof review.rationale === "string" && review.rationale.length >= 40, `scenario review lacks a concrete rationale: ${review.scenario_id}`);

  const developmentIds = review.development_ids ?? [];
  assert(Array.isArray(developmentIds), `development_ids must be an array: ${review.scenario_id}`);
  assert(new Set(developmentIds).size === developmentIds.length, `duplicate development mapping in ${review.scenario_id}`);
  for (const developmentId of developmentIds) assert(developmentSet.has(developmentId), `unknown development_id ${developmentId} in ${review.scenario_id}`);

  if (review.review_state === "MAPPED") {
    assert(developmentIds.length > 0, `MAPPED review has no development_ids: ${review.scenario_id}`);
    assert(Array.isArray(review.evidence_paths) && review.evidence_paths.length > 0, `MAPPED review has no evidence_paths: ${review.scenario_id}`);
    for (const evidencePath of review.evidence_paths) {
      const absolutePath = path.join(root, evidencePath);
      assert(absolutePath.startsWith(root + path.sep), `evidence path escapes repository root: ${evidencePath}`);
      try {
        readFileSync(absolutePath);
      } catch {
        fail(`evidence path missing for ${review.scenario_id}: ${evidencePath}`);
      }
    }
  } else {
    assert(developmentIds.length === 0, `REVIEWED_NO_MAPPING must not carry development_ids: ${review.scenario_id}`);
  }

  reviewByScenarioId.set(review.scenario_id, review);
}

const mappingsByDevelopment = new Map([...developmentSet].map((id) => [id, []]));
for (const review of reviewByScenarioId.values()) {
  if (review.review_state !== "MAPPED") continue;
  for (const developmentId of review.development_ids) mappingsByDevelopment.get(developmentId).push(review);
}

for (const development of contract.development_matrix) {
  const mappings = mappingsByDevelopment.get(development.development_id);
  if (development.declared_status >= 2) {
    assert(mappings.length >= 1, `status ${development.declared_status} requires exact mapped scenario evidence: ${development.development_id}`);
  }
  if (development.declared_status === 3) {
    assert(mappings.length >= 2, `triangulated status requires at least two exact mapped scenarios: ${development.development_id}`);
    assert(typeof development.triangulation_basis === "string" && development.triangulation_basis.length >= 40, `triangulated status requires an explicit triangulation_basis: ${development.development_id}`);
  }
}

const reviewedScenarioIds = new Set(reviewByScenarioId.keys());
const unmappedScenarioIds = atlas.scenarios
  .filter((scenario) => !reviewedScenarioIds.has(scenario.id))
  .map((scenario) => scenario.id)
  .sort();
const mappedReviews = [...reviewByScenarioId.values()].filter((review) => review.review_state === "MAPPED");
const reviewedNoMapping = [...reviewByScenarioId.values()].filter((review) => review.review_state === "REVIEWED_NO_MAPPING");
const p0Open = contract.development_matrix.filter((development) => development.priority === "P0" && development.declared_status < 2);
const statusCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
for (const development of contract.development_matrix) statusCounts[development.declared_status] += 1;

const representationalClosure = reviewedScenarioIds.size === EXPECTED_CORE && p0Open.length === 0;
assert(representationalClosure === true, "representation audit may close only with every exact scenario reviewed and every P0 development at status 2 or 3");

const summary = {
  status: "PASS_REPRESENTATIONALLY_AUDITED",
  baselineMainSha: contract.baseline.source_main_sha,
  core: {
    expected: EXPECTED_CORE,
    runtimeAtlasScenarios: atlas.scenarios.length,
    uniqueAtlasScenarioIds: atlasIds.size,
    uniqueProductionVerificationIds: verifiedIds.size,
    missingProductionVerification: missingProductionVerification.length,
    orphanProductionVerification: orphanProductionVerification.length,
    exactSetEquality: true,
  },
  mapping: {
    reviewedScenarioIds: reviewedScenarioIds.size,
    mappedScenarioIds: mappedReviews.length,
    reviewedNoMappingScenarioIds: reviewedNoMapping.length,
    unmappedScenarioIds: unmappedScenarioIds.length,
  },
  coverage: {
    developmentRows: contract.development_matrix.length,
    chapter19Rows: contract.development_matrix.filter((development) => development.chapter === 19).length,
    statusCounts,
    p0OpenRows: p0Open.length,
  },
  newIdentityDefault: contract.candidate_admission_gate.default,
  representationalClosure,
};

const outputPath = process.argv.find((argument) => argument.startsWith("--write="))?.slice("--write=".length);
if (outputPath) {
  const absoluteOutputPath = path.resolve(root, outputPath);
  assert(absoluteOutputPath.startsWith(root + path.sep), "--write path must remain inside repository root");
  const scenarioInventory = atlas.scenarios
    .map((scenario) => {
      const review = reviewByScenarioId.get(scenario.id);
      return {
        scenarioId: scenario.id,
        title: scenario.title,
        originalTitle: scenario.originalTitle,
        year: scenario.year,
        origin: scenario.origin,
        productionVerified: true,
        reviewState: review?.review_state ?? "UNMAPPED",
        developmentIds: review?.development_ids ?? [],
        evidencePaths: review?.evidence_paths ?? [],
        rationale: review?.rationale ?? null,
      };
    })
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));

  mkdirSync(path.dirname(absoluteOutputPath), { recursive: true });
  writeFileSync(
    absoluteOutputPath,
    `${JSON.stringify({ ...summary, expansionOrder: atlas.expansionStats, scenarioInventory }, null, 2)}\n`,
  );
}

console.log(JSON.stringify(summary, null, 2));
