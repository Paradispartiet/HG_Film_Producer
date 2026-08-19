import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterFourteenBlackGirlExpansionDefinitions = [
  {
    id: "scenario_black_girl_1966",
    title: "Black Girl",
    originalTitle: "La Noire de…",
    aliases: ["La Noire de...", "La Noire de", "Black Girl"],
    year: 1966,
    titleType: "Feature",
    runtimeMins: 59,
    directors: ["Ousmane Sembène"],
    genres: ["Drama", "Postcolonial Cinema", "Migration"],
    premise: "Build Black Girl as a Senegalese post-independence production case in which authorship, scarce infrastructure, France-Senegal power relations, migration, labor, performance, voice and symbolic objects are one material system. Criterion credits Ousmane Sembène as director and writer from his own story, André Zwoboda as producer and production manager, Christian Lacoste as director of photography, André Gaudier as editor, Ibrahima Barro and Pathé Diop as assistant directors, M’Bissine Thérèse Diop as Diouana and Toto Bissainthe as Diouana's voice; Criterion also records participation by the Ministère de la Coopération. The Film Foundation identifies Les Films Domirev as production company and Senegal as country of production, while La Cinémathèque française records a Senegal-France production and names Filmi Domirev and Les Actualités Françaises, so preserve institutional production-credit variance rather than forcing false uniformity. Criterion scholarship places the film after Senegalese independence and the lifting of colonial-era restrictions on African filmmaking, records that the Ministry of Cooperation cinema bureau rejected Black Girl for production funding because of its subject, and uses Sembène's term mégotage for the budget-scraping conditions African filmmakers faced. Preserve that tension alongside the finished film's credited Ministry participation rather than turning it into a simple no-support narrative. Treat Diouana's interior voice as a production decision: funding constraints led Sembène to dub the monologue in French, while Toto Bissainthe is credited as the voice; the gap between Diop's embodied performance and dubbed interiority becomes part of the postcolonial sound system without claiming a complete dialogue-recording workflow that current sources do not establish. Criterion scholarship also documents Diop as a nonprofessional performer and seamstress who supplied much of Diouana's clothing, giving costume and performance unusually direct production evidence. Use Dakar and the French Riviera as documented geographic poles, flashback structure and the recurring mask as screenplay/editing/design systems, and Christian Lacoste's black-and-white photography without inventing camera bodies, lenses, stock, lighting ratios or location-by-location shooting schedules. Canonically use Criterion/BFI's 59-minute form while preserving Film Foundation's 65-minute and Cinémathèque's 65/70-minute institutional listings as runtime provenance. Keep the 1966 Prix Jean Vigo, Carthage recognition, later international circulation and World Cinema Project restoration downstream from production. Do not reduce the film to French New Wave influence, generic social realism or an abstract anti-colonial style preset; its Senegalese authorship and post-independence production conditions must remain primary.",
    sourceId: "criterion_black_girl_1966",
    sourceUrl: "https://www.criterion.com/films/28849-black-girl",
    scenarioType: "sembene_senegal_postindependence_migration_labor_voice_mask_megotage_dakar_riviera",
    requiredChoicesSeed: {
      screenplay: ["sembene_own_story_postcolonial_migration", "diouana_subjectivity_flashback_structure", "mask_labor_and_reclamation_motif"],
      camera: ["lacoste_black_and_white_source_bounded", "dakar_riviera_contrast_without_exoticism", "no_invented_camera_lens_stock_lighting_package"],
      editing: ["gaudier_present_flashback_subjectivity", "mask_and_return_coda_structure", "preserve_59_65_70_runtime_provenance"],
      sound: ["diouana_dubbed_interior_voice_toto_bissainthe", "french_wolof_language_power", "no_invented_microphone_or_recording_chain"],
      themes: ["film_history", "senegal", "postindependence", "decolonization", "migration", "domestic_labor", "race", "gender", "class", "voice", "performance", "mask", "megotage", "production_infrastructure", "dakar", "french_riviera"],
    },
    learningGoals: [
      "Model Black Girl as a Senegalese-authored post-independence production rather than treating African cinema as a regional branch of European modernism.",
      "Keep Ousmane Sembène's combined writer-director authorship visible alongside André Zwoboda, Christian Lacoste, André Gaudier, Ibrahima Barro, Pathé Diop, M’Bissine Thérèse Diop and Toto Bissainthe.",
      "Explain how colonial-era restrictions and weak post-independence production infrastructure shaped what filmmaking resources were available without turning scarcity into an authenticity bonus.",
      "Preserve the documented contradiction between the Ministry of Cooperation cinema bureau's funding rejection and the finished film's credited Ministry participation as distinct stages of institutional history.",
      "Use Sembène's mégotage concept to teach financing precarity as production history, not as a romantic myth of effortless low-budget creativity.",
      "Treat Diouana's move from Dakar to the French Riviera as a production geography tied to migration, domestic labor and neocolonial power rather than as scenic contrast alone.",
      "Model M’Bissine Thérèse Diop as a nonprofessional performer whose seamstress practice materially entered the film through clothing she supplied for Diouana.",
      "Separate Diop's embodied performance from Toto Bissainthe's credited voice and use the funding-driven French dubbing of Diouana's interior monologue as a concrete sound-and-language production choice.",
      "Keep Christian Lacoste's black-and-white cinematography source-bounded and refuse unsupported camera-body, lens, film-stock, lighting-ratio or exposure claims.",
      "Treat André Gaudier's editing, flashbacks and repeated mask motif as constructed systems for memory, possession and return rather than transparent social observation.",
      "Preserve production-company and runtime variance across Criterion, Film Foundation and Cinémathèque records as provenance instead of inventing a single falsely exact industrial record.",
      "Keep Prix Jean Vigo, Carthage recognition, later Western circulation and World Cinema Project restoration downstream from the 1966 production and separate from authorship.",
    ],
    phases: [
      { id: "pitch", label: "Center Diouana inside a postcolonial labor system", player_task: "Build the film around Diouana's hopes, work, confinement and subjectivity without turning her suffering into background for French characters or abstract political symbolism." },
      { id: "research", label: "Map independence, infrastructure and funding power", player_task: "Trace Senegalese independence, prior colonial filmmaking restrictions, the Ministry cinema bureau and Sembène's mégotage problem as material constraints on production." },
      { id: "screenplay", label: "Adapt migration through memory, labor and the mask", player_task: "Use Sembène's own story, Dakar flashbacks, domestic-work escalation and the mask's changing ownership to structure Diouana's experience." },
      { id: "casting", label: "Build performance with Diop's presence and material contribution", player_task: "Direct the nonprofessional M’Bissine Thérèse Diop through gesture, stillness, clothing and spatial restriction while keeping her creative contribution to Diouana's wardrobe visible." },
      { id: "production_design", label: "Contrast homes, work and possession without exoticism", player_task: "Use the French apartment, Dakar spaces, clothing and the mask to make labor and ownership concrete without reducing Senegal or France to visual stereotypes." },
      { id: "cinematography", label: "Use Lacoste's monochrome image without invented gear", player_task: "Coordinate black-and-white framing across Dakar, transit and the Riviera while refusing unsupported lens, stock, camera-body and lighting recipes." },
      { id: "editing", label: "Let flashback and return reorganize the present", player_task: "Use Gaudier's cutting to move between Diouana's present confinement, remembered Dakar life and the final return of the mask so chronology carries political meaning." },
      { id: "sound", label: "Make voice and language part of production power", player_task: "Coordinate Diop's onscreen body, Bissainthe's credited voice, French interior monologue and the film's French/Wolof language field without inventing an undocumented recording chain." },
      { id: "release", label: "Separate production from prizes, circulation and restoration", player_task: "Keep 1966 production, Prix Jean Vigo and Carthage recognition, later international circulation and World Cinema Project restoration as distinct chronological evidence layers." },
    ],
  },
] as const;

export function mergeChapterFourteenBlackGirlExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterFourteenBlackGirlExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_fourteen_black_girl_verified",
      source: { list_id: "manual_chapter_fourteen_black_girl_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
