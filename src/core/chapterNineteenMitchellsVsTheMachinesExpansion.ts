import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenMitchellsVsTheMachinesExpansionDefinitions = [{
  id: "scenario_the_mitchells_vs_the_machines_2021",
  title: "The Mitchells vs. the Machines",
  originalTitle: "The Mitchells vs. the Machines",
  aliases: ["The Mitchells Vs. The Machines", "Connected"],
  year: 2021,
  titleType: "Movie",
  runtimeMins: 110,
  directors: ["Mike Rianda", "Jeff Rowe"],
  genres: ["Animation", "Adventure", "Comedy"],
  sourceId: "sony_imageworks_mitchells_vs_machines_2021",
  sourceUrl: "https://www.imageworks.com/our-craft/feature-animation/movies/the-mitchells-vs-the-machines",
  scenarioType: "scheduler_priority_stylized_cg_watercolor_marker_linework_katie_vision_mixed_media_brush_projection_handmade_imperfection_human_robot_contrast_editorial_music_sound_platform_distribution_2021",
  premise: "Build The Mitchells vs. the Machines as the next Chapter 19 Production Case because the balanced scheduler leaves it as the sole unresolved P1 case after Furiosa. Selection remains a production-relevance and scheduler decision, not an award-win claim: the Academy records the film as a 2022 Animated Feature nominee while Encanto won. Version provenance stays explicit. BBFC records a 110-minute 2021 Netflix VOD/streaming version, a 105-minute 2021 Sony home-entertainment version, and a later 109-minute 2022 cinema version. The locked evidence does not establish one simple master-lineage explanation for those runtime differences, so they remain separate records; the 110-minute Netflix record is used as the playable runtime because it corresponds to the principal 2021 streaming release. Sony Pictures Animation identifies Mike Rianda as director, Jeff Rowe as co-director and co-writer, Lindsey Olivares as production designer, Phil Lord and Christopher Miller with Kurt Albrecht as producers, and Sony Pictures Imageworks as the animation-production partner. The production lesson is not merely that a CG feature contains 2D drawings. Mike Lasker describes a pipeline built to reproduce Olivares's hand-painted visual-development language inside a 3D production: actual paint strokes informed projection tools; watercolor-marker linework had to vary, break up and sometimes lift off surfaces; lighting needed to react to painterly marks rather than expose them as static texture maps. Katie-Vision adds character-authored 2D drawings and mixed-media elements over finished or developing CG imagery, requiring a dedicated shot-element pipeline rather than being treated as decorative postproduction. Human and robot worlds deliberately use different visual rules. The Mitchell family environment is handmade, imperfect, tactile and often photographed through a virtual handheld/student-film grammar, while PAL's robot world is cleaner, geometric and technologically controlled. These worlds still share production infrastructure, so the distinction is an art-direction and rendering problem rather than evidence of two separate films. Effects likewise combine simulation and hand design. Lasker and Imageworks describe painterly explosions that begin from simulated smoke/fire structures, use painterly textures and are augmented by 2D animation in compositing; Stealthbots required geometry-slicing animation logic that could alter topology while preserving glowing interior surfaces; vegetation and environments were simplified into brush-stroke language rather than left as conventional photoreal CG. Lindsey Olivares and Alan Hawkins describe a broader handmade philosophy in which worn clothes, bent objects, dog-eared books, imperfect interiors, personal crew details and grounded character business had to be deliberately authored because CG does not supply lived-in irregularity for free. Rianda separately describes moving away from a television-board mentality and allowing feature animators to reinterpret staging and performance rather than merely inbetween storyboards. Editorial remains a distinct evidence layer. Greg Levitan is the credited editor and an ACE Animated Feature nominee; Rianda describes deliberate alternation between frenetic comedy/action and slower emotional passages, while the film's Katie-centered visual language often makes the movie feel as though Katie is commenting on or editing what the audience sees. Those claims do not establish the complete edit-software, storage, proxy, turnover, database, conform or archival ledger. Music and sound are separate systems. Mark Mothersbaugh describes character-specific palettes, with organic/folk-like instruments associated with family members and younger/electronic sounds for the kids and robots; producers describe music as something iterated against picture rather than appended after animation. MPSE and CAS nomination records identify a dedicated sound editorial and final mixing team, including Geoffrey G. Rubay, John Pospisil, Tony Lamberti and Michael Semanick, but those credits do not establish the complete ADR, Foley, effects editorial, premix, stem or delivery workflow. Distribution is historically relevant but not production authorship. The film originated as a Sony theatrical project under the title Connected, was delayed during the pandemic and ultimately released through Netflix under the original Mitchells title; Sony later distributed physical media. That shift should be taught as release/distribution history rather than proof that Netflix authored the production pipeline. The locked record still does not establish final audited budget and financing waterfall, complete production calendar, total artist census, full vendor map, complete software/hardware version manifest, asset/render-farm metrics, every proprietary tool, full editorial infrastructure, complete score/session/licensing ledger, complete sound-post delivery chain or exact master lineage among the BBFC versions. Those remain explicit unresolved boundaries.",
  requiredChoicesSeed: {
    screenplay: ["scheduler_not_award_win", "bbfc_multi_version_provenance", "connected_to_netflix_distribution_boundary", "family_vs_robot_visual_duality", "budget_schedule_unresolved"],
    camera: ["watercolor_marker_rendering", "paint_stroke_projection", "katie_vision_mixed_media", "human_handheld_visual_grammar", "robot_clean_visual_grammar", "complete_pipeline_ledger_unresolved"],
    editing: ["greg_levitan_editorial", "frenetic_vs_emotional_pacing", "katie_authored_screen_language", "storyboard_to_feature_animation_iteration", "edit_infrastructure_unresolved"],
    sound: ["mothersbaugh_character_palettes", "organic_vs_electronic_music", "mpse_sound_editorial", "lamberti_semanick_final_mix", "full_audio_ledger_unresolved"],
    themes: ["film_history", "2021", "mitchells_vs_machines", "animation", "stylized_rendering", "mixed_media", "platform_distribution", "chapter19"]
  },
  learningGoals: [
    "Explain why the balanced scheduler selects The Mitchells vs. the Machines after Furiosa.",
    "Explain why an Oscar nomination is not treated as an award win.",
    "Use the BBFC 110-minute 2021 Netflix VOD/streaming record as the playable runtime.",
    "Preserve the 105-minute Sony home-entertainment version separately.",
    "Preserve the later 109-minute 2022 cinema version separately.",
    "Keep exact master lineage among those versions unresolved.",
    "Identify Mike Rianda as director and Jeff Rowe as co-director/co-writer.",
    "Identify Lindsey Olivares as production designer.",
    "Identify Sony Pictures Imageworks as the principal animation-production partner.",
    "Explain why the film is not simply a conventional CG feature with 2D decoration.",
    "Explain how Olivares's visual-development art drove rendering-tool requirements.",
    "Explain why actual paint strokes were useful production inputs.",
    "Explain projection-based brush treatment without reducing it to ordinary texture mapping.",
    "Explain watercolor-marker line variation as a rendering problem.",
    "Explain why light and shadow had to react to painterly marks.",
    "Explain Katie-Vision as a dedicated mixed-media shot pipeline.",
    "Explain how character-authored drawings can become part of narrative point of view.",
    "Distinguish the handmade Mitchell world from the cleaner PAL robot world.",
    "Explain why visual-world contrast does not imply separate production pipelines.",
    "Explain the virtual handheld/student-film grammar used around the human family.",
    "Explain why worn clothes, bent objects and imperfect interiors must be deliberately authored in CG.",
    "Explain the production-design value of crew-specific and personal details.",
    "Explain grounded character business as part of feature-animation performance.",
    "Explain Rianda's shift away from simply inbetweening television storyboards.",
    "Explain why feature animators need room to reinterpret staging and performance.",
    "Explain painterly explosions as simulation plus designed 2D/compositing layers.",
    "Explain why hand-drawn FX and procedural simulation can be complementary.",
    "Explain Stealthbot geometry slicing as a specialized animation/topology problem.",
    "Explain why glowing interior surfaces complicate geometry changes.",
    "Explain brush-stroke simplification of vegetation and environments.",
    "Keep a complete proprietary-tool inventory unresolved.",
    "Keep total artist count, render hours and render-farm metrics unresolved.",
    "Identify Greg Levitan as the credited editor.",
    "Explain the deliberate contrast between frenetic action/comedy and slower emotional passages.",
    "Explain why Katie-like screen commentary is a visual-language claim, not a full edit-system ledger.",
    "Keep edit software, storage, proxy, turnover, database and conform details unresolved.",
    "Identify Mark Mothersbaugh as composer.",
    "Explain character-specific musical palettes.",
    "Explain organic/folk-like family colors versus younger/electronic machine colors.",
    "Explain why score iteration against picture remains distinct from editorial authorship.",
    "Identify Geoffrey G. Rubay and John Pospisil within the documented sound editorial team.",
    "Identify Tony Lamberti and Michael Semanick within the documented final mixing team.",
    "Keep ADR, Foley, effects editorial, premix, stems and delivery details unresolved beyond documented credits.",
    "Explain the difference between production authorship and later platform distribution.",
    "Explain the Connected title/release-plan history without treating it as a different production case.",
    "Explain how pandemic-era release disruption changed circulation without proving a change in animation authorship.",
    "Keep final audited budget and financing waterfall unresolved.",
    "Keep the complete production calendar unresolved.",
    "Keep the complete vendor map and software-version manifest unresolved.",
    "Keep the complete score-session and music-licensing ledger unresolved.",
    "Explain why stylized rendering is an industrial production system, not merely an aesthetic label.",
    "Explain how shared infrastructure can support intentionally incompatible visual languages.",
    "Explain why handmade-looking imagery can require substantial engineering rather than less technology.",
    "Explain why imperfection can be intentionally designed and technically standardized without becoming visually uniform.",
    "Close the case only when versions, visual systems, animation, FX, editorial, music, sound, distribution history and uncertainty boundaries agree."
  ],
  phases: [
    { id: "priority", label: "Lock scheduler priority", player_task: "Select Mitchells as the sole remaining P1 case, not as an award winner." },
    { id: "runtime", label: "Version the runtime", player_task: "Keep Netflix, home and later cinema BBFC records distinct." },
    { id: "distribution", label: "Separate release history", player_task: "Keep Connected/Sony/Netflix circulation separate from production authorship." },
    { id: "visual_reference", label: "Start from paintings", player_task: "Use Olivares's drawings and paint marks as technical targets." },
    { id: "brush_projection", label: "Project brush language", player_task: "Build watercolor strokes into CG surfaces without flat texture-map appearance." },
    { id: "light_response", label: "Relight the brushwork", player_task: "Let painterly marks participate in light and shadow." },
    { id: "linework", label: "Break perfect lines", player_task: "Use watercolor-marker variation and breakup around forms." },
    { id: "katie_vision", label: "Author Katie-Vision", player_task: "Composite character-authored drawings and mixed media through a dedicated shot pipeline." },
    { id: "human_world", label: "Build handmade humanity", player_task: "Preserve wear, asymmetry, clutter and tactile imperfection." },
    { id: "robot_world", label: "Build clean machines", player_task: "Use controlled geometry and cleaner surface logic for PAL." },
    { id: "handheld", label: "Stage student-film energy", player_task: "Use a handheld-like virtual camera grammar around Katie and her family." },
    { id: "performance", label: "Ground the acting", player_task: "Keep nuanced emotional performance inside caricatured designs." },
    { id: "animator_agency", label: "Open the boards", player_task: "Allow feature animators to reinterpret staging beyond storyboard inbetweening." },
    { id: "vegetation", label: "Simplify environments", player_task: "Translate grass, trees and clutter into designed brush language." },
    { id: "fx_sim", label: "Simulate structure", player_task: "Use simulation where it provides motion and volume." },
    { id: "fx_draw", label: "Design the explosion", player_task: "Layer painterly textures and 2D animation over simulated effects." },
    { id: "stealthbot", label: "Slice machine geometry", player_task: "Support topology-changing Stealthbot motion while preserving glowing interiors." },
    { id: "pipeline_boundary", label: "Freeze tool unknowns", player_task: "Do not invent a complete software or render-farm manifest." },
    { id: "editor", label: "Lock editorial authorship", player_task: "Identify Greg Levitan without inventing his workstation or database." },
    { id: "pacing", label: "Shape contrast", player_task: "Balance frenetic comedy/action against slower emotional beats." },
    { id: "screen_language", label: "Let Katie comment", player_task: "Use screen graphics and visual interruptions as point-of-view language." },
    { id: "editorial_boundary", label: "Freeze edit unknowns", player_task: "Keep software, storage, proxy, turnover and conform details open." },
    { id: "score", label: "Map character palettes", player_task: "Separate family, youth and machine musical identities." },
    { id: "music_picture", label: "Iterate music to picture", player_task: "Use score as emotional architecture without merging music and editing roles." },
    { id: "sound_editorial", label: "Map sound editorial", player_task: "Track documented supervising and design credits." },
    { id: "final_mix", label: "Map final mixing", player_task: "Track documented re-recording credits without inventing the full mix chain." },
    { id: "audio_boundary", label: "Freeze audio unknowns", player_task: "Keep unsupported ADR/Foley/stem/delivery details unresolved." },
    { id: "finance_boundary", label: "Freeze finance unknowns", player_task: "Do not infer final audited budget or financing waterfall." },
    { id: "staff_boundary", label: "Freeze census unknowns", player_task: "Do not invent total artists, vendors, assets or render metrics." },
    { id: "version_boundary", label: "Freeze master lineage", player_task: "Do not invent why BBFC runtimes differ." },
    { id: "production_verification", label: "Close Mitchells audit", player_task: "Verify versions, style systems, animation, FX, editorial, music, sound and uncertainty before promotion." }
  ]
}] as const;

export function mergeChapterNineteenMitchellsVsTheMachinesExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenMitchellsVsTheMachinesExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_mitchells_vs_the_machines_verified",
      source: { list_id: "manual_chapter_nineteen_mitchells_vs_the_machines_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: { title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 },
      scenario_type: definition.scenarioType,
      production_challenge: definition.premise,
      required_choices_seed: definition.requiredChoicesSeed,
      phases: definition.phases,
      learning_goals_seed: definition.learningGoals,
      manual_enrichment_needed: []
    });
    nextPosition += 1;
  }
  return merged;
}
