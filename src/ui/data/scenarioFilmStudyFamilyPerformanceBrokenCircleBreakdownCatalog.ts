import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { theStraightStoryFilmHistoryProfile } from "./scenarioFilmStudyAmericanRegionalStraightStory";
import { dancerInTheDarkFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceDancerDark";
import { manchesterByTheSeaFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceManchesterByTheSea";
import { scenesFromAMarriageFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceScenesMarriage";
import { theSonsRoomFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSonsRoom";

export const brokenCircleBreakdownFilmHistoryProfile = {
  scenarioId: "scenario_the_broken_circle_breakdown_2012",
  period: "Early-2010s Belgian nonlinear music melodrama adapting a bluegrass theatre performance into intimate family cinema",
  traditions: ["Belgian theatre-to-film adaptation", "Nonlinear grief melodrama", "Bluegrass performance film"],
  before: "Family-loss melodramas often followed illness and bereavement chronologically, while music films usually separated stage performance from domestic realism or used songs as retrospective commentary.",
  moment: "Felix van Groeningen and Carl Joos adapt Johan Heldenbergh and Mieke Dobbels's theatre work by breaking Didier and Elise's relationship into emotional rather than chronological order. Ruben Impens's intimate widescreen photography, Kurt Rigolle's farm and performance spaces, Ann Lauwerys's costume, Nico Leunen's temporal montage, bluegrass performances arranged by Bjorn Eriksson and a detailed practical sound field make love, parenthood, illness, belief and musical collaboration parts of the same family system.",
  after: "The film's European Film Award for Veerle Baetens, international festival success and Academy Award nomination for foreign-language film established it as a major Belgian export and a durable example of nonlinear editing that intensifies rather than withholds emotional knowledge.",
  historyQuestion: "Which production system explains a family melodrama where bluegrass performance, a tattooed farm household, childhood illness, arguments over belief and scenes from different years are edited by emotional association instead of chronology?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "European Film Academy, Flanders Image and BFI place the Belgian-Dutch production in the early 2010s and document its adaptation from a Flemish theatre work built around bluegrass performance." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film combines theatre adaptation, intimate European melodrama, nonlinear memory structure, family grief drama and American bluegrass as a performed social practice." },
    { area: "industry_and_production_context", status: "source_verified", note: "Flanders Image and EFA record Menuet, Topkapi and principal producer Dirk Impens with the film's writing, camera, editing, design, costume, sound and music departments." },
    { area: "reception_and_legacy", status: "source_verified", note: "The film won the European Actress award for Veerle Baetens, received four European Film Award nominations and was nominated for the Academy Award for foreign-language film." },
    { area: "screenplay", status: "source_verified", note: "Van Groeningen and Carl Joos repeatedly reworked the stage material into a fragmented screenplay that moves among attraction, parenthood, illness, loss and aftermath according to emotional pressure." },
    { area: "directing", status: "source_verified", note: "Van Groeningen keeps music performance physically credible and domestic scenes immediate, allowing changes in time, belief and grief to emerge through actor behavior rather than explanatory framing." },
    { area: "performance", status: "source_verified", note: "Veerle Baetens and Johan Heldenbergh perform both intimate family behavior and live bluegrass musicianship, making their changing ability to sing together a measure of the relationship." },
    { area: "production_design", status: "source_verified", note: "Kurt Rigolle's credited design joins the farm, tattoo studio, hospital, stages and domestic interiors into a material history of the couple rather than a sequence of isolated backdrops." },
    { area: "costume_makeup", status: "source_verified", note: "Ann Lauwerys's credited costume and Elise's tattooed appearance distinguish periods, performance identities and bodily change while remaining continuous with the characters' working lives." },
    { area: "cinematography", status: "source_verified", note: "Ruben Impens's intimate 2.35 image moves between close handheld observation, natural rural space, controlled hospital interiors and stage performance without turning grief into polished spectacle." },
    { area: "lighting", status: "source_verified", note: "Warm farm and performance light, flatter hospital illumination and shifting seasonal exteriors help separate emotional periods while the edit deliberately disrupts chronological order." },
    { area: "camera_format", status: "mapped", note: "BFI records the 2.35:1 colour theatrical presentation, but the inspected sources do not establish the complete original camera, lens and recording package." },
    { area: "editing", status: "source_verified", note: "Nico Leunen's credited edit places beginnings beside endings, joy beside later loss and repeated musical passages across different periods, producing cumulative emotional knowledge rather than a puzzle reveal." },
    { area: "sound_design", status: "source_verified", note: "Jan Deca's credited sound balances dialogue, instruments, breath, hospital machinery, rural ambience, crowds and abrupt quiet so music remains embodied labor rather than decorative soundtrack." },
    { area: "music", status: "source_verified", note: "Bjorn Eriksson's bluegrass arrangements and the ensemble's performed songs supply courtship, community, argument, memorial ritual and a shared language that can survive even when the couple's beliefs divide." },
    { area: "effects_animation", status: "not_central", note: "The film's transformations are carried by performance, time structure, photography, music and sound rather than effects spectacle or animation." },
    { area: "documentary_method", status: "mapped", note: "Live musical competence, naturalistic locations and intimate camera proximity lend documentary immediacy, but the film remains a carefully scripted and nonlinearly constructed fiction." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  scenesFromAMarriageFilmHistoryProfile,
  dancerInTheDarkFilmHistoryProfile,
  theSonsRoomFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const manchesterByTheSeaDonors = [
  theSonsRoomFilmHistoryProfile,
  brokenCircleBreakdownFilmHistoryProfile,
  theStraightStoryFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getBrokenCircleBreakdownFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  if (scenarioId === manchesterByTheSeaFilmHistoryProfile.scenarioId) return manchesterByTheSeaFilmHistoryProfile;
  return scenarioId === brokenCircleBreakdownFilmHistoryProfile.scenarioId ? brokenCircleBreakdownFilmHistoryProfile : undefined;
}

export function getBrokenCircleBreakdownFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === manchesterByTheSeaFilmHistoryProfile.scenarioId) return manchesterByTheSeaDonors;
  return profile.scenarioId === brokenCircleBreakdownFilmHistoryProfile.scenarioId ? donors : undefined;
}
