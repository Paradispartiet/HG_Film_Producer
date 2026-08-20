import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenETExtraTerrestrialExpansionDefinitions = [
  {
    id: "scenario_et_the_extra_terrestrial_1982",
    title: "E.T. the Extra-Terrestrial",
    originalTitle: "E.T.: The Extra-Terrestrial",
    aliases: ["E.T.", "E.T. the Extra Terrestrial", "E.T. and Me", "A Boy's Life"],
    year: 1982,
    titleType: "Movie",
    runtimeMins: 115,
    directors: ["Steven Spielberg"],
    genres: ["Fantasy", "Science Fiction"],
    premise: "Build E.T. the Extra-Terrestrial as a 1982 Universal Pictures / Amblin' Entertainment Production Case written by Melissa Mathison, produced by Steven Spielberg and Kathleen Kennedy, directed by Spielberg, photographed by Allen Daviau, designed by James D. Bissell, edited by Carol Littleton, scored by John Williams and completed through a hybrid creature, sound and ILM effects system. AFI distinguishes the earlier 1978 Growing Up project and the Columbia-era E.T. and Me development from the final Universal production; preserve those as development history rather than treating Robert Zemeckis, Bob Gale, Jack Sayles or abandoned titles as final E.T. credits. AFI records principal photography beginning 8 September 1981 in and around Los Angeles, followed by two days at a Culver City high school, eleven days in Northridge and Tujunga, forty-two days on three Laird International Studios stages in Culver City and six final forest days near Crescent City, with principal production completed in December 1981 and additional scenes photographed January–February 1982. The Northridge and Tujunga houses were edited to appear as one neighborhood, while separate stages contained bedrooms, the first floor/backyard and the forest landing environment; treat that geography as constructed production space, not documentary continuity. Contemporary American Cinematographer reporting documents Daviau's low child-perspective camera placement, collaboration with Bissell, ceiling-muslin diffusion, practical-heavy lighting, smoke/fog depth, selective backlight and silhouette for E.T., and a spherical photographic system framed for 1.85 with a 1.66 hard matte using Eastman 5247, normal processing, no pushing and no flashing. Keep those explicit technical facts because they are sourced, but do not turn scene-specific lighting choices into one universal recipe. Spielberg stated that ordinary dramatic scenes were intentionally not storyboarded so child performance could remain spontaneous, while roughly forty-five special-effects shots were storyboarded in detail because Industrial Light & Magic was paid by shot/frame count; preserve that production-management distinction. AFI records Carlo Rambaldi's mechanical creature as an aluminum/steel skeleton under fiberglass, polyurethane and foam-rubber structures, operated with assistants through multiple mechanical E.T. bodies, while Pat Bilon, Tamara De Treaux and Matthew De Meritt supplied distinct movement performances in a performer-capable version. Keep mechanical creature engineering and embodied performance separate from Dennis Muren and ILM's optical/visual-effects work. AFI credits Dennis Muren as visual effects supervisor, Kenneth F. Smith as optical photography supervisor, Ralph McQuarrie with spaceship design and Michael Pangrazio as matte-painting supervisor. Sound likewise remains departmental: Gene Cantamessa production sound, Charles L. Campbell supervising sound editing, Ben Burtt E.T. voice design, Pat Welsh as the principal credited E.T. voice, re-recording mixers Robert Knudson, Robert Glass and Don Digirolamo, and John Williams's score. Do not collapse creature voice design, production sound, rerecording and music into one 'sound design' authorship. AFI records Panaflex cameras and lenses by Panavision, Technicolor color prints, Dolby Stereo in selected theaters and 115- or 120-minute runtime records; use 115 minutes as the canonical scenario runtime while preserving the 120-minute catalog variant. Spielberg's contemporary statement about bringing the picture in for roughly ten-and-a-half million dollars and no more than 58 shooting days is a stated production target/result in the interview context, not a substitute for an independently audited final budget. Keep Cannes, the four Academy wins and later cultural canonization downstream from the production. Do not encode AFI's internally anomalous postproduction-date wording where it conflicts with the documented Sep 1981–Feb 1982 production chronology.",
    sourceId: "afi_et_extra_terrestrial_1982",
    sourceUrl: "https://catalog.afi.com/Film/67140-ET-THEEXTRA-TERRESTRIAL",
    scenarioType: "universal_amblin_suburban_child_perspective_creature_ilM_hybrid_production",
    requiredChoicesSeed: {
      screenplay: ["melissa_mathison_credited_screenplay", "growing_up_and_et_and_me_kept_as_development_history", "unconfirmed_development_writers_not_promoted_to_final_credit"],
      camera: ["allen_daviau_spherical_185_166_hard_matte_5247", "child_perspective_low_camera_and_scene_specific_lighting", "normal_processing_no_push_no_flash_source_verified"],
      editing: ["carol_littleton_editor", "northridge_tujunga_constructed_geography", "no_invented_edit_room_chronology"],
      sound: ["cantamessa_campbell_burtt_welsh_rerecording_roles_distinct", "john_williams_score_separate", "no_invented_recorder_microphone_or_mix_console_hardware"],
      themes: ["film_history", "1980s", "universal", "amblin", "family_science_fiction", "steven_spielberg", "melissa_mathison", "allen_daviau", "james_bissell", "carol_littleton", "child_perspective", "eastman_5247", "spherical_185", "practical_lighting", "smoke_and_fog", "carlo_rambaldi", "creature_performance", "dennis_muren", "industrial_light_and_magic", "optical_effects", "ben_burtt", "john_williams", "production_geography", "storyboard_boundary"],
    },
    learningGoals: [
      "Model E.T. as a Universal Pictures / Amblin' Entertainment production made by a coordinated producing, writing, camera, design, editorial, creature, sound, music and ILM effects system rather than as a lone-director achievement.",
      "Separate the earlier Growing Up and E.T. and Me development paths from Melissa Mathison's final credited screenplay and avoid promoting unconfirmed development participants to final authorship.",
      "Use 8 September–December 1981 plus January–February 1982 as the sourced production chronology, keeping later release and award history downstream.",
      "Understand the Culver City, Northridge, Tujunga, Laird International Studios and Crescent City work as a coordinated production geography whose spaces were edited and staged into one suburban world.",
      "Explain how the Northridge and Tujunga house exteriors were combined through editing rather than treating the finished neighborhood as a single documentary location.",
      "Use Allen Daviau's low camera height as a sourced child-perspective strategy and distinguish it from shots aligned to E.T.'s still-lower point of view.",
      "Use the documented spherical 1.85 / 1.66 hard-matte, Eastman 5247, normal-processing, no-push and no-flash record without inventing a universal lens set, focal-length plan or exposure recipe.",
      "Treat ceiling muslin, practical lamps, smoke/fog, backlight and silhouette as documented scene-dependent cinematography methods rather than one lighting formula applied to the whole film.",
      "Keep James D. Bissell's production design and Allen Daviau's cinematography visibly collaborative, including sets shaped to support day/night visualization and child-level framing.",
      "Distinguish Carlo Rambaldi's mechanical creature engineering from the embodied movement contributions of Pat Bilon, Tamara De Treaux and Matthew De Meritt.",
      "Keep Rambaldi's creature work separate from Dennis Muren and ILM's optical/visual-effects pipeline, including optical photography, matte work and spaceship imagery.",
      "Explain why normal dramatic scenes were left largely unstoryboarded while roughly forty-five ILM effects shots were storyboarded to exact shot/frame requirements.",
      "Separate Gene Cantamessa's production sound, Charles L. Campbell's supervising sound-editing role, Ben Burtt's E.T. voice design, Pat Welsh's voice performance and the rerecording team.",
      "Keep John Williams's score distinct from creature voice design, production sound and sound-effects editing even though all contributed to E.T.'s emotional construction.",
      "Treat the 115/120-minute runtime records, Cannes screening, Academy wins and later cultural status as distribution/reception history rather than evidence for undocumented production practices.",
    ],
    phases: [
      { id: "development", label: "Move from earlier child-project concepts to the final Universal package", player_task: "Track Growing Up, E.T. and Me, A Boy's Life, Kennedy's producing role and Mathison's credited screenplay without collapsing abandoned development into final authorship." },
      { id: "screenplay", label: "Build a suburban child-alien story around performance and restraint", player_task: "Use Mathison's credited script and preserve the boundary between documented drafts, omitted material and the finished screenplay." },
      { id: "locations", label: "Construct one suburb from multiple California locations and stages", player_task: "Coordinate Culver City, Northridge, Tujunga, Laird stages and Crescent City while making the Northridge/Tujunga editorial substitution explicit." },
      { id: "design", label: "Build domestic spaces for child-height photography", player_task: "Coordinate Bissell, illustration, set decoration and construction so bedrooms, house interiors, backyard and forest sets support Daviau's visual strategy." },
      { id: "cinematography", label: "Photograph fantasy from a child-centered visual height", player_task: "Use Daviau's sourced low camera placement, spherical 1.85/1.66 hard-matte plan, Eastman 5247 and normal processing while keeping lighting techniques scene-specific." },
      { id: "creature", label: "Coordinate mechanical E.T. bodies with embodied movement", player_task: "Keep Rambaldi's engineering, assistant-operated mechanisms and performer-based movement distinct so the creature is not misrepresented as either purely animatronic or purely performed." },
      { id: "effects", label: "Plan ILM shots with exact storyboard and frame requirements", player_task: "Separate ordinary non-storyboarded dramatic coverage from the roughly forty-five effects shots that required precise planning, optical work, mattes and spaceship imagery." },
      { id: "editing", label: "Create continuous family geography from discontinuous production spaces", player_task: "Keep Carol Littleton's editorial authorship visible, especially where locations and stages are fused, without inventing an unsupported postproduction chronology." },
      { id: "sound_voice_music", label: "Build E.T.'s sonic identity across distinct departments", player_task: "Coordinate production sound, sound editing, Burtt's voice design, Welsh's performance, rerecording and Williams's score without collapsing their authorship or inventing hardware chains." },
      { id: "release", label: "Keep production evidence separate from release and awards", player_task: "Use the June 1982 release, runtime variants, Cannes screening and Academy recognition as downstream histories while leaving unsupported budget certainty and contradictory date wording unset." },
    ],
  },
] as const;

export function mergeChapterSixteenETExtraTerrestrialExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenETExtraTerrestrialExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_et_extra_terrestrial_verified",
      source: { list_id: "manual_chapter_sixteen_et_extra_terrestrial_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
