import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterFifteenManilaClawsLightExpansionDefinitions = [
  {
    id: "scenario_manila_in_the_claws_of_light_1975",
    title: "Manila in the Claws of Light",
    originalTitle: "Maynila sa mga Kuko ng Liwanag",
    aliases: ["Maynila sa mga kuko ng liwanag", "Manila in the Claws of Neon", "The Claws of Light"],
    year: 1975,
    titleType: "Feature",
    runtimeMins: 124,
    directors: ["Lino Brocka"],
    genres: ["Drama", "Social Realism", "Philippine Cinema", "Urban Melodrama"],
    premise: "Build Manila in the Claws of Light as a 1975 Philippine production case in which Lino Brocka's socially committed direction, Mike De Leon's producing and cinematography, Clodualdo Del Mundo Jr.'s adaptation of Edgardo Reyes's novel, Manila location work, mixed professional/nonprofessional casting and working-class melodrama form one production system under Ferdinand Marcos's martial-law censorship environment. Criterion credits producers Severino Manotok Jr. and Mike De Leon, Del Mundo for screenplay, De Leon as director of photography, Ding Austria as camera operator, Edgardo Jarlego and Ike Jarlego Jr. as editors, Luis Reyes and Ramon Reyes for sound, Max Jocson for original music and Socrates Topacio as art director. Criterion scholarship records that De Leon, whose family owned LVN, offered Brocka resources to adapt Reyes's serialized social-realist novel and acted as producer and cinematographer. Keep represented time separate from production time: Brocka publicly framed protest imagery as background from the period before martial law even though the film opened in 1975 under the dictatorship and its poverty and resistance resonated with that present. Treat construction sites, Chinatown, the Sunog-Apog squatter settlement and actual gay nightlife locations as production environments rather than generic urban grit; Criterion documents locally sourced extras and real-life pimps and male sex workers in bit roles. Preserve version history: producers shortened Julio's male-prostitution subplot for international release, while Criterion scholarship states that the excised theatrical scenes were never restored. Preserve runtime provenance rather than inventing cuts from catalog numbers: Film Foundation and Cannes list 124 minutes, Criterion and BFI list 125, and BFI Player lists 126. Keep the 2013 Film Development Council of the Philippines/Cineteca di Bologna restoration with World Cinema Project, LVN, Cinema Artists Philippines and Mike De Leon separate from original production; Film Foundation documents restoration from original camera and sound negatives preserved at the BFI National Archive, with De Leon supervising grading. Do not invent camera bodies, lenses, film stock, lighting ratios, microphone models, exact shooting dates or a generalized 'documentary realism' recipe.",
    sourceId: "film_foundation_manila_claws_light_1975",
    sourceUrl: "https://www.film-foundation.org/world-cinema?page=5&sortBy=country&sortOrder=1",
    scenarioType: "philippine_martial_law_urban_social_realism_location_melodrama_labor_production",
    requiredChoicesSeed: {
      screenplay: ["del_mundo_reyes_adaptation", "represented_pre_martial_law_time_vs_1975_production", "labor_migration_and_urban_exploitation"],
      camera: ["mike_de_leon_manila_location_cinematography", "ding_austria_camera_operator_credit", "no_invented_camera_lens_stock_lighting_package"],
      editing: ["edgardo_jarlego_ike_jarlego_editing", "social_reportage_melodrama_flashback_structure", "preserve_124_125_126_runtime_and_version_provenance"],
      sound: ["luis_reyes_ramon_reyes_credited_sound", "max_jocson_music_separate_from_urban_din", "no_invented_microphone_or_recording_chain"],
      themes: ["film_history", "philippines", "manila", "martial_law", "labor", "construction", "urban_poverty", "migration", "censorship", "melodrama", "social_realism", "location_production", "mixed_casting", "sex_work", "restoration_provenance"],
    },
    learningGoals: [
      "Model Manila in the Claws of Light as Philippine production history under martial law, not merely as a universal poverty narrative.",
      "Separate the film's 1975 production/release from its represented pre-martial-law protest period and Brocka's censorship-aware public framing.",
      "Keep Brocka, Mike De Leon, Severino Manotok Jr., Clodualdo Del Mundo Jr., Edgardo Reyes and the credited craft departments visible as distinct production actors.",
      "Explain De Leon's dual producer-cinematographer role and LVN family-resource context without turning studio access into sole authorship.",
      "Treat Reyes's construction-labor experience and Del Mundo's adaptation as production research feeding a fictional melodrama rather than transparent documentary evidence.",
      "Use construction sites, Chinatown, Sunog-Apog and Manila streets as material production environments tied to labor, housing, traffic, commerce and social hierarchy.",
      "Model Brocka's use of professional, theater-trained and locally recruited nonprofessional performers as a casting system grounded in location work.",
      "Keep Mike De Leon's panoramic and deep-space urban cinematography source-bounded while refusing unsupported camera, lens, stock and lighting specifications.",
      "Treat Edgardo Jarlego and Ike Jarlego Jr.'s editing as the structure joining labor episodes, search narrative, flashback, social reportage and melodramatic escalation.",
      "Keep Luis Reyes and Ramon Reyes's sound work distinct from Max Jocson's music so urban din and emotional scoring remain separate authored layers.",
      "Preserve the shortened international male-prostitution subplot and the unrecovered original theatrical material as version history rather than pretending one runtime explains every difference.",
      "Preserve 124/125/126-minute institutional runtime listings as provenance instead of inventing undocumented cuts from catalog metadata alone.",
      "Keep the 2013 restoration and De Leon-supervised grading separate from the original 1975 color manufacture.",
    ],
    phases: [
      { id: "pitch", label: "Turn a search melodrama into urban labor history", player_task: "Build Julio's search for Ligaya so construction labor, housing, sex work, migration and class exploitation are causal production-world systems rather than background issues." },
      { id: "research", label: "Separate novel, represented period and martial-law production", player_task: "Map Reyes's source novel, Del Mundo's adaptation, the pre-martial-law story world and the censorship environment of the 1975 production without collapsing their dates." },
      { id: "screenplay", label: "Adapt Reyes through Brocka's Manila", player_task: "Coordinate the quest plot, labor episodes, flashbacks and added male-prostitution subplot while preserving what is sourced to the novel versus the film adaptation." },
      { id: "performance", label: "Mix trained and local performers", player_task: "Use Brocka's documented mix of professional, theater-trained and locally recruited nonprofessional actors to build immediacy without pretending performance is unmediated reality." },
      { id: "design", label: "Make Manila's social geography material", player_task: "Coordinate Topacio's art direction with construction sites, Chinatown, squatter housing, neon commerce and domestic interiors so class hierarchy is visible in spaces and objects." },
      { id: "cinematography", label: "Frame congestion without inventing a camera recipe", player_task: "Use De Leon's documented color cinematography and deep-space urban composition while refusing unsupported claims about camera bodies, lenses, stock or lighting ratios." },
      { id: "editing", label: "Join reportage pressure to melodramatic escalation", player_task: "Use the Jarlegos' editing to move between Julio's search, labor exploitation, flashback and social encounters while keeping version cuts explicit." },
      { id: "sound", label: "Separate urban din from emotional score", player_task: "Coordinate Luis and Ramon Reyes's sound work with Jocson's music without inventing microphones, dubbing workflows or a single naturalistic sound recipe." },
      { id: "release", label: "Track censorship, versions and restoration separately", player_task: "Keep 1975 censorship/release, the shortened international version, runtime provenance and the 2013 restoration as distinct circulation and preservation layers." },
    ],
  },
] as const;

export function mergeChapterFifteenManilaClawsLightExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterFifteenManilaClawsLightExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_fifteen_manila_claws_light_verified",
      source: { list_id: "manual_chapter_fifteen_manila_claws_light_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
