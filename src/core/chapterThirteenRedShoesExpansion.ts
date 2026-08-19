import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterThirteenRedShoesExpansionDefinitions = [
  {
    id: "scenario_the_red_shoes_1948",
    title: "The Red Shoes",
    originalTitle: "The Red Shoes",
    aliases: [],
    year: 1948,
    titleType: "Feature",
    runtimeMins: 136,
    directors: ["Michael Powell", "Emeric Pressburger"],
    genres: ["Drama", "Romance", "Music"],
    premise: "Build The Red Shoes as an Archers postwar British Technicolor and ballet production that deliberately rejects any equation of the period with monochrome scarcity or location realism. BFI and Criterion identify Michael Powell and Emeric Pressburger under their joint written-directed-produced authorship, with Jack Cardiff cinematography, Hein Heckroth production design, Arthur Lawson art direction, Reginald Mills editing, Brian Easdale composing/arranging/conducting the music, Robert Helpmann choreographing the Ballet of the Red Shoes, Léonide Massine creating and dancing the shoemaker role, and the Royal Philharmonic Orchestra conducted by Thomas Beecham. The Archers cast actual dancers including Moira Shearer, Helpmann, Massine and Ludmilla Tchérina so ballet performance could remain embodied rather than routinely replaced by doubles. BFI documents that Pressburger first developed the idea before the war for Alexander Korda, that Powell and Pressburger revived it in 1946, that Rank Organisation hostility followed a major budget overrun and contributed to a small initial British release, and that the film later found extraordinary New York success. Heckroth's painter-led design and Cardiff's Technicolor are not decoration added after choreography: BFI records a precisely planned colour scheme and even a short film made from Heckroth's sketches to guide preparation, while Criterion describes the central fantasy ballet as a fusion of dance, design, music and cinematic transformation. BFI's archival discussion of the Archers' composed-film method further establishes that some Red Shoes sequences were built with soundtrack prepared first and visuals created around it; do not inflate that evidence into a claim that the entire feature was shot to playback. Preserve the film as a collective production in which choreography, dancer casting, score, design, colour, camera, optical/fantasy transformation and Mills's editing produce a ballet that leaves theatrical space for subjective cinema. The Academy's art-direction and music wins, editing/story nominations and Best Picture nomination remain reception evidence after production. Do not invent exact camera bodies, lenses, film-stock batches, Technicolor camera count, microphones, lighting ratios, shooting dates, studio-stage allocation or effects mechanisms where the institutional sources do not establish them.",
    sourceId: "criterion_the_red_shoes_1948",
    sourceUrl: "https://www.criterion.com/films/233-the-red-shoes",
    scenarioType: "archers_postwar_technicolor_ballet_composed_film_collective_design_dance_music_production",
    requiredChoicesSeed: {
      screenplay: ["pressburger_prewar_korda_origin_and_1946_revival", "archers_joint_authorship", "art_life_backstage_ballet_structure"],
      camera: ["cardiff_technicolor_expressive_colour", "dance_body_and_fantasy_space", "no_invented_camera_lens_stock_package"],
      editing: ["mills_ballet_reality_fantasy_transformation", "dance_design_music_integration", "preserve_runtime_and_restoration_provenance"],
      sound: ["easdale_score_and_beecham_orchestra", "selected_composed_film_soundtrack_first_method", "no_whole_feature_playback_or_microphone_invention"],
      themes: ["film_history", "postwar_britain", "the_archers", "technicolor", "ballet", "dance_for_camera", "production_design", "composed_film", "collective_authorship", "artistic_labor", "anti_realism"],
    },
    learningGoals: [
      "Use The Red Shoes to prove that postwar British cinema could pursue expensive Technicolor fantasy and controlled design at the same historical moment as neorealist scarcity and location realism.",
      "Preserve Powell and Pressburger's joint written-directed-produced Archers model rather than reducing the film to Powell alone or treating partnership credit as a decorative brand.",
      "Keep Jack Cardiff cinematography, Hein Heckroth production design, Arthur Lawson art direction, Reginald Mills editing and Brian Easdale music separately attributable inside the collaborative visual system.",
      "Treat Moira Shearer, Robert Helpmann, Léonide Massine and Ludmilla Tchérina as dancer-performers whose trained bodies shape camera, staging and editing decisions rather than as actors onto whom ballet is later pasted.",
      "Use Helpmann's choreography and Massine's created shoemaker role to model choreography as film-production labor in dialogue with design, photography and editing.",
      "Model Heckroth's painter-led colour and fantasy design as planned infrastructure; preserve BFI evidence that a film of his sketches guided preparation without inventing a universal storyboard or previsualization workflow for every shot.",
      "Treat Cardiff's Technicolor as expressive photography coordinated with costume, set, makeup and light rather than as a technology automatically producing beauty or historical progress.",
      "Distinguish the recognizable backstage world from the central ballet's subjective fantasy, where cinematic space is freed from theatrical realism through editing, design and effects-like transformation.",
      "Use the Archers' composed-film principle carefully: some Red Shoes sequences were built from soundtrack first, but the source does not justify claiming that the complete feature was shot to playback.",
      "Preserve the project's prewar Korda/Pressburger origin and 1946 Archers revival as development history rather than inventing a single uninterrupted production path.",
      "Treat the budget overrun and Rank Organisation's hostile small British release as industrial constraint and distribution history, not proof that artistic ambition necessarily causes commercial failure.",
      "Keep the later New York run, Academy recognition and restoration downstream from production while tracking 133–136-minute institutional runtime variation as version metadata rather than pretending every presentation is identical.",
    ],
    phases: [
      { id: "pitch", label: "Choose postwar artistic excess over realism", player_task: "Frame an Archers ballet drama whose industrial risk, Technicolor and fantasy are historically specific rather than a generic prestige upgrade." },
      { id: "research", label: "Recover the prewar project and ballet lineage", player_task: "Trace Pressburger's Korda-era origin, Ballets Russes influence and the 1946 revival before fixing screenplay, casting and design decisions." },
      { id: "screenplay", label: "Turn backstage creation into dramatic structure", player_task: "Coordinate Powell-Pressburger joint authorship around dancer, composer and impresario without separating art-making from the production system shown on screen." },
      { id: "casting", label: "Cast bodies that can carry ballet on camera", player_task: "Build around Shearer, Helpmann, Massine and Tchérina as trained dancers while coordinating dramatic performance and choreography." },
      { id: "production_design", label: "Previsualize colour and subjective ballet space", player_task: "Use Heckroth, Lawson and design sketches to connect painterly colour, costume, set and fantasy transformation without treating realism as the default." },
      { id: "cinematography", label: "Photograph choreography through Technicolor", player_task: "Coordinate Cardiff's colour photography with whole-body dance, close detail and fantasy space without inventing unsupported camera/lens packages." },
      { id: "editing", label: "Make the ballet exceed the stage", player_task: "Use Mills's editing to move between theatrical continuity, subjective imagery and impossible transitions while preserving dancer legibility." },
      { id: "sound", label: "Compose image, dance and music together", player_task: "Coordinate Easdale, Beecham and the orchestra; use soundtrack-first evidence only where sourced and never generalize it to the whole feature." },
      { id: "release", label: "Separate industrial disappointment from later canon", player_task: "Track Rank's initial British release, later New York success, Academy reception and restoration as successive layers rather than rewriting production from hindsight." },
    ],
  },
] as const;

export function mergeChapterThirteenRedShoesExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterThirteenRedShoesExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_thirteen_red_shoes_verified",
      source: { list_id: "manual_chapter_thirteen_red_shoes_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
