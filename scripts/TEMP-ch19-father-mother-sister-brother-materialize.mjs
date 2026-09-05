import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");
const write = (file, content) => {
  const absolute = path.join(root, file);
  mkdirSync(path.dirname(absolute), { recursive: true });
  writeFileSync(absolute, content);
};
const invariant = (condition, message) => { if (!condition) throw new Error(message); };

function countOccurrences(source, needle) {
  let count = 0;
  let cursor = 0;
  while (true) {
    const index = source.indexOf(needle, cursor);
    if (index === -1) return count;
    count += 1;
    cursor = index + needle.length;
  }
}

function replaceExact(file, before, after, expectedCount = 1) {
  const source = read(file);
  const count = countOccurrences(source, before);
  if (count !== expectedCount) throw new Error(`${file}: expected ${expectedCount} occurrences, found ${count}: ${before.slice(0, 180)}`);
  write(file, source.split(before).join(after));
}

function createPermanent(file, content) {
  const absolute = path.join(root, file);
  if (existsSync(absolute)) throw new Error(`${file}: permanent file already exists; refusing overwrite`);
  write(file, content);
}

function runJson(script, args = []) {
  const stdout = execFileSync(process.execPath, [path.join(root, script), ...args], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "inherit"],
  });
  return JSON.parse(stdout);
}

function run(command, args) {
  execFileSync(command, args, { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });
}

const baseline = runJson("scripts/film-history-chapter-nineteen-atlas-audit.mjs");
const festivalBaseline = runJson("scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs");
invariant(baseline.atlas?.actualCount === baseline.atlas?.expectedCount, `Baseline Atlas is not closed: ${baseline.atlas?.actualCount}/${baseline.atlas?.expectedCount}`);
invariant(baseline.verificationIndex?.literalVerifiedScenarioIds === baseline.atlas.actualCount, "Baseline Atlas/PV identity invariant is broken.");
invariant(baseline.candidates?.length === 69, `Expected post-Adamant candidate baseline 69, found ${baseline.candidates?.length}`);
invariant(baseline.byDecision?.USE_EXISTING?.length === 67 && baseline.byDecision?.P2?.length === 2, "Expected post-Adamant 67 USE_EXISTING / 2 P2 queue.");
const fatherBefore = festivalBaseline.obligations?.find((item) => item.title === "Father Mother Sister Brother");
invariant(fatherBefore?.correctionOrder === 10 && fatherBefore?.filmYear === 2025 && fatherBefore?.awardYear === 2025 && fatherBefore?.status === "MISSING_CANDIDATE", `Festival gate does not expose expected final top-prize gap: ${JSON.stringify(fatherBefore)}`);
invariant(festivalBaseline.correctiveQueue?.[0]?.title === "Father Mother Sister Brother", `Unexpected festival queue leader: ${JSON.stringify(festivalBaseline.correctiveQueue?.[0])}`);

const newScenarioId = "scenario_father_mother_sister_brother_2025";
const nextAtlasCount = baseline.atlas.actualCount + 1;
const nextCandidateCount = baseline.candidates.length + 1;
const nextUseExistingCount = baseline.byDecision.USE_EXISTING.length + 1;
const next2025Count = baseline.candidates.filter((candidate) => candidate.year === 2025).length + 1;

for (const file of [
  "src/ui/data/filmScenarios.ts",
  "src/ui/data/scenarioFilmStudyMap.ts",
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "scripts/production-case-rest-audit.mjs",
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
]) {
  invariant(!read(file).includes(newScenarioId), `${file}: Father Mother Sister Brother identity already exists; refusing duplicate materialization.`);
}

