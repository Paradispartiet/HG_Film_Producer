import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenChungkingExpressExpansionDefinitions = [
  {
    id: "scenario_chungking_express_1994",
    title: "Chungking Express",
    originalTitle: "重慶森林",
    aliases: ["Chung Hing sam lam", "Chongqing Senlin"],
    year: 1994,
    titleType: "Movie",
    runtimeMins: 102,
    directors: ["Wong Kar Wai"],
    genres: ["Comedy", "Drama", "Romance"],
    premise: "Build Chungking Express as a 1994 Jet Tone Hong Kong production whose rapid schedule, split cinematography, unfinished-writing process, location improvisation, editorial construction and pop-music system are documented without turning spontaneity into a myth of craftlessness. Hong Kong Film Archive records that Wong Kar Wai formed Jet Tone Films Limited with Jeff Lau in 1991 and that the company produced Chungking Express, Ashes of Time and Fallen Angels. BFI records that Chungking Express was shot in only 23 days during a break from Ashes of Time, while Criterion describes it as a quick Jet Tone project made in roughly three months start to finish. Keep 23 shooting days and the broader three-month start-to-finish description as different schedule measures rather than contradictory totals. BFI's Christopher Doyle interview states that the production began before Wong had finished writing, that the second story was written in one day and that a third story later became Fallen Angels. Treat this as a documented iterative writing-production method, not evidence that no script pages, planning or continuity work existed. Wong's own 1995 Sight and Sound interview says Andrew Lau Wai-keung began as cinematographer, then left for another project; Wong brought Christopher Doyle in after meeting him in Tokyo, and Doyle reshot some previously filmed material both to unify the look and because Wong had rethought sequences. Keep Lau's first-section authorship and Doyle's later-section/reshoot authorship visible instead of attributing all imagery to one cinematographer. BFI identifies Lau with the Brigitte Lin/Takeshi Kaneshiro first segment and Doyle with the Tony Leung/Faye Wong second segment. Doyle recalls that they shot quickly, often in the busiest parts of Hong Kong, sometimes accepting what the public location allowed rather than an idealized setup. This historical location practice is descriptive evidence only: contemporary productions still require lawful permissions, crowd management, traffic/property safety and appropriate crew welfare. Doyle's own Central/Mid-Levels apartment became Cop 663's home after a location search; both BFI and Criterion interviews preserve this production choice. Doyle also recalls that flooding staged in the flat later caused damage to apartments below. Preserve that as a documented consequence of a historical production decision, never as practical-effects instruction or permission to create uncontrolled water damage. Criterion credits Wong as director, writer and producer; Chan Ye Cheng as executive producer; Jacky Pang Yee Wah as co-producer; Christopher Doyle and Andrew Lau Wai-keung as cinematographers; William Chang Suk Ping as production designer and editor; Hai Kit Wai and Kong Chi Leung as additional editors; and Frankie Chan for music. Keep William Chang's design/editing roles distinct from cinematography and Wong's authorship. The film's two-part structure, repeated motifs and city geography are highly worked even though production was fast: Criterion and BFI describe two divergent but rhyming love stories, while BFI's contemporary Wong interview documents reshoots and continuing script revision. Editing must therefore teach structural synthesis, not merely 'capturing improvisation.' Music is likewise a separate rights/editorial system. Criterion identifies Frankie Chan's music credit, while its scholarship and BFI discuss repeated sourced songs such as California Dreamin' and Faye Wong's Dreams. Do not infer original licensing contracts, stems, cue sheets, playback equipment or mix layouts unless separately sourced. Original format/version evidence also requires care. Criterion records Hong Kong, 1994, color, 1.66:1, Cantonese and 102 minutes; BFI's catalogue gives 97 minutes and BFI Player currently lists 1 hour 43 minutes (103). Retain 97/102/103 as institutional catalogue/exhibition variance and use 102 as canonical gameplay runtime because Criterion's film-specific edition record provides a stable original-version reference. BFI states that its current restoration came from the 35mm original camera negative; that establishes an original 35mm negative source but not camera body, lens set, stock emulsion, focal-length map, shutter, exposure, lighting package, laboratory recipe or step-printing parameters. BFI scholarship links Wong/Doyle to step-printing and kinetic blurred-motion aesthetics, but do not manufacture frame duplication counts, shutter angles, printer settings or exact shot recipes. Restoration is downstream: Criterion's 2021 edition is a director-approved 4K restoration with a 5.1 remix, and Wong explicitly states Chungking Express was made before 5.1 and had to be retooled for the restoration. Never project the later 5.1 configuration backward onto the 1994 sound master. Likewise later restoration color decisions, credits and cleanup cannot overwrite original capture/post evidence. Do not invent camera bodies, lenses, film stocks, filters, shutter angles, exposure, lighting diagrams, step-printing counts, laboratory timing, sound recorders, microphones, ADR/Foley routes, music-license terms, exact daily call sheets, public-location permits, crowd-control procedures or water-effects methods not established by the sources.",
    sourceId: "bfi_chungking_express_1994",
    sourceUrl: "https://www.bfi.org.uk/interviews/christopher-doyle-shooting-chungking-express",
    scenarioType: "jet_tone_23_day_split_cinematography_iterative_script_hong_kong_location_pop_music_editing",
    requiredChoicesSeed: {
      screenplay: ["unfinished_script_iterative_production", "second_story_written_in_one_day", "third_story_became_fallen_angels"],
      camera: ["andrew_lau_first_segment", "christopher_doyle_second_segment_and_reshoots", "35mm_original_negative_without_invented_camera_lens_stock_shutter_exposure_or_step_print_recipe"],
      editing: ["william_chang_hai_kit_wai_kong_chi_leung_credits", "two_story_structural_synthesis", "reshoots_and_revision_kept_distinct_from_editing"],
      sound: ["frankie_chan_music_and_sourced_pop_separate", "1994_sound_not_2021_5_1_remix", "no_invented_recorder_microphone_adr_foley_cue_sheet_or_mix_layout"],
      themes: ["film_history", "1990s", "hong_kong_cinema", "hong_kong_second_wave", "jet_tone", "wong_kar_wai", "andrew_lau", "christopher_doyle", "william_chang", "jacky_pang", "rapid_production", "23_day_shoot", "iterative_screenwriting", "location_filmmaking", "chungking_mansions", "central_hong_kong", "split_cinematography", "reshoots", "editing", "pop_music", "step_printing_boundary", "runtime_variance", "restoration_boundary", "public_location_safety", "property_effects_safety"],
    },
    learningGoals: [
      "Model Chungking Express as a Jet Tone production rather than a free-floating Wong Kar Wai auteur object.",
      "Keep the documented 23-day shoot distinct from Criterion's roughly three-month start-to-finish production description.",
      "Treat the unfinished screenplay, one-day writing of the second story and later migration of a third story into Fallen Angels as documented iterative development rather than proof that planning was absent.",
      "Preserve Andrew Lau Wai-keung's first-segment cinematography separately from Christopher Doyle's second-segment work and later reshoots.",
      "Use Wong's account of Doyle reshooting material for visual continuity and rewritten sequences as evidence that photography and revision interacted during production.",
      "Treat location improvisation in busy Hong Kong streets as historical evidence while requiring contemporary permissions, crowd/traffic control and crew welfare independently.",
      "Keep Christopher Doyle's apartment as a documented practical location choice without turning private-property access into a generic production shortcut.",
      "Record the historical flooding damage in Doyle's apartment as a consequence, never as instructions for uncontrolled water effects.",
      "Keep William Chang Suk Ping's production-design and editing roles visible and separate from Wong's direction and the cinematographers' image authorship.",
      "Treat the two-story structure and repeated motifs as a deliberate editorial/narrative system even though the shoot was fast and iterative.",
      "Separate Frankie Chan's music credit from sourced pop songs and leave undocumented licensing contracts, stems and cue sheets unset.",
      "Preserve 97/102/103-minute institutional runtime variation and use 102 minutes only as the canonical gameplay record.",
      "Use the 35mm original-negative restoration source only to establish an original 35mm negative, not an unsupported camera, lens, stock, shutter, exposure or laboratory recipe.",
      "Teach step-printing and blurred-motion aesthetics only at the source-supported conceptual level; do not invent printer counts, shutter angles or frame recipes.",
      "Keep the 2021 director-approved 4K restoration downstream from the 1994 production and never use its color/cleanup decisions as original-production proof.",
      "Keep Wong's explicit statement that the original predates 5.1 separate from the later restoration's 5.1 remix.",
      "Avoid inventing unsupported camera, lens, stock, filter, shutter, lighting, lab, sound-hardware, ADR/Foley, music-rights, permit, crowd-control, call-sheet or water-effects details.",
    ],
    phases: [
      { id: "jet_tone_package", label: "Frame the rapid feature inside Jet Tone", player_task: "Track Wong's producer/writer/director role, Chan Ye Cheng, Jacky Pang and Jet Tone as an industry package rather than reducing the project to personal improvisation." },
      { id: "iterative_screenplay", label: "Write while production is moving", player_task: "Preserve the unfinished-script start, one-day second-story writing and later Fallen Angels migration without claiming that all dialogue or blocking was invented on camera." },
      { id: "first_segment_camera", label: "Photograph the first story with Andrew Lau", player_task: "Keep Andrew Lau Wai-keung's first-segment authorship explicit while leaving undocumented body, lenses, stock, filter, shutter, exposure and lighting details unset." },
      { id: "doyle_handover", label: "Change cinematographers without erasing continuity", player_task: "Model Doyle's takeover and selective reshoots as a visual/revision handoff, not as evidence that Lau's work vanished from the finished film." },
      { id: "public_location_work", label: "Work rapidly in live Hong Kong locations", player_task: "Use the documented 23-day pace and busy-street constraints as history while treating permissions, traffic/crowd control and crew welfare as mandatory contemporary systems." },
      { id: "apartment_location", label: "Turn Doyle's apartment into Cop 663's home", player_task: "Track the found-location decision and documented downstream water damage without deriving unsafe flooding methods or assuming private-property access." },
      { id: "design_and_performance", label: "Coordinate location texture, design and performance", player_task: "Keep William Chang's design role and the cast's documented adaptive performance environment distinct from cinematography and script revision." },
      { id: "editing_structure", label: "Bind two stories through editorial echoes", player_task: "Use the William Chang/Hai Kit Wai/Kong Chi Leung editing credits and repeated motifs to make structure legible without inventing cutting-room hardware or exact edit chronology." },
      { id: "music_and_sound", label: "Separate score, sourced songs and original sound", player_task: "Keep Frankie Chan's music, sourced pop and original 1994 sound distinct; do not project the later 5.1 remix backward or invent licensing/mix specifications." },
      { id: "format_version_restoration", label: "Protect original evidence from restoration metadata", player_task: "Retain 97/102/103-minute variance, 35mm original-negative evidence and the later 4K/5.1 restoration as separate version layers." },
    ],
  },
] as const;

export function mergeChapterSeventeenChungkingExpressExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenChungkingExpressExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_chungking_express_verified",
      source: { list_id: "manual_chapter_seventeen_chungking_express_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
