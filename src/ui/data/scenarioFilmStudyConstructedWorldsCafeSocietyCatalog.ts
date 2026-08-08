import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { coreConstructedWorldsProfiles } from "./scenarioFilmStudyConstructedWorldsCoreCatalog";
import { herFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsHerCatalog";
import { moonriseKingdomFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsMoonriseKingdomCatalog";

export const cafeSocietyFilmHistoryProfile = {
  scenarioId: "scenario_cafe_society_2016",
  period: "Mid-2010s American period romantic comedy reconstructing 1930s Hollywood and New York through digital color, location design, costume and jazz",
  traditions: ["1930s Hollywood period romance", "New York social comedy", "Jazz-age nostalgia", "Digital period cinematography"],
  before: "Woody Allen had repeatedly used New York, romantic triangulation and idealized historical eras, while Vittorio Storaro had spent decades treating color, light and composition as dramatic systems. Café Society joins those traditions to a 1930s Hollywood-New York story at the moment both director and cinematographer moved to digital feature capture.",
  moment: "Allen structures Bobby Dorfman's rise, divided love and return to New York around a visual and social contrast between golden Hollywood promise and darker Manhattan nightclub society. Vittorio Storaro photographs the film with Sony F65/F55 cameras, Cooke optics, a 2:1 Univisium frame and a 4K 16-bit color workflow, using light and color to distinguish places and emotional phases. Santo Loquasto mixes surviving Los Angeles period architecture with recreated New York clubs and interiors; Suzy Benzinger builds 1930s silhouettes and custom star wardrobe; the cast plays romantic hesitation and social performance against Allen's narration; and Rodgers-and-Hart-era jazz, including Vince Giordano and the Nighthawks, makes the nightclub world historically audible.",
  after: "Opening the 2016 Cannes Film Festival made Café Society a visible marker in the digital transition of two long-established filmmakers. The production remains a useful teaching case because period reconstruction is not carried by one department: camera format, color pipeline, controlled light, surviving architecture, built interiors, costume, performance and period jazz all separate Hollywood fantasy from New York experience while keeping both inside the same nostalgic romantic world.",
  historyQuestion: "Which production system best explains how Café Society turns 1930s Hollywood and New York into distinct but connected romantic worlds through digital color, controlled lighting, period locations and sets, costume, performance and jazz?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Festival de Cannes records Café Society as the 2016 opening film, set between 1930s Hollywood and New York and produced as an American romantic comedy-drama." },
    { area: "movement_and_tradition", status: "source_verified", note: "Cannes and design coverage place the film in Allen's recurring city-romance and period-nostalgia tradition, while the production specifically reconstructs Hollywood glamour, New York café society and Depression-era nightlife." },
    { area: "industry_and_production_context", status: "source_verified", note: "Cannes identifies the producers and principal departments, while Storaro's accounts document the production as the first digital feature for both him and Allen and describe the linked capture-to-DI workflow." },
    { area: "reception_and_legacy", status: "source_verified", note: "The film opened the 69th Cannes Film Festival Out of Competition, giving its digital-period production an immediate international festival position." },
    { area: "screenplay", status: "source_verified", note: "Cannes credits Woody Allen as writer and director and records the story's movement from Bobby's Bronx family through Hollywood employment and divided romance to a New York nightclub life shaped by unresolved attachment." },
    { area: "directing", status: "source_verified", note: "Allen coordinates narration, romantic crosscurrents, ensemble social comedy and a two-city structure while allowing design, color and music to carry much of the period distinction rather than stopping for historical exposition." },
    { area: "performance", status: "source_verified", note: "Cannes documents the ensemble led by Jesse Eisenberg, Kristen Stewart, Steve Carell and Blake Lively; the production uses restrained romantic hesitation, social role-playing and contrasting Hollywood and New York milieus rather than heightened period imitation." },
    { area: "production_design", status: "source_verified", note: "Santo Loquasto describes combining surviving Los Angeles architectural treasures with New York locations, recreated clubs and period references, while Architectural Digest documents the use of historical photographs and contemporary films to build the nightclub world." },
    { area: "costume_makeup", status: "source_verified", note: "Suzy Benzinger describes building the 1930s wardrobe, including custom work with Chanel for Kristen Stewart, while AFI credits the costume, makeup and hair departments that sustain the period across Hollywood and New York." },
    { area: "cinematography", status: "source_verified", note: "Storaro's production account explains his first long-form digital feature, the visual separation of Hollywood and New York, and the use of composition, exposure, color and controlled light as dramatic structures." },
    { area: "lighting", status: "source_verified", note: "Storaro documents centralized dimmer control and changing the visual atmosphere within shots; contemporary coverage describes the golden, radiant Hollywood image and the darker, more lavish New York interiors." },
    { area: "camera_format", status: "source_verified", note: "Film and Digital Times, Digital Cinema Report and Norwegian cinematographers document Sony F65/F55 capture, Cooke lenses, 4K acquisition, high-bit-depth color and Storaro's 2:1 Univisium composition." },
    { area: "editing", status: "mapped", note: "Cannes and AFI credit Alisa Lepselter and the finished film moves cleanly between narration, Hollywood courtship, gangster-family material and New York nightclub life, but a detailed editor-process interview has not been found in the inspected evidence." },
    { area: "sound_design", status: "mapped", note: "AFI documents the production and post-sound crew, and dialogue, club ambience, music and narration organize the social worlds, but the inspected evidence does not provide a dedicated sound-team process account." },
    { area: "music", status: "source_verified", note: "DownBeat documents a soundtrack centered on Rodgers and Hart and 1930s material, including Vince Giordano and the Nighthawks, making period jazz an active part of the nightclub setting rather than generic background scoring." },
    { area: "effects_animation", status: "not_central", note: "AFI records a visual-effects department, but the film's principal period construction depends on locations, sets, wardrobe, controlled photography and color rather than effects or animation as a central production method." },
    { area: "documentary_method", status: "not_central", note: "Historical photographs, architecture and period references inform the reconstruction, but Café Society is an authored studio fiction rather than a documentary- or nonfiction-method production." }
  ]
} as const satisfies FilmHistoryProfile;

const donors = [
  coreConstructedWorldsProfiles.scenario_midnight_in_paris_2011,
  herFilmHistoryProfile,
  moonriseKingdomFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getCafeSocietyFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === cafeSocietyFilmHistoryProfile.scenarioId ? cafeSocietyFilmHistoryProfile : undefined;
}

export function getCafeSocietyFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === cafeSocietyFilmHistoryProfile.scenarioId ? donors : undefined;
}
