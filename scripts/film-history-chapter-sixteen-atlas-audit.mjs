import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const dataDirectory = path.join(root, "src", "ui", "data");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 507;

const expansionFiles = [
  "earlyCinemaExpansion.ts",
  "chapterOneEarlyCinemaExpansion.ts",
  "chapterOneRescuedByRoverExpansion.ts",
  "chapterTwoExhibitionExpansion.ts",
  "chapterThreeNarrativeExpansion.ts",
  "chapterFourIndustryExpansion.ts",
  "chapterFiveInternationalExpansion.ts",
  "chapterSixHollywoodExpansion.ts",
  "chapterSevenWeimarExpansion.ts",
  "chapterEightFrenchAvantGardeExpansion.ts",
  "chapterNineSovietMontageExpansion.ts",
  "chapterTenSilentCinemasExpansion.ts",
  "chapterTenLaborersLoveExpansion.ts",
  "chapterTenAThrowOfDiceExpansion.ts",
  "chapterTenGrowthOfTheSoilExpansion.ts",
  "chapterTenOrochiExpansion.ts",
  "chapterTenRedHeroineExpansion.ts",
  "chapterTenHaxanExpansion.ts",
  "chapterElevenJazzSingerExpansion.ts",
  "chapterElevenBlackmailExpansion.ts",
  "chapterElevenApplauseExpansion.ts",
  "chapterElevenNeighborsWifeExpansion.ts",
  "chapterElevenBroadwayMelodyExpansion.ts",
  "chapterElevenSousLesToitsExpansion.ts",
  "chapterElevenEnthusiasmExpansion.ts",
  "chapterElevenBlueAngelExpansion.ts",
  "chapterTwelvePublicEnemyExpansion.ts",
  "chapterTwelveDraculaExpansion.ts",
  "chapterTwelve42ndStreetExpansion.ts",
  "chapterTwelveScarfaceExpansion.ts",
  "chapterTwelveItHappenedOneNightExpansion.ts",
  "chapterTwelveTopHatExpansion.ts",
  "chapterTwelveGoneWithTheWindExpansion.ts",
  "chapterThirteenPaisanExpansion.ts",
  "chapterThirteenRedShoesExpansion.ts",
  "chapterThirteenSunsetBoulevardExpansion.ts",
  "chapterThirteenLosOlvidadosExpansion.ts",
  "chapterThirteenUgetsuExpansion.ts",
  "chapterThirteenAManEscapedExpansion.ts",
  "chapterFourteenBlackGirlExpansion.ts",
  "chapterFourteenMemoriesUnderdevelopmentExpansion.ts",
  "chapterFifteenToukiBoukiExpansion.ts",
  "chapterFifteenManilaClawsLightExpansion.ts",
  "chapterFifteenBattleChilePartOneExpansion.ts",
  "chapterSixteenRaidersLostArkExpansion.ts",
  "chapterSixteenYellowEarthExpansion.ts",
  "chapterSixteenMyBeautifulLaundretteExpansion.ts",
  "chapterSixteenPoliceStoryExpansion.ts",
  "chapterSixteenOfficialStoryExpansion.ts",
  "chapterSixteenYeelenExpansion.ts",
  "chapterSixteenDoTheRightThingExpansion.ts",
  "chapterSixteenMephistoExpansion.ts",
  "chapterSixteenMissingExpansion.ts",
  "chapterSixteenBladeRunnerExpansion.ts",
  "chapterSixteenETExtraTerrestrialExpansion.ts",
  "chapterSixteenSugarCaneAlleyExpansion.ts",
  "chapterSixteenTerminatorExpansion.ts",
  "chapterSixteenComeAndSeeExpansion.ts",
  "chapterSixteenBackToTheFutureExpansion.ts",
  "chapterSixteenAliensExpansion.ts",
  "chapterSixteenShesGottaHaveItExpansion.ts",
  "chapterSixteenABetterTomorrowExpansion.ts",
  "chapterSixteenRoboCopExpansion.ts",
  "chapterSixteenSalaamBombayExpansion.ts",
  "chapterSixteenRagingBullExpansion.ts",
  "chapterSeventeenHyenasExpansion.ts",
  "chapterSeventeenSankofaExpansion.ts",
  "chapterSeventeenChungkingExpressExpansion.ts",
  "chapterSeventeenBanditQueenExpansion.ts",
  "chapterSeventeenToyStoryExpansion.ts",
  "chapterSeventeenTheMatrixExpansion.ts",
  "chapterSeventeenShiriExpansion.ts",
  "chapterSeventeenMyOwnPrivateIdahoExpansion.ts",
  "chapterSeventeenBoyzNTheHoodExpansion.ts",
  "chapterSeventeenTheLivingEndExpansion.ts",
  "chapterSeventeenThePianoExpansion.ts",
  "chapterSeventeenThreeColoursRedExpansion.ts",
  "chapterSeventeenPulpFictionExpansion.ts",
  "chapterSeventeenHoopDreamsExpansion.ts",
  "chapterSeventeenTheWhiteBalloonExpansion.ts",
  "chapterSeventeenFireExpansion.ts",
  "chapterSeventeenTitanicExpansion.ts",
  "chapterSeventeenPrincessMononokeExpansion.ts",
  "chapterSeventeenEvesBayouExpansion.ts",
  "chapterSeventeenTheIdiotsExpansion.ts",
  "chapterSeventeenRinguExpansion.ts",
  "chapterSeventeenBlairWitchProjectExpansion.ts",
  "chapterSeventeenBoysDontCryExpansion.ts",
  "chapterSeventeenGoodfellasExpansion.ts",
  "chapterEighteenGleanersExpansion.ts",
  "chapterEighteenInTheMoodForLoveExpansion.ts",
  "chapterEighteenAtanarjuatExpansion.ts",
  "chapterEighteenSpiritedAwayExpansion.ts",
  "chapterEighteenRussianArkExpansion.ts",
  "chapterEighteenCityOfGodExpansion.ts",
  "chapterEighteenAttackOfTheClonesExpansion.ts",
  "chapterEighteenCollateralExpansion.ts",
  "chapterEighteenInlandEmpireExpansion.ts",
  "chapterEighteenZodiacExpansion.ts",
  "chapterEighteenSlumdogMillionaireExpansion.ts",
  "chapterEighteenAvatarExpansion.ts",
  "chapterEighteenTheSocialNetworkExpansion.ts",
  "chapterEighteenASeparationExpansion.ts",
  "modernCanonExpansion.ts",
  "priorityIndieExpansion.ts",
  "eastAsianAuteurExpansion.ts",
  "japaneseAuteurExpansion.ts",
  "southKoreanCinemaExpansion.ts",
  "southSoutheastAsianExpansion.ts",
  "festivalWinners1981To2009Expansion.ts",
  "festivalWinners2010To2024Expansion.ts",
  "scandinavianEuropeanExpansion.ts",
  "easternIberianBritishExpansion.ts",
  "italyFranceGermanyBeneluxExpansion.ts",
];

