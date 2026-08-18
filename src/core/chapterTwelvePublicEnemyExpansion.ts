import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTwelvePublicEnemyExpansionDefinitions = [
  {
    id: "scenario_the_public_enemy_1931",
    title: "The Public Enemy",
    originalTitle: "The Public Enemy",
    aliases: ["Public Enemy"],
    year: 1931,
    titleType: "Feature",
    runtimeMins: 83,
    directors: ["William A. Wellman"],
    genres: ["Drama", "Crime", "Gangster"],
    premise: "Build The Public Enemy as a 1931 Warner Bros. studio-and-genre production rather than as a generic gangster template or a retrospective James Cagney legend. AFI documents Warner Bros. Pictures as both production and distribution company, William A. Wellman directing, John Bright and Kubec Glasmon on screenplay from their original story Beer and Blood, Harvey Thew adapting, Dev Jennings photographing, Max Parker handling art direction, Edward M. McDermott editing, Earl Luick wardrobe, Perc Westmore makeup and David Mendoza credited as Vitaphone orchestra conductor. Library of Congress places the film among Warner's earliest sound-era street crime films and describes Cagney's performance as star-making, but later stardom must remain reception evidence rather than a production cause available in advance. The film also sits inside the 1930–34 pre-enforcement interval: the Production Code existed, yet the Production Code Administration and mandatory seal regime did not begin until 1934, so the player must distinguish period self-regulation and censorship pressure from later PCA enforcement. Preserve source limits. AFI gives 74 or 83 minutes while Library of Congress describes an 83-minute presentation; treat runtime as version/catalogue provenance rather than evidence of one immutable master. Do not invent lens packages, microphones, exact sound-recording machinery, location schedules, stunt methods or a role-swap story that AFI explicitly identifies as incorrect.",
    sourceId: "afi_public_enemy_1931",
    sourceUrl: "https://catalog.afi.com/Film/3860-THE-PUBLIC-ENEMY",
    scenarioType: "warner_pre_enforcement_gangster_studio_genre_star_voice_urban_violence_departmental_production",
    requiredChoicesSeed: {
      screenplay: ["beer_and_blood_to_screen_adaptation", "warner_gangster_cycle_without_genre_determinism", "1931_pre_enforcement_code_boundary"],
      camera: ["dev_jennings_crime_staging", "max_parker_space_camera_coordination", "no_invented_lens_or_location_claims"],
      editing: ["mcdermott_escalation_and_consequence", "dialogue_action_continuity", "runtime_version_provenance"],
      sound: ["early_warner_sound_voice_and_effects", "mendoza_vitaphone_orchestra_credit", "no_invented_recording_system_claims"],
      themes: ["film_history", "studio_system", "gangster_cycle", "warner_bros", "pre_code", "star_persona", "urban_violence", "departmental_labor", "censorship_history"],
    },
    learningGoals: [
      "Model The Public Enemy as a Warner Bros. production-and-distribution case whose gangster identity emerges from studio organization, writing, performance and craft rather than from a universal genre preset.",
      "Distinguish Bright and Glasmon's Beer and Blood story/screenplay contribution from Harvey Thew's adaptation credit instead of collapsing writing into one author field.",
      "Use William A. Wellman's direction as coordination across performance, space, camera, editing and sound without erasing the separately credited Warner departments.",
      "Keep Dev Jennings's photography, Max Parker's art direction, Edward M. McDermott's editing, Earl Luick's wardrobe and Perc Westmore's makeup visible as distinct production labor.",
      "Treat James Cagney's later star status as reception and industrial legacy, not as an ahistorical cause of every decision made before release.",
      "Reject the frequently repeated role-swap story that AFI identifies as incorrect rather than converting production folklore into gameplay fact.",
      "Place the film in the 1930–34 pre-enforcement interval: the Production Code existed, but the PCA seal regime and Joseph Breen's centralized enforcement began in 1934.",
      "Use David Mendoza's documented Vitaphone orchestra-conductor credit without inferring an undocumented microphone model, recording channel, synchronization workflow or complete sound-system specification.",
      "Preserve runtime and archival provenance: AFI's 74-or-83-minute record and Library of Congress's 83-minute presentation do not prove that every surviving or historical release element is identical.",
      "Analyze violence, Prohibition crime and urban street mythology critically as genre and social representation, never as a reward-bearing authenticity formula.",
    ],
    phases: [
      { id: "pitch", label: "A Warner gangster film, not a gangster preset", player_task: "Frame Beer and Blood, Warner's street-crime identity and the 1931 studio context before relying on Cagney's later fame." },
      { id: "research", label: "Lock credits, Code chronology and source limits", player_task: "Verify AFI, Library of Congress, BFI and Production Code chronology, including what the sources do not establish about equipment, locations and production folklore." },
      { id: "screenplay", label: "Turn Beer and Blood into a studio crime narrative", player_task: "Separate Bright/Glasmon screenplay-story provenance from Harvey Thew's adaptation credit while shaping escalation, family conflict and consequence." },
      { id: "casting", label: "Build performance before star mythology", player_task: "Direct Cagney, Edward Woods, Jean Harlow, Joan Blondell, Donald Cook and the ensemble through speech, gesture and physical conflict without back-projecting later celebrity." },
      { id: "production_design", label: "Construct the urban crime world", player_task: "Coordinate Max Parker's art direction with wardrobe, makeup, blocking and camera while refusing unsupported claims about exact sets or location schedules." },
      { id: "cinematography", label: "Stage bodies, threat and street space for sound cinema", player_task: "Use Dev Jennings's credited photography to organize proximity, movement and violence without inventing lenses, stock or lighting packages absent from the locked sources." },
      { id: "editing", label: "Escalate action into consequence", player_task: "Use McDermott's credited editing to control dialogue/action continuity and the rise-and-fall structure while keeping catalogue runtime variation explicit." },
      { id: "sound", label: "Voice and impact inside early Warner sound", player_task: "Coordinate spoken performance, effects and the documented Mendoza/Vitaphone orchestral credit while refusing unsupported recording-system detail." },
      { id: "release", label: "Release before PCA enforcement", player_task: "Place the May 1931 Warner release inside the pre-enforcement Code period and keep later National Film Registry status and Cagney stardom on the reception side of the timeline." },
    ],
  },
] as const;

export function mergeChapterTwelvePublicEnemyExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTwelvePublicEnemyExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_twelve_public_enemy_verified",
      source: { list_id: "manual_chapter_twelve_public_enemy_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
