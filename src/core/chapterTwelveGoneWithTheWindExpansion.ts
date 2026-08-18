import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTwelveGoneWithTheWindExpansionDefinitions = [
  {
    id: "scenario_gone_with_the_wind_1939",
    title: "Gone with the Wind",
    originalTitle: "Gone with the Wind",
    aliases: [],
    year: 1939,
    titleType: "Feature",
    runtimeMins: 220,
    directors: ["Victor Fleming", "George Cukor", "Sam Wood"],
    genres: ["Drama", "Romance", "War", "Historical"],
    premise: "Build Gone with the Wind as a producer-centered Selznick package production operating with MGM association, Loew's distribution, multiple principal directors and units, Technicolor, production design, costume, effects, editing and sound at industrial scale. AFI records Selznick International Pictures as production company, in association with Metro-Goldwyn-Mayer, and Loew's as distributor; David O. Selznick produces. Victor Fleming, George Cukor and Sam Wood all directed principal material, with William Cameron Menzies and additional units handling large-scale second-unit work. Sidney Howard is the credited screenwriter, with extensive documented contributions/revisions from other writers; Ernest Haller and Lee Garmes handled principal photography during different stages, with Ray Rennahan associated with Technicolor photography; William Cameron Menzies created detailed production-design storyboards and Lyle Wheeler served as art director; Walter Plunkett designed costumes; Hal C. Kern supervised editing with James E. Newcom; Max Steiner composed the score; Samuel Goldwyn Studio Sound Department under Thomas T. Moulton received the sound nomination; and John R. Cosgrove, Fred Albin and Arthur Johns were nominated for special effects. Production stretched from the December 1938 burning-of-Atlanta work through principal photography ending 1 July 1939 and additional shooting through 11 November. Preserve the production as a versioned, multi-unit, producer-managed system rather than attributing everything to Fleming alone. Technicolor scale and craft achievement must never neutralize the film's Lost Cause mythology, romanticized plantation order, slavery erasure/minimization and racist stereotyping. Hattie McDaniel's historic Academy win is reception history and evidence of a segregated industry, not proof that the film's racial politics are benign. Do not invent a universal seven-camera setup for every scene, exact lens packages, film stocks beyond documented Technicolor production, microphone models, or precise effects methods where sources do not support them.",
    sourceId: "afi_gone_with_the_wind_1939",
    sourceUrl: "https://catalog.afi.com/Film/1181-GONE-WITH-THE-WIND",
    scenarioType: "selznick_package_multidirector_technicolor_prestige_epic_production_design_representation_critique",
    requiredChoicesSeed: {
      screenplay: ["mitchell_howard_selznick_revision_pipeline", "producer_centered_script_control", "lost_cause_representation_critique"],
      camera: ["haller_garmes_technicolor_coordination", "multi_unit_visual_continuity", "no_universal_seven_camera_or_lens_claim"],
      editing: ["kern_newcom_multi_unit_integration", "director_turnover_continuity", "220_minute_release_provenance"],
      sound: ["moulton_sound_department_coordination", "steiner_score_large_scale_mix", "no_invented_microphone_or_track_claims"],
      themes: ["film_history", "studio_system", "producer_package", "technicolor", "multiple_directors", "production_design", "prestige_epic", "lost_cause", "racial_representation", "slavery", "industrial_scale"],
    },
    learningGoals: [
      "Model Selznick International, MGM association and Loew's distribution as a producer-centered package distinct from a single vertically integrated studio pipeline.",
      "Keep Victor Fleming, George Cukor and Sam Wood visible as principal directors while preserving Menzies and other unit direction rather than assigning the entire production to one auteur.",
      "Treat Selznick's producing authority and screenplay intervention as industrial coordination without erasing Sidney Howard and other documented writing labor.",
      "Preserve Ernest Haller, Lee Garmes and Technicolor specialist Ray Rennahan as distinct photography histories rather than a single timeless camera credit.",
      "Use Menzies's storyboard-driven production design and Lyle Wheeler's art direction to model previsualization, set coordination and multi-unit continuity.",
      "Keep Walter Plunkett costume, Hal C. Kern and James E. Newcom editing, Max Steiner music, Thomas T. Moulton sound and nominated effects labor separately attributable.",
      "Treat the December 1938 Atlanta-fire work, director changes, five-unit acceleration, July end of principal photography and November final shot as a long, changing production chronology.",
      "Analyze Technicolor and spectacle as specialized industrial labor without assuming one camera configuration, lens package or effects method across the entire film.",
      "Critically identify Lost Cause mythology, plantation nostalgia, slavery erasure/minimization and racist stereotypes as representational structures, never as authenticity or prestige bonuses.",
      "Place Hattie McDaniel's historic Academy win within a segregated industry and reception history rather than using it to excuse the film's racial politics.",
      "Keep the film's record awards, box office and 1989 National Film Registry selection downstream from production decisions.",
    ],
    phases: [
      { id: "pitch", label: "Assemble a producer-centered prestige package", player_task: "Frame Selznick International, MGM association, Loew's distribution, star casting and massive adaptation scope before treating scale as quality." },
      { id: "research", label: "Lock directors, units, craft and representation", player_task: "Map Cukor/Fleming/Wood, unit direction, Technicolor, production design and racial mythology before making any causal claim." },
      { id: "screenplay", label: "Control a massive adaptation without erasing writers", player_task: "Coordinate Mitchell, Howard, Selznick and documented revision labor while identifying how Lost Cause ideology and slavery representation enter the adaptation." },
      { id: "casting", label: "Direct stars inside a segregated industry", player_task: "Coordinate Leigh, Gable, de Havilland, McDaniel and the ensemble while separating performance achievement from the production's racist representational system." },
      { id: "production_design", label: "Previsualize scale across sets and units", player_task: "Use Menzies storyboards, Wheeler art direction and Plunkett costume to maintain continuity across changing directors and large production units." },
      { id: "cinematography", label: "Coordinate Technicolor across a changing shoot", player_task: "Keep Haller, Garmes, Rennahan and multi-unit photography attributable while refusing a one-rig explanation for the whole picture." },
      { id: "editing", label: "Integrate months of directors and units", player_task: "Use Kern and Newcom to assemble changing direction, retakes, effects and location material into the 220-minute release form." },
      { id: "sound", label: "Build score, dialogue and spectacle at scale", player_task: "Coordinate Steiner, Moulton and the sound department without fabricating microphones, track layouts or one universal mixing method." },
      { id: "release", label: "Release prestige without laundering ideology", player_task: "Keep awards, box office, Registry status and later cultural debate downstream while explicitly preserving critique of slavery erasure and racist nostalgia." },
    ],
  },
] as const;

export function mergeChapterTwelveGoneWithTheWindExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTwelveGoneWithTheWindExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_twelve_gone_with_the_wind_verified",
      source: { list_id: "manual_chapter_twelve_gone_with_the_wind_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
