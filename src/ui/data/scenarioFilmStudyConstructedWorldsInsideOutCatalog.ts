import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { herFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsHerCatalog";
import { walleFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsWalleCatalog";
import { anomalisaFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureAnomalisa";

export const insideOutFilmHistoryProfile = {
  scenarioId: "scenario_inside_out_2015",
  period: "Mid-2010s Pixar computer animation joining emotion research, child-centred family drama and a fully constructed interior mind world",
  traditions: ["Pixar computer animation", "Subjective interior-world fantasy", "Child and family coming-of-age drama", "Emotion-science-informed storytelling"],
  before: "Animation had long externalized thought through dreams, symbols and personified impulses, while Pixar had built object, creature and robot worlds around strong behavioural rules. Inside Out instead makes a child's emotional transition the organizing production problem and turns competing theories of basic emotion into a legible ensemble, geography and dramatic system.",
  moment: "Pete Docter develops the film from observing his daughter's changing behaviour and consults psychologists Paul Ekman and Dacher Keltner while the story team narrows the cast to five emotions and makes Joy and Sadness the central journey. Pete Docter, Meg LeFauve and Josh Cooley shape the screenplay from a story by Docter and Ronnie del Carmen; Amy Poehler, Phyllis Smith and the voice ensemble feed a performance pipeline built from shape, timing, gesture and vocal contrast. Ralph Eggleston separates Riley's tactile real world from the saturated Mind World, Patrick Lin and Kim White establish distinct virtual camera and lighting grammars, Pixar engineers energy-particle bodies and geometry light for Joy, Kevin Nolting edits parallel outer and inner action, Ren Klyce and Shannon Mills give the mind a physical sound vocabulary, and Michael Giacchino scores internal thought rather than conventional spectacle.",
  after: "Its Cannes out-of-competition premiere, Academy Award for Animated Feature and original-screenplay nomination established the film as a major mid-2010s case in integrating psychology research, family melodrama, virtual cinematography, custom rendering, sound and music. Its historical importance lies less in a single metaphor than in the way every department makes sadness, memory and emotional mixture causally necessary to Riley's development.",
  historyQuestion: "Which production system explains how a daughter's transition, emotion research, a five-character ensemble, parallel real and mind worlds, virtual camera and lighting, particle bodies, editorial crosscutting, designed sound and an inward score become one child-centred account of emotional change?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Pixar, Cannes and Academy records place the film inside mid-2010s American studio animation, while filmmaker accounts connect its central problem to Pete Docter's observation of his daughter entering adolescence." },
    { area: "movement_and_tradition", status: "source_verified", note: "The production joins Pixar feature animation, personified inner-life fantasy, child and family melodrama and research-led emotion storytelling rather than treating the mind world as an isolated comic device." },
    { area: "industry_and_production_context", status: "source_verified", note: "Official and department sources identify the Pixar-Walt Disney production, director Pete Docter, co-director Ronnie del Carmen, producer Jonas Rivera and the story, design, camera, lighting, editorial, sound and music teams." },
    { area: "reception_and_legacy", status: "source_verified", note: "Cannes records the out-of-competition premiere and the Academy records the Animated Feature win plus the original-screenplay nomination, confirming immediate recognition across animation and writing." },
    { area: "screenplay", status: "source_verified", note: "Docter, Meg LeFauve and Josh Cooley build the screenplay from a story by Docter and del Carmen, restricting many researched emotions to five characters and organizing the narrative around Joy learning that Sadness has a social and developmental function." },
    { area: "directing", status: "source_verified", note: "Docter and del Carmen coordinate psychology consultation, Brain Trust iteration, voice direction, storyboard revision and parallel-world staging so abstract emotional rules remain tied to Riley's observable family crisis." },
    { area: "performance", status: "source_verified", note: "Amy Poehler, Phyllis Smith, Bill Hader, Lewis Black and Mindy Kaling establish distinct vocal rhythms that animators extend through silhouette, shape language, eye control, posture, gesture and constantly moving energy surfaces." },
    { area: "production_design", status: "source_verified", note: "Ralph Eggleston and the art department contrast Riley's materially familiar real world with Headquarters, memory storage, personality islands, Imagination Land, Dream Productions, Abstract Thought and the Memory Dump as a functional mental geography." },
    { area: "costume_makeup", status: "mapped", note: "Colour, silhouette, hair, surface and clothing distinguish the emotions and Riley's family, but conventional live-action costume and makeup departments are not the central identity pipeline in this computer-animated production." },
    { area: "cinematography", status: "source_verified", note: "Patrick Lin's camera-and-staging team treats layout as virtual cinematography, using lens choice, framing, blocking and movement to separate the more grounded Riley Camera from the heightened Mind Camera and to support emotional point of view." },
    { area: "lighting", status: "source_verified", note: "Kim White's lighting team differentiates the two worlds and turns Joy into an emitting source; Pixar's first production use of geometry light, volumetric glow and colour shaping lets her illuminate characters and spaces without losing facial definition." },
    { area: "camera_format", status: "mapped", note: "The film is created through a fully digital virtual-camera, layout, animation and rendering pipeline rather than a conventional photographic negative; lens and camera behaviour remain deliberate even though no physical capture format governs the image." },
    { area: "editing", status: "source_verified", note: "Kevin Nolting assembles repeated story reels and Brain Trust revisions, balances Riley's outward behaviour with simultaneous Headquarters action and makes memory loss, collapsing islands and delayed emotional recognition readable across parallel spaces." },
    { area: "sound_design", status: "source_verified", note: "Ren Klyce, Shannon Mills and the Skywalker team distinguish real-world rooms, memory movement, console activity, abstraction and subconscious spaces while keeping the emotions' voices clear enough to carry both character and mental function." },
    { area: "music", status: "source_verified", note: "Michael Giacchino designs an atmospheric inward score for internal thought and emotion, recorded with orchestra, organ and rhythm section and varied through jazz, horror and intimate thematic material for different regions of the mind." },
    { area: "effects_animation", status: "source_verified", note: "Pixar builds the emotions from procedural particles, energy volumes, iridescent hair, custom eye controls and specialized lighting; Joy's geometry-light rig and single-pass rendering integrate character animation, effects and illumination throughout the Mind World." },
    { area: "documentary_method", status: "not_central", note: "Observation of Docter's daughter and consultation with emotion researchers inform the fiction, but the finished work is a fully scripted and fabricated animated feature rather than a documentary-method production." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  walleFilmHistoryProfile,
  herFilmHistoryProfile,
  anomalisaFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getInsideOutFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === insideOutFilmHistoryProfile.scenarioId ? insideOutFilmHistoryProfile : undefined;
}

export function getInsideOutFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === insideOutFilmHistoryProfile.scenarioId ? donors : undefined;
}
