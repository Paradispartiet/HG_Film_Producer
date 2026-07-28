import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { brazilFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsBrazil";
import { thePianistFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsPianist";
import { walleFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsWalleCatalog";

export const hugoFilmHistoryProfile = {
  scenarioId: "scenario_hugo_2011",
  period: "Early-2010s prestige native-3D cinema reconstructing 1930s Paris and early film history",
  traditions: ["Native stereoscopic digital cinema", "Historical constructed-world spectacle", "Cinema-history and restoration film"],
  before: "Digital 3D had returned largely through animation and post-converted spectacle, while films about early cinema usually treated archival history separately from family adventure and large-scale studio worldbuilding.",
  moment: "Martin Scorsese adapts Brian Selznick through John Logan into a 1930s station mystery that gradually becomes a Georges Méliès restoration story. Dante Ferretti's station, clockworks and Paris streets, Sandy Powell's period costume, Robert Richardson's paired-camera native 3D photography, Demetri Portelli's stereography, Thelma Schoonmaker's spatial editing, Howard Shore's score and extensive visual effects coordinate machinery, depth, colour and cinema memory as one constructed world.",
  after: "Five Academy Awards for cinematography, art direction, sound editing, sound mixing and visual effects made the film a major craft benchmark for native 3D, while its Méliès narrative connected digital spectacle to preservation, hand-made illusion and film-historical recovery.",
  historyQuestion: "Which production system explains how Hugo uses native 3D, reconstructed Paris, clockwork machinery and visual effects to turn a children's mystery into a history of Méliès and cinema preservation?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The story places an orphan, automaton and station community in 1930s Paris while recovering Georges Méliès after war, bankruptcy, disappearance and rediscovery." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film joins family adventure, historical reconstruction, native stereoscopic spectacle, silent-cinema homage and film-preservation history." },
    { area: "industry_and_production_context", status: "source_verified", note: "GK Films, Infinitum Nihil and international partners mounted a large US-UK-French production around Scorsese's first family film and first native-3D feature." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy records five craft wins, establishing Hugo as a major native-3D, production-design, sound and visual-effects achievement." },
    { area: "screenplay", status: "source_verified", note: "John Logan adapts Brian Selznick's illustrated novel so Hugo's repair quest, station pursuit and automaton mystery reveal Méliès, lost films and restoration as the same dramatic mechanism." },
    { area: "directing", status: "source_verified", note: "Scorsese stages depth, movement, looking and mechanical cause-and-effect for stereoscopic comprehension while using film history as character motivation rather than decorative reference." },
    { area: "performance", status: "source_verified", note: "Asa Butterfield's contained physical observation, Ben Kingsley's wounded Méliès and a stylized station ensemble balance emotional realism with broad silent-comedy movement." },
    { area: "production_design", status: "source_verified", note: "Dante Ferretti builds the station, clock interiors, tracks, shops, apartments, studio memories and Paris extensions as connected mechanical and social geography." },
    { area: "costume_makeup", status: "source_verified", note: "Sandy Powell's period costumes and character silhouettes separate railway authority, street children, performers and Méliès's transformed public and private identities within the 3D colour design." },
    { area: "cinematography", status: "source_verified", note: "Robert Richardson photographs with paired digital cameras, deep staging, controlled movement, lens tests and colour references designed specifically for stereoscopic viewing." },
    { area: "lighting", status: "source_verified", note: "Richardson combines smoky station shafts, warm practical sources, blue night, reflective metal and Autochrome-inspired colour so depth remains legible without flattening the period atmosphere." },
    { area: "camera_format", status: "source_verified", note: "The feature was photographed in native 3D with two digital cameras rather than converted after photography, with live stereoscopic monitoring and adjustable interocular and convergence control." },
    { area: "editing", status: "source_verified", note: "Thelma Schoonmaker maintains spatial orientation through chases, clock mechanisms, station crossings, Méliès flashbacks and inserted early films while respecting the slower perceptual demands of 3D." },
    { area: "sound_design", status: "source_verified", note: "Award-winning sound editing and mixing make clocks, gears, trains, crowds, footsteps and projected machinery carry scale, danger and restored cinematic life throughout the station world." },
    { area: "music", status: "source_verified", note: "Howard Shore's score uses French colour, recurring character themes and mechanical motion to connect loneliness, community, adventure and Méliès's recovered creative identity." },
    { area: "effects_animation", status: "source_verified", note: "Miniatures, digital Paris, train danger, station extensions, snow, compositing, automaton work and reconstructed Méliès imagery integrate practical design with Oscar-winning visual effects." },
    { area: "documentary_method", status: "not_central", note: "Historical research, archival films and preservation history inform the fiction, but the production is a fully designed dramatic reconstruction rather than a documentary-method case." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  walleFilmHistoryProfile,
  brazilFilmHistoryProfile,
  thePianistFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getHugoFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === hugoFilmHistoryProfile.scenarioId ? hugoFilmHistoryProfile : undefined;
}

export function getHugoFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === hugoFilmHistoryProfile.scenarioId ? donors : undefined;
}
