import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenRinguExpansionDefinitions = [
  {
    id: "scenario_ringu_1998",
    title: "Ringu",
    originalTitle: "Ringu",
    year: 1998,
    titleType: "Movie",
    runtimeMins: 95,
    directors: ["Hideo Nakata"],
    genres: ["Horror", "Mystery"],
    premise: "Build Ringu as a 1998 Japanese horror production whose industrial importance lies in the conjunction of domestic genre filmmaking, analog-media anxiety and later transnational circulation—not in a claim that all Japanese horror shares one style. Hideo Nakata directed from Hiroshi Takahashi's screenplay, adapted from Koji Suzuki's novel; institutional catalog records identify Shinya Kawai, Takashige Ichise and Takenori Sento as producers, Junichiro Hayashi as cinematographer, Nobuyuki Takahashi as editor and Kenji Kawai as composer. The cursed videotape and television monitor are story objects and image systems inside a theatrically released feature. Gameplay must therefore separate the diegetic VHS/CRT signal from the production's camera negative or theatrical presentation: the presence of degraded video imagery is not evidence that the feature itself was acquired on consumer videotape, and a 35 mm distribution/catalog record is not enough to invent the exact camera body, negative stock, lenses, laboratory, telecine or effects chain. Preserve the investigative structure, restrained performance, off-screen space, framing, duration, sound restraint and the materiality of analog playback as separate production choices rather than reducing the film to Sadako iconography. The BFI describes the cursed videotape as central to the film's technological anxiety and later J-horror influence; that interpretive context belongs beside, not in place of, title-specific production evidence. Institutional runtime records differ—BFI catalog material gives 95 minutes, BFI Player 96 minutes and the Danish Film Institute 97 minutes—so gameplay uses the 95-minute BFI catalog anchor while explicitly recording the catalog variance instead of pretending there is one uncontested duration. DFI's technical listing records 35 mm, 1.85:1, color and DTS for its catalog/distribution context; these are presentation/catalog facts and must not be expanded into unsupported acquisition or mixing hardware claims. Keep the 1998 Japanese film distinct from the 1999 sequel, later Japanese franchise entries and the 2002 Hollywood remake. Later remake success is circulation and influence evidence, not original-production evidence. Do not invent exact budget, schedule, shooting ratio, camera/lens package, film stock, VHS camera model, monitor model, special-effects method, optical/telecine process, microphone package, track layout, edit system, laboratory or release-print provenance where reviewed sources do not establish it.",
    sourceId: "dfi_ringu_1998",
    sourceUrl: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/ring-0",
    scenarioType: "japanese_jhorror_analog_vhs_crt_investigation_transnational_1998",
    requiredChoicesSeed: {
      screenplay: ["hiroshi_takahashi_adaptation_structure", "investigation_and_seven_day_deadline", "japanese_original_distinct_from_later_remakes"],
      camera: ["junichiro_hayashi_cinematography_credit", "diegetic_vhs_distinct_from_feature_acquisition", "no_invented_camera_stock_lens_or_telecine_chain"],
      editing: ["nobuyuki_takahashi_editorial_credit", "investigation_playback_and_revelation_structure", "95_min_bfi_anchor_with_runtime_variance_recorded"],
      sound: ["kenji_kawai_score_credit", "restraint_ambience_dialogue_and_media_playback_distinct", "no_invented_microphone_mix_or_dts_production_chain"],
      themes: ["film_history", "1990s", "ringu", "ring", "hideo_nakata", "hiroshi_takahashi", "j_horror", "japanese_horror", "analog_media", "vhs", "crt_television", "onryo", "investigation", "junichiro_hayashi", "nobuyuki_takahashi", "kenji_kawai", "runtime_variance", "format_boundary", "transnational_remake_circulation"],
    },
    learningGoals: [
      "Place Ringu inside late-1990s Japanese genre production and the later international J-horror boom without treating Japanese horror as one homogeneous style.",
      "Keep Hideo Nakata's direction and Hiroshi Takahashi's screenplay adaptation distinct from producer, cinematography, editing, music and effects labor.",
      "Keep the producer credits of Shinya Kawai, Takashige Ichise and Takenori Sento visible as industrial functions rather than absorbing the production into director-auteur shorthand.",
      "Treat the cursed videotape and CRT television as diegetic media objects whose material properties drive story, framing, sound and audience knowledge.",
      "Never infer consumer-video acquisition for the whole feature merely because degraded videotape imagery appears inside the film.",
      "Never infer an exact camera negative, stock, lens or laboratory chain merely from a 35 mm catalog or distribution listing.",
      "Use Junichiro Hayashi's cinematography credit to study framing, off-screen space, exposure, movement and image texture without inventing camera or lens specifications.",
      "Separate the feature image, videotape insert/image system, monitor playback and theatrical presentation as distinct format layers.",
      "Treat analog-media anxiety as historically grounded interpretation while keeping it separate from unsupported technical reconstruction.",
      "Preserve the investigative structure and seven-day deadline as production constraints on scene order, information release and performance tension.",
      "Use Nobuyuki Takahashi's editing credit to model investigation, repeated playback, temporal clues and delayed revelation as editorial architecture.",
      "Keep editorial suspense distinct from supernatural explanation; cuts can control information without proving what mechanism caused an event.",
      "Keep Kenji Kawai's score distinct from dialogue, ambience, silence, television playback and other source sound.",
      "Treat the film's restraint in sound and shock construction as an authored choice without inventing microphones, track layouts, mixers or postproduction hardware.",
      "Record institutional runtime disagreement explicitly: use 95 minutes as the BFI catalog gameplay anchor while retaining 96- and 97-minute catalog variants as version metadata.",
      "Treat DFI's 35 mm, 1.85:1, color and DTS listing as catalog/presentation evidence rather than proof of the original acquisition and production-sound chain.",
      "Keep the 1998 Japanese feature distinct from sequels, later franchise entries and the 2002 Hollywood remake.",
      "Use later remake circulation to study industrial influence and rights/circulation history, never to backfill undocumented 1998 production technique.",
      "Do not invent budget, schedule, shooting ratio, effects method, telecine path, VHS equipment or laboratory provenance where reviewed sources do not establish them.",
    ],
    phases: [
      { id: "adaptation_and_investigation", label: "Adapt the mystery around controlled information", player_task: "Keep Takahashi's adaptation, the investigative chain and seven-day deadline visible while separating what characters know from what the audience infers." },
      { id: "japanese_genre_packaging", label: "Package the 1998 Japanese horror feature", player_task: "Keep director, producers and production-company functions distinct, and do not import industrial assumptions from the later Hollywood remake." },
      { id: "analog_media_object", label: "Make the videotape and television material story objects", player_task: "Treat VHS/CRT playback as a diegetic media system without assuming the full feature was captured on consumer video." },
      { id: "feature_cinematography", label: "Build restrained feature cinematography", player_task: "Use Hayashi's credited cinematography to control framing, off-screen space, movement and image texture while leaving camera, lens and stock details unset unless directly sourced." },
      { id: "format_boundary", label: "Separate feature acquisition, video insert and theatrical presentation", player_task: "Do not derive acquisition hardware or telecine/effects methods from VHS-looking imagery or a 35 mm distribution listing." },
      { id: "performance_and_offscreen_space", label: "Sustain fear through restrained performance and space", player_task: "Coordinate performance, blocking and off-screen threat without inventing rehearsal systems or take counts absent from production evidence." },
      { id: "editing_and_playback", label: "Organize investigation and repeated playback", player_task: "Use Nobuyuki Takahashi's editorial credit to shape clue order, re-viewing, duration and revelation while keeping supernatural causation analytically separate." },
      { id: "score_sound_and_silence", label: "Build tension across distinct sound layers", player_task: "Keep Kawai's score, dialogue, ambience, silence and television/source playback distinct; do not invent microphone, mixer, track or DTS-production architecture." },
      { id: "runtime_and_version_boundary", label: "Record catalog variance instead of hiding it", player_task: "Use 95 minutes as the BFI catalog gameplay anchor and retain the 96- and 97-minute institutional catalog variants as explicit version metadata." },
      { id: "circulation_and_remake_legacy", label: "Trace influence without rewriting the 1998 production", player_task: "Treat later J-horror circulation, sequels and the Hollywood remake as downstream industrial history rather than evidence for the original production pipeline." },
    ],
  },
] as const;

export function mergeChapterSeventeenRinguExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenRinguExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, "Ring", "The Ring"].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_ringu_verified",
      source: { list_id: "manual_chapter_seventeen_ringu_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
