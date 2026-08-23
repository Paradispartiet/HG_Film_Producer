import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenPrincessMononokeExpansionDefinitions = [
  {
    id: "scenario_princess_mononoke_1997",
    title: "Princess Mononoke",
    originalTitle: "もののけ姫",
    year: 1997,
    titleType: "Movie",
    runtimeMins: 133,
    directors: ["Hayao Miyazaki"],
    genres: ["Animation", "Adventure", "Fantasy"],
    premise: "Build Princess Mononoke as Studio Ghibli's 1997 feature-production transition in which a predominantly hand-drawn animation system absorbed limited digital paint, CG and compositing without becoming a fully digital production. Studio Ghibli's official film page credits Hayao Miyazaki with original story, screenplay and direction, Toshio Suzuki as producer, Joe Hisaishi for music, Yoshikazu Mera for the theme song, Toho as Japanese distributor, a 12 July 1997 Japanese release and approximately 133 minutes. BFI independently corroborates Miyazaki, Suzuki and the 1997 Japanese production. Ghibli's own production diary gives unusually granular process evidence. In early January Miyazaki's storyboard had only just reached a provisional completion at more than 130 minutes and was immediately revised, so storyboard is a living production-control document rather than a static preproduction artifact. The diary records voice sessions from February into May under sound director Kazuhiro Wakabayashi, including a deliberate studio choice intended to pursue a different animation-sound approach. It separately records animation checks, finishing, special-effects animation, photography, editing and original-negative assembly work. Crucially, April entries say that part of the animation finishing was changed to digital paint, with effects work moved to separate cels; a Silicon Graphics computer was brought in for digital-paint work; and staff finishing inbetween work could be reassigned as operators. May entries show the digital-paint team still working, Takeshi Seyama's editing schedule/original assembly discussions, final group voice recording, Miyazaki attending orchestral recording, completion of digital-paint DR work and the digital-paint, CG and photography departments working while final compositing remained. Later September diary entries describe the NEXT production as the move toward full-scale computerization through digital paint, which is strong evidence that Princess Mononoke itself should be modeled as a hybrid transitional workflow rather than either 'entirely hand-made' or 'fully digital'. Atsushi Okui is credited as cinematography/animation-camera lead in surviving credit records and appears in Ghibli's diary as a photography/digital-work authority; Takeshi Seyama is directly identified in the diary's editing workflow. Preserve those departments as photography/compositing and editing systems rather than treating animation as if frames appeared directly from drawings. Keep supervising animation, key animation/inbetween/clean-up, color/paint, special effects, CG, photography/compositing, editing, dialogue recording, orchestral music and final film assembly distinct. Do not invent animation-drawing counts, frame counts, workstation totals, software names, scan resolutions, color-space values, compositing algorithms, camera stand/lens details or film-lab specifications absent from reviewed sources. Ghibli's official page uses about 133 minutes and BFI also records 133, so gameplay uses 133 without manufacturing false runtime conflict. The later Miramax English-language release, Neil Gaiman's English adaptation and English voice cast are downstream localization/distribution layers; they must not overwrite evidence about the original Japanese production, performance or sound workflow. Likewise current 4K/IMAX remasters are downstream and cannot be used to infer the 1997 image pipeline.",
    sourceId: "ghibli_princess_mononoke_1997",
    sourceUrl: "https://www.ghibli.jp/works/mononoke/",
    scenarioType: "studio_ghibli_hand_drawn_hybrid_digital_paint_cg_photography_compositing_1997_transition",
    requiredChoicesSeed: {
      screenplay: ["miyazaki_storyboard_as_live_production_control", "january_1997_over_130_min_revision", "original_japanese_story_separate_from_later_english_adaptation"],
      camera: ["atsushi_okui_animation_photography_role", "photography_and_compositing_distinct_from_drawing", "no_invented_camera_stand_lens_scan_resolution_or_lab"],
      editing: ["takeshi_seyama_editorial_workflow", "editing_and_original_assembly_separate_from_animation_finishing", "133_min_original_japanese_runtime"],
      sound: ["wakabayashi_japanese_sound_direction", "joe_hisaishi_orchestral_music_separate", "original_japanese_sound_separate_from_miramax_dub"],
      themes: ["film_history", "1990s", "princess_mononoke", "studio_ghibli", "hayao_miyazaki", "toshio_suzuki", "toho", "hand_drawn_animation", "storyboard", "supervising_animation", "digital_paint", "computer_graphics", "photography", "compositing", "atsushi_okui", "takeshi_seyama", "kazuhiro_wakabayashi", "joe_hisaishi", "hybrid_transition", "localization_boundary"],
    },
    learningGoals: [
      "Model Princess Mononoke as a hybrid transitional animation production rather than as either wholly analog or fully digital.",
      "Use Studio Ghibli's own 1997 diary as process evidence and distinguish contemporaneous production records from later retrospective mythology.",
      "Treat Miyazaki's storyboard as a living production-control system: the January 1997 version exceeded 130 minutes and was revised after provisional completion.",
      "Keep Miyazaki's story/screenplay/direction distinct from Toshio Suzuki's producer role and Toho's Japanese distribution role.",
      "Keep supervising animation, key animation, inbetween/clean-up and final animation checking as distinct labor stages rather than one generic drawing step.",
      "Use Ghibli's April record that part of finishing shifted to digital paint without claiming that all cels or all images were digitally painted.",
      "Keep special-effects animation on separate cels, digital paint, CG and photography/compositing as collaborating but distinct departments.",
      "Treat the Silicon Graphics computer arrival as evidence of production infrastructure without inventing machine counts, models, software, scan resolution or network architecture.",
      "Use May records of digital-paint, CG and photography departments plus remaining compositing work as evidence of a mixed finishing pipeline.",
      "Use Ghibli's later 1997 discussion of full-scale computerization for the next production to prevent projecting a fully digital pipeline backward onto Princess Mononoke.",
      "Keep Atsushi Okui's animation-photography/cinematography function distinct from drawn animation and from unsourced physical camera/lens assumptions.",
      "Keep Takeshi Seyama's editing and original-assembly workflow distinct from animation finishing and photography/compositing.",
      "Keep Kazuhiro Wakabayashi's Japanese sound direction and the original voice-recording process separate from later English dubbing.",
      "Keep Joe Hisaishi's orchestral music and Yoshikazu Mera's theme performance distinct from dialogue and sound-effects work.",
      "Use 133 minutes as the source-convergent original runtime rather than inventing a catalogue dispute where the reviewed institutional sources agree.",
      "Treat the 1999 Miramax/Neil Gaiman English-language version as localization and distribution history, not as evidence for original Japanese production decisions.",
      "Keep modern 4K/IMAX restorations and remasters downstream from the 1997 image-production and finishing evidence.",
    ],
    phases: [
      { id: "storyboard_and_schedule", label: "Use the storyboard to control an unusually long feature", player_task: "Track the January 1997 over-130-minute storyboard and immediate revision as active production planning rather than a frozen preproduction document." },
      { id: "animation_labor", label: "Coordinate supervising, key and inbetween animation", player_task: "Keep drawing/checking labor stages distinct and do not invent frame totals, drawing quotas or staffing counts absent from the diary." },
      { id: "colour_and_finishing", label: "Move selected finishing work into digital paint", player_task: "Use the documented partial digital-paint change without claiming the whole feature was digitally inked/painted or naming unsourced software." },
      { id: "special_effects_animation", label: "Separate special-effects animation from character finishing", player_task: "Follow the diary's separate effects-cel workflow and keep hand-drawn effects distinct from CG and final compositing." },
      { id: "cg_and_infrastructure", label: "Add limited CG and digital-production infrastructure", player_task: "Treat the CG department and Silicon Graphics infrastructure as sourced evidence while leaving workstation counts, software and rendering/compositing parameters unset." },
      { id: "photography_and_compositing", label: "Photograph and composite drawn and digital elements", player_task: "Keep Atsushi Okui/photography-department work and final compositing distinct from animation drawing; do not invent camera stand, lens, scan or lab specifications." },
      { id: "editing_and_original_assembly", label: "Edit while animation and finishing are still converging", player_task: "Use Seyama's documented schedule/original-assembly work as an editorial system separate from drawing, paint and compositing." },
      { id: "japanese_voice_recording", label: "Build the original Japanese vocal performance", player_task: "Use Ghibli's February-May sessions and Wakabayashi's sound-direction evidence; do not project later English voice choices backward into the Japanese production." },
      { id: "music_and_final_sound", label: "Record Hisaishi's orchestral score and finish sound", player_task: "Keep orchestra, theme song, dialogue and effects as separate sound layers and leave unsupported recorder, microphone, ADR/Foley or mix-console details unset." },
      { id: "release_and_localization", label: "Release through Toho before later international localization", player_task: "Lock the 12 July 1997 Japanese release and 133-minute original; treat Miramax/Gaiman English adaptation and current 4K presentations as downstream versions." },
    ],
  },
] as const;

export function mergeChapterSeventeenPrincessMononokeExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenPrincessMononokeExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, "Mononoke Hime"].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_princess_mononoke_verified",
      source: { list_id: "manual_chapter_seventeen_princess_mononoke_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
