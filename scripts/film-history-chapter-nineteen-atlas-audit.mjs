import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT = 539;
const BASE_EXPECTED_ATLAS_COUNT = 590;
const EXPECTED_ATLAS_COUNT = 611;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.join(scriptDir, "film-history-chapter-nineteen-atlas-audit-base.mjs");
const insertionMarker = "const candidates = [";
const triangleNeedles = ['"title": "Triangle of Sadness"', 'title: "Triangle of Sadness"'];
const drommerNeedles = ['"title": "Drømmer"', 'title: "Drømmer"'];
const happeningNeedles = ['"title": "Happening"', 'title: "Happening"'];
const allBeautyNeedles = ['"title": "All the Beauty and the Bloodshed"', 'title: "All the Beauty and the Bloodshed"'];
const roomNextDoorNeedles = ['"title": "The Room Next Door"', 'title: "The Room Next Door"'];
const thereIsNoEvilNeedles = ['"title": "There Is No Evil"', 'title: "There Is No Evil"'];
const badLuckNeedles = ['"title": "Bad Luck Banging or Loony Porn"', 'title: "Bad Luck Banging or Loony Porn"'];
const alcarrasNeedles = ['"title": "Alcarràs"', 'title: "Alcarràs"'];
const adamantNeedles = ['"title": "On the Adamant"', 'title: "On the Adamant"', '"originalTitle": "Sur l\'Adamant"'];
const fatherMotherNeedles = ['"title": "Father Mother Sister Brother"', 'title: "Father Mother Sister Brother"'];
const aHeroNeedles = ['"title": "A Hero"', 'title: "A Hero"', '"originalTitle": "Ghahreman"', 'scenario_a_hero_2021'];
const compartmentNo6Needles = ['"title": "Compartment No. 6"', 'title: "Compartment No. 6"', '"originalTitle": "Hytti nro 6"', 'scenario_compartment_no_6_2021'];
const annetteNeedles = ['"title": "Annette"', 'title: "Annette"', 'scenario_annette_2021'];
const ahedsKneeNeedles = ['"title": "Ahed\'s Knee"', 'title: "Ahed\'s Knee"', '"originalTitle": "Ha’berech"', 'scenario_aheds_knee_2021'];
const nitramNeedles = ['"title": "Nitram"', 'title: "Nitram"', 'scenario_nitram_2021'];
const closeNeedles = ['"title": "Close"', 'title: "Close"', 'scenario_close_2022'];
const starsAtNoonNeedles = ['"title": "Stars at Noon"', 'title: "Stars at Noon"', 'scenario_stars_at_noon_2022'];
const boyFromHeavenNeedles = ['"title": "Boy from Heaven"', 'title: "Boy from Heaven"', '"originalTitle": "Walad Min Al Janna"', 'Cairo Conspiracy', 'scenario_boy_from_heaven_2022'];
const theEightMountainsNeedles = ['"title": "The Eight Mountains"', 'title: "The Eight Mountains"', '"originalTitle": "Le otto montagne"', 'Les Huit Montagnes', 'scenario_the_eight_mountains_2022'];
const toriAndLokitaNeedles = ['"title": "Tori and Lokita"', 'title: "Tori and Lokita"', '"originalTitle": "Tori et Lokita"', 'Tori & Lokita', 'scenario_tori_and_lokita_2022'];
const holySpiderNeedles = ['"title": "Holy Spider"', 'title: "Holy Spider"', 'Les Nuits de Mashhad', 'Ankabut-e moqaddas', 'scenario_holy_spider_2022'];
const brokerNeedles = ['"title": "Broker"', 'title: "Broker"', 'Les Bonnes Étoiles', 'Beurokeo', '브로커', 'scenario_broker_2022'];
const thePotAuFeuNeedles = ['"title": "The Pot-au-Feu"', 'title: "The Pot-au-Feu"', 'La Passion de Dodin Bouffant', 'The Taste of Things', 'scenario_the_pot_au_feu_2023'];
const fallenLeavesNeedles = ['"title": "Fallen Leaves"', 'title: "Fallen Leaves"', 'Kuolleet lehdet', 'Les Feuilles mortes', 'scenario_fallen_leaves_2023'];
const monsterNeedles = ['"title": "Monster"', 'title: "Monster"', '"originalTitle": "Kaibutsu"', 'Monster (Kaibutsu)', 'scenario_monster_kore_eda_2023'];
const aboutDryGrassesNeedles = ['"title": "About Dry Grasses"', 'title: "About Dry Grasses"', '"originalTitle": "Kuru Otlar Üstüne"', 'Kuru Otlar Ustune', 'scenario_about_dry_grasses_2023'];
const perfectDaysNeedles = ['"title": "Perfect Days"', 'title: "Perfect Days"', 'scenario_perfect_days_2023', 'scenario_perfect_days_wenders_2023'];
const emiliaPerezNeedles = ['"title": "Emilia Pérez"', 'title: "Emilia Pérez"', 'Emilia Perez', 'scenario_emilia_perez_2024', 'scenario_emilia_perez_audiard_2024'];
const grandTourNeedles = ['"title": "Grand Tour"', 'title: "Grand Tour"', 'Grand Tour (2024)', 'scenario_grand_tour_2024', 'scenario_grand_tour_miguel_gomes_2024'];
const kindsOfKindnessNeedles = ['"title": "Kinds of Kindness"', 'title: "Kinds of Kindness"', 'Kinds of Kindness (2024)', 'scenario_kinds_of_kindness_2024', 'scenario_kinds_of_kindness_lanthimos_2024'];

