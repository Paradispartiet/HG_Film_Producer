import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenSpiritedAwayExpansionDefinitions = [
  {
    id: "scenario_spirited_away_2001",
    title: "Spirited Away",
    originalTitle: "Sen to Chihiro no Kamikakushi",
    year: 2001,
    titleType: "Movie",
    runtimeMins: 125,
    directors: ["Hayao Miyazaki"],
    genres: ["Animation", "Adventure", "Fantasy"],
    premise: "Build Spirited Away as a Chapter 18 anchor for Studio Ghibli's hand-drawn 2D feature animation operating through a substantially digital finishing pipeline. Studio Ghibli's official work record identifies Hayao Miyazaki as original-story author, screenwriter and director, Toshio Suzuki as producer, Joe Hisaishi as composer, Toho as Japanese distributor and the running time as approximately 125 minutes. A contemporaneous Miyazaki interview explains that he did not begin with a finished story/script: production started while he was still drawing storyboards, the narrative developed in parallel with production, and Spirited Away ultimately contained 1,415 shots rather than the roughly 1,200 he initially expected. Preserve this storyboard-led development as a documented production method rather than translating it into the false claim that the film lacked planning, authorship or a screenplay credit. Miyazaki's 2002 US appearance, reported by Animation World Network, draws the crucial technical boundary: he states that the drawings and bathhouse artwork were hand-drawn and that the animation was fundamentally pencil-drawn, while digital techniques were used selectively for effects such as wave patterns and bubbling water. Studio Ghibli's own 2001 production diary independently documents a digital workflow involving scanned material, cleanup/dust removal and digital paint, including a training session for JEM; in May it records roughly 10,000 frames passing through scan, cleanup and paint work over ten days and emphasizes that boxes of key/in-between drawings still represented human-drawn labor. Ghibli's October 2001 publishing diary states that Spirited Away was a fully digital production in the finishing sense: traditional cels and physical paint were no longer used at Ghibli, and color designer Michiyo Yasuda made color decisions on computer. These claims must be reconciled rather than opposed: the film's drawings remained hand/pencil-drawn while coloring, finishing/compositing and selected effects were digital. Ghibli's official history places this transition in a longer studio trajectory: digital compositing accelerated with Whisper of the Heart, digital paint was introduced on Princess Mononoke, and a formal CG department was established afterward. Do not therefore label Spirited Away a 3D-CG feature. A Japanese Disney/Ghibli credit page identifies animation directors Masashi Ando, Kitaro Kosaka and Ai Kagawa, art director Yoji Takeshige, color designer Michiyo Yasuda and image director Atsushi Okui alongside Studio Ghibli production. Ghibli's May diary records cutting work, ongoing key/in-between drawing checks and orchestra recording on May 28 with Miyazaki and Suzuki attending; the June diary records final sound mixing, audio-negative handling, DTS mastering and the end of all studio work after an extended final post-production push. Keep orchestral recording, sound mix/mastering and image finishing as distinct departments rather than one generic 'post' stage. The Academy records Spirited Away as the winner of the 2002/75th Animated Feature Film award for Hayao Miyazaki; this and later international circulation belong to reception, not original production evidence. Do not invent exact software versions, scanner models, workstation hardware, compositing software, paint-system settings, render-farm topology, frame counts beyond documented production-log examples, animator-by-shot allocation, exact color-management transforms, film-recording/print chain, sound hardware, mix-console topology, budget, full schedule or version/restoration genealogy where reviewed title-specific sources do not establish them.",
    sourceId: "ghibli_spirited_away_2001",
    sourceUrl: "https://www.ghibli.jp/works/chihiro/",
    scenarioType: "studio_ghibli_hand_drawn_2d_storyboard_led_digital_paint_compositing_selective_effects_animation_2001",
    requiredChoicesSeed: {
      screenplay: ["storyboard_led_story_development", "production_parallel_with_storyboards", "formal_screenplay_credit_distinct_from_finished_script_method"],
      camera: ["hand_drawn_pencil_animation_base", "digital_scan_paint_composite_pipeline", "selective_digital_effects_not_3d_master_model", "no_invented_software_hardware_pipeline"],
      editing: ["cutting_during_active_animation_production", "1415_shot_final_structure", "image_finishing_distinct_from_editorial_cutting"],
      sound: ["hisaishi_orchestral_recording", "final_mix_audio_negative_and_dts_stages", "image_and_sound_post_kept_distinct", "no_invented_sound_hardware"],
      themes: ["film_history", "2000s", "spirited_away", "hayao_miyazaki", "toshio_suzuki", "studio_ghibli", "joe_hisaishi", "masashi_ando", "kitaro_kosaka", "ai_kagawa", "yoji_takeshige", "michiyo_yasuda", "atsushi_okui", "hand_drawn_animation", "pencil_animation", "storyboards", "digital_paint", "digital_compositing", "scan_cleanup", "selective_digital_effects", "2d_animation", "toho", "orchestra_recording", "final_mix", "dts_mastering", "academy_award"],
    },
    learningGoals: [
      "Place Spirited Away as a Chapter 18 anchor for hand-drawn 2D feature animation completed through a digital finishing pipeline, not as a 3D-CG feature.",
      "Keep Miyazaki's formal original-story/screenplay/director credit distinct from his documented method of starting production before the story and storyboards were fully complete.",
      "Explain storyboard-led development as an authored production process rather than shorthand for improvisation without structure.",
      "Use Miyazaki's 1,415-shot recollection as bounded evidence about final structural scale without inventing a complete shot ledger.",
      "Treat the character/background drawings as hand-drawn and the fundamental animation as pencil-drawn, consistent with Miyazaki's direct production testimony.",
      "Keep digital scan, cleanup, paint and compositing as finishing stages applied to hand-drawn material rather than evidence that the characters were principally generated in 3D.",
      "Use the documented wave-pattern and bubbling-water examples as selective digital-effect evidence without generalizing those techniques to every shot.",
      "Explain why Ghibli could call Spirited Away a fully digital production while Miyazaki simultaneously called the animation hand/pencil-drawn: the statements describe different pipeline layers.",
      "Treat Studio Ghibli's earlier adoption of digital compositing and digital paint as historical pipeline context, not as proof that every earlier or later film used the same workflow.",
      "Keep Masashi Ando, Kitaro Kosaka and Ai Kagawa's animation-direction roles distinct from Miyazaki's direction/storyboard authorship and the wider key/in-between animation workforce.",
      "Keep Yoji Takeshige's art direction, Michiyo Yasuda's color design and Atsushi Okui's image-direction work as separate visual-production responsibilities.",
      "Use Ghibli's diary evidence about thousands of scanned/cleaned/painted drawings as workload evidence without converting one ten-day count into a total-frame count for the feature.",
      "Distinguish digital color design on computer from traditional physical cel painting, which Ghibli states was no longer used on this production.",
      "Keep cutting/editorial work distinct from animation checking, digital paint, compositing and later sound finishing.",
      "Treat Joe Hisaishi's score and the May 28 orchestra recording as a music-production layer separate from dialogue, effects and final sound mixing.",
      "Keep June final mix, audio-negative handling and DTS mastering as documented sound/mastering stages without inventing console, recorder, track-layout or encoding details.",
      "Use Studio Ghibli's approximately 125-minute runtime as the gameplay duration without inventing alternate-cut or restoration histories.",
      "Keep Toho's Japanese distribution and the later international release/Academy campaign separate from Studio Ghibli's original production workflow.",
      "Treat the 75th Academy Award for Animated Feature as downstream reception rather than evidence about how drawing, paint or compositing choices were made.",
      "Do not invent exact software versions, scanners, workstations, compositing tools, color transforms, render infrastructure, shot assignments, film-recording parameters, sound hardware, full budget or complete schedule where sources do not establish them.",
    ],
    phases: [
      { id: "storyboard_parallel_development", label: "Develop the film while storyboards are still evolving", player_task: "Use Miyazaki's documented storyboard-led process while preserving formal screenplay authorship and resisting the claim that the production had no structure." },
      { id: "hand_drawn_animation", label: "Build the 2D performance in pencil and drawing", player_task: "Keep character/action drawing fundamentally hand-made and separate animation-direction, key-animation and in-between labor from digital finishing." },
      { id: "art_and_color_design", label: "Coordinate painted worlds and digital color design", player_task: "Keep art direction and color design distinct, with Yasuda's computer-based color decisions replacing physical cel-paint workflow without erasing hand-drawn source art." },
      { id: "scan_cleanup_paint", label: "Scan, clean and digitally paint drawn material", player_task: "Model the documented scan/cleanup/paint pipeline and workload without inventing scanner models, software versions or total-frame counts." },
      { id: "digital_compositing_effects", label: "Composite 2D layers and add selective digital effects", player_task: "Use digital enhancement where sourced, including water examples, while preserving Miyazaki's explicit 2D/pencil-drawn production boundary." },
      { id: "animation_check_and_cutting", label: "Cut while animation checking is still active", player_task: "Keep May cutting work, key/in-between checking and image finishing as overlapping but distinct production streams." },
      { id: "final_shot_structure", label: "Bring an expanding storyboard to a 1,415-shot feature", player_task: "Treat 1,415 as Miyazaki's documented final shot count while avoiding invented shot-by-shot production assignments or timing data." },
      { id: "orchestra_recording", label: "Record Hisaishi's orchestral score", player_task: "Keep the documented May orchestra session as music production, separate from dialogue/effects and later final mix." },
      { id: "sound_final_mix", label: "Complete final sound and master preparation", player_task: "Model June final mixing, audio-negative movement and DTS mastering as bounded stages without inventing hardware or track topology." },
      { id: "digital_2d_boundary", label: "Preserve the hand-drawn/digital-finishing distinction", player_task: "Resolve apparently conflicting labels by mapping hand/pencil drawing to source animation and digital technology to paint, compositing and selected effects rather than calling the feature 3D-CG." },
      { id: "distribution_boundary", label: "Separate production completion from Toho release", player_task: "Keep Studio Ghibli production and Toho distribution as different institutional stages, with international circulation later still." },
      { id: "award_reception_boundary", label: "Keep the Oscar downstream from production", player_task: "Use the Academy win as reception history only, never as retroactive proof of a production technique or workflow choice." },
    ],
  },
] as const;

export function mergeChapterEighteenSpiritedAwayExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenSpiritedAwayExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_spirited_away_verified",
      source: { list_id: "manual_chapter_eighteen_spirited_away_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