const expansion = `import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenFatherMotherSisterBrotherExpansionDefinitions = [
  {
    id: "scenario_father_mother_sister_brother_2025",
    title: "Father Mother Sister Brother",
    originalTitle: "Father Mother Sister Brother",
    aliases: [],
    year: 2025,
    titleType: "Movie",
    runtimeMins: 110,
    directors: ["Jim Jarmusch"],
    genres: ["Comedy", "Drama"],
    sourceId: "father_mother_sister_brother_official_2025",
    sourceUrl: "https://www.labiennale.org/en/cinema/2025/venezia-82-competition/father-mother-sister-brother",
    scenarioType: "award_priority_venice_2025_golden_lion_triptych_us_ireland_france_multi_unit_dp_split_ten_days_per_section_1_85_dcp_5_1_independent_coproduction_uncertainty_bounded",
    premise: "Build Father Mother Sister Brother as the final correctionOrder-10 top-prize source-first Production Case for Chapter 19. The 2025 Venice competition record identifies Jim Jarmusch as writer-director; a 110-minute USA/Ireland/France production; Frederick Elmes and Yorick Le Saux as cinematographers; Affonso Gonçalves as editor; Mark Friedberg and Marco Bittner Rosser as production designers; Catherine George as costume designer; and Robert Hein for sound. The Match Factory independently locks 110 minutes, 1.85:1, DCP and 5.1, plus badjetlag, CG Cinema and Hail Mary Pictures in the production structure and the wider presentation/association network. Screen Ireland locks Dublin as the Irish location, Hail Mary Pictures as the Irish production company, public support and named financing partners. Jarmusch told Film Comment that each of the three sections had about ten shooting days, with Frederick Elmes and Mark Friedberg handling the New Jersey section and Yorick Le Saux plus Marco Bittner Rosser handling the Ireland and Paris sections. Saint Laurent's official production page describes the film as a carefully constructed triptych: Father in the northeastern United States, Mother in Dublin and Sister Brother in Paris. Contemporary trade reporting also records the New Jersey location as constrained by a union-radius budget boundary. The production case therefore treats the film as one feature assembled through three geographically distinct units with deliberate craft continuity and variation. It locks the source-backed credits, section geography, approximate ten-day-per-section schedule, DP/production-design split, 1.85 DCP/5.1 delivery and transnational financing/co-production structure while refusing to invent camera bodies, lenses, capture format, filtration, lighting packages, exact total budget, partner recoupment shares, complete insurance/union deal terms, full data workflow, edit hardware, detailed sound-recording chain, ADR/Foley architecture, grading system, VFX census or delivery-master lineage beyond the sourced DCP/5.1 facts.",
    requiredChoicesSeed: {
      screenplay: ["triptych_structure", "three_family_variations", "section_specific_geography", "quiet_observational_tone", "union_radius_budget_constraint"],
      camera: ["frederick_elmes_new_jersey", "yorick_le_saux_dublin_paris", "ratio_1_85_verified", "camera_package_unresolved"],
      editing: ["affonso_goncalves_verified", "triptych_continuity_and_difference", "section_transitions", "edit_infrastructure_unresolved"],
      sound: ["robert_hein_verified", "5_1_verified", "three_location_sound_continuity", "recording_chain_unresolved"],
      themes: ["film_history", "2025", "venice_golden_lion", "jim_jarmusch", "triptych", "new_jersey", "dublin", "paris", "transnational_coproduction", "independent_production", "chapter19"]
    },
    learningGoals: [
      "Explain why Father Mother Sister Brother must be a new Atlas/PV identity rather than a reuse-only festival correction.",
      "Lock 2025 as the Chapter 19 film and Venice award year.",
      "Identify Jim Jarmusch as writer and director.",
      "Use the official triptych structure rather than treating the film as three unrelated shorts.",
      "Map Father to the northeastern United States, Mother to Dublin and Sister Brother to Paris.",
      "Use 110 minutes as the locked production-case runtime.",
      "Use 1.85:1 as the documented aspect ratio without reverse-engineering lens or sensor choices.",
      "Use DCP as the documented format without inferring the original capture format.",
      "Use 5.1 as the documented sound format without inventing stems or monitoring architecture.",
      "Identify Frederick Elmes as cinematographer for the New Jersey section.",
      "Identify Yorick Le Saux as cinematographer for the Dublin and Paris sections.",
      "Identify Mark Friedberg as production designer for the New Jersey section.",
      "Identify Marco Bittner Rosser as production designer for the Irish and French sections.",
      "Identify Affonso Gonçalves as editor across the feature.",
      "Identify Catherine George as costume designer.",
      "Identify Robert Hein as the documented sound designer/sound credit anchor.",
      "Recognize Jim Jarmusch and Anika as the documented music creators.",
      "Use Jarmusch's approximately ten shooting days per section as a bounded schedule fact.",
      "Do not convert three approximate ten-day section schedules into an invented exact master schedule.",
      "Explain why a multi-country triptych creates unit-to-unit continuity challenges in image, design, performance and sound.",
      "Recognize badjetlag, CG Cinema and Hail Mary Pictures in the documented production structure.",
      "Recognize Screen Ireland support and named financiers without inventing financing shares.",
      "Recognize MUBI, Saint Laurent and The Apartment/Fremantle within the documented presentation/association structure.",
      "Explain how the New Jersey union-radius constraint can affect location choice and budget without extrapolating unknown labor terms.",
      "Distinguish production geography from production-company nationality lists.",
      "Keep exact budget, cash-flow schedule, ownership and recoupment waterfall unresolved.",
      "Keep camera body, lens set, filtration, codec, media and data-management details unresolved.",
      "Keep exact lighting fixtures, exposure strategy and power-distribution details unresolved.",
      "Keep edit hardware, storage, project architecture, conform and backup workflow unresolved.",
      "Keep detailed production-sound equipment, ADR/Foley architecture, grading platform and VFX census unresolved.",
      "Close the case only when triptych structure, geography, schedule, credited craft split, technical delivery and uncertainty boundaries agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the 2025 Golden Lion obligation", player_task: "Treat Venice 2025 as historical selection priority, not as evidence for unsupported production detail." },
      { id: "triptych_structure", label: "Design one feature as three sections", player_task: "Preserve the Father / Mother / Sister Brother structure as one coordinated production system." },
      { id: "new_jersey_unit", label: "Build the New Jersey section", player_task: "Lock Elmes and Friedberg to the first section and preserve the sourced union-radius location constraint." },
      { id: "dublin_unit", label: "Build the Dublin section", player_task: "Lock Le Saux and Bittner Rosser to the Irish section with Screen Ireland/Hail Mary production context." },
      { id: "paris_unit", label: "Build the Paris section", player_task: "Carry the Le Saux/Bittner Rosser craft unit into the French section without flattening location difference." },
      { id: "schedule", label: "Bound the section schedules", player_task: "Use about ten shooting days per section without inventing an exact total master schedule." },
      { id: "screenplay", label: "Protect triptych repetition and variation", player_task: "Use Jarmusch's written structure to coordinate three family encounters without forcing identical beats." },
      { id: "performance", label: "Coordinate ensemble tone", player_task: "Maintain quiet observational comedy/melancholy across separate casts and countries." },
      { id: "cinematography_split", label: "Coordinate two DPs", player_task: "Preserve Elmes/New Jersey and Le Saux/Dublin-Paris as a documented craft split." },
      { id: "frame_delivery", label: "Lock 1.85 DCP", player_task: "Use the documented 1.85:1 DCP delivery while leaving capture package unresolved." },
      { id: "production_design_split", label: "Coordinate two production designers", player_task: "Preserve Friedberg/New Jersey and Bittner Rosser/Ireland-Paris while keeping the triptych coherent." },
      { id: "costume", label: "Lock costume authorship", player_task: "Use Catherine George's credited role without inventing an unsourced wardrobe workflow." },
      { id: "editing", label: "Assemble the triptych", player_task: "Use Gonçalves's verified edit role to manage continuity, contrast and transitions across sections." },
      { id: "sound", label: "Build cross-location sound continuity", player_task: "Use Hein and 5.1 as verified anchors while leaving the detailed recording/post chain open." },
      { id: "music", label: "Place the documented music authors", player_task: "Use Jarmusch and Anika's music credit without inventing session or licensing detail." },
      { id: "coproduction", label: "Map transnational production partners", player_task: "Separate production, co-production, presentation and financing roles without inventing shares." },
      { id: "labor_budget_boundary", label: "Respect the New Jersey labor-radius constraint", player_task: "Treat the sourced union-radius choice as a budget/location constraint, not a full labor-contract record." },
      { id: "technical_boundary", label: "Freeze unsupported technical claims", player_task: "Keep cameras, lenses, light, media, data, grading and VFX details unresolved unless directly sourced." },
      { id: "finance_boundary", label: "Freeze unsupported finance claims", player_task: "Do not infer budget, ownership, cash flow or recoupment percentages from partner lists." },
      { id: "production_verification", label: "Close the festival top-prize case", player_task: "Verify one unique scenario, full 17-area Film Study, PV identity and removal from the festival corrective queue." }
    ]
  }
] as const;

export function mergeChapterNineteenFatherMotherSisterBrotherExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenFatherMotherSisterBrotherExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_father_mother_sister_brother_verified",
      source: { list_id: "manual_chapter_nineteen_father_mother_sister_brother_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: { title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 },
      scenario_type: definition.scenarioType,
      production_challenge: definition.premise,
      required_choices_seed: definition.requiredChoicesSeed,
      phases: definition.phases,
      learning_goals_seed: definition.learningGoals,
      manual_enrichment_needed: [],
    });
    nextPosition += 1;
  }
  return merged;
}
`;

