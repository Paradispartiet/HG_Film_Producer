import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenOfficialStoryExpansionDefinitions = [
  {
    id: "scenario_the_official_story_1985",
    title: "The Official Story",
    originalTitle: "La historia oficial",
    aliases: ["The Official Version", "La Historia Oficial"],
    year: 1985,
    titleType: "Movie",
    runtimeMins: 110,
    directors: ["Luis Puenzo"],
    genres: ["Drama", "History", "Political"],
    premise: "Build The Official Story as an Argentine feature whose production belongs to the immediate democratic transition after the 1976–1983 military dictatorship while its story is set in Buenos Aires in 1983. Keep represented history and production chronology separate: Cannes catalogs the film as produced in 1984, Cine Nacional records its Argentine release on 3 April 1985, and the film's narrative follows Alicia as the official account of dictatorship collapses around her and she questions the origin of her adopted daughter. Luis Puenzo and Aída Bortnik share screenplay credit. Puenzo later explained that the project grew from research into the disappeared and the appropriation of children; Cannes records that the filmmakers hired a journalist to investigate how children were taken from their parents. Treat research as part of production labor without claiming that the fiction is a literal transcription of one case. The production system must remain visible: Cine Nacional credits Nora Puenzo, Luis Puenzo and Oscar Kramer in production, Félix Monti in cinematography, Juan Carlos Macías in editing, Abelardo Kuschnir in sound direction and Atilio Stampone in music; Pyramide identifies Historias Cinematograficas as production company and Marcelo Piñeyro as executive producer, while Cambridge's crew record identifies Piñeyro as production manager, Abel Facello in scenography, Ticky García Estévez in wardrobe, Héctor Morini on camera and Macías in mixing. Preserve these differing role labels as provenance rather than forcing artificial agreement. The shoot itself carried political risk distinct from formal censorship: in a 2015 Cannes interview Puenzo said the filmmakers were not afraid of censors, but that young Analía Castro and her mother were threatened by three men and told to abandon the film; production stopped for two or three weeks and then resumed secretly. Model that interruption as film-specific production history, not as a repeatable clandestine workflow or a generalized claim that all Argentine post-dictatorship films were made underground. Preserve Norma Aleandro, Héctor Alterio, Chunchuna Villafañe and the ensemble as performance labor inside a domestic/political structure whose power comes from accumulating testimony, classroom doubt, family conflict and public memory rather than from spectacle. Keep Félix Monti's color cinematography and the Cine Nacional Eastmancolor catalog fact visible without inventing a camera body, lens package, negative-stock emulsion, exposure strategy or lighting ratios. Keep sound direction, mixing and Stampone's score separate; María Elena Walsh's credited song material is not interchangeable with Stampone's score. Use 110 minutes canonically because both Cine Nacional and Cannes record that duration; preserve 112- and 114-minute later distributor/catalog values as presentation provenance rather than fabricating alternate cuts. Keep the 2015 4K restoration from the original negative, funded by Argentina's national film institute and presented in Cannes Classics, strictly downstream from the 1984 production and 1985 release. Do not invent exact shooting dates, daily locations, camera/lens/stock packages, microphone/recorder chains, lighting diagrams, hidden identities of real-life sources, undocumented censorship orders or causal claims that awards created the film's political meaning.",
    sourceId: "cinenacional_la_historia_oficial_1985",
    sourceUrl: "https://cinenacional.com/pelicula/la-historia-oficial",
    scenarioType: "argentina_democratic_transition_historias_cinematograficas_memory_disappeared_children_clandestine_restart_production",
    requiredChoicesSeed: {
      screenplay: ["puenzo_bortnik_shared_screenplay", "journalistic_research_into_disappeared_children", "fiction_not_literal_case_transcription"],
      camera: ["felix_monti_color_cinematography", "domestic_public_memory_space", "no_invented_camera_lens_stock_or_exposure_package"],
      editing: ["juan_carlos_macias_testimony_classroom_family_accumulation", "1984_production_1985_release_boundary", "110_canonical_preserve_112_114_catalog_variance"],
      sound: ["abelardo_kuschnir_sound_direction", "marias_elena_walsh_song_distinct_from_atilio_stampone_score", "no_invented_recorder_microphone_or_mix_chain"],
      themes: ["film_history", "1980s", "argentina", "democratic_transition", "military_dictatorship", "desaparecidos", "appropriated_children", "memory", "testimony", "education", "historias_cinematograficas", "production_risk", "secret_restart", "cinematography", "editing", "sound", "music", "restoration_provenance"],
    },
    learningGoals: [
      "Separate the story's 1983 historical moment from the film's 1984 production and 1985 Argentine release.",
      "Model Puenzo and Bortnik's shared screenplay authorship without collapsing research, writing and direction into one role.",
      "Treat the journalist-led investigation into appropriated children as sourced production research while refusing to present the fiction as one-to-one documentary transcription.",
      "Keep Historias Cinematograficas, the producers and Marcelo Piñeyro's differently cataloged executive/production-management role visible as industrial provenance.",
      "Distinguish formal censorship from the documented threat against Analía Castro and her mother and the resulting two-to-three-week production suspension.",
      "Treat the secret restart as film-specific risk history, not as a safe or repeatable production instruction.",
      "Preserve Norma Aleandro, Héctor Alterio, Chunchuna Villafañe and the ensemble as performance labor carrying political history through domestic and testimonial scenes.",
      "Keep Félix Monti's cinematography authorship and the color/Eastmancolor catalog evidence visible without inventing camera, lens, emulsion or exposure details.",
      "Keep Juan Carlos Macías's editing authorship visible in the accumulation of testimony, classroom contradiction, domestic suspicion and political recognition.",
      "Keep Abel Facello's scenography, Ticky García Estévez's wardrobe and other credited craft roles distinct from location reality and historical subject matter.",
      "Keep Abelardo Kuschnir's sound-direction credit, Macías's mixing credit and Atilio Stampone's score as separate production layers.",
      "Distinguish María Elena Walsh's credited song material from Stampone's score rather than treating all music as one undifferentiated soundtrack.",
      "Use 110 minutes canonically from Argentine/Cannes institutional records while preserving 112/114 distributor metadata without inventing alternate cuts.",
      "Keep the 2015 4K restoration from the original negative and later international canonization strictly downstream from original production evidence.",
      "Use The Official Story as an Argentine democratic-transition production system rather than collapsing Latin American political cinema into a single regional model.",
    ],
    phases: [
      { id: "pitch", label: "Build a domestic drama around the collapse of an official narrative", player_task: "Define a family-scale story in which political history enters through education, testimony, adoption records and intimate relationships rather than exposition alone." },
      { id: "research", label: "Research disappeared people and appropriated children responsibly", player_task: "Use documented investigative research and public human-rights history while keeping sources protected and refusing invented identities or one-to-one case claims." },
      { id: "screenplay", label: "Turn accumulating contradiction into dramatic inquiry", player_task: "Use the Puenzo/Bortnik collaboration to organize classroom doubt, Ana's testimony, family conflict and Alicia's search into a progressive collapse of certainty." },
      { id: "performance", label: "Carry political recognition through intimate behavior", player_task: "Direct the ensemble so denial, fear, testimony, complicity and discovery remain humanly legible without turning characters into historical labels." },
      { id: "design", label: "Differentiate domestic privilege, school and public memory spaces", player_task: "Coordinate scenography, wardrobe and real-world social texture so Alicia's protected environment can be tested against institutions and testimony." },
      { id: "cinematography", label: "Photograph memory and domestic tension without invented technical mythology", player_task: "Use Monti's credited color cinematography and spatial contrasts while leaving undocumented camera, lens, stock and exposure details unset." },
      { id: "editing", label: "Accumulate testimony without collapsing chronology", player_task: "Use Macías's editing layer to connect personal discovery to public history while preserving the difference between story time, production time and release history." },
      { id: "sound", label: "Separate dialogue, testimony, song and score", player_task: "Keep sound direction, mixing, Walsh song material and Stampone's score as distinct authored layers without inventing recording hardware or mix procedures." },
      { id: "release", label: "Separate 1985 release and awards from later restoration", player_task: "Track Argentine release, Cannes/Oscar circulation and the 2015 4K restoration as successive histories rather than using later prestige as evidence for original production decisions." },
    ],
  },
] as const;

export function mergeChapterSixteenOfficialStoryExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenOfficialStoryExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_official_story_verified",
      source: { list_id: "manual_chapter_sixteen_official_story_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
