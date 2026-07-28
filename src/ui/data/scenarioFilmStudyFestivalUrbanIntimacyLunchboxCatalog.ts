import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { beforeSunsetFilmHistoryProfile } from "./scenarioFilmStudyFestivalUrbanIntimacyBeforeSunset";
import { viveLAmourFilmHistoryProfile } from "./scenarioFilmStudyEastAsianViveLAmour";
import { amelieFilmHistoryProfile } from "./scenarioFilmStudyWhimsicalUrbanRomanceAmelie";

export const theLunchboxFilmHistoryProfile = {
  scenarioId: "scenario_the_lunchbox_2013",
  period: "Early-2010s Indian international independent cinema turning Mumbai food logistics, handwritten correspondence and everyday urban separation into a restrained adult romance",
  traditions: ["Indian independent urban cinema", "Epistolary romance", "Documentary-informed location filmmaking"],
  before: "Indian parallel and independent cinema had long used ordinary work, domestic routine and metropolitan change as dramatic material, while epistolary romances and films of urban loneliness offered ways to connect people who could not speak freely inside their existing lives. Ritesh Batra's initial plan to document Mumbai's dabbawalas supplied a real logistical system through which fiction could join these traditions.",
  moment: "Sikhya Entertainment, DAR Motion Pictures, NFDC, Rohfilm and ASAP Films organise an India-France-Germany co-production around one misdelivered lunchbox. Batra's screenplay keeps Ila and Saajan physically apart while food, notes, office routines, trains and the dabbawala network carry their intimacy across Mumbai. Irrfan Khan, Nimrat Kaur and Nawazuddin Siddiqui anchor a restrained ensemble; Shruti Gupte's kitchens, offices and homes preserve class and domestic pressure; Michael Simmonds shoots almost entirely on real streets, trains and interiors; John Lyons builds the relationship through parallel routine and delayed reading; Michael Kaczmarek shapes 26 hours of newly recorded Mumbai sound during a three-month Berlin process; and Max Richter's sparse music leaves food preparation, delivery, printers, voices and city movement audible.",
  after: "The film's 2013 Critics' Week world premiere and Grand Rail d'Or were followed by Sony Pictures Classics acquisition and unusually broad international circulation. Its success established Batra's feature debut as a major contemporary case in how modest resources, documentary research, transnational postproduction and exact everyday logistics can support a romance whose central couple share almost no physical space.",
  historyQuestion: "Which production system explains a Mumbai romance whose two central characters remain apart while a real lunch-delivery network, handwritten notes, food preparation, office routine, trains, restrained performance, parallel editing and detailed city sound gradually create intimacy?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "BFI and contemporary filmmaker interviews place the feature within the early-2010s international breakthrough of Indian independent cinema and a Mumbai caught between traditional marriage, changing social expectations and intense metropolitan isolation." },
    { area: "movement_and_tradition", status: "source_verified", note: "BFI, Critics' Week and Batra connect the film to Indian independent realism, literary and epistolary romance, documentary observation and restrained urban melodrama rather than Bollywood spectacle." },
    { area: "industry_and_production_context", status: "source_verified", note: "Critics' Week and BFI document the India-France-Germany co-production through Sikhya Entertainment, DAR Motion Pictures, NFDC, Rohfilm and ASAP Films, with The Match Factory handling international sales." },
    { area: "reception_and_legacy", status: "source_verified", note: "Critics' Week records the world premiere, Sony Pictures Classics records its post-Cannes acquisition, and BFI documents the film's international success and continuing place in modern Indian independent cinema." },
    { area: "screenplay", status: "source_verified", note: "Critics' Week credits Ritesh Batra; his interview explains why letters suit two inhibited, socially separated characters and why Mumbai's religious, class and neighbourhood complexity is built directly into the correspondence structure." },
    { area: "directing", status: "source_verified", note: "Batra describes beginning with documentary research among dabbawalas, preparing closely with Michael Simmonds, embracing Mumbai's location chaos and preserving the delivery system's dignity rather than treating the mistaken box as a comic failure." },
    { area: "performance", status: "source_verified", note: "BFI, Sony and Critics' Week document Irrfan Khan, Nimrat Kaur and Nawazuddin Siddiqui; withheld gestures, voice-over reading, food reactions and ordinary workplace behaviour carry intimacy without conventional shared romantic scenes." },
    { area: "production_design", status: "source_verified", note: "Critics' Week credits Shruti Gupte; Ila's kitchen, Saajan's office and apartment, Shaikh's home, lunch tins and delivery markings make domestic labour, bureaucracy, class and distance materially legible." },
    { area: "costume_makeup", status: "source_verified", note: "The credited costume and styling system distinguishes Ila's domestic routine, Saajan's ageing office formality and Shaikh's aspirational presentation while remaining deliberately subordinate to performance and lived locations." },
    { area: "cinematography", status: "source_verified", note: "Critics' Week credits Michael Simmonds, while Batra documents months of preparation and an almost entirely location-based shoot across Mumbai streets, trains, Churchgate, Malad and Dongri that accepted real crowds and non-actors into the frame." },
    { area: "lighting", status: "mapped", note: "Naturalistic kitchens, offices, trains and street locations preserve everyday Mumbai texture, but the inspected source set does not provide a complete cinematographer or lighting-department account of exposure, fixtures and grip strategy." },
    { area: "camera_format", status: "mapped", note: "Festival and distributor records preserve the colour widescreen theatrical presentation, but the inspected primary sources do not isolate the complete original camera body, recording medium, lenses and digital-intermediate package." },
    { area: "editing", status: "source_verified", note: "Critics' Week credits John Lyons; Batra records a five-month New York edit in which repeated preparation, delivery, reading and parallel daily routines were refined through international test screenings without forcing a conventional romantic climax." },
    { area: "sound_design", status: "source_verified", note: "Critics' Week credits Michael Kaczmarek; Batra documents a three-month Berlin sound process built from roughly 26 hours of new Mumbai recordings including dabbawala singing, office printers, trains and specific neighbourhood ambience." },
    { area: "music", status: "source_verified", note: "Critics' Week credits Max Richter; the restrained score enters selectively so food, paper, voices, trains, fans, office machinery and urban distance remain the primary emotional acoustic field." },
    { area: "effects_animation", status: "not_central", note: "The production's central system depends on practical lunchboxes, real delivery routes, locations, performance, editing and sound rather than a significant visual-effects or animation pipeline." },
    { area: "documentary_method", status: "source_verified", note: "Batra embedded with dabbawalas while planning a documentary, cast real delivery workers as themselves, used Mumbai residents as non-actor extras and retained real transport and street activity inside the finished fiction." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  beforeSunsetFilmHistoryProfile,
  viveLAmourFilmHistoryProfile,
  amelieFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTheLunchboxFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === theLunchboxFilmHistoryProfile.scenarioId ? theLunchboxFilmHistoryProfile : undefined;
}

export function getTheLunchboxFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === theLunchboxFilmHistoryProfile.scenarioId ? donors : undefined;
}
