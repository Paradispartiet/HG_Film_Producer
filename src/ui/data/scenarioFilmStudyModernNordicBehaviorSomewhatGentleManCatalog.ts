import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { anotherRoundFilmHistoryProfile } from "./scenarioFilmStudyModernNordicBehaviorAnotherRound";
import { forceMajeureFilmHistoryProfile } from "./scenarioFilmStudyModernNordicBehaviorForceMajeure";
import { worstPersonFilmHistoryProfile } from "./scenarioFilmStudyModernNordicBehaviorWorstPerson";

export const aSomewhatGentleManFilmHistoryProfile = {
  scenarioId: "scenario_a_somewhat_gentle_man_2010",
  period: "Early-2010s Norwegian deadpan crime comedy made through compact Nordic ensemble production",
  traditions: ["Norwegian black comedy", "Nordic behavioural cinema", "Post-prison reintegration and low-level crime film"],
  before: "Nordic crime films and social comedies had often separated violence from everyday embarrassment, while Hans Petter Moland's earlier work already placed damaged men inside harsh physical and moral surroundings.",
  moment: "Kim Fupz Aakeson's Danish-written screenplay is adapted into Norwegian speech through collaborative revision, a short roughly two-million-euro production concentrated within a small Oslo area and an old factory, and an experienced Scandinavian ensemble led by Stellan Skarsgård. Philip Øgaard's cold, low-sky images, Gert Wibe's worn interiors, Jens Christian Fodstad's pause-led editing and Halfdan E's dry musical counterpoint make attempted reintegration, sex, revenge and ordinary labour part of one deadpan behavioural system.",
  after: "Its Berlinale competition premiere and durable international circulation established the film as a clear example of how modest Norwegian production, Nordic star collaboration and exact tonal control can turn an ex-con revenge premise into an ageing, dignity and social-belonging comedy.",
  historyQuestion: "Which production system best explains how A Somewhat Gentle Man turns a revenge premise into a low-budget Oslo comedy about ageing, work, intimacy and reluctant reintegration?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Institutional and filmmaker sources place the film in a contemporary Norwegian setting of prison release, marginal labour, ageing masculinity and low-level criminal obligation." },
    { area: "movement_and_tradition", status: "source_verified", note: "Moland combines Norwegian black comedy, Nordic behavioural observation and crime-film expectation without adopting conventional thriller acceleration." },
    { area: "industry_and_production_context", status: "source_verified", note: "The Paradox production used a short schedule, a budget of roughly two million euros, a compact Oslo location radius and an established Nordic cast and crew." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Berlinale competition launch and continuing international attention support its place as a representative modern Norwegian deadpan crime comedy." },
    { area: "screenplay", status: "source_verified", note: "Kim Fupz Aakeson's screenplay was collaboratively revised with Moland so Danish phrasing, Norwegian dialogue, location reality and actor discoveries could sharpen its exact comic tone." },
    { area: "directing", status: "source_verified", note: "Moland protects pauses, awkward bodily proximity and contradictory behaviour, allowing revenge, domestic routine and social embarrassment to occupy the same understated register." },
    { area: "performance", status: "source_verified", note: "Stellan Skarsgård and the ensemble build comedy from restraint, physical discomfort, ageing bodies and characters attempting to preserve small remnants of dignity." },
    { area: "production_design", status: "source_verified", note: "Gert Wibe's worn rooms, workshop and factory environments make Ulrik's narrow post-prison options materially visible rather than generically bleak." },
    { area: "costume_makeup", status: "mapped", note: "Practical, unglamorous clothing and ageing presentation support social position and bodily comedy, while dedicated department-level sourcing remains limited." },
    { area: "cinematography", status: "source_verified", note: "Philip Øgaard's cold colours, low skies, static observation and practical Oslo spaces keep the film visually unsentimental while preserving comic reaction and ensemble geometry." },
    { area: "lighting", status: "source_verified", note: "Artificial interior light and overcast exteriors maintain a compressed winter world before the brighter final movement opens the film's emotional register." },
    { area: "camera_format", status: "source_verified", note: "Institutional production records and the photographed location strategy establish a conventional live-action feature system shaped around compact Nordic production rather than effects-led spectacle." },
    { area: "editing", status: "source_verified", note: "Jens Christian Fodstad lets pauses, delayed reactions, entrances and failed confrontations carry comic timing while the revenge line repeatedly loses priority to ordinary life." },
    { area: "sound_design", status: "source_verified", note: "Rooms, vehicles, work and uncomfortable silence retain practical weight, preventing the crime plot from becoming a slick genre abstraction." },
    { area: "music", status: "source_verified", note: "Halfdan E's mix of dry jazz, mambo and popular inflection counters the grey environments and helps preserve the film's unstable balance between threat and comedy." },
    { area: "effects_animation", status: "not_central", note: "The production system depends on ensemble behaviour, practical locations, image tone, editing and sound rather than effects construction." },
    { area: "documentary_method", status: "mapped", note: "Concentrated Oslo locations and ordinary material detail create social observation, but the film remains a tightly scripted and performed fiction." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  forceMajeureFilmHistoryProfile,
  anotherRoundFilmHistoryProfile,
  worstPersonFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getASomewhatGentleManFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === aSomewhatGentleManFilmHistoryProfile.scenarioId
    ? aSomewhatGentleManFilmHistoryProfile
    : undefined;
}

export function getASomewhatGentleManFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === aSomewhatGentleManFilmHistoryProfile.scenarioId ? donors : undefined;
}
