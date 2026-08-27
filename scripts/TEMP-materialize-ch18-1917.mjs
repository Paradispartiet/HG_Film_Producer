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

export const nineteenSeventeenProductionCaseVerification = {
  scenarioId: "scenario_1917_2019",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "1917 is verified as a 2019 Chapter 18 Production Case in which apparent-real-time writing, roughly four months of cross-department rehearsal, time-measured production design, compact large-format digital capture, stabilized camera handoffs, wireless/fiber sound infrastructure, prep-led editorial seam planning and continuity-preserving VFX operate as one production system. BFI anchors a 119-minute released version and the principal writing/directing/cinematography credits. ARRI documents the first-feature use of prototype ALEXA Mini LF bodies with Signature Primes and TRINITY, while Roger Deakins identifies a roughly 99-percent 40 mm strategy with a 47 mm river exception and 35 mm German-basement exception. Motion Picture Association department interviews document actor/camera blocking before final set dimensions, Dennis Gassner's moving-camera architecture, Stuart Wilson's trench fiber network and hidden antenna/costume-lav strategy, Lee Smith's involvement during prep and preference for reshooting weak material rather than assuming post could rescue it, Oliver Tarney's density-and-release sound approach, and Guillaume Rocheron's integration of stitching, set extensions, environmental work, plane transitions and river work with camera geometry. The film is not promoted as one literal take: multiple long takes and invisible joins construct the continuity illusion, and Schofield's blackout creates a deliberate temporal discontinuity. Exact budget, shooting-day count, total stitch count, full lens-by-shot map, universal exposure settings, complete lighting inventory, rig geometry, RF topology, every hidden-cut location, VFX shot/vendor totals, DI node graphs and final-mix automation remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "1917",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/83d6a46e-e55d-5b93-a820-f23a96eb5c77/1917",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional catalogue anchor supporting the 119-minute version and principal directing, writing, cinematography and production credits."
    },
    {
      title: "The immersive camera movement of 1917",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/the-immersive-camera-movement-of-1917-",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Title-specific camera account documenting prototype ALEXA Mini LF use, Signature Primes, TRINITY and Deakins' dominant 40 mm strategy with documented focal-length exceptions."
    },
    {
      title: "How Cinematographer Roger Deakins & Team Pulled Off the One-Shot Masterpiece 1917",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2019/12/how-cinematographer-roger-deakins-team-pulled-off-the-one-shot-masterpiece-1917/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "Department reporting supporting the roughly four-month rehearsal system, time-to-distance set construction, location workflow, camera movement and Stuart Wilson's fiber/wireless sound infrastructure."
    },
    {
      title: "1917's Production Designer on Building a World at War",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2020/01/1917s-production-designer-on-building-a-world-at-war/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Dennis Gassner account supporting moving-camera architecture, rehearsal-led dimensions and the integration of historical reference with practical set construction."
    },
    {
      title: "How Editor Lee Smith & Sound Editor Oliver Tarney Crafted the Immersive Story of 1917",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2020/01/how-editor-lee-smith-sound-editor-oliver-tarney-crafted-the-immersive-story-of-1917/",
      sourceKind: "trade_feature",
      supports: ["overall", "editing", "sound"],
      note: "Editor/sound account supporting editorial participation in prep, seam protection, rapid feedback/reshoot logic and deliberate sound-density modulation."
    },
    {
      title: "1917's Oscar-Nominated VFX Supervisor on Creating Relentless Immersion",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2020/01/1917s-oscar-nominated-vfx-supervisor-on-creating-relentless-immersion/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Guillaume Rocheron account supporting continuity-preserving stitches, set extensions, environmental work and the plane/river effects pipeline."
    },
    {
      title: "Screenwriter Krysty Wilson-Cairns on Helping Sam Mendes Write the WWI Epic 1917",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2019/12/screenwriter-krysty-wilson-cairns-on-helping-sam-mendes-write-the-wwi-epic-1917/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Wilson-Cairns account supporting the continuous-duration mandate from screenplay stage and the intentional temporal break in the middle of the film."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

const filmStudy = String.raw`import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const nineteenSeventeenFilmHistoryProfile = {
  scenarioId: "scenario_1917_2019",
  period: "2019 digital large-format and invisible-VFX convergence: apparent real time, rehearsal-led physical staging, compact stabilization and continuity-preserving post",
  traditions: ["World War I cinema", "continuous-take cinema", "real-time narrative", "large-format digital cinematography", "immersive historical drama", "invisible VFX", "location-led production"],
  before: "Long takes, real-time narrative experiments and hidden edits predate digital cinema, while war films have long mixed large-scale physical production with optical or digital effects. By the late 2010s, compact large-format cameras, sophisticated stabilization, wireless infrastructure and mature compositing made it possible to design an entire feature around unusually long moving takes without abandoning practical sets, performance or location work.",
  moment: "1917 makes continuity a planning problem before it becomes an editorial illusion. Mendes and Wilson-Cairns built the screenplay around an apparently continuous journey, with the blackout preserving an explicit temporal break. Roughly four months of rehearsal let actors, camera, assistant directors, art, effects and sound solve timing before Gassner's trenches, roads, bunkers and ruins were fixed to exact movement durations. Deakins' prototype ALEXA Mini LF and Signature Prime package—overwhelmingly the 40 mm, with documented 47 mm river and 35 mm basement exceptions—could move through TRINITY and other handoff systems while retaining large-format image characteristics. Wilson's fiber network, hidden antennas and costume lavaliers protected synchronized dialogue when ordinary boom coverage was constrained by a camera that could look almost anywhere. Smith placed editorial inside prep so joins and failure risks could be designed before shooting, while Rocheron's VFX work extended sets and preserved motion through stitches, planes, river work and environmental construction. Tarney's sound strategy deliberately alternates density with recovery rather than making continuous camera motion equal continuous sonic overload.",
  after: "The case demonstrates a distinctive Chapter 18 outcome: digital convergence does not have to fragment production into coverage or replace physical staging. Here, new camera, stabilization, radio and VFX systems intensify the need for rehearsal, set measurement, performance repeatability, safety and practical geography. The result also clarifies why the marketed one-shot experience should not be confused with one physical take or one uninterrupted span of story time.",
  historyQuestion: "How did 1917 use apparent-real-time writing, rehearsal-led set design, ALEXA Mini LF/Signature Prime camera mobility, wireless sound, prep-led editing and invisible VFX to make physical production and digital convergence mutually dependent?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The production reconstructs the Western Front through researched practical environments and modern production systems; historical reference is kept distinct from proof of every material or location detail." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film belongs to long-take, real-time and immersive war-film traditions while using digital stitching and a deliberate blackout break rather than one literal unbroken take." },
    { area: "industry_and_production_context", status: "source_verified", note: "A major studio-scale historical production could combine prototype camera access, extensive rehearsal, built landscapes, location logistics, practical effects, sound infrastructure and invisible VFX under one schedule." },
    { area: "reception_and_legacy", status: "source_verified", note: "Awards and the film's widely discussed one-shot presentation are historically relevant reception, but reception is not used to prove stitch counts, budgets, lens assignments or VFX topology." },
    { area: "screenplay", status: "source_verified", note: "The apparent-real-time mandate was written into the project, so scene duration, geography and the blackout discontinuity became production constraints before photography." },
    { area: "directing", status: "source_verified", note: "Mendes' direction governs duration, actor movement, background action, camera handoffs, practical effects and reset logic across long takes rather than relying on conventional coverage." },
    { area: "performance", status: "source_verified", note: "Performance timing is also camera and set timing; actor stamina and repeatability matter when scenes require long walks, runs, crawls, water work and tightly synchronized background action." },
    { area: "production_design", status: "source_verified", note: "Dennis Gassner's trenches, roads, bunkers and ruins function as measured camera/performance architecture whose dimensions were derived from rehearsed duration and movement." },
    { area: "costume_makeup", status: "source_verified", note: "Costume had to support hidden radio microphones, while prosthetic and blood effects needed durability, resetability and low enough noise for synchronized dialogue during long takes." },
    { area: "cinematography", status: "source_verified", note: "ARRI/Deakins document prototype ALEXA Mini LF, Signature Primes and TRINITY; roughly 99 percent used 40 mm, with 47 mm river and 35 mm basement exceptions preserved without inventing a complete lens map." },
    { area: "lighting", status: "mapped", note: "Weather and light continuity are major join constraints, but the verified package does not promote one universal exposure, fixture or filtration recipe across the film." },
    { area: "camera_format", status: "source_verified", note: "The Mini LF provides compact large-format acquisition suited to tight movement paths and rig handoffs. Exact recording/exposure settings are kept bounded unless title-specific records establish them." },
    { area: "editing", status: "source_verified", note: "Lee Smith participated in prep to identify viable seams and continuity risks; long-take review could trigger reshoots, and the exact final hidden-cut inventory remains deliberately unresolved." },
    { area: "sound_design", status: "source_verified", note: "Stuart Wilson's production-sound network and Oliver Tarney's post-sound pacing are separate layers: fiber/hidden antennas/costume lavs protect capture, while post modulates density, tension and recovery." },
    { area: "music", status: "mapped", note: "Thomas Newman's score contributes to pacing and emotional continuity, but the current title-specific source package does not promote unsupported stem, recording-chain or final automation details." },
    { area: "effects_animation", status: "source_verified", note: "Guillaume Rocheron's VFX preserve the apparent camera journey through stitching, extensions, environmental work and complex plane/river transitions; vendor totals and software recipes remain bounded." },
    { area: "documentary_method", status: "not_central", note: "1917 is fiction. Historical research and location observation inform reconstruction, but documentary method is not the central production system." }
  ]
} as const satisfies FilmHistoryProfile;
`;

write("src/ui/data/scenarioProductionVerification1917.ts", verification);
write("src/ui/data/scenarioFilmStudyChapterEighteen1917.ts", filmStudy);

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenColdWarExpansion } from "../../core/chapterEighteenColdWarExpansion.js";\n',
    'import { mergeChapterEighteenColdWarExpansion } from "../../core/chapterEighteenColdWarExpansion.js";\nimport { mergeChapterEighteen1917Expansion } from "../../core/chapterEighteen1917Expansion.js";\n',
    "filmScenarios 1917 import");
  s = replaceOnce(s,
    'const chapterEighteenColdWarScenarios = mergeChapterEighteenColdWarExpansion(chapterEighteenGetOutScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenColdWarScenarios);',
    'const chapterEighteenColdWarScenarios = mergeChapterEighteenColdWarExpansion(chapterEighteenGetOutScenarios);\nconst chapterEighteen1917Scenarios = mergeChapterEighteen1917Expansion(chapterEighteenColdWarScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteen1917Scenarios);',
    "filmScenarios 1917 merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_cold_war_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Cold War source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_1917_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_1917_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { coldWarProductionCaseVerification } from "./scenarioProductionVerificationColdWar";\n',
    'import { coldWarProductionCaseVerification } from "./scenarioProductionVerificationColdWar";\nimport { nineteenSeventeenProductionCaseVerification } from "./scenarioProductionVerification1917";\n',
    "verification 1917 import");
  s = replaceOnce(s,
    "  coldWarProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  coldWarProductionCaseVerification,\n  nineteenSeventeenProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification 1917 record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { coldWarFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenColdWar";\n',
    'import { coldWarFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenColdWar";\nimport { nineteenSeventeenFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteen1917";\n',
    "Film Study 1917 import");
  s = replaceOnce(s,
    "  [coldWarFilmHistoryProfile.scenarioId]: coldWarFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [coldWarFilmHistoryProfile.scenarioId]: coldWarFilmHistoryProfile,\n  [nineteenSeventeenFilmHistoryProfile.scenarioId]: nineteenSeventeenFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study 1917 profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 536;", "const EXPECTED_PLAYABLE_SCENARIOS = 537;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 536;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 537;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenColdWarExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenColdWarExpansion.ts",\n  "chapterEighteen1917Expansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 536;", "const EXPECTED_ATLAS_COUNT = 537;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenColdWarExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenColdWarExpansion.ts",\n  "chapterEighteen1917Expansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 536, 537, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 536, 537, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"The Irishman", "Synonyms",',
    '"The Irishman", "1917", "Synonyms",',
    "Chapter 18 exactExisting 1917");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "1917", "Atlantics",\n] as const;',
    'const exactP1Queue = [\n  "Atlantics",\n] as const;',
    "Chapter 18 P1 1917 removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 79);", "assert.equal(exactExisting.length, 80);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 2);", "assert.equal(exactP1Queue.length, 1);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 2);", "assert.equal(resolved.recommendedNewProductionCases.length, 1);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 537 || resolved.atlas?.actualCount !== 537) throw new Error("Chapter 18 did not materialize 537/537");
if (!resolved.byDecision?.USE_EXISTING?.includes("1917")) throw new Error("1917 did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("1917")) throw new Error("1917 remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 80) throw new Error(`Expected 80 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 1) throw new Error(`Expected 1 P1 case, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 1) throw new Error("Expected 1 recommended new case");
if (resolved.byDecision?.P1?.[0] !== "Atlantics") throw new Error(`Expected Atlantics as sole P1, got ${resolved.byDecision?.P1?.[0]}`);
if (resolved.byDecision?.P2?.length !== 1 || resolved.byDecision.P2[0] !== "The New World") throw new Error("Expected The New World to remain the sole P2 case");

console.log("1917_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
