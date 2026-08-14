import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterFourIndustryExpansionDefinitions = [
  {
    id: "scenario_the_story_of_the_kelly_gang_1906",
    title: "The Story of the Kelly Gang",
    originalTitle: "The Story of the Kelly Gang",
    aliases: ["Story of the Kelly Gang"],
    year: 1906,
    titleType: "Feature",
    runtimeMins: 60,
    directors: ["Charles Tait"],
    genres: ["Action", "Biography", "Crime", "Drama", "History", "Western"],
    premise: "Build a 1906 Australian bushranger feature as an industrial-scale production problem: sustain an hour-long dramatic attraction across multiple reels, location work, repeated outlaw/police episodes and touring exhibition while preserving the fact that only fragments of the original film survive. Treat the Tait/Johnson/Gibson exhibitor-producer collaboration, five-reel scale and lecturer-supported exhibition as part of the production system, not as a lone-inventor story about feature cinema.",
    sourceId: "manual_the_story_of_the_kelly_gang_1906",
    sourceUrl: "https://www.nfsa.gov.au/stories/articles/story-kelly-gang",
    scenarioType: "action_adventure_production",
    requiredChoicesSeed: {
      screenplay: ["kelly_story_across_multiple_reels", "episodic_bushranger_action", "glenrowan_endgame"],
      camera: ["location_scale_outside_melbourne", "readable_group_action", "armor_and_capture_staging"],
      editing: ["multi_reel_progression", "episode_to_episode_continuity", "fragmentary_survival_boundary"],
      sound: ["silent_photographed_production", "lecturer_and_live_effects_as_exhibition", "no_synchronized_original_sound"],
      themes: ["film_history", "feature_transition", "australian_cinema", "bushranger_myth", "production_distribution_exhibition"],
    },
    learningGoals: [
      "Plan the film as a multi-reel feature-scale attraction whose production, booking and touring demands differ materially from a one-reel programme item.",
      "Use the documented location production and Kelly narrative episodes to maintain geography and dramatic progression over a much longer running time.",
      "Keep photographed silent production separate from lecturer commentary and live sound effects supplied during exhibition.",
      "Treat The Story of the Kelly Gang as a landmark in the emergence of feature-length narrative cinema without claiming that one film or one country single-handedly invented the feature form.",
      "Preserve the archive boundary: modern reconstructions combine surviving fragments and documentary evidence and must never be presented as an intact surviving 1906 original.",
    ],
    phases: [
      { id: "pitch", label: "Feature-scale pitch", player_task: "Define why the Kelly story can sustain an hour-long attraction and why the extra length must be justified by escalating incidents rather than simple repetition." },
      { id: "research", label: "Industrial and archive research", player_task: "Ground Charles Tait, the Tait/Johnson/Gibson production partnership, five-reel scale, touring success, location history and fragmentary survival in NFSA/UNESCO/BFI evidence." },
      { id: "screenplay", label: "Multi-reel narrative", player_task: "Organize outlaw episodes, police conflict and the Glenrowan endgame into a long-form dramatic progression that can survive reel changes and touring presentation." },
      { id: "casting", label: "Gang and police ensemble", player_task: "Keep Kelly-gang members, police and civilians distinct across a long episodic production without inventing unsupported performer detail where the record is incomplete." },
      { id: "production_design", label: "Bush, homestead and Glenrowan", player_task: "Use exterior locations, period dress, weapons and Kelly armour to distinguish recurring environments and make the long narrative readable." },
      { id: "cinematography", label: "Location-scale staging", player_task: "Frame mounted movement, group action, buildings and Ned Kelly's armoured last stand with period-appropriate readable staging rather than retrofitted modern coverage." },
      { id: "editing", label: "Feature progression", player_task: "Build continuity across episodes and reels while explicitly marking any modern reconstruction as fragment-based rather than pretending the complete original edit survives." },
      { id: "sound", label: "Silent film, live exhibition", player_task: "Keep the photographed film silent while modelling lecturer commentary and behind-the-scenes/live effects as exhibition practices documented by the NFSA." },
      { id: "release", label: "Touring feature economy", player_task: "Treat extended running time, multi-reel handling and touring circulation as industrial decisions connecting production cost, exhibitor risk and audience novelty." },
    ],
  },
] as const;

export function mergeChapterFourIndustryExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterFourIndustryExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_four_industry_verified",
      source: {
        list_id: "manual_chapter_four_industry_expansion_2026",
        position: nextPosition,
        imdb_id: definition.sourceId,
        url: definition.sourceUrl,
      },
      film: {
        title: definition.title,
        original_title: definition.originalTitle,
        year: definition.year,
        title_type: definition.titleType,
        runtime_mins: definition.runtimeMins,
        directors: definition.directors,
        genres: definition.genres,
        genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")),
        imdb_rating: 0,
        user_rating: 0,
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
