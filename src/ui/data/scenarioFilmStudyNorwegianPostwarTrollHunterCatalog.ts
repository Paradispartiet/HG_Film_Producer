import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { deDodesTjernFilmHistoryProfile } from "./scenarioFilmStudyNorwegianPostwarDeDodesTjern";
import { fjolsTilFjellsFilmHistoryProfile } from "./scenarioFilmStudyNorwegianPostwarFjolsTilFjells";
import { insomniaFilmHistoryProfile } from "./scenarioFilmStudyNorwegianPostwarInsomnia";

export const trollHunterFilmHistoryProfile = {
  scenarioId: "scenario_troll_hunter_2010",
  period: "Early-2010s Norwegian found-footage genre cinema joining folklore, bureaucracy and digital creature effects",
  traditions: ["Found-footage mockumentary", "Norwegian folklore cinema", "Independent digital creature feature"],
  before: "Found-footage horror had established low-cost restricted viewpoint, while Norwegian film history supplied mountain folklore, rural comedy and landscape-based suspense without yet combining them in a modern government-conspiracy creature film.",
  moment: "André Øvredal rewrites Norwegian troll lore as a student documentary about wildlife management and state secrecy. Real western-Norway roads, plateaus, forests, power lines and weather remain visible around improvised deadpan performances; the camera can flee, miss or turn away when scale exceeds the budget; and Storm Studios integrates expressive digital trolls into otherwise practical documentary space. Hallvard Bræin's mobile image, Per-Erik Eriksen's evidence-like edit and direct-address bureaucratic explanation make production economy, realism and absurdity inseparable.",
  after: "The film's international cult circulation demonstrated that Norwegian landscape, folklore and public-sector satire could support a globally legible creature feature without abandoning local language, dry comedy or modest national production scale.",
  historyQuestion: "Which production system explains how Troll Hunter makes giant digital creatures believable through found footage, real Norwegian geography, folklore rules and deadpan bureaucracy?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The film modernizes threatening nineteenth-century troll imagery and familiar Norwegian folklore inside a contemporary landscape of roads, farms, power grids and public administration." },
    { area: "movement_and_tradition", status: "source_verified", note: "Øvredal combines found-footage horror, mockumentary comedy, national folklore and creature-feature spectacle rather than treating the trolls as fantasy-world decoration." },
    { area: "industry_and_production_context", status: "source_verified", note: "The Filmkameratene production used a modest roughly 3.5-million-dollar scale, national support, western-Norway locations and approximately one million dollars of creature effects." },
    { area: "reception_and_legacy", status: "source_verified", note: "Regional film records and international filmmaker coverage document its cult afterlife and its role in exporting a specifically Norwegian genre system." },
    { area: "screenplay", status: "source_verified", note: "Multiple rewrites brought together troll rules, bear-cover stories, veterinary procedure, Christian-blood mythology and a producer-suggested government conspiracy." },
    { area: "directing", status: "source_verified", note: "Øvredal treats every element except the trolls as practical reality and uses serious direct address, incomplete views and location discoveries to sustain dry absurdity." },
    { area: "performance", status: "source_verified", note: "Otto Jespersen and the student ensemble play impossible material with documentary seriousness, fatigue and improvisational understatement rather than conventional monster-movie display." },
    { area: "production_design", status: "source_verified", note: "UV rigs, vehicles, troll fences, maps, bait, carcass cover-ups and bureaucratic equipment make folklore operate as an underfunded wildlife-management system." },
    { area: "costume_makeup", status: "mapped", note: "Weatherproof field clothing and practical grime anchor the documentary crew and hunter, while dedicated costume and makeup sourcing remains limited." },
    { area: "cinematography", status: "source_verified", note: "Hallvard Bræin's handheld night pursuit, documentary reframing and landscape observation let restricted visibility become both a realism device and a production solution." },
    { area: "lighting", status: "source_verified", note: "Vehicle beams, headlamps, UV weapons, available weather and plausible documentary light sources motivate revelation and concealment across remote terrain." },
    { area: "camera_format", status: "source_verified", note: "The digital found-footage system permits long mobile recording, abrupt exposure shifts, damaged evidence and rapid integration with the visual-effects pipeline." },
    { area: "editing", status: "source_verified", note: "Per-Erik Eriksen shapes footage as recovered evidence, balancing interviews, travel procedure, partial attacks and escalating disclosure without abandoning the student-camera premise." },
    { area: "sound_design", status: "source_verified", note: "Wind, engines, distant movement, animal noise, radio procedure and troll vocal scale extend threats beyond the unstable frame and preserve documentary plausibility." },
    { area: "music", status: "not_central", note: "Johan Husvik is credited, but the defining production system relies more strongly on practical ambience, direct address, creature sound and evidence-like footage than on score-led narration." },
    { area: "effects_animation", status: "source_verified", note: "Storm Studios modeled, groomed, animated, lit and composited several troll species so their weight, hair, movement and environmental contact could survive inside handheld real-location images." },
    { area: "documentary_method", status: "source_verified", note: "The mockumentary uses interviews, student reporting, observational travel, imperfect access, direct-to-camera testimony and apparent recovered footage as its central fiction-making method." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  deDodesTjernFilmHistoryProfile,
  insomniaFilmHistoryProfile,
  fjolsTilFjellsFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTrollHunterFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === trollHunterFilmHistoryProfile.scenarioId ? trollHunterFilmHistoryProfile : undefined;
}

export function getTrollHunterFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === trollHunterFilmHistoryProfile.scenarioId ? donors : undefined;
}
