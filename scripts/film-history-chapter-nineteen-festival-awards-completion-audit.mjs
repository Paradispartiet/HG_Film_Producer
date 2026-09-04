import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const chapterNineteenAuditPath = path.join(root, "scripts", "film-history-chapter-nineteen-atlas-audit.mjs");

const officialSources = {
  cannes2021: "https://www.festival-cannes.com/en/retrospective/2021/palmares/",
  cannes2022: "https://www.festival-cannes.com/en/retrospective/2022/palmares/",
  cannes2023: "https://www.festival-cannes.com/en/retrospective/2023/palmares/",
  cannes2024: "https://www.festival-cannes.com/en/retrospective/2024/palmares/",
  cannes2025: "https://www.festival-cannes.com/en/press/press-releases/the-78th-festival-de-cannes-winners-list/",
  veniceHistory: "https://www.labiennale.org/en/history-venice-film-festival",
  berlinAwards: "https://www.berlinale.de/en/archive/awards-juries/awards.html",
  berlin2020: "https://www.berlinale.de/media/en/download/awards-juries/berlinale-awards-2020.pdf",
  berlin2021: "https://b2b.berlinale.de/en/partner/postings/1307-the-award-winners-of-the-competition",
  berlin2023: "https://www.berlinale.de/media/en/download/awards-juries/berlinale-awards-2023.pdf",
  berlin2025: "https://www.berlinale.de/media/en/download/awards-juries/berlinale-preise-2025.pdf",
};

const topPrizeObligations = [
  {
    festival: "Festival de Cannes",
    awardYear: 2021,
    filmYear: 2021,
    award: "Palme d'Or",
    title: "Titane",
    originalTitle: "Titane",
    aliases: [],
    source: officialSources.cannes2021,
  },
  {
    festival: "Festival de Cannes",
    awardYear: 2022,
    filmYear: 2022,
    award: "Palme d'Or",
    title: "Triangle of Sadness",
    originalTitle: "Triangle of Sadness",
    aliases: ["Sans filtre"],
    source: officialSources.cannes2022,
    correctionOrder: 1,
  },
  {
    festival: "Festival de Cannes",
    awardYear: 2023,
    filmYear: 2023,
    award: "Palme d'Or",
    title: "Anatomy of a Fall",
    originalTitle: "Anatomie d'une chute",
    aliases: [],
    source: officialSources.cannes2023,
  },
  {
    festival: "Festival de Cannes",
    awardYear: 2024,
    filmYear: 2024,
    award: "Palme d'Or",
    title: "Anora",
    originalTitle: "Anora",
    aliases: [],
    source: officialSources.cannes2024,
  },
  {
    festival: "Festival de Cannes",
    awardYear: 2025,
    filmYear: 2025,
    award: "Palme d'Or",
    title: "It Was Just an Accident",
    originalTitle: "Yek tasadef sadeh",
    aliases: ["Un simple accident"],
    source: officialSources.cannes2025,
  },
  {
    festival: "Venice International Film Festival",
    awardYear: 2020,
    filmYear: 2020,
    award: "Golden Lion for Best Film",
    title: "Nomadland",
    originalTitle: "Nomadland",
    aliases: [],
    source: officialSources.veniceHistory,
  },
  {
    festival: "Venice International Film Festival",
    awardYear: 2021,
    filmYear: 2021,
    award: "Golden Lion for Best Film",
    title: "Happening",
    originalTitle: "L'Événement",
    aliases: ["L'Evenement"],
    source: officialSources.veniceHistory,
    correctionOrder: 3,
  },
  {
    festival: "Venice International Film Festival",
    awardYear: 2022,
    filmYear: 2022,
    award: "Golden Lion for Best Film",
    title: "All the Beauty and the Bloodshed",
    originalTitle: "All the Beauty and the Bloodshed",
    aliases: [],
    source: officialSources.veniceHistory,
    correctionOrder: 4,
  },
  {
    festival: "Venice International Film Festival",
    awardYear: 2023,
    filmYear: 2023,
    award: "Golden Lion for Best Film",
    title: "Poor Things",
    originalTitle: "Poor Things",
    aliases: [],
    source: officialSources.veniceHistory,
  },
  {
    festival: "Venice International Film Festival",
    awardYear: 2024,
    filmYear: 2024,
    award: "Golden Lion for Best Film",
    title: "The Room Next Door",
    originalTitle: "The Room Next Door",
    aliases: [],
    source: officialSources.veniceHistory,
    correctionOrder: 5,
  },
  {
    festival: "Venice International Film Festival",
    awardYear: 2025,
    filmYear: 2025,
    award: "Golden Lion for Best Film",
    title: "Father Mother Sister Brother",
    originalTitle: "Father Mother Sister Brother",
    aliases: [],
    source: officialSources.veniceHistory,
    correctionOrder: 10,
  },
  {
    festival: "Berlin International Film Festival",
    awardYear: 2020,
    filmYear: 2020,
    award: "Golden Bear for Best Film",
    title: "There Is No Evil",
    originalTitle: "Sheytan vojud nadarad",
    aliases: ["There is no Evil"],
    source: officialSources.berlin2020,
    correctionOrder: 6,
  },
  {
    festival: "Berlin International Film Festival",
    awardYear: 2021,
    filmYear: 2021,
    award: "Golden Bear for Best Film",
    title: "Bad Luck Banging or Loony Porn",
    originalTitle: "Babardeală cu bucluc sau porno balamuc",
    aliases: [],
    source: officialSources.berlin2021,
    correctionOrder: 7,
  },
  {
    festival: "Berlin International Film Festival",
    awardYear: 2022,
    filmYear: 2022,
    award: "Golden Bear for Best Film",
    title: "Alcarràs",
    originalTitle: "Alcarràs",
    aliases: ["Alcarras"],
    source: officialSources.berlinAwards,
    correctionOrder: 8,
  },
  {
    festival: "Berlin International Film Festival",
    awardYear: 2023,
    filmYear: 2023,
    award: "Golden Bear for Best Film",
    title: "On the Adamant",
    originalTitle: "Sur l'Adamant",
    aliases: [],
    source: officialSources.berlin2023,
    correctionOrder: 9,
  },
  {
    festival: "Berlin International Film Festival",
    awardYear: 2024,
    filmYear: 2024,
    award: "Golden Bear for Best Film",
    title: "Dahomey",
    originalTitle: "Dahomey",
    aliases: [],
    source: officialSources.berlinAwards,
  },
  {
    festival: "Berlin International Film Festival",
    awardYear: 2025,
    filmYear: 2024,
    award: "Golden Bear for Best Film",
    title: "Drømmer",
    originalTitle: "Drømmer",
    aliases: ["Dreams", "Dreams (Sex Love)", "Dreams (Sex, Love)"],
    source: officialSources.berlin2025,
    correctionOrder: 2,
  },
];

