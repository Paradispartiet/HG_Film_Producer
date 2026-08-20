import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenRaidersLostArkExpansionDefinitions = [
  {
    id: "scenario_raiders_of_the_lost_ark_1981",
    title: "Raiders of the Lost Ark",
    originalTitle: "Raiders of the Lost Ark",
    aliases: ["Indiana Jones and the Raiders of the Lost Ark"],
    year: 1981,
    titleType: "Movie",
    runtimeMins: 115,
    directors: ["Steven Spielberg"],
    genres: ["Action", "Adventure"],
    premise: "Build Raiders of the Lost Ark as a 1981 Lucasfilm production whose blockbuster significance comes from coordinated development, production labor, effects infrastructure and studio distribution rather than from box-office scale alone. AFI documents George Lucas's early-1970s Indiana Smith concept, the 1977 Lucas-Spielberg revival of the project, Lawrence Kasdan's development from recorded story conferences, and Paramount's unusual distribution agreement with Lucasfilm. Keep that industrial bargain distinct from later franchise mythology: the original film was produced by Frank Marshall, executive-produced by George Lucas and Howard Kazanjian, and distributed by Paramount. Spielberg and American Cinematographer describe an intentionally compressed production method: extensive storyboards, a 73-day schedule, a British crew already practiced in large Star Wars/Superman-style sets and effects, Douglas Slocombe's cinematography, Norman Reynolds's production design and Michael Kahn's editing. AFI records principal photography beginning 23 June 1980 in La Rochelle, followed by Elstree, Tunisia, Kauai and additional California/English locations, with completion after 73 filming days and a final reported budget of $22.8 million. Treat the truck chase as a production-system case: Spielberg storyboarded it closely; second-unit director Michael D. Moore handled wide stunt material while Spielberg retained principal-actor coverage, allowing the chase to fit the compressed schedule. Preserve Slocombe's image authorship without inventing a camera body, lens package, film-stock emulsion or exposure recipe: Spielberg describes a negotiated style between his darker/noir impulse and Slocombe's fuller backlit color work, use of the sun as a key source, controlled fill and smoke for visible shafts on Kauai. Treat practical and optical effects as separate but coordinated labor. ILM documents the Ark finale's gossamer puppets filmed in a water tank, optical compositing, matte paintings and some shots requiring more than fifty passes; the Academy credits Richard Edlund, Kit West, Bruce Nicholson and Joe Johnston for the Oscar-winning visual effects. Sound is likewise authored labor: the Academy credits Bill Varney, Steve Maslow, Gregg Landaker and Roy Charman for sound and Ben Burtt with Richard L. Anderson for sound-effects editing; Lucasfilm documents Burtt's layered source recording for the Well of Souls snakes. John Williams's score and Michael Kahn's editing are credited production systems, not generic blockbuster shorthand. Keep the 1981 Dolby Stereo theatrical release and 115-minute original feature distinct from later restoration, 4K and Dolby Atmos remixes; Lucasfilm explicitly documents the later Atmos work as a downstream remix using original sound elements. Do not invent exact daily schedules, undocumented stunt assignments, camera/lens/stock specifications, lighting ratios, microphone chains or claims that merchandising/franchise value was already identical to its later cultural afterlife.",
    sourceId: "afi_raiders_of_the_lost_ark_1981",
    sourceUrl: "https://catalog.afi.com/Film/67250-RAIDERS-OF-THE-LOST-ARK",
    scenarioType: "lucasfilm_paramount_franchise_adventure_stunt_second_unit_practical_optical_effects_production",
    requiredChoicesSeed: {
      screenplay: ["lucas_spielberg_kaufman_story_kasdan_screenplay", "serial_adventure_set_piece_escalation", "story_conference_to_compressed_feature_structure"],
      camera: ["douglas_slocombe_backlit_color_system", "storyboarded_action_geography", "no_invented_camera_lens_stock_or_exposure_package"],
      editing: ["michael_kahn_set_piece_continuity", "compressed_action_information", "original_115_minute_theatrical_version_boundary"],
      sound: ["burtt_and_anderson_effects_editing", "varney_maslow_landaker_charman_mix", "original_dolby_stereo_not_later_atmos"],
      themes: ["film_history", "1980s", "lucasfilm", "paramount", "franchise_economics", "storyboarding", "second_unit", "stunt_labor", "production_design", "practical_effects", "ilm", "optical_effects", "sound_design", "blockbuster_distribution", "version_history"],
    },
    learningGoals: [
      "Model Raiders as a coordinated Lucasfilm-Paramount production system rather than treating blockbuster status as a synonym for spectacle.",
      "Trace the project from Lucas's early concept through Lucas-Spielberg story development and Kasdan's screenplay without collapsing story credit and screenplay credit.",
      "Explain how a heavily storyboarded plan and a 73-day shooting schedule linked preparation to production economy.",
      "Keep Frank Marshall's producer role, Lucas and Kazanjian's executive production and Paramount's distribution role institutionally distinct.",
      "Use AFI's La Rochelle, Elstree, Tunisia, Kauai and additional location record to explain multi-country logistics without inventing a day-by-day schedule.",
      "Treat Michael D. Moore's second-unit truck-chase work as scheduled stunt/action labor coordinated with Spielberg's principal-unit material.",
      "Preserve Douglas Slocombe's cinematography as a collaboration between backlit color depth and Spielberg's darker visual references without inventing camera, lens or stock specifications.",
      "Explain Norman Reynolds's production-design role and the reuse of an experienced British large-scale production workforce as industrial continuity from late-1970s effects cinema.",
      "Distinguish practical physical effects and stunt problems from ILM optical compositing, matte painting and the Ark finale's separately built elements.",
      "Treat Michael Kahn's editing as the construction of spatially legible set pieces, not merely as fast cutting.",
      "Keep Ben Burtt and Richard L. Anderson's sound-effects editing distinct from the credited rerecording/mixing team and from John Williams's score.",
      "Use the Academy craft record to preserve department authorship across art direction, editing, sound and visual effects.",
      "Separate original 1981 Dolby Stereo production/release from later 4K restoration and Dolby Atmos remixing.",
      "Explain franchise and licensing value as an industrial relation around the film while keeping later sequels and cultural canonization downstream from the original production case.",
    ],
    phases: [
      { id: "pitch", label: "Build a serial adventure for a modern studio market", player_task: "Define a 1930s adventure whose set pieces can support a feature-length escalation while remaining producible through coordinated units, stages and locations." },
      { id: "research", label: "Translate serial and adventure references into production rules", player_task: "Use the documented Lucas-Spielberg development and period-adventure aims to define pace, danger, geography and tone without copying later franchise conventions backward into 1980." },
      { id: "screenplay", label: "Turn story conferences into a set-piece chain", player_task: "Shape Kasdan's screenplay around clear objectives, reversals and travel while preserving character relationships between major action sequences." },
      { id: "performance", label: "Keep human reaction inside spectacle", player_task: "Direct Ford, Allen and the ensemble so fear, irritation, improvisational energy and physical consequence remain readable inside large action logistics." },
      { id: "design", label: "Coordinate sets, props and locations across countries", player_task: "Use Reynolds's production-design system and the experienced British crew to keep temples, tombs, vehicles and the Ark materially coherent across stages and locations." },
      { id: "cinematography", label: "Balance noir influence with readable color adventure", player_task: "Use Slocombe's documented backlit, full-depth approach and Spielberg's shadow references while refusing unsupported camera, lens, stock or exposure claims." },
      { id: "editing", label: "Preserve geography through relentless escalation", player_task: "Use Kahn's editing to keep objectives, obstacles and spatial cause-and-effect legible as action accelerates." },
      { id: "sound", label: "Give physical action an authored acoustic identity", player_task: "Coordinate effects editing, final sound mixing and Williams's score as separate layers, using sourced Burtt practices where documented rather than invented Foley recipes." },
      { id: "release", label: "Separate 1981 release from franchise and restoration afterlife", player_task: "Track Paramount distribution, theatrical Dolby Stereo, immediate commercial success and sequel/licensing potential while keeping later home-video, restoration and Atmos versions downstream." },
    ],
  },
] as const;

export function mergeChapterSixteenRaidersLostArkExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenRaidersLostArkExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_raiders_lost_ark_verified",
      source: { list_id: "manual_chapter_sixteen_raiders_lost_ark_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