const triangleCandidate = `
  {
    "title": "Triangle of Sadness",
    "originalTitle": "Triangle of Sadness",
    "year": 2022,
    "aliases": ["Sans filtre"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 Palme d'Or reconciliation: reuse the existing verified production case rather than materializing a duplicate Atlas scenario."
  },`;

const drommerCandidate = `
  {
    "title": "Drømmer",
    "originalTitle": "Drømmer",
    "year": 2024,
    "aliases": ["Dreams", "Dreams (Sex Love)", "Dreams (Sex, Love)"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2025 Golden Bear corrective case: preserve 2024 as film year, materialize the source-backed Norwegian Production Case, and keep award year separate from production chronology."
  },`;

const happeningCandidate = `
  {
    "title": "Happening",
    "originalTitle": "L'Événement",
    "year": 2021,
    "aliases": ["L'Evenement", "L’Evénement"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Venice 2021 Golden Lion reconciliation: reuse the existing canonical scenario_happening_2021 and its Production Verification, while strengthening the established Film Study/PV with direct ARRI, CNC and Île-de-France evidence instead of materializing a duplicate Atlas identity."
  },`;

const allBeautyCandidate = `
  {
    "title": "All the Beauty and the Bloodshed",
    "originalTitle": "All the Beauty and the Bloodshed",
    "year": 2022,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Venice 2022 Golden Lion reconciliation: reuse the existing canonical scenario_all_the_beauty_and_the_bloodshed_2022 and its single Production Verification identity, while adding the source-backed Film Study and strengthening direct production evidence instead of materializing a duplicate Atlas case."
  },`;

const roomNextDoorCandidate = `
  {
    "title": "The Room Next Door",
    "originalTitle": "The Room Next Door",
    "year": 2024,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Venice 2024 Golden Lion reconciliation: reuse the existing canonical scenario_the_room_next_door_2024, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."
  },`;

const thereIsNoEvilCandidate = `
  {
    "title": "There Is No Evil",
    "originalTitle": "Sheytan vojud nadarad",
    "year": 2020,
    "aliases": ["There is no Evil"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2020 Golden Bear reconciliation: reuse the existing canonical scenario_there_is_no_evil_2020, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."
  },`;

const badLuckCandidate = `
  {
    "title": "Bad Luck Banging or Loony Porn",
    "originalTitle": "Babardeală cu bucluc sau porno balamuc",
    "year": 2021,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2021 Golden Bear reconciliation: reuse the existing canonical scenario_bad_luck_banging_or_loony_porn_2021, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."
  },`;

