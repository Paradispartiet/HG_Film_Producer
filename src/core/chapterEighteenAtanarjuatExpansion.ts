import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenAtanarjuatExpansionDefinitions = [
  {
    id: "scenario_atanarjuat_the_fast_runner_2001",
    title: "Atanarjuat: The Fast Runner",
    originalTitle: "Atanarjuat",
    year: 2001,
    titleType: "Movie",
    runtimeMins: 172,
    directors: ["Zacharias Kunuk"],
    genres: ["Drama"],
    premise: "Build Atanarjuat: The Fast Runner as a Chapter 18 anchor for Inuit-controlled, community-based digital feature production in which oral-history research, Inuktitut screenwriting, local training and labor, location logistics, traditional craft reconstruction, Digital Betacam acquisition and 35mm theatrical transfer remain analytically distinct. Igloolik Isuma Productions identifies itself as the production company, with the National Film Board of Canada as co-producer; its official film record gives a 172-minute Inuktitut independent fiction feature directed by Zacharias Kunuk, written by Paul Apak Angilirq, photographed by Norman Cohn and edited by Kunuk, Cohn and Marie-Christine Sarda. Isuma's press materials describe Angilirq first recording eight Igloolik elders telling their versions of the Atanarjuat legend, then leading a five-writer team that combined those accounts into an Inuktitut screenplay with an English version for outside readers; elders reviewed every stage for cultural accuracy, language, relationships and motivations. Preserve this as a documented research-and-writing process rather than treating oral tradition as an unmediated transcript. The same production account states that the cast was entirely Inuit and from Igloolik, while roughly 90% of the technical crew was Inuit, combining experienced workers with first-time trainees; a small number of southern professionals trained local crew in makeup, sound recording, continuity, stunts and special effects, while some southern specialists also participated in post-production. The production spent six months on location in the Igloolik region in 1999, with cast and crew camping in conditions similar to those represented in the historical drama. Norman Cohn describes the production culture as deliberately horizontal, based on consensus and collaboration rather than conventional vertical hierarchy; keep this as his account of this production system, not a universal claim about Inuit social organization. The official press kit states that Atanarjuat was shot in widescreen 16:9 Digital Betacam and transferred to 35mm at Digital Film Group in Vancouver through a 'smooth motion' process. That establishes acquisition and theatrical-transfer boundaries without licensing an invented camera body, lens package, tape stock, codec, exposure settings, lighting plan, transfer settings or laboratory genealogy. The National Film Board's detailed credits independently preserve Digital Film Group for digital-to-film transfer and extensive sound-post roles. Local artists and elders handmade costumes, props and sets using Inuit oral history and traditional knowledge alongside sketches and information from William Parry's 1822-23 expedition journals; James Ungalaaq led props/sets, while Atuat Akkitirq and Micheline Ammaq led costume work. Treat this historical reconstruction as researched dramatic production, not documentary footage of the distant past. Isuma states that Igloolik Isuma Productions was incorporated in 1990 as Canada's first Inuit independent production company and describes its mission as community-based media production; its press materials also identify the company as Inuit-owned. NFB describes the film as an Inuktitut feature made by Inuit filmmakers and explicitly calls it a drama rather than a documentary. Cannes records its 2001 Un Certain Regard selection, 172-minute duration and Caméra d'or. Keep Cannes recognition and later circulation downstream from the original production. Do not invent exact budget, financing shares beyond named institutional participation, daily schedule, exact camera body/lenses, recording media specifications, lighting ratios, sound hardware, stunt mechanics, weather chronology, complete location ledger, take counts, post-production hardware, transfer parameters or restoration/version genealogy where reviewed title-specific sources do not establish them.",
    sourceId: "isuma_atanarjuat_presskit",
    sourceUrl: "https://www.isuma.tv/sites/default/themes/atanarjuat/files/Atan_presskit.pdf",
    scenarioType: "inuit_community_owned_digital_feature_oral_history_inuktitut_location_craft_digital_betacam_35mm_transfer_2001",
    requiredChoicesSeed: {
      screenplay: ["eight_elder_oral_history_research", "five_writer_inuktitut_screenplay", "elder_review_without_transcript_equivalence"],
      camera: ["digital_betacam_16_9_acquisition", "norman_cohn_inside_action_strategy", "digital_to_35mm_boundary", "no_invented_camera_lens_settings"],
      editing: ["kunuk_cohn_sarda_editing", "oral_history_distinct_from_dramatic_selection", "digital_transfer_distinct_from_editorial_structure"],
      sound: ["location_sound_and_post_roles_distinct", "inuktitut_dialogue_centrality", "music_and_ajaja_traditions_kept_separate", "no_invented_sound_hardware"],
      themes: ["film_history", "2000s", "atanarjuat", "zacharias_kunuk", "paul_apak_angilirq", "norman_cohn", "igloolik_isuma_productions", "inuktitut", "inuit_cinema", "oral_history", "elder_advisors", "community_production", "igloolik", "nunavut", "digital_betacam", "35mm_transfer", "national_film_board", "local_training", "all_inuit_cast", "inuit_technical_crew", "james_ungalaaq", "atuat_akkitirq", "micheline_ammaq", "traditional_crafts", "location_production", "cultural_reconstruction", "camera_dor"],
    },
    learningGoals: [
      "Place Atanarjuat as a Chapter 18 anchor for Inuit-controlled community-based feature production without treating one film as representative of all Inuit or Indigenous cinema.",
      "Distinguish the ancient oral legend from Paul Apak Angilirq's documented research process, in which he recorded eight elders and led a five-writer team to construct an Inuktitut screenplay.",
      "Treat elder review of language, cultural details, relationships and motivations as a production/research process rather than proof that the finished drama is an unmediated historical transcript.",
      "Keep the Inuktitut screenplay and English version for outside readers as distinct production documents without assuming an English-first writing process.",
      "Keep Igloolik Isuma Productions' ownership/mission, NFB co-production and other named funding/broadcast participation as separate institutional layers.",
      "Use the all-Inuit Igloolik cast and roughly 90% Inuit technical crew as documented labor structure without essentializing performance or skill as culturally automatic.",
      "Explain how first-time trainees and experienced workers shared the production while a smaller group of southern professionals supplied specific training and post-production expertise.",
      "Treat Norman Cohn's description of a horizontal consensus/collaboration production culture as a title-specific working-method account rather than a universal claim about Inuit society.",
      "Use the six-month 1999 Igloolik-region shoot as bounded production-schedule evidence without inventing a daily calendar or weather log.",
      "Keep camping and working on the tundra as production logistics distinct from the historical lives represented by the characters.",
      "Explain how sea ice, tundra and rocky flatlands function as documented location-production geography without reducing the landscape to exotic spectacle.",
      "Treat Digital Betacam 16:9 as verified acquisition-format evidence while leaving exact camera body, lenses, tape formulation, codec, exposure and lighting package unset.",
      "Keep Norman Cohn's stated goal of placing the viewer 'inside' the action as a documented visual strategy rather than an exhaustive shot-design prescription.",
      "Separate Digital Betacam acquisition from the documented Digital Film Group transfer to 35mm for theatrical presentation.",
      "Keep editing by Zacharias Kunuk, Norman Cohn and Marie-Christine Sarda distinct from digital-to-film transfer and later distribution.",
      "Explain how local artists and elders reconstructed costumes, props and sets from oral/traditional knowledge and historical sources without claiming archaeological certainty for every object.",
      "Keep James Ungalaaq's art-direction/prop leadership distinct from Atuat Akkitirq and Micheline Ammaq's costume leadership and the wider local artisan workforce.",
      "Treat researched clothing, sleds, kayaks, tents, household objects and tools as dramatic production design/craft, not documentary evidence recorded in the period represented.",
      "Keep Inuktitut dialogue, production sound, post-production sound roles, music and traditional song material as distinct audio systems.",
      "Use the 172-minute Isuma/NFB/Cannes record as the canonical gameplay runtime while avoiding unsupported claims about alternate cuts or restoration versions.",
      "Treat the 2001 Cannes Un Certain Regard selection and Caméra d'or as reception/circulation evidence downstream from the 1999-2000 production.",
      "Do not invent exact budget, financing percentages, day-by-day schedule, camera/lens package, tape specifications, lighting ratios, microphone/recorder hardware, stunt setup, transfer settings, edit hardware, full location ledger or version genealogy where sources do not establish them.",
    ],
    phases: [
      { id: "oral_history_research", label: "Record multiple elder versions before writing", player_task: "Treat the eight recorded elder accounts as source research and preserve differences/mediation rather than pretending the screenplay is a verbatim transcription of one authoritative telling." },
      { id: "inuktitut_screenplay", label: "Build an Inuktitut screenplay through collaborative writing", player_task: "Model Angilirq's five-writer process and elder review while keeping the English version as an access document for outside readers, not the creative-language original." },
      { id: "community_production_structure", label: "Organize a community-based production workforce", player_task: "Coordinate the documented all-Inuit cast, roughly 90% Inuit technical crew, trainees and specialist outside support without flattening distinct labor roles." },
      { id: "horizontal_working_method", label: "Use consensus and collaboration as a working method", player_task: "Apply Cohn's title-specific description of horizontal production relations while avoiding a universal sociological claim about all Inuit production." },
      { id: "six_month_location_shoot", label: "Sustain a six-month Igloolik-region location shoot", player_task: "Plan around tundra, sea ice, camps and changing conditions while leaving unsourced daily schedules and weather chronologies unset." },
      { id: "digital_betacam_camera", label: "Use 16:9 Digital Betacam for mobile Arctic production", player_task: "Keep acquisition format and Cohn's inside-the-action strategy explicit without inventing exact camera body, lenses, tape type or exposure settings." },
      { id: "performance_and_historical_world", label: "Stage a historical drama with local performers", player_task: "Keep acting, lived cultural knowledge and researched historical reconstruction distinct; do not turn performance into documentary authentication." },
      { id: "craft_reconstruction", label: "Reconstruct material culture through local craft", player_task: "Coordinate elders, artists, seamstresses and prop/set workers using traditional knowledge and historical references without claiming every reconstructed detail is uniquely certain." },
      { id: "editing_and_story_selection", label: "Shape oral-history research into dramatic feature form", player_task: "Keep Kunuk/Cohn/Sarda editorial authorship visible and distinguish dramatic selection from the recorded elder-source archive." },
      { id: "sound_language_music", label: "Keep Inuktitut dialogue, sound post and music distinct", player_task: "Preserve credited sound/post roles and musical layers without inventing microphones, recorders, track layouts or mix-console topology." },
      { id: "digital_to_film_transfer", label: "Transfer digital acquisition to 35mm presentation", player_task: "Treat the documented Digital Film Group transfer as a separate pipeline stage and leave unverified transfer/lab parameters unset." },
      { id: "cannes_and_distribution_boundary", label: "Keep festival recognition downstream from production", player_task: "Treat the 2001 Caméra d'or, sales and later distribution as circulation/reception rather than retroactive evidence for how the film was produced." },
    ],
  },
] as const;

export function mergeChapterEighteenAtanarjuatExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenAtanarjuatExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_atanarjuat_verified",
      source: { list_id: "manual_chapter_eighteen_atanarjuat_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