const expansionTest = `import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenFatherMotherSisterBrotherExpansionDefinitions, mergeChapterNineteenFatherMotherSisterBrotherExpansion } from "./chapterNineteenFatherMotherSisterBrotherExpansion.js";

test("Father Mother Sister Brother source-first case locks the multi-country triptych production contract", () => {
  assert.equal(chapterNineteenFatherMotherSisterBrotherExpansionDefinitions.length, 1);
  const film = chapterNineteenFatherMotherSisterBrotherExpansionDefinitions[0];
  assert.equal(film.id, "scenario_father_mother_sister_brother_2025");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 110);
  assert.deepEqual(film.directors, ["Jim Jarmusch"]);
  assert.match(film.scenarioType, /venice_2025_golden_lion/);
  assert.match(film.premise, /about ten shooting days/);
  assert.match(film.premise, /Frederick Elmes/);
  assert.match(film.premise, /Yorick Le Saux/);
  assert.match(film.premise, /1.85:1/);
  assert.match(film.premise, /DCP and 5.1/);
  assert.ok(film.requiredChoicesSeed.camera.includes("camera_package_unresolved"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Father Mother Sister Brother expansion is idempotent by title/year", () => {
  const once = mergeChapterNineteenFatherMotherSisterBrotherExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_father_mother_sister_brother_2025");
  const twice = mergeChapterNineteenFatherMotherSisterBrotherExpansion(once);
  assert.equal(twice.length, 1);
});
`;

