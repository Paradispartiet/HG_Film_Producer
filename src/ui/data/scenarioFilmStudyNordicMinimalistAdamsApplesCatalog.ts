import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { kitchenStoriesFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistKitchenStories";
import { manWithoutPastFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistManWithoutPast";
import { songsFromSecondFloorFilmHistoryProfile } from "./scenarioFilmStudyNordicMinimalistSongsFromSecondFloor";

export const adamsApplesFilmHistoryProfile = {
  scenarioId: "scenario_adam_s_apples_2005",
  period: "Mid-2000s Danish theological black comedy joining Nordic deadpan, grotesque violence, rehabilitation satire and a modern Book of Job fable",
  traditions: ["Danish absurdist black comedy", "Nordic deadpan ensemble cinema", "Modern religious and moral fable"],
  before: "Danish cinema had combined Dogme-era performance directness, welfare-state institutions and bleak comedy, while Anders Thomas Jensen's Flickering Lights and The Green Butchers had already built closed communities of damaged men whose cruelty and loyalty coexist. Biblical Job adaptations and moral parables supplied another tradition in which suffering tests belief rather than simply advancing plot.",
  moment: "M&M Productions, DR, August Film and German partners turn a rural Danish vicarage into a compact rehabilitation and theological laboratory. Jensen writes Adam for Ulrich Thomsen and Ivan for Mads Mikkelsen, rehearses the ensemble repeatedly and leaves controlled room for improvisation. Sebastian Blenkov's colour 35 mm CinemaScope images, Mia Stensgaard and Anders Engelbrecht's church-house-apple-tree design, Jane Whittaker's costumes, Anders Villadsen's removal of irony in the edit, Nino Jacobsen and Morten Degnbol's restrained sound field, Jeppe Kaas's score, the recurring Bee Gees song and award-winning effects for birds, worms, lightning and bodily damage keep a modern Book of Job argument balanced between realism, farce and miracle.",
  after: "The film became a major Danish popular success, won the Robert awards for Danish feature, original screenplay and visual effects, received European Film Academy recognition, collected international audience awards and was selected as Denmark's Academy Award submission. Its combination of Mads Mikkelsen, Ulrich Thomsen, Nicolas Bro, Paprika Steen and Ali Kazim consolidated Jensen's recurring misfit ensemble and remains a durable model for Danish comedy that treats violence, faith, denial and care as parts of the same moral universe.",
  historyQuestion: "Which production system best explains how Adam's Apples turns a country vicarage, an apple tree, a neo-Nazi, a pathologically optimistic priest, repeated ensemble rehearsal, CinemaScope deadpan, restrained sound, pop music and escalating practical-digital disasters into a modern Book of Job black comedy?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "DFI, Cineuropa and Nordic Film & TV Fund place the film within early-2000s Danish cinema, Jensen's recurring dark-comedy ensemble and a national production culture able to combine popular reach with religious, social and grotesque material." },
    { area: "movement_and_tradition", status: "source_verified", note: "Cineuropa, DFI and TrustNordisk identify Jensen's darkly absurd humour, closed worlds of misfits and modern parable structure; the Book of Job framework connects Nordic deadpan social comedy to religious and moral fable." },
    { area: "industry_and_production_context", status: "source_verified", note: "DFI, filmportal.de and Dansk Film & TV document M&M Productions, DR, August Film, Danish-German participation, public and television backing, Nordisk Film distribution and the principal production departments." },
    { area: "reception_and_legacy", status: "source_verified", note: "Robert Prisen, the European Film Academy, Cineuropa and international festival records document Danish feature, original-screenplay and visual-effects wins, European recognition, audience awards, strong admissions and Denmark's Academy Award submission." },
    { area: "screenplay", status: "source_verified", note: "DFI credits Jensen's original screenplay; Filmcentralen and Cineuropa document the good-versus-evil argument, Book of Job structure, apple-pie goal and the deliberate collision of theological fable, rehabilitation comedy and violent farce." },
    { area: "directing", status: "source_verified", note: "Jensen describes writing for the intended cast, preparing every department, reading the screenplay repeatedly and rehearsing scenes several times on set so precise construction could coexist with improvisation and a relaxed ensemble atmosphere." },
    { area: "performance", status: "source_verified", note: "Jensen's interview details Ulrich Thomsen's moderated intensity and the cast-specific writing process; Cineuropa and DFI document Mads Mikkelsen, Nicolas Bro, Paprika Steen, Ali Kazim and Ole Thestrup as a tightly organized ensemble of opposed beliefs and damaged behaviours." },
    { area: "production_design", status: "source_verified", note: "DFI and filmportal.de credit Mia Stensgaard and Anders Engelbrecht; the vicarage, church, kitchen, apple tree, petrol-station robberies and medical spaces create one contained moral world whose apparently idyllic surfaces absorb increasingly grotesque events." },
    { area: "costume_makeup", status: "source_verified", note: "DFI and filmportal.de credit Jane Whittaker, Thomas Foldberg and Louise Hauberg Nielsen; tattoos, clerical clothing, workwear, injuries and medical transformations keep ideology, occupation and bodily damage immediately legible inside the deadpan frame." },
    { area: "cinematography", status: "source_verified", note: "DFI and filmportal.de credit Sebastian Blenkov and the camera and grip teams; colour CinemaScope holds the ensemble and rural architecture in controlled wide compositions while violence and miracles arrive without abandoning the film's calm visual grammar." },
    { area: "lighting", status: "mapped", note: "The image moves between pastoral exteriors, restrained church and house interiors, storms and medical spaces, but the current source set does not isolate a dedicated lighting workflow beyond the credited camera and electrical departments." },
    { area: "camera_format", status: "source_verified", note: "DFI and filmportal.de record 35 mm colour production, a 2.35:1 or CinemaScope presentation and Dolby SR release, supporting the film's wide ensemble staging and controlled contrast between picturesque landscape and grotesque action." },
    { area: "editing", status: "source_verified", note: "DFI and filmportal.de credit Anders Villadsen, while Jensen told Ekko during editing that he removed heavily ironic lines when they broke the emotional truth of a scene; the cut preserves escalation without dissolving the fable into sketch comedy." },
    { area: "sound_design", status: "mapped", note: "DFI and filmportal.de document Nino Jacobsen, Morten Degnbol and the broader sound team plus Dolby SR; dialogue, birds, storms, gunfire and domestic quiet are structurally important, but no complete production-to-final-mix account was found." },
    { area: "music", status: "source_verified", note: "DFI and filmportal.de credit Jeppe Kaas, while Cineuropa records the recurring Bee Gees song How Deep Is Your Love; score and pop refrain counterpoint cruelty and turn the ending's fragile reconciliation into a musical motif." },
    { area: "effects_animation", status: "source_verified", note: "DFI records visual-effects, special-effects, stunt and post-production teams, and Robert Prisen documents the visual-effects award to Lars K. Andersen, Hummer Højmark and Peter Hjorth for the tree attacks, lightning and bodily grotesque." },
    { area: "documentary_method", status: "not_central", note: "The film is built as a scripted, rehearsed, designed and effects-supported moral fable rather than through documentary observation, testimony or nonfiction evidence." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  songsFromSecondFloorFilmHistoryProfile,
  kitchenStoriesFilmHistoryProfile,
  manWithoutPastFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getAdamsApplesFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === adamsApplesFilmHistoryProfile.scenarioId
    ? adamsApplesFilmHistoryProfile
    : undefined;
}

export function getAdamsApplesFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === adamsApplesFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