const alcarrasCandidate = `
  {
    "title": "Alcarràs",
    "originalTitle": "Alcarràs",
    "year": 2022,
    "aliases": ["Alcarras"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2022 Golden Bear reconciliation: reuse the existing canonical scenario_alcarras_2022, its verified Production Case and its source-backed 17-area Film Study instead of materializing a duplicate Atlas identity."
  },`;

const adamantCandidate = `
  {
    "title": "On the Adamant",
    "originalTitle": "Sur l'Adamant",
    "year": 2023,
    "aliases": ["Sur l’Adamant"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2023 Golden Bear source-first case: materialize a new documentary Atlas/PV identity, preserve Unifrance productionYear 2022 separately from Chapter 19 filmYear 2023, and lock the documented small-crew observational, editing and sound-production boundaries without inventing unsupported technical detail."
  },`;

const fatherMotherCandidate = `
  {
    "title": "Father Mother Sister Brother",
    "originalTitle": "Father Mother Sister Brother",
    "year": 2025,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Venice 2025 Golden Lion source-first case: materialize the final correctionOrder-10 top-prize obligation as one new Atlas/PV identity and lock its three-country triptych production, approximate ten-day-per-section schedule, split cinematography/design units, 1.85 DCP/5.1 delivery and transnational production boundaries without inventing unsupported technical or financial detail."
  },`;


const aHeroCandidate = `
  {
    "title": "A Hero",
    "originalTitle": "Ghahreman",
    "year": 2021,
    "aliases": ["GHAHREMAN", "Un héros", "Un Heros"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2021 Grand Prix source-first case: materialize one new A Hero/Ghahreman Atlas/PV identity after strict reuse reconciliation, and lock the documented Shiraz realist-production context, ten-month character-backstory rehearsal, ALEXA Mini LF/Signature Prime photography, 2K 2.39:1/5.1 delivery and Iran/France production network without inventing unsupported technical, financial or post detail."
  },`;


const compartmentNo6Candidate = `
  {
    "title": "Compartment No. 6",
    "originalTitle": "Hytti nro 6",
    "year": 2021,
    "aliases": ["Hytti Nro 6", "Hytti Nro. 6", "Hytti No 6", "Compartment No.6", "Compartment No 6"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2021 Grand Prix source-first case: materialize one new Compartment No. 6/Hytti nro 6 Atlas/PV identity after strict reuse reconciliation, lock the documented 28-day Russian production, 2-perf ARRICAM LT/Zeiss Super Speed/VISION3 500T photochemical workflow, train simulation, hidden-mic constraint and explicit runtime/aspect-ratio source discrepancies without inventing unsupported finance or post detail."
  },`;


const annetteCandidate = `
  {
    "title": "Annette",
    "originalTitle": "Annette",
    "year": 2021,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2021 Best Director source-first case: materialize one new Annette Atlas/PV identity after strict reuse reconciliation; preserve film/award year 2021 separately from Cannes productionYear 2020; lock the sourced 16-week transnational production, live-singing method, Sony VENICE/X-OCN ST camera system and practical Charlier/Collinet puppet workflow without inventing unsupported finance, sound-routing or post detail."
  },`;


const ahedsKneeCandidate = `
  {
    "title": "Ahed's Knee",
    "originalTitle": "Ha’berech",
    "year": 2021,
    "aliases": ["Ha'berech", "Le Genou d'Ahed"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2021 joint Jury Prize source-first case: materialize one new Ahed's Knee/Ha’berech Atlas/PV identity after strict reuse reconciliation; lock the sourced 18-day Arava shoot, schedule-driven risk, camera-as-actor collaboration with Shai Goldman and bounded 2.39:1 exhibition metadata without inventing unsupported camera, lighting, finance, sound, VFX, grade or mastering detail."
  },`;

const nitramCandidate = `
  {
    "title": "Nitram",
    "originalTitle": "Nitram",
    "year": 2021,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2021 Best Actor source-first case: materialize one new Nitram Atlas/PV identity after strict reuse reconciliation; preserve productionYear 2020 separately from film/award year 2021; lock the sourced 24-day Geelong lockdown production, Alexa Mini S35/Panavision Ultra Speeds workflow and explicit 1.55:1-versus-1.43:1 source discrepancy without inventing unsupported finance, camera, sound, VFX or mastering detail."
  },`;

