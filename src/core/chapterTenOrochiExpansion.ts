import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterTenOrochiExpansionDefinitions = [
  {
    id: "scenario_orochi_1925",
    title: "Orochi",
    originalTitle: "雄呂血",
    aliases: ["Serpent", "The Serpent"],
    year: 1925,
    titleType: "Feature",
    runtimeMins: 100,
    directors: ["Buntaro Futagawa"],
    genres: ["Drama", "Action"],
    premise: "Build Orochi as a 1925 Japanese independent star-company production problem, not as a generic samurai-action preset. Tsumasaburo Bando had broken from an established company structure to form his own production company in 1925; the film was produced through Bantsuma Production, directed by Buntaro Futagawa from Rokuhei Susukita's script, photographed by Seizo Ishino and designed by Jinbei Kawamura. The player must coordinate an antihero's social descent, location/stage geography, performance, swordfight choreography, tracking movement, close framing and rapid cutting so the climax grows out of accumulated humiliation and institutional hypocrisy rather than rewarding violence as an abstract spectacle. Keep chanbara historically specific: BFI describes Orochi as part of the transition from earlier Kabuki-influenced swordfight performance toward more action-oriented period cinema, while its critique of feudal authority prevents 'samurai film' from becoming a code for nostalgic honor. Preserve star-producer agency and preservation history: Bando's independent-company role and preservation of the negative helped this film survive a decade whose Japanese production is overwhelmingly lost. Preserve presentation history too: the photographed work is silent; later benshi commentary, including Shunsui Matsuda's 1965 narration tradition, and modern live accompaniment are later performance layers rather than a synchronized 1925 soundtrack. Modern restored presentations vary substantially in runtime, including a 4K restoration supervised by the National Film Archive of Japan, so no one current running time is treated as the immutable original cut.",
    sourceId: "manual_orochi_1925",
    sourceUrl: "https://www.bfi.org.uk/lists/great-japanese-film-every-year-from-1925-now",
    scenarioType: "japanese_independent_star_chanbara_benshi_restoration_production",
    requiredChoicesSeed: {
      screenplay: ["susukita_antihero_social_descent", "feudal_hypocrisy_not_samurai_nostalgia", "violence_as_consequence_not_reward"],
      camera: ["ishino_tracking_closeup_action_legibility", "combat_geography_and_performance", "mobile_camera_without_modern_action_preset"],
      editing: ["rapid_chanbara_escalation", "humiliation_to_climax_causal_chain", "restored_version_runtime_control"],
      sound: ["silent_1925_production", "benshi_as_live_presentation", "matsuda_1965_commentary_not_original_soundtrack"],
      themes: ["film_history", "japanese_silent_cinema", "chanbara", "independent_star_company", "bantsuma", "benshi", "archive_survival", "restoration_history"],
    },
    learningGoals: [
      "Model Bando's 1925 move into independent star-company production as an industrial change that affects control, labor, distribution and preservation, rather than treating stardom as performance alone.",
      "Keep Futagawa's direction, Susukita's screenplay, Ishino's cinematography, Kawamura's design and Bando's producer-star agency distinct so Orochi is not reduced to a single-author legend.",
      "Build chanbara action through readable body, sword, camera and space relationships, using tracking movement, closer framing and rapid editing as coordinated craft rather than a timeless modern action-film recipe.",
      "Connect the climactic swordfight to Kuritomi's accumulated social exclusion and the film's critique of feudal hypocrisy; the player is never rewarded simply for maximizing violence or romanticizing warrior hierarchy.",
      "Treat the surviving negative and later restoration as evidence of preservation history: one unusually intact film cannot stand in statistically for the hundreds of Japanese films produced annually in the mid-1920s that are now lost.",
      "Separate silent photographed production from benshi and music as live exhibition practices, and label Shunsui Matsuda's 1965 commentary tradition as a later interpretive performance rather than original 1925 narration.",
      "Preserve version uncertainty: archive, home-video and restored presentations use different speeds and runtimes, so modern 74-, 80- and roughly 100-minute versions must not be collapsed into one certain original duration.",
    ],
    phases: [
      { id: "pitch", label: "Antihero, not sword fetish", player_task: "Define a period drama in which social exclusion and institutional hypocrisy drive the action; swordfighting must be dramatic consequence rather than the sole production objective." },
      { id: "research", label: "Bantsuma company and survival", player_task: "Ground Bando's independent-company move, Futagawa, Susukita, Ishino, Kawamura, Bantsuma Production, survival of the negative, benshi afterlife and current restoration in institutional evidence." },
      { id: "screenplay", label: "Misrecognition and social descent", player_task: "Structure Kuritomi's repeated attempts to act honorably, the misunderstandings that isolate him and the eventual violent rupture so the climax is causally earned rather than detachable spectacle." },
      { id: "casting", label: "Bando's antihero performance", player_task: "Coordinate physical restraint, humiliation, anger and sword performance around Bando without turning supporting characters into mere targets or reducing period acting to Kabuki stereotype." },
      { id: "production_design", label: "Kawamura's conflict geography", player_task: "Use streets, gates, interiors and obstacles to make hierarchy, exclusion and action geography legible while crediting documented design labor." },
      { id: "cinematography", label: "Ishino and moving chanbara", player_task: "Use tracking, close framing and wider spatial views to maintain speed and combat legibility without importing a contemporary handheld/action grammar as historical fact." },
      { id: "editing", label: "Escalation without confusion", player_task: "Coordinate rapid cuts with readable position, reaction and causal progression so the climax intensifies the drama rather than becoming disconnected motion." },
      { id: "sound", label: "Silent image, live voice", player_task: "Keep the photographed film silent and model benshi/music as exhibition; later Matsuda/Sawato commentary traditions must remain dated interpretive layers." },
      { id: "release", label: "Independent circulation, survival and restoration", player_task: "Separate the 1925 production/release from later negative preservation, benshi revival, 4K restoration and modern variable-speed presentations." },
    ],
  },
] as const;

export function mergeChapterTenOrochiExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterTenOrochiExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_ten_orochi_verified",
      source: {
        list_id: "manual_chapter_ten_orochi_expansion_2026",
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
