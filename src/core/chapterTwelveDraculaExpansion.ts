import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTwelveDraculaExpansionDefinitions = [
  {
    id: "scenario_dracula_1931",
    title: "Dracula",
    originalTitle: "Dracula",
    aliases: ["Drácula"],
    year: 1931,
    titleType: "Feature",
    runtimeMins: 75,
    directors: ["Tod Browning", "George Melford"],
    genres: ["Horror"],
    premise: "Build Dracula as one Universal studio-system case with two historically distinct 1931 production variants rather than duplicating the same property into two unrelated game films. AFI records Universal Pictures as production and distribution company for both. The English-language version was directed by Tod Browning, produced by Carl Laemmle Jr., scripted by Garrett Fort with additional dialogue by Dudley Murphy, photographed by Karl Freund, designed by Charles D. Hall, edited by Milton Carruth under Maurice Pivar, supervised for recording by C. Roy Hunter and made up by Jack Pierce; its documented production ran from 29 September to 15 November 1930 with later scenes and retakes, Western Electric sound and a 74–75 minute runtime. The Spanish-language Drácula was directed by George Melford with Enrique Tovar Ávalos as dialogue director, produced by Carl Laemmle Jr. with Paul Kohner as associate producer, adapted into Spanish by Baltasar Fernández Cué, photographed by George Robinson and edited by Arthur Tavares under Pivar; AFI records the same Charles D. Hall sets, C. Roy Hunter sound supervision, Jack Pierce makeup, Western Electric sound and a 103-minute runtime. AFI and the Academy document that most Spanish-version work happened at night after the English crew left the shared sets. Keep the crews separate: AFI explicitly warns that sources which credit Karl Freund with photographing the Spanish version are wrong. Treat the paired versions as evidence of early-sound international market strategy, translation, scheduling and departmental reuse rather than as a generic Universal-horror preset. Preserve version provenance, language, runtime, later restoration/Registry status and the limits of the sources; do not invent lenses, stock, exact lighting units, microphone models, or a claim that every Spanish shot merely copied an English daily.",
    sourceId: "afi_dracula_1931",
    sourceUrl: "https://catalog.afi.com/Film/7690-DRACULA",
    scenarioType: "universal_horror_parallel_english_spanish_versions_shared_sets_night_shift_international_sound_market",
    requiredChoicesSeed: {
      screenplay: ["stoker_deane_balderston_fort_adaptation_chain", "english_spanish_versioning_without_equivalence", "international_sound_market_translation"],
      camera: ["freund_english_vs_robinson_spanish", "shared_sets_distinct_camera_strategy", "no_cross_version_credit_contamination"],
      editing: ["carruth_english_vs_tavares_spanish", "runtime_75_vs_103_version_provenance", "parallel_version_continuity"],
      sound: ["western_electric_both_versions", "hunter_sound_supervision", "language_performance_as_production_system"],
      themes: ["film_history", "studio_system", "universal_horror", "multilingual_versions", "early_sound", "international_markets", "shared_sets", "departmental_labor", "version_history"],
    },
    learningGoals: [
      "Model Dracula and Drácula as parallel Universal productions sharing infrastructure while preserving separate directors, casts, photography and editing credits.",
      "Keep Tod Browning and George Melford distinct rather than collapsing both versions into a single auteur credit.",
      "Keep Karl Freund attached to the English version and George Robinson to the Spanish version; explicitly reject the erroneous cross-credit identified by AFI.",
      "Distinguish Milton Carruth's English-version edit from Arthur Tavares's Spanish-version edit while retaining Maurice Pivar's supervisory role.",
      "Use Charles D. Hall's shared sets to teach studio asset reuse without assuming the two versions staged or photographed every scene identically.",
      "Treat the day/night scheduling documented by AFI and the Academy as an industrial resource-allocation strategy created by early sound's language-market problem.",
      "Preserve Garrett Fort/Dudley Murphy English writing credits and Baltasar Fernández Cué's Spanish-version adaptation instead of treating translation as invisible labor.",
      "Use the documented Western Electric sound system and C. Roy Hunter supervision without inventing microphone models or recording channels.",
      "Preserve the 74–75 minute English and 103 minute Spanish runtimes as distinct version evidence rather than normalizing them into one master.",
      "Keep Lugosi/Villarías performance comparison and later National Film Registry recognition on the analysis/reception side rather than using legacy as a production cause.",
      "Treat Universal horror as a studio genre cycle produced through reusable labor, sets, stars, makeup and market strategy, never as a deterministic horror-style preset.",
    ],
    phases: [
      { id: "pitch", label: "One property, two market versions", player_task: "Frame Universal's Dracula as an early-sound international-market problem requiring parallel English and Spanish productions without erasing either crew." },
      { id: "research", label: "Lock the two credit trees", player_task: "Separate Browning/Freund/Carruth from Melford/Robinson/Tavares and flag the documented Freund cross-credit error before production choices are made." },
      { id: "screenplay", label: "Adapt and re-version the property", player_task: "Track the Stoker/stage/Fort chain and Fernández Cué's Spanish-version labor while deciding what must remain equivalent and what may diverge." },
      { id: "casting", label: "Direct language-specific ensembles", player_task: "Build Lugosi/Chandler/Frye and Villarías/Tovar/Álvarez Rubio as separate performance systems rather than translated copies." },
      { id: "production_design", label: "Reuse Hall's sets across shifts", player_task: "Schedule shared Universal sets across English daytime and Spanish nighttime work while preserving each unit's staging autonomy." },
      { id: "cinematography", label: "Two camera teams, one infrastructure", player_task: "Keep Freund's English photography and Robinson's Spanish photography separate and compare camera decisions without contaminating credits." },
      { id: "editing", label: "Build two valid runtimes", player_task: "Let Carruth and Tavares shape different cuts and preserve 74–75 versus 103 minutes as version-specific outcomes." },
      { id: "sound", label: "Language becomes production infrastructure", player_task: "Coordinate Western Electric sound, Hunter supervision, dialogue direction and performance language without inventing undocumented equipment." },
      { id: "release", label: "Release versions to different audiences", player_task: "Treat the two releases, later alterations, restoration and Registry recognition as versioned distribution/preservation history, not a single timeless text." },
    ],
  },
] as const;

export function mergeChapterTwelveDraculaExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTwelveDraculaExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_twelve_dracula_verified",
      source: { list_id: "manual_chapter_twelve_dracula_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