const closeCandidate = `
  {
    "title": "Close",
    "originalTitle": "Close",
    "year": 2022,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 joint Grand Prix reconciliation: reuse the existing canonical scenario_close_2022, its source-backed 17-area Film Study and verified Production Case from the Italy/France/Germany/Benelux expansion instead of materializing a duplicate Atlas/PV identity."
  },`;

const starsAtNoonCandidate = `
  {
    "title": "Stars at Noon",
    "originalTitle": "Stars at Noon",
    "year": 2022,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 joint Grand Prix source-first case: materialize one new Stars at Noon Atlas/PV identity after strict tree-wide reuse reconciliation; lock the sourced Panama-for-Nicaragua production substitution, mixed Panamanian/French production context, ALEXA Mini plus anamorphic TechnoCooke evidence, 2.39/5.1 delivery and explicit 135/137/138-minute catalogue discrepancy without inventing unsupported schedule, finance or post-production detail."
  },`;

const boyFromHeavenCandidate = `
  {
    "title": "Boy from Heaven",
    "originalTitle": "Walad Min Al Janna",
    "year": 2022,
    "aliases": ["Cairo Conspiracy", "Walad min al-Janna", "La Conspiration du Caire"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 Best Screenplay source-first case: materialize one new Boy from Heaven/Walad Min Al Janna Atlas/PV identity after strict alias-aware reuse reconciliation; preserve Cannes productionYear 2022 separately from 2021 principal photography; lock Covid-delay/Istanbul-Süleymaniye production, €6.5m transnational budget/network, ALEXA LF/4K ARRIRAW/single Scorpio 40mm scope cinematography and runtime-version boundaries without inventing unsupported schedule, equipment, finance or post detail."
  },`;

const theEightMountainsCandidate = `
  {
    "title": "The Eight Mountains",
    "originalTitle": "Le otto montagne",
    "year": 2022,
    "aliases": ["Le Otto Montagne", "Les Huit Montagnes"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 joint Jury Prize source-first case: materialize one new The Eight Mountains/Le otto montagne Atlas/PV identity after strict alias-aware reuse reconciliation; preserve Cannes productionYear 2021 separately from film/award year 2022; lock the seasonal Alps/Turin/Nepal location production, no-studio hut strategy, 4:3 spherical ALEXA Mini LF/Zeiss Supreme Prime/Optimo 36-435 cinematography, natural-light method and Cannes-deadline DI boundaries without inventing unsupported budget, data, sound or mastering detail."
  },`;

const toriAndLokitaCandidate = `
  {
    "title": "Tori and Lokita",
    "originalTitle": "Tori et Lokita",
    "year": 2022,
    "aliases": ["Tori & Lokita"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 75th Anniversary Prize source-first case: materialize one new Tori and Lokita/Tori et Lokita Atlas/PV identity after strict alias-aware reuse reconciliation; preserve Cannes productionYear 2022 separately from 2021 principal photography; lock the Liège/Wallonia 11-week location shoot, five-week rehearsal method, actor-height handheld RED Komodo/40mm system, RED Monstro low-light night configuration, sparse naturalistic lighting and diegetic-sound boundaries without inventing unsupported data, sound-hardware, finance or post detail."
  },`;

const holySpiderCandidate = `
  {
    "title": "Holy Spider",
    "originalTitle": "Holy Spider",
    "year": 2022,
    "aliases": ["Les Nuits de Mashhad", "Ankabut-e moqaddas", "عنکبوت مقدس"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 Best Actress source-first case: materialize one new Holy Spider Atlas/PV identity after strict English/French/Persian alias-aware reuse reconciliation; preserve Cannes productionYear 2022 separately from the documented 35-day Jordan principal photography in 2021; lock the failed Iran/Turkey paths, Amman-for-Mashhad production, ALEXA Mini LF/Signature Prime evidence, 4K/2.39:1 catalogue format and explicit 115/117/118-minute runtime discrepancy without inventing unsupported budget, camera, lighting, sound, VFX or post detail."
  },`;

