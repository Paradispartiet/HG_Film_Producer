import {
  completeFilmStudyCoverage,
  getFilmHistoryEra,
  summarizeFilmStudyCoverage,
  type FilmStudyCoverageOverride,
} from "../../core/filmStudyCoverage";
import type { FilmScenarioSeed } from "./filmScenarios";
import {
  getIndependentStorytellingCatalogProfile,
  getIndependentStorytellingDonors,
  getIndependentStorytellingProfileGroup,
  type IndependentStorytellingProfileGroup,
} from "./scenarioFilmStudyIndependentStorytellingCatalog";
import type {
  FilmHistoryChoice,
  FilmHistoryProfile,
  ScenarioFilmStudyMap,
} from "./scenarioFilmStudyMap";
import {
  getPriorityIndieFinalDonors,
  getPriorityIndieFinalProfile,
} from "./scenarioFilmStudyPriorityIndieFinalCatalog";
import {
  getDownByLawFilmHistoryDonors,
  getDownByLawFilmHistoryProfile,
} from "./scenarioFilmStudyIndependentStorytellingDownByLawCatalog";
import {
  getElephantFilmHistoryDonors,
  getElephantFilmHistoryProfile,
} from "./scenarioFilmStudyIndependentStorytellingElephantCatalog";
import {
  getTheMillionDollarHotelFilmHistoryDonors,
  getTheMillionDollarHotelFilmHistoryProfile,
} from "./scenarioFilmStudyOutsiderHotelMusicMillionDollarHotelCatalog";
import {
  getTaxidermiaFilmHistoryDonors,
  getTaxidermiaFilmHistoryProfile,
} from "./scenarioFilmStudyHungarianGrotesqueTaxidermiaCatalog";
import {
  getRequiemForADreamFilmHistoryDonors,
  getRequiemForADreamFilmHistoryProfile,
} from "./scenarioFilmStudyAddictionBodyMontageRequiemCatalog";
import {
  getTheStraightStoryFilmHistoryDonors,
  getTheStraightStoryFilmHistoryProfile,
} from "./scenarioFilmStudyAmericanRegionalStraightStoryCatalog";
import {
  getTheChildFilmHistoryDonors,
  getTheChildFilmHistoryProfile,
} from "./scenarioFilmStudySocialRealismTheChildCatalog";
import {
  getRosettaFilmHistoryDonors,
  getRosettaFilmHistoryProfile,
} from "./scenarioFilmStudySocialRealismRosettaCatalog";
import {
  getEyesWideShutFilmHistoryDonors,
  getEyesWideShutFilmHistoryProfile,
} from "./scenarioFilmStudySubjectiveEnclosureEyesWideShutCatalog";
import {
  getBeingJohnMalkovichFilmHistoryDonors,
  getBeingJohnMalkovichFilmHistoryProfile,
} from "./scenarioFilmStudySubjectiveEnclosureBeingJohnMalkovichCatalog";
import {
  getTheBigLebowskiFilmHistoryDonors,
  getTheBigLebowskiFilmHistoryProfile,
} from "./scenarioFilmStudyAmericanGenreBigLebowskiCatalog";
import {
  getClerksFilmHistoryDonors,
  getClerksFilmHistoryProfile,
} from "./scenarioFilmStudyAmericanGenreClerksCatalog";
import {
  getAntoniasLineFilmHistoryDonors,
  getAntoniasLineFilmHistoryProfile,
} from "./scenarioFilmStudyFamilyPerformanceAntoniasLineCatalog";
import {
  getLeavingLasVegasFilmHistoryDonors,
  getLeavingLasVegasFilmHistoryProfile,
} from "./scenarioFilmStudyAmericanPrecarityLeavingLasVegasCatalog";
import {
  getTheGameFilmHistoryDonors,
  getTheGameFilmHistoryProfile,
} from "./scenarioFilmStudySubjectiveEnclosureTheGameCatalog";
import {
  getBuffalo66FilmHistoryDonors,
  getBuffalo66FilmHistoryProfile,
} from "./scenarioFilmStudyAmericanRegionalBuffalo66Catalog";
import {
  getInTheHouseFilmHistoryDonors,
  getInTheHouseFilmHistoryProfile,
} from "./scenarioFilmStudySubjectiveEnclosureInTheHouseCatalog";
import {
  getSearchingForSugarManFilmHistoryDonors,
  getSearchingForSugarManFilmHistoryProfile,
} from "./scenarioFilmStudyMusicDocumentarySearchingForSugarManCatalog";
import {
  getBrokenCircleBreakdownFilmHistoryDonors,
  getBrokenCircleBreakdownFilmHistoryProfile,
} from "./scenarioFilmStudyFamilyPerformanceBrokenCircleBreakdownCatalog";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";

