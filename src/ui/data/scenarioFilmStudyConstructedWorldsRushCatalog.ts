import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { theImpossibleFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsTheImpossibleCatalog";
import { motorcycleDiariesFilmHistoryProfile } from "./scenarioFilmStudyFestivalJourneyMotorcycleDiaries";
import { wrestlerFilmHistoryProfile } from "./scenarioFilmStudyIntimateFestivalWrestler";

export const rushFilmHistoryProfile = {
  scenarioId: "scenario_rush_2013",
  period: "Early-2010s British-German-American historical sports cinema reconstructing the 1976 Formula One season through a two-driver rivalry and practical-digital racing craft",
  traditions: ["Formula One and motor-racing cinema", "Two-character biographical drama", "Practical-digital historical reconstruction"],
  before: "Motor-racing films often centred one heroic driver and treated the track as spectacle, while conventional sports biographies compressed one life into rise, defeat and triumph. Peter Morgan instead approached James Hunt and Niki Lauda as opposed but mutually defining systems, using the 1976 championship to test risk, discipline, performance and survival from two viewpoints.",
  moment: "A Working Title, Imagine, Cross Creek and Revolution production mounts Morgan's independently initiated screenplay as a United Kingdom-Germany-United States period reconstruction. Ron Howard, Chris Hemsworth and Daniel Brühl build rivalry through contrasting bodily and verbal behaviour; real historic cars, owner-drivers and Formula 3 replicas supply practical speed; Mark Digby turns a limited group of British and European circuits into many international Grands Prix; Julian Day differentiates Hunt's display from Lauda's precision; Anthony Dod Mantle combines Alexa, C300 and miniature cameras with 1960s lenses and multi-camera race coverage; Dan Hanley and Mike Hill shape a vast image archive into character-led races; recorded historic engines, Hans Zimmer's score and roughly seven hundred integrated effects shots complete the 1976 world without separating drama from machinery.",
  after: "Rush won the 2014 BAFTA for editing and received BAFTA nominations for Outstanding British Film, sound and Daniel Brühl's supporting performance, alongside Brühl's Golden Globe nomination. Its combination of real-car access, compact independent-scale financing, digital camera multiplicity, period design, exact engine identities and restrained visual-effects extension became a durable modern reference for racing films that must satisfy both motorsport knowledge and character drama.",
  historyQuestion: "Which production system best explains how Rush turns the 1976 Hunt-Lauda championship into a two-character historical drama by coordinating real and replica cars, substitute circuits, period paddocks, digital cameras with vintage lenses, huge multi-camera coverage, performance-led editing, exact engine recordings, score and invisible effects?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Formula 1's official retrospective and contemporary production accounts establish the 1976 Hunt-Lauda championship, Lauda's Nürburgring crash and return, and the Fuji title decision as the film's historical frame while also identifying compressed and dramatized incidents." },
    { area: "movement_and_tradition", status: "source_verified", note: "BFI places the film within British sports cinema and emphasizes that Morgan's real dramatic race is between opposed personalities; AFI and production interviews connect it to motor-racing spectacle, historical biography and the two-hander tradition." },
    { area: "industry_and_production_context", status: "source_verified", note: "AFI and DFI record Working Title, Imagine, Cross Creek and Revolution participation and the United Kingdom-Germany-United States structure; Howard describes it as an independently financed British production whose tax-credit geography shaped the shoot." },
    { area: "reception_and_legacy", status: "source_verified", note: "BAFTA records the editing win and nominations for Outstanding British Film, sound and Daniel Brühl; the Golden Globes record Brühl's supporting-actor nomination, while Formula 1's later retrospective documents the film's continuing motorsport afterlife." },
    { area: "screenplay", status: "source_verified", note: "Peter Morgan describes writing from his own British-Austrian divided perspective and structuring Hunt and Lauda as contrasting halves rather than building a single-driver triumph story; the rivalry remains the dramatic engine even when racing chronology is compressed." },
    { area: "directing", status: "source_verified", note: "Howard describes selecting Dod Mantle for psychological and environmental responsiveness, balancing historical enthusiasts with general audiences and coordinating character intimacy, dangerous practical driving, second-unit racing and extensive postproduction." },
    { area: "performance", status: "source_verified", note: "Formula 1 and contemporary interviews document Brühl's direct access to Niki Lauda and the contrasting preparation of Brühl and Hemsworth; performance distinguishes calculation, fear, public display, injury, recovery and mutual recognition rather than reducing the drivers to fixed types." },
    { area: "production_design", status: "source_verified", note: "Mark Digby's production-note account explains how a limited set of circuits had to represent twelve to fifteen races per year, with changing paddocks, lorries, caravans, ambulances, signage and team material creating distinct countries and Grands Prix." },
    { area: "costume_makeup", status: "source_verified", note: "Julian Day's department account documents 1970s research, team overalls, race suits and contrasting personal wardrobes; Hunt's looser glamour and Lauda's controlled tailoring extend the rivalry into clothing, while burn makeup carries Lauda's bodily continuity." },
    { area: "cinematography", status: "source_verified", note: "Anthony Dod Mantle used extensive archive viewing, multiple race cameras, unusual mounting positions and imperfect observational framing to make speed, mechanical detail and crash uncertainty feel discovered rather than conventionally covered." },
    { area: "lighting", status: "mapped", note: "Dod Mantle's digital latitude, vintage lenses, real circuits, vehicle-mounted units and rapid environmental response support a textured period image, but the inspected sources do not provide a complete scene-by-scene lighting and exposure workflow." },
    { area: "camera_format", status: "source_verified", note: "Dod Mantle identifies ARRI Alexa Plus, Alexa Studio and Canon C300 cameras, supplemented by small mounted units and 1960s lenses; the mixed digital system provided modern latitude while retaining flare, softness and optical aberration associated with the period." },
    { area: "editing", status: "source_verified", note: "Howard and BAFTA describe the unusually large footage volume and the need for Dan Hanley and Mike Hill to weave nuanced performances with race geography, mechanical inserts, viewpoint, danger and championship clarity; their work won the BAFTA for editing." },
    { area: "sound_design", status: "source_verified", note: "Howard documents Danny Hambrook recording historic Formula One cars and building distinguishable engine libraries because knowledgeable audiences could identify different machines; the final design joins RPM, gear change, wind, impact, breath, crowd and medical quiet." },
    { area: "music", status: "source_verified", note: "DFI and AFI credit Hans Zimmer, while the composer's official release record identifies the score team, ambient design, guitars, percussion, cello and music editorial system that joins propulsion to rivalry, injury and reflection." },
    { area: "effects_animation", status: "source_verified", note: "Double Negative's Jody Johnson documents the planned division between live cars and CG, with track extensions, crowds, replacement cars, crashes, rig removal and dangerous moments integrated across roughly seven hundred effects shots rather than replacing practical racing wholesale." },
    { area: "documentary_method", status: "source_verified", note: "Archive race footage shaped the camera palette; real historic cars, collectors, owner-drivers and former racer Jochen Mass supplied material expertise; Lauda's testimony informed Brühl; and opportunistic unmanned and multi-camera coverage borrowed documentary discovery inside a staged historical fiction." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  theImpossibleFilmHistoryProfile,
  motorcycleDiariesFilmHistoryProfile,
  wrestlerFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getRushFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === rushFilmHistoryProfile.scenarioId ? rushFilmHistoryProfile : undefined;
}

export function getRushFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === rushFilmHistoryProfile.scenarioId ? donors : undefined;
}