const brokerCandidate = `
  {
    "title": "Broker",
    "originalTitle": "Broker",
    "year": 2022,
    "aliases": ["Les Bonnes Étoiles", "Beurokeo", "브로커"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 Best Actor source-first case: materialize one new Broker Atlas/PV identity after strict English/French/romanized-Korean/Korean-script reuse reconciliation; preserve Cannes productionYear 2022 separately from the exact April 14-June 22, 2021 production window; lock 98-percent Korean location shooting, Busan/east-coast/Wolmido road-film geography, natural-light/weather method, Kore-eda's write-edit-shoot parallel workflow and bounded Ferris-wheel single-camera constraint without inventing unsupported camera, lens, data, finance, VFX or mastering detail."
  },`;

const thePotAuFeuCandidate = `
  {
    "title": "The Pot-au-Feu",
    "originalTitle": "La Passion de Dodin Bouffant",
    "year": 2023,
    "aliases": ["The Taste of Things", "La passion de Dodin Bouffant"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Best Director source-first case: materialize one new The Pot-au-Feu/La Passion de Dodin Bouffant/The Taste of Things Atlas/PV identity after strict alias-aware structural reuse reconciliation; preserve Cannes productionYear 2023 separately from the March 31-May 18, 2022 Maine-et-Loire production; lock the Château de Raguin spatial system, real-food/Steadicam choreography, sole Sony Venice plus 35mm Summilux-C evidence, sourced lighting and material-sound method, and 134/135-minute runtime discrepancy without inventing unsupported data, VFX, finance or mastering detail."
  },`;

const fallenLeavesCandidate = `
  {
    "title": "Fallen Leaves",
    "originalTitle": "Kuolleet lehdet",
    "year": 2023,
    "aliases": ["Les Feuilles mortes", "Fallende Blätter"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Jury Prize source-first case: materialize one new Fallen Leaves/Kuolleet lehdet identity after strict English/Finnish/French alias-aware structural reuse reconciliation; preserve Cannes productionYear 2023 separately from documented second-half-August 2022 Helsinki/Kallio shooting; lock 35mm, ARRI Analog/Ultra Prime/ARRI Fresnel family evidence, one-take/minimal-rehearsal production method, 1.85:1 and Dolby 5.1 catalogue formats, and bounded SES public support without inventing exact camera body, stock/lab, sound hardware, VFX, budget shares or mastering lineage."
  },`;

const monsterCandidate = `
  {
    "title": "Monster",
    "originalTitle": "Kaibutsu",
    "year": 2023,
    "aliases": ["Monster (Kaibutsu)"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Best Screenplay reconciliation: reuse the existing canonical scenario_monster_kore_eda_2023, its source-backed 17-area Film Study and its verified Production Verification instead of materializing a duplicate Atlas or PV identity."
  },`;

const aboutDryGrassesCandidate = `
  {
    "title": "About Dry Grasses",
    "originalTitle": "Kuru Otlar Üstüne",
    "year": 2023,
    "aliases": ["Kuru Otlar Ustune"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Best Actress source-first case: materialize one new About Dry Grasses/Kuru Otlar Üstüne identity only after tree-wide reuse checks are negative; preserve 2023 production metadata separately from 2021 Eastern Anatolia photography; lock 4K Sony VENICE/Cooke Anamorphic SF 2X/24fps/Scope, pandemic-winter location production, full-script editorial reduction, credited sound/VFX/grade chains and explicit format provenance without inventing unsupported budget, equipment, VFX-census or mastering detail."
  },`;

const perfectDaysCandidate = `
  {
    "title": "Perfect Days",
    "originalTitle": "Perfect Days",
    "year": 2023,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2023 Best Actor source-first case: materialize one new Perfect Days identity only after seed/tree-wide reuse checks are negative; preserve the October 2022 sixteen-day Tokyo shoot separately from 2023 production metadata; lock the sourced shoulder-camera documentary-like fiction method, Sony VENICE/Canon K35 family evidence, 1.33 DCP/5.1 catalogue record and explicit 123/124/125-minute plus 1.33/1.85 provenance discrepancies without inventing unsupported camera-generation, finance, sound, VFX or mastering detail."
  },`;

