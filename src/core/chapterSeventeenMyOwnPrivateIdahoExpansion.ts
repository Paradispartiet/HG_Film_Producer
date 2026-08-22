import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenMyOwnPrivateIdahoExpansionDefinitions = [
  {
    id: "scenario_my_own_private_idaho_1991",
    title: "My Own Private Idaho",
    originalTitle: "My Own Private Idaho",
    year: 1991,
    titleType: "Movie",
    runtimeMins: 104,
    directors: ["Gus Van Sant"],
    genres: ["Drama", "Road", "Romance"],
    premise: "Build My Own Private Idaho as Gus Van Sant's 1991 independent feature through the interaction of small-scale U.S. production, Portland-rooted street observation, Shakespeare adaptation, actor-driven character development, location travel and specialty distribution, without turning New Queer Cinema into a single aesthetic or production template. AFI records Gus Van Sant as writer-director, Laurie Parker as producer, Idaho Productions as production company, Eric Alan Edwards and John Campbell as cinematographers, Curtiss Clayton as editor and David Brisbin as production designer; BFI and Criterion corroborate the major craft credits and identify Beatrix Aruna Pasztor on costumes and Bill Stafford on music. Company records require role separation: the Venice Biennale catalogue names Idaho Productions as production, Fine Line Features as distributor and New Line International Releasing for international distribution, while a BFI programme credits New Line Cinema as production company. Preserve that institutional company-credit variation rather than treating distributor, financier and production entity as interchangeable. AFI states principal photography began 1 November 1990 and filming took place in Portland, Seattle and Rome. Those locations are production evidence; do not infer every fictional Idaho or road image was actually photographed in Idaho, and do not invent location permits, unit sizes or travel schedules. Van Sant's first-person accounts trace the screenplay to three previously separate projects: a street-youth story developed from Portland observations, another story called My Own Private Idaho, and a Prince Hal/Shakespeare adaptation. He says he combined them while editing Drugstore Cowboy. Academy and Library of Congress materials corroborate the Shakespeare/Henry IV dimension but do not make the film a literal Shakespeare transcription. River Phoenix also materially changed Mike's character. Van Sant has repeatedly said that Phoenix, with Keanu Reeves' cooperation, expanded the short campfire scene and redirected Mike toward an explicitly gay love for Scott. Preserve this as actor-originated development inside Van Sant's authored screenplay rather than erasing Phoenix's contribution or recategorizing the whole screenplay as actor-written. The film belongs historically to what critics and institutions later grouped as New Queer Cinema; the Academy calls it a standout of that formation, but that label is reception/history evidence rather than proof that queer films shared one production model. Production economics also vary in contemporary reporting. AFI preserves a $2.5-million budget report from 1991 sources and a later Variety report of $3.5 million production costs. Keep $2.5m/$3.5m as attributed cost-report variance rather than choosing one as an audited ledger. AFI and BFI give 104 minutes; the Venice catalogue gives 105 minutes. Use 104 minutes as canonical gameplay runtime while preserving 104/105 institutional version/catalogue variance. Venezia records 35mm, color and optical sound; the Academy also screens and archives the film as a 35mm feature. This supports 35mm at the format level but does not justify inventing camera bodies, lenses, stocks, filters, exposure or laboratory process. Criterion's later 4K transfer was created from the original camera negative and its remastered audio from 35mm magnetic tracks; these are preservation/restoration facts and must stay downstream from the 1990 production. Keep Edwards/Campbell cinematography, Clayton editing, Brisbin production design, Pasztor costumes and Stafford music as separate crafts. Do not infer a storyboard/shot-list practice, time-lapse workflow, sound hardware, recording format, exact daily hours, actor-research method or housing arrangement from secondary anecdotes unless directly supported by reviewed authoritative sources. The film's street-hustler subject matter also requires a representation boundary: production history about marginalized and queer youth is not permission to treat vulnerable people as interchangeable research material; present-day work requires informed consent, safeguarding, appropriate compensation and privacy protections. Do not invent camera/lens/stock, lighting ratios, lab process, production schedule beyond AFI's start/location record, budget ledger, sound equipment, intimate-scene practice or distribution deal economics absent from the reviewed sources.",
    sourceId: "afi_my_own_private_idaho_1991",
    sourceUrl: "https://catalog.afi.com/Film/58952-MY-OWN-PRIVATE-IDAHO",
    scenarioType: "american_independent_queer_road_shakespeare_actor_development_specialty_distribution",
    requiredChoicesSeed: {
      screenplay: ["three_project_synthesis", "shakespeare_layer_kept_distinct", "phoenix_campfire_contribution_preserved"],
      camera: ["edwards_campbell_dual_cinematography_credit", "35mm_format_level_only", "no_invented_camera_lens_stock_exposure_or_lab"],
      editing: ["curtiss_clayton_editorial_authorship", "screenplay_development_separate_from_final_edit", "restoration_not_original_edit"],
      sound: ["bill_stafford_music_separate", "original_sound_not_restoration_audio", "no_invented_recorder_microphone_adr_foley_or_mix_hardware"],
      themes: ["film_history", "1990s", "new_queer_cinema", "american_independent", "gus_van_sant", "river_phoenix", "keanu_reeves", "laurie_parker", "idaho_productions", "fine_line_features", "new_line", "shakespeare", "henry_iv", "portland", "seattle", "rome", "eric_alan_edwards", "john_campbell", "curtiss_clayton", "david_brisbin", "beatrix_aruna_pasztor", "bill_stafford", "budget_variance", "runtime_variance", "representation_safeguards"],
    },
    learningGoals: [
      "Model My Own Private Idaho as an independent production shaped by writing, performance, location work, craft departments and specialty distribution rather than by one auteur label alone.",
      "Keep Idaho Productions, New Line-related production framing, Fine Line distribution and New Line International distribution roles distinct where institutional records differ.",
      "Reconstruct Van Sant's screenplay as a synthesis of three earlier writing projects, including a Shakespeare/Prince Hal strand, without treating adaptation as literal transcription.",
      "Preserve River Phoenix's documented campfire-scene and Mike-character contribution inside, not instead of, Van Sant's screenplay authorship.",
      "Treat New Queer Cinema as a historical critical formation with plural practices rather than a single queer aesthetic or production recipe.",
      "Use AFI's 1 November 1990 principal-photography start and Portland/Seattle/Rome locations without inventing a complete schedule or location map.",
      "Keep Eric Alan Edwards and John Campbell's co-cinematography credit intact rather than arbitrarily assigning one DP to the whole film.",
      "Use 35mm only at the format level directly supported by Venice/Academy evidence and leave unsupported camera, lens, stock, filter, exposure and lab details unset.",
      "Keep David Brisbin production design and Beatrix Aruna Pasztor costume design distinct from cinematography and location selection.",
      "Keep Curtiss Clayton's final editing distinct from screenplay revision, actor-originated dialogue and later restoration work.",
      "Keep Bill Stafford's music distinct from production/post sound and from later remastered audio tracks.",
      "Preserve $2.5m/$3.5m contemporary cost-report variance instead of presenting one number as an audited production ledger.",
      "Preserve 104/105-minute institutional runtime variance while using the convergent 104-minute AFI/BFI/Criterion record as canonical gameplay runtime.",
      "Keep Criterion's later 4K scan and remastered audio downstream from the original 1990 production and 1991 release.",
      "Treat the film's queer/street-youth subject matter with representation safeguards; historical observation is not a modern consent or research protocol.",
      "Use festival, National Film Registry and New Queer Cinema recognition as reception/legacy evidence, not as proof of undocumented production technique.",
      "Avoid inventing daily shooting hours, housing arrangements, actor research practices, shot-list/storyboard methods, sound hardware, intimate-scene procedures or distribution economics absent from authoritative sources.",
    ],
    phases: [
      { id: "writing_synthesis", label: "Combine three writing projects into one road-and-Shakespeare structure", player_task: "Track Van Sant's street-youth, Idaho and Prince Hal/Shakespeare strands as distinct inputs that were combined during Drugstore Cowboy editing; do not rewrite the result as a single-source adaptation." },
      { id: "package_and_finance", label: "Package an independent feature around Phoenix, Reeves and Laurie Parker", player_task: "Keep production-company, New Line and Fine Line roles source-specific and preserve $2.5m/$3.5m cost-report variance without inventing contract or financing terms." },
      { id: "actor_character_development", label: "Allow performance work to reshape Mike's emotional arc", player_task: "Preserve Phoenix's documented expansion of the campfire scene and change to Mike's characterization, with Reeves' cooperation, while keeping final screenplay authorship and later anecdotes distinct." },
      { id: "location_production", label: "Move the production through Portland, Seattle and Rome", player_task: "Use AFI's verified locations and 1 November 1990 principal-photography start while leaving unsupported route, daily schedule, permits, travel logistics and unit size unset." },
      { id: "camera_and_format", label: "Photograph the road film on 35mm with two credited cinematographers", player_task: "Credit Eric Alan Edwards and John Campbell, retain 35mm at format level only and do not invent body/lens/stock/filter/exposure/lab specifications." },
      { id: "design_costume_world", label: "Build street, civic and Shakespearean worlds through design and costume", player_task: "Keep David Brisbin and Beatrix Aruna Pasztor visible as separate departments and avoid inferring undocumented materials, sourcing or construction methods." },
      { id: "performance_and_representation", label: "Stage vulnerable, queer and street-youth material without reducing subjects to texture", player_task: "Treat the historical film as evidence about 1990 production while applying present-day informed consent, safeguarding, privacy and compensation standards to comparable research or performance work." },
      { id: "editing", label: "Shape the heterogeneous road, dream and Shakespeare material in post", player_task: "Credit Curtiss Clayton and keep editing distinct from writing/actor revisions; do not project later deleted scenes or restoration decisions backward into the original cut process." },
      { id: "sound_and_music", label: "Finish dialogue, sound and Bill Stafford's music as separate layers", player_task: "Keep score and sound distinct, and do not infer recorder, microphone, ADR, Foley, workstation or mix-stage details from later remaster information." },
      { id: "release_and_preservation", label: "Move from specialty release to later canonization and restoration", player_task: "Separate Fine Line/New Line distribution, festival/New Queer Cinema reception, National Film Registry status and Criterion 4K restoration from original production; preserve 104/105 runtime variance." },
    ],
  },
] as const;

export function mergeChapterSeventeenMyOwnPrivateIdahoExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenMyOwnPrivateIdahoExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_my_own_private_idaho_verified",
      source: { list_id: "manual_chapter_seventeen_my_own_private_idaho_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: { title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 },
      scenario_type: definition.scenarioType,
      production_challenge: definition.premise,
      required_choices_seed: definition.requiredChoicesSeed,
      phases: definition.phases,
      learning_goals_seed: definition.learningGoals,
      manual_enrichment_needed: [],
    });
    nextPosition += 1;
  }
  return merged;
}
