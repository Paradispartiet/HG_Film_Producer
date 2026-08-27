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

export const amourProductionCaseVerification = {
  scenarioId: "scenario_amour_2012",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Amour is verified as a 2012 Chapter 18 Production Case in which a France-Germany-Austria public co-production, a highly controlled studio apartment, near-chronological performance work and an early ARRIRAW/Codex digital-negative workflow functioned as one production system. Festival de Cannes anchors the competition version at 127 minutes and credits Michael Haneke as writer-director, Darius Khondji as cinematographer, Jean-Vincent Puzos as production designer, Monika Willi and Nadine Muse as editors, Guillaume Sciama and Jean-Pierre Laforce for sound, and Margaret Menegoz, Stefan Arndt, Veit Heiduschka and Michael Katz as producers. The Cannes press kit documents France 3 Cinéma, ARD Degeto, Bayerischer Rundfunk and Westdeutscher Rundfunk as co-production partners; participation from France Télévisions, Canal+, Ciné+ and ORF; and support including CNC, Région Île-de-France, FFA, Medienboard Berlin-Brandenburg, the CNC/FFA mini-treaty, the Austrian Film Institute, Vienna Film Fund and Eurimages. Haneke's Austrian Films interview states that after the theatre and bus material the film was shot in studio outside Paris and that the floor plan came from his parents' Vienna apartment, reconstructed as a French interior. British Cinematographer reports eight weeks of prep, principal photography at Éclair Studios from February to April 2011 on five-day weeks, close adherence to storyboards and computer previsualisation, parquet engineered for smooth dolly movement, ARRI Alexa acquisition, ARRIRAW to Codex, TSF camera rental, Digimage dailies/transfers, a reported lens package including 35 mm Master Primes and 40 mm and 50 mm Cooke S4/S5 lenses, and a lighting strategy using 20Ks through windows, spacelights/daylight ambience, bounced Lekos and practicals. Khondji also reports that almost the entire film was shot in chronological order. The official press kit documents stand-ins, a physiotherapy consultant, nursing consultant and piano coach; contemporary Haneke reporting documents mechanical bed adjustments for a physically difficult scene. These sources support a high-confidence co-production, studio, digital-negative, lighting-continuity and performer-care case while leaving exact financing shares, exact set dimensions, exact Alexa submodel, exact Codex model, exact shot-lens assignments, exposure values, detailed sound equipment and exact DI/mastering settings outside the verified layer. A secondary cinematography article says the apartment was based on Haneke's grandmother's apartment, while Haneke himself says his parents' apartment; the primary Haneke account is retained and the discrepancy remains explicit rather than silently resolved.",
  sources: [
    {
      title: "Amour",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/f/amour/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting 2012, France-Germany-Austria, 127 minutes, Palme d'Or status and principal writing, direction, cinematography, production-design, editing and sound credits."
    },
    {
      title: "Amour bilingual press kit",
      publisher: "Festival de Cannes / Les Films du Losange",
      url: "https://cdn.festival-cannes.com/media/uploads/2023/03/76898.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official press kit supporting 2h07, 1.85, 4K-2K delivery notation, principal producers, France/Germany/Austria co-production and public-support structure, camera operator Jörg Widmer, stand-ins, physiotherapy and nursing consultants, piano coach and detailed crew credits."
    },
    {
      title: "Amour",
      publisher: "Austrian Films",
      url: "https://www.austrianfilms.com/film/amour",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Austrian institutional record confirming the three-country production, producers, digital format, 1.85 ratio, principal craft credits and Wega/Les Films du Losange/X-Filme production structure. Its current runtime differs from Cannes and is preserved as catalogue-version variance rather than used to overwrite the Cannes anchor."
    },
    {
      title: "Michael Haneke talks about AMOUR",
      publisher: "Austrian Films",
      url: "https://www.austrianfilms.com/news/en/michael_haneke_talks_about_amour",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Haneke's own account that after the initial theatre and bus scenes the film was shot in studio outside Paris, with the apartment floor plan based on his parents' Vienna apartment and rebuilt as a French lived-in interior."
    },
    {
      title: "Darius Khondji AFC / Amour",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/darius-khondji-afc-amour/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Khondji interview documenting eight weeks prep, Éclair Studios principal photography February-April 2011, five-day weeks, storyboard/computer previs, dolly-floor testing, ARRI Alexa, ARRIRAW-to-Codex, TSF, Digimage, reported Master Prime/Cooke lens package, naturalistic lighting tools and almost-chronological shooting."
    },
    {
      title: "Michael Haneke investigates ages-old issues in Amour",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/envelope/la-xpm-2012-dec-13-la-en-michael-haneke-amour-20121213-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Haneke interview supporting the single-location design challenge, parents-apartment floor plan, detailed set dressing and mechanical adjustments to the bed for a physically demanding scene that the director and assistant tested for performer safety."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

const filmStudy = String.raw`import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const amourFilmHistoryProfile = {
  scenarioId: "scenario_amour_2012",
  period: "2012 European digital convergence: France-Germany-Austria public co-production, studio chamber staging, ARRI Alexa ARRIRAW/Codex capture and near-chronological performance production",
  traditions: ["European art cinema", "chamber drama", "publicly financed co-production", "studio realism", "performance-centered cinema", "digital-negative production", "Michael Haneke authorship", "naturalistic cinematography", "transnational European production", "care and ageing drama"],
  before: "By the early 2010s, European auteur cinema routinely combined national funds, broadcasters, treaty mechanisms and Eurimages with cross-border producers and sales structures. Haneke had already worked across Austrian, French and German production networks, while digital acquisition was becoming mature enough to serve restrained naturalism rather than only conspicuous technological novelty. For Amour, Haneke wrote with a precise apartment geography in mind, using the floor plan of his parents' Vienna home as a spatial reference and then rebuilding it as a French interior. This connected screenplay geography, public co-production and studio planning before photography began.",
  moment: "The 2011 production concentrated most of the film in sets at Éclair Studios outside Paris. British Cinematographer reports eight weeks prep, five-day working weeks, close adherence to sketched storyboards and computer previsualisation, a parquet floor sanded and tested for smooth dolly travel, and an ARRI Alexa/ARRIRAW-to-Codex pipeline with dailies and transfers through Digimage. Khondji reports 35 mm Master Primes and 40 mm and 50 mm Cooke S4/S5 lenses in the working package, while the set's south-facing light logic and the passage of days and seasons were built through direct kitchen sun, reflected or bounced light elsewhere, 20Ks, spacelights/daylight ambience, bounced Lekos and practicals. Almost the entire film was shot chronologically, tying light, set state and progressive performance together. The Cannes press kit shows the production as a France-Germany-Austria system with producers in Paris, Berlin and Vienna, multiple broadcaster partners and public-support institutions, while also documenting stand-ins, physiotherapy and nursing consultants and a piano coach. The production therefore joins financing architecture, studio geometry, digital-negative custody and performer care rather than treating minimalism as simple production simplicity.",
  after: "Amour demonstrates that Chapter 18 digital convergence cannot be told only through VFX, virtual production or lightweight cameras. Its historical value is the opposite kind of convergence: mature digital capture, highly controlled studio craft, transnational public financing, disciplined previs and elderly-performer care supporting an intentionally restrained film. The Palme d'Or and later awards belong to reception history, but they do not prove individual technical claims. The case instead shows how invisible production complexity can sustain a chamber film whose style depends on continuity, duration, offscreen space and precise human behavior.",
  historyQuestion: "How did Amour combine European public co-production, a precisely engineered studio apartment, ARRIRAW/Codex digital-negative practice, near-chronological performance scheduling and care-oriented staging into a restrained chamber film?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Cannes and Austrian Films place Amour in 2012 and document a France-Germany-Austria production. The case uses this as evidence of mature European cross-border production during digital convergence rather than a single-national industry model." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film sits within European art cinema and chamber-drama traditions while using digital acquisition and a public co-production structure. Minimal visible spectacle is not treated as minimal production complexity." },
    { area: "industry_and_production_context", status: "source_verified", note: "The Cannes press kit documents producers in Paris, Berlin and Vienna; France 3, ARD Degeto, BR and WDR co-production; broadcaster participation; and support from French, German, Austrian and Eurimages institutions. Exact financing shares remain unresolved." },
    { area: "reception_and_legacy", status: "source_verified", note: "Festival de Cannes records the 2012 Palme d'Or. Awards are used as reception evidence only and are not treated as proof of camera, lighting or financing technique." },
    { area: "screenplay", status: "source_verified", note: "Haneke says the parents-apartment floor plan helped him write with exact room distances and thresholds in mind. The case treats geography as a screenplay-production bridge rather than assuming the story emerged independently of space." },
    { area: "directing", status: "source_verified", note: "Khondji reports strict storyboards and computer previsualisation, with deviations mainly for actor needs. Direction is modeled as precise preparation plus bounded adaptation rather than improvisation-first staging." },
    { area: "performance", status: "source_verified", note: "Khondji reports near-chronological shooting and concern for the actors' physical needs. The press kit documents stand-ins, physiotherapy/nursing consultants and piano coaching; the LA Times documents bed-scene mechanical safety work. These support a care-oriented performance workflow." },
    { area: "production_design", status: "source_verified", note: "Haneke describes the floor plan from his parents' Vienna apartment reconstructed as a French interior with furnishings accumulated across decades. Puzos is the credited production designer. A secondary report says grandmother rather than parents, so the primary Haneke account is privileged and the discrepancy retained." },
    { area: "costume_makeup", status: "mapped", note: "The press kit credits Catherine Leterrier for costumes, but the current source package does not establish detailed wardrobe ageing, continuity or makeup materials. Those departmental specifics remain outside the verified technical layer." },
    { area: "cinematography", status: "source_verified", note: "Darius Khondji is the credited cinematographer and Jörg Widmer the documented camera operator. Khondji reports ARRI Alexa, ARRIRAW-to-Codex, TSF rental, Digimage transfers and a Master Prime/Cooke working package. Exact shot-lens allocation and Alexa/Codex submodels remain unknown." },
    { area: "lighting", status: "source_verified", note: "Khondji documents direct sun reserved for the kitchen, reflected/bounced light in other rooms, 20Ks through windows, spacelights/daylight ambience, bounced Lekos and practicals. Exact positions, ratios, diffusion and exposure settings are not established." },
    { area: "camera_format", status: "source_verified", note: "The case is a digital-negative production using ARRI Alexa and ARRIRAW recorded to Codex. The Cannes press kit's 4K-2K notation is treated as delivery metadata and not automatically converted into an unsupported sensor-resolution or capture-mode claim." },
    { area: "editing", status: "source_verified", note: "Monika Willi and Nadine Muse are the credited editors. Digimage dailies/transfers and the near-chronological shoot are documented production inputs, but exact conform, grading and scene ownership between the editors remain unresolved." },
    { area: "sound_design", status: "source_verified", note: "Guillaume Sciama and Jean-Pierre Laforce are the principal credited sound names. The chamber geography makes offscreen rooms, thresholds, music and silence important, but microphone models, recorder chain and detailed rerecording architecture are not established by the current sources." },
    { area: "music", status: "mapped", note: "The characters are retired music teachers and piano performance is structurally important; the press kit documents a piano coach for Emmanuelle Riva. The case does not invent playback, recording or cue-session details without direct evidence." },
    { area: "effects_animation", status: "not_central", note: "Effects spectacle is not central to the case. The relevant technical engineering is invisible studio control, digital-negative handling and the mechanical safety solution for a demanding bed scene." },
    { area: "documentary_method", status: "not_central", note: "Amour is a staged fiction. Its naturalism comes from controlled space, performance, light and sound rather than documentary acquisition, so documentary method is not promoted as a central production explanation." }
  ]
} as const satisfies FilmHistoryProfile;
`;

write("src/ui/data/scenarioProductionVerificationAmour.ts", verification);
write("src/ui/data/scenarioFilmStudyChapterEighteenAmour.ts", filmStudy);

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenPinaExpansion } from "../../core/chapterEighteenPinaExpansion.js";\n',
    'import { mergeChapterEighteenPinaExpansion } from "../../core/chapterEighteenPinaExpansion.js";\nimport { mergeChapterEighteenAmourExpansion } from "../../core/chapterEighteenAmourExpansion.js";\n',
    "filmScenarios Amour import");
  s = replaceOnce(s,
    'const chapterEighteenPinaScenarios = mergeChapterEighteenPinaExpansion(chapterEighteenTreeOfLifeScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenPinaScenarios);',
    'const chapterEighteenPinaScenarios = mergeChapterEighteenPinaExpansion(chapterEighteenTreeOfLifeScenarios);\nconst chapterEighteenAmourScenarios = mergeChapterEighteenAmourExpansion(chapterEighteenPinaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenAmourScenarios);',
    "filmScenarios Amour merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_pina_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Pina source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_amour_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_amour_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { pinaProductionCaseVerification } from "./scenarioProductionVerificationPina";\n',
    'import { pinaProductionCaseVerification } from "./scenarioProductionVerificationPina";\nimport { amourProductionCaseVerification } from "./scenarioProductionVerificationAmour";\n',
    "verification Amour import");
  s = replaceOnce(s,
    "  pinaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  pinaProductionCaseVerification,\n  amourProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Amour record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { pinaFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenPina";\n',
    'import { pinaFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenPina";\nimport { amourFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAmour";\n',
    "Film Study Amour import");
  s = replaceOnce(s,
    "  [pinaFilmHistoryProfile.scenarioId]: pinaFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [pinaFilmHistoryProfile.scenarioId]: pinaFilmHistoryProfile,\n  [amourFilmHistoryProfile.scenarioId]: amourFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Amour profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 529;", "const EXPECTED_PLAYABLE_SCENARIOS = 530;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 529;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 530;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenPinaExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenPinaExpansion.ts",\n  "chapterEighteenAmourExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 529;", "const EXPECTED_ATLAS_COUNT = 530;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenPinaExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenPinaExpansion.ts",\n  "chapterEighteenAmourExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 529, 530, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 529, 530, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"A Separation", "The Tree of Life", "Pina", "Pietà",',
    '"A Separation", "The Tree of Life", "Pina", "Amour", "Pietà",',
    "Chapter 18 exactExisting Amour");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Amour", "Holy Motors",',
    'const exactP1Queue = [\n  "Holy Motors",',
    "Chapter 18 P1 Amour removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 72);", "assert.equal(exactExisting.length, 73);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 9);", "assert.equal(exactP1Queue.length, 8);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 9);", "assert.equal(resolved.recommendedNewProductionCases.length, 8);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 530 || resolved.atlas?.actualCount !== 530) throw new Error("Chapter 18 did not materialize 530/530");
if (!resolved.byDecision?.USE_EXISTING?.includes("Amour")) throw new Error("Amour did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Amour")) throw new Error("Amour remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 73) throw new Error(`Expected 73 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 8) throw new Error(`Expected 8 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 8) throw new Error("Expected 8 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "Holy Motors") throw new Error(`Expected Holy Motors next P1, got ${resolved.byDecision?.P1?.[0]}`);
if (resolved.byDecision?.P2?.length !== 1 || resolved.byDecision.P2[0] !== "The New World") throw new Error("Expected The New World to remain the sole P2 case");

console.log("AMOUR_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
