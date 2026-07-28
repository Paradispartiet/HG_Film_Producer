import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { allTheBeautyAndTheBloodshedFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveAllBeauty";
import { americanSplendorFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingAmericanSplendor";
import { parisIsBurningFilmHistoryProfile } from "./scenarioFilmStudyQueerIndependentParisIsBurning";

export const searchingForSugarManFilmHistoryProfile = {
  scenarioId: "scenario_searching_for_sugar_man_2012",
  period: "Early-2010s transnational music documentary reconstructing a lost career through fan investigation, archive, travel and belated performance",
  traditions: ["Investigative music documentary", "Archival biography", "Transnational fan and circulation history"],
  before: "Music biographies usually moved from documented career to decline and rediscovery, while investigative documentaries treated witnesses and archives as evidence for a known public history rather than for a cultural success hidden from the artist himself.",
  moment: "Malik Bendjelloul follows South African fans Stephen Segerman and Craig Bartholomew Strydom as they reconstruct how Detroit singer-songwriter Sixto Rodriguez became famous under apartheid while disappearing from the American record industry. Interviews, photographs, records, newspapers, city travel, animated reconstruction, Rodriguez's songs and the later South African concerts turn incomplete evidence, rumor and transnational circulation into a mystery whose solution changes the meaning of the archive.",
  after: "The Sundance reception and Academy Award for Documentary Feature made the film a global success and restored Rodriguez to international touring, while later debate about selective narration keeps the case useful for studying how documentary suspense can recover a subject and simultaneously simplify a more complicated circulation history.",
  historyQuestion: "Which production system explains a music documentary where South African fans, Detroit witnesses, records, photographs, rumors, travel, animation and recovered concerts are edited as a detective story about an artist who did not know the scale of his own audience?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Sundance, DFI and the Academy place the story across Detroit recording culture, apartheid-era South Africa, cassette and record circulation and Rodriguez's later return to the audience that had preserved his music." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film combines investigative documentary, music biography, fan history, archival reconstruction and a transnational story about cultural circulation outside official industry knowledge." },
    { area: "industry_and_production_context", status: "source_verified", note: "DFI records the Swedish-British production and Bendjelloul's multiple roles as director, writer, editor and producer alongside producer Simon Chinn and cinematographer Camilla Skagerström." },
    { area: "reception_and_legacy", status: "source_verified", note: "The film premiered at Sundance and won the 2013 Academy Award for Documentary Feature, while its release materially expanded Rodriguez's international recognition and touring." },
    { area: "screenplay", status: "source_verified", note: "Bendjelloul structures the evidence as a sequence of questions about sales, death rumors, identity and location, delaying Rodriguez's present-tense appearance until the investigation has established the scale of the mystery." },
    { area: "directing", status: "source_verified", note: "The direction keeps fans and investigators active within the story, uses travel and archive to test rumor, and allows Rodriguez's reserved presence to interrupt rather than merely confirm the legend built around him." },
    { area: "performance", status: "source_verified", note: "Rodriguez's interviews and concert appearances retain his understated manner, while Segerman, Strydom, musicians, family and industry witnesses perform the labor of memory, search and interpretation." },
    { area: "production_design", status: "not_central", note: "Detroit streets, South African homes, record collections, archives and concert spaces are documentary evidence rather than a constructed dramatic design system." },
    { area: "costume_makeup", status: "mapped", note: "Clothing and appearance distinguish archival eras, present-day witnesses and Rodriguez's stage identity, but they remain evidentiary rather than department-led design." },
    { area: "cinematography", status: "source_verified", note: "Camilla Skagerström's credited photography joins present-day interviews, Detroit and South African locations, investigative movement and concert material without erasing the differing origins of the evidence." },
    { area: "lighting", status: "mapped", note: "Interviews, streets, homes and performance spaces retain distinct available and controlled lighting conditions, but the inspected sources do not document a complete lighting workflow." },
    { area: "camera_format", status: "mapped", note: "The film combines contemporary digital footage, archive, still photography and low-cost supplementary capture; the inspected sources do not establish one complete camera and recording package." },
    { area: "editing", status: "source_verified", note: "Bendjelloul's own credited edit turns partial testimony, visual absence, maps, records and repeated songs into a mystery structure whose eventual encounters reframe earlier evidence." },
    { area: "sound_design", status: "source_verified", note: "Interview voices, record noise, city ambience, concert crowds and transitions into Rodriguez recordings let sound move continually between historical artifact, clue and present performance." },
    { area: "music", status: "source_verified", note: "Rodriguez's songs are not background illustration: lyrics, recordings, South African reception and live return provide the documentary's evidence, emotional continuity and historical object." },
    { area: "effects_animation", status: "source_verified", note: "Animated and graphic reconstruction supplies images for undocumented passages and visualizes rumor, travel and memory while remaining clearly distinct from photographed evidence." },
    { area: "documentary_method", status: "source_verified", note: "The production compares fan testimony, industry witnesses, family access, records, newspapers, locations and performances, then organizes their gaps and contradictions as the film's central investigative method." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  allTheBeautyAndTheBloodshedFilmHistoryProfile,
  parisIsBurningFilmHistoryProfile,
  americanSplendorFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getSearchingForSugarManFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === searchingForSugarManFilmHistoryProfile.scenarioId ? searchingForSugarManFilmHistoryProfile : undefined;
}

export function getSearchingForSugarManFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === searchingForSugarManFilmHistoryProfile.scenarioId ? donors : undefined;
}
