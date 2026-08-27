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

export const iAmNotYourNegroProductionCaseVerification = {
  scenarioId: "scenario_i_am_not_your_negro_2016",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "I Am Not Your Negro is verified as a 2016 Chapter 18 Production Case in which literary rights, James Baldwin Estate trust, Remember This House provenance, archival search and acquisition, Fair Use/legal review, paid licensing, text-first montage, contemporary photography, voice performance, sound and transnational co-production operate as one documentary production system. Artémis Productions anchors a 93-minute version, color/black-and-white, 1.85 presentation and 5.1 DCP metadata and identifies Henry Adebonojo plus Bill and Turner Ross for cinematography, Alexandra Strauss for picture editing, Valérie Le Docte for sound editing, David Gillain for sound mixing and Alexei Aigui for music. PBS Independent Lens documents Velvet Film with Artémis Productions and Close Up Films, additional co-production with ARTE France, RTS, RTBF and Shelter Prod, producers Rémi Grellety, Raoul Peck and Hébert Peck, co-producers Patrick Quinet and Joëlle Bertossa, Samuel L. Jackson as the voice and full Baldwin Estate collaboration. Peck and Hébert Peck describe roughly ten years of development and unusually broad access to Baldwin's published/unpublished work, letters and photographs. Remember This House's roughly thirty pages became the structural entry point after years of formal experimentation. Peck describes a text-first manuscript/libretto, broad archival research, physical/spatial arrangement of material and a layer-by-layer edit. His POV account documents a Fair Use lawyer working across edit versions for about a year, some clips requiring paid licensing, and legal constraints changing montage decisions rather than functioning as a blanket clearance. AFI documents Jackson joining near the final editing phase and recording the voice in a Sofia studio after receiving a cut; other Peck interviews document a temporary voice during editing. Contemporary footage by Adebonojo and the Ross brothers is kept distinct in provenance from historical film, television, photographs and graphics. Exact total budget, per-clip fees, complete archive inventory, camera/lens/codec chains for contemporary units, archive scanner/restoration settings, edit/graphics software, voice microphone/recorder chain, music stems and exact final-mix specifications remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "I Am Not Your Negro",
      publisher: "Artémis Productions",
      url: "https://www.artemisproductions.com/en/films/I_Am_Not_Your_Negro",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Producer/co-producer page supporting 93 minutes, color/black-and-white, 1.85, 5.1 DCP and key cinematography, picture-editing, sound and music credits."
    },
    {
      title: "I Am Not Your Negro",
      publisher: "PBS Independent Lens",
      url: "https://www.pbs.org/independentlens/documentaries/i-am-not-your-negro/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Public-broadcast record documenting Velvet Film, Artémis, Close Up, ARTE France, RTS, RTBF and Shelter Prod co-production layers; producers/co-producers; Baldwin Estate collaboration; Jackson voice; Strauss editing; archive research; DPs; music and sound credits."
    },
    {
      title: "I Am Not Your Negro Press Kit",
      publisher: "Magnolia Pictures",
      url: "https://www.magpictures.com/presskit.aspx?id=9f588349-a711-4eb6-8150-210b7bb6eb80",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Distributor press materials and production notes supporting the production team, Baldwin-image provenance context and the film's research/writing/editing process."
    },
    {
      title: "The AFI FEST Interview: I AM NOT YOUR NEGRO Director Raoul Peck",
      publisher: "American Film Institute",
      url: "https://www.afi.com/news/the-afi-fest-interview-i-am-not-your-negro-director-raoul-peck/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Peck explains Baldwin-centered authorship, text-first structure, archive gathering and the late choice/recording of Samuel L. Jackson in Sofia."
    },
    {
      title: "The POV Interview: Raoul Peck Talks I Am Not Your Negro",
      publisher: "POV Magazine",
      url: "https://povmagazine.com/i-am-not-your-negro-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Peck documents broad Estate access, Fair Use and paid-license distinctions, about a year of lawyer review across edits, production control and the long layer-building process."
    },
    {
      title: "How Editor Alexandra Strauss Cut an Impossible Film",
      publisher: "No Film School",
      url: "https://nofilmschool.com/2017/02/i-am-not-your-negro-oscar-editor-alexandra-strauss-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Strauss describes the challenge of creating cinematic structure from Baldwin's words and heterogeneous image material, supporting editing as core documentary authorship/craft."
    },
    {
      title: "I Am Not Your Negro Remixes James Baldwin with America's Tradition of On-Screen Racism",
      publisher: "MovieMaker Magazine",
      url: "https://www.moviemaker.com/i-am-not-your-negro-james-baldwin-tradition-on-screen-racism/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Production feature supporting late contemporary photography by Henry Adebonojo and Bill/Turner Ross in New York and the American South and the deliberate intercutting of newly shot and archival material."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

const filmStudy = String.raw`import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const iAmNotYourNegroFilmHistoryProfile = {
  scenarioId: "scenario_i_am_not_your_negro_2016",
  period: "2016 hybrid nonfiction and digital archival convergence: estate access, heterogeneous archive, Fair Use/legal versioning, nonlinear montage, contemporary photography and voice-centered documentary production",
  traditions: ["essay film", "archival documentary", "hybrid nonfiction", "civil-rights documentary", "literary adaptation", "found-footage montage", "voice-centered documentary", "transnational European co-production", "digital archival workflow", "political cinema"],
  before: "Archival and essay filmmakers had long built arguments from found footage, photographs, voice and historical documents, but the digital era greatly increased the practical ability to search, duplicate, compare and nonlinearly recombine heterogeneous media. At the same time, copyright, physical provenance, licensing cost and access remained binding constraints. Peck's project began not with a camera package but with trust from the James Baldwin Estate and years of trying to find a form capable of carrying Baldwin without expert interpretation.",
  moment: "I Am Not Your Negro crystallized when the roughly thirty pages of Remember This House became a structural spine. Peck assembled Baldwin's words into a dramatic libretto while archival teams searched film, radio, television, photographs and cultural references. The edit developed layer by layer with Alexandra Strauss, and rights review operated inside that process: Peck reports a Fair Use lawyer reviewing versions for about a year, while some material still required paid licensing. Legal constraints could therefore change clip duration, context and montage. Contemporary images by Henry Adebonojo and Bill and Turner Ross supplied present-day New York and American South counterpoints whose provenance remained distinct from historical archive. A temporary voice supported iterative editing before Samuel L. Jackson received a cut and recorded the final Baldwin performance in Sofia late in the process. Sound design, score, archival audio and silence were treated as dramatic construction rather than transparent playback. The transnational production network linked Velvet Film, Artémis, Close Up, ARTE France, RTS, RTBF, Shelter Prod and public-broadcast/funder circulation.",
  after: "The film shows why digital convergence in documentary is not reducible to digital cameras. Its production history is equally about searchable/digitized archives, nonlinear editing, rights metadata, legal review by edit version, transnational financing, new photography, voice performance and digital delivery. The resulting montage can place historical television, Hollywood cinema, photographs, Baldwin's own appearances and present-day images into direct argument while preserving distinct provenance. Reception and political impact are historically important, but they do not prove Fair Use status, camera models, archive restoration settings or post software.",
  historyQuestion: "How did I Am Not Your Negro turn Baldwin Estate access, Remember This House, archival search, Fair Use and licensing, text-first montage, contemporary photography, Samuel L. Jackson's voice and transnational documentary financing into one digital-convergence production system?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The film was released in the mid-2010s when digitized archive access and nonlinear editing made heterogeneous historical recombination increasingly practical, while copyright and source provenance remained binding production constraints." },
    { area: "movement_and_tradition", status: "source_verified", note: "The case belongs to essay-film, archival-documentary and political-cinema traditions. Its refusal of talking heads shifts explanation into Baldwin's words, montage, sound and juxtaposition." },
    { area: "industry_and_production_context", status: "source_verified", note: "PBS documents Velvet Film with Artémis and Close Up plus ARTE France, RTS, RTBF and Shelter Prod. The case preserves producers and co-producers separately and does not infer financing shares or editorial control from credits alone." },
    { area: "reception_and_legacy", status: "source_verified", note: "The film's festival, awards and political reception made Baldwin newly visible to wide audiences. Reception is kept separate from production evidence and cannot prove clip rights, camera hardware or editing software." },
    { area: "screenplay", status: "source_verified", note: "Remember This House and Baldwin's wider corpus became a text-first dramatic libretto assembled by Peck. Baldwin's words remain traceable source material while Peck's selection, order and juxtaposition constitute film construction rather than invented Baldwin prose." },
    { area: "directing", status: "source_verified", note: "Peck's central constraints—Baldwin centered, no expert talking heads, layered archive and direct audience confrontation—turn directing into governance of text, rights, research, image, voice and sound rather than only on-set staging." },
    { area: "performance", status: "source_verified", note: "Samuel L. Jackson's late voice performance is directed as Baldwin-as-character rather than conventional narration. A temporary voice enabled iterative editing before final recording; exact recording hardware and take count remain unknown." },
    { area: "production_design", status: "mapped", note: "Traditional set design is not central. The equivalent spatial design problem lies in the visual architecture of archive, typography, photographs and newly photographed spaces; exact graphic/layout software is not established." },
    { area: "costume_makeup", status: "not_central", note: "Costume and makeup are not a central production system in this archival documentary. Historical clothing appears largely through source footage; contemporary shoot wardrobe specifics are not promoted without evidence." },
    { area: "cinematography", status: "source_verified", note: "Artémis/PBS credit Henry Adebonojo and Bill and Turner Ross. Contemporary New York/South footage is treated as separately produced material; exact bodies, lenses, codecs, filters and unit-level shot ownership are kept unresolved." },
    { area: "lighting", status: "mapped", note: "The current source package does not document title-specific contemporary lighting packages. Historical sources carry their own original lighting provenance, so the case refuses a fabricated unified lighting system." },
    { area: "camera_format", status: "source_verified", note: "Artémis documents a final color/black-and-white film, 1.85 presentation and 5.1 DCP. Those are delivery-level facts and do not establish the native aspect ratio, scanner, codec or resolution of each archival asset." },
    { area: "editing", status: "source_verified", note: "Alexandra Strauss is picture editor. Peck describes text-first assembly, spatial handling of archive and layer-by-layer returns to books, footnotes, images and music; Fair Use/legal notes and licensing availability could directly change montage." },
    { area: "sound_design", status: "source_verified", note: "Valérie Le Docte and David Gillain are documented sound-post credits. Peck describes narrative-film treatment of sound, music and silence; exact microphones, plug-ins, stems and mix automation remain unverified." },
    { area: "music", status: "source_verified", note: "Alexei Aigui is the documented composer. Original score, licensed/source music and archival musical performances are kept as different rights and mix categories rather than flattened into one music layer." },
    { area: "effects_animation", status: "mapped", note: "Graphics and animation are documented layers, but effects spectacle is not central. Exact graphics software, restoration algorithms, compositing recipes and per-shot processing remain outside the verified layer." },
    { area: "documentary_method", status: "source_verified", note: "This is the central area: broad Estate access, heterogeneous archive research, provenance logs, Fair Use versus paid licensing, legal review by edit version, Baldwin-only verbal authorship, new photography and late voice performance form a reproducible hybrid nonfiction method." }
  ]
} as const satisfies FilmHistoryProfile;
`;

write("src/ui/data/scenarioProductionVerificationIAmNotYourNegro.ts", verification);
write("src/ui/data/scenarioFilmStudyChapterEighteenIAmNotYourNegro.ts", filmStudy);

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenTheRevenantExpansion } from "../../core/chapterEighteenTheRevenantExpansion.js";\n',
    'import { mergeChapterEighteenTheRevenantExpansion } from "../../core/chapterEighteenTheRevenantExpansion.js";\nimport { mergeChapterEighteenIAmNotYourNegroExpansion } from "../../core/chapterEighteenIAmNotYourNegroExpansion.js";\n',
    "filmScenarios I Am Not Your Negro import");
  s = replaceOnce(s,
    'const chapterEighteenTheRevenantScenarios = mergeChapterEighteenTheRevenantExpansion(chapterEighteenIdaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTheRevenantScenarios);',
    'const chapterEighteenTheRevenantScenarios = mergeChapterEighteenTheRevenantExpansion(chapterEighteenIdaScenarios);\nconst chapterEighteenIAmNotYourNegroScenarios = mergeChapterEighteenIAmNotYourNegroExpansion(chapterEighteenTheRevenantScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenIAmNotYourNegroScenarios);',
    "filmScenarios I Am Not Your Negro merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_the_revenant_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing The Revenant source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_i_am_not_your_negro_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_i_am_not_your_negro_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { theRevenantProductionCaseVerification } from "./scenarioProductionVerificationTheRevenant";\n',
    'import { theRevenantProductionCaseVerification } from "./scenarioProductionVerificationTheRevenant";\nimport { iAmNotYourNegroProductionCaseVerification } from "./scenarioProductionVerificationIAmNotYourNegro";\n',
    "verification I Am Not Your Negro import");
  s = replaceOnce(s,
    "  theRevenantProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  theRevenantProductionCaseVerification,\n  iAmNotYourNegroProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification I Am Not Your Negro record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { theRevenantFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTheRevenant";\n',
    'import { theRevenantFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTheRevenant";\nimport { iAmNotYourNegroFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenIAmNotYourNegro";\n',
    "Film Study I Am Not Your Negro import");
  s = replaceOnce(s,
    "  [theRevenantFilmHistoryProfile.scenarioId]: theRevenantFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [theRevenantFilmHistoryProfile.scenarioId]: theRevenantFilmHistoryProfile,\n  [iAmNotYourNegroFilmHistoryProfile.scenarioId]: iAmNotYourNegroFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study I Am Not Your Negro profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 533;", "const EXPECTED_PLAYABLE_SCENARIOS = 534;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 533;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 534;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenTheRevenantExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenTheRevenantExpansion.ts",\n  "chapterEighteenIAmNotYourNegroExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 533;", "const EXPECTED_ATLAS_COUNT = 534;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenTheRevenantExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenTheRevenantExpansion.ts",\n  "chapterEighteenIAmNotYourNegroExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 533, 534, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 533, 534, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"The Revenant", "From Afar", "Moonlight", "Toni Erdmann", "Dunkirk",',
    '"The Revenant", "From Afar", "Moonlight", "Toni Erdmann", "I Am Not Your Negro", "Dunkirk",',
    "Chapter 18 exactExisting I Am Not Your Negro");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "I Am Not Your Negro", "Get Out", "Cold War",',
    'const exactP1Queue = [\n  "Get Out", "Cold War",',
    "Chapter 18 P1 I Am Not Your Negro removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 76);", "assert.equal(exactExisting.length, 77);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 5);", "assert.equal(exactP1Queue.length, 4);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 5);", "assert.equal(resolved.recommendedNewProductionCases.length, 4);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 534 || resolved.atlas?.actualCount !== 534) throw new Error("Chapter 18 did not materialize 534/534");
if (!resolved.byDecision?.USE_EXISTING?.includes("I Am Not Your Negro")) throw new Error("I Am Not Your Negro did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("I Am Not Your Negro")) throw new Error("I Am Not Your Negro remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 77) throw new Error(`Expected 77 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 4) throw new Error(`Expected 4 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 4) throw new Error("Expected 4 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "Get Out") throw new Error(`Expected Get Out next P1, got ${resolved.byDecision?.P1?.[0]}`);
if (resolved.byDecision?.P2?.length !== 1 || resolved.byDecision.P2[0] !== "The New World") throw new Error("Expected The New World to remain the sole P2 case");

console.log("I_AM_NOT_YOUR_NEGRO_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});