const knownNoAwardYears = [
  {
    festival: "Festival de Cannes",
    awardYear: 2020,
    reason: "The 2020 Festival de Cannes was cancelled; there is no Palme d'Or feature-film obligation for that year.",
  },
];

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

function matchesObligation(candidate, obligation) {
  if (candidate.year !== obligation.filmYear) return false;
  const candidateTitles = new Set(acceptedTitles(candidate));
  return acceptedTitles(obligation).some((title) => candidateTitles.has(title));
}

function validateManifest() {
  const keys = new Set();
  const correctionOrders = new Set();
  for (const item of topPrizeObligations) {
    if (item.awardYear < 2020 || item.awardYear > 2025) throw new Error(`${item.title}: award obligation must stay inside the frozen 2020-2025 baseline.`);
    if (!item.source.startsWith("https://")) throw new Error(`${item.title}: official source URL is required.`);
    const key = `${item.festival}|${item.awardYear}|${item.award}`;
    if (keys.has(key)) throw new Error(`Duplicate top-prize obligation: ${key}`);
    keys.add(key);
    if (item.correctionOrder !== undefined) {
      if (correctionOrders.has(item.correctionOrder)) throw new Error(`Duplicate correction order ${item.correctionOrder}.`);
      correctionOrders.add(item.correctionOrder);
    }
  }
}

function loadChapterNineteenAudit() {
  const stdout = execFileSync(process.execPath, [chapterNineteenAuditPath], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  return JSON.parse(stdout);
}

validateManifest();
const chapterNineteen = loadChapterNineteenAudit();

if (chapterNineteen.chapter?.candidateBaseline !== "2020–2025") {
  throw new Error(`Festival-awards audit requires Chapter 19 candidateBaseline 2020–2025, found ${chapterNineteen.chapter?.candidateBaseline ?? "missing"}.`);
}
if (chapterNineteen.governance?.currentYearExcludedFromFrozenBaseline !== 2026) {
  throw new Error("Festival-awards audit requires 2026 to remain excluded from the frozen Chapter 19 candidate baseline.");
}
if (chapterNineteen.atlas?.actualCount !== chapterNineteen.atlas?.expectedCount) {
  throw new Error(`Festival-awards audit requires the technical Atlas baseline to remain internally complete; found ${chapterNineteen.atlas?.actualCount}/${chapterNineteen.atlas?.expectedCount}.`);
}

const obligations = topPrizeObligations.map((obligation) => {
  const candidateMatches = chapterNineteen.candidates.filter((candidate) => matchesObligation(candidate, obligation));
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
    candidatePresent: Boolean(candidate),
    candidateDecision: candidate?.decision ?? null,
    scenarioId: candidate?.scenarioId ?? null,
    atlasMatches: candidate?.matches ?? 0,
    productionVerified: candidate?.productionVerified ?? false,
    status,
  };
});

