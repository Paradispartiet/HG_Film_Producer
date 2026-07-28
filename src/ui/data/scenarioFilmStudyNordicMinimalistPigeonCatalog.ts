import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { playtimeFilmHistoryProfile } from "./scenarioFilmStudyEuropean1960sSpacePlaytime";
import { kitchenStoriesFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistKitchenStories";
import { songsFromSecondFloorFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistSongsFromSecondFloor";

export const aPigeonSatFilmHistoryProfile = {
  scenarioId: "scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014",
  period: "Mid-2010s Swedish studio-tableau cinema completing Roy Andersson's Living Trilogy through fixed deep-focus images, historical anachronism and tragicomic reflection on human existence",
  traditions: ["Roy Andersson's Living Trilogy", "Nordic absurdist tableau cinema", "New Objectivity and painterly social allegory"],
  before: "Songs from the Second Floor and You, the Living had already established Andersson's return to feature filmmaking through Studio 24, static ensemble tableaux, pale human figures, social failure and comedy bordering on horror. Commercial work financed the independent studio and allowed the image system to be refined across decades before the trilogy's final chapter.",
  moment: "Roy Andersson Filmproduktion and Studio 24 coordinate a Sweden-Norway-France-Germany production around a chain of vignettes connected by two novelty salesmen, repeated phrases, songs and encounters with death. Hand-built hyperreal sets, trompe-l'oeil depth, carefully selected nonprofessional faces, pale wardrobe and makeup, István Borbás and Gergely Pálos's fixed digital deep-focus photography, Alexandra Strauss's scene ordering, Robert Hefter and the Studio 24 sound team's exact environmental construction, traditional and newly credited music, and Petter Cohen's visual effects allow ordinary rooms, King Charles XII and colonial horror to coexist inside one purified social world.",
  after: "The Golden Lion, European Comedy award, Swedish Oscar submission and wide international circulation confirmed the Living Trilogy as a major modern production model for cinema built from studio independence, constructed perspective, static duration, ensemble choreography and moral observation rather than conventional narrative momentum.",
  historyQuestion: "Which production system explains a final Living Trilogy chapter in which two novelty salesmen wander through fixed deep-focus studio tableaux, hand-built pale rooms, historical anachronisms, repeated phrases, songs, practical choreography, digital effects and exact sound, allowing banal comedy, death and organised cruelty to occupy the same apparently calm image?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Swedish Film Institute, European Film Academy and Roy Andersson's official record place the film as the final Living Trilogy chapter and document its Golden Lion, European Comedy recognition, Swedish Oscar submission and international circulation." },
    { area: "movement_and_tradition", status: "source_verified", note: "Andersson explicitly connects the film to Bruegel, Otto Dix, New Objectivity, abstraction and purified deep-focus images, while BFI places it inside his fixed-tableau tragicomic tradition and the completed trilogy." },
    { area: "industry_and_production_context", status: "source_verified", note: "Official, Unifrance, Nordic Fund and Swedish Film Institute records document Studio 24, Roy Andersson Filmproduktion, the Sweden-Norway-France-Germany coproduction, public support, presales and Andersson's independent studio-financing strategy." },
    { area: "reception_and_legacy", status: "source_verified", note: "La Biennale, European Film Academy, Swedish Film Institute and BFI document the Golden Lion, European Comedy award, Swedish Oscar selection and the film's consolidation of Andersson's authorial studio method." },
    { area: "screenplay", status: "source_verified", note: "Official and institutional credits identify Andersson as sole writer; Nordic funding records describe the vignette structure and two recurring salesmen, while BFI analyses repetitions, songs, debts, historical returns and death encounters as the film's linking logic." },
    { area: "directing", status: "source_verified", note: "Andersson describes moving from realism into abstraction, using deep focus and purification for universal images; his Studio 24 method builds each vignette slowly around a fixed viewpoint rather than covering conventional scenes." },
    { area: "performance", status: "source_verified", note: "The Guardian documents Andersson's preference for distinctive nonprofessional people found in ordinary life, while official credits and BFI show pale, restrained ensemble behavior coordinated across the tableau and around the recurring salesmen." },
    { area: "production_design", status: "source_verified", note: "The official team credits five set designers and Ulf Jonsson's trompe-l'oeil work; Studio 24 and Guardian accounts document hand-built hyperreal environments purified from real locations so room, perspective and social relation become one construction." },
    { area: "costume_makeup", status: "source_verified", note: "European Film Academy and the official record credit Julia Tegström's wardrobe, while Andersson explains the subdued clothing and equalised skin colours that turn individuals into timeless social figures without erasing their physical specificity." },
    { area: "cinematography", status: "source_verified", note: "Official and EFA records credit István Borbás and Gergely Pálos; Borbás describes the long development of soft light, wide-angle lenses, patterned floors, exact sets and deep-focus tableaux from sketches through the finished image." },
    { area: "lighting", status: "source_verified", note: "Borbás's cinematography interview traces the production's soft, flattened light and wide-angle depth to experiments refined across Andersson's commercials, while Guardian and official production material document complete studio control over every constructed environment." },
    { area: "camera_format", status: "mapped", note: "Nordic industry reporting identifies this as Andersson's first digitally shot feature, while IFFR, Unifrance and Biennale record DCP, colour, 1.85-class presentation and Dolby 5.1; the inspected sources do not isolate the complete camera, sensor, lens and recording package." },
    { area: "editing", status: "source_verified", note: "European Film Academy and official records credit Alexandra Strauss; the edit orders autonomous long-take tableaux through recurring salesmen, repeated language, songs, historical echoes and tonal escalation rather than cutting within scenes for conventional coverage." },
    { area: "sound_design", status: "source_verified", note: "The official record identifies Robert Hefter, Owe Svensson, Claes Lundberg and the Studio 24 recording and mix teams; BFI shows how phones, marching troops, songs, debts, animal sound and mechanical cruelty connect otherwise separate tableaux." },
    { area: "music", status: "mapped", note: "The official film page lists traditional music and EFA credits Gorm Sundberg and Hani Jazzar; recurring songs and military or barroom performance structure several scenes, but the current sources do not document the complete composition, recording and placement process." },
    { area: "effects_animation", status: "source_verified", note: "The official team credits Petter Cohen as VFX artist and trompe-l'oeil as a named craft; constructed depth, historical armies, the colonial copper apparatus and studio-built perspective integrate practical scenography with selective digital compositing." },
    { area: "documentary_method", status: "not_central", note: "Andersson draws faces and behavior from ordinary life, but he explicitly rejects real environments in favor of hand-built hyperreality, abstraction, controlled studio light, designed perspective and scripted allegorical tableaux." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  songsFromSecondFloorFilmHistoryProfile,
  playtimeFilmHistoryProfile,
  kitchenStoriesFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getAPigeonSatFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === aPigeonSatFilmHistoryProfile.scenarioId ? aPigeonSatFilmHistoryProfile : undefined;
}

export function getAPigeonSatFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === aPigeonSatFilmHistoryProfile.scenarioId ? donors : undefined;
}
