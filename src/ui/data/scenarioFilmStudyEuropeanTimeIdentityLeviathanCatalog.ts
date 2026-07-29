import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { theReturnFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityTheReturn";
import { theWhiteRibbonFilmHistoryProfile } from "./scenarioFilmStudyEuropeanTimeIdentityWhiteRibbon";
import { winterSleepFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceWinterSleep";

export const leviathanFilmHistoryProfile = {
  scenarioId: "scenario_leviathan_2014",
  period: "Mid-2010s Russian state-funded auteur cinema, Kola Peninsula property tragedy and church-state institutional critique",
  traditions: ["Post-Soviet Russian auteur cinema", "Biblical and Hobbesian political tragedy", "Landscape-based institutional realism"],
  before: "Zvyagintsev and cinematographer Mikhail Krichman had already developed a controlled 35 mm language of family authority, withheld information and morally charged landscape, while contemporary Russian cinema remained heavily dependent on state support and increasingly constrained by official cultural politics.",
  moment: "Non-Stop Production uses Russian public and private financing to transform an American property-dispute story, Michael Kohlhaas, Job and Hobbes into a Barents Sea tragedy. A purpose-built multigenerational house, road, utilities, garage and pier anchor the property conflict; a fabricated whale skeleton, one-take demolition and partly practical, partly digital replacement church turn land, state and religious power into physical production events. Zvyagintsev, Krichman and Andrey Ponkratov plan the compositions for months, photograph Teriberka and Moscow on 35 mm in soft northern light, and join restrained ensemble performance, procedural dialogue, Anna Mass's measured assembly, Andrey Dergachev's 7.1 sound and Philip Glass into an inexorable collapse.",
  after: "The Cannes screenplay prize, London Film Festival award, Golden Globe and Academy Award nomination made the film a defining international image of contemporary Russian institutional power. The hostile domestic response to a partly state-financed film also turned its production and circulation into evidence of the cultural conflict it depicts.",
  historyQuestion: "Which production system explains a 35 mm Barents Sea tragedy where a newly built family house is designed around its own one-take demolition, a fabricated whale skeleton and hybrid physical-digital church enlarge a property lawsuit into a struggle among family, municipality, state and religious authority?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Cannes, the official press kit and contemporary interviews place the 2014 film inside a state-supported Russian industry and a political climate in which its treatment of municipal, judicial and church power became nationally contested." },
    { area: "movement_and_tradition", status: "source_verified", note: "Zvyagintsev explicitly connects the film to Job, Hobbes, Michael Kohlhaas and the Marvin Heemeyer property dispute, extending post-Soviet auteur realism through biblical and political tragedy rather than conventional crime plotting." },
    { area: "industry_and_production_context", status: "source_verified", note: "The Cannes press kit records Non-Stop Production, producers Alexander Rodnyansky and Sergey Melkumov, and support from the Russian Ministry of Culture, Cinema Fund and RuArts Foundation; interviews document a 55-day location-and-Moscow production." },
    { area: "reception_and_legacy", status: "source_verified", note: "Cannes records the 2014 Best Screenplay award, while official awards and contemporary archival coverage document its major international prizes, Oscar nomination and politically charged Russian reception." },
    { area: "screenplay", status: "source_verified", note: "Zvyagintsev and Oleg Negin combine the Heemeyer dispute, Michael Kohlhaas, Job and Hobbes into a structure where legal seizure, friendship, marital fracture and religious rhetoric tighten around one inherited property." },
    { area: "directing", status: "source_verified", note: "Zvyagintsev describes a non-industrial collaboration with Krichman and Negin, including roughly half a year of compositional and lighting preparation and a seasonal schedule moving between Teriberka, Moscow interiors and winter return shots." },
    { area: "performance", status: "source_verified", note: "The Cannes record and interviews identify Alexey Serebryakov, Elena Lyadova, Vladimir Vdovichenkov and Roman Madyanov; restrained domestic behaviour, intoxication, official speech and withheld reaction keep the tragedy grounded in ordinary social conduct." },
    { area: "production_design", status: "source_verified", note: "Ponkratov documents a two-month full construction of Kolya's layered family house plus garage, greenhouse, boats, road, utility poles and pier, all positioned for landscape depth and the planned demolition shot." },
    { area: "costume_makeup", status: "mapped", note: "The official press kit credits Anna Bartuli and Galiya Ponomareva, and practical clothing and weathered bodies distinguish labour, municipal office, family and church, but the inspected sources do not isolate the department process." },
    { area: "cinematography", status: "source_verified", note: "Filmmaker Magazine documents Zvyagintsev and Mikhail Krichman's long visual preparation and commitment to composed 35 mm photography; the landscape, windows and institutional rooms preserve deep relations among people, property and authority." },
    { area: "lighting", status: "source_verified", note: "Ponkratov describes Krichman's rule of avoiding direct sun and waiting for soft half-dusk, fog or overcast Arctic light, with large windows designed to bind the house interior to the surrounding land." },
    { area: "camera_format", status: "source_verified", note: "The filmmaker interview confirms 35 mm capture and CineLab processing and telecine; the official press kit records colour Scope 2.35, DCP and 7.1 presentation." },
    { area: "editing", status: "mapped", note: "Anna Mass is officially credited and the finished structure uses patient legal readings, domestic ellipses, landscape returns and delayed consequences, but a dedicated Leviathan editing-process source has not been located." },
    { area: "sound_design", status: "source_verified", note: "The press kit credits Andrey Dergachev and 7.1 presentation; sea, wind, engines, courtroom recitation, demolition, domestic quiet and church speech enlarge institutional and natural pressure without constant score." },
    { area: "music", status: "source_verified", note: "The official credits name Philip Glass; recurring material from Akhnaten frames the coast, state and church through circular orchestral pressure rather than character-specific sentimental scoring." },
    { area: "effects_animation", status: "source_verified", note: "Ponkratov documents a purpose-built anchored whale skeleton, the one-take practical destruction of the house and a replacement church built physically to several metres before CGI completed its upper walls and roof." },
    { area: "documentary_method", status: "not_central", note: "Teriberka geography, real social details and researched institutional behaviour ground the film, but the production is a scripted, extensively planned, purpose-built and symbolically organized tragedy rather than documentary-led fiction." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  theReturnFilmHistoryProfile,
  theWhiteRibbonFilmHistoryProfile,
  winterSleepFilmHistoryProfile,
] as const;

export function getLeviathanFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === leviathanFilmHistoryProfile.scenarioId
    ? leviathanFilmHistoryProfile
    : undefined;
}

export function getLeviathanFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === leviathanFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
