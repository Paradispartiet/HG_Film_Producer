import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { hugoFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsHugoCatalog";
import { thePianistFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsPianist";
import { jawsFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodJaws";

export const theImpossibleFilmHistoryProfile = {
  scenarioId: "scenario_the_impossible_2012",
  period: "Early-2010s Spanish international disaster reconstruction combining survivor testimony, Thai locations, controlled water work and practical-digital effects",
  traditions: ["Historical disaster drama", "Family survival melodrama", "Practical-effects spectacle grounded in testimony"],
  before: "Large-scale disaster films often privileged panoramic destruction and ensemble spectacle, while fact-based survival dramas usually kept testimony, bodily performance and effects-heavy reconstruction in separate production traditions.",
  moment: "J. A. Bayona and Sergio G. Sánchez build María Belón's account of the 2004 Indian Ocean tsunami around one separated family. A Spanish-led production combines actual Thai hotels and hospitals, extensive survivor consultation, actors and stunt doubles working in controlled currents, full-scale debris, one-third-scale resort miniatures, a large Alicante tank, Óscar Faura's mobile photography, Eugenio Caballero's reconstructed environments, Elena Ruiz and Bernat Vilaplana's restricted family cross-cutting, Fernando Velázquez's score and El Ranchito's digital extensions into a single bodily disaster system.",
  after: "The film became an international Spanish production success, earned Naomi Watts an Academy Award nomination and remains a major example of disaster cinema using practical water, location authenticity, miniature destruction and restrained digital work to keep spectacle tied to individual perception and family separation.",
  historyQuestion: "Which production system explains a tsunami drama where testimony, Thai locations, full-scale water, miniatures, controlled performance, practical debris, digital extension, bodily makeup, restricted editing and family-centred sound must all feel like one continuous historical event?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The screenplay reconstructs the 26 December 2004 Indian Ocean tsunami through María Belón's family experience and places the event inside actual Thai resort, hospital and community geography." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film joins historical disaster reconstruction, family survival melodrama and practical-effects spectacle while rejecting the detached city-scale viewpoint of many conventional disaster films." },
    { area: "industry_and_production_context", status: "source_verified", note: "Cineuropa, AFI and San Sebastián document the Spanish-led Telecinco Cinema and Apaches production, international distribution, principal producers and a production split across Thailand and Spanish tank and studio facilities." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy records Naomi Watts's leading-actress nomination, while institutional and trade coverage establishes the film as a prominent international Spanish production and practical-digital disaster benchmark." },
    { area: "screenplay", status: "source_verified", note: "Sergio G. Sánchez adapts María Belón's story into parallel family searches, limiting exposition and repeatedly organizing information around who can see, hear or reach another family member." },
    { area: "directing", status: "source_verified", note: "Bayona describes prioritizing unseen human experience over news imagery and directs practical water, debris, performance and effects from intimate physical viewpoints rather than an omniscient disaster overview." },
    { area: "performance", status: "source_verified", note: "Naomi Watts, Tom Holland and the ensemble perform against real currents, submerged rigs, prosthetic injury work and location crowds; the controlled physical conditions create exhaustion, fear and care as observable action." },
    { area: "production_design", status: "source_verified", note: "Eugenio Caballero's department coordinates Thai locations, damaged resort and hospital environments, full-scale debris and one-third-scale bungalows so intact holiday space and post-wave devastation remain geographically continuous." },
    { area: "costume_makeup", status: "mapped", note: "Wet clothing, progressive contamination, prosthetic wounds and hospital states are essential to bodily continuity, but the inspected sources do not provide a complete costume, hair, makeup and prosthetic workflow." },
    { area: "cinematography", status: "source_verified", note: "Óscar Faura's photography moves between calm resort observation, close water-level subjectivity, unstable survival movement and crowded hospital searches while preserving the family's restricted visual access." },
    { area: "lighting", status: "mapped", note: "The finished film coordinates tropical daylight, underwater darkness, hospital practicals and smoke- and debris-filtered exteriors, but the inspected sources do not document the complete lighting package and exposure strategy." },
    { area: "camera_format", status: "source_verified", note: "Institutional records document the colour Scope feature, while effects reporting describes moving live-action cameras, tracked tank photography and matched miniature plates designed for a seamless widescreen composite." },
    { area: "editing", status: "source_verified", note: "Elena Ruiz and Bernat Vilaplana alternate the separated family lines, preserve disorientation inside the wave and delay recognition in crowded hospitals so reunion depends on controlled spatial and auditory information." },
    { area: "sound_design", status: "source_verified", note: "The soundtrack moves from ordinary resort ambience into impact, submerged pressure, debris, breath, distant voices, hospital crowd noise and sudden subjective quiet, keeping the disaster physical and viewpoint-bound." },
    { area: "music", status: "source_verified", note: "Fernando Velázquez's score supports family memory, separation and reunion without replacing the practical water and hospital sound that carries immediate danger and orientation." },
    { area: "effects_animation", status: "source_verified", note: "FXGuide documents one-third-scale bungalows, an 80-by-100-metre tank, water-dump tests, practical currents and debris, Thailand plates, tracked cameras and digital vegetation, water and destruction extensions combined by El Ranchito and partner teams." },
    { area: "documentary_method", status: "not_central", note: "Survivor testimony, actual locations and historical reference guide the reconstruction, but the governing form is scripted dramatic re-enactment rather than documentary observation or evidence argument." },
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