import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { fargoFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirFargo";
import { malteseFalconFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirMalteseFalcon";
import { trueRomanceFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirTrueRomance";

export const hatefulEightFilmHistoryProfile = {
  scenarioId: "scenario_the_hateful_eight_2015",
  period: "Mid-2010s American revisionist chamber western, post-Civil War racial noir and large-format roadshow revival",
  traditions: [
    "Revisionist and spaghetti western",
    "Locked-room mystery and chamber thriller",
    "Post-Civil War racial noir",
    "Ultra Panavision roadshow spectacle",
  ],
  before: "Classical westerns used monumental landscapes and moral types, locked-room mysteries compressed suspicion into enclosed ensembles, and Tarantino's earlier crime films built tension from long dialogue, unstable alliances and delayed eruptions of violence. By the digital 2010s, however, 65mm anamorphic production and full 70mm roadshow exhibition had nearly disappeared.",
  moment: "After a leaked first draft and a Film Independent staged reading, Quentin Tarantino rewrites the material into a chaptered post-Civil War chamber western. Stacey Sher and the production team build Minnie’s Haberdashery, its barn and outbuildings at Wilson Peak near Telluride, coordinate horses and cast for altitude, and run a weather-responsive schedule between snow exteriors, stagecoach work and interiors. Robert Richardson and Panavision restore vintage APO Panatar optics for System 65 cameras, exposing a 2.76:1 Ultra Panavision frame that turns eight bodies, doorways and shifting alliances into widescreen spatial evidence. Yohei Taneda, Rosemary Brandenburg and Courtney Hoffman make set and costume texture legible at that scale; Fred Raskin cuts on Avid while the production continuously conforms and screens 70mm; practical snow, squibs and prosthetic violence are selectively augmented; and Ennio Morricone supplies an ominous original score rather than conventional heroic western music.",
  after: "The film revived Ultra Panavision 70 capture and large-scale photochemical roadshow logistics for a contemporary release, including an overture, intermission and restored projector network. Robert Richardson and Jennifer Jason Leigh received Academy Award nominations, while Morricone won the Academy Award, BAFTA and Golden Globe for original score. Its legacy lies in using an epic image format not for open-landscape conquest but for racial history, theatrical enclosure, ensemble suspicion and forensic control of bodies within a single room.",
  historyQuestion: "Which production system explains how The Hateful Eight turns a rewritten staged-reading chamber western, weather-driven Colorado production, full-scale haberdashery, eight-character ensemble, restored Ultra Panavision 70 optics, practical gore, Avid-to-70mm post workflow and Morricone's ominous score into a post-Civil War racial mystery?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Film Independent documents the leaked unmade script and 2014 staged reading; AFI and the production record place the finished story in a post-Civil War Wyoming western and its 2015 roadshow release." },
    { area: "movement_and_tradition", status: "source_verified", note: "The screenplay and finished production combine revisionist western, spaghetti-western music, locked-room mystery, chamber theatre and Tarantino's dialogue-led crime tradition rather than following a single classical western model." },
    { area: "industry_and_production_context", status: "source_verified", note: "AFI identifies FilmColony, Shiny Penny and The Weinstein Company; Stacey Sher documents the Telluride logistics, photochemical partners, 70mm conforming and projector-restoration campaign required to mount the film as a legacy-format event." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy records three nominations and Morricone's score win; BAFTA and the Golden Globes also recognised the score, while Panavision and Kodak document the production's role in reviving Ultra Panavision capture and 70mm exhibition." },
    { area: "screenplay", status: "source_verified", note: "Producer Stacey Sher and Film Independent trace the leaked first draft, Tarantino's additional drafts and the staged reading that brought the material together; the final screenplay uses chapters, withheld identities, poisoned coffee and repeated testimony as a locked-room evidence system." },
    { area: "directing", status: "source_verified", note: "Tarantino directs for ensemble geography and duration: weather determines the shooting mode, actors remain fully off book, long takes preserve verbal pressure, and the 2.76:1 frame lets spectators inspect simultaneous reactions rather than relying only on cutting." },
    { area: "performance", status: "source_verified", note: "The staged-reading origin and location schedule require a rehearsed ensemble able to move between widely separated chapters at short notice; Jackson, Russell, Leigh, Goggins and the supporting cast construct identity through speech, posture, listening and strategic deception." },
    { area: "production_design", status: "source_verified", note: "Sher documents Yohei Taneda's full construction of Minnie’s, the barn and outbuildings at Wilson Peak before the ground froze, plus the finished Los Angeles interior that allowed production to pivot away from unusable weather while preserving one coherent environment." },
    { area: "costume_makeup", status: "source_verified", note: "Courtney Hoffman's character-specific coats, cavalry references, fur, ageing and duplicate garments make rank, region, performance and hidden affiliation readable across the extreme widescreen frame; hair, facial injury and progressive blood damage support the chamber's changing power map." },
    { area: "cinematography", status: "source_verified", note: "Panavision and ASC identify Robert Richardson's use of System 65 cameras and restored vintage APO Panatar anamorphic optics; the wide negative holds landscapes, stagecoach interiors and multi-character cabin compositions with unusually detailed lateral staging." },
    { area: "lighting", status: "mapped", note: "Richardson's bright snow exteriors, controlled window direction, fire and practical-lamp warmth, ceiling ambience and selective hard emphasis clearly separate the storm from the cabin, but the inspected sources do not provide a complete fixture-by-fixture lighting account." },
    { area: "camera_format", status: "source_verified", note: "ASC and Panavision document 65mm acquisition in Ultra Panavision 70 with restored 1.25x APO Panatar optics and approximately 2.76:1 exhibition; Panavision also engineered an enlarged magazine for a 15–16 minute 65mm take." },
    { area: "editing", status: "source_verified", note: "Sher documents an Avid edit led by Fred Raskin, continuous photochemical conforming and weekly 70mm DGA screenings; the cut preserves long performance passages, chapter divisions, spatial clues and abrupt changes from verbal delay to graphic violence." },
    { area: "sound_design", status: "mapped", note: "AFI credits Mark Ulano, Wylie Stateman, Harry Cohen and the re-recording team; wind, horses, boots, the repeatedly damaged door, gunfire and room silence form a precise pressure system, but a complete Hateful Eight-specific recording and mix interview remains unavailable." },
    { area: "music", status: "source_verified", note: "AFI, the Academy, BAFTA and Golden Globes identify Ennio Morricone's original score and its awards; low-register orchestral menace reframes the western as horror and suspicion, supplemented by selected songs and material associated with The Thing." },
    { area: "effects_animation", status: "source_verified", note: "The postproduction account describes practical snow outside the windows, practical squibs and physical blood effects, with John Dykstra and Method Studios augmenting storm and night material rather than replacing the tactile cabin production." },
    { area: "documentary_method", status: "not_central", note: "The film is a stylised fictional chamber western rather than a documentary reconstruction; historical conflict and racial language are organised through genre archetypes, theatrical testimony and deliberately unstable narration." },
  ],
} as const satisfies FilmHistoryProfile;

const hatefulEightDonors = [
  fargoFilmHistoryProfile,
  malteseFalconFilmHistoryProfile,
  trueRomanceFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getHatefulEightFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === hatefulEightFilmHistoryProfile.scenarioId
    ? hatefulEightFilmHistoryProfile
    : undefined;
}

export function getHatefulEightFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === hatefulEightFilmHistoryProfile.scenarioId
    ? hatefulEightDonors
    : undefined;
}