const filmStudy = `import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const fatherMotherSisterBrotherFilmHistoryProfile = {
  scenarioId: "scenario_father_mother_sister_brother_2025",
  period: "2025 transnational independent triptych: one feature coordinated across New Jersey, Dublin and Paris with split cinematography/production-design units and unified editing/sound delivery",
  traditions: ["American independent cinema", "transnational co-production", "triptych narrative", "ensemble character study", "festival auteur cinema", "multi-country location production"],
  before: "Father Mother Sister Brother extends Jim Jarmusch's independent, observational character cinema into a formally explicit three-part feature. Official production and festival records establish a 2025 USA/Ireland/France feature built around three family encounters in three places. The documented production network crosses badjetlag, CG Cinema, Hail Mary Pictures, MUBI, Saint Laurent, The Apartment/Fremantle, Screen Ireland and additional partners, making transnational coordination part of the film's production history rather than merely its story setting.",
  moment: "The production was organized as three geographically distinct sections: Father in the northeastern United States/New Jersey, Mother in Dublin and Sister Brother in Paris. Jarmusch reports about ten shooting days for each section. Frederick Elmes and Mark Friedberg handled the New Jersey cinematography/design unit; Yorick Le Saux and Marco Bittner Rosser handled Ireland and Paris. Affonso Gonçalves edited the completed feature, Catherine George designed costumes, Robert Hein anchors the sound-design credit, and Jarmusch with Anika are credited for music. The Match Factory records a 110-minute 1.85:1 DCP with 5.1 sound. Contemporary reporting also documents that the New Jersey location choice stayed inside a union-radius boundary to avoid a major budget increase. Those facts make schedule, location, labor, craft handoff and post unification playable production systems.",
  after: "Winning the 2025 Golden Lion establishes festival-priority and reception significance, while the production case remains deliberately narrower than a speculative making-of. The locked sources do not establish camera bodies, lenses, filters, capture codec/media, exact lighting packages, total budget, partner percentages, full union terms, complete data-management workflow, edit hardware/storage, detailed production-sound chain, ADR/Foley architecture, grading software, VFX census or full master lineage. The case therefore models how production history can remain technically useful while preserving explicit uncertainty boundaries.",
  historyQuestion: "How can one independent feature preserve a coherent authorial and craft identity while moving a triptych through three countries, two cinematographers, two production-design units and distinct local production constraints?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "La Biennale and Screen Ireland place the feature in the 2025 Venice cycle and document its USA/Ireland/France production context." },
    { area: "movement_and_tradition", status: "mapped", note: "The film combines Jarmusch's independent auteur practice with a contemporary transnational triptych and festival-circulation model." },
    { area: "industry_and_production_context", status: "source_verified", note: "Official sources document badjetlag, CG Cinema, Hail Mary Pictures, Screen Ireland support and wider presentation/financing partners; ownership and recoupment shares remain unresolved." },
    { area: "reception_and_legacy", status: "source_verified", note: "The 2025 Venice Golden Lion establishes the top-prize obligation that promotes the film into Chapter 19's production-history selection." },
    { area: "screenplay", status: "source_verified", note: "Jarmusch is credited as writer; the official triptych construction and three family variations are locked, while unsupported draft/revision history is not invented." },
    { area: "directing", status: "source_verified", note: "Jarmusch directed all three sections; the production challenge is maintaining tonal continuity across distinct local units and ensembles." },
    { area: "performance", status: "mapped", note: "Three ensembles inhabit parallel family encounters; production planning must preserve intimate timing and tonal restraint without fabricating rehearsal methods." },
    { area: "production_design", status: "source_verified", note: "Mark Friedberg is tied to New Jersey and Marco Bittner Rosser to Ireland/Paris in Jarmusch's production account, creating a documented design handoff across sections." },
    { area: "costume_makeup", status: "source_verified", note: "Catherine George is the credited costume designer; no complete makeup/hair workflow is inferred from available top-level records." },
    { area: "cinematography", status: "source_verified", note: "Frederick Elmes photographed New Jersey; Yorick Le Saux photographed Ireland and Paris. The two-DP split is documented directly by Jarmusch." },
    { area: "lighting", status: "research_pending", note: "No locked source here establishes a complete lighting package or exposure plan across the three units." },
    { area: "camera_format", status: "mapped", note: "1.85:1 and DCP are documented delivery facts; capture format, camera body, lenses, filters, codec, media and data workflow remain unresolved." },
    { area: "editing", status: "source_verified", note: "Affonso Gonçalves is the credited editor; the three-section structure makes transitions, repetition and variation core edit problems without establishing hardware/project details." },
    { area: "sound_design", status: "source_verified", note: "Robert Hein is the official sound-design credit and 5.1 is documented; production mixers, stems, ADR/Foley and monitoring chain are not fully established by the locked core sources." },
    { area: "music", status: "source_verified", note: "Jim Jarmusch and Anika are credited for music; session, recording and licensing details remain outside the verified boundary." },
    { area: "effects_animation", status: "research_pending", note: "No complete VFX/effects census is established, so the case does not infer an effects-free pipeline from the film's restrained appearance." },
    { area: "documentary_method", status: "not_central", note: "This is scripted fiction; observational tone is an aesthetic description, not a documentary production method." }
  ]
} as const satisfies FilmHistoryProfile;
`;