const candidates = [
  ["Raging Bull", "Raging Bull", 1980, [], "chapter_fifteen_handoff", "P2", "The late-New-Hollywood studio-auteur model is useful as a boundary comparison, but it does not alone define the new decade."],
  ["The Shining", "The Shining", 1980, [], "major_comparison", "P2", "Large-scale horror, Steadicam-era movement and long production control are useful comparisons without becoming the chapter's sole technology story."],
  ["Mephisto", "Mephisto", 1981, [], "anchor_film", "P1", "Hungarian-West German-Austrian co-production, fascism, performance and Lajos Koltai's production system makes Mephisto a useful European political-cinema gap candidate."],
  ["Raiders of the Lost Ark", "Raiders of the Lost Ark", 1981, [], "anchor_film", "P0", "Paramount, Lucasfilm, Spielberg, stunt/effects infrastructure and sequel-ready intellectual property make franchise-era studio coordination materially visible."],
  ["Missing", "Missing", 1982, [], "anchor_film", "P1", "Costa-Gavras, Universal/PolyGram-era finance, Mexico-for-Chile production and political investigation anchor transnational studio political cinema."],
  ["Blade Runner", "Blade Runner", 1982, [], "anchor_film", "P1", "Design, optical-effects labor, corporate finance and later version/home-media history make one title useful for separating original production from downstream recutting and canonization."],
  ["E.T. the Extra-Terrestrial", "E.T. the Extra-Terrestrial", 1982, ["E.T.", "E.T. the Extra Terrestrial"], "major_comparison", "P1", "Family blockbuster scale, Amblin/Universal production, effects, music, licensing and unusually managed home-video afterlife broaden the blockbuster system beyond action franchises."],
  ["Rumble Fish", "Rumble Fish", 1983, [], "anchor_film", "EXISTING_REQUIRED", "Coppola's verified Tulsa production, electronic rehearsal, expressive black-and-white craft and studio distribution preserve an auteur-industrial countercurrent."],
  ["The Ballad of Narayama", "Narayama bushikō", 1983, ["Narayama Bushiko"], "major_comparison", "P1", "Imamura's Japanese production and Cannes circulation offer a stronger 1980s national-industry countercase than treating Japan only through late Kurosawa exports."],
  ["Sugar Cane Alley", "Rue Cases-Nègres", 1983, ["Rue Cases Negres", "Sugar Cane Alley"], "major_comparison", "P1", "Euzhan Palcy's Martinique-France production connects colonial memory, literary adaptation, Black authorship and international circulation."],
  ["Blood Simple", "Blood Simple", 1984, [], "anchor_film", "EXISTING_REQUIRED", "River Road, Texas locations, Sundance and verified department craft anchor the emerging American independent-specialty ecology."],
  ["Paris, Texas", "Paris, Texas", 1984, [], "anchor_film", "EXISTING_REQUIRED", "Road Movies/Argos, Robby Müller, transatlantic finance and Cannes circulation make co-production and art-cinema distribution concrete."],
  ["Yellow Earth", "Huang tu di", 1984, ["Huang Tudi"], "anchor_film", "P0", "Chen Kaige and Fifth Generation production are indispensable to any account of Mainland Chinese cinema's institutional and aesthetic transformation."],
  ["The Terminator", "The Terminator", 1984, [], "major_comparison", "P1", "Independent financing, practical/optical effects and later franchise expansion make a useful bridge between resourcefulness and scalable intellectual property."],
  ["Come and See", "Idi i smotri", 1985, ["Idi i smotri"], "anchor_film", "P1", "Belarusfilm/Mosfilm, large-scale destruction, handheld optics and Soviet war memory anchor state-studio political production."],
  ["Tampopo", "Tanpopo", 1985, ["Tanpopo"], "anchor_film", "P1", "Itami's genre-parody production provides a specifically Japanese commercial/auteur system rather than a festival-only national cinema."],
  ["My Beautiful Laundrette", "My Beautiful Laundrette", 1985, [], "anchor_film", "P0", "Channel 4 finance, television/cinema windowing, queer British-Asian authorship and Thatcher-era production make broadcaster-backed independent cinema indispensable."],
  ["Police Story", "Ging chaat goo si", 1985, ["Police Story 1", "Ging Chaat Goo Si"], "anchor_film", "P0", "Hong Kong location action, stunt labor, star-producer authorship and commercial studio infrastructure prevent the decade's Asian history from collapsing into art cinema."],
  ["The Official Story", "La historia oficial", 1985, ["La Historia Oficial"], "anchor_film", "P0", "Argentina's post-dictatorship memory cinema makes censorship, democratic transition, production risk and international circulation part of the decade."],
  ["Back to the Future", "Back to the Future", 1985, [], "major_comparison", "P1", "Amblin/Universal production, effects, music, marketing and sequel architecture sharpen the difference between a hit film and a reproducible franchise system."],
  ["Down by Law", "Down by Law", 1986, [], "anchor_film", "EXISTING_REQUIRED", "Jarmusch, Robby Müller and an all-Louisiana independent production anchor regional low-budget circulation outside Hollywood's franchise logic."],
  ["Aliens", "Aliens", 1986, [], "major_comparison", "P1", "A sequel rebuilt through British stages, miniatures, creature/effects labor and intensified action production tests how franchises change production systems across installments."],
  ["She's Gotta Have It", "She's Gotta Have It", 1986, ["Shes Gotta Have It"], "major_comparison", "P1", "Spike Lee's microbudget feature is the clearest production bridge into the late-decade New Black Cinema and Do the Right Thing."],
  ["A Better Tomorrow", "Ying hung boon sik", 1986, ["Ying Hung Boon Sik"], "major_comparison", "P1", "John Woo's crime-action production and heroic-bloodshed cycle complement Police Story's stunt-centered Hong Kong commercial system."],
  ["Yeelen", "Yeelen", 1987, ["Brightness"], "anchor_film", "P0", "Souleymane Cissé's Mali/Burkina Faso/France/GDR co-production and unprecedented international circulation make African production history structurally necessary."],
  ["RoboCop", "RoboCop", 1987, [], "major_comparison", "P1", "Orion-era finance, practical effects, stop-motion, makeup and corporate satire provide a compact alternative to vertically scaled studio franchise production."],
  ["Pelle the Conqueror", "Pelle Erobreren", 1987, ["Pelle erobreren"], "major_comparison", "P1", "Nordic historical production and Cannes circulation broaden European public/co-production structures beyond Britain and West Germany."],
  ["Landscape in the Mist", "Topio stin omichli", 1988, ["Topio stin omihli"], "major_comparison", "P1", "Angelopoulos's Greek-European co-production and long-take road production preserve another model of continental art-cinema infrastructure."],
  ["Cinema Paradiso", "Nuovo Cinema Paradiso", 1988, ["Nuovo cinema Paradiso"], "anchor_film", "EXISTING_REQUIRED", "Italian-French production, projection labor, alternate cuts and international circulation make exhibition and home-media versioning historically legible."],
  ["Salaam Bombay!", "Salaam Bombay!", 1988, ["Salaam Bombay"], "major_comparison", "P1", "Indian location production, child performance, transnational finance and festival circulation keep South Asia inside the global decade."],
  ["A City of Sadness", "Bei qing cheng shi", 1989, ["A City of Sadness", "Beiqing chengshi"], "anchor_film", "P0", "Taiwan New Cinema, political liberalization, location history and festival circulation are indispensable to the decade's East Asian transformation."],
  ["Do the Right Thing", "Do the Right Thing", 1989, [], "anchor_film", "P0", "Spike Lee's Brooklyn production connects Black independent practice, studio distribution, location control, music and race politics at the decade's endpoint."],
  ["sex, lies, and videotape", "sex, lies, and videotape", 1989, ["Sex, Lies, and Videotape"], "anchor_film", "EXISTING_REQUIRED", "Outlaw Productions, Sundance, Cannes and Miramax acquisition anchor the specialty-distribution model that hands directly into the 1990s indie boom."],
  ["Black Rain", "Kuroi ame", 1989, ["Kuroi Ame", "Black Rain (Imamura)"], "major_comparison", "P1", "Imamura's postwar-memory production keeps Japanese historical cinema distinct from both commercial genre and festival export narratives."],
].map(([title, originalTitle, year, aliases, role, decisionIfMissing, chapterFunction]) => ({ title, originalTitle, year, aliases, role, decisionIfMissing, chapterFunction }));