type ResolvedIndependentStorytellingProfileGroup =
  | IndependentStorytellingProfileGroup
  | "social_realism_labor_body"
  | "addiction_body_montage"
  | "hungarian_body_history_grotesque"
  | "outsider_hotel_music_identity";

type SpecialChoiceSystem = {
  readonly donors: readonly FilmHistoryProfile[];
  readonly group: ResolvedIndependentStorytellingProfileGroup;
  readonly match?: string;
  readonly partial?: string;
  readonly miss?: string;
  readonly forceStart?: boolean;
};

function statusRank(status: FilmStudyCoverageOverride["status"]): number {
  if (status === "source_verified") return 4;
  if (status === "mapped") return 3;
  if (status === "not_central") return 2;
  return 1;
}

function mergeCoverageOverrides(
  ...overrideSets: readonly (readonly FilmStudyCoverageOverride[])[]
): readonly FilmStudyCoverageOverride[] {
  const merged = new Map<string, FilmStudyCoverageOverride>();
  for (const overrides of overrideSets) {
    for (const override of overrides) {
      const existing = merged.get(override.area);
      if (!existing || statusRank(override.status) >= statusRank(existing.status)) {
        merged.set(override.area, override);
      }
    }
  }
  return [...merged.values()];
}

function briefOverrides(brief: ScenarioProductionBrief): readonly FilmStudyCoverageOverride[] {
  return [
    { area: "screenplay", status: "mapped", note: brief.screenplayTargets.join(" · ") },
    { area: "cinematography", status: "mapped", note: brief.cinematographyTargets.join(" · ") },
    { area: "editing", status: "mapped", note: brief.editingTargets.join(" · ") },
    { area: "sound_design", status: "mapped", note: brief.soundTargets.join(" · ") },
  ];
}

function profileOverrides(profile: FilmHistoryProfile): readonly FilmStudyCoverageOverride[] {
  return [
    { area: "historical_context", status: "source_verified", note: profile.period },
    { area: "movement_and_tradition", status: "source_verified", note: profile.traditions.join(" · ") },
    { area: "industry_and_production_context", status: "source_verified", note: profile.moment },
    {
      area: "reception_and_legacy",
      status: profile.technicalHighlights.find((item) => item.area === "reception_and_legacy")?.status ?? "mapped",
      note: profile.after,
    },
    ...profile.technicalHighlights,
  ];
}

export function getIndependentStorytellingFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return getInTheHouseFilmHistoryProfile(scenarioId)
    ?? getSearchingForSugarManFilmHistoryProfile(scenarioId)
    ?? getBrokenCircleBreakdownFilmHistoryProfile(scenarioId)
    ?? getElephantFilmHistoryProfile(scenarioId)
    ?? getTheMillionDollarHotelFilmHistoryProfile(scenarioId)
    ?? getTaxidermiaFilmHistoryProfile(scenarioId)
    ?? getRequiemForADreamFilmHistoryProfile(scenarioId)
    ?? getTheStraightStoryFilmHistoryProfile(scenarioId)
    ?? getTheChildFilmHistoryProfile(scenarioId)
    ?? getRosettaFilmHistoryProfile(scenarioId)
    ?? getEyesWideShutFilmHistoryProfile(scenarioId)
    ?? getBeingJohnMalkovichFilmHistoryProfile(scenarioId)
    ?? getTheBigLebowskiFilmHistoryProfile(scenarioId)
    ?? getBuffalo66FilmHistoryProfile(scenarioId)
    ?? getTheGameFilmHistoryProfile(scenarioId)
    ?? getLeavingLasVegasFilmHistoryProfile(scenarioId)
    ?? getAntoniasLineFilmHistoryProfile(scenarioId)
    ?? getClerksFilmHistoryProfile(scenarioId)
    ?? getDownByLawFilmHistoryProfile(scenarioId)
    ?? getPriorityIndieFinalProfile(scenarioId)
    ?? getIndependentStorytellingCatalogProfile(scenarioId);
}

export function resolveIndependentStorytellingFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getIndependentStorytellingFilmHistoryProfile(scenario.id);
  if (!historyProfile) return undefined;
  const verification = getProductionCaseVerification(scenario.id);
  const coverage = completeFilmStudyCoverage(mergeCoverageOverrides(
    briefOverrides(brief),
    profileOverrides(historyProfile),
  ));
  return {
    scenarioId: scenario.id,
    title: scenario.film.title,
    year: scenario.film.year,
    broadEra: getFilmHistoryEra(scenario.film.year),
    historyStatus: "source_backed",
    historyProfile,
    coverage,
    coverageSummary: summarizeFilmStudyCoverage(coverage),
    verification,
  };
}

function hashString(value: string): number {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function partialFeedback(group: ResolvedIndependentStorytellingProfileGroup): string {
  const feedback: Record<ResolvedIndependentStorytellingProfileGroup, string> = {
    general: "This is a real independent storytelling system, but it belongs to another balance of place, genre, memory, documentary evidence, performance and visual construction.",
    south_korean_genre: "This is a real South Korean production system, but it organizes historical pressure, performance, genre, location, effects, editing and sound differently.",
    south_southeast_asian: "This is a real South or Southeast Asian production system, but it organizes institution, performance, landscape, duration, genre and sound differently.",
    hong_kong_taiwan_urban_time: "This is a real Hong Kong or Taiwan urban-time system, but it organizes memory, architecture, duration, performance, music and exhibition space differently.",
    chinese_language_space_genre: "This is a real Chinese-language production system, but it organizes ritual, geography, historical genre, violence, duration and immersive space differently.",
    chinese_language_modernity_memory: "This is a real Chinese-language modernity-and-memory system, but it organizes urban change, family history, opera performance, provincial duration, ellipsis and sound differently.",
    asian_landscape_grief_attention: "This is a real Asian landscape, grief-and-attention system, but it organizes mythic transformation, redevelopment, spiritual crisis, moral observation, performance, duration and sound differently.",
    subjective_enclosure_performance: "This is a real subjective-enclosure and performed-identity system, but it organizes restricted viewpoint, duration, political impersonation, creative labour, architecture, scale and sound differently.",
    family_performance_grief_power: "This is a real family-performance, grief-and-verbal-power system, but it organizes devised behaviour, musical rupture, bereavement routine, long argument, domestic space and sound differently.",
    body_archive_restitution_perspective: "This is a real bodily-risk, activist-archive, restitution-and-perspective system, but it organizes embodied procedure, personal archive, institutional return, first-person camera, editing and sound differently.",
    queer_independent_body_community_archive: "This is a real queer independent body, community-and-archive system, but it organizes romance, testimony, illness, self-performance, historical absence, media mixture and social space differently.",
    american_precarity_body_care: "This is a real American precarity, body-and-care system, but it organizes economic procedure, injury, sensory viewpoint, reproductive access, regional space, performance, editing and sound differently.",
    american_independent_genre_resourcefulness: "This is a real American independent genre-and-resourcefulness system, but it organizes noir misunderstanding, verbal ensemble comedy, nonlinear chamber crime, DIY action, restricted locations, editing and sound differently.",
    independent_desire_identity_authorship: "This is a real independent desire, identity-and-authorship system, but it organizes genre fragmentation, adolescent embodiment, social code-switching, autobiographical memory, performance, image texture and sound differently.",
    american_regional_identity_place_belonging: "This is a real American regional identity, place-and-belonging system, but it organizes impersonation, migration, family economy, childhood memory, landscape, narration, ensemble performance and sound differently.",
    asian_transnational_urban_identity: "This is a real Asian transnational urban-identity system, but it organizes migration, labour, romance, surveillance, time and belonging differently.",
    japanese_ambiguity_dialogue: "This is a real Japanese ambiguity-and-dialogue production system, but it organizes hypnosis, coincidence, institutional viewpoint, environmental procedure, performance and sound differently.",
    social_realism_labor_body: "This is another real social-realist labour-and-body system, but it organizes work, exclusion, physical procedure, moral choice, camera proximity and environmental sound differently.",
    addiction_body_montage: "This is another real addiction, bodily-crisis or subjective-montage system, but it organizes parallel compulsion, repeated ritual images, seasonal collapse, body-mounted camera, effects, music and designed sound differently.",
    hungarian_body_history_grotesque: "This is another real Central European grotesque, historical-body or effects-led art-cinema system, but it organizes political eras, appetite, family genealogy, 35 mm design, prosthetic bodies, montage and electronic music differently.",
    outsider_hotel_music_identity: "This is another real hotel, outsider-ensemble or music-led urban system, but it organizes a real building, marginal community, romantic murder mystery, subjective narration, CinemaScope space and rock-ambient collaboration differently.",
  };
  return feedback[group];
}

function missFeedback(group: ResolvedIndependentStorytellingProfileGroup): string {
  const feedback: Record<ResolvedIndependentStorytellingProfileGroup, string> = {
    general: "This places the film inside the wrong historical relationship between place, narration, media mixture, performance and image-making.",
    south_korean_genre: "This places the film inside the wrong South Korean historical and production logic.",
    south_southeast_asian: "This places the film inside the wrong South or Southeast Asian institutional and production logic.",
    hong_kong_taiwan_urban_time: "This places the film inside the wrong Hong Kong or Taiwan relationship between city, memory, duration and spectatorship.",
    chinese_language_space_genre: "This places the film inside the wrong Chinese-language relationship between history, space, violence, genre and cinematic duration.",
    chinese_language_modernity_memory: "This places the film inside the wrong Chinese-language relationship between modernisation, political memory, performance tradition, provincial life and historical time.",
    asian_landscape_grief_attention: "This places the film inside the wrong relationship between Asian landscape, loss, social change, moral attention, performance and sensory form.",
    subjective_enclosure_performance: "This places the film inside the wrong relationship between enclosure, social power, performed identity, authorship, duration and visual control.",
    family_performance_grief_power: "This places the film inside the wrong relationship between family behaviour, fantasy, bereavement, argument, class power and everyday space.",
    body_archive_restitution_perspective: "This places the film inside the wrong relationship between bodily autonomy, activist memory, restitution, historical violence, camera subjectivity and institutional power.",
    queer_independent_body_community_archive: "This places the film inside the wrong relationship between queer authorship, bodily experience, chosen community, archival absence, media form and independent production.",
    american_precarity_body_care: "This places the film inside the wrong relationship between economic vulnerability, bodily limitation, care systems, mobility, sensory form and practical access.",
    american_independent_genre_resourcefulness: "This places the film inside the wrong relationship between independent financing, genre revision, restricted resources, information control, location reuse, editorial construction and sound-driven scale.",
    independent_desire_identity_authorship: "This places the film inside the wrong relationship between desire, identity formation, social presentation, memory reconstruction, artistic voice, embodied viewpoint and independent authorship.",
    american_regional_identity_place_belonging: "This places the film inside the wrong relationship between regional production, race, migration, family belonging, institutional identity, landscape, community memory and local material life.",
    asian_transnational_urban_identity: "This places the film inside the wrong relationship between Asian city, displacement, divided identity, social systems and return.",
    japanese_ambiguity_dialogue: "This places the film inside the wrong Japanese relationship between uncertainty, conversation, institutional pressure, landscape and moral interpretation.",
    social_realism_labor_body: "This places the film inside the wrong relationship between labour exclusion, bodily survival, social belonging, documentary-derived staging, mobile camera, cutting and practical sound.",
    addiction_body_montage: "This places the film inside the wrong relationship between parallel addiction, bodily deterioration, seasonal colour, repeated ritual montage, subjective camera, aggressive editing, designed sound, music and low-cost effects.",
    hungarian_body_history_grotesque: "This places the film inside the wrong relationship between Hungarian history, three-generation adaptation, bodily appetite, practical effects, 35 mm image, montage, material sound and electronic music.",
    outsider_hotel_music_identity: "This places the film inside the wrong relationship between transatlantic auteur production, a real Downtown Los Angeles hotel, outsider ensemble, unstable narration, murder-mystery framing, CinemaScope architecture, sound and music-led identity.",
  };
  return feedback[group];
}

function getSpecialChoiceSystem(profile: FilmHistoryProfile): SpecialChoiceSystem | undefined {
  const inTheHouseDonors = getInTheHouseFilmHistoryDonors(profile);
  if (inTheHouseDonors) return {
    donors: inTheHouseDonors,
    group: "subjective_enclosure_performance",
    forceStart: true,
    match: "This matches the documented production relationship among Ozon's Mayorga adaptation, Claude's serial essays, Germain's revisions, Marne-la-Vallée school and suburban locations, domestic sightlines, voice-over, Gardette's reality-fiction handoffs, Rombi's score and writing as performed voyeurism.",
    partial: "This is another real authorship, enclosure or performed-reality system, but it does not make weekly school writing, teacher correction, domestic infiltration and shifting imagined enactment the same mechanism of suspense.",
    miss: "This places the film inside the wrong relationship between literary adaptation, teacher-student power, bourgeois domestic access, narration, widescreen observation, editing, sound and unstable authorship.",
  };

  const searchingForSugarManDonors = getSearchingForSugarManFilmHistoryDonors(profile);
  if (searchingForSugarManDonors) return {
    donors: searchingForSugarManDonors,
    group: "body_archive_restitution_perspective",
    forceStart: true,
    match: "This matches the documented relationship among South African fan investigation, Detroit witnesses, records and photographs, Bendjelloul's four-year production and self-editing, transnational travel, animated reconstruction, Rodriguez's songs, recovered concerts and documentary mystery structure.",
    partial: "This is another real archive, artist-biography or community-memory system, but it does not turn a singer's unknown overseas fame, death rumors, fan research, record circulation and belated live return into the same investigative music documentary.",
    miss: "This places the film inside the wrong relationship between music history, apartheid-era circulation, fan evidence, Detroit and South African geography, archive, animation, editing, sound and documentary ethics.",
  };

  const brokenCircleDonors = getBrokenCircleBreakdownFilmHistoryDonors(profile);
  if (brokenCircleDonors) return {
    donors: brokenCircleDonors,
    group: "family_performance_grief_power",
    forceStart: true,
    match: "This matches the documented production relationship among Heldenbergh and Dobbels's bluegrass theatre source, Van Groeningen and Joos's repeatedly rebuilt screenplay, Baetens and Heldenbergh's musical performance, Impens's intimate widescreen image, Rigolle's farm world, Leunen's nonlinear grief montage, Deca's sound and Eriksson's arrangements.",
    partial: "This is another real family, grief or music-performance system, but it does not organize courtship, parenthood, childhood illness, belief and bereavement through bluegrass competence and emotionally associated time in the same way.",
    miss: "This places the film inside the wrong relationship between theatre adaptation, family loss, live music, tattooed performance identity, Belgian rural space, nonlinear editing, practical sound and melodrama.",
  };

  const elephantDonors = getElephantFilmHistoryDonors(profile);
  if (elephantDonors) return {
    donors: elephantDonors,
    group: "general",
    forceStart: true,
    match: "This matches the documented production relationship among HBO-backed Portland production, local student performers, a real closed school, script-light development, Harris Savides's square-frame 35 mm corridor tracking, practical lighting, repeated temporal paths, Van Sant's editorial re-entry, mobile MS stereo, Leslie Shatz's shifting sound field and music that emerges from the students' environment rather than explaining the violence.",
    partial: "This is another real durational, observational or embodied social-space system, but it does not combine one American school day, nonprofessional teenagers, overlapping corridor routes, repeated encounters, Academy-ratio long takes, post-Columbine uncertainty and sound that moves between ordinary ambience and subjective pressure in the same way.",
    miss: "This places the film inside the wrong relationship between school violence, nonprofessional performance, real institutional geography, incomplete causality, repeated time, mobile 35 mm observation, practical light, environmental sound, musique concrète and withheld explanation.",
  };

  const theMillionDollarHotelDonors = getTheMillionDollarHotelFilmHistoryDonors(profile);
  if (theMillionDollarHotelDonors) return {
    donors: theMillionDollarHotelDonors,
    group: "outsider_hotel_music_identity",
    forceStart: true,
    match: "This matches the documented production relationship among Bono and Nicholas Klein's rooftop-born story, Wenders's transatlantic Road Movies-Kintop-Icon production, the real Downtown Los Angeles hotel, Jeremy Davies and Milla Jovovich's outsider romance, Mel Gibson's investigative counterforce, Phedon Papamichael's 35 mm CinemaScope image, resident-room design, Tom Tom's subjective editing, layered hotel sound and the Bono-Eno-Lanois-Hassell music system.",
    partial: "This is another real hotel, urban-outsider or music-led ensemble system, but it does not combine a rooftop-born Bono story, a real decayed Los Angeles residence, romantic murder mystery, marginal ensemble, unstable first-person narration, CinemaScope architecture and ambient-rock collaboration in the same way.",
    miss: "This places the film inside the wrong relationship between transatlantic auteur production, Downtown Los Angeles location history, outsider community, performed identity, murder investigation, subjective image ruptures, hotel sound and collaborative music.",
  };

  const taxidermiaDonors = getTaxidermiaFilmHistoryDonors(profile);
  if (taxidermiaDonors) return {
    donors: taxidermiaDonors,
    group: "hungarian_body_history_grotesque",
    forceStart: true,
    match: "This matches the documented production relationship among Pálfi and Ruttkay's two-story adaptation, a three-generation Hungarian history, Eurofilm-Amour Fou-Memento-ARTE co-production, unusual casting, Pohárnok's colour 35 mm image, Asztalos and Szöllősi's design, practical specimens, mask and makeup effects, Lemhényi's triptych editing, Zányi's material sound and Tobin's electronic score.",
    partial: "This is another real political-grotesque, body-transformation or effects-led system, but it does not combine wartime servitude, state-socialist competitive eating, post-socialist taxidermy, three generations, fabricated flesh, 35 mm colour and electronic historical continuity in the same way.",
    miss: "This places the film inside the wrong relationship between Hungarian political eras, adapted family genealogy, appetite, body modification, practical and animated effects, 35 mm design, montage, sound and music.",
  };

  const requiemForADreamDonors = getRequiemForADreamFilmHistoryDonors(profile);
  if (requiemForADreamDonors) return {
    donors: requiemForADreamDonors,
    group: "addiction_body_montage",
    forceStart: true,
    match: "This matches the documented production relationship among Aronofsky and Selby's four-character addiction adaptation, Artisan and Protozoa independent production, Coney Island locations, Libatique's seasonal 35 mm and practical-light system, Chinlund's red-withholding design, bodily performance, Rabinowitz's hip-hop montage, Emrich's production-integrated sound, Mansell and Kronos Quartet music and Amoeba Proteus effects.",
    partial: "This is another real addiction, sensory-body or music-driven montage system, but it does not combine four parallel compulsions, repeated ritual inserts, seasonal colour decline, split screen, SnorriCam, accelerating cross-cutting, electronic strings and low-cost subjective effects in the same way.",
    miss: "This places the film inside the wrong relationship between independent addiction adaptation, ensemble bodily collapse, 35 mm seasonal design, body-mounted camera, repeated audiovisual ritual, editorial acceleration, sound, music and integrated effects.",
  };

  const straightStoryDonors = getTheStraightStoryFilmHistoryDonors(profile);
  if (straightStoryDonors) return {
    donors: straightStoryDonors,
    group: "american_regional_identity_place_belonging",
    forceStart: true,
    match: "This matches the documented production relationship among Sweeney and Roach's fact-based Alvin Straight screenplay, rapid StudioCanal backing, chronological filming along the actual Iowa-Wisconsin route, Richard Farnsworth's embodied ageing performance, Freddie Francis's 35 mm anamorphic landscapes, Jack Fisk and Patricia Norris's regional material world, Mary Sweeney's patient sound-responsive editing, Lynch's practical road sound and Badalamenti's restrained score.",
    partial: "This is another real American regional, slow-road or ageing-body system, but it does not combine a lawn-mower journey, chronological harvest production, actual route communities, physical limitation, anamorphic landscape, engine rhythm, roadside encounters and sibling reconciliation in the same way.",
    miss: "This places the film inside the wrong relationship between fact-based regional production, ageing embodiment, extremely slow mobility, Midwestern landscape, chronological location work, 35 mm road imagery, practical sound, music and reconciliation.",
  };

  const theChildDonors = getTheChildFilmHistoryDonors(profile);
  if (theChildDonors) return {
    donors: theChildDonors,
    group: "social_realism_labor_body",
    forceStart: true,
    match: "This matches the documented production relationship among the observed Seraing pram image, the Dardennes' young-father screenplay, Les Films du Fleuve and Archipel 35 production, Jérémie Renier and Déborah François, rehearsed real-location action, Alain Marcoen's colour 35 mm image, Benoît Dervaux's actor-camera movement, Marie-Hélène Dozo's consequence-led edit, practical sound and the withholding of sentimental score.",
    partial: "This is another real precarity, bodily-risk or care system, but it does not combine the sale of an infant, immediate exchange economy, young fatherhood, Seraing streets, attempted restitution, rehearsed handheld 35 mm movement and practical sound in the same way.",
    miss: "This places the film inside the wrong relationship between postindustrial youth precarity, infant care, criminal exchange, moral responsibility, real-location rehearsal, mobile 35 mm camera, action-led editing, environmental sound and grace.",
  };

  const rosettaDonors = getRosettaFilmHistoryDonors(profile);
  if (rosettaDonors) return {
    donors: rosettaDonors,
    group: "social_realism_labor_body",
    forceStart: true,
    match: "This matches the documented production relationship among the Dardennes' post-documentary Belgian social realism, Films du Fleuve and ARP production, an unknown Émilie Dequenne, Seraing labour geography, Alain Marcoen's Super 16 image, Benoît Dervaux's body-camera choreography, Marie-Hélène Dozo's cutting, Jean-Pierre Duret's practical sound and the film's Cannes legacy.",
    partial: "This is another real labour, precarity or embodied social-realist system, but it does not combine a war for employment, an unknown central performer, gas bottles, a caravan site, factory and waffle-stand procedure, Super 16 body-camera proximity and recurring practical sound in the same way.",
    miss: "This places the film inside the wrong relationship between postindustrial labour, bodily performance, social belonging, Super 16 proximity, rehearsed handheld choreography, editing, environmental sound and ethical choice.",
  };

  const eyesWideShutDonors = getEyesWideShutFilmHistoryDonors(profile);
  if (eyesWideShutDonors) return {
    donors: eyesWideShutDonors,
    group: "subjective_enclosure_performance",
    forceStart: true,
    match: "This matches the documented production relationship among Kubrick and Raphael's long-planned Schnitzler adaptation, the prolonged Pole Star and Warner production, an English reconstruction of Manhattan, Cruise and Kidman's marital performance, masked ritual, wide Zeiss lenses, Steadicam, pushed 35 mm, practical Christmas and street lighting, Nigel Galt's extended edit, Jocelyn Pook's recurring score and the digitally altered United States release.",
    partial: "This is another real subjective-enclosure, ritual-performance or nocturnal-uncertainty system, but it does not join a marriage crisis, reconstructed Manhattan, class access, masks, dream repetition, practical coloured light, pushed negative and prolonged actor-director exploration in the same way.",
    miss: "This places the film inside the wrong relationship between Viennese adaptation, studio-auteur control, marriage performance, nocturnal city architecture, masked ritual, wide-angle movement, photochemical colour, editorial ambiguity, music and release-version effects.",
  };

  const beingJohnMalkovichDonors = getBeingJohnMalkovichFilmHistoryDonors(profile);
  if (beingJohnMalkovichDonors) return {
    donors: beingJohnMalkovichDonors,
    group: "subjective_enclosure_performance",
    forceStart: true,
    match: "This matches the documented production relationship among Kaufman's unmakeable identity screenplay, Jonze's feature debut, the seven-and-a-half floor, the body portal, first-person Malkovich vision, actor self-performance, marionettes, body doubles, compositing, Zumbrunnen's identity transitions and Burwell's circular melancholic score.",
    partial: "This is another real subjective-enclosure, performed-identity or surreal-authorship system, but it does not combine a compressed workplace, puppet control, celebrity embodiment, bodily occupation, mock media and portal effects in the same way.",
    miss: "This places the film inside the wrong relationship between surreal independent production, office architecture, authorship, desire, bodily control, first-person framing, performance, puppetry, compositing, editing and sound.",
  };

  const theBigLebowskiDonors = getTheBigLebowskiFilmHistoryDonors(profile);
  if (theBigLebowskiDonors) return {
    donors: theBigLebowskiDonors,
    group: "american_independent_genre_resourcefulness",
    forceStart: true,
    match: "This matches the documented production relationship among the Coens' deliberately useless detective, Working Title and PolyGram production, Los Angeles architecture, bowling ritual, Roger Deakins's 35 mm image, Rick Heinrichs's design, Mary Zophres's costumes, ensemble dialogue, subjective editing, Skip Lievsay's sound, source-shaped music and elaborate fantasy effects.",
    partial: "This is another real Coen, American independent genre or subjective-comedy system, but it does not turn a Chandler-like investigation, bowling friendship, Los Angeles social types, bright contemporary photography, dream choreography and music from the Dude's cultural memory into the same post-noir machine.",
    miss: "This places the film inside the wrong relationship between post-noir genre revision, Los Angeles location architecture, ensemble absurdism, bowling design, 35 mm realism, character costume, layered sound, source-shaped music and authored fantasy effects.",
  };

  const buffalo66Donors = getBuffalo66FilmHistoryDonors(profile);
  if (buffalo66Donors) return {
    donors: buffalo66Donors,
    group: "american_regional_identity_place_belonging",
    forceStart: true,
    match: "This matches the documented production relationship among Gallo and Bagnall's autobiographical Buffalo screenplay, a compact local shoot, tightly scripted performance, 35 mm reversal stock, precisely art-directed colour, regional interiors, abrupt memory and fantasy editing, subtle musical numbers and the frozen subjective gunshot tableau.",
    partial: "This is another real American regional, performed-identity or music-city production system, but it does not combine a false marriage, hostile family homecoming, football grievance, exact reversal exposure, abrasive writer-director-star performance and musical fantasy in the same way.",
    miss: "This places the film inside the wrong relationship between autobiographical regional production, Buffalo social memory, scripted performance, reversal-stock colour, designed interiors, music, romantic fantasy and subjective effects.",
  };

  const theGameDonors = getTheGameFilmHistoryDonors(profile);
  if (theGameDonors) return {
    donors: theGameDonors,
    group: "subjective_enclosure_performance",
    forceStart: true,
    match: "This matches the documented production relationship among the Brancato-Ferris screenplay and Andrew Kevin Walker revisions, Consumer Recreation Services' performed reality, real San Francisco locations, the Filoli and office contrast, Harris Savides's Panavision image and practical lighting systems, restricted viewpoint, Ren Klyce's sound, Howard Shore's score and integrated effects.",
    partial: "This is another real subjective-enclosure, psychological-uncertainty or performed-identity system, but it does not turn an entire modern city, corporate service network, hidden cast, architecture, stunts, media, sound and effects into one continuous loss-of-control performance.",
    miss: "This places the film inside the wrong relationship between corporate satire, immersive staged reality, San Francisco location architecture, hidden performers, Panavision photography, large practical lighting systems, information withholding, sound and seamless effects.",
  };

  const leavingLasVegasDonors = getLeavingLasVegasFilmHistoryDonors(profile);
  if (leavingLasVegasDonors) return {
    donors: leavingLasVegasDonors,
    group: "american_precarity_body_care",
    match: "This matches the documented production relationship among John O'Brien's uncompromising novel, a four-million-dollar twenty-eight-day shoot, two small Super 16 cameras, minimal lighting, real Nevada movement, actor research, donated Vivienne Westwood clothing and a director-composed blues-jazz score without a recovery ending.",
    partial: "This is another real American independent body-and-care system, but it organizes sensory recovery, unresolved environmental illness or economic precarity through a different relationship between bodily crisis, care, regional space, performance, image format and sound.",
    miss: "This places the film inside the wrong relationship between tragic romance, addiction without cure, low-budget transatlantic financing, mobile Super 16 production, two-camera intimacy, Vegas anti-spectacle, actor preparation and jazz-led emotional form.",
  };

  const antoniasLineDonors = getAntoniasLineFilmHistoryDonors(profile);
  if (antoniasLineDonors) return {
    donors: antoniasLineDonors,
    group: "family_performance_grief_power",
  };

  const clerksDonors = getClerksFilmHistoryDonors(profile);
  if (clerksDonors) return {
    donors: clerksDonors,
    group: getIndependentStorytellingProfileGroup(profile.scenarioId),
    partial: "This is another real American independent production system built from dialogue, regional place or strict resource limits, but it does not organize retail labour, overnight store access, fluorescent black-and-white 16mm and customer interruption in the same way.",
    miss: "This places the film inside the wrong relationship between workplace experience, available stores, microbudget financing, unknown performers, dialogue density, 16mm black-and-white photography, editing and festival discovery.",
  };

  const downByLawDonors = getDownByLawFilmHistoryDonors(profile);
  if (downByLawDonors) return {
    donors: downByLawDonors,
    group: getIndependentStorytellingProfileGroup(profile.scenarioId),
    partial: "This is another American independent outsider-location system, but it organizes city recurrence, conversational drift or neighborhood observation through a different balance of structure, performance, place, editing and sound.",
    miss: "This places the film inside the wrong relationship between American independent production, outsider ensemble, regional location, ellipsis, multilingual performance and music.",
  };

  const priorityDonors = getPriorityIndieFinalDonors(profile);
  if (priorityDonors) return {
    donors: priorityDonors,
    group: getIndependentStorytellingProfileGroup(profile.scenarioId),
    partial: "This is another final priority-independent system, but it organizes comic alienation, architectural attention or abrasive regional hustle through a different balance of design, performance, place, editing and sound.",
    miss: "This places the film inside the wrong relationship between American independent production, designed environment, regional observation, social performance, analogue or spatial form and audience identification.",
  };

  return undefined;
}

export function createIndependentStorytellingFilmHistoryChoices(
  profile: FilmHistoryProfile,
): readonly FilmHistoryChoice[] {
  const special = getSpecialChoiceSystem(profile);
  const group = special?.group ?? getIndependentStorytellingProfileGroup(profile.scenarioId);
  const donors = special?.donors ?? getIndependentStorytellingDonors(profile);
  const start = special?.forceStart ? 0 : hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];

  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: special?.match ?? "This connects the film's historical position directly to its documented relationship between place, narrative structure, image system, media form and production method.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: special?.partial ?? partialFeedback(group),
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: special?.miss ?? missFeedback(group),
    }] : []),
  ];
}
