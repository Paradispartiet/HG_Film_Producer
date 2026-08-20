import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenSugarCaneAlleyExpansionDefinitions = [
  {
    id: "scenario_sugar_cane_alley_1983",
    title: "Sugar Cane Alley",
    originalTitle: "Rue Cases-Nègres",
    aliases: ["Black Shack Alley", "Rue Cases Negres", "La Rue Cases-Nègres"],
    year: 1983,
    titleType: "Movie",
    runtimeMins: 103,
    directors: ["Euzhan Palcy"],
    genres: ["Drama", "History"],
    premise: "Build Sugar Cane Alley / Rue Cases-Nègres as Euzhan Palcy's 1983 first feature: a French-Martinican adaptation of Joseph Zobel's novel made through Sumafa Productions, Orca Productions and N.E.F./Nouvelles Éditions de Films, with Michel Loulergue and Alix Régis as delegated producers, Jean-Luc Ormières as executive producer and Christine Renaud as production director. Keep the project's difficult financing history explicit. CNC-linked sources document an avance sur recettes, while Palcy and later institutional accounts describe François Truffaut as a mentor who read the screenplay, arranged meetings and helped her find a crew rather than as the film's financier; Aimé Césaire and Fort-de-France support belong to the financing/institutional history and should not be collapsed into authorship. The film was shot in Martinique, with Film France-CNC specifically recording Fort-de-France, and reconstructs Martinique in 1930–31 rather than functioning as transparent documentary footage of either period. Palcy adapted Zobel's novel and directed; the production record credits Dominique Chapuis as director of photography, Marie-Josèphe Yoyotte as editor, Thanh/At Hoang as production designer/decorator, Isabelle Filleul as costume designer, Pierre Befve and Yves Osmu in sound, and Malavoi with additional composers/musicians for the score. Palcy's official film record identifies French and Creole dialogue and 35mm Fujicolor photography; retain those facts, but do not invent a camera body, lens package, focal lengths, stock emulsion number, exposure ratios or laboratory process not supported by the sources. In a 2010 CNC educational dossier interview reviewed by Palcy, she explains that she rejected both flat conventional period imagery and sepia nostalgia: she and Chapuis developed the image together with décor, color and costume research, worked light during production and completed the look in grading; Hoang developed wood-aging and patina techniques, while costume choices emphasized particular fabrics and colors. Teach those as coordinated production-design/cinematography/color decisions, not as evidence for one universal lighting recipe. The same interview states that music was specially composed for the film using traditional rhythms such as biguine and a Creole lullaby, while traditional workers' songs were also retained where historically appropriate; keep composed score and sourced traditional song distinct. Palcy also recalls auditioning roughly 4,000 children across Martinique to build a child ensemble representing the island's population; treat that as filmmaker testimony about casting scale, not a census of every performer considered. Current institutional records disagree on runtime metadata: Palcy's official page and the Cinémathèque française give 103 minutes, the Danish Film Institute gives 106 and the CNC visa record gives 107. Use 103 minutes as the canonical scenario runtime while preserving the discrepancy as catalog/release metadata rather than inventing a single uncontested duration. Keep the film's Venice prizes, 1984 César and later restoration/canonization downstream from production evidence.",
    sourceId: "cnc_rue_cases_negres_1983",
    sourceUrl: "https://www.cnc.fr/professionnels/visas-et-classification/56059",
    scenarioType: "martinique_location_colonial_memory_adaptation_french_creole_35mm_fujicolor_production",
    requiredChoicesSeed: {
      screenplay: ["joseph_zobel_source_euzhan_palcy_adaptation", "truffaut_mentor_role_not_final_authorship", "colonial_history_and_fictional_reconstruction_kept_distinct"],
      camera: ["dominique_chapuis_35mm_fujicolor_source_verified", "lighting_color_design_costume_grading_coordinated", "no_invented_camera_lens_stock_number_or_exposure_recipe"],
      editing: ["marie_josephe_yoyotte_editor", "martinique_locations_and_reconstructed_geography_kept_distinct", "no_invented_edit_room_chronology"],
      sound: ["pierre_befve_yves_osmu_sound_roles", "composed_music_and_traditional_song_kept_distinct", "no_invented_recorder_microphone_or_mix_hardware"],
      themes: ["film_history", "1980s", "martinique", "euzhan_palcy", "joseph_zobel", "colonial_memory", "education", "sugar_cane_labor", "french_creole", "location_production", "fort_de_france", "dominique_chapuis", "marie_josephe_yoyotte", "thanh_at_hoang", "isabelle_filleul", "35mm", "fujicolor", "color_design", "period_reconstruction", "casting", "malavoi", "traditional_music", "cnc_advance_on_receipts", "aime_cesaire"],
    },
    learningGoals: [
      "Model Sugar Cane Alley as a French-Martinican production system involving Palcy, Sumafa, Orca, N.E.F., producers, production management and public/local support rather than as a lone-auteur achievement.",
      "Separate Joseph Zobel's source novel from Euzhan Palcy's credited adaptation and from François Truffaut's documented mentorship, meetings and crew-support role.",
      "Keep the CNC avance sur recettes and Aimé Césaire/Fort-de-France support visible as financing/institutional history without turning funders or mentors into screen authors.",
      "Treat Martinique and Fort-de-France as sourced production geography while keeping the reconstructed 1930–31 world distinct from documentary evidence about either the 1930s or 1983.",
      "Use French and Creole as documented language choices and connect them to performance and cultural specificity without assuming that every line follows one linguistic rule.",
      "Keep Dominique Chapuis's cinematography, Thanh/At Hoang's design, Isabelle Filleul's costume work and grading decisions as a coordinated color-and-period system rather than attributing the image to one department alone.",
      "Understand Palcy's rejection of both flat conventional period imagery and sepia as a sourced aesthetic-production choice developed through lighting, color, décor, costume and grading.",
      "Use Hoang's documented wood aging and patina work as material production-design evidence rather than treating apparent historical wear as naturally found documentary texture.",
      "Preserve the official 35mm Fujicolor record while leaving camera model, lens package, focal lengths, stock emulsion number, exposure ratios and laboratory process unset where sources do not support them.",
      "Keep Marie-Josèphe Yoyotte's editorial authorship visible without inventing an unsupported postproduction chronology or claiming that location continuity equals real geography.",
      "Treat Palcy's account of roughly 4,000 child auditions as filmmaker testimony about casting scale and representation strategy, not as a mechanically verified count of every candidate.",
      "Separate specially composed music using traditional rhythms from historically sourced workers' songs, and keep both distinct from location/production sound.",
      "Keep Pierre Befve and Yves Osmu's credited sound work visible while avoiding invented recorder, microphone, ADR or mixing-console hardware.",
      "Preserve the 103/106/107-minute catalog discrepancy as release/catalog metadata rather than forcing all institutional records into one false runtime certainty.",
      "Keep Venice awards, the 1984 César, Sundance attention and later restoration/canonization downstream from production evidence.",
    ],
    phases: [
      { id: "development", label: "Move from Zobel's novel to a financeable first feature", player_task: "Track Palcy's adaptation, Truffaut's mentor/network role, CNC advance-on-receipts support and Césaire/Fort-de-France backing without converting support into authorship." },
      { id: "screenplay", label: "Adapt colonial memory through a child's coming-of-age structure", player_task: "Keep Zobel's source, Palcy's screenplay and the film's educational/colonial frame distinct while avoiding invented draft chronology." },
      { id: "financing", label: "Assemble a small transatlantic and local production package", player_task: "Coordinate production companies, producers, CNC support and Martinican institutional backing while leaving unsupported financing shares and exact cash-flow chronology unset." },
      { id: "casting", label: "Build a Martinican ensemble around child and elder performance", player_task: "Use Palcy's documented large-scale child audition process and credited cast without generalizing the audition count into claims about every casting decision." },
      { id: "locations", label: "Reconstruct 1930s Martinique on Martinique", player_task: "Use sourced Martinique/Fort-de-France production geography while distinguishing filmed locations, reconstructed spaces and the fictional continuity of Rivière-Salée/Fort-de-France." },
      { id: "design_costume", label: "Age materials and control the period color world", player_task: "Coordinate Hoang's patina/wood-aging methods with costume fabrics/colors and set design so historical texture is treated as produced material evidence." },
      { id: "cinematography", label: "Create a period image without defaulting to sepia nostalgia", player_task: "Use Chapuis and Palcy's documented lighting/color/design collaboration and 35mm Fujicolor record while refusing unsupported camera, lens, stock-number or exposure claims." },
      { id: "editing", label: "Shape memory, education and social geography", player_task: "Keep Yoyotte's credited editorial authorship visible and distinguish narrative continuity from the literal geography of the production." },
      { id: "sound_music", label: "Coordinate French/Creole speech, production sound and Martinican musical traditions", player_task: "Separate Befve/Osmu sound work, specially composed music using traditional rhythms and retained traditional workers' songs without inventing hardware or collapsing their authorship." },
      { id: "release_history", label: "Separate production from festival, award and restoration history", player_task: "Use the 1983 release, differing institutional runtime records, Venice/César recognition and later restoration only as downstream circulation/reception evidence." },
    ],
  },
] as const;

export function mergeChapterSixteenSugarCaneAlleyExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenSugarCaneAlleyExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_sugar_cane_alley_verified",
      source: { list_id: "manual_chapter_sixteen_sugar_cane_alley_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
