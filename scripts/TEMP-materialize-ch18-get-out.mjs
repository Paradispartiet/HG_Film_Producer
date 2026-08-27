import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

function read(path) { return readFileSync(path, "utf8"); }
function write(path, value) { writeFileSync(path, value); }
function replaceOnce(source, before, after, label) {
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`Missing materialization anchor: ${label}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`Non-unique materialization anchor: ${label}`);
  return source.slice(0, first) + after + source.slice(first + before.length);
}
function replaceAllCount(source, from, to, label) {
  const pattern = new RegExp(`\\b${from}\\b`, "g");
  const matches = source.match(pattern) ?? [];
  if (matches.length === 0) throw new Error(`Missing ${from} count anchors: ${label}`);
  return source.replace(pattern, String(to));
}

const verification = String.raw`import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const getOutProductionCaseVerification = {
  scenarioId: "scenario_get_out_2017",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Get Out is verified as a 2017 Chapter 18 Production Case in which culturally specific social-horror authorship was realized through a low-budget specialty genre pipeline, a documented 23-day schedule, incentive-driven Alabama location production, practical-house constraints, compact digital capture, prebuilt LUTs, two-camera coverage, a practical/VFX Sunken Place handoff, performance-led editorial timing, alternate-ending version control and a culturally specific score concept. BFI and AFI support a 103-minute canonical version and the core credits, while other catalogues list 104- or 105-minute variants that remain version metadata. Toby Oliver documents ARRI Alexa Mini capture at 3.2K ProRes 4444 for a standard 2K cinema finish, Angénieux compact zooms, two cameras on every setup, four production LUT categories and extensive practical locations around Mobile/Fairhope after the California tax break did not work for the budget. The Sunken Place used a civic-center stage-like space, limited wire suspension, fans, 200-fps photography and camera/dolly cheats, with Gregory Plotkin documenting Avid resizing/temp wire cleanup before final CGI particulate/wire-removal work. Plotkin also documents long holds, negative space, performance-first suspense, alternate endings and audience-response context. Michael Abels documents Peele's request for a distinctly Black musical voice without stereotype, his 'gospel horror' response and Swahili choral warning material; Mix reporting supports a compressed score-mix schedule and 5.1-oriented music delivery. Exact department budgets, incentive amount, complete lens map, universal exposure values, full lighting package, LUT math, wire geometry, full VFX vendor/software ownership, production-sound hardware, DI node graph, complete test-screening score history and final-dub topology remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "Get Out",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/81a56239-4e69-56b1-b2f0-128204576ae9/get-out",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional record supporting the 103-minute 2017 release and Jordan Peele's directing/writing authorship."
    },
    {
      title: "GET OUT",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/70923-GET-OUT",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional catalogue supporting the 103-minute runtime and producer, cinematography, editing, production-design and music credits."
    },
    {
      title: "DP Toby Oliver on Get Out, Cheating the Sunken Place and Color Grading Trailers",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/102038-dp-toby-oliver-on-get-out-cheating-the-sunken-place-and-color-grading-trailers/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Oliver documents the 23-day schedule, California-to-Alabama move, practical locations, Alexa Mini, 3.2K ProRes 4444, 2K finish, Angénieux zooms, two-camera coverage, four LUTs, location-protection lighting and Sunken Place practical methods."
    },
    {
      title: "Get Out — Toby Oliver, ACS",
      publisher: "American Society of Cinematographers",
      url: "https://staging.ascmag.com/podcasts/get-out-toby-oliver-acs",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC production discussion supporting Oliver's visual strategy, compact digital camera/lens approach and the transition from naturalistic social space toward overt horror."
    },
    {
      title: "Editor Gregory Plotkin on Working With Jordan Peele on Get Out",
      publisher: "Yahoo Entertainment / Deadline",
      url: "https://www.yahoo.com/entertainment/editor-gregory-plotkin-working-jordan-180847198.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Plotkin describes suspense/comedy timing, longer holds, negative space, performance-first editing, Avid Sunken Place temp work, alternate endings and audience-response context."
    },
    {
      title: "John Rodd Scores Big-Time at C5's Hit Movie Get Out",
      publisher: "Mix Magazine",
      url: "https://www.mixonline.com/the-wire/john-rodd-scores-big-time-atc-150s-hit-movie-get-out-and-kennedy-space-centers-heroes-and-legends-429821",
      sourceKind: "trade_feature",
      supports: ["overall", "sound"],
      note: "Trade reporting supporting the compressed score-mix schedule and 5.1-oriented music delivery while leaving the complete final dub topology unresolved."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

const filmStudy = String.raw`import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const getOutFilmHistoryProfile = {
  scenarioId: "scenario_get_out_2017",
  period: "2017 low-budget specialty genre production: culturally specific social horror, compact digital capture, practical locations, fast coverage and post-enabled illusion",
  traditions: ["social horror", "Black American genre cinema", "low-budget specialty production", "psychological horror", "satirical horror", "digital location production", "Blumhouse model"],
  before: "American horror had long used domestic spaces, social anxiety and genre allegory, while the 2000s–2010s specialty model demonstrated that tightly budgeted films could preserve distinctive authorship if schedules and production scope remained controlled. Digital cameras, lightweight rigs and nonlinear post increased what compressed productions could execute, but did not remove the need for rehearsal, location discipline, lighting, design and editorial judgment.",
  moment: "Get Out joined Jordan Peele's culturally specific social-horror authorship to a 23-day low-budget production. A California plan moved to Alabama when the tax break did not work for the budget, and Mobile/Fairhope practical locations stood in for an East Coast social world. Toby Oliver used Alexa Mini cameras, Angénieux compact zooms, 3.2K ProRes 4444 recording, two-camera coverage and four production LUT categories, with a standard 2K cinema finish. The practical Armitage house restricted drilling and heavy rigging, encouraging mobile solutions such as the MAX Menace Arm. The Sunken Place became the controlled exception: a civic-center stage-like space, limited wire suspension, fans, high-speed capture and camera/dolly cheats fed an editorial/VFX pipeline. Gregory Plotkin used holds, negative space and performance to shape dread, built temporary Sunken Place effects in Avid and tracked alternate endings through audience-response review. Michael Abels answered Peele's request for a distinctly Black sonic voice with his 'gospel horror' concept and Swahili choral warning material.",
  after: "The film became a major example of how a low-budget specialty pipeline could scale culturally specific genre authorship to broad theatrical reach without blockbuster production resources. Its Chapter 18 value lies not in a single camera technology but in the coordination of incentives, practical locations, compact digital capture, LUT-managed viewing, two-camera schedule protection, nonlinear temp effects, DI finishing, test-screening version control and sophisticated music/sound post. Later box office and awards establish reception, not technical provenance.",
  historyQuestion: "How did Get Out combine Black social-horror authorship with the industrial constraints and digital tools of a 23-day low-budget specialty production without letting either budget or technology explain the film by itself?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The case sits in the 2010s specialty/genre environment where low-budget production, digital capture and wide studio distribution could coexist." },
    { area: "movement_and_tradition", status: "source_verified", note: "Peele's film uses social horror, satire and psychological suspense through a specifically Black point of view rather than treating genre as culturally neutral." },
    { area: "industry_and_production_context", status: "source_verified", note: "The documented 23-day schedule and Alabama move show how low-budget specialty production links incentive logic, practical locations, crew infrastructure and creative control." },
    { area: "reception_and_legacy", status: "source_verified", note: "The film's broad commercial and cultural reach made it a key reference for later social-horror discussion, but reception does not prove camera, edit or sound details." },
    { area: "screenplay", status: "source_verified", note: "Jordan Peele's screenplay builds social observation, comedy timing and horror revelation into one escalating structure; alternate endings remained separate production versions rather than one fixed text." },
    { area: "directing", status: "source_verified", note: "Peele aligned storyboards, mood boards, performance, visual deception and culturally specific point of view under a compressed schedule." },
    { area: "performance", status: "source_verified", note: "Two-camera coverage protected performance continuity, while Plotkin's editing account shows that discomfort was often allowed to remain in faces and behavior before overt editorial stings." },
    { area: "production_design", status: "source_verified", note: "Rusty Smith's production design and the choice/dressing of practical Alabama locations had to produce an affluent East Coast-coded world without unwanted regional signals." },
    { area: "costume_makeup", status: "mapped", note: "Costume and makeup support social coding and character presentation, but the current production-source package does not justify a detailed department-level technical reconstruction." },
    { area: "cinematography", status: "source_verified", note: "Toby Oliver documents Alexa Mini cameras, Angénieux compact zooms, two-camera coverage, photoboards, practical-location constraints and a visual progression from natural/cool city material to warm estate deception and more overt horror." },
    { area: "lighting", status: "source_verified", note: "Practical-house restrictions shaped rigging; mobile tools such as the MAX Menace Arm and scene-specific distant night units solved location/schedule problems. Individual setups are not generalized into universal exposure rules." },
    { area: "camera_format", status: "source_verified", note: "Oliver documents 3.2K ProRes 4444 Alexa Mini capture for a standard 2K cinema finish plus four production LUT categories. Exact LUT matrices and DI node trees remain unverified." },
    { area: "editing", status: "source_verified", note: "Gregory Plotkin documents long holds, negative space, performance-first suspense, Avid temp effects, alternate endings and audience-response context without reducing editorial authorship to test scores." },
    { area: "sound_design", status: "mapped", note: "Sound effects, dialogue, ADR and final rerecording are production-critical, but exact production-sound hardware and final-dub topology are not established by the current source package." },
    { area: "music", status: "source_verified", note: "Michael Abels developed a distinctly Black 'gospel horror' score concept with Swahili choral warning material; trade reporting supports complex 5.1-oriented score delivery." },
    { area: "effects_animation", status: "source_verified", note: "The Sunken Place combines practical wire/fan/high-speed photography, camera cheats, editorial temp cleanup and final wire/particulate VFX rather than being a wholly computer-generated environment." },
    { area: "documentary_method", status: "not_central", note: "This is a fiction production case; documentary method is not central, although location/reference research informs the world." }
  ]
} as const satisfies FilmHistoryProfile;
`;

write("src/ui/data/scenarioProductionVerificationGetOut.ts", verification);
write("src/ui/data/scenarioFilmStudyChapterEighteenGetOut.ts", filmStudy);

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenIAmNotYourNegroExpansion } from "../../core/chapterEighteenIAmNotYourNegroExpansion.js";\n',
    'import { mergeChapterEighteenIAmNotYourNegroExpansion } from "../../core/chapterEighteenIAmNotYourNegroExpansion.js";\nimport { mergeChapterEighteenGetOutExpansion } from "../../core/chapterEighteenGetOutExpansion.js";\n',
    "filmScenarios Get Out import");
  s = replaceOnce(s,
    'const chapterEighteenIAmNotYourNegroScenarios = mergeChapterEighteenIAmNotYourNegroExpansion(chapterEighteenTheRevenantScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenIAmNotYourNegroScenarios);',
    'const chapterEighteenIAmNotYourNegroScenarios = mergeChapterEighteenIAmNotYourNegroExpansion(chapterEighteenTheRevenantScenarios);\nconst chapterEighteenGetOutScenarios = mergeChapterEighteenGetOutExpansion(chapterEighteenIAmNotYourNegroScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenGetOutScenarios);',
    "filmScenarios Get Out merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_i_am_not_your_negro_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing I Am Not Your Negro source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_get_out_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_get_out_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { iAmNotYourNegroProductionCaseVerification } from "./scenarioProductionVerificationIAmNotYourNegro";\n',
    'import { iAmNotYourNegroProductionCaseVerification } from "./scenarioProductionVerificationIAmNotYourNegro";\nimport { getOutProductionCaseVerification } from "./scenarioProductionVerificationGetOut";\n',
    "verification Get Out import");
  s = replaceOnce(s,
    "  iAmNotYourNegroProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  iAmNotYourNegroProductionCaseVerification,\n  getOutProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Get Out record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { iAmNotYourNegroFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenIAmNotYourNegro";\n',
    'import { iAmNotYourNegroFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenIAmNotYourNegro";\nimport { getOutFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenGetOut";\n',
    "Film Study Get Out import");
  s = replaceOnce(s,
    "  [iAmNotYourNegroFilmHistoryProfile.scenarioId]: iAmNotYourNegroFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [iAmNotYourNegroFilmHistoryProfile.scenarioId]: iAmNotYourNegroFilmHistoryProfile,\n  [getOutFilmHistoryProfile.scenarioId]: getOutFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Get Out profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 534;", "const EXPECTED_PLAYABLE_SCENARIOS = 535;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 534;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 535;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenIAmNotYourNegroExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenIAmNotYourNegroExpansion.ts",\n  "chapterEighteenGetOutExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 534;", "const EXPECTED_ATLAS_COUNT = 535;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenIAmNotYourNegroExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenIAmNotYourNegroExpansion.ts",\n  "chapterEighteenGetOutExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 534, 535, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 534, 535, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"I Am Not Your Negro", "Dunkirk", "Roma",',
    '"I Am Not Your Negro", "Dunkirk", "Get Out", "Roma",',
    "Chapter 18 exactExisting Get Out");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Get Out", "Cold War",\n  "1917", "Atlantics",',
    'const exactP1Queue = [\n  "Cold War",\n  "1917", "Atlantics",',
    "Chapter 18 P1 Get Out removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 77);", "assert.equal(exactExisting.length, 78);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 4);", "assert.equal(exactP1Queue.length, 3);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 4);", "assert.equal(resolved.recommendedNewProductionCases.length, 3);", "Chapter 18 recommended length");
  write(path, s);
}

