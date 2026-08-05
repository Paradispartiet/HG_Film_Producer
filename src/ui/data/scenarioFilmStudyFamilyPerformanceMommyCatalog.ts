import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { theRiderFilmHistoryProfile } from "./scenarioFilmStudyAmericanPrecarityTheRider";
import { homesickFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceHomesick";
import { mySkinnySisterFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceMySkinnySister";
import { scenesFromAMarriageFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceScenesMarriage";
import { dancerInTheDarkFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceDancerDark";
import { secretsAndLiesFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSecretsLies";
import { elephantFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingElephant";
import { theSouvenirFilmHistoryProfile } from "./scenarioFilmStudyIndependentDesireTheSouvenir";
import { stillWalkingFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryStillWalking";

export const mommyFilmHistoryProfile = {
  scenarioId: "scenario_mommy_2014",
  period: "Mid-2010s Québécois independent melodrama, square-frame portrait cinema and pop-music formalism",
  traditions: ["Québécois family melodrama", "Independent portrait cinema", "Music-video-derived audiovisual authorship"],
  before: "Family melodrama normally used a horizontal frame to distribute conflict across rooms and ensembles, while contemporary independent films often treated aspect ratio as a stable exhibition container and licensed pop songs as emotional accompaniment rather than as objects already belonging to the characters.",
  moment: "Xavier Dolan and producer Nancy Grant build a tightly scripted three-person household around Anne Dorval, Antoine Olivier Pilon and Suzanne Clément. Dolan and André Turpin transfer the 1:1 portrait experiment of the College Boy music video to colour 35 mm, keeping faces and bodies vertically concentrated while allowing two controlled expansions toward 1.85:1 when the characters imagine freedom. Colombe Raby's suburban Québec interiors, Dolan's costumes, his own editing, François Grenon's sound and a CD-mix logic of diegetic pop songs turn maternal labour, adolescent volatility and neighbourly care into alternating compression and release.",
  after: "The Cannes Jury Prize, major Québec and Canadian craft awards and strong domestic theatrical performance established the film as Dolan's international breakthrough. The later restoration of its intended presentation after an altered streaming version demonstrated that the 1:1 frame and its expansions were narratively essential rather than decorative formatting.",
  historyQuestion: "Which production system explains a 35 mm mother-son melodrama framed mainly as a perfect square, where scripted performance, suburban rooms and songs from a family CD mix compress the trio into portrait space before two carefully timed image expansions create temporary emotional release?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Cannes, Film Comment, REEL CANADA and the Cinémathèque québécoise place Mommy as Dolan's fifth feature, first main-competition premiere and a major mid-2010s Québécois international breakthrough." },
    { area: "movement_and_tradition", status: "source_verified", note: "Dolan connects the film to maternal melodrama, Gus Van Sant's formal freedom, Nan Goldin-like portrait photography and the square-frame experiment begun with the College Boy music video." },
    { area: "industry_and_production_context", status: "source_verified", note: "Metafilms records producers Nancy Grant and Xavier Dolan with associate producers Sylvain Corbeil and Lyse Lafontaine; Telefilm's Guichet d'or record documents the film's place in the publicly supported Canadian production and distribution system." },
    { area: "reception_and_legacy", status: "source_verified", note: "The film won the 2014 Cannes Jury Prize, major Canadian and Québec awards for film, direction, screenplay, acting, cinematography, editing and makeup, and Telefilm's award for the year's highest-grossing French-language Canadian feature." },
    { area: "screenplay", status: "source_verified", note: "Dolan writes a fictional near-future Canadian law around a widowed mother, her volatile son and their stammering neighbour, using economic precarity, home schooling, legal liability and institutional custody to tighten the three-person bond." },
    { area: "directing", status: "source_verified", note: "Cannes records a production in which dialogue, music and structure were extensively written in advance while Dolan used performance-led departures on set; interviews describe him imagining scenes and edits while writing." },
    { area: "performance", status: "source_verified", note: "Anne Dorval, Antoine Olivier Pilon and Suzanne Clément construct a physically volatile but mutually dependent trio; Cannes and contemporary interviews document Pilon's feature debut and the actors' controlled movement between scripted precision and on-set abandon." },
    { area: "production_design", status: "source_verified", note: "Metafilms credits Colombe Raby's art direction, with suburban house, street, karaoke bar, schoolwork table and institutional spaces repeatedly compressed into intimate portrait compositions." },
    { area: "costume_makeup", status: "source_verified", note: "Metafilms credits Dolan's costumes and Maïna Militza's makeup; Dolan described costume as the viewer's first visual contact, and the Cinémathèque records the Canadian Screen Award for makeup." },
    { area: "cinematography", status: "source_verified", note: "Dolan and André Turpin designed the 1:1 image for direct eye contact and photographic portraiture, shooting in colour 35 mm and concentrating bodies, gestures and faces at the centre of the frame." },
    { area: "lighting", status: "mapped", note: "The film's daylight streets, warm domestic colour and harder institutional interiors are materially legible, but the inspected source set does not isolate Turpin's complete lighting package or exposure strategy." },
    { area: "camera_format", status: "source_verified", note: "Metafilms and the Cinémathèque identify the original 35 mm presentation and 1:1 format; interviews document the deliberately planned square compositions and the two narratively controlled expansions toward conventional widescreen." },
    { area: "editing", status: "source_verified", note: "Cannes and Metafilms credit Dolan as editor, while interviews describe a screenplay conceived with music and editorial form already present; performance escalation, pop-song duration and aspect-ratio openings are timed as linked editorial events." },
    { area: "sound_design", status: "source_verified", note: "Cannes credits François Grenon, Sylvain Brassard and the re-recording team; dialogue overlap, domestic impact, street movement, karaoke and sudden quiet keep the square frame acoustically larger than its visual field." },
    { area: "music", status: "source_verified", note: "Dolan describes music as playing in the film rather than merely over it. The Die and Steve mix-CD logic lets Oasis, Céline Dion, Counting Crows and other familiar songs function as shared memory, performance and temporary release." },
    { area: "effects_animation", status: "mapped", note: "The masking and opening of the image are crucial postproduction interventions, but effects remain subordinate to framing, performance, editing and exhibition integrity and no complete effects workflow is documented in the inspected sources." },
    { area: "documentary_method", status: "not_central", note: "Québec speech, suburban locations and recognisable family behaviour give the fiction social immediacy, but the film is tightly scripted, formally predesigned and melodramatically organised rather than documentary-led." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  dancerInTheDarkFilmHistoryProfile,
  elephantFilmHistoryProfile,
  secretsAndLiesFilmHistoryProfile,
] as const;

const homesickDonors = [
  secretsAndLiesFilmHistoryProfile,
  theSouvenirFilmHistoryProfile,
  scenesFromAMarriageFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const mySkinnySisterDonors = [
  mommyFilmHistoryProfile,
  theRiderFilmHistoryProfile,
  stillWalkingFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getMommyFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  if (scenarioId === mySkinnySisterFilmHistoryProfile.scenarioId) return mySkinnySisterFilmHistoryProfile;
  if (scenarioId === homesickFilmHistoryProfile.scenarioId) return homesickFilmHistoryProfile;
  return scenarioId === mommyFilmHistoryProfile.scenarioId
    ? mommyFilmHistoryProfile
    : undefined;
}

export function getMommyFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  if (profile.scenarioId === mySkinnySisterFilmHistoryProfile.scenarioId) return mySkinnySisterDonors;
  if (profile.scenarioId === homesickFilmHistoryProfile.scenarioId) return homesickDonors;
  return profile.scenarioId === mommyFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
