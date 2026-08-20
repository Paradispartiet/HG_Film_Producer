import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenDoTheRightThingExpansionDefinitions = [
  {
    id: "scenario_do_the_right_thing_1989",
    title: "Do the Right Thing",
    originalTitle: "Do the Right Thing",
    aliases: ["DTRT"],
    year: 1989,
    titleType: "Movie",
    runtimeMins: 120,
    directors: ["Spike Lee"],
    genres: ["Comedy", "Drama"],
    premise: "Build Do the Right Thing as a 1988 Brooklyn production released in 1989, not as a later canonization story. AFI identifies 40 Acres and a Mule Filmworks as production company and Universal Pictures as distributor, with Spike Lee producing/writing/directing, Monty Ross co-producing, Jon Kilik line-producing, Ernest Dickerson photographing, Barry Alexander Brown editing and Wynn Thomas designing production. Principal photography ran from 18 July to 14 September 1988 on one Bedford-Stuyvesant block on Stuyvesant Avenue between Lexington and Quincy. AFI records that production materially transformed the block: a working pizzeria was constructed, a radio station replaced a burnt-out structure, vacant buildings were adapted for residences, and a block party was held before filming to establish a positive relationship with residents. Treat that neighborhood relationship, permitting and location-control work as social production infrastructure, not as a generic recipe for urban filming or displacement. Criterion additionally credits Ruth E. Carter for costumes, Skip Lievsay for sound design, Frank Stettner for sound recording, Bill Lee for original score with Branford Marsalis, and Public Enemy's 'Fight the Power' as the film's recurring commissioned anthem. Keep those sound and music layers distinct. Ernest Dickerson's photography, Wynn Thomas's production design and Ruth E. Carter's costumes collaboratively construct the sensation of extreme heat through color, texture, spatial control and photographic choices; preserve their separate authorship instead of assigning the look to one department. The production's community/security history and the conversion of distressed or vacant spaces are historically important but must not be gamified as a coercive location-control workflow. Preserve AFI's approximately $6.2 million production figure and Los Angeles Times reporting that Universal capped the budget around $6.5 million as compatible contemporary/retrospective budget provenance rather than false precision. Keep the 19 May 1989 Cannes screening, 30 June 1989 US opening, later awards, National Film Registry status, home-video editions and Criterion 4K restoration strictly downstream from original production. Use 120 minutes canonically because AFI and Criterion converge on that runtime. Do not invent camera bodies, lens package, negative-stock emulsion, exposure values, exact filter recipes, lighting ratios, sound-recorder/microphone models, precise construction costs, security procedures, neighborhood displacement procedures, music-studio signal chains or restoration steps not secured by the cited record.",
    sourceId: "afi_do_the_right_thing_1989",
    sourceUrl: "https://catalog.afi.com/Film/67050-DO-THE-RIGHT-THING",
    scenarioType: "forty_acres_universal_bed_stuy_block_location_transformation_black_independent_studio_distribution",
    requiredChoicesSeed: {
      screenplay: ["spike_lee_howard_beach_origin_and_one_day_pressure_structure", "ensemble_block_ecology", "do_not_reduce_production_to_later_reception"],
      camera: ["ernest_dickerson_heat_and_skin_tone_authorship", "location_geometry_and_color_collaboration", "no_invented_camera_lens_stock_or_exposure_package"],
      editing: ["barry_alexander_brown_ensemble_rhythm_and_escalation", "one_day_continuity_across_multiweek_shoot", "120_minute_canonical_runtime"],
      sound: ["skip_lievsay_sound_design_and_frank_stettner_recording", "fight_the_power_commissioned_music_layer", "no_invented_recorder_microphone_or_mix_chain"],
      themes: ["film_history", "1980s", "brooklyn", "bedford_stuyvesant", "forty_acres_and_a_mule", "universal_pictures", "black_independent_cinema", "studio_distribution", "location_control", "community_relations", "production_design", "costume", "cinematography", "heat", "editing", "sound_design", "public_enemy", "fight_the_power", "race_politics", "production_afterlife_boundary"],
    },
    learningGoals: [
      "Model Do the Right Thing as a 40 Acres and a Mule production distributed by Universal rather than flattening it into either fully independent or conventional studio production.",
      "Keep 18 July–14 September 1988 production separate from the May/June 1989 festival and theatrical release chronology.",
      "Treat the Stuyvesant Avenue block as a deliberately transformed production environment whose construction, permitting, residents and continuity were central production concerns.",
      "Treat the pre-shoot block party and neighborhood relationships as historically documented community-production infrastructure, not a universal checklist or permission substitute.",
      "Keep Spike Lee's writer/director/producer/actor roles distinct from Monty Ross, Jon Kilik and the wider production organization.",
      "Keep Ernest Dickerson's cinematography, Wynn Thomas's production design and Ruth E. Carter's costume design separately credited while explaining their coordinated heat palette.",
      "Keep Barry Alexander Brown's editing visible in organizing an ensemble and one-day narrative from a multiweek shoot without inventing edit-room chronology.",
      "Keep Skip Lievsay's sound design and Frank Stettner's production recording distinct from Bill Lee's score and Public Enemy's commissioned 'Fight the Power'.",
      "Treat Public Enemy's song as commissioned production material integrated into character, rhythm and soundscape rather than a later soundtrack attachment.",
      "Preserve the approximately $6.2m/$6.5m budget provenance without pretending the sources establish one exact accounting figure.",
      "Treat historical set-security and distressed-building conversion as contextual evidence, not as a repeatable method for controlling neighborhoods or removing occupants.",
      "Use 120 minutes canonically from convergent AFI/Criterion records.",
      "Keep Cannes reception, awards, National Film Registry status, home video and later Criterion restoration downstream from the original production.",
      "Do not invent camera, lens, stock, lighting, sound hardware, construction-cost or restoration details where sources do not secure them.",
    ],
    phases: [
      { id: "pitch", label: "Build one block as a complete social production world", player_task: "Define the film around a single Bed-Stuy block and one-day dramatic pressure while preserving the neighborhood as a specific community rather than generic urban texture." },
      { id: "research", label: "Map residents, permissions, history and production relationships", player_task: "Document the block's real institutions, residents and access needs and distinguish historical community engagement from any assumption that production can control a neighborhood by default." },
      { id: "screenplay", label: "Coordinate an ensemble across one escalating day", player_task: "Use Lee's one-day structure and ensemble intersections to connect economics, race, work, music, policing and neighborhood relationships without reducing characters to thesis statements." },
      { id: "performance", label: "Stage ensemble conflict without losing individual character", player_task: "Coordinate the large cast so overlapping comic, intimate and confrontational beats remain character-specific across the shared block." },
      { id: "design", label: "Transform one real block into a controlled but credible film environment", player_task: "Coordinate Wynn Thomas's production-design layer with constructed storefronts, adapted buildings, signage and street continuity while keeping physical alteration, community consent and later restoration separate." },
      { id: "cinematography", label: "Make heat, skin tone and spatial pressure legible", player_task: "Use Ernest Dickerson's credited authorship and the documented heat/color strategy while leaving undocumented camera bodies, lenses, emulsions, filters and exposure recipes unset." },
      { id: "editing", label: "Build one-day continuity from an eight-week production", player_task: "Use Barry Alexander Brown's editing layer to preserve geography, recurring characters, escalation and temporal continuity without inventing a postproduction schedule." },
      { id: "sound", label: "Separate location sound, sound design, score and commissioned song", player_task: "Keep Stettner recording, Lievsay sound design, Bill Lee score and Public Enemy's commissioned anthem as distinct authored layers without inventing hardware or mix-chain details." },
      { id: "release", label: "Separate production from controversy, awards and restoration", player_task: "Track the 1988 shoot, 1989 Cannes/theatrical release and later canonization/restoration as successive histories rather than allowing later status to rewrite original production evidence." },
    ],
  },
] as const;

export function mergeChapterSixteenDoTheRightThingExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenDoTheRightThingExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_do_the_right_thing_verified",
      source: { list_id: "manual_chapter_sixteen_do_the_right_thing_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
