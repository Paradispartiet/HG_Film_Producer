import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { beforeTheRainFilmHistoryProfile } from "./scenarioFilmStudyBalkanWarInstitutionBeforeRain";
import { noMansLandFilmHistoryProfile } from "./scenarioFilmStudyBalkanWarInstitutionNoMansLand";
import { quoVadisAidaFilmHistoryProfile } from "./scenarioFilmStudyBalkanWarInstitutionQuoVadisAida";

export const tangerinesFilmHistoryProfile = {
  scenarioId: "scenario_tangerines_2013",
  period: "Early-2010s Estonian-Georgian chamber war cinema reconstructing the 1992 Abkhazian conflict through shelter, harvest labour and reluctant care",
  traditions: ["Contained antiwar chamber drama", "Estonian-Georgian historical co-production", "Humanist war cinema built from domestic proximity"],
  before: "Balkan and Caucasus war films had often used divided villages, trenches, institutions and displaced civilians to challenge heroic national narratives, while chamber drama offered a way to make political conflict physically immediate through a few bodies sharing one bounded space.",
  moment: "Allfilm and Cinema 24 turn Zaza Urushadze's rapidly written four-character screenplay into a compact Estonian-Georgian co-production set during the 1992 War in Abkhazia. Guria stands in for the inaccessible conflict region; Ivo's wooden house, workshop, road and tangerine orchard form the complete moral geography; Lembit Ulfsak, Giorgi Nakashidze, Misha Meskhi and Elmo Nuganen shift hostility through pauses, food, wounds, work and guarded humour; Rein Kotov's widescreen camera uses small reframings and contrasting natural-looking light to keep the chamber play visually active; Alexander Kuranov's editing protects lulls and sudden attacks; Ivo Felt and Harmo Kallaste build fragile domestic quiet against engines, gunfire and approaching soldiers; and Niaz Diasamidze's restrained recurring music carries grief without converting the antiwar argument into spectacle.",
  after: "The film moved from Warsaw and other international festivals to Estonia's first Academy Award nomination for foreign-language film and a Golden Globe nomination, while producer Ivo Felt later reported sales to more than one hundred countries. Its unusually small production remains a strong teaching case in how one house, two wounded enemies, agricultural labour and carefully controlled offscreen war can make historical conflict legible through hospitality rather than battlefield scale.",
  historyQuestion: "Which production system explains an Estonian-Georgian antiwar film that uses a Guria house and tangerine orchard to stand in for Abkhazia, confines two wounded enemies under one civilian's protection, and coordinates four performances, restrained widescreen reframing, harvest labour, long quiet intervals, sudden gunfire, sparse music and minimal spectacle into a moral test of whether care can interrupt organised hatred?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The Estonian Film Database, Irish Film Institute and Estonian Foreign Ministry place the story in autumn 1992 during the War in Abkhazia and identify the remaining Estonian settlers, Georgian forces and a Chechen fighter aligned with the Abkhaz side." },
    { area: "movement_and_tradition", status: "source_verified", note: "Filmmaker Magazine, IFI and the director's Golden Globes statement support a contained humanist antiwar chamber drama that replaces battlefield scale with hospitality, shared domestic space and the gradual collapse of inherited enemy categories." },
    { area: "industry_and_production_context", status: "source_verified", note: "Screen International, EFIS, TheWrap and producer interviews document the Allfilm-Cinema 24 Estonian-Georgian co-production, the Guria shoot near the Abkhazian border and the later difficulty and success of international festival and sales circulation." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy and Golden Globes record Estonia's first foreign-language Oscar nomination and the Golden Globe nomination; EFIS, the Foreign Ministry and Cineuropa document domestic recognition, festival awards and sales to more than one hundred countries." },
    { area: "screenplay", status: "source_verified", note: "TheWrap records Urushadze writing the screenplay in two weeks with only minor later changes; the script organises one civilian host, two wounded enemies, a neighbour and repeated promises of nonviolence into a compact escalation around shelter, harvest and burial." },
    { area: "directing", status: "source_verified", note: "Urushadze's own Golden Globes statement defines the project as faith in forgiveness, help and protection across institutionalised killing, while interviews describe his deliberately concise communication and story-first direction." },
    { area: "performance", status: "source_verified", note: "EFIS, Screen International and IFI identify Lembit Ulfsak, Giorgi Nakashidze, Misha Meskhi and Elmo Nuganen; the chamber structure depends on controlled threat, humour, physical injury, watching and incremental recognition rather than large ensemble spectacle." },
    { area: "production_design", status: "source_verified", note: "Screen International credits Thea Telia; the wooden house, separated rooms, workshop, orchard crates, road and burial ground create a small but complete geography where productive civilian labour is repeatedly invaded by war." },
    { area: "costume_makeup", status: "mapped", note: "Soldier uniforms, civilian work clothes, wounds and changing physical condition clarify affiliation and vulnerability, but the inspected sources do not provide a complete costume and makeup department process account." },
    { area: "cinematography", status: "source_verified", note: "Filmmaker Magazine credits Rein Kotov and describes smooth small camera movements, widescreen composition and active reframing that continually alters the relationships inside a production otherwise concentrated in one house and nearby exterior spaces." },
    { area: "lighting", status: "source_verified", note: "Filmmaker Magazine identifies strong contrasting lighting effects as a deliberate strategy against visual stasis, joining warm domestic and orchard light to darker interiors and abrupt exterior threat." },
    { area: "camera_format", status: "mapped", note: "Institutional and critical records verify an 87-minute colour digital widescreen presentation, but the current inspectable source set does not establish the complete camera, lens, recording codec and finishing package." },
    { area: "editing", status: "source_verified", note: "Screen International credits Alexander Kuranov; the edit preserves slow meals, waiting, conversation and recuperation, then allows brief attacks and discoveries to rupture the house's temporary rules without turning the film into continuous action." },
    { area: "sound_design", status: "source_verified", note: "EFIS identifies producer Ivo Felt as sound director and designer, while production credits add Harmo Kallaste; quiet rooms, tools, vehicles, distant gunfire, voices outside the frame and sudden close violence make safety audible as temporary." },
    { area: "music", status: "source_verified", note: "Screen International and Filmmaker Magazine credit Niaz Diasamidze and describe a restrained recurring string-based score that carries mourning and inevitability without overwhelming speech, silence or environmental sound." },
    { area: "effects_animation", status: "not_central", note: "Controlled gunfire, vehicles, wounds and practical combat incidents support the story, but the production is organised primarily around performance, location, editing and sound rather than a central effects or animation pipeline." },
    { area: "documentary_method", status: "source_verified", note: "The 1992 historical setting, Estonian-settler context, production near the Abkhazian border and preservation of specific political identities ground the fiction in researched geography and conflict even as it condenses them into a universal chamber parable." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  noMansLandFilmHistoryProfile,
  beforeTheRainFilmHistoryProfile,
  quoVadisAidaFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getTangerinesFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === tangerinesFilmHistoryProfile.scenarioId ? tangerinesFilmHistoryProfile : undefined;
}

export function getTangerinesFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === tangerinesFilmHistoryProfile.scenarioId ? donors : undefined;
}
