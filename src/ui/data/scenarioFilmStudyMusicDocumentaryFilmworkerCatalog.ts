import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { americanSplendorFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingAmericanSplendor";
import { amyFilmHistoryProfile } from "./scenarioFilmStudyMusicDocumentaryAmyCatalog";
import { searchingForSugarManFilmHistoryProfile } from "./scenarioFilmStudyMusicDocumentarySearchingForSugarManCatalog";

export const filmworkerFilmHistoryProfile = {
  scenarioId: "scenario_filmworker_2017",
  period: "Late-2010s cinephile documentary biography, production-labor history and archive-led testimony",
  traditions: ["Documentary biography", "Cinema-history documentary", "Archive-and-witness portrait"],
  before: "Auteur histories often centered the credited director and finished films, while the assistants, coaches, technicians, restoration workers and other below-the-line collaborators who sustained those films could remain fragmented across credits, anecdotes and specialist memory.",
  moment: "Tony Zierra reframes Stanley Kubrick's production history through Leon Vitali, the actor who became Kubrick's all-purpose filmworker. Extended interviews with Vitali and collaborators are crosscut with film excerpts, behind-the-scenes material, photographs and production history so casting, actor coaching, location work, print checking, color timing, sound work, marketing and restoration become the documentary's evidence of invisible creative labor.",
  after: "Its 2017 Cannes Classics premiere, festival circulation and later theatrical release helped move Vitali from footnote to central production-history witness and made Filmworker a durable counterexample to auteur narratives that erase the practical collaboration required to make and preserve films.",
  historyQuestion: "Which production system explains a documentary biography that uses Leon Vitali's testimony, collaborator interviews, Kubrick archive, film excerpts and restoration history to turn otherwise invisible production labor into the central story of authorship?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Cannes, AFI, IDFA, Film at Lincoln Center and contemporary interviews place Vitali's story from Barry Lyndon through The Shining, Full Metal Jacket, Eyes Wide Shut and later restoration work." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film belongs to cinephile documentary biography and archive-and-witness film history, but shifts emphasis from Kubrick as solitary auteur toward the practical labor of an indispensable collaborator." },
    { area: "industry_and_production_context", status: "source_verified", note: "Cannes identifies True Studio Media and Tony Zierra's direction and editing; AFI and IDFA credit Elizabeth Yoffe and Zierra as producers and document the small independent production." },
    { area: "reception_and_legacy", status: "source_verified", note: "Official Cannes, AFI, IDFA and New York Film Festival records document the 2017 festival life, while later coverage treats the documentary as the work that made Vitali's contributions broadly visible." },
    { area: "screenplay", status: "source_verified", note: "The narrative is constructed through biographical selection rather than dramatic scripting: acting success, the decision to leave performance, escalating Kubrick responsibilities, personal cost and post-Kubrick preservation form the argument." },
    { area: "directing", status: "source_verified", note: "Zierra describes becoming interested in Vitali while making a larger Kubrick project; the finished film keeps following the relationship and the idea of doing 'whatever it takes' rather than treating Vitali as a supporting anecdote." },
    { area: "performance", status: "source_verified", note: "Vitali is both historical actor and present-tense witness; interviews with Ryan O'Neal, Matthew Modine, Danny Lloyd and other collaborators test and enlarge his account rather than replacing him with reenactment." },
    { area: "production_design", status: "mapped", note: "Homes, interview spaces, archive objects, film materials and historical locations function primarily as evidence; the inspected sources do not document a constructed production-design system as a central method." },
    { area: "costume_makeup", status: "mapped", note: "Vitali's changing appearance and archival screen roles help distinguish eras and identities, but costume and makeup are evidentiary material rather than a newly designed documentary department system." },
    { area: "cinematography", status: "source_verified", note: "AFI and IDFA credit Tony Zierra as director of photography, confirming that the contemporary interview and observational layer was photographed by the filmmaker alongside heterogeneous archival images." },
    { area: "lighting", status: "mapped", note: "Interview and observational material uses controlled contemporary photography against source footage with many historical lighting conditions, but the inspected sources do not describe a unified lighting workflow." },
    { area: "camera_format", status: "mapped", note: "The documentary combines newly photographed interviews with film excerpts, behind-the-scenes footage, stills and other archival sources; no inspected authoritative source establishes one complete capture-format inventory." },
    { area: "editing", status: "source_verified", note: "Cannes and IDFA credit Tony Zierra as editor; the cut repeatedly moves from testimony to concrete examples of casting, coaching, print inspection, color work and preservation so labor claims are illustrated by historical evidence." },
    { area: "sound_design", status: "source_verified", note: "Cannes credits Chris Jenkins for sound, while the documentary coordinates interview speech, archival production audio, film excerpts and transitions across decades of differently sourced material." },
    { area: "music", status: "source_verified", note: "IDFA and AFI credit Luke Jennings and David Ben Shannon; the score supports biography and reflection without replacing the voices, production sounds and Kubrick-film material that carry the historical argument." },
    { area: "effects_animation", status: "not_central", note: "The production depends on interviews, archive, film excerpts, stills, editing and sound rather than an effects- or animation-led reconstruction system." },
    { area: "documentary_method", status: "source_verified", note: "Zierra combines long-form subject access, collaborator testimony, follow-up questioning, historical clips and production artifacts; Vitali states that he did not control or censor the film's shooting or editing." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  amyFilmHistoryProfile,
  searchingForSugarManFilmHistoryProfile,
  americanSplendorFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getFilmworkerFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === filmworkerFilmHistoryProfile.scenarioId ? filmworkerFilmHistoryProfile : undefined;
}

export function getFilmworkerFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === filmworkerFilmHistoryProfile.scenarioId ? donors : undefined;
}
