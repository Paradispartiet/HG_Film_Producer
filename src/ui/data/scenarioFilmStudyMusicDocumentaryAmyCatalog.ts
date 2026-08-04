import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { allTheBeautyAndTheBloodshedFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveAllBeauty";
import { parisIsBurningFilmHistoryProfile } from "./scenarioFilmStudyQueerIndependentParisIsBurning";
import { searchingForSugarManFilmHistoryProfile } from "./scenarioFilmStudyMusicDocumentarySearchingForSugarManCatalog";

export const amyFilmHistoryProfile = {
  scenarioId: "scenario_amy_2015",
  period: "Mid-2010s British archival music documentary reconstructing a public life through private footage, recorded voice, performance and media pressure",
  traditions: ["Archival music biography", "Audio-witness documentary", "Celebrity and media-ethics portrait"],
  before: "Music documentaries often alternated present-day talking heads with authorised performance clips, while celebrity biographies commonly treated press imagery as illustration rather than as evidence of the machinery surrounding the subject.",
  moment: "Asif Kapadia and editor Chris King build Amy Winehouse's life almost entirely from home video, phone and broadcast material, concerts, studio recordings, photographs, news and paparazzi images, while testimony remains primarily off screen. Winehouse's lyrics appear against the images, her recorded voice and performances preserve authorship, and shifts among intimate fragments, commercial success and increasingly invasive public footage turn archive selection, sound and montage into the film's argument.",
  after: "The film's major theatrical reach, Academy Award and BAFTA success established it as a defining contemporary archival music biography, while debate over access, family participation, press complicity and posthumous representation keeps its documentary ethics central to the work's legacy.",
  historyQuestion: "Which production system explains a music biography that avoids visible talking heads and instead lets private recordings, off-screen testimony, lyrics, performances, broadcast images and paparazzi footage accumulate into an intimate but contested account of fame?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Institutional and production sources place the film inside Amy Winehouse's rise from North London jazz singer to global recording celebrity and the escalating press scrutiny surrounding her public life." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film joins archival biography, music documentary, audio-witness testimony and media-ethics critique while extending Kapadia's earlier archive-led documentary method." },
    { area: "industry_and_production_context", status: "source_verified", note: "Official records identify On the Corner Films, Film4, Universal Music and distributor partners, with Asif Kapadia directing, James Gay-Rees producing and Chris King editing the feature." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy, BAFTA and European award records document the film's major documentary recognition and its continuing status as a reference point for archival music biography." },
    { area: "screenplay", status: "source_verified", note: "The narrative is written through evidence selection: childhood and early music fragments establish voice before fame, while lyrics, witness memories and repeated media images progressively reinterpret the same public milestones." },
    { area: "directing", status: "source_verified", note: "Kapadia keeps most interviewees off screen, directs attention toward Winehouse's own recorded presence and uses the contrast between private access and public extraction as the film's ethical and dramatic structure." },
    { area: "performance", status: "source_verified", note: "Winehouse's rehearsals, studio work, concerts, television appearances, jokes and private recordings are treated as primary performance evidence rather than reconstructed by actors or explained only by witnesses." },
    { area: "production_design", status: "not_central", note: "Homes, studios, stages, streets and press environments enter as found historical evidence rather than a newly constructed production-design system." },
    { area: "costume_makeup", status: "mapped", note: "Clothing, hair and makeup visibly chart changing self-presentation, career stage and public image, but they remain archival evidence rather than a department process created for the documentary." },
    { area: "cinematography", status: "mapped", note: "The portrait depends on selecting and reframing heterogeneous private, broadcast, concert, phone and press images; there is no single newly photographed cinematographic system documented across the feature." },
    { area: "lighting", status: "mapped", note: "Domestic video, studio footage, stage lighting, television and paparazzi flash retain their distinct source conditions, while no unified new lighting workflow governs the archive." },
    { area: "camera_format", status: "mapped", note: "The film combines numerous consumer, professional, broadcast, photographic and digital sources, but the inspected records do not provide a complete item-by-item technical inventory of every original format." },
    { area: "editing", status: "source_verified", note: "Chris King's montage replaces conventional talking-head coverage with off-screen voices, visual evidence, temporal compression, recurring images and lyric-performance associations that move the viewer between intimacy, success and collapse." },
    { area: "sound_design", status: "source_verified", note: "Recorded interviews, room sound, crowd pressure, camera noise, broadcast audio, studio material and carefully placed silence create continuity across incompatible visual sources while preserving shifts between private and public space." },
    { area: "music", status: "source_verified", note: "Winehouse's songs, demos, studio sessions and live performances function simultaneously as authored testimony, chronology, emotional structure and evidence of developing musical craft." },
    { area: "effects_animation", status: "mapped", note: "On-screen lyrics, captions, reframing and graphic treatments clarify authorship and context, but effects and animation are supporting editorial tools rather than an independent spectacle pipeline." },
    { area: "documentary_method", status: "source_verified", note: "The production combines extensive archive acquisition, long-form witness interviews, source comparison, off-screen testimony and ethical decisions about contradictory accounts, family access and media representation." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  searchingForSugarManFilmHistoryProfile,
  allTheBeautyAndTheBloodshedFilmHistoryProfile,
  parisIsBurningFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getAmyFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === amyFilmHistoryProfile.scenarioId ? amyFilmHistoryProfile : undefined;
}

export function getAmyFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === amyFilmHistoryProfile.scenarioId ? donors : undefined;
}
