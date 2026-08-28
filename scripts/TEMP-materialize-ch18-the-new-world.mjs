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

export const theNewWorldProductionCaseVerification = {
  scenarioId: "scenario_the_new_world_2005",
  status: "verified",
  verifiedAt: "2026-08-28",
  summary: "The New World is verified as a 2005 Chapter 18 Production Case whose historical importance lies in photochemical persistence inside digital convergence. Criterion preserves three director-approved versions: the 135-minute theatrical cut used as the playable anchor, a 150-minute first cut and a 172-minute extended cut. BFI and AFI anchor principal credits and historical context. American Cinematographer documents Emmanuel Lubezki's predominantly anamorphic 35mm strategy, selective 65mm for hyper-enhanced moments, close 40mm and 50mm work, custom close-focus Panavision C/E-Series hybrids, deep-focus ambitions around T11-T16 and Kodak Vision2 200T 5217 / Vision2 500T 5218. BFI describes an almost entirely natural-light moving-camera approach using handheld or Steadicam. Sarah Green's production account anchors Virginia locations along the James and Chickahominy Rivers and the production logic of remaining near Jamestown geography. Jack Fisk's later testimony supports research-driven, physically built environments that could tolerate Malick's fluid, minimally storyboarded working method. Language reconstruction, Native and First Nations casting, costume, choreography and representation are kept as distinct production responsibilities rather than collapsed into claims of historical certainty. Criterion's later restoration evidence is used only for version and source-element history: the 35mm original negative, 35mm interpositive and selected 65mm original negative do not retroactively define the 2005 finishing pipeline. Exact 65mm shot counts, complete lens maps, universal T-stops, exposure/processing/filter recipes, camera-body assignment, budget or financing shares, complete construction inventory, cultural-consultant authority beyond documented roles, complete VFX stack, production-sound hardware and 2005 DI/scanning settings remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "The New World",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/28713-the-new-world",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion anchors the three director-approved versions and later restoration/source-element history; restoration evidence is kept separate from the 2005 production and finishing layer."
    },
    {
      title: "The New World (2005)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/4e42abf5-705e-5249-93c8-8f199b1ebae4/the-new-world",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "BFI record supporting direction, production, writing, cast and release context."
    },
    {
      title: "Film of the Month: The New World",
      publisher: "BFI Sight and Sound",
      url: "https://old.bfi.org.uk/sightandsound/review/3131",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "Contemporary BFI review supporting the almost entirely natural-light moving-camera approach using handheld or Steadicam and the film's music/context layer."
    },
    {
      title: "American Cinematographer, January 2006: The New World / Uncharted Emotions",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/magazine/jan06.htm",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Title-specific production record supporting anamorphic 35mm, selective 65mm, custom close-focus C/E-Series hybrids, 40/50mm proximity, T11-T16 ambitions and Kodak Vision2 5217/5218."
    },
    {
      title: "The New World",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/the-new-world",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI record supporting principal writer-director, producer, cinematographer, editor and production context credits."
    },
    {
      title: "Dreaming of a New World",
      publisher: "Cincinnati CityBeat",
      url: "https://www.citybeat.com/arts/film-dreaming-of-a-new-world-12176425/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "directing", "production_design"],
      note: "Sarah Green production interview supporting the Virginia shoot along undeveloped stretches of the James and Chickahominy Rivers and the production's relationship to historical geography."
    },
    {
      title: "Inside the enduring movie homes of Jack Fisk, production design legend",
      publisher: "Associated Press",
      url: "https://apnews.com/article/90c5b0a569ae9653985252176d7ead7a",
      sourceKind: "trade_feature",
      supports: ["overall", "production_design"],
      note: "Jack Fisk testimony supporting research-driven physical Jamestown construction, period methods and complete environments designed for Malick's fluid approach."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

const filmStudy = String.raw`import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const theNewWorldFilmHistoryProfile = {
  scenarioId: "scenario_the_new_world_2005",
  period: "2005 digital-convergence countercurrent: photochemical anamorphic production, selective 65mm, natural-light mobile staging, physical historical reconstruction and multi-version editorial history",
  traditions: ["American historical cinema", "photochemical feature production", "anamorphic cinematography", "65mm countercurrent", "natural-light cinematography", "location cinema", "immersive production design", "historical reconstruction", "multi-version editing"],
  before: "By the mid-2000s, digital intermediates, digital acquisition and digital exhibition were expanding rapidly, but feature production had not crossed a single universal technological threshold. High-end film stocks, Panavision anamorphic systems, physical construction and location work remained viable choices, especially when filmmakers valued negative latitude, organic movement and complete environments.",
  moment: "The New World makes that uneven transition visible. Malick, Sarah Green, Emmanuel Lubezki and Jack Fisk organize the production around Virginia geography, predominantly anamorphic 35mm photography, a small amount of selective 65mm, custom close-focus lenses, deep-stop ambitions, Kodak Vision2 stocks, natural light and a highly mobile camera. Physical Jamestown and Powhatan environments support minimally storyboarded blocking and changing relationships to light. Language reconstruction, casting, costume, choreography and cultural responsibility remain separate coordinated systems. Post-production is equally historical: four credited editors and three director-approved cuts demonstrate continued structural revision, while the later Criterion restoration exposes the material consequences of a theatrical negative that had already been physically cut.",
  after: "The case prevents Chapter 18 from becoming a story in which digital convergence simply means digital cameras replacing film. The New World shows analogue capture and physical production operating beside digital post and distribution infrastructures, with later restoration adding another distinct technological layer. Its version history also demonstrates that a film's production record cannot be reduced to one runtime, one negative or one final editorial state.",
  historyQuestion: "How did The New World combine photochemical anamorphic capture, selective 65mm, natural-light mobile staging, research-driven Virginia construction, cultural/language responsibilities and continuing editorial revision inside a period of accelerating digital convergence?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "A 2005 prestige feature could remain predominantly photochemical while digital post, exhibition and capture expanded around it, making the film a Chapter 18 countercurrent rather than an exception outside convergence." },
    { area: "movement_and_tradition", status: "source_verified", note: "The production combines American historical epic conventions with Malick's lyrical, exploratory location practice and a camera grammar built around nature, movement and subjective voiceover." },
    { area: "industry_and_production_context", status: "source_verified", note: "Sarah Green's production layer and Virginia location feasibility are documented, while exact budget, incentive amount and financing shares remain bounded where title-specific records are absent." },
    { area: "reception_and_legacy", status: "source_verified", note: "The 150-, 135- and 172-minute director-approved versions and Criterion's later restoration make release/version history central; later restoration tools are not retroactively treated as the 2005 production pipeline." },
    { area: "screenplay", status: "source_verified", note: "Terrence Malick is the documented writer-director; historical and archaeological research are treated as production references rather than proof that the drama independently verifies seventeenth-century events." },
    { area: "directing", status: "source_verified", note: "Malick's fluid, minimally storyboarded method depends on complete environments, mobile camera access and the ability to redirect staging in response to performers and natural light." },
    { area: "performance", status: "source_verified", note: "Native and First Nations casting, language preparation, choreography and young-performer welfare are distinct labor and representation responsibilities; performer identity is not treated as proof of every cultural detail." },
    { area: "production_design", status: "source_verified", note: "Jack Fisk's research-driven Jamestown construction and wider Virginia environments function as usable spatial systems rather than isolated facades or digital replacements." },
    { area: "costume_makeup", status: "source_verified", note: "Jacqueline West's costume design must coordinate period research, movement, weather, water, dirt and natural-light rendering without inventing undocumented wardrobe-by-scene recipes." },
    { area: "cinematography", status: "source_verified", note: "Emmanuel Lubezki's title-specific record supports predominantly anamorphic 35mm, a small amount of selective 65mm, 40/50mm actor proximity, custom close-focus C/E-Series hybrids and deep-focus ambitions around T11-T16." },
    { area: "lighting", status: "source_verified", note: "BFI and the production record support an almost entirely natural-light strategy; this constrains scheduling and exposure without becoming an absolute claim that artificial light was never used in any setup." },
    { area: "camera_format", status: "source_verified", note: "Kodak Vision2 200T 5217 and Vision2 500T 5218 are documented stocks; scene-level stock assignment, exact 65mm shot count, complete camera-body assignment and complete lens map remain bounded." },
    { area: "editing", status: "source_verified", note: "Richard Chew, Hank Corwin, Saar Klein and Mark Yoshikawa anchor a multi-editor lineage across the 150-minute first cut, 135-minute theatrical cut and 172-minute extended cut." },
    { area: "sound_design", status: "source_verified", note: "Craig Berkey, José Antonio García and Skip Lievsay occupy distinct documented sound-design, production/mixing and rerecording roles; exact hardware, ADR chain and final mix topology remain unresolved." },
    { area: "music", status: "source_verified", note: "James Horner's authored score is kept distinct from Wagner, Mozart and other source music and from the sound-design layer." },
    { area: "effects_animation", status: "mapped", note: "CIS Hollywood is a documented VFX credit, but the verified case does not invent complete shot counts, software stacks or a digital-environment replacement model for a predominantly physical production." },
    { area: "documentary_method", status: "mapped", note: "The production's research, complete locations and reportorial moving-camera method borrow observational practices while remaining a staged historical fiction; the finished film is not treated as independent historical evidence." }
  ]
} as const satisfies FilmHistoryProfile;
`;

write("src/ui/data/scenarioProductionVerificationTheNewWorld.ts", verification);
write("src/ui/data/scenarioFilmStudyChapterEighteenTheNewWorld.ts", filmStudy);

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenAtlanticsExpansion } from "../../core/chapterEighteenAtlanticsExpansion.js";\n',
    'import { mergeChapterEighteenAtlanticsExpansion } from "../../core/chapterEighteenAtlanticsExpansion.js";\nimport { mergeChapterEighteenTheNewWorldExpansion } from "../../core/chapterEighteenTheNewWorldExpansion.js";\n',
    "filmScenarios The New World import");
  s = replaceOnce(s,
    'const chapterEighteenAtlanticsScenarios = mergeChapterEighteenAtlanticsExpansion(chapterEighteen1917Scenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenAtlanticsScenarios);',
    'const chapterEighteenAtlanticsScenarios = mergeChapterEighteenAtlanticsExpansion(chapterEighteen1917Scenarios);\nconst chapterEighteenTheNewWorldScenarios = mergeChapterEighteenTheNewWorldExpansion(chapterEighteenAtlanticsScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTheNewWorldScenarios);',
    "filmScenarios The New World merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_atlantics_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Atlantics source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_the_new_world_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_the_new_world_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { atlanticsProductionCaseVerification } from "./scenarioProductionVerificationAtlantics";\n',
    'import { atlanticsProductionCaseVerification } from "./scenarioProductionVerificationAtlantics";\nimport { theNewWorldProductionCaseVerification } from "./scenarioProductionVerificationTheNewWorld";\n',
    "verification The New World import");
  s = replaceOnce(s,
    "  atlanticsProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  atlanticsProductionCaseVerification,\n  theNewWorldProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification The New World record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { atlanticsFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAtlantics";\n',
    'import { atlanticsFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAtlantics";\nimport { theNewWorldFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTheNewWorld";\n',
    "Film Study The New World import");
  s = replaceOnce(s,
    "  [atlanticsFilmHistoryProfile.scenarioId]: atlanticsFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [atlanticsFilmHistoryProfile.scenarioId]: atlanticsFilmHistoryProfile,\n  [theNewWorldFilmHistoryProfile.scenarioId]: theNewWorldFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study The New World profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 538;", "const EXPECTED_PLAYABLE_SCENARIOS = 539;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 538;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 539;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenAtlanticsExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenAtlanticsExpansion.ts",\n  "chapterEighteenTheNewWorldExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 538;", "const EXPECTED_ATLAS_COUNT = 539;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenAtlanticsExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenAtlanticsExpansion.ts",\n  "chapterEighteenTheNewWorldExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 538, 539, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 538, 539, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"Head-On", "Vera Drake", "Brokeback Mountain", "Caché", "Inland Empire",',
    '"Head-On", "Vera Drake", "Brokeback Mountain", "Caché", "The New World", "Inland Empire",',
    "Chapter 18 exactExisting The New World");
  s = replaceOnce(s,
    'const exactP2Queue = ["The New World"] as const;',
    'const exactP2Queue = [] as const;',
    "Chapter 18 P2 The New World removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 81);", "assert.equal(exactExisting.length, 82);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP2Queue.length, 1);", "assert.equal(exactP2Queue.length, 0);", "Chapter 18 P2 length");
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
if (resolved.atlas?.expectedCount !== 539 || resolved.atlas?.actualCount !== 539) throw new Error("Chapter 18 did not materialize 539/539");
if (!resolved.byDecision?.USE_EXISTING?.includes("The New World")) throw new Error("The New World did not become USE_EXISTING");
if (resolved.byDecision?.P2?.includes("The New World")) throw new Error("The New World remained P2");
if (resolved.byDecision?.USE_EXISTING?.length !== 82) throw new Error(`Expected 82 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 0) throw new Error(`Expected 0 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.byDecision?.P2?.length !== 0) throw new Error(`Expected 0 P2 cases, got ${resolved.byDecision?.P2?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 0) throw new Error("Expected 0 recommended new P0/P1 cases");

console.log("THE_NEW_WORLD_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  p2: resolved.byDecision.P2.length,
});
