import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { scenesFromAMarriageFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceScenesMarriage";
import { theSonsRoomFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSonsRoom";
import { stillWalkingFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryStillWalking";

export const fortyFiveYearsFilmHistoryProfile = {
  scenarioId: "scenario_45_years_2015",
  period: "Mid-2010s British independent relationship cinema, late-life marriage chamber drama and 35 mm naturalism",
  traditions: ["British independent relationship drama", "Marital chamber cinema", "Performance-led domestic realism"],
  before: "Marital chamber films from Bergman onward had treated conversation, silence and shared rooms as sites of emotional power, while British independent cinema often divided middle-class relationships between sentimentality and social grit.",
  moment: "Andrew Haigh expands David Constantine's ten-page story by adding a five-day anniversary countdown, lowering the couple's ages and shifting the viewpoint from Geoff to Kate. BFI- and Film4-backed production, Charlotte Rampling and Tom Courtenay's unrehearsed two-person performance, Norfolk locations, Lol Crawley's 35 mm Panavision image, precise long-take blocking, attic slides, recurring sounds and script-selected songs make a buried pre-marital history alter the visible meaning of forty-five years together.",
  after: "The Berlin acting Silver Bears, BAFTA Outstanding British Film nomination and Charlotte Rampling's Oscar nomination established the film as a major contemporary model for late-life relationship drama built from restraint, duration, domestic space and an ending that refuses explanatory closure.",
  historyQuestion: "Which production system explains how 45 Years turns one letter, five ordinary days, a rural home, unrehearsed two-shots, 35 mm texture, repeated sounds and one final extended dance take into the collapse of a marriage's shared story?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "BFI records the film as a Film Fund-backed British independent drama that deliberately occupies a neglected space between sentimental prestige cinema and social grit while portraying older people as active subjects of love, choice and existential uncertainty." },
    { area: "movement_and_tradition", status: "source_verified", note: "Haigh and institutional criticism connect the film to relationship cinema, Bergmanesque chamber drama, naturalistic British independence and performance-led domestic observation rather than conventional late-life melodrama." },
    { area: "industry_and_production_context", status: "source_verified", note: "Film4, BFI and The Match Factory document The Bureau production, producer Tristan Goligher, BFI Film Fund and Film4 backing, a compact British independent scale and the principal craft departments." },
    { area: "reception_and_legacy", status: "source_verified", note: "Rampling and Courtenay received Berlin acting Silver Bears; BAFTA nominated the film for Outstanding British Film; the Academy nominated Rampling for leading actress, securing the film's international afterlife." },
    { area: "screenplay", status: "source_verified", note: "Haigh expanded Constantine's approximately ten-page story by adding the anniversary party as a countdown, lowering the characters' ages and shifting the point of view from the husband to Kate so each discovery changes her reading of the marriage." },
    { area: "directing", status: "source_verified", note: "Haigh describes exact blocking, long takes, day-by-day visual progression and a rule that the camera follows or favours Kate; the final party dance was planned as one extended take and filmed last after six weeks." },
    { area: "performance", status: "source_verified", note: "Rampling and Courtenay did not rehearse the film conventionally; routines, listening, shared frames and withheld reactions establish forty-five years of familiarity before small behavioural changes make the relationship unstable." },
    { area: "production_design", status: "source_verified", note: "Sarah Finlay's credited design and the documented Norfolk production organize the cottage, attic, slide projector, books, photographs and anniversary hall as a material archive whose familiar rooms gradually become evidence." },
    { area: "costume_makeup", status: "mapped", note: "Suzie Harman and Nicole Stafford are credited, and ordinary clothing preserves late-life domestic naturalism, but the inspected sources do not isolate a detailed costume, hair or makeup process for the film." },
    { area: "cinematography", status: "source_verified", note: "Lol Crawley's 35 mm Panavision photography, naturalistic Norfolk imagery, long two-shots and controlled movement allow viewers to watch both partners share a frame while compositions increasingly privilege Kate's private perception." },
    { area: "lighting", status: "mapped", note: "The muted winter exteriors, practical domestic atmosphere and slide-projector darkness are central to the finished image, but the available sources do not document a complete film-specific lighting package or exposure strategy." },
    { area: "camera_format", status: "source_verified", note: "The Match Factory records 35 mm capture, 1.85:1 colour and 5.1 release, while Crawley retrospectively confirms a low-budget 35 mm Panavision production." },
    { area: "editing", status: "source_verified", note: "Editor Jonathan Alberts and former assistant editor Haigh build the film as five larger daily sequences; blocking edits within the shot, repeated walks change length and content, and the opening projector sound was discovered as an editorial motif." },
    { area: "sound_design", status: "source_verified", note: "Joakim Sundström's credited sound design links the past to the present through the slide carousel, creaks, attic wind, room tone, speech and recurring musical fragments planted before their meaning becomes explicit." },
    { area: "music", status: "source_verified", note: "Haigh states that the source tracks were written into the screenplay as parts of the couple's history; Smoke Gets in Your Eyes moves from Kate's opening hum to the anniversary dance and becomes the final emotional mechanism rather than decorative accompaniment." },
    { area: "effects_animation", status: "not_central", note: "The film's production system depends on performance, domestic locations, slides, 35 mm photography, blocking, editing and sound rather than a separate effects or animation pipeline." },
    { area: "documentary_method", status: "mapped", note: "Naturalistic performance, real Norfolk environments and observational duration lend the fiction documentary immediacy, but the case remains a carefully adapted, blocked and performed chamber drama." },
  ],
} as const satisfies FilmHistoryProfile;

const fortyFiveYearsDonors = [
  scenesFromAMarriageFilmHistoryProfile,
  stillWalkingFilmHistoryProfile,
  theSonsRoomFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getFortyFiveYearsFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === fortyFiveYearsFilmHistoryProfile.scenarioId
    ? fortyFiveYearsFilmHistoryProfile
    : undefined;
}

export function getFortyFiveYearsFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === fortyFiveYearsFilmHistoryProfile.scenarioId
    ? fortyFiveYearsDonors
    : undefined;
}