const unresolved = obligations.filter((item) => item.status !== "PRODUCTION_VERIFIED");
const correctiveQueue = unresolved
  .slice()
  .sort((left, right) => (left.correctionOrder ?? Number.MAX_SAFE_INTEGER) - (right.correctionOrder ?? Number.MAX_SAFE_INTEGER))
  .map((item) => ({
    order: item.correctionOrder ?? null,
    title: item.title,
    filmYear: item.filmYear,
    awardYear: item.awardYear,
    festival: item.festival,
    award: item.award,
    status: item.status,
    nextGate: item.status === "MISSING_CANDIDATE" ? "source_first_candidate_addition" : item.status === "SELECTED_NOT_MATERIALIZED" ? "production_case_materialization" : "production_verification",
  }));

const selectionComplete = obligations.every((item) => item.candidatePresent);
const topPrizeProductionComplete = obligations.every((item) => item.productionVerified);

const report = {
  schemaVersion: "1.0",
  auditDate: "2026-09-03",
  title: "Chapter 19 Festival & Awards Completion Audit 2020–2025",
  scope: {
    frozenCandidateBaseline: "2020–2025",
    currentYearExcluded: 2026,
    festivals: ["Festival de Cannes", "Venice International Film Festival", "Berlin International Film Festival"],
    awardTier: "top_feature_film_prize",
    cannes2020NoAward: true,
  },
  semantics: {
    technicalAtlasCompletion: "The current Atlas count proves completeness only against the materialized Atlas and Production Verification registry; it does not prove festival-selection completeness.",
    awardFilmYearSeparation: "Festival award year and film production/release year are separate fields. Drømmer is a 2024 film whose Golden Bear was awarded in 2025.",
    selectionCompletion: "Festival selection completeness is independently measured against official top-prize obligations for the frozen 2020–2025 baseline.",
    failClosed: "An award obligation cannot become production-complete merely by entering this manifest; it must be present in the Chapter 19 candidate matrix, match exactly one Atlas scenario, and have Production Verification.",
    chapterCompletionRule: "Do not describe Chapter 19 as film-historically complete while this gate or the later awards-expansion phases remain open.",
  },
  technicalBaseline: {
    atlasExpected: chapterNineteen.atlas.expectedCount,
    atlasActual: chapterNineteen.atlas.actualCount,
    productionVerificationIds: chapterNineteen.verificationIndex.literalVerifiedScenarioIds,
    technicallyCompleteAgainstExistingAtlas: chapterNineteen.atlas.expectedCount === chapterNineteen.atlas.actualCount,
  },
  knownNoAwardYears,
  obligations,
  summary: {
    obligations: obligations.length,
    candidatePresent: obligations.filter((item) => item.candidatePresent).length,
    productionVerified: obligations.filter((item) => item.productionVerified).length,
    missingCandidate: obligations.filter((item) => item.status === "MISSING_CANDIDATE").length,
    selectionComplete,
    festivalTopPrizeCompletionProven: topPrizeProductionComplete,
    filmHistoricalSelectionCompletionProven: false,
  },
  correctiveQueue,
  deferredUntilFestivalTopPrizeGateCloses: ["Days", "The Green Knight"],
  laterAuditPhasesRequiredBeforeFilmHistoricalCompletion: [
    "Cannes main-jury prizes and major performance/directing prizes, 2020–2025",
    "Venice main-competition major prizes, 2020–2025",
    "Berlinale main-competition major prizes, 2020–2025",
    "Academy Awards: Best Picture, International Feature, Documentary Feature and Animated Feature, 2020–2025 eligibility/award cycles mapped consistently",
    "Relevant European and regional awards where they add production-history coverage not already captured",
  ],
};

const outputPath = process.argv.find((arg) => arg.startsWith("--write="))?.slice("--write=".length);
if (outputPath) {
  const absolute = path.resolve(root, outputPath);
  mkdirSync(path.dirname(absolute), { recursive: true });
  writeFileSync(absolute, `${JSON.stringify(report, null, 2)}\n`);
}

console.log(JSON.stringify(report, null, 2));