const verification = `import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fatherMotherSisterBrotherProductionCaseVerification = {
  scenarioId: "scenario_father_mother_sister_brother_2025",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "Father Mother Sister Brother is verified as a new 2025 Chapter 19 Production Case and the final correctionOrder-10 festival-top-prize obligation. La Biennale documents the 110-minute USA/Ireland/France competition film, Jarmusch's screenplay/direction, Elmes and Le Saux on cinematography, Gonçalves on editing, Friedberg and Bittner Rosser on production design, George on costume and Hein on sound. The Match Factory independently locks 110 minutes, 1.85:1, DCP, 5.1 and the production/presentation network. Screen Ireland locks Dublin, Hail Mary Pictures, public support and named financing partners. Jarmusch's Film Comment interview locks approximately ten shooting days per section and the craft split: Elmes/Friedberg for New Jersey, Le Saux/Bittner Rosser for Ireland and Paris. Saint Laurent documents the three-part geography and character-study structure. Trade reporting supplies the bounded New Jersey union-radius budget constraint. Unsupported capture, lighting, exact budget/shares, complete labor terms, data, edit hardware, detailed sound-post, grading, VFX and master-lineage claims remain unresolved.",
  sources: [
    {
      title: "Father Mother Sister Brother — Venezia 82 Competition",
      publisher: "La Biennale di Venezia",
      url: "https://www.labiennale.org/en/cinema/2025/venezia-82-competition/father-mother-sister-brother",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting 110 minutes, USA/Ireland/France, screenplay/director, cinematographers, editor, production designers, costume, sound and production companies."
    },
    {
      title: "Father Mother Sister Brother",
      publisher: "The Match Factory",
      url: "https://www.the-match-factory.com/catalogue/films/father-mother-sister-brother.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Official sales/production catalogue supporting 110 minutes, 1.85:1, DCP, 5.1, key crew and the production/presentation/co-production network."
    },
    {
      title: "Production Slate 2025 — Father Mother Sister Brother",
      publisher: "Fís Éireann / Screen Ireland",
      url: "https://www.screenireland.ie/slate-catalogue-2025",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Institutional production slate supporting Dublin as the Irish location, Hail Mary Pictures, photography/editor credits and named financing/support partners."
    },
    {
      title: "Interview: Jim Jarmusch on Father Mother Sister Brother",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-jim-jarmusch-on-father-mother-sister-brother/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Jarmusch states that each section had about ten shooting days and identifies Elmes/Friedberg for New Jersey and Le Saux/Bittner Rosser for Ireland and Paris."
    },
    {
      title: "Father Mother Sister Brother — A film by Jim Jarmusch",
      publisher: "Saint Laurent Productions",
      url: "https://saintlaurentproductions.ysl.com/father-mother-sister-brother",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official production page supporting the triptych description, New Jersey/Dublin/Paris geography and principal craft credits."
    },
    {
      title: "Jim Jarmusch on Father Mother Sister Brother at Venice",
      publisher: "Variety",
      url: "https://variety.com/2025/film/global/jim-jarmusch-mubi-israel-father-mother-sister-brother-venice-film-festival-1236502496/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay"],
      note: "Trade reporting from the Venice press conference supporting the New Jersey union-radius location/budget constraint and Jarmusch's rapid writing account; used only for those bounded claims."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

createPermanent("src/core/chapterNineteenFatherMotherSisterBrotherExpansion.ts", expansion);
createPermanent("src/core/chapterNineteenFatherMotherSisterBrotherExpansion.test.ts", expansionTest);
createPermanent("src/ui/data/scenarioFilmStudyChapterNineteenFatherMotherSisterBrother.ts", filmStudy);
createPermanent("src/ui/data/scenarioProductionVerificationFatherMotherSisterBrother.ts", verification);

replaceExact(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenOnTheAdamantExpansion } from "../../core/chapterNineteenOnTheAdamantExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";',
  'import { mergeChapterNineteenOnTheAdamantExpansion } from "../../core/chapterNineteenOnTheAdamantExpansion.js";\nimport { mergeChapterNineteenFatherMotherSisterBrotherExpansion } from "../../core/chapterNineteenFatherMotherSisterBrotherExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";',
);
replaceExact(
  "src/ui/data/filmScenarios.ts",
  "const chapterNineteenOnTheAdamantScenarios = mergeChapterNineteenOnTheAdamantExpansion(chapterNineteenDrommerScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenOnTheAdamantScenarios);",
  "const chapterNineteenOnTheAdamantScenarios = mergeChapterNineteenOnTheAdamantExpansion(chapterNineteenDrommerScenarios);\nconst chapterNineteenFatherMotherSisterBrotherScenarios = mergeChapterNineteenFatherMotherSisterBrotherExpansion(chapterNineteenOnTheAdamantScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenFatherMotherSisterBrotherScenarios);",
);
replaceExact(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_nineteen_on_the_adamant_expansion_2026+manual_chapter_nineteen_eo_expansion_2026",
  "+manual_chapter_nineteen_on_the_adamant_expansion_2026+manual_chapter_nineteen_father_mother_sister_brother_expansion_2026+manual_chapter_nineteen_eo_expansion_2026",
);

replaceExact(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { onTheAdamantFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenOnTheAdamant";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";',
  'import { onTheAdamantFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenOnTheAdamant";\nimport { fatherMotherSisterBrotherFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFatherMotherSisterBrother";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";',
);
replaceExact(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [onTheAdamantFilmHistoryProfile.scenarioId]: onTheAdamantFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,",
  "  [onTheAdamantFilmHistoryProfile.scenarioId]: onTheAdamantFilmHistoryProfile,\n  [fatherMotherSisterBrotherFilmHistoryProfile.scenarioId]: fatherMotherSisterBrotherFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,",
);

replaceExact(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { onTheAdamantProductionCaseVerification } from "./scenarioProductionVerificationOnTheAdamant";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";',
  'import { onTheAdamantProductionCaseVerification } from "./scenarioProductionVerificationOnTheAdamant";\nimport { fatherMotherSisterBrotherProductionCaseVerification } from "./scenarioProductionVerificationFatherMotherSisterBrother";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";',
);
replaceExact(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  onTheAdamantProductionCaseVerification,\n  eoProductionCaseVerification,",
  "  onTheAdamantProductionCaseVerification,\n  fatherMotherSisterBrotherProductionCaseVerification,\n  eoProductionCaseVerification,",
);

replaceExact(
  "scripts/production-case-rest-audit.mjs",
  `const EXPECTED_PLAYABLE_SCENARIOS = ${baseline.atlas.actualCount};\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = ${baseline.verificationIndex.literalVerifiedScenarioIds};`,
  `const EXPECTED_PLAYABLE_SCENARIOS = ${nextAtlasCount};\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = ${nextAtlasCount};`,
);
replaceExact(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenOnTheAdamantExpansion.ts",\n  "chapterNineteenEoExpansion.ts",',
  '  "chapterNineteenOnTheAdamantExpansion.ts",\n  "chapterNineteenFatherMotherSisterBrotherExpansion.ts",\n  "chapterNineteenEoExpansion.ts",',
);

replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  `const EXPECTED_ATLAS_COUNT = ${baseline.atlas.actualCount};`,
  `const EXPECTED_ATLAS_COUNT = ${nextAtlasCount};`,
);
replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  "const adamantNeedles = ['\"title\": \"On the Adamant\"', 'title: \"On the Adamant\"', '\"originalTitle\": \"Sur l\\\'Adamant\"'];\n",
  "const adamantNeedles = ['\"title\": \"On the Adamant\"', 'title: \"On the Adamant\"', '\"originalTitle\": \"Sur l\\\'Adamant\"'];\nconst fatherMotherNeedles = ['\"title\": \"Father Mother Sister Brother\"', 'title: \"Father Mother Sister Brother\"'];\n",
);
const fatherCandidateDeclaration = `const fatherMotherCandidate = \`\n  {\n    "title": "Father Mother Sister Brother",\n    "originalTitle": "Father Mother Sister Brother",\n    "year": 2025,\n    "aliases": [],\n    "role": "major_comparison",\n    "decisionIfMissing": "P1",\n    "chapterFunction": "Venice 2025 Golden Lion source-first case: materialize the final correctionOrder-10 top-prize obligation as one new Atlas/PV identity and lock its three-country triptych production, approximate ten-day-per-section schedule, split cinematography/design units, 1.85 DCP/5.1 delivery and transnational production boundaries without inventing unsupported technical or financial detail."\n  },\`;\n\n`;
replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  "const baseSource = readFileSync(basePath, \"utf8\");",
  `${fatherCandidateDeclaration}const baseSource = readFileSync(basePath, "utf8");`,
);
replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  'if (adamantNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains On the Adamant; consolidate the wrapper deliberately before continuing.");\n',
  'if (adamantNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains On the Adamant; consolidate the wrapper deliberately before continuing.");\nif (fatherMotherNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Father Mother Sister Brother; consolidate the wrapper deliberately before continuing.");\n',
);
replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  '${badLuckCandidate}${alcarrasCandidate}${adamantCandidate}`);',
  '${badLuckCandidate}${alcarrasCandidate}${adamantCandidate}${fatherMotherCandidate}`);',
);

