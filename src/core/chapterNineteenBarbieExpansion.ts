import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenBarbieExpansionDefinitions = [{
  id: "scenario_barbie_2023",
  title: "Barbie",
  originalTitle: "Barbie",
  aliases: ["Barbie"],
  year: 2023,
  titleType: "Movie",
  runtimeMins: 114,
  directors: ["Greta Gerwig"],
  genres: ["Comedy", "Fantasy"],
  sourceId: "panavision_barbie_rodrigo_prieto_2023",
  sourceUrl: "https://www.panavision.com/highlights/highlights-detail/collector%27s-edition",
  scenarioType: "award_priority_oscar_original_song_best_picture_nominee_physical_barbieland_system65_large_format_digital_authentic_artificiality_23_percent_toy_scale_practical_sets_minimal_cgi_musical_edit_score_song_pipeline_2023",
  premise: "Build Barbie as a Chapter 19 award-priority Production Case because the Academy records What Was I Made For? as the 2024 Oscar winner for Original Song and Barbie as a Best Picture nominee. Awards establish selection/reception priority only. Runtime provenance is locked to BBFC's UK 2D cinema master at 113m54s, rounded to 114 playable minutes; its 114m01s home-entertainment master remains a separate version record. Greta Gerwig and Rodrigo Prieto developed Barbieland and the real world as distinct but connected image systems. Prieto directly documents digital large-format capture with Panavision System 65 spherical optics and an 'authentic artificiality' rule: painted backdrops, simple frontal/lateral camera movement, permanent sunny backlight and theatrical physical effects rather than a falsely naturalistic toy world. Sarah Greenwood and Katie Spencer document Barbieland as a physical Warner Bros. Studios Hertfordshire build using a deliberate 23% scale reduction to make performers feel toy-like, open-front Dreamhouses, painted/flat graphic elements and minimal CGI. Prieto separately documents physical road/water/dolphin gags where the camera and vehicle can stay static while scenery moves. Jacqueline Durran's costume work was designed in close relation to set color and character function; published direct interviews document an unusually compressed preparation period and bespoke costume logic, but the complete costume build/purchase/continuity ledger remains unresolved. Editor Nick Houy describes a workflow built around large tonal shifts, musical numbers, chase compression and repeated recutting as songs evolved; this establishes editorial structure, not a complete Avid/storage/conform ledger. Mark Ronson and Andrew Wyatt document songs and score as linked but separate music systems: song demos/recording, Ryan Gosling's vocal performance, later arrangement growth against edited images, and repeated score revisions. The Oscar-winning Billie Eilish/Finneas song must remain separate from Ronson/Wyatt's score and I'm Just Ken work. Sound-post sources identify the re-recording team, but the full production-sound/ADR/Foley/premix/stem/delivery chain remains unresolved. The locked evidence does not establish a complete final budget, financing waterfall, exact shooting-day count, full camera-body/media/filter/data package, full lighting/electrical package, all set/prop/costume inventories, VFX shot/vendor census, complete edit infrastructure, full audio-post ledger, music licensing ledger or exact theatrical-to-home master lineage. Those boundaries remain explicit.",
  requiredChoicesSeed: {
    screenplay: ["award_priority_not_workflow_evidence", "bbfc_cinema_home_version_provenance", "barbieland_real_world_dual_system", "budget_finance_unresolved"],
    camera: ["digital_large_format", "panavision_system65_spherical", "authentic_artificiality", "simple_frontal_lateral_movement", "full_camera_data_ledger_unresolved"],
    editing: ["tone_shift_architecture", "musical_recutting", "chase_compression", "song_picture_iteration", "edit_infrastructure_unresolved"],
    sound: ["song_score_separation", "vocal_performance_pipeline", "re_recording_team_documented", "full_audio_ledger_unresolved"],
    themes: ["film_history", "2023", "barbie", "physical_sets", "large_format", "musical", "chapter19"]
  },
  learningGoals: [
    "Explain why Barbie's Oscar win establishes award priority without proving workflow.",
    "Use BBFC's 113m54s cinema master as 114 playable minutes.",
    "Keep the 114m01s home master as separate version provenance.",
    "Identify Greta Gerwig as director and co-writer without collapsing authorship roles.",
    "Explain Barbieland versus real-world visual systems.",
    "Identify digital large-format capture and Panavision System 65 spherical optics.",
    "Explain authentic artificiality as a camera/design rule.",
    "Explain why painted backdrops and visible theatricality were intentional.",
    "Explain permanent sunny backlight as a Barbieland lighting rule.",
    "Explain simple frontal/lateral camera behavior as storytelling grammar.",
    "Recognize Sarah Greenwood as production designer and Katie Spencer as set decorator.",
    "Explain the 23% scale reduction as a physical toy-scale strategy.",
    "Explain why open-front Dreamhouses preserve dollhouse logic.",
    "Distinguish flat painted/decal elements from photoreal environment simulation.",
    "Explain physical road, water and dolphin gags as practical scenic systems.",
    "Keep practical set work separate from the still-existing VFX pipeline.",
    "Recognize Jacqueline Durran's costume authorship.",
    "Explain costume/set color coordination as production integration.",
    "Keep complete costume fabrication and continuity ledgers unresolved.",
    "Recognize Nick Houy as editor.",
    "Explain editing across comedy, philosophy, musical and chase tones.",
    "Explain why musical numbers required picture/song iteration.",
    "Explain chase compression as rhythm management rather than coverage deletion alone.",
    "Keep full edit software/storage/proxy/conform history unresolved.",
    "Identify Mark Ronson and Andrew Wyatt's song/score production role.",
    "Keep What Was I Made For? separate from I'm Just Ken and underscore authorship.",
    "Explain Ryan Gosling's recorded vocal performance as a production input to picture/music integration.",
    "Explain arrangement growth after seeing picture as iterative post-production.",
    "Keep complete music licensing/recording ledger unresolved.",
    "Recognize re-recording sound as a separate department from music.",
    "Keep production sound, ADR, Foley, premix, stems and delivery unresolved.",
    "Explain why physical production does not mean zero VFX.",
    "Keep full VFX shot/vendor census unresolved.",
    "Keep exact shooting-day count unresolved.",
    "Keep final budget and financing waterfall unresolved.",
    "Keep full camera, lighting, electrical and data ledgers unresolved.",
    "Explain how toy scale, lens choice, camera grammar and set design reinforce one another.",
    "Explain how color and production design create toy-world legibility without miniature photography.",
    "Explain why real-world naturalism provides contrast rather than replacing Barbieland rules.",
    "Explain award reception as a separate evidence layer from craft documentation.",
    "Explain how a branded-IP production can still create an authored physical production system.",
    "Explain why tactile design choices matter even inside a digitally captured feature.",
    "Explain how editorial tone transitions protect emotional continuity.",
    "Explain how songs function as production assets rather than post-release extras.",
    "Explain why score drafts and song recordings should not be merged into one undifferentiated music claim.",
    "Explain why theatrical and home runtime records require version provenance.",
    "Preserve uncertainty instead of inferring missing budget, schedule or vendor records.",
    "Close the case only when award, runtime, camera, design, costume, edit, music, sound and unresolved boundaries agree.",
    "Maintain Chapter 19's distinction between physical craft and digital post.",
    "Use direct craft interviews over secondary speculation for workflow claims."
  ],
  phases: [
    { id: "award_priority", label: "Lock Oscar priority", player_task: "Use the award for selection priority only." },
    { id: "runtime", label: "Lock cinema runtime", player_task: "Use BBFC 113m54s and preserve home-master variance." },
    { id: "worlds", label: "Split the worlds", player_task: "Define Barbieland and real-world image systems separately." },
    { id: "large_format", label: "Choose large format", player_task: "Use digital large format with System 65 spherical optics." },
    { id: "artificiality", label: "Define authentic artificiality", player_task: "Make theatricality a rule, not a flaw." },
    { id: "camera_grammar", label: "Simplify camera movement", player_task: "Favor frontal, lateral and straight moves in Barbieland." },
    { id: "backlight", label: "Keep Barbieland sunny", player_task: "Maintain designed backlight across camera direction changes." },
    { id: "toy_scale", label: "Scale the Dreamhouse", player_task: "Use 23% reduction to produce toy-like performer scale." },
    { id: "physical_build", label: "Build Barbieland", player_task: "Favor tactile sets and painted elements." },
    { id: "practical_gags", label: "Move the scenery", player_task: "Use physical water, dolphins and road movement around a static car/camera." },
    { id: "costume", label: "Coordinate costume", player_task: "Align character wardrobe and set color without inventing a full inventory." },
    { id: "real_world", label: "Shift to naturalism", player_task: "Let real-world camera/design rules contrast Barbieland." },
    { id: "edit_comedy", label: "Protect A-plus comedy", player_task: "Compress material while preserving story rhythm." },
    { id: "edit_tone", label: "Bridge tonal shifts", player_task: "Move from broad comedy to emotional/philosophical beats without whiplash." },
    { id: "musical_picture", label: "Cut musical numbers", player_task: "Iterate picture as song versions develop." },
    { id: "song_recording", label: "Record character vocals", player_task: "Treat performance recording as part of the sequence pipeline." },
    { id: "arrangement", label: "Grow the arrangement", player_task: "Adapt music after seeing the finished scale of picture/performance." },
    { id: "score", label: "Revise underscore", player_task: "Keep score iteration distinct from pop-song production." },
    { id: "sound_post", label: "Build the mix", player_task: "Keep re-recording and effects separate from music." },
    { id: "vfx_boundary", label: "Preserve VFX boundaries", player_task: "Do not turn minimal-CGI design intent into a zero-VFX claim." },
    { id: "budget_boundary", label: "Freeze finance unknowns", player_task: "Do not infer budget structure from box office or brand scale." },
    { id: "schedule_boundary", label: "Freeze schedule unknowns", player_task: "Do not invent exact shoot days." },
    { id: "camera_boundary", label: "Freeze camera unknowns", player_task: "Keep unsupported body/media/filter/data details unresolved." },
    { id: "design_boundary", label: "Freeze design unknowns", player_task: "Keep full construction, prop and costume ledgers unresolved." },
    { id: "edit_boundary", label: "Freeze edit unknowns", player_task: "Keep infrastructure and conform history unresolved." },
    { id: "audio_boundary", label: "Freeze audio unknowns", player_task: "Keep production-sound and delivery details unresolved." },
    { id: "music_boundary", label: "Freeze music unknowns", player_task: "Keep complete licensing/session ledger unresolved." },
    { id: "production_verification", label: "Close Barbie audit", player_task: "Verify award, versions, image, design, edit, music, sound and uncertainty before promotion." }
  ]
}] as const;

export function mergeChapterNineteenBarbieExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenBarbieExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({ id: definition.id, status: "manual_chapter_nineteen_barbie_verified", source: { list_id: "manual_chapter_nineteen_barbie_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl }, film: { title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 }, scenario_type: definition.scenarioType, production_challenge: definition.premise, required_choices_seed: definition.requiredChoicesSeed, phases: definition.phases, learning_goals_seed: definition.learningGoals, manual_enrichment_needed: [] });
    nextPosition += 1;
  }
  return merged;
}