const historicalObjects = [
  ["Franchise, sequel and intellectual-property consolidation", "Studios increasingly coordinated sequels, recognizable properties, stars, merchandising and release strategy across multiple films; franchise is an industrial relation, not a genre label."],
  ["Home video, cable and the expanding aftermarket", "VHS/Betamax, rental and cable changed circulation, catalog value, censorship disputes and audience access; downstream video masters and cuts remain separate from original production evidence."],
  ["High-concept marketing, saturation release and ancillary value", "Trailers, posters, music, licensing, release scale and simple-to-communicate premises became increasingly coordinated with production, without making every successful film a high-concept blockbuster."],
  ["Effects, sound and post-production specialization", "Optical houses, creature and makeup effects, motion-control, miniatures, Dolby-era sound and increasingly specialized post-production labor changed both spectacle and mid-budget genre production."],
  ["Broadcast finance and new British production institutions", "Channel 4 and related public/private television structures opened feature-production space for subjects, writers and filmmakers poorly served by older studio systems."],
  ["American independent and specialty-distribution ecology", "Regional production, Sundance, Cannes, specialty distributors and modest budgets created new routes from local filmmaking to national and international theatrical circulation."],
  ["Mainland Chinese, Hong Kong and Taiwan transformations", "Fifth Generation, Hong Kong New Wave/action industry and Taiwan New Cinema developed through distinct institutions, labor systems, censorship histories and commercial/festival relations and must never be treated as one Chinese movement."],
  ["Political memory under socialism, dictatorship and democratization", "Soviet-bloc, Latin American and other political cinemas negotiated state studios, censorship, historical trauma and changing political institutions through production-specific conditions."],
  ["African and transnational co-production circuits", "African filmmakers combined national cultural institutions, cross-border finance, European partners and festival distribution under unequal access conditions; international recognition is downstream from local authorship and production."],
  ["Preservation, color fading, alternate cuts and restoration", "The decade's films often circulate today through restored, recut or home-media versions; preservation history is essential but must never overwrite original capture, release or labor evidence."],
].map(([label, chapterFunction]) => ({ label, role: "historical_object", atlasDecision: "NO_PRODUCTION_CASE", chapterFunction }));

