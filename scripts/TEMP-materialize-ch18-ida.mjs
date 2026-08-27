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

export const idaProductionCaseVerification = {
  scenarioId: "scenario_ida_2013",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Ida is verified as a 2013 Chapter 18 Production Case in which a Poland-Denmark public co-production, stripped-back period staging, an early-production cinematography handoff, ARRI ALEXA 4:3 color ARRIRAW-to-Codex capture and a DI Factory/Nucoda monochrome finish functioned as one production system. Opus Film and Danish Film Institute records establish the Polish-Danish production partnership and principal authorship. The producer-linked press notes anchor an 80-minute version, Phoenix Film/Opus production, Portobello association, Canal+ Poland/Phoenix Film Poland co-production, Polish Film Institute/Eurimages/Danish Film Institute/City of Lodz support, Jaroslaw Kaminski editing, Claus Lynge sound-post responsibility, DI Factory digital post, Michal Herman grading, Ministi Film sound post and Toya Studios playback recording. Detailed cinematography reporting based on Lukasz Zal's production account documents an ARRI ALEXA 4:3 camera, ARRI/Zeiss Ultra Prime lenses supplied by Panavision Poland, color ARRIRAW recorded to Codex and black-and-white conversion in Nucoda at DI Factory. Pawlikowski interviews support black-and-white as deliberate abstraction, the 4:3 frame as a portrait and limited-vision constraint, high headroom/negative space and a preference for a strong primary angle rather than routine coverage. Contemporary accounts preserve Ryszard Lenczewski's preparatory contribution and Lukasz Zal's early move from operator to DP after Lenczewski became ill, without converting that handoff into an unsupported single-author claim. Scene-level lighting documentation proves that the apparently simple naturalistic images could use substantial controlled units including 6K, 1.2K and 575W sources, Kino Flo, Octodome, bounce, negative fill, smoke and Dedolights; these remain scene-specific rather than film-wide prescriptions. FilmPolski and Lodz City of Film document extensive Lodz/regional location production. Sources use both 1.33:1 and 1.37:1 labels, so the case verifies an Academy-like 4:3 composition strategy while retaining exact aspect-label/delivery-raster variance as an explicit uncertainty. Exact budget, shooting-day total, ALEXA submodel, Codex hardware model, full focal-length inventory, shot-to-lens allocation, exposure values, complete lighting diagrams, exact monochrome/grain recipe, production-sound hardware and final delivery raster remain outside the verified layer unless stronger title-specific evidence establishes them.",
  sources: [
    {
      title: "Ida",
      publisher: "Opus Film",
      url: "https://opusfilm.com/films/feature-films/ida",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Producer record supporting Poland-Denmark, 2013, Pawlikowski/Lenkiewicz screenplay, Zal/Lenczewski cinematography, design/costume/editing credits and the central Opus/Phoenix production structure."
    },
    {
      title: "IDA Award Press Notes 2014",
      publisher: "Music Box Films / Phoenix Film / Opus Film",
      url: "https://www.musicboxfilms.com/wp-content/uploads/2018/09/IDA_AWARD_PRESS_NOTES_2014.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Producer-linked press notes supporting the 80-minute Poland-Denmark version, production/co-production/support layers, principal crew, DI Factory/Michal Herman post, Claus Lynge/Ministi sound post and Toya playback recording."
    },
    {
      title: "Financing European Arthouse",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/english/financing-european-arthouse",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "Institutional account confirming Opus/Phoenix co-production, Danish Film Institute and Eurimages support, creative/financial development and Danish composer/sound-post participation including Ministi Film and Claus Lynge."
    },
    {
      title: "Three Scenes from Ida",
      publisher: "The Film Book",
      url: "https://thefilmbook.net/2015/01/three-scenes-from-ida/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Detailed cinematography account derived from discussion with Lukasz Zal and American Cinematographer reporting: ALEXA 4:3, ARRI/Zeiss Ultra Primes via Panavision Poland, color ARRIRAW-to-Codex capture, Nucoda/DI Factory monochrome post and scene-specific lighting examples."
    },
    {
      title: "Squaring the Circles: Pawel Pawlikowski on Ida",
      publisher: "Senses of Cinema",
      url: "https://www.sensesofcinema.com/2014/feature-articles/squaring-the-circles-pawel-pawlikowski-on-ida/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Pawlikowski interview supporting black-and-white abstraction, the 4:3 portrait/limited-field strategy, unusual headroom/negative space, single-angle scene preference, bounded camera-movement exceptions and nonprofessional lead casting context."
    },
    {
      title: "Ida",
      publisher: "FilmPolski.pl",
      url: "https://filmpolski.pl/fp/index.php?film=1229196",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Polish institutional catalogue supporting detailed crew, sound/music metadata, 1:1.33 notation and numerous Lodz/regional production locations. Its 79-minute catalogue runtime is preserved as version variance rather than used to overwrite the 80-minute producer anchor."
    },
    {
      title: "Ida",
      publisher: "Lodz UNESCO City of Film",
      url: "https://lodzcityoffilm.com/en/ida-2/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Official city-film record supporting Lodz production context and local locations used to construct the early-1960s world."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

const filmStudy = String.raw`import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const idaFilmHistoryProfile = {
  scenarioId: "scenario_ida_2013",
  period: "2013 European digital convergence: Poland-Denmark public co-production, Academy-like 4:3 composition, ALEXA ARRIRAW/Codex color capture and digital monochrome finishing",
  traditions: ["European art cinema", "Polish postwar memory cinema", "chamber road film", "publicly financed co-production", "digital-negative production", "black-and-white modernism", "Academy-like framing", "location realism", "performance-centered minimalism", "Paweł Pawlikowski authorship"],
  before: "By the early 2010s, European auteur production could combine national institutes, Eurimages, broadcasters and cross-border partners while digital cameras and DI workflows had become mature enough to support restrained formal systems rather than only spectacle. Ida developed through an Opus Film/Phoenix Film partnership and a screenplay that Pawlikowski progressively stripped of explanatory plotting. The production therefore entered photography with financing, 1962 period construction, monochrome intention, constrained framing and performance economy already tightly connected.",
  moment: "The production used contemporary digital tools to create an intentionally displaced historical image. Detailed cinematography reporting documents an ARRI ALEXA 4:3 camera, ARRI/Zeiss Ultra Primes from Panavision Poland, color ARRIRAW recorded to Codex and black-and-white conversion in Nucoda at DI Factory. Pawlikowski and the cinematography team treated 4:3 as a portrait and limited-field constraint, developing high headroom, low subject placement and negative space rather than conventional widescreen geography. Ryszard Lenczewski contributed substantially to visual preparation before illness forced an early handoff, after which camera operator Lukasz Zal photographed most of the film as DP while preserving shared cinematography authorship. Scene-level documentation shows that naturalistic simplicity was engineered: selected interiors used 6K, 1.2K and 575W sources, Kino Flo, Octodome, bounce, smoke, negative fill and Dedolight accents. The camera recorded color, so production design, costume, skin and locations had to survive conversion by tonal separation rather than hue alone. Lodz and regional locations supplied period texture but also created access, modern-intrusion and continuity risks. Limited coverage and strong primary angles pushed decisions upstream into blocking and rehearsal, while Jaroslaw Kaminski's editing, DI Factory grading and Danish sound-post participation remained distinct downstream systems.",
  after: "Ida became a prominent example of digital convergence producing formal restraint rather than visible technological excess. Its historical importance for Chapter 18 is that a modern color digital-negative pipeline could support a deliberately old-looking, Academy-like monochrome world while transnational public financing, location research, production design, editorial economy and sound post remained essential. Awards and later reception confirm the image's cultural impact but do not prove particular camera, lens or lighting claims. The verified lesson is the coordinated production system and its explicit boundaries, including unresolved 1.33:1 versus 1.37:1 source labels.",
  historyQuestion: "How did Ida combine European public co-production, an early cinematography handoff, Academy-like 4:3 negative-space composition, color ARRIRAW/Codex acquisition, controlled naturalistic lighting and digital black-and-white post into a restrained 1962 period world?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Producer and Danish Film Institute records place Ida in a Poland-Denmark production network supported by Polish, Danish, Eurimages and Lodz institutions. This is evidence of mature transnational European art-cinema production during digital convergence." },
    { area: "movement_and_tradition", status: "source_verified", note: "Pawlikowski's interviews frame black-and-white, 4:3, limited vision and visual abstraction as conscious formal constraints. The production connects Polish historical-memory cinema and European art-cinema minimalism to a modern digital-negative workflow." },
    { area: "industry_and_production_context", status: "source_verified", note: "Opus/Phoenix, Portobello, Canal+ Poland/Phoenix Film Poland and public-support layers are documented. Exact financing shares and total budget remain outside the locked evidence layer." },
    { area: "reception_and_legacy", status: "source_verified", note: "Institutional and press records document major festival, cinematography and Academy recognition. Reception is kept separate from technical proof: awards do not establish a camera submodel, lens assignment or lighting setup." },
    { area: "screenplay", status: "source_verified", note: "Pawlikowski and Rebecca Lenkiewicz are the credited writers, and Pawlikowski describes a move toward poetry, omission and stripped-back plotting. The case treats that reduction as a production grammar affecting coverage, blocking and sound." },
    { area: "directing", status: "source_verified", note: "Pawlikowski describes preferring a strong primary angle and developing unusual vertical compositions inside 4:3. Direction is modeled as rehearsal, frame discipline and bounded movement rather than indiscriminate coverage." },
    { area: "performance", status: "source_verified", note: "Agata Trzebuchowska's first-time acting context and the restrained scene method make set clarity and concentration significant. The case does not generalize from one nonprofessional performer or invent unsupported rehearsal schedules." },
    { area: "production_design", status: "source_verified", note: "Marcel Slawinski and Katarzyna Sobanska-Strzalkowska are credited for the visual environment. Lodz/regional locations and controlled interiors must provide period geometry, texture and tonal separation inside severe compositions." },
    { area: "costume_makeup", status: "mapped", note: "Aleksandra Staszko is the documented costume designer and Anna Niuta Kieszczyńska/Tomasz Sielecki are documented makeup credits. Specific fabrics, cosmetics and ageing recipes remain unresolved; grayscale testing is the production consequence supported by the monochrome finish." },
    { area: "cinematography", status: "source_verified", note: "Ryszard Lenczewski and Lukasz Zal share the cinematography credit. Lenczewski's preparation and Zal's early-production step-up are preserved together. ALEXA 4:3 and ARRI/Zeiss Ultra Prime family evidence is locked; exact body and shot-lens mapping remain unknown." },
    { area: "lighting", status: "source_verified", note: "Zal's documented scene examples show motivated naturalistic intent built with controlled units including 6K, 1.2K, 575W, Kino Flo, Octodome, bounce, smoke, negative fill and Dedolights. These examples are scene-specific and do not establish universal exposure or fixture rules." },
    { area: "camera_format", status: "source_verified", note: "The verified digital-negative path is color ALEXA 4:3 capture recorded as ARRIRAW to Codex and converted to black-and-white in post. Sources label the frame 1.33:1 and 1.37:1, so exact delivery-raster reconciliation remains explicit rather than guessed." },
    { area: "editing", status: "source_verified", note: "Jaroslaw Kaminski is the credited editor. Limited coverage transfers many choices upstream but does not eliminate editorial authorship; DI Factory and Michal Herman provide documented finishing ownership while exact conform and Nucoda version remain bounded." },
    { area: "sound_design", status: "source_verified", note: "Claus Lynge and Ministi Film document a Danish sound-post layer. Offscreen rooms, road environments, religious ambience, jazz and silence expand the restricted image, while production microphone/recorder details remain unknown." },
    { area: "music", status: "source_verified", note: "The film's jazz and period-music world is structurally important, and Toya Studios is documented for playback recording. Playback, performed music, licensed tracks, score and final mix are kept as distinct workflow layers." },
    { area: "effects_animation", status: "mapped", note: "Stage 2 computer-effects credit is documented, but effects are not the organizing production system. The case avoids inflating restrained cleanup/compositing work into a VFX-led explanation." },
    { area: "documentary_method", status: "not_central", note: "Ida is staged fiction. Location observation and thousands of preparatory stills can inform realism and framing, but they are treated as research and scouting practices rather than documentary authorship." }
  ]
} as const satisfies FilmHistoryProfile;
`;

write("src/ui/data/scenarioProductionVerificationIda.ts", verification);
write("src/ui/data/scenarioFilmStudyChapterEighteenIda.ts", filmStudy);

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenHolyMotorsExpansion } from "../../core/chapterEighteenHolyMotorsExpansion.js";\n',
    'import { mergeChapterEighteenHolyMotorsExpansion } from "../../core/chapterEighteenHolyMotorsExpansion.js";\nimport { mergeChapterEighteenIdaExpansion } from "../../core/chapterEighteenIdaExpansion.js";\n',
    "filmScenarios Ida import");
  s = replaceOnce(s,
    'const chapterEighteenHolyMotorsScenarios = mergeChapterEighteenHolyMotorsExpansion(chapterEighteenAmourScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenHolyMotorsScenarios);',
    'const chapterEighteenHolyMotorsScenarios = mergeChapterEighteenHolyMotorsExpansion(chapterEighteenAmourScenarios);\nconst chapterEighteenIdaScenarios = mergeChapterEighteenIdaExpansion(chapterEighteenHolyMotorsScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenIdaScenarios);',
    "filmScenarios Ida merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_holy_motors_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Holy Motors source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_ida_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_ida_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { holyMotorsProductionCaseVerification } from "./scenarioProductionVerificationHolyMotors";\n',
    'import { holyMotorsProductionCaseVerification } from "./scenarioProductionVerificationHolyMotors";\nimport { idaProductionCaseVerification } from "./scenarioProductionVerificationIda";\n',
    "verification Ida import");
  s = replaceOnce(s,
    "  holyMotorsProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  holyMotorsProductionCaseVerification,\n  idaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Ida record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { holyMotorsFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenHolyMotors";\n',
    'import { holyMotorsFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenHolyMotors";\nimport { idaFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenIda";\n',
    "Film Study Ida import");
  s = replaceOnce(s,
    "  [holyMotorsFilmHistoryProfile.scenarioId]: holyMotorsFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [holyMotorsFilmHistoryProfile.scenarioId]: holyMotorsFilmHistoryProfile,\n  [idaFilmHistoryProfile.scenarioId]: idaFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Ida profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 531;", "const EXPECTED_PLAYABLE_SCENARIOS = 532;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 531;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 532;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenHolyMotorsExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenHolyMotorsExpansion.ts",\n  "chapterEighteenIdaExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 531;", "const EXPECTED_ATLAS_COUNT = 532;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenHolyMotorsExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenHolyMotorsExpansion.ts",\n  "chapterEighteenIdaExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 531, 532, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 531, 532, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"Pietà", "Holy Motors", "Gravity", "Blue Is the Warmest Colour",',
    '"Pietà", "Holy Motors", "Gravity", "Ida", "Blue Is the Warmest Colour",',
    "Chapter 18 exactExisting Ida");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Ida", "The Revenant",',
    'const exactP1Queue = [\n  "The Revenant",',
    "Chapter 18 P1 Ida removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 74);", "assert.equal(exactExisting.length, 75);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 7);", "assert.equal(exactP1Queue.length, 6);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 7);", "assert.equal(resolved.recommendedNewProductionCases.length, 6);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 532 || resolved.atlas?.actualCount !== 532) throw new Error("Chapter 18 did not materialize 532/532");
if (!resolved.byDecision?.USE_EXISTING?.includes("Ida")) throw new Error("Ida did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Ida")) throw new Error("Ida remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 75) throw new Error(`Expected 75 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 6) throw new Error(`Expected 6 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 6) throw new Error("Expected 6 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "The Revenant") throw new Error(`Expected The Revenant next P1, got ${resolved.byDecision?.P1?.[0]}`);
if (resolved.byDecision?.P2?.length !== 1 || resolved.byDecision.P2[0] !== "The New World") throw new Error("Expected The New World to remain the sole P2 case");

console.log("IDA_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
