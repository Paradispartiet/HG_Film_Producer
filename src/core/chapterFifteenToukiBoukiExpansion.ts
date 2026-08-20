import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterFifteenToukiBoukiExpansionDefinitions = [
  {
    id: "scenario_touki_bouki_1973",
    title: "Touki Bouki",
    originalTitle: "Touki Bouki",
    aliases: ["Journey of the Hyena", "Le voyage de la hyène", "Le voyage de la hyene"],
    year: 1973,
    titleType: "Feature",
    runtimeMins: 88,
    directors: ["Djibril Diop Mambéty"],
    genres: ["Drama", "Road Film", "Senegalese Cinema", "Postcolonial Modernism"],
    premise: "Build Touki Bouki as a 1973 Senegalese Cinegrit production case in which Djibril Diop Mambéty's independent authorship, Dakar locations, postindependence migration fantasy, associative montage and jagged sound-image relations form a specifically Senegalese modernist production system rather than a derivative copy of the French New Wave. The Film Foundation credits Mambéty as director and writer, Siro Asteni as editor, Pap Samba Sow and Georges Bracher as directors of photography, El Hadji Mbow for sound, and Cinegrit as production company; Criterion credits Mambéty as director, producer and writer, Bracher as director of photography, Asteni as editor, Aziz Diop Mambéty for costume and set design, Lamine Ba Carlos and Ousmane Sow as assistant directors, Medoune Faye as assistant producer, Emma Mennenti as assistant editor and Aziz Diop Mambéty as set photographer. Preserve the cinematography credit variance instead of silently selecting one institutional record: Film Foundation and BFI programme documentation name Pap Samba Sow and Georges Bracher, Cannes names Pap Samba Sow, while Criterion names Georges Bracher. Criterion scholarship places the approximately $30,000 debut feature inside a Senegalese film culture whose local production ambitions still depended heavily on French stock, equipment rental, processing and editing infrastructure, and warns against reducing Mambéty to an 'African Godard'. Model Mory and Anta's Paris fantasy through Dakar's material geography, rural/urban contrasts, neocolonial desire, road-film movement and the film's kinetic associative editing. Treat Josephine Baker, Mado Robin and Aminata Fall as credited vocal/music materials and El Hadji Mbow as the documented sound credit; do not invent an original-score authorship or recording chain. Preserve runtime provenance: Film Foundation and Cannes list 88 minutes, Criterion 89 minutes and BFI 95 minutes. Use 88 minutes canonically because two production/restoration institutions converge there, but retain all three listings as catalog provenance rather than inventing undocumented cuts. Keep the 2008 Cineteca di Bologna/L'Immagine Ritrovata restoration with the World Cinema Project and Mambéty family separate from original 1973 manufacture. Do not invent camera bodies, lenses, film stock, lighting ratios, microphones, exact shooting dates, laboratory workflows beyond the documented GTC Paris association, or a single technological recipe for African modernism.",
    sourceId: "film_foundation_touki_bouki_1973",
    sourceUrl: "https://www.film-foundation.org/world-cinema?page=5&sortBy=country&sortOrder=1",
    scenarioType: "senegalese_postcolonial_modernism_dakar_location_associative_montage_sound_image_disjunction_independent_production",
    requiredChoicesSeed: {
      screenplay: ["mambety_mory_anta_postindependence_migration_fantasy", "senegalese_modernity_not_derivative_new_wave", "rural_urban_neocolonial_desire_conflict"],
      camera: ["pap_samba_sow_georges_bracher_credit_provenance", "dakar_color_location_composition", "no_invented_camera_lens_stock_lighting_package"],
      editing: ["siro_asteni_associative_discontinuous_montage", "sound_image_disjunction_and_repetition", "preserve_88_89_95_runtime_provenance"],
      sound: ["el_hadji_mbow_credited_sound", "baker_robin_fall_music_voice_materials", "no_invented_microphone_recording_or_original_score_chain"],
      themes: ["film_history", "senegal", "dakar", "postindependence", "migration", "neocolonialism", "modernity", "tradition", "youth", "road_film", "associative_montage", "sound_image_disjunction", "african_modernism", "independent_production", "cinegrit", "infrastructure_dependency"],
    },
    learningGoals: [
      "Model Touki Bouki as a Senegalese Cinegrit production rooted in postindependence Dakar rather than as a derivative extension of French New Wave style.",
      "Keep Djibril Diop Mambéty's roles as director, writer and producer visible while retaining the production labor documented by Criterion, Film Foundation, Cannes and BFI.",
      "Preserve the cinematography-credit disagreement as source provenance: Film Foundation and BFI list Pap Samba Sow with Georges Bracher, Cannes lists Sow, and Criterion lists Bracher.",
      "Explain how Senegalese production ambition in the early 1970s coexisted with dependence on French film stock, equipment rental, processing and editing infrastructure.",
      "Use Mory and Anta's imagined Paris as a postcolonial migration and class desire rather than a neutral road-movie destination.",
      "Treat Dakar, its streets, shore, abattoir, port and social spaces as material environments whose contrasts organize the film's rural-urban and tradition-modernity tensions.",
      "Make Siro Asteni's discontinuous, associative montage central to the production case rather than treating the film's modernism as a director-only signature.",
      "Model repeated songs, ambient sound, drums, voices and abrupt sound-image disjunction as an authored soundtrack system while refusing an unsupported recording-chain reconstruction.",
      "Keep El Hadji Mbow's documented sound credit distinct from the credited vocal and music materials associated with Josephine Baker, Mado Robin and Aminata Fall.",
      "Keep Aziz Diop Mambéty's costume and set-design credit visible so symbolic objects, clothing and environments remain coordinated craft rather than free-floating iconography.",
      "Use documented color production and location imagery without inventing camera bodies, lenses, film stock, exposure or lighting packages.",
      "Preserve the 88/89/95-minute institutional runtime variance and the 2008 restoration as provenance layers rather than inventing undocumented versions of the 1973 production.",
      "Distinguish comparison with Eisenstein, avant-garde practice and post-New-Wave road cinema from an origin claim that erases Senegalese and African modernism.",
    ],
    phases: [
      { id: "pitch", label: "Center a Senegalese migration fantasy", player_task: "Build Mory and Anta's desire for Paris from postindependence Dakar, poverty, mobility and neocolonial aspiration without turning Senegal into a generic backdrop." },
      { id: "research", label: "Map Senegalese cinema and production dependence", player_task: "Place Cinegrit and Mambéty inside Senegal's 1960s-70s filmmaking culture while tracking the documented dependence on French stock, equipment, processing and editing facilities." },
      { id: "screenplay", label: "Turn a road plot into fractured modernity", player_task: "Organize the lovers' schemes, departures and reversals so migration desire, class performance, tradition and modernity collide rather than resolve into a conventional escape narrative." },
      { id: "performance", label: "Direct outsiders without explanatory realism", player_task: "Keep Mory and Anta physically immediate, comic, contradictory and socially marginal while allowing gesture, rhythm and environment to carry meaning beyond dialogue." },
      { id: "design", label: "Build symbols through material Dakar", player_task: "Coordinate costume, set design, the horned motorcycle, vehicles and social spaces as material production choices without treating every recurring object as a single fixed symbol." },
      { id: "cinematography", label: "Preserve credit provenance and location energy", player_task: "Use the documented Sow/Bracher credit record and color location imagery while refusing unsupported claims about camera bodies, lenses, stock or lighting recipes." },
      { id: "editing", label: "Construct meaning through associative collision", player_task: "Use Asteni's discontinuous montage, repetition and abrupt spatial-temporal shifts to collide rural life, Dakar modernity, violence, wealth and imagined Paris." },
      { id: "sound", label: "Make sound an independent montage layer", player_task: "Coordinate Mbow's sound credit with songs, voices, drums, ambience and deliberate sound-image disjunction without inventing microphones, dubbing routes or original-score authorship." },
      { id: "release", label: "Separate 1973 circulation from restoration", player_task: "Keep the 1973 production and festival history distinct from the 2008 Cineteca di Bologna/World Cinema Project restoration and preserve institutional runtime disagreement as catalog provenance." },
    ],
  },
] as const;

export function mergeChapterFifteenToukiBoukiExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterFifteenToukiBoukiExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_fifteen_touki_bouki_verified",
      source: { list_id: "manual_chapter_fifteen_touki_bouki_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
