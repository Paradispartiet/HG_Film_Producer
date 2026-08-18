import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTenSilentCinemasExpansionDefinitions = [
  {
    id: "scenario_a_page_of_madness_1926",
    title: "A Page of Madness",
    originalTitle: "Kurutta ichipeiji",
    aliases: ["Kurutta ippeiji", "Kurutta ippēji", "Kurutta Ichipeiji"],
    year: 1926,
    titleType: "Feature",
    runtimeMins: 78,
    directors: ["Teinosuke Kinugasa"],
    genres: ["Drama", "Avant-Garde"],
    premise: "Build A Page of Madness as a 1926 independent Japanese avant-garde production problem rather than a generic 'madness' aesthetic. Teinosuke Kinugasa produced and directed through National Art Film and the Shinkankakuha Eiga Renmei, with Yasunari Kawabata credited for the original story/screenplay and Kinugasa, Minoru Inuzuka and Banko Sawada participating in adaptation. Kohei Sugiyama photographed the film, Eiji Tsuburaya assisted camera, Masao Uchida handled lighting, and Kasaku Hayashi and Seyo Ozaki handled sets. The production used rapid cutting, mobile framing, distortion and superimposition to move between observation, memory and subjective perception, while the 1926 release omitted intertitles and depended partly on Japanese benshi exhibition practice for live narration. Keep that historical exhibition system distinct from the surviving print: Kinugasa rediscovered material in 1971, the version available today is shorter than the original release, and later music must never be back-projected as synchronized 1926 production sound. The player analyzes historically situated representation of mental illness without being rewarded for caricature, diagnosis or spectacle of suffering.",
    sourceId: "manual_a_page_of_madness_1926",
    sourceUrl: "https://nfad.nfaj.go.jp/det.php?data_id=66794",
    scenarioType: "japanese_avant_garde_benshi_version_history_production",
    requiredChoicesSeed: {
      screenplay: ["shinkankakuha_collaborative_screenwriting", "visual_melodrama_without_intertitles", "benshi_exhibition_context"],
      camera: ["sugiyama_subjective_visual_system", "mobile_distortion_and_superimposition", "perception_without_diagnostic_simulation"],
      editing: ["rapid_fragmentation_and_flashback", "reality_memory_fantasy_boundary", "surviving_print_version_control"],
      sound: ["silent_1926_production", "benshi_live_exhibition_context", "later_music_not_original_production_sound"],
      themes: ["film_history", "japanese_silent_cinema", "shinkankakuha", "avant_garde", "benshi", "archive_survival", "representation_ethics"],
    },
    learningGoals: [
      "Treat A Page of Madness as a collaboration among Kinugasa, Shinkankakuha writers and a credited production crew, not as a lone-auteur miracle detached from Japanese film and literary institutions.",
      "Plan subjective imagery through camera movement, distortion, superimposition, flashback and rapid cutting while keeping the difference between a character's perception and an objective clinical claim explicit.",
      "Model a 1926 Japanese silent-film screening as an audiovisual event that could include benshi narration and live accompaniment; absence of intertitles does not mean historical audiences received an unexplained mute object.",
      "Coordinate Sugiyama's cinematography, Tsuburaya's camera assistance, Uchida's lighting and Hayashi/Ozaki's sets as a production system rather than attributing every visual effect to directing or editing alone.",
      "Preserve version history: the surviving rediscovered print and its variable modern runtimes are not identical to the 1926 release, and later music belongs to later presentation history rather than original synchronized production sound.",
      "Analyze the asylum melodrama and modernist form without turning mental illness, institutional confinement or suffering into a scoreable stereotype, diagnostic simulation or horror preset.",
      "Use the film's survival and rediscovery to explain canon bias: a famous surviving 1920s Japanese work cannot stand in statistically for the hundreds of films produced in a largely lost silent cinema.",
    ],
    phases: [
      { id: "pitch", label: "Perception without caricature", player_task: "Define the family/asylum melodrama and experimental visual problem without making mental illness itself a spectacle or gameplay reward." },
      { id: "research", label: "Independent production and exhibition research", player_task: "Ground Kinugasa, Kawabata, Inuzuka, Sawada, National Art Film, Shinkankakuha Eiga Renmei, the credited crew and benshi exhibition in institutional and scholarly evidence." },
      { id: "screenplay", label: "Image, melodrama and missing intertitles", player_task: "Structure family history, present action, memory and fantasy so visual ambiguity is intentional while recognizing the benshi's historical role in supplying narration during 1926 exhibition." },
      { id: "casting", label: "Family and institution as people", player_task: "Direct the janitor, his wife, daughter, doctor and patients as specific dramatic agents; avoid a generalized performance code in which visible distress automatically equals menace or diagnosis." },
      { id: "production_design", label: "Institutional space and perceptual rupture", player_task: "Coordinate cells, corridors, barriers, rain, dance space and set geometry so the asylum remains a material environment even when perception fractures it." },
      { id: "cinematography", label: "Sugiyama's mobile subjective system", player_task: "Use movement, angle, distortion and superimposition as historically grounded tools for shifts in perception while crediting the camera and lighting team rather than treating technique as authorless style." },
      { id: "editing", label: "Rapid montage and version control", player_task: "Build rhythm from unusually rapid cutting, flashback and visual collision while keeping the surviving rediscovered version distinct from the longer 1926 release." },
      { id: "sound", label: "Silent film as live presentation", player_task: "Keep photographed production silent, treat benshi narration and accompaniment as exhibition practices, and reject later recorded music as evidence of synchronized 1926 sound." },
      { id: "release", label: "1926 reception, loss and rediscovery", player_task: "Model release, contested experimental reception, decades of presumed loss, 1971 rediscovery and later canonization as separate historical stages rather than one continuous reputation." },
    ],
  },
] as const;

export function mergeChapterTenSilentCinemasExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTenSilentCinemasExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_ten_silent_cinemas_verified",
      source: {
        list_id: "manual_chapter_ten_silent_cinemas_expansion_2026",
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
