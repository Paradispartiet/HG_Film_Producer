import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");
const write = (file, content) => writeFileSync(path.join(root, file), content);

function replaceOnce(file, before, after) {
  const source = read(file);
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${file}: missing replacement anchor: ${before.slice(0, 140)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${file}: replacement anchor is not unique: ${before.slice(0, 140)}`);
  write(file, source.slice(0, first) + after + source.slice(first + before.length));
}

function insertAfterLineContaining(file, needle, addition) {
  const source = read(file);
  const pos = source.indexOf(needle);
  if (pos < 0 || source.indexOf(needle, pos + needle.length) >= 0) throw new Error(`${file}: line anchor missing or duplicated: ${needle}`);
  const end = source.indexOf("\n", pos);
  if (end < 0) throw new Error(`${file}: line anchor has no newline: ${needle}`);
  write(file, source.slice(0, end + 1) + addition + "\n" + source.slice(end + 1));
}

function insertAfterInConstArray(file, constName, needle, addition) {
  const source = read(file);
  const startMarker = `const ${constName} = [`;
  const start = source.indexOf(startMarker);
  if (start < 0) throw new Error(`${file}: missing ${constName}`);
  const end = source.indexOf("] as const;", start);
  if (end < 0) throw new Error(`${file}: missing end for ${constName}`);
  const block = source.slice(start, end);
  const anchor = `  ${JSON.stringify(needle)},`;
  const pos = block.indexOf(anchor);
  if (pos < 0 || block.indexOf(anchor, pos + anchor.length) >= 0) throw new Error(`${file}: ${needle} is missing or duplicated in ${constName}`);
  const updated = block.slice(0, pos + anchor.length) + `\n  ${JSON.stringify(addition)},` + block.slice(pos + anchor.length);
  write(file, source.slice(0, start) + updated + source.slice(end));
}

function replaceScenarioRecord(file, scenarioId, replacement) {
  const source = read(file);
  const marker = `  {\n    scenarioId: "${scenarioId}",`;
  const start = source.indexOf(marker);
  if (start < 0 || source.indexOf(marker, start + marker.length) >= 0) throw new Error(`${file}: scenario record ${scenarioId} missing or duplicated`);
  const next = source.indexOf("\n  },\n  {\n    scenarioId:", start);
  if (next < 0) throw new Error(`${file}: could not bound scenario record ${scenarioId}`);
  write(file, source.slice(0, start) + replacement + source.slice(next + 6));
}

const filmStudySource = `import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const allTheBeautyAndTheBloodshedFilmHistoryProfile = {
  scenarioId: "scenario_all_the_beauty_and_the_bloodshed_2022",
  period: "2022 US documentary cinema: Nan Goldin archive and P.A.I.N. activism, audio-only testimony, chaptered editorial convergence and Venice-to-release version divergence",
  traditions: ["political documentary", "artist portrait", "archive documentary", "activist cinema", "first-person testimony", "contemporary American nonfiction"],
  before: "Nan Goldin and P.A.I.N. had already begun filming activist actions before Laura Poitras joined the project. Goldin's photographs and slideshows, pre-existing activist footage, later camera work and recorded testimony therefore enter the film through distinct source histories rather than one homogeneous acquisition stream.",
  moment: "Poitras describes abandoning a planned camera-and-lighting master-interview setup after an audio-only conversation with Goldin produced an intimacy she did not want extra crew or equipment to disturb. Those audio interviews continued for roughly a year and a half. Poitras also describes editorial work with Amy Foote and Joe Bini around themes, chapters and a convergence of past and present; Praxis credits Foote, Bini and Brian A. Kates as editors and Goldin for photography and slideshows.",
  after: "Venice records the 2022 competition film at 117 minutes and the Golden Lion establishes reception history. BBFC later records a 121m53s 2023 VOD/streaming version, while Praxis lists a 122-minute running time. These are preserved as distinct version records; the evidence does not establish their exact shot-by-shot lineage or complete mastering pipeline.",
  historyQuestion: "How did All the Beauty and the Bloodshed turn a collaborator's photography, activist footage and intimate audio testimony into a chaptered political documentary while keeping authorship, evidence provenance and release versions distinct?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Venice fixes the film in the 2022 competition and records the Golden Lion; BBFC separately records a later 2023 release version." },
    { area: "movement_and_tradition", status: "mapped", note: "The film intersects political documentary, artist portrait, archive film and activist cinema without reducing its hybrid method to a single tradition." },
    { area: "industry_and_production_context", status: "source_verified", note: "Venice and Praxis identify Participant/Praxis production context and Praxis records association with HBO Documentary and NEON; total budget and financing shares remain unresolved." },
    { area: "reception_and_legacy", status: "source_verified", note: "La Biennale records the 2022 Golden Lion for Best Film; the prize is used as reception evidence, not as workflow evidence." },
    { area: "screenplay", status: "mapped", note: "Poitras directly describes themes, chapters and convergence of past and present; no unsupported conventional screenplay process is claimed." },
    { area: "directing", status: "source_verified", note: "Poitras's direct interview documents the decision to preserve Goldin's audio-only intimacy and the collaborative handling of pre-existing P.A.I.N. material." },
    { area: "performance", status: "not_central", note: "The case is nonfiction; Goldin's recorded testimony and activist presence are treated as documentary participation rather than fictional performance technique." },
    { area: "production_design", status: "not_central", note: "No complete production-design system is established by the locked sources, so environments are not reverse-engineered from the finished film." },
    { area: "costume_makeup", status: "not_central", note: "No complete costume or makeup workflow is established and none is inferred." },
    { area: "cinematography", status: "source_verified", note: "Praxis credits camera contributors including Clare Carter, Sean Vegezzi, Alex Wolf Lewis and Laura Poitras; camera bodies, lenses, codecs, media and full lighting package remain unresolved." },
    { area: "lighting", status: "mapped", note: "Poitras says camera crew and lighting existed in an early interview budget but were not scheduled for the master interview; that abandoned plan is not converted into a photographed lighting package." },
    { area: "camera_format", status: "research_pending", note: "The locked evidence does not establish a complete camera-format, lens, codec or acquisition-media inventory." },
    { area: "editing", status: "source_verified", note: "Praxis credits Amy Foote, Joe Bini and Brian A. Kates; Poitras directly describes editorial themes/chapters and past-present convergence. Edit hardware, software and finishing infrastructure remain unresolved." },
    { area: "sound_design", status: "source_verified", note: "Goldin's audio-only interviews became a structural backbone over roughly a year and a half; the complete production-sound and post-sound chain remains unresolved." },
    { area: "music", status: "source_verified", note: "Praxis credits Soundwalk Collective and music supervisor Dawn Sutter Madell; music remains distinct from testimony and archival sound." },
    { area: "effects_animation", status: "not_central", note: "No complete practical-effects, graphics or VFX census is established and none is inferred from the finished film." },
    { area: "documentary_method", status: "source_verified", note: "Goldin/P.A.I.N. footage, Goldin photography/slideshows, audio testimony, archive curation and chaptered past/present construction are directly documented parts of the nonfiction method." }
  ]
} as const satisfies FilmHistoryProfile;
`;
write("src/ui/data/scenarioFilmStudyChapterNineteenAllTheBeautyAndTheBloodshed.ts", filmStudySource);

insertAfterLineContaining(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { drommerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDrommer";',
  'import { allTheBeautyAndTheBloodshedFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAllTheBeautyAndTheBloodshed";',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [drommerFilmHistoryProfile.scenarioId]: drommerFilmHistoryProfile,",
  "  [drommerFilmHistoryProfile.scenarioId]: drommerFilmHistoryProfile,\n  [allTheBeautyAndTheBloodshedFilmHistoryProfile.scenarioId]: allTheBeautyAndTheBloodshedFilmHistoryProfile,",
);

const pvReplacement = `  {
    scenarioId: "scenario_all_the_beauty_and_the_bloodshed_2022",
    status: "verified",
    verifiedAt: "2026-09-04",
    summary: "The existing 2022 All the Beauty and the Bloodshed identity remains the single verified Production Case. Venice fixes the 117-minute competition record and Golden Lion; Praxis fixes Participant/Praxis production context, Goldin photography and slideshows, the three credited editors, Soundwalk Collective, archival roles and named camera contributors; Poitras directly documents pre-existing P.A.I.N. footage, the abandoned on-camera master-interview plan, audio-only interviews over roughly a year and a half, and editorial themes/chapters with past-present convergence. BBFC separately fixes a later 121m53s 2023 VOD/streaming version. Total budget/finance, exact shoot-day ledger, complete camera/lens/media package, archive rights census, edit infrastructure, VFX, full sound-post chain, color pipeline and exact festival-to-release master lineage remain unresolved.",
    sources: [
      { title: "All the Beauty and the Bloodshed", publisher: "La Biennale di Venezia", url: "https://www.labiennale.org/en/cinema/2022/program-cinema-2022-pass-holders/all-beauty-and-bloodshed-2022-09-02-22-15", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing", "sound"], note: "Official Venice programme supporting Participant and Praxis Films, 117-minute documentary, producers, Amy Foote/Joe Bini/Brian A. Kates editing and Soundwalk Collective music." },
      { title: "Official awards of the 79th Venice Film Festival", publisher: "La Biennale di Venezia", url: "https://www.labiennale.org/en/news/official-awards-79th-venice-film-festival", sourceKind: "film_institute", supports: ["overall"], note: "Official awards record confirming Laura Poitras's documentary as the 2022 Golden Lion winner." },
      { title: "60th New York Film Festival Main Slate announcement", publisher: "Film at Lincoln Center", url: "https://www.filmlinc.org/nyff2022/daily/60th-new-york-film-festival-main-slate-announcement/", sourceKind: "film_institute", supports: ["overall", "screenplay", "editing"], note: "Institutional festival record describing the intertwined portrait of Nan Goldin, her communities, P.A.I.N. and institutional complicity." },
      { title: "All the Beauty and the Bloodshed Academy Award nomination", publisher: "Participant", url: "https://participant.com/all-the-beauty-and-the-bloodshed-academy-award-nomination/", sourceKind: "archive_feature", supports: ["overall", "screenplay", "editing", "sound"], note: "Production/social-impact record connecting Goldin's personal and artistic archive to the campaign against Sackler opioid profits and museum philanthropy." },
      { title: "All the Beauty and the Bloodshed", publisher: "Praxis Films", url: "https://www.praxisfilms.org/films/all-the-beauty-and-the-bloodshed", sourceKind: "archive_feature", supports: ["overall", "cinematography", "editing", "sound"], note: "Official production-site credits supporting Participant in association with HBO Documentary and NEON, Goldin photography/slideshows, producers, editors, music, archival-production roles and camera contributors." },
      { title: "Laura Poitras on All the Beauty and the Bloodshed and Harnessing Nan Goldin's Fight", publisher: "POV Magazine", url: "https://povmagazine.com/laura-poitras-on-all-the-beauty-and-the-bloodshed-and-harnessing-nan-goldins-fight/", sourceKind: "filmmaker_interview", supports: ["overall", "cinematography", "editing", "sound"], note: "Direct Poitras interview supporting pre-existing Goldin/P.A.I.N. footage, the unused planned camera-and-lighting interview setup, audio-only interviews over roughly a year and a half, editorial themes/chapters and past-present convergence." },
      { title: "All The Beauty And The Bloodshed", publisher: "British Board of Film Classification", url: "https://www.bbfc.co.uk/release/all-the-beauty-and-the-bloodshed-q29sbgvjdglvbjpwwc0xmda4nzc3", sourceKind: "film_institute", supports: ["overall"], note: "Institutional version record supporting a 121m53s 2023 VOD/streaming master from Altitude Film Distribution, preserved separately from Venice's 117-minute festival record." }
    ]
  },`;
replaceScenarioRecord(
  "src/ui/data/scenarioProductionVerificationBodyArchiveRestitutionPerspectiveBatch.ts",
  "scenario_all_the_beauty_and_the_bloodshed_2022",
  pvReplacement,
);

insertAfterLineContaining(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  "const happeningNeedles =",
  `const allBeautyNeedles = ['"title": "All the Beauty and the Bloodshed"', 'title: "All the Beauty and the Bloodshed"'];`,
);
const beautyCandidateDefinition = `const allBeautyCandidate = \`
  {
    "title": "All the Beauty and the Bloodshed",
    "originalTitle": "All the Beauty and the Bloodshed",
    "year": 2022,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Venice 2022 Golden Lion reconciliation: reuse the existing canonical scenario_all_the_beauty_and_the_bloodshed_2022 and its single Production Verification identity, while adding the source-backed Film Study and strengthening direct production evidence instead of materializing a duplicate Atlas case."
  },\`;

`;
replaceOnce(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  'const baseSource = readFileSync(basePath, "utf8");',
  beautyCandidateDefinition + 'const baseSource = readFileSync(basePath, "utf8");',
);
insertAfterLineContaining(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  "if (happeningNeedles.some",
  'if (allBeautyNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains All the Beauty and the Bloodshed; consolidate the wrapper deliberately before continuing.");',
);
replaceOnce(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  "${insertionMarker}${triangleCandidate}${drommerCandidate}${happeningCandidate}",
  "${insertionMarker}${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}",
);

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 63, "Chapter 19 current candidate set must contain exactly 63 candidates after Triangle of Sadness, Drømmer and Happening reconciliation.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 64, "Chapter 19 current candidate set must contain exactly 64 candidates after Triangle of Sadness, Drømmer, Happening and All the Beauty and the Bloodshed reconciliation.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 61 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 61 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 62 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 62 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
);
insertAfterLineContaining(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(happening?.decision === "USE_EXISTING"',
  'const allTheBeautyAndTheBloodshed = chapter19.candidates.find((candidate) => candidate.title === "All the Beauty and the Bloodshed");\ninvariant(allTheBeautyAndTheBloodshed?.decision === "USE_EXISTING" && allTheBeautyAndTheBloodshed?.scenarioId === "scenario_all_the_beauty_and_the_bloodshed_2022" && allTheBeautyAndTheBloodshed?.matches === 1 && allTheBeautyAndTheBloodshed?.productionVerified === true, "All the Beauty and the Bloodshed is not closed as one existing production-verified Chapter 19 case.");',
);

insertAfterInConstArray("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "exactCandidateTitles", "Happening", "All the Beauty and the Bloodshed");
insertAfterInConstArray("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "exactP1Priority", "Happening", "All the Beauty and the Bloodshed");
insertAfterInConstArray("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "exactUseExisting", "Happening", "All the Beauty and the Bloodshed");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'test("Chapter 19 locks exactly sixty-three candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly sixty-four candidates across 2020-2025", () => {');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 63);", "assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 64);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.candidates.length, 63);", "assert.equal(resolved.candidates.length, 64);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "const expectedCandidatesByYear = new Map([[2020, 10], [2021, 11], [2022, 11], [2023, 10], [2024, 11], [2025, 10]]);", "const expectedCandidatesByYear = new Map([[2020, 10], [2021, 11], [2022, 12], [2023, 10], [2024, 11], [2025, 10]]);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Priority.length, 36);", "assert.equal(exactP1Priority.length, 37);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 61);", "assert.equal(exactUseExisting.length, 62);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  `  assert.equal(happening.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {`,
  `  assert.equal(happening.productionVerified, true);\n\n  const allBeauty = resolved.candidates.find((candidate) => candidate.title === "All the Beauty and the Bloodshed");\n  assert.ok(allBeauty);\n  assert.equal(allBeauty.decision, "USE_EXISTING");\n  assert.equal(allBeauty.scenarioId, "scenario_all_the_beauty_and_the_bloodshed_2022");\n  assert.equal(allBeauty.matches, 1);\n  assert.equal(allBeauty.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {`,
);

const atlasJson = execFileSync(process.execPath, [path.join(root, "scripts", "film-history-chapter-nineteen-atlas-audit.mjs")], { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
write("docs/film-history-chapter-nineteen-atlas-resolved.json", atlasJson);
const resolved = JSON.parse(atlasJson);
if (resolved.atlas.actualCount !== 591 || resolved.atlas.expectedCount !== 591 || resolved.verificationIndex.literalVerifiedScenarioIds !== 591) throw new Error(`Atlas/PV identity drifted: ${JSON.stringify(resolved.atlas)} / ${resolved.verificationIndex.literalVerifiedScenarioIds}`);
if (resolved.candidates.length !== 64) throw new Error(`Expected 64 candidates, got ${resolved.candidates.length}`);
if (resolved.byDecision.USE_EXISTING.length !== 62 || resolved.byDecision.P2.length !== 2) throw new Error(`Unexpected decision census: ${JSON.stringify(resolved.byDecision)}`);
const allBeauty = resolved.candidates.find((item) => item.title === "All the Beauty and the Bloodshed");
if (!allBeauty || allBeauty.decision !== "USE_EXISTING" || allBeauty.scenarioId !== "scenario_all_the_beauty_and_the_bloodshed_2022" || allBeauty.matches !== 1 || allBeauty.productionVerified !== true) throw new Error(`Beauty did not reconcile to existing identity: ${JSON.stringify(allBeauty)}`);

const pvFiles = readdirSync(path.join(root, "src", "ui", "data")).filter((name) => name.startsWith("scenarioProductionVerification") && name.endsWith(".ts") && name !== "scenarioProductionVerificationRegistry.ts" && name !== "scenarioProductionVerification.ts");
const literalPvIds = [];
for (const name of pvFiles) {
  const parts = readFileSync(path.join(root, "src", "ui", "data", name), "utf8").split('scenarioId: "').slice(1);
  for (const part of parts) literalPvIds.push(part.slice(0, part.indexOf('"')));
}
const uniquePvIds = new Set(literalPvIds);
if (uniquePvIds.size !== 591) throw new Error(`Expected 591 unique literal PV IDs, got ${uniquePvIds.size}`);
if (literalPvIds.filter((id) => id === "scenario_all_the_beauty_and_the_bloodshed_2022").length !== 1) throw new Error("All the Beauty and the Bloodshed PV identity is not unique.");

const festivalJson = execFileSync(process.execPath, [path.join(root, "scripts", "film-history-chapter-nineteen-festival-awards-completion-audit.mjs")], { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
const festival = JSON.parse(festivalJson);
const festivalBeauty = festival.obligations.find((item) => item.title === "All the Beauty and the Bloodshed");
if (!festivalBeauty || festivalBeauty.status !== "PRODUCTION_VERIFIED" || festivalBeauty.scenarioId !== "scenario_all_the_beauty_and_the_bloodshed_2022" || festivalBeauty.atlasMatches !== 1 || festivalBeauty.productionVerified !== true) throw new Error(`Festival gate did not close Beauty: ${JSON.stringify(festivalBeauty)}`);
if (festival.correctiveQueue.some((item) => item.title === "All the Beauty and the Bloodshed")) throw new Error("Beauty remains in corrective queue.");
const nextCorrective = festival.correctiveQueue[0];
if (!nextCorrective || nextCorrective.order !== 5 || nextCorrective.title !== "The Room Next Door") throw new Error(`Unexpected next corrective case: ${JSON.stringify(nextCorrective)}`);

unlinkSync(path.join(root, "scripts", "TEMP-ch19-all-the-beauty-and-the-bloodshed-reconcile.mjs"));
unlinkSync(path.join(root, ".github", "workflows", "TEMP-ch19-all-the-beauty-and-the-bloodshed-reconcile.yml"));
console.log(JSON.stringify({ atlas: resolved.atlas.actualCount, productionVerificationIds: uniquePvIds.size, candidates: resolved.candidates.length, useExisting: resolved.byDecision.USE_EXISTING.length, allBeauty, festivalStatus: festivalBeauty.status, nextCorrective }, null, 2));
