import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { neverRarelySometimesAlwaysFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityNeverRarely";
import { soundOfMetalFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecaritySoundOfMetal";
import { wendyAndLucyFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityWendyLucy";

export const detachmentFilmHistoryProfile = {
  scenarioId: "scenario_detachment_2011",
  period: "Early-2010s American independent social drama about public-school precarity and emotional survival",
  traditions: ["American independent social drama", "Institutional ensemble film", "Subjective performance-led fragmentation"],
  before: "American school films often organized education around inspirational victory or youth genre, while institutional social realism and Tony Kaye's documentary-commercial background offered a harsher language for burnout, abandonment and incomplete care.",
  moment: "Former teacher Carl Lund's vignette-like screenplay is re-centred around Adrien Brody's substitute teacher, with Brody also serving as executive producer. Tony Kaye directs and photographs a Long Island school ensemble through truthful performance, structured improvisation, interviews, drawings, memory fragments and abrupt stylistic changes. Barry Alexander Brown and Geoffrey Richman turn this mixed material into a subjective institutional mosaic in which teachers and students share the same exhausted care system.",
  after: "The Tribeca premiere, Deauville jury recognition and continuing debate around the film preserve it as a forceful independent example of public-school crisis rendered through actor collaboration, fragmented form and emotional rather than procedural closure.",
  historyQuestion: "Which production system explains how Detachment turns an ex-teacher's school screenplay into a fragmented performance-led study of institutional exhaustion, youth vulnerability and incomplete care?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The film responds to early-2010s concern about under-resourced American public schools, teacher burnout, unstable homes and the limits of individual care inside institutional failure." },
    { area: "movement_and_tradition", status: "source_verified", note: "Kaye combines independent social drama, institutional ensemble storytelling, interview-like testimony and subjective image fragmentation rather than an inspirational-teacher formula." },
    { area: "industry_and_production_context", status: "source_verified", note: "Paper Street and partner producers assembled an independent ensemble production with Adrien Brody as executive producer and Tribeca Film as United States distributor." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Tribeca world premiere and Deauville Revelation and international critics awards document the film's festival position and contested social impact." },
    { area: "screenplay", status: "source_verified", note: "Former teacher Carl Lund wrote an initially vignette-like text that Kaye interpreted around Henry Barthes while retaining multiple teachers, students and failures of attachment." },
    { area: "directing", status: "source_verified", note: "Kaye pursues truthful performances through close actor collaboration, structured improvisation, spontaneous set energy and an editorial willingness to reshape the written material." },
    { area: "performance", status: "source_verified", note: "Brody draws on his public-school upbringing and teacher father, while open casting, Kaye's daughter Betty and a veteran ensemble create contrasting forms of authority, need and emotional defence." },
    { area: "production_design", status: "source_verified", note: "Jade Healy's school rooms, corridors, offices, institutional surfaces and Henry's sparse domestic space make emotional detachment a material condition rather than an abstract theme." },
    { area: "costume_makeup", status: "mapped", note: "Teacher formality, student self-presentation and Henry's controlled appearance support social roles, while dedicated costume and makeup sourcing remains incomplete." },
    { area: "cinematography", status: "source_verified", note: "Tony Kaye serves as director of photography and uses stripped, reactive camera placement, close faces, direct address and visual rupture to follow performance rather than impose polished institutional coverage." },
    { area: "lighting", status: "mapped", note: "Fluorescent school interiors, desaturated rooms and isolated memory imagery create pressure, but a detailed lighting account has not been located." },
    { area: "camera_format", status: "source_verified", note: "The production's mixed live-action, interview, graphic and subjective materials are organized within a contemporary independent digital-postproduction workflow rather than one uniform classical image." },
    { area: "editing", status: "source_verified", note: "Barry Alexander Brown and Geoffrey Richman intercut Henry's school days with testimony, drawings, recollection and parallel staff crises, turning fragmentation into the film's psychological structure." },
    { area: "sound_design", status: "source_verified", note: "Classroom interruption, corridor noise, institutional speech and abrupt interior quiet move the film between public overload and Henry's private withdrawal." },
    { area: "music", status: "mapped", note: "The Newton Brothers are credited and music supports grief and subjective transition, while a dedicated compositional source review remains pending." },
    { area: "effects_animation", status: "not_central", note: "Graphic and memory inserts support subjectivity, but effects spectacle is not central to the performance and institutional production system." },
    { area: "documentary_method", status: "source_verified", note: "Direct-to-camera testimony, a filmmaker with documentary experience, real-school texture and actor-led spontaneity give the fiction a deliberate documentary-pressure layer." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  wendyAndLucyFilmHistoryProfile,
  soundOfMetalFilmHistoryProfile,
  neverRarelySometimesAlwaysFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getDetachmentFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === detachmentFilmHistoryProfile.scenarioId ? detachmentFilmHistoryProfile : undefined;
}

export function getDetachmentFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === detachmentFilmHistoryProfile.scenarioId ? donors : undefined;
}