replaceExact(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  `invariant(verificationIds.size === ${baseline.verificationIndex.literalVerifiedScenarioIds}, \`Global Production Verification registry must contain exactly ${baseline.verificationIndex.literalVerifiedScenarioIds} unique scenarioIds after On the Adamant Chapter 19 materialization: \${verificationIds.size}\`);`,
  `invariant(verificationIds.size === ${nextAtlasCount}, \`Global Production Verification registry must contain exactly ${nextAtlasCount} unique scenarioIds after Father Mother Sister Brother Chapter 19 materialization: \${verificationIds.size}\`);`,
);
replaceExact(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${baseline.atlas.actualCount}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${baseline.atlas.actualCount}.");`,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${nextAtlasCount}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${nextAtlasCount}.");`,
);
replaceExact(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  `invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === ${baseline.candidates.length}, "Chapter 19 current candidate set must contain exactly ${baseline.candidates.length} candidates after the festival reconciliation through On the Adamant.");`,
  `invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === ${nextCandidateCount}, "Chapter 19 current candidate set must contain exactly ${nextCandidateCount} candidates after the festival top-prize reconciliation through Father Mother Sister Brother.");`,
);
replaceExact(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  `invariant(chapter19.byDecision?.USE_EXISTING?.length === ${baseline.byDecision.USE_EXISTING.length} && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from ${baseline.byDecision.USE_EXISTING.length} USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");`,
  `invariant(chapter19.byDecision?.USE_EXISTING?.length === ${nextUseExistingCount} && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from ${nextUseExistingCount} USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");`,
);
replaceExact(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  'const fatherMotherSisterBrother = chapter19.candidates.find((candidate) => candidate.title === "Father Mother Sister Brother");\ninvariant(fatherMotherSisterBrother?.decision === "USE_EXISTING" && fatherMotherSisterBrother?.scenarioId === "scenario_father_mother_sister_brother_2025" && fatherMotherSisterBrother?.matches === 1 && fatherMotherSisterBrother?.productionVerified === true, "Father Mother Sister Brother is not closed as one new production-verified Chapter 19 case.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
);

replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "On the Adamant",\n  "Tenet",',
  '  "On the Adamant",\n  "Father Mother Sister Brother",\n  "Tenet",',
  2,
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "On the Adamant",\n  "Nomadland",',
  '  "On the Adamant",\n  "Father Mother Sister Brother",\n  "Nomadland",',
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  `  assert.match(audit, /const EXPECTED_ATLAS_COUNT = ${baseline.atlas.actualCount};/);\n  assert.equal(resolved.atlas.baselineFromClosedChapter18, 539);\n  assert.equal(resolved.atlas.expectedCount, ${baseline.atlas.actualCount});\n  assert.equal(resolved.atlas.actualCount, ${baseline.atlas.actualCount});\n  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, ${baseline.verificationIndex.literalVerifiedScenarioIds});`,
  `  assert.match(audit, /const EXPECTED_ATLAS_COUNT = ${nextAtlasCount};/);\n  assert.equal(resolved.atlas.baselineFromClosedChapter18, 539);\n  assert.equal(resolved.atlas.expectedCount, ${nextAtlasCount});\n  assert.equal(resolved.atlas.actualCount, ${nextAtlasCount});\n  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, ${nextAtlasCount});`,
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  `test("Chapter 19 locks exactly sixty-nine candidates across 2020-2025", () => {\n  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);\n  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, ${baseline.candidates.length});\n  assert.equal(resolved.candidates.length, ${baseline.candidates.length});\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 12], [2022, 13], [2023, 11], [2024, 12], [2025, 10]]);`,
  `test("Chapter 19 locks exactly seventy candidates across 2020-2025", () => {\n  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);\n  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, ${nextCandidateCount});\n  assert.equal(resolved.candidates.length, ${nextCandidateCount});\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 12], [2022, 13], [2023, 11], [2024, 12], [2025, ${next2025Count}]]);`,
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "  assert.equal(exactP1Priority.length, 42);",
  "  assert.equal(exactP1Priority.length, 43);",
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  `  assert.equal(exactUseExisting.length, ${baseline.byDecision.USE_EXISTING.length});`,
  `  assert.equal(exactUseExisting.length, ${nextUseExistingCount});`,
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  const fatherMotherSisterBrother = resolved.candidates.find((candidate) => candidate.title === "Father Mother Sister Brother");\n  assert.ok(fatherMotherSisterBrother);\n  assert.equal(fatherMotherSisterBrother.year, 2025);\n  assert.equal(fatherMotherSisterBrother.decision, "USE_EXISTING");\n  assert.equal(fatherMotherSisterBrother.scenarioId, "scenario_father_mother_sister_brother_2025");\n  assert.equal(fatherMotherSisterBrother.matches, 1);\n  assert.equal(fatherMotherSisterBrother.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
);

