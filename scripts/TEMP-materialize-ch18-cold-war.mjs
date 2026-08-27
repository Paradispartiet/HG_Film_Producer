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

export const coldWarProductionCaseVerification = {
  scenarioId: "scenario_cold_war_2018",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Cold War / Zimna wojna is verified as a 2018 Chapter 18 Production Case in which an elliptical fourteen-year romance, music-led historical structure, Polish/French/UK co-production, long location preparation and a digital-to-monochrome pipeline operate as one production system. BFI anchors a 90-minute catalogue version, while BFI Sight and Sound and Cannes carry shorter timings that remain version/festival metadata. Opus Film and Film4 document the transnational production network and key department credits. Paweł Pawlikowski describes music as a third character and an anti-biopic, repeatedly rewritten structure. Łukasz Żal's title-specific ASC/Codex accounts document six months of prep, roughly thirty recce days, a January-to-August 2017 calendar with breaks, practical Poland/Croatia/Paris production and Paris-interior substitution, side-by-side 35mm/ALEXA testing, ARRI ALEXA XT with Codex ARRIRAW 3.4K Open Gate/XR capture, color acquisition monitored in monochrome and desaturated in post, Academy/4:3 composition, Ultra Prime and documented zoom use, a majority 32mm strategy, Poland-versus-Paris lens/depth changes, mostly single-camera operation with two cameras for Mazurek performance material, and a shot-specific East/West Berlin construction with substantial post generation. Jarosław Kamiński's editorial role, the sound credits of Maciej Pawłowski and Mirosław Makowski, and folk/jazz/pop music provenance are retained as distinct authorship layers. Exact total budget, financing percentages, principal-photography day count, complete lens-by-shot map, universal exposures, LUT mathematics, data topology, complete VFX stack, edit-system version, production-sound hardware, music-rights fees and final mix topology remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "Zimna wojna",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/21f2d998-4b45-58b0-8661-c649bc2ed11f/zimna-wojna",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional catalogue anchor for the 90-minute version and core directing, producing, writing and craft credits."
    },
    {
      title: "ZIMNA WOJNA (COLD WAR)",
      publisher: "Festival de Cannes",
      url: "https://cinemadedemain.festival-cannes.com/en/f/zimna-wojna/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Festival record supporting the Poland/UK/France production identity, 84-minute festival listing and principal craft credits."
    },
    {
      title: "Opposites Attract: Cold War",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/articles/opposites-attract-cold-war",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Żal's title-specific account of 35mm/ALEXA tests, focal-length strategy, framing, lighting, camera-count rules, locations and selective Berlin VFX construction."
    },
    {
      title: "Lukasz Zal PSC Crafts a Stark Aesthetic for Cold War",
      publisher: "Codex",
      url: "https://codex.online/casestudies/Lukasz-Zal-PSC-Crafts-a-Stark-Aesthetic-for-Cold-War",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Workflow case study documenting ALEXA XT, Codex XR, ARRIRAW 3.4K Open Gate, color-to-monochrome lineage, Ultra Primes/other lenses, DI Factory and six-month prep/seven-month production span."
    },
    {
      title: "Interview: Pawel Pawlikowski on Cold War",
      publisher: "Film4",
      url: "https://www.film4productions.com/news/interview/2018-05/interview-pawel-pawlikowski-cold-war",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Pawlikowski describes the anti-biopic/elliptical structure, music as a third character, folk research and the relation of music to time and geography."
    },
    {
      title: "Cold War",
      publisher: "Opus Film",
      url: "https://www.opusfilm.com/films/feature-films/cold-war",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Producer record documenting the Poland/UK/France production, Opus/Apocalypso/MK network, producers, cinematography, production design, costume, sound and music-arrangement credits."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

const filmStudy = String.raw`import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const coldWarFilmHistoryProfile = {
  scenarioId: "scenario_cold_war_2018",
  period: "2018 transnational European art cinema: digital monochrome, public co-production, period music, elliptical narration and location-led historical reconstruction",
  traditions: ["European art cinema", "Polish postwar memory cinema", "music-centered historical romance", "black-and-white digital cinematography", "transnational co-production", "elliptical narrative", "festival cinema"],
  before: "European co-production systems and public funds had long enabled nationally specific art cinema to circulate across borders, while digital capture increasingly allowed filmmakers to pursue classical or photochemical-looking aesthetics without abandoning contemporary post workflows. Pawlikowski and Żal's Ida had already demonstrated a rigorous monochrome Academy-frame grammar; Cold War expands that discipline across more countries, years, musical styles, production scale and selective effects work.",
  moment: "Cold War binds an approximately fourteen-year relationship to changing political and musical environments through omission rather than explanatory connective scenes. The Polish/French/UK co-production combined Opus Film, Apocalypso Pictures and MK Productions with public and broadcaster support. Six months of preparation, roughly thirty recce days and a January-to-August 2017 calendar supported practical work in Poland, Croatia and Paris, including Paris interiors recreated in Poland. Żal and Pawlikowski tested 35mm against ALEXA, then chose ALEXA XT with Codex ARRIRAW 3.4K Open Gate/XR capture, shooting color while monitoring monochrome and desaturating in post. The 4:3 frame, majority 32mm use, broader 28/32/40mm Poland strategy and longer 50/65mm Paris strategy convert geography and emotional distance into lens/depth grammar. Most material used one camera, with two cameras for Mazurek performance needs. Music moves from folk source through state-ensemble, jazz and Western-pop contexts and becomes a historical/narrative system. The East/West Berlin transition is a bounded effects exception: real foreground production, greenscreen and a shot-specific approximately 70-percent post-generated background, not proof of a VFX-heavy film overall. Elliptical editing, black-screen timing and selective sound complete the production logic.",
  after: "The film demonstrates that Chapter 18 digital convergence can produce an intentionally classical-looking black-and-white period film rather than a visibly digital aesthetic. Digital capture, LUT-managed monitoring, ARRIRAW data, DI finishing and selective VFX coexist with practical locations, public co-production, performance logistics, historical music and rigorous in-camera composition. Its transnational financing does not erase a specifically Polish historical core, and its awards/reception do not substitute for production evidence.",
  historyQuestion: "How did Cold War combine transnational public co-production, music-led elliptical storytelling, practical period locations and a color-captured ALEXA/ARRIRAW-to-monochrome pipeline into a historically specific production system?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The story moves through postwar Poland, Berlin, Yugoslavia and Paris while the production uses a 2010s European co-production and digital-post system to construct the period." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film belongs to European art-cinema, Polish historical-memory and music-centered romance traditions while extending the monochrome Academy-frame grammar associated with Pawlikowski and Żal's prior work." },
    { area: "industry_and_production_context", status: "source_verified", note: "Opus/Film4/Cannes records support a Poland/UK/France co-production with public funds, broadcasters, sales and distribution roles kept distinct rather than flattened into a single financing entity." },
    { area: "reception_and_legacy", status: "source_verified", note: "Cannes and later awards established major reception, but awards do not prove camera, finance, edit or sound details and remain separate from production evidence." },
    { area: "screenplay", status: "source_verified", note: "Pawlikowski describes an anti-biopic, highly elliptical script process with extensive rewriting; omitted years are part of the narrative system rather than missing exposition." },
    { area: "directing", status: "source_verified", note: "Direction concentrates each scene into a 'micro film' through frame, blocking, location, music and repeated refinement instead of relying on conventional coverage." },
    { area: "performance", status: "source_verified", note: "Joanna Kulig and Tomasz Kot carry large temporal jumps through behavior and musical performance; ensemble availability also became a real scheduling constraint." },
    { area: "production_design", status: "source_verified", note: "Katarzyna Sobańska and Marcel Sławiński's period spaces, surfaces and props were evaluated for grayscale separation and location substitution, including Paris interiors recreated in Poland." },
    { area: "costume_makeup", status: "source_verified", note: "Aleksandra Staszko's costume work participates in period chronology and monochrome tonal separation; exact makeup materials remain outside the current verified technical layer." },
    { area: "cinematography", status: "source_verified", note: "Żal documents ALEXA XT, Ultra Primes and documented zooms, majority 32mm use, broad Poland-versus-Paris focal/depth strategies, mostly single-camera work and performance-specific two-camera exceptions." },
    { area: "lighting", status: "source_verified", note: "High contrast with soft/wrapped light and a mixed modern fixture package served the monochrome target; scene-specific examples are not generalized into universal exposure or fixture rules." },
    { area: "camera_format", status: "source_verified", note: "Codex documents ARRIRAW 3.4K Open Gate to XR drives on ALEXA XT. The film was captured in color, monitored in black-and-white and desaturated in post; DI Factory is the documented finishing facility." },
    { area: "editing", status: "source_verified", note: "Jarosław Kamiński's edit organizes fourteen years through ellipses, scene contrast and calibrated black-screen duration, with cinema-screen review informing temporal judgment." },
    { area: "sound_design", status: "source_verified", note: "Maciej Pawłowski and Mirosław Makowski are documented sound credits; Pawlikowski describes painstaking selective sound and a long mix, while exact production hardware and final topology remain unresolved." },
    { area: "music", status: "source_verified", note: "Folk material, Mazowsze/state-ensemble transformation, Marcin Masecki's jazz/song arrangements and Western popular recordings form distinct provenance, performance, synchronization and mix layers." },
    { area: "effects_animation", status: "source_verified", note: "The East/West Berlin transition combines real people/cars/decoration, greenscreen and substantial post extension; the approximately 70-percent-generated-in-post claim is kept local to that documented shot." },
    { area: "documentary_method", status: "mapped", note: "Cold War is fiction, but Pawlikowski's folk research, location observation and desire for documentary-like concentrated frames inform the production method without turning the film into documentary." }
  ]
} as const satisfies FilmHistoryProfile;
`;

write("src/ui/data/scenarioProductionVerificationColdWar.ts", verification);
write("src/ui/data/scenarioFilmStudyChapterEighteenColdWar.ts", filmStudy);

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenGetOutExpansion } from "../../core/chapterEighteenGetOutExpansion.js";\n',
    'import { mergeChapterEighteenGetOutExpansion } from "../../core/chapterEighteenGetOutExpansion.js";\nimport { mergeChapterEighteenColdWarExpansion } from "../../core/chapterEighteenColdWarExpansion.js";\n',
    "filmScenarios Cold War import");
  s = replaceOnce(s,
    'const chapterEighteenGetOutScenarios = mergeChapterEighteenGetOutExpansion(chapterEighteenIAmNotYourNegroScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenGetOutScenarios);',
    'const chapterEighteenGetOutScenarios = mergeChapterEighteenGetOutExpansion(chapterEighteenIAmNotYourNegroScenarios);\nconst chapterEighteenColdWarScenarios = mergeChapterEighteenColdWarExpansion(chapterEighteenGetOutScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenColdWarScenarios);',
    "filmScenarios Cold War merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_get_out_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Get Out source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_cold_war_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_cold_war_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { getOutProductionCaseVerification } from "./scenarioProductionVerificationGetOut";\n',
    'import { getOutProductionCaseVerification } from "./scenarioProductionVerificationGetOut";\nimport { coldWarProductionCaseVerification } from "./scenarioProductionVerificationColdWar";\n',
    "verification Cold War import");
  s = replaceOnce(s,
    "  getOutProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  getOutProductionCaseVerification,\n  coldWarProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Cold War record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { getOutFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenGetOut";\n',
    'import { getOutFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenGetOut";\nimport { coldWarFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenColdWar";\n',
    "Film Study Cold War import");
  s = replaceOnce(s,
    "  [getOutFilmHistoryProfile.scenarioId]: getOutFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [getOutFilmHistoryProfile.scenarioId]: getOutFilmHistoryProfile,\n  [coldWarFilmHistoryProfile.scenarioId]: coldWarFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Cold War profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 535;", "const EXPECTED_PLAYABLE_SCENARIOS = 536;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 535;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 536;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenGetOutExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenGetOutExpansion.ts",\n  "chapterEighteenColdWarExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 535;", "const EXPECTED_ATLAS_COUNT = 536;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenGetOutExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenGetOutExpansion.ts",\n  "chapterEighteenColdWarExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 535, 536, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 535, 536, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"Spider-Man: Into the Spider-Verse", "An Elephant Sitting Still", "Parasite",',
    '"Spider-Man: Into the Spider-Verse", "An Elephant Sitting Still", "Cold War", "Parasite",',
    "Chapter 18 exactExisting Cold War");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Cold War",\n  "1917", "Atlantics",',
    'const exactP1Queue = [\n  "1917", "Atlantics",',
    "Chapter 18 P1 Cold War removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 78);", "assert.equal(exactExisting.length, 79);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 3);", "assert.equal(exactP1Queue.length, 2);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 3);", "assert.equal(resolved.recommendedNewProductionCases.length, 2);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 536 || resolved.atlas?.actualCount !== 536) throw new Error("Chapter 18 did not materialize 536/536");
if (!resolved.byDecision?.USE_EXISTING?.includes("Cold War")) throw new Error("Cold War did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Cold War")) throw new Error("Cold War remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 79) throw new Error(`Expected 79 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 2) throw new Error(`Expected 2 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 2) throw new Error("Expected 2 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "1917") throw new Error(`Expected 1917 next P1, got ${resolved.byDecision?.P1?.[0]}`);
if (resolved.byDecision?.P2?.length !== 1 || resolved.byDecision.P2[0] !== "The New World") throw new Error("Expected The New World to remain the sole P2 case");

console.log("COLD_WAR_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
