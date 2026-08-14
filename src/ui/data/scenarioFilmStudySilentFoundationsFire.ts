import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const fire1901FilmHistoryProfile = {
  scenarioId: "scenario_fire_1901",
  period: "1901 British early narrative cinema joining a familiar fire-rescue subject to multi-shot chronological construction and connected screen space",
  traditions: [
    "Brighton and Hove early cinema",
    "Williamson Kinematograph Company fiction",
    "Early multi-shot action and matching movement",
  ],
  before: "Fire-rescue subjects were already familiar from magic-lantern sequences, illustrated culture and early actualities, while British filmmakers around Brighton and Hove were rapidly experimenting with how separate views could be organized into more complex screen stories.",
  moment: "James Williamson's Fire! stages a rescue across five tableaux: the alarm, the brigade mobilizing at identifiable Hove Fire Station, horse-drawn engines rushing to the scene, and the rescue shown through interior and exterior views at Ivy Lodge. The crucial production advance is not simply that the film has several shots, but that a policeman's movement carries the audience from one location into another and that the ordered views create one chronological action space with suspense built from what the audience knows before the fire crew arrives.",
  after: "Fire! became a major archival teaching case for the emergence of connected film space and multi-shot narrative, and later fire-rescue films including Life of an American Fireman developed related material in different ways. Its value in the Atlas is comparative: it shows British narrative construction already underway before later American continuity systems were standardized.",
  historyQuestion: "How can five separately staged views, real local fire-service geography and matching movement be designed so audiences understand one continuous rescue action before classical continuity grammar exists?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "BFI and Screen Archive South East identify Fire! as a 1901 James Williamson production made in Hove within the active early-film culture of the Brighton and Hove area." },
    { area: "movement_and_tradition", status: "source_verified", note: "BFI places the film among early British experiments in multi-shot storytelling and connected film space, while George Eastman Museum programs it within the development of narrative alongside later examples rather than as an isolated invention." },
    { area: "industry_and_production_context", status: "source_verified", note: "BFI Screenonline credits the Williamson Kinematograph Company, and Screen Archive South East identifies James Williamson as producer/director, grounding the case in Williamson's Hove-based production practice." },
    { area: "reception_and_legacy", status: "source_verified", note: "BFI Replay calls the film an important milestone in the development of film language, and George Eastman Museum uses it in a program explicitly tracing the development of narrative across multiple scenes." },
    { area: "screenplay", status: "source_verified", note: "BFI Screenonline describes five tableaux arranged chronologically: alarm, brigade mobilization, journey, interior rescue and exterior rescue; suspense comes from showing the audience the fire before the rescuers know its extent." },
    { area: "directing", status: "source_verified", note: "BFI and Screen Archive South East credit James Williamson as director and document a production organized around staged rescue action across distinct locations and viewpoints." },
    { area: "performance", status: "mapped", note: "Policeman, firemen and occupants perform clearly legible rescue actions, but the inspected institutional sources do not document casting or rehearsal practice in enough detail for source-verified performance workflow." },
    { area: "production_design", status: "source_verified", note: "BFI identifies Hove Fire Station and derelict Ivy Lodge as the key physical environments, making real local architecture and staged burning-room action part of the production system rather than generic backdrop." },
    { area: "costume_makeup", status: "mapped", note: "Fire-service uniforms and civilian clothing clarify roles, but the inspected sources do not document a dedicated costume, hair or makeup workflow." },
    { area: "cinematography", status: "source_verified", note: "BFI emphasizes the matching movement that carries the policeman from the burning house into the fire-station location, while the five-view construction uses fixed viewpoints to make action readable across changing spaces." },
    { area: "lighting", status: "mapped", note: "Interior fire and smoke and exterior daylight create strong visibility problems, but the inspected sources do not provide a sufficiently detailed lighting workflow for source-verified status." },
    { area: "camera_format", status: "source_verified", note: "BFI Screenonline records Fire! as 35mm, black and white, 281 feet and silent; Science Museum Group preserves 35mm nitrate positive frames associated with the film, giving a material cross-check on the surviving format." },
    { area: "editing", status: "source_verified", note: "BFI Screenonline describes multiple shots edited into a chronological sequence, and BFI Replay highlights matching action between separate locations as the film's key construction of connected screen space." },
    { area: "sound_design", status: "not_central", note: "The photographed 1901 production is a silent case; synchronized production sound and modern sound-design categories are not projected backward onto it." },
    { area: "music", status: "not_central", note: "Any later live or recorded accompaniment belongs to exhibition practice rather than a documented synchronized score created as part of the 1901 filming." },
    { area: "effects_animation", status: "mapped", note: "Smoke, flames and rescue danger are visibly staged production elements, but the inspected sources do not document an effects workflow in enough detail to mark the department source-verified." },
    { area: "documentary_method", status: "mapped", note: "The film uses identifiable Hove fire-service geography and a real local station, but the rescue is a staged fiction; the case therefore distinguishes location authenticity from actuality or documentary status." },
  ],
} as const satisfies FilmHistoryProfile;