const emiliaPerezCandidate = `
  {
    "title": "Emilia Pérez",
    "originalTitle": "Emilia Pérez",
    "year": 2024,
    "aliases": ["Emilia Perez"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2024 Jury Prize and ensemble Best Actress source-first case: materialize one new Emilia Pérez identity only after tree-wide reuse checks are negative; preserve Pathé 2023 and Cannes 2024 production-year provenance, lock the sourced 55-day Paris-studio/Mexico City split, Sony VENICE 1/2 full-frame 8K workflow, choreography-led camera, large Bry set/lighting system and approximately 500 effects shots without inventing unsupported finance, data, sound, DI or mastering detail."
  },`;

const grandTourCandidate = `
  {
    "title": "Grand Tour",
    "originalTitle": "Grand Tour",
    "year": 2024,
    "aliases": ["Grand Tour (2024)"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2024 Best Director source-first case: materialize one new Grand Tour identity only after tree-wide reuse checks are negative; preserve the 2020 and remotely directed 2022 Asian 16mm phases, the separate Lisbon/Rome black-and-white 16mm actor studios, incandescent-filament lighting and DCP/5.1 delivery without inventing unsupported camera, lens, stock, lab, budget, music, VFX or final-aspect-ratio detail."
  },`;

const kindsOfKindnessCandidate = `
  {
    "title": "Kinds of Kindness",
    "originalTitle": "Kinds of Kindness",
    "year": 2024,
    "aliases": ["Kinds of Kindness (2024)"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2024 Best Actor source-first case: materialize one new Kinds of Kindness identity only after tree-wide reuse checks are negative; preserve the New Orleans location-first triptych production, recurring ensemble, predominantly single-camera ARRICAM ST 35mm anamorphic method, bounded four-camera car-crash exception, VISION3/DOUBLE-X stock allocation, FotoKem 4K scan and Company3/Cinelab post chain, pre-picture piano/choir score development and the explicit Cannes 165/Searchlight 164-minute runtime discrepancy without inventing unsupported finance, exposure, sound-hardware, VFX, safety, underwater-camera, editorial or delivery detail."
  },`;

