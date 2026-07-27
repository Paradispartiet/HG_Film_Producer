import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const walleFilmHistoryProfile = {
  scenarioId: "scenario_walle_2008",
  period: "Late-2000s Pixar computer animation joining silent-film performance, ecological dystopia and photographed-camera simulation",
  traditions: ["Pixar computer animation", "Silent comedy and visual storytelling", "Ecological science-fiction worldbuilding"],
  before: "Feature animation commonly relied on dense dialogue and elastic virtual cameras, while silent comedy, industrial science fiction and photographed live-action supplied alternative ways to organize character, scale and physical credibility.",
  moment: "Andrew Stanton and Pixar build the first act around visual behavior, robot sound and production design rather than conventional dialogue. Ralph Eggleston's color scripts separate the buried Earth from the sterile Axiom, the camera team studies 70 mm optics and physical Arriflex operation with live-action cinematographers, software reproduces lens breathing, depth of field and imperfect focus, and Ben Burtt constructs robot identity from designed vocal-mechanical sound. Thomas Newman's score and Peter Gabriel's song connect solitude, romance and planetary return.",
  after: "The Academy Award for animated feature and nominations across screenplay, music and sound confirmed that a computer-animated family film could sustain long dialogue-light passages, serious environmental worldbuilding and unusually photographic camera language without surrendering comic accessibility.",
  historyQuestion: "Which production system explains how WALL·E combines silent-comedy performance, ecological constructed worlds, simulated 70 mm camera behavior, robot sound design and orchestral-pop music inside a Pixar feature?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Pixar and Disney place the film inside early-twenty-first-century concern about waste, consumerism, automation and planetary abandonment." },
    { area: "movement_and_tradition", status: "source_verified", note: "Criterion and Pixar document the film's connection to silent comedy, photographed science fiction, musical romance and Pixar's computer-animation tradition." },
    { area: "industry_and_production_context", status: "source_verified", note: "Disney identifies Andrew Stanton, producer Jim Morris, co-producer Lindsey Collins, Ben Burtt and Thomas Newman within the Pixar-Walt Disney production." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy records the animated-feature win and nominations for screenplay, score, song and sound, while Criterion's edition preserves its production archive and continuing canonical status." },
    { area: "screenplay", status: "source_verified", note: "Stanton, Pete Docter and Jim Reardon organize recognition, romance and ecological consequence through visual objectives, repeated objects and minimal conventional dialogue." },
    { area: "directing", status: "source_verified", note: "Stanton treats posture, gaze, timing, spatial orientation and visual cause-and-effect as the primary direction system, especially during the Earth passages." },
    { area: "performance", status: "source_verified", note: "Robot personalities emerge through animated weight, timing, eye and head movement and Ben Burtt's processed vocal performances rather than human facial dialogue." },
    { area: "production_design", status: "source_verified", note: "Pixar documents Earth as a familiar but buried waste landscape, WALL·E's truck as a warm collected home and the Axiom as an ordered consumer environment." },
    { area: "costume_makeup", status: "mapped", note: "Robotic surfaces, human clothing and body design perform analogous identity functions, but conventional costume and makeup departments are not central to the animated pipeline." },
    { area: "cinematography", status: "source_verified", note: "The production studied physical cameras and lenses so the virtual camera would exhibit photographed scale, focus limits, breathing, tracking and composition rather than frictionless CG movement." },
    { area: "lighting", status: "source_verified", note: "Danielle Feinberg and the lighting team contrast harsh dusty exterior light, WALL·E's intimate practical-like truck glow, deep space and the Axiom's clean controlled illumination." },
    { area: "camera_format", status: "source_verified", note: "Animation World Network documents physical 70 mm and Arriflex camera tests used to model lens behavior and photographic imperfection inside the digital production." },
    { area: "editing", status: "source_verified", note: "Stephen Schaffer's editing maintains readable silent action, object-based continuity, comic pauses and a structural shift from lonely Earth observation to crowded spacecraft movement." },
    { area: "sound_design", status: "source_verified", note: "Ben Burtt combines electronic, mechanical and performed elements into a limited but expressive robot vocabulary, making sound carry character, scale and action comprehension." },
    { area: "music", status: "source_verified", note: "Thomas Newman's score, Hello Dolly material and Peter Gabriel's Down to Earth connect found human culture, romance, mobility and ecological renewal." },
    { area: "effects_animation", status: "source_verified", note: "Pixar's animation, simulation, rendering, virtual optics and environmental construction create dust, waste towers, spacecraft scale, weight and robot movement as one integrated world system." },
    { area: "documentary_method", status: "not_central", note: "Physical camera research informs the image, but the film is a fully constructed animated fiction rather than a documentary-method production." },
  ],
} as const satisfies FilmHistoryProfile;

const donorScenarioIds = [
  "scenario_2001_a_space_odyssey_1968",
  "scenario_star_wars_1977",
  "scenario_brazil_1985",
] as const;

export function getWalleFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === walleFilmHistoryProfile.scenarioId ? walleFilmHistoryProfile : undefined;
}

export function getWalleDonorScenarioIds(profile: FilmHistoryProfile): readonly string[] | undefined {
  return profile.scenarioId === walleFilmHistoryProfile.scenarioId ? donorScenarioIds : undefined;
}
