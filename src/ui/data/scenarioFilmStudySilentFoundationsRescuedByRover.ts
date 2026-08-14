import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const rescuedByRoverFilmHistoryProfile = {
  scenarioId: "scenario_rescued_by_rover_1905",
  period: "1905 British narrative cinema joining a simple child-abduction rescue plot to repeated routes, stable geography and increasingly systematic shot-to-shot causal clarity",
  traditions: [
    "Hepworth Manufacturing Company fiction",
    "Early British continuity development",
    "Animal-led chase and rescue narrative",
  ],
  before: "British filmmakers had already experimented with matching action, multi-shot space and chase structures in films such as Fire!, while early fiction still used many scene-based and tableau-like solutions rather than one standardized continuity system.",
  moment: "Rescued by Rover turns an exceptionally simple rescue premise into a precise spatial machine. Rover repeatedly travels between the family's home and the kidnapped child, and the film reuses recognizable streets, a river crossing and the route to the hiding place so direction, destination and causality remain legible across many separate shots. Lewin Fitzhamon directs for Cecil Hepworth's company, with Blair the Hepworth family dog as the action-bearing performer. The film's success also became a production-history problem: demand exhausted early negatives/prints and the company remade the film, leaving multiple versions whose small differences matter when reconstructing the canonical case.",
  after: "The film became a standard reference for the growing clarity of British screen geography and chase construction. Its strongest lesson is cumulative rather than heroic: repeated routes, consistent screen direction and causal shot order help move early narrative toward more systematic continuity, but no single 1905 film can be treated as the invention of continuity editing.",
  historyQuestion: "How can repeated routes, stable landmarks, performance direction and shot order make a rescue journey immediately legible across separate views while preserving the historically specific production and version history of 1905?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "BFI and Victorian Cinema records place Rescued by Rover in 1905 British production under Cecil Hepworth's company and identify its importance within the rapid development of narrative form before classical continuity was standardized." },
    { area: "movement_and_tradition", status: "source_verified", note: "BFI Screenonline treats the film as a major early British example of clear multi-shot storytelling and spatial continuity, while the case explicitly places it inside a broader development rather than claiming a single invention." },
    { area: "industry_and_production_context", status: "source_verified", note: "Cecil Hepworth's Walton-on-Thames production company supplied the personnel, family performers, dog and local environments; institutional histories also record the exceptional demand that forced the company to produce replacement versions." },
    { area: "reception_and_legacy", status: "source_verified", note: "BFI and National Science and Media Museum histories describe the film's enormous popularity and lasting place in British film history, with repeated production becoming part of its material legacy." },
    { area: "screenplay", status: "source_verified", note: "The plot reduces causality to a strong chain — child taken, Rover discovers the hiding place, Rover returns for the father, both retrace the route, child rescued — allowing geography and action to carry narrative comprehension." },
    { area: "directing", status: "source_verified", note: "BFI and Victorian Cinema credit Lewin Fitzhamon as director within Cecil Hepworth's production operation; direction organizes repeated runs and returns so physical movement becomes the film's connective structure." },
    { area: "performance", status: "source_verified", note: "Blair, the Hepworth family dog, carries the route-finding and rescue action, while Hepworth family and company members supply human roles; the case treats animal movement as a core performance and blocking problem." },
    { area: "production_design", status: "mapped", note: "Home interiors, streets, river crossing and hiding-place environments create stable landmarks, but the inspected sources emphasize real/local production geography more strongly than a dedicated design-department workflow." },
    { area: "costume_makeup", status: "mapped", note: "Clothing differentiates family, nurse and kidnapper roles, but the inspected source pack does not document a dedicated costume, hair or makeup workflow." },
    { area: "cinematography", status: "source_verified", note: "Fixed viewpoints and repeated route positions make entrances, exits and destinations readable; the camera supports continuity by preserving spatial cues rather than relying on later coverage conventions." },
    { area: "lighting", status: "mapped", note: "Interior and exterior route photography required differing exposure conditions, but the inspected institutional sources do not document a lighting workflow strongly enough for source-verified status." },
    { area: "camera_format", status: "source_verified", note: "BFI preservation and player records identify the film as a surviving silent-era photochemical work, while version history requires care because replacement negatives and prints do not all preserve identical details." },
    { area: "editing", status: "source_verified", note: "The film's repeated routes and matched directional movement create unusually clear causal geography across separate shots. The case treats this as a major continuity-development example without claiming that Fitzhamon or Hepworth invented continuity editing." },
    { area: "sound_design", status: "not_central", note: "The photographed 1905 production is silent; synchronized production sound and modern sound-design categories are not projected backward onto it." },
    { area: "music", status: "not_central", note: "Later accompaniment belongs to exhibition and restoration practice rather than a documented synchronized score created as part of the 1905 production." },
    { area: "effects_animation", status: "not_central", note: "The production identity comes from live action, animal performance, route geography and editing rather than trick effects or animation." },
    { area: "documentary_method", status: "mapped", note: "Real local environments give the fiction geographic specificity, but the abduction and rescue are staged narrative action rather than actuality or documentary method." },
  ],
} as const satisfies FilmHistoryProfile;
