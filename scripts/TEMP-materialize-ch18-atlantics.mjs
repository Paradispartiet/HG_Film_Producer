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

export const atlanticsProductionCaseVerification = {
  scenarioId: "scenario_atlantics_2019",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Atlantics is verified as a 2019 Chapter 18 Production Case in which Senegalese authorship, a France-Senegal-Belgium co-production network, Wolof performance, situated street casting, Dakar location work, a RED Epic daytime / high-sensitivity Panasonic VariCam night strategy, long-lens observational photography, supernatural social realism, late editorial writing, sound and score authorship, and post-Cannes platform circulation operate as one production system. Festival de Cannes anchors a 104-minute version and the principal creative credits. Distributor and cinematography records document 1.66/5.1 delivery metadata, Les Films du Bal/Cinekap/Frakas and ARTE France Cinema/Canal+ International production layers, Claire Mathon's RED Epic daytime and VariCam night strategy, long focal lengths around 85-135 mm and the Angenieux Optimo 45-120 mm. Panavision/AFC identifies RED Epic Dragon, Panasonic VariCam LT and Zeiss G.O. T1.3, while Mathon interviews identify the night body as VariCam 35; that title-specific source discrepancy is preserved rather than silently harmonized. Mati Diop's casting accounts locate Souleiman at a construction site, Dior in a nightclub and Ada in Thiaroye, making social geography part of production authorship. Diop also states that Violaine Huisman wrote the final poetic Ada/Souleiman words at the very end of editing and that they were not recorded during principal photography. Fatima Al Qadiri is preserved as the credited composer, and Netflix's post-Cannes international-rights acquisition is treated as circulation evidence rather than proof of principal-photography financing or control. Exact budget and financing shares, shoot/rehearsal days, casting census, resolution of the VariCam LT/35 label conflict, complete lens map, universal exposure or lighting recipes, codecs/media, LUT/CDL recipes, VFX totals/software, edit and sound hardware, DI node graphs and final-mix topology remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "Atlantique",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/atlantique/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting the 104-minute version, France-Senegal-Belgium production context and principal direction, writing, cinematography, editing, music, sound, design and costume credits."
    },
    {
      title: "Portrait de la jeune fille en feu et Atlantique – entretiens avec Claire Mathon",
      publisher: "CineCimes",
      url: "https://cinecimes.fr/portrait-de-la-jeune-fille-en-feu-et-atlantique-entretiens-avec-claire-mathon-directrice-de-la-photographie/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Mathon describes the RED Epic daytime / Panasonic VariCam night split, long focal lengths, Dakar night-light conditions and the observational visual method."
    },
    {
      title: "Entretiens avec les laureats du Prix de la CST 2019",
      publisher: "Commission Superieure Technique de l'Image et du Son",
      url: "https://prix.cst.fr/entretiens-avec-les-laureats-du-prix-de-la-cst-2019/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Title-specific Mathon interview supporting the high-sensitivity VariCam night strategy, very dark Dakar environments and image-making under humidity and difficult night conditions."
    },
    {
      title: "La Lettre de l'AFC 298",
      publisher: "Association Francaise des directrices et directeurs de la photographie cinematographique",
      url: "https://www.afcinema.com/IMG/pdf/4/a/8/lettre_298.pdf",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Panavision/AFC equipment record listing RED Epic Dragon, Panasonic VariCam LT and Zeiss G.O. T1.3 for Atlantique; preserved alongside interview references to VariCam 35 rather than used to erase the discrepancy."
    },
    {
      title: "Mati Diop on Atlantique",
      publisher: "British Vogue",
      url: "https://www.vogue.co.uk/arts-and-lifestyle/article/mati-diop-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Diop discusses situated casting, Dakar social geography and Fatima Al Qadiri as a deliberately chosen creative collaborator."
    },
    {
      title: "ScreenTalks Archive: Mati Diop on Atlantics",
      publisher: "Barbican",
      url: "https://www.barbican.org.uk/read-watch-listen/screentalks-archive-mati-diop-on-atlantics",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Diop describes the late Ada/Souleiman poetic text by Violaine Huisman as writing created at the end of editing rather than dialogue recorded during principal photography."
    },
    {
      title: "Netflix Acquires Cannes Film Festival Award Winners Atlantics and I Lost My Body",
      publisher: "Netflix",
      url: "https://about.netflix.com/en/news/netflix-acquires-cannes-film-festival-award-winners-atlantics-and-i-lost-my-body",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Official acquisition announcement supporting the post-Cannes international-rights layer; it is used as distribution evidence, not as evidence of principal-photography financing or creative control."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

const filmStudy = String.raw`import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const atlanticsFilmHistoryProfile = {
  scenarioId: "scenario_atlantics_2019",
  period: "2019 Senegalese transnational digital cinema: Dakar social geography, low-light digital capture, supernatural social realism and post-festival platform circulation",
  traditions: ["Senegalese cinema", "West African social realism", "supernatural social realism", "diasporic cinema", "festival cinema", "transnational co-production", "digital low-light cinematography", "nonprofessional performance", "platform-era circulation"],
  before: "African and diasporic filmmakers had long negotiated local authorship with international finance, festival circulation and European co-production structures. By the late 2010s, sensitive digital cameras and mobile crews could work in very dark practical environments while international platforms increasingly acquired festival films after completion. Those industrial changes did not automatically determine whose language, spaces or social experience governed a film.",
  moment: "Atlantics makes Dakar, Wolof and situated casting part of production authorship. Diop and her collaborators built the film through a France-Senegal-Belgium network while locating performers in the social environments of the characters. Claire Mathon split photography between RED Epic daytime work and a high-sensitivity Panasonic VariCam night strategy, using long focal lengths and practical/local illumination to preserve darkness, skin tone, humidity, dust and ocean atmosphere. The exact VariCam body remains source-sensitive: Panavision/AFC records VariCam LT while interview material identifies VariCam 35. Ael Dallier Vega's editing manages the transition from labor/migration realism into possession and haunting, and writing continued through post when Violaine Huisman created the final Ada/Souleiman poetic words at the very end of editing. Fatima Al Qadiri's score had been conceived as a core collaborator layer rather than an afterthought. After Cannes, Netflix acquired broad international rights, demonstrating how platform circulation could attach to a film after its locally specific production system and festival life were already established.",
  after: "The case shows a late-Chapter-18 convergence that is neither Hollywood-scale digital spectacle nor camera technology in isolation. Sensitive cameras, transnational finance, nonprofessional performance, local language, editorial rewriting, sound/music authorship and platform acquisition all matter, but the historical point is that these systems amplify rather than replace the film's Senegalese social geography. The source conflict around the VariCam body also demonstrates why production history must preserve provenance instead of forcing every record into false technical certainty.",
  historyQuestion: "How did Atlantics combine Wolof-language Senegalese authorship, Dakar casting and location work, RED/VariCam day-night cinematography, transnational co-production, editorial rewriting, supernatural sound/music and post-Cannes platform rights without allowing any one industrial layer to erase the others?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The film belongs to a late-2010s moment when West African authorship, European co-production, mature digital low-light capture, festival circulation and global platform acquisition could intersect in one feature." },
    { area: "movement_and_tradition", status: "source_verified", note: "Atlantics joins Senegalese and diasporic social realism to supernatural and ghost-film traditions, using haunting to extend rather than abandon the film's labor, migration and gender politics." },
    { area: "industry_and_production_context", status: "source_verified", note: "Festival/distributor records support a France-Senegal-Belgium network including Les Films du Bal, Cinekap and Frakas with ARTE France Cinema and Canal+ International layers; exact financing shares and editorial-control rights remain bounded." },
    { area: "reception_and_legacy", status: "source_verified", note: "Cannes recognition and Netflix's later rights acquisition are important circulation history, but neither is used to infer camera settings, budget, casting duration or production control." },
    { area: "screenplay", status: "source_verified", note: "Mati Diop and Olivier Demangel are the principal writers, while the final Ada/Souleiman poetic words were written by Violaine Huisman at the very end of editing; that late text is not retroactively treated as principal-photography dialogue." },
    { area: "directing", status: "source_verified", note: "Diop's direction ties Wolof, Dakar social geography, performer discovery, trust with first-time actors and the realism-to-supernatural shift into one authorship system." },
    { area: "performance", status: "source_verified", note: "Situated street casting found performers in environments corresponding to the characters; nonprofessional status is treated as a directing/trust problem, not as a claim that performers simply play themselves." },
    { area: "production_design", status: "source_verified", note: "Toma Baqueni's design and Dakar's existing tower, worker spaces, homes, nightclub and coastline organize labor, aspiration and haunting through physical geography rather than generic backdrop." },
    { area: "costume_makeup", status: "source_verified", note: "Rachele Raoult and Salimata Ndiaye are documented costume authors; costume is kept distinct from assumptions that street-cast performers simply supplied all clothing themselves." },
    { area: "cinematography", status: "source_verified", note: "Claire Mathon's method combines RED Epic daytime work, a high-sensitivity Panasonic VariCam night strategy, long focal lengths around 85-135 mm and an Optimo 45-120 mm working range while preserving the LT-versus-35 source discrepancy." },
    { area: "lighting", status: "source_verified", note: "Local/practical night light and deep darkness are part of the visual system; rendering dark skin at night is treated as deliberate exposure/color responsibility without inventing exact fixture, ISO, aperture or white-balance recipes." },
    { area: "camera_format", status: "source_verified", note: "The package evidence supports RED Epic Dragon and Panasonic VariCam plus 1.66 presentation; equipment records say VariCam LT while interviews say VariCam 35, so the body label remains explicitly unresolved instead of fabricating a unified raster claim." },
    { area: "editing", status: "source_verified", note: "Ael Dallier Vega's edit controls when social realism becomes visibly supernatural and remained open to late-written text; exact software/version and complete edit topology are not promoted without stronger records." },
    { area: "sound_design", status: "source_verified", note: "Benoit De Clerck and Emmanuel de Boissieu are documented sound credits. Wolof dialogue, city/ocean ambience, possession effects and rerecording are kept as distinct production/post layers while exact hardware and final mix routing remain bounded." },
    { area: "music", status: "source_verified", note: "Fatima Al Qadiri is the documented composer, chosen early as a core collaborator; the ancient/futuristic electronic language supports the film's political-supernatural world without being reduced to generic mystical scoring." },
    { area: "effects_animation", status: "mapped", note: "The supernatural shift may require image/post manipulation, but the verified case does not invent VFX vendor totals, software stacks or per-shot effect recipes where title-specific documentation is absent." },
    { area: "documentary_method", status: "mapped", note: "Atlantics is fiction, but situated street casting, location observation and reactive long-lens photography borrow documentary practices; those methods inform fiction without changing the film's production category." }
  ]
} as const satisfies FilmHistoryProfile;
`;

write("src/ui/data/scenarioProductionVerificationAtlantics.ts", verification);
write("src/ui/data/scenarioFilmStudyChapterEighteenAtlantics.ts", filmStudy);

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteen1917Expansion } from "../../core/chapterEighteen1917Expansion.js";\n',
    'import { mergeChapterEighteen1917Expansion } from "../../core/chapterEighteen1917Expansion.js";\nimport { mergeChapterEighteenAtlanticsExpansion } from "../../core/chapterEighteenAtlanticsExpansion.js";\n',
    "filmScenarios Atlantics import");
  s = replaceOnce(s,
    'const chapterEighteen1917Scenarios = mergeChapterEighteen1917Expansion(chapterEighteenColdWarScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteen1917Scenarios);',
    'const chapterEighteen1917Scenarios = mergeChapterEighteen1917Expansion(chapterEighteenColdWarScenarios);\nconst chapterEighteenAtlanticsScenarios = mergeChapterEighteenAtlanticsExpansion(chapterEighteen1917Scenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenAtlanticsScenarios);',
    "filmScenarios Atlantics merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_1917_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing 1917 source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_atlantics_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_atlantics_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { nineteenSeventeenProductionCaseVerification } from "./scenarioProductionVerification1917";\n',
    'import { nineteenSeventeenProductionCaseVerification } from "./scenarioProductionVerification1917";\nimport { atlanticsProductionCaseVerification } from "./scenarioProductionVerificationAtlantics";\n',
    "verification Atlantics import");
  s = replaceOnce(s,
    "  nineteenSeventeenProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  nineteenSeventeenProductionCaseVerification,\n  atlanticsProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Atlantics record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { nineteenSeventeenFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteen1917";\n',
    'import { nineteenSeventeenFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteen1917";\nimport { atlanticsFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAtlantics";\n',
    "Film Study Atlantics import");
  s = replaceOnce(s,
    "  [nineteenSeventeenFilmHistoryProfile.scenarioId]: nineteenSeventeenFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [nineteenSeventeenFilmHistoryProfile.scenarioId]: nineteenSeventeenFilmHistoryProfile,\n  [atlanticsFilmHistoryProfile.scenarioId]: atlanticsFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Atlantics profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 537;", "const EXPECTED_PLAYABLE_SCENARIOS = 538;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 537;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 538;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteen1917Expansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteen1917Expansion.ts",\n  "chapterEighteenAtlanticsExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 537;", "const EXPECTED_ATLAS_COUNT = 538;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteen1917Expansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteen1917Expansion.ts",\n  "chapterEighteenAtlanticsExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 537, 538, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 537, 538, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"The Irishman", "1917", "Synonyms",',
    '"The Irishman", "1917", "Atlantics", "Synonyms",',
    "Chapter 18 exactExisting Atlantics");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Atlantics",\n] as const;',
    'const exactP1Queue = [] as const;',
    "Chapter 18 P1 Atlantics removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 80);", "assert.equal(exactExisting.length, 81);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 1);", "assert.equal(exactP1Queue.length, 0);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 1);", "assert.equal(resolved.recommendedNewProductionCases.length, 0);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 538 || resolved.atlas?.actualCount !== 538) throw new Error("Chapter 18 did not materialize 538/538");
if (!resolved.byDecision?.USE_EXISTING?.includes("Atlantics")) throw new Error("Atlantics did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Atlantics")) throw new Error("Atlantics remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 81) throw new Error(`Expected 81 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 0) throw new Error(`Expected 0 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 0) throw new Error("Expected 0 recommended new P0/P1 cases");
if (resolved.byDecision?.P2?.length !== 1 || resolved.byDecision.P2[0] !== "The New World") throw new Error("Expected The New World to remain the sole P2 case");

console.log("ATLANTICS_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  p2: resolved.byDecision.P2,
});
