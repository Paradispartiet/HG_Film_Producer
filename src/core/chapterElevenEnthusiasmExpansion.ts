import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterElevenEnthusiasmExpansionDefinitions = [
  {
    id: "scenario_enthusiasm_1930",
    title: "Enthusiasm",
    originalTitle: "Entuziazm: Simfoniya Donbassa",
    aliases: ["Enthusiasm: Symphony of the Donbas", "Symphony of the Donbas", "Entuziazm", "Ėntuziazm (Simfonija Donbassa)"],
    year: 1930,
    titleType: "Feature",
    runtimeMins: 65,
    directors: ["Dziga Vertov"],
    genres: ["Documentary", "Avant-garde"],
    premise: "Build Enthusiasm / Entuziazm: Simfoniya Donbassa as Dziga Vertov's 1930 radical early-sound documentary-propaganda work about the Five-Year Plan and industrialization in the Donbas, not as a neutral record or as a defective synchronized film. BFI describes Vertov's deliberate non-synchronization, complementary and contrapuntal sound, industrial noise and absence of conventional commentary; the Austrian Film Museum preserves restored and unrestored versions and documents Peter Kubelka and Edith Schlemmer's 1972 restoration work that re-synchronized image and sound. The player must collect and organize machinery, voices, crowds, religious sound, mine/industrial sound and photographed labor as separate materials, then construct political and rhythmic relations through montage without forcing sound to duplicate image space. Preserve geography and political specificity: the film concerns mines and industrialization in Ukraine's Donbas within the Soviet Ukrainian/Russian federal context recorded by later catalogues; 'Soviet' must not be flattened into 'Russian'. Preserve documentary ethics: anti-religious imagery, Five-Year Plan rhetoric, workers and machinery form an overt propaganda argument; montage, selection and sound design construct meaning and are never transparent evidence of social reality. Preserve version provenance: the Austrian Film Museum DVD presents 65-minute restored and unrestored versions, while BFI catalogues a 96-minute 1931 record; these runtimes represent catalog/version/presentation histories rather than one immutable original duration. The 1972 resynchronization and 2016–17 3K restoration from a 35mm black-and-white positive are later archival interventions, not original 1930 production choices. Avoid invented equipment/crew claims unless directly supported by the locked sources.",
    sourceId: "filmmuseum_entuziazm_1930",
    sourceUrl: "https://www.filmmuseum.at/en/shop/shop_detail?shop_produkte_id=1215680370589",
    scenarioType: "vertov_donbas_non_sync_industrial_sound_documentary_montage_propaganda_restoration_provenance_production",
    requiredChoicesSeed: {
      screenplay: ["industrial_documentary_structure_without_neutrality", "five_year_plan_propaganda_context", "donbas_ukraine_specificity"],
      camera: ["location_industry_factography", "image_sound_noncoincidence", "no_staged_sync_default"],
      editing: ["contrapuntal_sound_image_montage", "voice_machine_crowd_reordering", "restored_resync_version_provenance"],
      sound: ["location_industrial_sound_collection", "non_synchronization_as_method", "cacophony_not_failure"],
      themes: ["film_history", "sound_transition", "soviet_avant_garde", "ukrainian_donbas", "industrial_sound", "documentary_propaganda", "non_synchronization", "restoration_provenance"],
    },
    learningGoals: [
      "Model Enthusiasm as an early sound documentary-propaganda film in which sound and image are intentionally allowed to diverge, counterpoint and reorganize one another rather than requiring literal synchronization.",
      "Explain the Soviet sound debate through practice: industrial noises, voices and music-like montage can reinforce or contradict images without conventional commentary.",
      "Keep Donbas and Ukrainian geography explicit and reject the shortcut that treats every Soviet production or location as simply Russian.",
      "Treat Five-Year Plan and anti-religious material as constructed political propaganda; documentary status does not make the film an unmediated record of social reality.",
      "Differentiate photographed labor, recorded sound, montage order and political framing as separate production decisions instead of assigning all meaning to the recorded event itself.",
      "Reject the idea that clangor, overload or non-coincidence automatically indicate failed recording; Vertov's 'cacophony' controversy belongs to an intentional sound-language experiment.",
      "Preserve archive/version boundaries: a 65-minute restored/unrestored presentation and other catalogue runtimes are evidence of surviving versions, not one certain universal original runtime.",
      "Keep Kubelka and Schlemmer's 1972 image/sound resynchronization and the Austrian Film Museum's later 3K restoration separate from original 1930 production technique.",
      "Avoid inventing recording-machine brands, exact microphone systems or film-specific crew credits that the locked institutional source set does not establish.",
    ],
    phases: [
      { id: "pitch", label: "A sound-newsreel symphony, not neutral reportage", player_task: "Define the political argument, Donbas setting and non-synchronous sound-image method before collecting material; do not pitch the film as neutral industrial observation." },
      { id: "research", label: "Soviet debate, Donbas and surviving versions", player_task: "Lock BFI and Austrian Film Museum evidence for non-synchronization, Five-Year Plan context, Ukrainian mines, restoration history and runtime/version differences." },
      { id: "screenplay", label: "Structure argument without conventional commentary", player_task: "Organize religion, labor, industry and collective mobilization as a political sequence while acknowledging that selection and ordering create the documentary argument." },
      { id: "casting", label: "Workers and crowds are not performance presets", player_task: "Treat photographed people as historical subjects within a propaganda construction; never reward caricature, coerced enthusiasm or invented biographical motives." },
      { id: "production_design", label: "Industry is location, not a neutral set", player_task: "Map mines, factories, churches and public spaces as historically specific Donbas/Soviet locations while avoiding unsupported claims that they were purpose-built production design." },
      { id: "cinematography", label: "Image can refuse sonic coincidence", player_task: "Photograph machinery, labor, crowds and rituals for montage relationships without requiring the visible source to match every recorded sound at the same instant." },
      { id: "editing", label: "Counterpoint creates meaning", player_task: "Reorder image, voice and machine material so reinforcement, contradiction, delay and collision are intentional, while documenting which later restorations alter synchronization." },
      { id: "sound", label: "Collect and compose industrial sound", player_task: "Build a field of machinery, voices, crowds and environmental sound that can function rhythmically and politically without defaulting to commentary or literal sync." },
      { id: "release", label: "1930 film, later synchronized histories", player_task: "Keep original production/reception distinct from the 1972 resynchronization, 2005 DVD comparison and 2016–17 3K restoration; publish version provenance alongside the case." },
    ],
  },
] as const;

export function mergeChapterElevenEnthusiasmExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterElevenEnthusiasmExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eleven_enthusiasm_verified",
      source: { list_id: "manual_chapter_eleven_enthusiasm_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: {
        title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType,
        runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres,
        genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")),
        imdb_rating: 0, user_rating: 0,
      },
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
