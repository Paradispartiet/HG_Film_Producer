import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { beingJohnMalkovichFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBeingJohnMalkovich";
import { bartonFinkFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBartonFink";
import { theGameFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureTheGame";

export const inTheHouseFilmHistoryProfile = {
  scenarioId: "scenario_in_the_house_2012",
  period: "Early-2010s French literary thriller turning authorship, spectatorship and suburban domestic access into one unstable fiction system",
  traditions: ["French literary adaptation", "Voyeuristic psychological thriller", "Metafiction about teaching and spectatorship"],
  before: "Teacher-student dramas usually treated writing as personal development, while voyeuristic thrillers and stories-within-stories separated domestic trespass from the mechanics of authorship and revision.",
  moment: "François Ozon adapts Juan Mayorga's play around Germain, Claude and a serial school essay that enters Rapha's middle-class home. Repeated classroom readings, staged revisions, direct voice-over, shifting access to the house, controlled suburban interiors, Arnaud de Moléron's design, Jérôme Alméras's widescreen photography, Laure Gardette's editorial handoffs and Philippe Rombi's score make writing, looking and intervention parts of the same suspense machine.",
  after: "The San Sebastián Golden Shell and European circulation established the film as a major Ozon case in which literary creation is neither illustration nor confession: every new scene changes who controls the story, what counts as evidence and whether the spectator is collaborator, teacher or intruder.",
  historyQuestion: "Which production system explains a thriller where a student's weekly essays, a teacher's revisions, repeated entry into one family home, voice-over and shifting staged realities make writing itself the mechanism of voyeurism and danger?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Unifrance, San Sebastián and contemporary interviews place the French production in 2011-2012 and connect it to Ozon's adaptation of Juan Mayorga's Spanish play El chico de la última fila." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film joins literary adaptation, teacher-student drama, bourgeois domestic satire, voyeuristic suspense and metafiction about the power to write and revise another person's life." },
    { area: "industry_and_production_context", status: "source_verified", note: "Unifrance records Mandarin Cinéma, Mars Films and France 2 Cinéma, while Ozon describes a location strategy built around a new school and suburban Marne-la-Vallée environments." },
    { area: "reception_and_legacy", status: "source_verified", note: "The film won the Golden Shell and Best Screenplay at San Sebastián and became a durable teaching case for narration whose apparent realism is repeatedly rewritten from inside the drama." },
    { area: "screenplay", status: "source_verified", note: "Ozon transforms Mayorga's stage premise into weekly essay episodes whose final sentence, classroom critique and next domestic incursion continually revise motive, chronology and point of view." },
    { area: "directing", status: "source_verified", note: "Ozon directs reality and invention without announcing a stable boundary, allowing Germain, Claude and the audience to become competing authors and spectators of the same household." },
    { area: "performance", status: "source_verified", note: "Fabrice Luchini's increasingly invested teacher and Ernst Umhauer's unreadable student anchor a controlled ensemble in which narration, listening, observation and performed innocence remain mutually suspect." },
    { area: "production_design", status: "source_verified", note: "The school, Germain's apartment, Jeanne's gallery and Rapha's carefully legible suburban house form contrasting systems of education, taste and domestic access rather than neutral locations." },
    { area: "costume_makeup", status: "mapped", note: "School uniformity, bourgeois casual clothing and Jeanne's gallery-world styling support social distinctions, but the inspected sources do not document the complete costume and makeup workflow." },
    { area: "cinematography", status: "source_verified", note: "Jérôme Alméras's credited widescreen image uses controlled corridors, doorways, domestic sightlines and smooth transitions between narrated observation and apparently autonomous scenes." },
    { area: "lighting", status: "mapped", note: "Bright school and suburban interiors preserve seductive clarity while private rooms become increasingly unstable; a complete lighting and exposure account remains unavailable." },
    { area: "camera_format", status: "source_verified", note: "Unifrance records the 1.85 colour feature and Dolby presentation, supporting the controlled widescreen theatrical format used to organize observation and domestic geometry." },
    { area: "editing", status: "source_verified", note: "Laure Gardette's credited editing moves between reading, imagined enactment, correction and consequence so a sentence can open a scene and a later scene can expose the sentence as manipulation." },
    { area: "sound_design", status: "source_verified", note: "Claude's voice-over, classroom reading, domestic ambience and abrupt shifts between narrated and apparently present action make authorship audible without supplying a reliable reality level." },
    { area: "music", status: "source_verified", note: "Philippe Rombi's recurring score gives the writing process forward pressure and ironic seduction while avoiding a simple division between genuine danger and literary invention." },
    { area: "effects_animation", status: "not_central", note: "The film's destabilization is created through writing, performance, staging, voice-over and editing rather than effects spectacle or animation." },
    { area: "documentary_method", status: "mapped", note: "Real school and suburban locations lend observational specificity, but the film repeatedly exposes observation as authored selection rather than documentary evidence." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  theGameFilmHistoryProfile,
  bartonFinkFilmHistoryProfile,
  beingJohnMalkovichFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getInTheHouseFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === inTheHouseFilmHistoryProfile.scenarioId ? inTheHouseFilmHistoryProfile : undefined;
}

export function getInTheHouseFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === inTheHouseFilmHistoryProfile.scenarioId ? donors : undefined;
}