const baseSource = readFileSync(basePath, "utf8");
const requiredBaselineConstants = [
  `const CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT = ${CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT};`,
  `const EXPECTED_ATLAS_COUNT = ${BASE_EXPECTED_ATLAS_COUNT};`,
];
for (const baselineConstant of requiredBaselineConstants) {
  if (!baseSource.includes(baselineConstant)) throw new Error(`Chapter 19 base audit lost required baseline contract: ${baselineConstant}`);
}
if (triangleNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Triangle of Sadness; consolidate the wrapper deliberately before continuing.");
if (drommerNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Drømmer; consolidate the wrapper deliberately before continuing.");
if (happeningNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Happening; consolidate the wrapper deliberately before continuing.");
if (allBeautyNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains All the Beauty and the Bloodshed; consolidate the wrapper deliberately before continuing.");
if (roomNextDoorNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Room Next Door; consolidate the wrapper deliberately before continuing.");
if (thereIsNoEvilNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains There Is No Evil; consolidate the wrapper deliberately before continuing.");
if (badLuckNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Bad Luck Banging or Loony Porn; consolidate the wrapper deliberately before continuing.");
if (alcarrasNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Alcarràs; consolidate the wrapper deliberately before continuing.");
if (adamantNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains On the Adamant; consolidate the wrapper deliberately before continuing.");
if (fatherMotherNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Father Mother Sister Brother; consolidate the wrapper deliberately before continuing.");
if (aHeroNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains A Hero/Ghahreman; consolidate the wrapper deliberately before continuing.");
if (compartmentNo6Needles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Compartment No. 6/Hytti nro 6; consolidate the wrapper deliberately before continuing.");
if (annetteNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Annette; consolidate the wrapper deliberately before continuing.");
if (ahedsKneeNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Ahed's Knee/Ha’berech; consolidate the wrapper deliberately before continuing.");
if (nitramNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Nitram; consolidate the wrapper deliberately before continuing.");
if (closeNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Close; consolidate the wrapper deliberately before continuing.");
if (starsAtNoonNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Stars at Noon; consolidate the wrapper deliberately before continuing.");
if (boyFromHeavenNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Boy from Heaven/Walad Min Al Janna/Cairo Conspiracy; consolidate the wrapper deliberately before continuing.");
if (theEightMountainsNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Eight Mountains/Le otto montagne; consolidate the wrapper deliberately before continuing.");
if (toriAndLokitaNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Tori and Lokita/Tori et Lokita; consolidate the wrapper deliberately before continuing.");
if (holySpiderNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Holy Spider/Les Nuits de Mashhad; consolidate the wrapper deliberately before continuing.");
if (brokerNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Broker/Les Bonnes Étoiles/Beurokeo; consolidate the wrapper deliberately before continuing.");
if (thePotAuFeuNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains The Pot-au-Feu/La Passion de Dodin Bouffant/The Taste of Things; consolidate the wrapper deliberately before continuing.");
if (fallenLeavesNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Fallen Leaves/Kuolleet lehdet; consolidate the wrapper deliberately before continuing.");
if (monsterNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Monster/Kaibutsu; consolidate the wrapper deliberately before continuing.");
if (aboutDryGrassesNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains About Dry Grasses/Kuru Otlar Üstüne; consolidate the wrapper deliberately before continuing.");
if (perfectDaysNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Perfect Days; consolidate the wrapper deliberately before continuing.");
if (emiliaPerezNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Emilia Pérez; consolidate the wrapper deliberately before continuing.");
if (grandTourNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Grand Tour; consolidate the wrapper deliberately before continuing.");
if (kindsOfKindnessNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Kinds of Kindness; consolidate the wrapper deliberately before continuing.");
if (!baseSource.includes(insertionMarker)) throw new Error("Chapter 19 candidate insertion marker is missing; refusing to run a partially reconciled audit.");

const reconciledSource = baseSource
  .replace(`const EXPECTED_ATLAS_COUNT = ${BASE_EXPECTED_ATLAS_COUNT};`, `const EXPECTED_ATLAS_COUNT = ${EXPECTED_ATLAS_COUNT};`)
  .replace('auditDate: "2026-08-28"', 'auditDate: "2026-09-07"')
  .replace(insertionMarker, `${insertionMarker}${triangleCandidate}${drommerCandidate}${happeningCandidate}${allBeautyCandidate}${roomNextDoorCandidate}${thereIsNoEvilCandidate}${badLuckCandidate}${alcarrasCandidate}${adamantCandidate}${fatherMotherCandidate}${aHeroCandidate}${compartmentNo6Candidate}${annetteCandidate}${ahedsKneeCandidate}${nitramCandidate}${closeCandidate}${starsAtNoonCandidate}${boyFromHeavenCandidate}${theEightMountainsCandidate}${toriAndLokitaCandidate}${holySpiderCandidate}${brokerCandidate}${thePotAuFeuCandidate}${fallenLeavesCandidate}${monsterCandidate}${aboutDryGrassesCandidate}${perfectDaysCandidate}${emiliaPerezCandidate}${grandTourCandidate}${kindsOfKindnessCandidate}`);
const temporaryAuditPath = path.join(scriptDir, `.film-history-chapter-nineteen-atlas-audit-reconciled-${process.pid}.mjs`);

try {
  writeFileSync(temporaryAuditPath, reconciledSource);
  const stdout = execFileSync(process.execPath, [temporaryAuditPath, ...process.argv.slice(2)], {
    cwd: process.cwd(), encoding: "utf8", maxBuffer: 32 * 1024 * 1024, stdio: ["ignore", "pipe", "inherit"],
  });
  process.stdout.write(stdout);
} finally {
  try { unlinkSync(temporaryAuditPath); } catch (error) { if (error?.code !== "ENOENT") throw error; }
}
