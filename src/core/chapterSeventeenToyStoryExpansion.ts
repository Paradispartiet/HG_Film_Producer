import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenToyStoryExpansionDefinitions = [
  {
    id: "scenario_toy_story_1995",
    title: "Toy Story",
    originalTitle: "Toy Story",
    year: 1995,
    titleType: "Movie",
    runtimeMins: 81,
    directors: ["John Lasseter"],
    genres: ["Animation", "Adventure", "Comedy"],
    premise: "Build Toy Story as Pixar's 1995 first feature and the first feature-length film animated entirely with computers, but teach that milestone as a coordinated production system rather than a generic 'CGI revolution.' Pixar's institutional history places the project inside a 1990-91 Disney/Pixar agreement to make and distribute at least one computer-generated animated movie, after Pixar had developed production experience through shorts and commercials. BFI and AFI converge on John Lasseter directing; Ralph Guggenheim and Bonnie Arnold producing; Joss Whedon, Andrew Stanton, Joel Cohen and Alec Sokolow on screenplay; John Lasseter, Pete Docter, Andrew Stanton and Joe Ranft on original story; Ralph Eggleston on art direction/production design; Robert Gordon and Lee Unkrich editing; Randy Newman music; William Reeves as supervising technical director and Pete Docter as supervising animator. Preserve those creative, production and technical roles as separate departments rather than collapsing the feature into one software achievement. The Academy's production retrospective documents an early development path from a Tin Toy-related television-special idea into a feature, storyboard-driven story development, an early version of Woody that became too abrasive, and a crisis in which the team was given two weeks to rethink the film before a revised buddy-story direction won renewed approval. The Walt Disney Company's 30th-anniversary history independently describes that pre-animation screening as the infamous Black Friday screening and likewise records a two-week turnaround. Teach this as story-development and approval evidence, not as a myth that technology automatically solved the film. Pixar's own history identifies its proprietary animation system as Marionette externally and Menv internally, and says the long-lived Menv system was not replaced until Brave; do not infer a specific Toy Story software build, workstation count, animator seat count or asset-management implementation beyond what these sources establish. Rendering is a distinct layer. Pixar's RenderMan history states that Toy Story was made possible by RenderMan's REYES-era renderer. Keep modeling/animation software, scene assembly, lighting/look development and final rendering conceptually separate, and do not reverse-engineer undocumented renderer settings from later systems. The Academy's 20th-anniversary production discussion identifies technical director Galyn Susman and production designer/art director Ralph Eggleston as major contributors to the film's visual system, describes colorscripts as a way to plan palette/emotional progression, and says new hardware/software had to be created for needs including motion blur. Preserve that as production-process evidence without inventing the exact hardware architecture, code modules, sample counts, render settings, storage topology, machine totals or render-hour totals. AFI records the finished film as color animation with Dolby Spectral Recording, 80-81 minutes, Pixar Animation Studios and Walt Disney Pictures, while Danish Film Institute and Library of Congress records give 81 minutes. Disney+'s current streaming entry gives 89 minutes. Use 81 minutes as canonical gameplay runtime because multiple archival/institutional records converge there, while retaining 80-81/89 as archival-versus-current-streaming variance instead of forcing one universal duration. Sound and music are separate from image computation: AFI records Randy Newman and Dolby Spectral Recording, while Skywalker Sound's own project record identifies Gary Rydstrom as Toy Story sound designer and re-recording mixer. Do not infer recorder, microphone, Foley, ADR, mix-stage, speaker-layout or digital-audio workstation details beyond source evidence. A crucial historical boundary is also technological: Pixar's own timeline says Toy Story 2 (1999), not Toy Story (1995), was the first film entirely created, mastered and exhibited digitally. Therefore do not label the 1995 film an end-to-end digital cinema pipeline merely because its animation frames were computer-generated. Later 3-D/reframed/remastered editions are downstream release/preservation layers and must not overwrite the 1995 production system. Do not invent budget figures, render-farm counts, workstation models, polygon counts, texture counts, render times, camera/lens/film-stock analogies, software version numbers, file formats, network/storage architecture or mastering specifications absent from the reviewed authoritative sources.",
    sourceId: "afi_toy_story_1995",
    sourceUrl: "https://catalog.afi.com/Film/55210-TOY-STORY",
    scenarioType: "pixar_disney_first_full_cg_feature_story_pipeline_menv_renderman_reyes_colorscript",
    requiredChoicesSeed: {
      screenplay: ["story_reel_iteration_and_two_week_rethink", "screenplay_and_original_story_credits_kept_distinct", "technology_does_not_replace_story_approval"],
      camera: ["virtual_staging_and_lighting_not_photographic_camera_claim", "colorscript_and_rendering_layers_separate", "no_invented_camera_lens_stock_or_virtual_camera_settings"],
      editing: ["gordon_unkrich_editorial_authorship", "story_reel_revision_separate_from_final_editing", "later_3d_reframing_not_original_edit"],
      sound: ["randy_newman_music_separate_from_sound_design", "afi_dolby_spectral_recording_level_only", "no_invented_recorder_microphone_foley_adr_daw_or_mix_layout"],
      themes: ["film_history", "1990s", "computer_animation", "pixar", "walt_disney_pictures", "john_lasseter", "ralph_guggenheim", "bonnie_arnold", "joss_whedon", "andrew_stanton", "pete_docter", "joe_ranft", "ralph_eggleston", "galyn_susman", "william_reeves", "lee_unkrich", "robert_gordon", "randy_newman", "menv", "marionette", "renderman", "reyes", "colorscript", "motion_blur", "story_reels", "software_pipeline", "runtime_variance", "digital_mastering_boundary"],
    },
    learningGoals: [
      "Model Toy Story as a Disney/Pixar production agreement plus a Pixar feature-production system, not as an isolated software demo.",
      "Separate original-story authorship, screenplay authorship, directing and producing instead of attributing the film's narrative to one auteur or one technology team.",
      "Use the early story-reel crisis and two-week rethink as evidence that story approval and character design remained production-critical inside a digital pipeline.",
      "Do not turn the Black Friday story crisis into a deterministic legend; preserve it as institutionally documented development/approval history.",
      "Keep Ralph Eggleston's production design/art direction, Galyn Susman's technical-director contribution, William Reeves's supervising technical role and Pete Docter's supervising-animation role as distinct responsibilities.",
      "Distinguish Pixar's Menv/Marionette animation environment from RenderMan/REYES rendering; 'computer animation' is not one undifferentiated technical step.",
      "Use Pixar's REYES record only at the directly supported level and do not invent renderer parameters, sampling, shader networks or later rendering features.",
      "Treat Academy-documented colorscripts as visual/emotional planning evidence, distinct from final lighting and rendering implementation.",
      "Treat Academy-documented invention of hardware/software for production needs including motion blur as a real R&D requirement without inventing hardware models, code architecture or compute totals.",
      "Keep virtual staging/camera decisions conceptually separate from photographic camera/lens/film-stock terminology that does not describe this source-verified production system.",
      "Keep Robert Gordon and Lee Unkrich's final editorial credits distinct from earlier storyboard/story-reel iteration.",
      "Keep Randy Newman's music and the film's sound-design/mix work separate from image rendering and from each other.",
      "Preserve 80-81/89-minute archival-versus-current-streaming variance while using the convergent archival 81-minute record as canonical gameplay runtime.",
      "Do not call Toy Story an end-to-end digitally mastered/exhibited film: Pixar explicitly assigns that milestone to Toy Story 2 in 1999.",
      "Keep later 3-D, reframed and remastered releases downstream from the original 1995 production and release evidence.",
      "Keep Academy/Oscar recognition downstream from production evidence; awards corroborate historical significance but do not prove undocumented workflow details.",
      "Avoid inventing unsupported budget, workstation, render-farm, polygon, texture, render-time, software-version, storage/network, file-format, mastering, sound-hardware or virtual-camera specifications.",
    ],
    phases: [
      { id: "disney_pixar_agreement", label: "Turn Pixar's short-form pipeline into a Disney-backed feature", player_task: "Track the 1990-91 Disney/Pixar computer-generated feature agreement and Pixar's prior shorts/commercial experience without inventing contract economics or ownership terms not established by the reviewed sources." },
      { id: "story_development", label: "Develop characters through story reels before full animation", player_task: "Separate original story, screenplay and storyboard iteration; use the early Woody/Buzz development and story-reel evidence without treating every later anecdote as a dated production log." },
      { id: "black_friday_rethink", label: "Recover from the failed early story presentation", player_task: "Model the two-week rethink and renewed approval as a story/production-management crisis rather than a technology failure or a mythic single-day rewrite." },
      { id: "design_and_colorscript", label: "Plan a coherent toy-scale visual world", player_task: "Use Ralph Eggleston/Galyn Susman and Academy colorscript evidence to coordinate palette, scale and emotional progression without inventing exact color values or shot-by-shot lighting recipes." },
      { id: "modeling_and_animation", label: "Animate performances inside Pixar's proprietary digital environment", player_task: "Keep Menv/Marionette as Pixar's animation-system context while leaving unsupported software build numbers, rig counts, model topology and animator-seat details unset." },
      { id: "technical_direction", label: "Coordinate art and software as one production pipeline", player_task: "Keep Galyn Susman, William Reeves and animation leadership visible as technical/production roles; do not collapse their work into RenderMan alone." },
      { id: "lighting_and_motion", label: "Create readable color, lighting and motion in synthetic images", player_task: "Use Academy evidence for colorscripts and motion-blur R&D without inventing lighting rigs, virtual exposure, shutter values, code modules or hardware topology." },
      { id: "renderman_reyes", label: "Render final computer-generated imagery", player_task: "Use Pixar's RenderMan/REYES evidence while leaving unsupported render parameters, shader details, machine counts and render-hour totals unset." },
      { id: "editing_sound_music", label: "Finish picture, sound and score as distinct systems", player_task: "Credit Gordon/Unkrich and Randy Newman, retain AFI's Dolby Spectral Recording record and keep image rendering separate from sound editing/mixing and music." },
      { id: "release_and_digital_boundary", label: "Release the first fully computer-animated feature without rewriting later digital milestones", player_task: "Use 81 minutes as canonical while preserving archival/current-streaming variance, and keep Toy Story 2's 1999 end-to-end digital mastering/exhibition milestone and later Toy Story 3-D/remaster versions downstream." },
    ],
  },
] as const;

export function mergeChapterSeventeenToyStoryExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenToyStoryExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_toy_story_verified",
      source: { list_id: "manual_chapter_seventeen_toy_story_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
