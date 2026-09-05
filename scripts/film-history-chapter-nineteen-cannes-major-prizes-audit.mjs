import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const chapterNineteenAuditPath = path.join(root, "scripts", "film-history-chapter-nineteen-atlas-audit.mjs");
const topPrizeAuditPath = path.join(root, "scripts", "film-history-chapter-nineteen-festival-awards-completion-audit.mjs");

const officialSources = {
  cannes2020: "https://www.festival-cannes.com/en/press/press-releases/the-official-selection-2020/",
  cannes2021: "https://www.festival-cannes.com/en/press/press-releases/all-the-74th-festival-de-cannes-awards/",
  cannes2022: "https://www.festival-cannes.com/en/press/press-releases/the-75th-festival-de-cannes-winners-list/",
  cannes2023: "https://www.festival-cannes.com/en/press/press-releases/the-76th-festival-de-cannes-winners-list/",
  cannes2024: "https://www.festival-cannes.com/en/press/press-releases/the-77th-festival-de-cannes-winners-list/",
  cannes2025: "https://www.festival-cannes.com/en/press/press-releases/the-78th-festival-de-cannes-winners-list/",
};

const majorPrizeObligations = [
  { awardYear: 2021, filmYear: 2021, award: "Palme d'Or", title: "Titane", originalTitle: "Titane", aliases: [], source: officialSources.cannes2021 },
  { awardYear: 2021, filmYear: 2021, award: "Grand Prix (joint)", title: "A Hero", originalTitle: "Ghahreman", aliases: ["A Hero (Ghahreman)"], source: officialSources.cannes2021 },
  { awardYear: 2021, filmYear: 2021, award: "Grand Prix (joint)", title: "Compartment No. 6", originalTitle: "Hytti nro 6", aliases: ["Compartment N°6", "Compartment No 6", "Hytti N°6"], source: officialSources.cannes2021 },
  { awardYear: 2021, filmYear: 2021, award: "Best Director", title: "Annette", originalTitle: "Annette", aliases: [], source: officialSources.cannes2021 },
  { awardYear: 2021, filmYear: 2021, award: "Best Screenplay", title: "Drive My Car", originalTitle: "Doraibu mai kā", aliases: ["Drive my car"], source: officialSources.cannes2021 },
  { awardYear: 2021, filmYear: 2021, award: "Jury Prize (joint)", title: "Memoria", originalTitle: "Memoria", aliases: [], source: officialSources.cannes2021 },
  { awardYear: 2021, filmYear: 2021, award: "Jury Prize (joint)", title: "Ahed's Knee", originalTitle: "Ha'berech", aliases: ["Ahed’s Knee", "Ha’berech"], source: officialSources.cannes2021 },
  { awardYear: 2021, filmYear: 2021, award: "Best Performance by an Actress", title: "The Worst Person in the World", originalTitle: "Verdens verste menneske", aliases: ["Julie (en 12 chapitres)"], source: officialSources.cannes2021 },
  { awardYear: 2021, filmYear: 2021, award: "Best Performance by an Actor", title: "Nitram", originalTitle: "Nitram", aliases: [], source: officialSources.cannes2021 },

  { awardYear: 2022, filmYear: 2022, award: "Palme d'Or", title: "Triangle of Sadness", originalTitle: "Triangle of Sadness", aliases: ["Sans filtre"], source: officialSources.cannes2022 },
  { awardYear: 2022, filmYear: 2022, award: "Grand Prix (joint)", title: "Close", originalTitle: "Close", aliases: [], source: officialSources.cannes2022 },
  { awardYear: 2022, filmYear: 2022, award: "Grand Prix (joint)", title: "Stars at Noon", originalTitle: "Stars at Noon", aliases: [], source: officialSources.cannes2022 },
  { awardYear: 2022, filmYear: 2022, award: "Best Director", title: "Decision to Leave", originalTitle: "Heojil kyolshim", aliases: ["Decision to Leave (Heojil kyolshim)"], source: officialSources.cannes2022 },
  { awardYear: 2022, filmYear: 2022, award: "Best Screenplay", title: "Boy from Heaven", originalTitle: "Walad Min Al Janna", aliases: ["Cairo Conspiracy"], source: officialSources.cannes2022 },
  { awardYear: 2022, filmYear: 2022, award: "Jury Prize (joint)", title: "EO", originalTitle: "EO", aliases: [], source: officialSources.cannes2022 },
  { awardYear: 2022, filmYear: 2022, award: "Jury Prize (joint)", title: "The Eight Mountains", originalTitle: "Le otto montagne", aliases: ["Le Otto Montagne"], source: officialSources.cannes2022 },
  { awardYear: 2022, filmYear: 2022, award: "75th Anniversary Prize", title: "Tori and Lokita", originalTitle: "Tori et Lokita", aliases: ["Tori & Lokita"], source: officialSources.cannes2022 },
  { awardYear: 2022, filmYear: 2022, award: "Best Actress", title: "Holy Spider", originalTitle: "Holy Spider", aliases: ["Les nuits de Mashhad"], source: officialSources.cannes2022 },
  { awardYear: 2022, filmYear: 2022, award: "Best Actor", title: "Broker", originalTitle: "Beurokeo", aliases: ["Les bonnes étoiles"], source: officialSources.cannes2022 },

  { awardYear: 2023, filmYear: 2023, award: "Palme d'Or", title: "Anatomy of a Fall", originalTitle: "Anatomie d'une chute", aliases: ["Anatomie d’une chute"], source: officialSources.cannes2023 },
  { awardYear: 2023, filmYear: 2023, award: "Grand Prix", title: "The Zone of Interest", originalTitle: "The Zone of Interest", aliases: [], source: officialSources.cannes2023 },
  { awardYear: 2023, filmYear: 2023, award: "Best Director", title: "The Pot-au-Feu", originalTitle: "La Passion de Dodin Bouffant", aliases: ["The Taste of Things", "La passion de Dodin Bouffant"], source: officialSources.cannes2023 },
  { awardYear: 2023, filmYear: 2023, award: "Jury Prize", title: "Fallen Leaves", originalTitle: "Kuolleet lehdet", aliases: [], source: officialSources.cannes2023 },
  { awardYear: 2023, filmYear: 2023, award: "Best Screenplay", title: "Monster", originalTitle: "Kaibutsu", aliases: ["Monster (Kaibutsu)"], source: officialSources.cannes2023 },
  { awardYear: 2023, filmYear: 2023, award: "Best Performance by an Actress", title: "About Dry Grasses", originalTitle: "Kuru Otlar Üstüne", aliases: ["Kuru Otlar Ustune"], source: officialSources.cannes2023 },
  { awardYear: 2023, filmYear: 2023, award: "Best Performance by an Actor", title: "Perfect Days", originalTitle: "Perfect Days", aliases: [], source: officialSources.cannes2023 },

  { awardYear: 2024, filmYear: 2024, award: "Palme d'Or", title: "Anora", originalTitle: "Anora", aliases: [], source: officialSources.cannes2024 },
  { awardYear: 2024, filmYear: 2024, award: "Grand Prix", title: "All We Imagine as Light", originalTitle: "All We Imagine as Light", aliases: [], source: officialSources.cannes2024 },
  { awardYear: 2024, filmYear: 2024, award: "Jury Prize", title: "Emilia Pérez", originalTitle: "Emilia Pérez", aliases: ["Emilia Perez"], source: officialSources.cannes2024 },
  { awardYear: 2024, filmYear: 2024, award: "Best Director", title: "Grand Tour", originalTitle: "Grand Tour", aliases: [], source: officialSources.cannes2024 },
  { awardYear: 2024, filmYear: 2024, award: "Special Award", title: "The Seed of the Sacred Fig", originalTitle: "Dāne-ye anjīr-e ma'ābed", aliases: ["The Seed of the Sacred Figure"], source: officialSources.cannes2024 },
  { awardYear: 2024, filmYear: 2024, award: "Best Performance by an Actor", title: "Kinds of Kindness", originalTitle: "Kinds of Kindness", aliases: [], source: officialSources.cannes2024 },
  { awardYear: 2024, filmYear: 2024, award: "Best Performance by an Actress", title: "Emilia Pérez", originalTitle: "Emilia Pérez", aliases: ["Emilia Perez"], source: officialSources.cannes2024 },
  { awardYear: 2024, filmYear: 2024, award: "Best Screenplay", title: "The Substance", originalTitle: "The Substance", aliases: [], source: officialSources.cannes2024 },

  { awardYear: 2025, filmYear: 2025, award: "Palme d'Or", title: "It Was Just an Accident", originalTitle: "Yek tasadef sadeh", aliases: ["Un simple accident"], source: officialSources.cannes2025 },
  { awardYear: 2025, filmYear: 2025, award: "Grand Prix", title: "Sentimental Value", originalTitle: "Affeksjonsverdi", aliases: [], source: officialSources.cannes2025 },
  { awardYear: 2025, filmYear: 2025, award: "Jury Prize (joint)", title: "Sirāt", originalTitle: "Sirāt", aliases: ["Sirat"], source: officialSources.cannes2025 },
  { awardYear: 2025, filmYear: 2025, award: "Jury Prize (joint)", title: "Sound of Falling", originalTitle: "In die Sonne schauen", aliases: [], source: officialSources.cannes2025 },
  { awardYear: 2025, filmYear: 2025, award: "Best Director", title: "The Secret Agent", originalTitle: "O Agente Secreto", aliases: ["O agente secreto"], source: officialSources.cannes2025 },
  { awardYear: 2025, filmYear: 2025, award: "Best Screenplay", title: "Young Mothers", originalTitle: "Jeunes Mères", aliases: ["Jeunes Meres"], source: officialSources.cannes2025 },
  { awardYear: 2025, filmYear: 2025, award: "Best Performance by an Actress", title: "The Little Sister", originalTitle: "La Petite Dernière", aliases: ["La Petite Derniere"], source: officialSources.cannes2025 },
  { awardYear: 2025, filmYear: 2025, award: "Best Performance by an Actor", title: "The Secret Agent", originalTitle: "O Agente Secreto", aliases: ["O agente secreto"], source: officialSources.cannes2025 },
  { awardYear: 2025, filmYear: 2025, award: "Special Award", title: "Resurrection", originalTitle: "Kuang Ye Shi Dai", aliases: ["Resurrection (Kuang Ye Shi Dai)"], source: officialSources.cannes2025 },
];

