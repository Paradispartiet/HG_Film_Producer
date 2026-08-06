import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { herFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsHerCatalog";
import { dogtoothFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPressureDogtooth";
import { anomalisaFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureAnomalisa";

export const lobsterFilmHistoryProfile = {
  scenarioId: "scenario_the_lobster_2015",
  period: "Mid-2010s European absurdist speculative romance, English-language Lanthimos transition and rule-bound social-pressure cinema",
  traditions: [
    "Absurdist social dystopia and Greek Weird Wave lineage",
    "Speculative romance and institutional black comedy",
    "Hotel chamber film and controlled-performance ensemble",
    "European co-production art cinema",
  ],
  before: "Dogtooth had already shown how Yorgos Lanthimos and Efthimis Filippou could build a complete authoritarian society from literal language, ritual and flattened behavior, while romantic science fiction usually externalized its future through technology and conventional emotional identification. The Lobster carries the earlier Greek work into a larger English-language European co-production and makes couplehood, singledom and bodily transformation competing institutional rules.",
  moment: "Element Pictures protects a director-led project through Irish, British, Greek, French and Dutch financing rather than building it around attached stars. A seven-week County Kerry location shoot turns the Parknasilla hotel, surrounding woods and Dublin city spaces into three opposed social regimes. Lanthimos and Filippou write matching traits, a 45-day deadline, narrated emotional distance and mirrored prohibitions; rehearsed performers deliver literal dialogue and physical rituals without psychological explanation. Jacqueline Abrahams and Sarah Blenkinsop use existing architecture, institutional rooms, uniforms, formal wear and restrained palettes to make conformity visible. Thimios Bakatakis photographs locations on ARRI Alexa with Panavision Primo and older high-speed lenses, mostly using natural light and controlled geometry; Yorgos Mavropsaridis holds dead time, abrupt violence and parallel rule systems in a measured edit; Johnnie Burn builds an exact, sparse sound world during Amsterdam postproduction; and pre-existing classical music supplies romantic intensity that the performances refuse to announce.",
  after: "The Cannes Jury Prize, European Film Awards for screenplay and costume, and Academy Award nomination for original screenplay established the film as Lanthimos's international English-language breakthrough. It became a major model for speculative cinema in which worldbuilding is carried by rules, locations, costume, behavior, framing, editing and sound rather than explanatory effects, and it opened the production path toward his later English-language collaborations.",
  historyQuestion: "Which production system explains how The Lobster turns a protected five-country co-production, seven-week Irish location shoot, rule-based screenplay, hotel-and-forest geography, controlled ensemble, restrained costume, Alexa natural-light photography, measured editing and sparse sound into an absurdist romance about compulsory intimacy?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "BFI, Screen Ireland and Cannes place the film at Lanthimos's transition from modest Greek productions to a director-led English-language European co-production shot in Ireland and premiered in the 2015 Cannes competition." },
    { area: "movement_and_tradition", status: "source_verified", note: "The production extends the absurdist rule systems and flattened behavior associated with Lanthimos's Greek work into speculative romance, institutional black comedy and hotel chamber cinema without treating the contested Greek Weird Wave label as a fixed manifesto." },
    { area: "industry_and_production_context", status: "source_verified", note: "BFI and Screen Ireland document the Irish-UK-Greek-French-Dutch co-production, its public and broadcaster financing, seven-week County Kerry shoot, UK edit, Dutch picture-and-sound post and French visual-effects work designed to preserve filmmaker control." },
    { area: "reception_and_legacy", status: "source_verified", note: "Cannes records the Jury Prize, the European Film Academy records screenplay and costume awards, and the Academy records the original-screenplay nomination, establishing the film's international breakthrough and craft recognition." },
    { area: "screenplay", status: "source_verified", note: "Lanthimos and Efthimis Filippou organize the world through a 45-day deadline, mandatory matching traits, animal transformation, narrated interiority and mirrored hotel-versus-Loner prohibitions, making social rules rather than technological exposition the dramatic engine." },
    { area: "directing", status: "source_verified", note: "Lanthimos describes constructing scenes through blocking, sound and precise behavior rather than explanatory psychology; locations, group demonstrations, hunts, dances and repeated rituals let power become visible through bodies in space." },
    { area: "performance", status: "source_verified", note: "Colin Farrell's altered body, withheld affect and literal speech anchor an ensemble whose ritualized movement and deliberately uninflected dialogue separate behavior from conventional emotional signalling; Ariane Labed also links dance training to the physical method." },
    { area: "production_design", status: "source_verified", note: "Jacqueline Abrahams uses the existing Parknasilla hotel, institutional function rooms, bedrooms, corridors, surrounding forest and urban locations as complete social zones whose architecture regulates pairing, punishment, escape and secrecy." },
    { area: "costume_makeup", status: "source_verified", note: "Sarah Blenkinsop's European Film Award-recognized costume system distinguishes hotel uniforms, formal couple display, Loner practicality and city normality through controlled silhouettes and repetition, while Farrell's weight, glasses and restrained grooming reshape a familiar star into the system's compliant subject." },
    { area: "cinematography", status: "source_verified", note: "Thimios Bakatakis uses frontal and lateral geometry, fixed observation, group tableaux, selective zooms and location depth to make bodies appear classified by rooms, paths and rules rather than guided by conventional romantic coverage." },
    { area: "lighting", status: "source_verified", note: "Bakatakis states that the film was photographed mostly with natural light and without studio construction, preserving an organic, colourful image while allowing hotel interiors, overcast forest and city exteriors to remain recognizably real beneath the absurd premise." },
    { area: "camera_format", status: "source_verified", note: "British Cinematographer documents the late decision to replace planned film capture with ARRI Alexa, Panavision Primo lenses and older high-speed Panavision optics, followed by Amsterdam grading that introduced a restrained film-like grain." },
    { area: "editing", status: "source_verified", note: "Yorgos Mavropsaridis and Lanthimos edited together for roughly two months; the finished structure holds pauses, trims explanations, lets rules echo across hotel and forest, and cuts sudden violence into otherwise measured social observation." },
    { area: "sound_design", status: "source_verified", note: "Johnnie Burn joined the production after Lanthimos heard Under the Skin and mixed The Lobster in Amsterdam; exact room tone, footsteps, breathing, offscreen violence, animals and deliberately exposed silence keep the absurd world materially present without technological spectacle." },
    { area: "music", status: "mapped", note: "Pre-existing classical and operatic recordings create emphatic romantic and tragic counterpoint against flattened speech and sparse sound, but the inspected sources do not provide a complete cue-by-cue music-supervision account." },
    { area: "effects_animation", status: "mapped", note: "The co-production record places visual-effects work in France, while animal transformation remains largely withheld or accepted as a rule rather than displayed as spectacle; a complete vendor-level breakdown of the selective effects work remains unavailable." },
    { area: "documentary_method", status: "not_central", note: "Real locations and recognizable courtship behavior ground the premise, but the film is a rigorously scripted absurdist construction rather than a documentary-derived or observational nonfiction production." },
  ],
} as const satisfies FilmHistoryProfile;

const lobsterDonors = [
  dogtoothFilmHistoryProfile,
  herFilmHistoryProfile,
  anomalisaFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getLobsterFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === lobsterFilmHistoryProfile.scenarioId
    ? lobsterFilmHistoryProfile
    : undefined;
}

export function getLobsterFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === lobsterFilmHistoryProfile.scenarioId
    ? lobsterDonors
    : undefined;
}
