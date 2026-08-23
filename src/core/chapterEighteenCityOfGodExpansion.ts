import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenCityOfGodExpansionDefinitions = [
  {
    id: "scenario_city_of_god_2002",
    title: "City of God",
    originalTitle: "Cidade de Deus",
    year: 2002,
    titleType: "Movie",
    runtimeMins: 130,
    directors: ["Fernando Meirelles", "Kátia Lund"],
    genres: ["Crime", "Drama"],
    premise: "Build City of God as a Chapter 18 anchor for digital convergence without misclassifying the production as digital-camera acquisition. César Charlone's cinematography accounts establish a predominantly Super 16 production with selected 35mm photography, using the lighter gauge for agility and 35mm where greater detail was useful, followed by telecine/digital-intermediate-style finishing that allowed the gauges to be matched. Preserve the source discrepancy instead of inventing false precision: the contemporary 2002 ABCine technical session reports roughly 80% 16mm and 20% 35mm, while Charlone's 2010 interview recalls roughly 70% 16mm and the remainder 35mm. The same sources document Aaton Super 16 and some Arri II 35mm work, extensive testing on Palace II, period-photography references and a nine-week Rio shoot. Fernando Meirelles's 2024 BFI interview establishes a second production system around performers: Kátia Lund brought favela documentary and casting experience; non-professional actors went through roughly four-and-a-half to five months of classes and workshops; the actors did not conventionally receive or read the script; scenes and dialogue were developed through rehearsal, prompts and repeatable improvisation; and the cameras were used with a documentary-like readiness to grab performances rather than force them into rigid marks. Preserve the directing-credit boundary. BFI and DFI credit both Fernando Meirelles and Kátia Lund, while Meirelles later described Lund's principal work as casting, actor preparation and performance support and said he proposed the co-director credit to recognize the scale of that contribution rather than a conventional equal division of crew choice and on-set directing. Palace II, also referred to by Meirelles as the short Golden Gate, functioned as a practical laboratory with the same cast before the feature. Meirelles also says the team abandoned its original plan to shoot the feature in the actual City of God after a dangerous incident during the short and instead negotiated access with other communities; treat location access, safety and community relationships as production dependencies, not as a claim that the feature simply captured the named neighbourhood unchanged. The BFI programme record confirms Bráulio Mantovani's screenplay from Paulo Lins's novel, César Charlone's cinematography, Daniel Rezende's editing, Tulé Peake's art direction, Bia and Inês Salgado's costumes, Anna van Steen's makeup, Antônio Pinto and Ed Côrtes's music, and an extensive credited sound-design and mixing chain. It also records 130 minutes, as does DFI; Cannes records a 135-minute 2002 festival entry, so gameplay uses 130 minutes while preserving that institutional runtime/version discrepancy. Do not invent an exact settled 16/35 percentage, a digital-camera origin, an exact lens set, a single exact shooting-community identity where Charlone himself expresses uncertainty, a complete improvisation transcript, a unified runtime across all versions, an uncredited authorship hierarchy, or undocumented DI resolution, scanner, conform, VFX-shot, budget or distribution-contract details.",
    sourceId: "bfi_city_of_god_meirelles_2024",
    sourceUrl: "https://www.bfi.org.uk/interviews/city-god-phenomenon-new-interview-with-fernando-meirelles",
    scenarioType: "mixed_super16_35mm_photochemical_digital_intermediate_nonprofessional_actor_workshops_favela_location_2002",
    requiredChoicesSeed: {
      screenplay: ["paulo_lins_adaptation", "workshop_shaped_dialogue", "nonlinear_multi_period_structure"],
      camera: ["predominantly_super16_selected_35mm", "agile_documentary_like_operation", "period_specific_visual_grammar", "no_false_digital_capture_claim"],
      editing: ["daniel_rezende_kinetic_structure", "telecine_digital_finishing", "mixed_gauge_matching", "runtime_version_boundary"],
      sound: ["credited_location_sound", "layered_sound_design", "antonio_pinto_ed_cortes_music", "no_invented_sound_chain"],
      themes: ["film_history", "2000s", "city_of_god", "cidade_de_deus", "fernando_meirelles", "katia_lund", "cesar_charlone", "braulio_mantovani", "paulo_lins", "daniel_rezende", "brazilian_cinema", "favela", "nonprofessional_actors", "actor_workshops", "improvisation", "palace_ii", "location_safety", "community_coordination", "super_16", "35mm", "aaton", "arri_ii", "photochemical_acquisition", "telecine", "digital_intermediate", "mixed_gauge", "period_design", "kinetic_editing", "sound_design", "documentary_flavour", "source_discrepancy"],
    },
    learningGoals: [
      "Place City of God in Chapter 18 as a photochemical-acquisition film whose mixed-gauge images were shaped through digital post, rather than labelling every digitally finished film as digitally shot.",
      "Explain why Super 16 offered cost, mobility and agility while selected 35mm photography supplied greater detail for some wider or information-dense frames.",
      "Preserve the source-specific gauge-ratio discrepancy: the 2002 ABCine session reports roughly 80/20 while Charlone's 2010 recollection gives roughly 70/30, so neither becomes an invented universal exact percentage.",
      "Use the Aaton Super 16 and selected Arri II 35mm evidence as bounded camera-format history without inventing a complete lens or support package.",
      "Treat telecine and digital-intermediate-style finishing as the bridge that allowed different photochemical gauges to be matched and manipulated in post-production.",
      "Use Palace II as a production laboratory in which camera gauges, emulsions, lighting, handheld/tripod practice, telecine and the non-professional cast could be tested before the feature.",
      "Keep the roughly four-and-a-half to five months of actor classes and workshops as evidence that improvisational performance required extensive preparation rather than an absence of method.",
      "Explain how actors who did not conventionally read the screenplay could still perform structured scenes through rehearsal, prompts, reshaping and repeatable improvisation.",
      "Preserve Kátia Lund's formal co-director credit while also preserving Meirelles's later description of her principal production contribution in casting, actor preparation and performance support.",
      "Treat the decision not to shoot the feature in the actual City of God after the dangerous Palace II experience as a production-safety and location-strategy change, not a trivia footnote.",
      "Model negotiations with community leaders and centres as practical location access and relationship work without romanticising or flattening the communities into scenery.",
      "Keep Charlone's nine-week Rio shoot as a documented schedule boundary while leaving unsupported day counts and per-location schedules unset.",
      "Use period photography and Miguel Rio Branco references to understand how the cinematography differentiated the story's eras rather than applying one undifferentiated favela look.",
      "Distinguish the earthier earlier-period palette, more saturated later-1960s/1970s energy and heavier/bluer nervous late-period treatment as a designed historical progression, not accidental inconsistency.",
      "Treat documentary-like camera readiness as a fictional-production method: the film adapts a screenplay and novel even when cameras react to improvised performance with observational flexibility.",
      "Connect Daniel Rezende's credited editing to the film's fast temporal shifts, repetitions, callbacks and multi-character orientation without pretending the edit was improvised without structure.",
      "Keep Tulé Peake's art direction, Bia and Inês Salgado's costumes and Anna van Steen's makeup visible as departments that construct period and social specificity alongside real locations.",
      "Use the credited sound-recording, sound-design, dialogue, ADR and 5.1-mix teams as evidence that sonic density was an authored production system rather than simply location realism.",
      "Treat Antônio Pinto and Ed Côrtes's music as part of the film's period, rhythm and narrative propulsion while keeping undocumented recording-session details unset.",
      "Use 130 minutes as the gameplay runtime because BFI and DFI record that duration, while preserving Cannes's 135-minute festival record as a real institutional runtime/version discrepancy.",
      "Do not turn the phrase digital convergence into a claim of digital capture: City of God demonstrates how photochemical acquisition, telecine, digital finishing, nonlinear editing and later film-out/distribution could coexist.",
      "Do not invent a single exact shooting-community identity, gauge percentage, DI resolution, scanner, lens package, VFX shot count, budget or distribution chain where the reviewed sources do not establish it consistently.",
    ],
    phases: [
      { id: "adaptation_structure", label: "Turn a large novel into a navigable multi-period screenplay", player_task: "Coordinate Bráulio Mantovani's adaptation, Rocket's point of view, recurring characters and temporal returns so the production has a structure beneath its apparent velocity." },
      { id: "actor_workshops", label: "Build a non-professional ensemble through months of workshops", player_task: "Use the documented four-and-a-half to five months of classes to develop trust, performance tools and repeatable scene objectives before principal photography." },
      { id: "improvisation_pipeline", label: "Shape dialogue through rehearsal and repeatable improvisation", player_task: "Give actors situations, prompts and remembered lines, refine what emerges, and preserve continuity without pretending that no screenplay or direction exists." },
      { id: "palace_ii_lab", label: "Use Palace II as a practical production laboratory", player_task: "Test cast process, gauges, emulsions, handheld/tripod practice, lighting and telecine before committing the feature to its mixed-format workflow." },
      { id: "location_strategy", label: "Change the feature's location plan after a safety failure", player_task: "Abandon the original plan to shoot throughout the actual City of God after the documented dangerous short-film experience and identify workable substitute communities." },
      { id: "community_coordination", label: "Negotiate access with community leaders and centres", player_task: "Treat local relationships, access and reciprocal support as production dependencies while keeping source-specific claims bounded." },
      { id: "mixed_gauge_capture", label: "Combine agile Super 16 with selected 35mm", player_task: "Use predominantly Super 16 for mobility and selected 35mm where detail matters, while preserving the 80/20 versus 70/30 source discrepancy instead of forcing false precision." },
      { id: "period_visual_grammar", label: "Design distinct photographic eras", player_task: "Coordinate palette, texture, camera energy, art direction and costume so shifts across decades are legible without turning every era into a rigid filter." },
      { id: "agile_camera_operation", label: "React to performance with documentary-like camera readiness", player_task: "Let camera operation respond to rehearsed improvisation and real spatial energy while preserving focus, exposure, coverage and narrative orientation." },
      { id: "digital_intermediate", label: "Match photochemical gauges in digital post", player_task: "Use telecine and digital finishing to bring Super 16 and 35mm into a coherent image system without relabelling their original capture as digital." },
      { id: "editorial_structure", label: "Build kinetic chronology in the edit", player_task: "Use Daniel Rezende's editing function to manage flashbacks, repetitions, character introductions, voice-over and action without losing causal clarity." },
      { id: "sound_music", label: "Build rhythmic density through sound and music", player_task: "Coordinate production sound, dialogue work, effects, 5.1 mixing and Pinto/Côrtes music as separate authored layers supporting pace and period." },
      { id: "runtime_version_boundary", label: "Preserve conflicting institutional runtime records", player_task: "Use the 130-minute BFI/DFI runtime for gameplay while retaining Cannes's 135-minute record as evidence that catalogue/version metadata must not be silently normalized." },
      { id: "credit_role_boundary", label: "Keep credit and production-role evidence distinct", player_task: "Credit both Meirelles and Lund while teaching Meirelles's later account that Lund's central work lay in casting, workshops and performer support rather than inventing a conventional fifty-fifty directing split." },
    ],
  },
] as const;

export function mergeChapterEighteenCityOfGodExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenCityOfGodExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_city_of_god_verified",
      source: { list_id: "manual_chapter_eighteen_city_of_god_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
