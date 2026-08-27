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

export const theRevenantProductionCaseVerification = {
  scenarioId: "scenario_the_revenant_2015",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "The Revenant is verified as a 2015 Chapter 18 Production Case in which remote-location logistics, chronological seasonal continuity, natural-light scheduling, ALEXA M/XT and selected ALEXA 65 capture, wide-lens immersive choreography, historically grounded production design, stunt safety, invisible VFX, on-location editorial and layered sound functioned as one production system. BFI anchors a 156-minute version and principal writing, directing, producing and cast metadata. ARRI documents ALEXA XT, ALEXA M and ALEXA 65 use with Master Primes and Prime 65 lenses, while explicitly describing ALEXA 65 as selected/significant rather than universal. American Cinematographer documents chronological shooting, natural light and period-correct firelight, a short Canadian winter daylight window and the later Argentina move when warm weather reduced usable snow. British Cinematographer preserves the tested film-to-digital decision, ALEXA M handheld use, ALEXA XT Steadicam use and controlled firelight exceptions inside the overwhelmingly natural-light strategy. The Society of Camera Operators documents handheld, Steadicam and crane/dolly as the core single-perspective movement modes and describes cold-weather operational constraints. ILM documents the bear attack as a continuous-seeming six-minute sequence assembled from multiple plates and performances with a digital bear, cubs, wounds, blood, scars, weather and environment work. MPC documents the opening attack as more than 100 photographed elements reduced to 39 extended shots using stitching, retiming, 2.5D projection, sky replacement, CG arrows and horses plus smoke, fire and mud. Stephen Mirrione's Post Magazine account places editorial in preproduction and on location, using rehearsal/video-tap material to test rhythm and turning over major VFX sequences while principal photography continued. Jack Fisk's interviews document period journals and Karl Bodmer paintings, extensive scouting and real local materials used to make sets withstand wide-angle proximity. BAFTA records the sound team including Lon Bender, Chris Duesterdiek, Martín Hernández, Frank A. Montaño, Jon Taylor and Randy Thom. Exact total budget, exact shooting-day count, exact ALEXA 65 percentage, complete lens/shot mapping, universal exposure values, exact recording-media configuration, complete artificial-light inventory, stunt-rig geometry, total VFX shot count across all vendors, software stack, production-sound hardware and DI node/mastering settings remain outside the verified layer unless stronger title-specific evidence establishes them.",
  sources: [
    {
      title: "The Revenant (2015)",
      publisher: "BFI",
      url: "https://www.bfi.org.uk/film/cecebfa8-c26d-587f-8de7-b34f52b21086/the-revenant",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional catalogue anchoring 2015, 156 minutes, Alejandro González Iñárritu direction, Mark L. Smith/Iñárritu writing and producer metadata."
    },
    {
      title: "ALEXA XT and ALEXA 65 on The Revenant",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/alexa-xt-and-alexa-65-on-the-revenant-",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Manufacturer production record supporting ALEXA XT, ALEXA M, ALEXA 65, Master Primes, Prime 65 lenses, low-light/natural-light use, remote Canada/Argentina work and cold-weather equipment observations."
    },
    {
      title: "Wrap Shot: The Revenant",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/articles/wrap-shot-the-revenant",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC account supporting chronological production, natural light, period-correct firelight, short winter daylight windows and the move to Argentina for snow continuity."
    },
    {
      title: "Emmanuel Lubezki AMC ASC / The Revenant",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/emmanuel-lubezki-amc-asc-the-revenant/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Lubezki interview supporting film-versus-digital testing, ALEXA M/XT operating roles, ALEXA 65 adoption, wide lenses, natural-light strategy and bounded controlled-light exceptions."
    },
    {
      title: "The Revenant: Shooting In the Elements",
      publisher: "Society of Camera Operators",
      url: "https://soc.org/project/the-revenant-shooting-in-the-elements/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Camera-operator production account supporting remote-location movement, handheld/Steadicam/crane grammar, cold-weather logistics and the move to Tierra del Fuego for the final snowbound battle geography."
    },
    {
      title: "The Revenant",
      publisher: "Industrial Light & Magic",
      url: "https://www.ilm.com/vfx/the-revenant/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Vendor record supporting the six-minute continuous-seeming bear attack, multiple plates/performances, digital bear and cubs, wounds, blood, scars, weather and environmental VFX."
    },
    {
      title: "The Revenant",
      publisher: "MPC",
      url: "https://www.mpcvfx.com/en/filmography/revenant/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Vendor record supporting the opening attack's more-than-100 photographed elements reduced to 39 extended shots using stitches, retiming, 2.5D projection, sky replacement, CG horses/arrows and environmental effects."
    },
    {
      title: "Editing: The Revenant",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2016/January-1-2016/Editing-The-Revenant.aspx",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "cinematography"],
      note: "Stephen Mirrione interview documenting preproduction involvement, an editorial trailer on location, rehearsal/video-tap rhythm tests and early VFX turnover while shooting continued."
    },
    {
      title: "Designing for the Screen: An Interview with Jack Fisk",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/3923-designing-for-the-screen-an-interview-with-jack-fisk",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Production-design interview supporting hands-on location research and design practice; used with Fisk's Revenant-specific reporting to bound the design methodology."
    },
    {
      title: "The Revenant - Sound",
      publisher: "BAFTA",
      url: "https://www.bafta.org/awards/film/sound/",
      sourceKind: "film_institute",
      supports: ["sound", "overall"],
      note: "Institutional awards record identifying the credited BAFTA-winning sound team: Lon Bender, Chris Duesterdiek, Martín Hernández, Frank A. Montaño, Jon Taylor and Randy Thom."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

const filmStudy = String.raw`import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const theRevenantFilmHistoryProfile = {
  scenarioId: "scenario_the_revenant_2015",
  period: "2015 digital convergence: remote physical production, ALEXA M/XT and selected ALEXA 65 capture, natural-light scheduling, immersive long-take grammar and invisible multi-vendor VFX",
  traditions: ["survival epic", "revisionist western", "location realism", "digital large-format production", "natural-light cinematography", "long-take cinema", "historically researched production design", "invisible VFX", "performance and stunt cinema", "environmental sound design"],
  before: "By the mid-2010s, digital cinema had matured enough to combine high-sensitivity acquisition, large-format sensors, on-location editorial and sophisticated invisible VFX while major productions could still choose physically demanding remote locations over stage substitution. Iñárritu and Lubezki carried forward long-take lessons from Birdman but applied them to wilderness geography, dangerous action and rapidly changing natural light. Jack Fisk's historically researched design approach and a story structured around bodily and seasonal progression made the environment an operational production constraint rather than a backdrop.",
  moment: "The Revenant was organized around the convergence of environment and technology. BFI anchors the released film at 156 minutes. ARRI and Lubezki accounts document ALEXA M and XT cameras alongside selected/significant ALEXA 65 use, Master Primes and Prime 65 optics, and the decision to abandon planned film photography after digital tests proved more useful in the desired low light. Chronological shooting tied weather, snow, costume wear, wounds and performance condition to story progression, while short winter daylight windows forced extensive rehearsal before photography. When warm conditions reduced snow, production moved to Argentina rather than relying on a purely digital substitute. Wide lenses and handheld, Steadicam and crane/dolly choreography placed the camera close to actors while retaining landscape context. ILM's bear attack and MPC's opening battle demonstrate that apparent continuous realism depended on hidden multi-plate construction, CG animals, stitches, retiming, projection and environmental VFX. Stephen Mirrione's on-location editorial and early vendor turnovers made post-production part of principal-photography planning. Fisk's real-material sets and location research had to survive wide-angle scrutiny, while stunt safety, sound and music created additional systems that could not be solved by the camera alone.",
  after: "The Revenant became a major example of digital convergence serving physical realism rather than replacing it. New camera sensitivity and ALEXA 65 scale expanded the usable natural-light envelope; invisible VFX extended real locations and dangerous action; on-location editing and early turnovers compressed the boundary between production and post. The historical lesson is therefore not that the film was simply shot in natural light or on ALEXA 65, but that digital tools, physical endurance, environmental contingency and specialist craft were deliberately interlocked. Awards belong to reception history and do not prove disputed percentages, per-shot lens choices or exact exposure settings.",
  historyQuestion: "How did The Revenant combine remote physical production, chronological natural-light scheduling, ALEXA M/XT and selected ALEXA 65 capture, wide-angle long-take choreography, historically grounded design, stunt safety, invisible VFX, editorial turnover and immersive sound into one digital-convergence production system?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "BFI anchors the 2015 feature at 156 minutes. The case sits in a period when digital low-light capture, large-format cameras, mature VFX and on-location post could coexist with unusually physical remote production." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film joins revisionist-western and survival traditions with immersive long-take grammar. Birdman-era continuity ideas are transferred to wilderness action without treating the two productions as technically identical." },
    { area: "industry_and_production_context", status: "source_verified", note: "BFI records the producer group, while the source package supports a large transnational location production. Exact producer financing shares, total budget and contractual allocations remain outside the verified layer." },
    { area: "reception_and_legacy", status: "source_verified", note: "BAFTA and other institutional records document major recognition for cinematography, sound and the film overall. Awards are reception evidence only and do not establish disputed camera percentages or shot-level technique." },
    { area: "screenplay", status: "source_verified", note: "Mark L. Smith and Iñárritu are the credited writers. Story-order bodily decline, landscape movement and seasonal change create production continuity obligations that connect screenplay structure to scheduling." },
    { area: "directing", status: "source_verified", note: "Iñárritu's immersive point-of-view strategy relies on extensive rehearsal, bounded improvisation, long movement and environmental timing. Direction is modeled as coordination of performance, camera, stunt, light and post rather than camera spectacle alone." },
    { area: "performance", status: "source_verified", note: "Chronological production and physically demanding environments bind performance continuity to costume, wounds, weather and recovery. Dangerous action remains separated into performer and stunt responsibilities rather than romanticized as uncontrolled risk." },
    { area: "production_design", status: "source_verified", note: "Jack Fisk's documented research uses period journals, Karl Bodmer imagery, extensive scouting and real/local materials. Sets and camps are designed to integrate with landscape and withstand close wide-angle photography." },
    { area: "costume_makeup", status: "mapped", note: "Costume, hair, makeup and wound continuity are operationally central to chronological survival progression, but the current source package does not establish complete materials, product or ageing recipes. Those specifics remain bounded." },
    { area: "cinematography", status: "source_verified", note: "Emmanuel Lubezki is the cinematographer. ALEXA M, ALEXA XT, selected/significant ALEXA 65, Master Primes and Prime 65 lenses are documented. Published ALEXA 65 percentages conflict, so no exact share or universal shot-lens map is locked." },
    { area: "lighting", status: "source_verified", note: "Natural light and period-correct firelight are the governing strategy, with documented controlled exceptions around unstable firelight. Exact universal EI, stop, shutter, white-balance, fixture and dimmer values are not inferred." },
    { area: "camera_format", status: "source_verified", note: "The production moved from tested film plans to an all-digital principal strategy using multiple ALEXA formats. Field of view and lens equivalence are kept format-aware; exact recording-media configuration and per-shot body allocation remain unresolved." },
    { area: "editing", status: "source_verified", note: "Stephen Mirrione participated before and during production, used rehearsal/video-tap material and turned over major VFX sequences while photography continued. Long-take style therefore depends on editorial and version-control planning rather than eliminating editing." },
    { area: "sound_design", status: "source_verified", note: "BAFTA identifies Lon Bender, Chris Duesterdiek, Martín Hernández, Frank A. Montaño, Jon Taylor and Randy Thom. Environmental wind, water, breath, weapons, animals, fire and silence are treated as distinct capture/design/mix layers; hardware specifics remain unknown." },
    { area: "music", status: "source_verified", note: "Contemporary production reporting identifies Ryuichi Sakamoto and Alva Noto as central score collaborators. The case keeps score, environmental sound, silence and final rerecording as distinct production layers rather than one generic soundtrack." },
    { area: "effects_animation", status: "source_verified", note: "ILM's bear sequence and MPC's opening attack are separately documented vendor systems. Digital animals, hidden stitches, retiming, 2.5D projection, sky replacement and environmental effects are tracked by sequence/vendor ownership rather than collapsed into generic CGI." },
    { area: "documentary_method", status: "not_central", note: "The Revenant is staged fiction. Remote location conditions, natural light and real materials create documentary-like contingency, but they do not turn the production into documentary authorship or eliminate rehearsed/staged construction." }
  ]
} as const satisfies FilmHistoryProfile;
`;

write("src/ui/data/scenarioProductionVerificationTheRevenant.ts", verification);
write("src/ui/data/scenarioFilmStudyChapterEighteenTheRevenant.ts", filmStudy);

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenIdaExpansion } from "../../core/chapterEighteenIdaExpansion.js";\n',
    'import { mergeChapterEighteenIdaExpansion } from "../../core/chapterEighteenIdaExpansion.js";\nimport { mergeChapterEighteenTheRevenantExpansion } from "../../core/chapterEighteenTheRevenantExpansion.js";\n',
    "filmScenarios The Revenant import");
  s = replaceOnce(s,
    'const chapterEighteenIdaScenarios = mergeChapterEighteenIdaExpansion(chapterEighteenHolyMotorsScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenIdaScenarios);',
    'const chapterEighteenIdaScenarios = mergeChapterEighteenIdaExpansion(chapterEighteenHolyMotorsScenarios);\nconst chapterEighteenTheRevenantScenarios = mergeChapterEighteenTheRevenantExpansion(chapterEighteenIdaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTheRevenantScenarios);',
    "filmScenarios The Revenant merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_ida_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Ida source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_the_revenant_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_the_revenant_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { idaProductionCaseVerification } from "./scenarioProductionVerificationIda";\n',
    'import { idaProductionCaseVerification } from "./scenarioProductionVerificationIda";\nimport { theRevenantProductionCaseVerification } from "./scenarioProductionVerificationTheRevenant";\n',
    "verification The Revenant import");
  s = replaceOnce(s,
    "  idaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  idaProductionCaseVerification,\n  theRevenantProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification The Revenant record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { idaFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenIda";\n',
    'import { idaFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenIda";\nimport { theRevenantFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTheRevenant";\n',
    "Film Study The Revenant import");
  s = replaceOnce(s,
    "  [idaFilmHistoryProfile.scenarioId]: idaFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [idaFilmHistoryProfile.scenarioId]: idaFilmHistoryProfile,\n  [theRevenantFilmHistoryProfile.scenarioId]: theRevenantFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study The Revenant profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 532;", "const EXPECTED_PLAYABLE_SCENARIOS = 533;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 532;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 533;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenIdaExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenIdaExpansion.ts",\n  "chapterEighteenTheRevenantExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 532;", "const EXPECTED_ATLAS_COUNT = 533;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenIdaExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenIdaExpansion.ts",\n  "chapterEighteenTheRevenantExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 532, 533, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 532, 533, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"Tangerine", "Mad Max: Fury Road", "Son of Saul", "From Afar",',
    '"Tangerine", "Mad Max: Fury Road", "Son of Saul", "The Revenant", "From Afar",',
    "Chapter 18 exactExisting The Revenant");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "The Revenant", "I Am Not Your Negro",',
    'const exactP1Queue = [\n  "I Am Not Your Negro",',
    "Chapter 18 P1 The Revenant removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 75);", "assert.equal(exactExisting.length, 76);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 6);", "assert.equal(exactP1Queue.length, 5);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 6);", "assert.equal(resolved.recommendedNewProductionCases.length, 5);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 533 || resolved.atlas?.actualCount !== 533) throw new Error("Chapter 18 did not materialize 533/533");
if (!resolved.byDecision?.USE_EXISTING?.includes("The Revenant")) throw new Error("The Revenant did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("The Revenant")) throw new Error("The Revenant remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 76) throw new Error(`Expected 76 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 5) throw new Error(`Expected 5 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 5) throw new Error("Expected 5 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "I Am Not Your Negro") throw new Error(`Expected I Am Not Your Negro next P1, got ${resolved.byDecision?.P1?.[0]}`);
if (resolved.byDecision?.P2?.length !== 1 || resolved.byDecision.P2[0] !== "The New World") throw new Error("Expected The New World to remain the sole P2 case");

console.log("THE_REVENANT_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});