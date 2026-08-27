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

export const holyMotorsProductionCaseVerification = {
  scenarioId: "scenario_holy_motors_2012",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Holy Motors is verified as a 2012 Chapter 18 Production Case in which Leos Carax turned blocked foreign projects and financing/casting constraints into an intentionally fast, inexpensive Paris production centered on Denis Lavant, digital acquisition and a modular series of appointments. Festival de Cannes anchors the 115-minute France-Germany competition version and principal credits; its press kit documents Carax's own inexpensive-quick-preselected-actor brief, digital enablement, the stretch-limousine concept and the motion-capture worker image, as well as the French-German production/support network and specialist makeup/VFX/post credits. Filmmaker Magazine and the Harvard Film Archive independently preserve Carax's production rule of shooting fast in Paris with Lavant, a small budget, digital capture and no dailies. La Cinémathèque française identifies RED Epic acquisition and the film's datamoshing and motion-capture image processes. Film and Digital Times documents title-specific use of an Angénieux Optimo 25-250 HR zoom. An ENS Louis-Lumière study drawing on Caroline Champetier's 2012 AFC testimony is retained for the reported 640 ISO night / 800 ISO day operating choices as attributed evidence rather than universal shot settings. These sources support a high-confidence low-budget digital, nighttime, location, transformation, motion-capture, datamoshing and VFX production case while leaving exact budget, shooting-day count, RED submodel/sensor details, recording media/codec, complete prime-lens set, shot-to-lens allocation, most exposure settings, motion-capture hardware, VFX software, sound equipment and DI specifics outside the verified layer.",
  sources: [
    {
      title: "Holy Motors",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/holy-motors/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting 2012 competition status, France-Germany, 115 minutes and principal direction, screenplay, cinematography, production-design, editing and sound credits."
    },
    {
      title: "Holy Motors English press kit",
      publisher: "Festival de Cannes / Pierre Grise Production",
      url: "https://cdn.festival-cannes.com/media/uploads/2023/03/76897.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official press kit supporting the inexpensive/quick/pre-selected-actor production brief, digital enablement, stretch-limousine concept, motion-capture worker image, DCP/Dolby SRD delivery notation and detailed production, makeup, VFX and post credits."
    },
    {
      title: "Holy Motors",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/116263.html",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Institutional film record identifying RED Epic digital acquisition, datamoshing and motion capture, plus production companies and detailed craft credits."
    },
    {
      title: "I Need to Feel When I Make a Film That I'm Not the Same Person Who Made the One Before: Director Leos Carax on Holy Motors",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/54957-leos-carax-holy-motors/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Carax interview documenting abandoned foreign projects and the production choice to work fast in Paris with Denis Lavant, a small budget, digital acquisition and no dailies."
    },
    {
      title: "Holy Motors",
      publisher: "Harvard Film Archive",
      url: "https://harvardfilmarchive.org/calendar/holy-motors-2013-02/1",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Recorded Carax discussion independently supporting the fast/cheap/digital/Paris/Lavant/no-dailies workflow and his explanation of why avoiding dailies changed retake behavior."
    },
    {
      title: "Angenieux at Cannes",
      publisher: "Film and Digital Times",
      url: "https://www.fdtimes.com/2012/05/23/angenieux-at-cannes-2/",
      sourceKind: "archive_feature",
      supports: ["cinematography"],
      note: "Contemporary trade record identifying Holy Motors, Caroline Champetier and title-specific use of the Angénieux Optimo 25-250 HR zoom."
    },
    {
      title: "Les lumières de la ville la nuit",
      publisher: "ENS Louis-Lumière",
      url: "https://www.ens-louis-lumiere.fr/wp-content/uploads/2023/11/ENSLL_CINEMA_ERHEL_2016.pdf",
      sourceKind: "archive_feature",
      supports: ["cinematography"],
      note: "Academic technical study used only for bounded camera-context evidence attributed to Caroline Champetier's AFC testimony; exact ISO values remain attributed rather than generalized across shots."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

const filmStudy = String.raw`import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const holyMotorsFilmHistoryProfile = {
  scenarioId: "scenario_holy_motors_2012",
  period: "2012 digital convergence: constrained French-German production, RED Epic low-light mobility, Paris location work, performance transformation, motion capture and authored image corruption",
  traditions: ["French art cinema", "European co-production", "performance cinema", "digital convergence", "urban location filmmaking", "body transformation", "metacinema", "science-fiction imagery", "motion capture", "datamoshing", "Leos Carax authorship"],
  before: "Carax entered Holy Motors after several unrealized projects outside France had stalled around casting and cash. The commissioned Tokyo! episode Merde gave him a practical model for a smaller digital unit centered on Denis Lavant. By 2011-2012 digital cinema cameras were mature enough to make low-light urban acquisition and rapid resets materially different from Carax's earlier celluloid productions, while European public/broadcaster support could still underpin an unconventional France-Germany feature.",
  moment: "Holy Motors converts its production constraints into form. Carax's own brief was inexpensive, quick, in France and for a pre-selected actor; interviews independently describe Paris, little money, digital, Denis Lavant and no dailies. A stretch limousine becomes transport, dressing room, prop/costume store and continuity-reset hub between radically different appointments. La Cinémathèque identifies RED Epic acquisition and the film's datamoshing and motion-capture processes, while Film and Digital Times documents an Angénieux 25-250 HR zoom. The official press kit assigns named ownership across makeup/SFX makeup, cybermonster design, VFX, 3D supervision, datamoshing and post-production. The result is not one uniform technical recipe but a mobile production architecture capable of switching among streets, interiors, night work, prosthetic transformation, staged tableaux, motion capture and digitally manipulated imagery.",
  after: "Holy Motors is historically useful because digital convergence appears here as mobility, heterogeneity and visible instability rather than only polish or spectacle. The production exposes normally hidden filmmaking processes—casting identity, makeup, transport, capture, post manipulation and performance assignment—as part of the film's subject while still depending on conventional ownership, continuity and delivery discipline. Its case therefore links low-budget digital production to a wider transition in how cinema could move between real locations, virtual bodies and intentionally damaged images.",
  historyQuestion: "How did Holy Motors turn a constrained fast Paris production into a modular system joining Denis Lavant's transformations, RED Epic night work, limousine logistics, motion capture, datamoshing, VFX and editorial/sound continuity?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Cannes anchors the film in the 2012 competition at 115 minutes and as a France-Germany production, while Carax's interviews place the project after failed foreign features and a thirteen-year gap after Pola X." },
    { area: "movement_and_tradition", status: "source_verified", note: "The case joins French/European art cinema and metacinematic traditions with early-2010s digital convergence, using radically different appointment worlds without treating them as one homogeneous production style." },
    { area: "industry_and_production_context", status: "source_verified", note: "The press kit and Cinémathèque document Pierre Grise, Théo Films, Arte France Cinéma, Pandora Film and WDR-Arte plus public/broadcaster support. Exact financing shares remain unresolved." },
    { area: "reception_and_legacy", status: "mapped", note: "Cannes competition status is documented, but reception is kept separate from technical proof. The production's historical importance here is the way constrained digital methods support heterogeneity rather than awards-based validation." },
    { area: "screenplay", status: "source_verified", note: "Carax describes imagining the film quickly after blocked projects. The appointment structure turns each role into a bounded mini-production while the limousine provides the repeated transition and reset architecture." },
    { area: "directing", status: "source_verified", note: "Carax describes fast Paris production, digital capture and a deliberate no-dailies rule. No-dailies is treated as directing workflow, while technical QC and data integrity remain separate production duties." },
    { area: "performance", status: "source_verified", note: "Denis Lavant's multi-role range is production infrastructure: physical, dramatic, prosthetic and motion-capture performances require transformation time, continuity and recovery across one modular schedule." },
    { area: "production_design", status: "source_verified", note: "Florian Sanson is the credited production designer. The limousine is also an operational design space, while varied Paris locations impose discrete access, movement, power and reset constraints." },
    { area: "costume_makeup", status: "source_verified", note: "The official credits identify Bernard Floch and SFX makeup artists Jean-Christophe Spadaccini and Denis Gastou. Repeated identities require controlled application/removal, costume/prop packages and continuity records." },
    { area: "cinematography", status: "source_verified", note: "Caroline Champetier is principal cinematographer with Yves Cape additionally credited. La Cinémathèque identifies RED Epic; Film and Digital Times documents an Angénieux 25-250 HR zoom. Exact prime package and shot-to-lens allocation remain bounded." },
    { area: "lighting", status: "mapped", note: "Extensive nocturnal and mobile location work makes sensitivity, practical/in-frame sources, permits, power and noise interdependent. Fixture-by-fixture diagrams and most exposure settings are not established by the current source package." },
    { area: "camera_format", status: "source_verified", note: "RED Epic digital acquisition is institutionally documented. Reported 640 ISO night / 800 ISO day choices are preserved only as attributed Champetier testimony; RED submodel/sensor, codec and media specifics remain unresolved." },
    { area: "editing", status: "source_verified", note: "Nelly Quettier is the credited editor. Editorial structure must preserve deliberate genre discontinuity while maintaining the forward movement of Oscar's workday and traceable versions of VFX/datamosh/motion-capture assets." },
    { area: "sound_design", status: "source_verified", note: "Erwan Kerzanet is the principal Cannes-listed sound credit. Each appointment requires its own sound-world logic while limousine ambience and recurring motifs can bridge the whole film; recorder/microphone specifics remain unknown." },
    { area: "music", status: "mapped", note: "Neil Hannon is Cannes-listed for music and the film includes live/performed musical material. Live performance, playback, songs and final mix are kept as distinct possible workflow layers unless direct evidence connects them." },
    { area: "effects_animation", status: "source_verified", note: "The press kit/Cinémathèque support motion capture, cybermonster design, conventional VFX, 3D supervision and Jacques Perconte's datamoshing. These are maintained as distinct pipelines with named ownership rather than collapsed into generic digital effects." },
    { area: "documentary_method", status: "mapped", note: "Public-space filming can use documentary-style agility around real passersby and uncontrolled conditions, but Holy Motors remains staged fiction; location contingency is not treated as documentary authorship." }
  ]
} as const satisfies FilmHistoryProfile;
`;

write("src/ui/data/scenarioProductionVerificationHolyMotors.ts", verification);
write("src/ui/data/scenarioFilmStudyChapterEighteenHolyMotors.ts", filmStudy);

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenAmourExpansion } from "../../core/chapterEighteenAmourExpansion.js";\n',
    'import { mergeChapterEighteenAmourExpansion } from "../../core/chapterEighteenAmourExpansion.js";\nimport { mergeChapterEighteenHolyMotorsExpansion } from "../../core/chapterEighteenHolyMotorsExpansion.js";\n',
    "filmScenarios Holy Motors import");
  s = replaceOnce(s,
    'const chapterEighteenAmourScenarios = mergeChapterEighteenAmourExpansion(chapterEighteenPinaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenAmourScenarios);',
    'const chapterEighteenAmourScenarios = mergeChapterEighteenAmourExpansion(chapterEighteenPinaScenarios);\nconst chapterEighteenHolyMotorsScenarios = mergeChapterEighteenHolyMotorsExpansion(chapterEighteenAmourScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenHolyMotorsScenarios);',
    "filmScenarios Holy Motors merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_amour_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Amour source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_holy_motors_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_holy_motors_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { amourProductionCaseVerification } from "./scenarioProductionVerificationAmour";\n',
    'import { amourProductionCaseVerification } from "./scenarioProductionVerificationAmour";\nimport { holyMotorsProductionCaseVerification } from "./scenarioProductionVerificationHolyMotors";\n',
    "verification Holy Motors import");
  s = replaceOnce(s,
    "  amourProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  amourProductionCaseVerification,\n  holyMotorsProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Holy Motors record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { amourFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAmour";\n',
    'import { amourFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAmour";\nimport { holyMotorsFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenHolyMotors";\n',
    "Film Study Holy Motors import");
  s = replaceOnce(s,
    "  [amourFilmHistoryProfile.scenarioId]: amourFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [amourFilmHistoryProfile.scenarioId]: amourFilmHistoryProfile,\n  [holyMotorsFilmHistoryProfile.scenarioId]: holyMotorsFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Holy Motors profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 530;", "const EXPECTED_PLAYABLE_SCENARIOS = 531;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 530;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 531;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenAmourExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenAmourExpansion.ts",\n  "chapterEighteenHolyMotorsExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 530;", "const EXPECTED_ATLAS_COUNT = 531;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenAmourExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenAmourExpansion.ts",\n  "chapterEighteenHolyMotorsExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 530, 531, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 530, 531, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"A Separation", "The Tree of Life", "Pina", "Amour", "Pietà",',
    '"A Separation", "The Tree of Life", "Pina", "Amour", "Holy Motors", "Pietà",',
    "Chapter 18 exactExisting Holy Motors");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Holy Motors", "Ida",',
    'const exactP1Queue = [\n  "Ida",',
    "Chapter 18 P1 Holy Motors removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 73);", "assert.equal(exactExisting.length, 74);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 8);", "assert.equal(exactP1Queue.length, 7);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 8);", "assert.equal(resolved.recommendedNewProductionCases.length, 7);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 531 || resolved.atlas?.actualCount !== 531) throw new Error("Chapter 18 did not materialize 531/531");
if (!resolved.byDecision?.USE_EXISTING?.includes("Holy Motors")) throw new Error("Holy Motors did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Holy Motors")) throw new Error("Holy Motors remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 74) throw new Error(`Expected 74 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 7) throw new Error(`Expected 7 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 7) throw new Error("Expected 7 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "Ida") throw new Error(`Expected Ida next P1, got ${resolved.byDecision?.P1?.[0]}`);
if (resolved.byDecision?.P2?.length !== 1 || resolved.byDecision.P2[0] !== "The New World") throw new Error("Expected The New World to remain the sole P2 case");

console.log("HOLY_MOTORS_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});