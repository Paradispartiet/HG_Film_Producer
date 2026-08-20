import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenMephistoExpansionDefinitions = [
  {
    id: "scenario_mephisto_1981",
    title: "Mephisto",
    originalTitle: "Mephisto",
    aliases: ["Mephisto I-II"],
    year: 1981,
    titleType: "Movie",
    runtimeMins: 145,
    directors: ["István Szabó"],
    genres: ["Drama", "History"],
    premise: "Build Mephisto as a 1981 Hungarian-led Central European co-production whose production history makes cross-border television/film finance, literary adaptation, multilingual craft and state-studio infrastructure visible without letting its later Oscar status overwrite the original system. The Hungarian National Film Institute identifies Objektív Film Studio and Manfred Durniok Production as production companies, with József Marx as producer, István Szabó directing, Péter Dobai and Szabó writing, Lajos Koltai photographing and Klaus Maria Brandauer leading the cast. NFI's production-history essay records a concrete development chain: a West Berlin retrospective of Szabó's films brought German producer Manfred Durniok into contact with Szabó and Koltai; Durniok first approached them about German television work and then gave them Klaus Mann's Mephisto to adapt. Preserve that film-specific route into international co-production rather than generalizing it into a model for East–West European filmmaking. filmportal.de expands the industrial record: Mafilm Objektív Stúdió in Budapest co-produced with Manfred Durniok Produktion für Film und Fernsehen in Berlin, in association with ORF in Vienna and Hessischer Rundfunk in Frankfurt; Lajos Óvári is credited executive producer, József Marx production manager, and Sándor Mórocz, Péter Rajczy and József Pleskonics as location managers. Keep film, television and associated-broadcaster roles distinct rather than collapsing all partners into one undifferentiated financing label. Adaptation is also multi-layered. filmportal credits Szabó and Dobai for screenplay, Klaus Mann as source author, Carla Hesse and Heinz Freitag for German dialogue, Angelika Máté and Péter Máté for translation, and János Rózsa for dramaturgy. Model those as separate language/adaptation tasks rather than attributing every written word to a single author. Lajos Koltai is the principal cinematographer, with Jean Badal specifically credited for Paris photography and Gyula Kovács assisting camera. József Romvári is credited for sets, Eva Marton for set decoration, Edit Basilides for makeup, Ágnes Gyarmathy for costumes, Zsuzsa Csákány for editing, György Fék for sound, Maria Ligeti and Béla Szirmai for choreography, and Zdenkó Tamássy for music. Keep theater-performance design, period reconstruction and film production departments legible as authored craft. Use filmportal's original 3957-metre archival record at 145 minutes, 35mm, 1.66:1 and Eastmancolor as the canonical original-production presentation because it explicitly labels that record 'Original'. Preserve NFI's current 154-minute film-page value and its 140-minute restored-sales-catalog value as catalog/restoration provenance, not evidence for invented alternate cuts. NFI records a 2018 4K restoration and its sales catalogue says grading was supervised by Lajos Koltai; keep that preservation work entirely downstream from the 1981 capture. Cannes 1981 screenplay/FIPRESCI recognition and the 1982 Academy Award are also reception history, not production evidence. Do not invent camera body, lens set, film-stock sub-emulsion, exposure/lighting recipes, sound-recorder or microphone models, exact financing percentages, undocumented shooting locations, stage dimensions, dubbing workflow, production calendar or restoration operations beyond the institutional record.",
    sourceId: "nfi_mephisto_1981",
    sourceUrl: "https://nfi.hu/en/films/mephisto.html",
    scenarioType: "objektiv_durniok_hungary_west_germany_austria_broadcast_coproduction_literary_adaptation_theatre_period_production",
    requiredChoicesSeed: {
      screenplay: ["szabo_dobai_klaus_mann_adaptation", "german_dialogue_translation_and_dramaturgy_as_separate_labor", "do_not_collapse_source_novel_dialogue_translation_and_screenplay"],
      camera: ["lajos_koltai_principal_cinematography_jean_badal_paris_unit", "period_theatre_and_power_space_visual_structure", "no_invented_camera_lens_stock_or_exposure_package"],
      editing: ["zsuzsa_csakany_performance_and_political_escalation", "theatre_stage_to_social_role_transitions", "145_original_preserve_140_154_catalog_variance"],
      sound: ["gyorgy_fek_sound_authorship", "zdenko_tamassy_music_separate_from_dialogue_and_sound", "no_invented_recorder_microphone_dub_or_mix_chain"],
      themes: ["film_history", "1980s", "hungary", "west_germany", "austria", "mafilm", "objektiv_studio", "manfred_durniok", "orf", "hessischer_rundfunk", "literary_adaptation", "klaus_mann", "istvan_szabo", "lajos_koltai", "theatre", "period_design", "costume", "editing", "sound", "power_and_collaboration", "restoration_provenance"],
    },
    learningGoals: [
      "Model Mephisto as an Objektív/Mafilm and Manfred Durniok co-production with ORF/HR association rather than a nationally isolated Hungarian film or a generic European co-production.",
      "Use NFI's West Berlin retrospective/Durniok development account as film-specific evidence for how this project emerged without universalizing one East–West financing route.",
      "Keep József Marx, Lajos Óvári, Hans Prescher and the location-management team in their distinct production and broadcaster roles.",
      "Separate Klaus Mann's source novel, Szabó/Dobai screenplay, German-dialogue work, translation and János Rózsa's dramaturgy as different adaptation layers.",
      "Keep Lajos Koltai's principal cinematography and Jean Badal's specifically credited Paris photography distinct without inventing undocumented camera or lens packages.",
      "Keep József Romvári's sets, Eva Marton's decoration, Ágnes Gyarmathy's costume design and Edit Basilides's makeup visible as authored period/theatre construction.",
      "Keep Zsuzsa Csákány's editing authorship visible in the relation between theatrical performance, public role and political escalation without inventing edit-room chronology.",
      "Keep György Fék's sound work distinct from Zdenkó Tamássy's music and from German-dialogue/translation labor.",
      "Treat choreography credits as part of the staged-performance production system rather than as decoration or evidence of an unsourced rehearsal method.",
      "Use 145 minutes canonically from filmportal's explicitly original 3957-metre record while preserving NFI 140/154-minute values as catalog/restoration provenance.",
      "Keep original 35mm/1.66/Eastmancolor production separate from the 2018 4K restoration supervised in grading by Koltai.",
      "Keep Cannes and Academy recognition downstream from the 1981 production rather than using awards as evidence of how the film was made.",
      "Distinguish the film's representation of artistic compromise under dictatorship from the actual 1981 Hungarian–West German–Austrian production institutions that made the representation possible.",
      "Do not infer undocumented locations, finance shares, lighting recipes, dubbing chains or production schedules from the finished film or later restoration.",
    ],
    phases: [
      { id: "pitch", label: "Turn a politically charged novel into a Central European co-production", player_task: "Define why Klaus Mann's actor-and-power story requires a cross-border production while keeping source novel, adaptation and financing institutions conceptually separate." },
      { id: "research", label: "Map source history, theatre institutions and co-production authority", player_task: "Document the public literary/historical record, Objektív/Durniok/ORF/HR roles and period-theatre requirements without treating the fiction as a direct biographical transcript." },
      { id: "screenplay", label: "Coordinate adaptation, dialogue, translation and dramaturgy", player_task: "Keep Mann, Szabó/Dobai, Hesse/Freitag, the Máté translators and Rózsa's dramaturgy as distinct textual labor layers rather than one screenplay credit." },
      { id: "performance", label: "Build a star performance around changing public roles", player_task: "Coordinate Brandauer and the multilingual ensemble so stage acting, private behavior and political performance remain legible without inventing rehearsal methods." },
      { id: "design", label: "Construct theatre, period and power as separate designed environments", player_task: "Coordinate Romvári, Marton, Gyarmathy and Basilides across sets, decoration, costume and makeup while distinguishing historical reference from authored reconstruction." },
      { id: "cinematography", label: "Photograph performance and authority across principal and Paris units", player_task: "Keep Koltai's principal authorship and Badal's Paris credit visible while leaving undocumented camera bodies, lenses, stock variants, lighting ratios and exposure recipes unset." },
      { id: "editing", label: "Track the conversion of acting into political role", player_task: "Use Csákány's credited editing layer to connect stage performance, career acceleration and political compromise without inventing an unsupported postproduction sequence." },
      { id: "sound", label: "Separate dialogue-language labor, sound and score", player_task: "Keep Fék's sound, Tamássy's music and the credited German-dialogue/translation work distinct without inventing recorder, microphone, dubbing or mix hardware." },
      { id: "release", label: "Separate original production from festival, Oscar and restoration history", player_task: "Track the 1981 original 35mm release record, Cannes reception, 1982 Academy recognition and 2018 4K restoration as successive histories, preserving the 140/145/154-minute catalog variance without fabricating cuts." },
    ],
  },
] as const;

export function mergeChapterSixteenMephistoExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenMephistoExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_mephisto_verified",
      source: { list_id: "manual_chapter_sixteen_mephisto_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
