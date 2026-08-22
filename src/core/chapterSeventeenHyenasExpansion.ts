import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenHyenasExpansionDefinitions = [
  {
    id: "scenario_hyenas_1992",
    title: "Hyenas",
    originalTitle: "Hyènes",
    year: 1992,
    titleType: "Movie",
    runtimeMins: 110,
    directors: ["Djibril Diop Mambéty"],
    genres: ["Comedy", "Drama"],
    premise: "Build Hyènes as Djibril Diop Mambéty's second and final feature: a free Senegalese reworking of Friedrich Dürrenmatt's The Visit whose production history is transnational without surrendering its Senegalese authorship and Colobane-centered political imagination. Swiss Films records a May 1992 world premiere, a 35mm color Wolof original version, 110 minutes, Thelma Film AG and ADR Productions as production companies and Pierre-Alain Meier as producer. La Cinémathèque française expands the institutional network to Thelma Film AG in Zürich, ADR Productions in Paris, Maag Daan in Dakar, Georges Reinhart Productions in Zürich, Channel Four in London and Schweizer Fernsehen, and credits Marin Karmitz as producer with Pierre-Alain Meier and Alain Rozanès in delegated/executive producer roles. Images francophones separately lists Djibril Diop Mambéty, Marin Karmitz, Alain Rozanes and Pierre-Alain Meier as producers, Samba Félix Ndiaye as production director, and records a 1992 Commission Cinéma-Fiction grant of 300,000 F. Preserve those credit and finance records as institutional evidence rather than forcing them into one simplified producer hierarchy or treating the recorded grant as the film's total budget. A contemporaneous making-of record, Ninki Nanka, le prince de Colobane, places the Hyènes shoot in spring 1991. In a first-person Metrograph interview, assistant director Moussa Sene Absa says the film was shot in two periods: the first became chaotic and producers stopped the production; producer Alain Rozanès later asked Absa to help because of his close relationship with Mambéty. This interruption and reorganization are core production evidence, but do not invent exact stop dates, daily schedules, overages, insurance events or causes beyond the testimony. The finished film's principal craft credits are strongly corroborated: Matthias Kälin cinematography, Loredana Cristelli editing, Maguette Salla sound, Wasis Diop music, and Oumou Sy in costume/design roles. Credit wording varies: La Cinémathèque française identifies Oumou Sy as costume designer while Cannes lists her under production design. Preserve that institutional credit variance rather than erasing either record. Swiss Films gives 35mm, color and 110 minutes; Le Grand Action and the Lumière festival record a 1.66 presentation, while institutional and distributor records vary between roughly 108, 110 and 113 minutes. Use 110 minutes as the canonical case runtime because Swiss Films, Cannes and Film Foundation records converge there, while explicitly retaining 108/110/113 as circulation/catalogue variance. Do not infer camera body, lenses, film stock, exposure, lighting package, laboratory path or color-timing recipe from the 35mm/color/1.66 records. Mambéty's own interview provides unusually specific production intention. He says the film was meant to be continental and global, describing elephants borrowed from Maasai in Kenya, hyenas from Uganda, Senegalese people, a Japanese participant and carnival material from the French Communist Party's Fête de l'Humanité in France. Teach those as documented cross-border production elements, not as a present-day animal-handling or travel recipe; contemporary animal welfare, permitting, transport, insurance and safety rules must be independently established. Mambéty also explains that the people of Colobane wear rice sacks and wigs as a collective mask for shared responsibility, making costume an active dramatic system rather than decoration. He says the rice sacks cost little while production equipment was comparatively expensive, but this is not evidence for a complete budget breakdown. On sound, Mambéty states that he chooses sound rather than music as an ornament and describes wind, movement, image, music and sound as intrinsically connected; keep that directorial philosophy distinct from Maguette Salla's credited production-sound work and Wasis Diop's credited music. Moussa Sene Absa's production testimony and Mambéty's own comments support a process that could be immediate and adaptive, but they do not license invented improvisation percentages, shot counts or crew workflows. Festival de Cannes records Hyènes as a 1992 production from Switzerland, France and Senegal and later presented its restored version; La Cinémathèque française additionally includes Great Britain because of the production network. Film Foundation records the 2017 restoration as a Thelma Film AG project at Eclair Digital/Eclair Cinéma using the original negative. Keep original 1991-92 manufacture, 1992 Cannes/release history and the 2017 restoration as separate layers. Do not let restoration scan, cleaning, color correction or later DCP specifications overwrite original capture or post-production evidence. Do not invent camera/lens/stock data, lighting diagrams, sound hardware, animal-handling methods, exact location permits, call sheets, budget totals, lab recipes, color grades, ADR procedures or production-safety protocols not established by the sources.",
    sourceId: "swiss_films_hyenes_1992",
    sourceUrl: "https://www.swissfilms.ch/en/movie/hyenes/714482b9e80344ae9f5dd7958d0a094f",
    scenarioType: "senegalese_transnational_two_period_adaptation_35mm_costume_sound_co_production",
    requiredChoicesSeed: {
      screenplay: ["mambety_duerrenmatt_free_adaptation", "senegalese_colobane_recontextualization", "adaptation_not_literal_transcription"],
      camera: ["kaelin_35mm_color_record", "1_66_catalogue_record_kept_as_presentation_evidence", "no_invented_camera_lens_stock_exposure_lighting_or_lab_recipe"],
      editing: ["cristelli_editorial_credit", "two_period_production_not_confused_with_final_edit_structure", "restoration_not_original_editing"],
      sound: ["salla_sound_credit", "mambety_intrinsic_sound_philosophy", "wasis_diop_music_kept_distinct", "no_invented_recorder_microphone_adr_or_mix_layout"],
      themes: ["film_history", "1990s", "senegalese_cinema", "african_cinema", "transnational_co_production", "djibril_diop_mambety", "friedrich_duerrenmatt", "the_visit", "colobane", "thelma_film", "adr_productions", "maag_daan", "channel_four", "swiss_television", "matthias_kaelin", "loredana_cristelli", "maguette_salla", "wasis_diop", "oumou_sy", "two_period_shoot", "production_interruption", "35mm_color", "costume_as_dramaturgy", "sound_as_structure", "institutional_credit_variance", "runtime_variance", "restoration_boundary", "animal_welfare_boundary"],
    },
    learningGoals: [
      "Model Hyènes as a Senegalese-authored transnational co-production rather than treating European finance or partners as the source of its authorship.",
      "Keep Mambéty's free adaptation of Dürrenmatt's The Visit distinct from literal theatrical transcription and from later critical interpretation.",
      "Preserve the expanded production-company network documented by La Cinémathèque française: Thelma Film AG, ADR Productions, Maag Daan, Georges Reinhart Productions, Channel Four and Schweizer Fernsehen.",
      "Preserve institutional producer-credit variance instead of forcing Marin Karmitz, Pierre-Alain Meier, Alain Rozanès, Mambéty and Samba Félix Ndiaye into one unsupported hierarchy.",
      "Treat the Images francophones record of 300,000 F in 1992 support as one financing datum, not a total budget or a normalized present-value figure.",
      "Use the spring-1991 making-of record and Moussa Sene Absa's testimony to model two shooting periods separated by a production stoppage and later reorganization.",
      "Do not invent exact shutdown dates, overages, insurance reasons, call sheets or production causes beyond Absa's first-person account.",
      "Keep Matthias Kälin's cinematography, Loredana Cristelli's editing, Maguette Salla's sound and Wasis Diop's music as distinct credited craft systems.",
      "Preserve Oumou Sy's credit variance: costume in La Cinémathèque française and production design in Cannes, while using Mambéty's own explanation of the rice-sack costumes as direct evidence of dramatic function.",
      "Use 35mm, color and 1.66 only at the level supported by institutional records; leave camera body, lenses, stock, exposure, lighting and lab workflow unset.",
      "Retain 108/110/113-minute catalogue variation while using the repeatedly corroborated 110-minute record as the canonical gameplay runtime.",
      "Use Mambéty's account of Kenyan elephants, Ugandan hyenas, Senegalese participants, a Japanese participant and French carnival material as evidence of deliberately continental production scope.",
      "Treat historical animal sourcing as descriptive evidence only; contemporary animal welfare, permits, transport, insurance and on-set safety require independent professional controls.",
      "Distinguish Mambéty's philosophy of sound as intrinsic movement from Maguette Salla's sound credit and Wasis Diop's music authorship.",
      "Keep the 2017 original-negative restoration, scanning and color correction downstream from the film's original 1991-92 production and release evidence.",
      "Use Cannes competition and later restoration visibility as reception/preservation evidence, never as proof of undocumented on-set technique.",
      "Avoid inventing unsupported camera, lens, stock, lighting, sound-hardware, animal-handling, location-permit, budget, lab, ADR, mix or safety specifications.",
    ],
    phases: [
      { id: "adaptation_and_package", label: "Recontextualize The Visit without erasing production ownership", player_task: "Track Mambéty's screenplay, Senegalese setting and the transnational company/producer network as separate authorship, finance and production layers." },
      { id: "finance_and_partners", label: "Map co-production evidence without inventing a total budget", player_task: "Record the named companies and the 300,000 F support entry while leaving unsupported financing shares, exchange rates and total budget unset." },
      { id: "first_shoot_period", label: "Document the first spring-1991 production period", player_task: "Use the making-of record and Absa's testimony to establish the first shooting period and its later stoppage without manufacturing exact shutdown dates or causes." },
      { id: "production_reorganization", label: "Rebuild the production after the stoppage", player_task: "Treat Alain Rozanès bringing Moussa Sene Absa into the later period as evidence of production reorganization while avoiding invented crew changes or scheduling detail." },
      { id: "continental_elements", label: "Coordinate documented cross-border elements", player_task: "Keep Mambéty's Kenyan elephants, Ugandan hyenas, Senegalese participants, Japanese participant and French carnival material visible as sourced production elements, with modern animal/travel safety kept outside historical imitation." },
      { id: "costume_and_design", label: "Make collective costume carry dramatic responsibility", player_task: "Use Mambéty's rice-sack and wig explanation as direct evidence while preserving Oumou Sy's costume/production-design credit variance across institutions." },
      { id: "camera_and_format", label: "Lock only the documented image format", player_task: "Use Matthias Kälin, 35mm, color and the 1.66 catalogue record; do not infer camera body, lenses, stock, exposure, lighting diagram or laboratory route." },
      { id: "performance_and_world", label: "Build Colobane as an ensemble social system", player_task: "Coordinate the credited cast and collective staging without inventing rehearsal methods, improvisation percentages or nonprofessional-casting claims not established by the reviewed sources." },
      { id: "sound_and_music", label: "Separate sound philosophy, recording credit and music", player_task: "Use Mambéty's first-person sound philosophy, Maguette Salla's sound credit and Wasis Diop's music credit as related but non-interchangeable systems; leave hardware and mix layout unset." },
      { id: "edit_release_restoration", label: "Keep original editing, release and restoration historically separate", player_task: "Credit Loredana Cristelli's editing, preserve 108/110/113-minute catalogue variance, and prevent the 2017 restoration scan/color work from being treated as 1992 production technique." },
    ],
  },
] as const;

export function mergeChapterSeventeenHyenasExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenHyenasExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_hyenas_verified",
      source: { list_id: "manual_chapter_seventeen_hyenas_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
