import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenFleeExpansionDefinitions = [
  {
    id: "scenario_flee_2021",
    title: "Flee",
    originalTitle: "Flugt",
    aliases: ["Flugt"],
    year: 2021,
    titleType: "Movie",
    runtimeMins: 89,
    directors: ["Jonas Poher Rasmussen"],
    genres: ["Documentary", "Animation"],
    sourceId: "dfi_flee_2021",
    sourceUrl: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/flee",
    scenarioType: "animated_documentary_audio_first_interview_edit_storyboard_animatic_hand_drawn_2d_archive_abstract_memory_identity_protection_multistudio_sound_bridge_2021",
    premise: "Build Flee as the fifth source-first Chapter 19 Production Case and preserve the distinction between documentary evidence, animation interpretation, archival footage and reconstructed memory. The Danish Film Institute anchors Jonas Poher Rasmussen as director and screenwriter, Kenneth Ladekjær as animation director/storyboard supervisor, Janus Billeskov Jansen as editor, Jess Nicholls as art director, Uno Helmersson as composer, the Final Cut for Real/Sun Creature/Vivement Lundi-led production network and an 89-minute Danish release record. The case begins with documentary method rather than animation technique: Rasmussen's long relationship with the real subject and audio/interview material created the evidentiary spine, while the pseudonym Amin and altered visual likeness protected identity. Animation is therefore both an ethical production strategy and a representational system, not proof that the testimony is fictional. Rasmussen, Ladekjær and Jansen describe an audio-first, edit-heavy process in which recorded conversations were condensed and structured, storyboard/rough-drawing material was generated as editable visual footage, and the animatic was refined back and forth with editorial before expensive final animation. Jansen explicitly describes the production requirement that the delivered animatic be exact in length, making picture lock a production-budget constraint rather than a late downstream event. The standard 2D color layer carries present-day testimony and reconstructed past scenes; a simpler, more expressive black-and-white/abstract layer handles traumatic or uncertain memory; archival footage forms a third visual layer with its own provenance. Nordisk Film & TV Fond documents the distributed animation pipeline: Sun Creature in Copenhagen led character animation under Ladekjær, Vivement Lundi in Rennes handled backgrounds and compositing under Nicholls, and Studio Train-Train in Lille contributed FX animation, color and graphical sequences. Filmmaker Magazine and Curzon interviews clarify the authorship boundary: Nicholls oversaw visual development, cinematography-like framing, style, quality control, sets, dressing and post-production; Ladekjær led acting, movement and animation performance; Rasmussen retained documentary/directorial oversight; Jansen remained part of the core creative loop. The production deliberately avoided rotoscoping as a total method. Artists studied filmed reference, voice, gesture and behavior while altering appearance enough to protect identity, so observational fidelity and anonymization had to coexist. Archival research was used both for historical grounding and, in at least one editorial case, to expand the documentary narrative when actual footage connected to Amin's memory was located and recognized. Sound is treated as a continuity system across drawn images and archival material: Edward Björner's sound-team testimony describes building the feeling of flight and continuity across formats, while Helmersson describes a restrained, organic/electronic score shaped around the cadence and emotional weight of Amin's voice. The player must coordinate interview trust, anonymity, documentary verification, audio editing, archive research, storyboard generation, animatic timing, character design, restrained acting, background research, color/lighting, abstract memory sequences, multi-studio handoffs, archive/animation transitions, sound continuity, music restraint, subtitle/language delivery and final documentary accountability while refusing unsupported exact interview-hour totals, complete hardware/software versions, per-shot frame counts, animator-day counts, proprietary file-transfer systems, exact labor allocations by country, unsourced budget shares, complete archive licensing terms, full compositing node graphs, exact sound plug-in chains, final mix routing or claims that awards/distribution prove production authorship.",
    requiredChoicesSeed: {
      screenplay: ["jonas_poher_rasmussen", "audio_interview_spine", "documentary_condensation", "memory_structure", "archive_integration", "anonymity_boundary", "runtime_provenance"],
      camera: ["mauricio_gonzalez_aranda", "interview_reference_footage", "archive_material", "storyboard_as_virtual_camera", "framing_and_light", "rotoscope_boundary_unknown_per_shot"],
      editing: ["janus_billeskov_jansen", "audio_first_edit", "animatic_exact_length", "edit_animation_feedback_loop", "archive_discovery", "three_visual_layers", "documentary_continuity"],
      sound: ["edward_bjorner", "fredrik_jonsater", "uno_helmersson", "voice_as_anchor", "animation_archive_bridge", "organic_minimal_score", "mix_chain_unknown"],
      themes: ["film_history", "2021", "flee", "flugt", "animated_documentary", "jonas_poher_rasmussen", "kenneth_ladekjaer", "jess_nicholls", "janus_billeskov_jansen", "sun_creature", "vivamente_lundi", "studio_train_train", "hand_drawn_2d", "animatic", "archive_footage", "abstract_memory", "anonymity", "documentary_ethics", "audio_first", "multistudio_pipeline", "chapter19"]
    },
    learningGoals: [
      "Explain Flee as the fifth source-first Chapter 19 Production Case and distinguish testimony, animation interpretation, archival evidence and reconstructed memory as separate evidence layers.",
      "Use the Danish Film Institute's 89-minute record as the canonical playable runtime anchor while preserving alternate 90-minute festival/producer listings as version or rounding variance.",
      "Identify Jonas Poher Rasmussen as director and screenwriter, Kenneth Ladekjær as animation director/storyboard supervisor, Janus Billeskov Jansen as editor and Jess Nicholls as art director.",
      "Identify Final Cut for Real, Sun Creature, Vivement Lundi, MostFilm and Mer Film as documented production/co-production participants without inventing ownership or labor shares.",
      "Explain why animation was chosen partly to protect the real subject's identity and why that ethical function does not make the testimony fictional.",
      "Explain the pseudonym/likeness boundary: Amin's voice and behavioral reference can remain evidentiary while visual design is deliberately altered.",
      "Reject the claim that the film simply rotoscopes the documentary footage; Ladekjær describes interpretation from reference rather than tracing as the governing method.",
      "Explain how filmed reference can preserve gesture, rhythm and emotional behavior without reproducing a subject's exact appearance.",
      "Explain Rasmussen's audio-first documentary background and the role of recorded conversations as the narrative spine before final animation.",
      "Explain Jansen's condensation and restructuring of documentary dialogue as editorial authorship that remains accountable to the subject's testimony.",
      "Describe the feedback loop between edit, rough drawings/storyboards and animatic rather than treating animation as a one-way downstream handoff.",
      "Explain why an exact-length animatic matters economically in feature animation: timing decisions determine how much material proceeds into costly final production.",
      "Identify storyboards and rough drawings as a form of virtual cinematography that can supply wide shots, close-ups and angle changes before final animation.",
      "Explain the film's three principal visual evidence modes: full-color 2D animation, simplified expressive/black-and-white memory imagery and archival footage.",
      "Explain that the full-color 2D layer covers present testimony and many reconstructed past scenes while remaining an authored visualization of documentary material.",
      "Explain why the more abstract memory layer is appropriate for traumatic, uncertain or difficult-to-recall experience without converting uncertainty into invented factual detail.",
      "Explain archival footage as primary historical image evidence whose provenance must stay distinct from newly animated reconstruction.",
      "Use Jansen's account of locating recognized real footage during editing to show how archive research can alter documentary structure after an initial cut exists.",
      "Explain that archive discovery can trigger new interviewing and narrative expansion rather than serving only as decorative illustration.",
      "Identify Sun Creature in Copenhagen as the documented lead animation site under Kenneth Ladekjær.",
      "Identify Vivement Lundi in Rennes as the documented background/compositing site under Jess Nicholls.",
      "Identify Studio Train-Train in Lille as a documented contributor to FX animation, color and graphical sequences without generalizing this into a complete labor map.",
      "Explain multi-studio production as a handoff and consistency problem involving layout, character animation, background, compositing, effects, color and editorial review.",
      "Explain Nicholls's art-director role as including visual development, framing/cinematography-like decisions, style, quality control, set design/dressing and post-production oversight.",
      "Explain Ladekjær's animation-director role as governing acting, movement, performance and animation consistency rather than every background/compositing decision.",
      "Explain Rasmussen's directorial oversight as maintaining documentary intention and emotional truth across departments rather than erasing specialist authorship.",
      "Explain Jansen's role in the core creative team as unusually early and iterative because the documentary story and animation timing had to be built together.",
      "Keep complete software names/versions, workstation specifications, render infrastructure and proprietary file-transfer methods unresolved unless title-specific sources establish them.",
      "Keep exact animator headcount and peak crew estimates source-scoped rather than treating interview recollections as a complete payroll census.",
      "Explain that character simplicity balances production feasibility, emotional subtlety and anonymization rather than representing a lack of visual design.",
      "Explain why realistic proportions and restrained acting support documentary tone while more expressive imagery can be reserved for memory states.",
      "Explain background and archival research as a method for reconstructing Kabul, Moscow and other locations without claiming perfect historical completeness.",
      "Explain how framing, light, color and background detail can carry documentary specificity even when the foreground characters are stylized.",
      "Explain why transitions between animation and archival footage require editorial and sonic continuity so the evidence modes feel related without becoming indistinguishable.",
      "Identify Edward Björner as supervising sound editor from title-specific credit sources and preserve sound-team role boundaries.",
      "Explain sound as a bridge across animation and archival imagery, helping maintain place, threat, movement and emotional continuity across visual modes.",
      "Identify Uno Helmersson as composer and explain his account of shaping the score around Amin's voice, emotional cadence and a restrained organic/electronic palette.",
      "Keep exact microphones, recorders, DAW versions, plug-ins, track counts, stems and final mix routing outside the verified layer unless directly sourced.",
      "Explain why real voice carries a special documentary burden in Flee: the animation changes the visible body, but vocal testimony anchors identity, memory and emotion.",
      "Explain the ethical need to distinguish anonymization from fabrication: altered names/likeness protect a person while factual claims still require documentary scrutiny.",
      "Explain how subject feedback on rough cuts can function as a factual-correction and consent dialogue without granting a simplistic claim of total subject control over the film.",
      "Explain why the film's multinational production/funding network matters to Chapter 19 as a model of European co-production and distributed animation labor.",
      "Separate production-company participation, public support, international sales and later distribution from creative authorship and department-level financing claims.",
      "Maintain an uncertainty register for interview-hour totals, archive license terms, full software/hardware stack, per-shot drawing counts, animator-day totals, labor shares, budget allocations, complete sound chains and final mix topology.",
      "Explain Flee's historical significance as a 2021 film that makes documentary truth, privacy, hand-drawn animation, archive research and transnational production mutually dependent rather than treating animation as merely an aesthetic wrapper.",
      "Build a closing production audit that checks runtime/credit provenance, anonymity boundaries, audio/edit chronology, archive provenance, visual-layer distinctions, multi-studio handoffs, sound/music authorship and unresolved claims before production verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Flee evidence hierarchy", player_task: "Separate DFI/producer credits, Rasmussen testimony, animation-team interviews, editor testimony, archive evidence and sound/music testimony before promoting claims." },
      { id: "runtime_credits", label: "Lock runtime and principal credits", player_task: "Use the DFI 89-minute record and documented department credits as the canonical institutional anchor while noting alternate rounded listings." },
      { id: "trust_and_consent", label: "Establish documentary trust", player_task: "Protect the subject relationship and distinguish informed participation from a claim that the subject authored every editorial decision." },
      { id: "anonymity_strategy", label: "Design anonymity into production", player_task: "Preserve the real subject's privacy through pseudonym and altered likeness while retaining truthful voice and behavior evidence." },
      { id: "audio_interviews", label: "Build the audio testimony spine", player_task: "Organize recorded conversations around memory, chronology and emotional disclosure before committing to expensive final animation." },
      { id: "documentary_edit", label: "Condense testimony responsibly", player_task: "Shorten and reorder dialogue for narrative clarity while preserving factual meaning and flagging disputed or uncertain memory." },
      { id: "archive_research", label: "Research historical image evidence", player_task: "Find period footage and location evidence with explicit provenance rather than using archive images as generic atmosphere." },
      { id: "archive_feedback", label: "Let discoveries reshape interviews", player_task: "When authentic footage connects to the subject's memory, return to interviewing and structure rather than forcing the old cut to remain fixed." },
      { id: "visual_language", label: "Separate visual evidence modes", player_task: "Define full-color reconstruction, abstract memory imagery and archival footage as related but non-identical truth-bearing layers." },
      { id: "character_design", label: "Balance likeness and privacy", player_task: "Design characters that preserve cultural and behavioral plausibility without reproducing identifying facial detail." },
      { id: "performance_reference", label: "Translate behavior without tracing", player_task: "Study filmed gesture and emotion for acting reference while preserving the non-rotoscoped interpretive boundary." },
      { id: "storyboard_camera", label: "Use storyboards as virtual camera", player_task: "Generate framing, scale and angle options that editorial can manipulate before final animation." },
      { id: "animatic_edit_loop", label: "Iterate edit and animatic together", player_task: "Move repeatedly between dialogue, storyboard imagery, rough animation and editorial timing until the structure is production-ready." },
      { id: "exact_length_animatic", label: "Lock production timing", player_task: "Deliver an animatic whose duration is stable enough to control downstream animation workload and cost." },
      { id: "color_2d_layer", label: "Produce the primary 2D layer", player_task: "Use restrained full-color hand-drawn animation for testimony and reconstructed past while maintaining documentary tone." },
      { id: "abstract_memory_layer", label: "Visualize traumatic uncertainty", player_task: "Use simplified, expressive monochrome/abstract imagery where memory is fragmented without inventing precise factual detail." },
      { id: "background_research", label: "Reconstruct places from evidence", player_task: "Use archival and contextual research to ground environments while keeping reconstruction limits visible." },
      { id: "art_direction", label: "Unify framing, light and design", player_task: "Coordinate backgrounds, composition, set dressing, color and quality control under the documented art-direction role." },
      { id: "animation_acting", label: "Direct restrained animated performance", player_task: "Control gesture, timing and emotional acting so animated characters remain subtle enough for documentary testimony." },
      { id: "copenhagen_animation", label: "Coordinate Sun Creature animation", player_task: "Manage character-animation work in the documented Copenhagen-led pipeline without inventing unsourced crew allocation." },
      { id: "rennes_background_comp", label: "Coordinate Rennes backgrounds and comp", player_task: "Handoff layout/background/compositing work to the documented Vivement Lundi contribution while preserving visual consistency." },
      { id: "lille_fx_graphics", label: "Coordinate FX and graphical sequences", player_task: "Integrate the documented Studio Train-Train contribution to effects, color and graphical material without overstating whole-film responsibility." },
      { id: "multistudio_review", label: "Review distributed handoffs", player_task: "Use common references and editorial review to keep acting, background, color and compositing coherent across studios." },
      { id: "archive_animation_cut", label: "Cut archive against animation", player_task: "Preserve the evidentiary difference between archive footage and reconstruction while making transitions narratively legible." },
      { id: "sound_bridge", label: "Bridge visual modes with sound", player_task: "Use sound perspective, continuity and designed movement to connect archive, color animation and abstract memory without masking their provenance." },
      { id: "voice_anchor", label: "Protect the documentary voice", player_task: "Keep the real testimony audible as the principal identity and emotional anchor even when the visible body is anonymized." },
      { id: "score_restraint", label: "Shape music around testimony", player_task: "Use Helmersson's restrained organic/electronic palette to support voice and emotion without turning score into factual evidence." },
      { id: "language_subtitles", label: "Deliver multilingual testimony", player_task: "Preserve language, translation and subtitle meaning across Danish, Dari, Russian, English and archival material without flattening speaker identity." },
      { id: "ethical_review", label: "Audit privacy and factual boundaries", player_task: "Check that anonymization, reconstruction and condensation do not silently become fabricated documentary claims." },
      { id: "unknowns_register", label: "Maintain the Flee unknowns register", player_task: "Track interview-hour totals, archive licensing, software/hardware stack, per-shot frame counts, labor shares, budget shares, sound chains and mix topology explicitly." },
      { id: "delivery_review", label: "Audit the complete Flee production system", player_task: "Verify credits, runtime, testimony provenance, visual-layer boundaries, edit/animatic timing, distributed handoffs, sound/music roles and remaining unknowns before production verification." }
    ]
  }
] as const;

export function mergeChapterNineteenFleeExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenFleeExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_flee_verified",
      source: { list_id: "manual_chapter_nineteen_flee_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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