import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterFourteenMemoriesUnderdevelopmentExpansionDefinitions = [
  {
    id: "scenario_memories_of_underdevelopment_1968",
    title: "Memories of Underdevelopment",
    originalTitle: "Memorias del subdesarrollo",
    aliases: ["Memorias del subdesarrollo", "Memories of Underdevelopment"],
    year: 1968,
    titleType: "Feature",
    runtimeMins: 98,
    directors: ["Tomás Gutiérrez Alea"],
    genres: ["Drama", "Political Modernism", "Cuban Cinema"],
    premise: "Build Memories of Underdevelopment as a 1968 ICAIC production case in which post-revolutionary institution building, collective film labor, literary adaptation, Havana street observation, archival material, still images, subjective narration and radical montage form one Cuban production system. Criterion credits Tomás Gutiérrez Alea as director and co-screenwriter with novelist Edmundo Desnoes; Miguel Mendoza as producer; Ramón F. Suárez as director of photography; Nelson Rodríguez as editor; Julio Matilla as production designer; Elba Pérez as costume designer; Leo Brouwer as composer; Manuel Duchesne Cuzán as conductor; Pello el Afrokán as special performer; and Eugenio Vesa, Germinal Hernández and Carlos Fernández for sound. The Film Foundation identifies Instituto Cubano del Arte e Industria Cinematográficos (ICAIC) as production company and Cuba as country of production. Treat ICAIC as an industrial and cultural institution, not merely a funding label: Criterion scholarship records Gutiérrez Alea as an ICAIC cofounder and describes its filmmakers as pursuing cinema as collective endeavor while working inside a revolutionary state institution whose educational and political mandate coexisted with internal critique. The story takes place in 1961–1962 between the Bay of Pigs invasion and the October Missile Crisis, but production and release occur in 1968; keep represented historical time separate from production time. Preserve the film's evidence-rich collage method: Criterion and BFI document fragmented narrative, archival footage, documentary material, still photographs, spontaneously shot street scenes and ICAIC documentary/newsreel images incorporated into Sergio's subjective world. Use Havana, Vedado and ICAIC itself as production environments and reflexive locations where fiction, institution and contemporary history intersect. Preserve the film's self-reflexive appearance of Gutiérrez Alea and Desnoes rather than treating archival inserts as anonymous realism. Use Criterion's 98-minute black-and-white 1.66:1 edition canonically while preserving Film Foundation/Cannes 97-minute and BFI 104-minute institutional listings as runtime provenance rather than inventing unsupported alternate cuts. Keep the later Cineteca di Bologna/ICAIC World Cinema Project restoration separate from original production; Film Foundation documents restoration from original camera and sound negative plus a vintage duplicate positive, with archival-footage duplicate negatives physically embedded in the surviving element. Do not invent camera bodies, lenses, film stock, lighting ratios, microphones, exact street-shooting dates, archival-source identities beyond what institutions document, or claims that every spontaneous street image was uncontrolled documentary capture.",
    sourceId: "criterion_memories_underdevelopment_1968",
    sourceUrl: "https://www.criterion.com/films/29220-memories-of-underdevelopment",
    scenarioType: "icaic_cuban_revolutionary_modernism_archive_street_subjective_collage_collective_production",
    requiredChoicesSeed: {
      screenplay: ["desnoes_gutierrez_alea_novel_adaptation", "1961_1962_subjective_history_from_1968", "sergio_ambiguity_not_simple_propaganda"],
      camera: ["ramon_suarez_havana_black_and_white", "street_and_composed_image_coexist", "no_invented_camera_lens_stock_lighting_package"],
      editing: ["nelson_rodriguez_fragmented_collage", "fiction_archive_stills_newsreel_intercut", "preserve_97_98_104_runtime_provenance"],
      sound: ["vesa_hernandez_fernandez_credited_sound", "brouwer_music_separate_from_documentary_sound", "no_invented_microphone_or_recording_chain"],
      themes: ["film_history", "cuba", "icaic", "revolution", "underdevelopment", "bourgeois_intellectual", "bay_of_pigs", "missile_crisis", "havana", "archive", "documentary_material", "subjectivity", "montage", "collective_authorship", "state_institution", "new_latin_american_cinema"],
    },
    learningGoals: [
      "Model Memories of Underdevelopment as an ICAIC production rooted in Cuban revolutionary institution building rather than as a Latin American copy of European modernism.",
      "Separate the film's 1968 production/release from the represented 1961–1962 period between the Bay of Pigs invasion and the October Missile Crisis.",
      "Keep Gutiérrez Alea and Edmundo Desnoes's adaptation partnership visible alongside Miguel Mendoza, Ramón F. Suárez, Nelson Rodríguez, Julio Matilla, Elba Pérez, Leo Brouwer and the credited sound team.",
      "Explain ICAIC as a production institution with political and educational mandates while preserving Gutiérrez Alea's capacity for criticism inside the revolution rather than reducing the film to state propaganda or anti-state dissent.",
      "Treat the film's auteur problem historically: Gutiérrez Alea was a major authorial voice, but Criterion scholarship records his ICAIC context as a collective filmmaking endeavor.",
      "Use Havana and Vedado as material production environments tied to everyday post-revolutionary life, ICAIC's own institutional presence and Sergio's class position.",
      "Model archival footage, ICAIC documentary/newsreel images, still photographs and fiction footage as deliberately edited evidence layers rather than as interchangeable documentary truth.",
      "Treat Nelson Rodríguez's montage as a central production system for memory, history, erotic fantasy, political events and Sergio's unreliable subjectivity.",
      "Use Ramón F. Suárez's black-and-white cinematography source-boundedly while refusing unsupported camera-body, lens, stock, exposure or lighting-package claims.",
      "Keep Julio Matilla's production design and Elba Pérez's costume work visible so modernist collage does not erase coordinated craft departments.",
      "Separate Leo Brouwer's composed music and Manuel Duchesne Cuzán's conducting from Pello el Afrokán's performance and from the credited sound department rather than flattening all audio into one soundtrack effect.",
      "Preserve 97/98/104-minute institutional runtime variance and later restoration evidence as provenance rather than inventing undocumented narrative versions.",
    ],
    phases: [
      { id: "pitch", label: "Center an alienated observer inside a revolution", player_task: "Build Sergio as a flawed bourgeois intellectual whose detachment is examined rather than endorsed, while keeping the revolution and ordinary Havana life larger than his viewpoint." },
      { id: "research", label: "Map ICAIC, 1959 institution building and 1961–1962 history", player_task: "Separate ICAIC's production role in 1968 from the Bay of Pigs and Missile Crisis history represented within Sergio's memories and observations." },
      { id: "screenplay", label: "Transform Desnoes's novel into cinematic history", player_task: "Coordinate Desnoes and Gutiérrez Alea's adaptation through voice, flashback, essayistic interruption, fiction scenes and real historical materials." },
      { id: "performance", label: "Make Sergio compelling without making him authoritative", player_task: "Direct Sergio Corrieri so charm, contempt, passivity and self-deception remain legible while other people and historical images resist his interpretation." },
      { id: "design", label: "Build class position through Havana interiors and institutions", player_task: "Coordinate Matilla's spaces, Pérez's costumes, Sergio's apartment, cultural sites and ICAIC itself so class and institutional change are materially visible." },
      { id: "cinematography", label: "Join composed Havana images with mobile street observation", player_task: "Use Suárez's black-and-white photography to move between controlled subjective framing and observed public space without inventing undocumented equipment recipes." },
      { id: "editing", label: "Construct history through collision", player_task: "Use Rodríguez's montage to intercut fiction, stills, archival/newsreel material, memories and public events so Sergio's private time is continually challenged by collective history." },
      { id: "sound", label: "Keep music, performance and political sound layers distinct", player_task: "Coordinate Brouwer, Duchesne Cuzán, Pello el Afrokán and the credited sound team without inventing an undocumented recording chain or collapsing archival sound into original production sound." },
      { id: "release", label: "Separate 1968 circulation from later restoration", player_task: "Keep Cuban release and international reception distinct from the later World Cinema Project restoration built from ICAIC-preserved camera, sound and duplicate elements." },
    ],
  },
] as const;

export function mergeChapterFourteenMemoriesUnderdevelopmentExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterFourteenMemoriesUnderdevelopmentExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_fourteen_memories_underdevelopment_verified",
      source: { list_id: "manual_chapter_fourteen_memories_underdevelopment_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
