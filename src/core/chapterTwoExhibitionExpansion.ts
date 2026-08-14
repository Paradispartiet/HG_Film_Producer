import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export type ChapterTwoExhibitionExpansionDefinition = {
  readonly id: string;
  readonly title: string;
  readonly originalTitle: string;
  readonly aliases?: readonly string[];
  readonly year: number;
  readonly titleType: string;
  readonly runtimeMins: number;
  readonly directors: readonly string[];
  readonly genres: readonly string[];
  readonly premise: string;
  readonly sourceId: string;
  readonly sourceUrl: string;
  readonly scenarioType: string;
  readonly requiredChoicesSeed: Readonly<Record<string, readonly string[]>>;
  readonly learningGoals: readonly string[];
  readonly phases: readonly {
    readonly id: string;
    readonly label: string;
    readonly player_task: string;
  }[];
};

export const chapterTwoExhibitionExpansionDefinitions = [
  {
    id: "scenario_the_corbett_fitzsimmons_fight_1897",
    title: "The Corbett–Fitzsimmons Fight",
    originalTitle: "The Corbett–Fitzsimmons Fight",
    aliases: [
      "The Corbett-Fitzsimmons Fight",
      "Corbett-Fitzsimmons Fight",
      "Corbett Fitzsimmons Fight",
      "Corbett and Fitzsimmons Fight",
    ],
    year: 1897,
    titleType: "Feature",
    runtimeMins: 100,
    directors: ["Enoch J. Rector"],
    genres: ["Documentary", "Sport"],
    premise: "Build a complete prizefight recording as an event-cinema system: coordinate outdoor daylight capture, three adjacent wide-format cameras, proprietary 63mm exhibition, territorial distribution and live presentation without confusing Rector's Veriscope original with later facsimile reproductions.",
    sourceId: "manual_the_corbett_fitzsimmons_fight_1897",
    sourceUrl: "https://www.loc.gov/item/2023602024/",
    scenarioType: "documentary_production",
    requiredChoicesSeed: {
      screenplay: ["full_event_structure", "fourteen_round_duration", "introductions_and_intervals"],
      camera: ["three_adjacent_cameras", "wide_ring_coverage", "daylight_event_capture", "proprietary_63mm"],
      editing: ["camera_handoff_continuity", "preserve_event_duration", "separate_veriscope_original_from_lubin_facsimile"],
      sound: ["silent_capture", "live_expert_commentary_as_exhibition_layer"],
      themes: ["film_history", "event_cinema", "sports_media", "exhibition_control", "distribution_rights"],
    },
    learningGoals: [
      "Connect capture format, camera logistics and event duration to the special Veriscope projection system required to exhibit the film.",
      "Treat territorial rights, projector control, live commentary and ticket demand as part of the production-exhibition system rather than afterthoughts.",
      "Keep Rector and Stuart's original Veriscope production distinct from Sigmund Lubin's later facsimile reproduction.",
    ],
    phases: [
      { id: "pitch", label: "Pitch", player_task: "Define the value proposition: audiences pay to re-experience an entire championship event rather than a brief boxing novelty." },
      { id: "research", label: "Research", player_task: "Separate the 1897 Veriscope original, its rights structure and surviving fragments from later facsimile reproductions and conflicting credits." },
      { id: "screenplay", label: "Event structure", player_task: "Plan introductions, fourteen rounds and one-minute intervals as a complete recorded event without inventing fictional narrative beats." },
      { id: "casting", label: "Participants", player_task: "Treat Corbett, Fitzsimmons, referee and ringside figures as real event participants rather than cast characters." },
      { id: "production_design", label: "Arena and apparatus", player_task: "Coordinate ring dimensions, daylight, camera position and a capture system capable of recording the full fight." },
      { id: "cinematography", label: "Cinematography", player_task: "Use adjacent wide-format cameras and planned reel handoffs so the fight remains continuously legible from one privileged ringside viewpoint." },
      { id: "editing", label: "Assembly", player_task: "Preserve event chronology across camera changes and fragments; do not replace the original with Lubin's condensed reenactment." },
      { id: "sound", label: "Exhibition performance", player_task: "Keep original silent capture distinct from the documented live expert commentary delivered beside the projected film." },
      { id: "release", label: "Rights and exhibition", player_task: "Pair proprietary Veriscope projection with territorial exhibition agreements, local theatre deals and event-style ticket economics." },
    ],
  },
  {
    id: "scenario_employees_leaving_browns_atlas_works_sheffield_1901",
    title: "Employees Leaving Brown's Atlas Works, Sheffield",
    originalTitle: "Employees Leaving Brown's Atlas Works, Sheffield",
    aliases: ["Employees Leaving Brown's Atlas Works", "Employees Leaving Brown’s Atlas Works, Sheffield"],
    year: 1901,
    titleType: "Short",
    runtimeMins: 2,
    directors: ["Sagar Mitchell", "James Kenyon"],
    genres: ["Documentary", "Short"],
    premise: "Build a two-minute local factory-gate actuality whose staging, crowd density and recognizable faces are designed for a known Sheffield audience and a showman's later paid screening, making audience recruitment part of the production plan.",
    sourceId: "manual_employees_leaving_browns_atlas_works_sheffield_1901",
    sourceUrl: "https://player.bfi.org.uk/free/film/watch-employees-leaving-browns-atlas-works-sheffield-1901-1901-online",
    scenarioType: "documentary_production",
    requiredChoicesSeed: {
      screenplay: ["shift_exit_event", "recognition_driven_structure", "concluding_camera_acknowledgement"],
      camera: ["fixed_factory_gate_viewpoint", "maximize_recognizable_faces", "outdoor_daylight", "crowd_flow_control"],
      editing: ["short_actuality_structure", "preserve_local_event", "no_fictional_continuity_retrofit"],
      sound: ["silent_capture", "exhibition_accompaniment_separation"],
      themes: ["film_history", "local_audience", "factory_gate_business_model", "showman_commission", "staged_actuality"],
    },
    learningGoals: [
      "Treat the local audience as a production input: recognizable workers and children create the commercial reason to attend the later screening.",
      "Distinguish staged crowd management from a claim that actuality is an untouched transparent record.",
      "Connect Mitchell and Kenyon's filmmaking to fairground/showman commissioning and regional paid exhibition without pretending that a modern director-credit model maps perfectly onto every surviving local film.",
    ],
    phases: [
      { id: "pitch", label: "Local audience promise", player_task: "Define why people from the same workplace and neighbourhood will pay to see this exact local event projected." },
      { id: "research", label: "Commission and audience", player_task: "Ground the factory, Mitchell and Kenyon practice, possible Thomas showman connection and local exhibition logic without upgrading uncertain attribution to fact." },
      { id: "screenplay", label: "Event structure", player_task: "Plan shift-end crowd release and a readable concluding camera acknowledgement rather than fictional plot." },
      { id: "casting", label: "Real participants", player_task: "Work with the actual factory crowd while avoiding invented character roles; recognition, density and movement carry the film." },
      { id: "production_design", label: "Factory gate", player_task: "Use the real Atlas Works gate and street as the recognizable production environment rather than reconstructing it in a studio." },
      { id: "cinematography", label: "Cinematography", player_task: "Choose a fixed outdoor viewpoint that can record a large flow of workers while retaining enough proximity for recognizable faces." },
      { id: "editing", label: "Assembly", player_task: "Keep the short local actuality legible and event-based without importing later continuity grammar." },
      { id: "sound", label: "Exhibition layer", player_task: "Keep photographed silent capture distinct from whatever live music, lecture or audience response may accompany a particular screening." },
      { id: "release", label: "Local screening", player_task: "Plan the showman's later paid exhibition around local recognition—the filmed crowd is also the most valuable prospective audience." },
    ],
  },
  {
    id: "scenario_uncle_josh_at_the_moving_picture_show_1902",
    title: "Uncle Josh at the Moving Picture Show",
    originalTitle: "Uncle Josh at the Moving Picture Show",
    aliases: ["Uncle Josh at the moving picture show", "Uncle Josh and the Moving Picture Show"],
    year: 1902,
    titleType: "Short",
    runtimeMins: 2,
    directors: ["Edwin S. Porter"],
    genres: ["Comedy", "Short"],
    premise: "Build a two-minute vaudeville-theatre comedy in which a rural comic character repeatedly mistakes projected attractions for situations he can physically enter, then tears down the screen to reveal the operator—using the film-within-film setup to explore projection and spectator stereotypes without treating the fiction as evidence of real audience panic.",
    sourceId: "manual_uncle_josh_at_the_moving_picture_show_1902",
    sourceUrl: "https://www.loc.gov/item/00694324/",
    scenarioType: "character_drama_production",
    requiredChoicesSeed: {
      screenplay: ["three_projected_attractions", "escalating_spectator_misreading", "screen_reveal_payoff"],
      camera: ["fixed_vaudeville_box_and_stage_view", "legible_screen_within_frame", "operator_reveal_space"],
      editing: ["projection_reaction_sequence", "comic_escalation", "preserve_fiction_vs_history_distinction"],
      sound: ["silent_capture", "vaudeville_exhibition_context_separation"],
      themes: ["film_history", "spectatorship", "projection", "rube_comedy", "media_self_reflexivity", "audience_myth"],
    },
    learningGoals: [
      "Stage the projection screen, spectator box and hidden operator so the comedy makes the exhibition apparatus itself visible.",
      "Use Uncle Josh's reactions as a period comic stereotype about modernity and spectatorship, not as documentary evidence that real early audiences could not distinguish projected images from physical reality.",
      "Connect the film's dancer, train and country-couple inserts to a compact escalation that ends by literally exposing the projection apparatus behind the screen.",
    ],
    phases: [
      { id: "pitch", label: "Spectator comedy", player_task: "Define the joke as a clash between a familiar rural comic character and the new social and technical situation of projected motion pictures." },
      { id: "research", label: "Audience history", player_task: "Separate Edison catalog comedy, the Uncle Josh/rube tradition and real early-cinema audience history; do not turn the gag into evidence of actual train panic." },
      { id: "screenplay", label: "Escalation", player_task: "Order dancer, express train and country-couple projections so each misreading raises the stakes before the screen is torn down." },
      { id: "casting", label: "Comic performance", player_task: "Center Charles Manley's physical reactions while keeping the projected figures and operator readable as distinct layers of the joke." },
      { id: "production_design", label: "Vaudeville projection space", player_task: "Build a theatre box, stage, screen and concealed operator area that can transform from convincing show to exposed apparatus in one short scene." },
      { id: "cinematography", label: "Cinematography", player_task: "Choose a fixed viewpoint that keeps Uncle Josh, the screen image and the final operator reveal spatially legible at the same time." },
      { id: "editing", label: "Film within film", player_task: "Coordinate projected inserts and Josh's reactions as comic escalation while preserving the distinction between fictional screen space and the theatre space around it." },
      { id: "sound", label: "Silent exhibition layer", player_task: "Treat the photographed film as silent and avoid inventing synchronized train noise or dialogue; any live accompaniment belongs to a specific exhibition context." },
      { id: "release", label: "Audience framing", player_task: "Sell the film as a comedy about the familiar rube character confronting modern entertainment, not as factual proof that cinema audiences were universally naïve." },
    ],
  },
] as const satisfies readonly ChapterTwoExhibitionExpansionDefinition[];

export function mergeChapterTwoExhibitionExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;

  for (const definition of chapterTwoExhibitionExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year &&
        [scenario.film.title, scenario.film.original_title]
          .map(normalizeEarlyCinemaTitle)
          .some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;

    merged.push({
      id: definition.id,
      status: "manual_chapter_two_exhibition_verified",
      source: {
        list_id: "manual_chapter_two_exhibition_expansion_2026",
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
