import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenHoopDreamsExpansionDefinitions = [
  {
    id: "scenario_hoop_dreams_1994",
    title: "Hoop Dreams",
    originalTitle: "Hoop Dreams",
    year: 1994,
    titleType: "Movie",
    runtimeMins: 171,
    directors: ["Steve James"],
    genres: ["Documentary", "Sport"],
    premise: "Build Hoop Dreams as a longitudinal 1994 documentary production whose core problems are sustained access, institutional support, affordable broadcast-video acquisition, changing relationships with participants, hundreds of hours of material, long-form editorial construction, public-television/independent financing and later theatrical circulation. AFI records Kartemquin Films as production company, Fine Line Features as distributor, Steve James as director, Frederick Marx/Steve James/Peter Gilbert as producers, Peter Gilbert as cinematographer, Frederick Marx/Steve James/William Haugse as editors and 171 minutes. Kartemquin's own current film page gives 176 minutes; Danish Film Institute gives 174; UCLA's restoration presentation gives 170. Use 171 minutes as canonical gameplay runtime because AFI provides a detailed contemporary-catalogue production record, while preserving 170/171/174/176 as explicit exhibition/catalogue variance. Duration of production also depends on what is being measured. Kartemquin/UCLA describe following William Gates and Arthur Agee for about five years and amassing roughly/over 250 hours of footage. In DGA visual-history material, Steve James describes six years of recording and 250-plus hours. In retrospective conversation he also describes Hoop Dreams as taking roughly seven or eight years to make when development, fundraising, shooting and finishing are considered more broadly. Keep these boundaries distinct: do not fabricate one exact principal-photography schedule from them. James' first-person accounts say the project began with little money, received a small Illinois Arts Council grant, was taken under Kartemquin's wing, and relied on sponsored work and later funding to sustain production. He says he originally wanted to shoot film but could not afford it; broadcast-quality video was the practical requirement, and Peter Gilbert joined partly because he owned the needed camera and shared an interest in basketball. This supports the economic/technical choice of video but does not establish a camera model, tape stock, codec, frame rate, lens package or recorder. James also recalls Kartemquin's simple VHS offline linear-editing setup, which was not frame accurate. Treat this as specific historical post-production infrastructure, not as a complete account of every editing stage or final conform. Documentary method is central: the filmmakers followed two young athletes, their families, schools and basketball systems over formative years. Long-term access is not a license for unlimited capture. Present-day documentary practice must use age-appropriate informed consent/assent where relevant, guardian/participant communication, privacy review, safeguarding, limits around vulnerable moments, data security, and an editorial process that weighs public interest against foreseeable harm. Do not claim historical procedures that the reviewed sources do not document. The film's later theatrical success, Sundance audience award and Academy nomination are downstream distribution/reception evidence; they do not prove how any particular scene was recorded. UCLA documents later restoration by the Academy Film Archive/UCLA/Sundance-related preservation effort; that restoration must remain separate from original video acquisition and 1994 finishing. Do not invent camera model, lens, tape format, audio recorder, microphone package, lighting setup, crew schedule, consent form language, school permissions, participant compensation, storage architecture, edit hardware beyond James' VHS-offline testimony, or restoration choices absent from the reviewed sources.",
    sourceId: "afi_hoop_dreams_1994",
    sourceUrl: "https://catalog.afi.com/Film/60030-HOOP-DREAMS",
    scenarioType: "longitudinal_documentary_kartemquin_video_access_editing_distribution",
    requiredChoicesSeed: {
      screenplay: ["documentary_structure_from_observed_material", "no_fiction_screenplay_claim", "editorial_arc_separate_from_event_chronology"],
      camera: ["broadcast_quality_video_as_cost_constraint", "peter_gilbert_camera_partnership", "no_invented_camera_model_lens_tape_codec_or_frame_rate"],
      editing: ["marx_james_haugse_editorial_authorship", "vhs_offline_linear_history_source_bound", "runtime_170_171_174_176_variance_preserved"],
      sound: ["location_documentary_sound_without_hardware_invention", "music_and_final_sound_separate", "no_invented_recorder_microphone_or_mix_recipe"],
      themes: ["film_history", "1990s", "hoop_dreams", "documentary", "longitudinal_documentary", "kartemquin", "steve_james", "frederick_marx", "peter_gilbert", "william_haugse", "broadcast_video", "vhs_offline_editing", "sundance", "fine_line_features", "public_television", "participant_access", "documentary_ethics", "runtime_variance", "restoration_boundary"],
    },
    learningGoals: [
      "Model Hoop Dreams as a long-term Kartemquin documentary production rather than a finished-film success story.",
      "Keep the roughly five-year participant-following period, James' six-year recording description and seven/eight-year total project framing as different production boundaries.",
      "Treat AFI's 171 minutes as canonical gameplay runtime while preserving 170/171/174/176 exhibition and catalogue variance.",
      "Keep Kartemquin institutional support, small early grant support, sponsored-work survival and later funding as distinct financing/support mechanisms.",
      "Use James' inability to afford film and need for broadcast-quality video as documented economic/technical constraints.",
      "Treat Peter Gilbert's camera ownership and basketball interest as reasons for a production partnership without inventing camera model or acquisition specifications.",
      "Do not infer tape format, codec, frame rate, lenses, exposure, lighting or recorder package from the generic fact of broadcast-quality video.",
      "Keep cinematography by Peter Gilbert distinct from Steve James/Frederick Marx producing/directing and from editorial authorship.",
      "Use roughly/over 250 hours of footage as a source-backed scale indicator without fabricating exact shooting-day totals or storage volume.",
      "Keep Frederick Marx, Steve James and William Haugse's editorial work central to turning longitudinal observation into a feature structure.",
      "Use James' VHS offline linear-editing testimony only for the historical offline system; do not extrapolate a complete post-production pipeline.",
      "Distinguish participant life chronology from editorial chronology and avoid presenting documentary construction as unmediated reality.",
      "Treat sustained access to young people, families and schools as an ethical responsibility rather than a license for unlimited recording.",
      "Require present-day age-appropriate consent/assent, privacy and safeguarding review, participant communication and secure media handling without inventing historical consent procedures.",
      "Keep Fine Line theatrical distribution, Sundance recognition and later awards downstream from original field production.",
      "Keep later restoration separate from original video acquisition and 1994 post-production technology.",
      "Do not invent crew schedules, participant compensation, school permissions, audio hardware, storage architecture or restoration steps absent from reviewed sources.",
    ],
    phases: [
      { id: "proposal_and_support", label: "Turn a small basketball-documentary idea into a sustainable Kartemquin project", player_task: "Map early grant support, Kartemquin sponsorship and the evolving funding model without inventing grant amounts or a single fully financed starting budget." },
      { id: "video_constraint_and_camera_partner", label: "Choose affordable broadcast-quality acquisition", player_task: "Use James' film-cost constraint and Peter Gilbert's camera partnership as source-backed decisions while leaving camera model, lenses, tape, codec and frame rate unset." },
      { id: "access_and_relationships", label: "Build sustained access without treating participants as raw material", player_task: "Plan present-day participant communication, age-appropriate consent/assent, privacy boundaries and safeguarding while avoiding claims about undocumented historical paperwork." },
      { id: "longitudinal_fieldwork", label: "Follow lives and institutions over years", player_task: "Preserve five-year/six-year source framing as different boundaries; do not invent a day-by-day shoot schedule, fixed crew size or constant recording intensity." },
      { id: "observational_camera_sound", label: "Record unfolding events with a small documentary unit", player_task: "Keep Peter Gilbert's cinematography and documentary sound distinct; do not infer lighting, microphone, recorder or camera package beyond the documented broadcast-video constraint." },
      { id: "footage_management", label: "Manage hundreds of hours without converting scale into false precision", player_task: "Use 250-plus hours as a scale marker while designing secure modern logging/storage practice independently; do not invent historical storage media or capacity." },
      { id: "offline_editing", label: "Shape material through historically limited offline editing", player_task: "Use James' simple non-frame-accurate VHS linear offline testimony and keep it distinct from final conform/finishing stages not established by the reviewed sources." },
      { id: "feature_construction", label: "Compress years of observation into a responsible feature narrative", player_task: "Keep Marx, James and Haugse's editorial authorship visible and distinguish narrative construction from claims that the film presents life without mediation." },
      { id: "distribution_and_reception", label: "Move from public-documentary infrastructure to theatrical circulation", player_task: "Keep Fine Line distribution, Sundance response and later awards as downstream industrial/reception events rather than evidence about field technique." },
      { id: "versions_and_restoration", label: "Preserve runtime and preservation boundaries", player_task: "Use 171 minutes canonically while retaining 170/174/176 records; keep later Academy/UCLA preservation work separate from original acquisition and finishing." },
    ],
  },
] as const;

export function mergeChapterSeventeenHoopDreamsExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenHoopDreamsExpansionDefinitions) {
    const acceptedTitles = [definition.title].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_hoop_dreams_verified",
      source: { list_id: "manual_chapter_seventeen_hoop_dreams_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
