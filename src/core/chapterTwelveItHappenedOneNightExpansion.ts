import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTwelveItHappenedOneNightExpansionDefinitions = [
  {
    id: "scenario_it_happened_one_night_1934",
    title: "It Happened One Night",
    originalTitle: "It Happened One Night",
    aliases: ["Night Bus"],
    year: 1934,
    titleType: "Feature",
    runtimeMins: 105,
    directors: ["Frank Capra"],
    genres: ["Comedy", "Romance", "Screwball"],
    premise: "Build It Happened One Night as a Columbia production-and-distribution case whose screwball form emerges from a smaller studio coordinating borrowed stars, road/location work, dialogue rhythm and disciplined craft rather than from a generic romantic-comedy preset. AFI records Columbia Pictures Corp. as both production and distribution company, with Harry Cohn producing and an A Frank Capra Production credit; Frank Capra directs with C. C. Coleman assisting, Robert Riskin adapts Samuel Hopkins Adams's short story Night Bus, Joseph Walker photographs, Stephen Goosson handles art direction, Gene Havlick edits, Robert Kalloch designs costumes, Louis Silvers is music director and Edward Bernds is sound engineer. Production ran 13 November to 22 December 1933, with retakes 8–12 January 1934; AFI records Western Electric Noiseless Recording, black-and-white photography and a 105-minute runtime. Clark Gable was borrowed from MGM and Claudette Colbert from Paramount, making the star system a concrete inter-studio contract and labor problem rather than a timeless pairing. Preserve the Code chronology: principal production and retakes precede the July 1934 centralized PCA seal regime, even though the film belongs to the cultural transition toward stricter enforcement. Location material and road-space production can be taught from documented California work without inventing a complete location itinerary, exact lenses, film stock, microphones, camera vehicles or transport rigs. Keep the film's later five-major-Academy-Award sweep and 1993 National Film Registry selection on the reception/preservation side of the timeline, never as causes available to the 1933 production team.",
    sourceId: "afi_it_happened_one_night_1934",
    sourceUrl: "https://catalog.afi.com/Film/6316-IT-HAPPENEDONENIGHT",
    scenarioType: "columbia_screwball_road_borrowed_stars_location_dialogue_pre_pca_transition",
    requiredChoicesSeed: {
      screenplay: ["adams_night_bus_to_riskin_screenplay", "screwball_dialogue_without_genre_preset", "1933_34_pre_pca_production_boundary"],
      camera: ["walker_road_and_interior_staging", "documented_location_work_without_total_itinerary", "no_invented_lens_stock_or_vehicle_rig_claims"],
      editing: ["havlick_dialogue_and_road_rhythm", "retakes_within_version_provenance", "105_minute_release_form"],
      sound: ["western_electric_noiseless_recording", "bernds_sound_engineering", "dialogue_timing_without_invented_microphone_claims"],
      themes: ["film_history", "studio_system", "columbia", "screwball_comedy", "star_loans", "road_movie", "location_work", "dialogue_rhythm", "pre_pca_transition"],
    },
    learningGoals: [
      "Model Columbia as a smaller studio able to coordinate production and distribution while borrowing major stars from MGM and Paramount.",
      "Treat Gable's MGM loan and Colbert's Paramount loan as contract/labor arrangements rather than romantic-comedy mythology.",
      "Keep Frank Capra's direction, Harry Cohn's producing authority and Robert Riskin's adaptation separately attributable.",
      "Preserve Samuel Hopkins Adams's Night Bus as the literary source rather than treating the screenplay as originless studio formula.",
      "Keep Joseph Walker photography, Stephen Goosson art direction, Gene Havlick editing, Robert Kalloch costume, Louis Silvers music and Edward Bernds sound visible as specialized labor.",
      "Use the documented 13 November–22 December 1933 shoot and January 1934 retakes as production chronology rather than collapsing all work into release-year hindsight.",
      "Place principal production before the centralized July 1934 PCA seal regime instead of retroactively applying later enforcement to every creative decision.",
      "Use Western Electric Noiseless Recording and Bernds's credit without inventing microphone models, channel layouts or dialogue-recording hardware.",
      "Analyze road and location work through documented California production evidence while refusing an unsupported complete route, lens package or camera-vehicle reconstruction.",
      "Treat the later five-major-Oscar sweep as reception evidence demonstrating impact, not as a quality preset or production cause.",
      "Keep the 1993 National Film Registry selection as preservation history separate from the 1933–34 production process.",
    ],
    phases: [
      { id: "pitch", label: "A smaller studio builds a major road comedy", player_task: "Frame Columbia's production/distribution position, borrowed stars and road structure before relying on later prestige." },
      { id: "research", label: "Lock loans, dates and Code chronology", player_task: "Verify MGM/Paramount star loans, the 1933 shoot, January retakes and the pre-PCA production boundary before making causal claims." },
      { id: "screenplay", label: "Turn Night Bus into dialogue-driven screwball", player_task: "Adapt Adams through Riskin while building conflict, class friction and romantic reversals without a generic screwball recipe." },
      { id: "casting", label: "Direct borrowed stars as production resources", player_task: "Coordinate Gable and Colbert as loaned performers inside Columbia's schedule, ensemble and contractual reality rather than as inevitable icons." },
      { id: "production_design", label: "Join road space to controlled interiors", player_task: "Coordinate Goosson's art direction with buses, auto-court spaces and documented locations without inventing a complete route." },
      { id: "cinematography", label: "Photograph movement, proximity and social space", player_task: "Use Walker's credited photography to organize road movement and intimate dialogue while keeping unsourced equipment out of the case." },
      { id: "editing", label: "Build comic rhythm across travel", player_task: "Use Havlick's editing to coordinate dialogue, ellipsis, travel and January retake material into the 105-minute release form." },
      { id: "sound", label: "Make dialogue timing industrially playable", player_task: "Coordinate Western Electric Noiseless Recording and Bernds's sound engineering without fabricating microphone or channel specifications." },
      { id: "release", label: "Release before hindsight becomes history", player_task: "Keep February 1934 release, later Academy sweep and Registry recognition chronologically downstream from production decisions." },
    ],
  },
] as const;

export function mergeChapterTwelveItHappenedOneNightExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTwelveItHappenedOneNightExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_twelve_it_happened_one_night_verified",
      source: { list_id: "manual_chapter_twelve_it_happened_one_night_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
