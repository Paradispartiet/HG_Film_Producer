import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { hugoFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsHugoCatalog";
import { thePianistFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsPianist";
import { jawsFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodJaws";

export const theImpossibleFilmHistoryProfile = {
  scenarioId: "scenario_the_impossible_2012",
  period: "Early-2010s Spanish international disaster reconstruction combining survivor testimony, Thailand locations, controlled water stages and practical-digital destruction",
  traditions: ["Historical disaster film", "Family survival drama", "Practical-digital water-effects cinema"],
  before: "Large-scale disaster films often organised spectacle around multiple fictional plotlines, while fact-based survival dramas could reduce historical catastrophe to retrospective testimony or conventional prestige performance.",
  moment: "J.A. Bayona and Sergio G. Sánchez build the 2004 Indian Ocean tsunami through Maria Belón's family testimony and one restricted family viewpoint. Thailand locations and survivors, a Spanish water-channel system, one-third-scale resort models, full-scale debris, prosthetic injury work, Super 35 photography, high-speed digital capture, layered editing, overwhelming water sound and Fernando Velázquez's restrained-to-orchestral score join physical immersion to historical reconstruction.",
  after: "The film's international success, Naomi Watts's Academy Award nomination and Spanish recognition for sound and effects established it as a major modern case in coordinating witness-based drama, actor safety, practical water engineering, miniature destruction and digital integration without allowing technical spectacle to displace the family's experience.",
  historyQuestion: "Which production system explains a fact-based tsunami film where survivor testimony, Thailand locations, water tanks, controlled currents, scale models, prosthetic injury, photochemical and high-speed photography, sound and music keep a vast historical disaster inside one family's fragmented experience?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Institutional records and survivor interviews identify the film as a reconstruction of one family's experience during the 26 December 2004 Indian Ocean tsunami in Thailand." },
    { area: "movement_and_tradition", status: "source_verified", note: "The production combines historical disaster cinema, family survival drama, witness-based adaptation and practical-digital effects rather than using a multi-protagonist fictional catastrophe model." },
    { area: "industry_and_production_context", status: "source_verified", note: "AFI and DFI record the Spanish-led Apaches Entertainment and Telecinco production, principal producers and department heads, while production reporting documents Thailand location work and Spanish tank stages." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy records Naomi Watts's leading-actress nomination, and contemporary awards records document major recognition for the film's sound, effects and performance systems." },
    { area: "screenplay", status: "source_verified", note: "Sergio G. Sánchez writes from Maria Belón's story, restricting the catastrophe to separated family viewpoints, incomplete information, hospital searches and reunion rather than attempting an encyclopedic account of the disaster." },
    { area: "directing", status: "source_verified", note: "Bayona coordinates witness responsibility, child-centred suspense, physical performance, practical water work and effects so the historical event is experienced through disorientation, care and limited knowledge." },
    { area: "performance", status: "source_verified", note: "Naomi Watts and Tom Holland describe sustained work in controlled current and underwater rigs; the physical environment produces breath, fatigue and panic that remain anchored to the family relationship." },
    { area: "production_design", status: "source_verified", note: "Eugenio Caballero's credited design joins real Thai resort and hospital locations to reconstructed devastation, full-scale debris and one-third-scale resort buildings built for the wave impact." },
    { area: "costume_makeup", status: "mapped", note: "Progressive wet clothing, contamination, wounds and prosthetic injury are essential to bodily continuity, but the inspected sources do not provide a complete costume and makeup department workflow." },
    { area: "cinematography", status: "source_verified", note: "Oscar Faura's widescreen image alternates calm Thailand geography, restricted family proximity, practical channel photography, underwater work, scale-model plates and devastation views without separating drama from effects." },
    { area: "lighting", status: "source_verified", note: "Location daylight and matched tank, model and debris plates preserve the contrast between the bright holiday environment and the muddied, damaged aftermath while supporting compositing across scales." },
    { area: "camera_format", status: "source_verified", note: "Technical records identify Super 35 capture with Arricam and Arriflex cameras, Kodak Vision3 stocks, selected Phantom HD high-speed photography, Zeiss Master Primes and a 2K digital intermediate." },
    { area: "editing", status: "source_verified", note: "Elena Ruiz and Bernat Vilaplana coordinate sudden wave impact, fragmented underwater perception, separated family searches, hospital geography and delayed recognition while maintaining emotional rather than omniscient information." },
    { area: "sound_design", status: "source_verified", note: "The sound system moves from low environmental warning and overwhelming water pressure to damaged-space ambience, distant voices, medical activity and selective quiet; the film received major Spanish sound recognition." },
    { area: "music", status: "source_verified", note: "Fernando Velázquez describes balancing emotion, storytelling and respect, using chamber-scale material and larger orchestral forces recorded at Abbey Road without scoring the catastrophe as uncomplicated triumph." },
    { area: "effects_animation", status: "source_verified", note: "The tsunami combines one-third-scale buildings, million-litre wave tanks, a sixty-metre channel, controlled actor rigs, practical debris, Thailand plates, digital trees, splashes, extensions and compositing by El Ranchito and Fassman." },
    { area: "documentary_method", status: "source_verified", note: "The fiction is organised around survivor testimony, meetings with Maria Belón, real Thai locations, historical visual references and consultation about emotional truth, making nonfiction research central even though the result is a staged feature." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  jawsFilmHistoryProfile,
  thePianistFilmHistoryProfile,
  hugoFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheImpossibleFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === theImpossibleFilmHistoryProfile.scenarioId ? theImpossibleFilmHistoryProfile : undefined;
}

export function getTheImpossibleFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theImpossibleFilmHistoryProfile.scenarioId ? donors : undefined;
}
