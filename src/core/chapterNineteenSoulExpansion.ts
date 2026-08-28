import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenSoulExpansionDefinitions = [
  {
    id: "scenario_soul_2020",
    title: "Soul",
    originalTitle: "Soul",
    aliases: [],
    year: 2020,
    titleType: "Movie",
    runtimeMins: 100,
    directors: ["Pete Docter"],
    genres: ["Animation", "Adventure", "Comedy", "Drama", "Fantasy"],
    sourceId: "afi_soul_2020",
    sourceUrl: "https://catalog.afi.com/Film/71060-SOUL",
    scenarioType: "cg_animation_dual_world_new_york_great_before_black_cultural_authenticity_jazz_performance_linework_rendering_remote_completion_disney_plus_2020",
    premise: "Build Soul as the second source-first Chapter 19 Production Case and keep four systems distinct: a mature Pixar CG feature-production pipeline, a deliberately split visual language for grounded New York and the abstract Great Before, a culturally specific Black New York/jazz representation process, and a production completed remotely during the first COVID-19 shutdown before a Disney+ release. AFI anchors Pete Docter as director, Dana Murray as producer, Kemp Powers and Mike Jones with Docter on screenplay, Ian Megibben as director of photography, Steve Pilcher as production designer, Kevin Nolting as editor, Trent Reznor and Atticus Ross as music composers, Jon Batiste for jazz compositions, and a 100-minute duration. Pixar records that employees began working from home on March 16, 2020 with approximately seven weeks of Soul production remaining and that the film was completed on time the following month; this establishes remote completion, not that the whole film was produced remotely. Pixar's production record and design material separate recognizable New York research, jazz-club scale and physical specificity from the Great Before, which had to be invented as a soft, abstract, particulate and pastel world. RenderMan's Pixar case study documents Ian Megibben's lighting leadership, Steve Pilcher's production-design collaboration and consultation with cinematographer Bradford Young, including adjustments to shading and lighting for Black skin and references such as Roy DeCarava photography. D23 records that the film used a 2.39:1 frame and modified Pixar technology for the ethereal realm, while Disney/Pixar animation reporting documents a new line-work technique developed to preserve facial and hand clarity on translucent soul characters and a living-line design grammar for the counselors. Those records establish art-directed technical innovation, not a license to invent exact renderer versions, shader graphs, sampling values, per-shot lighting rigs or internal tool names beyond what the sources establish. Cultural specificity is treated as production work rather than a generic diversity label: Kemp Powers contributed across writing, art, design and animation, Pixar used an internal culture trust and outside consultation, artists studied Black hair, skin, barbershop/tailor details and New York behavior, and the case keeps those documented consultation processes distinct from claims that any single consultant universally authorized the representation. Jazz performance is also a cross-department pipeline. Disney records Jon Batiste's performances and reference footage as the basis for Joe's piano animation, while D23 records multiple-camera reference and technology that illuminated keys so animators could place fingers accurately; music reporting keeps Batiste's Earth/jazz work separate from Trent Reznor and Atticus Ross's Great Before score, with later collaboration where the worlds meet. Kevin Nolting's editorial account places editing across development through final mix and describes music arriving early enough to shape the cut, but the case does not infer an undocumented edit-system, project structure or turnover recipe. SIGGRAPH reporting confirms that effects work was still active when Pixar shifted home, making distributed completion a production-history fact while leaving exact VPN, workstation, render-farm, security, bandwidth and review-platform details unresolved. The player must coordinate story development, cultural consultation, dual-world production design, character look development, Black skin and hair representation, cinematography and lighting, soul/counselor line systems, effects and particulate worlds, jazz-performance reference, voice and performance animation, editorial iteration, score-versus-jazz authorship, remote completion and platform-era release while refusing unsupported exact budget, department headcount, render hours, renderer build, shader parameters, asset counts, shot count, per-shot lighting values, internal remote-work infrastructure, exact recording chain, MIDI software implementation, edit software/version, final mix topology or a claim that Disney+ distribution proves production financing or creative control.",
    requiredChoicesSeed: {
      screenplay: ["docter_powers_jones", "joe_character_specificity", "great_before_rules", "earth_great_before_boundary", "cultural_consultation", "remote_completion_not_remote_origin"],
      camera: ["ian_megibben", "matt_aspbury", "2_39_frame", "bradford_young_consultation", "black_skin_lighting", "new_york_great_before_visual_split", "shot_parameters_unknown"],
      editing: ["kevin_nolting", "development_to_final_mix", "early_music_editorial", "dual_world_continuity", "remote_completion", "runtime_provenance"],
      sound: ["jon_batiste", "trent_reznor", "atticus_ross", "jazz_reference", "score_world_boundary", "music_world_collision", "recording_chain_unknown"],
      themes: ["film_history", "2020", "soul", "pixar", "pete_docter", "kemp_powers", "dana_murray", "steve_pilcher", "ian_megibben", "kevin_nolting", "bradford_young", "jon_batiste", "trent_reznor", "atticus_ross", "new_york", "great_before", "black_representation", "cultural_consultation", "jazz", "cg_animation", "linework", "rendering", "remote_completion", "disney_plus", "chapter19"]
    },
    learningGoals: [
      "Explain Soul as the second Chapter 19 Production Case and distinguish a mature Pixar CG pipeline from the exceptional remote-completion conditions of spring 2020.",
      "Use AFI's 100-minute duration as the playable runtime anchor without treating every catalogue's rounded duration as an error.",
      "Identify Pete Docter as director, Dana Murray as producer and Kemp Powers/Mike Jones/Docter as the AFI-listed screenplay team without collapsing those roles.",
      "Identify Ian Megibben as AFI's director-of-photography credit and preserve Matt Aspbury's cinematography contribution where title-specific records support it.",
      "Identify Steve Pilcher as production designer and Kevin Nolting as editor.",
      "Explain that Pixar shifted employees home on March 16, 2020 with approximately seven weeks of Soul production remaining and completed the film the following month.",
      "Refuse the stronger claim that Soul was wholly produced remotely merely because its final weeks were completed from home.",
      "Separate production completion during shutdown from the later decision to release Soul on Disney+ on December 25, 2020.",
      "Treat Disney+ distribution as circulation history rather than proof of who financed every production department or exercised creative control.",
      "Explain why New York and the Great Before required deliberately different design, material and lighting grammars rather than one global Pixar look.",
      "Use Pixar's New York and jazz-club research as evidence for grounded scale and recognizable urban detail.",
      "Explain that the Great Before had to be created from scratch and was designed to support the story's ideas rather than imitate one real place.",
      "Identify the Great Before's soft, abstract, pastel and particulate design language without inventing a complete material or shader specification.",
      "Explain the 2.39:1 frame as a documented presentation choice while refusing unsupported per-sequence framing metadata.",
      "Identify the new line-work technique developed for soul characters to preserve facial and hand clarity in translucent forms.",
      "Explain that the soul line system required collaboration among articulation, shading and tools/technical disciplines rather than being only an animator drawing overlay.",
      "Identify the counselors as a living-line design problem that had to remain legible from changing angles and shapes.",
      "Distinguish the graphic counselor language from the volumetric/prismatic soul-character language.",
      "Explain how art direction can force pipeline/tool innovation without claiming that every innovation was a new renderer or generalized Pixar-wide system.",
      "Identify Bradford Young as a cinematography/lighting consultant whose live-action experience informed treatment of Black skin tones.",
      "Explain that RenderMan's Soul case study documents deliberate shading and lighting adjustments for African-American characters rather than assuming one skin model fits every complexion.",
      "Use Roy DeCarava and live-action photographic references as documented visual research while separating reference influence from literal image copying.",
      "Keep exact shader graphs, light intensities, temperatures, filters, sampling values and per-shot lighting rigs outside the verified layer.",
      "Explain why Black hair, skin, barbershop, tailor-shop, movement and New York details were treated as production-specific representation work.",
      "Identify Kemp Powers' contributions across story, art/design and animation as part of the film's authenticity process.",
      "Explain Pixar's internal culture trust and outside consultation as a feedback system rather than a claim that Black experience is singular or that one consultant can certify all representation.",
      "Keep individual consultant comments, approval chains and undocumented representation decisions outside the canonical claim layer.",
      "Identify Jon Batiste as the source of the film's jazz compositions, arrangements and piano-performance reference.",
      "Explain why authentic piano animation required synchronization among recorded performance, visual reference and animation rather than generic hand motion.",
      "Identify the documented multiple-camera/illuminated-key reference method without inventing its software implementation or full MIDI toolchain.",
      "Explain that animator study of Batiste's hands and timing is performance reference, not motion capture in the generic sense.",
      "Keep exact MIDI software, data format, frame mapping, piano-rig electronics and automation code unresolved unless title-specific engineering records establish them.",
      "Identify Trent Reznor and Atticus Ross as score composers and keep their Great Before musical language distinct from Batiste's jazz authorship.",
      "Explain that the Earth/jazz and Great Before score systems were initially developed with contrast and later interacted where the film's worlds collide.",
      "Keep recording microphones, preamps, DAW sessions, plug-ins, stem lists and final score-routing topology outside the verified layer.",
      "Identify Kevin Nolting's account of animation editing as a process spanning development through final mix.",
      "Explain that Reznor/Ross supplied exploratory music early enough for editorial experimentation, without inferring exact cue versions or edit timelines.",
      "Keep edit software/version, project settings, proxy recipes, turnover naming and final conform topology unresolved unless stronger records establish them.",
      "Explain that effects work was still active when Pixar shifted home, making remote collaboration a genuine production-system constraint rather than only an administrative footnote.",
      "Keep exact remote boxes, VPN architecture, cloud services, security controls, bandwidth, render-farm routing and review software outside the verified layer unless directly sourced.",
      "Explain that remote completion required continuity of asset versions, reviews, approvals and department handoffs even when artists were physically distributed.",
      "Distinguish source-backed remote-completion history from present-day recommendations about remote production infrastructure.",
      "Explain why Soul is evidence for animation plurality in Chapter 19: sophisticated CG realism in New York coexists with deliberately graphic, abstract and non-physical character/world systems.",
      "Keep exact asset counts, shot counts, simulation iterations, render hours, renderer build numbers and memory/storage figures unresolved.",
      "Explain why technical realism in skin, hair, piano performance and New York does not require the Great Before to obey the same physical rules.",
      "Treat cultural consultation, rendering, animation, editorial and music as separate authorship systems that coordinate without becoming interchangeable evidence.",
      "Maintain an uncertainty register for budget, schedule before the final seven weeks, department headcounts, renderer/tool versions, shader/lighting recipes, asset and shot counts, remote infrastructure, MIDI implementation, edit system, recording chain and final mix topology.",
      "Explain Soul's Chapter 19 significance as a case where mature studio CG production, representation-specific research, stylized technical innovation, remote pandemic completion and platform-era distribution intersect but must not be conflated.",
      "Build a closing production audit that checks runtime provenance, remote-completion chronology, dual-world design, representation process, animation/rendering boundaries, jazz-performance reference, editorial/music authorship and unresolved technical claims before verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Soul evidence hierarchy", player_task: "Separate AFI credits/runtime, Pixar production history, Pixar/Disney design reporting, RenderMan lighting evidence, SIGGRAPH technical testimony, editorial interviews and release records before promoting claims." },
      { id: "runtime_anchor", label: "Lock runtime provenance", player_task: "Use AFI's 100-minute record as the playable anchor while preserving harmless catalogue rounding differences." },
      { id: "production_release_boundary", label: "Separate production from distribution", player_task: "Keep spring-2020 remote completion distinct from the later Disney+ release decision and platform circulation." },
      { id: "remote_chronology", label: "Lock remote-completion chronology", player_task: "Preserve Pixar's March 16 work-from-home transition with roughly seven weeks remaining and reject a whole-production-remote rewrite." },
      { id: "story_authorship", label: "Map story authorship", player_task: "Coordinate Docter, Powers and Jones screenplay evidence with production development without collapsing director, co-director and writer responsibilities." },
      { id: "cultural_trust", label: "Build cultural feedback loops", player_task: "Treat Pixar's culture trust and consultation as iterative representation feedback rather than a one-person approval stamp." },
      { id: "new_york_research", label: "Ground New York", player_task: "Use jazz-club, barbershop, street, architecture and behavior research to make Joe's Earth world specific without fabricating a location-by-location research ledger." },
      { id: "great_before_rules", label: "Define the Great Before", player_task: "Build a soft, abstract, pastel and particulate world whose rules support the story without pretending it reproduces one religious cosmology." },
      { id: "dual_world_design", label: "Protect the two visual systems", player_task: "Version Earth and Great Before design, materials and lighting distinctly while coordinating transitions between them." },
      { id: "frame_design", label: "Compose the 2.39 frame", player_task: "Use the documented 2.39:1 presentation frame without inventing hidden per-sequence aspect-ratio changes." },
      { id: "black_skin_lighting", label: "Light Black skin deliberately", player_task: "Apply the documented Bradford Young/RenderMan consultation context while keeping exact per-shot lighting parameters source-bounded." },
      { id: "hair_lookdev", label: "Build hair specificity", player_task: "Treat Black hair texture, silhouette and lighting response as authored look-development work without inventing groom counts or shader settings." },
      { id: "soul_character_design", label: "Design translucent souls", player_task: "Coordinate form, color, translucency and expression so non-physical characters remain emotionally readable." },
      { id: "linework_system", label: "Build the soul line system", player_task: "Use the documented line-work innovation to protect hands and facial articulation without reducing it to an unsupported tool name or shader recipe." },
      { id: "counselor_language", label: "Animate living-line counselors", player_task: "Maintain a consistent graphic language for characters that can reconfigure across two- and three-dimensional readings." },
      { id: "jazz_reference", label: "Capture jazz-performance reference", player_task: "Use Jon Batiste's piano performance and multiple-angle reference as evidence for timing and fingering rather than generic musical gesture." },
      { id: "piano_mapping", label: "Map piano notes to animation", player_task: "Use the documented illuminated-key/reference method while keeping the exact MIDI software and implementation unresolved." },
      { id: "performance_animation", label: "Animate character specificity", player_task: "Combine voice, cultural observation, gesture and musical reference while keeping source layers distinct." },
      { id: "effects_particulates", label: "Build abstract effects", player_task: "Coordinate particulate and non-physical effects with story readability without inventing simulation solver settings or iteration counts." },
      { id: "rendering_boundary", label: "Bound rendering claims", player_task: "Use Pixar/RenderMan evidence for lighting and shading practice while refusing exact renderer builds, sample counts or per-shot shader graphs." },
      { id: "editorial_development", label: "Edit from development onward", player_task: "Use Kevin Nolting's animation-editor role from development through final mix to version story evolution without assuming undocumented software." },
      { id: "early_score", label: "Integrate exploratory score early", player_task: "Use early Reznor/Ross music as editorial material while preserving cue/version uncertainty." },
      { id: "jazz_score_boundary", label: "Protect music authorship", player_task: "Keep Batiste's jazz work and Reznor/Ross score distinct, then coordinate their interaction where Earth and Great Before meet." },
      { id: "remote_asset_handoff", label: "Move assets through remote completion", player_task: "Protect versioning, review and approval continuity across distributed artists without inventing Pixar's internal network architecture." },
      { id: "remote_effects", label: "Finish effects from home", player_task: "Use SIGGRAPH's evidence that effects work remained active during shutdown while keeping exact remote render and review systems unresolved." },
      { id: "remote_editorial", label: "Maintain editorial continuity remotely", player_task: "Keep cuts, music, animation updates and review state synchronized through the final production weeks without fabricating infrastructure details." },
      { id: "final_mix_boundary", label: "Carry editorial through final mix", player_task: "Preserve Nolting's development-to-final-mix role while keeping exact stems, mix routing and stage configuration outside the source-locked layer." },
      { id: "platform_release", label: "Separate Disney+ release from production", player_task: "Treat the December 25 Disney+ launch as distribution history rather than evidence about animation authorship or department financing." },
      { id: "unknowns_register", label: "Maintain the Soul unknowns register", player_task: "Track budget, schedule, headcount, renderer/tool versions, shader and light recipes, asset/shot counts, remote infrastructure, MIDI implementation, edit system, recording chain and mix topology explicitly." },
      { id: "chapter19_position", label: "Position Soul in Chapter 19", player_task: "Explain why mature CG craft, representation-specific research, stylized abstraction, remote completion and streaming-era circulation are simultaneous but separate historical systems." },
      { id: "delivery_review", label: "Audit the complete Soul production system", player_task: "Verify runtime, chronology, dual-world design, representation process, animation/rendering, jazz reference, editorial/music boundaries, remote completion and uncertainty before production verification." }
    ]
  }
] as const;

export function mergeChapterNineteenSoulExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenSoulExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_soul_verified",
      source: { list_id: "manual_chapter_nineteen_soul_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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