const researchSources = [
  { title: "All about... videotape", publisher: "BFI", url: "https://www.bfi.org.uk/features/all-about-videotape", supports: ["home_video", "production_access", "channel4_workshops"] },
  { title: "The many voices behind Taiwan New Cinema", publisher: "BFI", url: "https://www.bfi.org.uk/features/many-voices-behind-taiwan-new-cinema", supports: ["taiwan_new_cinema", "collaborative_labor", "institutional_history"] },
  { title: "10 great Hong Kong action films of the 1980s", publisher: "BFI", url: "https://www.bfi.org.uk/news/10-great-hong-kong-action-films-1980s", supports: ["hong_kong_new_wave", "action_industry", "commercial_transformation"] },
  { title: "A Century of Chinese Cinema: an introduction", publisher: "BFI", url: "https://www.bfi.org.uk/features/century-chinese-cinema-introduction", supports: ["mainland_fifth_generation", "hong_kong", "taiwan", "distinct_production_centres"] },
  { title: "Acting hard: working-class men and British cinema", publisher: "BFI", url: "https://www.bfi.org.uk/features/acting-hard-working-class-men-british-cinema", supports: ["channel4", "british_independent_finance", "1980s_policy"] },
  { title: "10 great African films", publisher: "BFI", url: "https://www.bfi.org.uk/lists/10-great-african-films", supports: ["yeelen", "african_cinema", "international_distribution"] },
  { title: "A short history of Black US indie cinema", publisher: "BFI", url: "https://www.bfi.org.uk/features/short-history-black-us-indie-cinema", supports: ["spike_lee", "new_black_cinema", "independent_ecology"] },
];