const knownNoAwardYears = [
  {
    awardYear: 2020,
    source: officialSources.cannes2020,
    reason: "The 2020 Festival de Cannes did not take place in its usual Competition form; the official selection was issued without the normal Competition categories or feature-film jury palmarès.",
  },
];

const expectedObligationsByYear = new Map([[2021, 9], [2022, 10], [2023, 7], [2024, 8], [2025, 9]]);
const expectedObligationCount = 43;
const expectedUniqueFilmCount = 41;

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function acceptedTitles(item) {
  return [item.title, item.originalTitle, ...(item.aliases ?? [])].filter(Boolean).map(normalize);
}

function matchesCandidate(candidate, obligation) {
  if (candidate.year !== obligation.filmYear) return false;
  const candidateTitles = new Set(acceptedTitles(candidate));
  return acceptedTitles(obligation).some((title) => candidateTitles.has(title));
}

function runJsonAudit(auditPath) {
  const stdout = execFileSync(process.execPath, [auditPath], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  return JSON.parse(stdout);
}

function validateManifest() {
  if (majorPrizeObligations.length !== expectedObligationCount) {
    throw new Error(`Cannes major-prize manifest must contain exactly ${expectedObligationCount} award obligations, found ${majorPrizeObligations.length}.`);
  }
  const keys = new Set();
  for (const item of majorPrizeObligations) {
    if (item.awardYear < 2021 || item.awardYear > 2025) throw new Error(`${item.title}: award obligation must stay inside Cannes 2021-2025; Cannes 2020 is represented only by the no-award boundary.`);
    if (item.filmYear !== item.awardYear) throw new Error(`${item.title}: Cannes major-prize filmYear must equal awardYear in this frozen phase.`);
    if (!item.source.startsWith("https://www.festival-cannes.com/")) throw new Error(`${item.title}: official Festival de Cannes source is required.`);
    const key = `${item.awardYear}|${item.award}|${normalize(item.title)}`;
    if (keys.has(key)) throw new Error(`Duplicate Cannes major-prize obligation: ${key}`);
    keys.add(key);
  }
  for (const [year, expected] of expectedObligationsByYear) {
    const actual = majorPrizeObligations.filter((item) => item.awardYear === year).length;
    if (actual !== expected) throw new Error(`Cannes ${year} major-prize obligation count drifted: expected ${expected}, found ${actual}.`);
  }
  const uniqueFilms = new Set(majorPrizeObligations.map((item) => `${item.filmYear}|${normalize(item.title)}`));
  if (uniqueFilms.size !== expectedUniqueFilmCount) throw new Error(`Cannes major-prize unique-film count drifted: expected ${expectedUniqueFilmCount}, found ${uniqueFilms.size}.`);
  if (knownNoAwardYears.length !== 1 || knownNoAwardYears[0].awardYear !== 2020) throw new Error("Cannes 2020 no-award boundary must remain explicit and singular.");
}

validateManifest();
const chapterNineteen = runJsonAudit(chapterNineteenAuditPath);
const topPrize = runJsonAudit(topPrizeAuditPath);

if (chapterNineteen.chapter?.candidateBaseline !== "2020–2025") throw new Error("Cannes major-prizes audit requires the frozen Chapter 19 candidateBaseline 2020–2025.");
if (chapterNineteen.governance?.currentYearExcludedFromFrozenBaseline !== 2026) throw new Error("Cannes major-prizes audit requires 2026 to remain outside the frozen Chapter 19 baseline.");
if (chapterNineteen.atlas?.actualCount !== chapterNineteen.atlas?.expectedCount) throw new Error(`Cannes major-prizes audit requires an internally complete technical Atlas baseline; found ${chapterNineteen.atlas?.actualCount}/${chapterNineteen.atlas?.expectedCount}.`);
if (topPrize.summary?.festivalTopPrizeCompletionProven !== true || topPrize.correctiveQueue?.length !== 0) throw new Error("Cannes major-prizes phase cannot open until the preceding Cannes/Venice/Berlinale top-prize gate is fully closed.");

const obligations = majorPrizeObligations.map((obligation, manifestIndex) => {
  const candidateMatches = chapterNineteen.candidates.filter((candidate) => matchesCandidate(candidate, obligation));
  if (candidateMatches.length > 1) throw new Error(`${obligation.title}: expected at most one Chapter 19 candidate match, found ${candidateMatches.length}.`);
  const candidate = candidateMatches[0] ?? null;
  let status = "MISSING_CANDIDATE";
  if (candidate) {
    if (candidate.matches === 0) status = "SELECTED_NOT_MATERIALIZED";
    else if (!candidate.productionVerified) status = "MATERIALIZED_NOT_PRODUCTION_VERIFIED";
    else status = "PRODUCTION_VERIFIED";
  }
  return {
    ...obligation,
    manifestIndex,
    candidatePresent: Boolean(candidate),
    candidateDecision: candidate?.decision ?? null,
    scenarioId: candidate?.scenarioId ?? null,
    atlasMatches: candidate?.matches ?? 0,
    productionVerified: candidate?.productionVerified ?? false,
    status,
  };
});

const filmsByKey = new Map();
for (const obligation of obligations) {
  const key = `${obligation.filmYear}|${normalize(obligation.title)}`;
  const current = filmsByKey.get(key) ?? {
    key,
    title: obligation.title,
    filmYear: obligation.filmYear,
    aliases: obligation.aliases,
    firstManifestIndex: obligation.manifestIndex,
    awards: [],
    source: obligation.source,
    candidatePresent: obligation.candidatePresent,
    candidateDecision: obligation.candidateDecision,
    scenarioId: obligation.scenarioId,
    atlasMatches: obligation.atlasMatches,
    productionVerified: obligation.productionVerified,
    status: obligation.status,
  };
  if (current.candidatePresent !== obligation.candidatePresent || current.scenarioId !== obligation.scenarioId || current.status !== obligation.status) {
    throw new Error(`${obligation.title}: repeated award obligations resolved inconsistently to Chapter 19.`);
  }
  current.awards.push(obligation.award);
  filmsByKey.set(key, current);
}

const awardedFilms = [...filmsByKey.values()]
  .sort((left, right) => left.firstManifestIndex - right.firstManifestIndex)
  .map(({ firstManifestIndex, ...item }) => item);

const correctiveQueue = awardedFilms
  .filter((item) => item.status !== "PRODUCTION_VERIFIED")
  .map((item, index) => ({
    order: index + 1,
    title: item.title,
    filmYear: item.filmYear,
    awards: item.awards,
    status: item.status,
    scenarioId: item.scenarioId,
    nextGate: item.status === "MISSING_CANDIDATE"
      ? "candidate_reconciliation_and_atlas_reuse_check"
      : item.status === "SELECTED_NOT_MATERIALIZED"
        ? "production_case_materialization"
        : "production_verification",
  }));

const coverageByYear = [...expectedObligationsByYear.keys()].map((year) => {
  const yearObligations = obligations.filter((item) => item.awardYear === year);
  const yearFilms = awardedFilms.filter((item) => item.filmYear === year);
  return {
    year,
    obligations: yearObligations.length,
    productionVerifiedObligations: yearObligations.filter((item) => item.productionVerified).length,
    uniqueAwardedFilms: yearFilms.length,
    productionVerifiedFilms: yearFilms.filter((item) => item.productionVerified).length,
    unresolvedFilms: yearFilms.filter((item) => !item.productionVerified).length,
  };
});

const report = {
  schemaVersion: "1.0",
  auditDate: "2026-09-05",
  title: "Chapter 19 Cannes Competition Major-Prizes Audit 2020–2025",
  phase: "cannes_major_prizes",
  status: correctiveQueue.length === 0 ? "complete" : "source_first_reconciliation_open",
  scope: {
    frozenCandidateBaseline: "2020–2025",
    competitionAwardYears: [2021, 2022, 2023, 2024, 2025],
    cannes2020NoCompetitionPalmares: true,
    included: [
      "Palme d'Or",
      "Grand Prix",
      "Jury Prize",
      "Best Director",
      "Best Screenplay",
      "Best acting/performance prizes",
      "Competition-jury special or anniversary prizes explicitly present in the official annual winners list",
    ],
    excluded: [
      "Honorary Palme d'Or",
      "Short Films",
      "Un Certain Regard",
      "Caméra d'Or",
      "La Cinef",
      "CST / Superior Technical Commission",
      "Independent or parallel-section prizes",
    ],
  },
  semantics: {
    awardObligationVsFilmIdentity: "One film can satisfy more than one award obligation. Award obligations are preserved individually while the corrective queue is deduplicated to one film-level reconciliation task.",
    missingCandidateIsNotNewScenarioProof: "MISSING_CANDIDATE means only that the frozen Chapter 19 candidate matrix lacks the film. The next gate must search the existing Atlas, Film Study and Production Verification registry before any new scenario identity is authored.",
    reuseFirst: "If exactly one production-verified Atlas identity already exists, reconcile the candidate to USE_EXISTING and enrich evidence in place rather than duplicating the scenario.",
    sourceFirstForNewIdentity: "A genuinely absent film requires a source-first Production Case, 17-area Film Study and Production Verification before it can become production-complete.",
    chapterCompletionRule: "Closing this Cannes phase still does not prove Chapter 19 film-historical completion; Venice, Berlinale, Academy Awards and relevant regional phases remain separate gates.",
  },
  prerequisites: {
    topPrizeGateClosed: true,
    topPrizeCorrectiveQueue: topPrize.correctiveQueue.length,
  },
  technicalBaseline: {
    atlasExpected: chapterNineteen.atlas.expectedCount,
    atlasActual: chapterNineteen.atlas.actualCount,
    productionVerificationIds: chapterNineteen.verificationIndex.literalVerifiedScenarioIds,
    chapterNineteenCandidates: chapterNineteen.candidates.length,
  },
  officialSources,
  knownNoAwardYears,
  obligations,
  awardedFilms,
  coverageByYear,
  summary: {
    awardObligations: obligations.length,
    productionVerifiedObligations: obligations.filter((item) => item.productionVerified).length,
    uniqueAwardedFilms: awardedFilms.length,
    productionVerifiedFilms: awardedFilms.filter((item) => item.productionVerified).length,
    unresolvedFilms: awardedFilms.filter((item) => !item.productionVerified).length,
    missingCandidateFilms: awardedFilms.filter((item) => item.status === "MISSING_CANDIDATE").length,
    cannesMajorPrizesCompletionProven: correctiveQueue.length === 0,
    filmHistoricalSelectionCompletionProven: false,
  },
  correctiveQueue,
  nextPhaseAfterClosure: "Venice main-competition major prizes, 2020–2025",
};

const outputPath = process.argv.find((arg) => arg.startsWith("--write="))?.slice("--write=".length);
if (outputPath) {
  const absolute = path.resolve(root, outputPath);
  mkdirSync(path.dirname(absolute), { recursive: true });
  writeFileSync(absolute, `${JSON.stringify(report, null, 2)}\n`);
}

console.log(JSON.stringify(report, null, 2));
