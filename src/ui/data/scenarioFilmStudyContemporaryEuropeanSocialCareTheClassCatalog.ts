import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const theClassFilmHistoryProfile = {
  scenarioId: "scenario_the_class_2008",
  period: "Late-2000s French institutional realism built through a year-long classroom workshop",
  traditions: ["French social realism", "School and institutional cinema", "Collective nonprofessional performance"],
  before: "School films often organize education around exemplary teachers, decisive lessons or externally imposed social problems, while documentary observation and French social cinema provide less heroic models for studying institutional speech, authority and inequality.",
  moment: "Laurent Cantet, François Bégaudeau and Robin Campillo turn Bégaudeau's classroom memoir into a workshop-driven fiction. Teenagers and parents develop characters across months of weekly sessions, the real teacher-author performs a fictionalized version of himself, a classroom is physically extended for crew access, and three cameras record teacher, active pupil and unplanned reactions at once. Pierre Milon's image, Robin Campillo's editing and a three-person sound team preserve interruption, overlap and shifting authority instead of simplifying the room into conventional coverage.",
  after: "The Palme d'Or and Academy nomination established the film as a major reference for collective authorship, nonprofessional ensemble direction and institutional realism whose dramatic action is carried by language, procedure and competing interpretations rather than a rescue narrative.",
  historyQuestion: "Which production system explains how The Class turns a memoir, a school-year workshop, nonprofessional teenagers, three simultaneous cameras, long takes and overlapping classroom sound into an institutionally precise fiction?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Cannes, BFI and DFI place the film within contemporary French debates about school, language, cultural difference, authority and equality." },
    { area: "movement_and_tradition", status: "source_verified", note: "The production combines French social realism, school cinema and documentary-inflected collective performance while rejecting the inspirational-teacher formula." },
    { area: "industry_and_production_context", status: "source_verified", note: "Institutional records and Cantet's interviews document the French production, the long school-year workshop and the conversion of workshop participants into the cast." },
    { area: "reception_and_legacy", status: "source_verified", note: "Cannes records the 2008 Palme d'Or, the Academy records the foreign-language nomination, and BFI preserves the film as a landmark school ensemble." },
    { area: "screenplay", status: "source_verified", note: "Cantet, Bégaudeau and Campillo adapt the memoir through prepared situations that leave room for improvised language, contradiction and discoveries generated during rehearsal and takes." },
    { area: "directing", status: "source_verified", note: "Cantet rehearsed weekly for months, gave actors character knowledge rather than fixed line readings and used three cameras so exchanges and digressions could continue without reconstructing them." },
    { area: "performance", status: "source_verified", note: "Teenagers and parents develop fictionalized characters from their own social knowledge, while Bégaudeau performs the teacher and helps maintain authentic classroom provocation." },
    { area: "production_design", status: "source_verified", note: "The square classroom was rebuilt as a rectangle with a technical corridor that accommodated three cameras, boom operators, sound crew and direction while preserving one consistent axis." },
    { area: "costume_makeup", status: "mapped", note: "Everyday clothing and self-presentation help distinguish pupils and social positions, but the inspected sources do not provide a department-level wardrobe or makeup process account." },
    { area: "cinematography", status: "source_verified", note: "Pierre Milon's three-camera system keeps one camera on the teacher, one on the active pupil and one ready for reactions or accidental classroom detail." },
    { area: "lighting", status: "mapped", note: "The classroom remains evenly readable across long multi-camera takes, but a complete lighting package or fixture workflow is not documented in the inspected sources." },
    { area: "camera_format", status: "source_verified", note: "Institutional film records document the feature's photochemical production and Pierre Milon's principal cinematography within the controlled multi-camera classroom setup." },
    { area: "editing", status: "source_verified", note: "Robin Campillo shapes simultaneous camera material, interruptions and repeated workshop discoveries into a school-year progression without erasing conversational instability." },
    { area: "sound_design", status: "source_verified", note: "Jean-Pierre Laforce, Agnès Ravez and Olivier Mauvezin preserve overlapping speech, room tone, interruption and the difficulty of determining who controls the floor." },
    { area: "music", status: "mapped", note: "The film avoids a strongly foregrounded score and relies primarily on speech and institutional ambience; the inspected sources do not document a separate music-production system." },
    { area: "effects_animation", status: "not_central", note: "The production system depends on workshop performance, classroom architecture, multi-camera observation, editing and sound rather than effects work." },
    { area: "documentary_method", status: "source_verified", note: "Real social knowledge, nonprofessional participants, long preparation and simultaneous observation lend documentary authority to a deliberately structured fiction." },
  ],
} as const satisfies FilmHistoryProfile;

const donorScenarioIds = [
  "scenario_toni_erdmann_2016",
  "scenario_aftersun_2022",
  "scenario_the_room_next_door_2024",
] as const;

export function getTheClassFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === theClassFilmHistoryProfile.scenarioId ? theClassFilmHistoryProfile : undefined;
}

export function getTheClassDonorScenarioIds(profile: FilmHistoryProfile): readonly string[] | undefined {
  return profile.scenarioId === theClassFilmHistoryProfile.scenarioId ? donorScenarioIds : undefined;
}