const resolvedAfter = runJson("scripts/film-history-chapter-nineteen-atlas-audit.mjs", ["--write=docs/film-history-chapter-nineteen-atlas-resolved.json"]);
invariant(resolvedAfter.atlas?.actualCount === nextAtlasCount && resolvedAfter.atlas?.expectedCount === nextAtlasCount, `Atlas did not advance exactly one identity: ${resolvedAfter.atlas?.actualCount}/${resolvedAfter.atlas?.expectedCount}`);
invariant(resolvedAfter.verificationIndex?.literalVerifiedScenarioIds === nextAtlasCount, `PV registry did not advance exactly one identity: ${resolvedAfter.verificationIndex?.literalVerifiedScenarioIds}`);
invariant(resolvedAfter.candidates?.length === nextCandidateCount, `Candidate count mismatch: ${resolvedAfter.candidates?.length}/${nextCandidateCount}`);
invariant(resolvedAfter.byDecision?.USE_EXISTING?.length === nextUseExistingCount && resolvedAfter.byDecision?.P2?.length === 2, `Queue mismatch: ${JSON.stringify(resolvedAfter.byDecision)}`);
const father = resolvedAfter.candidates.find((candidate) => candidate.title === "Father Mother Sister Brother");
invariant(father?.year === 2025 && father?.scenarioId === newScenarioId && father?.matches === 1 && father?.productionVerified === true && father?.decision === "USE_EXISTING", `Father Mother Sister Brother did not close as one new production-verified identity: ${JSON.stringify(father)}`);
invariant(resolvedAfter.candidates.filter((candidate) => candidate.year === 2025).length === next2025Count, "2025 candidate bucket did not advance by exactly one.");

run(process.execPath, [path.join(root, "scripts/production-case-rest-audit.mjs")]);
const festivalAfter = runJson("scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs");
const fatherFestival = festivalAfter.obligations.find((item) => item.title === "Father Mother Sister Brother");
invariant(fatherFestival?.filmYear === 2025 && fatherFestival?.awardYear === 2025 && fatherFestival?.scenarioId === newScenarioId && fatherFestival?.status === "PRODUCTION_VERIFIED", `Festival obligation did not close: ${JSON.stringify(fatherFestival)}`);
invariant(festivalAfter.correctiveQueue.length === 0, `Festival corrective queue is not empty: ${JSON.stringify(festivalAfter.correctiveQueue)}`);
invariant(festivalAfter.summary?.selectionComplete === true && festivalAfter.summary?.festivalTopPrizeCompletionProven === true, `Top-prize completion proof did not close: ${JSON.stringify(festivalAfter.summary)}`);

for (const temporaryPath of [
  "scripts/TEMP-ch19-father-mother-sister-brother-materialize.mjs",
  ".github/workflows/TEMP-ch19-father-mother-sister-brother-materialize.yml",
]) {
  try { unlinkSync(path.join(root, temporaryPath)); } catch (error) { if (error?.code !== "ENOENT") throw error; }
}

console.log(JSON.stringify({
  baseline: {
    atlas: baseline.atlas.actualCount,
    productionVerificationIds: baseline.verificationIndex.literalVerifiedScenarioIds,
    candidates: baseline.candidates.length,
    useExisting: baseline.byDecision.USE_EXISTING.length,
    p2: baseline.byDecision.P2.length,
    festivalQueueLeader: festivalBaseline.correctiveQueue[0],
  },
  materialized: {
    atlas: resolvedAfter.atlas.actualCount,
    productionVerificationIds: resolvedAfter.verificationIndex.literalVerifiedScenarioIds,
    candidates: resolvedAfter.candidates.length,
    useExisting: resolvedAfter.byDecision.USE_EXISTING.length,
    p2: resolvedAfter.byDecision.P2.length,
    father,
    festivalSummary: festivalAfter.summary,
    correctiveQueue: festivalAfter.correctiveQueue,
  },
}, null, 2));