const resolvedPaths = {
  twelve: "docs/film-history-chapter-twelve-atlas-resolved.json",
  thirteen: "docs/film-history-chapter-thirteen-atlas-resolved.json",
  fourteen: "docs/film-history-chapter-fourteen-atlas-resolved.json",
  fifteen: "docs/film-history-chapter-fifteen-atlas-resolved.json",
  sixteen: "docs/film-history-chapter-sixteen-atlas-resolved.json",
  seventeen: "docs/film-history-chapter-seventeen-atlas-resolved.json",
  eighteen: "docs/film-history-chapter-eighteen-atlas-resolved.json",
};
for (const chapter of chapters) {
  const script = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  const result = spawnSync("node", [script, `--write=${resolvedPaths[chapter]}`], { encoding: "utf8", stdio: "inherit" });
  if (result.status !== 0) throw new Error(`${script} failed with ${result.status}`);
}

{
  const result = spawnSync("npm", ["run", "audit:production-cases"], { encoding: "utf8", stdio: "inherit" });
  if (result.status !== 0) throw new Error(`audit:production-cases failed with ${result.status}`);
}

const resolved = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (resolved.atlas?.expectedCount !== 535 || resolved.atlas?.actualCount !== 535) throw new Error("Chapter 18 did not materialize 535/535");
if (!resolved.byDecision?.USE_EXISTING?.includes("Get Out")) throw new Error("Get Out did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Get Out")) throw new Error("Get Out remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 78) throw new Error(`Expected 78 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 3) throw new Error(`Expected 3 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 3) throw new Error("Expected 3 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "Cold War") throw new Error(`Expected Cold War next P1, got ${resolved.byDecision?.P1?.[0]}`);
if (resolved.byDecision?.P2?.length !== 1 || resolved.byDecision.P2[0] !== "The New World") throw new Error("Expected The New World to remain the sole P2 case");

console.log("GET_OUT_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});