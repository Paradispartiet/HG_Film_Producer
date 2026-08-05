import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { battleOfAlgiersFilmHistoryProfile } from "./scenarioFilmStudyEuropeanModernistBattleOfAlgiers";
import { thePianistFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsPianist";
import { theImpossibleFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsTheImpossibleCatalog";

export const landOfMineFilmHistoryProfile = {
  scenarioId: "scenario_land_of_mine_2015",
  period: "Mid-2010s Danish-German postwar historical drama joining archival research, West Jutland locations, nonprofessional youth casting and safety-controlled mine effects",
  traditions: ["Postwar historical drama", "Restricted-viewpoint war aftermath film", "Location-based suspense", "Research-led moral drama"],
  before: "European war cinema had repeatedly reconstructed occupation, combat and resistance, while postwar films more rarely centred the defeated enemy's young conscripts or the dangerous labour imposed after surrender. Land of Mine moves the war film beyond battle and asks how national liberation can become revenge when one mined landscape is transferred to captive teenage bodies.",
  moment: "Martin Zandvliet researches the suppressed Danish mine-clearing history for several years and writes a restricted moral drama around Sergeant Carl Rasmussen and a group of young German prisoners. The Danish-German co-production works from Oksbøl and the West Jutland coast, keeps most action in daylight, contrasts beautiful summer dunes with bunkers and detonations, uses Camilla Hjelm Knudsen's vulnerable actor-following camera, casts many new German performers, drills the group in military and mine-clearing procedure, and coordinates practical pyrotechnics, special effects, stunt safety and digital assistance around close bodily suspense.",
  after: "The film's Toronto launch, European craft awards and Academy Award nomination established it as a major Scandinavian case in turning an obscured national history into internationally legible moral suspense. Its lasting production lesson is that historical scale can be concentrated through one beach, one repeated task and one changing relationship when research, landscape, performance, camera, sound and controlled effects all preserve the same ethical pressure.",
  historyQuestion: "Which production system explains how researched postwar history, a restricted sergeant-and-prisoners viewpoint, Oksbøl beaches, natural daylight, newly cast German youths, procedural mine work, restrained cutting, metallic close sound and controlled explosions become one moral drama about revenge giving way to recognition?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Danish Film Institute, European Film Academy and filmmaker accounts place the story in May 1945, when German prisoners were made to clear mines from Denmark's west coast after the occupation ended." },
    { area: "movement_and_tradition", status: "source_verified", note: "The production combines postwar historical drama, restricted-viewpoint war cinema, location suspense and a moral-reconciliation structure rather than staging conventional combat or victory." },
    { area: "industry_and_production_context", status: "source_verified", note: "Institutional records identify a Danish-German co-production led by producers Mikael Rieks and Malte Grunert, with principal department heads spanning both national industries and production based around Oksbøl and the west-coast locations." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy records the Foreign Language Film nomination, while the European Film Academy records awards for cinematography, costume and make-up and hair, confirming immediate international recognition of both film and craft system." },
    { area: "screenplay", status: "source_verified", note: "Zandvliet develops the screenplay through several years of historical research, then narrows the material to Carl's changing relation to a small group of boys so the larger national dilemma is carried by repeated work, hunger, fear, loss and recognition." },
    { area: "directing", status: "source_verified", note: "Zandvliet describes aiming for a humane journey from hate to forgiveness and keeps character presence ahead of plot display, coordinating an idyllic daylight coast with recurring danger and a camera that can remain close to vulnerable behaviour." },
    { area: "performance", status: "source_verified", note: "Casting director Simone Bär helped assemble boys from different German backgrounds; several were new actors, the twins had not acted before and Roland Møller was taking his first leading role, allowing rehearsal, group procedure and physical environment to shape natural behaviour." },
    { area: "production_design", status: "source_verified", note: "Gitte Malling's production design uses real dunes, beach, Oksbøl facilities, rough concrete bunkers, barracks, mine markers and sparse military objects so the landscape operates simultaneously as historical geography, labour grid and prison." },
    { area: "costume_makeup", status: "source_verified", note: "European Film Academy recognition supports Stefanie Bieker's costume and Barbara Kreuzer's make-up and hair work, which distinguish Danish authority, exhausted German uniforms, youth, hunger, dirt and injury without breaking the production's restrained realism." },
    { area: "cinematography", status: "source_verified", note: "Camilla Hjelm Knudsen and Zandvliet cite 1960s cinema and the Maysles brothers while designing a sensuous, vulnerable image that follows actors across the beach and holds beautiful wide coastal space against close procedural danger." },
    { area: "lighting", status: "source_verified", note: "Most of the film is staged in daylight; summer sun, pale sand, water and open sky preserve the deliberately beautiful surface against the characters' darkness and make exposure, weather and continuity part of the suspense system." },
    { area: "camera_format", status: "mapped", note: "The evidence verifies a handheld, actor-following widescreen visual strategy and period influence, but the complete camera, recording and lens package remains outside the present source set." },
    { area: "editing", status: "mapped", note: "Per Sandholt and Molly Malene Stensgaard are institutionally credited and the finished film builds tension through repeated probing, interruption and sudden consequence, but a detailed editor-level account of the cutting process remains pending." },
    { area: "sound_design", status: "source_verified", note: "Rasmus Winther Jensen's credited sound design makes sea, gulls, breathing, metal probe and detonator detail, waiting silence and abrupt explosions carry both mine procedure and bodily fear, while keeping the exposed beach acoustically present." },
    { area: "music", status: "mapped", note: "Sune Martin's score is institutionally credited and supports the film's moral progression, but a composer-level source explaining instrumentation, spotting and relation to the natural sound field has not yet been located." },
    { area: "effects_animation", status: "source_verified", note: "Official credits and production notes identify special-effects, pyrotechnic, stunt, visual-effects and CGI teams whose coordinated work allows mine handling and explosions to remain physically immediate while preserving performer and location safety." },
    { area: "documentary_method", status: "not_central", note: "Archival, cemetery, hospital and historical research are foundational to the screenplay, but the finished work is a cast, staged and effects-controlled historical fiction rather than a documentary-method production." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  thePianistFilmHistoryProfile,
  theImpossibleFilmHistoryProfile,
  battleOfAlgiersFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getLandOfMineFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === landOfMineFilmHistoryProfile.scenarioId ? landOfMineFilmHistoryProfile : undefined;
}

export function getLandOfMineFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === landOfMineFilmHistoryProfile.scenarioId ? donors : undefined;
}