function normalize(value) {
  return String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
}
function readText(filePath) { return readFileSync(filePath, "utf8"); }
function parseQuotedStrings(value) {
  const out = [];
  const pattern = /"((?:\\.|[^"\\])*)"/g;
  for (const match of value.matchAll(pattern)) out.push(JSON.parse(`"${match[1]}"`));
  return out;
}
function findMatchingBracket(source, startIndex, openCharacter, closeCharacter) {
  let depth = 0, quote = null, escaped = false;
  for (let i = startIndex; i < source.length; i += 1) {
    const c = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (c === "\\") escaped = true;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { quote = c; continue; }
    if (c === openCharacter) depth += 1;
    if (c === closeCharacter && --depth === 0) return i;
  }
  throw new Error(`Unclosed ${openCharacter} beginning at ${startIndex}`);
}
function extractTopLevelObjects(arraySource) {
  const objects = [];
  let i = 0;
  while (i < arraySource.length) {
    if (arraySource[i] !== "{") { i += 1; continue; }
    const end = findMatchingBracket(arraySource, i, "{", "}");
    objects.push(arraySource.slice(i, end + 1));
    i = end + 1;
  }
  return objects;
}
function stringField(source, field, required = true) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`));
  if (!match) { if (!required) return undefined; throw new Error(`Missing ${field}: ${source.slice(0, 160)}`); }
  return JSON.parse(`"${match[1]}"`);
}
function numberField(source, field) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*(\\d+)`));
  if (!match) throw new Error(`Missing ${field}: ${source.slice(0, 160)}`);
  return Number(match[1]);
}
function stringArrayField(source, field) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*\\[([^\\]]*)\\]`));
  return match ? parseQuotedStrings(match[1]) : [];
}
function parseExpansion(fileName) {
  const source = readText(path.join(coreDirectory, fileName));
  const declaration = source.match(/export const\s+\w+Definitions\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) throw new Error(`Could not locate definitions array in ${fileName}`);
  const start = source.indexOf("[", declaration.index);
  const end = findMatchingBracket(source, start, "[", "]");
  return extractTopLevelObjects(source.slice(start + 1, end)).map((objectSource) => ({
    id: stringField(objectSource, "id"), title: stringField(objectSource, "title"), originalTitle: stringField(objectSource, "originalTitle", false) ?? stringField(objectSource, "title"), aliases: stringArrayField(objectSource, "aliases"), year: numberField(objectSource, "year"), origin: fileName,
  }));
}
function scenarioTitles(item) { return [item.title, item.originalTitle].filter(Boolean).map(normalize); }
function matchesDefinition(scenario, definition) {
  if (scenario.id === definition.id) return true;
  if (scenario.year !== definition.year) return false;
  const accepted = new Set([definition.title, definition.originalTitle, ...definition.aliases].filter(Boolean).map(normalize));
  return scenarioTitles(scenario).some((title) => accepted.has(title));
}
function buildAtlas() {
  const seed = JSON.parse(readText(seedPath));
  const scenarios = seed.scenarios.map((s) => ({ id: s.id, title: s.film.title, originalTitle: s.film.original_title, year: s.film.year, origin: "film_scenarios_seed.json" }));
  const expansionStats = [];
  for (const fileName of expansionFiles) {
    let appended = 0, matchedExisting = 0;
    const definitions = parseExpansion(fileName);
    for (const definition of definitions) {
      if (scenarios.some((scenario) => matchesDefinition(scenario, definition))) { matchedExisting += 1; continue; }
      scenarios.push(definition); appended += 1;
    }
    expansionStats.push({ fileName, definitions: definitions.length, appended, matchedExisting });
  }
  return { scenarios, expansionStats };
}
function buildVerifiedScenarioIds() {
  const ids = new Set();
  for (const fileName of readdirSync(dataDirectory)) {
    if (!fileName.startsWith("scenarioProductionVerification") || !fileName.endsWith(".ts")) continue;
    const source = readText(path.join(dataDirectory, fileName));
    for (const match of source.matchAll(/scenarioId\s*:\s*"([^"]+)"/g)) ids.add(match[1]);
  }
  return ids;
}
function matchesCandidate(scenario, candidate) {
  if (scenario.year !== candidate.year) return false;
  const accepted = [candidate.title, candidate.originalTitle, ...(candidate.aliases ?? [])].map(normalize);
  return scenarioTitles(scenario).some((title) => title && accepted.includes(title));
}

const atlas = buildAtlas();
if (atlas.scenarios.length !== EXPECTED_ATLAS_COUNT) throw new Error(`Chapter 16 audit expected ${EXPECTED_ATLAS_COUNT} Atlas scenarios, found ${atlas.scenarios.length}`);
const verifiedIds = buildVerifiedScenarioIds();
const resolvedCandidates = candidates.map((candidate) => {
  const matches = atlas.scenarios.filter((scenario) => matchesCandidate(scenario, candidate));
  if (matches.length > 1) throw new Error(`${candidate.title}: expected at most one Atlas match, found ${matches.length}`);
  const match = matches[0] ?? null;
  const productionVerified = Boolean(match && verifiedIds.has(match.id));
  if (candidate.decisionIfMissing === "EXISTING_REQUIRED" && (!match || !productionVerified)) throw new Error(`${candidate.title}: required verified Production Case is missing`);
  return { ...candidate, decision: match && productionVerified ? "USE_EXISTING" : candidate.decisionIfMissing, scenarioId: match?.id ?? null, matches: matches.length, productionVerified, origin: match?.origin ?? null };
});
const byDecision = { USE_EXISTING: [], P0: [], P1: [], P2: [], EXISTING_REQUIRED: [] };
for (const candidate of resolvedCandidates) byDecision[candidate.decision].push(candidate.title);

const boundaryNotes = [
  "Chapter 16 is organized as 1980–1989 and follows Chapter 15's explicit handoff into franchise consolidation, home video, intensified conglomeration and a changed independent/festival ecology.",
  "Hollywood blockbuster and franchise systems are one axis, not the chapter's synonym. British broadcast finance, American independent production, socialist and post-dictatorship political cinema, African co-production and distinct East Asian industries retain separate institutions and genealogies.",
  "Home video and cable are circulation and economic systems, not visual styles. A VHS, laserdisc, television or restored master never substitutes for original production evidence.",
  "The chapter ends in 1989 as specialty distribution, Sundance-era American independent expansion, New Black Cinema, East Asian festival recognition and changing geopolitical conditions hand into the 1990s.",
];
const safeguards = [
  "Franchise is not a synonym for sequel or hit. Rights ownership, production partners, repeatable characters/worlds, merchandising, release strategy and follow-up infrastructure require title-specific evidence.",
  "High concept is not a quality judgment and is never inferred from box office alone.",
  "Home video, cable and alternate cuts are downstream circulation layers unless original production documents show they affected manufacture.",
  "Effects history must preserve vendors, craftspeople, practical/optical boundaries and sound labor rather than becoming a director-only technology story.",
  "Independent does not mean microbudget, anti-studio or festival film. Financing, ownership, distribution and labor structures remain title-specific.",
  "Channel 4-backed cinema is not automatically made-for-television; commissioning, theatrical windows and production formats require film-specific evidence.",
  "Mainland China, Hong Kong and Taiwan are never flattened into one national-new-wave story.",
  "African, Latin American and South Asian films are not diversity supplements to Euro-American cinema; their own institutions, languages, finance and circulation histories are causal.",
  "Festival prizes and restoration are downstream recognition/preservation layers and never substitute for original production evidence.",
  "No generic 1980s look is allowed. Film stocks, lenses, diffusion, neon, Steadicam, zooms, video texture, Dolby and effects practices require title-specific sources.",
];

const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-20",
  chapter: {
    number: 16,
    id: "franchise-video-global-new-cinemas",
    title: "Franchise consolidation, video and global new cinemas",
    period: "1980–1989",
    scope: "Cinema across the 1980s as studio franchises and ancillary markets expand while broadcast-backed, independent, socialist, post-dictatorship, African and East Asian production systems create distinct alternatives and overlaps.",
    thesis: "The 1980s cannot be explained as blockbuster excess followed by an indie correction. Franchise coordination, conglomerate finance, home video and cable, effects and sound specialization, public/broadcast funding, regional independent production, political transition and several distinct global new-cinema formations reorganized who could make films, how they circulated and which versions later became canonical.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.scenarios.length, expansionOrder: atlas.expansionStats },
  verificationIndex: { literalVerifiedScenarioIds: verifiedIds.size },
  candidates: resolvedCandidates,
  byDecision,
  recommendedNewProductionCases: resolvedCandidates.filter((item) => item.decision === "P0" || item.decision === "P1").map((item) => item.title),
  historicalObjects,
  researchSources,
  boundaryNotes,
  safeguards,
};

const outputPath = process.argv.find((arg) => arg.startsWith("--write="))?.slice("--write=".length);
if (outputPath) {
  const absolute = path.resolve(root, outputPath);
  mkdirSync(path.dirname(absolute), { recursive: true });
  writeFileSync(absolute, `${JSON.stringify(report, null, 2)}\n`);
}
console.log(JSON.stringify(report, null, 2));
