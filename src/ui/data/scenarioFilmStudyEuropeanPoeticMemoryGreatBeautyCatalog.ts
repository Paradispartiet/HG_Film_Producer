import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { lAvventuraFilmHistoryProfile } from "./scenarioFilmStudyEuropean1960sSpaceLAvventura";
import { eightAndAHalfFilmHistoryProfile } from "./scenarioFilmStudyEuropeanModernistEightAndAHalf";
import { amarcordFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoeticMemoryAmarcord";

export const theGreatBeautyFilmHistoryProfile = {
  scenarioId: "scenario_the_great_beauty_2013",
  period: "Early-2010s Italian-French baroque city cinema turning Roman social spectacle into an ageing writer's artistic and moral reckoning",
  traditions: ["Contemporary Italian auteur cinema", "Fellinian social panorama", "Modernist city and memory film"],
  before: "Italian modernism had already used wandering protagonists, episodic encounters, architecture, carnival and artistic crisis to expose bourgeois emptiness, while Paolo Sorrentino and Toni Servillo had developed a highly mobile, satirical screen language across earlier films about power and public performance.",
  moment: "Indigo Film, Medusa, Babe Films, Pathé and France 2 Cinéma build an Italy-France production around Sorrentino and Umberto Contarello's novel-like circuit through Rome. Toni Servillo carries Jep's wit and exhaustion across terraces, palaces, churches, streets and parties; Stefania Cella, Daniela Ciancio and the location team turn contemporary Rome into a layered social theatre; Luca Bigazzi lights whole environments for fast three-camera coverage and sweeping movement; Cristiano Travaglioli collides party montage with reflective pauses; Emanuele Cecere, Silvia Moraes, Lele Marchitelli and an eclectic music programme move between dance-floor excess, sacred resonance, city quiet and private memory.",
  after: "The film won European Film, Director, Actor and Editor honours before receiving the Academy Award and BAFTA for film not in the English language. Its international circulation established Sorrentino's baroque Rome as a major contemporary case in how urban location, performance, camera movement, montage and music can hold spectacle and spiritual fatigue inside one production system.",
  historyQuestion: "Which production system explains a Rome film that follows an ageing writer through parties, palaces, churches, terraces and private recollections, using novel-like episodes, fast multi-camera 35 mm production, mobile widescreen photography, environment-wide lighting, abrupt montage, sacred and dance music, silence and occasional visible artifice to make social splendour and wasted artistic life inseparable?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Cannes, Sorrentino interviews and institutional records place the film in contemporary Rome and connect Jep's crisis to ageing, wasted time, artistic paralysis and the city's post-Berlusconi social spectacle." },
    { area: "movement_and_tradition", status: "source_verified", note: "Criterion, Film Comment and BFI connect the film to Fellini, Antonioni and Italian baroque modernism while preserving Sorrentino's own insistence on free, novel-like, non-goal-driven storytelling." },
    { area: "industry_and_production_context", status: "source_verified", note: "Cannes, Indigo Film, Unifrance and Filmitalia document the Italy-France co-production among Indigo, Medusa, Babe, Pathé and France 2 Cinéma, with European, national and regional support." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy, BAFTA and European Film Academy record the foreign-language, European Film, Director, Actor and Editor honours that secured the film's international historical position." },
    { area: "screenplay", status: "source_verified", note: "Cannes and Criterion credit Paolo Sorrentino and Umberto Contarello; Sorrentino describes a novel-like structure built from deviations, side stories, introspection and observations gathered before Jep became the organising character." },
    { area: "directing", status: "source_verified", note: "Film Comment and Filmmaker interviews document Sorrentino's pursuit of free-flowing storytelling, dissipated set pieces, humour beside ugliness and a camera able to move between spectacle, memory and stillness without explanatory transitions." },
    { area: "performance", status: "source_verified", note: "Cannes, Criterion and EFA document Toni Servillo and the large ensemble; Jep's controlled irony and fatigue organise aristocrats, artists, clergy, entertainers and outsiders as both social panorama and personal reckoning." },
    { area: "production_design", status: "source_verified", note: "Cannes, Indigo Film and Criterion credit Stefania Cella; ancient palaces, private villas, terraces, churches, clubs, streets and designed interiors make Rome simultaneously location, social stage and psychological landscape." },
    { area: "costume_makeup", status: "source_verified", note: "Indigo Film and Criterion credit Daniela Ciancio, Maurizio Silvi and Aldo Signoretti; formal suits, party clothes, clerical dress, cosmetic surfaces and ageing bodies define status, performance and decay across the ensemble." },
    { area: "cinematography", status: "source_verified", note: "Cannes credits Luca Bigazzi, while his production account describes ten weeks, roughly 35 to 40 setups per day and frequent three-camera shooting that treated each Roman environment as a complete photographic field." },
    { area: "lighting", status: "source_verified", note: "Bigazzi explains that three-camera coverage required lighting whole 360-degree spaces rather than single angles, with hidden sources, darkness, volume and non-flat continuity maintained across multiple camera positions." },
    { area: "camera_format", status: "mapped", note: "Indigo Film records DCP and 35 mm presentation, Unifrance records CinemaScope and Dolby SRD, and ARRI associates Bigazzi with Ultra Prime lenses, but the inspected primary sources do not isolate the complete original camera, stock, lens and intermediate package." },
    { area: "editing", status: "source_verified", note: "Cannes and EFA credit Cristiano Travaglioli and his European Editor award; Bigazzi records a first assembly above three hours and a final reduction of about 45 minutes, supporting the collision of dense social montage and suspended reflection." },
    { area: "sound_design", status: "source_verified", note: "Indigo Film credits production sound mixer Emanuele Cecere and sound editor Silvia Moraes; party bass, voices, fountains, footsteps, church acoustics, city ambience and sudden quiet shift Jep between public performance and private attention." },
    { area: "music", status: "source_verified", note: "Cannes, Indigo Film and DFI credit Lele Marchitelli, while the finished system combines original music, sacred choral works, minimalist concert pieces and electronic dance tracks as structural contrasts rather than one continuous score." },
    { area: "effects_animation", status: "mapped", note: "Visible artifice including the vanishing giraffe and digital flamingos supports the film's self-conscious wonder, but the current source set does not document a complete visual-effects pipeline or department-level breakdown." },
    { area: "documentary_method", status: "not_central", note: "Sorrentino began from accumulated observations of Rome and its social worlds, but the film is organised as stylised fiction, performance, design, montage and subjective urban wandering rather than documentary inquiry." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  eightAndAHalfFilmHistoryProfile,
  lAvventuraFilmHistoryProfile,
  amarcordFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheGreatBeautyFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === theGreatBeautyFilmHistoryProfile.scenarioId ? theGreatBeautyFilmHistoryProfile : undefined;
}

export function getTheGreatBeautyFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theGreatBeautyFilmHistoryProfile.scenarioId ? donors : undefined;
}
